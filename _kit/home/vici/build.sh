#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../vici && cp hero.webp ../../../vici/ && cd ../.. && node build.js src/vici.src.html ../vici/index.html
