#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../eurospray && cp hero-cut.webp ../../../eurospray/ && cd ../.. && node build.js src/eurospray.src.html ../eurospray/index.html
