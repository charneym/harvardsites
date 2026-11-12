#!/usr/bin/env python3
"""Summarise deep-crawl output into evidence lines. Usage: python3 evidence.py work/deep work/orgs.json
For each site: pages, chars, builder, years seen, copyright, template slugs/phrases, CEO mentions, and the funding row."""
import json, glob, re, sys
d, orgsf = sys.argv[1], sys.argv[2]
orgs = json.load(open(orgsf)); bydom = {}
for o in orgs: bydom.setdefault(o.get('domain') or '', o)
cands = {}
try:
    for c in json.load(open(orgsf.replace('orgs.json', 'candidates.json'))): cands[c['domain']] = c
except Exception: pass
SLUG = re.compile(r'/(copy-of-[^/]*|general-\d+|blank(-\d+)?|new-page[^/]*|page-\d+|[a-z-]+-\d{1,2}|blog-post-title[^/]*|sample-page|hello-world|cart)$')
TMPL = re.compile(r'lorem ipsum|coming soon|under construction|email@example|\(555\) 555|your title here|add a description|let people know what to reach|click here to edit|proudly created with wix|powered by squarespace|this is a paragraph|sample page|blog post title', re.I)
for f in sorted(glob.glob(f'{d}/*.json')):
    j = json.load(open(f)); dom = j['id']; o = cands.get(dom, {})
    if 'err' in j: print('##', dom, 'ERR'); continue
    allt = ' '.join(j['pages'].values())
    yrs = sorted(set(re.findall(r'\b20[12]\d\b', allt)))[-3:]
    cr = re.findall(r'(?:©|Copyright)\s*(?:\d{4}\s*[-–]\s*)?(\d{4})', allt)[:1]
    ceo = list(dict.fromkeys(re.findall(r'([A-Z][a-z]+(?: [A-Z]\.)? [A-Z][a-zA-Z\-]+)(?:,? (?:Ph\.?D\.?|M\.?D\.?|MBA))*[,\s\-–|]{1,4}(?:Co-)?(?:Founder (?:and|&) )?(?:CEO|Chief Executive)', allt)))[:3]
    slugs = [re.sub(r'https?://[^/]+', '', u) for u in j['pages'] if SLUG.search(re.sub(r'https?://[^/]+', '', u).rstrip('/'))]
    tm = list(dict.fromkeys(m.group(0) for m in TMPL.finditer(allt)))[:4]
    aw = '; '.join(f"{a['agency']} {a['project']} ${a['amount']:,} {a['date']} PI {a['pi']}" for a in o.get('awards', [])[:2])
    print(f"## {dom} | {o.get('org','')} | {o.get('city','')},{o.get('state','')} | {aw}")
    print(f"   pages={len(j['pages'])} chars={len(allt)} gen={j['meta']['gen'][:24]} yrs={yrs} ©={cr} ceo={ceo} slugs={slugs[:4]} tmpl={tm}")
    print('   home:', re.sub(r'\s+', ' ', list(j['pages'].values())[0])[:230])
