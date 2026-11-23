var SITE="Rhapsogen";
var PK="rhg";
/* loader: the real Rhapsogen logo (their SVG, solid at full brand colour) rises from its own clipped row just before the
   tagline letters, and leaves with them. Starts when the template makes the loader's lockup visible. */
(function(){var pre=document.getElementById("pre");if(!pre)return;var pc=pre.querySelector(".pc"),mk=pre.querySelector(".rlw .rlogo");if(!pc||!mk)return;
  var started=false;
  function go(){if(started||!window.gsap)return;started=true;
    gsap.set(mk,{y:0,yPercent:115});requestAnimationFrame(function(){var ez=(window.CustomEase&&CustomEase.get&&CustomEase.get("silk"))?"silk":"expo.out";gsap.to(mk,{yPercent:0,duration:.8,ease:ez,delay:.02})});
    var wm=pre.querySelector(".wm");if(!wm)return;
    var mo2=new MutationObserver(function(){var c=wm.querySelector(".c");if(!c)return;var tr=gsap.getProperty(c,"yPercent");
      if(tr<-5){mo2.disconnect();gsap.to(mk,{yPercent:-115,duration:.38,ease:"power3.in"})}});
    mo2.observe(wm,{subtree:true,attributes:true,attributeFilter:["style"]});}
  if(pc.style.visibility==="visible")go();
  else{var mo=new MutationObserver(function(){if(pc.style.visibility==="visible"){mo.disconnect();go()}});mo.observe(pc,{attributes:true,attributeFilter:["style"]})}
})();
