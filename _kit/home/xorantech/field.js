/* ================= HERO FIELD: Xoran's own product photography (HOME_BRIEF update 2a): the Next Generation vTRON, the
   company's mobile full-body veterinary cone beam CT (the 31.5-inch open-bore gantry ring with its teal status light, on its
   wheeled base), from xorantech.com (vTRON-Next-Generation.png, a real alpha cut-out, shown at or below its native
   1000px height). It stands whole in the open area right of the text on the page ink, with a soft floor shadow and a
   faint teal light from the bore painted across the whole canvas (never a box, DP/DJ), and drifts in a slow Ken Burns
   breath. On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0a1219";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?h*.44:h;
    /* the scanner photo (679x1036, alpha); it stands in the open area right of the text, below the header */
    var ih=mob?(U-100)*.97:Math.min((h-170)*.92,cw*.62,1000),iw=ih*(679/1036);
    var kx=mob?w*.5:side+cw*.72,ky=mob?92+(U-100)*.5:126+(h-150)*.5;
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U+40:h};
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
      var k=.5-.5*Math.cos(t*Math.PI*2/44),sc=(1+.025*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.012-SP.v*G.ih*.06;
      /* a cool teal light from the bore, painted across the WHOLE canvas so no edge can read as a box (DJ) */
      var ggx=x+dw*.48,ggy=y+dh*.33,ggr=Math.max(w,h)*.7;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(30,92,108,"+(.42*e).toFixed(3)+")");ag.addColorStop(.35,"rgba(18,52,64,"+(.26*e).toFixed(3)+")");ag.addColorStop(1,"rgba(10,18,25,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      /* a soft floor shadow under the wheeled base */
      c.save();c.translate(x+dw*.5,y+dh*.955);c.scale(1,.16);var fs=c.createRadialGradient(0,0,0,0,0,dw*.62);
      fs.addColorStop(0,"rgba(2,5,8,"+(.75*e).toFixed(3)+")");fs.addColorStop(.6,"rgba(2,5,8,"+(.3*e).toFixed(3)+")");fs.addColorStop(1,"rgba(2,5,8,0)");
      c.fillStyle=fs;c.fillRect(-dw,-dw,dw*2,dw*2);c.restore();
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* the teal status light breathes very gently */
      var pu=.5+.5*Math.sin(t*Math.PI*2/9),px=x+dw*.47,py=y+dh*.36,pr=dw*.55;
      var rg=c.createRadialGradient(px,py,pr*.3,px,py,pr);rg.addColorStop(0,"rgba(80,220,240,0)");rg.addColorStop(.55,"rgba(80,220,240,"+(.025+.03*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(80,220,240,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.5,0);for(var li=0;li<=16;li++){var lt=li/16,la=.92*Math.pow(1-lt,1.6)*(1-lt*lt*(3-2*lt))/(1-0)+0;lv.addColorStop(lt,"rgba(6,11,16,"+(.92*(1-lt*lt*(3-2*lt))*(1-.35*lt)).toFixed(3)+")")}c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(6,11,16,.6)");tv.addColorStop(1,"rgba(6,11,16,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(10,18,25,0)");bv.addColorStop(1,"rgba(10,18,25,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.28);tv2.addColorStop(0,"rgba(6,11,16,.7)");tv2.addColorStop(1,"rgba(6,11,16,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.28);
        var mv=c.createLinearGradient(0,G.bh-70,0,G.bh);mv.addColorStop(0,"rgba(10,18,25,0)");mv.addColorStop(1,"rgba(10,18,25,1)");c.fillStyle=mv;c.fillRect(0,G.bh-70,w,71);
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
