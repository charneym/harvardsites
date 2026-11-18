#!/usr/bin/env node
/* PE template generator.  node _kit/pe/gen.js _kit/pe/data/<slug>.json
   -> _kit/src/<slug>.src.html  and  _kit/dossiers/<slug>.md
   then: node _kit/build.js _kit/src/<slug>.src.html <slug>/index.html   (or just: bash _kit/pe/qa.sh <slug>, which builds first)
   The engine (_kit/pe/engine.src.html) is the approved Burlington engine with every central fix (loader, transitions,
   masthead, person sheets, footer fit by viewBox, scrollbar gutter, CU/CV/CW). Sites only supply data. See schema.md. */
const fs = require('fs'), path = require('path');
const DIR = __dirname, KIT = path.join(DIR, '..'), ROOT = path.join(KIT, '..');
const file = process.argv[2];
if (!file) { console.error('usage: node _kit/pe/gen.js _kit/pe/data/<slug>.json'); process.exit(1); }
const J = JSON.parse(fs.readFileSync(file, 'utf8'));
const die = m => { console.error('gen: ' + m); process.exit(1); };
if (!J.slug || !/^[a-z0-9-]+$/.test(J.slug)) die('slug missing or not kebab-case');
if (!J.firm) die('firm missing');
const has = a => Array.isArray(a) && a.length > 0;
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ---------- colour ---------- */
const hx = h => { h = h.replace('#', ''); if (h.length === 3) h = h.split('').map(c => c + c).join(''); return [0, 2, 4].map(i => parseInt(h.substr(i, 2), 16)); };
const toHex = a => '#' + a.map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
const mix = (a, b, t) => toHex(hx(a).map((v, i) => v + (hx(b)[i] - v) * t));
const rgb = h => hx(h).join(',');
const lum = h => { const c = hx(h).map(v => { v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }); return .2126 * c[0] + .7152 * c[1] + .0722 * c[2]; };
const con = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + .05) / (Math.min(x, y) + .05); };
const toward = (c, target, ground, min) => { let t = 0, o = c; while (con(o, ground) < min && t < 1) { t += .04; o = mix(c, target, t); } return o; };

const PAL = J.palette || {};
let BRAND = PAL.ink || '#0b0b0c', ACC0 = PAL.accent || '#a8a6a1', PAPER = PAL.paper || '#f3f1ec';
const L = J.layout || {};
const BASE = L.base === 'light' ? 'light' : 'dark';
if (lum(BRAND) > .06) BRAND = toward(BRAND, '#000000', '#ffffff', 13);   // brand ground must be dark enough for light text
let T;
if (BASE === 'dark') {
  const ink = BRAND, deep = mix(ink, '#000000', .38), bone = PAPER;
  const accL = toward(mix(ACC0, PAPER, .0), PAPER, ink, 5.2), accD = toward(ACC0, ink, bone, 5.2);
  T = { ink, ink2: mix(ink, '#ffffff', .035), ink3: mix(ink, '#ffffff', .075), deep, bone, bone2: mix(bone, ink, .045), bone3: mix(bone, ink, .1),
    stone: toward(mix(bone, ink, .36), bone, ink, 6), stoneD: toward(mix(ink, bone, .36), ink, bone, 6), acc: ACC0, accL, accD };
  T.fieldbg = `radial-gradient(60% 75% at 72% 50%,${mix(ink, '#ffffff', .07)} 0%,${ink} 52%,${deep} 100%)`;
  T.C = { fg: rgb(bone), acc: rgb(accL), hi: rgb(bone), gr: rgb(ink) };
  T.CF = { fg: rgb(bone), acc: rgb(accL), hi: rgb(bone), gr: rgb(deep) };
} else {
  /* light-led (Northern Shore / Hidden River): token names keep their roles ("ink" = page ground, "bone" = text on it) */
  const ink = PAPER, bone = BRAND;
  const acc = toward(ACC0, BRAND, PAPER, 4.8), accD = toward(ACC0, '#ffffff', BRAND, 5.2);
  T = { ink, ink2: mix(ink, bone, .03), ink3: mix(ink, bone, .065), deep: mix(ink, '#ffffff', .6), bone, bone2: mix(bone, '#ffffff', .05), bone3: mix(bone, '#ffffff', .1),
    stone: toward(mix(bone, ink, .32), bone, ink, 6.2), stoneD: toward(mix(ink, bone, .26), ink, bone, 6), acc, accL: acc, accD };
  T.fieldbg = `radial-gradient(70% 80% at 72% 46%,${mix(ink, '#ffffff', .7)} 0%,${ink} 55%,${mix(ink, bone, .06)} 100%)`;
  T.C = { fg: rgb(bone), acc: rgb(acc), hi: rgb(acc), gr: rgb(ink) };
  T.CF = { fg: rgb(ink), acc: rgb(accD), hi: rgb(ink), gr: rgb(bone) };
}

