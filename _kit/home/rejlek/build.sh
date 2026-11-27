#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../rejlek && cp hero-photo.webp logo.png logo-l.png ../../../rejlek/ && cd ../.. && node build.js src/rejlek.src.html ../rejlek/index.html
