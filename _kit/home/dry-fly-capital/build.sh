#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../dry-fly-capital && cp hero.jpg ../../../dry-fly-capital/ && cd ../.. && node build.js src/dry-fly-capital.src.html ../dry-fly-capital/index.html
