#!/bin/sh
# rebuild: assemble regions, build the page, copy the hero
set -e
D=$(cd "$(dirname "$0")" && pwd); K=$D/../..
python3 $D/assemble.py && cp $D/hero.webp $K/../pumpinheart/ && node $K/build.js $K/src/pumpinheart.src.html $K/../pumpinheart/index.html
