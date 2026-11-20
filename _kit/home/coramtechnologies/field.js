/* ================= HERO FIELD: real photography (HOME_BRIEF update, option b). A modern MRI suite, the scanner bore and table
   in an empty, clean room (Pexels, MART PRODUCTION: pexels.com/photo/technology-hospital-medicine-indoors-7089017/), graded
   offline to the logo charcoal and teal (the small manufacturer wordmark softened). Slow Ken Burns drift; on desktop the photo
   starts right of the headline column and fades into the ink behind it, so the bore sits right of centre. A thin teal ECG
   trace sweeps along the lower edge, for Coram's defibrillation work. No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.jpg";
  function ecg(p){return p<.1?Math.sin(p/.1*Math.PI)*.12:p<.2?0:p<.23?-.15:p<.27?1:p<.3?-.35:p<.42?0:p<.56?Math.sin((p-.42)/.14*Math.PI)*.22:0}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.46,w*1.0):h;
    return {mob:mob,side:side,cw:cw,U:U,bh:mob?U*1.06:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=cv.clientWidth||document.documentElement.clientWidth||innerWidth;h=cv.clientHeight||innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#0a1012";c.fillRect(0,0,w,h);
    if(ok){
      var bw=w,bh=G.bh,iw=img.naturalWidth,ih=img.naturalHeight;
      /* Ken Burns: a very slow push in toward the bore, eased back and forth over ~50s */
      var k=.5-.5*Math.cos(t*Math.PI*2/50),sc=(G.mob?Math.max(bw/iw,bh/ih):Math.max(bw*.8/iw,bh/ih))*(1.04+.05*k)*(1+.04*(1-e));
      var dw=iw*sc,dh=ih*sc,x,y;
      if(G.mob){x=bw/2-dw*.6-k*bw*.01;y=(bh-dh)*.5-k*bh*.008}
      else{x=w*.2-k*bw*.012;y=(bh-dh)*.5-k*bh*.008}
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){var lf=c.createLinearGradient(x,0,x+dw*.3,0);lf.addColorStop(0,"rgba(10,16,18,1)");lf.addColorStop(1,"rgba(10,16,18,0)");c.fillStyle=lf;c.fillRect(0,0,x+dw*.3,h);if(x>0){c.fillStyle="#0a1012";c.fillRect(0,0,x+1,h)}}
      /* scrims: navy wash, the headline side darkest, the base deepening into the page */
      c.fillStyle="rgba(10,16,18,.22)";c.fillRect(0,0,w,bh);
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.62,0);lv.addColorStop(0,"rgba(8,13,14,.86)");lv.addColorStop(.55,"rgba(8,13,14,.6)");lv.addColorStop(1,"rgba(8,13,14,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(8,13,14,.55)");tv.addColorStop(1,"rgba(8,13,14,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
        var bv=c.createLinearGradient(0,h*.62,0,h);bv.addColorStop(0,"rgba(8,13,14,0)");bv.addColorStop(1,"rgba(8,13,14,.7)");c.fillStyle=bv;c.fillRect(0,h*.62,w,h*.38);
      }else{
        var tv2=c.createLinearGradient(0,0,0,bh*.3);tv2.addColorStop(0,"rgba(8,13,14,.6)");tv2.addColorStop(1,"rgba(8,13,14,0)");c.fillStyle=tv2;c.fillRect(0,0,w,bh*.3);
        var mv=c.createLinearGradient(0,bh*.55,0,bh);mv.addColorStop(0,"rgba(10,16,18,0)");mv.addColorStop(1,"rgba(10,16,18,1)");c.fillStyle=mv;c.fillRect(0,bh*.55,w,bh*.45+1);
        c.fillStyle="#0d1416";c.fillRect(0,bh,w,h-bh+1);
      }
      /* a thin teal ECG trace sweeping along the lower edge */
      var ey=G.mob?bh*.93:h*.9,ea=G.mob?7:11,sweep=(t/6)%1,eL=G.mob?w:w-G.side;
      c.lineWidth=1.2;c.lineJoin="round";c.strokeStyle="rgba(0,173,187,"+(.5*e).toFixed(3)+")";c.beginPath();var pen=false;
      for(var si=0;si<=320;si++){var u=si/320,px=(G.mob?0:G.side)+(eL-(G.mob?0:G.side))*u,ph=(u*5)%1,gap=u>sweep&&u<sweep+.06;
        var py=ey-ecg(ph)*ea*3;if(gap){pen=false;continue}if(!pen){c.moveTo(px,py);pen=true}else c.lineTo(px,py)}
      c.stroke();
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[w*.72,G.bh*.48]:[w/2,h/2]}};
})();
