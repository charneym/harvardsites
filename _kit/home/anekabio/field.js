/* ================= HERO FIELD: a crafted render (HOME_BRIEF update, option c) of a cerebellar neuron, its fan-shaped
   dendritic arbor above a round soma, as a confocal fluorescence image in the AnekaBio logo green. Friedreich's ataxia,
   the target of AnekaBio's QTE therapy, is a neurodegenerative disease. Pre-rendered offline at 2880x1800 (render.js),
   drawn cover-fit with a slow Ken Burns drift; soft glints travel out along the main dendrites. No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},img=new Image(),ok=false,FOC=[w/2,h/2];
  var FX=.665,FY=.54;var PP=[[[0.666,0.6914],[0.6597,0.6838],[0.6538,0.6756],[0.6484,0.6664],[0.6427,0.6576],[0.6369,0.6491],[0.6308,0.6411],[0.625,0.6326],[0.6199,0.623],[0.6148,0.6135],[0.6109,0.6025],[0.6098,0.5902],[0.6114,0.5778],[0.6139,0.5659],[0.6162,0.5539],[0.6173,0.5414],[0.617,0.5288],[0.6156,0.5164],[0.6134,0.5043],[0.6094,0.4935],[0.605,0.4831],[0.6015,0.4718],[0.5997,0.4596],[0.5992,0.4471],[0.6008,0.4347],[0.6021,0.4224],[0.6019,0.4098],[0.6001,0.3975]],[[0.666,0.6914],[0.6639,0.6793],[0.664,0.6667],[0.6651,0.6542],[0.6667,0.6419],[0.6701,0.6306],[0.675,0.6207],[0.6808,0.6122],[0.6871,0.6048],[0.6938,0.5982],[0.6999,0.5901],[0.7049,0.5805],[0.7082,0.569],[0.71,0.5568],[0.711,0.5443],[0.711,0.5317],[0.7112,0.5191],[0.71,0.5067],[0.7068,0.4952],[0.7023,0.4849],[0.698,0.4743],[0.693,0.4647],[0.6877,0.4554],[0.6829,0.4454],[0.6786,0.4349],[0.6739,0.4247],[0.6687,0.4153],[0.6638,0.4054],[0.659,0.3954],[0.6531,0.387]],[[0.666,0.6914],[0.668,0.6792],[0.6707,0.6674],[0.6743,0.6562],[0.6789,0.6461],[0.6847,0.6376],[0.691,0.63],[0.697,0.6217],[0.7017,0.6117],[0.7061,0.6013],[0.7111,0.5915],[0.7156,0.5812],[0.7193,0.57],[0.7222,0.5583],[0.7235,0.546],[0.7233,0.5334],[0.7219,0.521],[0.7198,0.5089],[0.7182,0.4965],[0.716,0.4845],[0.7124,0.4732],[0.7074,0.4636],[0.7012,0.4558],[0.6942,0.4502],[0.687,0.445],[0.6797,0.4405],[0.672,0.4373],[0.6643,0.4347],[0.6566,0.4325],[0.6488,0.4308],[0.6409,0.4297],[0.6332,0.4273],[0.6258,0.4228],[0.6185,0.4184],[0.6109,0.4153],[0.603,0.4151]],[[0.666,0.6914],[0.6725,0.6842],[0.6793,0.6781],[0.6868,0.6743],[0.6944,0.6711],[0.702,0.6677],[0.7093,0.6631],[0.716,0.6564],[0.7222,0.6487],[0.7279,0.64],[0.7315,0.6289],[0.7326,0.6165],[0.7305,0.6044],[0.726,0.5941],[0.7209,0.5844],[0.7156,0.5752],[0.7106,0.5654],[0.707,0.5542],[0.7043,0.5424],[0.7015,0.5306],[0.698,0.5194],[0.6928,0.5099],[0.6871,0.5013],[0.6809,0.4936],[0.6743,0.4865],[0.6679,0.4792],[0.6617,0.4715],[0.6551,0.4647],[0.6477,0.4603],[0.6405,0.4551],[0.6336,0.4491],[0.6269,0.4425],[0.62,0.4363]]];
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
    var k=RM?0:(.5-.5*Math.cos(t*2*Math.PI/50)),sc=Math.max(w/iw,H/ih)*(mob?1.25:1.03)*(1+.04*k)*(1+.03*SP.v);
    var dw=iw*sc,dh=ih*sc,fx=FX*dw,fy=FY*dh;
    var x=w*(mob?.5:(w>1700?.735:.72))-fx+(RM?0:Math.sin(t*2*Math.PI/70)*w*.01),y=H*(mob?.37:.53)-fy+SP.v*H*.04;
    x=Math.min(0,Math.max(w-dw,x));y=Math.min(0,Math.max(H-dh,y));FOC=[x+fx,y+fy*.8];
    c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,w,h);c.globalAlpha=e;
    c.drawImage(img,x,y,dw,dh);
    /* calcium glints: each main process carries a soft pulse from the soma outward, staggered, about every 9 s */
    if(!RM){c.globalCompositeOperation="lighter";for(var k=0;k<PP.length;k++){var pl=PP[k],q=((t/9)+k*.37)%1;if(q>.8)continue;q/=.8;
      var fi=q*(pl.length-1),i0=Math.floor(fi),fr=fi-i0,p0=pl[i0],p1=pl[Math.min(i0+1,pl.length-1)],gx=x+(p0[0]+(p1[0]-p0[0])*fr)*dw,gy=y+(p0[1]+(p1[1]-p0[1])*fr)*dh;
      var rr=Math.max(10,dw*.012),al=Math.sin(Math.PI*q)*.55,rg=c.createRadialGradient(gx,gy,0,gx,gy,rr);rg.addColorStop(0,"rgba(240,255,226,"+al.toFixed(3)+")");rg.addColorStop(.4,"rgba(140,196,99,"+(al*.5).toFixed(3)+")");rg.addColorStop(1,"rgba(95,147,59,0)");
      c.fillStyle=rg;c.fillRect(gx-rr,gy-rr,rr*2,rr*2)}c.globalCompositeOperation="source-over"}
    if(!mob){var lv=c.createLinearGradient(0,0,w*.62,0);lv.addColorStop(0,"rgba(8,18,11,.84)");lv.addColorStop(.5,"rgba(8,18,11,.55)");lv.addColorStop(1,"rgba(8,18,11,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(8,18,11,.55)");tv.addColorStop(1,"rgba(8,18,11,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
      var bv=c.createLinearGradient(0,h*.72,0,h);bv.addColorStop(0,"rgba(8,18,11,0)");bv.addColorStop(1,"rgba(8,18,11,.7)");c.fillStyle=bv;c.fillRect(0,h*.72,w,h*.28)}
    else{var tg=c.createLinearGradient(0,0,0,H*.3);tg.addColorStop(0,"rgba(8,18,11,.6)");tg.addColorStop(1,"rgba(8,18,11,0)");c.fillStyle=tg;c.fillRect(0,0,w,H*.3);
      var fg=c.createLinearGradient(0,H*.8,0,H);fg.addColorStop(0,"rgba(8,18,11,0)");fg.addColorStop(1,"rgba(8,18,11,1)");c.fillStyle=fg;c.fillRect(0,H*.8-1,w,H*.2+2);c.fillStyle="#08120b";c.fillRect(0,H-1,w,h-H+2)}
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
