#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../lifescienceplus && cp hero-cut.webp ../../../lifescienceplus/ && cd ../.. && node build.js src/lifescienceplus.src.html ../lifescienceplus/index.html
