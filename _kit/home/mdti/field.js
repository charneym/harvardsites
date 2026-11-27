/* ================= HERO FIELD: a crafted render of MDTi's flagship product (HOME_BRIEF update 2c, medtech): the Ortho-Glide lower
   limb exerciser as shown on mdti.co.uk (the yellow moulded base with the ORTHO-GLIDE lettering round its rim and the perforated
   replaceable insert pad), drawn on canvas in real material light, set on the deep-teal ink with a long low glow in the logo blue
   so it never reads as a pasted panel (DP/DJ). Motion: the pad glides slowly inside the base, as it does in use, and a very slow
   push-in; no pointer response (CZ). On phones it sits in the top band and fades into the ink above the text. ================= */
/* Ortho-Glide render: a glossy yellow moulded dish seen at ~35deg, with the perforated foam pad that glides inside it */
function drawDish(c,cx,cy,S,t,e){
  var k=.56,H=S*.16,Ri=S*.885,Rf=S*.70,Rb=S*.90;
  function ell(x,y,rx,ry){c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2)}
  c.save();c.globalAlpha=e;
  var yTop=cy-H*.5,yBase=cy+H*.5;            /* rim plane and base plane centres */
  /* cast shadow */
  c.save();c.translate(cx+S*.04,yBase+S*.05);c.scale(1,k*.9);
  var sg=c.createRadialGradient(0,0,S*.6,0,0,S*1.25);sg.addColorStop(0,"rgba(0,8,14,.6)");sg.addColorStop(.55,"rgba(0,8,14,.28)");sg.addColorStop(1,"rgba(0,8,14,0)");
  c.fillStyle=sg;c.fillRect(-S*1.4,-S*1.4,S*2.8,S*2.8);c.restore();
  /* outer wall: between the rim ellipse and the base ellipse */
  c.beginPath();c.ellipse(cx,yTop,S,S*k,0,0,Math.PI,false);c.ellipse(cx,yBase,Rb,Rb*k,0,Math.PI,0,true);c.closePath();
  var wg=c.createLinearGradient(cx-S,0,cx+S,0);
  wg.addColorStop(0,"#8a5600");wg.addColorStop(.18,"#c98a05");wg.addColorStop(.42,"#f0b915");wg.addColorStop(.62,"#e6a80c");wg.addColorStop(.88,"#a86c00");wg.addColorStop(1,"#6e4300");
  c.fillStyle=wg;c.fill();
  var wv=c.createLinearGradient(0,yTop,0,yBase+Rb*k);wv.addColorStop(0,"rgba(255,230,120,0)");wv.addColorStop(.75,"rgba(60,30,0,.0)");wv.addColorStop(1,"rgba(40,20,0,.45)");c.fillStyle=wv;c.fill();
  /* rim top surface */
  ell(cx,yTop,S,S*k);
  var rg=c.createLinearGradient(cx-S*.8,yTop-S*k,cx+S*.6,yTop+S*k);
  rg.addColorStop(0,"#ffe680");rg.addColorStop(.35,"#ffd02a");rg.addColorStop(.7,"#f2b90e");rg.addColorStop(1,"#d99a00");
  c.fillStyle=rg;c.fill();
  /* inside of the dish: the inner wall falls from Ri to the floor */
  var fy=yTop+H*.95;                          /* floor centre (lower than the rim) */
  c.save();ell(cx,yTop,Ri,Ri*k);c.clip();
  var ig=c.createLinearGradient(0,yTop-Ri*k,0,yTop+Ri*k);
  ig.addColorStop(0,"#ffd84a");ig.addColorStop(.3,"#f7c11b");ig.addColorStop(.7,"#eab010");ig.addColorStop(1,"#c88a00");
  c.fillStyle=ig;c.fillRect(cx-S,yTop-S,2*S,2*S);
  /* the front inner wall is in its own shade */
  c.beginPath();c.ellipse(cx,yTop,Ri,Ri*k,0,0,Math.PI);c.ellipse(cx,fy,Rf,Rf*k,0,Math.PI,0,true);c.closePath();
  var fw=c.createLinearGradient(0,yTop,0,yTop+Ri*k);fw.addColorStop(0,"rgba(150,90,0,.0)");fw.addColorStop(1,"rgba(150,90,0,.35)");c.fillStyle=fw;c.fill();
  /* floor */
  ell(cx,fy,Rf,Rf*k);var flg=c.createRadialGradient(cx-Rf*.25,fy-Rf*k*.3,0,cx,fy,Rf*1.05);
  flg.addColorStop(0,"#ffd33a");flg.addColorStop(.7,"#f4bc12");flg.addColorStop(1,"#e2a508");c.fillStyle=flg;c.fill();
  /* concentric moulding ring on the floor */
  c.strokeStyle="rgba(150,95,0,.22)";c.lineWidth=Math.max(1,S*.006);ell(cx,fy,Rf*.97,Rf*.97*k);c.stroke();
  c.strokeStyle="rgba(255,240,170,.35)";ell(cx,fy+S*.004,Rf*.975,Rf*.975*k);c.stroke();
  /* the pad: a perforated foam insert, gliding slowly */
  var gx=Math.sin(t*.21)*S*.045+Math.sin(t*.13)*S*.02,gy=Math.cos(t*.17)*S*.04;
  drawPadC(c,cx+gx,fy+gy*k-S*.02,S*1.14,k,S);
  c.restore();
  /* rim lip highlight */
  c.lineWidth=Math.max(1,S*.012);
  c.strokeStyle="rgba(255,248,210,.75)";c.beginPath();c.ellipse(cx,yTop,S*.995,S*k*.995,0,Math.PI*1.05,Math.PI*1.62);c.stroke();
  
  c.strokeStyle="rgba(130,80,0,.45)";c.lineWidth=Math.max(1,S*.006);c.beginPath();c.ellipse(cx,yTop,Ri,Ri*k,0,Math.PI*1.1,Math.PI*1.9);c.stroke();
  /* embossed lettering around the rim, tone on tone */
  var txt="ORTHO-GLIDE          ORTHO-GLIDE          ORTHO-GLIDE",fs=S*.052,rm=(S+Ri)/2,a0=-Math.PI*.98,da=fs*.95/rm;
  c.font="700 "+fs.toFixed(1)+"px 'Archivo',Arial,sans-serif";c.textAlign="center";c.textBaseline="middle";
  for(var i=0;i<txt.length;i++){var a=a0+i*da;if(a>Math.PI*.0)break;var px=cx+rm*Math.cos(a),py=yTop+rm*k*Math.sin(a);
    c.save();c.translate(px,py);c.scale(1,k);c.rotate(a+Math.PI/2);c.fillStyle="rgba(196,132,0,.55)";c.fillText(txt[i],0,0);c.fillStyle="rgba(255,236,150,.5)";c.fillText(txt[i],-fs*.03,-fs*.05);c.restore()}
  /* specular sheen across the near rim */
  c.save();ell(cx,yTop,S,S*k);c.clip();var sp=c.createRadialGradient(cx-S*.45,yTop-S*k*.55,0,cx-S*.45,yTop-S*k*.55,S*.55);
  sp.addColorStop(0,"rgba(255,255,240,.32)");sp.addColorStop(1,"rgba(255,255,240,0)");c.fillStyle=sp;c.fillRect(cx-S,yTop-S,2*S,2*S);c.restore();
  c.restore();
}
/* the pad and its perforations are drawn once per size into an offscreen canvas, then placed each frame (cheap at 4x CPU) */
var PADC={key:"",cv:null};
function drawPadC(c,x,y,w,k,S){
  var m=c.getTransform(),r=m.a||1,wk=Math.max(24,Math.round(w/24)*24),Sk=S*wk/w,key=wk+"|"+r;
  if(PADC.key!==key){var W=wk*1.3,H=wk*k*1.3+Sk*.2,o=document.createElement("canvas");o.width=Math.ceil(W*r);o.height=Math.ceil(H*r);
    var oc=o.getContext("2d");oc.setTransform(r,0,0,r,0,0);drawPad(oc,W/2,H/2-Sk*.05,wk,k,Sk);PADC={key:key,cv:o,W:W,H:H,S:Sk}}
  var f=w/wk;c.drawImage(PADC.cv,x-PADC.W*f/2,y-(PADC.H/2-PADC.S*.05)*f,PADC.W*f,PADC.H*f)}
