#!/bin/sh
cd "$(dirname "$0")" && python3 assemble.py && cp hero.webp fav.png ../../../regenbiomedical/ && cd ../.. && node build.js src/regenbiomedical.src.html ../regenbiomedical/index.html
