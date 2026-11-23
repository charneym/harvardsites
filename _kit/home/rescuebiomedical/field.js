/* ================= HERO FIELD: Rescue Biomedical's own 3D rendering of the A2D2 wearable (HOME_BRIEF update 2026-11-20,
   option a: the firm's own imagery), keyed off its white ground and composited at native size on the page ink with a soft
   studio light behind it (render.py). The image ground is the page ink exactly and every edge eases into it, so there is no
   box edge (DJ/DP). One calm object (DS), placed in the open area right of the measured headline and lede (DI/DO), never
   upscaled; a slow float, no pointer response (CZ). On phones it sits in the top band below the nav. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.46,w*1.0):h;
    /* DP/DO: the molecule lives in the open area right of the measured headline and lede, at least 120px clear of them */
    var tr=0;try{["pageTitle",null].forEach(function(id){var el=id?document.getElementById(id):document.querySelector(".hero-foot .s");if(!el)return;
      var tw=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),n,rg=document.createRange();while((n=tw.nextNode())){if(!n.textContent.trim())continue;rg.selectNodeContents(n);
      var rr=rg.getClientRects();for(var i=0;i<rr.length;i++)if(rr[i].width>0)tr=Math.max(tr,rr[i].right)}})}catch(e){}
    if(!tr||tr>w*.7)tr=side+cw*.5;
    var L=tr+120,R=w-side,ox=(L+R)/2,ow=R-L;
    return {mob:mob,side:side,cw:cw,U:U,bh:mob?U*1.06:h,ox:ox,ow:ow};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;if(now-(G.at||0)>1500){G=geo();G.at=now}dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#121519";c.fillRect(0,0,w,h);
    if(ok){
      var iw=img.naturalWidth,ih=img.naturalHeight,k=.5-.5*Math.cos(t*Math.PI*2/7.5),cx,cy,sc;
      /* the product spans x .162-.856 and y .132-.864 of the canvas (the 1098px rendering inside 1240x1240); its centre is (.509,.498) */
      if(!G.mob){sc=Math.min(G.ow/(.72*iw),(h-310)/(.74*ih),1);cx=G.ox-(.509-.5)*iw*sc;cy=96+(h-96)*.47}
      else{sc=Math.min(w*.74/(.70*iw),(G.bh-150)/(.74*ih),1);cx=w*.5-(.509-.5)*iw*sc;cy=118+(G.bh-118)*.48}
      sc*=(1+.012*k)*(1+.04*(1-e));
      var dw=iw*sc,dh=ih*sc,x=cx-dw*.5,y=cy-dh*.498-SP.v*h*.04-6*k;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      /* the right edge of the viewport always closes into the ink, so nothing steps at the scrollbar gutter (DJ) */
      var rw=Math.max(80,w*.08),rv=c.createLinearGradient(w-rw,0,w,0);rv.addColorStop(0,"rgba(18,21,25,0)");rv.addColorStop(1,"rgba(18,21,25,1)");c.fillStyle=rv;c.fillRect(w-rw,0,rw+1,h);
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,Math.max(G.side+G.cw*.5,G.ox-G.ow*.5),0);lv.addColorStop(0,"rgba(18,21,25,.6)");lv.addColorStop(.6,"rgba(18,21,25,.28)");lv.addColorStop(1,"rgba(18,21,25,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.6,0,h);bv.addColorStop(0,"rgba(18,21,25,0)");bv.addColorStop(1,"rgba(18,21,25,.7)");c.fillStyle=bv;c.fillRect(0,h*.6,w,h*.4);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.5,0,G.bh);mv.addColorStop(0,"rgba(18,21,25,0)");mv.addColorStop(1,"rgba(18,21,25,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.5,w,G.bh*.5+1);
        c.fillStyle="#121519";c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.mob?w/2:G.ox,G.mob?62+(G.bh-62)*.5:86+(h-86)*.5]:[w/2,h/2]}};
})();
