/* _kit/v4/v4.js: the shared v4 motion layer (WAVE_BRIEF "STRUCTURE v3" + "PREMIUM MOTION v4" + its CORRECTION + "CURRENT STANDARD").
   Distilled from the three approved references (/drn-engineering/, /teknomedical/, /charlesausten/). Driven by data attributes; see _kit/v4/README.md.
   Load order (build.sh does this): gsap, ScrollTrigger, SplitText, lenis, fit + buildout (one @libs marker), then this file, then nssfix.

   Contract: every element is visible without JS. This file only animates. prefers-reduced-motion: no intro, no Lenis, no pin, no parallax.

   Hooks (all optional; a missing hook is skipped):
     #hdr [data-v4-header]           header; gets .solid once scrolled (CSS condenses it: --hh -> --hhs)
     #burger, #burgerLab, #mm        phone menu (label text from data-open / data-close on #burgerLab)
     #pre [data-v4-logo]             intro overlay with the logo lockup; [data-v4-brand] is the header logo it lifts into
     [data-v4-first]                 hero + fact strip wrapper; CSS sizes it to the measured viewport (--v4-vh) minus the header
     [data-v4-hero]                  hero: its h1 rises line by line, [data-in] children fade up,
     [data-v4-photo]                 the hero figure: clip-path wipe from the right while its img eases 1.12 -> 1.04, then a slow drift + scroll parallax
     [data-v4-strip]                 fact strip: its items slide in
     [data-split]                    headings: whole lines rise out of a mask on scroll (SplitText lines, never letters)
     [data-up] / [data-up="stagger"] fade up on arrival (the element, or its children one after another)
     [data-rv]                       image frame: clip-path wipe on arrival;  [data-px] adds inner parallax to its img
     [data-count]                    a number that counts up once (keeps any suffix: "40+", "24 h")
     section[data-v4-story]          pinned photo story (>=1024 wide and >=620 high), stacked with reveals below that:
        .rail > i + li*              progress rail (i = progress line, li = step labels)
        .steps > li.step             each step: <figure><img>...</figure> + <div class="st">...</div>
   Config (optional, before this file): window.V4 = {secs:{route:"sectionId"}, pinFrom:"(min-width:1024px) and (min-height:620px)", stepVh:80}
   Section routes: #/<key> scrolls to window.SECS[key] / V4.secs[key] / the element with id <key>; #/more/* belongs to lib/buildout.js. */
(function(){
"use strict";
if(window.__v4)return;window.__v4=1;
var D=document,DE=D.documentElement,B=D.body,W=window,C=W.V4||{};
DE.classList.add("js");
try{history.scrollRestoration="manual"}catch(x){}
var RM=false;try{RM=matchMedia("(prefers-reduced-motion: reduce)").matches}catch(e){}
var G=W.gsap,ST=W.ScrollTrigger,SPL=W.SplitText;
if(G&&ST)G.registerPlugin(ST);if(G&&SPL)G.registerPlugin(SPL);
var OK=!!(G&&ST)&&!RM;
var $=function(s,r){return (r||D).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||D).querySelectorAll(s))};
var hdr=$("[data-v4-header]")||D.getElementById("hdr");
var SECS=C.secs||W.SECS||{};
var PINQ=C.pinFrom||"(min-width:1024px) and (min-height:620px)";
function cssPx(n,d){var v=parseFloat(getComputedStyle(DE).getPropertyValue(n));return isNaN(v)?d:v}
function hhs(){return cssPx("--hhs",hdr?hdr.offsetHeight:64)}

/* ---- first screen: hero + strip = exactly one viewport. CSS reads --v4-vh (measured, so it matches innerHeight in every browser).
   Phones keep the first value while only the height changes (URL bar), as svh would. ---- */
var lastW=0,lastH=0;
function fit(){var w=innerWidth,h=innerHeight,touch=matchMedia("(pointer:coarse)").matches;
  if(touch&&w===lastW&&Math.abs(h-lastH)<160)return;lastW=w;lastH=h;DE.style.setProperty("--v4-vh",h+"px")}
fit();addEventListener("resize",function(){fit();if(ST)ST.refresh()});

/* ---- Lenis ---- */
var lenis=null;
if(OK&&W.Lenis){lenis=new Lenis({lerp:.1,smoothWheel:true,wheelMultiplier:1});lenis.on("scroll",ST.update);G.ticker.add(function(t){lenis.raf(t*1000)});G.ticker.lagSmoothing(0)}
W.V4lenis=lenis;
function sy(){return lenis?lenis.scroll:scrollY}

