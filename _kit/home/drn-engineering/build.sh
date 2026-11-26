#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../drn-engineering && cp hero.webp ../../../drn-engineering/ && cd ../.. && node build.js src/drn-engineering.src.html ../drn-engineering/index.html
