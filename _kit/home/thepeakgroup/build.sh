#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../thepeakgroup && cp hero.webp logo-l.png ../../../thepeakgroup/ && cd ../.. && node build.js src/thepeakgroup.src.html ../thepeakgroup/index.html