/* ---------- typography: approved pairings (from the live sites) ---------- */
const SERIF400 = '.d1,.d2,.d3,.lede,.mani .txt,.stat .v,.step h3,.ind li,.pco h3,.row-a h3,.cta .big,.facts dd,.pl3 h3,.addr h3,.offs b,.xt .t,.mm li a,.fld input,.fld textarea,.addr .ml,.credit p,.ps-body h2,#pre .cnt{font-weight:400!important}';
const SERIFSP = '.d1{letter-spacing:-.025em;line-height:.98}.d2{letter-spacing:-.022em}.d3{letter-spacing:-.018em}.hero-h{letter-spacing:-.03em}.stat .v{letter-spacing:-.03em}.mani .txt{letter-spacing:-.018em}.cta .big{letter-spacing:-.03em}.xt .t{letter-spacing:-.02em}';
const EMSAME = '.d1 em,.d2 em,.d3 em,.cta .big em,.mani .txt em,.big em{font-family:var(--disp);font-size:1em}.hero-h .l>em:first-child,.d1>em:first-child,.d2>em:first-child,.d3>em:first-child,.big>em:first-child{padding-left:.08em}';
const EMFLAT = '.d1 em,.d2 em,.d3 em,.cta .big em,.mani .txt em,.big em{font-style:normal;font-family:var(--disp);font-weight:400;font-size:1em}';
/* fonts: chosen per site (any @fontsource family installed in _kit/node_modules; add one with npm i --no-save).
   {spec:"Family:300,400; Other:400,500; Mono:400", disp, serif (accent italics), sans, mono, kind:"sans"|"serif", weight400}
   kind serif applies the serif-display fixes (tracking, same-family italic accents, italic overhang pad). */
const FS = J.fonts || {};
if (!FS.spec || !FS.disp || !FS.sans || !FS.mono) die('fonts needs {spec, disp, sans, mono} (see schema.md)');
const F = { spec: FS.spec, disp: FS.disp, serif: FS.serif || FS.disp, sans: FS.sans, mono: FS.mono, kind: FS.kind === 'serif' ? 'serif' : 'sans',
  css: (FS.kind === 'serif' ? SERIFSP + EMSAME : '') + (FS.weight400 ? SERIF400 : '') + (FS.flatAccent ? EMFLAT : '') };
const FAM = { sans: "system-ui,-apple-system,'Segoe UI',sans-serif", serif: "Georgia,'Times New Roman',serif" };
const fontLoads = F.spec.split(';').map(s => s.trim()).flatMap(s => { const [fam, ws] = s.split(':'); return ws.split(',').map(w => (w.endsWith('i') ? 'italic ' : '') + w.replace('i', '') + ' 1em "' + fam.trim() + '"'); });

/* ---------- shape + layout variants ---------- */
/* layout: chosen per site. sections = the home order (any of thesis, story, sectors, portfolio, team, news);
   radius = corner radius in px for buttons/markers/portraits (site CSS in "css" does the rest) */
