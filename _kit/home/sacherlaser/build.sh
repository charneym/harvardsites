#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../sacherlaser && cp hero.webp ../../../sacherlaser/ && cd ../.. && node build.js src/sacherlaser.src.html ../sacherlaser/index.html
