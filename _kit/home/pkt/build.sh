#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../pkt && cp hero.webp ../../../pkt/ && cd ../.. && node build.js src/pkt.src.html ../pkt/index.html
