#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../tomco && cp hero-cut.webp ../../../tomco/ && cd ../.. && node build.js src/tomco.src.html ../tomco/index.html
