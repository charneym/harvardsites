/* ================= HERO FIELD (HOME_BRIEF update, option c): a crafted render of Bandwidth10's own product, the seven-pin TO56
   tunable VCSEL package (steel cap with window and the HCG chip on its cooler inside, gold-plated header, seven gold pins), after the
   product photos on bandwidth10.com; rendered in Three.js (bandwidth10.render.html) with real alpha, so it sits on the page ink with
   no box edge (DP/DJ). The can sits right of ~62% on desktop under a deep ink wash over the headline side (DI); a slow float and
   push-in, no pointer motion (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0b0c0e",BR="11,12,14";var IW=1029,IH=1447;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1560:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.46,w*1.1):h;
    var ih=mob?U*.7:Math.min(h*.7,cw*.5*IH/IW),iw=ih*IW/IH;
    var kx=mob?w*.5:side+cw*.765,ky=mob?Math.max(U*.56,86+ih*.5):Math.max(h*.55,80+ih*.52);
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
      /* a faint warm halo behind the can (their red), long and eased so it never ends on a line */
      var hr=G.ih*.95,hg=c.createRadialGradient(G.kx,G.ky,0,G.kx,G.ky,hr);
      hg.addColorStop(0,"rgba(215,23,24,"+(.11*e).toFixed(3)+")");hg.addColorStop(.45,"rgba(215,23,24,"+(.045*e).toFixed(3)+")");hg.addColorStop(1,"rgba(215,23,24,0)");
      c.fillStyle=hg;c.fillRect(G.kx-hr,G.ky-hr,hr*2,hr*2);
      /* a slow float and push-in (~3% over ~36s) */
      var k=.5-.5*Math.cos(t*Math.PI*2/36),sc=(1+.03*k)*(1+.03*(1-e)),fy=Math.sin(t*Math.PI*2/14)*G.ih*.008;
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5+fy-SP.v*G.ih*.06;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet: a deep ink wash from the left, a soft top and base, all long eases */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba("+BR+",.96)");lv.addColorStop(.6,"rgba("+BR+",.82)");lv.addColorStop(.85,"rgba("+BR+",.35)");lv.addColorStop(1,"rgba("+BR+",0)");c.fillStyle=lv;c.fillRect(0,0,G.side+G.cw*.6+1,h);
        var tv=c.createLinearGradient(0,0,0,h*.24);tv.addColorStop(0,"rgba("+BR+",.6)");tv.addColorStop(1,"rgba("+BR+",0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.24);
        var bv=c.createLinearGradient(0,h*.64,0,h);bv.addColorStop(0,"rgba("+BR+",0)");bv.addColorStop(1,"rgba("+BR+",.9)");c.fillStyle=bv;c.fillRect(0,h*.64,w,h*.36+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.24);tv2.addColorStop(0,"rgba("+BR+",.6)");tv2.addColorStop(1,"rgba("+BR+",0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.24);
        var mv=c.createLinearGradient(0,G.bh*.82,0,G.bh);mv.addColorStop(0,"rgba("+BR+",0)");mv.addColorStop(1,"rgba("+BR+",1)");c.fillStyle=mv;c.fillRect(0,G.bh*.82,w,G.bh*.18+1);
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