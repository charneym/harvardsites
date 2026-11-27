#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../ring-group && cp hero-cut.webp ../../../ring-group/ && cd ../.. && node build.js src/ring-group.src.html ../ring-group/index.html
