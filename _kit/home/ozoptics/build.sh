#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../ozoptics && cp hero.webp ../../../ozoptics/ && cd ../.. && node build.js src/ozoptics.src.html ../ozoptics/index.html
