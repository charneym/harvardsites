/* _kit/v4/v4.js: the shared v4 motion layer.
   MOTION FIX (2026-11-27): every animation here is PORTED from the sites the client was already sent (/desoutter/, /lightel/, /viamed/, /sentec/;
   sources _kit/src/desoutter.src.html and _kit/src/lightel.src.html, whose scripts are identical in these parts). Nothing is invented:
     - eases "flow" (0.65,0.05,0.2,1) and "silk" (0.22,1,0.36,1); Lenis lerp .09, lagSmoothing(120,33)            <- ENV
     - the preloader: lockup fades/rises in as ONE unit (CSS), progress bar, then the panel lifts away (flow .85 s),
       the header drops in (silk .7 s) and the hero plays at .95 s; once per session, later loads get the short veil fade  <- preload()
     - the hero: h1 lines rise (silk 1.1 s, stagger .08), [data-in] items follow (y 22, silk .9 s), h1 drifts up and fades on scroll;
       the hero photo fades in like the sent hero visual (filter opacity, 1.8 s)                                        <- initView()
     - headings [data-split]: lines + words rise out of a mask (silk 1.15 s)                                               <- splitReveal()
     - every other element: the sent global reveal (rvView): headings line by line, text/cards/figures fade up 24 px,
       images in a clipping frame fade from scale 1.06; batched on scroll, failsafe after 2.5 s                           <- rvView()
     - the pinned story: desoutter's pin (2.8 viewports, scrub .6, progress line, rail on/done). The step change is TIME-based:
       outgoing photo fades out .6 s, incoming rises from y 24 / opacity 0 over .9 s ("silk"); the step text does the same,
       the new text only once the old one is gone (never two at once)                                                   <- story()
     - the route curtain #xc/#xt/#xtt/#xlab used by lib/buildout.js: gsap.set(#xc,{y:0,yPercent:101}) as the sent sites do
     - the phone menu: clip-path circle opening (flow .9 s), links rise (silk .9 s, stagger .05)                          <- openMenu()
   Hover states are CSS (_kit/v4/v4.css, injected by build.sh).
   Load order (build.sh): gsap, ScrollTrigger, SplitText, CustomEase, lenis, storyfx, buildout (one @libs marker), then this file, then nssfix.

   Contract: every element is visible without JS. prefers-reduced-motion: no loader, no Lenis, no pin, no reveals.
   Hooks:  #hdr [data-v4-header] · #burger #burgerLab #mm · #pre > [data-v4-logo] · [data-v4-brand] · [data-v4-first] · [data-v4-hero] (h1 + [data-in])
           [data-v4-photo] · [data-v4-strip] (data-v4-strip="off" removes it) · [data-split] · section[data-v4-story] (.rail > i + li*, .steps > li.step > figure + .st)
           [data-up] / [data-rv] / [data-px] / [data-count] are still accepted in the markup; the global reveal now covers them (no extra effects).
   Config (optional, before this file): window.V4 = {secs:{route:"sectionId"}, pinFrom:"(min-width:1024px) and (min-height:620px)", site:"Name", tagline:"..."} */
(function(){
"use strict";
if(window.__v4)return;window.__v4=1;
var D=document,DE=D.documentElement,B=D.body,W=window,C=W.V4||{};
DE.classList.add("js");
try{history.scrollRestoration="manual"}catch(x){}
var RM=false;try{RM=matchMedia("(prefers-reduced-motion: reduce)").matches}catch(e){}
var G=W.gsap,ST=W.ScrollTrigger,SPL=W.SplitText,CE=W.CustomEase;
if(G&&ST)G.registerPlugin(ST);if(G&&SPL)G.registerPlugin(SPL);if(G&&CE)G.registerPlugin(CE);
var OK=!!(G&&ST&&SPL)&&!RM;
var $=function(s,r){return (r||D).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||D).querySelectorAll(s))};
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
var hdr=$("[data-v4-header]")||D.getElementById("hdr");
var SECS=C.secs||W.SECS||{};
var PINQ=C.pinFrom||"(min-width:1024px) and (min-height:620px)";
function cssPx(n,d){var v=parseFloat(getComputedStyle(DE).getPropertyValue(n));return isNaN(v)?d:v}
function hhs(){return cssPx("--hhs",hdr?hdr.offsetHeight:64)}
var MOBILE=function(){return innerWidth<861};
/* per-site session key, like the sent sites' PK+"-pre" (all sites share one origin) */
var PK=(location.pathname.replace(/index\.html?$/,"").split("/").filter(Boolean).pop()||"v4");
var brandA=$("[data-v4-brand]");brandA=brandA&&brandA.closest("a");
var SITE=C.site||(brandA&&(brandA.getAttribute("aria-label")||"").replace(/,\s*home\s*$/i,"").trim())||D.title.split(/\s[—–|]\s/)[0];
var TAG=C.tagline||(D.title.split(/\s[—–|]\s/)[1]||"");

