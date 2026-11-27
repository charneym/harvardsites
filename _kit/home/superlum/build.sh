#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../superlum && cp hero-cut.webp ../../../superlum/ && cd ../.. && node build.js src/superlum.src.html ../superlum/index.html
