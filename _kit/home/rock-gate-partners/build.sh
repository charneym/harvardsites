#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../rock-gate-partners && cp hero.jpg ../../../rock-gate-partners/ && cd ../.. && node build.js src/rock-gate-partners.src.html ../rock-gate-partners/index.html
