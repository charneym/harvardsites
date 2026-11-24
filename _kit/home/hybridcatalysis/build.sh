#!/bin/sh
cd "$(dirname "$0")" && python3 assemble.py && cp hero.webp skids.webp reactors.webp team.webp fav.png ../../../hybridcatalysis/ && cd ../.. && node build.js src/hybridcatalysis.src.html ../hybridcatalysis/index.html
