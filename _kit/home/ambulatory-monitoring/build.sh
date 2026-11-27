#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../ambulatory-monitoring && cp hero-cut.webp ami-mark.png ../../../ambulatory-monitoring/ && cd ../.. && node build.js src/ambulatory-monitoring.src.html ../ambulatory-monitoring/index.html
