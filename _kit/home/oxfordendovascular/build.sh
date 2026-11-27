#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../oxfordendovascular && cp hero.webp ../../../oxfordendovascular/ && cd ../.. && node build.js src/oxfordendovascular.src.html ../oxfordendovascular/index.html
