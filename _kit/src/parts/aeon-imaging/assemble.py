# Assemble _kit/src/aeon-imaging.src.html from firelight.src.html regions (HOME_BRIEF). Run from repo root.
import re,os,sys
D=os.path.dirname(os.path.abspath(__file__))
src=open(os.path.join(D,'..','..','firelight.src.html')).read()
M={'meta':'meta.html','fonts':'fonts.css','root':'root.css','fieldbg':'fieldbg.css','logocss':'logocss.css','scenecss':'scenecss.css',
   'seen':'seen.html','pre':'pre.html','brand':'brand.html','navmenu':'navmenu.html','xc':'xc.html','site':'site.js',
   'content':'content.js','views':'views.js','field':'field.js','story':'story.js'}
for k,f in M.items():
    body=open(os.path.join(D,f)).read().rstrip('\n')
    pat=re.compile(r'(/\*<R:%s>\*/|<!--<R:%s>-->)(.*?)(/\*</R:%s>\*/|<!--</R:%s>-->)'%(k,k,k,k),re.S)
    n=len(pat.findall(src))
    if n!=1: sys.exit('region %s found %d'%(k,n))
    src=pat.sub(lambda m:m.group(1)+body+m.group(3),src)
# plumbing outside regions that carries the reference palette
for a,b in [('@media (max-width:860px){.fieldbg{background:#120e0b}}','@media (max-width:860px){.fieldbg{background:#070b1f}}'),
            ('.light+.cta{border-top:1px solid rgba(18,14,11,.12)}','.light+.cta{border-top:1px solid rgba(7,11,31,.12)}')]:
    assert a in src,a; src=src.replace(a,b)
src=src.replace('/* ===== Firelight: warm night ground, bone pages, their amber as the accent ===== */','/* ===== reference skin (overridden below for Aeon Imaging) ===== */')
late=open(os.path.join(D,'late.css')).read().rstrip('\n')
i=src.index('</style>');src=src[:i]+late+'\n'+src[i:]
left=[x for x in ('Firelight','firelight','FIRELIGHT','#120e0b','f8a312') if x in src]
if left: print('WARN leftovers:',left)
open(os.path.join(D,'..','..','aeon-imaging.src.html'),'w').write(src)
print('ok',len(src))
