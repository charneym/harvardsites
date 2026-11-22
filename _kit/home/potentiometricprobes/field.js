/* ================= HERO FIELD: a crafted render of Potentiometric Probes' subject (HOME_BRIEF update 2c): a patch of cell
   membrane stained with a voltage-sensitive dye. Lipid head groups in warm bone; the styryl dye molecules (ANEP /
   ElectroFluor family) in the outer leaflet, chromophores running down among the tails at the cut edge
   (potentiometricprobes.com /how-vsds-work). Ray-shaded offline by render.py to hero.webp (alpha, no ground: DJ); the dyes'
   fluorescence is a separate glow.webp, added on top here. A soft band sweeps across the glow every few seconds, like an
   action potential crossing the stained membrane and the dye reporting it. The art moves on its own, so no pointer
   response (CZ). On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),glo=new Image(),ok=false,gok=false;
  var oc=document.createElement("canvas"),ox=oc.getContext("2d");
  var BG="#0e0809",AR=1266/989;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  glo.decoding="async";glo.onload=function(){gok=true;oc.width=640;oc.height=Math.round(640/AR);if(!running)frame(true)};glo.src="glow.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    if(w>=1800)side=Math.max(72,(w-1600)/2),cw=w-2*side;
    var U=mob?Math.round(h*.4+8):h;
    var iw,ih,kx,ky;
    if(mob){iw=Math.min(w*.84,(U-104)*.97*AR);ih=iw/AR;kx=w*.5;ky=92+(U-92)*.55}
    else{iw=Math.min(cw*.45,(h-190)*AR);ih=iw/AR;kx=side+cw*.745;ky=96+(h-96)*.52}
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
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=(1+.035*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.012-SP.v*G.ih*.06;
      /* a low warm glow across the WHOLE canvas (never inside the image rect alone), so no edge of the render reads as a box (DJ) */
      var ggx=G.kx,ggy=G.mob?G.bh*.46:G.ky,ggr=Math.max(w,h)*.7;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(92,22,24,"+(.42*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(48,14,16,"+(.24*e).toFixed(3)+")");ag.addColorStop(1,"rgba(14,8,9,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      if(gok){
        /* the dyes' steady fluorescence, plus a band that sweeps across them (an action potential crossing the patch) */
        c.globalCompositeOperation="lighter";
        c.globalAlpha=e*.42;c.drawImage(glo,x,y,dw,dh);
        var ph=RM?.45:((t%5.2)/5.2)*1.5-.25,ow=oc.width,oh=oc.height;
        ox.globalCompositeOperation="source-over";ox.clearRect(0,0,ow,oh);ox.drawImage(glo,0,0,ow,oh);
        ox.globalCompositeOperation="destination-in";
        var bx=ph*ow*1.3-ow*.15,lg=ox.createLinearGradient(bx-ow*.3,oh*.15,bx+ow*.3,oh*.85);
        lg.addColorStop(0,"rgba(0,0,0,0)");lg.addColorStop(.42,"rgba(0,0,0,.9)");lg.addColorStop(.55,"rgba(0,0,0,1)");lg.addColorStop(1,"rgba(0,0,0,0)");
        ox.fillStyle=lg;ox.fillRect(0,0,ow,oh);
        c.globalAlpha=e*.75;c.drawImage(oc,x,y,dw,dh);
        c.globalCompositeOperation="source-over";
      }
      c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left that eases out over a long distance, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.62,0);for(var li=0;li<=16;li++){var lt=li/16;lv.addColorStop(lt,"rgba(8,4,5,"+(.9*(1-lt*lt*(3-2*lt))*(1-.35*lt)).toFixed(3)+")")}c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.34);for(var ti=0;ti<=12;ti++){var tt=ti/12,te=1-tt;tv.addColorStop(tt,"rgba(8,4,5,"+(.6*te*te*te*(te*(6*te-15)+10)).toFixed(3)+")")}c.fillStyle=tv;c.fillRect(0,0,w,h*.34);
        var bv=c.createLinearGradient(0,h*.6,0,h);for(var bi=0;bi<=12;bi++){var bt=bi/12;bv.addColorStop(bt,"rgba(14,8,9,"+(.85*bt*bt*bt*(bt*(6*bt-15)+10)).toFixed(3)+")")}c.fillStyle=bv;c.fillRect(0,h*.6,w,h*.4+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,72);tv2.addColorStop(0,"rgba(8,4,5,.6)");tv2.addColorStop(1,"rgba(8,4,5,0)");c.fillStyle=tv2;c.fillRect(0,0,w,72);
        var mv=c.createLinearGradient(0,G.bh*.86,0,G.bh+60);for(var mi=0;mi<=12;mi++){var mt=mi/12;mv.addColorStop(mt,"rgba(14,8,9,"+(mt*mt*mt*(mt*(6*mt-15)+10)).toFixed(3)+")")}c.fillStyle=mv;c.fillRect(0,G.bh*.86,w,G.bh*.14+61);
        c.fillStyle=BG;c.fillRect(0,G.bh+60,w,h-G.bh);
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
