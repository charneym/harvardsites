# Assemble _kit/src/xosomix.src.html from firelight's regions (HOME_BRIEF): each /*<R:x>*/…/*</R:x>*/ or <!--<R:x>-->…<!--</R:x>--> is
# replaced by the file parts/<x>.txt. Extra global CSS (no region) goes in after the last stylesheet rule via css_tail.txt.
import re,os,base64,sys
D=os.path.dirname(os.path.abspath(__file__));K=os.path.dirname(os.path.dirname(D))
src=open(os.path.join(K,'src','firelight.src.html'),encoding='utf8').read()
mark='data:image/png;base64,'+base64.b64encode(open(os.path.join(D,'mark.png'),'rb').read()).decode()
def part(n):return open(os.path.join(D,n+'.txt'),encoding='utf8').read().replace('@@MARK@@',mark)
names=sorted(set(re.findall(r'<R:([a-zA-Z0-9_-]+)>',src)))
for n in names:
    p=os.path.join(D,n+'.txt')
    if not os.path.exists(p):sys.exit('missing part '+n)
    pat=re.compile(r'(/\*<R:'+n+r'>\*/|<!--<R:'+n+r'>-->)(.*?)(/\*</R:'+n+r'>\*/|<!--</R:'+n+r'>-->)',re.S)
    src,k=pat.subn(lambda m:m.group(1)+part(n)+m.group(3),src)
    assert k==1,(n,k)
tail=part('css_tail')
assert src.count('</style>\n</head>')==1
src=src.replace('</style>\n</head>',tail+'\n</style>\n</head>')
src=src.replace('/* ===== Firelight: warm night ground, bone pages, their amber as the accent ===== */','/* ===== base overrides ===== */')
assert 'irelight' not in src.replace('firelight.src.html',''),[m.start() for m in re.finditer('irelight',src)][:5]
open(os.path.join(K,'src','xosomix.src.html'),'w',encoding='utf8').write(src);print('assembled',len(src))
