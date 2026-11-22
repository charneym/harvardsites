#!/bin/sh
# rebuild /vulintus/ from the region files
cd "$(dirname "$0")/../../.." && python3 _kit/home/vulintus/assemble.py && node _kit/build.js _kit/src/vulintus.src.html vulintus/index.html && cp _kit/home/vulintus/hero.webp _kit/home/vulintus/mototrak.webp vulintus/
