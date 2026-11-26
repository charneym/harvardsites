# Assemble /drn-engineering/index.html from drn-engineering.v3.src.html: python3 _kit/src/drn-engineering.v3.build.py
import os
K=os.path.dirname(os.path.abspath(__file__));R=os.path.dirname(os.path.dirname(K))
r=lambda p:open(os.path.join(K,p),encoding='utf8').read()
h=r('drn-engineering.v3.src.html');logo=r('drn-engineering.logo.svg')
h=h.replace('/*FONTS*/',r('drn-engineering.fonts.css'))
h=h.replace('<!--LOGO-->',logo,1).replace('<!--LOGO-->',logo.replace('role="img" aria-label="DRN Engineering"','aria-hidden="true" focusable="false"'))
h=h.replace('<!--BUILDOUT-->','<script>'+open(os.path.join(R,'_kit/lib/buildout.js')).read()+'</script>')
h=h.replace('<!--NSSFIX-->',open(os.path.join(R,'_kit/lib/nssfix.js')).read().strip())
open(os.path.join(R,'drn-engineering/index.html'),'w',encoding='utf8').write(h);print('built',len(h)//1024,'KB')
