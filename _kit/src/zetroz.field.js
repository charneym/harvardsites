/* ================= HERO FIELD: ZetrOZ's own photography (HOME_BRIEF update 2026-11-20, option a): the sam® 3.0 applicator worn on a
   knee, from the sam® 3.0 launch images on zetroz.com (wp-content/uploads/2026/07/Untitled-design.jpg, 1920x1080), graded gently toward
   the page ink. The photo is drawn at or below native resolution; its focal point (the applicator, at 56%/52% of the frame) is centred in
   the open area right of the measured headline and lede (>=100px clear, DP/DO). Where the photo does not reach the left edge, its left
   side is eased into the ink over a long smoothstep ramp (no seam, DJ); a scrim lives only behind the text (DI). Slow Ken Burns drift,
   no pointer response (CZ). On phones the photo fills the top band below the nav and fades into the ink above the text. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false,off=document.createElement("canvas"),oc=off.getContext("2d");
  var FX=.5625,FY=.53,INK="#08121b";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var tr=0;try{var hh=document.getElementById("pageTitle"),ft=document.querySelector(".hero-foot .s");
      if(hh){var rg=document.createRange();rg.selectNodeContents(hh);tr=Math.max(tr,rg.getBoundingClientRect().right)}
      if(ft){var rg2=document.createRange();rg2.selectNodeContents(ft);tr=Math.max(tr,rg2.getBoundingClientRect().right)}}catch(e){}
    if(!tr||tr>w*.66)tr=side+cw*.46;
    var L=tr+110,R=w-side,ox=Math.max(w*.62,Math.min(w*.72,(L+R)/2));
    return {mob:mob,side:side,cw:cw,tr:tr,bh:mob?Math.round(h*.52):h,ox:ox};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);off.width=cv.width;off.height=cv.height;G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;if(now-(G.at||0)>1500){G=geo();G.at=now}dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=INK;c.fillRect(0,0,w,h);
    if(ok){
      var iw=img.naturalWidth,ih=img.naturalHeight,k=.5-.5*Math.cos(t*Math.PI*2/48),sc,x,y,dw,dh,bh=G.bh;
      if(!G.mob){
        sc=Math.max(w/iw,h/ih);sc=Math.min(sc,1)*(1+.03*k)*(1+.04*(1-e));
        if(sc*ih<h)sc=h/ih*(1+.03*k);
        dw=iw*sc;dh=ih*sc;x=G.ox-FX*dw;y=h*.52-FY*dh-SP.v*h*.04;
        if(x+dw<w)x=w-dw;if(y>0)y=0;if(y+dh<h)y=h-dh;
      }else{
        sc=Math.max((bh-140)/(.537*ih),w/iw)*(1+.025*k);dw=iw*sc;dh=ih*sc;x=w*.5-FX*dw;y=98-.278*dh-SP.v*bh*.05;
        if(x>0)x=0;if(x+dw<w)x=w-dw;
      }
      /* draw the photo into an offscreen layer and ease its uncovered edges into the ink (long smoothstep ramps, never a line) */
      oc.setTransform(dpr,0,0,dpr,0,0);oc.globalCompositeOperation="source-over";oc.clearRect(0,0,w,h);oc.drawImage(img,x,y,dw,dh);
      oc.globalCompositeOperation="destination-in";
      if(!G.mob){
        var a0=Math.max(x,0),ramp=Math.max(w*.34,420),lg=oc.createLinearGradient(a0,0,a0+ramp,0);
        for(var s=0;s<=8;s++){lg.addColorStop(s/8,"rgba(0,0,0,"+(x>0?sm(s/8):1).toFixed(3)+")")}
        oc.fillStyle=lg;oc.fillRect(0,0,w,h);
      }else{
        var mg=oc.createLinearGradient(0,0,0,bh+4);
        [[0,.25],[.12,.85],[.2,1],[.8,1],[.9,.55],[.96,.15],[1,0]].forEach(function(q){mg.addColorStop(q[0],"rgba(0,0,0,"+q[1]+")")});
        oc.fillStyle=mg;oc.fillRect(0,0,w,h);
      }
      c.globalAlpha=e;c.setTransform(1,0,0,1,0,0);c.drawImage(off,0,0);c.globalAlpha=1;c.setTransform(dpr,0,0,dpr,0,0);
      if(!G.mob){
        /* text scrim: strong over the copy, eased out well before the applicator; a soft top shade under the nav */
        var sx=Math.min(G.tr+60,w*.6),lv=c.createLinearGradient(0,0,sx+w*.12,0);
        [[0,.9],[.35,.82],[.62,.55],[.82,.2],[1,0]].forEach(function(q){lv.addColorStop(q[0],"rgba(8,18,27,"+q[1]+")")});
        c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.24);tv.addColorStop(0,"rgba(8,18,27,.55)");tv.addColorStop(1,"rgba(8,18,27,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.24);
        var bv=c.createLinearGradient(0,h*.62,0,h);bv.addColorStop(0,"rgba(8,18,27,0)");bv.addColorStop(.6,"rgba(8,18,27,.45)");bv.addColorStop(1,"rgba(8,18,27,.92)");c.fillStyle=bv;c.fillRect(0,h*.62,w,h*.38+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,130);tv2.addColorStop(0,"rgba(8,18,27,.6)");tv2.addColorStop(1,"rgba(8,18,27,0)");c.fillStyle=tv2;c.fillRect(0,0,w,130);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.mob?w/2:G.ox,G.mob?G.bh*.5:h*.52]:[w/2,h/2]}};
})();
