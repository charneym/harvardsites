/* ================= HERO FIELD: the firm's own product imagery (HOME_BRIEF update, option a): Kubanda's studio render of the CryoDuo
   cryotherapy system (control module with gauge, handpiece and probe), from their Products page, cut out on its real alpha channel in
   hero.webp, so there is no image rectangle at all (DP/DJ). It sits whole and centred in the open area right of the text (~69% of the
   width, DO), drawn at or below its native size, with a long-eased cool halo behind it so the black housing reads against the navy.
   It floats very slowly on its own, so no pointer response (CZ). On phones it sits in the top band, above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#08263f";var IW=1363,IH=1263;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var ih,iw,kx,ky,U=0;
    if(mob){U=h*.42;var top=84,bot=U-44;ih=Math.max(120,bot-top);iw=ih*IW/IH;if(iw>w*.8){iw=w*.8;ih=iw*IH/IW}kx=w*.5;ky=(top+bot)/2}
    else{ih=Math.min(h*.6,IH/(dpr>1?1.6:1),cw*.36*IH/IW);iw=ih*IW/IH;kx=side+cw*.71;ky=h*.52}
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  function halo(x,y,r,a){var g=c.createRadialGradient(x,y,0,x,y,r);for(var i=0;i<=12;i++){var s=i/12,v=Math.pow(1-s,2.2)*(1-s*s*.15);g.addColorStop(s,"rgba(67,180,227,"+(a*v).toFixed(4)+")")}c.fillStyle=g;c.fillRect(x-r,y-r,2*r,2*r)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a slow float: ~6px up and down over 14s, a breath of scale; the system stays on its mark */
      var k=Math.sin(t*Math.PI*2/14),sc=(1+.012*k)*(1+.04*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,cx=G.kx,cy=G.ky-k*6-SP.v*G.ih*.06;
      var R=Math.max(dw,dh)*(G.mob?.78:.9);
      c.globalAlpha=e;halo(cx+dw*.06,cy-dh*.04,R,G.mob?.2:.24);
      /* a soft floor light under the coil, eased out on every side */
      c.save();c.translate(cx,cy+dh*.47);c.scale(1,.16);halo(0,0,dw*.5,.14);c.restore();
      c.drawImage(img,cx-dw/2,cy-dh/2,dw,dh);c.globalAlpha=1;
      
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
