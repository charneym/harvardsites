var SITE="Insera Therapeutics";
var PK="ins";
/* loader: the INSERA THERAPEUTICS wordmark rises letter by letter (template SplitText); the italic tagline, as on their logo,
   fades in beneath it and leaves just before the letters do. */
(function(){var pre=document.getElementById("pre");if(!pre)return;var pc=pre.querySelector(".pc");if(!pc)return;
  var started=false;
  function go(){if(started||!window.gsap)return;started=true;
    var ds=pre.querySelector(".wm b");if(!ds)return;gsap.set(ds,{opacity:0,y:6});gsap.to(ds,{opacity:1,y:0,duration:.6,ease:"power2.out",delay:.6});
    var wm=pre.querySelector(".wm");
    var mo2=new MutationObserver(function(){var c=wm.querySelector(".c");if(!c)return;var tr=gsap.getProperty(c,"yPercent");
      if(tr<-5){mo2.disconnect();gsap.to(ds,{opacity:0,y:-6,duration:.22,ease:"power2.in"})}});
    mo2.observe(wm,{subtree:true,attributes:true,attributeFilter:["style"]});}
  if(pc.style.visibility==="visible")go();
  else{var mo=new MutationObserver(function(){if(pc.style.visibility==="visible"){mo.disconnect();go()}});mo.observe(pc,{attributes:true,attributeFilter:["style"]})}
})();
