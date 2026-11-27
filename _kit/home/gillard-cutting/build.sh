#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../gillard-cutting && cp hero-cut.webp ../../../gillard-cutting/ && cd ../.. && node build.js src/gillard-cutting.src.html ../gillard-cutting/index.html
