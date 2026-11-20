/* the story scene (BL/BY/DB): ONE axial section through an MRI bore, looking along the table, kept on screen for all three
   steps. Step 1: the MRI alone: magnet housing, gradient coil, the RF body coil (its rungs pulse) and a patient's head on the
   table. Step 2: the PETcoil insert (a ring of PET detector modules) slides into the bore around the head; the RF pulse keeps
   passing through it. Step 3: positron annihilations in the brain send 511 keV photon pairs back to back to opposite modules;
   each pair leaves a line of response, a time-of-flight tick marks the event on it, and the lines build up over the tracer
   uptake. Sources: petcoil.com/petcoil-system; NIH RePORTER abstracts of R44MH123253 and SB1MH139143 (RF-penetrable TOF-PET
   insert, inserted into and removed from any MRI). Everything is driven by the scrubbed story progress. */
var BORE={C:[400,284],RM:262,RC:222,RG0:206,RG1:186,RF:172,RB:160,RP0:104,RP1:132,NM:16};
function bArc(r,a0,a1,n){var C=BORE.C,s='',i;n=n||Math.max(24,Math.round(Math.abs(a1-a0)/3));for(i=0;i<=n;i++){var a=(a0+(a1-a0)*i/n)*Math.PI/180;s+=(i?'L':'M')+(C[0]+r*Math.cos(a)).toFixed(1)+' '+(C[1]+r*Math.sin(a)).toFixed(1)}return s}
/* pseudo-random but fixed annihilation events: [x,y] inside the uptake region, angle */
var EV=(function(){var a=[],s=7;function r(){s=(s*9301+49297)%233280;return s/233280}
  for(var i=0;i<22;i++){var hot=i%3!==0,cx=hot?432:380,cy=hot?250:300,rr=hot?16:40;a.push([cx+(r()-.5)*2*rr,cy+(r()-.5)*2*rr*.9,r()*180])}return a})();
function lor(e){ /* both ends of the line of response, on the inner face of the PET ring */
  var C=BORE.C,R=BORE.RP0,ang=e[2]*Math.PI/180,dx=Math.cos(ang),dy=Math.sin(ang),px=e[0]-C[0],py=e[1]-C[1];
  var b=px*dx+py*dy,cc=px*px+py*py-R*R,d=Math.sqrt(b*b-cc);return [[e[0]+(-b+d)*dx,e[1]+(-b+d)*dy],[e[0]+(-b-d)*dx,e[1]+(-b-d)*dy]]}
