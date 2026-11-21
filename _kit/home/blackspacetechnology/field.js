/* ================= HERO FIELD: a real photograph of the subject (HOME_BRIEF update 2026-11-20, option b). A slit lamp biomicroscope
   against a warm rust wall (Pexels photo 5996693, Pexels License), the instrument SIGHT-AI makes portable. Graded darker toward the
   edges and given real alpha on every side, so the lit wall falls off into the near-black ink like a spotlight (no box edge, DJ/DP),
   over a soft warm glow. Placed in the open area right of the measured headline (>=110px clear), whole and below the nav, with a
   slow drift and breathing scale, no pointer response (CZ). On phones it sits in the top band below the nav and fades into the ink. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  /* subject box inside the photo (fractions): eyepiece 0.33 to stand 0.88, cable top 0.13, eyepiece axis 0.52 */
  var S={l:.33,r:.88,cx:.6,top:.13,ax:.52};
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.46,w*1.0):h;
    var tr=0;try{[document.getElementById("pageTitle"),document.querySelector(".hero-foot .s"),document.querySelector(".hero-foot .act")].forEach(function(el){if(!el)return;
      var tw=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),n;while((n=tw.nextNode())){if(!n.textContent.trim())continue;var rg=document.createRange();rg.selectNodeContents(n);var rr=rg.getBoundingClientRect();if(rr.width)tr=Math.max(tr,rr.right)}
      $$(".btn",el).forEach(function(bt){tr=Math.max(tr,bt.getBoundingClientRect().right)})})}catch(e){}
    if(!tr||tr>w*.7)tr=side+cw*.5;
    var L=tr+110,R=w-side*.6;
    return {mob:mob,side:side,cw:cw,U:U,bh:mob?U*1.06:h,L:L,R:R};
  }
  function place(){
    var iw=img.naturalWidth,ih=img.naturalHeight,ar=iw/ih,W,cx,y0;
    if(!G.mob){
      /* the photo's right edge always runs off the viewport, so only its long left, top and bottom fades are ever seen */
      W=Math.min(ar*(h-90)*1.02,iw);cx=Math.min(Math.max((G.L+G.R)/2,w*.6,w+12-(1-S.cx)*W),w*.75);
      W=Math.min(W,(cx-G.L)/(S.cx-S.l),(G.R+w*.02-cx)/(S.r-S.cx));
      if(cx+(1-S.cx)*W<w+8)cx=Math.min(w+12-(1-S.cx)*W,w*.75);
      var H=W/ar;y0=Math.max(80-S.top*H+40,h*.56-S.ax*H);
    }else{
      W=Math.min(w*.88/(S.r-S.l),(G.bh-70)/.86*ar);cx=w*.5+W*.02;var H2=W/ar;y0=74-S.top*H2+26;
    }
    return {W:W,H:W/ar,x:cx-S.cx*W,y:y0,cx:cx};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;if(now-(G.at||0)>1500){G=geo();G.at=now}dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#0c0a09";c.fillRect(0,0,w,h);
    if(ok){
      var P=place(),k=.5-.5*Math.cos(t*Math.PI*2/60),sc=(1+.025*k)*(1+.04*(1-e));
      var dw=P.W*sc,dh=P.H*sc,ax=P.cx,ay=P.y+P.H*S.ax;
      var x=ax-(ax-P.x)*sc-k*dw*.006,y=ay-(ay-P.y)*sc+k*dh*.005-SP.v*h*.04;
      /* the warm light on the wall, spilling a little beyond the photograph and falling off into the ink */
      var gx=x+dw*.62,gy=y+dh*.6,gr=Math.max(dw,dh)*1.0;
      var gl=c.createRadialGradient(gx,gy,0,gx,gy,gr);gl.addColorStop(0,"rgba(120,44,20,"+(.34*e)+")");gl.addColorStop(.5,"rgba(70,26,12,"+(.18*e)+")");gl.addColorStop(1,"rgba(12,10,9,0)");
      c.fillStyle=gl;c.fillRect(0,0,w,G.mob?G.bh:h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,Math.max(G.L,w*.42),0);lv.addColorStop(0,"rgba(7,6,5,.82)");lv.addColorStop(.62,"rgba(7,6,5,.45)");lv.addColorStop(1,"rgba(7,6,5,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.62,0,h);bv.addColorStop(0,"rgba(12,10,9,0)");bv.addColorStop(1,"rgba(12,10,9,.8)");c.fillStyle=bv;c.fillRect(0,h*.62,w,h*.38);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.55,0,G.bh);mv.addColorStop(0,"rgba(12,10,9,0)");mv.addColorStop(1,"rgba(12,10,9,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.55,w,G.bh*.45+1);
        c.fillStyle="#0c0a09";c.fillRect(0,G.bh,w,h-G.bh+1);
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
    focus:function(){if(!G||!ok)return [w/2,h/2];var P=place();return [P.cx,P.y+P.H*S.ax]}};
})();