/* ================= ENV (verbatim: the sent sites' eases and Lenis) ================= */
function bez(a,b,c,d){function X(t){return((1-3*c+3*a)*t+(3*c-6*a))*t*t+3*a*t}function Y(t){return((1-3*d+3*b)*t+(3*d-6*b))*t*t+3*b*t}
  return function(x){if(x<=0)return 0;if(x>=1)return 1;var lo=0,hi=1,t=x;for(var i=0;i<24;i++){var v=X(t);if(Math.abs(v-x)<1e-5)break;if(v<x)lo=t;else hi=t;t=(lo+hi)/2}return Y(t)}}
if(G){if(CE){CE.create("flow","0.65,0.05,0.2,1");CE.create("silk","0.22,1,0.36,1")}else{G.registerEase("flow",bez(.65,.05,.2,1));G.registerEase("silk",bez(.22,1,.36,1))}}

/* ---- the route curtain (lib/buildout.js drives it). The sent sites run gsap.set(".xc",{y:0,yPercent:101}) right after the libs:
   without it GSAP reads the CSS translateY(101%) as a fixed y and the wipe never reaches the screen (the v4 bug). ---- */
(function(){var xc=D.getElementById("xc"),xt=D.getElementById("xt");
  if(!xc){xc=D.createElement("div");xc.id="xc";xc.className="xc";xc.setAttribute("aria-hidden","true");B.appendChild(xc)}
  if(!xt){xt=D.createElement("div");xt.id="xt";xt.className="xt";xt.setAttribute("aria-hidden","true");B.appendChild(xt)}
  if(!D.getElementById("xtt")){var t=D.createElement("div");t.id="xtt";t.className="t";xt.appendChild(t)}
  if(!D.getElementById("xlab")){var l=D.createElement("span");l.id="xlab";l.className="lab";l.textContent=SITE;xt.insertBefore(l,D.getElementById("xtt"))}
  if(G)G.set(xc,{y:0,yPercent:101})})();

/* ---- first screen: hero + strip = exactly one viewport (v4 layout). Phones keep the first value while only the height changes (URL bar). ---- */
var lastW=0,lastH=0;
function fit(){var w=innerWidth,h=innerHeight,touch=matchMedia("(pointer:coarse)").matches;
  if(touch&&w===lastW&&Math.abs(h-lastH)<160)return;lastW=w;lastH=h;DE.style.setProperty("--v4-vh",h+"px")}
fit();
var strip=$("[data-v4-strip]");if(strip&&strip.getAttribute("data-v4-strip")==="off")strip=null;

var lenis=null;
if(OK&&W.Lenis){lenis=new Lenis({lerp:0.09,smoothWheel:true,wheelMultiplier:1});lenis.on("scroll",ST.update);G.ticker.add(function(t){lenis.raf(t*1000)});G.ticker.lagSmoothing(120,33)}
W.V4lenis=lenis;
function sy(){return lenis?lenis.scroll:scrollY}

