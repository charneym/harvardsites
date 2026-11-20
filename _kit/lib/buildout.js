/* BUILD-OUT PAGES v2 (HOME_BRIEF UPDATE 2026-11-20 part 1; PRINCIPLES DK)
   Home-only concept sites: every primary nav item except Contact opens a real-looking sub-page at #/more/<slug-of-label>,
   in the site's own design, exactly like the multi-page engine's sub-pages:
     - the route wipe (#xc) with the page name rising in the middle (#xt/#xtt), as in the full sites' go();
     - a sub-page hero (.ph-head: eyebrow = the nav item, H1 = the matching home section's own heading, lede = its own intro);
     - the matching home section(s) cloned from the live home DOM (split text undone, reveal styles cleared, pinned stories laid out
       as static numbered steps), so every word on the page is the site's own;
     - the concept note at the end ("Concept preview" ... "Back to the home page"), then the site's footer (cloned).
   Section lookup: the site's own SECS map (parsed from its inline script) or data-to / data-go / href, then id / "s-"+id.
   Untargeted sections that follow a targeted one ride along with it (max 3); those between the hero and the first target go with the first item.
   Loaded as the LAST entry of the @libs marker, so it runs before the site's own script and owns the #/more/* routes:
   the site's router never sees them, and back from #/more/x lands on home at the top.
   Opt-in: add "buildout" to the <!--@libs ...--> marker. Optional per-site overrides before it: window.BUILDOUT={copy:{...},map:{slug:"sectionId"}}. */
