/* ================= HERO FIELD: GetSet Surgical's own product photography (HOME_BRIEF update 2a): the GoLIF! procedure kit,
   a lime Good to Go! box, as rendered on getsetsurgical.com (img/GoLif_Box_Lif_optimized.png, real alpha). One calm object,
   whole, in the open area right of the text (DO/DP/DS); it rests on a soft contact shadow with a faint lime glow from the
   brand green behind it, and breathes in a very slow drift with no pointer response. On phones it sits in the top band
   above the text and fades into the ink. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#1a1e1d",AR=2;
  img.decoding="async";img.onload=function(){ok=true;AR=img.naturalWidth/img.naturalHeight;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.46,w*1.0):h;
    var iw=mob?Math.min(w*.8,(U-140)*AR):Math.min(cw*.44,h*.5*AR,780),ih=iw/AR;
    var kx=mob?w*.5:side+cw*.745,ky=mob?Math.max(96+ih*.62,U*.5+8):Math.max(h*.53,120+ih*.5);
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
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.025*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.015-SP.v*G.ih*.06;
      /* a faint lime glow painted across the WHOLE canvas (never inside the image rect alone), so no box edge can read (DJ) */
      var ggr=Math.max(w,h)*.7;
      var ag=c.createRadialGradient(G.kx,G.ky,0,G.kx,G.ky,ggr);
      ag.addColorStop(0,"rgba(110,160,60,"+(.2*e).toFixed(3)+")");ag.addColorStop(.45,"rgba(60,86,40,"+(.12*e).toFixed(3)+")");ag.addColorStop(1,"rgba(26,30,29,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      /* a soft contact shadow under the box */
      c.save();c.globalAlpha=.75*e;c.translate(G.kx,y+dh*.86);c.scale(1,.16);
      var sg=c.createRadialGradient(0,0,0,0,0,dw*.56);sg.addColorStop(0,"rgba(6,8,7,.85)");sg.addColorStop(.6,"rgba(6,8,7,.35)");sg.addColorStop(1,"rgba(6,8,7,0)");
      c.fillStyle=sg;c.fillRect(-dw,-dw,dw*2,dw*2);c.restore();
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(18,21,20,.9)");lv.addColorStop(.6,"rgba(18,21,20,.5)");lv.addColorStop(1,"rgba(18,21,20,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.5);[[0,.5],[.2,.32],[.4,.17],[.6,.07],[.8,.02],[1,0]].forEach(function(q){tv.addColorStop(q[0],"rgba(18,21,20,"+q[1]+")")});c.fillStyle=tv;c.fillRect(0,0,w,h*.5);
        var bv=c.createLinearGradient(0,h*.5,0,h);[[0,0],[.2,.02],[.4,.08],[.6,.2],[.8,.42],[1,.8]].forEach(function(q){bv.addColorStop(q[0],"rgba(26,30,29,"+q[1]+")")});c.fillStyle=bv;c.fillRect(0,h*.5,w,h*.5+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.4);[[0,.5],[.25,.22],[.5,.06],[.75,.02],[1,0]].forEach(function(q){tv2.addColorStop(q[0],"rgba(18,21,20,"+q[1]+")")});c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.4);
        var mv=c.createLinearGradient(0,G.bh*.8,0,G.bh);[[0,0],[.25,.06],[.5,.25],[.75,.6],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(26,30,29,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,G.bh*.8,w,G.bh*.2+1);
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
