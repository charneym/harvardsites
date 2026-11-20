/* ================= HERO FIELD: a crafted render of Coram's subject (HOME_BRIEF update, option c): the non-magnetic,
   MRI-conditional external defibrillator on its cart beside an MRI scanner, pads already on the table, the bore lit.
   Ray-marched offline (render.py in _kit/home/coramtechnologies), graded to the logo teal (#00adbb) and charcoal. Drawn
   with a slow Ken Burns drift; the defibrillator's own screen runs a live ECG sweep. No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.jpg";
  var SCR=[[0.5132,0.4482],[0.57,0.449],[0.5697,0.5099],[0.5132,0.5088]];
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
      var k=.5-.5*Math.cos(t*Math.PI*2/50),sc=Math.max(bw/iw,bh/ih)*(1.04+.06*k)*(1+.04*(1-e));
      var dw=iw*sc,dh=ih*sc,fx=G.mob?.93:.62,fy=G.mob?.5:.55;
      var x=(bw-dw)*fx-k*bw*.01,y=(bh-dh)*fy-k*bh*.008;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* the defibrillator screen: a live ECG sweep, clipped to the screen quad of the render */
      var Q=SCR.map(function(q){return [x+q[0]*dw,y+q[1]*dh]});
      c.save();c.beginPath();c.moveTo(Q[0][0],Q[0][1]);for(var qi=1;qi<4;qi++)c.lineTo(Q[qi][0],Q[qi][1]);c.closePath();c.clip();
      var sw=Q[1][0]-Q[0][0],shh=Q[3][1]-Q[0][1],per=1.1,sweep=(t/3.2)%1;
      c.strokeStyle="rgba(64,214,226,.95)";c.lineWidth=Math.max(1,sw/70);c.lineJoin="round";c.beginPath();
      for(var si=0;si<=90;si++){var u=si/90,ph=((u*3.2/per)%1),yv=ecg(ph),gap=(u>sweep&&u<sweep+.08);
        var px=Q[0][0]+(Q[1][0]-Q[0][0])*u,py=Q[0][1]+(Q[1][1]-Q[0][1])*u+shh*(.62-yv*.42);
        if(gap||si===0||(u>sweep+.08&&(si-1)/90<=sweep+.08))c.moveTo(px,py);else c.lineTo(px,py)}
      c.stroke();c.restore();c.globalAlpha=1;
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
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[w*.68,G.bh*.5]:[w/2,h/2]}};
})();