const RAD = L.radius == null ? 10 : +L.radius;
const SHP = { r: Math.min(47, RAD + 2), rd: Math.min(.5, RAD / 48), css: '.btn{border-radius:' + (RAD > 30 ? 999 : RAD) + 'px}.pt .ph{border-radius:' + Math.min(RAD, 16) + 'px}' + (RAD > 30 ? '.rail span::before,.ind li::before,.aims li::before{border-radius:50%}' : RAD < 4 ? '.rail span::before,.ind li::before,.aims li::before{border-radius:0}' : '') };
const SECS = ['thesis', 'story', 'sectors', 'portfolio', 'team', 'news'];
if (!Array.isArray(L.sections)) die('layout.sections (home section order) is required, e.g. ["thesis","story","sectors","portfolio","team","news"]');
L.sections.forEach(k => { if (!SECS.includes(k)) die('unknown section ' + k); });
const order = L.sections.filter(k => ({
  thesis: J.thesis || has(J.stats), story: J.story && has(J.story.steps), sectors: has(J.sectors), portfolio: has(J.portfolio), team: has(J.team), news: has(J.news) })[k]);
/* themes: walk back from the (light) CTA so bands alternate; the story band is always dark (ink2) */
const themes = []; let next = 'light', lightAlt = false;
for (let i = order.length - 1; i >= 0; i--) {
  if (order[i] === 'story') { themes[i] = ''; next = 'dark'; continue; }
  if (order[i] === 'thesis') { themes[i] = 'dark'; next = 'dark'; continue; }   /* the scroll-coloured statement is styled for a dark band */
  if (next === 'light') { themes[i] = order[i + 1] === 'story' || (i === 0) ? 'dark2' : 'dark'; next = 'dark'; }
  else { themes[i] = 'light' + (lightAlt ? ' alt' : ''); lightAlt = !lightAlt; next = 'light'; }
}
const HOMEORDER = order.map((k, i) => [k, themes[i]]);

/* ---------- data normalisation ---------- */
const slugify = s => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const short = J.short || J.firm.replace(/\b(Capital|Partners|Group|Holdings|Equity|Investments?|Management|Advisors|LLC|LP|Inc\.?|&|and)\b/gi, '').trim().split(/\s+/)[0] || J.firm;
const HQ = J.hq ? [J.hq.city, J.hq.state].filter(Boolean).join(', ') : '';
const offices = has(J.contact && J.contact.offices) ? J.contact.offices : (HQ ? [{ label: 'Headquarters', city: HQ }] : []);
const port = (J.portfolio || []).map(c => ({ name: c.name, desc: c.desc || '', cur: c.status !== 'realized',
  st: [c.status === 'realized' ? 'Realized' : 'Current', c.year, c.loc].filter(Boolean).join(' · '),
  links: [c.url ? ['Website', c.url] : null, c.pr ? ['Press release', c.pr] : null].filter(Boolean) }));
const team = (J.team || []).map(p => ({ slug: slugify(p.name), name: p.name, title: p.title || '', grp: p.group || '', img: p.photo || '',
  sum: p.sum || (Array.isArray(p.bio) ? p.bio[0] : p.bio || '').split(/(?<=\.)\s/)[0].slice(0, 160),
  bio: Array.isArray(p.bio) ? p.bio : (p.bio ? String(p.bio).split(/\n\n+/) : []) }));
