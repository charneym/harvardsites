#!/bin/sh
# rebuild Senphonix: css, assemble, build
cd "$(dirname "$0")/../.." && python3 home/senphonix/mkcss.py && python3 home/senphonix/assemble.py && cp home/senphonix/hero.webp ../senphonix/ && node build.js src/senphonix.src.html ../senphonix/index.html
