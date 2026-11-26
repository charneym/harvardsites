#!/bin/bash
# sequential gate run for the Refining Systems home-only build (HOME_BRIEF Gates), on #/ only
cd "$(dirname "$0")/../.." || exit 1
F=/home/user/harvardsites/refiningsystems/index.html
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
run cramped-audit.js refiningsystems
run hoverpad-audit.js refiningsystems
run split-audit.js $F "#/"
run balance-audit.js $F "#/"
run logo-audit.js $F "#/"
run hero-audit.js $F "#/"
run buildout-test.js $F
run fit-audit.js $F
(cd .. && echo '=== loader-contrast (root)' && node _kit/loader-contrast-audit.js refiningsystems && echo LC-DONE)
echo "=== ALL DONE"
(cd .. && for t in orphans squeeze; do echo "=== $t 390"; node _kit/tools/$t.js refiningsystems 2>&1 | tail -12; done; echo "=== squeeze 768"; node _kit/tools/squeeze.js refiningsystems 768 2>&1 | tail -12; echo "=== orphans 768"; node _kit/tools/orphans.js refiningsystems 768 2>&1|tail -6)
(cd .. && node _kit/tools/textclash.js refiningsystems /tmp/claude-0/-home-user-harvardsites/08b0687f-a315-59b8-a151-eacb685af350/scratchpad/tc 2>&1 | tail -30)
(cd .. && echo '=== entities' && node _kit/tools/entities.js refiningsystems 2>&1 | tail -10)
(cd .. && echo '=== contrast 1440' && node _kit/tools/contrast.js refiningsystems 2>&1 | tail -10)
(cd .. && echo '=== contrast 390' && node _kit/tools/contrast.js refiningsystems 390 2>&1 | tail -10)
(cd .. && echo '=== hidden 1440' && node _kit/tools/hidden.js refiningsystems 2>&1 | tail -15)
(cd .. && echo '=== hidden 390' && node _kit/tools/hidden.js refiningsystems 390 2>&1 | tail -15)
echo '=== END'
