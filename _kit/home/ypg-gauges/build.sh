#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../ypg-gauges && cp hero.webp ../../../ypg-gauges/ && cd ../.. && node build.js src/ypg-gauges.src.html ../ypg-gauges/index.html