/* ---- section routes ---- */
function key(h){var m=/^#\/?([^\/?#]+)\/?$/.exec(h||"");if(!m||m[1]==="more")return null;var k=decodeURIComponent(m[1]),id=SECS[k]||k;return D.getElementById(id)?id:null}
function go(id,instant){var el=D.getElementById(id);if(!el)return;var t=el.parentElement&&el.parentElement.classList.contains("pin-spacer")?el.parentElement:el;
  var y=Math.max(0,t.getBoundingClientRect().top+scrollY-hhs()+1);
  if(lenis)lenis.scrollTo(y,instant?{immediate:true,force:true}:{duration:1.3,force:true});else scrollTo({top:y,behavior:(instant||RM)?"auto":"smooth"})}
function top0(instant){if(lenis)lenis.scrollTo(0,{immediate:!!instant,duration:1.2,force:true});else scrollTo({top:0,behavior:(instant||RM)?"auto":"smooth"})}

/* ---- phone menu ---- */
var bur=D.getElementById("burger"),mm=D.getElementById("mm"),bl=D.getElementById("burgerLab");
function isOpen(){return B.classList.contains("menu-open")}
function setMenu(on){if(!bur||!mm)return;B.classList.toggle("menu-open",on);bur.setAttribute("aria-expanded",on?"true":"false");mm.setAttribute("aria-hidden",on?"false":"true");
  if(bl)bl.textContent=on?(bl.getAttribute("data-close")||"Close"):(bl.getAttribute("data-open")||"Menu");if(lenis){on?lenis.stop():lenis.start()}}
if(bur)bur.addEventListener("click",function(){setMenu(!isOpen())});
addEventListener("keydown",function(e){if(e.key==="Escape"&&isOpen())setMenu(false)});
addEventListener("resize",function(){if(isOpen()&&bur&&getComputedStyle(bur).display==="none")setMenu(false)});
D.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#']");if(!a)return;var h=a.getAttribute("href");if(/^#\/more\//.test(h))return;
  var open=isOpen();
  if(h==="#main"||h==="#/"||h==="#"){e.preventDefault();setMenu(false);setTimeout(function(){top0()},open?60:0);try{history.replaceState(null,"","#/")}catch(x){}return}
  var id=key(h);if(!id)return;e.preventDefault();setMenu(false);setTimeout(function(){go(id)},open?60:0);try{history.replaceState(null,"","#/")}catch(x){}});
addEventListener("hashchange",function(){var id=key(location.hash);if(id){go(id);try{history.replaceState(null,"","#/")}catch(x){}}});
var first=key(location.hash);
if(first)addEventListener("load",function(){setTimeout(function(){go(first,true);try{history.replaceState(null,"","#/")}catch(x){}},OK?500:120)});

/* ---- condensing header ---- */
function onS(){if(hdr)hdr.classList.toggle("solid",sy()>8)}
if(lenis)lenis.on("scroll",onS);addEventListener("scroll",onS,{passive:true});onS();

/* ---- no motion: show everything, stop here ---- */
function endIntro(){DE.classList.remove("intro");var p=D.getElementById("pre");if(p)p.style.display="none"}
if(!OK){DE.classList.remove("v4-wait");endIntro();return}

