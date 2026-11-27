#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../axenic && cp hero-cut.webp ../../../axenic/ && cd ../.. && node build.js src/axenic.src.html ../axenic/index.html
