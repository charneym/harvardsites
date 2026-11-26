#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../deva-controls && cp hero.webp ../../../deva-controls/ && cd ../.. && node build.js src/deva-controls.src.html ../deva-controls/index.html
