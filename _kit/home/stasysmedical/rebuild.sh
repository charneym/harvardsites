#!/bin/sh
# rebuild /stasysmedical/ from the region files
cd "$(dirname "$0")/../.." && python3 home/stasysmedical/assemble.py && node build.js src/stasysmedical.src.html ../stasysmedical/index.html && cp home/stasysmedical/hero.webp home/stasysmedical/logo.svg home/stasysmedical/fav.png ../stasysmedical/
