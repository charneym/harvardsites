#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../paramountmachine && cp hero-cut.webp ../../../paramountmachine/ && cd ../.. && node build.js src/paramountmachine.src.html ../paramountmachine/index.html
