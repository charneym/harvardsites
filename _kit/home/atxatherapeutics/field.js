/* ================= HERO FIELD: a crafted render of ATXA's real target (HOME_BRIEF update 2c, PRINCIPLES DQ). The
   thromboxane A2 receptor (TP), the G-protein-coupled receptor that NTP42 antagonises: seven transmembrane helices in cartoon
   ribbon form with their loops and helix 8, set in a lipid bilayer that fades out radially, a small-molecule ligand in the
   pocket (atxatherapeutics.com/our-pipeline; the Feb 2026 Nature Communications TP structure paper). Rendered offline by
   _kit/home/atxatherapeutics/render.py (sphere-swept z-buffer, glossy shading in the logo blues, screen-space occlusion),
   baked with real alpha to hero.webp so the page ink is its only ground (DJ/DP). Placed whole in the open area right of the
   measured headline (>=140px clear), below the nav; a slow breath and drift and a faint blue glow. It moves on its own, so
   no pointer response (CZ). Phones: a top band, fading into the ink. ====== */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var INK="#060a26";
  /* the subject's box inside the 1100x1200 render (alpha > .3) */
  var BX0=.06,BX1=.94,BY0=.10,BY1=.90;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?h*.42:h;
    var tr=0;try{var hh=document.getElementById("pageTitle"),ft=document.querySelector(".hero-foot .s");
      if(hh){var rg=document.createRange();rg.selectNodeContents(hh);tr=Math.max(tr,rg.getBoundingClientRect().right)}
      if(ft){var rg2=document.createRange();rg2.selectNodeContents(ft);tr=Math.max(tr,rg2.getBoundingClientRect().right)}}catch(e){}
    if(!tr||tr>w*.7)tr=side+cw*.5;
    var L=tr+140,R=w-side,ox=(L+R)/2,ow=R-L;
    return {mob:mob,side:side,cw:cw,U:U,bh:U,ox:ox,ow:ow,L:L};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function place(t,e){
    var iw=img.naturalWidth,ih=img.naturalHeight,bw=(BX1-BX0)*iw,bhh=(BY1-BY0)*ih,k=.5-.5*Math.cos(t*Math.PI*2/46),sc,bcx,bcy;
    if(!G.mob){var top=118,bot=40;sc=Math.min(G.ow*.96/bw,(h-top-bot)/bhh,1);
      bcx=Math.min(G.ox,w*.72);if(bcx-bw*sc/2<G.L)bcx=G.L+bw*sc/2;bcy=top+(h-top-bot)/2}
    else{var t2=96,b2=40;sc=Math.min(w*.84/bw,(G.bh-t2-b2)/bhh);bcx=w*.5;bcy=t2+(G.bh-t2-b2)/2}
    sc*=(1+.025*k)*(1+.04*(1-e));
    var dw=iw*sc,dh=ih*sc;
    return {k:k,dw:dw,dh:dh,x:bcx-(BX0+BX1)/2*dw,y:bcy-(BY0+BY1)/2*dh,cx:bcx,cy:bcy};
  }
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;if(now-(G.at||0)>1500){G=geo();G.at=now}dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=INK;c.fillRect(0,0,w,h);
    if(ok){
      var P=place(t,e),dw=P.dw,dh=P.dh,k=P.k,x=P.x-k*dw*.006,y=P.y+k*dh*.006-SP.v*h*.04;
      /* a low blue glow, painted across the whole canvas (never only inside the image rect), so no edge can read (DJ) */
      var R=Math.max(dw,dh)*.8,gl=c.createRadialGradient(P.cx,P.cy,0,P.cx,P.cy,R);
      gl.addColorStop(0,"rgba(40,46,200,"+(.16*e).toFixed(3)+")");gl.addColorStop(.5,"rgba(24,28,130,"+(.07*e).toFixed(3)+")");gl.addColorStop(1,"rgba(6,10,38,0)");
      c.fillStyle=gl;c.fillRect(0,0,w,G.mob?G.bh:h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      /* a slow, faint light passing down the helix bundle */
      var ph=(t%14)/14,py=y+dh*(.2+.6*ph),px=x+dw*.5,pr=dw*.24,pa=Math.sin(ph*Math.PI)*.08*e;
      var pg=c.createRadialGradient(px,py,0,px,py,pr);pg.addColorStop(0,"rgba(150,165,255,"+pa.toFixed(3)+")");pg.addColorStop(1,"rgba(150,165,255,0)");
      c.globalCompositeOperation="screen";c.fillStyle=pg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalCompositeOperation="source-over";
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,Math.max(G.side+G.cw*.5,G.L),0);lv.addColorStop(0,"rgba(3,6,24,.8)");lv.addColorStop(.6,"rgba(3,6,24,.35)");lv.addColorStop(1,"rgba(3,6,24,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.6,0,h);bv.addColorStop(0,"rgba(6,10,38,0)");bv.addColorStop(1,"rgba(6,10,38,.75)");c.fillStyle=bv;c.fillRect(0,h*.6,w,h*.4+1);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.45,0,G.bh);mv.addColorStop(0,"rgba(6,10,38,0)");mv.addColorStop(.55,"rgba(6,10,38,.6)");mv.addColorStop(1,"rgba(6,10,38,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.45,w,G.bh*.55+1);
        c.fillStyle=INK;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},
    focus:function(){if(!G||!ok)return [w/2,h/2];var P=place(0,1);return [P.cx,P.cy]}};
})();
