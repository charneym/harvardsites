/* ================= HERO FIELD: Plant-e's own photograph (HOME_BRIEF update 2a): a water-level SensorStick standing in the
   blanket bog of the Cairngorms National Park (plant-e.com, "Plant-e's SensorSticks installed in Cairngorms National Park",
   September 2025), graded offline to the moss-and-peat palette (hero.webp). Drawn full-bleed so no edge of the photo is ever
   inside the viewport (DJ/DP); the stick is placed whole in the open area right of the text (~68% of the width, DO) and below
   the nav with headroom. A very slow Ken Burns drift; it moves on its own, so no pointer response (CZ). The headline side
   gets a long ink wash (DI). On phones the photo fills a top band and fades into the ink well above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#10160f",AR=4/3,SX=.535,SH=.334;
  img.decoding="async";img.onload=function(){ok=true;AR=img.naturalWidth/img.naturalHeight;G=geo();ocK="";if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.52,w*1.12):h;
    var iw,ih,kx,ky,SC=(.436+.77)/2;
    if(!mob){
      /* the stick lands at ~69% of the content width, its centre at ~57% of the height; the photo always covers the viewport */
      kx=side+cw*.69;ky=h*.57;
      ih=Math.max(ky/SC,(h-ky)/(1-SC),((w-kx)/(1-SX))/AR)*1.06;iw=ih*AR;
    }else{
      /* phones: the stick whole and centred in the top band, clear of the nav */
      kx=w*.5;var top=100,bot=U*.62;ih=Math.max((bot-top)/SH,w/AR*1.25);iw=ih*AR;ky=(top+bot)/2;
    }
    return {sc:SC,mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h};
  }
  /* desktop: the photo's left side is feathered into the ink over a long distance (real alpha), so it needs no upscaling to
     reach the left edge and no edge of it can ever show (DJ/DP) */
  var oc=document.createElement("canvas"),ox=oc.getContext("2d"),ocK="";
  function feather(){
    if(!ok||!G||G.mob)return;var k=G.iw.toFixed(0)+"x"+dpr;if(k===ocK)return;ocK=k;
    var s2=Math.min(dpr,img.naturalWidth/G.iw*1.0>1?dpr:1),W=Math.round(G.iw*s2),H=Math.round(G.ih*s2);oc.width=W;oc.height=H;
    ox.globalCompositeOperation="source-over";ox.clearRect(0,0,W,H);ox.drawImage(img,0,0,W,H);
    ox.globalCompositeOperation="destination-in";var g=ox.createLinearGradient(0,0,W*.5,0);
    for(var i=0;i<=10;i++){var u=i/10;g.addColorStop(u,"rgba(0,0,0,"+(u*u*(3-2*u)).toFixed(3)+")")}
    ox.fillStyle=g;ox.fillRect(0,0,W,H);ox.globalCompositeOperation="source-over";
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
      /* Ken Burns: grow ~3% about the stick over ~44s, eased back and forth; a touch of scroll parallax */
      var k=.5-.5*Math.cos(t*Math.PI*2/44),sc=(1+.03*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*SX,y=G.ky-dh*G.sc-(G.mob?0:SP.v*G.ih*.04);
      c.globalAlpha=e;
      if(G.mob){c.save();c.beginPath();c.rect(0,0,w,G.bh);c.clip();c.drawImage(img,x,y,dw,dh);c.restore()}
      else{feather();c.drawImage(oc,x,y,dw,dh)}
      c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): a long ink wash from the left, a soft top under the nav and a long base fade */
        var lx=G.side+G.cw*.6,lv=c.createLinearGradient(0,0,lx,0);
        [[0,.93],[.3,.9],[.55,.78],[.72,.55],[.86,.27],[1,0]].forEach(function(q){lv.addColorStop(q[0],"rgba(11,16,10,"+q[1]+")")});
        c.fillStyle=lv;c.fillRect(0,0,lx+1,h);
        var tv=c.createLinearGradient(0,0,0,h*.42);[[0,.62],[.2,.42],[.4,.24],[.6,.11],[.8,.035],[1,0]].forEach(function(q){tv.addColorStop(q[0],"rgba(11,16,10,"+q[1]+")")});c.fillStyle=tv;c.fillRect(0,0,w,h*.42);
        var bv=c.createLinearGradient(0,h*.6,0,h);[[0,0],[.2,.04],[.4,.14],[.6,.32],[.8,.6],[1,.92]].forEach(function(q){bv.addColorStop(q[0],"rgba(16,22,15,"+q[1]+")")});c.fillStyle=bv;c.fillRect(0,h*.6,w,h*.4+1);
        /* an overall gentle dim so the photo sits in the page's ink (keeps its tonal depth) */
        c.fillStyle="rgba(11,16,10,.14)";c.fillRect(0,0,w,h);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.3);[[0,.62],[.3,.34],[.6,.12],[1,0]].forEach(function(q){tv2.addColorStop(q[0],"rgba(11,16,10,"+q[1]+")")});c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.3);
        var mv=c.createLinearGradient(0,G.bh*.64,0,G.bh);[[0,0],[.2,.05],[.4,.18],[.6,.42],[.8,.74],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(16,22,15,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,G.bh*.64,w,G.bh*.36+1);
        c.fillStyle="rgba(11,16,10,.12)";c.fillRect(0,0,w,G.bh);
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
