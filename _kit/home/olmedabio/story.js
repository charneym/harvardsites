/* the story scene (BL/BY/DB): ONE engraved sagittal section of the eye, kept on screen for all three steps. Step 1 the
   uveal melanoma dome on the back wall lights, far from any safe entry. Step 2 a fine needle enters through the peripheral
   cornea into the anterior chamber, and the aqueous humor lights. Step 3 tumor-derived proteins and cfDNA drift forward
   through the pupil into the chamber and the syringe fills: the sample goes to the lab. Sources: NIH RePORTER abstracts of
   2R42CA291243-02 (21-protein PEA panel; intraocular biopsy is invasive) and 1R42CA314557-01 (AH tapping is
   clinic-feasible and holds abundant tumor-derived cfDNA). Everything is driven by the scrubbed story progress. */
var EYE=(function(){
  var C=[450,290],R=200,LA=31*Math.PI/180;
  function P(r,deg){var a=deg*Math.PI/180;return [C[0]+r*Math.cos(a),C[1]+r*Math.sin(a)]}
  var lim=P(R,180+31),apx=C[0]-1.13*R,lx=lim[0]-C[0],ly=lim[1]-C[1],ax=apx-C[0];
  var x0=C[0]+(ax*ax-lx*lx-ly*ly)/(2*(ax-lx)),cr=Math.abs(apx-x0);
  return {C:C,R:R,P:P,x0:x0,cr:cr,lim:lim};
})();
function eyeArc(r,a0,a1,n){var s='',i;n=n||Math.max(12,Math.round(Math.abs(a1-a0)/2));for(i=0;i<=n;i++){var p=EYE.P(r,a0+(a1-a0)*i/n);s+=(i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)}return s}
function corArc(off){var E=EYE,a0=Math.atan2(E.lim[1]-E.C[1],E.lim[0]-E.x0),a1=-a0,s='',i;if(a0<0)a0+=2*Math.PI;a1=2*Math.PI-a0;
  for(i=0;i<=40;i++){var a=a0+(a1-a0)*i/40,r=E.cr-off;s+=(i?'L':'M')+(E.x0+r*Math.cos(a)).toFixed(1)+' '+(E.C[1]+r*Math.sin(a)).toFixed(1)}return s}
