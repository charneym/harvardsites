#!/bin/sh
# rebuild /evecxia/ from the parts
cd "$(dirname "$0")" && python3 assemble.py && cd ../.. && node build.js src/evecxia.src.html ../evecxia/index.html && cp home/evecxia/hero.webp home/evecxia/fav.png home/evecxia/logo.png ../evecxia/
