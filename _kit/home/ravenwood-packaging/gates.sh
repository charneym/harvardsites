#!/bin/bash
# v3 gates for the Ravenwood Packaging home (no loader, no story: loader/loader-contrast/story audits do not apply)
cd "$(dirname "$0")/../../.." || exit 1
F=$PWD/ravenwood-packaging/index.html
echo '=== textclash'; node _kit/tools/textclash.js ravenwood-packaging "${1:-/tmp}/tc" 2>&1 | tail -5
echo '=== entities'; node _kit/tools/entities.js ravenwood-packaging 2>&1 | tail -4
echo '=== contrast 1440'; node _kit/tools/contrast.js ravenwood-packaging 2>&1 | tail -6
echo '=== contrast 390'; node _kit/tools/contrast.js ravenwood-packaging 390 2>&1 | tail -6
echo '=== squeeze 390'; node _kit/tools/squeeze.js ravenwood-packaging 2>&1 | tail -5
echo '=== squeeze 768'; node _kit/tools/squeeze.js ravenwood-packaging 768 2>&1 | tail -5
echo '=== buildout'; (cd _kit && timeout 500 node buildout-test.js "$F" 2>&1 | tail -10)
echo '=== orphans'; timeout 1500 node _kit/tools/orphans.js ravenwood-packaging 2>&1 | tail -10
echo '=== END'
