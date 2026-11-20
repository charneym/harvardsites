/* the story scene (BL/BY/DB): ONE engraved figure of how Maternal aRMOR works, from the firm's own Solution page and the
   MedTech Dive interview with the CEO. Left, a patient in outline with her circulation drawn in; the sensor sits on her wrist.
   Right, a magnified view of the wrist under the sensor: a laser and a camera read the flowing red blood cells. Below, the
   peripheral-flow trace. 1 Wear: the band and the magnifier draw in. 2 Sense: the laser and its return light up, cells flow.
   3 Shift: the body clamps the periphery and pushes blood to the core; limb vessels fade, arrows run inward, cells thin, the
   trace falls. 4 Alert: an early alert on the trace, with automated QBL and compensation readouts. */
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true"><defs><clipPath id="lens"><circle cx="575" cy="210" r="148"/></clipPath></defs>';
  /* figure: an outline, head and circulation */
  var body='M180 118V132C162 135 148 140 140 150L122 250L108 348L118 352L134 262L150 198L156 262C150 290 148 302 152 322L160 500H182L188 342H192L198 500H220L228 322C232 302 230 290 224 262L230 198L246 262L262 352L272 348L258 250L240 150C232 140 218 135 200 132V118';
  var limbs='M184 152L152 170L131 258L117 340M196 152L228 170L249 258L263 340M190 300L174 332L171 490M190 300L206 332L209 490';
  var core='M190 146V300M190 160L182 152M190 160L198 152';
  g+='<g id="scBase">';
  g+='<path class="fig" d="'+body+'"/><circle class="fig" cx="190" cy="94" r="23"/>';
  g+='<path class="vsl" id="limbs" d="'+limbs+'"/><path class="vsl cor" id="core" d="'+core+'"/><circle class="hrt" id="hrt" cx="196" cy="176" r="8"/>';
  /* magnifier ring, tissue and two capillaries */
  g+='<circle class="ring" cx="575" cy="210" r="148"/>';
  g+='<g clip-path="url(#lens)"><path class="skin" d="M420 140Q575 126 730 140"/><path class="lay" d="M420 186Q575 176 730 186"/>'+
     '<path class="cap" d="M420 236H730M420 260H730M420 296H730M420 318H730"/>';
  var cells='';for(var i=0;i<16;i++)cells+='<ellipse class="rbc" rx="8" ry="5" cx="0" cy="'+(i%2?307:248)+'"/>';
  g+='<g id="cells">'+cells+'</g></g>';
  /* trace panel */
  g+='<path class="pnl" d="M430 392H770V532H430Z M430 418H770"/>';
  g+='<text x="442" y="'+(mob?413:410)+'" class="t">'+(mob?"FLOW":"PERIPHERAL BLOOD FLOW")+'</text>';
  g+='<path class="trace" id="trace" d=""/>';
  g+='</g>';
  /* 1 wear: the band on the wrist, leader lines to the magnifier, the sensor housing */
  g+='<g id="sc1"><path class="band" d="M251 326L275 321L278 335L254 340Z"/>'+
     '<path class="lead dr" d="M278 322L452 120M280 336L436 270"/>'+
     '<g clip-path="url(#lens)"><path class="hous" d="M492 104H658V128H492Z"/></g><circle class="led" cx="640" cy="116" r="3"/>'+
     '<text x="30" y="36" class="a">'+(mob?"WEAR":"WORN AT THE WRIST")+'</text></g>';
  /* 2 sense: laser in, scattered light back to the camera */
  g+='<g id="sc2"><path class="laser dr" d="M540 128L575 248"/><path class="ret dr" d="M575 248L612 128"/>'+
     '<circle class="spk" cx="575" cy="248" r="4"/><circle class="spk2" cx="575" cy="248" r="13"/>'+
     '<text x="500" y="160" class="t r" text-anchor="end">'+(mob?"":"LASER")+'</text><text x="650" y="160" class="t r">'+(mob?"":"CAMERA")+'</text>'+
     '<text x="30" y="36" class="a">'+(mob?"SENSE":"LIGHT READS THE FLOW")+'</text></g>';
  /* 3 shift: arrows run inward along the limbs */
  g+='<g id="sc3"><path class="arw" d="M119 318L124 300L130 316M137 238L143 222L149 236M260 316L255 298L249 314M242 236L236 220L230 234M166 450L171 432L177 448M213 450L208 432L203 448"/>'+
     '<text x="30" y="36" class="a">'+(mob?"SHIFT":"BLOOD MOVES TO THE CORE")+'</text></g>';
  /* 4 alert */
  g+='<g id="sc4"><path class="mk dr" d="M640 424V500"/><path class="tri" d="M640 426l7 12h-14Z"/>'+
     '<text x="652" y="438" class="t al">'+(mob?"ALERT":"EARLY ALERT")+'</text>'+
     '<path class="pnl" d="M430 506H770"/><text x="442" y="523" class="t">'+(mob?"QBL":"AUTOMATED QBL")+'</text><text x="758" y="523" class="t al" text-anchor="end">'+(mob?"COMPENSATION":"COMPENSATION ALERT")+'</text>'+
     '<text x="30" y="36" class="a">'+(mob?"ALERT":"AN EARLY, OBJECTIVE ALERT")+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .fig, #scBase .vsl, #scBase .ring, #scBase .skin, #scBase .lay, #scBase .cap"),fade:$$("#scBase .pnl, #scBase text, #scBase .hrt, #cells",svg),
    g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),g4:$("#sc4",svg),d1:dl("#sc1 .dr"),d2:dl("#sc2 .dr"),d4:dl("#sc4 .dr"),
    limbs:$("#limbs",svg),core:$("#core",svg),hrt:$("#hrt",svg),cells:$$("#cells ellipse",svg),trace:$("#trace",svg),
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function trace(p,s3){var d="",x0=442,x1=758,ph=p*40;
    for(var x=x0;x<=x1;x+=3){var u=(x-x0)/(x1-x0),fall=s3*Math.min(1,Math.max(0,(u-.35)/.4));var A=20*(1-.72*fall);
      var w=(x-x0)/34*Math.PI*2+ph,y=466-A*(Math.pow(Math.max(0,Math.sin(w)),3)*.9+.18*Math.sin(w*2+.6));d+=(x===x0?"M":"L")+x+" "+y.toFixed(1)}
    return d}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    E.g1.style.opacity=(b*Math.max(s1,.55)).toFixed(3);draw(E.d1,Math.max(s1,.55));
    E.g2.style.opacity=(b*(s2>0?1:0)).toFixed(3);draw(E.d2,s2);
    E.g3.style.opacity=(b*s3).toFixed(3);
    E.g4.style.opacity=(b*(s4>0?1:0)).toFixed(3);draw(E.d4,s4);
    E.limbs.style.opacity=(1-.62*s3).toFixed(3);E.core.style.opacity=(.55+.45*s3).toFixed(3);E.core.classList.toggle("hot",s3>.5);
    E.hrt.style.opacity=(b*(.5+.5*s3)).toFixed(3);
    var on=.25+.75*s2;
    E.cells.forEach(function(c,i){var x=410+((i*41+p*900)%330);c.setAttribute("cx",x.toFixed(1));var gone=(i%5)<3&&s3>0?Math.min(1,s3*1.6-(i%5)*.25):0;c.style.opacity=(on*(1-Math.max(0,gone))).toFixed(3)});
    E.trace.setAttribute("d",trace(p,s3));E.trace.style.opacity=b.toFixed(3);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s2).toFixed(3);
    E.t[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.t[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.t[3].style.opacity=I(s4).toFixed(3);
  };
}
