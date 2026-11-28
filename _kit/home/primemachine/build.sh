#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../primemachine && cp hero-cut.webp ../../../primemachine/ && cd ../.. && node build.js src/primemachine.src.html ../primemachine/index.html
