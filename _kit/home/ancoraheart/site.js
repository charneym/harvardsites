var SITE="Ancora Heart";
var PK="anc";
/* loader: the Ancora heart-and-anchor mark rises from its own clipped row in the same rhythm as the ANCORA letters, landing just before them, so the
   lockup arrives as one piece; it leaves with them. Starts when the template makes the loader's lockup visible. */
(function(){var pre=document.getElementById("pre");if(!pre)return;var pc=pre.querySelector(".pc"),mk=pre.querySelector(".lmw .lm");if(!pc||!mk)return;
  var started=false;
  function go(){if(started||!window.gsap)return;started=true;
    var ds=pre.querySelector(".wm b");if(ds){gsap.set(ds,{opacity:0,y:6});gsap.to(ds,{opacity:1,y:0,duration:.6,ease:"power2.out",delay:.55})}
    gsap.set(mk,{y:0,yPercent:112});requestAnimationFrame(function(){var ez=(window.CustomEase&&CustomEase.get&&CustomEase.get("silk"))?"silk":"expo.out";gsap.to(mk,{yPercent:0,duration:.8,ease:ez,delay:.04})});
    var wm=pre.querySelector(".wm");if(!wm)return;
    /* leave with the letters: when they start moving up and out, the mark follows */
    var mo2=new MutationObserver(function(){var c=wm.querySelector(".c");if(!c)return;var tr=gsap.getProperty(c,"yPercent");
      if(tr<-5){mo2.disconnect();gsap.to(mk,{yPercent:-112,duration:.38,ease:"power3.in"});var ds2=pre.querySelector(".wm b");if(ds2)gsap.to(ds2,{opacity:0,y:-6,duration:.22,ease:"power2.in"})}});
    mo2.observe(wm,{subtree:true,attributes:true,attributeFilter:["style"]});}
  if(pc.style.visibility==="visible")go();
  else{var mo=new MutationObserver(function(){if(pc.style.visibility==="visible"){mo.disconnect();go()}});mo.observe(pc,{attributes:true,attributeFilter:["style"]})}
})();
