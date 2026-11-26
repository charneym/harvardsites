#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../oeggmbh && cp hero.webp ../../../oeggmbh/ && cd ../.. && node build.js src/oeggmbh.src.html ../oeggmbh/index.html
