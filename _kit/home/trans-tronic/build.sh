#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../trans-tronic && cp hero.webp ../../../trans-tronic/ && cd ../.. && node build.js src/trans-tronic.src.html ../trans-tronic/index.html
