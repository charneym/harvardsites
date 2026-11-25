#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../nxt91 && cp hero.webp ../../../nxt91/ && cd ../.. && node build.js src/nxt91.src.html ../nxt91/index.html
