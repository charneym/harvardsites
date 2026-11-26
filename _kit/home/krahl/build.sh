#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../krahl && cp hero.webp ../../../krahl/ && cd ../.. && node build.js src/krahl.src.html ../krahl/index.html
