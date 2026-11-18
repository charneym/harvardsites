#!/usr/bin/env bash
# Usage: bash _kit/pe/qa.sh <slug> [--fast]
# Regenerates + builds <slug> from _kit/pe/data/<slug>.json, then runs EVERY _kit gate one at a time (serialised through
# /tmp/pw.lock), prints one summary table, and writes the two review images (_kit/pe/review/<slug>-hero.png and
# <slug>-strip.png). Exit code 0 only if every gate is OK. --fast skips the slow 390 reveal/anim/clip passes (use for
# iteration; the final run before a push must be the full one).
set -u
cd "$(dirname "$0")/../.." || exit 2
S="$1"; FAST="${2:-}"; F="$PWD/$S/index.html"; LOG="_kit/pe/review/$S-qa.log"
mkdir -p "$S" _kit/pe/review; : > "$LOG"
node _kit/pe/gen.js "_kit/pe/data/$S.json" >>"$LOG" 2>&1 || { echo "GEN FAILED"; tail -5 "$LOG"; exit 1; }
node _kit/build.js "_kit/src/$S.src.html" "$F" >>"$LOG" 2>&1 || { echo "BUILD FAILED"; tail -5 "$LOG"; exit 1; }
PEOPLE="#/team"; grep -q 'href="#/team"' "_kit/src/$S.src.html" || PEOPLE="#/"
ROUTES=$(node -e 'const h=require("fs").readFileSync(process.argv[1],"utf8");const m=h.match(/<nav class="nav"[\s\S]*?<\/nav>/)[0];console.log(["#/",...new Set([...m.matchAll(/href="(#\/[a-z-]+)"/g)].map(x=>x[1]))].join(" "))' "_kit/src/$S.src.html")
declare -a RES=(); FAILN=0
run(){ local name="$1"; shift; local o; o=$(flock /tmp/pw.lock timeout 600 "$@" 2>&1); local rc=$?
  echo "### $name :: $*" >>"$LOG"; echo "$o" >>"$LOG"
  local bad; bad=$(echo "$o" | grep -E "FAIL|Error|BAD|LATE|error" | grep -v "^OK" | head -2 | cut -c1-150)
  if [ $rc -ne 0 ] || [ -n "$bad" ]; then RES+=("FAIL  $name  ${bad//$'\n'/ | }"); FAILN=$((FAILN+1)); else RES+=("ok    $name"); fi; }
run smoke node _kit/smoke.js "$F"
run navtest node _kit/navtest.js "$F"
for r in $ROUTES; do
  BIOS=""; [ "$r" = "$PEOPLE" ] && BIOS="--bios"
  run "clip 1440 $r" node _kit/clip-audit.js "$F" "$r" 1440 900 $BIOS
  run "reveal 1440 $r" node _kit/reveal-audit.js "$F" "$r" 1440 900
  run "anim 1440 $r" node _kit/anim-audit.js "$F" "$r" 1440 900
  if [ "$FAST" != "--fast" ]; then
    run "clip 390 $r" node _kit/clip-audit.js "$F" "$r" 390 844 $BIOS
    run "reveal 390 $r" node _kit/reveal-audit.js "$F" "$r" 390 844
    run "anim 390 $r" node _kit/anim-audit.js "$F" "$r" 390 844
  fi
done
run mixed node _kit/mixed-audit.js "$F"
[ "$PEOPLE" = "#/team" ] && { run "masthead #/team" node _kit/masthead-audit.js "$F" "#/team"; run "masthead #/" node _kit/masthead-audit.js "$F" "#/"; run overlay node _kit/overlay-audit.js "$F" "#/team"; }
run polish node _kit/polish-audit.js "$F" "$PEOPLE"
run loader node _kit/loader-audit.js "$F"
run unstyled node _kit/unstyled-audit.js "$F"
run cramped node _kit/cramped-audit.js "$S"
run hoverpad node _kit/hoverpad-audit.js "$S"
run bar node _kit/bar-audit.js "$F"
run split node _kit/split-audit.js "$F"
run balance node _kit/balance-audit.js "$F"
run logo node _kit/logo-audit.js "$F"
run hero node _kit/hero-audit.js "$F"
run "titlefit+review" node _kit/pe/review.js "$S"
run prepush node _kit/prepush-check.js
echo "================ QA $S ================"
printf '%s\n' "${RES[@]}"
echo "----------------------------------------"
[ $FAILN -eq 0 ] && echo "ALL GATES OK ($((${#RES[@]})) checks)" || echo "$FAILN FAILING (details: $LOG)"
echo "LOOK AT: _kit/pe/review/$S-hero.png and _kit/pe/review/$S-strip.png"
[ $FAILN -eq 0 ]
