#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../raloidtool && cp hero-cut.webp ../../../raloidtool/ && cd ../.. && node build.js src/raloidtool.src.html ../raloidtool/index.html
