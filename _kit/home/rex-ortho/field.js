/* ================= HERO FIELD: the firm's own product animation (HOME_BRIEF update, option a/c): REX Ortho's "Bone Compression"
   render of the F-REX Screw expanding inside a sectioned femoral head (rexortho.com/wp-content/uploads/2023/04/Bone-Compression-Web.mp4).
   Prepared in hero.mp4: the steady-camera stretch (20.5–27.6 s) as a forward-and-back loop, the burned-in title and logo removed,
   the 12 px of head cut by the original frame restored, and the grey studio ground flattened pixel by pixel to the site ink (#07101a) so the frame has no edge anywhere (DJ/DP).
   The subject sits whole in the open area right of the headline, ≥110 px clear of it (DP/DO); its left and base fade into the ink, and the headline side stays under a deep ink wash (DI).
   It moves on its own, so no pointer response (CZ). Reduced motion shows the still (hero.webp). On phones it sits in the top band. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false,vok=false;
  var BG="#07101a",IW=1280,IH=760,SX0=262,SX1=1192,SY0=28,SY1=700;/* subject box in the source: head, neck, nail, shaft */
  var vid=document.createElement("video");
  vid.muted=true;vid.defaultMuted=true;vid.loop=true;vid.playsInline=true;vid.setAttribute("playsinline","");vid.setAttribute("muted","");vid.preload="auto";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  if(!RM){vid.addEventListener("loadeddata",function(){vok=true});vid.src="hero.mp4";try{vid.load()}catch(e){}}
  function ink(a){return "rgba(7,16,26,"+a+")"}
  function textRight(){var r=0;$$("#pageTitle .l, .hero .hero-foot .s").forEach(function(el){var b=el.getBoundingClientRect();
      /* a line span is as wide as its text when inline-block; measure its text with a range otherwise */
      try{var rg=document.createRange();rg.selectNodeContents(el);var rr=rg.getBoundingClientRect();if(rr.width)b=rr}catch(e){}
      if(b.width&&b.right>r)r=b.right});return r||w*.5}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    if(mob){/* the band between the header and the eyebrow: the head stays clear of the logo and of the text (CW) */
      var eb=$(".hero .eyebrow"),tt=eb?eb.getBoundingClientRect().top+(window.scrollY||0):h*.36;
      var top=78,bot=Math.max(top+150,tt-18),U=bot,sc=Math.min(w*.92/(SX1-SX0),(bot-top)/(SY1-SY0));
      var cx=w*.5,cy=(top+bot)/2;return {mob:true,side:side,cw:cw,U:U,sc:sc,x:cx-(SX0+SX1)/2*sc,y:cy-(SY0+SY1)/2*sc,bh:U+10}}
    var L=Math.max(w*.5,textRight()+110),R=side+cw;
    var sc2=Math.min((R-L)/(SX1-SX0),h*.72/(SY1-SY0),1);
    var cx2=(L+R)/2,cy2=h*.53;
    return {mob:false,side:side,cw:cw,L:L,R:R,sc:sc2,x:cx2-(SX0+SX1)/2*sc2,y:cy2-(SY0+SY1)/2*sc2,bh:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    dim+=(dimT-dim)*.08;
    var e=IN.v;e=e*e*(3-2*e);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    var src=vok&&vid.readyState>=2?vid:(ok?img:null);
    if(src){
      var sc=G.sc*(1+.025*(1-e)),dw=IW*sc,dh=IH*sc;
      var x=G.x-(sc-G.sc)*IW*.5,y=G.y-(sc-G.sc)*IH*.5-SP.v*h*.06;
      c.globalAlpha=e;
      c.drawImage(src,x,y,dw,dh);
      c.globalAlpha=1;
      /* left: the inserter and the shaft's far side fade into the ink before the subject box, so the headline side stays clear */
      var lx=G.mob?x+SX0*sc:G.L,fw=G.mob?w*.12:Math.max(60,(G.R-G.L)*.12);
      c.fillStyle=BG;c.fillRect(0,0,Math.max(0,lx-fw*.35),h);
      var lg=c.createLinearGradient(lx-fw*.35,0,lx+fw,0);lg.addColorStop(0,ink(1));lg.addColorStop(.45,ink(.6));lg.addColorStop(1,ink(0));c.fillStyle=lg;c.fillRect(lx-fw*.35-1,0,fw*1.35+2,h);
      /* base: the femoral shaft runs on down and fades out */
      var yb=Math.min(G.bh,y+dh),bg=c.createLinearGradient(0,yb-dh*.18,0,yb);bg.addColorStop(0,ink(0));bg.addColorStop(1,ink(1));c.fillStyle=bg;c.fillRect(0,yb-dh*.18,w,dh*.18+1);
      if(yb<h){c.fillStyle=BG;c.fillRect(0,yb,w,h-yb+1)}
      if(!G.mob){
        /* the headline side: a deep ink wash from the left; a soft top for the nav */
        var lv=c.createLinearGradient(0,0,G.L,0);lv.addColorStop(0,ink(1));lv.addColorStop(.8,ink(.96));lv.addColorStop(1,ink(.75));c.fillStyle=lv;c.fillRect(0,0,G.L,h);
        var tv=c.createLinearGradient(0,0,0,h*.16);tv.addColorStop(0,ink(.6));tv.addColorStop(1,ink(0));c.fillStyle=tv;c.fillRect(0,0,w,h*.16);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.24);tv2.addColorStop(0,ink(.7));tv2.addColorStop(1,ink(0));c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.24);
        var mv=c.createLinearGradient(0,G.bh*.8,0,G.bh);mv.addColorStop(0,ink(0));mv.addColorStop(1,ink(1));c.fillStyle=mv;c.fillRect(0,G.bh*.8,w,G.bh*.2+1);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function play(){if(RM||!vid.src)return;try{vid.playbackRate=.8;var p=vid.play();if(p&&p.catch)p.catch(function(){})}catch(e){}}
  function start(){if(running||document.hidden)return;running=true;play();raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf);try{vid.pause()}catch(e){}}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){setTimeout(size,60)});
  setTimeout(size,1200);setTimeout(size,3000);
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){setTimeout(size,30);if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.x+(SX0+SX1)/2*G.sc,G.y+(SY0+SY1)/2*G.sc]:[w/2,h/2]}};
})();
