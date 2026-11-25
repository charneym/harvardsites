#!/usr/bin/env python3
"""Haption's logo redrawn as clean SVG (render/mark.py traces the hand silhouette from the datasheet raster):
black square with the blue wireframe hand, the blue sphere and its shadow on white, 'hap' black on white and
'tion' white on the logo blue (#2057af). Usage: logo.py <uid> <class>  -> prints the <svg>."""
import sys, pathlib
d=(pathlib.Path(__file__).parent/'hand.d').read_text().strip()
uid=sys.argv[1]; cls=sys.argv[2]
L=[]
for i in range(-6,20):
    y=i*7.0; L.append('M-5 %.0f C40 %.0f 90 %.0f 170 %.0f'%(y+18,y+6,y-4,y-14))
for j in range(0,24):
    x=j*7.5; L.append('M%.1f -5 C%.1f 40 %.1f 80 %.1f 130'%(x+10,x+4,x-2,x-8))
wire=''.join(L)
print(f'<svg class="{cls}" viewBox="0 0 303 202" role="img" aria-label="Haption"><defs><clipPath id="hcl{uid}"><path d="{d}"/></clipPath><radialGradient id="hsg{uid}" cx=".3" cy=".62" r=".8" fx=".33" fy=".6"><stop offset="0" stop-color="#c9d3ff"/><stop offset=".16" stop-color="#5b6fd6"/><stop offset=".55" stop-color="#2a3da8"/><stop offset="1" stop-color="#0e1756"/></radialGradient><filter id="hbl{uid}" x="-.3" y="-1" width="1.6" height="3"><feGaussianBlur stdDeviation="3.5"/></filter></defs><rect class="hsq" x="0" y="0" width="141.5" height="129"/><rect class="hwt" x="141.5" y="0" width="161.5" height="129"/><rect class="hwt" x="0" y="129" width="141.5" height="73"/><rect class="hbx" x="141.5" y="129" width="161.5" height="73"/><ellipse filter="url(#hbl{uid})" class="hsh" cx="238" cy="109" rx="40" ry="9.5"/><path class="hhf" d="{d}"/><g clip-path="url(#hcl{uid})"><path class="hwf" d="{wire}"/></g><path class="hho" d="{d}"/><circle class="hsp" cx="201.5" cy="65.5" r="57.5" fill="url(#hsg{uid})"/><text class="hk" x="4" y="186" textLength="133" lengthAdjust="spacing">hap</text><text class="hw" x="150" y="186" textLength="141" lengthAdjust="spacing">tion</text></svg>')
