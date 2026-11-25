#!/bin/sh
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../biogenera && cp hero.webp ../../../biogenera/ && cd ../.. && node build.js src/biogenera.src.html ../biogenera/index.html
