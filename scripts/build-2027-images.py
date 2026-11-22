#!/usr/bin/env python3
"""Build responsive AVIF + WebP images for the 2027 home page.

Page images: originals in assets-src/2027/ -> public/2027/img/<name>-<width>.{avif,webp}.
Gallery: photos listed (in order, with alt text) in assets-src/2027/gallery.json, originals in assets-src/2027/gallery/
(fetch them first with scripts/fetch-2027-gallery.py) -> public/2027/gallery/, and the
gallery markup between <!-- gallery:start --> and <!-- gallery:end --> in index.html.

Re-run after adding or replacing an image (gallery images that already exist are kept):

    python3 scripts/build-2027-images.py

Needs Pillow with AVIF support (Pillow >= 11).
"""
import html
import json
import re
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets-src" / "2027"
OUT = ROOT / "public" / "2027" / "img"
GALLERY_SRC = SRC / "gallery"
GALLERY_OUT = ROOT / "public" / "2027" / "gallery"
INDEX = ROOT / "index.html"

# name -> (source file, widths). Widths cover ~1x and ~2x of the rendered size.
PHOTOS = {
    "trailer-poster": ("photos/trailer_poster.jpg", [640, 1280]),
    "impact": ("photos/impact_mit.jpg", [800, 1400, 2000]),
    "topic-climate": ("photos/topic_climate.jpg", [640, 1280]),
    "topic-cities": ("photos/topic_cities.jpg", [640, 1280]),
    "topic-culture": ("photos/topic_culture.jpg", [640, 1280]),
    "topic-capital": ("photos/topic_capital.jpg", [640, 1280]),
    "plenary": ("photos/plenary_opening.jpg", [640, 1200]),
}
SPEAKERS = [
    "peterblair", "swarnimwagle", "ayushiroy", "hiteshhathi", "sameermaskey", "pukarhamal",
    "davidsislen", "williamwisser", "anupkaphle", "sanjaymanandhar", "samjhana", "michaelfoley",
]
LOGOS = {"logo": ("brand/tnd-2027.png", [190, 380]), "logo-mark-white": ("brand/tnd-mark-white.png", [104, 208])}

GALLERY_THUMBS = [400, 800]
GALLERY_LARGE = 1600  # longest edge of the full-size viewer image
GALLERY_VISIBLE = 12  # shown before "Show all"; divisible by the 2/3/4-column grids
THUMB_SIZES = "(max-width: 640px) 50vw, (max-width: 980px) 33vw, 310px"


def open_image(path: Path) -> Image.Image:
    im = ImageOps.exif_transpose(Image.open(path))  # phone photos are often stored rotated
    return im.convert("RGBA") if im.mode in ("RGBA", "LA", "P") else im.convert("RGB")


def save(im: Image.Image, out: Path, name: str, width: int, size: tuple[int, int] | None = None) -> None:
    w, h = size or (min(width, im.width), round(im.height * min(width, im.width) / im.width))
    r = im.resize((w, h), Image.LANCZOS) if (w, h) != im.size else im
    has_alpha = r.mode == "RGBA"
    r.save(out / f"{name}-{width}.avif", quality=40 if not has_alpha else 70, speed=4)
    r.save(out / f"{name}-{width}.webp", quality=70 if not has_alpha else 88, method=6)


def build_page_images() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    jobs = dict(PHOTOS)
    jobs.update({f"speaker-{s}": (f"speakers/{s}.jpg", [320, 480]) for s in SPEAKERS})
    jobs.update(LOGOS)
    for name, (src, widths) in jobs.items():
        im = open_image(SRC / src)
        for w in widths:
            save(im, OUT, name, w)
        print(f"{name}: {im.width}x{im.height} -> {widths}")


