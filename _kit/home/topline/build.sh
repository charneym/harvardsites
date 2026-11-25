#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../topline && cp hero.webp logo-d.svg logo-l.svg fav.svg ../../../topline/ && cd ../.. && node build.js src/topline.src.html ../topline/index.html
