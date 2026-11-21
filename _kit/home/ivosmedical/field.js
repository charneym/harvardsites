/* ================= HERO FIELD: a crafted render of IVOS Medical's real product (HOME_BRIEF update 2c): the BOSS G4™ video
   laryngoscope sleeve, modelled on IVOS's own product image: the ribbed cuff that takes the scope, the J-shaped blade, and
   the integrated suction / oxygen channel in the logo teal running down to the tip from its port. Ray-marched offline by
   render.py, baked with real alpha to hero.webp (no ground of its own, so no box edge: DP/DJ). Here it floats in a slow
   drift inside a soft teal light, centred in the open space right of the headline (DO), whole and clear of the nav. It
   moves on its own, so no pointer response (CZ). On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#06212b",AR=706/1119;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var top=mob?78:104;                                   /* clear of the header, with headroom */
    var U=mob?Math.max(300,h*.44):h;               /* phones: the band above the copy (hero padding-top is 44svh there) */
    var ih,kx,ky;
    if(mob){ih=Math.min((U-top-8)*.98,w*.9/AR);kx=w*.56;ky=top+(U-top-8)*.5}
    else{ih=Math.min((h-top-56)*.94,cw*.34/AR,1119);kx=side+cw*.69;ky=top+(h-top-56)/2+6}
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:ih*AR,kx:kx,ky:ky,bh:mob?U:h,top:top};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    /* a soft studio light behind the product, painted across the WHOLE canvas with a long eased falloff (never a box) */
    var gx=G.kx,gy=G.ky-G.ih*.05,gr=Math.max(G.ih*1.25,Math.min(w,h)*.7);
    var ag=c.createRadialGradient(gx,gy,0,gx,gy,gr);
    var a0=.34*e;
    ag.addColorStop(0,"rgba(18,96,116,"+a0.toFixed(3)+")");ag.addColorStop(.3,"rgba(14,80,98,"+(a0*.62).toFixed(3)+")");
    ag.addColorStop(.6,"rgba(10,56,70,"+(a0*.26).toFixed(3)+")");ag.addColorStop(.82,"rgba(8,42,54,"+(a0*.08).toFixed(3)+")");ag.addColorStop(1,"rgba(6,33,43,0)");
    c.fillStyle=ag;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow float: up and down ~1.2% and a breath of scale over ~14s */
      var k=.5-.5*Math.cos(t*Math.PI*2/14),sc=(1+.012*k)*(1+.03*(1-e));
      var dh=G.ih*sc,dw=dh*AR,x=G.kx-dw/2,y=G.ky-dh/2-k*G.ih*.012-SP.v*G.ih*.05;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(G.mob){
        var mv=c.createLinearGradient(0,G.bh-26,0,G.bh+40);mv.addColorStop(0,"rgba(6,33,43,0)");mv.addColorStop(1,"rgba(6,33,43,1)");c.fillStyle=mv;c.fillRect(0,G.bh-26,w,66);
        c.fillStyle=BG;c.fillRect(0,G.bh+40,w,h-G.bh);
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
