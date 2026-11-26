#!/bin/bash
# sequential gate run for the WIRTH GmbH home-only build (HOME_BRIEF Gates), on #/ only
cd "$(dirname "$0")/../.." || exit 1
F=/home/user/harvardsites/wirth-gmbh/index.html
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
run cramped-audit.js wirth-gmbh
run hoverpad-audit.js wirth-gmbh
run split-audit.js $F "#/"
run balance-audit.js $F "#/"
run logo-audit.js $F "#/"
run hero-audit.js $F "#/"
run buildout-test.js $F
run fit-audit.js $F
(cd .. && echo '=== loader-contrast (root)' && node _kit/loader-contrast-audit.js wirth-gmbh && echo LC-DONE)
echo "=== ALL DONE"
(cd .. && node _kit/tools/textclash.js wirth-gmbh /tmp/claude-0/-home-user-harvardsites/eea95af2-5eaf-5277-bc89-9b6a91f43d8e/scratchpad/tc 2>&1 | tail -30)
(cd .. && echo '=== entities' && node _kit/tools/entities.js wirth-gmbh 2>&1 | tail -10)
(cd .. && echo '=== contrast 1440' && node _kit/tools/contrast.js wirth-gmbh 2>&1 | tail -10)
(cd .. && echo '=== contrast 390' && node _kit/tools/contrast.js wirth-gmbh 390 2>&1 | tail -10)
(cd .. && echo '=== hidden 1440' && node _kit/tools/hidden.js wirth-gmbh 2>&1 | tail -15)
(cd .. && echo '=== hidden 390' && node _kit/tools/hidden.js wirth-gmbh 390 2>&1 | tail -15)
echo '=== END'
(cd .. && echo '=== orphans' && node _kit/tools/orphans.js wirth-gmbh 2>&1 | tail -10)
(cd .. && echo '=== squeeze 390' && node _kit/tools/squeeze.js wirth-gmbh 2>&1 | tail -6)
(cd .. && echo '=== squeeze 768' && node _kit/tools/squeeze.js wirth-gmbh 768 2>&1 | tail -6)
echo '=== FINAL'
