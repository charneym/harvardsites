#!/bin/bash
# UNISENSOR home gates (v4 standard: loader + pinned story present, so loader/loader-contrast/story checks apply)
cd "$(dirname "$0")/../.." || exit 1
F=/home/user/harvardsites/unisensor/index.html
T=${1:-/tmp}
run(){ echo "=== $*"; timeout 600 node "$@" 2>&1 | tail -8; }
run smoke.js $F
run clip-audit.js $F "#/" 1440 900
run clip-audit.js $F "#/" 390 844
run loader-audit.js $F
run buildout-test.js $F
run fit-audit.js $F
(cd .. && echo '=== loader-contrast' && timeout 600 node _kit/loader-contrast-audit.js unisensor 2>&1 | tail -6)
(cd .. && echo '=== textclash' && timeout 900 node _kit/tools/textclash.js unisensor $T/tc 2>&1 | tail -10)
(cd .. && echo '=== entities' && node _kit/tools/entities.js unisensor 2>&1 | tail -5)
(cd .. && echo '=== contrast 1440' && node _kit/tools/contrast.js unisensor 2>&1 | tail -6)
(cd .. && echo '=== contrast 390' && node _kit/tools/contrast.js unisensor 390 2>&1 | tail -6)
(cd .. && echo '=== hidden 1440' && node _kit/tools/hidden.js unisensor 2>&1 | tail -8)
(cd .. && echo '=== hidden 390' && node _kit/tools/hidden.js unisensor 390 2>&1 | tail -8)
(cd .. && echo '=== orphans' && timeout 1500 node _kit/tools/orphans.js unisensor 2>&1 | tail -10)
(cd .. && echo '=== squeeze 390' && node _kit/tools/squeeze.js unisensor 390 2>&1 | tail -8)
(cd .. && echo '=== squeeze 768' && node _kit/tools/squeeze.js unisensor 768 2>&1 | tail -8)
echo '=== END'
