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
   a font settled). Story steps that are inactive by design, and the vision statement's word-by-word colouring, are left alone. */
(function(){var busy=false;
  function sweep(){if(busy||!window.gsap)return;busy=true;try{var H=innerHeight;
    var list=document.querySelectorAll('#view [style*="opacity"], .ftr [style*="opacity"]');
    for(var i=0;i<list.length;i++){var el=list[i];if(el.closest(".step,.scene,.rail,.hx .hrule")||el.classList.contains("w"))continue;
      var o=parseFloat(el.style.opacity);if(!(o<.2))continue;if(gsap.isTweening(el))continue;
      var r=el.getBoundingClientRect();if(r.top>=H-2||(!r.width&&!r.height))continue;
      if(typeof rvGo==="function"&&window.RV_LIVE&&RV_LIVE.indexOf(el)>=0&&!el._rvDone){rvGo([el],0,0);continue}
      gsap.to(el,{opacity:1,y:0,yPercent:0,scale:1,duration:.55,ease:"power2.out",overwrite:"auto",clearProps:"transform,opacity"})}}
    finally{busy=false}}
  var t=0;function soon(){clearTimeout(t);t=setTimeout(sweep,60)}
  addEventListener("scroll",soon,{passive:true});addEventListener("resize",soon);setInterval(sweep,400);
  addEventListener("load",function(){setTimeout(sweep,400);setTimeout(sweep,2500)});
})();
