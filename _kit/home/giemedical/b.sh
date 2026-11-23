#!/bin/sh
# rebuild: assemble regions, build the page, copy the hero, logo and favicon
set -e
D=$(cd "$(dirname "$0")" && pwd); K=$D/../..
python3 $D/assemble.py && mkdir -p $K/../giemedical && cp $D/hero.webp $D/logo-w.png $D/fav.png $K/../giemedical/ && node $K/build.js $K/src/giemedical.src.html $K/../giemedical/index.html
