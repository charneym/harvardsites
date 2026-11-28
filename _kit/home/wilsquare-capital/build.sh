#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../wilsquare-capital && cp hero.jpg ../../../wilsquare-capital/ && cd ../.. && node build.js src/wilsquare-capital.src.html ../wilsquare-capital/index.html
