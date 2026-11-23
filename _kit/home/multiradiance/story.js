/* The story scene (DB/BY): Multi Radiance's own Cascading Energy Effect (multiradiance.com/technology: "660 nm absorbed by
   superficial tissue clears the way for infrared 875 nm to penetrate deeper and eliminate cellular interference, which
   allows infrared 905 nm super pulsed laser to go even deeper"), drawn as ONE fine-line tissue section under the emitter:
   skin, dermis with follicles and capillary loops, fat lobules, muscle fibres and bone. Frame 0 is already complete.
   Step 1: the 660 nm red beam reaches the dermis. Step 2: the 875 nm infrared beam reaches the fat. Step 3: the 905 nm
   super pulsed laser reaches deep into the muscle, in visible pulses. Layer labels sit in a clear left margin, wavelength
   labels in a clear right margin (DR3); everything is driven by the scrubbed progress. */
var SCW=760,SCH=600,AX=356,AY=66,BX0=150,BX1=562;
function wav(y,a,x0,x1){var d="M"+x0+" "+y;for(var x=x0;x<x1;x+=34)d+="Q"+(x+8.5)+" "+(y-a)+" "+(x+17)+" "+y+"T"+(x+34)+" "+y;return d}
/* each beam: id, colour, depth, half-width at depth. Drawn widest first: red is broad and shallow, infrared narrower and
   deeper, the super pulsed laser narrowest and deepest, so all three stay visible nested in the final frame */
