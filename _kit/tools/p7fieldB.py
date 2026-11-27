#!/usr/bin/env python3
"""PROD-7: apply TOP-FIX variant B + step 5 to a concept-build field.js of the common 'render image + glow' family:
remove the whole-canvas glow (ag) and the breathing halo (rg), add the neutral ~3% ground falloff (RECIPE_NOTES §4),
soften the floor shadow to ~.34, and make the object scroll 1:1 with the hero (RECIPE_NOTES §6). usage: p7fieldB.py field.js"""
import sys, re
p = sys.argv[1]; s = open(p).read()
i = s.index("/* a low "); i = s.rfind("\n", 0, i) + 1
j = s.index("var fx=x+dw*"); j = s.rfind("\n", 0, j) + 1
s = s[:i] + """      /* TOP-FIX B: no glow or halo; a neutral, barely perceptible ground falloff up toward the key side (RECIPE_NOTES §4) */
      var fx0=G.mob?w*.5:x+dw*.42,fy0=G.mob?G.bh*.42:y+dh*.38,fr0=Math.max(w,h)*.62;
      var fo=c.createRadialGradient(fx0,fy0,0,fx0,fy0,fr0);
      fo.addColorStop(0,"rgba(255,255,255,"+(.03*e)+")");fo.addColorStop(.55,"rgba(255,255,255,"+(.011*e)+")");fo.addColorStop(1,"rgba(255,255,255,0)");
      c.fillStyle=fo;c.fillRect(0,0,w,h);
""" + s[j:]
s, n = re.subn(r'fg\.addColorStop\(0,"rgba\(0,0,0,"\+\(\.\d+\*e\)\.toFixed\(3\)\+"\)"\);fg\.addColorStop\(\.5,"rgba\(0,0,0,"\+\(\.\d+\*e\)',
               'fg.addColorStop(0,"rgba(0,0,0,"+(.34*e).toFixed(3)+")");fg.addColorStop(.5,"rgba(0,0,0,"+(.12*e)', s)
print('shadow', n)
assert s.count("SP={v:0},") == 1; s = s.replace("SP={v:0},", "SP={v:0},HY=0,")
s, n = re.subn(r"-SP\.v\*G\.ih\*\.0\d+;", "+HY;", s); assert n == 1, n
s, n = re.subn(r"setScroll:function\(p\)\{SP\.v=[^}]*\}", """setScroll:function(p){SP.v=p;
    var hy=0,hr=G&&!G.mob?document.querySelector("#view #hero"):null;
    if(hr){var b=hr.getBoundingClientRect();if(b.bottom>0)hy=Math.min(0,b.top)}
    if(hy!==HY){HY=hy;frame(true)}}""", s); assert n == 1, n
assert "createRadialGradient(ggx" not in s and "lighter" not in s
open(p, 'w').write(s); print('ok', p)
