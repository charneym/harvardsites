/* DRN home: v3 layout + v4 premium motion (GSAP, ScrollTrigger, SplitText lines, Lenis). Content is visible by default;
   everything below only animates it. prefers-reduced-motion: no intro, no Lenis, no pins, no parallax.
   In-page links #/<section> scroll to their section; header nav items open the build-out pages (lib/buildout.js, loaded first). */
(function(){
try{history.scrollRestoration="manual"}catch(x){}
var SECS={about:"about",turning:"turning",process:"process",plant:"plant",quality:"quality",history:"history",news:"news",contact:"contact"};
var D=document,B=D.body,DE=D.documentElement,hdr=D.getElementById("hdr"),bur=D.getElementById("burger"),mm=D.getElementById("mm");
var RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
var G=window.gsap,ST=window.ScrollTrigger,SPL=window.SplitText;
var OK=!!(G&&ST)&&!RM;
if(G&&ST)G.registerPlugin(ST);if(G&&SPL)G.registerPlugin(SPL);
DE.classList.add("js");

/* first screen: hero + strip = one viewport (CSS reads --sh) */
function sh(){var s=D.getElementById("facts");if(s)DE.style.setProperty("--sh",s.getBoundingClientRect().height+"px")}
sh();addEventListener("resize",sh);

/* smooth scroll */
var lenis=null;
if(OK&&window.Lenis){lenis=new Lenis({lerp:.1,smoothWheel:true,wheelMultiplier:1});lenis.on("scroll",ST.update);G.ticker.add(function(t){lenis.raf(t*1000)});G.ticker.lagSmoothing(0)}
function hh(){return innerWidth>560?64:66}
function go(id,instant){var el=D.getElementById(id);if(!el)return;var y=Math.max(0,el.getBoundingClientRect().top+scrollY-hh()+1);
  if(lenis){lenis.scrollTo(y,instant?{immediate:true,force:true}:{duration:1.3,force:true})}else window.scrollTo({top:y,behavior:(instant||RM)?"auto":"smooth"})}
function key(h){var m=/^#\/?([^\/?#]+)/.exec(h||"");return m?SECS[m[1]]||null:null}

/* menu */
function setMenu(on){B.classList.toggle("menu-open",on);bur.setAttribute("aria-expanded",on?"true":"false");mm.setAttribute("aria-hidden",on?"false":"true");D.getElementById("burgerLab").textContent=on?"Close":"Menu";if(lenis){on?lenis.stop():lenis.start()}}
bur.addEventListener("click",function(){setMenu(!B.classList.contains("menu-open"))});
addEventListener("keydown",function(e){if(e.key==="Escape"&&B.classList.contains("menu-open"))setMenu(false)});
addEventListener("resize",function(){if(innerWidth>1040&&B.classList.contains("menu-open"))setMenu(false)});
D.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^='#']");if(!a)return;var h=a.getAttribute("href");
  if(h==="#main"||h==="#/"){e.preventDefault();var was=B.classList.contains("menu-open");setMenu(false);setTimeout(function(){if(lenis)lenis.scrollTo(0,{duration:1.3,force:true});else window.scrollTo({top:0,behavior:RM?"auto":"smooth"})},was?60:0);return}
  var id=key(h);if(!id)return;e.preventDefault();var open=B.classList.contains("menu-open");setMenu(false);setTimeout(function(){go(id)},open?60:0)});
addEventListener("hashchange",function(){var id=key(location.hash);if(id){go(id);try{history.replaceState(null,"","#/")}catch(x){}}});
var first=key(location.hash);if(first)addEventListener("load",function(){setTimeout(function(){go(first,true);try{history.replaceState(null,"","#/")}catch(x){}},OK?1300:120)});

/* condensing header */
function onS(){hdr.classList.toggle("solid",(lenis?lenis.scroll:scrollY)>8)}
if(lenis)lenis.on("scroll",onS);addEventListener("scroll",onS,{passive:true});onS();

/* images get a frame (for reveal wipes and inner parallax) */
D.querySelectorAll("#view .ph img, #view .card img").forEach(function(im){if(im.closest(".iw"))return;var w=D.createElement("span");w.className="iw";im.parentNode.insertBefore(w,im);w.appendChild(im)});

