#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../emaled && cp hero.webp ../../../emaled/ && cd ../.. && node build.js src/emaled.src.html ../emaled/index.html
