var SITE="Insera Therapeutics";
var PK="ins";
/* loader: the INSERA THERAPEUTICS wordmark rises as one whole line (no per-letter motion: extra.css pins the template's split chars),
   the italic tagline fades in beneath it, and both fade out together when the template starts its exit. */
(function(){var pre=document.getElementById("pre");if(!pre)return;var pc=pre.querySelector(".pc");if(!pc)return;
  var started=false;
  function go(){if(started||!window.gsap)return;started=true;
    var ln=pre.querySelector(".wm span"),ds=pre.querySelector(".wm b"),wm=pre.querySelector(".wm");if(!ln||!ds)return;
    gsap.fromTo(ln,{opacity:0,y:14},{opacity:1,y:0,duration:.75,ease:"power2.out",delay:.12});
    gsap.fromTo(ds,{opacity:0,y:6},{opacity:1,y:0,duration:.6,ease:"power2.out",delay:.5});
    var out=false,mo2=new MutationObserver(function(){if(out)return;var c=wm.querySelector(".c");if(!c)return;
      if(gsap.getProperty(c,"yPercent")<-5){out=true;mo2.disconnect();gsap.killTweensOf([ln,ds]);gsap.to([ln,ds],{opacity:0,duration:.3,ease:"power2.in"})}});
    mo2.observe(wm,{subtree:true,attributes:true,attributeFilter:["style"]});}
  if(pc.style.visibility==="visible")go();
  else{var mo=new MutationObserver(function(){if(pc.style.visibility==="visible"){mo.disconnect();go()}});mo.observe(pc,{attributes:true,attributeFilter:["style"]})}
})();
