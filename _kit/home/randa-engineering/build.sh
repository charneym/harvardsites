#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../randa-engineering && cp hero-cut.webp ../../../randa-engineering/ && cd ../.. && node build.js src/randa-engineering.src.html ../randa-engineering/index.html
