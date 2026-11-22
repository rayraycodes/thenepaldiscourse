#!/usr/bin/env python3
"""Download The Nepal Discourse 2026 photo album from its public Google Drive folder.

Originals land in assets-src/2027/gallery/<drive id>.<ext> (git-ignored, ~300 MB),
with _album.json listing every photo's Drive id and file name. Files already
downloaded are skipped. Afterwards run:

    python3 scripts/build-2027-images.py

Usage:

    python3 scripts/fetch-2027-gallery.py
"""
import html
import json
import re
import subprocess
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

from PIL import Image

FOLDER_ID = "1X1dGEKf8pgaWZ-V4PGj96m9-RGc4Ifh3"
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets-src" / "2027" / "gallery"
IMAGE_EXT = {".jpg", ".jpeg", ".png"}


def list_album() -> list[dict]:
    """Photos in the folder, via Drive's public embedded folder view (no sign-in needed)."""
    page = subprocess.run(
        ["curl", "-sfL", f"https://drive.google.com/embeddedfolderview?id={FOLDER_ID}"],
        check=True, capture_output=True, text=True,
    ).stdout
    entries = re.findall(r'id="entry-([A-Za-z0-9_-]+)".*?class="flip-entry-title">([^<]*)<', page, re.S)
    photos = []
    for file_id, title in entries:
        title = html.unescape(title).strip()
        ext = Path(title).suffix.lower()
        if ext in IMAGE_EXT:
            photos.append({"id": file_id, "title": title, "file": f"{file_id}{ext}"})
    return photos


def download(photo: dict) -> str:
    dest = OUT / photo["file"]
    if dest.exists() and dest.stat().st_size > 0:
        return "kept"
    part = dest.with_name(dest.name + ".part")
    subprocess.run(
        ["curl", "-sfL", "-o", str(part), f"https://drive.google.com/uc?export=download&id={photo['id']}"],
        check=True,
    )
    try:
        Image.open(part).verify()  # Drive answers with an HTML page if a file is not public
    except Exception as error:
        part.unlink(missing_ok=True)
        raise RuntimeError(f"{photo['title']} ({photo['id']}) is not an image: {error}") from error
    part.rename(dest)
    return "downloaded"


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    photos = list_album()
    with ThreadPoolExecutor(max_workers=6) as pool:
        results = list(pool.map(download, photos))
    (OUT / "_album.json").write_text(json.dumps(photos, indent=1, ensure_ascii=False) + "\n")
    size = sum((OUT / p["file"]).stat().st_size for p in photos) / 1e6
    print(f"{len(photos)} photos ({results.count('downloaded')} new) in {OUT.relative_to(ROOT)}, {size:.0f} MB")


if __name__ == "__main__":
    main()
