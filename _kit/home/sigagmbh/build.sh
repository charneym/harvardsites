#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../sigagmbh && cp hero.webp logo.webp logo-w.webp ../../../sigagmbh/ && cd ../.. && node build.js src/sigagmbh.src.html ../sigagmbh/index.html
