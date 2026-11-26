#!/bin/bash
# sequential gate run for the ATN Automatisierungstechnik Niemeier home-only build (HOME_BRIEF Gates), on #/ only
cd "$(dirname "$0")/../.." || exit 1
F=/home/user/harvardsites/atnberlin/index.html
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
run cramped-audit.js atnberlin
run hoverpad-audit.js atnberlin
run split-audit.js $F "#/"
run balance-audit.js $F "#/"
run logo-audit.js $F "#/"
run hero-audit.js $F "#/"
run buildout-test.js $F
run fit-audit.js $F
(cd .. && echo '=== loader-contrast (root)' && node _kit/loader-contrast-audit.js atnberlin && echo LC-DONE)
echo "=== ALL DONE"
(cd .. && node _kit/tools/textclash.js atnberlin /tmp/claude-0/-home-user-harvardsites/c5ba32a4-70cc-587b-9792-e5c5c6f44ecf/scratchpad/tc 2>&1 | tail -30)
(cd .. && echo '=== entities' && node _kit/tools/entities.js atnberlin 2>&1 | tail -10)
(cd .. && echo '=== contrast 1440' && node _kit/tools/contrast.js atnberlin 2>&1 | tail -10)
(cd .. && echo '=== contrast 390' && node _kit/tools/contrast.js atnberlin 390 2>&1 | tail -10)
(cd .. && echo '=== hidden 1440' && node _kit/tools/hidden.js atnberlin 2>&1 | tail -15)
(cd .. && echo '=== hidden 390' && node _kit/tools/hidden.js atnberlin 390 2>&1 | tail -15)
echo '=== END'
(cd .. && echo '=== orphans' && node _kit/tools/orphans.js atnberlin 2>&1 | tail -10)
(cd .. && echo '=== squeeze 390' && node _kit/tools/squeeze.js atnberlin 2>&1 | tail -10)
(cd .. && echo '=== squeeze 768' && node _kit/tools/squeeze.js atnberlin 768 2>&1 | tail -10)
echo '=== END2'
