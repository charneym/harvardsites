/* ================= HERO FIELD: a real photograph (HOME_BRIEF update, option b): a person in a VR headset, in profile, the
   headset's lens lit warm (Unsplash photo 5e27fe3f6b71, source URL in _kit/dossiers/viatservices.md; Unsplash License). Graded in hero.webp to the
   site's navy ink (the photo's own blue ground is pulled down to #0c1326, mild desaturation, the warm lens glow kept, which is
   VIAT's orange), with a long elliptical feather to the ink so no edge shows (DJ, DP). The head sits centred in the open area
   right of the text (~70% of the width) on desktop under an ink wash over the headline side (DI, DO); a very slow Ken Burns
   drift. It moves on its own, so no pointer response (CZ). On phones it sits in the top band and fades into the ink above
   the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0c1326",RGB="12,19,38";var IW=1680,IH=1398,EX=.57,EY=.47;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.02):h;
    var ih,iw;
    if(mob){iw=w*1.25;ih=iw*IH/IW;if(ih>U*1.15){ih=U*1.15;iw=ih*IW/IH}}
    else{ih=Math.min(h*.92,cw*.48*IH/IW*1.18);iw=ih*(IW/IH);if(ih>IH){ih=IH;iw=IW}}
    var kx=mob?w*.5:side+cw*.75,ky=mob?U*.56:h*.5;
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  function lg(x0,y0,x1,y1,stops){var g=c.createLinearGradient(x0,y0,x1,y1);stops.forEach(function(s){g.addColorStop(s[0],"rgba("+RGB+","+s[1]+")")});return g}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow drift: push in ~3% over ~44s and back, the head kept on its mark */
      var k=.5-.5*Math.cos(t*Math.PI*2/44),sc=(1+.03*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*EX+k*G.iw*.006,y=G.ky-dh*EY-SP.v*G.ih*.05;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      /* the photo already feathers to the ink inside its own frame; these close any remaining edge (DJ) */
      if(x>0){c.fillStyle=BG;c.fillRect(0,0,Math.ceil(x)+1,h)}
      var xr=x+dw;if(xr<w){c.fillStyle=BG;c.fillRect(Math.floor(xr)-1,0,w-xr+2,h)}
      if(y>0){c.fillStyle=BG;c.fillRect(0,0,w,Math.ceil(y)+1)}
      var yb=y+dh;if(yb<h){c.fillStyle=BG;c.fillRect(0,Math.floor(yb)-1,w,h-yb+2)}
      var rw=Math.max(80,w*.08);c.fillStyle=lg(w-rw,0,w,0,[[0,0],[1,.85]]);c.fillRect(w-rw,0,rw+1,h);
      if(!G.mob){
        /* the headline side stays quiet: a deep ink wash from the left, a soft top and base */
        c.fillStyle=lg(0,0,G.side+G.cw*.56,0,[[0,1],[.6,.92],[.85,.4],[1,0]]);c.fillRect(0,0,w,h);
        c.fillStyle=lg(0,0,0,h*.2,[[0,.7],[1,0]]);c.fillRect(0,0,w,h*.2);
        c.fillStyle=lg(0,h*.7,0,h,[[0,0],[1,.92]]);c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        c.fillStyle=lg(0,0,0,G.bh*.24,[[0,.5],[1,0]]);c.fillRect(0,0,w,G.bh*.28);
        c.fillStyle=lg(0,G.bh*.68,0,G.bh,[[0,0],[1,1]]);c.fillRect(0,G.bh*.68,w,G.bh*.32+1);
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
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();
