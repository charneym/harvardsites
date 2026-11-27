#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../precision-laser-scanning && cp hero-cut.webp ../../../precision-laser-scanning/ && cd ../.. && node build.js src/precision-laser-scanning.src.html ../precision-laser-scanning/index.html
