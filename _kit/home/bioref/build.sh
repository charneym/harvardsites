#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../bioref && cp hero.webp ../../../bioref/ && cd ../.. && node build.js src/bioref.src.html ../bioref/index.html
