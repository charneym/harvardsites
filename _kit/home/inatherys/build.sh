#!/bin/sh
# rebuild /inatherys/ from the parts
cd "$(dirname "$0")" && python3 assemble.py && cd ../.. && mkdir -p ../inatherys && node build.js src/inatherys.src.html ../inatherys/index.html && cp home/inatherys/hero.webp home/inatherys/fav.png home/inatherys/logo-w.svg home/inatherys/logo-hdr.svg ../inatherys/