(function(){
"use strict";
if(window.__buildout)return;window.__buildout=2;
var D=document,DE=D.documentElement;
var T={
 en:{eye:"Concept preview",h:"{item}, built out.",body:"This is a concept for the home page. If you like the direction, I'd build out this page and the rest of the site in the same style, with your team, portfolio and news, and handle the move from your current site. Reply to the email this link came in, and we can take it from there.",back:"Back to the home page",keep:"Or keep scrolling the concept",crumb:"Home"},
 de:{eye:"Konzeptvorschau",h:"{item}, ausgebaut.",body:"Dies ist ein Konzept für die Startseite. Wenn Ihnen die Richtung gefällt, baue ich diese Seite und den Rest der Website im selben Stil aus, mit Ihrem Team, Ihrem Portfolio und Ihren News, und übernehme den Umzug von Ihrer jetzigen Website. Antworten Sie einfach auf die E-Mail, mit der dieser Link kam, dann geht es von dort weiter.",back:"Zurück zur Startseite",keep:"Oder weiter durch das Konzept scrollen",crumb:"Start"},
 fr:{eye:"Aperçu du concept",h:"{item}, en version complète.",body:"Ceci est un concept pour la page d'accueil. Si la direction vous plaît, je développerais cette page et le reste du site dans le même style, avec votre équipe, votre portefeuille et vos actualités, et je m'occuperais de la migration depuis votre site actuel. Répondez à l'e-mail par lequel ce lien vous est parvenu, et nous verrons la suite ensemble.",back:"Retour à l'accueil",keep:"Ou continuer à parcourir le concept",crumb:"Accueil"},
 nl:{eye:"Conceptvoorbeeld",h:"{item}, uitgewerkt.",body:"Dit is een concept voor de homepage. Als de richting u bevalt, werk ik deze pagina en de rest van de site in dezelfde stijl uit, met uw team, portfolio en nieuws, en verzorg ik de overstap van uw huidige site. Beantwoord de e-mail waarin deze link kwam, dan nemen we het vanaf daar.",back:"Terug naar de homepage",keep:"Of scroll verder door het concept",crumb:"Home"},
 es:{eye:"Vista previa del concepto",h:"{item}, en versión completa.",body:"Este es un concepto para la página de inicio. Si le gusta la dirección, desarrollaría esta página y el resto del sitio con el mismo estilo, con su equipo, su cartera y sus noticias, y me encargaría de la migración desde su sitio actual. Responda al correo en el que llegó este enlace y seguimos desde ahí.",back:"Volver a la página de inicio",keep:"O seguir recorriendo el concepto",crumb:"Inicio"},
 it:{eye:"Anteprima del concept",h:"{item}, in versione completa.",body:"Questo è un concept per la home page. Se la direzione le piace, svilupperei questa pagina e il resto del sito nello stesso stile, con il suo team, il portafoglio e le notizie, e gestirei il passaggio dal sito attuale. Risponda all'e-mail con cui è arrivato questo link e proseguiamo da lì.",back:"Torna alla home page",keep:"Oppure continua a scorrere il concept",crumb:"Home"},
 da:{eye:"Konceptforhåndsvisning",h:"{item}, fuldt udbygget.",body:"Dette er et koncept for forsiden. Hvis I kan lide retningen, bygger jeg denne side og resten af sitet i samme stil, med jeres team, portefølje og nyheder, og står for flytningen fra jeres nuværende site. Svar på den e-mail, som dette link kom i, så tager vi det derfra.",back:"Tilbage til forsiden",keep:"Eller fortsæt med at scrolle i konceptet",crumb:"Forside"},
 pt:{eye:"Pré-visualização do conceito",h:"{item}, em versão completa.",body:"Este é um conceito para a página inicial. Se gostar da direção, desenvolvo esta página e o resto do site no mesmo estilo, com a vossa equipa, participadas e notícias, e trato da migração a partir do site atual. Basta responder ao e-mail em que recebeu este link e seguimos a partir daí.",back:"Voltar à página inicial",keep:"Ou continue a explorar o conceito",crumb:"Início"},
 ja:{eye:"コンセプトプレビュー",h:"「{item}」も、本格構築へ。",body:"これはホームページのコンセプトです。この方向性を気に入っていただけましたら、役員、投資先、ニュースを含め、このページとサイト全体を同じスタイルで構築し、現在のサイトからの移行も対応いたします。このリンクをお送りしたメールにご返信いただければ、そこから進めてまいります。",back:"ホームページに戻る",keep:"このままコンセプトを見る",crumb:"ホーム"},
 sv:{eye:"Konceptförhandsvisning",h:"{item}, i full version.",body:"Det här är ett koncept för startsidan. Om ni gillar riktningen bygger jag ut den här sidan och resten av webbplatsen i samma stil, med ert team, er portfölj och era nyheter, och sköter flytten från er nuvarande webbplats. Svara på mejlet som den här länken kom i, så tar vi det därifrån.",back:"Tillbaka till startsidan",keep:"Eller fortsätt skrolla i konceptet",crumb:"Start"}
};
var lang=(DE.getAttribute("lang")||"en").toLowerCase().split("-")[0];
var L=T[lang]||T.en;var O=window.BUILDOUT||{};if(O.copy)for(var k in O.copy)L[k]=O.copy[k];
/* capture the site's Lenis instance (created later by the site script) so the home page can be parked at the top, and frozen, under the build-out page */
var LN=null;if(window.Lenis&&!window.Lenis.__bo){try{var _L=window.Lenis;var Sub=class extends _L{constructor(o){super(o);LN=this}};Sub.__bo=1;window.Lenis=Sub}catch(e){}}
function toTop(){try{if(LN)LN.scrollTo(0,{immediate:true,force:true})}catch(e){}try{window.scrollTo(0,0)}catch(e){}}
var RM=false;try{RM=matchMedia("(prefers-reduced-motion: reduce)").matches}catch(e){}
var ARR='<svg viewBox="0 0 18 10" aria-hidden="true"><path d="M0 5h16M12 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>';
var CSS=
'.bo{position:fixed;inset:0;z-index:780;overflow-x:hidden;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;display:none;color:var(--bone,var(--paper,#f3f1ea));isolation:isolate;background:transparent}'+
'.bo.on{display:block}'+
'html.bo-open,html.bo-open body{overflow:hidden!important}'+
'.bo{scrollbar-width:thin;scrollbar-color:var(--stoneD,rgba(128,128,128,.4)) transparent}'+
/* behind the sub-page hero only the home hero ART shows (live field canvas, hero photo / render); the home copy is hidden so it never ghosts through */
'html.bo-open main{visibility:hidden}html.bo-open main [data-bo-echo]{visibility:visible}html.bo-open main [data-bo-echo] [data-bo-mute]{visibility:hidden}'+
'.bo-tint{position:fixed;inset:0;z-index:-1;pointer-events:none;background:linear-gradient(180deg,rgba(12,14,20,.7) 0%,rgba(12,14,20,.84) 50%,rgba(12,14,20,.95) 100%);background:linear-gradient(180deg,color-mix(in srgb,var(--ink,#0c0e14) 62%,transparent) 0%,color-mix(in srgb,var(--ink,#0c0e14) 80%,transparent) 50%,color-mix(in srgb,var(--deep,var(--ink,#0c0e14)) 94%,transparent) 100%)}'+
'.bo-tint::after{content:"";position:absolute;inset:0;background:radial-gradient(120% 80% at 82% 18%,transparent 0%,transparent 40%,color-mix(in srgb,var(--ink,#0c0e14) 40%,transparent) 100%)}'+
/* sub-page hero: the site's own .ph-head rules, a little shorter because real content follows */
'.bo .ph-head.bo-ph.nolede{min-height:62vh;min-height:62svh}'+
'.bo .ph-head.bo-ph{min-height:76vh;min-height:76svh;justify-content:flex-end;padding-bottom:clamp(56px,8vw,120px);background:transparent}'+
'.bo .bo-ph .bo-crumb{position:absolute;left:var(--side,clamp(16px,4.2vw,72px));top:clamp(104px,15vh,150px);display:flex;gap:10px;align-items:center;margin:0;color:var(--stone,currentColor)}'+
'.bo .bo-crumb a{color:inherit;text-decoration:none;transition:color .3s}.bo .bo-crumb a:hover{color:var(--bone,var(--paper,#fff))}'+
'.bo .bo-crumb i{display:inline-block;width:22px;height:1px;background:currentColor;opacity:.6}'+
'.bo .bo-ph .eyebrow{color:var(--accL,var(--acc,currentColor))}'+
'.bo .bo-ph .d1{color:var(--bone,var(--paper,#f3f1ea));max-width:16ch;text-wrap:balance}'+
'.bo .bo-ph .d1:focus{outline:none}'+
'.bo .bo-ph .d1 em{font-style:italic;color:var(--accL,var(--acc,inherit))}'+
'.bo .bo-ph .intro{color:var(--bone2,var(--paper2,var(--stone,currentColor)));max-width:46ch;text-wrap:pretty}'+
'.bo .bo-sec{position:relative;z-index:1}'+
'.bo .bo-sec .split,.bo .bo-sec [data-r]{opacity:1!important;visibility:visible!important}'+
/* a pinned scroll-story, laid out as static numbered steps */
'.bo .bo-steps{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(var(--cols,3),minmax(0,1fr));gap:clamp(40px,4.4vw,72px) clamp(24px,3vw,48px)}'+
'@media (max-width:1100px){.bo .bo-steps{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (max-width:640px){.bo .bo-steps{grid-template-columns:minmax(0,1fr)}}'+
'.bo .bo-steps li{position:relative;padding-top:22px;border-top:1px solid var(--hair,rgba(128,128,128,.3))}'+
'.bo .bo-steps li::before{content:"";position:absolute;left:0;top:-1px;width:44px;height:1px;background:var(--accL,var(--acc,currentColor))}'+
'.light .bo-steps li::before{background:var(--accD,var(--acc,currentColor))}'+
'.bo .bo-steps .lab{display:block;margin:0 0 16px;color:var(--accL,var(--acc,currentColor))}'+
'.bo .light .bo-steps .lab{color:var(--accD,var(--acc,currentColor))}'+
'.bo .bo-steps h3{margin:0 0 14px;font-family:var(--disp,var(--serif,Georgia,serif));font-weight:400;font-size:clamp(24px,2vw,32px);line-height:1.12;letter-spacing:-.02em;text-wrap:balance}'+
'.bo .bo-steps h3 em{font-style:italic}'+
'.bo .bo-steps p{margin:0;max-width:46ch;line-height:1.6;color:var(--bone2,var(--paper2,inherit));text-wrap:pretty}'+
'.bo .light .bo-steps p{color:var(--ink2t,inherit)}'+
'.bo .bo-steps li>*:not(.lab):not(h3):not(p){margin-top:14px}'+
/* the concept note at the end of the page */
'.bo .bo-note{border-top:1px solid var(--hair,rgba(255,255,255,.14))}'+
'.bo .bo-note .bo-in{max-width:min(980px,100%)}'+
'.bo .bo-note .kick{display:block}'+
'.bo .bo-note .d2{margin:0;max-width:16ch;text-wrap:balance}'+
'.bo .bo-note .d2 em{font-style:italic;color:var(--accL,var(--acc,inherit))}'+
'.bo .bo-p{margin:clamp(26px,3.4vh,40px) 0 0;max-width:58ch;font-family:var(--sans,system-ui,sans-serif);font-size:clamp(17px,1.32vw,20px);line-height:1.62;color:var(--bone2,var(--paper2,var(--stone,currentColor)));text-wrap:pretty}'+
'.bo .bo-act{display:flex;flex-wrap:wrap;align-items:center;gap:20px 32px;margin-top:clamp(34px,4.6vh,52px)}'+
'.bo .btn{border-radius:0!important}'+
'.bo .bo-keep{font-family:var(--sans,system-ui,sans-serif);font-size:15px;color:var(--stone,currentColor);text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:5px;text-decoration-color:color-mix(in srgb,currentColor 45%,transparent);transition:color .3s,text-decoration-color .3s}'+
'.bo .bo-keep:hover{color:var(--bone,var(--paper,#fff));text-decoration-color:currentColor}'+
'.bo>.ftr,.bo>footer{position:relative}'+
'.bo [data-bo-rv]{transition:opacity .9s cubic-bezier(.22,1,.36,1),transform .9s cubic-bezier(.22,1,.36,1)}'+
'.bo [data-bo-rv="0"]{opacity:0;transform:translateY(22px)}'+
'@media (max-width:860px){.bo .ph-head.bo-ph{min-height:64svh!important;padding-top:150px!important}.bo .ph-head.bo-ph.nolede{min-height:50svh!important}.bo .bo-ph .bo-crumb{top:96px}}'+
'@media (max-width:720px){.bo-tint{background:linear-gradient(180deg,color-mix(in srgb,var(--ink,#0c0e14) 78%,transparent) 0%,color-mix(in srgb,var(--ink,#0c0e14) 90%,transparent) 50%,color-mix(in srgb,var(--deep,var(--ink,#0c0e14)) 97%,transparent) 100%)}.bo .bo-act{flex-direction:column;align-items:flex-start}.bo .bo-act .btn{width:100%}}';

function slug(s){return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/&/g," and ").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function label(a){var t=(a.getAttribute("data-label")||a.textContent||"").replace(/\s+/g," ").trim();return t}
var TA=["data-to","data-go","data-sec"];function tgt(a){for(var i=0;i<TA.length;i++){var v=a.getAttribute(TA[i]);if(v)return TA[i]+"="+v}return ""}
function isContact(a){var h=a.getAttribute("href")||"",t=label(a);return /contact/i.test(h+" "+tgt(a))||/^(contact|kontakt|contacto|contatti|contactez)/i.test(t)||/^mailto:|^tel:/i.test(h)}
/* the primary nav items: header nav links and the mobile menu list; Home, Contact and anything off-site are excluded */
function navAnchors(){var out=[];Array.prototype.forEach.call(D.querySelectorAll("#hdr nav a[href^='#'], .hdr nav a[href^='#'], #mm a[href^='#']"),function(a){
  var h=a.getAttribute("href"),to=tgt(a);if(!h||h==="#"||(h==="#/"&&!to)||h==="#main")return;if(a.classList.contains("brand")||isContact(a)||h==="#hero"||h==="#top"||/^(home|start|accueil|inicio|início|startseite|inizio|hem|forside|ホーム|トップ)$/i.test(label(a)))return;if(!label(a))return;out.push(a)});return out}
function isNavItem(a){return navAnchors().indexOf(a)>=0}
function hkey(a){var v=tgt(a);if(v)return v.split("=")[1];var h=a.getAttribute("href")||"",m=/^#\/(?:more\/)?([^/?#]+)/.exec(h)||/^#([^/?#]+)/.exec(h);return m?decodeURIComponent(m[1]):""}
function aslug(a){return slug(label(a))||slug(hkey(a))}
function items(){var seen={},list=[];navAnchors().forEach(function(a){var t=label(a),s=aslug(a);if(!s||seen[s])return;seen[s]=1;list.push({slug:s,label:t,href:a.getAttribute("href"),to:tgt(a)})});return list}
function findItem(s){var l=items();for(var i=0;i<l.length;i++)if(l[i].slug===s)return l[i];return null}
function moreSlug(h){var m=/^#\/more\/([^/?#]+)\/?$/.exec(h||"");return m?decodeURIComponent(m[1]):null}

/* ---------- which home section belongs to a nav item ---------- */
var SECMAP=null,MOREMAP={};
function secMap(){if(SECMAP)return SECMAP;SECMAP={};
  /* the site's own section maps (SECS, SECID, ...): object literals of key -> section id / data-sec */
  /* and the old in-template build-out map (MORE = {key: [label, ..., sectionKey]}) */
  Array.prototype.forEach.call(D.scripts,function(s){var t=s.textContent||"";if(t.indexOf("SEC")<0&&t.indexOf("MORE")<0)return;var re=/\b([A-Z_]*(?:SEC|MORE)[A-Z_]*)\s*=\s*(\{[^{}]*\})/g,m;
    while((m=re.exec(t))){try{var o=(new Function("return "+m[2]))()||{},more=/MORE/.test(m[1]);for(var k in o){var v=o[k];if(more){if(Array.isArray(v)&&typeof v[v.length-1]==="string"&&!(k in MOREMAP))MOREMAP[k]=v[v.length-1]}else if(typeof v==="string"&&!(k in SECMAP))SECMAP[k]=v}}catch(e){}}});
  if(O.map)for(var k in O.map)SECMAP[k]=O.map[k];return SECMAP}
function keyOf(it){var v=it.to?it.to.split("=")[1]:"";if(v)return v;var h=it.href||"",m;
  if((m=/^#\/more\/([^/?#]+)/.exec(h)))return decodeURIComponent(m[1]);if((m=/^#\/?([^/?#]+)/.exec(h)))return decodeURIComponent(m[1]);return it.slug}
function byId(id){if(!id)return null;id=String(id).replace(/^#/,"");if(!id)return null;var v=D.getElementById("view")||D.querySelector("main");if(!v)return null;var e=D.getElementById(id);if(e&&v.contains(e))return e;
  try{e=v.querySelector('[data-sec="'+id+'"],[data-section="'+id+'"]')}catch(x){e=null}return e}
function topSec(e){/* climb to the direct child of #view (through a pin-spacer) */var v=D.getElementById("view")||D.querySelector("main");while(e&&e.parentElement&&e.parentElement!==v)e=e.parentElement;return e&&e.parentElement===v?e:null}
function secFor(it){var m=secMap(),k0=keyOf(it),k=MOREMAP[k0]||k0,cands=[O.map&&O.map[it.slug],m[k],m[k0],m[it.slug],k,"s-"+k,k0,it.slug,"s-"+it.slug];
  for(var i=0;i<cands.length;i++){var e=byId(cands[i]);if(e)return e}return null}
function unpin(e){return e&&e.classList&&e.classList.contains("pin-spacer")&&e.firstElementChild?e.firstElementChild:e}
function isHero(e){return e.classList.contains("hero")||e.id==="hero"||e.classList.contains("ph-head")}
function isContactSec(e){return /contact/i.test(e.id||"")||e.classList.contains("cta")||e.tagName==="FOOTER"||e.classList.contains("ftr")}
/* the home sections for an item: its target, plus the untargeted sections that follow it (and, for the first item, the ones between the hero and it) */
function sectionsFor(it){var v=D.getElementById("view")||D.querySelector("main");if(!v)return [];var l=items(),own=null,tops=[],targets=[];
  l.forEach(function(x){var s=secFor(x),t=s&&topSec(s);if(t)targets.push(t);if(x.slug===it.slug){own=s;}});
  if(!own)return [];var ownTop=topSec(own);var kids=Array.prototype.slice.call(v.children).filter(function(e){var u=unpin(e);return u&&/^(SECTION|DIV|ARTICLE|ASIDE)$/.test(u.tagName)&&!isHero(u)&&!isContactSec(u)&&(u.textContent||"").trim().length>0});
  var out=[own],i=kids.indexOf(ownTop);
  if(i>=0)for(var j=i+1;j<kids.length&&out.length<4;j++){if(targets.indexOf(kids[j])>=0)break;out.push(unpin(kids[j]))}
  var first=null;for(var n=0;n<l.length;n++){var s2=secFor(l[n]);if(s2){first=topSec(s2);break}}
  if(first===ownTop){var pre=[];for(var q=0;q<kids.length&&kids[q]!==ownTop;q++)if(targets.indexOf(kids[q])<0)pre.push(unpin(kids[q]));out=out.concat(pre.slice(0,2))}
  return out}

/* ---------- clone hygiene ---------- */
var STY=["opacity","visibility","transform","translate","rotate","scale","filter","clip-path","will-change","transition","display"];
function unwrap(e){var p=e.parentNode;if(!p)return;while(e.firstChild)p.insertBefore(e.firstChild,e);p.removeChild(e)}
function unsplit(root){
  /* SplitText line masks / lines / words / chars: put the plain text back */
  var sel=".ln-mask,.ln,.w,.ch,.char,.word,.line,.sw,.sl";
  Array.prototype.slice.call(root.querySelectorAll("[aria-label]")).forEach(function(el){if(/^(A|BUTTON|svg|SVG|SECTION|NAV|IMG)$/.test(el.tagName))return;
    var hid=el.querySelectorAll('div[aria-hidden="true"],span[aria-hidden="true"]');if(!hid.length)return;
    if(el.querySelector("svg,img,canvas"))return;
    Array.prototype.slice.call(hid).reverse().forEach(unwrap);el.removeAttribute("aria-label")});
  Array.prototype.slice.call(root.querySelectorAll(".ln-mask,.ln")).reverse().forEach(function(e){if(e.tagName==="DIV"&&!e.querySelector("svg,img,canvas"))unwrap(e)});
  Array.prototype.forEach.call(root.querySelectorAll("em:empty,i:empty:not([class])"),function(e){if(e.tagName==="EM")e.remove()});
  return root}
function clearStyles(root){[root].concat(Array.prototype.slice.call(root.querySelectorAll("*"))).forEach(function(e){if(!e.style)return;
  STY.forEach(function(p){if(p==="display"){if(e.style.display==="none"&&e.closest&&!e.closest("details,[hidden]")&&!/^(TEMPLATE|SCRIPT|STYLE)$/.test(e.tagName)){/* keep authored display:none (e.g. hidden extras) */}return}e.style.removeProperty(p)});
  if(e.getAttribute("style")==="")e.removeAttribute("style")})}
function copyCanvases(src,dst){var a=src.querySelectorAll("canvas"),b=dst.querySelectorAll("canvas");Array.prototype.forEach.call(b,function(cv,i){try{var o=a[i];if(!o||!o.width)return;cv.width=o.width;cv.height=o.height;cv.getContext("2d").drawImage(o,0,0)}catch(e){}})}
function stripIds(root){[root].concat(Array.prototype.slice.call(root.querySelectorAll("[id]"))).forEach(function(e){if(e.id){e.setAttribute("data-bo-id",e.id);e.removeAttribute("id")}});
  Array.prototype.forEach.call(root.querySelectorAll("[aria-labelledby],[aria-controls],[aria-describedby]"),function(e){e.removeAttribute("aria-labelledby");e.removeAttribute("aria-controls");e.removeAttribute("aria-describedby")})}
function cloneSec(s){var c=s.cloneNode(true);copyCanvases(s,c);stripIds(c);unsplit(c);clearStyles(c);
  Array.prototype.forEach.call(c.querySelectorAll("h1"),function(h){var n=D.createElement("h2");n.className=h.className;n.innerHTML=h.innerHTML;h.replaceWith(n)});
  Array.prototype.forEach.call(c.querySelectorAll("[tabindex='-1']"),function(e){e.removeAttribute("tabindex")});
  return c}
function isStory(s){return s.classList.contains("story")||(!!s.querySelector(".steps .step, .step")&&!!s.querySelector(".story-pin, .story-l, .rail"))}
/* a pinned scroll-story becomes a static section of numbered steps, in the site's own type */
function storySec(s){var c=cloneSec(s),out=D.createElement("section");out.className="sec dark bo-sec bo-story";out.setAttribute("data-theme","dark");
  var rail=Array.prototype.map.call(c.querySelectorAll(".rail span, .rail li, .rail b"),function(x){return (x.textContent||"").trim()}).filter(Boolean);
  var steps=c.querySelectorAll(".step");var ol=D.createElement("ol");ol.className="bo-steps";var n=steps.length;ol.style.setProperty("--cols",n<=4?n:(n%3===0?3:4));
  Array.prototype.forEach.call(steps,function(st,i){var li=D.createElement("li");var h=st.querySelector("h2,h3,h4");var lab=st.querySelector(".lab, .num, .k");
    var tag=String(i+1).padStart(2,"0")+(rail[i]?" · "+rail[i]:"");
    li.innerHTML='<span class="lab">'+esc(lab&&!h?lab.textContent.trim():tag)+'</span>'+(h?'<h3>'+h.innerHTML+'</h3>':"");
    if(h)h.remove();if(lab&&lab!==h&&/^\s*0?\d/.test(lab.textContent))lab.remove();
    Array.prototype.slice.call(st.children).forEach(function(x){if((x.textContent||"").trim()||x.querySelector("img,svg"))li.appendChild(x)});
    ol.appendChild(li)});
  var w=D.createElement("div");w.className="wrap";w.appendChild(ol);out.appendChild(w);
  var head=c.querySelector(".story-l h2, h2.d3, h2.d2, h2");return {el:out,head:head,intro:null,kick:c.querySelector(".kick")}}
/* lift the section's own heading and intro into the sub-page hero */
function liftHead(c){var h=c.querySelector("h2.d2, h2.d3, h2.big, .shead h2, h2");if(!h)return {h:null,p:null};
  var box=h.closest(".shead")||h.parentElement,p=null;
  var ps=box.querySelectorAll("p");for(var i=0;i<ps.length;i++){if(!h.contains(ps[i])&&(h.compareDocumentPosition(ps[i])&4)&&(ps[i].textContent||"").trim().length>30){p=ps[i];break}}
  var kick=box.querySelector(".kick, .lab");
  var hh=h.innerHTML,pp=p?p.innerHTML:null;
  h.remove();if(p)p.remove();if(kick&&box.contains(kick)&&!kick.querySelector("a"))kick.remove();
  /* drop containers left empty */
  var e=box;while(e&&e!==c&&!(e.textContent||"").trim()&&!e.querySelector("img,svg,canvas,video,iframe")){var up=e.parentElement;e.remove();e=up}
  return {h:hh,p:pp}}

/* open = the page is on screen; want = where routing is headed (set the moment a change starts, so clicks mid-wipe route correctly) */
var SEQ=0,want=false,bo=null,open=false,cur=null,baseTitle=null,leaving=null,bypass=false,deep=false,IO=null;
function style(){if(D.getElementById("bo-css"))return;var s=D.createElement("style");s.id="bo-css";s.textContent=CSS;(D.head||DE).appendChild(s)}
function cloneFooter(){var f=D.querySelector("#view .ftr, #view footer, main footer");if(!f)return null;var c=f.cloneNode(true);
  stripIds(c);clearStyles(c);copyCanvases(f,c);return c}
function build(it){style();
  if(!bo){bo=D.createElement("div");bo.id="bo";bo.className="bo";bo.setAttribute("data-theme","dark");bo.setAttribute("data-lenis-prevent","");bo.setAttribute("role","region");D.body.appendChild(bo);
    bo.addEventListener("scroll",hdrSolid,{passive:true})}
  var secs=sectionsFor(it),parts=[],head={h:null,p:null};
  secs.forEach(function(s,i){var r;if(isStory(s)){var st=storySec(s);r=st.el;if(i===0)head={h:st.head?st.head.innerHTML:null,p:null}}
    else{r=cloneSec(s);r.classList.add("bo-sec");if(i===0)head=liftHead(r)}
    if((r.textContent||"").trim())parts.push(r)});
  var h1=head.h||esc(it.label);
  var nh=esc(L.h).replace("{item}",esc(it.label)).replace(/,\s*([^,<]+)$/,', <em>$1</em>');
  bo.setAttribute("aria-label",it.label);
  bo.innerHTML='<div class="bo-tint" aria-hidden="true"></div>'+
    '<section class="ph-head bo-ph'+(head.p?'':' nolede')+'" data-theme="dark">'+
      '<p class="lab bo-crumb" data-bo-r><a href="#/" data-bo-home>'+esc(L.crumb)+'</a><i aria-hidden="true"></i><span>'+esc(it.label)+'</span></p>'+
      '<span class="lab eyebrow bo-eye" data-bo-r>'+esc(it.label)+'</span>'+
      '<h1 class="d1 bo-h" id="boTitle" tabindex="-1" data-bo-r>'+h1+'</h1>'+
      (head.p?'<p class="lede intro" data-bo-r>'+head.p+'</p>':'')+
    '</section><div class="bo-body"></div>'+
    '<section class="sec dark2 bo-note" data-theme="dark"><div class="wrap"><div class="bo-in">'+
      '<span class="lab kick">'+esc(L.eye)+'</span>'+
      '<h2 class="d2">'+nh+'</h2>'+
      '<p class="bo-p">'+esc(L.body)+'</p>'+
      '<div class="bo-act"><a class="btn solid" href="#/" data-bo-home>'+esc(L.back)+' '+ARR+'</a>'+
      '<a class="bo-keep" href="'+esc(it.href)+'" data-bo-keep'+(it.to?' data-bo-to="'+esc(it.to)+'"':'')+'>'+esc(L.keep)+'</a></div></div></div></section>';
  var body=bo.querySelector(".bo-body");parts.forEach(function(p){body.appendChild(p)});
  var f=cloneFooter();if(f)bo.appendChild(f);
  bo.scrollTop=0;rvSetup()}
/* nothing runs off the page (rule CC): a long word in the hero H1 shrinks to fit, no-wrap labels in cloned content may wrap */
function fitBo(){if(!bo)return;var W=bo.clientWidth;if(!W)return;
  for(var pass=0;pass<3&&bo.scrollWidth>W+1;pass++){Array.prototype.forEach.call(bo.querySelectorAll("h1,h2,h3,p,span,em,a,li,dt,dd"),function(e){var r=e.getBoundingClientRect();if(r.right<=W+1)return;
    var cs=getComputedStyle(e);if(cs.whiteSpace==="nowrap"&&!/^H[1-3]$/.test(e.tagName)){e.style.whiteSpace="normal";return}
    var h=e.closest("h1,h2,h3")||e;if(h.__fit)return;var fs=parseFloat(getComputedStyle(h).fontSize);var hr=h.getBoundingClientRect();var k=Math.max(.6,(W-4-hr.left)/Math.max(1,r.right-hr.left));if(k<1){h.style.setProperty("font-size",Math.floor(fs*k)+"px","important");h.__fit=1}})}}
/* sections reveal as a whole when they scroll into the build-out page (rule CM): each block in a section's wrap, same motion, small stagger */
function rvSetup(){if(IO){IO.disconnect();IO=null}if(RM||!("IntersectionObserver" in window))return;
  var blocks=[];Array.prototype.forEach.call(bo.querySelectorAll(".bo-body > *, .bo-note"),function(s){var w=s.querySelector(":scope > .wrap")||s;Array.prototype.forEach.call(w.children,function(b,i){b.setAttribute("data-bo-rv","0");b.style.transitionDelay=(Math.min(i,5)*.07)+"s";blocks.push(b)})});
  IO=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting||e.boundingClientRect.top<0){e.target.setAttribute("data-bo-rv","1");IO.unobserve(e.target)}})},{root:bo,rootMargin:"0px 0px -8% 0px"});
  blocks.forEach(function(b){IO.observe(b)});
  setTimeout(function(){blocks.forEach(function(b){var r=b.getBoundingClientRect();if(r.top<innerHeight)b.setAttribute("data-bo-rv","1")})},60)}
/* the header goes solid once the build-out page scrolls (the site's own handler only watches window.scrollY, which stays 0 here):
   read what .solid looks like once, then hold it as inline styles while the page is scrolled */
var HS=null,HP=["background-color","background-image","backdrop-filter","-webkit-backdrop-filter","border-bottom-color","box-shadow","color"];
function hdrEl(){return D.getElementById("hdr")||D.querySelector(".hdr")}
function hdrSolidStyle(h){if(HS)return HS;var had=h.classList.contains("solid"),tr=h.style.transition;h.style.transition="none";h.classList.add("solid");var cs=getComputedStyle(h);HS={};HP.forEach(function(p){HS[p]=cs.getPropertyValue(p)});if(!had)h.classList.remove("solid");void h.offsetWidth;h.style.transition=tr;return HS}
function hdrSolid(){var h=hdrEl();if(!h||!bo)return;var on=open&&bo.scrollTop>24,st=hdrSolidStyle(h);HP.forEach(function(p){if(on)h.style.setProperty(p,st[p]);else h.style.removeProperty(p)});h.toggleAttribute("data-bo-solid",on)}
function hdrClear(){var h=hdrEl();if(!h)return;HP.forEach(function(p){h.style.removeProperty(p)});h.removeAttribute("data-bo-solid")}
var MEDIA=/^(IMG|PICTURE|VIDEO|CANVAS)$/;
function hasBg(e){try{var b=getComputedStyle(e).backgroundImage;return b&&b!=="none"&&/url\(/.test(b)}catch(x){return false}}
function isArt(e){if(MEDIA.test(e.tagName)||hasBg(e))return true;if(e.tagName==="svg"||e.tagName==="SVG"){var r=e.getBoundingClientRect();return r.width>innerWidth*.3&&r.height>120&&!(e.textContent||"").trim()}return false}
function holdsArt(e){if(isArt(e))return true;var k=e.children;for(var i=0;i<k.length;i++)if(holdsArt(k[i]))return true;return false}
function mute(e){for(var i=0;i<e.children.length;i++){var c=e.children[i];if(isArt(c)){c.setAttribute("data-bo-echo","");if(MEDIA.test(c.tagName)||c.tagName.toLowerCase()==="svg")continue;mute(c)}else if(holdsArt(c))mute(c);else c.setAttribute("data-bo-mute","")}}
function markEcho(){var hero=D.querySelector("#view .hero, #view [data-field]");if(!hero)return;hero.setAttribute("data-bo-echo","");mute(hero)}
function unmarkEcho(){Array.prototype.forEach.call(D.querySelectorAll("[data-bo-echo],[data-bo-mute]"),function(e){e.removeAttribute("data-bo-echo");e.removeAttribute("data-bo-mute")})}
function hdrLock(on){var h=D.getElementById("hdr")||D.querySelector(".hdr");if(!h)return;if(on){h.setAttribute("data-lenis-prevent","");h.classList.remove("hide")}else h.removeAttribute("data-lenis-prevent")}
function current(it){navAnchors().forEach(function(a){if(it&&aslug(a)===it.slug)a.setAttribute("aria-current","page");else if(a.getAttribute("aria-current")==="page")a.removeAttribute("aria-current")})}
function closeMenu(cb){if(!D.body.classList.contains("menu-open")){cb();return}var b=D.getElementById("burger");if(b)b.click();setTimeout(cb,420)}
/* the full-site route transition: the wipe rises, the page name rises letter by letter in the middle, the page swaps under it, the wipe leaves */
function curtain(mid,done,name){var xc=D.getElementById("xc"),xt=D.getElementById("xt"),tt=D.getElementById("xtt"),g=window.gsap;
  if(RM||!g||!xc){++SEQ;mid();if(done)done();return}
  var my=++SEQ,m=0,d=0,sp=null;
  function runMid(){if(m)return;m=1;if(my===SEQ)mid()}
  function fin(){if(d)return;d=1;runMid();g.killTweensOf(xc);g.set(xc,{yPercent:101});if(xt){xt.style.visibility="hidden";g.set(xt,{opacity:0})}if(sp)try{sp.revert()}catch(e){}if(done)done()}
  if(name&&xt&&tt){tt.innerHTML="<span>"+esc(name)+"</span>";try{if(window.SplitText)sp=window.SplitText.create(tt.firstChild,{type:"chars"})}catch(e){sp=null}}
  g.killTweensOf(xc);var tl=g.timeline({onComplete:fin});
  tl.fromTo(xc,{yPercent:101},{yPercent:0,duration:.7,ease:"power3.inOut"},0);
  if(name&&xt&&tt){tl.set(xt,{visibility:"visible",opacity:1},.45);
    if(sp)tl.fromTo(sp.chars,{yPercent:140,opacity:0},{yPercent:0,opacity:1,duration:.45,ease:"power3.out",stagger:.02},.48);else tl.fromTo(tt,{opacity:0,y:16},{opacity:1,y:0,duration:.45},.48);
    if(D.getElementById("xlab"))tl.fromTo("#xlab",{opacity:0,y:8},{opacity:1,y:0,duration:.35},.55).to("#xlab",{opacity:0,duration:.25},1.12);
    tl.to(xt,{opacity:0,duration:.3,ease:"power2.in"},1.12)}
  tl.call(runMid,null,.76).to(xc,{yPercent:-101,duration:.7,ease:"power3.inOut"},name&&xt?1.18:.84);
  /* the swap must never wait on frames: on a slow device (or a busy page) GSAP lag-smoothing can stretch the wipe, so timers guarantee both halves */
  setTimeout(runMid,950);setTimeout(function(){if(!d){tl.kill();fin()}},2400)}
function reveal(){var g=window.gsap;if(RM||!g||!bo)return;var els=bo.querySelectorAll("[data-bo-r]");g.fromTo(els,{y:22,opacity:0},{y:0,opacity:1,duration:.9,ease:"power3.out",stagger:.07,delay:.3,clearProps:"transform,opacity"})}
function show(it){if(baseTitle===null)baseTitle=D.title;cur=it;want=true;
  curtain(function(){
    toTop();try{if(LN)LN.stop()}catch(e){}
    build(it);unmarkEcho();markEcho();bo.classList.add("on");open=true;DE.classList.add("bo-open");hdrLock(true);open=true;hdrSolid();fitBo();setTimeout(fitBo,400);current(it);
    D.title=it.label+" — "+baseTitle.split(/\s[—–|]\s/)[0];var lv=D.getElementById("live");if(lv)lv.textContent=it.label+" page";
    var t=D.getElementById("boTitle");if(t)t.focus({preventScroll:true});reveal()},null,it.label)}
function hide(after){want=false;
  curtain(function(){
    if(IO){IO.disconnect();IO=null}hdrClear();if(bo){bo.classList.remove("on");bo.innerHTML=""}unmarkEcho();open=false;cur=null;DE.classList.remove("bo-open");hdrLock(false);current(null);
    if(baseTitle!==null)D.title=baseTitle;
    try{if(LN)LN.start()}catch(e){}toTop();window.dispatchEvent(new Event("scroll"));var h=D.getElementById("hdr")||D.querySelector(".hdr");if(h)h.classList.remove("solid");
    var lv=D.getElementById("live");if(lv)lv.textContent=L.crumb+" page";var m=D.getElementById("pageTitle")||D.getElementById("main");if(m&&m.focus)try{m.focus({preventScroll:true})}catch(e){}
  },after,L.crumb)}
/* leave the build-out page through history so the browser stack stays [home, more]; then run cb on home */
function leave(cb){leaving=cb||function(){};if(deep&&history.length<2){history.replaceState(null,"","#/");onHash()}else history.back()}
function replay(href,to){var a=null;Array.prototype.some.call(D.querySelectorAll("#hdr nav a[href], .hdr nav a[href], #view a[href]"),function(x){if(x.getAttribute("href")===href&&(!to||tgt(x)===to)){a=x;return true}});
  /* a nav item that is itself a #/more/ link (sites with their own build-out routes): scroll to its section instead */
  if(/^#\/more\//.test(href)){var it=null;items().some(function(x){if(x.href===href){it=x;return true}});var s=it&&secFor(it);if(s){var t=s.parentElement&&s.parentElement.classList.contains("pin-spacer")?s.parentElement:s;var y=t.getBoundingClientRect().top+scrollY;try{if(LN)LN.scrollTo(y,{duration:1.2,force:true});else scrollTo({top:y,behavior:"smooth"})}catch(e){scrollTo(0,y)}}return}
  bypass=true;try{if(a)a.click();else location.hash=href}finally{bypass=false}}

/* clicks: capture on window so this runs before the site's own (document-level) handlers */
window.addEventListener("click",function(e){if(bypass||e.defaultPrevented||e.button>0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
  var a=e.target.closest&&e.target.closest("a[href]");if(!a)return;var h=a.getAttribute("href");
  if(open&&bo&&bo.contains(a)){
    if(a.hasAttribute("data-bo-home")){e.preventDefault();e.stopImmediatePropagation();leave();return}
    if(a.hasAttribute("data-bo-keep")){e.preventDefault();e.stopImmediatePropagation();leave(function(){replay(h,a.getAttribute("data-bo-to"))});return}
    if(h.charAt(0)==="#"){e.preventDefault();e.stopImmediatePropagation();var mo=moreSlug(h);if(mo){var it=findItem(mo);if(it&&(!cur||it.slug!==cur.slug)){history.replaceState(null,"",h);show(it)}return}
      /* links inside the cloned content / footer: footer nav items open their own page; anything else goes home first, then runs there */
      var fa=null;items().some(function(x){if(x.href===h&&aslug(a)===x.slug){fa=x;return true}});if(fa){if(!cur||fa.slug!==cur.slug){history.replaceState(null,"","#/more/"+fa.slug);show(fa)}return}
      leave(h==="#/"||h==="#main"?null:function(){replay(h)});return}
    return}
  if(h.charAt(0)!=="#")return;
  var nav=isNavItem(a);
  if(nav){e.preventDefault();e.stopImmediatePropagation();var it2=findItem(aslug(a));if(!it2)return;var to="#/more/"+it2.slug;
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
window.BuildOut={items:items,sections:function(s){var it=findItem(s);return it?sectionsFor(it):[]},open:function(s){var it=findItem(s);if(it){history.pushState(null,"","#/more/"+it.slug);show(it)}},isOpen:function(){return open}};
})();
