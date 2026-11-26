#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../wolco && cp hero.webp ../../../wolco/ && cd ../.. && node build.js src/wolco.src.html ../wolco/index.html
