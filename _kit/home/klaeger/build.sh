#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../klaeger && cp hero.webp ../../../klaeger/ && cd ../.. && node build.js src/klaeger.src.html ../klaeger/index.html
