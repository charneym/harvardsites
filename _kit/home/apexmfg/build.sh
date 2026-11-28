#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../apexmfg && cp hero-cut.webp ../../../apexmfg/ && cd ../.. && node build.js src/apexmfg.src.html ../apexmfg/index.html
