#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../b12-capital-partners && cp hero.jpg ../../../b12-capital-partners/ && cd ../.. && node build.js src/b12-capital-partners.src.html ../b12-capital-partners/index.html
