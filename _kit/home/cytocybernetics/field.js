/* ================= HERO FIELD: a crafted render of the real product (HOME_BRIEF update, option c; coordinator review v2): the
   two-unit Cybercyte stack (CIM on V10) modelled after Cytocybernetics' own product photograph (cybercyte.html): satin-black lid,
   brushed-aluminium front panels with the CIM's ON/OFF toggle and LED, the V10's clamp-mode and power toggles, five ten-turn dials
   numbered 1-5 with a toggle under each, the wordmark printed small on the panels. render.py: perspective camera, shaded meshes
   for every knob and switch, panel art warped onto the faces, 2x supersampled, transparent ground (real alpha, no box edge, DJ/DP).
   Shown at or below native size, centred in the open area right of the copy at ~69% and kept >=100px clear of the headline (DO/DP),
   over a long, soft lavender glow; slow drift, no pointer response (CZ). On phones it sits in the top band. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function dh0(d){return 40+d/2}
  var TXc=0,TXt=-1e9;function TXR(){var n=performance.now();if(n-TXt>1000){TXt=n;try{var m=0,L=document.querySelectorAll(".hero-h,.hero-foot p");for(var i=0;i<L.length;i++){var tw=document.createTreeWalker(L[i],4),nd;while(nd=tw.nextNode()){if(!nd.nodeValue.trim())continue;var r=document.createRange();r.selectNodeContents(nd);var q=r.getClientRects();for(var j=0;j<q.length;j++)if(q[j].width>0)m=Math.max(m,q[j].right)}}TXc=m}catch(_){}}return TXc}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.46,w*1.0):h;
    return {mob:mob,side:side,cw:cw,U:U,bh:mob?U*1.06:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#120d2a";c.fillRect(0,0,w,h);
    if(ok){
      var iw=img.naturalWidth,ih=img.naturalHeight,k=.5-.5*Math.cos(t*Math.PI*2/56),cx,cy,sc;
      if(!G.mob){sc=Math.min(1,G.cw*.42/iw,(h-210)*.74/ih);var dw0=iw*sc,tr=TXR();cx=Math.max(w*.69,tr+100+dw0*.53);cx=Math.min(cx,w-G.side-dw0*.52);cy=Math.max(h*.54,96+dh0(ih*sc))}
      else{sc=Math.min(1,w*.8/iw,G.bh*.62/ih);cx=w*.5;cy=G.bh*.56}
      sc*=(1-.03*k)*(1+.04*(1-e));
      var dw=iw*sc,dh=ih*sc,x=cx-dw/2,y=cy-dh/2-k*dh*.012-SP.v*h*.04;
      /* a long, soft lavender glow behind the unit (eases out to nothing, never a line) */
      var R=Math.max(dw,dh)*1.25,gl=c.createRadialGradient(cx,cy,0,cx,cy,R);gl.addColorStop(0,"rgba(120,100,230,"+(.3*e)+")");gl.addColorStop(.35,"rgba(90,72,200,"+(.16*e)+")");gl.addColorStop(.7,"rgba(60,44,150,"+(.05*e)+")");gl.addColorStop(1,"rgba(18,13,42,0)");
      c.fillStyle=gl;c.fillRect(0,0,w,G.mob?G.bh:h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(11,8,28,.7)");lv.addColorStop(.6,"rgba(11,8,28,.35)");lv.addColorStop(1,"rgba(11,8,28,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(18,13,42,0)");bv.addColorStop(1,"rgba(18,13,42,.75)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.6,0,G.bh);mv.addColorStop(0,"rgba(18,13,42,0)");mv.addColorStop(1,"rgba(18,13,42,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.6,w,G.bh*.4+1);
        c.fillStyle="#120d2a";c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.mob?w/2:w*.69,G.mob?G.bh*.56:h*.54]:[w/2,h/2]}};
})();
