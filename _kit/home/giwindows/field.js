/* ================= HERO FIELD: a crafted render of the product (HOME_BRIEF update option c, PRINCIPLES DS): one Flexagon self-forming
   magnet, eight titanium segments linked into an octagon (render.js -> hero.webp, real alpha, DJ/DP). Centred in the open area right of
   the copy (~62-75% width, DO), ink scrim only behind the text (DI); slow drift, no pointer response (CZ). On phones it sits in the top band. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  var TR_=0,trN=0;function textR(){if(trN--<=0||!TR_){trN=40;var m=0;["#hero .hero-h","#hero .s","#hero .eyebrow"].forEach(function(q){var el=document.querySelector(q);if(!el)return;var tw=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),nd,r=document.createRange();while((nd=tw.nextNode())){if(!nd.nodeValue.trim())continue;r.selectNodeContents(nd);var b=r.getBoundingClientRect();if(b.width&&b.right>m)m=b.right}});if(m)TR_=m}return TR_||w*.5}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
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
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#0b0b0c";c.fillRect(0,0,w,h);
    if(ok){
      var iw=img.naturalWidth,ih=img.naturalHeight,k=.5-.5*Math.cos(t*Math.PI*2/48),cx,cy,sc;
      if(!G.mob){var tr=textR(),a0=tr+120,a1=w-G.side;cx=Math.max((a0+a1)/2,w*.62);cy=75+(h-75)*.49;sc=Math.min(G.cw*.47/iw,(h-200)*.8/ih,.62,Math.max(60,(a1-a0))/(iw*1.08),Math.max(60,2*(cx-a0))/(iw*1.08))}
      else{sc=Math.min(w*.8/iw,G.bh*.7/ih,.5);cx=w*.5;cy=G.bh*.56}
      sc*=(1+.035*k)*(1+.05*(1-e));
      var dw=iw*sc,dh=ih*sc,x=cx-dw/2-k*dw*.012,y=cy-dh/2+k*dh*.008-SP.v*h*.04;
      /* a faint warm glow behind the magnet */
      var gl=c.createRadialGradient(cx,cy,0,cx,cy,Math.max(dw,dh)*.72);gl.addColorStop(0,"rgba(239,205,46,"+(.07*e)+")");gl.addColorStop(.6,"rgba(242,242,240,"+(.025*e)+")");gl.addColorStop(1,"rgba(11,11,12,0)");
      c.fillStyle=gl;c.fillRect(0,0,w,G.mob?G.bh:h);
      c.globalAlpha=.97*e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(6,6,7,.7)");lv.addColorStop(.6,"rgba(6,6,7,.35)");lv.addColorStop(1,"rgba(6,6,7,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(11,11,12,0)");bv.addColorStop(1,"rgba(11,11,12,.75)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.6,0,G.bh);mv.addColorStop(0,"rgba(11,11,12,0)");mv.addColorStop(1,"rgba(11,11,12,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.6,w,G.bh*.4+1);
        c.fillStyle="#0b0b0c";c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.mob?w/2:Math.max((textR()+120+w-G.side)/2,w*.62),G.mob?G.bh*.58:75+(h-75)*.49]:[w/2,h/2]}};
})();
