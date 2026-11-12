#!/usr/bin/env python3
"""Pull NEW small-business awards (NIH SBIR/STTR Phase II + NSF SBIR/STTR Phase II) in a date window.
Usage: python3 fetch_grants.py --since 2026-05-12 --until 2026-11-12 --out work/
Writes work/orgs.json: one row per organisation with awards (project, amount, date, PI, title, agency).
NIH: only type-1/2 (new or competing renewal) Phase II-class awards (R44/R42/U44/SB1), i.e. genuinely new money.
NSF: awards whose title/abstract say SBIR/STTR Phase II, filtered to bio/med topics."""
import json, subprocess, argparse, collections, re, os, datetime
ap = argparse.ArgumentParser(); ap.add_argument('--since', required=True); ap.add_argument('--until', required=True); ap.add_argument('--out', default='work')
a = ap.parse_args(); os.makedirs(a.out, exist_ok=True)
def curl(args): return subprocess.run(['curl', '-sS', '-m', '90'] + args, capture_output=True, text=True).stdout
NONBIO = re.compile(r'educat|student|learn|teach|curricul|\bgame|school|museum|math|literacy|K-12|classroom|agricultur|crop|battery|solar|semiconductor|drone|aircraft|concrete', re.I)
orgs = collections.defaultdict(lambda: {'awards': []})
# NIH RePORTER
off = 0
while True:
    q = {"criteria": {"activity_codes": ["R44", "R42", "U44", "SB1", "U43"], "award_notice_date": {"from_date": a.since, "to_date": a.until}},
         "include_fields": ["ProjectNum", "Organization", "AwardAmount", "ProjectTitle", "AwardNoticeDate", "ContactPiName", "AgencyIcAdmin", "ApplId"], "offset": off, "limit": 500}
    r = json.loads(curl(['https://api.reporter.nih.gov/v2/projects/search', '-H', 'Content-Type: application/json', '-d', json.dumps(q)]) or '{}')
    res = r.get('results', [])
    for p in res:
        if p['project_num'][0] not in '12' or NONBIO.search(p['project_title'] or ''): continue
        o = p['organization']; k = o['org_name'].upper().strip()
        g = orgs[k]; g.update(org=o['org_name'], city=o.get('org_city'), state=o.get('org_state'))
        g['awards'].append(dict(agency='NIH ' + ((p.get('agency_ic_admin') or {}).get('abbreviation') or ''), project=p['project_num'], amount=p['award_amount'], date=(p['award_notice_date'] or '')[:10], pi=p['contact_pi_name'], title=p['project_title'], url=f"https://reporter.nih.gov/project-details/{p.get('appl_id','')}"))
    if len(res) < 500: break
    off += 500
# NSF
def us(d): return datetime.date.fromisoformat(d).strftime('%m/%d/%Y')
off = 1
BIO = re.compile(r'diagnos|therap|clinic|patient|medical|surg|drug|disease|cancer|biolog|biomed|tissue|implant|vaccin|antibod|cell|protein|health|imaging|wound|device', re.I)
while True:
    j = json.loads(curl([f"https://api.nsf.gov/services/v1/awards.json?keyword=%22Phase%20II%22%20AND%20(SBIR%20OR%20STTR)&dateStart={us(a.since)}&dateEnd={us(a.until)}&printFields=id,title,awardeeName,awardeeCity,awardeeStateCode,fundsObligatedAmt,date,piFirstName,piLastName,abstractText&rpp=25&offset={off}"]) or '{}')
    aw = j.get('response', {}).get('award', [])
    for x in aw:
        t = (x.get('title') or '') + ' ' + (x.get('abstractText') or '')[:1500]
        if 'Phase II' not in t or not BIO.search(t) or NONBIO.search(x.get('title') or ''): continue
        k = (x.get('awardeeName') or '').upper().strip(); g = orgs[k]
        g.update(org=x.get('awardeeName'), city=x.get('awardeeCity'), state=x.get('awardeeStateCode'))
        g['awards'].append(dict(agency='NSF', project=x['id'], amount=int(x.get('fundsObligatedAmt') or 0), date=x.get('date'), pi=f"{x.get('piFirstName','')} {x.get('piLastName','')}", title=x.get('title'), url=f"https://www.nsf.gov/awardsearch/showAward?AWD_ID={x['id']}"))
    if len(aw) < 25 or off > 3000: break
    off += 25
out = [dict(v, key=k) for k, v in orgs.items() if v['awards']]
json.dump(out, open(f'{a.out}/orgs.json', 'w'), indent=1)
print(f"{len(out)} organisations with new Phase II awards ({sum(1 for o in out if any(w['agency']=='NSF' for w in o['awards']))} via NSF)")
