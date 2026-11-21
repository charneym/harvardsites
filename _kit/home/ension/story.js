/* the story scene (BL/BY/DB): ONE engraved cross-section through Ension's bearingless pump on its stator, kept on screen
   throughout; each step adds one part as the sources describe it (NIH RePORTER 5R44HL178134 and R42HL134455 abstracts):
   the reusable motor stator (copper-wound teeth) that supplies power and control; the single-use pump head whose impeller
   carries an iron rotor rim (no rare-earth magnets in the disposable); magnetic levitation, contact-free, with no bearings,
   shaft or blood seal; the circuit, blood in at the inlet, out at the outlet, through an oxygenator and back to the patient.
   Proportions are schematic. */
function scene(){
  var mob=MOBILE(),LX=mob?584:600;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><pattern id="enHt" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V8" stroke="rgba(247,246,245,.2)" stroke-width="1"/></pattern>'+
     '<pattern id="enFe" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><path d="M0 0V6" stroke="rgba(143,207,214,.42)" stroke-width="1"/></pattern></defs>';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="wi sD" d="M40 430H560"/>';
  /* a faint ghost of the pump head that will drop into the bore, so the first frame is never half empty */
  g+='<path class="ghost" d="M232 420V300L282 262V112 M318 112V262L368 300V420Z M232 420H368 M232 300V268H150 M232 300H150 M244 346H356V398H244Z"/>';
  g+='</g>';
  /* 1 the stator: yoke either side, teeth pointing into the bore, copper windings above and below each tooth */
  function wind(x0,x1,y){var c='';for(var x=x0;x<=x1;x+=9)c+='<circle class="cu" cx="'+x+'" cy="'+y+'" r="4"/>';return c}
  var st='';
  st+='<path class="hatch" d="M60 328H150V430H60Z M450 328H540V430H450Z"/><path class="wl dr" d="M60 328H150V430H60Z M450 328H540V430H450Z"/>';
  st+='<path class="wl dr" d="M150 362H214V350H222V408H214V396H150 M450 362H386V350H378V408H386V396H450"/>';
  st+=wind(160,204,352)+wind(160,204,406)+wind(396,440,352)+wind(396,440,406);
  /* the system controller under it: touchscreen console, control electronics, AC or internal rechargeable batteries */
  var cells='';for(var x=78;x<=262;x+=26)cells+='<circle class="cell" cx="'+x+'" cy="506" r="10"/>';
  var ctl='<path class="wl dr" d="M40 452H560V536H40Z"/><path class="wi dr" d="M60 474H330 M330 474V530 M350 470H540"/>'+
     '<path class="chip" d="M370 462h28v8h-28Z M420 462h40v8h-40Z M480 462h22v8h-22Z"/>'+cells+'<path class="wi dr" d="M60 490H286V522H60Z"/>';
  g+='<g id="sc1">'+st+ctl+
     '<path class="ld2 dr" d="M540 360H'+(LX-8)+'"/><text x="'+LX+'" y="364" class="t c">REUSABLE STATOR</text>'+
     '<path class="ld2 dr" d="M540 404H'+(LX-8)+'"/><text x="'+LX+'" y="408" class="t c">COPPER-WOUND TEETH</text>'+
     '<path class="ld2 dr" d="M560 494H'+(LX-8)+'"/><text x="'+LX+'" y="498" class="t c">SYSTEM CONTROLLER</text><text x="'+LX+'" y="516" class="t c">AC OR INTERNAL BATTERIES</text>'+
     '<text x="40" y="60" class="a">THE STATOR</text></g>';
  /* 2 the single-use pump head in the bore: housing with inlet and outlet; impeller with vanes over an iron rotor rim */
  var hs='M232 420V300L282 262V112 M318 112V262L368 300V420Z';
  var hs2='M232 420H368';
  var outl='M232 300V268H150 M232 300H150';
  var imp='<path class="fe" d="M244 354H290V398H244Z M310 354H356V398H310Z"/><path class="wl dr" d="M244 354H290V398H244Z M310 354H356V398H310Z"/>'+
     '<path class="wl dr" d="M244 346H356V354H244Z"/>'+
     '<path class="wi dr" d="M252 346V316 M268 346V306 M284 346V300 M316 346V300 M332 346V306 M348 346V316"/>';
  g+='<g id="sc2"><path class="wl dr" d="'+hs+' '+hs2+'"/><path class="wl dr" d="'+outl+'"/>'+imp+
     '<path class="ld2 dr" d="M318 150H'+(LX-8)+'"/><text x="'+LX+'" y="154" class="t c">INLET</text>'+
     '<path class="ld2 dr" d="M352 288L392 250H'+(LX-8)+'"/><text x="'+LX+'" y="254" class="t c c2">SINGLE-USE PUMP HEAD</text>'+
     '<path class="ld2 dr" d="M356 330L404 304H'+(LX-8)+'"/><text x="'+LX+'" y="308" class="t c c2">IMPELLER, IRON ROTOR RIM</text>'+
     '<text x="40" y="60" class="a">THE IMPELLER</text></g>';
  /* 3 levitation: the field crosses the gap from tooth to rotor; nothing touches */
  var fld='M214 366C236 366 240 362 252 362 M214 392C236 392 240 396 252 396 M386 366C364 366 360 362 348 362 M386 392C364 392 360 396 348 396'+
     ' M222 356C250 330 350 330 378 356 M222 402C250 428 350 428 378 402';
  g+='<g id="sc3"><path class="fld dr" d="'+fld+'"/><path class="gap" d="M238 356V396 M362 356V396"/>'+
     '<path class="ld2 dr" d="M300 421L326 441H'+(LX-8)+'" /><text x="'+LX+'" y="446" class="t c c3">CONTACT-FREE: NO</text><text x="'+LX+'" y="464" class="t c c3">BEARINGS, NO SEAL</text>'+
     '<text x="40" y="60" class="a">LEVITATION</text></g>';
  /* 4 the circuit: in at the inlet, out at the outlet, through the oxygenator and back to the patient */
  var fib='';for(var y=196;y<=244;y+=8)fib+='M54 '+y+'H136 ';
  g+='<g id="sc4"><path class="flow dr" d="M300 92V280 M292 270L300 282L308 270"/><path class="flow dr" d="M282 312C262 300 250 290 240 284H170 M180 276L168 284L180 292"/>'+
     '<path class="wl dr" d="M46 184H144V256H46Z"/><path class="wi dr" d="'+fib+'"/><path class="wl dr" d="M150 268V256 M150 300V284"/>'+
     '<path class="flow dr" d="M95 180V120H260 M250 112L262 120L250 128"/>'+
     '<text x="46" y="174" class="t c c4">OXYGENATOR</text><text x="270" y="124" class="t c c4" text-anchor="start"></text>'+
     '<path class="ld2 dr" d="M136 120H40"/><text x="46" y="108" class="t c c4">TO THE PATIENT</text>'+
     '<text x="40" y="60" class="a">THE CIRCUIT</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .hatch",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[Math.max(seg(p,0,.16),.55),seg(p,.25,.44),seg(p,.5,.69),seg(p,.75,.94)];
    /* the parts accumulate on the one pair of glasses; earlier labels quieten as the next part arrives */
    for(var i=0;i<4;i++){
      var on=i===0?b:b*(s[i]>0?1:0),nx=i<3?s[i+1]:0;
      E.g[i].style.opacity=on.toFixed(3);draw(E.d[i],i===0?b*s[0]:s[i]);
      var lv=(i===0?b:Math.max(0,Math.min(1,s[i]*2-1)))*(1-.5*nx);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}
