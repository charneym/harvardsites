#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../aikonhealth && cp hero.webp ../../../aikonhealth/ && cd ../.. && node build.js src/aikonhealth.src.html ../aikonhealth/index.html
