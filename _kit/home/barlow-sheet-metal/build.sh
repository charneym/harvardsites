#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../barlow-sheet-metal && cp hero.webp ../../../barlow-sheet-metal/ && cd ../.. && node build.js src/barlow-sheet-metal.src.html ../barlow-sheet-metal/index.html
