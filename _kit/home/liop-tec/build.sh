#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../liop-tec && cp hero.webp ../../../liop-tec/ && cd ../.. && node build.js src/liop-tec.src.html ../liop-tec/index.html
