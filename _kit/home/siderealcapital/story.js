/* the story scene (BL/BY/DB): ONE engraved night elevation of a family-owned manufacturing plant, the kind of business
   Sidereal backs (niche manufacturers, often taking their first institutional investor). The plant stands alone under the
   stars; each element of the firm's own approach (lower middle-market focus, analytical discipline, strategic M&A,
   proactive management) inks one more layer of the same drawing, until a lit, larger business works through the night. */
function F(n){return n.toFixed(1)}
function saw(x,y,w,n,th){/* sawtooth roof line from (x,y) across w with n teeth of height th: vertical glazing faces right */
  var d='M'+F(x)+' '+F(y),tw=w/n;for(var i=0;i<n;i++){d+='L'+F(x+(i+1)*tw)+' '+F(y-th)+'V'+F(y)}return d}
function plant(o){/* main plant: walls, sawtooth roof, chimney, office block */
  var x=o.x,w=o.w,gy=o.gy,wh=o.wh,th=o.th,P={};var top=gy-wh;
  P.out='M'+F(x)+' '+F(gy)+'V'+F(top)+'H'+F(x+w)+'V'+F(gy)+saw(x,top,w,o.n,th).replace(/^M/,'M');
  /* roof glazing: thin lines inside each tooth */
  var tw=w/o.n,gl='';for(var i=0;i<o.n;i++){var ex=x+(i+1)*tw;gl+='M'+F(ex-2)+' '+F(top-th+5)+'V'+F(top-2)+'M'+F(ex-6)+' '+F(top-th*.62)+'V'+F(top-2)}P.glz=gl;
  /* brick coursing hint and a plinth */
  P.pl='M'+F(x)+' '+F(gy-8)+'H'+F(x+w);
  /* chimney */
  var cx=x+w*o.cx,cw=o.cw;P.ch='M'+F(cx)+' '+F(top-th)+'V'+F(top-o.chh)+'H'+F(cx+cw)+'V'+F(top-th*.3)+'M'+F(cx-3)+' '+F(top-o.chh)+'H'+F(cx+cw+3)+'V'+F(top-o.chh+5)+'H'+F(cx-3)+'Z';
  /* office block on the left with a parapet and a door */
  var ox=x-o.ow,oh=o.oh;P.off='M'+F(ox)+' '+F(gy)+'V'+F(gy-oh)+'H'+F(x)+'M'+F(ox-3)+' '+F(gy-oh)+'H'+F(x)+'M'+F(ox-3)+' '+F(gy-oh)+'V'+F(gy-oh-5)+'H'+F(x)+
    'M'+F(ox+o.ow*.38)+' '+F(gy)+'V'+F(gy-oh*.42)+'H'+F(ox+o.ow*.62)+'V'+F(gy);
  /* windows: a row of tall factory windows and two office windows */
  P.win=[];var nw=o.nw,ww=(w-24)/nw;for(var k=0;k<nw;k++)P.win.push([x+12+k*ww+ww*.2,top+wh*.18,ww*.6,wh*.42]);
  P.ow=[[ox+o.ow*.12,gy-oh*.78,o.ow*.2,oh*.26],[ox+o.ow*.68,gy-oh*.78,o.ow*.2,oh*.26]];
  /* loading dock: two roller doors at the right */
  P.dock=[[x+w-o.dk*2-18,gy-wh*.36,o.dk,wh*.36],[x+w-o.dk-10,gy-wh*.36,o.dk,wh*.36]];
  P.top=top;P.th=th;P.ox=ox;return P;
}
function shed(o){/* an add-on: gable roof (g) or small sawtooth (s) */
  var x=o.x,w=o.w,gy=o.gy,wh=o.wh,top=gy-wh,P={};
  if(o.t==="g")P.out='M'+F(x)+' '+F(gy)+'V'+F(top)+'L'+F(x+w/2)+' '+F(top-o.rh)+'L'+F(x+w)+' '+F(top)+'V'+F(gy)+'M'+F(x-4)+' '+F(top+3)+'L'+F(x+w/2)+' '+F(top-o.rh-1)+'L'+F(x+w+4)+' '+F(top+3);
  else P.out='M'+F(x)+' '+F(gy)+'V'+F(top)+'H'+F(x+w)+'V'+F(gy)+saw(x,top,w,o.n,o.rh);
  P.win=[];var nw=o.nw,ww=(w-16)/nw;for(var k=0;k<nw;k++)P.win.push([x+8+k*ww+ww*.22,top+wh*.22,ww*.56,wh*.34]);
  P.door=[x+w*.62,gy-wh*.42,w*.24,wh*.42];P.top=top;return P;
}
function star8(x,y,r){var d='',k;for(k=0;k<16;k++){var a=k*Math.PI/8-Math.PI/2,rr=k%2?r*.22:(k%4?r*.55:r);d+=(k?'L':'M')+F(x+Math.cos(a)*rr)+' '+F(y+Math.sin(a)*rr)}return d+'Z'}
function truck(x,gy,s){var f=function(a,b){return F(x+a*s)+' '+F(gy-b*s)};
  return 'M'+f(0,6)+'V'+F(gy-34*s)+'H'+F(x+58*s)+'V'+F(gy-6*s)+'Z M'+f(60,6)+'V'+F(gy-24*s)+'H'+F(x+72*s)+'L'+f(80,14)+'V'+F(gy-6*s)+'Z M'+f(64,22)+'H'+f(72,22)+'L'+f(77,15)+'H'+f(64,15)+'Z'+
    'M'+f(12,6)+'m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M'+f(48,6)+'m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M'+f(70,6)+'m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0'}
