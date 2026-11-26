#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../engelantriebe && cp hero.webp ../../../engelantriebe/ && cd ../.. && node build.js src/engelantriebe.src.html ../engelantriebe/index.html
