#!/bin/bash
# _kit/v4/build.sh SLUG  ->  builds _kit/home/SLUG/v4.src.html into SLUG/index.html (single file).
# Markers in the source: <!--@inc file--> (path relative to the source folder, e.g. a logo SVG), <!--@v4--> (this kit's v4.js),
# <!--@nssfix--> (lib/nssfix.js), plus build.js's own <!--@libs ...--> and /*@fonts ...*/.
set -e
S="${1:?usage: build.sh SLUG}"
K="$(cd "$(dirname "$0")/.." && pwd)"; R="$(dirname "$K")"
SRC="$K/home/$S/v4.src.html"; [ -f "$SRC" ] || { echo "missing $SRC (start from: cp _kit/v4/starter.html $SRC)"; exit 1; }
TMP="$K/home/$S/.v4.build.html"
python3 - "$SRC" "$TMP" "$K" <<'PY'
import sys,re,pathlib
src,out,K=map(pathlib.Path,sys.argv[1:4]);h=src.read_text()
for _ in range(3):h=re.sub(r'<!--@inc\s+([^ >]+)\s*-->',lambda m:(src.parent/m.group(1)).read_text().strip(),h)
assert h.count('<!--@v4-->')==1,'need exactly one <!--@v4-->'
assert h.count('<!--@nssfix-->')==1,'need exactly one <!--@nssfix-->'
h=h.replace('<!--@v4-->','<script>'+(K/'v4/v4.js').read_text()+'</script>')
# MOTION FIX: the sent sites' libs (CustomEase for the flow/silk eases) ...
def libs(m):
  L=m.group(1).split()
  for x,after in (('CustomEase','SplitText'),):
    if x not in L:L.insert(L.index(after)+1 if after in L else len(L),x)
  return '<!--@libs '+' '.join(L)+'-->'
h=re.sub(r'<!--@libs\s+([^>]*?)\s*-->',libs,h,count=1)
# ... and the motion CSS hooks + the loader classes, at the end of <head> so they follow the site's own CSS and head script
HEAD=('<script>/* v4 motion: the loader runs once per site per session (then the short veil), with motion allowed */'
  'try{var d=document.documentElement,k=(location.pathname.replace(/index\\.html?$/,"").split("/").filter(Boolean).pop()||"v4")+"-pre";'
  'if(!matchMedia("(prefers-reduced-motion: reduce)").matches){d.classList.add("v4-wait","intro");if(sessionStorage.getItem(k)==="1")d.classList.add("seen")}}catch(e){}</script>\n'
  '<style id="v4-motion">'+(K/'v4/v4.css').read_text()+'</style>\n')
assert h.count('</head>')>=1,'no </head>'
i=h.index('</head>');h=h[:i]+HEAD+h[i:]
h=h.replace('<!--@nssfix-->',(K/'lib/nssfix.js').read_text().strip())
left=re.findall(r'\{\{[^}]{0,60}\}\}',h)
if left:print('WARNING: %d unfilled {{slots}}, e.g. %s'%(len(left),', '.join(sorted(set(left))[:6])))
out.write_text(h)
PY
mkdir -p "$R/$S"
(cd "$K" && node build.js "$TMP" "$R/$S/index.html")
rm -f "$TMP"
