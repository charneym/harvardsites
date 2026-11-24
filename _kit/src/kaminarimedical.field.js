/* ================= HERO FIELD: a crafted render (HOME_BRIEF update, option c; DS) of Kaminari Medical's own product, the
   distal tip of an intravascular imaging catheter: a navy polymer shaft, a platinum marker band and a clear window holding
   the drive coil, the ultrasound transducer and the optical fibre whose light makes the photoacoustic signal. Rendered once
   in three.js (PBR materials, studio environment) on real alpha, the shaft fading out along its own length, so no edge can
   read as a box (DJ/DP). Placed whole in the open area right of the text (DO) at or below native size (1133 x 722), with
   a slow drift and a soft warm light breathing at the fibre, the "flash" in Kaminari (thunder and lightning). No pointer
   response. On phones it sits in the top band above the text. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#111230",AR=1133/722,NH=722,TX=123.6/1133,TY=89.5/722;
  img.decoding="async";img.onload=function(){ok=true;AR=img.naturalWidth/img.naturalHeight;NH=img.naturalHeight;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1560:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.4,w*.95):h;
    var iw=mob?Math.min(w*.8,(U-110)*AR):Math.min(cw*.5,h*.62*AR,NH*AR),ih=iw/AR;
    var kx=mob?w*.53:side+cw*.73,ky=mob?104+ih*.5:Math.max(h*.5,140+ih*.5);
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      var k=.5-.5*Math.cos(t*Math.PI*2/36),sc=(1+.02*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5+k*G.iw*.008,y=G.ky-dh*.5-k*G.ih*.012-SP.v*G.ih*.06;
      var tx=x+dw*TX,ty=y+dh*TY;
      /* a cool navy depth across the whole canvas, centred on the subject (never inside the image rect) */
      var ggr=Math.max(w,h)*.6,ag=c.createRadialGradient(G.kx,G.mob?G.bh*.42:G.ky,0,G.kx,G.mob?G.bh*.42:G.ky,ggr);
      ag.addColorStop(0,"rgba(52,58,128,"+(.34*e).toFixed(3)+")");ag.addColorStop(.35,"rgba(36,40,96,"+(.2*e).toFixed(3)+")");ag.addColorStop(.7,"rgba(24,26,64,"+(.07*e).toFixed(3)+")");ag.addColorStop(1,"rgba(17,18,48,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      /* the flash: a warm light breathing at the fibre, now and then brighter, always soft */
      var ph=(t%7)/7,fl=RM?.3:(.22+.16*Math.sin(t*Math.PI*2/5)+.55*Math.exp(-Math.pow((ph-.12)/.03,2))),gr=dw*.16;
      var rg=c.createRadialGradient(tx,ty,0,tx,ty,gr);rg.addColorStop(0,"rgba(255,170,130,"+(.5*fl*e).toFixed(3)+")");rg.addColorStop(.18,"rgba(240,100,80,"+(.22*fl*e).toFixed(3)+")");rg.addColorStop(.5,"rgba(200,50,50,"+(.06*fl*e).toFixed(3)+")");rg.addColorStop(1,"rgba(171,11,22,0)");
      c.globalCompositeOperation="lighter";c.fillStyle=rg;c.fillRect(tx-gr,ty-gr,gr*2,gr*2);c.globalCompositeOperation="source-over";
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.5,0);lv.addColorStop(0,"rgba(13,14,38,.86)");lv.addColorStop(.6,"rgba(13,14,38,.4)");lv.addColorStop(1,"rgba(13,14,38,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.5);[[0,.5],[.2,.32],[.4,.17],[.6,.07],[.8,.02],[1,0]].forEach(function(q){tv.addColorStop(q[0],"rgba(13,14,38,"+q[1]+")")});c.fillStyle=tv;c.fillRect(0,0,w,h*.5);
        var bv=c.createLinearGradient(0,h*.5,0,h);[[0,0],[.2,.02],[.4,.08],[.6,.2],[.8,.42],[1,.8]].forEach(function(q){bv.addColorStop(q[0],"rgba(17,18,48,"+q[1]+")")});c.fillStyle=bv;c.fillRect(0,h*.5,w,h*.5+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.4);[[0,.4],[.25,.12],[.5,.03],[.75,.01],[1,0]].forEach(function(q){tv2.addColorStop(q[0],"rgba(13,14,38,"+q[1]+")")});c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.4);
        var mv=c.createLinearGradient(0,G.bh*.7,0,G.bh);[[0,0],[.25,.06],[.5,.25],[.75,.6],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(17,18,48,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,G.bh*.7,w,G.bh*.3+1);
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
