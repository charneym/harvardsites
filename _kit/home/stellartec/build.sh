#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../stellartec && cp hero.webp ../../../stellartec/ && cd ../.. && node build.js src/stellartec.src.html ../stellartec/index.html
