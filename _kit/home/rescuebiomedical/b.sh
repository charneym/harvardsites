#!/bin/sh
# rebuild: assemble regions, build the page, copy the hero
set -e
D=$(cd "$(dirname "$0")" && pwd); K=$D/../..
python3 $D/assemble.py && mkdir -p $K/../rescuebiomedical && cp $D/hero.webp $K/../rescuebiomedical/ && node $K/build.js $K/src/rescuebiomedical.src.html $K/../rescuebiomedical/index.html
