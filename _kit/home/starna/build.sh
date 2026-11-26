#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../starna && cp hero.webp ../../../starna/ && cd ../.. && node build.js src/starna.src.html ../starna/index.html