function scene(){
  var mob=MOBILE(),B=BORE,C=B.C,f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"108 -52 584 612":"0 0 800 560")+'" aria-hidden="true">';
  g+='<defs><radialGradient id="upg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#3ad7dc" stop-opacity=".75"/><stop offset=".6" stop-color="#08708a" stop-opacity=".28"/><stop offset="1" stop-color="#08708a" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="rfg" cx=".5" cy=".5" r=".5"><stop offset=".6" stop-color="#3ad7dc" stop-opacity="0"/><stop offset=".86" stop-color="#3ad7dc" stop-opacity=".16"/><stop offset="1" stop-color="#3ad7dc" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* magnet housing, cryostat, gradient coil (hatched), RF body coil with its rungs, bore liner */
  g+='<circle class="hsg" cx="'+C[0]+'" cy="'+C[1]+'" r="'+B.RM+'"/>';
  g+='<path class="mg sD" d="'+bArc(B.RM,0,360,120)+'"/><path class="mg2 sD" d="'+bArc(B.RC,0,360,120)+'"/>';
  g+='<path class="gc sD" d="'+bArc(B.RG0,0,360,120)+'"/><path class="gc sD" d="'+bArc(B.RG1,0,360,120)+'"/>';
  var hz='';for(i=0;i<96;i++){var a=i*3.75*Math.PI/180,a2=a+.05;hz+='M'+f(C[0]+B.RG1*Math.cos(a))+' '+f(C[1]+B.RG1*Math.sin(a))+'L'+f(C[0]+B.RG0*Math.cos(a2))+' '+f(C[1]+B.RG0*Math.sin(a2))}
  g+='<path class="ht sD" d="'+hz+'"/>';
  g+='<path class="rfc sD" d="'+bArc(B.RF,0,360,120)+'"/>';
  var rg='';for(i=0;i<16;i++){var a=(i*22.5+11.25)*Math.PI/180;rg+='<rect class="rung" x="'+f(C[0]+B.RF*Math.cos(a)-4)+'" y="'+f(C[1]+B.RF*Math.sin(a)-4)+'" width="8" height="8" transform="rotate('+f(i*22.5+11.25)+' '+f(C[0]+B.RF*Math.cos(a))+' '+f(C[1]+B.RF*Math.sin(a))+')"/>'}
  g+=rg;
  g+='<path class="lin sD" d="'+bArc(B.RB,0,360,120)+'"/>';
  /* patient table, and the head in axial section (skull, brain, ventricles), nose up */
  /* the table runs along the bottom of the bore, under the insert ring */
  g+='<path class="tbl sD" d="M'+f(C[0]-74)+' '+f(C[1]+142)+'H'+f(C[0]+74)+'M'+f(C[0]-62)+' '+f(C[1]+150)+'H'+f(C[0]+62)+'"/>';
  g+='<path class="skl sD" d="M400 172C452 172 488 214 488 270C488 330 452 366 400 366C348 366 312 330 312 270C312 214 348 172 400 172Z"/>';
  g+='<path class="skl2 sD" d="M400 182C445 182 477 220 477 270C477 323 445 355 400 355C355 355 323 323 323 270C323 220 355 182 400 182Z"/>';
  g+='<path class="nose sD" d="M388 173L400 156L412 173"/>';
  g+='<path class="gyr sD" d="M400 186V352M352 214C366 222 360 236 372 244M448 214C434 222 440 236 428 244M336 262C352 266 350 282 366 286M464 262C448 266 450 282 434 286M348 318C362 312 370 324 382 318M452 318C438 312 430 324 418 318M372 200C380 210 378 220 388 226M428 200C420 210 422 220 412 226"/>';
  g+='<path class="ven sD" d="M392 252C384 262 380 278 388 292M408 252C416 262 420 278 412 292"/>';
  if(!mob)g+='<text class="t" x="784" y="546" text-anchor="end">AXIAL SECTION · SCHEMATIC</text>';
  g+='</g>';
  /* moving parts */
  g+='<g id="scMove">';
  g+='<circle id="rfp" cx="'+C[0]+'" cy="'+C[1]+'" r="'+B.RF+'" fill="url(#rfg)"/>';
  /* the PET insert: 16 detector modules, each with its crystal array */
  var ins='<g id="ins"><path class="ish" d="'+bArc(B.RP1+6,0,360,120)+'"/>';
  for(i=0;i<B.NM;i++){var a0=i*360/B.NM+2.2,a1=(i+1)*360/B.NM-2.2,r0=B.RP0,r1=B.RP1,P=function(r,d){var x=d*Math.PI/180;return [C[0]+r*Math.cos(x),C[1]+r*Math.sin(x)]};
    var p0=P(r0,a0),p1=P(r0,a1),p2=P(r1,a1),p3=P(r1,a0),cr='';
    for(var k=1;k<5;k++){var aa=a0+(a1-a0)*k/5,q0=P(r0,aa),q1=P(r0+(r1-r0)*.55,aa);cr+='M'+f(q0[0])+' '+f(q0[1])+'L'+f(q1[0])+' '+f(q1[1])}
    var m0=P(r0+(r1-r0)*.55,a0),m1=P(r0+(r1-r0)*.55,a1);cr+='M'+f(m0[0])+' '+f(m0[1])+'L'+f(m1[0])+' '+f(m1[1]);
    ins+='<g class="mod"><path class="mb" d="M'+f(p0[0])+' '+f(p0[1])+'L'+f(p1[0])+' '+f(p1[1])+'L'+f(p2[0])+' '+f(p2[1])+'L'+f(p3[0])+' '+f(p3[1])+'Z"/><path class="xt2" d="'+cr+'"/></g>'}
  ins+='</g>';g+=ins;
  /* tracer uptake, lines of response, photon pairs and TOF ticks */
  g+='<ellipse id="upt" cx="424" cy="258" rx="40" ry="34" fill="url(#upg)"/>';
  var lo='',ph='';EV.forEach(function(e,j){var L=lor(e);lo+='<path class="lr" d="M'+f(L[0][0])+' '+f(L[0][1])+'L'+f(L[1][0])+' '+f(L[1][1])+'"/>';
    ph+='<g class="pp"><circle class="ph" r="3.2"/><circle class="ph" r="3.2"/><circle class="ev" r="4.5" cx="'+f(e[0])+'" cy="'+f(e[1])+'"/></g>'});
  g+='<g id="lors">'+lo+'</g><g id="phs">'+ph+'</g>';
  g+='</g>';
  /* labels, one set per step (leader lines end at the thing they name) */
  var X=mob?114:24,XR=mob?686:776,YL=mob?-22:58,YD=mob?-10:64;
  g+='<g id="lb1"><text class="a" x="'+X+'" y="'+YL+'">MRI MAGNET</text><path class="ldr" d="M'+(mob?200:150)+' '+YD+'L'+f(C[0]-B.RM*.74)+' '+f(C[1]-B.RM*.67)+'"/>'+
     '<text class="a" x="'+XR+'" y="'+YL+'" text-anchor="end">RF BODY COIL</text><path class="ldr" d="M'+(mob?600:650)+' '+YD+'L'+f(C[0]+B.RF*.71)+' '+f(C[1]-B.RF*.71)+'"/></g>';
  g+='<g id="lb2"><text class="a" x="'+XR+'" y="'+(mob?YL:40)+'" text-anchor="end">PETCOIL INSERT</text><path class="ldr" d="M'+(mob?600:690)+' '+(mob?YD:72)+'L'+f(C[0]+B.RP1*.72)+' '+f(C[1]-B.RP1*.72)+'"/>'+
     (mob?'':'<text class="t" x="776" y="58" text-anchor="end">RING OF PET DETECTOR MODULES</text>')+'</g>';
  g+='<g id="lb3"><text class="a" x="'+X+'" y="'+YL+'">PHOTON PAIRS</text><path class="ldr" d="M'+(mob?200:170)+' '+YD+'L'+f(C[0]-B.RP0*.6)+' '+f(C[1]-B.RP0*.62)+'"/>'+
     '<text class="a" x="'+XR+'" y="'+YL+'" text-anchor="end">TRACER UPTAKE</text><path class="ldr" d="M'+(mob?620:670)+' '+YD+'L452 240"/></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .hsg, #scBase .rung",svg),mv:$("#scMove",svg),rf:$("#rfp",svg),ins:$("#ins",svg),
    mods:$$("#ins .mod",svg),up:$("#upt",svg),lors:$$("#lors .lr",svg),pps:$$("#phs .pp",svg),rungs:$$("#scBase .rung",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var C=BORE.C,lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.14),s2=seg(p,.34,.54),s3=seg(p,.66,.9);
    /* the RF pulse: a ring of light that swells out of the body coil and fades, every ~1/6 of the story; it keeps going in step 2 */
    var ph=(p*7)%1,pw=Math.sin(ph*Math.PI);E.rf.setAttribute("r",(BORE.RF*(.86+.18*ph)).toFixed(1));op(E.rf,b*pw*(.35+.65*s1)*(1-.7*s3));
    E.rungs.forEach(function(r){r.style.fill="rgba(58,215,220,"+(.25+.6*pw*(1-.6*s3)).toFixed(3)+")"});
    /* step 2: the insert slides in along the bore axis (toward the viewer): it comes from slightly larger and fainter, then settles */
    var sc=1+.22*(1-s2);E.ins.setAttribute("transform","translate("+C[0]+" "+C[1]+") scale("+sc.toFixed(4)+") translate("+(-C[0])+" "+(-C[1])+")");
    op(E.ins,b*seg(p,.3,.46));
    /* step 3: annihilation events, one after another; each sends two photons to opposite modules and leaves its line of response */
    var N=E.pps.length,hit={};
    E.pps.forEach(function(gp,j){var t0=.66+j*(.24/N),u=(p-t0)/.05,L=lor(EV[j]),e=EV[j];
      var cs=gp.querySelectorAll(".ph"),ev=gp.querySelector(".ev");
      if(u<=0||s3<=0){gp.style.opacity=0;op(E.lors[j],0);return}
      var k=Math.min(1,u);gp.style.opacity=(b*(u<1.4?1:Math.max(0,1-(u-1.4)/.8))).toFixed(3);
      cs[0].setAttribute("cx",(e[0]+(L[0][0]-e[0])*k).toFixed(1));cs[0].setAttribute("cy",(e[1]+(L[0][1]-e[1])*k).toFixed(1));
      cs[1].setAttribute("cx",(e[0]+(L[1][0]-e[0])*k).toFixed(1));cs[1].setAttribute("cy",(e[1]+(L[1][1]-e[1])*k).toFixed(1));
      ev.style.opacity=Math.max(0,1-u).toFixed(3);
      op(E.lors[j],b*Math.min(1,u)*.5*s3);if(u>=1&&u<1.6){hit[Math.floor(((Math.atan2(L[0][1]-C[1],L[0][0]-C[0])*180/Math.PI+360)%360)/(360/BORE.NM))]=1;hit[Math.floor(((Math.atan2(L[1][1]-C[1],L[1][0]-C[0])*180/Math.PI+360)%360)/(360/BORE.NM))]=1}});
    E.mods.forEach(function(m,i){m.classList.toggle("hit",!!hit[i])});
    op(E.up,b*s3*(.35+.65*seg(p,.72,.94)));
    op(E.l1,b*(1-seg(p,.26,.34)));op(E.l2,b*s2*(1-seg(p,.6,.68)));op(E.l3,b*seg(p,.7,.8));
  };
}
