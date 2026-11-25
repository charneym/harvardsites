#!/bin/bash
# sequential gate run for the Strain Measurement Devices home-only build (HOME_BRIEF Gates), on #/ only
cd "$(dirname "$0")/../.." || exit 1
F=/home/user/harvardsites/smdsensors/index.html
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
run cramped-audit.js smdsensors
run hoverpad-audit.js smdsensors
run split-audit.js $F "#/"
run balance-audit.js $F "#/"
run logo-audit.js $F "#/"
run hero-audit.js $F "#/"
run buildout-test.js $F
run fit-audit.js $F
(cd .. && echo '=== loader-contrast (root)' && node _kit/loader-contrast-audit.js smdsensors && echo LC-DONE)
echo "=== ALL DONE"
(cd .. && node _kit/tools/textclash.js smdsensors /tmp/tc_smdsensors 2>&1 | tail -30)
(cd .. && echo '=== entities' && node _kit/tools/entities.js smdsensors 2>&1 | tail -10)
(cd .. && echo '=== contrast 1440' && node _kit/tools/contrast.js smdsensors 2>&1 | tail -10)
(cd .. && echo '=== contrast 390' && node _kit/tools/contrast.js smdsensors 390 2>&1 | tail -10)
(cd .. && echo '=== hidden' && node _kit/tools/hidden.js smdsensors 2>&1 | tail -10)
(cd .. && echo '=== orphans' && node _kit/tools/orphans.js smdsensors 2>&1 | tail -10)
(cd .. && echo '=== squeeze 390' && node _kit/tools/squeeze.js smdsensors 390 2>&1 | tail -10)
(cd .. && echo '=== squeeze 768' && node _kit/tools/squeeze.js smdsensors 768 2>&1 | tail -10)
echo "=== GATES END"
