#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../cmc-instruments && cp hero.webp ../../../cmc-instruments/ && cd ../.. && node build.js src/cmc-instruments.src.html ../cmc-instruments/index.html
