#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../rbdinstruments && cp hero-cut.webp ../../../rbdinstruments/ && cd ../.. && node build.js src/rbdinstruments.src.html ../rbdinstruments/index.html
