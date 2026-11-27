#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../brimrose && cp hero-cut.webp ../../../brimrose/ && cd ../.. && node build.js src/brimrose.src.html ../brimrose/index.html
