/* ================= HERO FIELD: real photography (HOME_BRIEF update 2026-11-20 part 2). Cancer cells under a confocal microscope: a real
   image from the National Cancer Institute on Unsplash (unsplash.com/photos/L7en7Lb-Ovc, Unsplash License; credited to Yves
   Pommier and Rozenn Josse, NCI: human colorectal cancer cells under a topoisomerase plus ATR inhibitor combination, nuclei
   blue, DNA damage red, replication foci green). A real cancer-cell image, not Toomer's own data; Toomer's site has only a
   stock microscope photo. Graded toward the cool blue palette. Replaces the earlier painted Lowcountry marsh scene.
   Graded offline toward the palette and drawn with a slow Ken Burns drift. The subject sits right of centre and an ink scrim
   keeps the headline side quiet (DI); the photo is full-bleed, so no edge falls inside the viewport (DJ). On phones it sits in
   the top band and fades into the ink. No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false,INK="#0e1418",S="8,12,15";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.jpg";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.46,w*1.0):h;
    return {mob:mob,side:side,cw:cw,U:U,bh:mob?U*1.06:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  function lg(x0,y0,x1,y1,st){var g=c.createLinearGradient(x0,y0,x1,y1);for(var i=0;i<st.length;i++)g.addColorStop(st[i][0],"rgba("+S+","+st[i][1]+")");return g}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=INK;c.fillRect(0,0,w,h);
    if(ok){
      var bw=w,bh=G.bh,iw=img.naturalWidth,ih=img.naturalHeight;
      /* Ken Burns: a very slow push in and drift, eased back and forth over ~50s */
      var k=.5-.5*Math.cos(t*Math.PI*2/50),sc=Math.max(bw/iw,bh/ih)*((G.mob?1.3:1.04)+.07*k)*(1+.04*(1-e));
      var dw=iw*sc,dh=ih*sc,fx=G.mob?.6:.6,fy=G.mob?.5:.5;
      var x=(bw-dw)*fx-k*bw*.012,y=(bh-dh)*fy-k*bh*.01;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      c.fillStyle="rgba("+S+",.12)";c.fillRect(0,0,w,bh);
      if(!G.mob){
        /* the headline side (0 to ~55%) stays deep ink; the photo opens up to the right */
        c.fillStyle=lg(0,0,G.side+G.cw*.74,0,[[0,.93],[.5,.86],[.78,.42],[1,0]]);c.fillRect(0,0,w,h);
        c.fillStyle=lg(0,0,0,h*.22,[[0,.55],[1,0]]);c.fillRect(0,0,w,h*.22);
        c.fillStyle=lg(0,h*.6,0,h,[[0,0],[1,.75]]);c.fillRect(0,h*.6,w,h*.4);
      }else{
        c.fillStyle=lg(0,0,0,bh*.3,[[0,.6],[1,0]]);c.fillRect(0,0,w,bh*.3);
        c.fillStyle=lg(0,bh*.5,0,bh,[[0,0],[1,1]]);c.fillRect(0,bh*.5,w,bh*.5+1);
        c.fillStyle=INK;c.fillRect(0,bh,w,h-bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[w*.68,G.bh*.5]:[w/2,h/2]}};
})();
