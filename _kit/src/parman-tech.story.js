/* the story: the same NanoSelect cell, one continuous camera (BL/DB). Inlet -> standing wave -> 45 degrees -> optical force -> barrier;
   the canvas fills the right half of the pinned frame (the full width above the text on phones). */
var story=null;
function makeStory(cv){
  var c=cv.getContext("2d"),w=0,h=0,dpr=1,p=0,pT=0,alive=true,vis=false,t0=performance.now();
  function sm(x){return x*x*(3-2*x)}
  function cl(x){return x<0?0:x>1?1:x}
  function seg(v,a,b){return cl((v-a)/(b-a))}
  /* camera per step: [centre x, centre y (projected units), span across the canvas] */
  var CAM=[[-300,34,560],[0,-4,860],[-20,6,560],[40,-8,600],[330,-14,640]];
  function size(){var r=cv.getBoundingClientRect();w=r.width;h=r.height;dpr=Math.min(devicePixelRatio||1,2);cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr)}
  function cam(){var s=Math.max(0,Math.min(4,p*5-.5)),i0=Math.min(3,Math.floor(s)),fr=s-i0;var f=sm(cl((fr-.2)/.6));var A=CAM[i0],B=CAM[i0+1];
    return {x:A[0]+(B[0]-A[0])*f,y:A[1]+(B[1]-A[1])*f,span:Math.exp(Math.log(A[2])+(Math.log(B[2])-Math.log(A[2]))*f),i0:i0,f:f}}
  function w5(C){var o=[0,0,0,0,0];o[C.i0]=1-C.f;o[C.i0+1]=C.f;return o}
  function draw(){
    p+=(pT-p)*.085;if(Math.abs(pT-p)<.0004)p=pT;
    var t=RM?14:(performance.now()-t0)/1000,C=cam(),Wt=w5(C);
    var S=Math.min(w,h*1.5)/C.span;
    var L=seg(p,.2,.34),sep=seg(p,.6,.72);
    c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,w,h);
    var r=CHIP.draw(c,{S:S,ox:w*.5,oy:h*.5,cx:C.x,cy:C.y,al:1,t:t,L:L,sep:sep});
    var PLACED=[];
    function hit(x,y,ww,hh){for(var k=0;k<PLACED.length;k++){var q=PLACED[k];if(x<q[0]+q[2]+10&&x+ww+10>q[0]&&y<q[1]+q[3]+6&&y+hh+6>q[1])return true}return false}
    /* a label in screen space; its leader line ends on the thing it names */
    function lab(txt,wx,wy,a,tx,ty,tz){if(a<.12)return;a=Math.min(1,(a-.12)/.5);var P=r.toScreen(wx,wy,0);P=[P[0],P[1]];
      c.font="400 10.5px 'IBM Plex Mono',monospace";if(c.letterSpacing!==undefined)c.letterSpacing="1.5px";
      var tw=c.measureText(txt).width;var anc=tx==null?"c":(r.toScreen(tx,ty,tz)[0]<P[0]?"l":"r");
      var lx=anc==="c"?P[0]-tw/2:(anc==="l"?P[0]:P[0]-tw);
      var y0=P[1],OFF=[0,20,-20,40,-40,60,-60];for(var k2=0;k2<OFF.length;k2++){P[1]=y0+OFF[k2];if(!hit(lx,P[1]-11,tw,15))break}
      if(hit(lx,P[1]-11,tw,15))return;
      if(lx<w*.1||lx+tw>w-16||P[1]<h*.1||P[1]>h*.9)return;
      PLACED.push([lx,P[1]-11,tw,15]);
      c.globalAlpha=a;
      if(tx!=null){var T=r.toScreen(tx,ty,tz);var sx=anc==="l"?P[0]-6:P[0]+6;
        c.strokeStyle="rgba(159,178,189,.75)";c.lineWidth=1;c.beginPath();c.moveTo(sx,P[1]-3.5);c.lineTo(T[0],T[1]);c.stroke();
        c.fillStyle="rgba(111,211,173,.95)";c.beginPath();c.arc(T[0],T[1],2,0,6.283);c.fill()}
      c.shadowColor="rgba(3,20,30,.95)";c.shadowBlur=7;c.fillStyle="rgb(222,230,232)";c.textAlign="left";
      c.fillText(txt,lx,P[1]);c.fillText(txt,lx,P[1]);c.shadowBlur=0;c.globalAlpha=1}
    /* flow arrow in the inlet (steps 1 and 3) */
    var fa=Math.max(Wt[0],Wt[2]);if(fa>.05){var f0=r.toScreen(-470,-62,0),f1=r.toScreen(-380,-62,0);c.globalAlpha=fa;c.strokeStyle="rgba(159,178,189,.85)";c.lineWidth=1.2;
      c.beginPath();c.moveTo(f0[0],f0[1]);c.lineTo(f1[0],f1[1]);c.stroke();c.beginPath();c.moveTo(f1[0]-6,f1[1]-4);c.lineTo(f1[0],f1[1]);c.lineTo(f1[0]-6,f1[1]+4);c.stroke();c.globalAlpha=1}
    lab("MIXED STREAM",-430,110,Wt[0],-470,20);
    lab("MICROFLUIDIC CAPILLARY",-300,-140,Wt[0],-300,-42,0);
    lab("FLOW",-420,-92,Wt[0]+Wt[2]);
    lab("MIRROR",-200,330,Wt[1],CHIP.A[0]-10,CHIP.A[1]+10,26);
    lab("MIRROR",360,-230,Wt[1],CHIP.B[0]+10,CHIP.B[1]-10,26);
    lab("STANDING WAVE",230,-170,Wt[1],90,-90);
    /* step 3: the 45 degree angle between the flow and the beam, drawn in the chip plane */
    var aa=Wt[2]*seg(p,.36,.46);if(aa>.02){var R0=118;c.globalAlpha=aa;c.strokeStyle="rgba(111,211,173,.95)";c.lineWidth=1.3;c.beginPath();
      for(var k=0;k<=24;k++){var th=-k/24*Math.PI/4,q=r.toScreen(Math.cos(th)*R0,Math.sin(th)*R0,0);k?c.lineTo(q[0],q[1]):c.moveTo(q[0],q[1])}c.stroke();
      var z0=r.toScreen(0,0,0),z1=r.toScreen(R0+40,0,0);c.strokeStyle="rgba(159,178,189,.7)";c.setLineDash([3,4]);c.beginPath();c.moveTo(z0[0],z0[1]);c.lineTo(z1[0],z1[1]);c.stroke();c.setLineDash([]);c.globalAlpha=1}
    lab("45° TO THE FLOW",190,-70,Wt[2]*seg(p,.38,.48),Math.cos(-.39)*118,Math.sin(-.39)*118,0);
    /* step 4: name a large particle being carried along the beam, and a small one that stays */
    var big=null,small=null;r.parts.forEach(function(q){if(!q.sx)return;var xx=q.x;if(q.p.k===2&&q.y<-20&&xx>40&&xx<200&&(!big||xx>big.x))big=q;if(q.p.k===0&&xx>-30&&xx<200&&(!small||xx<small.x))small=q});
    if(big)lab("LARGER · MOVED FURTHER",big.x-10,big.y-120,Wt[3],big.x,big.y);
    if(small)lab("SMALLER · STAY IN LINE",small.x+40,small.y+120,Wt[3],small.x,small.y);
    lab("BARRIER",380,-170,Wt[4],420,-18,0);
    lab("SELECTED SIZE",560,-140,Wt[4],560,-56);
    lab("THE REST FLOW ON",470,112,Wt[4],520,40);
  }
  function loop(){if(!alive)return;if(!cv.isConnected){alive=false;io.disconnect();return}if(vis)draw();requestAnimationFrame(loop)}
  var io=new IntersectionObserver(function(es){vis=es[0].isIntersecting});io.observe(cv);
  size();draw();loop();
  return {set:function(v){pT=v},snap:function(v){p=pT=v;draw()},resize:function(){size();draw()},kill:function(){alive=false;io.disconnect()}};
}
function storyDraw(){
  var cv=$("#storyCv");if(!cv)return function(){};
  if(story)story.kill();story=makeStory(cv);var me=story;
  var ro=new ResizeObserver(function(){if(cv.isConnected)me.resize();else ro.disconnect()});ro.observe(cv);
  return function(p,b){if(!cv.isConnected){me.kill();ro.disconnect();return}me.set(p);cv.style.opacity=(.15+.85*b).toFixed(3)};
}
