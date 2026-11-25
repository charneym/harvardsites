#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../rdpe && cp hero.webp logo-d.png ../../../rdpe/ && cd ../.. && node build.js src/rdpe.src.html ../rdpe/index.html
