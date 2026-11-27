#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../huneo && cp hero-cut.webp huneo-mark.png ../../../huneo/ && cd ../.. && node build.js src/huneo.src.html ../huneo/index.html
