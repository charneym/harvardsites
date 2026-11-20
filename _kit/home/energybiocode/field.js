/* ================= HERO FIELD: a crafted render of the subject (HOME_BRIEF 2c): an engraved anterior view of the human
   bronchial tree inside both lungs, trachea to terminal bronchioles, grown by lungs.py as a space-filling dichotomous tree and
   baked to hero.webp at 1.6x in airway teal and cool bone. Over it, a sparse, slow stream of aerosol particles travels down
   real centre-lines of the tree (airways.min.json) toward the lower lungs: the delivery ModiFlow is built to improve. A slow
   Ken Burns breath; it moves on its own, so no pointer response (CZ). On phones it sits in the top band and fades into the
   ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0b1a22",AIR=__AIR__,PT=[];
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="data:image/webp;base64,__HERO__";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* right edge of the hero text (H1 + lede), measured from the DOM about once a second (QA-2 framing) */
  var TXc=0,TXt=-1e9;function TXR(){var n=performance.now();if(n-TXt>1000){TXt=n;try{var m=0,L=document.querySelectorAll(".hero-h,.hero-foot p");for(var i=0;i<L.length;i++){var tw=document.createTreeWalker(L[i],4),n;while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;var r=document.createRange();r.selectNodeContents(n);var q=r.getClientRects();for(var j=0;j<q.length;j++)if(q[j].width>0)m=Math.max(m,q[j].right)}}TXc=m}catch(_){}}return TXc}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.45,w*1.02):h;
    /* the lungs occupy x .168-.832, y .047-.88 of the render; their centre is (.5, .463) */
    var iw,ih,kx,ky,tx=0;
    if(mob){ih=(U-96)/.85;iw=ih*(2240/2400);kx=w/2;ky=(84+U)/2+4}
    else{
      /* desktop (DO): the whole of both lungs, trachea included, centred in the open area right of the measured H1/lede, the
         centre at no more than ~74% of the width, under the nav and above the fold, with room for the breathing zoom */
      tx=TXR();var L=Math.max(tx,side+cw*.42)+56,R=Math.min(w-56,2*w*.74-L);
      iw=Math.min((R-L)/.664,(h-150)/.833*(2240/2400))/1.06;ih=iw*(2400/2240);
      kx=(L+R)/2;ky=Math.min(Math.max(h*.52,84+.416*ih*1.06),h-30-.417*ih*1.06);
    }
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h,tx:tx};
  }
  /* aerosol particles: each rides one root-to-tip centre-line, entering at the trachea and fading at the tip */
  function spawn(p,t){p.i=(Math.random()*AIR.length)|0;p.t0=t+Math.random()*7;p.d=7+Math.random()*5;p.r=.8+Math.random()*.9;
    var P=AIR[p.i],c=[0],k;for(k=1;k<P.length;k++)c.push(c[k-1]+Math.hypot(P[k][0]-P[k-1][0],P[k][1]-P[k-1][1]));p.c=c}
  for(var pi=0;pi<46;pi++){var pp={};spawn(pp,-Math.random()*10);PT.push(pp)}
  function along(p,u){var P=AIR[p.i],c=p.c,L=c[c.length-1]*u,k=1;while(k<c.length-1&&c[k]<L)k++;var s0=c[k-1],s1=c[k],q=s1>s0?(L-s0)/(s1-s0):0;
    return [P[k-1][0]+(P[k][0]-P[k-1][0])*q,P[k-1][1]+(P[k][1]-P[k-1][1])*q]}
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow breath: push in ~4% and drift up a touch over ~44s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/44),sc=(1+.04*k)*(1+.035*(1-e));
      if(!G.mob&&Math.abs(TXR()-G.tx)>2)G=geo(); /* re-centre once the hero text has its final width (fonts, reveal) */
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.463-k*G.ih*.01-SP.v*G.ih*.05;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* the aerosol: soft points of light drifting down the airways */
      if(!RM){c.globalCompositeOperation="lighter";var rs=Math.max(.7,dw/1500);
        for(var j=0;j<PT.length;j++){var p=PT[j],u=(t-p.t0)/p.d;if(u<0)continue;if(u>=1){spawn(p,t);continue}
          var q=along(p,Math.pow(u,.85)),px=x+dw*q[0]/1000,py=y+dh*q[1]/1000,al=Math.min(1,u*6)*Math.min(1,(1-u)*4)*.85*e,rr=p.r*rs*3.2;
          var gg=c.createRadialGradient(px,py,0,px,py,rr*2.6);gg.addColorStop(0,"rgba(214,244,250,"+al.toFixed(3)+")");gg.addColorStop(.35,"rgba(143,211,224,"+(al*.45).toFixed(3)+")");gg.addColorStop(1,"rgba(143,211,224,0)");
          c.fillStyle=gg;c.fillRect(px-rr*2.6,py-rr*2.6,rr*5.2,rr*5.2)}
        c.globalCompositeOperation="source-over"}
      c.globalAlpha=1;
      { /* the render's rectangle dissolves into the page ground on every edge (DJ) */
        var fl=c.createLinearGradient(x,0,x+dw*.12,0);fl.addColorStop(0,BG);fl.addColorStop(1,"rgba(11,26,34,0)");c.fillStyle=fl;c.fillRect(x-1,y-1,dw*.12+1,dh+2);
        var fr=c.createLinearGradient(x+dw,0,x+dw*.88,0);fr.addColorStop(0,BG);fr.addColorStop(1,"rgba(11,26,34,0)");c.fillStyle=fr;c.fillRect(x+dw*.88,y-1,dw*.12+1,dh+2);
        var ft=c.createLinearGradient(0,y,0,y+dh*.035);ft.addColorStop(0,BG);ft.addColorStop(1,"rgba(11,26,34,0)");c.fillStyle=ft;c.fillRect(x-1,y-1,dw+2,dh*.035+1);
        var fb=c.createLinearGradient(0,y+dh,0,y+dh*.9);fb.addColorStop(0,BG);fb.addColorStop(1,"rgba(11,26,34,0)");c.fillStyle=fb;c.fillRect(x-1,y+dh*.9,dw+2,dh*.1+1);
        c.fillStyle=BG;c.fillRect(0,0,Math.max(0,x),h);c.fillRect(x+dw-1,0,w,h);c.fillRect(0,0,w,Math.max(0,y));c.fillRect(0,y+dh-1,w,h);
      }
      if(!G.mob){
        /* the headline side stays quiet: a navy wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.56,0);lv.addColorStop(0,"rgba(7,19,26,.9)");lv.addColorStop(.6,"rgba(7,19,26,.45)");lv.addColorStop(1,"rgba(7,19,26,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(7,19,26,.6)");tv.addColorStop(1,"rgba(7,19,26,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(11,26,34,0)");bv.addColorStop(1,"rgba(11,26,34,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.28);tv2.addColorStop(0,"rgba(7,19,26,.7)");tv2.addColorStop(1,"rgba(7,19,26,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.28);
        var mv=c.createLinearGradient(0,G.bh*.86,0,G.bh);mv.addColorStop(0,"rgba(11,26,34,0)");mv.addColorStop(1,"rgba(11,26,34,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.86,w,G.bh*.14+1);
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
