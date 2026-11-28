#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../rejuvenatebio && cp hero-cut.webp rj-logo.png rj-logo-w.png ../../../rejuvenatebio/ && cd ../.. && node build.js src/rejuvenatebio.src.html ../rejuvenatebio/index.html
