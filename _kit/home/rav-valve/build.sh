#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../rav-valve && cp hero.webp hero_b.webp ../../../rav-valve/ && cd ../.. && node build.js src/rav-valve.src.html ../rav-valve/index.html
