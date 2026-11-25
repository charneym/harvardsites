#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../hammerlit && cp hero.webp logo-light.png logo-dark.png ../../../hammerlit/ && cd ../.. && node build.js src/hammerlit.src.html ../hammerlit/index.html
