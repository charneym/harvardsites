#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../omicronlaser && cp hero.webp ../../../omicronlaser/ && cd ../.. && node build.js src/omicronlaser.src.html ../omicronlaser/index.html
