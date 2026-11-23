#!/bin/sh
# rebuild: assemble regions, build the page, copy the hero
set -e
D=$(cd "$(dirname "$0")" && pwd); K=$D/../..
python3 $D/assemble.py && mkdir -p $K/../theneolight && cp $D/hero.webp $K/../theneolight/ && node $K/build.js $K/src/theneolight.src.html $K/../theneolight/index.html
