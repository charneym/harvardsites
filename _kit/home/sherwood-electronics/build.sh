#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../sherwood-electronics && cp hero.webp ../../../sherwood-electronics/ && cd ../.. && node build.js src/sherwood-electronics.src.html ../sherwood-electronics/index.html
