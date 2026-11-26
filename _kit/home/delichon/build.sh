#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && cd ../.. && node build.js src/delichon.src.html ../delichon/index.html
