#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../ceatec && cp hero.webp ../../../ceatec/ && cd ../.. && node build.js src/ceatec.src.html ../ceatec/index.html
