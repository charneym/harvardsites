#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../tec-microsystems && cp hero.webp ../../../tec-microsystems/ && cd ../.. && node build.js src/tec-microsystems.src.html ../tec-microsystems/index.html
