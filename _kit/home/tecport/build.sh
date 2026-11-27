#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../tecport && cp hero-cut.webp ../../../tecport/ && cd ../.. && node build.js src/tecport.src.html ../tecport/index.html
