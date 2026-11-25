#!/usr/bin/env python3
"""Medical Index hero (HOME_BRIEF update 2a: the firm's own photography). Medical Index's own studio photograph of its MI-SF
X-ray protective glasses (medical-index.de/images/Brillen-Halter/MI-SF.jpg, 4608x3456, shot on pure white #FFFFFF with its
own soft floor reflection). Cropped with a wide margin of pure white on every side (checked: every border pixel is 255) and
downscaled, so on the site's white page ink it has no box edge or seam at all (DP/DJ). Usage: python3 hero.py MI-SF.jpg"""
import sys
from PIL import Image
im = Image.open(sys.argv[1]).convert('RGB').crop((160, 690, 4220, 2520))
im = im.resize((1900, round(1900 * 1830 / 4060)), Image.LANCZOS)
im.save('hero.webp', quality=90, method=6)
