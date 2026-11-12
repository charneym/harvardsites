#!/usr/bin/env python3
"""Funding press releases from PRNewswire category feeds (works with plain curl).
Usage: python3 fetch_prn.py --pages 60 --out work/   -> work/prn.json (US health/bio funding releases with domain, dateline, CEO, amounts)
~60 pages of the biotech list = ~6 months. Skips registry companies. Non-US datelines are dropped."""
import re, html, subprocess, json, argparse, concurrent.futures as cf, os
from common import known
ap = argparse.ArgumentParser(); ap.add_argument('--pages', type=int, default=60); ap.add_argument('--out', default='work'); a = ap.parse_args(); os.makedirs(a.out, exist_ok=True)
CATS = ['health-latest-news/biotechnology-list', 'health-latest-news/medical-equipment-list', 'health-latest-news/pharmaceuticals-list', 'financial-services-latest-news/venture-capital-list']
FUND = re.compile(r'seed|series a\b|pre-seed|sbir|sttr|barda|darpa|arpa-h|raises \$|secures \$|closes \$|\$[0-9.]+ ?(million|m)\b.*(round|financing|funding)|financing', re.I)
NOT = re.compile(r'series [b-f]|ipo|public offering|nasdaq|nyse|quarter|private placement|registered direct|finalist|winner|market (size|report|outlook)|billion|conference', re.I)
HEALTH = re.compile(r'bio|thera|pharm|medic|diagnos|clinic|cancer|onco|neuro|cell|gene|rna|surg|device|patient|drug|disease|vaccin|antibod|immun|cardi|ortho|implant|imaging|wound|ophthal|regenerat|protein|peptide', re.I)
NONUS = re.compile(r'LONDON|TORONTO|MONTREAL|VANCOUVER|SYDNEY|MELBOURNE|SINGAPORE|SHANGHAI|BEIJING|SUZHOU|HANGZHOU|SHENZHEN|HONG KONG|TOKYO|SEOUL|TEL AVIV|PARIS|BERLIN|MUNICH|ZURICH|BASEL|OXFORD|CAMBRIDGE, England|DUBLIN|AMSTERDAM|COPENHAGEN|STOCKHOLM|TAIPEI|MUMBAI|BANGALORE', re.I)
def curl(u): return subprocess.run(['curl', '-sS', '-m', '40', '-A', 'Mozilla/5.0', u], capture_output=True, text=True).stdout
def page(cp):
    c, p = cp; s = curl(f"https://www.prnewswire.com/news-releases/{c}/?page={p}&pagesize=100")
    return [(re.sub(r'\s+', ' ', html.unescape(re.sub('<[^>]+>', ' ', h))).strip(), 'https://www.prnewswire.com' + u) for u, h in re.findall(r'<a class="newsreleaseconsolidatelink[^"]*" href="([^"]+)".*?<h3>(.*?)</h3>', s, re.S)]
with cf.ThreadPoolExecutor(6) as ex: heads = [x for r in ex.map(page, [(c, p) for c in CATS for p in range(1, a.pages + 1)]) for x in r]
heads = list({u: t for t, u in heads if FUND.search(t) and HEALTH.search(t) and not NOT.search(t)}.items())
BAD = re.compile(r'prnewswire|cision|linkedin|facebook|twitter|w3\.org|newswire\.ca|prnasia|youtube|instagram|clinicaltrials|\.gov')
def rel(ut):
    u, t = ut; s = curl(u); i = s.find('release-body'); seg = s[i:i + 60000]
    tx = re.sub(r'\s+', ' ', html.unescape(re.sub('<[^>]+>', ' ', seg))); tx = re.sub(r'^.*?\}(?=[^{}]*/PRNewswire/)', '', tx)
    dl = re.search(r'([A-Z][A-Za-z .,\']{2,40}) ?, ([A-Z][a-z]{2,4}\.? \d{1,2}, 20\d\d) /PRNewswire', tx)
    doms = list(dict.fromkeys(d for d in re.findall(r'(?:https?://)?(?:www\.)?([a-z0-9-]+\.(?:com|bio|ai|io|org|net|co|health|tech|us|life|care|med|tx|science))\b', tx.lower()) if not BAD.search(d)))
    ceo = list(dict.fromkeys(re.findall(r'([A-Z][a-zA-Z.]+(?: [A-Z][a-zA-Z.\-]+){1,3}),? (?:Ph\.D\.|M\.D\.|PhD|MD)?,? ?(?:the )?(?:[Cc]o-[Ff]ounder and |[Ff]ounder and )?(?:CEO|Chief Executive Officer|President and CEO)', tx)))[:2]
    return dict(headline=t[:200], release=u, dateline=' '.join(dl.groups()) if dl else '', domain=doms[0] if doms else None, domains=doms[:4], ceo=ceo, amounts=re.findall(r'\$[\d.,]+ ?(?:million|M)\b', tx)[:3])
with cf.ThreadPoolExecutor(8) as ex: rs = list(ex.map(rel, heads))
rs = [r for r in rs if r['dateline'] and not NONUS.search(r['dateline'].split(' ')[0] + ' ' + r['dateline']) and not known(r['headline'].split(' ')[0] + ' ' + (r['headline'].split(' ')[1] if len(r['headline'].split()) > 1 else ''), r['domain'] or '')]
json.dump(rs, open(f'{a.out}/prn.json', 'w'), indent=1); print(len(rs), 'US funding releases (not in registry)')
