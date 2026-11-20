/* ================= HERO FIELD: real photography (HOME_BRIEF update 2b): a surgical microscope on its boom arm under the
   theatre light in a dark operating room (Pexels photo 36101264, free licence, no attribution needed), graded by grade.py
   toward the InSight palette and baked to hero.webp. The photo is pre-feathered on all four edges into the page ink (DJ: no
   seam), sits right of ~52% at desktop widths, and the headline side carries a strong ink scrim (DI). A very slow Ken Burns
   breath; no pointer response (CZ). On phones it fills the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false,F=null;
  var BG="#0a1014",IR=1400/2100;
  img.decoding="async";img.onload=function(){feather();ok=true;if(!running)frame(true)};img.src="data:image/webp;base64,__HERO__";
  /* bake the feathered photo once: alpha ramps on every edge so no rectangle edge can show */
  function feather(){
    var W=img.naturalWidth,H=img.naturalHeight;F=document.createElement("canvas");F.width=W;F.height=H;var f=F.getContext("2d");
    f.drawImage(img,0,0);f.globalCompositeOperation="destination-in";
    var gx=f.createLinearGradient(0,0,W,0);gx.addColorStop(0,"rgba(0,0,0,0)");gx.addColorStop(.3,"rgba(0,0,0,1)");gx.addColorStop(.86,"rgba(0,0,0,1)");gx.addColorStop(1,"rgba(0,0,0,0)");
    f.fillStyle=gx;f.fillRect(0,0,W,H);
    var gy=f.createLinearGradient(0,0,0,H);gy.addColorStop(0,"rgba(0,0,0,0)");gy.addColorStop(.1,"rgba(0,0,0,1)");gy.addColorStop(.84,"rgba(0,0,0,1)");gy.addColorStop(1,"rgba(0,0,0,0)");
    f.fillStyle=gy;f.fillRect(0,0,W,H);f.globalCompositeOperation="source-over";
  }
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861,U=mob?Math.min(h*.45,w*1.1):h,ih,iw,cx,cy;
    if(!mob){ih=h*.92;iw=ih*IR;if(iw>cw*.56){iw=cw*.56;ih=iw/IR}cx=side+cw*.76;cy=Math.max(h*.5,ih*.5+h*.1)} /* QA: the surgical lamp at the photo top keeps ~10% headroom below the nav instead of running off the top */
    else{iw=w*1.12;ih=iw/IR;cx=w*.56;cy=(64+U)/2+ih*.25}
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,cx:cx,cy:cy,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow breath: push in ~4% toward the microscope head and drift a touch, over ~46s */
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=(1+.04*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,ax=.56,ay=.42,x=G.cx-dw*ax+(G.iw*(ax-.5)),y=G.cy-dh*ay+(G.ih*(ay-.5))-k*G.ih*.008-SP.v*G.ih*.05;
      c.globalAlpha=e*.94;c.drawImage(F,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet: an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(10,16,20,.97)");lv.addColorStop(.7,"rgba(10,16,20,.82)");lv.addColorStop(1,"rgba(10,16,20,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(10,16,20,.6)");tv.addColorStop(1,"rgba(10,16,20,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.72,0,h);bv.addColorStop(0,"rgba(10,16,20,0)");bv.addColorStop(1,"rgba(10,16,20,.85)");c.fillStyle=bv;c.fillRect(0,h*.72,w,h*.28+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.36);tv2.addColorStop(0,"rgba(10,16,20,.92)");tv2.addColorStop(1,"rgba(10,16,20,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.36);
        var mv=c.createLinearGradient(0,G.bh*.8,0,G.bh);mv.addColorStop(0,"rgba(10,16,20,0)");mv.addColorStop(1,"rgba(10,16,20,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.8,w,G.bh*.2+1);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.cx,G.cy]:[w/2,h/2]}};
})();
