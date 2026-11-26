#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../rsd-technik && cp hero.webp ../../../rsd-technik/ && cd ../.. && node build.js src/rsd-technik.src.html ../rsd-technik/index.html
