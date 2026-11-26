#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../akaoptics && cp hero.webp ../../../akaoptics/ && cd ../.. && node build.js src/akaoptics.src.html ../akaoptics/index.html
