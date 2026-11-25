#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../vortexoc && cp hero-a.webp hero-b.webp logo.webp dicing.webp ../../../vortexoc/ && cd ../.. && node build.js src/vortexoc.src.html ../vortexoc/index.html
