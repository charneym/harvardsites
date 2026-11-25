#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../medfibers && cp hero.webp ../../../medfibers/ && cd ../.. && node build.js src/medfibers.src.html ../medfibers/index.html
