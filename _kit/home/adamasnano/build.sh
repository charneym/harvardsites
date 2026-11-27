#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../adamasnano && cp hero-cut.webp adamas-logo.png ../../../adamasnano/ && cd ../.. && node build.js src/adamasnano.src.html ../adamasnano/index.html
