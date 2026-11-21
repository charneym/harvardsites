/* ================= HERO FIELD: XN Health's own render of the airway, lungs and diaphragm (from xn-health.com, real alpha, graded toward
   the logo purple), so the subject sits on the ink with no box edge (DJ/DP). Placed in the open area right of the measured headline and
   lede (>=100px clear), whole and below the nav, never drawn above native size. Motion is the mechanism itself and nothing else (CZ):
   every ~6s a soft teal stimulus glows at the trachea, then the diaphragm draws the lungs down a little (a breath scaled from the
   larynx), and releases. On phones it sits in the top band below the nav and fades into the ink. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.46,w*1.0):h;
    var tr=0;try{var hh=document.getElementById("pageTitle"),ft=document.querySelector(".hero-foot .s"),ac=document.querySelector(".hero-foot .act");
      [hh,ft].forEach(function(el){if(!el)return;var tw=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),n;while((n=tw.nextNode())){if(!n.nodeValue.trim())continue;var rg=document.createRange();rg.selectNodeContents(n);var rs=rg.getClientRects();for(var i=0;i<rs.length;i++)if(rs[i].width)tr=Math.max(tr,rs[i].right)}});
      if(ac){var ra=ac.getBoundingClientRect();if(ra.width)tr=Math.max(tr,ra.right)}}catch(e){}
    if(!tr||tr>w*.7)tr=side+cw*.5;
    var L=tr+110,R=w-side,ox=Math.min((L+R)/2,w*.73),ow=2*Math.min(ox-L,R-ox);
    return {mob:mob,side:side,cw:cw,U:U,bh:mob?U*1.06:h,ox:ox,ow:ow};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;if(now-(G.at||0)>1500){G=geo();G.at=now}dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#0a1a1f";c.fillRect(0,0,w,h);
    if(ok){
      var iw=img.naturalWidth,ih=img.naturalHeight,cx,top,sc;
      /* the cycle: stimulus at the trachea (0-.25), diaphragm contracts (.15-.55), release (.55-1) */
      var ph=RM?.0:(t%6.4)/6.4,st=RM?0:Math.sin(Math.PI*Math.min(1,ph/.3)),br=RM?0:(ph<.18?0:ph<.5?sm((ph-.18)/.32):1-sm((ph-.5)/.45));
      if(!G.mob){var avH=h-92-56;sc=Math.min(G.ow*.9/iw,avH*.94/ih,1);cx=G.ox;top=92+(avH-ih*sc)/2}
      else{sc=Math.min(w*.8/iw,(G.bh-82)*.86/ih,1);cx=w*.5;top=74}
      sc*=(1+.03*(1-e));
      var dw=iw*sc,dh=ih*sc,x=cx-dw/2,y=top-SP.v*h*.04,sy=1+.022*br,sx=1+.008*br;
      /* a quiet purple glow behind the lungs, and the teal stimulus at the trachea */
      var mid=y+dh*.52,gl=c.createRadialGradient(cx,mid,0,cx,mid,Math.max(dw,dh)*.62);gl.addColorStop(0,"rgba(140,115,174,"+(.13*e)+")");gl.addColorStop(.6,"rgba(116,192,179,"+(.035*e)+")");gl.addColorStop(1,"rgba(10,26,31,0)");
      c.fillStyle=gl;c.fillRect(0,0,w,G.mob?G.bh:h);
      c.save();c.globalAlpha=e;c.translate(cx,y+dh*.03);c.scale(sx,sy);c.drawImage(img,-dw/2,-dh*.03,dw,dh);c.restore();
      if(st>0.001){var ty=y+dh*.2,sr=dw*.2,s1=c.createRadialGradient(cx,ty,0,cx,ty,sr);s1.addColorStop(0,"rgba(150,226,212,"+(.42*st*e)+")");s1.addColorStop(.35,"rgba(116,192,179,"+(.16*st*e)+")");s1.addColorStop(1,"rgba(116,192,179,0)");
        c.globalCompositeOperation="lighter";c.fillStyle=s1;c.fillRect(cx-sr,ty-sr,sr*2,sr*2);c.globalCompositeOperation="source-over"}
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,Math.max(G.side+G.cw*.5,G.ox-G.ow*.5),0);lv.addColorStop(0,"rgba(6,18,23,.6)");lv.addColorStop(.7,"rgba(6,18,23,.25)");lv.addColorStop(1,"rgba(6,18,23,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.6,0,h);bv.addColorStop(0,"rgba(10,26,31,0)");bv.addColorStop(1,"rgba(10,26,31,.7)");c.fillStyle=bv;c.fillRect(0,h*.6,w,h*.4);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.55,0,G.bh);mv.addColorStop(0,"rgba(10,26,31,0)");mv.addColorStop(1,"rgba(10,26,31,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.55,w,G.bh*.45+1);
        c.fillStyle="#0a1a1f";c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.mob?w/2:G.ox,G.mob?G.bh*.5:h*.5]:[w/2,h/2]}};
})();