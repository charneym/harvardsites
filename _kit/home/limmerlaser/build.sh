#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../limmerlaser && cp hero.webp ../../../limmerlaser/ && cd ../.. && node build.js src/limmerlaser.src.html ../limmerlaser/index.html
