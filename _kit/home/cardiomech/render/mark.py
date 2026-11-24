#!/usr/bin/env python3
"""Redraw CardioMech's mark (cardiomech.com favicon: a deep-red capsule on the 45-degree diagonal in front of a bright-red
10-tooth gear, separated by a thin gap) as clean filled SVG paths in a 180x180 box. Prints the <g> markup."""
import math, sys
cx, cy, Ro, Rr, T = float(sys.argv[1]) if len(sys.argv)>1 else 120, float(sys.argv[2]) if len(sys.argv)>2 else 76, 47, 38.5, 10
rot = float(sys.argv[3]) if len(sys.argv)>3 else 0
pts = []
st = 2*math.pi/T
for i in range(T):
    a0 = i*st + math.radians(rot)
    for r, f in [(Rr, .0), (Rr, .14), (Ro, .28), (Ro, .62), (Rr, .76)]:
        a = a0 + st*f; pts.append((cx+math.cos(a)*r, cy+math.sin(a)*r))
    # root arc approximated by points
    for f in (.84, .92):
        a = a0 + st*f; pts.append((cx+math.cos(a)*Rr, cy+math.sin(a)*Rr))
gear = 'M' + ' '.join('%.1f %.1f' % p for p in pts) + 'Z'
# capsule: centre (68.6,93.6), axis 45deg, half-length 63.6, half-width 40.3
ccx, ccy, hl, hw = 68.6, 93.6, 63.6, 40.3
L = 2*hl
cap = '<rect x="%.1f" y="%.1f" width="%.1f" height="%.1f" rx="%.1f" transform="rotate(45 %.1f %.1f)"/>' % (ccx-hl, ccy-hw, L, 2*hw, hw, ccx, ccy)
gap = '<rect x="%.1f" y="%.1f" width="%.1f" height="%.1f" rx="%.1f" transform="rotate(45 %.1f %.1f)"/>' % (ccx-hl-5, ccy-hw-5, L+10, 2*hw+10, hw+5, ccx, ccy)
print(gear); print(cap); print(gap)
