#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../dr-eschke && cp hero.webp ../../../dr-eschke/ && cd ../.. && node build.js src/dr-eschke.src.html ../dr-eschke/index.html
