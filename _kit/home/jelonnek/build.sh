#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../jelonnek && cp hero.webp ../../../jelonnek/ && cd ../.. && node build.js src/jelonnek.src.html ../jelonnek/index.html
