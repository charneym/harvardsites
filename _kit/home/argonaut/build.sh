#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../argonaut && cp hero-cut.webp ../../../argonaut/ && cd ../.. && node build.js src/argonaut.src.html ../argonaut/index.html
