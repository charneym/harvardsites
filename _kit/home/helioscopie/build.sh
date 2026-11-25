#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../helioscopie && cp hero.webp logo-light.png logo-dark.png ../../../helioscopie/ && cd ../.. && node build.js src/helioscopie.src.html ../helioscopie/index.html
