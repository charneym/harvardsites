var SITE="UltraMEND";
var PK="ulm";
/* loader (DR, coordinator review): the UM mark and the UltraMEND wordmark arrive and leave as ONE whole unit, a fade with a small rise;
   no clipping mask over the glyphs and no per-letter motion (the template's split chars are pinned in place by extra.css). The lockup
   fades in when the template makes it visible, and fades out whole as soon as the template starts its exit (chars begin moving). */
(function(){var pre=document.getElementById("pre");if(!pre)return;var pc=pre.querySelector(".pc"),lk=pre.querySelector(".plk");if(!pc||!lk)return;
  lk.style.opacity="0";var started=false;
  function go(){if(started||!window.gsap)return;started=true;
    gsap.fromTo(lk,{opacity:0,y:14},{opacity:1,y:0,duration:.7,ease:"power2.out",delay:.05});
    var wm=pre.querySelector(".wm");if(!wm)return;
    var mo2=new MutationObserver(function(){var c=wm.querySelector(".c");if(!c)return;if(gsap.getProperty(c,"yPercent")<-2){mo2.disconnect();gsap.killTweensOf(lk);gsap.to(lk,{opacity:0,y:-10,duration:.3,ease:"power2.in"})}});
    mo2.observe(wm,{subtree:true,attributes:true,attributeFilter:["style"]});}
  if(pc.style.visibility==="visible")go();
  else{var mo=new MutationObserver(function(){if(pc.style.visibility==="visible"){mo.disconnect();go()}});mo.observe(pc,{attributes:true,attributeFilter:["style"]})}
})();
