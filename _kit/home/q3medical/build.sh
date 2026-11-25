#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../q3medical && cp hero.webp logo-light.png logo-dark.png ../../../q3medical/ && cd ../.. && node build.js src/q3medical.src.html ../q3medical/index.html
