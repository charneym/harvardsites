#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../neuraltrak && cp hero.webp ../../../neuraltrak/ && cd ../.. && node build.js src/neuraltrak.src.html ../neuraltrak/index.html
