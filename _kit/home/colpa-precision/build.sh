#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../colpa-precision && cp hero-cut.webp ../../../colpa-precision/ && cd ../.. && node build.js src/colpa-precision.src.html ../colpa-precision/index.html