/* ================= ROUTER: #/<section> scrolls to that section (build-out pages: lib/buildout.js owns #/more/*) ================= */
function key(h){var m=/^#\/?([^\/?#]+)\/?$/.exec(h||"");if(!m||m[1]==="more")return null;var k=decodeURIComponent(m[1]),id=SECS[k]||k;return D.getElementById(id)?id:null}
function secEl(id){var el=D.getElementById(id);if(!el)return null;var pa=el.parentElement;return pa&&pa.classList.contains("pin-spacer")?pa:el}
function secGo(id,instant){var el=secEl(id);if(!el)return;var off=-hhs()+1;
  if(lenis&&!instant)lenis.scrollTo(el,{offset:off,duration:1.5,force:true});else{var y=Math.max(0,el.getBoundingClientRect().top+scrollY+off);if(lenis)lenis.scrollTo(y,{immediate:true,force:true});scrollTo(0,y)}}
function top0(){if(lenis)lenis.scrollTo(0,{duration:1.4,force:true});else scrollTo({top:0,behavior:RM?"auto":"smooth"})}

/* ================= MENU (verbatim choreography: clip-path circle, links rise) ================= */
var bur=D.getElementById("burger"),mm=D.getElementById("mm"),bl=D.getElementById("burgerLab");
var MMA=!!G;if(MMA&&mm)DE.classList.add("v4m");
function isOpen(){return B.classList.contains("menu-open")}
function openMenu(){B.classList.add("menu-open");bur.setAttribute("aria-expanded","true");if(bl)bl.textContent=bl.getAttribute("data-close")||"Close";mm.setAttribute("aria-hidden","false");mm.style.visibility="visible";if(lenis)lenis.stop();
  if(!MMA)return;
  G.to(mm,{clipPath:"circle(150% at calc(100% - 40px) 40px)",duration:RM?.01:.9,ease:"flow"});
  G.fromTo($$("li a",mm),{yPercent:110},{yPercent:0,duration:RM?.01:.9,ease:"silk",stagger:RM?0:.05,delay:RM?0:.2});var f=$(".mmf",mm);if(f)G.fromTo(f,{opacity:0},{opacity:1,duration:RM?.01:.7,delay:RM?0:.5})}
function closeMenu(){B.classList.remove("menu-open");bur.setAttribute("aria-expanded","false");if(bl)bl.textContent=bl.getAttribute("data-open")||"Menu";mm.setAttribute("aria-hidden","true");if(lenis)lenis.start();
  if(!MMA){mm.style.visibility="";return}
  G.to(mm,{clipPath:"circle(0px at calc(100% - 40px) 40px)",duration:RM?.01:.7,ease:"flow",onComplete:function(){if(!isOpen())mm.style.visibility="hidden"}})}
function setMenu(on){if(!bur||!mm)return;on?openMenu():closeMenu()}
if(bur&&mm)bur.addEventListener("click",function(){setMenu(!isOpen())});
addEventListener("keydown",function(e){if(e.key==="Escape"&&isOpen())setMenu(false)});
addEventListener("resize",function(){if(isOpen()&&bur&&getComputedStyle(bur).display==="none")setMenu(false)});
D.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#']");if(!a)return;var h=a.getAttribute("href");if(/^#\/more\//.test(h))return;
  var open=isOpen();
  if(h==="#main"||h==="#/"||h==="#"){e.preventDefault();if(open)setMenu(false);setTimeout(top0,open?450:0);try{history.replaceState(null,"","#/")}catch(x){}return}
  var id=key(h);if(!id)return;e.preventDefault();if(open){setMenu(false);setTimeout(function(){secGo(id)},450)}else secGo(id);try{history.replaceState(null,"","#/")}catch(x){}});
addEventListener("hashchange",function(){var id=key(location.hash);if(id){secGo(id);try{history.replaceState(null,"","#/")}catch(x){}}});
/* deep link #/<section>: wait until the loader has unlocked the page, then jump (verbatim wait loop) */
(function(){var id=key(location.hash);if(!id)return;var n=0;(function wait(){if(++n>60)return;var lk=DE.style.overflow==="hidden"||DE.classList.contains("intro");if(lk){setTimeout(wait,150);return}
  setTimeout(function(){secGo(id,true);try{history.replaceState(null,"","#/")}catch(x){}},300)})()})();

