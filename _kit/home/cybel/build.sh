#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../cybel && cp hero-cut.webp ../../../cybel/ && cd ../.. && node build.js src/cybel.src.html ../cybel/index.html
