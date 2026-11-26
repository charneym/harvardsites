#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../heimelectronic && cp hero.webp ../../../heimelectronic/ && cd ../.. && node build.js src/heimelectronic.src.html ../heimelectronic/index.html
