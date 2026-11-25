#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../schuechl && cp hero.webp ../../../schuechl/ && cd ../.. && node build.js src/schuechl.src.html ../schuechl/index.html
