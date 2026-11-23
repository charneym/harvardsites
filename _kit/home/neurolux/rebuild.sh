#!/bin/sh
# rebuild /neurolux/ from the region files
cd "$(dirname "$0")/../../.." && python3 _kit/home/neurolux/assemble.py && node _kit/build.js _kit/src/neurolux.src.html neurolux/index.html && cp _kit/home/neurolux/hero.webp neurolux/
