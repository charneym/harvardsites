#!/usr/bin/env python3
"""Assemble _kit/src/popcheck.src.html from the regions of firelight.src.html (HOME-ONLY build)."""
import re, os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
SRC = open(os.path.join(HERE, 'firelight.src.html'), encoding='utf-8').read()
P = {}
for f in sorted(os.listdir(os.path.join(HERE, 'popcheck.parts'))):
    P[f.rsplit('.', 1)[0]] = open(os.path.join(HERE, 'popcheck.parts', f), encoding='utf-8').read().rstrip('\n')

def reg(s, name, body):
    for a, b in ((r'/\*<R:%s>\*/' % name, r'/\*</R:%s>\*/' % name), (r'<!--<R:%s>-->' % name, r'<!--</R:%s>-->' % name)):
        pat = re.compile('(' + a + r')(.*?)(' + b + ')', re.S)
        if pat.search(s):
            return pat.sub(lambda m: m.group(1) + body + m.group(3), s, count=1)
    sys.exit('region not found: ' + name)

out = SRC
for name in ['meta', 'root', 'fieldbg', 'logocss', 'scenecss', 'site', 'content', 'views', 'field', 'story', 'seen', 'pre', 'brand', 'navmenu', 'xc']:
    out = reg(out, name, P[name])

def rep(old, new, count=1):
    global out
    if old not in out:
        sys.exit('missing: ' + old[:80])
    out = out.replace(old, new, count)

# site-specific warm colours outside the regions -> PopCheck's cool palette
rep('/* ===== Firelight: warm night ground, bone pages, their amber as the accent ===== */', '/* ===== PopCheck: night navy ground, bone pages, their teal as the accent ===== */')
rep('.rail span{color:#a39684}.rail span::before{background:var(--ink2);border-color:#7a6a58}', '.rail span{color:#9aa3bb}.rail span::before{background:var(--ink2);border-color:#5f6a88}')
rep('.scene text{fill:#c2b6a4}', '.scene text{fill:#b4bccf}')
rep('.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#9a9893;', '.rail span{flex:1;position:relative;padding-top:20px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#9aa3bb;')
rep('border:1px solid #6a6863;', 'border:1px solid #5f6a88;')
# extra CSS, last in the cascade
rep('</style>\n</head>', P['extracss'] + '\n</style>\n</head>')
open(os.path.join(HERE, 'popcheck.src.html'), 'w', encoding='utf-8').write(out)
left = [m for m in re.findall(r'(?i)firelight|fort lauderdale|flc-', out)]
print('wrote popcheck.src.html', len(out), 'leftovers:', left[:10])
