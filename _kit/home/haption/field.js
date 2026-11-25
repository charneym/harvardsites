/* ================= HERO FIELD: Haption's own product photograph (haption.com asset d41ca38d, 859x1000 RGBA cut-out of
   the Virtuose 6D TAO force-feedback device; HOME_BRIEF update, option a: the firm's own real photography), graded to the
   palette (grade.py), composed on the navy ink through its real alpha, so there is no box edge (DP/DJ). The device stands
   whole in the open area right of the headline (~68% of the width, at least 100px clear of the H1), fully below the nav
   with headroom (DO/DQ); a long-eased blue glow behind it and a soft floor shadow keep its black base legible; the
   headline side stays quiet ink (DI). A very slow drift only, no pointer motion (CZ). On phones the device stands in a
   top band above the text. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#070d1b",IW=859,IH=1000;
  img.decoding="async";img.onload=function(){ok=true;IW=img.naturalWidth;IH=img.naturalHeight;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function textEnd(){var e=0;["#pageTitle",".hero .hero-foot .s"].forEach(function(s){var el=document.querySelector(s);if(!el)return;
    var r=document.createRange();r.selectNodeContents(el);var rs=r.getClientRects();for(var i=0;i<rs.length;i++)if(rs[i].width>0)e=Math.max(e,rs[i].right)});return e}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1560:1320))/2),cw=w-2*side,mob=w<861,NAV=mob?72:96;
    if(mob){
      var top=NAV+10,dh=Math.max(150,Math.min(IH,h*.38-top,w*.72)),dw=IW*dh/IH;
      return {mob:1,dw:dw,dh:dh,cx:w*.5,top:top,bh:top+dh+14};
    }
    var dh=Math.min(IH,(h-NAV)*.8,h*.74),dw=IW*dh/IH,te=textEnd()||w*.45;
    var cx=Math.max(side+cw*.68,te+100+dw/2);cx=Math.min(cx,w-side-dw/2);
    var top=NAV+Math.max(24,(h-NAV-dh)*.5);
    return {mob:0,dw:dw,dh:dh,cx:cx,top:top,bh:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  function band(g,stops,col){stops.forEach(function(q){g.addColorStop(q[0],"rgba("+col+","+q[1]+")")});return g}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok&&G){
      /* slow drift: ~1.5% breathing scale over 40s and a gentle float, plus a touch of scroll parallax */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.015*k)*(1+.02*(1-e)),fl=Math.sin(t*Math.PI*2/26)*3;
      var dw=G.dw*sc,dh=G.dh*sc,cx=G.cx,y=G.top-(dh-G.dh)*.5+fl-SP.v*G.dh*.06+(1-e)*14,x=cx-dw/2;
      /* glow behind the device: a long-eased radial wash in the logo blue, no edge (DP) */
      var gr=c.createRadialGradient(cx,y+dh*.46,0,cx,y+dh*.46,dh*.86);
      band(gr,[[0,.2],[.18,.16],[.36,.105],[.52,.06],[.68,.03],[.82,.012],[.93,.003],[1,0]],"32,87,175");c.globalAlpha=e;c.fillStyle=gr;c.fillRect(0,0,w,h);
      /* floor shadow under the base */
      c.save();c.translate(cx+dw*.04,y+dh*.985);c.scale(1,.13);var fs=c.createRadialGradient(0,0,0,0,0,dw*.5);
      band(fs,[[0,.55],[.4,.3],[.7,.1],[1,0]],"0,0,0");c.fillStyle=fs;c.fillRect(-dw*.6,-dw*.6,dw*1.2,dw*1.2);c.restore();
      c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(G.mob){
        /* phone band: below the device the ink takes over before the text */
        var mv=c.createLinearGradient(0,G.bh,0,G.bh+60);band(mv,[[0,0],[.4,.35],[1,1]],"7,13,27");c.fillStyle=mv;c.fillRect(0,G.bh,w,61);
        c.fillStyle=BG;c.fillRect(0,G.bh+60,w,h);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){setTimeout(function(){G=geo();if(!running)frame(true)},400)});
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.cx,G.top+G.dh*.5]:[w/2,h/2]}};
})();
