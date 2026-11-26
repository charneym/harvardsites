#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../delfi-rehab && cp hero.webp logo.png ../../../delfi-rehab/ && cd ../.. && node build.js src/delfi-rehab.src.html ../delfi-rehab/index.html