/* ---- condensing header (v4 layout) ---- */
function onS(){if(hdr)hdr.classList.toggle("solid",sy()>8)}
if(lenis)lenis.on("scroll",onS);addEventListener("scroll",onS,{passive:true});onS();

function endIntro(){DE.classList.remove("intro");DE.classList.remove("v4-wait")}
if(!OK){endIntro();var p0=D.getElementById("pre");if(p0)p0.style.display="none";return}

var view=D.getElementById("view")||D.getElementById("main")||B;
var hero=$("[data-v4-hero]"),firstScr=$("[data-v4-first]")||hero,photo=$("[data-v4-photo]");
function unmask(s){if(!s)return;(s.masks||[]).forEach(function(m){m.style.overflow="visible";m.style.clipPath="none"})}

/* ================= VIEW ANIMATIONS (verbatim initView / splitReveal) ================= */
var HERO_TL=[],ENTRY=0;
function splitReveal(el,E){
  var st=SPL.create(el,{type:"lines,words",mask:"lines",linesClass:"ln"});
  var fs=el.getBoundingClientRect().top+scrollY<innerHeight;
  G.from(el,{opacity:0,duration:.7,ease:"power1.out",delay:fs?(E||0)+.45:0,scrollTrigger:{trigger:el,start:fs?"top bottom":"top 90%"}});
  G.from(st.lines,{yPercent:100,opacity:0,duration:1.15,ease:"silk",stagger:.09,delay:fs?(E||0)+.45:0,scrollTrigger:{trigger:el,start:fs?"top bottom":"top 90%"},onComplete:function(){unmask(st)}});
}
function photoIn(d){if(photo)G.fromTo(photo,{filter:"opacity(0)"},{filter:"opacity(1)",duration:d,ease:"power2.out",clearProps:"filter"})}
function initView(first){var E=ENTRY;ENTRY=0;HERO_TL=[];
  DE.classList.remove("v4-wait");/* before any tween reads a start value (the v4-wait CSS holds the hero at opacity 0) */
  var t=hero&&$("h1",hero);
  if(hero){
    var mob=MOBILE();
    /* CR: the headline rises as whole lines; eyebrow, copy and buttons start while it is still settling */
    var s=t?SPL.create(t,{type:"lines",mask:"lines",linesClass:"ln"}):null;
    var hr=$$("[data-in]",hero);
    var paused=!!(first&&W._preShown);
    var htl=G.timeline({paused:paused,delay:paused?0:E+.1,onComplete:function(){unmask(s)}});
    if(s)htl.from(s.lines,{yPercent:100,opacity:0,duration:mob?.8:1.1,ease:"silk",stagger:mob?.06:.08},0);
    if(hr.length)htl.from(hr,{y:22,opacity:0,duration:mob?.6:.9,ease:"silk",stagger:.04},mob?.12:.22);
    /* the fact strip: calm, it only fades in with the hero copy (no slide) */
    if(strip)htl.from(strip,{opacity:0,duration:mob?.6:.9,ease:"silk"},mob?.12:.22);
    if(paused){W._heroIn=htl;htl.progress(.001).progress(0)}
    HERO_TL.push(htl);
    if(!mob&&t)G.to(t,{yPercent:-14,opacity:.25,ease:"none",scrollTrigger:{trigger:firstScr,start:"top top",end:"bottom top",scrub:true}});
  }
  $$("[data-split]",view).forEach(function(el){if(el.closest("[data-v4-hero]"))return;splitReveal(el,E)});
  $$("[data-v4-story]",view).forEach(story);
  rvView(view,E);
  var rt;$$("img").forEach(function(im){if(!im.complete)im.addEventListener("load",function(){clearTimeout(rt);rt=setTimeout(function(){ST.refresh()},200)},{once:true})});
  ST.refresh();
}

