# Assemble /biomotivate/ from the nzymebio home-only base (regions copied from firelight's engine) + biomotivate.parts
import re,os,subprocess
D=os.path.dirname(os.path.abspath(__file__));P=os.path.join(D,'biomotivate.parts')
s=open(os.path.join(D,'nzymebio.src.html')).read()
def rd(n):return open(os.path.join(P,n)).read().rstrip('\n')
R={'meta':'meta.html','fonts':'fonts.css','root':'root.css','fieldbg':'fieldbg.css','logocss':'logocss.css','scenecss':'scenecss.css',
   'seen':'seen.html','pre':'pre.html','brand':'brand.html','navmenu':'navmenu.html','xc':'xc.html','site':'site.js','content':'content.js',
   'views':'views.js','field':'field.js','story':'story.js'}
for k,f in R.items():
    pat=re.compile(r'((?:/\*|<!--)<R:'+k+r'>(?:\*/|-->))([\s\S]*?)((?:/\*|<!--)</R:'+k+r'>(?:\*/|-->))')
    assert pat.search(s),k
    v=rd(f);s=pat.sub(lambda m:m.group(1)+v+m.group(3),s,count=1)
# brand CSS block: drop N-Zyme's palette comment text, append ours before the main </style>
s=re.sub(r'/\* ===== N-Zyme Biomedical:[^*]*\*/','/* ===== base tokens (shared) ===== */',s,count=1)
i=s.index('</style>');s=s[:i]+rd('tail.css')+'\n'+s[i:]
# old N-Zyme-only rules that would leak: loader plogo
s=re.sub(r'/\*[^*]*(?:N-Zyme|pepsin)[^*]*\*/','',s)
s=s.replace('nzRise','bmRise0')
s=s.replace('N-Zyme','Biomotivate').replace('nzyme','biomotivate') if False else s
s=s.replace('/*<R:nssfix>*/<script>','<!--<R:nssfix>--><script>').replace('</script>/*</R:nssfix>*/','</script><!--</R:nssfix>-->')
out=os.path.join(D,'biomotivate.src.html');open(out,'w').write(s)
left=[w for w in ['N-Zyme','nzyme','NZYM','pepsin','N&#183;ZYME'] if w in s]
print('assembled',out,'leftover:',left)
subprocess.run(['node',os.path.join(D,'..','build.js'),out,os.path.join(D,'..','..','biomotivate','index.html')],check=True)
