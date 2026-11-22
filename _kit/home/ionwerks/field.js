/* ================= HERO FIELD: a crafted render of the firm's real product (HOME_BRIEF update 2c): a microchannel-plate ion
   detector stack on a polished stainless ConFlat flange, like the round detector heads on ionwerks.com's products page and
   the MCP detectors of their current NIH programme. Ray-traced by _kit/home/ionwerks/render.py with real alpha (no ground of its
   own, DJ), 1018x707, never upscaled. It sits whole in the open area right of the measured headline (>=100px clear, DP/DO),
   breathes in a slow push-in while a cool rim light drifts around it. It moves on its own, so no pointer response (CZ).
   On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0a1322",IR="10,19,34",NW=1018,NH=707;
  img.decoding="async";img.onload=function(){ok=true;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function ez(g,rgb,a0,a1,n){n=n||8;for(var i=0;i<=n;i++){var u=i/n,s=u*u*(3-2*u);g.addColorStop(u,"rgba("+rgb+","+(a0+(a1-a0)*s).toFixed(3)+")")}return g}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* right edge of the hero text (H1 + lede), measured from the DOM */
  function TXR(){var m=0;try{var L=document.querySelectorAll(".hero-h,.hero-foot p");for(var i=0;i<L.length;i++){var tw=document.createTreeWalker(L[i],4),n;while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;var r=document.createRange();r.selectNodeContents(n);var q=r.getClientRects();for(var j=0;j<q.length;j++)if(q[j].width>0)m=Math.max(m,q[j].right)}}}catch(_){}return m}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861,CR=w-side;
    if(mob){var U=Math.min(h*.42,w*.95),iw=Math.min(w*.84,(U*.8-84)/(NH/NW),NW),ih=iw*NH/NW;return {mob:true,side:side,cw:cw,U:U,iw:iw,ih:ih,kx:w*.5,ky:U*.8-ih/2,bh:U}}
    var tx=TXR()||side+cw*.5,L0=Math.max(tx+110,side+cw*.5),T0=118,B0=h-64;
    var iw=Math.min(CR-L0-8,(B0-T0)/(NH/NW),NW,cw*.5);iw=Math.max(iw,260);
    var kx=Math.min(CR-iw/2-4,Math.max(L0+iw/2,side+cw*.72)),ky=T0+(B0-T0)*.5;
    return {mob:false,side:side,cw:cw,iw:iw,ih:iw*NH/NW,kx:kx,ky:ky,bh:h};
  }
  var gT=0;
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    if(now-gT>1000){gT=now;G=geo()}
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok&&G){
      /* a very slow breath: ~3% push-in over ~46s (the scale never exceeds the native pixels by more than that) */
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=(1+.03*k)*(1+.03*(1-e))*(G.iw*1.03>NW?NW/(G.iw*1.03):1);
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-SP.v*G.ih*.05;
      /* a cool glow from the brand navy, painted across the whole canvas so no edge of the render can read as a box (DJ) */
      var ag=c.createRadialGradient(G.kx,G.ky,0,G.kx,G.ky,Math.max(w,h)*.72);ez(ag,"22,58,120",.55*e,0,14);c.fillStyle=ag;c.fillRect(0,0,w,h);
      /* a soft blue rim light that drifts slowly around behind the stack */
      var ang=t*Math.PI*2/38,hx=G.kx+Math.cos(ang)*dw*.22,hy=G.ky-dh*.12+Math.sin(ang)*dh*.08,hr=Math.max(dw,dh)*.62;
      var hg=c.createRadialGradient(hx,hy,0,hx,hy,hr);ez(hg,"90,140,220",.14*e,0,12);c.fillStyle=hg;c.fillRect(0,0,w,h);
      /* a faint contact shadow under the flange */
      c.save();c.translate(G.kx,y+dh*.86);c.scale(1,.18);var sg=c.createRadialGradient(0,0,0,0,0,dw*.5);ez(sg,"2,6,14",.55*e,0,10);c.fillStyle=sg;c.fillRect(-dw,-dw,dw*2,dw*2);c.restore();
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left that eases out long before the subject, a soft base */
        var lv=ez(c.createLinearGradient(G.side,0,G.side+G.cw*.55,0),IR,.55,0,12);c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=ez(c.createLinearGradient(0,h*.55,0,h),IR,0,.6,12);c.fillStyle=bv;c.fillRect(0,0,w,h);
      }else{
        var tv2=ez(c.createLinearGradient(0,0,0,G.bh*.3),IR,.5,0,10);c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.3);
        var mv=ez(c.createLinearGradient(0,G.bh*.78,0,G.bh),IR,0,1,10);c.fillStyle=mv;c.fillRect(0,G.bh*.78,w,G.bh*.22+1);
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
