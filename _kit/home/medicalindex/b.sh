#!/bin/sh
set -e
D=$(cd "$(dirname "$0")" && pwd); K=$D/../..
python3 $D/assemble.py && mkdir -p $K/../medicalindex && cp $D/hero.webp $K/../medicalindex/ && node $K/build.js $K/src/medicalindex.src.html $K/../medicalindex/index.html
