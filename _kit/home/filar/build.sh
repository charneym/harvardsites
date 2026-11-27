#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../filar && cp hero-cut.webp ../../../filar/ && cd ../.. && node build.js src/filar.src.html ../filar/index.html
