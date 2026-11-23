#!/bin/sh
# rebuild /ultramend/ from the parts
cd "$(dirname "$0")" && python3 assemble.py && cd ../.. && node build.js src/ultramend.src.html ../ultramend/index.html && mkdir -p ../ultramend && cp home/ultramend/hero.webp ../ultramend/
