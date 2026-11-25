#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../eocoatings && cp hero-a.webp hero-b.webp optics.webp ../../../eocoatings/ && cd ../.. && node build.js src/eocoatings.src.html ../eocoatings/index.html
