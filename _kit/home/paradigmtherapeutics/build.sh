#!/bin/sh
set -e
H=$(cd "$(dirname "$0")" && pwd); K=$H/../..; R=$K/..
python3 "$H/assemble.py"
mkdir -p "$R/paradigmtherapeutics"
node "$K/build.js" "$K/src/paradigmtherapeutics.src.html" "$R/paradigmtherapeutics/index.html"
cp "$H/hero.webp" "$H/mark.svg" "$H/word.svg" "$H/lockup.svg" "$R/paradigmtherapeutics/"
