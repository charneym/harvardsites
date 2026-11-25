#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../mtrplus && cp hero.webp ../../../mtrplus/ && cd ../.. && node build.js src/mtrplus.src.html ../mtrplus/index.html
