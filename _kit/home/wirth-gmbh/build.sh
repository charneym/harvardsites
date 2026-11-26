#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../wirth-gmbh && cp hero.webp logo.png logo-lt.png ../../../wirth-gmbh/ && cd ../.. && node build.js src/wirth-gmbh.src.html ../wirth-gmbh/index.html
