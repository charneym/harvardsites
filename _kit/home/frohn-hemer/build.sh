#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../frohn-hemer && cp hero.webp ../../../frohn-hemer/ && cd ../.. && node build.js src/frohn-hemer.src.html ../frohn-hemer/index.html
