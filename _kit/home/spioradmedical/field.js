/* ================= HERO FIELD: a crafted render (HOME_BRIEF update 2026-11-20, option c) of the subject Spiorad works on: a
   large-bore introducer sheath passing through the wall of the common femoral artery, the artery cut open at the near end so its
   wall layers and lumen show (render.py: signed-distance ray marching with soft shadows, ambient occlusion, wet-tissue specular,
   supersampled). It does not depict Spiorad's own device. The render's ground is the page ink exactly and every edge eases into
   it, so there is no box edge (DJ/DP). Placed in the open area right of the measured headline and lede (DI/DO), at most at native
   size; a slow drift, no pointer response (CZ). On phones it sits in the top band below the nav and fades into the ink. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.45,w*1.0):h;
    var tr=0;try{var hh=document.getElementById("pageTitle"),ft=document.querySelector(".hero-foot .s");
      if(hh){var rg=document.createRange();rg.selectNodeContents(hh);tr=Math.max(tr,rg.getBoundingClientRect().right)}
      if(ft){var rg2=document.createRange();rg2.selectNodeContents(ft);tr=Math.max(tr,rg2.getBoundingClientRect().right)}}catch(e){}
    if(!tr||tr>w*.7)tr=side+cw*.5;
    var L=tr+120,R=w-side,ox=(L+R)/2,ow=R-L;
    return {mob:mob,side:side,cw:cw,U:U,bh:mob?U:h,ox:ox,ow:ow};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;if(now-(G.at||0)>1500){G=geo();G.at=now}dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#07120f";c.fillRect(0,0,w,h);
    if(ok){
      var iw=img.naturalWidth,ih=img.naturalHeight,k=.5-.5*Math.cos(t*Math.PI*2/50),cx,cy,sc;
      /* the subject (open artery end to the faded sheath top) spans x .22-.74 and y .04-.76 of the render; its centre is (.48,.40) */
      if(!G.mob){sc=Math.min(G.ow/(.52*iw),(h-200)/(.72*ih),1);cx=G.ox;cy=96+(h-96)*.5}
      else{sc=Math.min(w*.92/(.52*iw),(G.bh-80)/(.72*ih),1);cx=w*.5;cy=66+(G.bh-66)*.5}
      sc*=(1+.025*k)*(1+.05*(1-e));
      var dw=iw*sc,dh=ih*sc,x=cx-dw*.48-k*dw*.008,y=cy-dh*.40+k*dh*.006-SP.v*h*.04;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      var rw=Math.max(80,w*.08),rv=c.createLinearGradient(w-rw,0,w,0);rv.addColorStop(0,"rgba(7,18,15,0)");rv.addColorStop(1,"rgba(7,18,15,1)");c.fillStyle=rv;c.fillRect(w-rw,0,rw+1,h);
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,Math.max(G.side+G.cw*.5,G.ox-G.ow*.5),0);lv.addColorStop(0,"rgba(7,18,15,.6)");lv.addColorStop(.6,"rgba(7,18,15,.28)");lv.addColorStop(1,"rgba(7,18,15,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.55,0,h);bv.addColorStop(0,"rgba(7,18,15,0)");bv.addColorStop(1,"rgba(7,18,15,.7)");c.fillStyle=bv;c.fillRect(0,h*.55,w,h*.45);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.45,0,G.bh);mv.addColorStop(0,"rgba(7,18,15,0)");mv.addColorStop(1,"rgba(7,18,15,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.45,w,G.bh*.55+1);
        c.fillStyle="#07120f";c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.mob?w/2:G.ox,G.mob?66+(G.bh-66)*.5:96+(h-96)*.5]:[w/2,h/2]}};
})();
