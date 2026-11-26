#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../gk-smb && cp hero.webp ../../../gk-smb/ && cd ../.. && node build.js src/gk-smb.src.html ../gk-smb/index.html
