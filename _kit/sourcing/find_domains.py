#!/usr/bin/env python3
"""Guess + verify each organisation's website. Usage: python3 find_domains.py work/orgs.json work/candidates.json
Skips organisations already in registry.csv. A guess counts only if it returns 200, mentions the org's key word,
and is not a parked/for-sale page. Unresolved orgs are listed in work/unresolved.txt (find those by hand or drop)."""
import json, re, subprocess, sys, html, concurrent.futures as cf
from common import known
orgs = json.load(open(sys.argv[1])); out = sys.argv[2]
PARK = re.compile(r'domain (is )?for sale|godaddy\.com/forsale|is parked|hugedomains|buy this domain|dan\.com|afternic|sedo\.com|parked free|this domain may be for sale|grails', re.I)
def words(n):
    n = re.sub(r'[,.]|\b(INC|LLC|CORP|CORPORATION|CO|LTD|L\.L\.C|INCORPORATED|COMPANY|PBC|THE|D/B/A.*)\b', '', n.upper())
    return [x for x in re.sub(r'[^A-Z0-9 &-]', '', n).split() if x]
def get(u):
    r = subprocess.run(['curl', '-sSL', '-m', '12', '-A', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131 Safari/537.36', '-o', '-', '-w', '\n@@%{http_code} %{url_effective}', u], capture_output=True, text=True)
    s = r.stdout; code = s.rsplit('@@', 1)[-1] if '@@' in s else ''; return s, code
def check(o):
    if known(o['org']): o['skip'] = 'registry'; return o
    w = words(o['org']); base = ''.join(w).lower().replace('&', 'and').replace('-', ''); key = w[0].lower() if w else ''
    gs = [base + t for t in ['.com', '.bio', 'inc.com', '.ai', '.io', '.co', 'bio.com', 'tx.com', 'therapeutics.com', 'medical.com', '.health', '.us', '.net']]
    if len(w) > 1: gs += ['-'.join(w).lower() + '.com', w[0].lower() + '.com', w[0].lower() + 'bio.com', w[0].lower() + 'tx.com', w[0].lower() + '.bio', w[0].lower() + 'therapeutics.com', w[0].lower() + w[1].lower() + '.com']
    for g in dict.fromkeys(gs):
        s, code = get('https://' + g); low = s.lower()
        if code.startswith('200') and key and key in low[:300000] and not PARK.search(low[:40000]):
            t = re.search(r'<title[^>]*>(.*?)</title>', s, re.S | re.I)
            o.update(domain=g, url=code.split(' ', 1)[1] if ' ' in code else 'https://' + g, site_title=html.unescape(t.group(1).strip())[:90] if t else '')
            if known(o['org'], g): o['skip'] = 'registry'
            return o
    o['domain'] = None; return o
with cf.ThreadPoolExecutor(16) as ex: res = list(ex.map(check, orgs))
json.dump([o for o in res if o.get('domain') and not o.get('skip')], open(out, 'w'), indent=1)
open(out.rsplit('/', 1)[0] + '/unresolved.txt', 'w').write('\n'.join(f"{o['org']} | {o.get('city')},{o.get('state')}" for o in res if not o.get('domain') and not o.get('skip')))
print(f"resolved {sum(1 for o in res if o.get('domain') and not o.get('skip'))}, skipped (registry) {sum(1 for o in res if o.get('skip'))}, unresolved {sum(1 for o in res if not o.get('domain') and not o.get('skip'))}")
