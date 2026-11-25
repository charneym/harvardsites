/* The story scene (BL/BY/DB, DR): ONE fine-line section drawing of an EMALED surgical light head (emaled.de > Technik, the
   "EMA-Reflextionstechnik", and the EMALED 500/602 pages), in side elevation over the operating field, kept on screen for all four steps:
   1 the lamp body and its reflector cups, one LED per cup, each sending a parallel beam (95 % of the diode's light used);
   2 the beams of all reflectors overlap in one shadow-free light field;
   3 the body is open: laminar-flow air from the ceiling passes through it and around it;
   4 the light field is focused in 4 steps; brightness in 10 steps (tick bar).
   Labels sit in clear space: desktop captions top-left, field label outside the drawing; on phones one caption under the drawing. */
var CUPS=[190,236,282,438,484,530];
function emScene(mob){
  var g='';
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'110 92 500 452':'96 18 548 500')+'" aria-hidden="true">';
  /* 3 (behind): laminar-flow air from the ceiling, through the two openings of the body and around its rims */
  var air='';[122,315,405,598].forEach(function(x,k){var ex=(k===0?112:k===3?608:x);
    air+='<path class="af sD" d="M'+x+' 112V176C'+x+' 236 '+ex+' 250 '+ex+' 300"/><path class="ah" d="M'+(ex-5)+' 292L'+ex+' 302L'+(ex+5)+' 292"/>'});
  g+='<g id="emAir">'+air+'</g>';
  /* 2: beams from every cup converge on the field */
  var bm='';CUPS.forEach(function(x){bm+='<path class="bm" d="M'+(x-14)+' 230L320 452L400 452L'+(x+14)+' 230Z"/>'});
  g+='<g id="emBeams">'+bm+'</g>';
  g+='<g id="emField"><ellipse class="fl" cx="360" cy="452" rx="62" ry="11"/><path class="fe sD" d="M298 452A62 11 0 1 0 422 452A62 11 0 1 0 298 452"/></g>';
  /* 4: four focus steps of the field, and the 10-step brightness bar */
  var fo='';[96,80,62,44].forEach(function(r){var ry=(r*.18).toFixed(1);fo+='<path class="fo sD" d="M'+(360-r)+' 452A'+r+' '+ry+' 0 1 0 '+(360+r)+' 452A'+r+' '+ry+' 0 1 0 '+(360-r)+' 452"/>'});
  var tk='';for(var i=0;i<10;i++){tk+='<rect class="tk" id="emT'+i+'" x="'+(300+i*12.4).toFixed(1)+'" y="'+(494-i*1.6).toFixed(1)+'" width="7" height="'+(8+i*1.6).toFixed(1)+'"/>'}
  g+='<g id="emFocus">'+fo+'</g><g id="emTicks">'+tk+'</g>';
  /* 1: suspension, lamp body (open: two rim sections and the centre hub), reflector cups with their LEDs and beams */
  g+='<g id="emBody"><path class="bf" d="M140 226Q146 196 176 194H300V226Z"/><path class="bf" d="M420 194H544Q574 196 580 226H420Z"/><path class="bf" d="M330 194H390V232H330Z"/></g>';
  g+='<g id="emBase">'+
     '<path class="fm sD" d="M360 194V150Q360 134 376 134H610"/>'+
     '<path class="fm sD" d="M140 226Q146 196 176 194H300V226Z"/>'+
     '<path class="fm sD" d="M420 194H544Q574 196 580 226H420Z"/>'+
     '<path class="fm sD" d="M330 194H390V232H330Z"/>'+
     '<path class="fm sD" d="M352 232V250H368V232"/>'+
     CUPS.map(function(x){return '<path class="cu sD" d="M'+(x-16)+' 226Q'+x+' 198 '+(x+16)+' 226"/>'}).join('')+
     '</g>';
  g+='<g id="emLed">'+CUPS.map(function(x){return '<circle class="ld" cx="'+x+'" cy="214" r="3"/>'}).join('')+
     CUPS.map(function(x){return '<path class="ry sD" d="M'+(x-9)+' 228V262M'+x+' 228V266M'+(x+9)+' 228V262"/>'}).join('')+'</g>';
  if(mob){
    var CM=["1 · 95 % DES LICHTS GENUTZT","2 · SCHATTENFREIES LICHTFELD","3 · OFFEN FÜR LAMINAR FLOW","4 · FOKUS UND HELLIGKEIT"];
    CM.forEach(function(c,k){g+='<text class="a gl" id="emG'+k+'" x="360" y="534" text-anchor="middle">'+c+'</text>'});
  }else{
    var CAP=[["REFLEKTOR JE LED","95 % DER LICHTSTÄRKE GENUTZT"],["SCHATTENFREI","DIE LICHTKEGEL ÜBERLAGERN SICH"],["LAMINAR FLOW","DER LEUCHTENKÖRPER IST OFFEN"],["4 FOKUSSTUFEN","10 HELLIGKEITSSTUFEN"]];
    CAP.forEach(function(c,k){g+='<g class="gl" id="emG'+k+'"><text class="a" x="108" y="50">'+c[0]+'</text><text class="t" x="108" y="72">'+c[1]+'</text></g>'});
    g+='<g id="emL"><text class="t" x="470" y="456">LICHTFELD</text></g>';
  }
  return g+'</svg>';
}
function scene(){return emScene(MOBILE()?1:0)}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#emBase .sD"),rays:dl("#emLed .sD"),air:dl("#emAir .sD"),fe:dl("#emField .sD"),fo:dl("#emFocus .sD"),
    body:$("#emBody",svg),led:$("#emLed",svg),beams:$("#emBeams",svg),field:$("#emField",svg),airG:$("#emAir",svg),heads:$$("#emAir .ah",svg),
    foG:$("#emFocus",svg),ticks:[0,1,2,3,4,5,6,7,8,9].map(function(j){return $("#emT"+j,svg)}),lb:$("#emL",svg),gl:[0,1,2,3].map(function(j){return $("#emG"+j,svg)})};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var g=seg(b,.35,1);
    op(E.body,g);
    op(E.led,g);draw(E.rays,g*seg(p,.02,.14));
    /* 2: beams and field */
    op(E.beams,g*seg(p,.26,.4));op(E.field,g*seg(p,.3,.34));draw(E.fe,seg(p,.3,.44));op(E.lb,g*seg(p,.36,.44));
    /* 3: airflow */
    op(E.airG,g*seg(p,.5,.52));draw(E.air,seg(p,.52,.68));E.heads.forEach(function(h){op(h,seg(p,.64,.68))});
    /* 4: focus rings and brightness ticks */
    op(E.foG,g*seg(p,.76,.78));draw(E.fo,seg(p,.77,.9));
    E.ticks.forEach(function(t,i){op(t,g*seg(p,.78+i*.012,.8+i*.012))});
    var W=[[0,0,.25],[1,.25,.5],[2,.5,.75],[3,.75,1.01]];
    W.forEach(function(w){var i=w[0],a=w[1],z=w[2],v=(i?seg(p,a,a+.05):1)*(i<3?1-seg(p,z-.03,z+.02):1);op(E.gl[i],g*v)});
  };
}
