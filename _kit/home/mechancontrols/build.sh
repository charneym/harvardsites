#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../mechancontrols && cp hero.webp ../../../mechancontrols/ && cd ../.. && node build.js src/mechancontrols.src.html ../mechancontrols/index.html
