#!/bin/sh
# rebuild /cerflux/ from the parts
set -e
cd "$(dirname "$0")"; python3 assemble.py; cd ../..
node build.js src/cerflux.src.html ../cerflux/index.html; cp home/cerflux/hero.webp ../cerflux/hero.webp
