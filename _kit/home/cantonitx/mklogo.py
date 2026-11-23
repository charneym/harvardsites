# writes brand.html and pre.html with the inline SVG logo (clean filled paths and gradients, DR2)
inner=open('logo-inner.txt').read()
def svg(cls,pre):
    s=inner.replace('id="ct','id="'+pre+'ct').replace('url(#ct','url(#'+pre+'ct')
    return '<svg class="%s" viewBox="30 34 1130 410" aria-hidden="true">%s</svg>'%(cls,s)
open('brand.html','w').write('<a href="#/" class="brand" id="brand" aria-label="Cantoni Therapeutics, home">'+svg('lgi','h')+'</a>\n')
open('pre.html','w').write('''<div id="pre" aria-hidden="true">
  <div class="pc">
    '''+svg('pmk','p')+'''
  </div>
  <span class="lab pl">Small-molecule NNMT inhibitors · Oss, the Netherlands</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>
''')
