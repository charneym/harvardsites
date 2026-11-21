#!/bin/sh
set -e
cd "$(dirname "$0")" && python3 assemble.py && cd ../.. && node build.js src/cancure.src.html ../cancure/index.html && cp home/cancure/hero.webp ../cancure/
