#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../reinhardt && cp hero.webp ../../../reinhardt/ && cd ../.. && node build.js src/reinhardt.src.html ../reinhardt/index.html
