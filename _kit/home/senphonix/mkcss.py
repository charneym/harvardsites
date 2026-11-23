"""Build scenecss.css and extra.css for Senphonix from the cohesys versions (palette swap + Senphonix rules)."""
import pathlib
H = pathlib.Path(__file__).resolve().parent
C = H.parent / 'cohesys'
s = (C / 'scenecss.css').read_text()
a = s.index('.scene .bo1')
s = s[:a] + '''.scene .ar{fill:none;stroke:rgba(var(--boner),.62);stroke-width:1.3}
.scene .ms{fill:none;stroke:rgba(var(--boner),.38);stroke-width:1}
.scene .hm{fill:none;stroke:rgba(var(--boner),.8);stroke-width:1.6}
.scene .sp{fill:none;stroke:#f4f5fa;stroke-width:1.8;stroke-linejoin:round;stroke-linecap:round}
.scene .pd{fill:#f4f5fa;stroke:none}
.scene .cn,.scene .cn2{fill:none;stroke:rgba(var(--boner),.36);stroke-width:1}
.scene .tr{fill:none;stroke:#6db4ea;stroke-width:1.6;stroke-linejoin:round}
.scene .nd{fill:rgba(0,116,189,.12);stroke:#6db4ea;stroke-width:1.3}
.scene .ld{fill:none;stroke:rgba(var(--boner),.5);stroke-width:1}
.scene text{font-family:var(--mono);font-weight:500;font-size:12px;letter-spacing:.12em;fill:#e6e9f4}
.scene text.t2{fill:#f5a540}
.scene #lb1,.scene #lb2,.scene #lb3,.scene #sxCl{opacity:0}
.scene svg.mob text{font-size:24px;letter-spacing:.04em}
'''
s = s.replace('#bfb0b5', '#aab1cf').replace('#6e5a63', '#5a6290')
(H / 'scenecss.css').write_text(s)

e = (C / 'extra.css').read_text()
e = e[e.index('\n') + 1:]
e = ('/* ===== Senphonix: palette sampled from their logo (navy #2c388e wordmark, blue #0074bd bars, orange #f5951d pulse dot) '
     'and live site (white ground, navy type): deep navy ink #0b0f2e, blue accent (#6db4ea on dark), orange only for small highlights. '
     'Montserrat (close to their wordmark) for the logotype and labels, Source Serif 4 display, Manrope body. ===== */\n') + e
for x, y in [('#170a12', '#0b0f2e'), ('#f2f0f1', '#f4f5fa'), ('#f2e9e6', '#eef0f7'), ('#bfb0b5', '#aab1cf'), ('#6e5a63', '#5a6290'),
             ('.scene svg.mob text{font-size:30px;letter-spacing:.06em}', ''), ('.scene svg.mob text.t{font-size:24px;letter-spacing:.08em}', ''),
             ('.scene svg.mob text{font-size:21px;letter-spacing:.02em}', ''), ('.scene svg.mob text.t{font-size:16px;letter-spacing:.05em}', ''),
             ('@media (max-width:1024px){.scene text{font-size:14px;letter-spacing:.06em}.scene text.t{font-size:9.5px}}', '')]:
    e = e.replace(x, y)
old = "#pre .wm{font-family:var(--deco);font-weight:300;font-size:clamp(34px,3.6vw,52px);letter-spacing:.01em;white-space:nowrap;color:#f4f5fa}"
assert old in e
e = e.replace(old, """#pre .wm{font-family:'Montserrat',var(--sans);font-weight:500;font-size:clamp(34px,5.3vw,84px);letter-spacing:.28em;margin-right:-.28em;white-space:nowrap;color:#f4f5fa;display:block;text-align:center;line-height:1.2}
#pre .wm>span{display:inline-block}
#pre .wm .hk{animation:snxHk .9s cubic-bezier(.22,.61,.36,1) .35s both}
#pre .hk rect[fill="#2c388e"]{fill:#f4f5fa}
@keyframes snxHk{from{opacity:0;transform:translateY(30%)}to{opacity:1;transform:none}}
#pre .tgl{display:block;margin-top:6px;font:500 clamp(10px,1.05vw,15px)/1.4 'Montserrat',var(--sans);letter-spacing:.24em;margin-right:-.24em;text-transform:uppercase;color:#aab1cf;text-align:center;white-space:nowrap;animation:snxTg .8s ease-out .7s both}
@keyframes snxTg{from{opacity:0}to{opacity:1}}
@media (max-width:420px){#pre .wm{font-size:36px;letter-spacing:.16em;margin-right:-.16em}#pre .tgl{font-size:9px;letter-spacing:.12em;margin-right:-.12em}}""")
e += '''
/* Senphonix additions */
.hero .eyebrow{color:#f5a540}
.stat .v{white-space:nowrap}
.light .d2 em,.light .big em,.cta .big em{color:var(--acc)}
@media (max-width:1024px){.scene svg:not(.mob) text{font-size:13px;letter-spacing:.08em}}
'''
(H / 'extra.css').write_text(e)
print('ok')
e2 = (H / 'extra.css').read_text() + '@media (max-width:560px){.hero-h{font-size:7.3vw}}\n'
(H / 'extra.css').write_text(e2)
e3 = (H / 'extra.css').read_text() + '''#scene svg text{font-family:var(--mono);font-weight:500;font-size:12px;letter-spacing:.12em;fill:#e6e9f4}
#scene svg text.t2{fill:#f5a540}
#scene svg.mob text{font-size:24px;letter-spacing:.04em}
@media (min-width:861px) and (max-width:1024px){#scene svg text{font-size:13px;letter-spacing:.08em}}
'''
(H / 'extra.css').write_text(e3)
