#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../jfa && cp hero.webp ../../../jfa/ && cd ../.. && node build.js src/jfa.src.html ../jfa/index.html
