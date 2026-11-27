#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../auditmicro && cp hero-cut.webp ../../../auditmicro/ && cd ../.. && node build.js src/auditmicro.src.html ../auditmicro/index.html
