#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../gctool && cp hero.webp ../../../gctool/ && cd ../.. && node build.js src/gctool.src.html ../gctool/index.html
