#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../aavinue && cp hero.webp ../../../aavinue/ && cd ../.. && node build.js src/aavinue.src.html ../aavinue/index.html
