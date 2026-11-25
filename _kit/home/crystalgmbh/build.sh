#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../crystalgmbh && cp hero.webp ../../../crystalgmbh/ && cd ../.. && node build.js src/crystalgmbh.src.html ../crystalgmbh/index.html
