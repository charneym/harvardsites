#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../bock-mf && cp hero.webp ../../../bock-mf/ && cd ../.. && node build.js src/bock-mf.src.html ../bock-mf/index.html
