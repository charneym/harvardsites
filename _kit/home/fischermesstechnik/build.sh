#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../fischermesstechnik && cp hero.webp ../../../fischermesstechnik/ && cd ../.. && node build.js src/fischermesstechnik.src.html ../fischermesstechnik/index.html
