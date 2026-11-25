#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../polarinstruments && cp hero-a.webp hero-b.webp ../../../polarinstruments/ && cd ../.. && node build.js src/polarinstruments.src.html ../polarinstruments/index.html
