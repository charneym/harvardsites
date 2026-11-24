/* ================= HERO FIELD: a crafted render of the product (HOME_BRIEF update 2c): one clear glass vial of
   Stellular's off-the-shelf platelet-derived regenerative biologic, the straw-gold of platelet lysate, closed with a
   flip-off cap in the logo gold (#F3A000). Ray-marched offline by vial.py to hero.webp (premultiplied, real alpha, so
   the page ink shows through the glass). Here it stands on a faint reflection and breathes in a very slow drift, with
   no pointer response (CZ). On phones it sits in the top band above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#33343b",AR=1,RF=null;
  img.decoding="async";img.onload=function(){ok=true;AR=img.naturalWidth/img.naturalHeight;RF=refl();G=geo();if(!running)frame(true)};img.src="hero.webp";
  /* the reflection on an unseen glossy floor: the render flipped, faded out over its lower third */
  function refl(){var W=img.naturalWidth,H=img.naturalHeight,cv2=document.createElement("canvas");cv2.width=W;cv2.height=Math.round(H*.34);var x=cv2.getContext("2d");
    x.translate(0,H);x.scale(1,-1);x.drawImage(img,0,0);x.setTransform(1,0,0,1,0,0);x.globalCompositeOperation="destination-in";
    var gr=x.createLinearGradient(0,0,0,cv2.height);[[0,.2],[.25,.1],[.5,.04],[.75,.012],[1,0]].forEach(function(q){gr.addColorStop(q[0],"rgba(0,0,0,"+q[1]+")")});x.fillStyle=gr;x.fillRect(0,0,W,cv2.height);return cv2}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.08):h;
    /* the vial stands whole in the open area right of the text (DO/DP), its reflection below it */
    var iw=mob?Math.min(w*.5,(U-150)*.86*AR):Math.min(cw*.36,h*.66*AR,560),ih=iw/AR;
    var kx=mob?w*.5:side+cw*.74,ky=mob?92+ih*.5:Math.max(h*.5,120+ih*.5);
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
      /* a very slow breath: grow ~3% and drift up a touch over ~40s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.03*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.012-SP.v*G.ih*.06;
      /* a low blue glow, painted across the WHOLE canvas (never inside the image rect alone), so no edge of the baked
         render can read as a pasted box (DJ) */
      var ggx=G.kx,ggy=G.ky,ggr=Math.max(w,h)*.7;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(92,86,78,"+(.42*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(66,66,72,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(51,52,59,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;if(RF)c.drawImage(RF,x,y+dh-dh*.012,dw,dh*.34);c.drawImage(img,x,y,dw,dh);
      /* a faint warm sheen breathing across the liquid */
      var pu=.5+.5*Math.sin(t*Math.PI*2/11),px=x+dw*(.42+.12*pu),py=y+dh*.66,pr=dw*.34;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(255,214,140,"+(.025+.025*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(255,214,140,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.66,0);lv.addColorStop(0,"rgba(42,43,49,.95)");lv.addColorStop(.62,"rgba(42,43,49,.6)");lv.addColorStop(1,"rgba(42,43,49,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.5);[[0,.55],[.2,.36],[.4,.2],[.6,.09],[.8,.025],[1,0]].forEach(function(q){tv.addColorStop(q[0],"rgba(42,43,49,"+q[1]+")")});c.fillStyle=tv;c.fillRect(0,0,w,h*.5);
        var bv=c.createLinearGradient(0,h*.5,0,h);[[0,0],[.2,.025],[.4,.1],[.6,.24],[.8,.48],[1,.85]].forEach(function(q){bv.addColorStop(q[0],"rgba(51,52,59,"+q[1]+")")});c.fillStyle=bv;c.fillRect(0,h*.5,w,h*.5+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.4);[[0,.5],[.25,.22],[.5,.06],[.75,.035],[1,0]].forEach(function(q){tv2.addColorStop(q[0],"rgba(42,43,49,"+q[1]+")")});c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.4);
        var mv=c.createLinearGradient(0,G.bh*.8,0,G.bh);[[0,0],[.25,.06],[.5,.25],[.75,.6],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(51,52,59,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,G.bh*.8,w,G.bh*.2+1);
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
