/* ================= HERO FIELD: Soterix Medical's own product photography (HOME_BRIEF update 2a): the SPRY TMS Therapy
   System console, FDA cleared in March 2026 for major depression, from the company's product page (sprytms_console.png,
   a real-alpha cut-out). Graded a touch cooler and darker so it sits in the navy ink, shown at or below its native size,
   standing in the open area right of the text on a soft floor shadow, with a low blue light behind it, breathing in a
   very slow drift. It moves on its own, so no pointer response (CZ). On phones it stands in the top band above the
   text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0b1a2f",AR=1;
  img.decoding="async";img.onload=function(){ok=true;AR=img.naturalWidth/img.naturalHeight;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?h*.44:h;
    /* the console stands whole in the open area right of the text (DO/DP), never above its native 1138px */
    var ih=mob?Math.min(h*.44-142,1138):Math.min(h*.6,1138,cw*.62/AR),iw=ih*AR;
    var kx=mob?w*.5:side+cw*.71,ky=mob?98+ih*.5:Math.max(h*.53,124+ih*.5);
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
      /* a very slow breath: grow ~2% and lift a touch over ~40s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.02*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.008-SP.v*G.ih*.05,fy=G.ky+G.ih*.5;
      /* a low blue light behind the console, painted across the WHOLE canvas so no edge can read as a box (DJ) */
      var ggx=G.kx,ggy=G.mob?G.ky:G.ky-G.ih*.08,ggr=Math.max(w,h)*.8;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(30,96,156,"+(.55*e).toFixed(3)+")");ag.addColorStop(.3,"rgba(20,62,108,"+(.34*e).toFixed(3)+")");ag.addColorStop(.62,"rgba(14,38,68,"+(.14*e).toFixed(3)+")");ag.addColorStop(1,"rgba(11,26,47,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      /* the floor: a soft contact shadow under the casters, eased out over a long distance */
      c.save();c.translate(G.kx,fy-G.ih*.012);c.scale(1,.16);
      var fs=c.createRadialGradient(0,0,0,0,0,G.iw*.95);fs.addColorStop(0,"rgba(4,10,20,"+(.7*e).toFixed(3)+")");fs.addColorStop(.45,"rgba(4,10,20,"+(.32*e).toFixed(3)+")");fs.addColorStop(1,"rgba(4,10,20,0)");
      c.fillStyle=fs;c.fillRect(-G.iw*1.2,-G.iw*1.2,G.iw*2.4,G.iw*2.4);c.restore();
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.kx-G.iw*.62,0);[[0,.92],[.3,.8],[.55,.55],[.75,.26],[.9,.08],[1,0]].forEach(function(q){lv.addColorStop(q[0],"rgba(9,20,37,"+q[1]+")")});c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.5);[[0,.55],[.2,.36],[.4,.2],[.6,.09],[.8,.025],[1,0]].forEach(function(q){tv.addColorStop(q[0],"rgba(9,20,37,"+q[1]+")")});c.fillStyle=tv;c.fillRect(0,0,w,h*.5);
        var bv=c.createLinearGradient(0,h*.5,0,h);[[0,0],[.5,0],[.66,.04],[.8,.16],[.9,.36],[1,.72]].forEach(function(q){bv.addColorStop(q[0],"rgba(11,26,47,"+q[1]+")")});c.fillStyle=bv;c.fillRect(0,h*.5,w,h*.5+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.4);[[0,.5],[.25,.22],[.5,.06],[.75,.035],[1,0]].forEach(function(q){tv2.addColorStop(q[0],"rgba(9,20,37,"+q[1]+")")});c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.4);
        var mv=c.createLinearGradient(0,G.ky+G.ih*.5,0,G.bh);[[0,0],[.25,.06],[.5,.25],[.75,.6],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(11,26,47,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,G.ky+G.ih*.5,w,G.bh-G.ky-G.ih*.5+1);
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
