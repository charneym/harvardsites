#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../cetatest && cp hero.webp ../../../cetatest/ && cd ../.. && node build.js src/cetatest.src.html ../cetatest/index.html
