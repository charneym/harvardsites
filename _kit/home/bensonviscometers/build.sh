#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../bensonviscometers && cp hero-cut.webp ../../../bensonviscometers/ && cd ../.. && node build.js src/bensonviscometers.src.html ../bensonviscometers/index.html
