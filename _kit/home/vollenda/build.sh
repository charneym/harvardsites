#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../vollenda && cp hero.webp ../../../vollenda/ && cd ../.. && node build.js src/vollenda.src.html ../vollenda/index.html
