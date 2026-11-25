#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../covisionmedical && cp hero.webp ../../../covisionmedical/ && cd ../.. && node build.js src/covisionmedical.src.html ../covisionmedical/index.html
