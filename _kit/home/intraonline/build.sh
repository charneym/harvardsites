#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../intraonline && cp hero.webp ../../../intraonline/ && cd ../.. && node build.js src/intraonline.src.html ../intraonline/index.html
