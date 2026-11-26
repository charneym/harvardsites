#!/bin/bash
# Freek home-only gates (current standard: logo loader, pinned photo story)
cd "$(dirname "$0")/../../.." || exit 1
F=$PWD/freek/index.html
T=${1:-/tmp/claude-0/-home-user-harvardsites/56ca03b9-ee5a-5849-b017-dd96a50c3a79/scratchpad}
echo '=== textclash'; node _kit/tools/textclash.js freek "$T/tc" 2>&1 | tail -6
echo '=== entities'; node _kit/tools/entities.js freek 2>&1 | tail -4
echo '=== contrast 1440'; node _kit/tools/contrast.js freek 2>&1 | tail -6
echo '=== contrast 390'; node _kit/tools/contrast.js freek 390 2>&1 | tail -6
echo '=== hidden 1440'; node _kit/tools/hidden.js freek 2>&1 | tail -6
echo '=== hidden 390'; node _kit/tools/hidden.js freek 390 2>&1 | tail -6
echo '=== squeeze 390'; node _kit/tools/squeeze.js freek 390 2>&1 | tail -5
echo '=== squeeze 768'; node _kit/tools/squeeze.js freek 768 2>&1 | tail -5
echo '=== orphans'; timeout 1500 node _kit/tools/orphans.js freek 2>&1 | tail -10
cd _kit
echo '=== smoke'; timeout 600 node smoke.js $F 2>&1 | tail -6
echo '=== clip 1440'; timeout 600 node clip-audit.js $F "#/" 1440 900 2>&1 | tail -6
echo '=== clip 390'; timeout 600 node clip-audit.js $F "#/" 390 844 2>&1 | tail -6
echo '=== buildout'; timeout 600 node buildout-test.js $F 2>&1 | tail -8
echo '=== fit'; timeout 600 node fit-audit.js $F 2>&1 | tail -6
echo '=== loader-contrast'; (cd .. && timeout 600 node _kit/loader-contrast-audit.js freek 2>&1 | tail -6)
echo '=== END'
