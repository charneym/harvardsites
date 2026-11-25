#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../charlesausten && cp hero.webp ../../../charlesausten/ && cd ../.. && node build.js src/charlesausten.src.html ../charlesausten/index.html
