/* The story scene (DB/BL/BY): GerdCare's own mechanism (gerd-care.com, How It Works: eGERD is a digital therapeutic
   electro-stimulator generating modulated asymmetrical bursts of pulses synchronised with breathing; abdominal muscles are
   stimulated, improving the function of the lower esophageal sphincter (LES) and reducing acid reflux from the stomach to
   the esophagus), drawn as ONE calm fine-line front view of the torso that fills the frame: esophagus, diaphragm, LES and
   stomach, with the eGERD belt and its two pads at the waist (as in the company's product render).
   Frame 0 is complete: torso, esophagus, diaphragm, stomach, the LES held open and a reflux stream.
   Step 1 (reflux): the LES lips stay apart, acid streams up the esophagus.
   Step 2 (wear): the belt and its two electrode pads draw in across the abdomen.
   Step 3 (pulse): the diaphragm moves with each breath; asymmetrical bursts rise from the pads on every inhalation.
   Step 4 (relief): the LES lips close, the reflux stops, the acid stays in the stomach. Driven by scrubbed progress.
   No dash draws on non-scaling strokes (DR4; nssfix.js is inlined too). Labels keep >=8px clear of every stroke (DR3). */
var T_L="M215 50C205 150 200 250 212 340C222 420 230 470 236 530",T_R="M565 50C575 150 580 250 568 340C558 420 550 470 544 530";
var ES_L="M372 50C372 120 374 190 382 268L382 292",ES_R="M408 50C408 120 410 190 418 268L418 292";
var STOM="M382 292C364 326 358 376 372 412C390 456 458 470 506 450C548 432 560 384 548 342C536 300 502 272 466 272C444 272 428 280 418 292";
var ACID="M372 394C400 388 430 400 462 392C494 384 524 396 548 388";
var JETS=["M394 300C392 250 388 180 386 112","M400 300C401 240 400 170 400 96","M406 300C409 250 412 190 414 112"];
var BELT1="M233 492C330 506 450 506 547 492",BELT2="M236 520C334 534 446 534 544 520";
var PADS=[[270,506],[510,506]];
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'170 40 440 532':'40 40 690 530')+'" aria-hidden="true"><g id="scG">';
  [T_L,T_R].forEach(function(d){g+='<path class="wo sD" d="'+d+'"/>'});
  [ES_L,ES_R,STOM].forEach(function(d){g+='<path class="wl sD" d="'+d+'"/>'});
  g+='<path class="en sD" d="'+ACID+'"/>';
  g+='<path class="dia" id="diaL"/><path class="dia" id="diaR"/>';
  g+='<g id="scJet">';JETS.forEach(function(d){g+='<path class="jet" d="'+d+'"/>'});
  g+='<path class="jh" d="M380 122L386 112L392 122"/><path class="jh" d="M394 106L400 96L406 106"/><path class="jh" d="M408 122L414 112L420 122"/></g>';
  g+='<path class="lf" id="lsL"/><path class="lf" id="lsR"/>';
  g+='<g id="belt"><path class="bl sB" d="'+BELT1+'"/><path class="bl sB" d="'+BELT2+'"/>';
  PADS.forEach(function(p){g+='<rect class="pad" x="'+(p[0]-17)+'" y="'+(p[1]-20)+'" width="34" height="40"/>'});
  g+='<rect class="mod" x="'+(PADS[1][0]-12)+'" y="'+(PADS[1][1]-7)+'" width="24" height="14"/></g>';
  g+='<g id="pz">';
  PADS.forEach(function(p,i){var n=i?3:2;for(var j=0;j<n;j++){var y=p[1]-27-j*7,r=10+j*5;g+='<path class="pu" data-j="'+j+'" data-s="'+i+'" d="M'+(p[0]-r)+' '+(y+5)+'Q'+p[0]+' '+(y-7)+' '+(p[0]+r)+' '+(y+5)+'"/>'}});
  g+='</g></g>';
  if(!mob){g+='<g id="lCh"><text class="t" x="604" y="140">ESOPHAGUS</text><text class="t" x="604" y="250">DIAPHRAGM</text><text class="t" x="604" y="380">STOMACH</text><text class="t" x="330" y="304">LES</text></g>'+
    '<g id="lBt"><text class="t" x="604" y="510">eGERD BELT</text></g>'}else{g+='<g id="lCh"></g><g id="lBt"></g>'}
  var ly=mob?562:558,lx=mob?180:70;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'LES OPEN, REFLUX':'LES OPEN, ACID REFLUX')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'TWO PADS ON A BELT':'BELT WITH TWO ELECTRODE PADS')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'BURSTS WITH EACH BREATH':'ASYMMETRICAL BURSTS, SYNCED TO BREATHING')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'LES CLOSES, LESS REFLUX':'LES FUNCTION IMPROVED, LESS REFLUX')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),belt:dl(".sB"),pads:$$("#belt rect",svg),jet:$$("#scJet .jet",svg),jg:$("#scJet",svg),
    dL:$("#diaL",svg),dR:$("#diaR",svg),lL:$("#lsL",svg),lR:$("#lsR",svg),pu:$$("#pz .pu",svg),
    lCh:$("#lCh",svg),lBt:$("#lBt",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* breathing (step 3): three breaths across the step; the diaphragm domes descend on each inhalation */
    var bs=seg(p,.5,.76),act=sm(seg(p,.48,.53))*(1-sm(seg(p,.86,.92))),ph=Math.sin(bs*Math.PI*6-Math.PI/2)*.5+.5,dy=10*ph*act;
    E.dL.setAttribute("d","M214 300C250 "+(236+dy).toFixed(1)+" 330 "+(236+dy).toFixed(1)+" 378 268");
    E.dR.setAttribute("d","M422 268C470 "+(236+dy).toFixed(1)+" 530 "+(236+dy).toFixed(1)+" 566 300");
    op(E.dL,b);op(E.dR,b);
    /* the LES: two lips held apart (reflux), drawn together in step 4 */
    var cl=sm(seg(p,.8,.9)),L=5+12*cl;
    E.lL.setAttribute("d","M382 284L"+(382+L).toFixed(1)+" "+(284+3*(1-cl)).toFixed(1));
    E.lR.setAttribute("d","M418 284L"+(418-L).toFixed(1)+" "+(284+3*(1-cl)).toFixed(1));
    op(E.lL,b);op(E.lR,b);
    /* reflux: pale streams rise up the esophagus until the sphincter closes */
    op(E.jg,b*(1-sm(seg(p,.82,.9))));
    E.jet.forEach(function(el,i){el.style.strokeDashoffset=((p*900)+i*7).toFixed(1)});
    /* the belt and its pads draw in (step 2) */
    var bt=sm(seg(p,.27,.4));draw(E.belt,b*bt);E.pads.forEach(function(r){op(r,b*sm(seg(p,.33,.42)))});op(E.lBt,b*sm(seg(p,.36,.44)));
    /* bursts: on every inhalation, asymmetrical (two arcs left, three right) */
    E.pu.forEach(function(el){var j=+el.getAttribute("data-j"),s=+el.getAttribute("data-s");
      var q=Math.max(0,Math.min(1,(ph-.35-j*.12)/.3));op(el,b*act*q*(s?1:.75))});
    op(E.lCh,b);
    op(E.l1,b*(1-seg(p,.2,.25)));op(E.l2,b*seg(p,.3,.36)*(1-seg(p,.45,.5)));op(E.l3,b*seg(p,.53,.59)*(1-seg(p,.72,.77)));op(E.l4,b*seg(p,.86,.92));
  };
}
