#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../handix && cp hero-cut.webp ../../../handix/ && cd ../.. && node build.js src/handix.src.html ../handix/index.html
