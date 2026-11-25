#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../paxtherapeutics && cp hero.webp logo.png ../../../paxtherapeutics/ && cd ../.. && node build.js src/paxtherapeutics.src.html ../paxtherapeutics/index.html
