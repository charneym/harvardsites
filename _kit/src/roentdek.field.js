/* ================= HERO FIELD: RoentDek's own photograph of their DLD40 delay-line detector (roentdek.com, Detectors;
   cut out on real alpha). Placed whole in the open area right of the text (DO/DP) at or below its native resolution
   (645 x 760), with a slow breath and drift, no pointer response. A warm, low copper glow is painted across the WHOLE canvas
   (never inside the image rect), so no edge can read as a pasted box (DJ). On phones it sits in the top band and fades
   into the ink above the text. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#121214",AR=645/760,NH=760;
  img.decoding="async";img.onload=function(){ok=true;AR=img.naturalWidth/img.naturalHeight;NH=img.naturalHeight;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1560:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.08):h;
    var ih=mob?Math.min(U-170,(w*.5)/AR,190):Math.min(h*.6,(cw*.34)/AR,NH),iw=ih*AR;
    var kx=mob?w*.5:side+cw*.75,ky=mob?88+ih*.5:Math.max(h*.53,150+ih*.5);
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
      /* a very slow breath: grow ~2.5% and drift up a touch over ~40s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.025*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.012-SP.v*G.ih*.06;
      var ggx=G.kx,ggy=G.mob?G.bh*.4:G.ky-G.ih*.12,ggr=Math.max(w,h)*.62;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(120,70,48,"+(.30*e).toFixed(3)+")");ag.addColorStop(.3,"rgba(70,42,32,"+(.2*e).toFixed(3)+")");ag.addColorStop(.62,"rgba(34,24,22,"+(.08*e).toFixed(3)+")");ag.addColorStop(1,"rgba(18,18,20,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      /* a soft floor shadow under the legs, so the detector stands rather than floats */
      var fy=y+dh*.985,fr=dw*.62;c.save();c.translate(G.kx,fy);c.scale(1,.16);var fs=c.createRadialGradient(0,0,0,0,0,fr);fs.addColorStop(0,"rgba(0,0,0,"+(.5*e).toFixed(3)+")");fs.addColorStop(1,"rgba(0,0,0,0)");c.fillStyle=fs;c.fillRect(-fr,-fr,fr*2,fr*2);c.restore();
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* a faint warm sheen breathing across the copper ring */
      var pu=.5+.5*Math.sin(t*Math.PI*2/11),px=x+dw*(.35+.2*pu),py=y+dh*.22,pr=dw*.34;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(255,226,204,"+(.025+.03*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(255,226,204,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.52,0);lv.addColorStop(0,"rgba(11,11,12,.88)");lv.addColorStop(.6,"rgba(11,11,12,.42)");lv.addColorStop(1,"rgba(11,11,12,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.5);[[0,.5],[.2,.32],[.4,.17],[.6,.07],[.8,.02],[1,0]].forEach(function(q){tv.addColorStop(q[0],"rgba(11,11,12,"+q[1]+")")});c.fillStyle=tv;c.fillRect(0,0,w,h*.5);
        var bv=c.createLinearGradient(0,h*.5,0,h);[[0,0],[.2,.02],[.4,.08],[.6,.2],[.8,.42],[1,.8]].forEach(function(q){bv.addColorStop(q[0],"rgba(18,18,20,"+q[1]+")")});c.fillStyle=bv;c.fillRect(0,h*.5,w,h*.5+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.4);[[0,.4],[.25,.12],[.5,.03],[.75,.01],[1,0]].forEach(function(q){tv2.addColorStop(q[0],"rgba(11,11,12,"+q[1]+")")});c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.4);
        var mv=c.createLinearGradient(0,G.bh*.78,0,G.bh);[[0,0],[.25,.06],[.5,.25],[.75,.6],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(18,18,20,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,G.bh*.78,w,G.bh*.22+1);
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
