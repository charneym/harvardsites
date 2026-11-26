#!/bin/bash
# _kit/v4/gates.sh SLUG [-j N]   every gate for a v4 home page, then a one-screen summary. Exit 1 if any gate fails.
#   existing: entities, contrast 1440/390, hidden 1440/390, orphans, squeeze 390/768, textclash, buildout-test, prepush
#   v4 (check.js): first screen = viewport at 1440x900/1920x1080/390x844, story text never overlaps (5% pin + 1% timeline),
#                  no image above 1.2x native, overflow 360/390/414
# Runs N gates at a time (default 3; use -j 1 on a slow machine: the animation-timed gates get flaky under heavy load).
# Full logs: $OUT/<gate>.log (default /tmp/v4gates-SLUG). prepush here = its per-page checks (inline-script syntax, navtest, smoke) on this page only; the repo-wide node _kit/prepush-check.js still runs before the push.
# Not run, by design (v3 removed the component they test): loader / loader-contrast / storyfx audits.
S="${1:?usage: gates.sh SLUG [-j N]}"; J=3; [ "$2" = "-j" ] && J="${3:-3}"
cd "$(dirname "$0")/../.." || exit 1
R=$PWD; F="$R/$S/index.html"; [ -f "$F" ] || { echo "no $F (build first: _kit/v4/build.sh $S)"; exit 1; }
OUT="${V4OUT:-/tmp/v4gates-$S}"; rm -rf "$OUT"; mkdir -p "$OUT"
# name | pass regex on the output (besides exit 0) | command
G=(
"v4-checks|v4 checks .*: OK|node _kit/v4/check.js $S"
"entities|.|node _kit/tools/entities.js $S"
"contrast-1440|contrast .*: OK|node _kit/tools/contrast.js $S"
"contrast-390|contrast .*: OK|node _kit/tools/contrast.js $S 390"
"hidden-1440|hidden .*: OK|node _kit/tools/hidden.js $S"
"hidden-390|hidden .*: OK|node _kit/tools/hidden.js $S 390"
"squeeze-390|.|node _kit/tools/squeeze.js $S 390"
"squeeze-768|.|node _kit/tools/squeeze.js $S 768"
"textclash|.|node _kit/tools/textclash.js $S $OUT/textclash"
"orphans|.|node _kit/tools/orphans.js $S"
"buildout|.|bash -c 'cd _kit && node buildout-test.js $F'"
"prepush|.|bash _kit/v4/prepush1.sh $F"
)
run(){ local n="$1" cmd="$3"; local t0=$SECONDS; timeout 1500 bash -c "$cmd" >"$OUT/$n.log" 2>&1; echo "$? $((SECONDS-t0))" >"$OUT/$n.rc"; }
i=0; for g in "${G[@]}"; do IFS='|' read -r n re cmd <<<"$g"; run "$n" "$re" "$cmd" & i=$((i+1)); [ $((i%J)) -eq 0 ] && wait; done; wait
fail=0; echo; echo "=== v4 gates: $S"
for g in "${G[@]}"; do IFS='|' read -r n re cmd <<<"$g"; read -r rc secs <"$OUT/$n.rc"; L="$OUT/$n.log"
  ok=1; [ "$rc" = 0 ] || ok=0
  grep -qiE "^(FAIL|FLAG)|crashed|Error:|TypeError|never revealed|below [0-9.]+:1 *[1-9]" "$L" && ok=0
  case "$n" in contrast*|hidden*|v4-checks) grep -qP "$re" "$L" || ok=0;; esac
  if [ $ok = 1 ]; then printf "PASS  %-14s %4ss  %s\n" "$n" "$secs" "$(grep -v '^\s*$' "$L" | tail -1 | cut -c1-90)"
  else fail=1; printf "FAIL  %-14s %4ss  (exit %s) %s\n" "$n" "$secs" "$rc" "$L"; grep -v '^\s*$' "$L" | grep -iE "fail|flag|error|offend|never|below|hidden|overlap|>" | head -6 | sed 's/^/        /'; fi
done
echo "=== $( [ $fail = 0 ] && echo ALL GATES PASS || echo SOME GATES FAILED ) (logs: $OUT)"
exit $fail
