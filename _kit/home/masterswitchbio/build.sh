#!/bin/sh
set -e
cd "$(dirname "$0")" && python3 assemble.py && cd ../../.. && node _kit/build.js _kit/src/masterswitchbio.src.html masterswitchbio/index.html && cp _kit/home/masterswitchbio/hero.webp _kit/home/masterswitchbio/fav.svg masterswitchbio/
