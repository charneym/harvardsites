#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../ifastdiagnostics && cp hero.webp ../../../ifastdiagnostics/ && cd ../.. && node build.js src/ifastdiagnostics.src.html ../ifastdiagnostics/index.html
