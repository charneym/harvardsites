/* ================= HERO FIELD (HOME_BRIEF update 2a): the firm's own photograph of its GAMMA Portable Radar
   Interferometer set up on the moraine below the Matterhorn (from GAMMA's GPRI brochure, gamma-rs.ch), graded to the
   site's night ink. The photo is masked with long eased fades on every edge inside the viewport, so no box edge exists
   (DP/DJ); the instrument and the peak sit whole in the open area right of the text (DO), the headline side is held in a
   deep ink scrim (DI). Motion: a very slow Ken Burns drift, no pointer response (CZ). On phones the photo fills the top
   band above the text and fades into the ink (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false,M=null;
  var BG="#0a1119",AR=1.5726,CX=.60,CY=.50; /* the radar's centre in the photograph */
  var AL=.32,AR2=.885; /* antenna tips, left and right, as fractions of the photo width */
  img.decoding="async";img.onload=function(){ok=true;AR=img.naturalWidth/img.naturalHeight;mask();G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* the photo with long eased fades on all four edges, baked once into an offscreen canvas at native size */
  function mask(){
    var W=img.naturalWidth,H=img.naturalHeight;M=document.createElement("canvas");M.width=W;M.height=H;var m=M.getContext("2d");
    m.drawImage(img,0,0);m.globalCompositeOperation="destination-in";
    var gx=m.createLinearGradient(0,0,W,0);[[0,0],[.06,.04],[.14,.25],[.22,.6],[.3,.9],[.36,1],[.89,1],[.93,.78],[.96,.36],[.985,.06],[1,0]].forEach(function(q){gx.addColorStop(q[0],"rgba(0,0,0,"+q[1]+")")});
    m.fillStyle=gx;m.fillRect(0,0,W,H);
    var gy=m.createLinearGradient(0,0,0,H);[[0,0],[.04,.3],[.1,.85],[.14,1],[.8,1],[.86,.82],[.92,.45],[.97,.12],[1,0]].forEach(function(q){gy.addColorStop(q[0],"rgba(0,0,0,"+q[1]+")")});
    m.fillStyle=gy;m.fillRect(0,0,W,H);
  }
  function geo(){
    var big=w>=1800,side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(big?1560:1320))/2),cw=w-2*side,mob=w<861;
    var bh=mob?Math.round(h*.5):h,kx,ky,iw;
    if(!mob){
      kx=side+cw*.72;
      /* the masked photo ends inside the viewport, the photo is never shown above native size */
      iw=Math.min((w-16-kx)/(1-CX),img.naturalWidth,h*1.3,w*.98);
      ky=Math.max(h*.56,110+iw/AR*(CY-.08));
    }else{
      /* the peak (y .12) sits below the nav, the radar's foot (y .88) above the headline band */
      var top=92,bh=Math.round(h*.46+4),bot=bh-70;
      iw=Math.min(w*.94/(AR2-AL),(bot-top)/.76*AR,img.naturalWidth);
      kx=w*.5+(CX-(AL+AR2)/2)*iw;
      ky=top+iw/AR*(CY-.12);
    }
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
    if(ok&&M){
      /* Ken Burns: grow ~2.5% about the radar and drift a touch over ~48s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/48),sc=(1+.025*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*CX-k*G.iw*.005,y=G.ky-dh*CY-(G.mob?0:SP.v*G.ih*.04);
      c.globalAlpha=e;c.imageSmoothingQuality="high";
      if(G.mob){c.save();c.beginPath();c.rect(0,0,w,G.bh);c.clip();c.drawImage(M,x,y,dw,dh);c.restore()}
      else c.drawImage(M,x,y,dw,dh);
      c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays deep and quiet (DI): a long eased ink wash from the left, a soft top for the nav, a long fade at the base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.62,0);[[0,.96],[.3,.92],[.5,.8],[.64,.56],[.76,.3],[.86,.12],[.95,.03],[1,0]].forEach(function(q){lv.addColorStop(q[0],"rgba(10,17,25,"+q[1]+")")});c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.3);[[0,.6],[.3,.34],[.6,.12],[1,0]].forEach(function(q){tv.addColorStop(q[0],"rgba(10,17,25,"+q[1]+")")});c.fillStyle=tv;c.fillRect(0,0,w,h*.3);
        var bv=c.createLinearGradient(0,h*.62,0,h);[[0,0],[.25,.06],[.5,.22],[.75,.52],[1,.9]].forEach(function(q){bv.addColorStop(q[0],"rgba(10,17,25,"+q[1]+")")});c.fillStyle=bv;c.fillRect(0,h*.62,w,h*.38+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,72);[[0,.5],[.5,.2],[1,0]].forEach(function(q){tv2.addColorStop(q[0],"rgba(10,17,25,"+q[1]+")")});c.fillStyle=tv2;c.fillRect(0,0,w,72);
        var m0=G.bh-80,mv=c.createLinearGradient(0,m0,0,G.bh);[[0,0],[.2,.06],[.4,.2],[.6,.45],[.8,.75],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(10,17,25,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,m0,w,G.bh-m0+1);
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
