#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../huestis && cp hero-cut.webp ../../../huestis/ && cd ../.. && node build.js src/huestis.src.html ../huestis/index.html
