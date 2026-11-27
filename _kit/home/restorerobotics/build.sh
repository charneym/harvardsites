#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../restorerobotics && cp hero-cut.webp rr-logo.png rr-logo-w.png ../../../restorerobotics/ && cd ../.. && node build.js src/restorerobotics.src.html ../restorerobotics/index.html
