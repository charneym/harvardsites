#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../dienes && cp hero.webp ../../../dienes/ && cd ../.. && node build.js src/dienes.src.html ../dienes/index.html
