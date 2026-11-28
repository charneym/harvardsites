#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../redcloud-capital && cp hero.jpg ../../../redcloud-capital/ && cd ../.. && node build.js src/redcloud-capital.src.html ../redcloud-capital/index.html
