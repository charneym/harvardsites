/* The story scene (DB/BL): how the OcuMet Beacon works (ocusciences.com and the FDA-clearance release: a confocal
   scanning ophthalmoscope that images the retina with blue 460–480 nm and infrared 825–870 nm light, with or without
   dilating drops; it captures the retina's natural autofluorescence with proprietary illumination and detection, and
   software renders a colour-coded functional image signature). Drawn as ONE fine-line section of the eye that fills the
   frame: cornea, iris, lens, the globe and the retina at the back, with the Beacon's objective at left.
   Step 1 (illuminate): a beam passes through the pupil and fans across the retina; a scan spot sweeps it.
   Step 2 (fluoresce): points along the retina glow and their light returns through the pupil.
   Step 3 (map): the colour-coded functional image signature appears as a round fundus map beside the eye. */
var SCW=760,SCH=560;
var EC=[300,270],ER=170,RR=156;
function eyeP(deg,r){var a=deg*Math.PI/180;return [EC[0]+r*Math.cos(a),EC[1]+r*Math.sin(a)]}
function f1(v){return v.toFixed(1)}
var GA=[-40,-31,-22,-13,-4,5,14,23,32,40];
var MP=[600,270],MR=92;
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'14 84 700 400':'14 14 720 548')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="gMap" cx=".46" cy=".5" r=".55"><stop offset="0" stop-color="#0b1840"/><stop offset=".16" stop-color="#16307a"/><stop offset=".38" stop-color="#2a6fb0"/><stop offset=".62" stop-color="#3ea88a"/><stop offset=".84" stop-color="#9cc95a"/><stop offset="1" stop-color="#e0b84a"/></radialGradient>'+
    '<radialGradient id="gGlow"><stop offset="0" stop-color="#5aa86c" stop-opacity=".7"/><stop offset="1" stop-color="#5aa86c" stop-opacity="0"/></radialGradient>'+
    '<clipPath id="cMap"><circle cx="'+MP[0]+'" cy="'+MP[1]+'" r="'+MR+'"/></clipPath></defs>';
  /* the Beacon's objective, at left */
  g+='<g id="scObj"><path class="wl sD" d="M28 236h22v68h-22"/><path class="wo sD" d="M50 248c6 8 6 36 0 44"/></g>';
  /* the beam: through the pupil, fanning across the retina */
  var r1=eyeP(-40,RR),r2=eyeP(40,RR);
  g+='<path id="scBeam" class="beam" d="M54 256L150 266L'+f1(r1[0])+' '+f1(r1[1])+'A'+RR+' '+RR+' 0 0 1 '+f1(r2[0])+' '+f1(r2[1])+'L150 274L54 284Z"/>';
  /* the eye: globe, cornea, iris, lens, retina, optic nerve */
  var c1=eyeP(-148,ER),c2=eyeP(148,ER);
  g+='<g id="scEye"><path class="wl sD" d="M'+f1(c1[0])+' '+f1(c1[1])+'A'+ER+' '+ER+' 0 1 1 '+f1(c2[0])+' '+f1(c2[1])+'"/>';
  g+='<path class="wl sD" d="M'+f1(c1[0])+' '+f1(c1[1])+'C112 196 100 236 100 270C100 304 112 344 '+f1(c2[0])+' '+f1(c2[1])+'"/>';
  g+='<path class="wo sD" d="M150 200V256M150 284V340"/>';
  g+='<path class="wl sD" d="M178 222C196 236 196 304 178 318C160 304 160 236 178 222Z"/>';
  var q1=eyeP(-62,RR),q2=eyeP(62,RR);
  g+='<path class="ret sD" d="M'+f1(q1[0])+' '+f1(q1[1])+'A'+RR+' '+RR+' 0 0 1 '+f1(q2[0])+' '+f1(q2[1])+'"/>';
  var n1=eyeP(-7,ER),n2=eyeP(9,ER);
  g+='<path class="wo sD" d="M'+f1(n1[0])+' '+f1(n1[1])+'C480 250 492 252 500 254M'+f1(n2[0])+' '+f1(n2[1])+'C480 290 492 288 500 286"/></g>';
  /* scan spot */
  g+='<circle id="scSpot" class="spot" r="5" cx="'+f1(r1[0])+'" cy="'+f1(r1[1])+'"/>';
  /* step 2: glowing points on the retina and their light returning */
  g+='<g id="scGlow">';GA.forEach(function(d){var p=eyeP(d,RR-2);g+='<g class="gl"><circle cx="'+f1(p[0])+'" cy="'+f1(p[1])+'" r="13" fill="url(#gGlow)"/><circle class="gd" cx="'+f1(p[0])+'" cy="'+f1(p[1])+'" r="3"/></g>'});g+='</g>';
  g+='<g id="scRet">';[-31,-4,23].forEach(function(d){var p=eyeP(d,RR-4);g+='<path class="rt" d="M'+f1(p[0])+' '+f1(p[1])+'L152 270L56 270"/>'});g+='</g>';
  /* step 3: the functional image signature, a round colour-coded map with its vessels */
  var lk0=eyeP(-30,ER+10);
  g+='<g id="scMap"><path class="lk2" d="M'+f1(lk0[0])+' '+f1(lk0[1])+'C470 150 520 150 548 192"/>'+
    '<g clip-path="url(#cMap)"><circle cx="'+MP[0]+'" cy="'+MP[1]+'" r="'+MR+'" fill="url(#gMap)"/>'+
    '<path class="vs" d="M640 262C620 238 590 214 548 206M640 262C622 236 612 204 596 180M640 278C620 304 590 326 548 336M640 278C624 306 614 338 600 362M640 270C664 262 680 258 692 254M640 270C664 280 680 286 692 292"/>'+
    '<circle class="odk" cx="642" cy="270" r="13"/></g>'+
    '<circle class="mr" cx="'+MP[0]+'" cy="'+MP[1]+'" r="'+MR+'"/></g>';
  if(!mob){
    g+='<g id="lCor"><path class="ld" d="M104 236L88 176"/><text class="t" x="88" y="164" text-anchor="middle">CORNEA</text></g>';
    g+='<g id="lLens"><path class="ld" d="M178 320L178 452"/><text class="t" x="178" y="470" text-anchor="middle">LENS</text></g>';
    var rp=eyeP(-52,RR);
    g+='<g id="lRet"><path class="ld" d="M'+f1(rp[0]+4)+' '+f1(rp[1]-5)+'L436 86"/><text class="t" x="444" y="82">RETINA</text></g>';
    g+='<g id="lMap"><text class="t a2" x="'+MP[0]+'" y="'+(MP[1]+MR+30)+'" text-anchor="middle">FUNCTIONAL IMAGE</text><text class="t a2" x="'+MP[0]+'" y="'+(MP[1]+MR+48)+'" text-anchor="middle">SIGNATURE</text></g>';
  }else{g+='<g id="lCor"></g><g id="lLens"></g><g id="lRet"></g><g id="lMap"></g>'}
  var ly=mob?474:SCH-6,lx=mob?30:28;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'BLUE AND INFRARED LIGHT':'BLUE AND INFRARED LIGHT SCAN THE RETINA')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THE RETINA FLUORESCES':'THE RETINA’S OWN AUTOFLUORESCENCE RETURNS')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'A COLOUR-CODED MAP':'A COLOUR-CODED FUNCTIONAL MAP')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),beam:$("#scBeam",svg),spot:$("#scSpot",svg),gl:$$("#scGlow .gl",svg),rt:dl("#scRet .rt"),map:$("#scMap",svg),lk:dl("#scMap .lk2"),
    lCor:$("#lCor",svg),lLens:$("#lLens",svg),lRet:$("#lRet",svg),lMap:$("#lMap",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.32),s2=seg(p,.36,.64),s3=seg(p,.68,.94);
    /* 1: the beam opens and a spot sweeps the retina */
    op(E.beam,b*sm(s1*2.2)*(1-.55*sm(s2)));
    var sw=-40+80*(.5-.5*Math.cos(Math.min(1,s1*1.15)*Math.PI*3)),sp=eyeP(sw,RR);
    E.spot.setAttribute("cx",f1(sp[0]));E.spot.setAttribute("cy",f1(sp[1]));op(E.spot,b*sm(s1*3)*(1-sm(s2*2)));
    /* 2: the retina glows point by point; its light returns through the pupil */
    E.gl.forEach(function(el,i){op(el,b*sm((s2-i*.05)/.4))});
    E.rt.forEach(function(a,i){a[0].style.strokeDashoffset=(a[1]*(1-sm((s2-.3-i*.1)/.4))).toFixed(1);op(a[0],b*(1-.6*sm(s3)))});
    /* 3: the functional map */
    op(E.map,b*sm(s3*1.6));draw(E.lk,sm(s3*1.4));
    op(E.lCor,b*(1-seg(p,.3,.36)));op(E.lLens,b*(1-seg(p,.3,.36)));
    op(E.lRet,b*seg(p,.36,.42)*(1-seg(p,.62,.68)));op(E.lMap,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