var BEAMS=[["bR","#ef5348",182,104,"660 NM RED","660 NM"],["bI","#f59a4a",284,66,"875 NM INFRARED","875 NM"],["bL","#fde04e",428,30,"905 NM LASER","905 NM"]];
function storyScene(o){
  var g='',i,x,y,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'24 6 712 594':'0 0 760 600')+'" aria-hidden="true"><defs>';
  BEAMS.forEach(function(b){g+='<linearGradient id="g'+b[0]+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+b[1]+'" stop-opacity=".6"/><stop offset=".72" stop-color="'+b[1]+'" stop-opacity=".2"/><stop offset="1" stop-color="'+b[1]+'" stop-opacity="0"/></linearGradient>'});
  g+='</defs><g id="scBase">';
  /* the emitter head, and its window */
  g+='<path class="wl sD" d="M'+(AX-58)+' 60V30Q'+(AX-58)+' 18 '+(AX-46)+' 18H'+(AX+46)+'Q'+(AX+58)+' 18 '+(AX+58)+' 30V60"/><path class="wl sD" d="M'+(AX-66)+' 60H'+(AX+66)+'"/>';
  /* the tissue block: skin surface, epidermis, dermis floor, fascia, periosteum */
  g+='<path class="wl sD" d="'+wav(100,3,BX0,BX1)+'"/><path class="wo sD" d="'+wav(114,2,BX0,BX1)+'"/>';
  g+='<path class="wo sD" d="M'+BX0+' 200H'+BX1+'"/><path class="wo sD" d="M'+BX0+' 300H'+BX1+'"/><path class="wl sD" d="M'+BX0+' 452H'+BX1+'"/>';
  /* dermis: follicles with bulbs and capillary loops */
  [[178,1],[236,-1],[468,1],[528,-1]].forEach(function(f){var x=f[0],k=f[1];g+='<path class="wmd sD" d="M'+x+' 100L'+(x+12*k)+' 176"/><path class="wmd sD" d="M'+(x+12*k-5)+' 182a6 7 0 1 0 10 0"/>'});
  [204,292,404,500].forEach(function(x){g+='<path class="wo sD" d="M'+x+' 116V142a8 8 0 0 0 16 0V116"/>'});
  /* fat lobules */
  for(var r=0;r<3;r++)for(x=BX0+16+(r%2)*17;x<=BX1-16;x+=34)g+='<circle class="wo sD" cx="'+x+'" cy="'+(222+r*28)+'" r="13"/>';
  /* muscle fibre bundles */
  for(y=318;y<=436;y+=14)g+='<path class="wmd sD" d="M'+BX0+' '+y+'C'+(BX0+100)+' '+(y-4)+' '+(BX0+200)+' '+(y+4)+' '+(BX0+300)+' '+y+'S'+(BX1-40)+' '+(y-3)+' '+BX1+' '+y+'"/>';
  /* bone: cortex and trabeculae */
  g+='<path class="wl sD" d="M'+BX0+' 472H'+BX1+'"/><path class="wl sD" d="M'+BX0+' 538H'+BX1+'"/>';
  for(x=BX0+16;x<BX1-34;x+=44)g+='<path class="wo sD" d="M'+x+' 484l18 14M'+(x+26)+' 486l-10 20M'+(x+8)+' 512l22 14"/>';
  g+='</g>';
  /* the beams, each growing down from the window */
  g+='<g id="scBeams">';BEAMS.forEach(function(b){g+='<path class="bm" id="'+b[0]+'" fill="url(#g'+b[0]+')" d="M'+(AX-20)+' '+AY+'L'+(AX-b[3])+' '+b[2]+'L'+(AX+b[3])+' '+b[2]+'L'+(AX+20)+' '+AY+'Z"/>'});g+='</g>';
  /* super pulses: short bright dashes travelling down the laser beam */
  g+='<g id="scPul">';for(i=0;i<6;i++)g+='<path class="pl" d="M'+AX+' 0v14"/>';g+='</g>';
  /* the emitter's three sources */
  [[AX-22,"#ef5348"],[AX,"#fde04e"],[AX+22,"#f59a4a"]].forEach(function(d){g+='<circle class="dd" cx="'+d[0]+'" cy="'+(AY-14)+'" r="4" fill="'+d[1]+'"/>'});
  /* layer labels in the left margin, wavelength labels in the right column: no stroke within 8 px of any text (DR3) */
  var lx=mob?36:40;
  [["SKIN",104],["DERMIS",162],["FAT",256],["MUSCLE",382],["BONE",510]].forEach(function(l){g+='<text class="t" x="'+lx+'" y="'+l[1]+'">'+l[0]+'</text>'});
  if(!mob)g+='<text class="t" x="'+(AX-74)+'" y="44" text-anchor="end">EMITTER</text>';
  BEAMS.forEach(function(b){var y=b[2]-10;g+='<g id="l'+b[0]+'"><path class="ld" d="M'+(AX+b[3]*.9+10)+' '+(y-4)+'H'+(BX1+8)+'"/><path class="ld" d="M'+(BX1+8)+' '+(y-4)+'H'+(BX1+20)+'"/><text class="t w" x="'+(BX1+28)+'" y="'+y+'">'+(mob?b[5]:b[4])+'</text></g>'});
  var ly=SCH-8,cx=mob?36:40;
  g+='<g id="lb1"><text class="a" x="'+cx+'" y="'+ly+'">'+(mob?'RED: ABSORBED NEAR THE SURFACE':'660 NM RED IS ABSORBED BY THE SUPERFICIAL TISSUE')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+cx+'" y="'+ly+'">'+(mob?'INFRARED: DEEPER':'875 NM INFRARED PENETRATES DEEPER')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+cx+'" y="'+ly+'">'+(mob?'SUPER PULSED LASER: DEEPEST':'905 NM SUPER PULSED LASER GOES EVEN DEEPER')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),bR:$("#bR",svg),bI:$("#bI",svg),bL:$("#bL",svg),lR:$("#lbR",svg),lI:$("#lbI",svg),lL:$("#lbL",svg),
    pul:$$("#scPul .pl",svg),dd:$$(".dd",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function grow(el,v){if(!el)return;el.setAttribute("transform","translate(0 "+AY+") scale(1 "+Math.max(.001,v).toFixed(4)+") translate(0 "+(-AY)+")");op(el,v>0?1:0)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.3),s2=seg(p,.36,.62),s3=seg(p,.68,.92);
    grow(E.bR,b*s1);grow(E.bI,b*s2);grow(E.bL,b*s3);
    op(E.lR,b*seg(p,.22,.3));op(E.lI,b*seg(p,.54,.62));op(E.lL,b*seg(p,.86,.94));
    E.dd.forEach(function(el,i){op(el,b*(i===0?.35+.65*s1:i===2?.35+.65*s2:.35+.65*s3))});
    /* the super pulses run down the laser beam only once it is on */
    var on=b*s3;E.pul.forEach(function(el,i){var f=((p*9+i/6)%1),y=AY+(428-AY-24)*f;el.setAttribute("transform","translate(0 "+y.toFixed(1)+")");op(el,on*(1-f)*.95)});
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.32,.38)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.72,.8));
  };
}
