#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../hepako && cp hero.webp ../../../hepako/ && cd ../.. && node build.js src/hepako.src.html ../hepako/index.html
