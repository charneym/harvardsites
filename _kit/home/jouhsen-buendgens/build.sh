#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../jouhsen-buendgens && cp hero-cut.webp ../../../jouhsen-buendgens/ && cd ../.. && node build.js src/jouhsen-buendgens.src.html ../jouhsen-buendgens/index.html
