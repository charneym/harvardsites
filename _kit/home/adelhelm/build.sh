#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../adelhelm && cp hero.webp ../../../adelhelm/ && cd ../.. && node build.js src/adelhelm.src.html ../adelhelm/index.html