/* ================= AZ: GLOBAL REVEAL (verbatim) ================= */
var RV_SEL="h1,h2,h3,h4,h5,h6,p,li,b,strong,small,span,blockquote,figcaption,dt,dd,tr,label,button,a[class],img,svg,figure,canvas,picture,video,.fld,[class*=card],[class*=stat],[class*=tile],[class*=eyebrow],[class*=kicker],[class*=label],[class*=lab],[class*=tag],[class*=btn],[class*=pill]";
var RV_UNIT="li,tr,button,a,p,h1,h2,h3,h4,h5,h6,figure,blockquote,label,dt,dd,img,svg,canvas,picture,video,.fld";
var RV_SKIP=".hero,.ph-head,#pageTitle,[data-v4-first],[data-v4-hero],[data-v4-story].pinned .steps,#pre,.bo,[aria-hidden=true],.sr-only,script,style,template,[data-norv]";
var RV_LIVE=[];
function rvMarks(root){var A=new Set(),K=new Set();
  $$("*",root).forEach(function(el){var t=G.getTweensOf(el);for(var i=0;i<t.length;i++){if(t[i].vars.repeat<0)continue;A.add(el);
      for(var p=el.parentElement;p&&p!==root&&!K.has(p);p=p.parentElement)K.add(p);break}});
  return {A:A,K:K}}
function rvWalk(n,out,M){for(var c=n.firstElementChild;c;c=c.nextElementSibling){
  if(M.A.has(c)||c.matches(RV_SKIP))continue;
  var cs=getComputedStyle(c);if(cs.display==="none"||cs.visibility==="hidden"||+cs.opacity<.05||cs.position==="fixed")continue;
  if(M.K.has(c)&&!c.matches("figure")){rvWalk(c,out,M);continue}
  if(c.matches(RV_SEL)&&(c.matches(RV_UNIT)||c.querySelectorAll(RV_SEL).length<2)){var r=c.getBoundingClientRect();
    if(r.height>innerHeight*.35&&!c.matches("figure,picture")&&c.querySelectorAll(RV_SEL).length>1){rvWalk(c,out,M);continue}
    if(r.width>1&&r.height>1)out.push(c);continue}
  rvWalk(c,out,M)}}
function rvHide(el){
  if(/^H[1-6]$/.test(el.tagName)&&!el.querySelector("img,svg,canvas")){
    el._rvS=SPL.create(el,{type:"lines",mask:"lines",linesClass:"ln"});G.set(el._rvS.lines,{yPercent:100,opacity:0});G.set(el,{opacity:0});return}
  var med=/^(IMG|CANVAS|VIDEO|PICTURE)$/.test(el.tagName),clip=med&&el.parentElement&&/hidden|clip/.test(getComputedStyle(el.parentElement).overflow);
  el.style.transition="none";
  G.set(el,clip?{opacity:0,scale:1.06,transformOrigin:"50% 50%"}:{opacity:0,y:med?36:24})}
function rvGo(b,d,gap){var g=gap==null?.07:gap;b.forEach(function(el,i){if(el._rvDone)return;el._rvDone=1;var dl=d+i*g;
  if(el._rvS){var s=el._rvS;G.to(el,{opacity:1,duration:.7,ease:"power1.out",delay:dl,clearProps:"opacity"});G.to(s.lines,{yPercent:0,opacity:1,duration:1.1,ease:"silk",stagger:.08,delay:dl,overwrite:true,onComplete:function(){if(el._rvS===s){s.revert();el._rvS=null}}})}
  else G.to(el,{y:0,scale:1,opacity:1,duration:1,ease:"silk",delay:dl,overwrite:true,clearProps:"transform,opacity,transition,transformOrigin"})})}
function rvCollect(root){var M=rvMarks(root),out=[];rvWalk(root,out,M);return out}
function rvView(view,E){var t0=performance.now(),E0=(E||0)+.3;
  function base(){return Math.max(0,E0-(performance.now()-t0)/1000)}
  var items=rvCollect(view);
  /* the footer, when a v4 page keeps it outside #view (the sent sites render it inside the view) */
  $$("footer").forEach(function(f){if(!view.contains(f)&&!f.closest(".bo"))items=items.concat(rvCollect(f))});
  items.forEach(rvHide);RV_LIVE=items;
  var fh=items.filter(function(el){return el._rvS&&el.getBoundingClientRect().top+scrollY<innerHeight}),rest=items.filter(function(el){return fh.indexOf(el)<0});
  if(fh.length)ST.batch(fh,{start:"top bottom",end:"max",once:true,interval:.1,batchMax:10,onEnter:function(b){rvGo(b,base())}});
  if(rest.length)ST.batch(rest,{start:"top 90%",end:"max",once:true,interval:.1,batchMax:10,onEnter:function(b){rvGo(b,base(),.05)}});
  setTimeout(function(){if(view.isConnected)ST.refresh()},700)}
