#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../kremo-werke && cp hero.webp ../../../kremo-werke/ && cd ../.. && node build.js src/kremo-werke.src.html ../kremo-werke/index.html
