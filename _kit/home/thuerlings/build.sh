#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../thuerlings && cp hero.webp ../../../thuerlings/ && cd ../.. && node build.js src/thuerlings.src.html ../thuerlings/index.html
