#!/bin/sh
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../hineautomation && cp hero-photo.webp ../../../hineautomation/ && cd ../.. && node build.js src/hineautomation.src.html ../hineautomation/index.html
