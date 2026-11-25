#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../ergokomfort && cp hero.webp ../../../ergokomfort/ && cd ../.. && node build.js src/ergokomfort.src.html ../ergokomfort/index.html
