#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../trestle-optics && cp hero.webp ../../../trestle-optics/ && cd ../.. && node build.js src/trestle-optics.src.html ../trestle-optics/index.html
