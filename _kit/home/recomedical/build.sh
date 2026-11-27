#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../recomedical && cp hero.webp ../../../recomedical/ && cd ../.. && node build.js src/recomedical.src.html ../recomedical/index.html
