#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../enigmabio && cp hero.webp ../../../enigmabio/ && cd ../.. && node build.js src/enigmabio.src.html ../enigmabio/index.html
