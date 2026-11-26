#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../pakumed && cp hero.webp logo.webp ../../../pakumed/ && cd ../.. && node build.js src/pakumed.src.html ../pakumed/index.html
