#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../staclear && cp hero-cut.webp staclear-logo.png staclear-logo-w.png ../../../staclear/ && cd ../.. && node build.js src/staclear.src.html ../staclear/index.html