function start(){
  var T0=0;
  /* ---- 1. brand intro, <=1.2 s, once per session: the logo lockup unmasks (clip-path wipe), then lifts into the header logo ---- */
  var pre=D.getElementById("pre"),L=pre&&$("[data-v4-logo]",pre),brand=$("[data-v4-brand]")||D.getElementById("brand");
  if(DE.classList.contains("intro")&&pre&&L&&brand&&scrollY<10&&!first){
    try{sessionStorage.setItem("v4intro","1")}catch(e){}
    T0=.78;if(lenis)lenis.stop();
    var it=G.timeline({onComplete:function(){endIntro();if(lenis)lenis.start()}});
    it.fromTo(L,{clipPath:"inset(0 100% 0 0)"},{clipPath:"inset(0 0% 0 0)",duration:.45,ease:"power2.inOut"},0);
    it.add(function(){var a=L.getBoundingClientRect(),b=brand.getBoundingClientRect();
      G.to(L,{x:b.left-a.left,y:b.top-a.top,scale:b.height/a.height,transformOrigin:"0 0",duration:.55,ease:"power3.inOut"})},.45);
    it.to(pre,{backgroundColor:"rgba(255,255,255,0)",duration:.33,ease:"power1.out"},.72);
    it.to({},{duration:.01},1.08);
    setTimeout(function(){endIntro();if(lenis)lenis.start()},1600);
  }else endIntro();
  heroIn(T0);

  /* ---- headings: whole lines rise out of a mask ---- */
  $$("#view [data-split]").forEach(function(h){if(h.closest("[data-v4-hero]"))return;var sp=null;try{sp=SPL&&SPL.create(h,{type:"lines",mask:"lines",linesClass:"sl"})}catch(e){}
    if(!sp||!sp.lines.length)return;G.fromTo(sp.lines,{yPercent:110},{yPercent:0,duration:1,ease:"power3.out",stagger:.09,scrollTrigger:{trigger:h,start:"top 90%",once:true},onComplete:function(){try{sp.revert()}catch(e){}}})});
  /* ---- fade-ups ---- */
  $$("#view [data-up]").forEach(function(el){var kids=el.getAttribute("data-up")==="stagger"?Array.prototype.slice.call(el.children):[el];if(!kids.length)return;
    G.from(kids,{y:34,opacity:0,duration:.9,ease:"power3.out",stagger:kids.length>1?.08:0,clearProps:"transform,opacity",scrollTrigger:{trigger:el,start:"top 88%",once:true}})});
  /* ---- image reveals + inner parallax (outside the pinned story) ---- */
  function reveal(list){list.forEach(function(f){if(f.__rv)return;f.__rv=1;var im=$("img",f);
    /* parallax needs its own clipping frame round the img, or the moving photo slides over a caption in the same figure */
    if(im&&f.hasAttribute("data-px")&&im.parentElement===f&&f.children.length>1){var w=D.createElement("span");w.className="v4f";w.style.cssText="display:block;overflow:hidden;position:relative";f.insertBefore(w,im);w.appendChild(im)}
    G.fromTo(f,{clipPath:"inset(100% 0% 0% 0%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:1.15,ease:"power3.inOut",clearProps:"clipPath",scrollTrigger:{trigger:f,start:"top 90%",once:true}});
    if(im&&f.hasAttribute("data-px"))G.fromTo(im,{yPercent:-3.5,scale:1.08},{yPercent:3.5,scale:1.08,ease:"none",scrollTrigger:{trigger:f,start:"top bottom",end:"bottom top",scrub:true}})})}
  reveal($$("#view [data-rv]").filter(function(f){return !f.closest("[data-v4-story],[data-v4-hero]")}));
  /* ---- counting figures ---- */
  $$("#view [data-count]").forEach(function(b){var t=b.textContent,m=/^(\D*)(\d[\d,]*)(.*)$/.exec(t.trim());if(!m)return;var n=+m[2].replace(/,/g,""),o={v:0};
    ST.create({trigger:b,start:"top 90%",once:true,onEnter:function(){G.fromTo(o,{v:0},{v:n,duration:1.4,ease:"power2.out",onUpdate:function(){b.textContent=m[1]+Math.round(o.v)+m[3]},onComplete:function(){b.textContent=t}})}})});

  /* ---- pinned photo story ---- */
  var MM=G.matchMedia();
  $$("[data-v4-story]").forEach(function(sec){
    var steps=$$(".steps > .step",sec),n=steps.length;if(n<2)return;
    var figs=steps.map(function(s){return $("figure",s)}),txt=steps.map(function(s){return $(".st",s)}),ims=figs.map(function(f){return f&&$("img",f)}),
        caps=figs.map(function(f){return f&&$("figcaption",f)}),lab=$$(".rail li",sec),prog=$(".rail i",sec);
    MM.add(PINQ,function(){
      sec.classList.add("pinned");ST.refresh();var cur=-1;
      function setI(i){if(i===cur)return;cur=i;lab.forEach(function(l,k){l.classList.toggle("on",k===i)});txt.concat(figs).forEach(function(t,k){if(!t)return;if(k%n===i)t.removeAttribute("aria-hidden");else t.setAttribute("aria-hidden","true")})}
      G.set(figs,{autoAlpha:0});G.set(figs[0],{autoAlpha:1});G.set(txt,{autoAlpha:0,y:24});G.set(txt[0],{autoAlpha:1,y:0});G.set(ims.filter(Boolean),{scale:1.06});G.set(caps.filter(Boolean),{autoAlpha:0});if(caps[0])G.set(caps[0],{autoAlpha:1});setI(0);
      var tl=G.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:sec,start:function(){return "top top+="+hhs()},end:"+="+(n*(C.stepVh||80))+"%",pin:true,scrub:.7,anticipatePin:1,invalidateOnRefresh:true,
        onUpdate:function(s){if(prog)G.set(prog,{scaleX:s.progress})}},
        onUpdate:function(){setI(Math.max(0,Math.min(n-1,Math.floor(tl.time()+.5))))}});
      tl.fromTo(ims[0],{scale:1.12},{scale:1,duration:1},0);
      for(var i=1;i<n;i++){var at=i-.5;
        /* photos crossfade and settle */
        tl.to(figs[i-1],{autoAlpha:0,duration:.45},at).fromTo(figs[i],{autoAlpha:0},{autoAlpha:1,duration:.45,immediateRender:false},at)
          .fromTo(ims[i],{scale:1.14},{scale:1,duration:1.1,immediateRender:false},at);
        /* step text NEVER overlaps: the outgoing text is fully gone (at-.02) before the incoming text starts (at+.02) */
        tl.to(txt[i-1],{autoAlpha:0,y:-24,duration:.25,ease:"power2.in"},at-.27)
          .fromTo(txt[i],{autoAlpha:0,y:24},{autoAlpha:1,y:0,duration:.28,ease:"power2.out",immediateRender:false},at+.02);
        /* captions are text too: they switch the same way, never ghosted */
        if(caps[i-1])tl.to(caps[i-1],{autoAlpha:0,duration:.25},at-.27);if(caps[i])tl.fromTo(caps[i],{autoAlpha:0},{autoAlpha:1,duration:.28,immediateRender:false},at+.02)}
      tl.to({},{duration:.5},n-.5);
      return function(){sec.classList.remove("pinned");G.set(figs.concat(txt,ims,caps).filter(Boolean),{clearProps:"all"});txt.concat(figs).forEach(function(t){t&&t.removeAttribute("aria-hidden")})}});
    /* small screens: a stacked sequence with reveals */
    MM.add("not all and "+PINQ.replace(/^\s*/,""),function(){
      reveal(figs.filter(Boolean));txt.forEach(function(t){if(t)G.from(t,{y:30,opacity:0,duration:.8,ease:"power3.out",clearProps:"transform,opacity",scrollTrigger:{trigger:t,start:"top 92%",once:true}})})});
  });
  setTimeout(function(){ST.refresh()},400);
  addEventListener("load",function(){ST.refresh()});
}

