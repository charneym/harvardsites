#!/bin/sh
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../pacdna && cp hero.webp ../../../pacdna/ && cd ../.. && node build.js src/pacdna.src.html ../pacdna/index.html
