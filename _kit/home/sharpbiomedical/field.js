/* ================= HERO FIELD: a lumbar spine model, two vertebrae with their disc and nerve roots, the anatomy Altitude
   is built for (it sits in the interspinous space, between the spinous processes on the right). A real photograph: the
   Unsplash image Sharp Biomedical itself uses on sharpbiomedical.com (unsplash licence), cut out from its white studio wall by a
   hand-traced matte (tight on the in-focus edges, soft where the photo is out of focus) with the dark shelf graded into the
   page ink, so it sits on the ink with real alpha (DP/DJ). 1099x1145 cut, drawn at or below native size. It drifts in a slow
   Ken Burns push; it moves on its own, so no pointer response (CZ). On phones it sits whole in the top band above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#08101c",NW=1099,NH=1145,AR=NW/NH;
  img.decoding="async";img.onload=function(){ok=true;size()};img.src="hero.webp";
  function ez(g,rgb,a0,a1,n){n=n||8;for(var i=0;i<=n;i++){var u=i/n,s=u*u*(3-2*u);g.addColorStop(u,"rgba("+rgb+","+(a0+(a1-a0)*s).toFixed(3)+")")}return g}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var mw=w>=1800?1560:1320,side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-mw)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.44,w*1.02):h;
    var d=mob?Math.min(w*.62/AR,U-120,NH/2):Math.min(cw*.36/AR,NH/2*1.6,(h-190)*.8);
    var kx=mob?w*.5:side+cw*.73,ky=mob?84+d*.5:Math.max(h*.53,96+d*.5);
    return {mob:mob,side:side,cw:cw,U:U,d:d,kx:kx,ky:ky,bh:mob?U:h};
  }
  /* a fine grain over the whole field breaks the 8-bit banding of the long scrims, so no straight contour can show (DP) */
  var NZ=(function(){var n=document.createElement("canvas");n.width=n.height=128;var x=n.getContext("2d"),d=x.createImageData(128,128),i,v;
    for(i=0;i<d.data.length;i+=4){v=Math.random()*255|0;d.data[i]=d.data[i+1]=d.data[i+2]=v;d.data[i+3]=10}x.putImageData(d,0,0);return c.createPattern(n,"repeat")})();
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok&&G){
      var k=.5-.5*Math.cos(t*Math.PI*2/36),sc=(1+.03*k)*(1+.035*(1-e));
      var D=G.d*sc,Dw=D*AR,cx=G.kx-k*G.d*.012,cy=G.ky-k*G.d*.008-SP.v*G.d*.08;
      /* a cool brand-blue light behind the model and a faint floor glow, painted across the WHOLE canvas so nothing reads as a box (DJ) */
      var gr=Math.max(w,h)*.6,ag=c.createRadialGradient(cx,cy-D*.08,0,cx,cy-D*.08,gr);ez(ag,"47,116,214",.30*e,0,12);c.fillStyle=ag;c.fillRect(0,0,w,h);
      var fx=cx,fy=cy+D*.46,fg=c.createRadialGradient(fx,fy,0,fx,fy,D*.9);ez(fg,"110,167,245",.07*e,0,10);c.fillStyle=fg;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,cx-Dw/2,cy-D/2,Dw,D);c.globalAlpha=1;
      if(!G.mob){
        var lv=ez(c.createLinearGradient(G.side,0,G.side+G.cw*.6,0),"8,16,28",.9,0,12);c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=ez(c.createLinearGradient(0,0,0,h*.22),"8,16,28",.4,0,12);c.fillStyle=tv;c.fillRect(0,0,w,h);
        var bv=ez(c.createLinearGradient(0,h*.78,0,h),"8,16,28",0,.75,12);c.fillStyle=bv;c.fillRect(0,0,w,h);
      }else{
        var tv2=ez(c.createLinearGradient(0,0,0,G.bh*.26),"8,16,28",.5,0,10);c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.26);
        var mv=ez(c.createLinearGradient(0,G.bh*.78,0,G.bh),"8,16,28",0,1,10);c.fillStyle=mv;c.fillRect(0,G.bh*.78,w,G.bh*.22+1);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      c.setTransform(1,0,0,1,0,0);c.fillStyle=NZ;c.fillRect(0,0,cv.width,cv.height);c.setTransform(dpr,0,0,dpr,0,0);
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
