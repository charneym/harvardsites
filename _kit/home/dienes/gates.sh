#!/bin/bash
# sequential gate run for the DIENES home-only build (HOME_BRIEF Gates), on #/ only
cd "$(dirname "$0")/../.." || exit 1
F=/home/user/harvardsites/dienes/index.html
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
run cramped-audit.js dienes
run hoverpad-audit.js dienes
run split-audit.js $F "#/"
run balance-audit.js $F "#/"
run logo-audit.js $F "#/"
run hero-audit.js $F "#/"
run buildout-test.js $F
run fit-audit.js $F
(cd .. && echo '=== loader-contrast (root)' && node _kit/loader-contrast-audit.js dienes && echo LC-DONE)
echo "=== ALL DONE"
(cd .. && node _kit/tools/textclash.js dienes /tmp/claude-0/-home-user-harvardsites/173b8d09-74db-5343-ad22-32bb16bf2cd3/scratchpad/tc 2>&1 | tail -30)
(cd .. && echo '=== entities' && node _kit/tools/entities.js dienes 2>&1 | tail -10)
(cd .. && echo '=== contrast 1440' && node _kit/tools/contrast.js dienes 2>&1 | tail -10)
(cd .. && echo '=== contrast 390' && node _kit/tools/contrast.js dienes 390 2>&1 | tail -10)
(cd .. && echo '=== hidden 1440' && node _kit/tools/hidden.js dienes 2>&1 | tail -15)
(cd .. && echo '=== hidden 390' && node _kit/tools/hidden.js dienes 390 2>&1 | tail -15)
echo '=== END'
(cd .. && echo '=== orphans' && node _kit/tools/orphans.js dienes 2>&1 | tail -10)
(cd .. && echo '=== squeeze 390' && node _kit/tools/squeeze.js dienes 2>&1 | tail -6)
(cd .. && echo '=== squeeze 768' && node _kit/tools/squeeze.js dienes 768 2>&1 | tail -6)
echo '=== FINAL'
