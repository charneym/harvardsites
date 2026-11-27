#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../meduloc && cp hero-cut.webp meduloc-logo.png meduloc-logo-w.png ../../../meduloc/ && cd ../.. && node build.js src/meduloc.src.html ../meduloc/index.html
