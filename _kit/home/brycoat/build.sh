#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../brycoat && cp hero.webp ../../../brycoat/ && cd ../.. && node build.js src/brycoat.src.html ../brycoat/index.html
