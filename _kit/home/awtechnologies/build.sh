#!/bin/sh
# rebuild: assemble regions, build the page, copy the hero
set -e
D=$(cd "$(dirname "$0")" && pwd); K=$D/../..
python3 $D/assemble.py && mkdir -p $K/../awtechnologies && cp $D/hero.webp $K/../awtechnologies/ && node $K/build.js $K/src/awtechnologies.src.html $K/../awtechnologies/index.html