function rvFail(){RV_LIVE.forEach(function(el){if(!el.isConnected)return;var r=el.getBoundingClientRect();if(r.top>=innerHeight)return;
  if(!el._rvDone){rvGo([el],0);return}
  var t=el._rvS?el._rvS.lines:[el];if(!G.getTweensOf(t[0]).some(function(w){return !w.paused()&&w.progress()<1})&&+getComputedStyle(t[0]).opacity<.99){G.set(t,{opacity:1,y:0,yPercent:0,scale:1})}})}
function failsafe(){setTimeout(function(){rvFail();HERO_TL.forEach(function(t){if(t&&t.progress()<1&&!(t.isActive&&t.isActive())&&t.paused&&t.paused())t.play()});if((W._fsN=(W._fsN||0)+1)<6&&HERO_TL.some(function(t){return t&&t.progress()<1})){failsafe();return}
  $$("[data-v4-hero] [data-in], [data-v4-hero] h1, [data-v4-hero] h1 *, [data-v4-strip]").forEach(function(el){var cs=getComputedStyle(el);if(+cs.opacity<.99&&!G.getTweensOf(el).some(function(w){return !w.paused()&&w.progress()<1})&&!(el.parentElement&&G.getTweensOf(el.parentElement).some(function(w){return !w.paused()&&w.progress()<1}))){G.killTweensOf(el);G.set(el,{opacity:1,y:0,yPercent:0})}});
  $$("[data-v4-hero] h1 .ln-mask").forEach(function(m){m.style.overflow="visible";m.style.clipPath="none"})},2500)}

