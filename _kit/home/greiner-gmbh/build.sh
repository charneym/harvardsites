#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../greiner-gmbh && cp hero.webp ../../../greiner-gmbh/ && cd ../.. && node build.js src/greiner-gmbh.src.html ../greiner-gmbh/index.html
