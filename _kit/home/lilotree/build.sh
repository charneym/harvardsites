#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../lilotree && cp hero.webp ../../../lilotree/ && cd ../.. && node build.js src/lilotree.src.html ../lilotree/index.html
