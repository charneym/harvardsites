/* ================= HERO FIELD: Rekovar's own render of the NeoMonki infant wristband (rekovar.com, real alpha, graded a touch cooler
   toward the logo teal), so the subject sits on the ink with no box edge (DJ/DP). Placed whole in the open area right of the measured
   headline and lede (>=110px clear), below the nav, never drawn above native size. Motion is quiet and its own (CZ): the band floats
   a few pixels on a slow breath, over a soft teal halo and a contact shadow. On phones it sits in the top band below the nav and
   fades into the ink. ================= */
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
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#0a1c1a";c.fillRect(0,0,w,h);
    if(ok){
      var iw=img.naturalWidth,ih=img.naturalHeight,cx,top,sc;
      var fl=RM?0:Math.sin(t*2*Math.PI/7.5),fl2=RM?0:Math.sin(t*2*Math.PI/11+1.3);
      if(!G.mob){var avH=h-96-64;sc=Math.min(G.ow*.92/iw,avH*.74/ih,1);cx=G.ox;top=96+(avH-ih*sc)/2}
      else{sc=Math.min(w*.7/iw,(G.bh-104)*.8/ih,1);cx=w*.5;top=98}
      sc*=(1+.03*(1-e))*(1+.006*fl2);
      var dw=iw*sc,dh=ih*sc,x=cx-dw/2,y=top-SP.v*h*.04+fl*dh*.012;
      /* a soft teal halo behind the band, and its contact shadow on the ink */
      var mid=y+dh*.5,gl=c.createRadialGradient(cx,mid,0,cx,mid,Math.max(dw,dh)*.72);gl.addColorStop(0,"rgba(26,185,160,"+(.16*e)+")");gl.addColorStop(.55,"rgba(168,200,60,"+(.03*e)+")");gl.addColorStop(1,"rgba(10,28,26,0)");
      c.fillStyle=gl;c.fillRect(0,0,w,G.mob?G.bh:h);
      var sy0=top+dh*.97,sh=c.createRadialGradient(cx,sy0,0,cx,sy0,dw*.5);sh.addColorStop(0,"rgba(2,8,7,"+(.55*e*(1-.25*(fl+1)/2))+")");sh.addColorStop(1,"rgba(2,8,7,0)");
      c.save();c.translate(0,sy0);c.scale(1,.16);c.translate(0,-sy0);c.fillStyle=sh;c.fillRect(cx-dw*.5,sy0-dw*.5,dw,dw);c.restore();
      c.save();c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.restore();
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,Math.max(G.side+G.cw*.5,G.ox-G.ow*.5),0);lv.addColorStop(0,"rgba(6,19,17,.6)");lv.addColorStop(.7,"rgba(6,19,17,.25)");lv.addColorStop(1,"rgba(6,19,17,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.6,0,h);bv.addColorStop(0,"rgba(10,28,26,0)");bv.addColorStop(1,"rgba(10,28,26,.7)");c.fillStyle=bv;c.fillRect(0,h*.6,w,h*.4);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.55,0,G.bh);mv.addColorStop(0,"rgba(10,28,26,0)");mv.addColorStop(1,"rgba(10,28,26,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.55,w,G.bh*.45+1);
        c.fillStyle="#0a1c1a";c.fillRect(0,G.bh,w,h-G.bh+1);
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