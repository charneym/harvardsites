#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../entoxsciences && cp hero.webp logo.webp logo-w.webp ../../../entoxsciences/ && cd ../.. && node build.js src/entoxsciences.src.html ../entoxsciences/index.html
