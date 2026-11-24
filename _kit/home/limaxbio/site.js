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

/* the three pillars sit in the hero, which the template's scroll reveal skips: they rise in on their own, as each enters the
   viewport, once the loader has slid away (on phones the third is below the fold) */
(function(){if(RM)return;var n=0;(function wait(){if(++n>400)return;var pre=document.getElementById("pre");var ls=document.querySelectorAll("#hero .pil li");
  if((pre&&pre.getBoundingClientRect().bottom>innerHeight*.35)||!ls.length||!window.ScrollTrigger){setTimeout(wait,100);return}
  Array.prototype.forEach.call(ls,function(li,i){gsap.set(li,{opacity:0,y:26});li.style.removeProperty("transform");gsap.set(li,{y:26});
    ScrollTrigger.create({trigger:li,start:"top 94%",once:true,onEnter:function(){gsap.to(li,{opacity:1,y:0,duration:.9,ease:"power3.out",delay:li.getBoundingClientRect().top<innerHeight?.35+i*.08:0,clearProps:"transform"})}})})})()})();
