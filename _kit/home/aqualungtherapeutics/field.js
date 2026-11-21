/* ================= HERO FIELD: a crafted render of the real molecule (HOME_BRIEF update 2c): a space-filling model of a
   full-length human IgG4 antibody from its crystal structure (RCSB PDB 5DK3, https://www.rcsb.org/structure/5DK3),
   rendered offline by ab.py (sphere shading, depth AO) with the heavy chains in the Aqualung logo blue, the light chains
   in its silver and the Fc N-glycans in the site purple. ALT-100 is a humanized IgG4, so this is its architecture: the
   Y of two antigen-binding arms and the Fc stem. Transparent ground, so no rectangle edge exists (DJ/DP). It breathes
   in a slow drift and turns a few degrees; it moves on its own, so no pointer response (CZ). Centred in the open area
   right of the text at ~70% width, whole and clear of the headline (DO/DP), with an ink wash over the text side (DI).
   On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#061224";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.46,w*1.15):h;
    /* the iris disc: whole in frame, centred in the open area right of the text */
    var AR=1290/1356,d=mob?Math.min(U-96,cw*.8/AR):Math.min((h-150)*.86,cw*.40/AR,1356);
    var kx=mob?w*.5:side+cw*.715,ky=mob?78+d*.5:96+(h-96)*.52;
    return {mob:mob,side:side,cw:cw,U:U,ih:d,iw:d*AR,kx:kx,ky:ky,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow breath: in ~3.5% and a touch of drift over ~46s */
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=(1+.035*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.018-SP.v*G.ih*.05;
      /* a deep teal-navy glow painted across the WHOLE canvas, never inside the image rect alone (DJ) */
      var ggx=G.mob?w*.5:G.side+G.cw*.72,ggy=G.mob?G.bh*.4:h*.5,ggr=Math.max(w,h)*.8;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(16,52,92,"+(.52*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(9,30,58,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(6,18,36,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.save();c.translate(G.kx,y+dh*.5);c.rotate((k-.5)*.035);c.drawImage(img,-dw*.5,-dh*.5,dw,dh);c.restore();
      /* a slow sheen crossing the iris, like light moving on a wet surface */
      var pu=.5+.5*Math.sin(t*Math.PI*2/13),px=x+dw*(.34+.3*pu),py=y+dh*.36,pr=dw*.3;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(190,226,252,"+(.035+.035*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(190,226,252,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.52,0);lv.addColorStop(0,"rgba(4,12,25,.96)");lv.addColorStop(.64,"rgba(4,12,25,.62)");lv.addColorStop(1,"rgba(4,12,25,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(4,12,25,.62)");tv.addColorStop(1,"rgba(4,12,25,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(6,18,36,0)");bv.addColorStop(1,"rgba(6,18,36,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.2);tv2.addColorStop(0,"rgba(4,12,25,.5)");tv2.addColorStop(1,"rgba(4,12,25,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.2);
        var mv=c.createLinearGradient(0,G.bh*.92,0,G.bh);mv.addColorStop(0,"rgba(6,18,36,0)");mv.addColorStop(1,"rgba(6,18,36,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.92,w,G.bh*.08+1);
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
