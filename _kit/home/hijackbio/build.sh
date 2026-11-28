#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../hijackbio && cp hero.webp ../../../hijackbio/ && cd ../.. && node build.js src/hijackbio.src.html ../hijackbio/index.html
