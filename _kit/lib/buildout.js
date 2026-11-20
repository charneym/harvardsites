/* BUILD-OUT PAGES (HOME_BRIEF UPDATE 2026-11-20, part 1)
   Home-only concept sites: every primary nav item except Contact opens a short in-site page at #/more/<slug-of-label>
   in the site's own design (its header stays, its footer is cloned, its CSS variables / .btn / .lab / .d2 / .ul classes are used).
   Loaded as the LAST entry of the @libs marker, so it runs before the site's own script and can own the #/more/* routes:
   the site's router never sees them, back from #/more/x lands on home at the top.
   Opt-in: add "buildout" to the <!--@libs ...--> marker. Optional per-site overrides before it: window.BUILDOUT={lang:{...}}. */
(function(){
"use strict";
if(window.__buildout)return;window.__buildout=1;
var D=document,DE=D.documentElement;
var T={
 en:{eye:"Concept preview",h:"{item}, built out.",body:"This is a concept for the home page. If you like the direction, I'd build out this page and the rest of the site in the same style, with your team, portfolio and news, and handle the move from your current site. Reply to the email this link came in, and we can take it from there.",back:"Back to the home page",keep:"Or keep scrolling the concept",crumb:"Home"},
 de:{eye:"Konzeptvorschau",h:"{item}, ausgebaut.",body:"Dies ist ein Konzept für die Startseite. Wenn Ihnen die Richtung gefällt, baue ich diese Seite und den Rest der Website im selben Stil aus, mit Ihrem Team, Ihrem Portfolio und Ihren News, und übernehme den Umzug von Ihrer jetzigen Website. Antworten Sie einfach auf die E-Mail, mit der dieser Link kam, dann geht es von dort weiter.",back:"Zurück zur Startseite",keep:"Oder weiter durch das Konzept scrollen",crumb:"Start"},
 fr:{eye:"Aperçu du concept",h:"{item}, développé.",body:"Ceci est un concept pour la page d'accueil. Si la direction vous plaît, je développerais cette page et le reste du site dans le même style, avec votre équipe, votre portefeuille et vos actualités, et je m'occuperais de la migration depuis votre site actuel. Répondez à l'e-mail par lequel ce lien vous est parvenu, et nous verrons la suite ensemble.",back:"Retour à l'accueil",keep:"Ou continuer à parcourir le concept",crumb:"Accueil"},
 nl:{eye:"Conceptvoorbeeld",h:"{item}, uitgewerkt.",body:"Dit is een concept voor de homepage. Als de richting u bevalt, werk ik deze pagina en de rest van de site in dezelfde stijl uit, met uw team, portfolio en nieuws, en verzorg ik de overstap van uw huidige site. Beantwoord de e-mail waarin deze link kwam, dan nemen we het vanaf daar.",back:"Terug naar de homepage",keep:"Of scroll verder door het concept",crumb:"Home"},
 es:{eye:"Vista previa del concepto",h:"{item}, desarrollado.",body:"Este es un concepto para la página de inicio. Si le gusta la dirección, desarrollaría esta página y el resto del sitio con el mismo estilo, con su equipo, su cartera y sus noticias, y me encargaría de la migración desde su sitio actual. Responda al correo en el que llegó este enlace y seguimos desde ahí.",back:"Volver a la página de inicio",keep:"O seguir recorriendo el concepto",crumb:"Inicio"},
 it:{eye:"Anteprima del concept",h:"{item}, sviluppato.",body:"Questo è un concept per la home page. Se la direzione le piace, svilupperei questa pagina e il resto del sito nello stesso stile, con il suo team, il portafoglio e le notizie, e gestirei il passaggio dal sito attuale. Risponda all'e-mail con cui è arrivato questo link e proseguiamo da lì.",back:"Torna alla home page",keep:"Oppure continua a scorrere il concept",crumb:"Home"},
 sv:{eye:"Konceptförhandsvisning",h:"{item}, utbyggd.",body:"Det här är ett koncept för startsidan. Om ni gillar riktningen bygger jag ut den här sidan och resten av webbplatsen i samma stil, med ert team, er portfölj och era nyheter, och sköter flytten från er nuvarande webbplats. Svara på mejlet som den här länken kom i, så tar vi det därifrån.",back:"Tillbaka till startsidan",keep:"Eller fortsätt skrolla i konceptet",crumb:"Start"}
};
var lang=(DE.getAttribute("lang")||"en").toLowerCase().split("-")[0];
var L=T[lang]||T.en;var O=window.BUILDOUT||{};if(O.copy)for(var k in O.copy)L[k]=O.copy[k];
/* capture the site's Lenis instance (created later by the site script) so the home page can be parked at the top, and frozen, under the build-out page */
var LN=null;if(window.Lenis&&!window.Lenis.__bo){try{var _L=window.Lenis;var Sub=class extends _L{constructor(o){super(o);LN=this}};Sub.__bo=1;window.Lenis=Sub}catch(e){}}
function toTop(){try{if(LN)LN.scrollTo(0,{immediate:true,force:true})}catch(e){}try{window.scrollTo(0,0)}catch(e){}}
var RM=false;try{RM=matchMedia("(prefers-reduced-motion: reduce)").matches}catch(e){}
var ARR='<svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>';
var CSS=
'.bo{position:fixed;inset:0;z-index:780;overflow-x:hidden;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;display:none;color:var(--bone,var(--paper,#f3f1ea));isolation:isolate}'+
'.bo.on{display:block}'+
'html.bo-open,html.bo-open body{overflow:hidden!important}'+
'.bo{scrollbar-width:thin;scrollbar-color:var(--stoneD,rgba(255,255,255,.3)) transparent}'+
/* behind the page only the hero ART shows (the live field canvas, hero photos / renders); the home copy is hidden so it never ghosts through */
'html.bo-open main{visibility:hidden}html.bo-open main [data-bo-echo]{visibility:visible}html.bo-open main [data-bo-echo] [data-bo-mute]{visibility:hidden}'+
'.bo-tint{position:fixed;inset:0;z-index:-1;pointer-events:none;background:linear-gradient(180deg,rgba(var(--inkr,12,14,20),.74) 0%,rgba(var(--inkr,12,14,20),.86) 46%,rgba(var(--inkr,12,14,20),.95) 100%);background:linear-gradient(180deg,color-mix(in srgb,var(--ink,#0c0e14) 74%,transparent) 0%,color-mix(in srgb,var(--ink,#0c0e14) 86%,transparent) 46%,color-mix(in srgb,var(--deep,var(--ink,#0c0e14)) 96%,transparent) 100%)}'+
'.bo-tint::after{content:"";position:absolute;inset:0;background:radial-gradient(120% 80% at 82% 18%,transparent 0%,transparent 40%,color-mix(in srgb,var(--ink,#0c0e14) 40%,transparent) 100%)}'+
'.bo-main{position:relative;min-height:100vh;min-height:100svh;display:flex;flex-direction:column;justify-content:center;padding:clamp(128px,18vh,200px) var(--side,clamp(16px,4.2vw,72px)) clamp(36px,6vh,64px)}'+
'.bo-in{max-width:min(980px,100%)}'+
'.bo .bo-crumb{display:flex;gap:10px;align-items:center;margin:0 0 clamp(26px,4vh,44px);color:var(--stone,currentColor)}'+
'.bo .bo-crumb a{color:inherit;text-decoration:none}.bo .bo-crumb a:hover{color:var(--bone,var(--paper,#fff))}'+
'.bo .bo-crumb i{display:inline-block;width:22px;height:1px;background:currentColor;opacity:.6}'+
'.bo .bo-eye{display:block;margin:0 0 20px;color:var(--accL,var(--acc,currentColor))}'+
'.bo .bo-h{margin:0;font-family:var(--disp,var(--serif,Georgia,serif));font-weight:inherit;color:var(--bone,var(--paper,#f3f1ea));text-wrap:balance;max-width:16ch}'+
'.bo .bo-h:focus{outline:none}'+
'.bo .bo-h em{font-style:italic;color:var(--accL,var(--acc,inherit))}'+
'.bo .bo-p{margin:clamp(26px,3.4vh,40px) 0 0;max-width:58ch;font-family:var(--sans,system-ui,sans-serif);font-size:clamp(17px,1.32vw,20px);line-height:1.62;color:var(--bone2,var(--paper2,var(--stone,currentColor)));text-wrap:pretty}'+
'.bo .bo-act{display:flex;flex-wrap:wrap;align-items:center;gap:20px 32px;margin-top:clamp(34px,4.6vh,52px)}'+
'.bo .bo-act .btn{border-radius:0}'+
'.bo .bo-keep{font-family:var(--sans,system-ui,sans-serif);font-size:15px;color:var(--stone,currentColor);text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:5px;text-decoration-color:color-mix(in srgb,currentColor 45%,transparent);transition:color .3s,text-decoration-color .3s}'+
'.bo .bo-keep:hover{color:var(--bone,var(--paper,#fff));text-decoration-color:currentColor}'+
'.bo .bo-foot{display:flex;justify-content:space-between;gap:18px;margin-top:clamp(56px,10vh,120px);padding-top:16px;border-top:1px solid var(--hair,rgba(255,255,255,.14));color:var(--stone,currentColor)}'+
'.bo .bo-foot span:last-child{text-align:right}'+
'.bo>.ftr{position:relative}'+
'@media (max-width:720px){.bo-tint{opacity:1;background:linear-gradient(180deg,color-mix(in srgb,var(--ink,#0c0e14) 82%,transparent) 0%,color-mix(in srgb,var(--ink,#0c0e14) 90%,transparent) 50%,color-mix(in srgb,var(--deep,var(--ink,#0c0e14)) 97%,transparent) 100%)}.bo-main{justify-content:flex-start;padding-top:clamp(120px,20vh,160px)}.bo .bo-act{flex-direction:column;align-items:flex-start}.bo .bo-act .btn{width:100%}.bo .bo-foot{flex-direction:column}.bo .bo-foot span:last-child{text-align:left}}';

function slug(s){return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/&/g," and ").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function label(a){var t=(a.getAttribute("data-label")||a.textContent||"").replace(/\s+/g," ").trim();return t}
var TA=["data-to","data-go","data-sec"];function tgt(a){for(var i=0;i<TA.length;i++){var v=a.getAttribute(TA[i]);if(v)return TA[i]+"="+v}return ""}
function isContact(a){var h=a.getAttribute("href")||"",t=label(a);return /contact/i.test(h+" "+tgt(a))||/^(contact|kontakt|contacto|contatti|contactez)/i.test(t)||/^mailto:|^tel:/i.test(h)}
/* the primary nav items: header nav links and the mobile menu list; Home, Contact and anything off-site are excluded */
function navAnchors(){var out=[];Array.prototype.forEach.call(D.querySelectorAll("#hdr nav a[href^='#'], .hdr nav a[href^='#'], #mm a[href^='#']"),function(a){
  var h=a.getAttribute("href"),to=tgt(a);if(!h||h==="#"||(h==="#/"&&!to)||h==="#main"||/^#\/more\//.test(h))return;if(a.classList.contains("brand")||isContact(a)||h==="#hero"||h==="#top"||/^(home|start|accueil|inicio|startseite)$/i.test(label(a)))return;if(!label(a))return;out.push(a)});return out}
function isNavItem(a){return navAnchors().indexOf(a)>=0}
function items(){var seen={},list=[];navAnchors().forEach(function(a){var t=label(a),s=slug(t);if(!s||seen[s])return;seen[s]=1;list.push({slug:s,label:t,href:a.getAttribute("href"),to:tgt(a)})});return list}
function findItem(s){var l=items();for(var i=0;i<l.length;i++)if(l[i].slug===s)return l[i];return null}
function moreSlug(h){var m=/^#\/more\/([^/?#]+)\/?$/.exec(h||"");return m?decodeURIComponent(m[1]):null}

/* open = the page is on screen; want = where routing is headed (set the moment a change starts, so clicks mid-wipe route correctly) */
var SEQ=0,want=false,bo=null,open=false,cur=null,baseTitle=null,leaving=null,bypass=false,deep=false;
function style(){if(D.getElementById("bo-css"))return;var s=D.createElement("style");s.id="bo-css";s.textContent=CSS;(D.head||DE).appendChild(s)}
function cloneFooter(){var f=D.querySelector("#view .ftr, #view footer, main footer");if(!f)return null;var c=f.cloneNode(true);
  Array.prototype.forEach.call(c.querySelectorAll("[id]"),function(e){e.removeAttribute("id")});c.removeAttribute("id");
  [c].concat(Array.prototype.slice.call(c.querySelectorAll("*"))).forEach(function(e){if(!e.style)return;e.style.opacity="";e.style.visibility="";e.style.transform="";e.style.clipPath="";e.style.translate="";e.style.filter=""});
  var src=f.querySelectorAll("canvas"),dst=c.querySelectorAll("canvas");Array.prototype.forEach.call(dst,function(cv,i){try{var o=src[i];cv.width=o.width;cv.height=o.height;cv.getContext("2d").drawImage(o,0,0)}catch(e){}});
  return c}
function build(it){style();
  if(!bo){bo=D.createElement("div");bo.id="bo";bo.className="bo";bo.setAttribute("data-theme","dark");bo.setAttribute("data-lenis-prevent","");bo.setAttribute("role","region");D.body.appendChild(bo)}
  var l=items(),idx=0;for(var i=0;i<l.length;i++)if(l[i].slug===it.slug)idx=i;
  var h=esc(L.h).replace("{item}",'<span class="bo-it">'+esc(it.label)+'</span>').replace(/,\s*([^,<]+)$/,', <em>$1</em>');
  var site=(baseTitle||D.title).split(/\s[—–|-]\s/)[0];
  bo.setAttribute("aria-label",it.label);
  bo.innerHTML='<div class="bo-tint" aria-hidden="true"></div><section class="bo-main"><div class="bo-in">'+
    '<p class="lab bo-crumb"><a href="#/" data-bo-home>'+esc(L.crumb)+'</a><i aria-hidden="true"></i><span>'+esc(it.label)+'</span></p>'+
    '<span class="lab bo-eye" data-bo-r>'+esc(L.eye)+'</span>'+
    '<h1 class="d2 bo-h" id="boTitle" tabindex="-1" data-bo-r>'+h+'</h1>'+
    '<p class="bo-p" data-bo-r>'+esc(L.body)+'</p>'+
    '<div class="bo-act" data-bo-r><a class="btn solid" href="#/" data-bo-home>'+esc(L.back)+' '+ARR+'</a>'+
    '<a class="bo-keep" href="'+esc(it.href)+'" data-bo-keep'+(it.to?' data-bo-to="'+esc(it.to)+'"':'')+'>'+esc(L.keep)+'</a></div></div>'+
    '<div class="lab bo-foot" data-bo-r><span>'+esc(site)+'</span><span>'+String(idx+1).padStart(2,"0")+' / '+String(l.length).padStart(2,"0")+' · '+esc(it.label)+'</span></div></section>';
  var f=cloneFooter();if(f)bo.appendChild(f);
  bo.scrollTop=0}
var MEDIA=/^(IMG|PICTURE|VIDEO|CANVAS)$/;
function hasBg(e){try{var b=getComputedStyle(e).backgroundImage;return b&&b!=="none"&&/url\(/.test(b)}catch(x){return false}}
function isArt(e){if(MEDIA.test(e.tagName)||hasBg(e))return true;if(e.tagName==="svg"||e.tagName==="SVG"){var r=e.getBoundingClientRect();return r.width>innerWidth*.3&&r.height>120&&!(e.textContent||"").trim()}return false}
function holdsArt(e){if(isArt(e))return true;var k=e.children;for(var i=0;i<k.length;i++)if(holdsArt(k[i]))return true;return false}
function mute(e){for(var i=0;i<e.children.length;i++){var c=e.children[i];if(isArt(c)){c.setAttribute("data-bo-echo","");if(MEDIA.test(c.tagName)||c.tagName.toLowerCase()==="svg")continue;mute(c)}else if(holdsArt(c))mute(c);else c.setAttribute("data-bo-mute","")}}
function markEcho(){var hero=D.querySelector("#view .hero, #view [data-field]");if(!hero)return;if(hasBg(hero)){hero.setAttribute("data-bo-echo","");mute(hero)}else{hero.setAttribute("data-bo-echo","");mute(hero)}}
function unmarkEcho(){Array.prototype.forEach.call(D.querySelectorAll("[data-bo-echo],[data-bo-mute]"),function(e){e.removeAttribute("data-bo-echo");e.removeAttribute("data-bo-mute")})}
function hdrLock(on){var h=D.getElementById("hdr")||D.querySelector(".hdr");if(!h)return;if(on){h.setAttribute("data-lenis-prevent","");h.classList.remove("hide")}else h.removeAttribute("data-lenis-prevent")}
function current(it){navAnchors().forEach(function(a){if(it&&slug(label(a))===it.slug)a.setAttribute("aria-current","page");else if(a.getAttribute("aria-current")==="page")a.removeAttribute("aria-current")})}
function closeMenu(cb){if(!D.body.classList.contains("menu-open")){cb();return}var b=D.getElementById("burger");if(b)b.click();setTimeout(cb,420)}
function curtain(mid,done){var xc=D.getElementById("xc"),g=window.gsap;
  if(RM||!g||!xc){++SEQ;mid();if(done)done();return}
  /* the swap must never wait on frames: on a slow device (or a busy page) GSAP lag-smoothing can stretch the wipe, so timers guarantee both halves */
  var my=++SEQ,m=0,d=0;function runMid(){if(m)return;m=1;if(my===SEQ)mid()}function fin(){if(d)return;d=1;runMid();g.killTweensOf(xc);g.set(xc,{yPercent:101});if(done)done()}
  g.killTweensOf(xc);var tl=g.timeline({onComplete:fin});
  tl.fromTo(xc,{yPercent:101},{yPercent:0,duration:.6,ease:"power3.inOut"}).call(runMid).to(xc,{yPercent:-101,duration:.6,ease:"power3.inOut"},"+=.08");
  setTimeout(runMid,750);setTimeout(function(){if(!d){tl.kill();fin()}},1700)}
function reveal(){var g=window.gsap;if(RM||!g||!bo)return;var els=bo.querySelectorAll("[data-bo-r]");g.fromTo(els,{y:22,opacity:0},{y:0,opacity:1,duration:.9,ease:"power3.out",stagger:.07,delay:.32,clearProps:"transform,opacity"})}
function show(it){if(baseTitle===null)baseTitle=D.title;cur=it;want=true;
  curtain(function(){
    toTop();try{if(LN)LN.stop()}catch(e){}
    build(it);unmarkEcho();markEcho();bo.classList.add("on");open=true;DE.classList.add("bo-open");hdrLock(true);current(it);
    D.title=it.label+" — "+baseTitle.split(/\s[—–|]\s/)[0];var lv=D.getElementById("live");if(lv)lv.textContent=it.label+" page";
    var t=D.getElementById("boTitle");if(t)t.focus({preventScroll:true});reveal()})}
function hide(after){want=false;
  curtain(function(){
    if(bo){bo.classList.remove("on");bo.innerHTML=""}unmarkEcho();open=false;cur=null;DE.classList.remove("bo-open");hdrLock(false);current(null);
    if(baseTitle!==null)D.title=baseTitle;
    try{if(LN)LN.start()}catch(e){}toTop();window.dispatchEvent(new Event("scroll"));
    var lv=D.getElementById("live");if(lv)lv.textContent="Home page";var m=D.getElementById("pageTitle")||D.getElementById("main");if(m&&m.focus)try{m.focus({preventScroll:true})}catch(e){}
  },after)}
/* leave the build-out page through history so the browser stack stays [home, more]; then run cb on home */
function leave(cb){leaving=cb||function(){};if(deep&&history.length<2){history.replaceState(null,"","#/");onHash()}else history.back()}
function replay(href,to){var a=null;Array.prototype.some.call(D.querySelectorAll("#hdr nav a[href], .hdr nav a[href], #view a[href]"),function(x){if(x.getAttribute("href")===href&&(!to||tgt(x)===to)){a=x;return true}});
  bypass=true;try{if(a)a.click();else location.hash=href}finally{bypass=false}}

/* clicks: capture on window so this runs before the site's own (document-level) handlers */
window.addEventListener("click",function(e){if(bypass||e.defaultPrevented||e.button>0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
  var a=e.target.closest&&e.target.closest("a[href]");if(!a)return;var h=a.getAttribute("href");
  if(open&&bo&&bo.contains(a)){
    if(a.hasAttribute("data-bo-home")){e.preventDefault();e.stopImmediatePropagation();leave();return}
    if(a.hasAttribute("data-bo-keep")){e.preventDefault();e.stopImmediatePropagation();leave(function(){replay(h,a.getAttribute("data-bo-to"))});return}
    if(h.charAt(0)==="#"){e.preventDefault();e.stopImmediatePropagation();var mo=moreSlug(h);if(mo){var it=findItem(mo);if(it&&(!cur||it.slug!==cur.slug)){history.replaceState(null,"",h);show(it)}return}leave(h==="#/"||h==="#main"?null:function(){replay(h)});return}
    return}
  if(h.charAt(0)!=="#")return;
  if(isNavItem(a)){e.preventDefault();e.stopImmediatePropagation();var it2=findItem(slug(label(a)));if(!it2)return;var to="#/more/"+it2.slug;
    closeMenu(function(){if(want){if(cur&&cur.slug===it2.slug)return;history.replaceState(null,"",to);show(it2)}else{history.pushState(null,"",to);show(it2)}});return}
  if(want){/* header brand / Contact / Home while the build-out page is up: go home first, then let the site handle it */
    e.preventDefault();e.stopImmediatePropagation();closeMenu(function(){leave(h==="#/"||h==="#main"?null:function(){replay(h)})})}
},true);

/* history: this listener is registered before the site's router, so #/more/* never reaches it */
function onHash(e){var s=moreSlug(location.hash);
  if(s){if(e)e.stopImmediatePropagation();var it=findItem(s);if(!it){history.replaceState(null,"","#/");if(want)hide();return}if(!want||!cur||cur.slug!==it.slug)show(it);return}
  if(want){if(e)e.stopImmediatePropagation();var cb=leaving;leaving=null;hide(function(){if(cb)cb()})}}
window.addEventListener("hashchange",onHash);
window.addEventListener("popstate",function(e){if(moreSlug(location.hash)||want)e.stopImmediatePropagation()});
addEventListener("keydown",function(e){if(want&&e.key==="Escape"&&!D.body.classList.contains("menu-open"))leave()});

/* deep link (#/more/x on first load): the site boots on home, then the page opens over it with home beneath it in history */
var first=moreSlug(location.hash);
if(first){deep=true;try{history.replaceState(null,"","#/")}catch(e){}
  addEventListener("load",function(){setTimeout(function(){var it=findItem(first);if(!it)return;history.pushState(null,"","#/more/"+it.slug);show(it)},DE.classList.contains("seen")?400:2400)})}
window.BuildOut={items:items,open:function(s){var it=findItem(s);if(it){history.pushState(null,"","#/more/"+it.slug);show(it)}},isOpen:function(){return open}};
})();
