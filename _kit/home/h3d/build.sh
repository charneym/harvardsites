#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../h3d && cp hero-cut.webp ../../../h3d/ && cd ../.. && node build.js src/h3d.src.html ../h3d/index.html
