#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../ebp-global && cp hero-cut.webp ../../../ebp-global/ && cd ../.. && node build.js src/ebp-global.src.html ../ebp-global/index.html
