#!/usr/bin/env python3
"""Olatec wordmark redrawn as filled SVG paths from olatec.com's 343x49 logo PNG (measured glyph by glyph):
OLA in deep green #114633, TEC in bright green #03783f. Writes logo.svg (brand colours) and logo-d.svg (for dark grounds:
OLA in bone, TEC in a light tint of the brand green)."""
import math
def f(v): return ('%.2f'%v).rstrip('0').rstrip('.')
H=49
# O: ring with a vertical slot at the bottom
cx,cy,ro,ri,g=24.5,24.5,24.5,14.5,4.5
yo=cy+math.sqrt(ro*ro-g*g); yi=cy+math.sqrt(ri*ri-g*g)
O=f"M{f(cx-g)} {f(yo)}A{ro} {ro} 0 1 1 {f(cx+g)} {f(yo)}L{f(cx+g)} {f(yi)}A{ri} {ri} 0 1 0 {f(cx-g)} {f(yi)}Z"
L="M71 0H81V39H104V49H71Z"
A="M121 49L140 0H151L170 49H159L145.5 14L132 49Z"
T="M181 0H219V10H205V49H195V10H181Z"
E_="M240 0H275V10H240ZM240 19.5H258.5V29.5H240ZM240 39H275V49H240Z"
cx,cy,ro,ri,g=319.5,24.5,24.5,14.5,7.5
xo=cx+math.sqrt(ro*ro-g*g); xi=cx+math.sqrt(ri*ri-g*g)
C=f"M{f(xo)} {f(cy-g)}A{ro} {ro} 0 1 0 {f(xo)} {f(cy+g)}L{f(xi)} {f(cy+g)}A{ri} {ri} 0 1 1 {f(xi)} {f(cy-g)}Z"
def svg(c1,c2):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 344 49" width="344" height="49"><path fill="{c1}" d="{O}{L}{A}"/><path fill="{c2}" d="{T}{E_}{C}"/></svg>\n'
open('logo.svg','w').write(svg('#114633','#03783f'))
open('logo-d.svg','w').write(svg('#f3f6f2','#5fc48a'))
print(O,C)
