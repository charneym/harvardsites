# writes brand.html and pre.html with the inline SVG logo (their emblem + redrawn wordmark, clean filled paths, DR2)
inner=open('logo-inner.txt').read()
svg=lambda cls:'<svg class="%s" viewBox="30 0 1940 785" aria-hidden="true">%s</svg>'%(cls,inner)
open('brand.html','w').write('<a href="#/" class="brand" id="brand" aria-label="Amporin Pharmaceuticals, home">'+svg('lgi')+'</a>\n')
open('pre.html','w').write('''<div id="pre" aria-hidden="true">
  <div class="pc">
    '''+svg('pmk')+'''
  </div>
  <span class="lab pl">Pore-targeting medicines · Basel, Switzerland</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>
''')