if(!OK)return;

function start(){
  /* ---- 1. brand intro (<=1.1s): the logo unmasks, then lifts into the header ---- */
  var I=D.getElementById("intro"),brand=D.getElementById("brand"),L=I&&I.querySelector(".in-logo");
  if(I&&L&&brand&&scrollY<10&&!first){
    I.style.display="grid";if(lenis)lenis.stop();G.set(brand,{opacity:0});
    var it=G.timeline({onComplete:function(){I.remove();G.set(brand,{clearProps:"opacity"});if(lenis)lenis.start()}});
    it.fromTo(L,{clipPath:"inset(0 100% 0 0)"},{clipPath:"inset(0 0% 0 0)",duration:.45,ease:"power2.inOut"},0);
    it.add(function(){var a=L.getBoundingClientRect(),b=brand.querySelector("svg").getBoundingClientRect();
      G.to(L,{x:b.left-a.left,y:b.top-a.top,scale:b.height/a.height,transformOrigin:"0 0",duration:.55,ease:"power3.inOut"})},.45);
    it.to(I,{backgroundColor:"rgba(255,255,255,0)",duration:.3,ease:"power1.out"},.72);
    it.to({},{duration:.01},1.08);
    heroIn(.78);
  }else{if(I)I.remove();heroIn(0)}

  /* ---- 3. image reveals + inner parallax, on every framed photo ---- */
  G.utils.toArray("#view .iw").forEach(function(w){if(w.closest(".hero"))return;var im=w.querySelector("img");
    G.fromTo(w,{clipPath:"inset(100% 0% 0% 0%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:1.15,ease:"power3.inOut",clearProps:"clipPath",scrollTrigger:{trigger:w,start:"top 90%",once:true}});
    if(im)G.fromTo(im,{yPercent:-3.5,scale:1.08},{yPercent:3.5,scale:1.08,ease:"none",scrollTrigger:{trigger:w,start:"top bottom",end:"bottom top",scrub:true}})});
  /* section heads, cards, rows: fade up as they arrive */
  function up(sel,stg){G.utils.toArray(sel).forEach(function(el){var kids=stg?el.children:[el];G.from(kids,{y:34,opacity:0,duration:.9,ease:"power3.out",stagger:stg?.08:0,clearProps:"transform,opacity",scrollTrigger:{trigger:el,start:"top 88%",once:true}})})}
  /* section headings: whole lines rise out of a mask (SplitText lines, never letters) */
  G.utils.toArray("#view .shead h2, .sp-l h2, .mat h3, .dirs h3").forEach(function(h){var sp=null;try{sp=SPL&&SPL.create(h,{type:"lines",mask:"lines"})}catch(e){}
    if(!sp||!sp.lines.length)return;G.from(sp.lines,{yPercent:110,duration:1,ease:"power3.out",stagger:.09,scrollTrigger:{trigger:h,start:"top 90%",once:true},onComplete:function(){try{sp.revert()}catch(e){}}})});
  up("#view .shead .kick, #view .shead p");up(".cards, .qgrid, .tl, .dirs ul, .news, .cinfo, .facts",true);up(".mat, .plant table, .contact .pan");
  /* counting figures */
  G.utils.toArray(".facts b").forEach(function(b){var t=b.textContent,m=/^(\d+)(.*)$/.exec(t);if(!m)return;var o={v:0},n=+m[1];
    ST.create({trigger:b,start:"top 90%",once:true,onEnter:function(){G.fromTo(o,{v:0},{v:n,duration:1.4,ease:"power2.out",onUpdate:function(){b.textContent=Math.round(o.v)+m[2]},onComplete:function(){b.textContent=t}})}})});

  var MM=G.matchMedia();
  /* ---- 5. pinned photo story (large screens) ---- */
  MM.add("(min-width:1024px) and (min-height:620px)",function(){
    var sec=D.getElementById("process");if(!sec)return;sec.classList.add("on");
    var pin=sec.querySelector(".story-pin"),ims=G.utils.toArray(sec.querySelectorAll(".frame img")),sts=G.utils.toArray(sec.querySelectorAll(".pstep")),
        lab=G.utils.toArray(sec.querySelectorAll(".rail span")),prog=sec.querySelector(".rail .prog"),cap=sec.querySelector(".spcap"),cur=-1;
    function setI(i){if(i===cur)return;cur=i;lab.forEach(function(s,k){s.classList.toggle("on",k===i)});sts.forEach(function(s,k){if(k===i)s.removeAttribute("aria-hidden");else s.setAttribute("aria-hidden","true")});if(cap)cap.textContent=ims[i].getAttribute("data-cap")}
    G.set(ims,{opacity:0});G.set(ims[0],{opacity:1});G.set(sts,{opacity:0});G.set(sts[0],{opacity:1});setI(0);
    var tl=G.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:pin,start:"top top+=64",end:"+=320%",pin:true,scrub:.7,anticipatePin:1,
      onUpdate:function(s){G.set(prog,{scaleX:s.progress})}},onUpdate:function(){setI(Math.max(0,Math.min(3,Math.floor(tl.time()+.05))))}});
    tl.fromTo(ims[0],{scale:1.1},{scale:1,duration:1},0);
    for(var i=1;i<4;i++){var t=i-.25;
      tl.to(ims[i-1],{opacity:0,duration:.5},t).fromTo(ims[i],{opacity:0},{opacity:1,duration:.5},t).fromTo(ims[i],{scale:1.14},{scale:1,duration:1.25},t)
        .to(sts[i-1],{opacity:0,y:-26,duration:.35},t).fromTo(sts[i],{opacity:0,y:26},{opacity:1,y:0,duration:.4},t+.15)}
    tl.to({},{duration:.4});
    return function(){sec.classList.remove("on");G.set(ims.concat(sts),{clearProps:"all"})};
  });
  /* phones and small screens: stacked steps reveal one by one */
  MM.add("(max-width:1023px), (max-height:619px)",function(){
    G.utils.toArray("#process .step .st").forEach(function(s){G.from(s,{y:30,opacity:0,duration:.8,ease:"power3.out",clearProps:"transform,opacity",scrollTrigger:{trigger:s,start:"top 92%",once:true}})});
  });
  setTimeout(function(){ST.refresh()},400);
}

