#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../rav-valve && cp hero-photo.jpg ../../../rav-valve/ && cd ../.. && node build.js src/rav-valve.src.html ../rav-valve/index.html
