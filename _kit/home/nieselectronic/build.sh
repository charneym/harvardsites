#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../nieselectronic && cp hero.webp ../../../nieselectronic/ && cd ../.. && node build.js src/nieselectronic.src.html ../nieselectronic/index.html
