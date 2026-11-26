# Writes the inverse Kläger lockup (white wordmark and pointer, grey ring and claim, as their inverse logo) as one SVG.
wm=open('render/wm.txt').read();tg=open('render/tg.txt').read()
ptr="M209.9 1.5L199.3 7.9Q203.3 9.1 205.3 13.2Z"
def svg(cls,idp):
    return ('<svg class="%s" viewBox="0 0 214 54" role="img" aria-label="Kläger, Powerful Solutions"><defs><mask id="%s" maskUnits="userSpaceOnUse" x="0" y="0" width="214" height="54">'
     '<rect width="214" height="54" fill="#fff"/><path d="%s" fill="#000" stroke="#000" stroke-width="2.6" stroke-linejoin="round"/></mask></defs>'
     '<path class="klw" d="%s"/><circle class="klw" cx="67.0" cy="10.6" r="2.5"/><circle class="klw" cx="76.8" cy="10.6" r="2.5"/>'
     '<circle class="klr" cx="199.3" cy="13.9" r="10.0" fill="none" stroke-width="5.8" mask="url(#%s)"/><path class="klp" d="%s"/>'
     '<path class="klt" d="%s"/></svg>')%(cls,idp,ptr,wm,idp,ptr,tg)
open('render/logo_nav.svg','w').write(svg('klm','klMk1'))
open('render/logo_pre.svg','w').write(svg('klm','klMk2'))
open('render/logo_test.html','w').write('<html><body style="margin:0;background:#0a1a2c;padding:40px"><style>.klw,.klp{fill:#fff}.klr{stroke:#b0b1b1}.klt{fill:#b0b1b1}svg{width:920px;display:block;margin-bottom:30px}</style>'+svg('klm','a')+'<div style="background:#fff;padding:20px"><img src="/tmp/claude-0/kimg/Logo_Klaeger_4c_neuer_Claim-schwarz.png" style="width:920px;image-rendering:pixelated"></div></body></html>')