def build_gallery() -> None:
    manifest = json.loads((SRC / "gallery.json").read_text())
    photos = manifest["photos"]  # display order: panels, then audience, then other moments
    GALLERY_OUT.mkdir(parents=True, exist_ok=True)
    items = []
    for n, photo in enumerate(photos):
        slug = photo["id"]
        src = GALLERY_SRC / photo["file"]
        im = None
        if not (GALLERY_OUT / f"{slug}-{GALLERY_LARGE}.webp").exists():
            im = open_image(src)
            for w in GALLERY_THUMBS:
                save(im, GALLERY_OUT, slug, w)
            scale = min(1, GALLERY_LARGE / max(im.size))
            save(im, GALLERY_OUT, slug, GALLERY_LARGE, (round(im.width * scale), round(im.height * scale)))
        thumb = Image.open(GALLERY_OUT / f"{slug}-{GALLERY_THUMBS[-1]}.webp")
        items.append(gallery_item(photo, thumb.size, extra=n >= GALLERY_VISIBLE))
        print(f"gallery {n + 1:>2}/{len(photos)} {photo['group']:<8} {photo['title']}" + (" (new)" if im else ""))
    write_gallery_markup(items, len(photos))
    known = {p["file"] for p in photos + manifest["skip"]}  # skip: duplicates of listed photos
    orphans = {p.name for p in GALLERY_SRC.glob("*") if not p.name.startswith("_")} - known
    if orphans:
        print(f"note: {len(orphans)} downloaded photo(s) are not in gallery.json yet: {sorted(orphans)}")


def gallery_item(photo: dict, thumb_size: tuple[int, int], extra: bool) -> str:
    base = f"/2027/gallery/{photo['id']}"
    srcset = lambda ext: ", ".join(f"{base}-{w}.{ext} {w}w" for w in GALLERY_THUMBS)  # noqa: E731
    alt = html.escape(photo["alt"])
    return (
        f'<li{" class=\"gl-extra\"" if extra else ""}><a class="gl-item" href="2027/gallery/{photo["id"]}-{GALLERY_LARGE}.webp">'
        f'<picture><source type="image/avif" srcset="{srcset("avif")}" sizes="{THUMB_SIZES}">'
        f'<source type="image/webp" srcset="{srcset("webp")}" sizes="{THUMB_SIZES}">'
        f'<img src="{base}-{GALLERY_THUMBS[0]}.webp" width="{thumb_size[0]}" height="{thumb_size[1]}" '
        f'loading="lazy" decoding="async" alt="{alt}"></picture></a></li>'
    )


def write_gallery_markup(items: list[str], count: int) -> None:
    icon = lambda d: f'<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="{d}"></path></svg>'  # noqa: E731
    block = "\n".join([
        "<!-- gallery:start (generated by scripts/build-2027-images.py from assets-src/2027/gallery.json) -->",
        '<ul class="gallery-grid" id="gallery-grid">',
        *items,
        "</ul>",
        f'<div class="gl-actions"><button type="button" class="pill gl-toggle" aria-expanded="false" aria-controls="gallery-grid" '
        f'data-more="Show all {count} photos" data-less="Show fewer photos">Show all {count} photos</button></div>',
        '<dialog class="lightbox" aria-label="Photo viewer">',
        f'<div class="lb-bar"><p class="lb-count" aria-hidden="true"></p><button type="button" class="lb-btn lb-close" aria-label="Close photo viewer">{icon("M6 6l12 12M18 6L6 18")}</button></div>',
        '<figure class="lb-figure"><picture><source class="lb-avif" type="image/avif"><img class="lb-img" alt=""></picture><figcaption class="lb-caption"></figcaption></figure>',
        f'<button type="button" class="lb-btn lb-prev" aria-label="Previous photo">{icon("M15 5l-7 7 7 7")}</button>',
        f'<button type="button" class="lb-btn lb-next" aria-label="Next photo">{icon("M9 5l7 7-7 7")}</button>',
        '<p class="vh lb-live" aria-live="polite"></p>',
        "</dialog>",
        "<!-- gallery:end -->",
    ])
    page = INDEX.read_text(encoding="utf-8")
    page, n = re.subn(r"<!-- gallery:start.*?<!-- gallery:end -->", lambda _: block, page, flags=re.S)
    if n != 1:
        raise SystemExit("index.html needs exactly one <!-- gallery:start --> … <!-- gallery:end --> block")
    INDEX.write_text(page, encoding="utf-8")


def main() -> None:
    build_page_images()
    build_gallery()


if __name__ == "__main__":
    main()
