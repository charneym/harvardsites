#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../rottler-ruediger && cp hero-cut.webp ../../../rottler-ruediger/ && cd ../.. && node build.js src/rottler-ruediger.src.html ../rottler-ruediger/index.html
