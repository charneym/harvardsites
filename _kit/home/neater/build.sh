#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../neater && cp hero.webp ../../../neater/ && cd ../.. && node build.js src/neater.src.html ../neater/index.html
