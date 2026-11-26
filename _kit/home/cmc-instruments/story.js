/* The story scene (BL/BY/DB): the NGM nitrogen generator as cmc describe it (cmc-instruments.de > Produkte, für LC MS:
   "Durch die effiziente Vorfiltration und das fortschrittliche Membranverfahren arbeitet der NGM-Stickstoffgenerator
   verschleißfrei", "stromlos", nitrogen up to 99.7 %; NGM-C Hybrid adds collision gas at 99.9995 %; the number of gas
   outlets is laid out for the customer's LC-MS), drawn as ONE line diagram in section, kept on screen for all three steps:
   Step 1 (Filter): compressed air enters, two filter housings draw in and catch particles.
   Step 2 (Membran): the hollow-fibre membrane module draws in; the gas flows through the fibres, residual gas leaves at the vent.
   Step 3 (LC-MS): nitrogen goes on to the LC-MS as drying gas and, via the hybrid stage, as collision cell gas. */
var SCW=760,SCH=500;
function ngScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"24 52 724 432":"20 30 730 460")+'" aria-hidden="true">';
  g+='<defs><pattern id="ngH" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(243,246,248,.16)" stroke-width="1"/></pattern></defs>';
  if(!mob)g+='<text class="t" x="40" y="58">NGM-STICKSTOFFGENERATOR, SCHEMATISCH</text>';
  /* step 1: inlet line and two filter housings */
  g+='<g id="ngB1">'+
    '<path class="pp sD" d="M40 200H270"/>'+
    '<path class="cs sD" d="M104 186H156V214H150V318Q130 334 110 318V214H104Z"/>'+
    '<path class="cs sD" d="M178 186H230V214H224V318Q204 334 184 318V214H178Z"/>'+
    '<path class="el sD" d="M120 222V306M140 222V306"/><path class="el sD" d="M194 222V306M214 222V306"/>'+
    '</g>';
  /* step 2: the membrane module with hollow fibres and the residual-gas vent */
  g+='<g id="ngB2">'+
    '<path class="cs sD" d="M290 160H560Q578 160 578 178V222Q578 240 560 240H290Q272 240 272 222V178Q272 160 290 160Z"/>'+
    '<path class="fb sD" d="M282 176H568M282 188H568M282 200H568M282 212H568M282 224H568"/>'+
    '<path class="pp sD" d="M520 160V96H600"/>'+
    '</g>';
  /* step 3: outlet, hybrid stage and the LC-MS */
  g+='<g id="ngB3">'+
    '<path class="pp sD" d="M578 200H640V340"/>'+
    '<path class="pp sD" d="M640 250H700V290"/>'+
    '<path class="cs sD" d="M686 290H714V330H686Z"/>'+
    '<path class="pp sD" d="M700 330V340"/>'+
    '<path class="lc sD" d="M560 340H740V470H560Z"/><path class="lc sD" d="M580 362H650V398H580Z"/><path class="lc sD" d="M580 440H720"/>'+
    '</g>';
  /* flow dots: air in the inlet, caught particles, fibre flow, vent, nitrogen out */
  g+='<g id="ngA">';for(i=0;i<7;i++)g+='<circle class="dt" r="3.2" cx="0" cy="200"/>';g+='</g>';
  g+='<g id="ngK"><circle class="pk" cx="130" cy="246" r="2.6"/><circle class="pk" cx="125" cy="270" r="2.6"/><circle class="pk" cx="134" cy="292" r="2.6"/><circle class="pk" cx="204" cy="258" r="2.6"/><circle class="pk" cx="200" cy="284" r="2.6"/></g>';
  g+='<g id="ngF">';for(i=0;i<10;i++)g+='<circle class="dt" r="3" cx="0" cy="0"/>';g+='</g>';
  g+='<g id="ngV">';for(i=0;i<4;i++)g+='<circle class="dv" r="2.6" cx="0" cy="0"/>';g+='</g>';
  g+='<g id="ngN">';for(i=0;i<6;i++)g+='<circle class="dn" r="3.2" cx="0" cy="0"/>';g+='</g>';
  /* labels, per step (8px+ clear of every stroke) */
  g+='<g id="ngL1"><text class="t s1" x="40" y="176">'+(mob?"LUFT":"DRUCKLUFT")+'</text><text class="t" x="104" y="362">'+(mob?"VORFILTER":"VORFILTRATION")+'</text></g>';
  g+='<g id="ngL2"><text class="t s1" x="290" y="146">MEMBRAN</text><text class="t" x="612" y="101">RESTGAS</text><text class="t" x="290" y="268">'+(mob?"STROMLOS":"VERSCHLEISSFREI, STROMLOS")+'</text></g>';
  g+='<g id="ngL3"><text class="t s1" x="652" y="232">'+(mob?"N₂":"N₂ 99,7 %")+'</text><text class="t" x="662" y="388">LC-MS</text><text class="t" x="626" y="318" text-anchor="end">'+(mob?"DRYING":"DRYING GAS")+'</text>'+(mob?"":'<text class="t" x="724" y="316">5.5</text>')+'</g>';
  g+='<g id="lb1"><text class="a" x="40" y="470">1 · FILTER</text></g>';
  g+='<g id="lb2"><text class="a" x="40" y="470">2 · MEMBRAN</text></g>';
  g+='<g id="lb3"><text class="a" x="40" y="470">3 · LC-MS</text></g>';
  return g+'</svg>';
}
function scene(){return ngScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={b1:dl("#ngB1 .sD"),b2:dl("#ngB2 .sD"),b3:dl("#ngB3 .sD"),cs:$$(".cs",svg),
    A:$$("#ngA circle",svg),K:$("#ngK",svg),F:$$("#ngF circle",svg),V:$$("#ngV circle",svg),N:$$("#ngN circle",svg),
    L1:$("#ngL1",svg),L2:$("#ngL2",svg),L3:$("#ngL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function at(c,x,y,o){c.setAttribute("cx",x.toFixed(1));c.setAttribute("cy",y.toFixed(1));c.style.opacity=o.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;op(E.t0,b)}
    var s1=seg(p,0,.18),s2=seg(p,.34,.52),s3=seg(p,.68,.84);
    draw(E.b1,b*s1);draw(E.b2,b*s2);draw(E.b3,b*s3);
    E.cs.forEach(function(c,i){c.style.fillOpacity=(i<2?seg(p,.1,.22):i<3?seg(p,.44,.56):seg(p,.78,.88)).toFixed(3)});
    /* air dots travel the inlet to the membrane while visible */
    var fa=b*seg(p,.12,.2);
    E.A.forEach(function(c,i){var u=((p*6+i/7)%1);at(c,40+u*230,200,fa*(u<.06?u/.06:u>.94?(1-u)/.06:1))});
    op(E.K,b*seg(p,.2,.28));
    /* fibre flow and vent once the membrane is in */
    var ff=b*seg(p,.5,.56);
    E.F.forEach(function(c,i){var u=((p*5+i/10)%1),row=[176,188,200,212,224][i%5];at(c,290+u*278,row,ff*(u<.08?u/.08:u>.92?(1-u)/.08:1))});
    var fv=b*seg(p,.54,.6);
    E.V.forEach(function(c,i){var u=((p*4+i/4)%1),x,y;if(u<.5){x=520;y=150-u*2*54}else{x=520+(u-.5)*2*80;y=96}at(c,x,y,fv*(u>.9?(1-u)/.1:1))});
    /* nitrogen out to the LC-MS */
    var fn=b*seg(p,.84,.9);
    E.N.forEach(function(c,i){var u=((p*5+i/6)%1),x,y;if(u<.35){x=578+u/.35*62;y=200}else{x=640;y=200+(u-.35)/.65*140}at(c,x,y,fn*(u>.92?(1-u)/.08:1))});
    op(E.L1,b*seg(p,.14,.22)*(1-seg(p,.3,.34)));
    op(E.L2,b*seg(p,.48,.56)*(1-seg(p,.64,.68)));
    op(E.L3,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.31,.36)));op(E.l2,b*seg(p,.36,.44)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
