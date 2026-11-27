#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../cryogenic && cp hero-cut.webp ../../../cryogenic/ && cd ../.. && node build.js src/cryogenic.src.html ../cryogenic/index.html
