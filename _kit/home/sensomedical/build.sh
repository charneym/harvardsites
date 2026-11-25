#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../sensomedical && cp hero.webp logo.png ../../../sensomedical/ && cd ../.. && node build.js src/sensomedical.src.html ../sensomedical/index.html
