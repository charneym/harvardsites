#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../nanospectra && cp hero.webp ../../../nanospectra/ && cd ../.. && node build.js src/nanospectra.src.html ../nanospectra/index.html
