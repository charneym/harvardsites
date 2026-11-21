/* the story scene (BL/BY/DB): ONE engraved peripheral neuron, kept on screen for all three steps. Right: its nerve endings in the
   wound bed around the prostate; middle: the myelinated axon; left: the cell body. Step 1 NerveLight (800-rhNGF: an 800 nm NIR
   dye on recombinant human NGF) is applied to the wound bed and settles at the endings. Step 2 rhNGF binds the TrkA receptors at
   the distal endings and the complex is endocytosed. Step 3 retrograde axonal transport carries the dye up the axon toward the cell
   body: "what the surgeon sees". Sources: manzanitapharmaceuticals.com (NerveLight) and NIH RePORTER 5R44CA295214-02 (abstract and
   narrative). Schematic; geometry is illustrative. Driven by the scrubbed story progress. */
var NRV=(function(){
  var A=[[150,300],[262,322],[404,258],[546,282]];
  function bz(t){var u=1-t;return [u*u*u*A[0][0]+3*u*u*t*A[1][0]+3*u*t*t*A[2][0]+t*t*t*A[3][0],u*u*u*A[0][1]+3*u*u*t*A[1][1]+3*u*t*t*A[2][1]+t*t*t*A[3][1]]}
  function nm(t){var a=bz(Math.max(0,t-.002)),b=bz(Math.min(1,t+.002)),dx=b[0]-a[0],dy=b[1]-a[1],l=Math.hypot(dx,dy)||1;return [-dy/l,dx/l]}
  var END=[[700,118],[752,196],[742,288],[766,370],[700,452],[648,186],[654,386]];
  var OUT=END.map(function(e){var dx=e[0]-546,dy=e[1]-282,l=Math.hypot(dx,dy);return [dx/l,dy/l]});
  return {A:A,bz:bz,nm:nm,END:END,OUT:OUT,ST:[546,282]};
})();
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,k,N=NRV;
  var axP='M'+N.A[0].join(' ')+'C'+N.A[1].join(' ')+' '+N.A[2].join(' ')+' '+N.A[3].join(' ');
  var axR='M'+N.A[3].join(' ')+'C'+N.A[2].join(' ')+' '+N.A[1].join(' ')+' '+N.A[0].join(' ');
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="nlg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#8fd0cc" stop-opacity=".7"/><stop offset="1" stop-color="#8fd0cc" stop-opacity="0"/></radialGradient>'+
     '<filter id="nlb" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="5"/></filter></defs>';
  g+='<g id="scBase">';
  /* the wound bed around the prostate: engraved tissue contours on the right */
  for(i=0;i<5;i++){var r=232+i*34;g+='<path class="ct sD" d="M'+f(800-r*.35)+' 18Q'+f(800-r*.95)+' 280 '+f(800-r*.35)+' 542"/>'}
  /* cell body: an irregular soma with dendrites and a nucleus */
  var so='';for(i=0;i<=40;i++){var a=i/40*Math.PI*2,rr=56+6*Math.sin(a*3+.6)+4*Math.sin(a*5+1.2)+(Math.cos(a)>.85?10*(Math.cos(a)-.85)/.15:0);so+=(i?'L':'M')+f(112+rr*Math.cos(a))+' '+f(300+rr*.92*Math.sin(a))}
  g+='<path class="mb sD" d="'+so+'Z"/>';
  g+='<circle class="nu sD" cx="104" cy="296" r="19"/><circle class="nu2" cx="108" cy="292" r="5"/>';
  var DEN=[[2.2,96],[2.75,110],[3.4,92],[4.0,104],[1.6,84],[4.6,80]];
  DEN.forEach(function(d,j){var a=d[0],x0=112+58*Math.cos(a),y0=300+54*Math.sin(a),x1=112+d[1]*Math.cos(a),y1=300+d[1]*Math.sin(a);
    g+='<path class="mb2 sD" d="M'+f(x0)+' '+f(y0)+'L'+f(x1)+' '+f(y1)+'M'+f(x1)+' '+f(y1)+'l'+f(18*Math.cos(a-.5))+' '+f(18*Math.sin(a-.5))+'M'+f(x1)+' '+f(y1)+'l'+f(16*Math.cos(a+.55))+' '+f(16*Math.sin(a+.55))+'"/>'});
  /* the axon: myelin internodes as capsules, nodes of Ranvier between them */
  g+='<path class="mb2 sD" d="'+axP+'"/>';
  for(i=0;i<7;i++){var t0=.05+i*.134,t1=t0+.112,s='',sb='';
    for(k=0;k<=10;k++){var t=t0+(t1-t0)*k/10,p=N.bz(t),n=N.nm(t);s+=(k?'L':'M')+f(p[0]+n[0]*9)+' '+f(p[1]+n[1]*9);sb=' L'+f(p[0]-n[0]*9)+' '+f(p[1]-n[1]*9)+sb}
    g+='<path class="my sD" d="'+s+sb.replace(/^ L/,' L')+'Z"/>'}
  /* terminal branches, boutons and TrkA receptors at the endings */
  N.END.forEach(function(e,j){var o=N.OUT[j],mx=N.ST[0]+(e[0]-N.ST[0])*.45,my=N.ST[1]+(e[1]-N.ST[1])*.8;
    g+='<path class="mb sD" d="M'+N.ST.join(' ')+'Q'+f(mx)+' '+f(my)+' '+f(e[0]-o[0]*6)+' '+f(e[1]-o[1]*6)+'"/>';
    g+='<circle class="bt sD" cx="'+f(e[0])+'" cy="'+f(e[1])+'" r="7"/>';
    var rx=e[0]+o[0]*10,ry=e[1]+o[1]*10,px=-o[1],py=o[0];
    g+='<path class="tk" d="M'+f(e[0]+o[0]*6)+' '+f(e[1]+o[1]*6)+'L'+f(rx)+' '+f(ry)+'M'+f(rx)+' '+f(ry)+'l'+f(o[0]*6+px*5)+' '+f(o[1]*6+py*5)+'M'+f(rx)+' '+f(ry)+'l'+f(o[0]*6-px*5)+' '+f(o[1]*6-py*5)+'"/>'});
  /* labels with leaders */
  if(!mob){
   g+='<path class="ldr sD" d="M112 238V186H188"/><text x="196" y="190">CELL BODY</text>';
   g+='<path class="ldr sD" d="M330 286V366H372"/><text x="380" y="370">AXON · MYELIN</text>';
   g+='<path class="ldr sD" d="M648 186L606 142H560"/><text x="552" y="146" text-anchor="end">NERVE ENDINGS</text>';
  }else{
   g+='<path class="ldr sD" d="M112 360V430H140"/><text x="148" y="438">CELL BODY</text>';
   g+='<path class="ldr sD" d="M330 286V200H360"/><text x="368" y="208">AXON</text>';
   g+='<path class="ldr sD" d="M700 452L668 500H636"/><text x="628" y="508" text-anchor="end">NERVE ENDINGS</text>';
  }
  g+='<text class="t" x="788" y="540" text-anchor="end">WOUND BED AROUND THE PROSTATE</text>';
  g+='</g>';
  g+='<g id="scMove">';
  /* the teal light travelling up the axon (drawn from the endings toward the cell body) */
  g+='<path class="glw" d="'+axR+'" filter="url(#nlb)"/><path class="glc" d="'+axR+'"/>';
  g+='<circle class="sog" cx="112" cy="300" r="96" fill="url(#nlg)"/>';
  N.END.forEach(function(e,j){g+='<circle class="eg" cx="'+f(e[0])+'" cy="'+f(e[1])+'" r="20" fill="url(#nlg)"/>'});
  /* NerveLight conjugates: two per ending */
  N.END.forEach(function(e,j){for(k=0;k<2;k++)g+='<g class="cj" data-j="'+j+'" data-k="'+k+'"><circle class="cjh" r="7" fill="url(#nlg)"/><circle class="cjd" r="3.2"/></g>'});
  /* vesicles carrying dye toward the soma */
  for(i=0;i<6;i++)g+='<circle class="vs" r="3.6"/>';
  g+='<text class="a" id="lb1" x="24" y="40">800-rhNGF · APPLIED TO THE WOUND BED</text>';
  g+='<text class="a" id="lb2" x="24" y="40">rhNGF BINDS TrkA · ENDOCYTOSIS</text>';
  g+='<text class="a" id="lb3" x="24" y="40">RETROGRADE TRANSPORT · ICG CHANNEL</text>';
  g+='</g></svg>';
  return g;
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var N=NRV,E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .nu2, #scBase .tk",svg),mv:$("#scMove",svg),
    glw:dl(".glw"),glc:dl(".glc"),sog:$(".sog",svg),eg:$$(".eg",svg),cj:$$(".cj",svg),vs:$$(".vs",svg),tk:$$(".tk",svg),
    b1:$("#lb1",svg),b2:$("#lb2",svg),b3:$("#lb3",svg)};
  var lastB=-1,pos=E.cj.map(function(el){var j=+el.getAttribute("data-j"),k=+el.getAttribute("data-k"),e=N.END[j],o=N.OUT[j],px=-o[1],py=o[0],side=k?1:-1;
    return {j:j,k:k,far:[e[0]+o[0]*86+px*side*16,e[1]+o[1]*86+py*side*16],near:[e[0]+o[0]*22+px*side*7,e[1]+o[1]*22+py*side*7],on:[e[0]+o[0]*14+px*side*4,e[1]+o[1]*14+py*side*4],inn:[e[0]-o[0]*3,e[1]-o[1]*3]}});
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function lerp(a,b,t){return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t]}
  function ez(t){return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,.03,.27),bd=seg(p,.38,.5),en=seg(p,.5,.62),tr=seg(p,.68,.93),sg=seg(p,.86,1);
    E.cj.forEach(function(el,i){var P=pos[i],d=(P.j*.05+P.k*.03),a=ez(seg(s1,d,d+.62)),q;
      if(en>0)q=lerp(P.on,P.inn,ez(en));else if(bd>0)q=lerp(P.near,P.on,ez(bd));else q=lerp(P.far,P.near,a);
      el.setAttribute("transform","translate("+q[0].toFixed(1)+" "+q[1].toFixed(1)+")");
      op(el,b*seg(s1,d,d+.25)*(1-seg(en,.6,1)))});
    E.tk.forEach(function(el){el.classList.toggle("on",bd>.85)});
    E.eg.forEach(function(el){op(el,b*Math.max(seg(en,.4,1)*(1-.5*tr),0))});
    draw(E.glw,tr);draw(E.glc,tr);op(E.glw[0][0],b*(tr>0?1:0));op(E.glc[0][0],b*(tr>0?1:0));
    E.vs.forEach(function(el,i){var t=seg(tr,i*.1,i*.1+.5),pt=N.bz(1-t);el.setAttribute("cx",pt[0].toFixed(1));el.setAttribute("cy",pt[1].toFixed(1));op(el,b*(t>0&&t<1?1:0)*Math.min(1,t*6,(1-t)*6))});
    op(E.sog,b*sg);
    op(E.b1,b*seg(p,.02,.08)*(1-seg(p,.28,.33)));op(E.b2,b*seg(p,.36,.42)*(1-seg(p,.62,.67)));op(E.b3,b*seg(p,.69,.76));
  };
}