function padPath(c,x,y,w,k){
  /* the pad's outline in plan: a broad heel shape, straight-ish front, rounded back, with a small notch */
  var P=[[-.92,-.55],[-.6,-.92],[.25,-.98],[.78,-.78],[1,-.2],[.95,.35],[.62,.78],[.05,.95],[-.2,.93],[-.24,.83],[-.32,.82],[-.38,.92],[-.7,.75],[-.95,.25]];
  c.beginPath();
  for(var i=0;i<P.length;i++){var p=P[i],q=P[(i+1)%P.length],mx=(p[0]+q[0])/2,my=(p[1]+q[1])/2;
    if(i===0)c.moveTo(x+mx*w*.5,y+my*w*.5*k);else c.quadraticCurveTo(x+p[0]*w*.5,y+p[1]*w*.5*k,x+mx*w*.5,y+my*w*.5*k)}
  var p=P[0],q=P[1];c.quadraticCurveTo(x+p[0]*w*.5,y+p[1]*w*.5*k,x+(p[0]+q[0])/4*w,y+(p[1]+q[1])/4*w*k);c.closePath();
}
function drawPad(c,x,y,w,k,S){
  var th=S*.035,rot=-.18;
  c.save();c.translate(x,y);c.rotate(rot*.25);
  /* soft contact shadow */
  c.save();c.translate(S*.02,th*.9);c.scale(1.04,1.08);padPath(c,0,0,w,k);c.fillStyle="rgba(110,64,0,.38)";c.filter="blur("+Math.max(1,S*.012).toFixed(1)+"px)";c.fill();c.restore();
  /* the foam's edge */
  padPath(c,0,th*.6,w,k);c.fillStyle="#6d5a33";c.fill();
  padPath(c,0,th*.3,w,k);c.fillStyle="#8f7a4c";c.fill();
  /* top face */
  padPath(c,0,0,w,k);var pg=c.createLinearGradient(-w*.5,-w*.5*k,w*.5,w*.5*k);pg.addColorStop(0,"#f4e6bd");pg.addColorStop(.5,"#e9d6a2");pg.addColorStop(1,"#d6bf86");c.fillStyle=pg;c.fill();
  /* perforations */
  c.save();padPath(c,0,0,w,k);c.clip();
  var st=w*.042,r=st*.15;
  for(var gx=-w*.52;gx<w*.52;gx+=st)for(var gy=-w*.52;gy<w*.52;gy+=st){var px=gx,py=gy*k;
    c.beginPath();c.ellipse(px,py,r,r*k,0,0,Math.PI*2);c.fillStyle="rgba(84,64,28,.78)";c.fill();
    c.beginPath();c.ellipse(px+r*.25,py+r*k*.45,r*.7,r*k*.5,0,0,Math.PI*2);c.fillStyle="rgba(250,240,210,.35)";c.fill()}
  c.restore();
  /* edge highlight */
  c.lineWidth=Math.max(1,S*.004);c.strokeStyle="rgba(255,250,230,.6)";padPath(c,0,0,w,k);c.stroke();
  c.restore();
}

