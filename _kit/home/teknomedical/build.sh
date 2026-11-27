#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../teknomedical && cp hero.webp ../../../teknomedical/ && cd ../.. && node build.js src/teknomedical.src.html ../teknomedical/index.html
