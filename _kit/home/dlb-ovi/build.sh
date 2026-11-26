#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../dlb-ovi && cp hero.webp ../../../dlb-ovi/ && cd ../.. && node build.js src/dlb-ovi.src.html ../dlb-ovi/index.html
