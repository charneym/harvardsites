var SITE="Atomising Systems";
var PK="asl";
/* loader (WAVE_BRIEF LOADER): the lockup (mark + three-line wordmark) arrives and leaves as one unit, never letter by letter */
(function(){var pre=document.getElementById("pre");if(!pre)return;var pc=pre.querySelector(".pc"),lk=pre.querySelector(".alock");if(!pc||!lk)return;
  var started=false;
  function go(){if(started||!window.gsap)return;started=true;
    gsap.fromTo(lk,{opacity:0,y:14},{opacity:1,y:0,duration:.6,ease:"power2.out",delay:.05});
    var cnt=pre.querySelector(".cnt");if(!cnt)return;
    var mo2=new MutationObserver(function(){if(parseFloat(cnt.style.opacity)<.95){mo2.disconnect();gsap.to(lk,{opacity:0,duration:.3,ease:"power2.in"});
      /* start the headline's rise while the loader panel is still lifting, so it is already moving when uncovered */
      setTimeout(function(){if(window._heroIn)window._heroIn.play()},260)}});
    mo2.observe(cnt,{attributes:true,attributeFilter:["style"]});}
  if(pc.style.visibility==="visible")go();
  else{var mo=new MutationObserver(function(){if(pc.style.visibility==="visible"){mo.disconnect();go()}});mo.observe(pc,{attributes:true,attributeFilter:["style"]})}
})();
/* DW: content is never left hidden. Any block a reveal parked at opacity 0 is shown as soon as it is in, or above, the
   viewport, whether or not its ScrollTrigger fired. Inactive story steps are left alone. */
(function(){var busy=false;
  function sweep(){if(busy||!window.gsap)return;busy=true;try{var H=innerHeight;
    var list=document.querySelectorAll('#view [style*="opacity"], .ftr [style*="opacity"]');
    for(var i=0;i<list.length;i++){var el=list[i];if(el.closest(".step,.scene,.rail")||el.classList.contains("w"))continue;
      var o=parseFloat(el.style.opacity);if(!(o<.2))continue;if(gsap.isTweening(el))continue;
      var r=el.getBoundingClientRect();if(r.top>=H-2||(!r.width&&!r.height))continue;
      gsap.to(el,{opacity:1,y:0,yPercent:0,scale:1,duration:.55,ease:"power2.out",overwrite:"auto",clearProps:"transform,opacity"})}}
    finally{busy=false}}
  var t=0;function soon(){clearTimeout(t);t=setTimeout(sweep,60)}
  addEventListener("scroll",soon,{passive:true});addEventListener("resize",soon);setInterval(sweep,400);
  addEventListener("load",function(){setTimeout(sweep,400);setTimeout(sweep,2500)});
})();
