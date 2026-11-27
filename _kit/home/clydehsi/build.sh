#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../clydehsi && cp hero-cut.webp ../../../clydehsi/ && cd ../.. && node build.js src/clydehsi.src.html ../clydehsi/index.html
