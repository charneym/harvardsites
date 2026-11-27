#!/bin/bash
cd "$(dirname "$0")" && python3 assemble.py && mkdir -p ../../../vacuuminnovations && cp hero-cut.webp ../../../vacuuminnovations/ && cd ../.. && node build.js src/vacuuminnovations.src.html ../vacuuminnovations/index.html
