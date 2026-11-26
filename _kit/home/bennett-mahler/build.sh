#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../bennett-mahler && cp hero.webp ../../../bennett-mahler/ && cd ../.. && node build.js src/bennett-mahler.src.html ../bennett-mahler/index.html
