#!/bin/sh
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../lindisbiotech && cp hero.webp fav.svg ../../../lindisbiotech/ && cd ../.. && node build.js src/lindisbiotech.src.html ../lindisbiotech/index.html
