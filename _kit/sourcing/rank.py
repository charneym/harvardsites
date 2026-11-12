#!/usr/bin/env python3
"""Score sites for 'needs a new website' and build labelled contact sheets to LOOK at.
Usage: python3 rank.py work/shots   -> work/shots/ranked.json + work/shots/sheetNN.png (12 per sheet, best first)
Signals: site-builder defaults, few pages, little text, old copyright/years, no team/news pages, template phrases.
Parked/blocked pages are dropped. Always eyeball the sheets: the score is only a sort order."""
import json, sys, re
from PIL import Image, ImageDraw
d = sys.argv[1]; g = json.load(open(f'{d}/grade.json')); rows = []
for x in g:
    if x.get('err') or re.search(r'access denied|just a moment|checking your browser|attention required|forbidden', x.get('title', ''), re.I): continue
    if re.search(r'parked free|get this domain|for sale|domain name', x.get('snippet', ''), re.I) and x['nlinks'] <= 1: continue
    s = 0; why = []
    bf = [f for f in x['fp'] if f in ('wix', 'squarespace', 'godaddy', 'weebly', 'site123', 'strikingly', 'google sites', 'jimdo')]
    if bf: s += 2; why.append('+'.join(bf))
    if x['nlinks'] <= 3: s += 3; why.append(f"{x['nlinks']}links")
    elif x['nlinks'] <= 8: s += 1; why.append(f"{x['nlinks']}links")
    if x['textlen'] < 1500: s += 2; why.append(f"txt{x['textlen']}")
    elif x['textlen'] < 3500: s += 1; why.append(f"txt{x['textlen']}")
    if x['copyright'] and int(x['copyright']) < 2025: s += 2; why.append('©' + x['copyright'])
    if x['maxyr'] and x['maxyr'] < 2025: s += 2; why.append(f"maxyr{x['maxyr']}")
    if not x['team']: s += 1; why.append('noteam')
    if not x['news']: s += 1; why.append('nonews')
    if x['tmpl']: s += 3; why.append('TMPL:' + ','.join(x['tmpl']))
    x['score'] = s; x['why'] = ' '.join(why); rows.append(x)
rows.sort(key=lambda x: -x['score']); json.dump(rows, open(f'{d}/ranked.json', 'w'), indent=1)
W, H = 480, 300
for s0 in range(0, min(len(rows), 144), 12):
    sheet = Image.new('RGB', (W * 4, (H + 22) * 3), 'white'); dr = ImageDraw.Draw(sheet)
    for i, x in enumerate(rows[s0:s0 + 12]):
        try: im = Image.open(f"{d}/{x['id']}.png").convert('RGB').resize((W, H))
        except Exception: continue
        cx, cy = (i % 4) * W, (i // 4) * (H + 22); sheet.paste(im, (cx, cy + 22)); dr.text((cx + 4, cy + 4), f"{s0+i} {x['id']} [{x['score']}] {x.get('org','')[:30]}", fill='black')
    sheet.save(f'{d}/sheet{s0//12:02d}.png')
print(len(rows), 'graded; top:'); [print(x['score'], x['id'], '|', x.get('org', '')[:34], '|', x['why']) for x in rows[:15]]
