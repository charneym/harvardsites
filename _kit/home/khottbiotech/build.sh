#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../khottbiotech && cp hero.webp ../../../khottbiotech/ && cd ../.. && node build.js src/khottbiotech.src.html ../khottbiotech/index.html
