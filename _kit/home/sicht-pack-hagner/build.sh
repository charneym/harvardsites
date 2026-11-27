#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../sicht-pack-hagner && cp hero-cut.webp ../../../sicht-pack-hagner/ && cd ../.. && node build.js src/sicht-pack-hagner.src.html ../sicht-pack-hagner/index.html
