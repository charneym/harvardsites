#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../gimac && cp hero.webp ../../../gimac/ && cd ../.. && node build.js src/gimac.src.html ../gimac/index.html
