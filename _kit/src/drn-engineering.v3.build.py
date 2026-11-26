# Assemble /drn-engineering/index.html: python3 _kit/src/drn-engineering.v3.build.py  (needs `npm i` in _kit for gsap + lenis)
import os,re
K=os.path.dirname(os.path.abspath(__file__));R=os.path.dirname(os.path.dirname(K));NM=os.path.join(R,'_kit/node_modules')
r=lambda p:open(p,encoding='utf8').read()
h=r(os.path.join(K,'drn-engineering.v3.src.html'));logo=r(os.path.join(K,'drn-engineering.logo.svg'))
hid=logo.replace('role="img" aria-label="DRN Engineering"','aria-hidden="true" focusable="false"')
h=h.replace('/*FONTS*/',r(os.path.join(K,'drn-engineering.fonts.css')))
h=h.replace('<!--LOGOH-->',hid).replace('<!--LOGO-->',logo,1).replace('<!--LOGO-->',hid)
STFIX=';(function(){var S=window.ScrollTrigger;if(!S||S.__sorted)return;S.__sorted=1;var r=S.refresh;S.refresh=function(){try{S.sort()}catch(e){}return r.apply(S,arguments)}})();'
libs=''
for f in ['gsap/dist/gsap.min.js','gsap/dist/ScrollTrigger.min.js','gsap/dist/SplitText.min.js','lenis/dist/lenis.min.js']:
    s=re.sub(r'//# sourceMappingURL=.*$','',r(os.path.join(NM,f)),flags=re.M)
    libs+='<script>'+s+(STFIX if 'ScrollTrigger' in f else '')+'</script>\n'
h=h.replace('<!--LIBS-->',libs)
h=h.replace('<!--BUILDOUT-->','<script>'+r(os.path.join(R,'_kit/lib/buildout.js'))+'</script>')
h=h.replace('<!--SITEJS-->','<script>'+r(os.path.join(K,'drn-engineering.v4.js'))+'</script>')
h=h.replace('<!--NSSFIX-->',r(os.path.join(R,'_kit/lib/nssfix.js')).strip())
open(os.path.join(R,'drn-engineering/index.html'),'w',encoding='utf8').write(h);print('built',len(h)//1024,'KB')
