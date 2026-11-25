#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../distechnology && cp hero.webp ../../../distechnology/ && cd ../.. && node build.js src/distechnology.src.html ../distechnology/index.html
