#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../autech && cp hero-cut.webp ../../../autech/ && cd ../.. && node build.js src/autech.src.html ../autech/index.html
