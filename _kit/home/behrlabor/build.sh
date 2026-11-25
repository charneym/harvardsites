#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../behrlabor && cp hero.webp ../../../behrlabor/ && cd ../.. && node build.js src/behrlabor.src.html ../behrlabor/index.html
