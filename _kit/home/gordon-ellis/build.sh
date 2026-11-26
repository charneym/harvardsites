#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../gordon-ellis && cp hero.webp ../../../gordon-ellis/ && cd ../.. && node build.js src/gordon-ellis.src.html ../gordon-ellis/index.html
