#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../motrona && cp hero.webp ../../../motrona/ && cd ../.. && node build.js src/motrona.src.html ../motrona/index.html