const story = J.story && has(J.story.steps) ? J.story : null;
const D = {
  firm: J.firm, short, legal: J.legal || J.firm, email: J.email || (J.contact && J.contact.email) || '', hq: HQ, wordmark: J.wordmark || J.firm,
  metaTitle: (J.meta && J.meta.title) || J.firm + (J.thesisLine ? ' — ' + J.thesisLine : ''),
  home: { eyebrow: (J.hero && J.hero.eyebrow) || ['Private equity', HQ && J.hq.city].filter(Boolean).join(' · '), title: (J.hero && J.hero.title) || [esc(J.firm)], lede: J.lede || '',
    cta1: has(J.sectors) || (J.criteria && J.criteria.length) ? ['What we look for', '#/focus'] : (has(J.portfolio) ? ['Our portfolio', '#/portfolio'] : ['Contact', '#/contact']),
    cta2: has(J.portfolio) && (has(J.sectors) || has(J.criteria)) ? ['Portfolio', '#/portfolio'] : (has(J.team) ? ['Team', '#/team'] : null) },
  thesis: J.thesis ? { kick: J.thesis.kick, text: J.thesis.text } : null, stats: J.stats || [],
  story: story ? { kick: story.kick, title: story.title, steps: story.steps } : null,
  focus: { title: J.focusTitle, intro: J.focusIntro, criteria: (J.criteria || []).map(c => Array.isArray(c) ? c : [c.k, c.v]), sectors: J.sectors || [], sectorsText: J.sectorsText, homeTitle: J.sectorsTitle, sectorsTitle: J.sectorsTitle, models: J.models, pillars: J.pillars },
  portfolio: port, portIntro: J.portfolioIntro, portHome: J.portfolioTitle, portPage: J.portfolioTitle,
  team, teamIntro: J.teamIntro, teamHome: J.teamTitle, teamPage: J.teamTitle,
  news: (J.news || []).map(n => ({ d: n.date, s: n.source, t: n.title, u: n.url })).sort((a, b) => b.d.localeCompare(a.d)), newsIntro: J.newsIntro,
  cta: J.cta || {}, contact: { title: J.contact && J.contact.title, intro: J.contact && J.contact.intro, note: J.contact && J.contact.note, phone: J.contact && J.contact.phone },
  offices
};
if (D.news.some(n => !/^\d{4}-\d{2}-\d{2}$/.test(n.d))) die('news dates must be YYYY-MM-DD');
const ROUTES = [['focus', 'Focus', has(D.focus.criteria) || has(D.focus.sectors)], ['portfolio', 'Portfolio', has(port)], ['team', 'Team', has(team)], ['news', 'News', has(D.news)]].filter(r => r[2]);

/* ---------- the site's OWN hero and story (custom per firm; see BUILDER.md) ---------- */
const SD = path.join(DIR, 'sites', J.slug), rd = f => fs.existsSync(path.join(SD, f)) ? fs.readFileSync(path.join(SD, f), 'utf8') : null;
const heroJs = rd('hero.js'); if (!heroJs || !/var HM\s*=/.test(heroJs)) die('missing _kit/pe/sites/' + J.slug + '/hero.js defining var HM={geo,draw} (the firm\'s own hero)');

