#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../feller-at && cp hero.webp ../../../feller-at/ && cd ../.. && node build.js src/feller-at.src.html ../feller-at/index.html
