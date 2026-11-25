#!/bin/sh
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../porphychem && cp hero.webp ../../../porphychem/ && cd ../.. && node build.js src/porphychem.src.html ../porphychem/index.html
