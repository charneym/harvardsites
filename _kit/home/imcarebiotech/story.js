/* the story scene (BL/BY/DB): ONE engraved drawing kept on screen throughout; each step adds one part of the test as ImCare
   describes it (imcarebiotech.com /research and the May 2026 symposium note; NIH RePORTER 1R43CA302053 abstract):
   1 the liver, with a tumour of malignant hepatocytes; 2 LC-SPIK, a protein secreted in liver cancer, carried into the blood
   and drawn as a simple blood sample (serum); 3 an ELISA well in which capture antibodies bind LC-SPIK so it can be measured
   quantitatively (Seravue®); 4 Seravue AI: LC-SPIK with the established markers AFP and DCP, combined by an algorithm.
   Proportions are schematic. */
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><pattern id="icHt" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V8" stroke="rgba(246,242,249,.15)" stroke-width="1"/></pattern>'+
     '<pattern id="icHt2" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><path d="M0 0V6" stroke="rgba(213,184,234,.45)" stroke-width="1"/></pattern></defs>';
  /* base: the frame and the title block */
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<g class="tb"><path class="tbl" d="M24 494h236v52h-236Z M24 520h236"/><text x="34" y="512" class="t">SERAVUE® · LC-SPIK</text><text x="34" y="538" class="t s">IMCARE BIOTECH · SCHEMATIC</text></g>';
  g+='</g>';
  /* 1 the liver: two lobes, the falciform line, a tumour nodule in the right lobe */
  var liver='M54 168C60 132 120 112 200 110C262 108 318 112 344 128C356 136 350 150 334 160C306 178 280 196 252 214C232 228 214 240 196 246C176 252 160 248 146 256C126 268 112 290 92 286C66 280 52 246 50 214C49 196 50 180 54 168Z';
  var lobe='M214 112C210 150 206 196 200 244';
  var vein='M86 196C120 202 160 196 192 184M80 236C110 236 150 226 186 214M228 196C246 192 262 186 276 178';
  g+='<g id="sc1"><path class="wl dr" d="'+liver+'"/><path class="wi dr" d="'+lobe+'"/><path class="wi dr" d="'+vein+'"/>'+
     '<circle class="tum" cx="262" cy="156" r="20"/><circle class="wl dr" cx="262" cy="156" r="20"/>'+
     '<path class="ld2 dr" d="M262 136V90H286"/><text x="292" y="94" class="t c">TUMOUR</text>'+
     '<path class="ld2 dr" d="M92 286L82 334H98"/><text x="104" y="338" class="t c">LIVER</text>'+
     '<text x="40" y="60" class="a">THE LIVER</text></g>';
  /* 2 the sample: LC-SPIK leaves the tumour into the blood; a simple blood draw, spun to serum over packed cells */
  var dots='';[[296,164,3],[314,172,2.6],[332,186,3],[348,204,2.4],[360,224,2.8]].forEach(function(d){dots+='<circle class="prot" cx="'+d[0]+'" cy="'+d[1]+'" r="'+d[2]+'"/>'});
  var tube='M384 140V448C384 462 394 472 408 472C422 472 432 462 432 448V140';
  g+='<g id="sc2"><path class="flow dr" d="M282 160C322 166 356 200 368 244"/>'+dots+
     '<path class="serum" d="M385 236H431V306H385Z"/><path class="cells" d="M385 306H431V448C431 461 421 471 408 471C395 471 385 461 385 448Z"/>'+
     '<path class="wl dr" d="'+tube+'"/><path class="wl dr" d="M374 110H442V140H374Z"/><path class="wi dr" d="M378 124H438"/>'+
     '<path class="men dr" d="M386 236H430"/><path class="wi dr" d="M386 306H430"/>'+
     '<path class="ld2 dr" d="M356 232L344 246H340"/><text x="336" y="250" class="t c" text-anchor="end">LC-SPIK</text>'+
     '<path class="ld2 dr" d="M384 296H374"/><text x="368" y="300" class="t c" text-anchor="end">SERUM</text><path class="ld2 dr" d="M384 390H374"/><text x="368" y="394" class="t c" text-anchor="end">BLOOD CELLS</text>'+
     '<text x="40" y="60" class="a">THE SAMPLE</text></g>';
  /* 3 the assay: one well of an ELISA plate in section, capture antibodies on its floor holding LC-SPIK */
  var X0=490,X1=650,TOP=150,BOT=286,c=570,hw=48;
  var body='M'+X0+' '+TOP+'H'+(c-hw)+'V'+(BOT-14)+'Q'+(c-hw)+' '+BOT+' '+(c-hw+14)+' '+BOT+'H'+(c+hw-14)+'Q'+(c+hw)+' '+BOT+' '+(c+hw)+' '+(BOT-14)+'V'+TOP+'H'+X1+'V'+(BOT+22)+'H'+X0+'Z';
  var ys='',bound='';[-30,-10,10,30].forEach(function(o){var x=c+o,y=BOT-2;ys+='M'+x+' '+y+'V'+(y-12)+'M'+x+' '+(y-12)+'L'+(x-6)+' '+(y-22)+'M'+x+' '+(y-12)+'L'+(x+6)+' '+(y-22);
    bound+='<circle class="prot on" cx="'+x+'" cy="'+(y-27)+'" r="4"/>'});
  g+='<g id="sc3"><path class="hatch" d="'+body+'"/><path class="wl dr" d="'+body+'"/>'+
     '<path class="liq" d="M'+(c-hw+1)+' 196H'+(c+hw-1)+'V'+(BOT-14)+'Q'+(c+hw-1)+' '+(BOT-1)+' '+(c+hw-15)+' '+(BOT-1)+'H'+(c-hw+15)+'Q'+(c-hw+1)+' '+(BOT-1)+' '+(c-hw+1)+' '+(BOT-14)+'Z"/>'+
     '<path class="men dr" d="M'+(c-hw+1)+' 196H'+(c+hw-1)+'"/><path class="ab dr" d="'+ys+'"/>'+bound+
     '<path class="ld2 dr" d="M'+(c+30)+' '+(BOT-30)+'L'+(X1+14)+' 214H'+(X1+22)+'"/><text x="'+(X1+28)+'" y="218" class="t c">LC-SPIK</text>'+
     '<path class="ld2 dr" d="M'+(c+36)+' '+(BOT-12)+'L'+(X1+14)+' 262H'+(X1+22)+'"/><text x="'+(X1+28)+'" y="258" class="t c">CAPTURE</text><text x="'+(X1+28)+'" y="276" class="t c">ANTIBODY</text>'+
     '<path class="ld2 dr" d="M'+X0+' 128H'+X1+'"/><text x="'+X0+'" y="118" class="t c">ELISA WELL · SERAVUE®</text>'+
     '<text x="40" y="60" class="a">THE ASSAY</text></g>';
  /* 4 the algorithm: three markers, measured, combined into one result (Seravue AI) */
  var rows=[["LC-SPIK",372,150],["AFP",408,96],["DCP",444,118]],bars='',lines='';
  rows.forEach(function(r){bars+='<text x="562" y="'+(r[1]+4)+'" class="t c" text-anchor="end">'+r[0]+'</text><path class="bar" d="M574 '+(r[1]-5)+'h'+(r[2]*.8)+'v10h-'+(r[2]*.8)+'Z"/>';
    lines+='M'+(580+r[2]*.8)+' '+r[1]+'C'+(690)+' '+r[1]+' '+(680)+' 408 '+(712)+' 408'});
  g+='<g id="sc4">'+bars+'<path class="wi dr" d="'+lines+'"/>'+
     '<path class="node dr" d="M712 386h44v44h-44Z"/><path class="core" d="M724 398h20v20h-20Z"/>'+
     '<text x="760" y="474" class="t c" text-anchor="end">SERAVUE AI</text><text x="490" y="340" class="t nm">THREE MARKERS · ONE ALGORITHM</text>'+
     '<text x="40" y="60" class="a">THE ALGORITHM</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb",svg),
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
    /* the parts accumulate on the one drawing; earlier labels quieten as the next part arrives */
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