/* ================= PINNED STORY (desoutter's homeScroll pin; time-based step changes) ================= */
var MM=G.matchMedia();
function story(sec){
  var steps=$$(".steps > .step",sec),N=steps.length;if(N<2)return;
  var figs=steps.map(function(s){return $("figure",s)}),txt=steps.map(function(s){return $(".st",s)}),
      caps=figs.map(function(f){return f&&$("figcaption",f)}),rail=$$(".rail li",sec),prog=$(".rail i",sec);
  if(txt.some(function(t){return !t}))return;
  MM.add(PINQ,function(){
    sec.classList.add("pinned");var cur=-1,instant=0;
    var all=figs.concat(txt,caps).filter(Boolean);
    /* the step change is TIME-based (client, 2026-11-27), triggered when the active step changes, never scrubbed:
       outgoing photo fades out (.6 s), incoming photo rises in from opacity 0 / y 24px (.9 s, "silk"); no scale, no blur.
       Step text + caption: the outgoing goes first (.3 s), then the incoming rises the same way, so two texts never show together. */
    /* every state change goes through a proxy object written to style directly: build.js's imgfx patch rewrites any gsap
       opacity/autoAlpha tween or set on a photo into "scale 1.035 -> 1", which made the photos grow ("jump bigger"). Here nothing scales. */
    function put(e,a,y){if(!e)return;e.style.opacity=a>=1?"":String(+a.toFixed(4));e.style.visibility=a<=0?"hidden":"";e.style.transform=y?"translate3d(0,"+y.toFixed(2)+"px,0)":""}
    function fade(e,a1,y1,o){if(!e)return;if(e.__v4t)e.__v4t.kill();var cs=e.__v4s||{a:a1,y:0};
      var p={a:"a0" in o?o.a0:cs.a,y:"y0" in o?o.y0:cs.y};e.__v4s=p;put(e,p.a,p.y);
      e.__v4t=G.to(p,{a:a1,y:y1,duration:o.d,ease:o.e,delay:o.dl||0,onUpdate:function(){put(e,p.a,p.y)}})}
    function now(e,a){if(!e)return;if(e.__v4t)e.__v4t.kill();e.__v4s={a:a,y:0};put(e,a,0)}
    function show(n){var prev=cur;if(n===prev)return;cur=n;
      rail.forEach(function(r,j){r.classList.toggle("on",j===n);r.classList.toggle("done",j<n)});
      txt.concat(figs).forEach(function(t,k){if(!t)return;if(k%N===n)t.removeAttribute("aria-hidden");else t.setAttribute("aria-hidden","true")});
      steps.forEach(function(s,j){if(j===n||j===prev)return;[figs[j],txt[j],caps[j]].forEach(function(e){now(e,0)})});
      if(figs[n])figs[n].style.zIndex="2";if(prev>=0&&figs[prev])figs[prev].style.zIndex="1";
      if(instant||prev<0){[figs[n],txt[n],caps[n]].forEach(function(e){now(e,1)});if(prev>=0)[figs[prev],txt[prev],caps[prev]].forEach(function(e){now(e,0)});return}
      fade(figs[prev],0,0,{d:.6,e:"power1.out"});
      fade(figs[n],1,0,{a0:0,y0:24,d:.9,e:"silk"});
      [txt[prev],caps[prev]].forEach(function(e){fade(e,0,0,{d:.3,e:"power2.in"})});
      [txt[n],caps[n]].forEach(function(e){fade(e,1,0,{a0:0,y0:24,d:.9,e:"silk",dl:.32})})}
    steps.forEach(function(s,j){[figs[j],txt[j],caps[j]].forEach(function(e){now(e,j===0?1:0)})});show(0);
    /* desoutter homeScroll: an empty 1 s timeline scrubbed by the pin; its onUpdate drives the progress line and the active step */
    var tl=G.timeline();tl.to({},{duration:1});
    /* a ScrollTrigger refresh (lazy images loading, resize) renders this timeline at 0 while it measures, then restores it in onRefresh:
       ignore those in-between renders, or the current photo would replay its entrance */
    tl.eventCallback("onUpdate",function(){if(!sec.isConnected||ST.isRefreshing)return;var p=tl.progress();if(prog)prog.style.transform="scaleX("+p+")";show(Math.min(N-1,Math.floor(p*N*.9999)))});
    var st=ST.create({trigger:sec,start:function(){return "top top+="+hhs()},end:function(){return "+="+Math.round(innerHeight*2.8)},pin:true,animation:tl,
      onRefresh:function(s){/*after a refresh the story shows the step for the restored progress: the same step stays put, a new one changes softly*/tl.progress(s.progress);var c=tl.eventCallback("onUpdate");if(c)requestAnimationFrame(function(){c.call(tl)})},scrub:.6,anticipatePin:1,invalidateOnRefresh:true});
    return function(){st.kill();tl.kill();all.forEach(function(e){if(e.__v4t)e.__v4t.kill();e.__v4s=null;e.style.opacity="";e.style.visibility="";e.style.transform="";e.style.zIndex=""});sec.classList.toggle("pinned",false);if(prog)prog.style.transform="";txt.concat(figs).forEach(function(t){if(t)t.removeAttribute("aria-hidden")});
      rail.forEach(function(r){r.classList.toggle("on",false);r.classList.toggle("done",false)})}});
}

