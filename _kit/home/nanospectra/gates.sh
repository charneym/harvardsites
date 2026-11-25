#!/bin/bash
# sequential gate run for the Nanospectra home-only build (HOME_BRIEF Gates), on #/ only
cd "$(dirname "$0")/../.." || exit 1
F=/home/user/harvardsites/nanospectra/index.html
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
run cramped-audit.js nanospectra
run hoverpad-audit.js nanospectra
run split-audit.js $F "#/"
run balance-audit.js $F "#/"
run logo-audit.js $F "#/"
run hero-audit.js $F "#/"
run buildout-test.js $F
run fit-audit.js $F
(cd .. && echo '=== loader-contrast (root)' && node _kit/loader-contrast-audit.js nanospectra && echo LC-DONE)
echo "=== ALL DONE"
(cd .. && node _kit/tools/textclash.js nanospectra /tmp/claude-0/-home-user-harvardsites/67d6fe65-47ef-585f-ba31-cbe49dc3e641/scratchpad/tc 2>&1 | tail -30)
(cd .. && echo '=== entities' && node _kit/tools/entities.js nanospectra 2>&1 | tail -10)
(cd .. && echo '=== contrast 1440' && node _kit/tools/contrast.js nanospectra 2>&1 | tail -10)
(cd .. && echo '=== contrast 390' && node _kit/tools/contrast.js nanospectra 390 2>&1 | tail -10)
(cd .. && echo '=== hidden 1440' && node _kit/tools/hidden.js nanospectra 2>&1 | tail -15)
(cd .. && echo '=== hidden 390' && node _kit/tools/hidden.js nanospectra 390 2>&1 | tail -15)
echo '=== END'
