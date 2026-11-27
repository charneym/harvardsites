#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../sequoiasci && cp hero-cut.webp seq-logo.png ../../../sequoiasci/ && cd ../.. && node build.js src/sequoiasci.src.html ../sequoiasci/index.html
