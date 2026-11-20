/* ================= HERO FIELD: a crafted render of Zywie's real subject (HOME_BRIEF update 2c): the ambroxol molecule,
   the parent of ZW-002 and ZW-010, as a lacquered ball-and-stick model (PubChem CID 2132 3D conformer; render.py): carbon in
   the logo's forest green, nitrogen in the header rule's gold, bromine in bronze, oxygen in bone, hydrogen in the swoosh's
   silver. Baked with alpha to hero.webp; here it turns very slightly and breathes in a slow drift. It moves on its own, so no
   pointer response (CZ). On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0a1510";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1560:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.4,w*.86)+8:h;
    /* the molecule is square (884x885), its atoms filling ~90% of it; centred at ~70% of the content width, clear of the H1 */
    var ih=mob?Math.min(U-80,w*.8):Math.min(h*.84,cw*.44),iw=ih*(884/885);
    var kx=mob?w*.5:side+cw*.73,ky=mob?72+(U-80)*.5:h*.53;
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
      /* a very slow breath: push in ~4% and drift up a touch over ~44s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/44),sc=(1+.04*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.012-SP.v*G.ih*.06;
      /* a low forest-green glow, painted across the WHOLE canvas (never inside the image rect alone), so no edge of the baked
         render can read as a pasted box (DJ) */
      var ggx=G.kx,ggy=G.ky,ggr=Math.max(w,h)*.7;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(18,58,34,"+(.55*e).toFixed(3)+")");ag.addColorStop(.55,"rgba(13,34,22,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(10,21,16,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      var rt=(RM?0:Math.sin(t*Math.PI*2/60))*.022;c.save();c.translate(x+dw/2,y+dh/2);c.rotate(rt);c.globalAlpha=e;c.drawImage(img,-dw/2,-dh/2,dw,dh);c.restore();c.globalAlpha=e;
      /* a faint warm sheen drifting across the model, like a studio light moving */
      var pu=.5+.5*Math.sin(t*Math.PI*2/11),px=x+dw*(.5+.1*pu),py=y+dh*.4,pr=dw*.3;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(235,214,160,"+(.04+.04*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(235,214,160,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.56,0);lv.addColorStop(0,"rgba(6,16,11,.95)");lv.addColorStop(.62,"rgba(6,16,11,.6)");lv.addColorStop(1,"rgba(6,16,11,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(6,16,11,.6)");tv.addColorStop(1,"rgba(6,16,11,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(10,21,16,0)");bv.addColorStop(1,"rgba(10,21,16,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,64);tv2.addColorStop(0,"rgba(6,16,11,.7)");tv2.addColorStop(1,"rgba(6,16,11,0)");c.fillStyle=tv2;c.fillRect(0,0,w,64);
        var mv=c.createLinearGradient(0,G.bh-10,0,G.bh+40);mv.addColorStop(0,"rgba(10,21,16,0)");mv.addColorStop(1,"rgba(10,21,16,1)");c.fillStyle=mv;c.fillRect(0,G.bh-10,w,51);
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
