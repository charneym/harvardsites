#!/usr/bin/env python3
"""Write pre.html, brand.html and fav.svg from logo_paths.txt (Aatru logo traced by logo.py; the TM is dropped)."""
m,w=open('logo_paths.txt').read().split('\n')[:2]
VB='26 22 578 162'
def svg(cls,label='Aatru'):
    return ('<svg class="%s" viewBox="%s" role="img" aria-label="%s"><path class="am" fill-rule="evenodd" d="%s"/>'
            '<path class="aw" fill-rule="evenodd" d="%s"/></svg>')%(cls,VB,label,m,w)
pre=('<div id="pre" aria-hidden="true">\n  <div class="pc">\n    <div class="mk">'+svg('plogo')+'</div>\n'
     '    <div class="wm" hidden><span></span></div>\n  </div>\n'
     '  <span class="lab pl">npSIMS<span class="nomob"> · Cleveland, Ohio</span></span>\n'
     '  <div class="bar"><i id="preBar"></i></div>\n  <span class="cnt" id="preCnt">000</span>\n</div>\n')
open('pre.html','w').write(pre)
open('brand.html','w').write('<a href="#/" class="brand" id="brand" aria-label="Aatru Medical, home">'+svg('lgo')+'</a>\n')
# favicon: the mark alone, logo navy on white
open('fav.svg','w').write('<svg xmlns="http://www.w3.org/2000/svg" viewBox="20 16 190 180"><rect x="20" y="16" width="190" height="180" fill="#fff"/><path fill="#092d74" fill-rule="evenodd" d="%s"/></svg>'%m)
print('ok')
