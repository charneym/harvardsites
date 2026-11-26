#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../appiani && cp hero.webp ../../../appiani/ && cd ../.. && node build.js src/appiani.src.html ../appiani/index.html
