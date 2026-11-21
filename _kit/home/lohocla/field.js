/* ================= HERO FIELD: Lohocla's own mark as a crafted object (HOME_BRIEF update 2c). The Lohocla logo is a
   space-filling molecular model (black carbons, white hydrogens, the red #ED1C24 oxygen); render.py builds that model as a
   real studio object (ethanol, standard geometry, lacquered graphite, porcelain and the logo red, soft key, warm rim,
   ambient occlusion), baked with alpha to hero.webp. Here it floats in the open space right of the headline (DO) with a
   very slow breath and drift; a low red-black glow is painted across the whole canvas so no image edge can show (DJ/DP).
   It moves on its own, so no pointer response. On phones it sits in the top band and fades into the ink above the text. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0d0c0c",AR=950/865;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var mw=w>=1800?1560:1320,side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-mw)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.44,w*.92):h,iw,ih,kx,ky;
    if(mob){var top=84,bot=U-14;ih=Math.min((bot-top)/.9,w*.8/AR);iw=ih*AR;kx=w*.5;ky=(top+bot)/2}
    else{iw=Math.min(cw*.39,h*.66*AR);ih=iw/AR;kx=side+cw*.74;ky=Math.max(h*.54,96+ih*.55)}
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
      /* a slow float: a breath of ~3% scale over 40s, a gentle bob over 13s and the faintest roll */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),bob=Math.sin(t*Math.PI*2/13),sc=(1+.03*k)*(1+.04*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,cx=G.kx,cy=G.ky+bob*G.ih*.012-SP.v*G.ih*.08+(1-e)*G.ih*.03;
      var ggx=G.mob?w*.5:G.kx,ggy=G.mob?G.bh*.5:G.ky,ggr=Math.max(w,h)*.8;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(70,14,16,"+(.42*e).toFixed(3)+")");ag.addColorStop(.32,"rgba(40,12,13,"+(.3*e).toFixed(3)+")");ag.addColorStop(.7,"rgba(20,12,12,"+(.12*e).toFixed(3)+")");ag.addColorStop(1,"rgba(13,12,12,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.save();c.globalAlpha=e;c.translate(cx,cy);c.rotate(.035*Math.sin(t*Math.PI*2/31));c.drawImage(img,-dw/2,-dh/2,dw,dh);c.restore();
      /* a faint moving studio sheen across the lacquer */
      var pu=.5+.5*Math.sin(t*Math.PI*2/9),px=cx-dw*(.12-.1*pu),py=cy-dh*.18,pr=dw*.3;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(255,236,230,"+(.025+.03*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(255,236,230,0)");
      c.globalAlpha=e;c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): a long ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.62,0);lv.addColorStop(0,"rgba(8,7,7,.9)");lv.addColorStop(.6,"rgba(8,7,7,.45)");lv.addColorStop(1,"rgba(8,7,7,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(8,7,7,.55)");tv.addColorStop(1,"rgba(8,7,7,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
        var bv=c.createLinearGradient(0,h*.62,0,h);bv.addColorStop(0,"rgba(13,12,12,0)");bv.addColorStop(1,"rgba(13,12,12,.8)");c.fillStyle=bv;c.fillRect(0,h*.62,w,h*.38+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.3);tv2.addColorStop(0,"rgba(8,7,7,.6)");tv2.addColorStop(1,"rgba(8,7,7,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.3);
        var mv=c.createLinearGradient(0,G.bh*.94,0,G.bh*1.45);mv.addColorStop(0,"rgba(13,12,12,0)");mv.addColorStop(1,"rgba(13,12,12,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.94,w,G.bh*.51+1);
        c.fillStyle=BG;c.fillRect(0,G.bh*1.45,w,h);
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
