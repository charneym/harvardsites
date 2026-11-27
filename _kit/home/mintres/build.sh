#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../mintres && cp hero-cut.webp ../../../mintres/ && cd ../.. && node build.js src/mintres.src.html ../mintres/index.html
