#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../teknomedical-b && cp hero.webp ../../../teknomedical-b/ && cd ../.. && node build.js src/teknomedical-b.src.html ../teknomedical-b/index.html
