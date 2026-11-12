import csv, re, os
HERE = os.path.dirname(os.path.abspath(__file__))
def norm(s): return re.sub(r'[^a-z0-9]', '', re.sub(r'\b(inc|llc|corp|corporation|co|ltd|pbc|the|therapeutics|biosciences|bio|medical|technologies|pharma|pharmaceuticals)\b', '', (s or '').lower()))
def registry():
    rows = list(csv.DictReader(open(os.path.join(HERE, 'registry.csv'))))
    # every concept folder already in the repo counts as built, and so does any slug in SPEC.md's do-not-pick lines
    root = os.path.abspath(os.path.join(HERE, '..', '..'))
    for d in os.listdir(root):
        if os.path.isdir(os.path.join(root, d)) and not d.startswith(('.', '_')): rows.append({'company': '', 'slug': d, 'domain': ''})
    try:
        for line in open(os.path.join(HERE, '..', 'SPEC.md')):
            if re.search(r'do not (pick|rebuild)', line, re.I):
                for t in re.findall(r'[a-z0-9][a-z0-9-]{2,}', line.split(':', 1)[-1].lower()): rows.append({'company': '', 'slug': t, 'domain': ''})
    except Exception: pass
    names = {norm(r['company']) for r in rows if r['company']} | {norm(r['slug'].replace('-', ' ')) for r in rows if r['slug']}
    doms = {r['domain'].lower() for r in rows if r['domain']}
    return {n for n in names if len(n) >= 3}, doms
def known(org, domain=''):
    names, doms = registry(); n = norm(org)
    return (domain or '').lower().replace('www.', '') in doms or (len(n) >= 3 and any(n == k or (len(k) >= 5 and (n.startswith(k) or k.startswith(n))) for k in names))
