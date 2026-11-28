#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../xaphe && cp hero.webp ../../../xaphe/ && cd ../.. && node build.js src/xaphe.src.html ../xaphe/index.html
