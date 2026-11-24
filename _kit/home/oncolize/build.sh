#!/bin/sh
cd "$(dirname "$0")" && python3 assemble.py && cp hero.webp fav.png ../../../oncolize/ && cd ../.. && node build.js src/oncolize.src.html ../oncolize/index.html
