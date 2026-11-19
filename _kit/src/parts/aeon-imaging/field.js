/* ================= HERO FIELD: the back of the eye, as a retinal camera sees it. Aeon's own subject: a colour
   fundus (optic disc, vessel arcades around the macula, the fovea's reflex) lit in a dark room, and across it the
   thin near-infrared line of a line-scanning ophthalmoscope stepping down the retina, the band it has just read
   briefly sharper. The fundus is painted once to an offscreen canvas; each frame only moves the scan line.
   It animates on its own; no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oBg=null,oF=null,oN=null;
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    if(mob){var top=70,bot=h*.36,R=Math.min(w*.4,(bot-top)*.62);return {mob:mob,cx:w*.66,cy:top+R*.92,R:R}}
    var R=Math.max(150,Math.min(h*.37,cw*.24));return {mob:mob,cx:side+cw*.72,cy:h*.5,R:R};
  }
  function size(){dpr=Math.min(devicePixelRatio||1,2);w=cv.clientWidth||innerWidth;h=cv.clientHeight||innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();frame(true)}
  /* one vessel: a tapering curve that wanders, bends around the macula and branches */
  function vessel(g,R,x,y,a,len,wd,cv0,art,rnd,depth){
    var st=R*.014,n=Math.round(len/st),pts=[[x,y]],ws=[wd],ph=rnd()*6;
    for(var i=0;i<n;i++){a+=cv0+(rnd()-.5)*.05+Math.sin(i*.35+ph)*.012;x+=Math.cos(a)*st;y+=Math.sin(a)*st;pts.push([x,y]);ws.push(wd*(1-.6*i/n));
      if(x*x+y*y>R*R*.99)break;
      if(depth<2&&i>6&&rnd()<(depth?.05:.06)){var s=rnd()<.5?1:-1;vessel(g,R,x,y,a+s*(.5+rnd()*.4),len*(.3+rnd()*.25)*(1-i/n*.5),ws[ws.length-1]*.6,s*.01,art,rnd,depth+1)}}
    function stroke(col,k){g.strokeStyle=col;g.lineCap="round";g.lineJoin="round";
      for(var j=0;j<pts.length-1;j+=6){var e=Math.min(pts.length-1,j+6);g.lineWidth=ws[j]*k;g.beginPath();g.moveTo(pts[j][0],pts[j][1]);for(var q=j+1;q<=e;q++)g.lineTo(pts[q][0],pts[q][1]);g.stroke()}}
    stroke(art?"#a8301a":"#6a1410",1);
    if(wd>R*.009)stroke(art?"#d9714a":"#8a2a1c",.3);
  }
  function paintFundus(R,mono){
    var S=Math.ceil(R*2.6),o=document.createElement("canvas");o.width=Math.round(S*dpr);o.height=Math.round(S*dpr);var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,S/2*dpr,S/2*dpr);
    g.save();g.beginPath();g.arc(0,0,R,0,6.283);g.clip();
    var bg=g.createRadialGradient(-R*.1,0,0,0,0,R);bg.addColorStop(0,"#b33a17");bg.addColorStop(.35,"#d0521f");bg.addColorStop(.7,"#c2451c");bg.addColorStop(1,"#7d2410");
    g.fillStyle=bg;g.fillRect(-R,-R,2*R,2*R);
    /* choroidal texture: soft mottling */
    var r=rng(11);for(var i=0;i<900;i++){var a=r()*6.283,d=Math.sqrt(r())*R,rr=R*(.01+r()*.035);g.fillStyle=(r()<.5?"rgba(110,24,10,":"rgba(236,120,62,")+(.05+r()*.07).toFixed(3)+")";g.beginPath();g.ellipse(Math.cos(a)*d,Math.sin(a)*d,rr*1.6,rr,r()*3,0,6.283);g.fill()}
    /* macula and fovea */
    var mx=-R*.16,my=R*.03,mg=g.createRadialGradient(mx,my,0,mx,my,R*.3);mg.addColorStop(0,"rgba(70,14,8,.7)");mg.addColorStop(.45,"rgba(96,22,10,.35)");mg.addColorStop(1,"rgba(96,22,10,0)");
    g.fillStyle=mg;g.fillRect(-R,-R,2*R,2*R);
    var fg=g.createRadialGradient(mx,my,0,mx,my,R*.025);fg.addColorStop(0,"rgba(255,226,180,.85)");fg.addColorStop(1,"rgba(255,226,180,0)");g.fillStyle=fg;g.beginPath();g.arc(mx,my,R*.025,0,6.283);g.fill();
    g.strokeStyle="rgba(255,200,150,.12)";g.lineWidth=R*.006;g.beginPath();g.ellipse(mx,my,R*.13,R*.11,0,0,6.283);g.stroke();
    /* optic disc: nasal (right), the vessels leave from it */
    var dx=R*.44,dy=-R*.03,dr=R*.115;
    var dg=g.createRadialGradient(dx,dy,0,dx,dy,dr*1.5);dg.addColorStop(0,"rgba(255,234,190,.0)");dg.addColorStop(.6,"rgba(250,190,120,.25)");dg.addColorStop(1,"rgba(250,190,120,0)");g.fillStyle=dg;g.beginPath();g.arc(dx,dy,dr*1.5,0,6.283);g.fill();
    var dd=g.createRadialGradient(dx+dr*.15,dy,0,dx,dy,dr);dd.addColorStop(0,"#fff4d6");dd.addColorStop(.38,"#f7d79c");dd.addColorStop(.8,"#eaa964");dd.addColorStop(1,"#d9874a");
    g.fillStyle=dd;g.beginPath();g.ellipse(dx,dy,dr*.9,dr,0,0,6.283);g.fill();
    g.strokeStyle="rgba(150,60,30,.35)";g.lineWidth=R*.006;g.stroke();
    /* the arcades: temporal ones arch around the macula, nasal ones run out toward the edge */
    var rv=rng(5),V=[[-2.2,-.017,1.3],[2.2,.017,1.3],[-1.1,.004,.6],[1.1,-.004,.6],[-.2,.002,.55],[.3,-.002,.5],[-2.85,-.006,.6],[2.9,.006,.55]];
    for(var p=0;p<2;p++)V.forEach(function(v,k){var off=(p?.1:-.1),art=!!p;vessel(g,R,dx+Math.cos(v[0]+off)*dr*.3,dy+Math.sin(v[0]+off)*dr*.3,v[0]+off*.6,R*v[2],R*(k<2?(art?.022:.03):(art?.014:.019)),v[1],art,rv,0)});
    /* edge of the field: the camera's dark vignette */
    var vg=g.createRadialGradient(0,0,R*.62,0,0,R);vg.addColorStop(0,"rgba(20,4,6,0)");vg.addColorStop(.8,"rgba(30,6,8,.35)");vg.addColorStop(1,"rgba(10,3,8,.92)");g.fillStyle=vg;g.fillRect(-R,-R,2*R,2*R);
    if(mono){g.globalCompositeOperation="saturation";g.fillStyle="#000";g.fillRect(-R,-R,2*R,2*R);g.globalCompositeOperation="screen";g.fillStyle="#3c4478";g.fillRect(-R,-R,2*R,2*R);g.globalCompositeOperation="multiply";g.fillStyle="#d4daff";g.fillRect(-R,-R,2*R,2*R);g.globalCompositeOperation="source-over"}
    g.restore();
    return {c:o,S:S};
  }
  function build(){
    var o=document.createElement("canvas");o.width=cv.width;o.height=cv.height;var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);
    var bg=g.createRadialGradient(G.cx,G.cy,0,G.cx,G.cy,Math.max(w,h)*.85);bg.addColorStop(0,"#121a3e");bg.addColorStop(.45,"#0a0f28");bg.addColorStop(1,"#04071a");
    g.fillStyle=bg;g.fillRect(0,0,w,h);
    /* the warm glow the lit retina throws into the dark room */
    var gl=g.createRadialGradient(G.cx,G.cy,G.R*.9,G.cx,G.cy,G.R*1.7);gl.addColorStop(0,"rgba(190,70,40,.20)");gl.addColorStop(.4,"rgba(120,40,60,.07)");gl.addColorStop(1,"rgba(40,20,60,0)");g.fillStyle=gl;g.fillRect(0,0,w,h);
    /* a fine iris-blue ring: the instrument's aperture around the field */
    g.strokeStyle="rgba(150,162,255,.22)";g.lineWidth=1;g.beginPath();g.arc(G.cx,G.cy,G.R*1.06,0,6.283);g.stroke();
    g.strokeStyle="rgba(150,162,255,.10)";g.beginPath();g.arc(G.cx,G.cy,G.R*1.12,0,6.283);g.stroke();
    /* tick marks on the outer ring, like a lens barrel scale */
    for(var i=0;i<120;i++){var a=i/120*6.283,l=i%10?4:9;g.strokeStyle="rgba(150,162,255,"+(i%10?.14:.3)+")";g.beginPath();g.moveTo(G.cx+Math.cos(a)*G.R*1.12,G.cy+Math.sin(a)*G.R*1.12);g.lineTo(G.cx+Math.cos(a)*(G.R*1.12+l),G.cy+Math.sin(a)*(G.R*1.12+l));g.stroke()}
    oBg=o;oF=paintFundus(G.R,false);oN=paintFundus(G.R,true);
  }
  function scanY(t){var per=7.5,u=(t%per)/per;return -G.R+u*2.3*G.R}
  function frame(once){
    var t=(performance.now()-t0)/1000+2;dim+=(dimT-dim)*.08;var e=IN.v*dim,R=G.R,cx=G.cx,cy=G.cy+SP.v*R*.12;
    c.setTransform(dpr,0,0,dpr,0,0);c.globalAlpha=1;c.globalCompositeOperation="source-over";
    if(oBg)c.drawImage(oBg,0,0,w,h);
    c.globalAlpha=e;
    var S=oF.S;c.drawImage(oF.c,cx-S/2,cy-S/2,S,S);
    /* the band just read: near-infrared (cool) rendering, fading behind the line */
    var y=scanY(t),bh=R*.24;
    if(y>-R-bh&&y<R+R*.05){
      c.save();c.beginPath();c.arc(cx,cy,R,0,6.283);c.clip();
      c.beginPath();c.rect(cx-R,cy+y-bh,2*R,bh);c.clip();
      c.drawImage(oN.c,cx-S/2,cy-S/2,S,S);
      c.restore();
      /* fade the top of the band back to colour by redrawing colour with a gradient mask */
      c.save();c.beginPath();c.arc(cx,cy,R,0,6.283);c.clip();c.beginPath();c.rect(cx-R,cy+y-bh,2*R,bh*.7);c.clip();
      var steps=8;for(var k=0;k<steps;k++){var y0=cy+y-bh+k*bh*.7/steps;c.save();c.beginPath();c.rect(cx-R,y0,2*R,bh*.7/steps+1);c.clip();c.globalAlpha=e*(1-k/steps);c.drawImage(oF.c,cx-S/2,cy-S/2,S,S);c.restore()}
      c.restore();
      /* the line itself */
      c.save();c.beginPath();c.arc(cx,cy,R,0,6.283);c.clip();c.globalCompositeOperation="lighter";
      var lg=c.createLinearGradient(0,cy+y-R*.05,0,cy+y+R*.02);lg.addColorStop(0,"rgba(150,162,255,0)");lg.addColorStop(.7,"rgba(170,182,255,.28)");lg.addColorStop(1,"rgba(170,182,255,0)");
      c.fillStyle=lg;c.fillRect(cx-R,cy+y-R*.05,2*R,R*.07);
      c.globalAlpha=e*.85;c.strokeStyle="rgba(225,230,255,.9)";c.lineWidth=G.mob?1:1.3;c.beginPath();c.moveTo(cx-R,cy+y);c.lineTo(cx+R,cy+y);c.stroke();
      c.restore();
      /* where the line meets the field edge: two small markers on the ring */
      var dxl=Math.sqrt(Math.max(0,R*R-y*y))*1.06;if(Math.abs(y)<R){c.globalAlpha=e*.8;c.fillStyle="#aab4ff";c.fillRect(cx-dxl-6,cy+y-1,6,2);c.fillRect(cx+dxl,cy+y-1,6,2)}
      c.globalAlpha=e;
    }
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},
    focus:function(){if(!G)return [w/2,h/2];return [G.cx,G.cy]}};
})();
