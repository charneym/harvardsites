#!/bin/bash
# sequential gate run for the Lindis Biotech home-only build (HOME_BRIEF Gates), on #/ only
cd "$(dirname "$0")/../.." || exit 1
F=/home/user/harvardsites/lindisbiotech/index.html
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
run cramped-audit.js lindisbiotech
run hoverpad-audit.js lindisbiotech
run split-audit.js $F "#/"
run balance-audit.js $F "#/"
run logo-audit.js $F "#/"
run hero-audit.js $F "#/"
run buildout-test.js $F
run fit-audit.js $F
(cd .. && echo '=== loader-contrast (root)' && node _kit/loader-contrast-audit.js lindisbiotech && echo LC-DONE)
echo "=== ALL DONE"
(cd .. && node _kit/tools/textclash.js lindisbiotech /tmp/claude-0/-home-user-harvardsites/35b53897-f24c-59fe-9011-48cc5420a3b3/scratchpad/ld/tc 2>&1 | tail -30)
(cd .. && echo '=== entities' && node _kit/tools/entities.js lindisbiotech 2>&1 | tail -10)
(cd .. && echo '=== contrast 1440' && node _kit/tools/contrast.js lindisbiotech 2>&1 | tail -10)
(cd .. && echo '=== contrast 390' && node _kit/tools/contrast.js lindisbiotech 390 2>&1 | tail -10)
