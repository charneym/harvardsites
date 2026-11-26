#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../amcsysteme && cp hero.webp ../../../amcsysteme/ && cd ../.. && node build.js src/amcsysteme.src.html ../amcsysteme/index.html
