#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../labfacility && cp hero.webp ../../../labfacility/ && cd ../.. && node build.js src/labfacility.src.html ../labfacility/index.html
