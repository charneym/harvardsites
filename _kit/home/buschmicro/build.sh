#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../buschmicro && cp hero.webp p-*.webp ../../../buschmicro/ && cd ../.. && node build.js src/buschmicro.src.html ../buschmicro/index.html
