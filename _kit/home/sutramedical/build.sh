#!/bin/sh
cd "$(dirname "$0")" && python3 assemble.py && cp hero.webp mark.png fav.png ../../../sutramedical/ && cd ../.. && node build.js src/sutramedical.src.html ../sutramedical/index.html
