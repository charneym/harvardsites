#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../acomhal && cp hero.webp ../../../acomhal/ && cd ../.. && node build.js src/acomhal.src.html ../acomhal/index.html
