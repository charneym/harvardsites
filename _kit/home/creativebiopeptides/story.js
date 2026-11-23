/* The story scene (DB/BL): Creative Bio-Peptides' own mechanism (creativebiopeptides.com, Receptides: "Chemokine receptors
   act on both immune cells and neurons to sculpt neuronal connections and synapses. Blocking these receptors has been shown
   to inhibit the neurotoxic effects of microglial and astrocyte activation to restore synapses and dendritic arbor"; RAP-103
   is a CCR2/CCR5 antagonist), drawn as ONE continuous fine-line scene that fills the frame: a neuron's cell body and a
   tapering dendrite with its branch, lined with spines, each spine meeting a presynaptic bouton, and a microglial cell
   below with its branching processes. Frame 0 is already complete (healthy synapses).
   Step 1 (inflame): the microglia glows activated (logo crimson); chemokines drift to receptors on the dendrite; the
   spines shrink and the boutons fade.
   Step 2 (block): RAP-103 (logo cyan) seats on each receptor; the chemokines and the glow fade.
   Step 3 (restore): the spines regrow and each synapse lights cyan.
   Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
function bzp(P,t){var u=1-t;return [u*u*u*P[0]+3*u*u*t*P[2]+3*u*t*t*P[4]+t*t*t*P[6],u*u*u*P[1]+3*u*u*t*P[3]+3*u*t*t*P[5]+t*t*t*P[7]]}
function bzn(P,t){var u=1-t,dx=3*u*u*(P[2]-P[0])+6*u*t*(P[4]-P[2])+3*t*t*(P[6]-P[4]),dy=3*u*u*(P[3]-P[1])+6*u*t*(P[5]-P[3])+3*t*t*(P[7]-P[5]),l=Math.hypot(dx,dy);return [-dy/l,dx/l]}
/* main dendrite from the soma up to the right, and a branch rising from it */
var DM=[196,404,340,340,480,262,722,80],DB0=.38;
var DB=(function(){var p=bzp(DM,DB0);return [p[0],p[1],p[0]+18,p[1]-84,p[0]+66,p[1]-170,p[0]+104,p[1]-276]})();
function wid(P,t,w0,w1){return w0+(w1-w0)*t}
function edge(P,w0,w1,side,t0){var pts=[],i,t,p,n,w;for(i=0;i<=40;i++){t=(t0||0)+(1-(t0||0))*i/40;p=bzp(P,t);n=bzn(P,t);w=wid(P,t,w0,w1)/2;pts.push([p[0]+n[0]*w*side,p[1]+n[1]*w*side])}
  return "M"+pts.map(function(q){return q[0].toFixed(1)+" "+q[1].toFixed(1)}).join("L")}
/* spines: [curve, t, side, length]; side -1 is up/left of the shaft */
var SP=[[DM,.12,-1,30],[DM,.2,1,24],[DM,.28,-1,32],[DM,.5,-1,30],[DM,.35,1,22],[DM,.69,-1,30],[DM,.79,-1,28],[DM,.87,1,22],[DM,.95,-1,24],
        [DB,.24,1,26],[DB,.44,-1,28],[DB,.64,1,24],[DB,.84,-1,24]];
/* receptors on the shaft's lower side, facing the microglia */
var RC=[[DM,.44],[DM,.54],[DM,.64],[DM,.73]];
var MG=[566,452];
function spineGeo(s){var P=s[0],p=bzp(P,s[1]),n=bzn(P,s[1]),w=wid(P,s[1],P===DM?22:10,P===DM?7:4)/2,sd=s[2],L=s[3];
  var b=[p[0]+n[0]*w*sd,p[1]+n[1]*w*sd],h=[b[0]+n[0]*L*sd,b[1]+n[1]*L*sd],bo=[h[0]+n[0]*19*sd,h[1]+n[1]*19*sd];return {b:b,h:h,bo:bo,n:[n[0]*sd,n[1]*sd]}}
