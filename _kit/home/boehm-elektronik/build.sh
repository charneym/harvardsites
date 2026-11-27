#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../boehm-elektronik && cp hero-cut.webp ../../../boehm-elektronik/ && cd ../.. && node build.js src/boehm-elektronik.src.html ../boehm-elektronik/index.html
