/* ================= HERO FIELD: a crafted render of the real subject (HOME_BRIEF update 2026-11-20, option c). Space-filling
   models of real RNA, the molecule RealSeq reads: a 19-base-pair RNA duplex (PDB 1QC0, chains C/D) with two short RNA fragments
   (PDB 4U37, a 7-mer duplex; PDB 2Q1R, a 12-nt strand), rendered offline atom by atom (rna.py: sphere shading, depth-based
   ambient occlusion; backbone in RealSeq green, bases in its orange and red) on a transparent ground, so they sit on the ink
   with no box edge (DJ/DP). Placed in the open area right of the copy, with an ink scrim only over the text (DI); each molecule
   drifts slowly on its own, no pointer response (CZ). On phones the group sits in the top band and fades into the ink. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,IM=[],nOk=0;
  var SRC=[["hero.webp",1,0,0,0],["frag1.webp",.26,.36,.40,1.7],["frag2.webp",.24,-.33,-.40,3.1]]; /* file, scale vs main, dx, dy (of main size), phase */
  SRC.forEach(function(s,i){var im=new Image();im.decoding="async";im.onload=function(){nOk++;if(!running)frame(true)};im.src=s[0];IM[i]=im});
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.46,w*1.0):h;
    return {mob:mob,side:side,cw:cw,U:U,bh:mob?U*1.04:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function place(){ /* main helix centre and width in CSS px */
    var m=IM[0],iw=m.naturalWidth||1294,ih=m.naturalHeight||960,sc,cx,cy;
    if(!G.mob){var room=Math.min(w*.40,G.cw*.46);sc=Math.min(room/iw,h*.5/ih);cx=w*.715;cy=h*.52}
    else{sc=Math.min(w*.70/iw,G.bh*.5/ih);cx=w*.52;cy=G.bh*.56}
    return {cx:cx,cy:cy,sc:sc,iw:iw,ih:ih};
  }
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#0e1510";c.fillRect(0,0,w,h);
    if(nOk===IM.length){
      var P=place(),k=.5-.5*Math.cos(t*Math.PI*2/48),dw0=P.iw*P.sc,dh0=P.ih*P.sc;
      var gl=c.createRadialGradient(P.cx,P.cy,0,P.cx,P.cy,dw0*.85);gl.addColorStop(0,"rgba(152,202,62,"+(.10*e)+")");gl.addColorStop(.55,"rgba(240,143,33,"+(.03*e)+")");gl.addColorStop(1,"rgba(14,21,16,0)");
      c.fillStyle=gl;c.fillRect(0,0,w,G.mob?G.bh:h);
      for(var i=IM.length-1;i>=0;i--){
        var s=SRC[i],im=IM[i],ph=t*Math.PI*2/(30+i*7)+s[4],sc=P.sc*(1+.03*k)*(1+.05*(1-e));
        var dw=i?dw0*s[1]:im.naturalWidth*sc,dh=i?dw*im.naturalHeight/im.naturalWidth:im.naturalHeight*sc;
        var x=P.cx+s[2]*dw0-dw/2+(i?Math.sin(ph)*dw0*.015:-k*dw0*.012),y=P.cy+s[3]*dh0-dh/2+(i?Math.cos(ph*1.3)*dh0*.02:k*dh0*.008)-SP.v*h*.04;
        c.globalAlpha=(i?.7:.96)*e;c.drawImage(im,x,y,dw,dh);c.globalAlpha=1;
      }
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,w*.56,0);lv.addColorStop(0,"rgba(9,16,11,.72)");lv.addColorStop(.6,"rgba(9,16,11,.32)");lv.addColorStop(1,"rgba(9,16,11,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.6,0,h);bv.addColorStop(0,"rgba(14,21,16,0)");bv.addColorStop(1,"rgba(14,21,16,.7)");c.fillStyle=bv;c.fillRect(0,h*.6,w,h*.4);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.55,0,G.bh);mv.addColorStop(0,"rgba(14,21,16,0)");mv.addColorStop(1,"rgba(14,21,16,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.55,w,G.bh*.45+1);
        c.fillStyle="#0e1510";c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){if(!G)return [w/2,h/2];var P=place();return [P.cx,P.cy]}};
})();
