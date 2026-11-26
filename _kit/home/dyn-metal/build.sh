#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../dyn-metal && cp hero.webp ../../../dyn-metal/ && cd ../.. && node build.js src/dyn-metal.src.html ../dyn-metal/index.html
