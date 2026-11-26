#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../hpf-elektronik && cp hero.webp ../../../hpf-elektronik/ && cd ../.. && node build.js src/hpf-elektronik.src.html ../hpf-elektronik/index.html
