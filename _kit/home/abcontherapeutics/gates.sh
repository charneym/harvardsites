#!/bin/bash
# sequential gate run for the Abcon Therapeutics home-only build (HOME_BRIEF Gates), on #/ only
cd "$(dirname "$0")/../.." || exit 1
F=../abcontherapeutics/index.html
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
run cramped-audit.js abcontherapeutics
run hoverpad-audit.js abcontherapeutics
run split-audit.js $F "#/"
run balance-audit.js $F "#/"
run logo-audit.js $F "#/"
run hero-audit.js $F "#/"
run buildout-test.js $F
run fit-audit.js $F
(cd .. && echo '=== loader-contrast (root)' && node _kit/loader-contrast-audit.js abcontherapeutics && echo LC-DONE)
echo "=== ALL DONE"
(cd .. && node _kit/tools/textclash.js abcontherapeutics /tmp/claude-0/-home-user-harvardsites/d604d656-3008-5e4f-9d91-189fd19edebf/scratchpad/abcon/tc 2>&1 | tail -30)
(cd .. && echo '=== entities' && node _kit/tools/entities.js abcontherapeutics 2>&1 | tail -10)
