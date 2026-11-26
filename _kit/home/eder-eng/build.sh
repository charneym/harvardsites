#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../eder-eng && cp hero.webp ../../../eder-eng/ && cd ../.. && node build.js src/eder-eng.src.html ../eder-eng/index.html
