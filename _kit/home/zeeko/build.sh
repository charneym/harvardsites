#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../zeeko && cp hero-cut.webp ../../../zeeko/ && cd ../.. && node build.js src/zeeko.src.html ../zeeko/index.html
