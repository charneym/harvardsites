#!/bin/bash
# re-run of the gates touched by the post-gate fixes (scrims, timeline padding, story labels, stat size)
cd "$(dirname "$0")/../.." || exit 1
F=../creosalus/index.html
run(){ echo "=== $*"; timeout 600 node "$@" 2>&1 | tail -12; }
run smoke.js $F
run masthead-audit.js $F "#/"
run polish-audit.js $F "#/"
run clip-audit.js $F "#/" 1440 900
run clip-audit.js $F "#/" 390 844
run mixed-audit.js $F "#/"
run buildout-test.js $F
run fit-audit.js $F
run unstyled-audit.js $F
echo "=== ALL DONE"