function recGeo(r){var P=r[0],p=bzp(P,r[1]),n=bzn(P,r[1]),w=wid(P,r[1],22,7)/2;return {b:[p[0]+n[0]*w,p[1]+n[1]*w],n:n}}
function f1(v){return v.toFixed(1)}
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'64 24 700 536':'64 24 700 536')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="gAct"><stop offset="0" stop-color="#e22840" stop-opacity=".42"/><stop offset="1" stop-color="#e22840" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="gSyn"><stop offset="0" stop-color="#4fc4e8" stop-opacity=".75"/><stop offset="1" stop-color="#4fc4e8" stop-opacity="0"/></radialGradient></defs>';
  g+='<circle class="halo" id="hAct" cx="'+MG[0]+'" cy="'+MG[1]+'" r="110" fill="url(#gAct)"/>';
  g+='<g id="scBase">';
  /* soma, with two basal dendrites and the axon leaving downward */
  g+='<path class="wl sD" d="M204 404C208 368 186 340 152 340C114 340 88 370 90 410C92 448 120 474 156 472C188 470 200 440 204 404"/>';
  g+='<path class="wo sD" d="M148 406a13 13 0 1 0 0.1 0"/>';
  g+='<path class="wmd sD" d="M98 440C86 462 80 490 76 520"/><path class="wmd sD" d="M112 356C96 330 88 300 86 268"/>';
  g+='<path class="wmd sD" d="M164 472C168 500 170 524 172 548"/>';
  /* dendrite shaft (two tapered edges) and the branch */
  g+='<path class="wl sD" d="'+edge(DM,22,7,-1)+'"/><path class="wl sD" d="'+edge(DM,22,7,1)+'"/>';
  g+='<path class="wl sD" d="'+edge(DB,10,4,-1)+'"/><path class="wl sD" d="'+edge(DB,10,4,1)+'"/>';
  /* microglia: a small body and branching processes */
  g+='<path class="wl sD" d="M'+(MG[0]-18)+' '+MG[1]+'C'+(MG[0]-18)+' '+(MG[1]-14)+' '+(MG[0]-6)+' '+(MG[1]-20)+' '+MG[0]+' '+(MG[1]-19)+'C'+(MG[0]+12)+' '+(MG[1]-18)+' '+(MG[0]+20)+' '+(MG[1]-8)+' '+(MG[0]+19)+' '+(MG[1]+2)+'C'+(MG[0]+18)+' '+(MG[1]+14)+' '+(MG[0]+6)+' '+(MG[1]+20)+' '+(MG[0]-4)+' '+(MG[1]+18)+'C'+(MG[0]-14)+' '+(MG[1]+16)+' '+(MG[0]-18)+' '+(MG[1]+8)+' '+(MG[0]-18)+' '+MG[1]+'"/>';
  g+='<path class="wo sD" d="M'+(MG[0]-4)+' '+MG[1]+'a5 5 0 1 0 0.1 0"/>';
  [[-60,-1],[-100,.85],[-30,.9],[-150,.8],[30,.85],[90,.7],[140,.8],[180,.75],[-120,.9]].forEach(function(q,i){
    var a=q[0]*Math.PI/180,L=92*q[1],x0=MG[0]+Math.cos(a)*19,y0=MG[1]+Math.sin(a)*19,x1=MG[0]+Math.cos(a)*(19+L),y1=MG[1]+Math.sin(a)*(19+L),
        bx=MG[0]+Math.cos(a+.06)*(19+L*.55),by=MG[1]+Math.sin(a+.06)*(19+L*.55),
        cx=bx+Math.cos(a+.7)*L*.34,cy=by+Math.sin(a+.7)*L*.34,dx=bx+Math.cos(a-.65)*L*.28,dy=by+Math.sin(a-.65)*L*.28;
    g+='<path class="wo sD" d="M'+f1(x0)+' '+f1(y0)+'Q'+f1(bx)+' '+f1(by)+' '+f1(x1)+' '+f1(y1)+'M'+f1(bx)+' '+f1(by)+'L'+f1(cx)+' '+f1(cy)+'M'+f1(bx)+' '+f1(by)+'L'+f1(dx)+' '+f1(dy)+'"/>'});
  g+='</g>';
  /* spines (stalk + head) and the presynaptic boutons with their axon twigs */
  g+='<g id="scSp">';SP.forEach(function(s,i){var G=spineGeo(s);
    g+='<g class="sp" data-x="'+f1(G.b[0])+'" data-y="'+f1(G.b[1])+'"><path class="wl" d="M'+f1(G.b[0])+' '+f1(G.b[1])+'L'+f1(G.h[0])+' '+f1(G.h[1])+'"/><circle class="sh" cx="'+f1(G.h[0])+'" cy="'+f1(G.h[1])+'" r="7"/></g>'});g+='</g>';
  g+='<g id="scSyn">';SP.forEach(function(s){var G=spineGeo(s);g+='<circle class="syn" cx="'+f1((G.h[0]+G.bo[0])/2)+'" cy="'+f1((G.h[1]+G.bo[1])/2)+'" r="20" fill="url(#gSyn)"/>'});g+='</g>';
  g+='<g id="scBo">';SP.forEach(function(s){var G=spineGeo(s),t=[G.bo[0]+G.n[0]*36+G.n[1]*10,G.bo[1]+G.n[1]*36-G.n[0]*10];
    g+='<g class="bo"><path class="wmd" d="M'+f1(G.bo[0]+G.n[0]*5.5)+' '+f1(G.bo[1]+G.n[1]*5.5)+'L'+f1(t[0])+' '+f1(t[1])+'"/><circle class="bb" cx="'+f1(G.bo[0])+'" cy="'+f1(G.bo[1])+'" r="5.6"/></g>'});g+='</g>';
  /* receptors (small Y forms) on the shaft, chemokines, and RAP-103 */
  g+='<g id="scRc">';RC.forEach(function(r){var R=recGeo(r),b=R.b,n=R.n,s=[b[0]+n[0]*10,b[1]+n[1]*10],t=[-n[1],n[0]];
    g+='<path class="rc" d="M'+f1(b[0])+' '+f1(b[1])+'L'+f1(s[0])+' '+f1(s[1])+'M'+f1(s[0])+' '+f1(s[1])+'L'+f1(s[0]+n[0]*7+t[0]*6)+' '+f1(s[1]+n[1]*7+t[1]*6)+'M'+f1(s[0])+' '+f1(s[1])+'L'+f1(s[0]+n[0]*7-t[0]*6)+' '+f1(s[1]+n[1]*7-t[1]*6)+'"/>'});g+='</g>';
  g+='<g id="scCk">';RC.forEach(function(){g+='<circle class="ck" r="4.6" cx="'+MG[0]+'" cy="'+MG[1]+'"/><circle class="ck" r="4.6" cx="'+MG[0]+'" cy="'+MG[1]+'"/>'});g+='</g>';
  g+='<g id="scRap">';RC.forEach(function(r){var R=recGeo(r),x=R.b[0]+R.n[0]*19,y=R.b[1]+R.n[1]*19;g+='<rect class="rap" x="'+f1(x-5)+'" y="'+f1(y-5)+'" width="10" height="10" transform="rotate(45 '+f1(x)+' '+f1(y)+')"/>'});g+='</g>';
  /* labels, each with a leader that stops short of its text (DR) */
  var s1=spineGeo(SP[2]),r2=recGeo(RC[1]);
  if(!mob){
    g+='<g id="lDen"><path class="ld" d="M'+f1(s1.bo[0]-8)+' '+f1(s1.bo[1]-10)+'L232 214"/><text class="t" x="226" y="206" text-anchor="end">DENDRITIC SPINE</text><text class="t q" x="226" y="222" text-anchor="end">AND SYNAPSE</text></g>';
    g+='<g id="lMg"><path class="ld" d="M'+(MG[0]+44)+' '+(MG[1]+2)+'L'+(MG[0]+86)+' '+(MG[1]+2)+'"/><text class="t" x="'+(MG[0]+94)+'" y="'+(MG[1]+6)+'">MICROGLIA</text></g>';
    g+='<g id="lRc"><path class="ld" d="M'+f1(r2.b[0]-10)+' '+f1(r2.b[1]+24)+'L346 506"/><text class="t" x="338" y="514" text-anchor="end">CCR2 · CCR5</text></g>';
    g+='<g id="lRap"><path class="ld" d="M'+f1(r2.b[0]-10)+' '+f1(r2.b[1]+24)+'L346 506"/><text class="t" x="338" y="498" text-anchor="end">RAP-103</text><text class="t q" x="338" y="514" text-anchor="end">ON THE RECEPTOR</text></g>';
  }else{
    g+='<g id="lDen"></g><g id="lRc"></g><g id="lRap"></g>';
    g+='<g id="lMg"></g>';
  }
  var ly=SCH-6,lx=76;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'CHEMOKINES REACH THE NEURON':'ACTIVATED MICROGLIA SIGNAL THROUGH CHEMOKINES')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'RAP-103 BLOCKS CCR2 AND CCR5':'RAP-103 BLOCKS THE CHEMOKINE RECEPTORS')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'SYNAPSES ARE RESTORED':'SPINES AND SYNAPSES ARE RESTORED')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),sp:$$("#scSp .sp",svg),syn:$$("#scSyn .syn",svg),bo:$$("#scBo .bo",svg),rc:$$("#scRc .rc",svg),
    ck:$$("#scCk .ck",svg),rap:$$("#scRap .rap",svg),hA:$("#hAct",svg),
    lDen:$("#lDen",svg),lMg:$("#lMg",svg),lRc:$("#lRc",svg),lRap:$("#lRap",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var RT=RC.map(function(r){var R=recGeo(r);return [R.b[0]+R.n[0]*21,R.b[1]+R.n[1]*21]});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.32),s2=seg(p,.36,.64),s3=seg(p,.68,.94);
    /* spine size: healthy, shrinking with inflammation, regrowing once the receptor is blocked */
    var k=1-.55*sm(seg(p,.1,.32))+.62*sm(seg(p,.7,.9));
    E.sp.forEach(function(el){var x=+el.getAttribute("data-x"),y=+el.getAttribute("data-y");el.setAttribute("transform","translate("+x+" "+y+") scale("+k.toFixed(3)+") translate("+(-x)+" "+(-y)+")");op(el,b)});
    E.bo.forEach(function(el){op(el,b*(1-.62*sm(seg(p,.1,.32))+.62*sm(seg(p,.7,.9))))});
    E.syn.forEach(function(el,i){op(el,b*seg(p,.74+i*.008,.86+i*.008))});
    E.rc.forEach(function(el){op(el,b)});
    op(E.hA,b*s1*(1-s2));
    /* 1. chemokines drift from the microglia to the receptors */
    E.ck.forEach(function(el,i){var r=RT[i>>1],f=sm((s1-(i%2)*.18-(i>>1)*.05)/.7),x=MG[0]+(r[0]-MG[0])*f+(i%2?7:-7)*(1-f),y=MG[1]+(r[1]-MG[1])*f;
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));op(el,b*(f>0?Math.min(1,f*5):0)*(1-seg(p,.4,.5)))});
    /* 2. RAP-103 seats on each receptor */
    E.rap.forEach(function(el,i){op(el,b*seg(p,.4+i*.03,.5+i*.03))});
    op(E.lDen,b*(1-seg(p,.06,.14)));
    op(E.lMg,b*seg(p,.08,.18)*(1-seg(p,.36,.44)));
    op(E.lRc,b*seg(p,.18,.26)*(1-seg(p,.36,.42)));
    op(E.lRap,b*seg(p,.48,.56)*(1-seg(p,.7,.76)));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
