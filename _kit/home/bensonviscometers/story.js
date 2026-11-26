/* The story scene (BL/BY/DB): how a Benson BV1 / BV200 measures viscosity (bensonviscometers.com, Serum Viscosity, BV1 and BV200
   pages), drawn as ONE fine-line schematic kept on screen for all four steps:
   Step 1 (Sample): the probe samples straight from the primary blood collection tube, optionally through the cap.
   Step 2 (Capillary): a regulated vacuum draws 50 µl through a calibrated capillary held at 37 °C.
   Step 3 (Timing): infra-red timing optics time the fluid between two set points on the capillary (A and B).
   Step 4 (Result): the dynamic viscosity in mPa·s to two decimals (e.g. 1.60 mPa·s reported at 25 °C), sent to the LIMS. */
var SCW=760,SCH=520;
function circ(cx,cy,r){return "M"+(cx-r)+" "+cy+"a"+r+" "+r+" 0 1 0 "+(2*r)+" 0a"+r+" "+r+" 0 1 0 "+(-2*r)+" 0"}
function bvScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">CAPILLARY VISCOMETER, SCHEMATIC</text>';
  /* step 1: the primary tube, its cap, the sample, the probe */
  g+='<g id="bvT"><path class="liq" d="M62 236V398Q62 418 85 418Q108 418 108 398V236Z"/>'+
     '<path class="edge sT" d="M60 112V398Q60 420 85 420Q110 420 110 398V112"/><path class="capf" d="M54 92H116V112H54Z"/>'+
     '<path class="lvl" d="M62 236H108"/><path class="probe sP" d="M85 380V60H150Q170 60 170 80V157H196"/></g>';
  /* step 2: the capillary, the vacuum line and regulator, the fill up to gate A */
  g+='<g id="bvC"><path class="glass sC" d="M196 150H600"/><path class="glass sC" d="M196 164H600"/>'+
     '<path class="fillr sFa" d="M197 157H312"/><path class="edge sV" d="M600 157H640"/><path class="edge sV" d="M640 128H730V186H640Z"/>'+
     '<path class="mem sV" d="'+circ(685,157,17)+'"/><path class="ndl" d="M685 157L696 146"/></g>';
  /* step 3: the infra-red gates A and B, the fill passing them, the timed interval */
  g+='<g id="bvG"><path class="edge" d="M322 104H338V118H322Z"/><path class="edge" d="M322 196H338V210H322Z"/>'+
     '<path class="edge" d="M482 104H498V118H482Z"/><path class="edge" d="M482 196H498V210H482Z"/>'+
     '<path class="beam" id="bvBa" d="M330 122V192"/><path class="beam" id="bvBb" d="M490 122V192"/>'+
     '<text class="g" x="330" y="92" text-anchor="middle">A</text><text class="g" x="490" y="92" text-anchor="middle">B</text></g>';
  g+='<g id="bvF"><path class="fillr sFb" d="M312 157H599"/></g>';
  g+='<g id="bvD"><path class="cur sDt" d="M330 234V248H490V234"/><text class="g dt" x="410" y="278" text-anchor="middle">Δt</text></g>';
  /* step 4: the result display */
  g+='<g id="bvR"><path class="edge sR" d="M440 336H720V446H440Z"/><text class="dk" x="462" y="370">'+(mob?'VISCOSITY':'VISCOSITY · 25 °C')+'</text><text class="dv" x="600" y="424" text-anchor="end">1.60</text><text class="dk" x="614" y="424">mPa·s</text></g>';
  /* labels, per step, >= 8px clear of every stroke (DR3) */
  g+='<g id="bvL1"><text class="t s2" x="128" y="'+(mob?342:336)+'">PRIMARY TUBE</text><text class="t" x="128" y="'+(mob?372:358)+'">'+(mob?'THROUGH-CAP':'OPTIONAL THROUGH-CAP')+'</text></g>';
  g+='<g id="bvL2"><text class="t s2" x="196" y="'+(mob?238:236)+'">'+(mob?'50 µl · 37 °C':'50 µl · CALIBRATED CAPILLARY · 37 °C')+'</text><text class="t" x="730" y="'+(mob?214:208)+'" text-anchor="end">'+(mob?'VACUUM':'REGULATED VACUUM')+'</text></g>';
  g+='<g id="bvL3"><text class="t s2" x="196" y="'+(mob?316:310)+'">'+(mob?'IR TIMING OPTICS':'INFRA-RED TIMING OPTICS')+'</text></g>';
  g+='<g id="bvL4"><text class="t s2" x="196" y="'+(mob?384:376)+'">'+(mob?'2 DECIMALS':'TWO DECIMAL PLACES')+'</text><text class="t" x="196" y="'+(mob?414:398)+'">'+(mob?'LIMS / LIS':'TO THE LIMS / LIS')+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · SAMPLE</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · CAPILLARY</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · TIMING</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · RESULT</text></g>';
  return g+'</svg>';
}
function scene(){return bvScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={T:$("#bvT",svg),tE:dl(".sT"),cap:$("#bvT .capf",svg),liq:$$("#bvT .liq,#bvT .lvl",svg),pr:dl(".sP"),
    C:$("#bvC",svg),cE:dl(".sC"),fa:dl(".sFa"),vE:dl(".sV"),nd:$("#bvC .ndl",svg),
    G:$("#bvG",svg),Ba:$("#bvBa",svg),Bb:$("#bvBb",svg),F:$("#bvF",svg),fb:dl(".sFb"),D:$("#bvD",svg),dt:dl(".sDt"),dT:$("#bvD text",svg),
    R:$("#bvR",svg),rE:dl(".sR"),rT:$$("#bvR text",svg),
    L1:$("#bvL1",svg),L2:$("#bvL2",svg),L3:$("#bvL3",svg),L4:$("#bvL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);
    /* step 1: the tube draws, the cap and sample appear, the probe goes in */
    op(E.T,b);draw(E.tE,b*seg(p,0,.08));op(E.cap,b*seg(p,.04,.1));E.liq.forEach(function(t){op(t,b*seg(p,.06,.12))});draw(E.pr,b*seg(p,.1,.2));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2: the capillary and the vacuum, then the sample is drawn in up to gate A */
    op(E.C,b);draw(E.cE,b*seg(p,.26,.34));draw(E.vE,b*seg(p,.28,.38));op(E.nd,b*seg(p,.36,.4));draw(E.fa,b*seg(p,.38,.48));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3: the gates, the fill passing A then B, the timed interval */
    op(E.G,b*seg(p,.5,.54));draw(E.fb,b*seg(p,.54,.7));
    var fx=312+287*seg(p,.54,.7);op(E.Ba,b*seg(p,.5,.54)*(fx>=330?1:.35));op(E.Bb,b*seg(p,.5,.54)*(fx>=490?1:.35));
    op(E.D,b);draw(E.dt,b*seg(p,.6,.7));op(E.dT,b*seg(p,.66,.71));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4: the result */
    op(E.R,b);draw(E.rE,b*seg(p,.76,.84));E.rT.forEach(function(t,i){op(t,b*seg(p,.8+i*.02,.84+i*.02))});
    op(E.L4,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}
