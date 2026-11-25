var SITE="senTec Elektronik";
var PK="stc";
/* loader (WAVE_BRIEF LOADER): the whole lockup (the stacked sen/Tec ELEKTRONIK logo and the tagline) arrives as ONE
   unit with a single fade and small rise, and leaves as one unit with a single fade, when the template's exit starts fading the
   loader furniture. The template's per-letter chars are neutralised in CSS (#pre .char/.c forced in place). */
(function(){var pre=document.getElementById("pre");if(!pre)return;var pc=pre.querySelector(".pc"),lk=pre.querySelector(".dlk"),mk=pre.querySelector(".mk");if(!pc||!lk)return;
  var started=false;
  function go(){if(started||!window.gsap)return;started=true;
    gsap.fromTo(lk,{opacity:0,y:14},{opacity:1,y:0,duration:.6,ease:"power2.out",delay:.05});
    if(!mk)return;var mo2=new MutationObserver(function(){var o=parseFloat(mk.style.opacity);if(o<1){mo2.disconnect();gsap.killTweensOf(lk);gsap.to(lk,{opacity:0,duration:.3,ease:"power2.in"})}});
    mo2.observe(mk,{attributes:true,attributeFilter:["style"]});}
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
