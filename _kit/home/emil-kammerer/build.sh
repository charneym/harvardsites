#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../emil-kammerer && cp hero.webp ../../../emil-kammerer/ && cd ../.. && node build.js src/emil-kammerer.src.html ../emil-kammerer/index.html
