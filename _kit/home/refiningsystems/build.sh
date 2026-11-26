#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../refiningsystems && cp hero.webp ../../../refiningsystems/ && cd ../.. && node build.js src/refiningsystems.src.html ../refiningsystems/index.html
