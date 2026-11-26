#!/bin/bash
# sequential gate run for the Feller home-only build (HOME_BRIEF Gates), on #/ only
cd "$(dirname "$0")/../.." || exit 1
F=/home/user/harvardsites/feller-at/index.html
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
run cramped-audit.js feller-at
run hoverpad-audit.js feller-at
run split-audit.js $F "#/"
run balance-audit.js $F "#/"
run logo-audit.js $F "#/"
run hero-audit.js $F "#/"
run buildout-test.js $F
run fit-audit.js $F
(cd .. && echo '=== loader-contrast (root)' && node _kit/loader-contrast-audit.js feller-at && echo LC-DONE)
echo "=== ALL DONE"
(cd .. && node _kit/tools/textclash.js feller-at /tmp/claude-0/-home-user-harvardsites/5ec53d1f-035f-5c6a-88ed-cbdde9160b2e/scratchpad/tc 2>&1 | tail -30)
(cd .. && echo '=== entities' && node _kit/tools/entities.js feller-at 2>&1 | tail -10)
(cd .. && echo '=== contrast 1440' && node _kit/tools/contrast.js feller-at 2>&1 | tail -10)
(cd .. && echo '=== contrast 390' && node _kit/tools/contrast.js feller-at 390 2>&1 | tail -10)
(cd .. && echo '=== hidden 1440' && node _kit/tools/hidden.js feller-at 2>&1 | tail -15)
(cd .. && echo '=== hidden 390' && node _kit/tools/hidden.js feller-at 390 2>&1 | tail -15)
echo '=== END'
(cd .. && echo '=== orphans' && node _kit/tools/orphans.js feller-at 2>&1 | tail -10)
(cd .. && echo '=== squeeze 390' && node _kit/tools/squeeze.js feller-at 2>&1 | tail -6)
(cd .. && echo '=== squeeze 768' && node _kit/tools/squeeze.js feller-at 768 2>&1 | tail -6)
echo '=== FINAL'
