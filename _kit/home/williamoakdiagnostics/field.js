/* ================= HERO FIELD: William Oak's own product render (HOME_BRIEF update 2a/c): their point-of-care micronutrient
   test with integrated blood collection, from williamoakdiagnostics.com. render.py divides out the studio backdrop so it equals
   the page ink #eeedeb exactly, keeping the device's own shading, and feathers every edge into the ink (DJ/DP). Placed whole in the
   open area right of the measured headline and lede, at least 110px clear of them, never above native size (DO/DP). It breathes in a
   slow Ken Burns drift and does not follow the pointer (CZ). On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#eeedeb";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    if(w>=1800)side=Math.max(side,(w-1560)/2),cw=w-2*side;
    var eb=mob&&document.querySelector(".hero .eyebrow"),ebt=eb?eb.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var U=mob?Math.max(250,Math.min(ebt-14,h*.48)):h;
    /* the device occupies x .095-.92 and y .10-.87 of the render; its centre is (.507,.485) */
    var iw,ih,kx,ky;
    if(!mob){
      var tr=0;try{var hh=document.getElementById("pageTitle"),ft=document.querySelector(".hero-foot .s");
        [hh,ft].forEach(function(el){if(!el)return;var rg=document.createRange();rg.selectNodeContents(el);tr=Math.max(tr,rg.getBoundingClientRect().right)})}catch(e){}
      if(!tr||tr>w*.66)tr=side+cw*.48;
      var L=tr+110,R=w-side-10;
      iw=Math.min((R-L)/.825,(h-86-90)/.77*1.5006,1415);ih=iw/1.5006;
      kx=(L+R)/2+(.5-.507)*iw;ky=86+(h-86)*.5+(.5-.485)*ih;
    }else{
      iw=Math.min(w*.94/.825,(U-64)/.8*1.5006,1415);ih=iw/1.5006;kx=w*.5+(.5-.507)*iw;ky=60+(U-60)*.5+(.5-.485)*ih;
    }
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;if(!G.mob&&now-(G.at||0)>1500){G=geo();G.at=now}dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.018*k)*(1+.035*(1-e)),rt=0;
      var dw=G.iw*sc,dh=G.ih*sc,cx=G.kx,cy=G.ky-k*G.ih*.01-SP.v*G.ih*.05;
      c.save();c.translate(cx,cy);c.rotate(rt);c.globalAlpha=e;c.drawImage(img,-dw*.5,-dh*.5,dw,dh);c.restore();c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): a long ink wash from the left, eased out well before the reader */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.5,0);lv.addColorStop(0,"rgba(238,237,235,.9)");lv.addColorStop(.55,"rgba(238,237,235,.55)");lv.addColorStop(1,"rgba(238,237,235,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.8,0,G.bh);mv.addColorStop(0,"rgba(238,237,235,0)");mv.addColorStop(1,"rgba(238,237,235,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.8,w,G.bh*.2+1);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();
