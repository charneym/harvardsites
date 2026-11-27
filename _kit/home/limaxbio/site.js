var SITE="LiMax Biosciences";
var PK="lmx";
/* loader: the L mark rises from its own clipped row in the same rhythm as the LIMAX letters, landing just before them, so the
   lockup arrives as one piece; it leaves with them. Starts when the template makes the loader's lockup visible. */
(function(){var pre=document.getElementById("pre");if(!pre)return;var pc=pre.querySelector(".pc"),mk=pre.querySelector(".lmw .lm");if(!pc||!mk)return;
  var started=false;
  function go(){if(started||!window.gsap)return;started=true;
    gsap.set(mk,{y:0,yPercent:112});requestAnimationFrame(function(){var ez=(window.CustomEase&&CustomEase.get&&CustomEase.get("silk"))?"silk":"expo.out";gsap.to(mk,{yPercent:0,duration:.8,ease:ez,delay:.04})});
    var wm=pre.querySelector(".wm");if(!wm)return;
    /* leave with the letters: when they start moving up and out, the mark follows */
    var mo2=new MutationObserver(function(){var c=wm.querySelector(".c");if(!c)return;var tr=gsap.getProperty(c,"yPercent");
      if(tr<-5){mo2.disconnect();gsap.to(mk,{yPercent:-112,duration:.38,ease:"power3.in"})}});
    mo2.observe(wm,{subtree:true,attributes:true,attributeFilter:["style"]});}
  if(pc.style.visibility==="visible")go();
  else{var mo=new MutationObserver(function(){if(pc.style.visibility==="visible"){mo.disconnect();go()}});mo.observe(pc,{attributes:true,attributeFilter:["style"]})}
})();
/* v7 (client: sections rendered as empty rows in their browser: reveals that never fired). Content is never left hidden: any
   block the template's reveal (or a split heading, or a counter) parked at opacity 0 is shown as soon as it is in, or above,
   the viewport, whether or not its ScrollTrigger fired (fast scrolls, loading mid-page, triggers measured before a pin or
   a font settled). Story steps that are inactive by design, the vision statement's word-by-word colouring, and the hero (its own entrance plays
   when the loader lifts) are left alone; nothing is swept while the loader is on screen. */
(function(){var busy=false;
  function sweep(){if(busy||!window.gsap)return;var pre=document.getElementById("pre");if(pre&&pre.getBoundingClientRect().bottom>2)return;busy=true;try{var H=innerHeight;
    var list=document.querySelectorAll('#view [style*="opacity"], .ftr [style*="opacity"]');
    for(var i=0;i<list.length;i++){var el=list[i];if((el.closest("#hero")&&!el.closest(".pil"))||el.closest(".ph-head,.step,.scene,.rail")||el.classList.contains("w"))continue;
      var o=parseFloat(el.style.opacity);if(!(o<.2))continue;if(gsap.isTweening(el))continue;
      var r=el.getBoundingClientRect();if(r.top>=H-2||(!r.width&&!r.height))continue;
      if(typeof rvGo==="function"&&typeof RV_LIVE!=="undefined"&&RV_LIVE.indexOf(el)>=0&&!el._rvDone){rvGo([el],0,0);continue}
      gsap.to(el,{opacity:1,y:0,yPercent:0,scale:1,duration:.55,ease:"power2.out",overwrite:"auto",clearProps:"transform,opacity"})}}
    finally{busy=false}}
  var t=0;function soon(){clearTimeout(t);t=setTimeout(sweep,60)}
  addEventListener("scroll",soon,{passive:true});addEventListener("resize",soon);setInterval(sweep,400);
  addEventListener("load",function(){setTimeout(sweep,400);setTimeout(sweep,2500)});
})();

/* pillars below the fold on phones: the hero's own entrance would play them unseen, so they reveal as they scroll in instead
   (hidden only by script, and the failsafe above shows them anyway if the trigger never fires) */
(function(){if(RM)return;var n=0;(function wait(){if(++n>900)return;var ls=document.querySelectorAll("#hero .pil li"),pre=document.getElementById("pre");
  if(!ls.length||!window.ScrollTrigger||(pre&&pre.getBoundingClientRect().bottom>innerHeight*.35)){setTimeout(wait,60);return}
  Array.prototype.forEach.call(ls,function(li){if(li.getBoundingClientRect().top<innerHeight)return;li.removeAttribute("data-r");gsap.killTweensOf(li);gsap.set(li,{opacity:0,y:24,overwrite:true});
    ScrollTrigger.create({trigger:li,start:"top 94%",once:true,onEnter:function(){gsap.to(li,{opacity:1,y:0,duration:.8,ease:"power3.out",clearProps:"transform,opacity"})}})})})()})();
/* v12 (client: the hero broke into "Engineering the / future / of / hydrogel therapeutics." in Safari, where SplitText measured the
   lines): the hero's lines are written in the markup (.hm mask > .hl line); the template's hero entrance asks SplitText for lines,
   so hand it those fixed lines instead of measuring. Only #pageTitle with .hl lines is affected. */
(function(){var S=window.SplitText;if(!S||S.__lmxHero)return;S.__lmxHero=1;var c=S.create;
  S.create=function(t,o){var el=typeof t==="string"?document.querySelector(t):t;
    if(el&&el.id==="pageTitle"&&el.querySelector&&el.querySelector(".hl")){
      var hl=[].slice.call(el.querySelectorAll(".hl")).filter(function(e){return e.offsetParent!==null});
      if(hl.length)return {lines:hl,masks:[].slice.call(el.querySelectorAll(".hm")),revert:function(){}}}
    return c.apply(this,arguments)}})();
