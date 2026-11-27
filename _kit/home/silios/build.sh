#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../silios && cp hero-cut.webp ../../../silios/ && cd ../.. && node build.js src/silios.src.html ../silios/index.html
