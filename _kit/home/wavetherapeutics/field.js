/* ================= HERO FIELD: the firm's own photograph of the Wave Therapeutic Cushion (HOME_BRIEF update 2a: their own
   real product photography, wavetherapeuticsinc.com/wp-content/uploads/2019/10/our_product.png, a clean alpha cut-out), shown
   at or below its native resolution, centred in the open area right of the text (DO/DP). The cut-out has real alpha, so no
   box edge can show (DJ). Motion: a very slow Ken Burns breath, and a faint band of light that rolls front-to-back across
   the air cells every few seconds, the way the cushion's peristaltic pump runs a wave through them. On phones it sits in the
   top band (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false,oc=document.createElement("canvas"),ox=oc.getContext("2d");
  var BG="#0b1615",NW=888,NH=604;
  img.decoding="async";img.onload=function(){ok=true;oc.width=NW;oc.height=NH;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* the cushion inside hero.webp (888x604): alpha bbox x .017-.983, y .023-.974; its visual centre (.5,.5) */
  var CX=.5,CY=.5,AR=NH/NW;
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.36,w*.7):h;
    /* desktop: as wide as the open column allows, never above native size; phones: the full gutter width */
    /* phones: between the nav (+ headroom) and the eyebrow, which starts at 34svh */
    var t0b=92,b0b=h*.34-10,iw=mob?Math.min(NW,w*.8,(b0b-t0b)/AR):Math.min(NW,cw*.43,(h-170)*1.32),ih=iw*AR;
    var kx=mob?w*.5:side+cw*.715,ky=mob?(t0b+b0b)/2:Math.max(h*.53,92+ih*.56);
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?b0b+10:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  /* the cushion with the travelling band of light, masked to the cushion's own alpha */
  function cushion(t){
    ox.globalCompositeOperation="source-over";ox.clearRect(0,0,NW,NH);ox.drawImage(img,0,0);
    if(RM)return;
    var per=7.5,ph=(t%per)/per;                       /* one wave every 7.5s, then a rest */
    var u=sm(ph/.72),a=Math.sin(Math.min(1,ph/.72)*Math.PI);
    if(a<=0.001)return;
    /* the rows run left-right; the wave travels from the front edge (low in frame) to the back (high) */
    var y=NH*(.86-.78*u),x0=NW*.12,x1=NW*.9,skew=NH*.12;
    var g=ox.createLinearGradient(x0,y+skew*.5,x0+NW*.06,y-NH*.15+skew*.5);
    ox.globalCompositeOperation="source-atop";
    g.addColorStop(0,"rgba(214,246,240,0)");g.addColorStop(.5,"rgba(214,246,240,"+(.15*a).toFixed(3)+")");g.addColorStop(1,"rgba(214,246,240,0)");
    ox.fillStyle=g;ox.fillRect(0,0,NW,NH);ox.globalCompositeOperation="source-over";
  }
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.03*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*CX,y=G.ky-dh*CY-k*G.ih*.01-SP.v*G.ih*.05;
      /* a low teal light behind the cushion, painted across the whole canvas so nothing can read as a box (DJ) */
      var ggx=G.kx,ggy=G.mob?G.bh*.52:G.ky,ggr=Math.max(w,h)*.62;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(40,92,86,"+(.62*e).toFixed(3)+")");ag.addColorStop(.42,"rgba(22,52,49,"+(.38*e).toFixed(3)+")");ag.addColorStop(1,"rgba(11,22,21,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      /* a soft contact shadow under the cushion */
      c.save();c.translate(G.kx,y+dh*.86);c.scale(1,.16);var sh=c.createRadialGradient(0,0,0,0,0,dw*.56);
      sh.addColorStop(0,"rgba(3,8,8,"+(.7*e).toFixed(3)+")");sh.addColorStop(1,"rgba(3,8,8,0)");c.fillStyle=sh;c.fillRect(-dw,-dw,dw*2,dw*2);c.restore();
      cushion(t);
      c.globalAlpha=e;c.drawImage(oc,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.46,0);lv.addColorStop(0,"rgba(7,15,14,.88)");lv.addColorStop(.7,"rgba(7,15,14,.45)");lv.addColorStop(1,"rgba(7,15,14,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(7,15,14,.6)");tv.addColorStop(1,"rgba(7,15,14,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
        var bv=c.createLinearGradient(0,h*.72,0,h);bv.addColorStop(0,"rgba(11,22,21,0)");bv.addColorStop(1,"rgba(11,22,21,.85)");c.fillStyle=bv;c.fillRect(0,h*.72,w,h*.28+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.3);tv2.addColorStop(0,"rgba(7,15,14,.5)");tv2.addColorStop(1,"rgba(7,15,14,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.3);
        var mv=c.createLinearGradient(0,G.bh*.8,0,G.bh+40);mv.addColorStop(0,"rgba(11,22,21,0)");mv.addColorStop(1,"rgba(11,22,21,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.8,w,G.bh*.2+41);
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
