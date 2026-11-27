#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../polycheck && cp hero-photo.webp lab.webp logo.png logo-w.png ../../../polycheck/ && cd ../.. && node build.js src/polycheck.src.html ../polycheck/index.html
