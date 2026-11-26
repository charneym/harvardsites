#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../spitzenberger && cp hero.webp ../../../spitzenberger/ && cd ../.. && node build.js src/spitzenberger.src.html ../spitzenberger/index.html
