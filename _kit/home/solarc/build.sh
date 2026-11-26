#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../solarc && cp hero.webp ../../../solarc/ && cd ../.. && node build.js src/solarc.src.html ../solarc/index.html
