#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../tas-chambers && cp hero-photo.webp tas-logo.png ../../../tas-chambers/ && cd ../.. && node build.js src/tas-chambers.src.html ../tas-chambers/index.html
