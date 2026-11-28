#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../gutseehealth && cp hero.webp ../../../gutseehealth/ && cd ../.. && node build.js src/gutseehealth.src.html ../gutseehealth/index.html
