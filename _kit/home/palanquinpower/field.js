/* ================= HERO FIELD: a crafted render of the place Palanquin Power works on (HOME_BRIEF update option c):
   one data-centre server rack, 3/4 view, open front with 1U/2U servers, GPU chassis and power shelves, status LEDs in the
   brand royal blue; rendered offline by render.js (three.js) to hero.webp with real alpha feathered into the page ink.
   It breathes in a very slow drift, with no pointer response (CZ). On phones it sits in the top band and fades into the
   ink above the text (CW). A generic rack, not the company's own hardware. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#070b18",AR=1;
  img.decoding="async";img.onload=function(){ok=true;AR=img.naturalWidth/img.naturalHeight;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.08):h;
    /* the receptor fills its render: whole, in the open area right of the text (DO/DP) */
    var iw=mob?Math.min(w*.56,(U-110)*AR):Math.min(cw*.34,(h-140)*.92*AR,600),ih=iw/AR;
    var kx=mob?w*.5:side+cw*.74,ky=mob?78+ih*.5:Math.max(h*.55,112+ih*.5);
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
      /* a very slow breath: grow ~3% and drift up a touch over ~40s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.03*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.012-SP.v*G.ih*.06;
      /* a low blue glow, painted across the WHOLE canvas (never inside the image rect alone), so no edge of the baked
         render can read as a pasted box (DJ) */
      var ggx=G.mob?w*.5:G.side+G.cw*.74,ggy=G.mob?G.bh*.42:h*.46,ggr=Math.max(w,h)*.78;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(40,66,160,"+(.42*e).toFixed(3)+")");ag.addColorStop(.55,"rgba(18,28,70,"+(.26*e).toFixed(3)+")");ag.addColorStop(1,"rgba(7,11,24,0)");
      /* the render first, then the glow screened over both, so its ink ground and the page ink stay identical (DP/DJ) */
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      c.globalCompositeOperation="screen";c.fillStyle=ag;c.fillRect(0,0,w,h);c.globalCompositeOperation="source-over";c.globalAlpha=e;
      /* a faint pale sheen breathing across the receptor */
      var pu=.5+.5*Math.sin(t*Math.PI*2/11),px=x+dw*(.4+.15*pu),py=y+dh*.4,pr=dw*.3;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(200,214,255,"+(.015+.02*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(200,214,255,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.66,0);lv.addColorStop(0,"rgba(4,6,15,.95)");lv.addColorStop(.62,"rgba(4,6,15,.6)");lv.addColorStop(1,"rgba(4,6,15,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.5);for(var k=0;k<=16;k++){var u=k/16,f=1-u;tv.addColorStop(u,"rgba(4,6,15,"+(.55*f*f*(3-2*f)).toFixed(4)+")")}c.fillStyle=tv;c.fillRect(0,0,w,h*.5);
        var bv=c.createLinearGradient(0,h*.5,0,h);for(var k=0;k<=16;k++){var u=k/16;bv.addColorStop(u,"rgba(7,11,24,"+(.85*u*u*(3-2*u)).toFixed(4)+")")}c.fillStyle=bv;c.fillRect(0,h*.5,w,h*.5+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.4);[[0,.5],[.25,.22],[.5,.06],[.75,.035],[1,0]].forEach(function(q){tv2.addColorStop(q[0],"rgba(4,6,15,"+q[1]+")")});c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.4);
        var mv=c.createLinearGradient(0,G.bh*.8,0,G.bh);[[0,0],[.25,.06],[.5,.25],[.75,.6],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(7,11,24,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,G.bh*.8,w,G.bh*.2+1);
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
