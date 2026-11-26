#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../precisiondippings && cp hero.webp ../../../precisiondippings/ && cd ../.. && node build.js src/precisiondippings.src.html ../precisiondippings/index.html
