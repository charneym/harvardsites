/* the story scene (BL/BY/DB): ONE engraved longitudinal section of the distal colon and rectum, as on a surgical atlas
   plate, with the stapled colorectal anastomosis. Join: the staple line and the healing join. Ostomy: today's standard,
   a limb of bowel brought out through the abdominal wall to a bag. Anchor: ColoSeal's gold anchor seated in healthy colon
   10–20 cm above the join, with a cross-section A–A showing the vacuum holding it to the wall. Diversion: the sheath runs
   from the anchor past the anastomosis and out, carrying the flow to a collection bag. Facts from NCT06402188 and the
   CEO's Fierce 15 interview. */
function scene(){
  var mob=MOBILE(),f=function(n){return n.toFixed(1)};
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  /* walls: colon with haustral scallops down to the join at y=330, then the rectal ampulla and the anal canal */
  var JY=330;
  function wallL(o){var x=170+o,s='M'+x+' 18';for(var y=18;y<JY-10;y+=44)s+='Q'+(x-8)+' '+(y+22)+' '+x+' '+(y+44);
    return s+'C'+x+' '+(JY+40)+' '+(x-16)+' '+(JY+64)+' '+(x-16)+' 420C'+(x-16)+' 468 '+(x+30)+' 500 '+(x+38)+' 530L'+(x+40)+' 552'}
  function wallR(o){var x=350-o,s='M'+x+' 18';for(var y=18;y<JY-10;y+=44)s+='Q'+(x+8)+' '+(y+22)+' '+x+' '+(y+44);
    return s+'C'+x+' '+(JY+40)+' '+(x+16)+' '+(JY+64)+' '+(x+16)+' 420C'+(x+16)+' 468 '+(x-30)+' 500 '+(x-38)+' 530L'+(x-40)+' 552'}
  var hz='';for(var y=62;y<JY-10;y+=44)hz+='M170 '+y+'Q186 '+(y+6)+' 200 '+(y+2)+'M350 '+y+'Q334 '+(y+6)+' 320 '+(y+2);
  var st='';for(var k=0;k<9;k++){var x=180+k*20;st+='M'+x+' '+(JY-4)+'v8'}
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="sD wl" d="'+wallL(0)+'"/><path class="sD wl" d="'+wallR(0)+'"/>';
  g+='<path class="sD wi" d="'+wallL(7)+'"/><path class="sD wi" d="'+wallR(7)+'"/>';
  g+='<path class="sD wi" d="'+hz+'"/>';
  g+='<path class="cut" d="M164 '+JY+'H356"/><path class="stp" d="'+st+'"/>';
  g+='<g class="sl"><text x="40" y="96" class="t">COLON</text><path class="ld" d="M92 92H160"/>'+
     '<text x="40" y="'+(JY+4)+'" class="t">JOIN</text><path class="ld" d="M80 '+JY+'H158"/>'+
     '<text x="40" y="440" class="t">RECTUM</text><path class="ld" d="M100 436H146"/></g>';
  g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">SECTION · COLON AND RECTUM</text><text x="558" y="538" class="t s">COLOSEAL™ ICD · AVERTO</text></g>';
  g+='</g>';
  /* 1 the join: the staple line glows, the join named */
  g+='<g id="sc1"><path class="su dr" d="M176 '+JY+'H344"/><path class="ld2 dr" d="M366 '+JY+'H456"/>'+
     '<text x="464" y="'+(JY+4)+'" class="t c">ANASTOMOSIS · STAPLED JOIN</text>'+
     '<text x="440" y="60" class="a">THE JOIN</text></g>';
  /* 2 the ostomy: a limb of bowel brought out through the abdominal wall to a bag; flow leaves before the join */
  var LIMB='M350 128C400 128 430 150 470 168';var LIMB2='M350 178C400 178 430 196 470 206';
  var aw='';for(var y=120;y<300;y+=10)aw+='M470 '+y+'l10 -8';
  g+='<g id="sc2"><path class="wl dr" d="'+LIMB+'"/><path class="wl dr" d="'+LIMB2+'"/><path class="aw dr" d="M470 110V300"/><path class="ht" d="'+aw+'"/>'+
     '<path class="bag dr" d="M486 150H556Q572 150 572 166V262Q572 290 544 290H498Q486 290 486 278Z"/>'+
     '<path class="lk dr" d="M260 22V110C260 140 310 152 380 156C420 160 446 176 500 186"/><path class="lkh" d="M492 180l10 6l-9 7"/>'+
     (mob?'<text x="486" y="320" class="t c">TEMPORARY OSTOMY</text><text x="486" y="346" class="t c">REVERSAL · 18%</text><text x="486" y="372" class="t c">COMPLICATIONS</text>'
       :'<path class="ld2 dr" d="M580 226H604"/><text x="612" y="230" class="t c">TEMPORARY OSTOMY</text><text x="612" y="252" class="t c">REVERSAL · 18%</text><text x="612" y="270" class="t c">COMPLICATION RATE</text>')+
     '<text x="440" y="60" class="a">THE OSTOMY</text></g>';
  /* 3 the anchor: a gold cuff in healthy colon, 10–20 cm above the join, held by vacuum (section A–A) */
  var AY0=104,AY1=164,AX=640,AYc=214;
  var rb='';for(var y=AY0+6;y<AY1;y+=6)rb+='M176 '+y+'H344';
  var va='';[[172,122],[172,146],[348,122],[348,146]].forEach(function(p){var d=p[0]<260?-1:1;va+='M'+(p[0]-d*10)+' '+p[1]+'h'+(d*8)+'M'+(p[0]-d*4)+' '+(p[1]-4)+'l'+(d*4)+' 4l'+(-d*4)+' 4'});
  var cv='';for(var k=0;k<8;k++){var a=k/8*Math.PI*2+Math.PI/8,c=Math.cos(a),s=Math.sin(a);cv+='M'+f(AX+50*c)+' '+f(AYc+50*s)+'L'+f(AX+60*c)+' '+f(AYc+60*s)}
  g+='<g id="sc3"><path class="cuff" d="M176 '+AY0+'H344V'+AY1+'H176Z"/><path class="rib" d="'+rb+'"/><path class="vac dr" d="'+va+'"/>'+
     '<path class="ldash dr" d="M260 548V'+(AY1+4)+'"/>'+
     '<path class="dim dr" d="M384 '+AY1+'V'+JY+'M378 '+AY1+'h12M378 '+JY+'h12"/><text x="396" y="252" class="t c">10–20 CM</text>'+
     '<path class="cut" d="M156 134H364"/><text x="142" y="138" class="t">A</text><text x="370" y="138" class="t">A</text>'+
     '<circle class="wl" cx="'+AX+'" cy="'+AYc+'" r="72"/><circle class="wi" cx="'+AX+'" cy="'+AYc+'" r="66"/>'+
     '<path class="ring" d="M'+(AX-62)+' '+AYc+'a62 62 0 1 0 124 0a62 62 0 1 0 -124 0M'+(AX-44)+' '+AYc+'a44 44 0 1 1 88 0a44 44 0 1 1 -88 0"/>'+
     '<path class="vac dr" d="'+cv+'"/><circle class="st dr" cx="'+AX+'" cy="'+AYc+'" r="28"/>'+
     '<text x="'+AX+'" y="'+(AYc+102)+'" class="t c c3" text-anchor="middle">SECTION A–A · VACUUM ANCHOR</text>'+
     '<text x="440" y="60" class="a">THE ANCHOR</text></g>';
  /* 4 the diversion: the sheath from the anchor past the join and out, flow inside it */
  var SH='M226 '+AY1+'V'+(JY+20)+'C226 400 222 470 246 520L250 552M294 '+AY1+'V'+(JY+20)+'C294 400 298 470 274 520L270 552';
  g+='<g id="sc4"><path class="sh" d="M226 '+AY1+'V'+(JY+20)+'C226 400 222 470 246 520L250 552H270L274 520C298 470 294 400 294 '+(JY+20)+'V'+AY1+'Z"/><path class="sht dr" d="'+SH+'"/>'+
     '<path class="flow dr" d="M260 '+(AY1+14)+'V540"/><path class="lkh2" d="M253 300l7 10l7 -10M253 480l7 10l7 -10"/>'+
     '<path class="ld2 dr" d="M366 '+(JY+18)+'H456"/><text x="464" y="'+(JY+22)+'" class="t c">JOIN PROTECTED FROM FLOW</text>'+
     '<path class="ld2 dr" d="M282 530H352"/><text x="360" y="526" class="t c c4">TO COLLECTION BAG</text><text x="360" y="543" class="t c c4">10 ± 3 DAYS</text>'+
     '<text x="440" y="60" class="a">THE DIVERSION</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .cut, #scBase .stp, #scBase .sl",svg),g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),g4:$("#sc4",svg),
    d1:dl("#sc1 .dr"),d2:dl("#sc2 .dr"),d3:dl("#sc3 .dr"),d4:dl("#sc4 .dr"),c3:$("#sc3 .c3",svg),c4:$$("#sc4 .c4",svg),
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94),d1=Math.max(s1,.55);
    E.g1.style.opacity=(b*(1-Math.min(1,s2*3))).toFixed(3);draw(E.d1,b*d1);
    E.g2.style.opacity=(b*(s2>0?1:0)*(1-s3)).toFixed(3);draw(E.d2,s2);
    E.g3.style.opacity=(b*(s3>0?1:0)).toFixed(3);draw(E.d3,s3);E.c3.style.opacity=Math.max(0,s3*2-1)*(1-s4*.4);
    E.g4.style.opacity=(b*(s4>0?1:0)).toFixed(3);draw(E.d4,s4);E.c4.forEach(function(e){e.style.opacity=Math.max(0,s4*2-1).toFixed(3)});
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s2).toFixed(3);
    E.t[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.t[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.t[3].style.opacity=I(s4).toFixed(3);
  };
}