var TUM={a:-40,w:15,h:.17};
var PATH=[[555,200],[400,120],[350,205],[262,292]];   /* tumor -> over the lens equator -> through the pupil -> chamber */
function bez(t){var p=PATH,u=1-t;return [u*u*u*p[0][0]+3*u*u*t*p[1][0]+3*u*t*t*p[2][0]+t*t*t*p[3][0],u*u*u*p[0][1]+3*u*u*t*p[1][1]+3*u*t*t*p[2][1]+t*t*t*p[3][1]]}
function scene(){
  var mob=MOBILE(),E=EYE,R=E.R,C=E.C,P=E.P,f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="aqg" cx=".35" cy=".5" r=".7"><stop offset="0" stop-color="#ffe2b4" stop-opacity=".85"/><stop offset="1" stop-color="#d9915a" stop-opacity=".25"/></radialGradient>'+
     '<radialGradient id="tg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#d9915a" stop-opacity=".55"/><stop offset="1" stop-color="#d9915a" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* vitreous and chamber fills (fade in with the drawing) */
  g+='<circle class="vit" cx="'+C[0]+'" cy="'+C[1]+'" r="'+f(R*.9)+'"/>';
  var LX=C[0]-R*.665,LRX=R*.15,LRY=R*.37,IRX=LX-LRX*.82-2,PUP=R*.12;
  var ch=corArc(6)+'L'+f(IRX)+' '+f(C[1]+R*.47)+'L'+f(IRX)+' '+f(C[1]+PUP)+'L'+f(LX-LRX*.82)+' '+C[1]+'L'+f(IRX)+' '+f(C[1]-PUP)+'L'+f(IRX)+' '+f(C[1]-R*.47)+'Z';
  g+='<path class="aqb" d="'+ch+'"/>';
  /* sclera (outer and inner), choroid and retina, cornea */
  g+='<path class="scl sD" d="'+eyeArc(R,-149,149,150)+'"/>';
  g+='<path class="scl2 sD" d="'+eyeArc(R*.95,-149,149,150)+'"/>';
  g+='<path class="cho sD" d="'+eyeArc(R*.925,-134,134,130)+'"/>';
  g+='<path class="ret sD" d="'+eyeArc(R*.9,-128,128,130)+'"/>';
  g+='<path class="cor sD" d="'+corArc(0)+'"/><path class="cor2 sD" d="'+corArc(6)+'"/>';
  /* sclera hatching */
  var hz='';for(i=0;i<70;i++){var a=-146+i*292/69,p0=P(R*.955,a),p1=P(R*.995,a+1.6);hz+='M'+f(p0[0])+' '+f(p0[1])+'L'+f(p1[0])+' '+f(p1[1])}
  g+='<path class="ht sD" d="'+hz+'"/>';
  /* lens, iris, ciliary body */
  var ld='';for(i=0;i<=60;i++){var t=2*Math.PI*i/60,c=Math.cos(t),k=c<0?.82:1;ld+=(i?'L':'M')+f(LX+LRX*c*k)+' '+f(C[1]+LRY*Math.sin(t))}
  g+='<path class="lns sD" d="'+ld+'Z"/>';
  g+='<path class="iris sD" d="M'+f(IRX)+' '+f(C[1]-R*.5)+'V'+f(C[1]-PUP)+'M'+f(IRX)+' '+f(C[1]+R*.5)+'V'+f(C[1]+PUP)+'"/>';
  [-1,1].forEach(function(s){var a=P(R*.95,180-s*31),b=P(R*.95,180-s*50),tip=P(R*.82,180-s*36);g+='<path class="cil sD" d="M'+f(a[0])+' '+f(a[1])+'L'+f(tip[0])+' '+f(tip[1])+'L'+f(b[0])+' '+f(b[1])+'"/>';
    g+='<path class="zon sD" d="M'+f(tip[0])+' '+f(tip[1])+'L'+f(LX)+' '+f(C[1]+s*LRY*.98)+'"/>'});
  /* optic nerve */
  var o0=P(R,8),o1=P(R,20),q0=[o0[0]+150,o0[1]+36],q1=[o1[0]+150,o1[1]+36];
  g+='<path class="nrv sD" d="M'+f(o0[0])+' '+f(o0[1])+'L'+f(q0[0])+' '+f(q0[1])+'M'+f(o1[0])+' '+f(o1[1])+'L'+f(q1[0])+' '+f(q1[1])+'"/>';
  /* the tumor dome on the back wall */
  var td='';for(i=0;i<=30;i++){var u=i/30,aa=TUM.a-TUM.w+2*TUM.w*u,hh=Math.pow(Math.sin(u*Math.PI),.8),pp=P(R*(.925-TUM.h*hh),aa);td+=(i?'L':'M')+f(pp[0])+' '+f(pp[1])}
  g+='<path class="tum sD" d="'+td+'"/>';
  g+='<text class="t" x="784" y="546" text-anchor="end">SECTION OF THE EYE · SCHEMATIC</text>';
  g+='</g>';
  /* moving parts */
  var tc=P(R*.82,TUM.a);
  g+='<g id="scMove">';
  g+='<circle id="tglow" cx="'+f(tc[0])+'" cy="'+f(tc[1])+'" r="70" fill="url(#tg)"/>';
  g+='<path id="aqlit" class="aql" d="'+ch+'"/>';
  /* particles: proteins (dots) and cfDNA (short double strands) */
  for(i=0;i<14;i++)g+=(i%3===2?'<path class="pt dna" d="M-6 -2.5H6M-6 2.5H6"/>':'<circle class="pt prot" r="'+(i%2?3:2.4)+'"/>');
  /* the syringe: along its own -x axis, the needle tip at the origin */
  var tip=[255,318],ang=-42.4;
  g+='<g id="syr" transform="translate('+tip[0]+' '+tip[1]+') rotate('+(180+ang)+')"><g id="syrIn">'+
     '<path class="ndl" d="M0 0H150"/><path class="hub" d="M150 -6H170V6H150Z"/>'+
     '<path class="brl" d="M170 -13H292V13H170Z"/><rect id="sfill" class="sfl" x="171" y="-12" width="0" height="24"/>'+
     '<path class="plg" d="M292 -6H322M322 -15V15"/></g></g>';
  g+='</g>';
  /* labels, one set per step (leader lines end at the thing they name) */
  var L1=mob?'<text class="a" x="790" y="60" text-anchor="end">UVEAL MELANOMA</text>':'<text class="a" x="610" y="70">UVEAL MELANOMA</text><text class="t" x="610" y="90">INTRAOCULAR TUMOR</text>';
  g+='<g id="lb1">'+L1+'<path class="ldr" d="M'+f(tc[0]+12)+' '+f(tc[1]-30)+'L'+(mob?700:604)+' '+(mob?76:84)+'"/></g>';
  g+='<g id="lb2"><text class="a" x="24" y="'+(mob?96:120)+'">AQUEOUS HUMOR</text><path class="ldr" d="M'+(mob?110:96)+' '+(mob?112:130)+'L246 268"/>'+
     '<text class="a" x="'+(mob?24:150)+'" y="'+(mob?548:544)+'">'+(mob?'FINE-NEEDLE TAP':'FINE-NEEDLE TAP, IN THE CLINIC')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+(mob?24:300)+'" y="'+(mob?60:56)+'">PROTEINS AND cfDNA</text><path class="ldr" d="M'+(mob?210:372)+' '+(mob?76:66)+'L392 128"/>'+
     '<text class="a" x="'+(mob?24:150)+'" y="'+(mob?548:544)+'">'+(mob?'TO THE CLIA LAB':'SAMPLE TO THE CLIA LAB')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .vit, #scBase .aqb",svg),mv:$("#scMove",svg),tg:$("#tglow",svg),aq:$("#aqlit",svg),
    syr:$("#syrIn",svg),sf:$("#sfill",svg),pt:$$(".pt",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),tum:$("#scBase .tum",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.14),s2=seg(p,.36,.52),s3=seg(p,.68,.86);
    /* step 1: the tumor glows; it dims a little once the story moves to the front of the eye */
    op(E.tg,b*(.25+.75*s1)*(1-.5*s2)*(1+.4*s3));
    E.tum.style.fill="rgba(134,62,22,"+(.35+.5*s1).toFixed(3)+")";
    /* step 2: the needle slides in through the peripheral cornea; the chamber lights */
    var d=(1-s2)*140;E.syr.setAttribute("transform","translate("+d.toFixed(1)+" 0)");op(E.syr,b*seg(p,.3,.4));
    op(E.aq,b*s2);
    /* step 3: proteins and cfDNA drift from the tumor through the pupil into the chamber; the syringe fills */
    E.pt.forEach(function(el,i){var u=((p*2.4)+i/14)%1,q=bez(u),wob=Math.sin(u*9+i)*6;
      el.setAttribute("transform","translate("+(q[0]+wob).toFixed(1)+" "+(q[1]+wob*.6).toFixed(1)+") rotate("+((u*200+i*40)%360).toFixed(0)+")");
      op(el,b*s3*Math.min(1,Math.sin(u*Math.PI)*2.2))});
    E.sf.setAttribute("width",(118*seg(p,.78,.96)).toFixed(1));
    op(E.l1,b*(1-seg(p,.28,.36)));op(E.l2,b*s2*(1-seg(p,.62,.7)));op(E.l3,b*seg(p,.72,.82));
  };
}
