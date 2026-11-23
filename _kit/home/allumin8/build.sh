#!/bin/sh
# rebuild /allumin8/ from the parts
cd "$(dirname "$0")" && python3 assemble.py && cd ../.. && node build.js src/allumin8.src.html ../allumin8/index.html && cp home/allumin8/hero.webp home/allumin8/fav.png home/allumin8/logo-w.png ../allumin8/
