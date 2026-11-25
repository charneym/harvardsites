#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../aktek && cd ../.. && node build.js src/aktek.src.html ../aktek/index.html
