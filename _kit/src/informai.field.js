/* ================= HERO FIELD: a real photograph of the subject (HOME_BRIEF update 2026-11-20, option b). An axial brain MRI
   slice on a radiology workstation (Pexels photo 7089020, Pexels License), cleaned of the viewer's crosshair and on-screen text,
   and cut out along the outer scalp line with real alpha (dark pixels become transparent), so it sits on InformAI's navy ink with
   no box edge (DJ/DP). Graded cool toward the periwinkle of the InformAI logo, with its tonal depth kept. Placed in the open area
   right of the measured headline (>=120px clear), whole and below the nav; a slow drift and breathing scale, and a faint dose-like
   glow that pulses very slowly behind it; no pointer response (CZ). On phones it sits in the top band and fades into the ink. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var INK="#080b22";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?h*.4:h;
    var tr=0;try{var hh=document.getElementById("pageTitle"),ft=document.querySelector(".hero-foot .s");
      if(hh){var rg=document.createRange();rg.selectNodeContents(hh);tr=Math.max(tr,rg.getBoundingClientRect().right)}
      if(ft){var rg2=document.createRange();rg2.selectNodeContents(ft);tr=Math.max(tr,rg2.getBoundingClientRect().right)}}catch(e){}
    if(!tr||tr>w*.7)tr=side+cw*.5;
    var L=tr+130,R=w-side,ox=(L+R)/2,ow=R-L;
    return {mob:mob,side:side,cw:cw,U:U,bh:U,ox:ox,ow:ow};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function place(t,e){
    var iw=img.naturalWidth,ih=img.naturalHeight,k=.5-.5*Math.cos(t*Math.PI*2/48),cx,cy,sc;
    if(!G.mob){sc=Math.min(G.ow*.92/iw,(h-190)*.86/ih,1);cx=Math.min(G.ox,w*.715,G.ox-G.ow*.5+20+iw*sc*.5);cy=96+(h-96)*.5}
    else{sc=Math.min(w*.66/iw,(G.bh-76-44)/ih);cx=w*.5;cy=76+(G.bh-76-44)/2}
    sc*=(1+.03*k)*(1+.05*(1-e));
    return {k:k,cx:cx,cy:cy,dw:iw*sc,dh:ih*sc};
  }
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;if(now-(G.at||0)>1500){G=geo();G.at=now}dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=INK;c.fillRect(0,0,w,h);
    if(ok){
      var P=place(t,e),cx=P.cx,cy=P.cy,dw=P.dw,dh=P.dh,k=P.k;
      var x=cx-dw/2-k*dw*.01,y=cy-dh/2+k*dh*.008-SP.v*h*.04;
      /* a soft periwinkle halo behind the slice, and a slow warm "dose" glow at its centre */
      var R=Math.max(dw,dh)*.78,gl=c.createRadialGradient(cx,cy,0,cx,cy,R);
      gl.addColorStop(0,"rgba(127,143,244,"+(.16*e)+")");gl.addColorStop(.55,"rgba(90,104,214,"+(.06*e)+")");gl.addColorStop(1,"rgba(8,11,34,0)");
      c.fillStyle=gl;c.fillRect(0,0,w,G.mob?G.bh:h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      var pu=.5+.5*Math.sin(t*Math.PI*2/9),dx=x+dw*.43,dy=y+dh*.4,dr=dw*.2;
      var dg=c.createRadialGradient(dx,dy,0,dx,dy,dr);dg.addColorStop(0,"rgba(255,196,120,"+((.10+.06*pu)*e)+")");dg.addColorStop(.5,"rgba(240,140,134,"+((.05+.03*pu)*e)+")");dg.addColorStop(1,"rgba(240,140,134,0)");
      c.globalCompositeOperation="screen";c.fillStyle=dg;c.fillRect(dx-dr,dy-dr,dr*2,dr*2);c.globalCompositeOperation="source-over";
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,Math.max(G.side+G.cw*.48,G.ox-G.ow*.5),0);lv.addColorStop(0,"rgba(5,7,24,.72)");lv.addColorStop(.6,"rgba(5,7,24,.32)");lv.addColorStop(1,"rgba(5,7,24,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.62,0,h);bv.addColorStop(0,"rgba(8,11,34,0)");bv.addColorStop(1,"rgba(8,11,34,.7)");c.fillStyle=bv;c.fillRect(0,h*.62,w,h*.38);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.5,0,G.bh);mv.addColorStop(0,"rgba(8,11,34,0)");mv.addColorStop(.5,"rgba(8,11,34,.6)");mv.addColorStop(1,"rgba(8,11,34,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.5,w,G.bh*.5+1);
        c.fillStyle=INK;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},
    focus:function(){if(!G||!ok)return [w/2,h/2];var P=place(0,1);return [P.cx,P.cy]}};
})();
