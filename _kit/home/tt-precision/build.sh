#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../tt-precision && cp hero-cut.webp ../../../tt-precision/ && cd ../.. && node build.js src/tt-precision.src.html ../tt-precision/index.html
