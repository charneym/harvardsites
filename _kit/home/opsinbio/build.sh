#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../opsinbio && cp hero-cut.webp opsin-logo.png opsin-logo-w.png ../../../opsinbio/ && cd ../.. && node build.js src/opsinbio.src.html ../opsinbio/index.html
