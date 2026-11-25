#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../rittinghaus && cp hero.webp ../../../rittinghaus/ && cd ../.. && node build.js src/rittinghaus.src.html ../rittinghaus/index.html
