#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../desoutter && cp hero.webp ../../../desoutter/ && cd ../.. && node build.js src/desoutter.src.html ../desoutter/index.html
