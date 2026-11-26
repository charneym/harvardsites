#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../mtt-extrusion && cp hero.webp ../../../mtt-extrusion/ && cd ../.. && node build.js src/mtt-extrusion.src.html ../mtt-extrusion/index.html
