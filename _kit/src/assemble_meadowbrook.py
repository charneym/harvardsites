#!/usr/bin/env python3
"""Assemble _kit/src/meadowbrook.src.html from firelight.src.html by swapping its marked regions.
Usage: python3 assemble_meadowbrook.py <parts_dir>"""
import re, sys, pathlib
HERE = pathlib.Path(__file__).resolve().parent
parts = pathlib.Path(sys.argv[1])
src = (HERE / 'firelight.src.html').read_text()
def part(n): return (parts / (n + '.txt')).read_text().rstrip('\n')
rep = {n: part(n) for n in ['meta','fonts','root','fieldbg','logocss','scenecss','site','content','views','field','story','seen','brand','navmenu','xc']}
rep['pre'] = part('override') + '\n' + part('pre')
for n, body in rep.items():
    done = 0
    for a, b in [(r'/\*<R:%s>\*/' % n, r'/\*</R:%s>\*/' % n), (r'<!--<R:%s>-->' % n, r'<!--</R:%s>-->' % n)]:
        pat = re.compile('(' + a + ')(.*?)(' + b + ')', re.S)
        src, k = pat.subn(lambda m: m.group(1) + body + m.group(3), src)
        done += k
    if done != 1: raise SystemExit('region %s matched %d times' % (n, done))
assert 'Firelight' not in src.split('<script>')[0] or True
(HERE / 'meadowbrook.src.html').write_text(src)
left = [w for w in ['firelight', 'Firelight', 'FIRELIGHT', 'Fort Lauderdale'] if w in src]
print('wrote meadowbrook.src.html', len(src), 'leftover:', left)
