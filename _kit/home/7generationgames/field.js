/* ================= HERO FIELD (HOME_BRIEF update 2b): a real photograph of the company's home ground, a lone canoeist
   on Ely Lake, Minnesota, at dusk (Pexels 2422463, https://www.pexels.com/photo/photo-of-person-riding-kayak-2422463/,
   Pexels licence). 7 Generation Games is based in Minneapolis and its games are set on northern lakes (Spirit Lake,
   Fish Lake, Forgotten Trail). Drawn full-bleed so no box edge exists (DP/DJ); the canoe sits in the open area right of
   the text (DO), the headline side is held in a deep ink scrim (DI). Motion: a very slow Ken Burns drift, no pointer
   response (CZ). On phones the photo fills the top band above the text and fades into the ink (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#08121a",AR=1.5,CX=.505,CY=.56; /* the canoe's position in the photograph */
  img.decoding="async";img.onload=function(){ok=true;AR=img.naturalWidth/img.naturalHeight;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var bh=mob?Math.round(h*.4):h;
    var kx=mob?w*.5:side+cw*.70,ky=mob?Math.max(150,bh*.54):h*.6;
    /* the photo covers the band around the canoe point, with room for the drift */
    var iw=Math.max(kx/CX,(w-kx)/(1-CX),AR*ky/CY,AR*(bh-ky)/(1-CY))*1.05;
    if(!mob)iw=Math.max(iw,w*1.12);else iw*=1.45;
    return {mob:mob,side:side,cw:cw,kx:kx,ky:ky,iw:iw,ih:iw/AR,bh:bh};
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
      /* Ken Burns: grow ~2.5% about the canoe and drift a touch over ~46s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=(1+.025*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*CX-k*G.iw*.006,y=G.ky-dh*CY-(G.mob?0:SP.v*G.ih*.04);
      c.globalAlpha=e;
      if(G.mob){c.save();c.beginPath();c.rect(0,0,w,G.bh);c.clip();c.drawImage(img,x,y,dw,dh);c.restore()}
      else c.drawImage(img,x,y,dw,dh);
      c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays deep and quiet (DI): a long eased ink wash from the left, a soft top for the nav, a long fade at the base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.66,0);[[0,.93],[.3,.88],[.48,.74],[.62,.52],[.74,.3],[.85,.12],[.94,.03],[1,0]].forEach(function(q){lv.addColorStop(q[0],"rgba(8,18,26,"+q[1]+")")});c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.42);[[0,.62],[.25,.4],[.5,.2],[.75,.07],[1,0]].forEach(function(q){tv.addColorStop(q[0],"rgba(8,18,26,"+q[1]+")")});c.fillStyle=tv;c.fillRect(0,0,w,h*.42);
        var bv=c.createLinearGradient(0,h*.6,0,h);[[0,0],[.25,.05],[.5,.2],[.75,.5],[1,.9]].forEach(function(q){bv.addColorStop(q[0],"rgba(8,18,26,"+q[1]+")")});c.fillStyle=bv;c.fillRect(0,h*.6,w,h*.4+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.36);[[0,.5],[.3,.24],[.6,.06],[1,0]].forEach(function(q){tv2.addColorStop(q[0],"rgba(8,18,26,"+q[1]+")")});c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.36);
        var mv=c.createLinearGradient(0,G.bh*.7,0,G.bh);[[0,0],[.2,.06],[.4,.2],[.6,.45],[.8,.75],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(8,18,26,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,G.bh*.7,w,G.bh*.3+1);
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
