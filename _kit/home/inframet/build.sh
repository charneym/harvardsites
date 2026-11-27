#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../inframet && cp hero-cut.webp ../../../inframet/ && cd ../.. && node build.js src/inframet.src.html ../inframet/index.html
