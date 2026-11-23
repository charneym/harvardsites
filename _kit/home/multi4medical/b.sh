#!/bin/sh
set -e
D=$(cd "$(dirname "$0")" && pwd); K=$D/../..
python3 $D/assemble.py && mkdir -p $K/../multi4medical && cp $D/hero.webp $K/../multi4medical/ && node $K/build.js $K/src/multi4medical.src.html $K/../multi4medical/index.html
