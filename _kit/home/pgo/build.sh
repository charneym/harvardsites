#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../pgo && cp hero-cut.webp ../../../pgo/ && cd ../.. && node build.js src/pgo.src.html ../pgo/index.html