function person(x,gy,s,v){var hh=gy-34*s;
  return 'M'+F(x)+' '+F(hh-6*s)+'m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0'+
   'M'+F(x-6*s)+' '+F(gy-16*s)+'L'+F(x-5*s)+' '+F(hh+1*s)+'Q'+F(x)+' '+F(hh-1*s)+' '+F(x+5*s)+' '+F(hh+1*s)+'L'+F(x+6*s)+' '+F(gy-16*s)+
   'M'+F(x-3*s)+' '+F(gy-16*s)+'L'+F(x-3.4*s+v)+' '+F(gy)+'M'+F(x+3*s)+' '+F(gy-16*s)+'L'+F(x+3.4*s-v)+' '+F(gy)}
function works(o){
  var W=o.W,H=o.H,gy=o.gy,i,k,R=(function(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}})(5);
  var A=plant(o.p),S=o.s.map(shed);
  var g='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+W+' '+H+'" aria-hidden="true">';
  /* base: neatline, a field of stars, grade line and hatching, the plant itself, and a title block */
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="'+(W-1)+'" height="'+(H-1)+'"/>';
  for(i=0;i<o.nst;i++){var sx=14+R()*(W-28),sy=14+Math.pow(R(),1.4)*(o.skyH-14),sr=R()<.12?1.5:.8;if(sx>o.l1x-o.l1w&&sx<o.l1x+o.l1w&&sy<o.l1y+8)continue;g+='<circle class="dot sky" cx="'+F(sx)+'" cy="'+F(sy)+'" r="'+sr+'"/>'}
  g+='<path class="sD gr" d="M14 '+F(gy)+'H'+(W-14)+'"/><path class="sD kb" d="M14 '+F(gy+o.kb)+'H'+(W-14)+'"/>';
  var hz='',nh=o.mob?34:66;for(i=0;i<nh;i++){var hx=18+i*((W-36)/nh);hz+='M'+F(hx)+' '+F(gy+o.kb)+'l-9 9'}g+='<path class="sD ht" d="'+hz+'"/>';
  g+='<path class="sD bl" d="'+A.out+'"/><path class="sD bl" d="'+A.off+'"/><path class="sD bl" d="'+A.ch+'"/><path class="sD th" d="'+A.glz+A.pl+'"/>';
  A.win.concat(A.ow).forEach(function(r){g+='<rect class="dot wn0" x="'+F(r[0])+'" y="'+F(r[1])+'" width="'+F(r[2])+'" height="'+F(r[3])+'"/>'});
  A.dock.forEach(function(r){var d='M'+F(r[0])+' '+F(gy)+'V'+F(r[1])+'H'+F(r[0]+r[2])+'V'+F(gy);for(var q=1;q<6;q++)d+='M'+F(r[0])+' '+F(r[1]+r[3]*q/6)+'H'+F(r[0]+r[2]);g+='<path class="dot wn0" d="'+d+'"/>'});
  g+='<g class="tb"><path class="tbl" d="M'+(W-o.tb[0]-14)+' '+(H-14-o.tb[1])+'h'+o.tb[0]+'v'+o.tb[1]+'h-'+o.tb[0]+'Z M'+(W-o.tb[0]-14)+' '+(H-14-o.tb[1]/2)+'h'+o.tb[0]+'"/>'+
     '<text x="'+(W-o.tb[0]-6)+'" y="'+(H-14-o.tb[1]*.62)+'" class="t">'+o.tbT[0]+'</text><text x="'+(W-o.tb[0]-6)+'" y="'+(H-14-o.tb[1]*.13)+'" class="t s">'+o.tbT[1]+'</text></g>';
  g+='</g>';
  /* 1 focus: the guiding star from the firm's mark settles over the one company, and the plant is picked out */
  var st=o.star;g+='<g id="sc1"><ellipse class="orb" cx="'+F(st[0])+'" cy="'+F(st[1])+'" rx="'+F(st[2]*2.1)+'" ry="'+F(st[2]*.8)+'" transform="rotate(-16 '+F(st[0])+' '+F(st[1])+')"/>'+
     '<path class="star" d="'+star8(st[0],st[1],st[2])+'"/><path class="hi" d="'+A.out+'"/><path class="hi" d="'+A.off+'"/>'+
     '<text x="'+F(o.l1x)+'" y="'+F(o.l1y)+'" text-anchor="middle" class="a">'+o.l1+'</text></g>';
  /* 2 analysis: a dimensioned survey of the business and the planned add-ons in dashed line */
  g+='<g id="sc2">';S.forEach(function(s){g+='<path class="plan" d="'+s.out+'"/>'});
  var dy=o.dimY,x0=S[0].top!==undefined?o.s[0].x:0,x1=o.s[o.s.length-1].x+o.s[o.s.length-1].w,ax=A.ox,bx=o.p.x+o.p.w;
  g+='<path class="dim dr" d="M'+F(x0)+' '+F(dy)+'H'+F(x1)+'M'+F(x0)+' '+F(dy-7)+'V'+F(dy+7)+'M'+F(x1)+' '+F(dy-7)+'V'+F(dy+7)+'M'+F(ax)+' '+F(dy-5)+'V'+F(dy+5)+'M'+F(bx)+' '+F(dy-5)+'V'+F(dy+5)+'"/>';
  g+='<path class="tick dr" d="M'+F(ax)+' '+F(dy+5)+'V'+F(o.p.gy-o.p.oh-9)+'M'+F(bx)+' '+F(dy+5)+'V'+F(A.top-A.th-4)+'"/>';
  g+='<text x="'+F(o.l2[0])+'" y="'+F(o.l2[1])+'" text-anchor="'+o.l2[2]+'" class="a">'+o.l2[3]+'</text></g>';
  /* 3 M&A: the add-ons inked solid, joined to the platform by a shared yard road */
  g+='<g id="sc3">';S.forEach(function(s){g+='<path class="add dr" d="'+s.out+'"/>';s.win.forEach(function(r){g+='<rect class="awn0" x="'+F(r[0])+'" y="'+F(r[1])+'" width="'+F(r[2])+'" height="'+F(r[3])+'"/>'});
    var d=s.door;g+='<path class="add dr" d="M'+F(d[0])+' '+F(gy)+'V'+F(d[1])+'H'+F(d[0]+d[2])+'V'+F(gy)+'"/>'});
  g+='<path class="road dr" d="M'+F(o.s[0].x)+' '+F(gy+o.kb*.5)+'H'+F(x1)+'"/>';
  g+='<text x="'+F(o.l3[0])+'" y="'+F(o.l3[1])+'" text-anchor="'+o.l3[2]+'" class="a">'+o.l3[3]+'</text></g>';
  /* 4 management: every window lit, people at work, a truck at the dock */
  g+='<g id="sc4">';A.win.concat(A.ow).forEach(function(r){g+='<rect class="lit" x="'+F(r[0])+'" y="'+F(r[1])+'" width="'+F(r[2])+'" height="'+F(r[3])+'"/>'});
  S.forEach(function(s){s.win.forEach(function(r){g+='<rect class="lit2" x="'+F(r[0])+'" y="'+F(r[1])+'" width="'+F(r[2])+'" height="'+F(r[3])+'"/>'})});
  g+='<path class="glow" d="'+A.glz+'"/>';
  o.fig.forEach(function(fx,j){g+='<path class="fig" d="'+person(fx,gy,o.mob?.72:1,j%2?1.5:-1.5)+'"/>'});
  g+='<path class="van" d="'+truck(o.trk[0],gy+o.kb-2,o.trk[1])+'"/>';
  g+='<text x="'+F(o.l4[0])+'" y="'+F(o.l4[1])+'" text-anchor="'+o.l4[2]+'" class="a">'+o.l4[3]+'</text></g>';
  return g+'</svg>';
}
function scene(){
  if(MOBILE())return works({mob:1,W:400,H:440,gy:318,kb:22,skyH:150,nst:46,tb:[178,34],tbT:["ELEVATION · NIGHT","MANUFACTURING · SERVICES"],dimY:118,dimHx:8,
    p:{x:132,w:172,gy:318,wh:104,th:24,n:4,cx:.72,cw:12,chh:66,ow:40,oh:66,nw:4,dk:20},
    s:[{t:"g",x:16,w:68,gy:318,wh:62,rh:22,nw:2},{t:"s",x:318,w:68,gy:318,wh:70,rh:16,n:2,nw:2}],
    star:[232,52,15],l1:"FIRST INSTITUTIONAL INVESTOR",l1x:200,l1y:24,l1w:150,
    l2:[200,106,"middle","THESIS AND GROWTH PLAN"],l3:[16,370,"start","ADD-ON ACQUISITIONS"],l4:[16,370,"start","INSTITUTIONAL MANAGEMENT"],
    fig:[112,166,250],trk:[296,.62]});
  return works({W:800,H:520,gy:392,kb:26,skyH:190,nst:90,tb:[262,40],tbT:["ELEVATION · FAMILY PLANT AT NIGHT","MANUFACTURING · BUSINESS SERVICES"],dimY:120,dimHx:14,
    p:{x:268,w:300,gy:392,wh:150,th:36,n:5,cx:.76,cw:18,chh:112,ow:66,oh:104,nw:5,dk:30},
    s:[{t:"g",x:40,w:150,gy:392,wh:104,rh:38,nw:3},{t:"s",x:600,w:160,gy:392,wh:112,rh:26,n:3,nw:3}],
    star:[440,62,22],l1:"FIRST INSTITUTIONAL INVESTOR",l1x:400,l1y:30,l1w:180,
    l2:[400,108,"middle","THESIS AND GROWTH PLAN · DIMENSIONED"],l3:[44,452,"start","ADD-ON ACQUISITIONS: BUY AND BUILD"],l4:[44,452,"start","INSTITUTIONAL MANAGEMENT"],
    fig:[226,318,400,452],trk:[488,.9]});
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .dot, #scBase .neat, #scBase .tb",svg),g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),g4:$("#sc4",svg),
    d2:dl("#sc2 .dr"),d3:dl("#sc3 .dr"),hi:$$("#sc1 .hi",svg),t:[$("#sc1 text",svg),$("#sc2 text",svg),$("#sc3 text",svg),$("#sc4 text",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    E.g1.style.opacity=b.toFixed(3);
    E.hi.forEach(function(el){el.style.opacity=(1-.85*s2).toFixed(3)});
    E.g2.style.opacity=(b*(s2>0?1:0)*(1-.55*s3)).toFixed(3);draw(E.d2,s2);
    E.g3.style.opacity=(b*(s3>0?1:0)).toFixed(3);draw(E.d3,s3);
    E.g4.style.opacity=(b*s4).toFixed(3);
    /* the add-on plans give way to the solid add-ons */
    E.t[0].style.opacity=String(1);
    E.t[1].style.opacity=(s2*(1-s3)).toFixed(3);E.t[2].style.opacity=(s3*(1-s4)).toFixed(3);E.t[3].style.opacity=s4.toFixed(3);
  };
}
