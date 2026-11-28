#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../gmjmachine && cp hero-cut.webp ../../../gmjmachine/ && cd ../.. && node build.js src/gmjmachine.src.html ../gmjmachine/index.html
