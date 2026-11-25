#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && cd ../.. && node build.js src/aquiluspharma.src.html ../aquiluspharma/index.html
