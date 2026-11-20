#!/usr/bin/env python3
"""Assemble _kit/src/bluestone-nh.src.html from the regions of firelight.src.html (HOME-ONLY build)."""
import re, os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
SRC = open(os.path.join(HERE, 'firelight.src.html'), encoding='utf-8').read()
PD = os.path.join(HERE, 'bluestone-nh.parts')
P = {f.rsplit('.', 1)[0]: open(os.path.join(PD, f), encoding='utf-8').read().rstrip('\n') for f in os.listdir(PD)}
def reg(s, name, body):
    for a, b in ((r'/\*<R:%s>\*/' % name, r'/\*</R:%s>\*/' % name), (r'<!--<R:%s>-->' % name, r'<!--</R:%s>-->' % name)):
        pat = re.compile('(' + a + r')(.*?)(' + b + ')', re.S)
        if pat.search(s):
            return pat.sub(lambda m: m.group(1) + body + m.group(3), s, count=1)
    sys.exit('region not found: ' + name)
out = SRC
for name in ['meta', 'fonts', 'root', 'fieldbg', 'logocss', 'scenecss', 'site', 'content', 'views', 'field', 'story', 'seen', 'pre', 'brand', 'navmenu', 'xc']:
    out = reg(out, name, P[name])
def rep(old, new):
    global out
    if old not in out: sys.exit('missing: ' + old[:80])
    out = out.replace(old, new, 1)
rep('/* ===== Firelight: warm night ground, bone pages, their amber as the accent ===== */', '/* ===== shared engine overrides ===== */')
rep('.rail span{color:#a39684}.rail span::before{background:var(--ink2);border-color:#7a6a58}', '')
rep('.scene text{fill:#c2b6a4}.scene text.w{fill:var(--bone)}.scene text.a{fill:var(--accL)}', '')
rep('@media (max-width:860px){.fieldbg{background:#120e0b}}', '')
rep('.light+.cta{border-top:1px solid rgba(18,14,11,.12)}', '')
rep('.scene .flm{fill:var(--accL);opacity:.9}', '')
rep('.scene svg.mob text{font-size:12.5px;letter-spacing:.04em}.scene svg.mob text.big{font-size:12px;letter-spacing:.16em}', '')
rep('.scene text{font-size:12px}', '')
rep('</style>\n</head>', P['extracss'] + '\n</style>\n</head>')
import re as _bo; out = _bo.sub(r'<!--@libs(?![^>]*buildout)([^>]*?)\s*-->', lambda m: '<!--@libs' + m.group(1) + ' buildout-->', out, count=1)  # HOME_BRIEF update 1: nav items open build-out pages (_kit/lib/buildout.js)
open(os.path.join(HERE, 'bluestone-nh.src.html'), 'w', encoding='utf-8').write(out)
left = re.findall(r'(?i)firelight|fort lauderdale|flc-|arbor', out)
print('wrote bluestone-nh.src.html', len(out), 'leftovers:', left[:10])
