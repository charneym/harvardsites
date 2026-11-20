/* the story scene (BL/BY/DB): ONE engraved section through a 3-in-1 style hydrogel insert in a plate well, kept on screen
   throughout; each step adds one stage as apricell.com describes it: the insert's floor of rounded microwells; one-step cell
   seeding giving one uniform spheroid per microwell; an extracellular matrix applied on the plate; drug testing in the same
   well, then fixing, paraffin embedding and slicing within the hydrogel for IHC and H&E. Proportions are schematic. */
function scene(){
  var mob=MOBILE(),LX=mob?586:604;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  var W=[110,290,470],hw=60,TOP=262,BOT=424,LIQ=168,X0=24,X1=556,PB=476,R0=110;
  g+='<defs><pattern id="apHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(243,241,247,.16)" stroke-width="1"/></pattern>'+
     '<pattern id="apEcm" width="11" height="11" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r=".9" fill="rgba(185,191,233,.55)"/><circle cx="8" cy="8.5" r=".7" fill="rgba(185,191,233,.4)"/><path d="M0 7Q3 5 6 7T11 6" fill="none" stroke="rgba(185,191,233,.28)" stroke-width=".6"/></pattern></defs>';
  /* the hydrogel insert, cut through three microwells (rounded floors), sitting in a plate well */
  var body='M'+X0+' '+TOP;W.forEach(function(c){body+='H'+(c-hw)+'V'+(BOT-hw)+'A'+hw+' '+hw+' 0 0 0 '+(c+hw)+' '+(BOT-hw)+'V'+TOP});
  body+='H'+X1+'V'+PB+'H'+X0+'Z';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="hatch" d="'+body+'"/><path class="wl sD" d="'+body+'"/>';
  g+='<path class="wl sD" d="M'+(X0-14)+' '+R0+'V'+(PB+14)+'H'+(X1+14)+'V'+R0+'"/>';
  g+='<path class="wi sD" d="M'+X0+' '+(TOP+8)+'H'+(W[0]-hw-8)+'M'+X1+' '+(TOP+8)+'H'+(W[2]+hw+8)+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">SECTION · HYDROGEL INSERT</text><text x="558" y="538" class="t s">3-IN-1™ · APRICELL</text></g>';
  g+='</g>';
  /* 1 the microwell: culture medium over the insert and down into each microwell */
  function mw(c,y){return 'M'+(c-hw+1)+' '+y+'V'+(BOT-hw)+'A'+(hw-1)+' '+(hw-1)+' 0 0 0 '+(c+hw-1)+' '+(BOT-hw)+'V'+y+'Z'}
  var med='M'+(X0-13)+' '+LIQ+'Q'+((X0+X1)/2)+' '+(LIQ+10)+' '+(X1+13)+' '+LIQ+'V'+TOP+'H'+(X0-13)+'Z';
  var C=W[2];
  g+='<g id="sc1"><path class="liq" d="'+med+'"/>'+W.map(function(c){return '<path class="liq" d="'+mw(c,TOP)+'"/>'}).join("")+
     '<path class="men dr" d="M'+(X0-13)+' '+LIQ+'Q'+((X0+X1)/2)+' '+(LIQ+10)+' '+(X1+13)+' '+LIQ+'"/>'+
     '<path class="ld2 dr" d="M'+(X1+16)+' '+(LIQ+40)+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(LIQ+44)+'" class="t c">CULTURE MEDIUM</text>'+
     '<path class="ld2 dr" d="M'+(X1-12)+' '+(TOP+70)+'L'+(X1+20)+' 312H'+(LX-8)+'"/><text x="'+LX+'" y="316" class="t c">HYDROGEL INSERT</text>'+
     '<path class="ld2 dr" d="M'+(C+hw-6)+' '+(BOT-40)+'L'+(X1+20)+' 352H'+(LX-8)+'"/><text x="'+LX+'" y="356" class="t c">MICROWELL</text>'+
     '<text x="40" y="60" class="a">THE MICROWELL</text></g>';
  /* 2 one seeding step: a pipette tip, cells settling, one spheroid gathered in the floor of every microwell */
  function sph(c){var cy=BOT-30,s='<circle class="sph dr" cx="'+c+'" cy="'+cy+'" r="27"/>';
    [[0,0,7],[-13,-6,6.5],[13,-7,6.5],[-9,11,6.5],[10,11,6.5],[0,-17,6],[-19,5,5.5],[19,5,5.5],[1,19,5.5]].forEach(function(p){s+='<circle class="cel" cx="'+(c+p[0])+'" cy="'+(cy+p[1])+'" r="'+p[2]+'"/>'});return s}
  var fall='';W.forEach(function(c){[[-24,212],[18,226],[-6,244],[26,190],[-30,180]].forEach(function(p){fall+='<circle class="cel f" cx="'+(c+p[0])+'" cy="'+p[1]+'" r="3.4"/>'})});
  var tip='M'+(W[1]-16)+' 20L'+(W[1]-5)+' 122H'+(W[1]+5)+'L'+(W[1]+16)+' 20';
  g+='<g id="sc2"><path class="pip dr" d="'+tip+'"/><path class="ld dr" d="M'+W[1]+' 128V'+(LIQ-6)+'"/>'+fall+W.map(sph).join("")+
     '<path class="ld2 dr" d="M'+(W[1]+20)+' 70H'+(LX-8)+'"/><text x="'+LX+'" y="74" class="t c">ONE-STEP SEEDING</text>'+
     '<path class="ld2 dr" d="M'+(C+28)+' '+(BOT-30)+'L'+(X1+20)+' 446H'+(LX-8)+'"/><text x="'+LX+'" y="450" class="t c c2">ONE SPHEROID</text><text x="'+LX+'" y="468" class="t c c2">PER MICROWELL</text>'+
     '<text x="40" y="60" class="a">ONE SEEDING STEP</text></g>';
  /* 3 the matrix: an extracellular matrix fills each microwell around its spheroid */
  g+='<g id="sc3">'+W.map(function(c){return '<path class="ecm" d="'+mw(c,TOP-6)+'"/><path class="ecml dr" d="M'+(c-hw+2)+' '+(TOP-6)+'H'+(c+hw-2)+'"/>'}).join("")+
     '<path class="ld2 dr" d="M'+(C+hw-14)+' '+(TOP+30)+'L'+(X1+20)+' 252H'+(LX-8)+'"/><text x="'+LX+'" y="256" class="t c c3">EXTRACELLULAR</text><text x="'+LX+'" y="274" class="t c c3">MATRIX</text>'+
     '<text x="40" y="60" class="a">THE MATRIX</text></g>';
  /* 4 treat, then slice in place: the drug diffuses down; section planes cut through each spheroid inside the hydrogel */
  var drp='';W.forEach(function(c){[[-40,190],[-10,206],[22,184],[40,214],[-26,236],[8,250],[-44,280],[34,296],[-14,318],[20,340]].forEach(function(p){drp+='<circle class="drp" cx="'+(c+p[0])+'" cy="'+p[1]+'" r="2.1"/>'})});
  var cut='';[BOT-46,BOT-36,BOT-26,BOT-16].forEach(function(y){cut+='M'+(X0+8)+' '+y+'H'+(X1-8)});
  g+='<g id="sc4">'+drp+'<path class="cut dr" d="'+cut+'"/>'+
     '<path class="ld2 dr" d="M'+(C+44)+' 190L'+(X1+20)+' 140H'+(LX-8)+'"/><text x="'+LX+'" y="144" class="t c c4">DRUG IN THE WELL</text>'+
     '<path class="ld2 dr" d="M'+(X1-8)+' '+(BOT-26)+'L'+(X1+20)+' 396H'+(LX-8)+'"/><text x="'+LX+'" y="394" class="t c c4">IN SITU SECTIONS</text><text x="'+LX+'" y="412" class="t c c4">FOR IHC · H&amp;E</text>'+
     '<text x="40" y="60" class="a">TREAT, THEN SLICE</text></g>';
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
