#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../microharmonics && cp hero-cut.webp ../../../microharmonics/ && cd ../.. && node build.js src/microharmonics.src.html ../microharmonics/index.html
