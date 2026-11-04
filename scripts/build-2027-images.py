#!/usr/bin/env python3
"""Build responsive AVIF + WebP images for the 2027 home page.

Reads originals from assets-src/2027/ and writes public/2027/img/<name>-<width>.{avif,webp}.
Re-run after adding or replacing a source image:

    python3 scripts/build-2027-images.py

Needs Pillow with AVIF support (Pillow >= 11).
"""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets-src" / "2027"
OUT = ROOT / "public" / "2027" / "img"

# name -> (source file, widths). Widths cover ~1x and ~2x of the rendered size.
PHOTOS = {
    "teaser": ("photos/p30.jpg", [480, 900]),
    "trailer-poster": ("photos/trailer_poster.jpg", [640, 1280]),
    "impact": ("photos/p29.jpg", [480, 900]),
    "topic-climate": ("photos/topic_climate.jpg", [400, 800]),
    "topic-cities": ("photos/topic_cities.jpg", [400, 800]),
    "topic-culture": ("photos/topic_culture.jpg", [400, 800]),
    "topic-capital": ("photos/topic_capital.jpg", [400, 800]),
    "story-village": ("photos/story_village.jpg", [640, 1120]),
    "story-bridge": ("photos/story_bridge.jpg", [640, 1120]),
    "plenary": ("photos/p22.jpg", [640, 1200]),
    "gallery-panel": ("photos/p04.jpg", [640, 1160]),
    "gallery-lectern": ("photos/p08.jpg", [480, 900]),
    "gallery-slides": ("photos/p15.jpg", [480, 900]),
    "gallery-reception": ("photos/p02.jpg", [480, 900]),
    "gallery-ai": ("photos/p14.jpg", [480, 900]),
}
SPEAKERS = [
    "peterblair", "swarnimwagle", "ayushiroy", "hiteshhathi", "sameermaskey", "pukarhamal",
    "davidsislen", "williamwisser", "anupkaphle", "sanjaymanandhar", "samjhana", "michaelfoley",
]
LOGOS = {"logo": ("brand/tnd-2027.png", [190, 380]), "logo-white": ("brand/tnd-2027-white.png", [240, 480])}


def save(im: Image.Image, name: str, width: int) -> None:
    w = min(width, im.width)
    h = round(im.height * w / im.width)
    r = im.resize((w, h), Image.LANCZOS) if w != im.width else im
    has_alpha = r.mode == "RGBA"
    if not has_alpha:
        r = r.convert("RGB")
    r.save(OUT / f"{name}-{width}.avif", quality=40 if not has_alpha else 70, speed=4)
    r.save(OUT / f"{name}-{width}.webp", quality=70 if not has_alpha else 88, method=6)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    jobs = dict(PHOTOS)
    jobs.update({f"speaker-{s}": (f"speakers/{s}.jpg", [320, 480]) for s in SPEAKERS})
    jobs.update(LOGOS)
    for name, (src, widths) in jobs.items():
        im = Image.open(SRC / src)
        im = im.convert("RGBA") if im.mode in ("RGBA", "LA", "P") else im.convert("RGB")
        for w in widths:
            save(im, name, w)
        print(f"{name}: {im.width}x{im.height} -> {widths}")


if __name__ == "__main__":
    main()
