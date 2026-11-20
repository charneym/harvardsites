/* ================= HERO FIELD: a real photograph of the subject (HOME_BRIEF update 2026-11-20, option b). A thin stream of tap
   water filling a glass, by Eva Kristensen on Unsplash (https://unsplash.com/photos/water-pouring-into-glass-with-bubbles-Ir9g382pfUs,
   Unsplash License). Graded a touch toward the logo teal #388baa and feathered offline into the page ink (#0b1319) on every edge,
   so it never shows a seam (DJ); set right of centre with a slow Ken Burns drift. Nothing bright sits behind the H1 (DI).
   On phones it sits in the top band and fades into the ink. No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
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
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#0b1319";c.fillRect(0,0,w,h);
    if(ok){
      var iw=img.naturalWidth,ih=img.naturalHeight,k=.5-.5*Math.cos(t*Math.PI*2/56),cx,cy,sc;
      if(!G.mob){sc=Math.max(h*1.06/ih,G.cw*.5/iw);cx=G.side+G.cw*.74;cy=h*.5}
      else{sc=G.bh*1.5/ih;cx=w*.5;cy=G.bh*.96-ih*sc*.42}
      sc*=(1+.03*k)*(1+.04*(1-e));
      var dw=iw*sc,dh=ih*sc,x=cx-dw/2-k*dw*.01,y=cy-dh/2+k*dh*.006-SP.v*h*.04;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      /* the photo is feathered into the ink already; the canvas adds a second feather beyond its edges and the text scrim */
      var fe=c.createLinearGradient(x,0,x+dw*.36,0);fe.addColorStop(0,"rgba(11,19,25,1)");fe.addColorStop(1,"rgba(11,19,25,0)");c.fillStyle=fe;c.fillRect(x-1,0,dw*.36+1,h);
      c.fillStyle="#0b1319";c.fillRect(0,0,Math.max(0,x),h);if(x+dw<w)c.fillRect(x+dw-1,0,w-x-dw+1,h);
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.62,0);lv.addColorStop(0,"rgba(7,13,17,.72)");lv.addColorStop(.7,"rgba(7,13,17,.38)");lv.addColorStop(1,"rgba(7,13,17,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.72,0,h);bv.addColorStop(0,"rgba(11,19,25,0)");bv.addColorStop(1,"rgba(11,19,25,.8)");c.fillStyle=bv;c.fillRect(0,h*.72,w,h*.28);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.55,0,G.bh);mv.addColorStop(0,"rgba(11,19,25,0)");mv.addColorStop(1,"rgba(11,19,25,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.55,w,G.bh*.45+1);
        c.fillStyle="#0b1319";c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.mob?w/2:G.side+G.cw*.74,G.mob?G.bh*.6:h*.5]:[w/2,h/2]}};
})();
