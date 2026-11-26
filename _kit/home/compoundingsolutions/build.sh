#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../compoundingsolutions && cp hero.webp logo.webp ../../../compoundingsolutions/ && cd ../.. && node build.js src/compoundingsolutions.src.html ../compoundingsolutions/index.html
