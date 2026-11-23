#!/bin/sh
# rebuild /liferecoverysystems/ from the parts
cd "$(dirname "$0")" && python3 assemble.py && cd ../.. && node build.js src/liferecoverysystems.src.html ../liferecoverysystems/index.html && cp home/liferecoverysystems/hero.webp home/liferecoverysystems/fav.png ../liferecoverysystems/
