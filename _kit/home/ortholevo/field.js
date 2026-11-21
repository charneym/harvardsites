/* ================= HERO FIELD: a real photograph of the subject (HOME_BRIEF update 2026-11-20, option b). A shoulder X-ray
   (clavicle, acromion, glenoid, humeral head and upper arm), "X-ray of a human shoulder and upper arm" by Stefani Medina on Unsplash
   (https://unsplash.com/photos/x-ray-of-a-human-shoulder-and-upper-arm-cbdRcyFsCwI, Unsplash License): frozen shoulder is
   Ortholevo's lead indication. grade.py crops to the joint, sinks the rib cage, tones it from the page ink through the logo navy
   to bone and bakes a long eased alpha mask (no box edge, DJ/DP). The whole joint sits centred in the open area right of the text
   (~70% of the width), never upscaled, with a slow Ken Burns drift; the scrim lives only behind the text (DI/DO). On phones it
   sits in the top band and fades into the ink above the text (CW). No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.36,w*.86):h;
    return {mob:mob,side:side,cw:cw,U:U,bh:mob?U*1.06:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#07111c";c.fillRect(0,0,w,h);
    if(ok){
      var iw=img.naturalWidth,ih=img.naturalHeight,k=.5-.5*Math.cos(t*Math.PI*2/56),cx,cy,sc;
      if(!G.mob){var hT=Math.min(h*1.22,G.cw*.62/iw*ih);sc=Math.min(hT/ih,1);cx=G.side+G.cw*.72;cy=h*.53}
      else{sc=Math.min(G.bh*1.42/ih,w*1.4/iw);cx=w*.54;cy=G.bh*.63}
      sc*=(1+.03*k)*(1+.04*(1-e));
      var dw=iw*sc,dh=ih*sc,x=cx-dw*.42-k*dw*.01,y=cy-dh*.54+k*dh*.006-SP.v*h*.04;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      /* the photo is feathered into the ink already; the canvas adds a second feather beyond its edges and the text scrim */
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.62,0);lv.addColorStop(0.000,"rgba(7,17,28,0.800)");lv.addColorStop(0.111,"rgba(7,17,28,0.773)");lv.addColorStop(0.222,"rgba(7,17,28,0.699)");lv.addColorStop(0.333,"rgba(7,17,28,0.593)");lv.addColorStop(0.444,"rgba(7,17,28,0.466)");lv.addColorStop(0.556,"rgba(7,17,28,0.334)");lv.addColorStop(0.667,"rgba(7,17,28,0.207)");lv.addColorStop(0.778,"rgba(7,17,28,0.101)");lv.addColorStop(0.889,"rgba(7,17,28,0.027)");lv.addColorStop(1.000,"rgba(7,17,28,0.000)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.6,0,h);bv.addColorStop(0.000,"rgba(7,17,28,0.000)");bv.addColorStop(0.111,"rgba(7,17,28,0.029)");bv.addColorStop(0.222,"rgba(7,17,28,0.107)");bv.addColorStop(0.333,"rgba(7,17,28,0.220)");bv.addColorStop(0.444,"rgba(7,17,28,0.354)");bv.addColorStop(0.556,"rgba(7,17,28,0.496)");bv.addColorStop(0.667,"rgba(7,17,28,0.630)");bv.addColorStop(0.778,"rgba(7,17,28,0.743)");bv.addColorStop(0.889,"rgba(7,17,28,0.821)");bv.addColorStop(1.000,"rgba(7,17,28,0.850)");c.fillStyle=bv;c.fillRect(0,h*.6,w,h*.4+1);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.62,0,G.bh);mv.addColorStop(0.000,"rgba(7,17,28,0.000)");mv.addColorStop(0.111,"rgba(7,17,28,0.034)");mv.addColorStop(0.222,"rgba(7,17,28,0.126)");mv.addColorStop(0.333,"rgba(7,17,28,0.259)");mv.addColorStop(0.444,"rgba(7,17,28,0.417)");mv.addColorStop(0.556,"rgba(7,17,28,0.583)");mv.addColorStop(0.667,"rgba(7,17,28,0.741)");mv.addColorStop(0.778,"rgba(7,17,28,0.874)");mv.addColorStop(0.889,"rgba(7,17,28,0.966)");mv.addColorStop(1.000,"rgba(7,17,28,1.000)");c.fillStyle=mv;c.fillRect(0,G.bh*.62,w,G.bh*.38+1);
        c.fillStyle="#07111c";c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.mob?w/2:G.side+G.cw*.71,G.mob?G.bh*.6:h*.5]:[w/2,h/2]}};
})();
