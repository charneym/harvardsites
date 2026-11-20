/* ================= HERO FIELD: a crafted render (HOME_BRIEF update, option c) of a ramified microglial cell, the brain's
   resident immune cell, whose CRAC channels Vivreon's Alzheimer's and opioid-use-disorder programmes target. Pre-rendered
   offline at 2880x1800 (render.js) in the logo blue, drawn cover-fit with a slow Ken Burns drift; soft calcium glints travel
   out along the main processes (the signal the CRAC channel carries). No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},img=new Image(),ok=false,FOC=[w/2,h/2];
  var FX=.64,FY=.5;var PP=[[[0.6584,0.5089],[0.6699,0.5166],[0.6812,0.5252],[0.6923,0.5342],[0.7034,0.5434],[0.7143,0.5534],[0.7249,0.5639],[0.7352,0.5753],[0.7457,0.5861],[0.7557,0.5982],[0.7659,0.6096],[0.7766,0.62],[0.7875,0.6297],[0.7983,0.6398],[0.8088,0.6508],[0.819,0.6623],[0.829,0.6742],[0.8384,0.6874],[0.8479,0.7003],[0.8584,0.7113],[0.8694,0.7208],[0.8811,0.7277],[0.8933,0.7321],[0.9055,0.7365],[0.9177,0.7405],[0.93,0.7441]],[[0.6518,0.5199],[0.6594,0.5358],[0.6666,0.5521],[0.6747,0.5674],[0.6837,0.5812],[0.6941,0.5922],[0.7059,0.5987],[0.7182,0.6025],[0.7306,0.6047],[0.7431,0.6033],[0.755,0.5976],[0.7665,0.5896],[0.7774,0.5799],[0.7877,0.5687],[0.7976,0.5563],[0.8063,0.542],[0.8135,0.5257],[0.8197,0.5083],[0.825,0.4902],[0.8302,0.472],[0.8359,0.4543],[0.8432,0.438],[0.852,0.4239],[0.8617,0.4113],[0.872,0.3998],[0.8823,0.3885]],[[0.6323,0.5229],[0.6275,0.5414],[0.6223,0.5596],[0.6167,0.5774],[0.6112,0.5954],[0.6061,0.6136],[0.602,0.6325],[0.6006,0.6524],[0.6018,0.6722],[0.6035,0.692],[0.6047,0.7119],[0.6047,0.7319],[0.6032,0.7518],[0.6001,0.7711],[0.5961,0.7901],[0.5915,0.8086],[0.5862,0.8268],[0.5801,0.8442],[0.5726,0.8603],[0.5642,0.875],[0.556,0.8901],[0.548,0.9055]],[[0.6212,0.5071],[0.6092,0.5127],[0.5975,0.5198],[0.5863,0.5289],[0.5756,0.5392],[0.5655,0.551],[0.5556,0.5631],[0.5459,0.5758],[0.5357,0.5872],[0.5253,0.5985],[0.5152,0.6102],[0.5046,0.6207],[0.4932,0.6291],[0.4817,0.6369],[0.4707,0.6464],[0.4608,0.6586],[0.4513,0.6715],[0.4417,0.6844],[0.4319,0.6969],[0.4219,0.7087],[0.4112,0.7191],[0.3996,0.7266],[0.3876,0.7322],[0.3755,0.7373],[0.3632,0.7405],[0.3507,0.7411],[0.3384,0.7379]],[[0.6204,0.4981],[0.6079,0.4967],[0.5955,0.4944],[0.5831,0.4917],[0.571,0.487],[0.5588,0.4824],[0.5465,0.479],[0.5342,0.475],[0.5219,0.4715],[0.5098,0.4668],[0.4982,0.4592],[0.4869,0.4506],[0.4759,0.4413],[0.4653,0.4307],[0.4553,0.4186],[0.4466,0.4043],[0.4383,0.3894],[0.4299,0.3746],[0.421,0.3605]],[[0.6267,0.4817],[0.6183,0.4669],[0.6101,0.4517],[0.6014,0.4374],[0.5923,0.4237],[0.5823,0.4116],[0.5723,0.3997],[0.5623,0.3877],[0.5516,0.3774],[0.5402,0.3691],[0.5286,0.3618],[0.5166,0.3563],[0.5044,0.3517],[0.4923,0.3471],[0.4802,0.342],[0.468,0.3375],[0.4558,0.3331],[0.4437,0.3283],[0.4317,0.3224],[0.42,0.3154],[0.4083,0.3085],[0.3964,0.3024],[0.3841,0.2984],[0.3717,0.2962],[0.3593,0.2946]],[[0.6398,0.4751],[0.6399,0.4551],[0.6418,0.4353],[0.6448,0.4159],[0.6483,0.3967],[0.653,0.3782],[0.658,0.3599],[0.6627,0.3414],[0.6671,0.3226],[0.6711,0.3037],[0.6758,0.2851],[0.6818,0.2677],[0.6884,0.2506],[0.6937,0.2325],[0.6977,0.2136],[0.7013,0.1945],[0.7057,0.1757],[0.7113,0.1578],[0.718,0.141],[0.7265,0.1264]],[[0.6566,0.4866],[0.6671,0.4759],[0.6774,0.4645],[0.6873,0.4523],[0.6967,0.4391],[0.705,0.4242],[0.7123,0.408],[0.72,0.3922],[0.728,0.3768],[0.7359,0.3613],[0.7436,0.3456],[0.7523,0.3312],[0.7616,0.3178],[0.7707,0.3041],[0.7793,0.2896],[0.7869,0.2738],[0.7932,0.2565],[0.7981,0.2382],[0.8015,0.2189],[0.803,0.1991],[0.8022,0.1792],[0.7985,0.1601],[0.7921,0.1429],[0.7847,0.1268],[0.7763,0.112],[0.7674,0.098],[0.7578,0.0851]]];
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  img.onload=function(){ok=true;frame(true)};img.src="data:image/webp;base64,__HERO__";
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    if(!ok)return;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var mob=w<861,iw=img.naturalWidth,ih=img.naturalHeight,H=mob?h*.42:h;
    /* slow drift: a 50s breathing zoom with a gentle sideways travel, settling a touch as you scroll */
    var k=RM?0:(.5-.5*Math.cos(t*2*Math.PI/50)),sc=Math.max(w/iw,H/ih)*(mob?1.04:1.03)*(1+.04*k)*(1+.03*SP.v);
    var dw=iw*sc,dh=ih*sc,fx=FX*dw,fy=FY*dh;
    var x=w*(mob?.5:.69)-fx+(RM?0:Math.sin(t*2*Math.PI/70)*w*.01),y=H*(mob?.56:.52)-fy+SP.v*H*.04;
    x=Math.min(0,Math.max(w-dw,x));y=Math.min(0,Math.max(H-dh,y));FOC=[x+fx,y+fy*.8];
    c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,w,h);c.globalAlpha=e;
    c.drawImage(img,x,y,dw,dh);
    /* calcium glints: each main process carries a soft pulse from the soma outward, staggered, about every 9 s */
    if(!RM){c.globalCompositeOperation="lighter";for(var k=0;k<PP.length;k++){var pl=PP[k],q=((t/9)+k*.37)%1;if(q>.8)continue;q/=.8;
      var fi=q*(pl.length-1),i0=Math.floor(fi),fr=fi-i0,p0=pl[i0],p1=pl[Math.min(i0+1,pl.length-1)],gx=x+(p0[0]+(p1[0]-p0[0])*fr)*dw,gy=y+(p0[1]+(p1[1]-p0[1])*fr)*dh;
      var rr=Math.max(10,dw*.012),al=Math.sin(Math.PI*q)*.55,rg=c.createRadialGradient(gx,gy,0,gx,gy,rr);rg.addColorStop(0,"rgba(220,244,255,"+al.toFixed(3)+")");rg.addColorStop(.4,"rgba(79,182,234,"+(al*.5).toFixed(3)+")");rg.addColorStop(1,"rgba(1,136,202,0)");
      c.fillStyle=rg;c.fillRect(gx-rr,gy-rr,rr*2,rr*2)}c.globalCompositeOperation="source-over"}
    if(!mob){var lv=c.createLinearGradient(0,0,w*.62,0);lv.addColorStop(0,"rgba(7,19,31,.84)");lv.addColorStop(.5,"rgba(7,19,31,.55)");lv.addColorStop(1,"rgba(7,19,31,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(7,19,31,.55)");tv.addColorStop(1,"rgba(7,19,31,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
      var bv=c.createLinearGradient(0,h*.72,0,h);bv.addColorStop(0,"rgba(7,19,31,0)");bv.addColorStop(1,"rgba(7,19,31,.7)");c.fillStyle=bv;c.fillRect(0,h*.72,w,h*.28)}
    else{var tg=c.createLinearGradient(0,0,0,H*.3);tg.addColorStop(0,"rgba(7,19,31,.6)");tg.addColorStop(1,"rgba(7,19,31,0)");c.fillStyle=tg;c.fillRect(0,0,w,H*.3);
      var fg=c.createLinearGradient(0,H*.66,0,H);fg.addColorStop(0,"rgba(7,19,31,0)");fg.addColorStop(1,"rgba(7,19,31,1)");c.fillStyle=fg;c.fillRect(0,H*.66-1,w,H*.34+2);c.fillStyle="#07131f";c.fillRect(0,H-1,w,h-H+2)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return FOC}};
})();
