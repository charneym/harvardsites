#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../apsley-eng && cp hero.webp ../../../apsley-eng/ && cd ../.. && node build.js src/apsley-eng.src.html ../apsley-eng/index.html
