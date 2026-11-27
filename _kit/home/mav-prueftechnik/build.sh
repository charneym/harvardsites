#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../mav-prueftechnik && cp hero-cut.webp ../../../mav-prueftechnik/ && cd ../.. && node build.js src/mav-prueftechnik.src.html ../mav-prueftechnik/index.html
