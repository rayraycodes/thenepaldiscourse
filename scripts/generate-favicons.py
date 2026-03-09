#!/usr/bin/env python3
"""Generate square favicon variants from wide logo. Centers logo in square canvas to avoid stretching."""

from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Install Pillow: pip install Pillow")
    exit(1)

PUBLIC = Path(__file__).parent.parent / "public"
SRC = PUBLIC / "tndfavicon.png"
SIZES = [16, 32, 48, 180]  # 16, 32 for tabs; 48 for some browsers; 180 for apple-touch-icon


def main():
    img = Image.open(SRC).convert("RGBA")
    w, h = img.size

    # Use the larger dimension for square canvas (preserves full logo)
    size = max(w, h)
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    x = (size - w) // 2
    y = (size - h) // 2
    canvas.paste(img, (x, y), img)

    for s in SIZES:
        out = canvas.resize((s, s), Image.Resampling.LANCZOS)
        name = f"favicon-{s}x{s}.png"
        out.save(PUBLIC / name)
        print(f"Created {name}")


if __name__ == "__main__":
    main()