const storyJs = story ? rd('story.js') : 'function scene(){return "<svg></svg>"}function storyDraw(){return function(){}}';
if (!storyJs || !/function scene\(/.test(storyJs) || !/function storyDraw\(/.test(storyJs)) die('missing _kit/pe/sites/' + J.slug + '/story.js defining scene() and storyDraw(svg) (the firm\'s own diagram)');
if (story && (story.steps.length < 3 || story.steps.length > 4)) die('story needs 3 or 4 steps');
const H = J.hero || {}, HP = Object.assign({}, H.params || {});
const HERO = { params: HP, C: T.C, CF: T.CF, font: `'${F.disp}',${F.kind === 'serif' ? 'Georgia,serif' : 'system-ui,sans-serif'}`, mono: `'${F.mono}',ui-monospace,monospace`, word: (J.hero && J.hero.word) || short.toUpperCase() };

/* ---------- logo ---------- */
const LG = J.logo || {};
const textLogo = (LG.text || [J.firm.toUpperCase()]);
const txtSvg = '<svg class="logo txt" viewBox="0 0 300 ' + (textLogo.length * 20 + 6) + '" role="img" aria-label="' + esc(J.firm) + '">' + textLogo.map((t, i) => '<text x="0" y="' + (18 + i * 20) + '">' + esc(t) + '</text>').join('') + '</svg>';
let brand;
if (LG.svg) brand = LG.svg.replace('<svg', '<svg class="logo svgl" role="img" aria-label="' + esc(J.firm) + '"');
else if (LG.url) brand = '<img class="logo imgl" src="' + esc(LG.url) + '" alt="' + esc(J.firm) + '" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'block\'"><span class="logo-t" style="display:none">' + esc(J.firm) + '</span>';
else brand = txtSvg;
const logoH = LG.height || (LG.url || LG.svg ? 38 : 30);
const logoCss = `.brand{display:flex;align-items:center;gap:14px;height:64px}
.logo{height:${logoH}px;width:auto;max-width:min(260px,52vw);display:block;overflow:visible;color:var(--bone)}
.logo.txt text{font-family:var(--disp);font-weight:400;font-size:17px;letter-spacing:.16em;fill:currentColor}
.logo.imgl{object-fit:contain;object-position:left center${LG.invert ? ';filter:brightness(0) invert(1)' : ''}}
.logo-t{font-family:var(--disp);font-size:18px;letter-spacing:.14em;text-transform:uppercase;white-space:nowrap}
@media (max-width:860px){.logo{height:${Math.round(logoH * .82)}px}}`;

/* ---------- regions ---------- */
const PK = slugify(J.slug).replace(/-/g, '').slice(0, 10);
const desc = (J.meta && J.meta.description) || J.lede || '';
const fav = encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' fill='${BASE === 'dark' ? T.ink : T.bone}'/><rect x='12' y='12' width='40' height='40' rx='${SHP.rd * 40}' fill='${BASE === 'dark' ? T.accL : T.accD}'/></svg>`).replace(/'/g, '%27');
const navLinks = ROUTES.map(r => `    <a class="nl ul" href="#/${r[0]}">${r[1]}</a>\n`).join('');
const R = {
  meta: `<title>${esc(D.metaTitle)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="theme-color" content="${BASE === 'dark' ? T.ink : T.ink}">
<link rel="icon" href="data:image/svg+xml,${fav}">`,
  fonts: '/*@fonts ' + F.spec + '*/',
  root: `:root{
  --ink:${T.ink};--inkr:${rgb(T.ink)};--boner:${rgb(T.bone)};--accr:${rgb(T.accL)};--ink2:${T.ink2};--ink3:${T.ink3};--deep:${T.deep};
  --bone:${T.bone};--bone2:${T.bone2};--bone3:${T.bone3};
  --stone:${T.stone};--stoneD:${T.stoneD};
  --acc:${T.acc};--accL:${T.accL};--accD:${T.accD};
  --hair:rgba(var(--boner),.14);--hairD:rgba(var(--inkr),.14);
  --disp:'${F.disp}',${F.kind === 'serif' ? FAM.serif : FAM.sans};
  --serif:'${F.serif}',${FAM.serif};
  --sans:'${F.sans}',${FAM.sans};
  --mono:'${F.mono}',ui-monospace,Menlo,monospace;
  --gut:clamp(16px,4.2vw,72px);--gap:clamp(12px,1.6vw,28px);
  --maxw:1320px;--side:max(var(--gut),calc((100% - var(--maxw)) / 2));
  --sec:clamp(112px,14vh,200px);
  --ease:cubic-bezier(.65,.05,.2,1);--eo:cubic-bezier(.22,.61,.36,1);
}
`,
  fieldbg: `.fieldbg{position:fixed;inset:0;z-index:0;background:${T.fieldbg}}
#field{position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;opacity:0;transition:opacity .9s ease-out}
#field.ready{opacity:1}`,
  logocss: logoCss,
  scenecss: fs.readFileSync(path.join(DIR, 'scene.css'), 'utf8'),
  seen: `<script>try{if(sessionStorage.getItem("${PK}-pre")==="1")document.documentElement.classList.add("seen")}catch(e){}</script>`,
  pre: `<div id="pre" aria-hidden="true">
  <div class="pc">
    <svg class="mk" viewBox="0 0 96 96"><rect x="1" y="1" width="94" height="94" rx="${SHP.r}"/></svg>
    <div class="wm"><span>${esc(short.toUpperCase())}</span></div>
  </div>
  <span class="lab pl">${esc(J.preTag || 'Private equity' + (HQ ? ' · ' + J.hq.city : ''))}</span>
  <div class="bar"><i id="preBar"></i></div>
  <span class="cnt" id="preCnt">000</span>
</div>`,
  brand: `<a href="#/" class="brand" aria-label="${esc(J.firm)}, home">
    ${brand}
  </a>`,
  navmenu: `<nav class="nav" aria-label="Primary">
${navLinks}    <a class="btn" href="#/contact">Contact <svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mm"><span id="burgerLab">Menu</span><i aria-hidden="true"></i></button>
  </nav>
</header>

<div class="mm" id="mm" aria-hidden="true" data-lenis-prevent>
  <ol>
    <li><a href="#/">Home</a></li>
${ROUTES.map(r => `    <li><a href="#/${r[0]}">${r[1]}</a></li>\n`).join('')}    <li><a href="#/contact">Contact</a></li>
  </ol>
  <div class="mmf">
    <div><span class="lab">${offices.length > 1 ? 'Offices' : 'Office'}</span><br>${offices.map(o => esc(o.city)).join(' · ')}</div>
    ${D.email ? `<div><span class="lab">Email</span><br>${esc(D.email)}</div>` : ''}
  </div>
</div>`,
  xc: `<div class="xc" id="xc" aria-hidden="true"></div>
<div class="xt" id="xt" aria-hidden="true"><span class="lab" id="xlab">${esc(J.firm)}</span><div class="t" id="xtt"></div></div>
`,
  site: `var SITE=${JSON.stringify(J.firm)};
var PK=${JSON.stringify(PK)};var SUBDIM=${BASE === 'dark' ? .42 : .5};var SHAPE_R=${SHP.r};`,
  content: `var FONTS=${JSON.stringify(fontLoads)};
var D=${JSON.stringify(D)};
var HOMEORDER=${JSON.stringify(HOMEORDER)};
var HERO=${JSON.stringify(HERO)};`,
  views: fs.readFileSync(path.join(DIR, 'views.js'), 'utf8'),
  field: heroJs.trim() + '\n' + fs.readFileSync(path.join(DIR, 'field-shell.js'), 'utf8').replace(/^[\s\S]*?(?=var field=)/, ''),
  story: storyJs
};

/* ---------- site css (shared components + variant overrides) ---------- */
const PEOPLE_CSS = `/* portrait grid with person sheets (CI/CO), from Arkview */
.pg{display:flex;flex-wrap:wrap;justify-content:center;gap:clamp(30px,3vw,44px) var(--gap)}
.pt{position:relative;display:block;width:calc((100% - 4 * var(--gap)) / 5);min-width:0;color:inherit}
.pt .ph{position:relative;aspect-ratio:4/5;overflow:hidden;border-radius:8px;background:var(--bone3)}
.dark .pt .ph,.dark2 .pt .ph{background:var(--ink3)}
.pt .ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 20%;filter:grayscale(1) contrast(1.03);transition:filter .35s ease-out,transform .45s var(--eo)}
a.pt:hover .ph img,a.pt:focus-visible .ph img{filter:grayscale(0);transform:scale(1.035)}
.pt .ph.noph{background:linear-gradient(160deg,var(--bone3),var(--bone2))}
.dark .pt .ph.noph,.dark2 .pt .ph.noph{background:linear-gradient(160deg,var(--ink3),var(--ink2))}
.pt .ph.noph img{display:none}
.pt h3{font-family:var(--disp);font-weight:400;font-size:20px;line-height:1.2;letter-spacing:-.02em;margin:16px 0 4px;transition:color .25s ease-out}
.pt h3 span{background:linear-gradient(currentColor,currentColor) 0 100%/0 1px no-repeat;transition:background-size .35s var(--eo),color .25s ease-out;padding-bottom:2px}
a.pt:hover h3,a.pt:focus-visible h3{color:var(--accD)}
.dark a.pt:hover h3,.dark2 a.pt:hover h3{color:var(--accL)}
a.pt:hover h3 span,a.pt:focus-visible h3 span{background-size:100% 1px}
.pt p{font-size:14.5px;line-height:1.4;margin:0;color:var(--stoneD)}
.dark .pt p,.dark2 .pt p{color:var(--stone)}
.pt .go{position:absolute;right:10px;bottom:10px;width:34px;height:34px;display:grid;place-items:center;background:var(--bone);color:var(--ink);border-radius:${Math.min(SHP.r, 17)}px;opacity:0;transform:translateY(6px);transition:opacity .3s var(--eo),transform .3s var(--eo)}
.pt .go svg{width:14px;height:10px}
a.pt:hover .go,a.pt:focus-visible .go{opacity:1;transform:none}
.grp-l{display:block;text-align:center;margin:0 0 28px}
.grp+.grp{margin-top:clamp(64px,7vw,104px)}
@media (max-width:1100px){.pt{width:calc((100% - 3 * var(--gap)) / 4)}}
@media (max-width:860px){.pt{width:calc((100% - 2 * var(--gap)) / 3)}}
@media (max-width:560px){
  .pg{display:block}
  .pt{width:100%;display:grid;grid-template-columns:76px 1fr;column-gap:18px;align-items:center;padding:12px 0;border-top:1px solid var(--hairD)}
  .dark .pt,.dark2 .pt{border-top-color:var(--hair)}
  .pt .ph{grid-row:1/3}
  .pt h3{margin:0 0 2px;align-self:end;font-size:18px}
  .pt p{align-self:start}
  .pt .go{display:none}
}
.mh .mh-group+.mh-group{margin-top:0}
.dark .mh,.dark2 .mh{--mh-ink:var(--bone);--mh-mute:var(--stone);--mh-line:var(--hair);--mh-accent:var(--accL)}
/* PE template components */
.more{margin-top:48px}
.stats.solo{margin-top:0}
.sec.light.alt{background:var(--bone2)}
@media (min-width:861px){.pillars.p2{grid-template-columns:repeat(2,minmax(0,1fr))}.pillars.p3{grid-template-columns:repeat(3,minmax(0,1fr))}.pillars.p4{grid-template-columns:repeat(4,minmax(0,1fr))}}
@media (min-width:861px) and (max-width:1100px){.pillars.p4{grid-template-columns:repeat(2,minmax(0,1fr))}}
/* phones: the portrait sheet takes the full height so a long bio paragraph always fits its scroll area */
@media (max-width:760px){.ps:not(.noimg) .ps-sheet{height:calc(100vh - 40px);height:calc(100dvh - 40px)}.ps-media{height:min(22vh,190px)}.ps-body p{font-size:16px;line-height:1.62}}
/* the bio column scrolls (ps-body); its wrapper must not clip a line that is half-scrolled at the edge */
.ps-col{overflow:visible}
/* phones: a hero line too long for the screen wraps instead of running off it (the reveal splits real lines) */
@media (max-width:560px){.hero-h .l{white-space:normal}}
.offs .ol{margin:10px 0 0;font-size:15px;line-height:1.55;color:var(--stoneD)}
.bigsvg text{font-family:var(--disp)}
.dark .facts dt,.dark2 .facts dt{color:var(--stone)}
.dark .pco p,.dark2 .pco p{color:var(--stone)}
.dark .shead p,.dark2 .shead p{color:var(--stone)}`;
const LIGHT_CSS = BASE !== 'light' ? '' : `/* light-led base (lifted from Northern Shore): fix the few rules that assume a dark ground */
.grain{opacity:.03;filter:invert(1)}
.fld input,.fld textarea{border-bottom-color:rgba(${rgb(T.ink)},.35)}
.fld .bar{background:#ffffff}
.fld .err{color:#ffb4a8}.fld.bad input,.fld.bad textarea{border-bottom-color:#ffb4a8}
.fld label{color:${T.stoneD}}
.hero-foot .s{color:rgba(${rgb(T.bone)},.84)}
.step p{color:rgba(${rgb(T.bone)},.82)}
.mani .txt .w{opacity:.14}
.light .btn.solid{background:#ffffff;color:${T.bone};border-color:#ffffff}
.light .btn.solid::before{background:var(--accD)}
.light .btn:hover{color:${T.bone};border-color:#ffffff}
.light .btn::before{background:#ffffff}
.btn:hover{color:#ffffff;border-color:var(--acc)}
.btn::before{background:var(--acc)}
.btn.solid{background:var(--acc);color:#ffffff;border-color:var(--acc)}
.btn.solid::before{background:${T.bone}}
.btn.solid:hover{border-color:${T.bone}}
.xc{background:${T.bone}}.xt .t{color:#ffffff}.xt .lab{color:${T.accD}}.xc::before{background:${T.accD}}
.ps-scrim{background:rgba(${rgb(T.bone)},.4)}
.ftr{background:${T.bone};color:${T.ink};--hair:rgba(${rgb(T.ink)},.16)}
.ftr .c{color:${T.stoneD}}.ftr .c a{color:#ffffff}.ftr .c .lab{color:${T.accD}}.ftr .lab{color:${T.stoneD}}.ftr .bigsvg{color:#ffffff}
.scene .node.on{fill:var(--acc);stroke:var(--acc)}
.rail span{color:${T.stone}}.rail span::before{background:var(--ink2);border-color:${T.stone}}
#pre{background:var(--deep)}
.scene text{fill:${T.stone}}.scene text.w{fill:${T.bone}}.scene text.a{fill:${T.acc}}.scene .node{fill:#ffffff}
.light .pt .go{background:var(--ink);color:var(--bone)}
.light a.pt:hover h3{color:var(--accD)}`;
R.sitecss = PEOPLE_CSS + '\n/* typography */\n' + F.css + '\n' + SHP.css + '\n' + LIGHT_CSS + (J.css ? '\n/* site */\n' + J.css : '');

/* ---------- assemble ---------- */
let h = fs.readFileSync(path.join(DIR, 'engine.src.html'), 'utf8');
for (const k of Object.keys(R)) {
  const a = '<!--@@' + k + '@@-->', b = '/*@@' + k + '@@*/';
  const tok = h.includes(a) ? a : h.includes(b) ? b : null;
  if (!tok) die('engine token missing: ' + k);
  const val = R[k];
  h = h.split(tok).join(tok === a ? val : (['root', 'fonts', 'fieldbg', 'logocss', 'scenecss', 'sitecss'].includes(k) ? val : val));
}
/* the navmenu region in the engine also carried the closing header and the mobile menu */
if (/@@\w+@@/.test(h)) die('unfilled tokens: ' + h.match(/@@\w+@@/g).join(','));
const out = path.join(KIT, 'src', J.slug + '.src.html');
fs.writeFileSync(out, h);

/* ---------- dossier (facts with sources only; the repo is public) ---------- */
const src = u => u ? ' — ' + u : '';
const dz = [`# ${J.firm}`, '', `Concept site generated by _kit/pe/gen.js from _kit/pe/data/${J.slug}.json. Facts only, each with its source.`, '',
  `- Website: ${J.site || ''}`, `- Headquarters: ${HQ}${src(J.hq && J.hq.src)}`, J.email ? `- Email: ${J.email}${src(J.emailSrc)}` : '',
  '', '## Team', ...team.map((p, i) => `- ${p.name}, ${p.title}${src((J.team[i] || {}).src)}`),
  '', '## Portfolio', ...(J.portfolio || []).map(c => `- ${c.name}${c.year ? ' (' + c.year + ')' : ''}: ${c.desc || ''}${src(c.src || c.pr || c.url)}`),
  '', '## News', ...D.news.map(n => `- ${n.d} ${n.s}: ${n.t} — ${n.u}`),
  '', '## Sources', ...(J.sources || []).map(s => typeof s === 'string' ? '- ' + s : `- ${s.fact}: ${s.url}`)].filter(x => x !== '');
fs.writeFileSync(path.join(KIT, 'dossiers', J.slug + '.md'), dz.join('\n') + '\n');
console.log('gen: wrote ' + path.relative(ROOT, out) + ' (' + (h.length / 1024 | 0) + 'KB) · ' + BASE + ' base · ' + F.disp + ' / ' + F.sans);
console.log('next: node _kit/build.js ' + path.relative(ROOT, out) + ' ' + J.slug + '/index.html   (qa.sh does this for you)');
