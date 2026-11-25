#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../bmtfluid && cp hero.webp ../../../bmtfluid/ && cd ../.. && node build.js src/bmtfluid.src.html ../bmtfluid/index.html
