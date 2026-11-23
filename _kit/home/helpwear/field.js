/* ================= HERO FIELD: HelpWear's own product render of the HeartWatch (helpwear.ca hero-image.png, 2024), the
   armband ECG monitor, cut out on real alpha (the baked-in ECG line removed) and shown at or below its native 566px.
   It sits whole in the open area right of the text on a deep navy ink, lit by a soft glow in the logo cyan, with a faint
   ECG trace sweeping slowly behind it, as on a bedside monitor. The art moves on its own, so no pointer response (CZ).
   On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#06192b",AR=566/588;
  img.decoding="async";img.onload=function(){ok=true;AR=img.naturalWidth/img.naturalHeight;G=geo();if(!running)frame(true)};img.src="device.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* one PQRST complex, unit width, baseline 0, up negative */
  function ecg(u){u=u-Math.floor(u);
    if(u<.1)return 0;
    if(u<.2){var k=(u-.1)/.1;return -.09*Math.sin(k*Math.PI)}
    if(u<.26)return 0;
    if(u<.29)return .12*((u-.26)/.03);
    if(u<.33)return .12-1.12*((u-.29)/.04);
    if(u<.37)return -1+1.32*((u-.33)/.04);
    if(u<.4)return .32-.32*((u-.37)/.03);
    if(u<.52)return 0;
    if(u<.7){var k2=(u-.52)/.18;return -.2*Math.sin(k2*Math.PI)}
    return 0}
  function geo(){
    var mw=w>=1800?1560:1320,side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-mw)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.max(h*.44,330):h;
    var iw=mob?Math.min(w*.64,(U-112)*AR,566):Math.min(cw*.34,h*.6*AR,566),ih=iw/AR;
    var kx=mob?w*.5:side+cw*.71,ky=mob?86+ih*.5:Math.max(h*.54,120+ih*.5);
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function trace(t,e){
    /* a faint monitor trace through the device's middle, from the open area to the right edge, sweeping left to right */
    var x0=G.mob?0:G.side+G.cw*.47,x1=w,y0=G.ky+G.ih*.04,amp=G.ih*.2,per=G.iw*.62,span=x1-x0;
    var head=x0+((RM?.72:(t/7)%1))*span*1.15;
    c.lineWidth=1.4;c.lineJoin="round";c.lineCap="round";
    var step=2,px=null,py=null;
    for(var x=x0;x<=x1;x+=step){
      var y=y0+amp*ecg((x-x0)/per+.15);
      if(px!==null){
        var dx=head-x;var a=dx<0?(dx>-span*.15?0:.0):Math.max(0,1-dx/(span*.9));
        if(dx<0)a=0;
        var fade=G.mob?1:sm((x-x0)/(G.cw*.12));
        var al=(.08+.36*a*a)*fade*e;
        if(al>.004){c.strokeStyle="rgba(92,196,239,"+al.toFixed(3)+")";c.beginPath();c.moveTo(px,py);c.lineTo(x,y);c.stroke()}
      }
      px=x;py=y}
    if(head<x1&&head>x0){var hy=y0+amp*ecg((head-x0)/per+.15);var hg=c.createRadialGradient(head,hy,0,head,hy,10);hg.addColorStop(0,"rgba(190,236,252,"+(.55*e).toFixed(3)+")");hg.addColorStop(1,"rgba(190,236,252,0)");c.fillStyle=hg;c.fillRect(head-10,hy-10,20,20)}
  }
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      var k=.5-.5*Math.cos(t*Math.PI*2/36),sc=(1+.025*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.012-SP.v*G.ih*.06;
      /* a low cyan glow over the whole canvas (never a rect around the image, DJ) */
      var ggr=Math.max(w,h)*.7,ag=c.createRadialGradient(G.kx,G.ky,0,G.kx,G.ky,ggr);
      ag.addColorStop(0,"rgba(30,96,140,"+(.55*e).toFixed(3)+")");ag.addColorStop(.35,"rgba(16,58,92,"+(.32*e).toFixed(3)+")");ag.addColorStop(1,"rgba(6,25,43,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      trace(t,e);
      /* a soft contact shadow under the band */
      var shy=y+dh*.97,sr=dw*.42,sg=c.createRadialGradient(G.kx,shy,0,G.kx,shy,sr);sg.addColorStop(0,"rgba(2,10,20,"+(.45*e).toFixed(3)+")");sg.addColorStop(1,"rgba(2,10,20,0)");
      c.save();c.translate(G.kx,shy);c.scale(1,.16);c.translate(-G.kx,-shy);c.fillStyle=sg;c.fillRect(G.kx-sr,shy-sr,sr*2,sr*2);c.restore();
      if(G.mob){
        var mv=c.createLinearGradient(0,G.bh*.5,0,G.bh);[[0,0],[.25,.08],[.5,.3],[.75,.66],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(6,25,43,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,G.bh*.5,w,G.bh*.5+1);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(4,19,33,.9)");lv.addColorStop(.6,"rgba(4,19,33,.5)");lv.addColorStop(1,"rgba(4,19,33,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.5,0,h);[[0,0],[.25,.03],[.5,.12],[.75,.34],[1,.75]].forEach(function(q){bv.addColorStop(q[0],"rgba(6,25,43,"+q[1]+")")});c.fillStyle=bv;c.fillRect(0,h*.5,w,h*.5+1);
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
