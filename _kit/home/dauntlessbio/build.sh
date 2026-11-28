#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../dauntlessbio && cp hero.webp ../../../dauntlessbio/ && cd ../.. && node build.js src/dauntlessbio.src.html ../dauntlessbio/index.html
