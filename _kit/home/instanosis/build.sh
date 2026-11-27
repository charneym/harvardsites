#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../instanosis && cp hero-cut.webp ../../../instanosis/ && cd ../.. && node build.js src/instanosis.src.html ../instanosis/index.html
