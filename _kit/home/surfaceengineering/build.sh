#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../surfaceengineering && cp hero-cut.webp ../../../surfaceengineering/ && cd ../.. && node build.js src/surfaceengineering.src.html ../surfaceengineering/index.html
