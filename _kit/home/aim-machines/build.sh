#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../aim-machines && cp hero-cut.webp ../../../aim-machines/ && cd ../.. && node build.js src/aim-machines.src.html ../aim-machines/index.html