var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},HY=0,G=null,ok=true;
  var BG="#062734";
  function h1r(){var e=document.querySelector("#view h1")||document.querySelector("h1"),r=0;if(!e)return 0;try{var tw=document.createTreeWalker(e,4),n,g=document.createRange();while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;g.selectNodeContents(n);[].forEach.call(g.getClientRects(),function(b){if(b.width>0&&b.right>r)r=b.right})}}catch(_){}return r}
  /* DO: the open area right of the H1; its centre is held at 62-75% of the width and the subject is sized to fit with room both sides */
  var HR=0;function OA(){var L=Math.max(HR+Math.max(140,w*.08),w*.5),R=w-Math.max(48,w*.045),cx=Math.min(Math.max((L+R)/2,w*.62),w*.75);return {cx:cx,half:Math.min(cx-L,R-cx)}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  var AR=1.42;  /* render aspect (w/h): dish 2S wide, ~1.41S tall with its shadow */
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var ey=mob?document.querySelector("#view .hero .eyebrow"):null,eyT=ey?ey.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var A=mob?null:OA(),top=mob?100:Math.max(108,h*.13),bot=mob?Math.max(250,eyT-56):h-Math.max(40,h*.06);
    var U=mob?bot+18:h;
    var ih=Math.min(1000,mob?Math.min(bot-top,w*.8/AR):Math.min(bot-top,2*A.half/AR*.96)*.97),iw=ih*AR;
    var kx=mob?w*.5:A.cx,ky=(top+bot)/2;
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h,L0:mob?0:Math.max(HR+Math.max(110,w*.07),w*.47),Rf:w-Math.max(36,w*.02),R0:0};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;HR=h1r();cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow breath: push in ~3% over ~44s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/44),sc=(1+.03*k)*(1+.035*(1-e));
      var S=G.iw*.5*sc*(G.mob?1:.9),dx=G.kx,dy=G.ky-k*G.ih*.008+HY;
      /* a low glow in the logo blue painted across the WHOLE canvas, so nothing has an edge (DJ) */
      var ggx=G.kx,ggy=G.mob?G.bh*.5:G.ky,ggr=Math.max(w,h)*.7;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(1,124,167,"+(.34*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(1,90,124,"+(.16*e).toFixed(3)+")");ag.addColorStop(1,"rgba(6,39,52,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      drawDish(c,dx,dy,S,t,e);
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.54,0);lv.addColorStop(0,"rgba(4,28,38,.95)");lv.addColorStop(.6,"rgba(4,28,38,.55)");lv.addColorStop(1,"rgba(4,28,38,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(4,28,38,.6)");tv.addColorStop(1,"rgba(4,28,38,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.82,0,h);bv.addColorStop(0,"rgba(6,39,52,0)");bv.addColorStop(1,"rgba(6,39,52,.5)");c.fillStyle=bv;c.fillRect(0,h*.82,w,h*.18+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,74);tv2.addColorStop(0,"rgba(4,28,38,.6)");tv2.addColorStop(1,"rgba(4,28,38,0)");c.fillStyle=tv2;c.fillRect(0,0,w,74);
        var mv=c.createLinearGradient(0,G.bh-46,0,G.bh);mv.addColorStop(0,"rgba(6,39,52,0)");mv.addColorStop(1,"rgba(6,39,52,1)");c.fillStyle=mv;c.fillRect(0,G.bh-46,w,47);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  try{document.fonts.ready.then(function(){setTimeout(size,60)})}catch(_){}setTimeout(size,1800);setTimeout(size,4200);
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40;var hy=0,hr=G&&!G.mob?document.querySelector("#view #hero"):null;if(hr){var b=hr.getBoundingClientRect();if(b.bottom>0)hy=Math.min(0,b.top)}if(hy!==HY){HY=hy;frame(true)}},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();