/* ================= PRELOADER / RELOAD VEIL (verbatim choreography; the lockup moves as one unit; no counter) ================= */
var SEEN=false;try{SEEN=sessionStorage.getItem(PK+"-pre")==="1"}catch(e){}
var LOCKKEYS={32:1,33:1,34:1,35:1,36:1,37:1,38:1,39:1,40:1};
function blockEv(e){e.preventDefault()}
function blockKey(e){if(LOCKKEYS[e.keyCode])e.preventDefault()}
function lockScroll(){DE.style.overflow="hidden";B.style.overflow="hidden";if(lenis)lenis.stop();addEventListener("wheel",blockEv,{passive:false});addEventListener("touchmove",blockEv,{passive:false});addEventListener("keydown",blockKey,{passive:false})}
function unlockScroll(){DE.style.overflow="";B.style.overflow="";removeEventListener("wheel",blockEv,{passive:false});removeEventListener("touchmove",blockEv,{passive:false});removeEventListener("keydown",blockKey,{passive:false});if(lenis)lenis.start()}
function preload(){
  var pre=D.getElementById("pre"),L=pre&&$("[data-v4-logo]",pre);
  if(!pre||!DE.classList.contains("intro")){if(pre)pre.style.display="none";endIntro();initView(false);photoIn(1.4);failsafe();return}
  if(SEEN||!L){DE.classList.add("seen");ENTRY=.35;initView(false);photoIn(1.4);
    G.to(pre,{opacity:0,duration:.5,ease:"power2.out",onComplete:function(){pre.remove();endIntro()}});failsafe();return}
  try{sessionStorage.setItem(PK+"-pre","1")}catch(e){}
  lockScroll();
  var pl=D.createElement("span");pl.className="lab pl";pl.innerHTML=esc(TAG);if(TAG)pre.appendChild(pl);
  var bar=D.createElement("div");bar.className="bar";bar.innerHTML="<i></i>";pre.appendChild(bar);var bi=bar.firstChild;
  L.style.visibility="visible";
  W._preShown=true;ENTRY=1.4;
  if(photo)G.set(photo,{filter:"opacity(0)"});
  G.set(hdr,{yPercent:-120});
  initView(true);
  var wf=0;(function warm(){if(++wf<4){requestAnimationFrame(warm)}else runPre()})();
  function runPre(){
    var t0=performance.now(),ready=false,tasks=[];
    $$("img").forEach(function(im){if(im.decode)tasks.push(im.decode().catch(function(){}))});
    Promise.all(tasks).then(function(){ready=true});setTimeout(function(){ready=true},1000);
    var o={n:0};function upd(){bi.style.transform="scaleX("+o.n/100+")"}
    G.timeline().to(o,{n:88,duration:1,ease:"power2.out",onUpdate:upd},0);
    (function check(){var el=(performance.now()-t0)/1000;if((ready&&el>=.95)||el>=1.15)exit();else requestAnimationFrame(check)})();
    function exit(){
      var mob=MOBILE();
      var LK=L.children.length?Array.prototype.slice.call(L.children):[L];L.style.transition="none";
      var tl=G.timeline({onComplete:function(){pre.remove();endIntro();unlockScroll();G.set(hdr,{clearProps:"transform"});onS();failsafe()}});
      tl.to(o,{n:100,duration:.25,ease:"power1.out",onUpdate:upd},0)
        /* desoutter: .to(wm.chars,{yPercent:-120,opacity:0,duration:.38,ease:"power3.in",stagger:.012},.08): our logo is one lockup, so it rises out as one unit */
        .to(LK,{yPercent:-120,opacity:0,duration:.38,ease:"power3.in"},.08)
        .to([bar,pl],{opacity:0,duration:.3,ease:"power2.in"},.12)
        /* desoutter starts its hero visual at .95; our hero is a photo + H1 on a plain ground, so starting there leaves a blank page
           while the panel lifts. The entrance starts WITH the lift (client, 2026-11-27): no empty frame between loader and site. */
        .add(function(){photoIn(1.8)},mob?.62:.42)
        .add(function(){if(W._heroIn)W._heroIn.play()},mob?.62:.42)
        .to(pre,{yPercent:-100,duration:.85,ease:"flow"},mob?.62:.42)
        .to(hdr,{yPercent:0,duration:.7,ease:"silk"},mob?.75:.55);/* under the lifting panel, so it is already in place when the top is uncovered */
    }
  }
}
(function(){var done=false;function go2(){if(done)return;done=true;fit();preload()}
  if(D.fonts&&D.fonts.ready){D.fonts.ready.then(go2,go2);setTimeout(go2,2500)}else go2()})();
var lw=innerWidth;addEventListener("resize",function(){fit();clearTimeout(W._rz);W._rz=setTimeout(function(){if(Math.abs(innerWidth-lw)<2&&MOBILE())return;lw=innerWidth;ST.refresh()},250)});
addEventListener("load",function(){ST.refresh()});
})();
