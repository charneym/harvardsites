#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../mdti && cd ../.. && node build.js src/mdti.src.html ../mdti/index.html
