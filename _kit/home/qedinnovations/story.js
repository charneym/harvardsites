/* The story scene (DB/BL): how an MRI RF coil works, drawn as ONE fine-line cross-section that fills the frame: the coil's
   ring of eight receive elements (each with its preamplifier) around the bore, the hydrogen nuclei of the anatomy inside
   drawn as small spin arrows, and on the right the image the channels build.
   Frame 0 is complete: the nuclei are aligned with the magnet's field (arrows up).
   Step 1 (transmit): a radiofrequency pulse runs in from the coil and tips the nuclei.
   Step 2 (receive): the nuclei precess; their faint signal ripples out to the elements, which light with their preamps.
   Step 3 (image): every channel runs to the image, which fills in. Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
var CX=290,CY=278,RR=180;
function f1(v){return v.toFixed(1)}
function pol(r,a){return [CX+r*Math.sin(a),CY-r*Math.cos(a)]}
function spins(){var o=[],r=0;for(var y=-85;y<=85;y+=34,r++){var x0=r%2?-85:-102;for(var x=x0;x<=-x0;x+=34)if(x*x+y*y<98*98)o.push([CX+x,CY+y+6])}return o}
var SP=spins();
function phantom(u,v){var r2=u*u+v*v;if(r2>.8)return 0;var q=.42;
  if((u+.34)*(u+.34)+(v+.18)*(v+.18)<.06)q=.95;else if((u-.3)*(u-.3)+(v-.26)*(v-.26)<.09)q=.16;else if((u-.24)*(u-.24)+(v+.4)*(v+.4)<.018)q=.82;
  return q}
function storyScene(o){
  var g='',mob=o.mob,PX=mob?560:598,PY=CY-(mob?55:68),PS=mob?110:136,NP=12,cs=PS/NP;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'80 30 600 520':'54 14 710 548')+'" aria-hidden="true">';
  /* the bore: the coil former (two fine circles) */
  g+='<g id="scBore"><circle class="wl sD" cx="'+CX+'" cy="'+CY+'" r="'+(RR+22)+'"/><circle class="wo sD" cx="'+CX+'" cy="'+CY+'" r="'+(RR-16)+'"/></g>';
  /* the anatomy: a soft disc */
  g+='<circle class="body" cx="'+CX+'" cy="'+CY+'" r="114"/>';
  /* RF pulse (inward) and signal (outward) ripples */
  g+='<g id="scTx"><circle class="tx" cx="'+CX+'" cy="'+CY+'" r="160"/><circle class="tx" cx="'+CX+'" cy="'+CY+'" r="160"/><circle class="tx" cx="'+CX+'" cy="'+CY+'" r="160"/></g>';
  g+='<g id="scRx"><circle class="rx" cx="'+CX+'" cy="'+CY+'" r="114"/><circle class="rx" cx="'+CX+'" cy="'+CY+'" r="114"/><circle class="rx" cx="'+CX+'" cy="'+CY+'" r="114"/></g>';
  /* eight receive elements on the ring, each a loop following the arc, with its preamplifier outside */
  g+='<g id="scEl">';for(var k=0;k<8;k++){var a=k*Math.PI/4,da=.33,r1=RR-8,r2=RR+8,p1=pol(r1,a-da),p2=pol(r1,a+da),p3=pol(r2,a+da),p4=pol(r2,a-da),pa=pol(RR+34,a);
    g+='<g class="el"><path class="lp" d="M'+f1(p1[0])+' '+f1(p1[1])+'A'+r1+' '+r1+' 0 0 1 '+f1(p2[0])+' '+f1(p2[1])+'L'+f1(p3[0])+' '+f1(p3[1])+'A'+r2+' '+r2+' 0 0 0 '+f1(p4[0])+' '+f1(p4[1])+'Z"/>'+
      '<path class="pl" d="M'+f1(pol(r2,a)[0])+' '+f1(pol(r2,a)[1])+'L'+f1(pol(RR+28,a)[0])+' '+f1(pol(RR+28,a)[1])+'"/>'+
      '<rect class="pa" x="'+f1(pa[0]-5)+'" y="'+f1(pa[1]-5)+'" width="10" height="10" transform="rotate('+f1(k*45)+' '+f1(pa[0])+' '+f1(pa[1])+')"/></g>'}g+='</g>';
  /* the nuclei: dots with spin arrows */
  g+='<g id="scSp">';SP.forEach(function(s){g+='<g class="sp" transform="translate('+s[0]+' '+s[1]+')"><circle r="2.6"/><path d="M0 0V-14M-3.5 -10L0 -14L3.5 -10"/></g>'});g+='</g>';
  /* channels to the image */
  var NX=PX-(mob?30:34),NY=PY+PS/2;
  g+='<g id="scCh">';for(k=0;k<8;k++){var a2=k*45,d=Math.abs(((a2-90+540)%360)-180),rk=RR+(mob?38:42)+(d/45)*(mob?4:5),cw=(a2<=90||a2>=270)?1:0,
    q=pol(RR+40,a2*Math.PI/180),q2=pol(rk,a2*Math.PI/180),end=[CX+rk,CY];
    g+='<path class="ch" d="M'+f1(q[0])+' '+f1(q[1])+'L'+f1(q2[0])+' '+f1(q2[1])+(d>0?'A'+f1(rk)+' '+f1(rk)+' 0 0 '+cw+' '+f1(end[0])+' '+f1(end[1]):'')+'C'+f1(end[0]+14)+' '+f1(end[1])+' '+f1(NX-14)+' '+f1(NY)+' '+NX+' '+f1(NY)+'"/>'}
  g+='<path class="ch" d="M'+NX+' '+f1(NY)+'H'+PX+'"/><circle class="nd" cx="'+NX+'" cy="'+f1(NY)+'" r="3.5"/></g>';
  /* the image panel */
  g+='<g id="scIm"><rect class="fr" x="'+PX+'" y="'+PY+'" width="'+PS+'" height="'+PS+'"/>';
  for(var j=0;j<NP;j++)for(var i=0;i<NP;i++){var u=(i+.5)/NP*2-1,v=(j+.5)/NP*2-1,val=phantom(u,v);if(val>0)g+='<rect class="px" data-c="'+i+'" data-v="'+val+'" x="'+f1(PX+i*cs+.6)+'" y="'+f1(PY+j*cs+.6)+'" width="'+f1(cs-1.2)+'" height="'+f1(cs-1.2)+'"/>'}
  g+='</g>';
  if(!mob){
    g+='<g id="lEl"><path class="ld" d="M318 70L344 44"/><text class="t" x="350" y="40">RECEIVE ELEMENT</text><text class="t q" x="350" y="56">AND PREAMPLIFIER</text></g>';
    g+='<g id="lIm"><text class="t" x="'+PX+'" y="'+(PY-16)+'">IMAGE</text></g>';
  }else{g+='<g id="lEl"></g><g id="lIm"></g>'}
  var ly=mob?540:SCH-6,lx=mob?96:80;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THE PULSE TIPS THE NUCLEI':'A RADIOFREQUENCY PULSE TIPS THE NUCLEI')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THE ELEMENTS LISTEN':'EACH ELEMENT HEARS THE FAINT SIGNAL')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'CHANNELS BUILD THE IMAGE':'THE CHANNELS COMBINE INTO AN IMAGE')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),tx:$$("#scTx .tx",svg),rx:$$("#scRx .rx",svg),el:$$("#scEl .el",svg),sp:$$("#scSp .sp",svg),ch:dl("#scCh .ch"),nd:$("#scCh .nd",svg),
    px:$$("#scIm .px",svg),fr:$("#scIm .fr",svg),lEl:$("#lEl",svg),lIm:$("#lIm",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.32),s2=seg(p,.36,.64),s3=seg(p,.68,.94);
    /* 1: the pulse runs inward from the coil, three rings */
    E.tx.forEach(function(el,i){var f=(s1*1.6-i*.3);f=f<0?0:f>1?1:f;el.setAttribute("r",f1(166-52*f));op(el,b*Math.sin(f*Math.PI)*.9)});
    /* the nuclei: up at rest, tipped by the pulse, then precessing (turning) while the array listens */
    var tip=sm(s1),turn=s2*720+s3*360;
    E.sp.forEach(function(el,i){var tr=el.getAttribute("transform").split(" rotate")[0];el.setAttribute("transform",tr+" rotate("+f1(tip*90+turn+(tip>0?i*7*tip:0))+")");op(el,b)});
    /* 2: the signal ripples outward and each element lights in turn */
    E.rx.forEach(function(el,i){var f=((s2*2.2-i*.35)%1+1)%1;if(s2<=0||s2>=1)f=0;el.setAttribute("r",f1(114+58*f));op(el,b*(s2>0&&s2<1?Math.sin(f*Math.PI)*.8:0)*(1-s3))});
    E.el.forEach(function(el,i){el.classList.toggle("on",s2>.25+i*.03)});
    /* 3: the channels run to the image, which fills in column by column */
    E.ch.forEach(function(a,i){a[0].style.strokeDashoffset=(a[1]*(1-sm((s3-(i%9)*.03)/.45))).toFixed(1)});
    op(E.nd,b*sm((s3-.3)/.2));
    E.px.forEach(function(el){var c=+el.getAttribute("data-c"),v=+el.getAttribute("data-v");op(el,b*v*sm((s3-.35-c*.035)/.2))});
    op(E.fr,b*(.35+.65*sm((s3-.25)/.2)));
    op(E.lEl,b*seg(p,.42,.48)*(1-seg(p,.6,.66)));
    op(E.lIm,b*seg(p,.74,.8));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
