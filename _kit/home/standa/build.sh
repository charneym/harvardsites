#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../standa && cp hero-cut.webp ../../../standa/ && cd ../.. && node build.js src/standa.src.html ../standa/index.html
