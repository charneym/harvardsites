#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../budatec && cp hero.webp ../../../budatec/ && cd ../.. && node build.js src/budatec.src.html ../budatec/index.html
