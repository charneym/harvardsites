/* ================= HERO FIELD: a real photograph of a North Jutland wood at golden hour: low sun across moss and a
   footpath between the trunks at Hals, in Aalborg Municipality, Stenseminde's home ground (Aleksandra Kovacic,
   unsplash.com/photos/tH75PVj1i2c, Unsplash License; source recorded in the dossier). Graded at load toward the logo's
   ink and the wreath's olive gold, drawn cover-fit with a slow Ken Burns drift and a soft breathing of the low sun.
   No pointer response (CZ). On phones the photo is a band above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,IMG=null,oPh=null,oGrain=null;
  /* focal point in the photo (fractions): where the path meets the sunlit moss */
  var LAMP=[.52,.62],FX=.6;
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var band=mob?Math.min(h*.46,w*1.05):h;return {mob:mob,side:side,cw:cw,band:band}}
  function mk(W,H){var o=document.createElement("canvas");o.width=Math.max(1,Math.round(W));o.height=Math.max(1,Math.round(H));return [o,o.getContext("2d")]}
  function grade(){
    /* one graded copy: a touch less saturated, greens pulled toward the wreath's olive, shadows toward the logo's ink */
    var iw=IMG.naturalWidth,ih=IMG.naturalHeight,A=mk(iw,ih),g=A[1];
    g.filter="saturate(.8) contrast(1.05) brightness(.92)";g.drawImage(IMG,0,0);g.filter="none";
    g.globalCompositeOperation="soft-light";var wm=g.createLinearGradient(0,0,0,ih);wm.addColorStop(0,"rgba(40,42,30,.45)");wm.addColorStop(.6,"rgba(205,191,136,.32)");wm.addColorStop(1,"rgba(20,21,15,.6)");g.fillStyle=wm;g.fillRect(0,0,iw,ih);
    g.globalCompositeOperation="multiply";g.fillStyle="rgba(226,218,196,1)";g.fillRect(0,0,iw,ih);
    g.globalCompositeOperation="source-over";oPh=A[0];
  }
  function build(){
    var Gr=mk(w*dpr,h*dpr),gg=Gr[1],Rn=rng(97);oGrain=Gr[0];var n=Math.round(w*h/(G.mob?60:40));gg.scale(dpr,dpr);
    for(var z=0;z<n;z++){var v=Rn();gg.fillStyle=v>.5?"rgba(255,248,230,.03)":"rgba(0,0,0,.045)";gg.fillRect(Rn()*w,Rn()*h,1,1)}
  }
  function place(t){
    /* cover-fit into the hero (desktop) or the top band (phones), with a slow drift and zoom */
    var iw=oPh.width,ih=oPh.height,W=w,H=G.band;
    var k=Math.max(W/iw,H/ih)*(1.06+.035*Math.sin(t*.05)),dw=iw*k,dh=ih*k;
    var fx=G.mob?.66:FX,dx=Math.min(0,Math.max(W-dw,W*(G.mob?.5:.78)-fx*dw))+Math.sin(t*.037)*W*.008,dy=Math.min(0,Math.max(H-dh,(H-dh)*.55))+Math.cos(t*.031)*H*.006;
    return [dx,dy,dw,dh];
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?6:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.globalAlpha=1;c.fillStyle="#14150f";c.fillRect(0,0,w,h);
    if(oPh){var P=place(t);c.globalAlpha=e;c.drawImage(oPh,P[0],P[1],P[2],P[3]);
      /* the low sun, breathing softly through the trunks (upper right of the frame) */
      var sx=P[0]+.78*P[2],sy=P[1]+.12*P[3],R=Math.max(w,G.band)*.55,fl=.8+.2*Math.sin(t*.35);
      c.globalCompositeOperation="lighter";var lg=c.createRadialGradient(sx,sy,0,sx,sy,R);lg.addColorStop(0,"rgba(255,232,170,"+(.16*fl).toFixed(3)+")");lg.addColorStop(.4,"rgba(205,191,136,"+(.06*fl).toFixed(3)+")");lg.addColorStop(1,"rgba(205,191,136,0)");
      c.fillStyle=lg;c.fillRect(0,0,w,G.mob?G.band:h);c.globalCompositeOperation="source-over";
      c.globalAlpha=e*.9;c.drawImage(oGrain,0,0,w,h);c.globalAlpha=e;
      if(!G.mob){var lv=c.createLinearGradient(0,0,G.side+G.cw*.66,0);lv.addColorStop(0,"rgba(20,21,15,.78)");lv.addColorStop(.55,"rgba(20,21,15,.45)");lv.addColorStop(1,"rgba(20,21,15,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(20,21,15,.5)");tv.addColorStop(1,"rgba(20,21,15,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(20,21,15,0)");bv.addColorStop(1,"rgba(20,21,15,.75)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3)}
      else{var B=G.band,tv2=c.createLinearGradient(0,0,0,B*.25);tv2.addColorStop(0,"rgba(20,21,15,.55)");tv2.addColorStop(1,"rgba(20,21,15,0)");c.fillStyle=tv2;c.fillRect(0,0,w,B*.25);
        var mv=c.createLinearGradient(0,B*.68,0,B);mv.addColorStop(0,"rgba(20,21,15,0)");mv.addColorStop(1,"rgba(20,21,15,1)");c.fillStyle=mv;c.fillRect(0,B*.68,w,B*.32+1);c.fillStyle="#14150f";c.fillRect(0,B,w,h-B)}
      c.globalAlpha=1;
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  IMG=new Image();IMG.decoding="async";IMG.onload=function(){grade();frame(true)};IMG.src="img/hero.jpg";
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},
    focus:function(){if(!oPh||!G)return [w/2,h/2];var P=place(0);return [P[0]+LAMP[0]*P[2],P[1]+.45*P[3]]}};
})();
