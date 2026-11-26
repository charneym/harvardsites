#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../ostech && cp hero.webp ../../../ostech/ && cd ../.. && node build.js src/ostech.src.html ../ostech/index.html
