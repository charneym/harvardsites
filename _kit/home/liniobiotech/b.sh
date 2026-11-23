#!/bin/sh
set -e
D=$(cd "$(dirname "$0")" && pwd); K=$D/../..
python3 $D/assemble.py && mkdir -p $K/../liniobiotech && cp $D/hero.webp $D/fav.png $K/../liniobiotech/ && node $K/build.js $K/src/liniobiotech.src.html $K/../liniobiotech/index.html
