/* ================= HERO FIELD: the firm's own product photograph (HOME_BRIEF update 2026-11-20, option a). The myPatch®sl on its adult
   electrode, cut out with its real alpha channel from DMS-Service's product shot (dms-service.com/wp-content/uploads/2015/02/Adult_myPatch_sl.png),
   with a soft baked shadow, set on the page ink (#071a2c) so there is no box edge (DJ/DP). Placed right of the copy with an ink scrim over the
   left (DI); a soft cyan halo behind it; slow drift, no pointer response (CZ). On phones it sits in the top band and fades into the ink. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
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
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#071a2c";c.fillRect(0,0,w,h);
    if(ok){
      var iw=img.naturalWidth,ih=img.naturalHeight,k=.5-.5*Math.cos(t*Math.PI*2/56),cx,cy,sc;
      if(!G.mob){sc=Math.min(w*.37/iw,(h-110)*.84/ih);cx=w*.7;cy=110+(h-110)*.5}
      else{sc=Math.min(w*1.0/iw,(G.bh-64)*1.0/ih);cx=w*.5;cy=64+(G.bh-64)*.5}
      sc*=(1+.035*k)*(1+.05*(1-e));
      var dw=iw*sc,dh=ih*sc,x=cx-dw/2-k*dw*.012,y=cy-dh/2+k*dh*.008-SP.v*h*.04;
            var hr=Math.max(dw,dh)*.62,hg=c.createRadialGradient(cx,cy,0,cx,cy,hr);hg.addColorStop(0,"rgba(31,120,180,.30)");hg.addColorStop(.45,"rgba(20,80,130,.14)");hg.addColorStop(1,"rgba(7,26,44,0)");c.globalAlpha=e;c.fillStyle=hg;c.fillRect(cx-hr,cy-hr,hr*2,hr*2);
      c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(4,18,31,.72)");lv.addColorStop(.6,"rgba(4,18,31,.3)");lv.addColorStop(1,"rgba(4,18,31,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(7,26,44,0)");bv.addColorStop(1,"rgba(7,26,44,.6)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.6,0,G.bh);mv.addColorStop(0,"rgba(7,26,44,0)");mv.addColorStop(1,"rgba(7,26,44,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.6,w,G.bh*.4+1);
        c.fillStyle="#071a2c";c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.mob?w/2:w*.7,G.mob?64+(G.bh-64)*.5:110+(h-110)*.5]:[w/2,h/2]}};
})();
