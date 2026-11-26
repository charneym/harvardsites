#!/bin/bash
# prepush-check.js's per-page checks for one file: inline <script> syntax, navtest, smoke. Prints FAIL ... on any failure.
F="$(cd "$(dirname "$1")" && pwd)/$(basename "$1")"; cd "$(dirname "$0")/.." || exit 1
node -e '
const fs=require("fs"),vm=require("vm");const h=fs.readFileSync(process.argv[1],"utf8");const re=/<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/gi;let m,i=0;
while((m=re.exec(h))){i++;if(/type=["\x27](?!text\/javascript|module)/i.test(m[1]))continue;try{new vm.Script(m[2])}catch(e){console.log("FAIL syntax in inline script #"+i+": "+e.message);process.exit(1)}}
console.log("syntax OK ("+i+" inline scripts)")' "$F" || exit 1
n=$(node navtest.js "$F" 2>&1 | tail -1); echo "navtest: $n"; [[ "$n" == OK* ]] || { echo "FAIL navtest"; exit 1; }
s=$(node smoke.js "$F" 2>&1 | tail -1); echo "smoke: $s"; [[ "$s" == OK* ]] || { echo "FAIL smoke"; exit 1; }
