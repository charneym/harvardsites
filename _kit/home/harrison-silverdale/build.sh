#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../harrison-silverdale && cp hero.webp ../../../harrison-silverdale/ && cd ../.. && node build.js src/harrison-silverdale.src.html ../harrison-silverdale/index.html
