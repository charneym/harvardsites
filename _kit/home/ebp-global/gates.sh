#!/bin/bash
# v4 gates for the EBP home (no counting loader and no SVG story: loader/loader-contrast/story audits do not apply)
cd "$(dirname "$0")/../../.." || exit 1
F=$PWD/ebp-global/index.html
echo '=== textclash'; node _kit/tools/textclash.js ebp-global "${1:-/tmp}/tc" 2>&1 | tail -5
echo '=== entities'; node _kit/tools/entities.js ebp-global 2>&1 | tail -4
echo '=== contrast 1440'; node _kit/tools/contrast.js ebp-global 2>&1 | tail -6
echo '=== contrast 390'; node _kit/tools/contrast.js ebp-global 390 2>&1 | tail -6
echo '=== squeeze 390'; node _kit/tools/squeeze.js ebp-global 2>&1 | tail -5
echo '=== squeeze 768'; node _kit/tools/squeeze.js ebp-global 768 2>&1 | tail -5
echo '=== buildout'; (cd _kit && timeout 500 node buildout-test.js "$F" 2>&1 | tail -10)
echo '=== orphans'; timeout 1500 node _kit/tools/orphans.js ebp-global 2>&1 | tail -10
echo '=== END'
