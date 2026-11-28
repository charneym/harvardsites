#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../autoimmunitybio && cp hero-cut.webp abs-logo.png abs-logo-w.png ../../../autoimmunitybio/ && cd ../.. && node build.js src/autoimmunitybio.src.html ../autoimmunitybio/index.html
