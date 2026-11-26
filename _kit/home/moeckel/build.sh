#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../moeckel && cp hero.webp ../../../moeckel/ && cd ../.. && node build.js src/moeckel.src.html ../moeckel/index.html
