#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../allresist && cp hero.webp ../../../allresist/ && cd ../.. && node build.js src/allresist.src.html ../allresist/index.html