/* ---- 2/3. hero entrance: lines rise from a mask, lede and buttons follow, the photo wipes in and settles, then drifts ---- */
function heroIn(d){
  var h1=D.querySelector(".hero .d1"),img=D.querySelector(".hero-p img"),fig=D.querySelector(".hero-p");
  var sp=null;try{if(SPL)sp=SPL.create(h1,{type:"lines",mask:"lines",linesClass:"hln"})}catch(e){sp=null}
  var tl=G.timeline({paused:true,defaults:{ease:"power3.out"}});
  if(sp&&sp.lines.length)tl.from(sp.lines,{yPercent:115,duration:.95,stagger:.1,onComplete:function(){try{sp.revert()}catch(e){}},immediateRender:true},.1);
  else tl.from(h1,{y:30,opacity:0,duration:.9,clearProps:"all"},.1);
  tl.from(".hero .kick",{y:16,opacity:0,duration:.7,clearProps:"transform,opacity",immediateRender:true},0);
  tl.from([".hero .lede",".hero .act",".hero .call"],{y:24,opacity:0,duration:.85,stagger:.1,clearProps:"transform,opacity",immediateRender:true},.5);
  tl.fromTo(fig,{clipPath:"inset(0% 0% 0% 100%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:1.2,ease:"power4.inOut",clearProps:"clipPath"},0);
  tl.fromTo(img,{scale:1.12},{scale:1.04,duration:1.8,ease:"power2.out",onComplete:function(){G.to(img,{scale:1.09,duration:18,ease:"sine.inOut",yoyo:true,repeat:-1})}},0);
  tl.from(".hero-p figcaption",{yPercent:100,duration:.7,immediateRender:true},.9);
  tl.from(".strip li",{yPercent:110,opacity:0,duration:.8,stagger:.07,clearProps:"transform,opacity",immediateRender:true},.45);
  tl.progress(.001).progress(0);if(d)G.delayedCall(d,function(){tl.play()});else tl.play();
  G.to(img,{yPercent:2,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:true}});
}

if(D.fonts&&D.fonts.ready)D.fonts.ready.then(function(){sh();start()});else start();
})();
