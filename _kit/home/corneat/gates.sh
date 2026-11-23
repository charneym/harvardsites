#!/bin/bash
cd "$(dirname "$0")/../.." || exit 1
F=../corneat/index.html
run(){ echo "=== $*"; timeout 600 node "$@" 2>&1 | tail -12; }
run smoke.js $F
run reveal-audit.js $F "#/" 1440 900
run reveal-audit.js $F "#/" 390 844
run anim-audit.js $F "#/" 1440 900
run anim-audit.js $F "#/" 390 844
run clip-audit.js $F "#/" 1440 900
run clip-audit.js $F "#/" 390 844
run overlay-audit.js $F "#/"
run masthead-audit.js $F "#/"
run mixed-audit.js $F
run polish-audit.js $F "#/"
run loader-audit.js $F
run unstyled-audit.js $F
run cramped-audit.js corneat
run hoverpad-audit.js corneat
run split-audit.js $F
run balance-audit.js $F
run logo-audit.js $F
run hero-audit.js $F "#/"
run buildout-test.js $F /tmp/claude-0/-home-user-harvardsites/a3cca4f6-a6f0-5435-97cd-c05872d75c8a/scratchpad/bo
cd ..
run _kit/fit-audit.js corneat/index.html
run _kit/loader-contrast-audit.js corneat
run _kit/tools/textclash.js corneat
echo "=== ALL DONE"
