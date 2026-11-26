#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../komlas && cp hero.webp ../../../komlas/ && cd ../.. && node build.js src/komlas.src.html ../komlas/index.html