/* ---- hero entrance: lines rise from a mask, [data-in] fade up, the photo wipes in from 1.12 and settles, then drifts; the strip slides in ---- */
function heroIn(d){
  var hero=$("[data-v4-hero]");DE.classList.remove("v4-wait");if(!hero)return;
  var h1=$("h1",hero),fig=$("[data-v4-photo]",hero)||$("[data-v4-photo]"),img=fig&&$("img",fig),cap=fig&&$("figcaption",fig),strip=$("[data-v4-strip]");
  var sp=null;try{if(SPL&&h1)sp=SPL.create(h1,{type:"lines",mask:"lines",linesClass:"hln"})}catch(e){sp=null}
  var tl=G.timeline({paused:true,defaults:{ease:"power3.out"}});
  if(sp&&sp.lines.length)tl.from(sp.lines,{yPercent:115,duration:.95,stagger:.1,immediateRender:true,onComplete:function(){try{sp.revert()}catch(e){}}},.1);
  else if(h1)tl.from(h1,{y:30,opacity:0,duration:.9,clearProps:"all",immediateRender:true},.1);
  /* [data-in] before the h1 (the kicker) starts with it; the rest follow */
  var ins=$$("[data-in]",hero),pre=ins.filter(function(e){return h1&&(e.compareDocumentPosition(h1)&4)}),post=ins.filter(function(e){return pre.indexOf(e)<0});
  if(pre.length)tl.from(pre,{y:16,opacity:0,duration:.7,clearProps:"transform,opacity",immediateRender:true},0);
  if(post.length)tl.from(post,{y:24,opacity:0,duration:.85,stagger:.1,clearProps:"transform,opacity",immediateRender:true},.5);
  if(fig){tl.fromTo(fig,{clipPath:"inset(0% 0% 0% 100%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:1.2,ease:"power4.inOut",clearProps:"clipPath"},0);
    if(img)tl.fromTo(img,{scale:1.12},{scale:1.04,duration:1.8,ease:"power2.out",onComplete:function(){G.to(img,{scale:1.09,duration:18,ease:"sine.inOut",yoyo:true,repeat:-1})}},0);
    if(cap)tl.from(cap,{yPercent:100,opacity:0,duration:.7,clearProps:"transform,opacity",immediateRender:true},.9)}
  if(strip){var li=$$("li",strip);if(!li.length)li=Array.prototype.slice.call(strip.children);tl.from(li,{yPercent:110,opacity:0,duration:.8,stagger:.07,clearProps:"transform,opacity",immediateRender:true},.45)}
  tl.progress(.001).progress(0);if(d)G.delayedCall(d,function(){tl.play()});else tl.play();
  if(img)G.to(img,{yPercent:2,ease:"none",scrollTrigger:{trigger:$("[data-v4-first]")||hero,start:"top top",end:"bottom top",scrub:true}});
}

if(D.fonts&&D.fonts.ready)D.fonts.ready.then(function(){fit();start()});else start();
})();
