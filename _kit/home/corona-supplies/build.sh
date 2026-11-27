#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../corona-supplies && cp hero-cut.webp ../../../corona-supplies/ && cd ../.. && node build.js src/corona-supplies.src.html ../corona-supplies/index.html
