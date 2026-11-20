/* ================= HERO FIELD: a crafted render (HOME_BRIEF update, option c) of a cerebellar neuron, its fan-shaped
   dendritic arbor above a round soma, as a confocal fluorescence image in the AnekaBio logo green. Friedreich's ataxia,
   the target of AnekaBio's QTE therapy, is a neurodegenerative disease. Pre-rendered offline at 2880x1800 (render.js),
   drawn cover-fit with a slow Ken Burns drift; soft glints travel out along the main dendrites. No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},img=new Image(),ok=false,FOC=[w/2,h/2];
  var FX=.72,FY=.58,AL=.57,AR=.87,TXR=0,TXC=0;
  /* measured end of the H1 and lede (text rects, not boxes): the arbor's leftmost bright dendrite stays >=110px right of it (125 target vs the measured left edge AL) (DI/DO) */
  function txr(){var r=0;['#pageTitle','.hero-foot p.s','.hero .eyebrow'].forEach(function(q){var el=document.querySelector(q);if(!el)return;var tw=document.createTreeWalker(el,4),n;while((n=tw.nextNode())){if(!n.nodeValue.trim())continue;var rg=document.createRange();rg.selectNodeContents(n);[].forEach.call(rg.getClientRects(),function(b){if(b.width>1&&b.right>r)r=b.right})}});return r}
var PP=[[[0.7208,0.6828],[0.7156,0.6765],[0.7106,0.6697],[0.7061,0.662],[0.7014,0.6547],[0.6966,0.6476],[0.6915,0.6409],[0.6867,0.6339],[0.6824,0.6259],[0.6782,0.6179],[0.6749,0.6088],[0.674,0.5985],[0.6753,0.5882],[0.6774,0.5783],[0.6794,0.5682],[0.6803,0.5578],[0.68,0.5474],[0.6788,0.537],[0.677,0.527],[0.6737,0.5179],[0.67,0.5093],[0.6671,0.4999],[0.6656,0.4897],[0.6651,0.4792],[0.6665,0.469],[0.6676,0.4586],[0.6674,0.4481],[0.6659,0.4379]],[[0.7208,0.6828],[0.7191,0.6727],[0.7192,0.6623],[0.7201,0.6519],[0.7214,0.6416],[0.7243,0.6322],[0.7283,0.6239],[0.7332,0.6169],[0.7384,0.6106],[0.744,0.6051],[0.749,0.5984],[0.7533,0.5904],[0.756,0.5809],[0.7575,0.5706],[0.7583,0.5603],[0.7584,0.5498],[0.7585,0.5393],[0.7575,0.5289],[0.7549,0.5193],[0.7511,0.5107],[0.7475,0.5019],[0.7433,0.4939],[0.7389,0.4862],[0.7349,0.4778],[0.7313,0.4691],[0.7274,0.4606],[0.7231,0.4527],[0.719,0.4445],[0.715,0.4361],[0.7101,0.4292]],[[0.7208,0.6828],[0.7225,0.6727],[0.7248,0.6628],[0.7277,0.6535],[0.7316,0.645],[0.7364,0.638],[0.7417,0.6317],[0.7466,0.6248],[0.7506,0.6164],[0.7543,0.6077],[0.7584,0.5996],[0.7622,0.591],[0.7652,0.5817],[0.7676,0.5719],[0.7688,0.5616],[0.7686,0.5512],[0.7674,0.5408],[0.7657,0.5307],[0.7643,0.5204],[0.7625,0.5104],[0.7595,0.501],[0.7553,0.493],[0.7502,0.4865],[0.7443,0.4818],[0.7383,0.4775],[0.7322,0.4737],[0.7259,0.4711],[0.7194,0.4689],[0.713,0.467],[0.7065,0.4657],[0.6999,0.4647],[0.6935,0.4627],[0.6874,0.459],[0.6812,0.4553],[0.6749,0.4528],[0.6683,0.4526]],[[0.7208,0.6828],[0.7262,0.6769],[0.732,0.6717],[0.7382,0.6685],[0.7445,0.6659],[0.7509,0.6631],[0.7569,0.6592],[0.7625,0.6537],[0.7677,0.6472],[0.7724,0.64],[0.7755,0.6307],[0.7763,0.6204],[0.7746,0.6103],[0.7708,0.6017],[0.7666,0.5937],[0.7622,0.586],[0.758,0.5778],[0.755,0.5685],[0.7528,0.5586],[0.7504,0.5489],[0.7475,0.5395],[0.7432,0.5316],[0.7384,0.5244],[0.7332,0.518],[0.7278,0.5121],[0.7224,0.506],[0.7172,0.4996],[0.7117,0.4939],[0.7056,0.4903],[0.6996,0.486],[0.6939,0.4809],[0.6882,0.4754],[0.6825,0.4703]]];
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  img.onload=function(){ok=true;frame(true)};img.src="data:image/webp;base64,__HERO__";
  function size(){TXR=txr();dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);if(!running)frame(true)}
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
    var x=w*(mob?.5:(w>1700?.712:.7))-fx+(RM?0:Math.sin(t*2*Math.PI/70)*w*.01),y=H*(mob?.37:.53)-fy+SP.v*H*.04;
    if(!mob){if(++TXC%45===1)TXR=txr();var need=TXR+125-(x+AL*dw);if(TXR&&need>0){var room=Math.min(w*.955-(x+AR*dw),w*.76-(x+fx));x+=Math.max(0,Math.min(need,room))}}
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
