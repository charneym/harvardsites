#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../atnberlin && cp hero.webp ../../../atnberlin/ && cd ../.. && node build.js src/atnberlin.src.html ../atnberlin/index.html
