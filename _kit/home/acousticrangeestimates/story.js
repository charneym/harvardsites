/* The story scene (BL/BY/DB): how the tARV verifies proton range, as ONE continuous scene in fine line, after
   acousticrangeestimates.com/tarv and the Red Journal 2026 abstract. Left: an axial section of the abdomen with the liver,
   the tARV on the anterior skin (six receivers round the probe face) and its ultrasound fan. Step 1: the ultrasound image
   with the RT contour (right panel). Step 2: a posterior-to-anterior proton beam stops at its Bragg peak in the liver;
   pressure pulses travel to the receivers and six traces arrive (right). Step 3: measured vs simulated pulse, the time
   shift, and the resulting range error (6.7 mm in the clinical plan, phantom study). Illustrative, not patient data. */
var SCW=760,SCH=520,PX=160,PY=268;
function prng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
function pulse(x0,x1,y,t0,A,w){var d="",x;for(x=x0;x<=x1;x+=2){var u=x-t0,v=A*Math.sin(u*Math.PI*2/w)*Math.exp(-Math.pow((u-w*.3)/(w*.62),2));d+=(x===x0?"M":"L")+x+" "+(y-v).toFixed(1)}return d}
function memScene(o){
  var u='s'+(Math.random()*1e6|0),g='',R=prng(7);
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><linearGradient id="bm'+u+'" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#7aa3ff" stop-opacity=".05"/><stop offset=".8" stop-color="#7aa3ff" stop-opacity=".45"/><stop offset="1" stop-color="#cfe0ff" stop-opacity=".95"/></linearGradient>'+
    '<radialGradient id="bp'+u+'"><stop offset="0" stop-color="#ffffff"/><stop offset=".35" stop-color="#9dbcff" stop-opacity=".9"/><stop offset="1" stop-color="#1a66ff" stop-opacity="0"/></radialGradient></defs>';
  /* ---- the abdomen, axial section ---- */
  g+='<g id="scBody"><text class="t" x="24" y="62">AXIAL SECTION · LIVER</text>';
  g+='<ellipse class="ep sD" cx="200" cy="290" rx="175" ry="128"/>';
  g+='<path class="en sD" d="M44 262C52 214 120 196 196 206C236 212 252 240 236 272C214 312 132 330 76 314C54 306 42 290 44 262Z"/>';
  g+='<path class="lk sD" d="M184 392a16 14 0 1 0 32 0a16 14 0 1 0 -32 0M194 376v-10h12v10M300 330a20 26 0 1 0 1 0M232 352a9 9 0 1 0 1 0"/>';
  g+='<ellipse class="ctr" id="scCtr" cx="'+PX+'" cy="'+PY+'" rx="30" ry="22"/>';
  g+='</g>';
  /* ---- the tARV on the anterior skin ---- */
  g+='<g id="scDev"><rect class="dvp" x="146" y="98" width="28" height="32" rx="9"/><rect class="dvh" x="128" y="128" width="64" height="34"/>';
  [134,143,152,168,177,186].forEach(function(x){g+='<circle class="rx" cx="'+x+'" cy="164.5" r="3"/>'});
  g+='<path class="fan" d="M'+PX+' 168L'+(PX-102)+' 340M'+PX+' 168L'+(PX+102)+' 340"/><text class="t" x="204" y="112">tARV · ANTERIOR</text></g>';
  /* ---- the proton beam, posterior to anterior, and its Bragg peak ---- */
  g+='<g id="scBeam"><rect id="scBmR" x="'+(PX-5)+'" y="'+PY+'" width="10" height="'+(505-PY)+'" fill="url(#bm'+u+')"/>';
  g+='<circle id="scPk" cx="'+PX+'" cy="'+PY+'" r="18" fill="url(#bp'+u+')"/><text class="t" x="'+(PX+18)+'" y="476">PROTON BEAM</text></g>';
  g+='<g id="scWav">';for(var i=0;i<3;i++)g+='<circle class="wv" cx="'+PX+'" cy="'+PY+'" r="1"/>';g+='</g>';
  g+='<g id="scPlan"><circle class="pln" cx="'+PX+'" cy="'+(PY+22)+'" r="9"/><path class="pla" d="M'+(PX+14)+' '+(PY+22)+'H'+(PX+54)+'M'+(PX+14)+' '+PY+'H'+(PX+54)+'"/><text class="t" x="'+(PX+60)+'" y="'+(PY+26)+'">PLANNED</text><text class="t a2" x="'+(PX+60)+'" y="'+(PY+4)+'">MEASURED</text></g>';
  /* ---- right panel, step 1: the ultrasound image with the RT contour ---- */
  var AX=590,AY=104;
  g+='<g id="scUS"><text class="t" x="446" y="84">ULTRASOUND · RT CONTOURS</text>';
  var a0=58*Math.PI/180,a1=122*Math.PI/180,r0=28,r1=330,P=function(r,a){return (AX+r*Math.cos(a)).toFixed(1)+" "+(AY+r*Math.sin(a)).toFixed(1)};
  g+='<path class="ep" d="M'+P(r0,a0)+'L'+P(r1,a0)+'A'+r1+' '+r1+' 0 0 1 '+P(r1,a1)+'L'+P(r0,a1)+'A'+r0+' '+r0+' 0 0 0 '+P(r0,a0)+'Z"/>';
  for(var k=0;k<420;k++){var rr=r0+8+R()*(r1-r0-12),aa=a0+.02+R()*(a1-a0-.04),q=R();g+='<circle class="spk" cx="'+P(rr,aa).split(" ")[0]+'" cy="'+P(rr,aa).split(" ")[1]+'" r="'+(q<.85?.9:1.6)+'" opacity="'+(.18+.5*R()).toFixed(2)+'"/>'}
  g+='<path class="en" d="M488 214C540 196 640 196 694 222"/><path class="en" d="M500 380C560 400 630 402 684 372"/>';
  g+='<ellipse class="ctr" cx="'+AX+'" cy="300" rx="52" ry="36"/></g>';
  /* ---- right panel, step 2: six receivers, six arrivals ---- */
  g+='<g id="scTr"><text class="t" x="446" y="104">SIX RECEIVERS · AVERAGED PULSES</text>';
  for(var c=0;c<6;c++){var y=150+c*52,t0=556+[18,8,0,2,10,22][c];g+='<text class="t" x="446" y="'+(y+4)+'">R'+(c+1)+'</text><path class="tr sT" d="'+pulse(480,724,y,t0,16,24)+'"/>'}
  g+='</g>';
  /* ---- right panel, step 3: measured vs simulated, the time shift, the range error ---- */
  g+='<g id="scCmp"><text class="t" x="446" y="104">MEASURED VS SIMULATED PULSE</text><path class="rr" d="M446 250H724"/>';
  g+='<path class="tr sim sC" d="'+pulse(446,724,250,548,46,40)+'"/><path class="tr meas sC" d="'+pulse(446,724,250,586,46,40)+'"/>';
  g+='<g id="scDt"><path class="js" d="M560 316V332M598 316V332M560 324H598"/><text class="a" x="608" y="329">TIME SHIFT</text></g>';
  g+='<g id="scErr"><path class="rr" d="M446 372H724"/><text class="rh" x="446" y="404">RANGE ERROR · CLINICAL PLAN</text><text class="big" x="446" y="456">6.7 mm</text><text class="t" x="446" y="484">PHANTOM STUDY · RED JOURNAL 2026</text></g></g>';
  /* ---- step labels ---- */
  g+='<g id="lb1"><text class="a" x="24" y="510">POSITION · IMAGE THE ANATOMY</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="510">EACH BRAGG PEAK SENDS A PRESSURE PULSE</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="510">TIME SHIFT TO RANGE ERROR</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p.style.strokeDashoffset=L;return [p,L]})};
  var E={body:dl("#scBody .sD"),bt:$("#scBody text",svg),ctr:$("#scCtr",svg),dev:$("#scDev",svg),us:$("#scUS",svg),
    bm:$("#scBmR",svg),pk:$("#scPk",svg),beam:$("#scBeam",svg),wv:$$("#scWav .wv",svg),tr:$("#scTr",svg),trp:dl("#scTr .sT"),
    cmp:$("#scCmp",svg),cp:dl("#scCmp .sC"),dt:$("#scDt",svg),err:$("#scErr",svg),plan:$("#scPlan",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  function op(el,v){if(el)el.style.opacity=(+v).toFixed(3)}
  function cl(x){return x<0?0:x>1?1:x}
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    var bIn=seg(p,0,.1),dIn=seg(p,.04,.14),usIn=seg(p,.08,.2),usOut=seg(p,.34,.42),bmIn=seg(p,.34,.48),trIn=seg(p,.44,.62),trOut=seg(p,.68,.74),cmIn=seg(p,.7,.84),err=seg(p,.84,.94);
    draw(E.body,b*bIn);op(E.bt,b*bIn);op(E.ctr,b*seg(p,.1,.2));op(E.dev,b*dIn);
    op(E.us,b*usIn*(1-usOut));
    var top=505-(505-PY)*bmIn;E.bm.setAttribute("y",top.toFixed(1));E.bm.setAttribute("height",(505-top).toFixed(1));op(E.beam,b*(bmIn>0?1:0));
    op(E.pk,b*seg(p,.44,.5));
    E.wv.forEach(function(w,k){var on=seg(p,.46,.5)*(1-seg(p,.9,.98)),ph=((p-.46)*6+k/3)%1;if(p<.46)ph=0;w.setAttribute("r",(4+ph*112).toFixed(1));op(w,b*on*(1-ph)*.9)});
    op(E.tr,b*(trIn>0?1:0)*(1-trOut));draw(E.trp,trIn);
    op(E.cmp,b*(cmIn>0?1:0));draw(E.cp,cmIn);op(E.dt,b*seg(p,.8,.86));op(E.err,b*err);op(E.plan,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.28,.34)));op(E.l2,b*seg(p,.4,.46)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
