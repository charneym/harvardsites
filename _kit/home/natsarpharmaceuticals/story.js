/* The story scene (DB/BL/BY): how RK-33 works (natsarpharmaceuticals.com The Technology, Our Technology: RK-33, and the
   2025-26 releases), as ONE continuous scene in fine line, filling the frame: a tumour cell with its nucleus (DNA) and, in
   the cytoplasm, the two-lobed DDX3 helicase on an RNA duplex. Frame 0 is already complete.
   Step 1 (unwind): RNA runs through the helicase and leaves as separated strands.
   Step 2 (block): RK-33 molecules diffuse in, one seats in the cleft between the lobes; the flow stops and the strands re-pair.
   Step 3 (sensitise): radiation crosses into the nucleus; the DNA breaks and, with repair blocked, stays broken; the
   membrane blebs as the cell dies. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=560;
var CX=384,CY=270,CRX=350,CRY=212;                /* the cell */
var NX=206,NY=280,NR=114;                         /* the nucleus */
var HX0=112,HX1=300,HY=280,HA=19,HP=56;           /* the DNA helix inside it */
var BRK=[174,240];                                /* where radiation breaks it */
var L1X=512,L2X=618,LY=232,LRX=58,LRY=44;         /* DDX3's two RecA-like lobes */
var KX=565,KY=226;                                /* the cleft between them */
var RX0=418,RX1=708,RY=300;                       /* the RNA duplex */
var RKM=[{x:744,y:96,tx:KX,ty:KY},{x:752,y:200,tx:708,ty:200},{x:756,y:420,tx:672,ty:404},{x:720,y:20,tx:440,ty:118}];
function rk33(){ /* RK-33's tricyclic core: imidazole, diazepine, imidazole */
  var poly=function(n,cx,r,rot){var s='',i;for(i=0;i<n;i++){var a=rot+i*2*Math.PI/n;s+=(i?'L':'M')+(cx+r*Math.cos(a)).toFixed(1)+' '+(r*Math.sin(a)).toFixed(1)}return s+'Z'};
  return '<path d="'+poly(5,-22,9,0)+poly(7,0,13.6,Math.PI/7)+poly(5,22,9,Math.PI)+'"/>';
}
function membrane(bleb){var s='',i,n=180;for(i=0;i<=n;i++){var t=i/n*Math.PI*2,
  m=1+bleb*(.035*Math.max(0,Math.sin(t*9+.7))+.02*Math.max(0,Math.sin(t*5-1.1)));
  s+=(i?'L':'M')+(CX+Math.cos(t)*CRX*m).toFixed(1)+' '+(CY+Math.sin(t)*CRY*m).toFixed(1)}return s+'Z'}
function helixSeg(x0,x1){var a='',b='',r='',x,first=true;
  for(x=x0;x<=x1;x+=3){var ph=(x-HX0)/HP*Math.PI*2,y1=HY+HA*Math.sin(ph),y2=HY-HA*Math.sin(ph);
    a+=(first?'M':'L')+x+' '+y1.toFixed(1);b+=(first?'M':'L')+x+' '+y2.toFixed(1);first=false}
  for(x=x0+5;x<x1;x+=11){var p2=(x-HX0)/HP*Math.PI*2;r+='M'+x+' '+(HY+HA*Math.sin(p2)).toFixed(1)+'V'+(HY-HA*Math.sin(p2)).toFixed(1)}
  return '<path class="dn" d="'+a+'"/><path class="dn" d="'+b+'"/><path class="rg" d="'+r+'"/>'}
