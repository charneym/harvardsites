#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../mos-electronic && cp hero.webp ../../../mos-electronic/ && cd ../.. && node build.js src/mos-electronic.src.html ../mos-electronic/index.html
