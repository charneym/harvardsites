#!/bin/bash
# sequential gate run for the BARLOW home-only build (HOME_BRIEF Gates), on #/ only
cd "$(dirname "$0")/../.." || exit 1
F=/home/user/harvardsites/barlow-sheet-metal/index.html
run(){ echo "=== $*"; timeout 600 node "$@" 2>&1 | tail -12; }
run smoke.js $F
run reveal-audit.js $F "#/" 1440 900
run reveal-audit.js $F "#/" 390 844
run anim-audit.js $F "#/" 1440 900
run anim-audit.js $F "#/" 390 844
run clip-audit.js $F "#/" 1440 900
run clip-audit.js $F "#/" 390 844
run overlay-audit.js $F "#/" 1440 900
run masthead-audit.js $F "#/"
run mixed-audit.js $F "#/"
run polish-audit.js $F "#/"
run loader-audit.js $F
run unstyled-audit.js $F
run cramped-audit.js barlow-sheet-metal
run hoverpad-audit.js barlow-sheet-metal
run split-audit.js $F "#/"
run balance-audit.js $F "#/"
run logo-audit.js $F "#/"
run hero-audit.js $F "#/"
run buildout-test.js $F
run fit-audit.js $F
(cd .. && echo '=== loader-contrast (root)' && node _kit/loader-contrast-audit.js barlow-sheet-metal && echo LC-DONE)
echo "=== ALL DONE"
(cd .. && node _kit/tools/textclash.js barlow-sheet-metal /tmp/claude-0/-home-user-harvardsites/cc0b8cae-a4da-5102-98ba-661657a553d8/scratchpad/tc_bsm 2>&1 | tail -30)
(cd .. && echo '=== entities' && node _kit/tools/entities.js barlow-sheet-metal 2>&1 | tail -10)
(cd .. && echo '=== contrast 1440' && node _kit/tools/contrast.js barlow-sheet-metal 2>&1 | tail -10)
(cd .. && echo '=== contrast 390' && node _kit/tools/contrast.js barlow-sheet-metal 390 2>&1 | tail -10)
(cd .. && echo '=== hidden 1440' && node _kit/tools/hidden.js barlow-sheet-metal 2>&1 | tail -15)
(cd .. && echo '=== hidden 390' && node _kit/tools/hidden.js barlow-sheet-metal 390 2>&1 | tail -15)
(cd .. && echo '=== orphans' && node _kit/tools/orphans.js barlow-sheet-metal 2>&1 | tail -10)
(cd .. && echo '=== squeeze 390' && node _kit/tools/squeeze.js barlow-sheet-metal 2>&1 | tail -10)
(cd .. && echo '=== squeeze 768' && node _kit/tools/squeeze.js barlow-sheet-metal 768 2>&1 | tail -10)
echo '=== END'
