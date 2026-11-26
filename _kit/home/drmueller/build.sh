#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../drmueller && cp hero.webp ../../../drmueller/ && cd ../.. && node build.js src/drmueller.src.html ../drmueller/index.html