function vesScene(o){
  var g='';
  var T=function(cls,x,y,txt,anchor,keep){return (o.mob&&!keep)?'':'<text class="'+cls+'"'+(anchor?' text-anchor="'+anchor+'"':'')+' x="'+x+'" y="'+y+'">'+txt+'</text>'};
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<path id="scMem" class="mem" d="'+membrane(0)+'"/>';
  g+='<g id="scBase">';
  g+='<circle class="wl sD" cx="'+NX+'" cy="'+NY+'" r="'+NR+'"/>';
  g+='<circle class="wo sD" cx="'+NX+'" cy="'+NY+'" r="'+(NR-9)+'"/>';
  /* a few organelles so the cytoplasm reads as a cell, kept clear of the helicase */
  g+='<path class="en sD" d="M392 404c18-16 46-16 62 0s44 16 62 0"/>';
  g+='<path class="en sD" d="M402 420c18-12 40-12 56 0s40 12 56 0"/>';
  g+='<ellipse class="en sD" cx="120" cy="140" rx="30" ry="14" transform="rotate(-24 120 140)"/>';
  g+='<ellipse class="en sD" cx="330" cy="440" rx="26" ry="12" transform="rotate(14 330 440)"/>';
  /* DDX3: two RecA-like lobes */
  g+='<ellipse class="wl sD lobe" cx="'+L1X+'" cy="'+LY+'" rx="'+LRX+'" ry="'+LRY+'" transform="rotate(-12 '+L1X+' '+LY+')"/>';
  g+='<ellipse class="wl sD lobe" cx="'+L2X+'" cy="'+LY+'" rx="'+LRX+'" ry="'+LRY+'" transform="rotate(12 '+L2X+' '+LY+')"/>';
  g+='<ellipse class="wo sD" cx="'+(L1X-6)+'" cy="'+(LY-2)+'" rx="'+(LRX-16)+'" ry="'+(LRY-14)+'" transform="rotate(-12 '+L1X+' '+LY+')"/>';
  g+='<ellipse class="wo sD" cx="'+(L2X+6)+'" cy="'+(LY-2)+'" rx="'+(LRX-16)+'" ry="'+(LRY-14)+'" transform="rotate(12 '+L2X+' '+LY+')"/>';
  g+=T('t',KX,166,'DDX3 HELICASE','middle',1);
  g+=T('t',RX1-4,RY+62,'RNA','end');
  g+=T('t',NX,NY+NR+30,'NUCLEUS · DNA','middle',1);
  g+=T('t',60,506,'TUMOUR CELL');
  g+='</g>';
  /* the DNA, in three pieces that part where radiation breaks it */
  g+='<g id="scDna"><g class="hs">'+helixSeg(HX0,BRK[0]-4)+'</g><g class="hs">'+helixSeg(BRK[0]+4,BRK[1]-4)+'</g><g class="hs">'+helixSeg(BRK[1]+4,HX1)+'</g></g>';
  /* the RNA duplex, redrawn each frame */
  g+='<g id="scRna"><path class="rn" id="rnA"/><path class="rn" id="rnB"/><path class="rb" id="rnR"/></g>';
  /* RK-33 */
  g+='<g id="scRk">';RKM.forEach(function(m,k){g+='<g class="md rk" data-k="'+k+'">'+rk33()+'</g>'});g+='</g>';
  /* radiation, from outside the cell into the nucleus */
  g+='<g id="scRad">';
  [[26,40,BRK[0],HY-6],[12,150,BRK[1],HY+4],[70,10,NX+4,HY-40]].forEach(function(q){var x0=q[0],y0=q[1],x1=q[2],y1=q[3],dx=x1-x0,dy=y1-y0,L=Math.sqrt(dx*dx+dy*dy),nx=-dy/L,ny=dx/L,s='',i,N=60;
    for(i=0;i<=N;i++){var u=i/N,w=Math.sin(u*L/9)*3.2;s+=(i?'L':'M')+(x0+dx*u+nx*w).toFixed(1)+' '+(y0+dy*u+ny*w).toFixed(1)}
    g+='<path class="rad" d="'+s+'"/>'});
  g+='</g>';
  /* break marks */
  g+='<g id="scBrk">'+BRK.map(function(x){return '<g class="bk" transform="translate('+x+' '+HY+')"><path d="M-7 -22l14 44M7 -22l-14 44"/></g>'}).join('')+'</g>';
  var ly=SCH-8;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">'+(o.mob?'DDX3 UNWINDS RNA':'DDX3 UNWINDS RNA FOR THE TUMOUR CELL')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">'+(o.mob?'RK-33 BOUND · UNWINDING STOPS':'RK-33 BOUND · UNWINDING STOPS · G1 ARREST')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">'+(o.mob?'DNA BROKEN · REPAIR BLOCKED':'RADIATION BREAKS DNA · REPAIR BLOCKED · CELL DEATH')+'</text></g>';
  return g+'</svg>';
}
function scene(){return vesScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),mem:$("#scMem",svg),lobes:$$("#scBase .lobe",svg),
    hs:$$("#scDna .hs",svg),dna:$("#scDna",svg),rA:$("#rnA",svg),rB:$("#rnB",svg),rR:$("#rnR",svg),rna:$("#scRna",svg),
    rk:$$("#scRk .rk",svg),rad:dl("#scRad .rad",svg),bk:$$("#scBrk .bk",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,lastKey="";
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function rna(ph,sep){var a='',b='',r='',x,first=true;
    var off=function(x){var u=Math.min(1,Math.max(0,(x-590)/90));return sep*u*u*(3-2*u)*50};
    for(x=RX0;x<=RX1;x+=3){var w=5*Math.sin((x-RX0)/34*Math.PI*2-ph),o=off(x);
      a+=(first?'M':'L')+x+' '+(RY-o+w).toFixed(1);b+=(first?'M':'L')+x+' '+(RY+o-w).toFixed(1);first=false}
    var step=11,sh=((ph/(Math.PI*2))*34)%step;
    for(x=RX0+4+sh;x<RX1-2;x+=step){var w2=5*Math.sin((x-RX0)/34*Math.PI*2-ph),o2=off(x),ya=RY-o2+w2,yb=RY+o2-w2;
      if(o2<4)r+='M'+x.toFixed(1)+' '+ya.toFixed(1)+'V'+yb.toFixed(1);
      else r+='M'+x.toFixed(1)+' '+ya.toFixed(1)+'v6M'+x.toFixed(1)+' '+yb.toFixed(1)+'v-6'}
    E.rA.setAttribute("d",a);E.rB.setAttribute("d",b);E.rR.setAttribute("d",r)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mem,b);op(E.dna,b);op(E.rna,b)}
    var un=seg(p,.04,.3),bind=seg(p,.36,.62),rad=seg(p,.68,.94);
    /* 1. the duplex runs through the helicase and leaves unwound; 2. once RK-33 is seated it stops and re-pairs */
    var ph=Math.min(un,1)*Math.PI*2*3.2,sep=(.25+.75*un)*(1-.82*seg(p,.5,.62));
    var key=ph.toFixed(3)+"|"+sep.toFixed(3);if(key!==lastKey){lastKey=key;rna(ph,sep)}
    E.lobes.forEach(function(el){el.classList.toggle("on",un>.05&&bind<.85);el.classList.toggle("off",bind>=.85)});
    E.rk.forEach(function(el,k){var m=RKM[k],t=Math.min(1,Math.max(0,bind*1.35-k*.12)),e=t*t*(3-2*t),
      x=m.x+(m.tx-m.x)*e,y=m.y+(m.ty-m.y)*e+Math.sin(k*2.1+p*9)*4*(1-e);
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+((k?60:0)*(1-e)+(k===0?0:k*25)).toFixed(0)+")");
      op(el,b*Math.min(1,t*4)*(k===0?1:1-.45*rad));el.classList.toggle("on",k===0&&t>.95)});
    /* 3. radiation crosses into the nucleus; the helix breaks and the pieces drift apart; the membrane blebs */
    draw(E.rad,seg(p,.68,.8));E.rad.forEach(function(a){a[0].style.opacity=(b*(1-.6*seg(p,.86,.96))).toFixed(3)});
    var br=seg(p,.76,.88);
    E.hs.forEach(function(el,k){var dx=(k-1)*7*br,dy=[-5,4,-3][k]*br,rt=[-5,3,6][k]*br;
      el.setAttribute("transform","translate("+dx.toFixed(1)+" "+dy.toFixed(1)+") rotate("+rt.toFixed(1)+" "+[143,207,270][k]+" "+HY+")")});
    E.bk.forEach(function(el){op(el,b*br)});
    E.mem.setAttribute("d",membrane(seg(p,.82,.96)));
    op(E.l1,b*seg(p,.08,.18)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.44,.54)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.8,.88));
  };
}
