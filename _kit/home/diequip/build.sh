#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../diequip && cp hero.webp ../../../diequip/ && cd ../.. && node build.js src/diequip.src.html ../diequip/index.html
