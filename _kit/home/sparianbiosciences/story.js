/* The story scene (DB/BY): Sparian's own mechanism, as the company states it (sparianbiosciences.com, Pipeline and the
   12 Nov 2024 Phase 1 release): "The arylepoxamide receptors (AEAr) are a novel class of receptors widely distributed
   throughout the brain and spinal cord and are believed to modulate pain signaling and pain perception"; arylepoxamides
   "bind and activate" the AEAr, with "potent analgesia ... lacking respiratory depression, physical dependence, and reward
   behavior" in preclinical studies, and in the SBS-1000 Phase 1 "respiratory parameters ... were maintained within
   normal range in all subjects at all doses studied".
   ONE continuous fine-line drawing that fills the frame: the same brain as the hero (fsaverage left hemisphere, lateral
   view, traced by linebrain.py into BRAIN), with the cerebellum, brainstem and spinal cord below. Frame 0 is already
   complete. Step 1 (signal): a pain signal rises up the spinal cord to the cortex. Step 2 (activate): AEAr sites through
   the cord and brain light in Sparian blue and the ascending signal fades. Step 3 (spare): the brainstem's breathing centre
   holds steady. Schematic: the AEAr sites are drawn to show "brain and spinal cord", not mapped anatomy. */
var SCW=760,SCH=560;
/* cerebellum, brainstem and spinal cord (viewBox units; the brain spans x 200-670, y 22-366) */
var CB="M244 291C236 318 252 350 292 362C330 372 372 364 394 344C404 334 404 322 398 314";
var CBF=["M256 312C290 328 340 334 384 326","M266 334C300 346 344 348 378 340","M252 298C286 310 332 316 392 312"];
var BSL="M398 314C394 346 392 372 390 400C388 448 382 494 372 530",BSR="M432 336C428 360 424 380 420 402C416 452 408 496 396 532";
/* the ascending pain signal: up the middle of the cord and brainstem to the sensory cortex */
var SIG="M384 530C394 494 401 452 404 402C406 372 410 344 414 318C420 272 428 218 440 166C446 140 452 118 458 98";
/* AEAr sites: along the cord and through the brain */
var AE=[[384,512],[391,480],[397,446],[401,416],[404,384],[410,352],[300,120],[352,92],[506,90],[574,140],[612,214],[528,212],[452,250],[338,198],[268,214],[560,288]];
var BR=[418,330];
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'150 14 560 576':'64 14 700 532')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="gSig"><stop offset="0" stop-color="#cfe2fb" stop-opacity=".9"/><stop offset="1" stop-color="#cfe2fb" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="gAe"><stop offset="0" stop-color="#5b9ff6" stop-opacity=".7"/><stop offset="1" stop-color="#5b9ff6" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="gBr"><stop offset="0" stop-color="#b9d6fb" stop-opacity=".34"/><stop offset="1" stop-color="#b9d6fb" stop-opacity="0"/></radialGradient></defs>';
  g+='<circle class="halo" id="hBr" cx="'+BR[0]+'" cy="'+BR[1]+'" r="'+(mob?54:64)+'" fill="url(#gBr)"/>';
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+BRAIN.outline+'"/>';
  BRAIN.sulci.forEach(function(d){g+='<path class="wo sD" d="'+d+'"/>'});
  g+='<path class="wl sD" d="'+CB+'"/>';CBF.forEach(function(d){g+='<path class="wo sD" d="'+d+'"/>'});
  g+='<path class="wl sD" d="'+BSL+'"/><path class="wl sD" d="'+BSR+'"/>';
  /* spinal nerve roots leaving the cord */
  [[389,430,-1],[386,470,-1],[381,508,-1],[418,436,1],[414,476,1],[406,512,1]].forEach(function(r){
    g+='<path class="wmd sD" d="M'+r[0]+' '+r[1]+'c'+(r[2]*14)+' 4 '+(r[2]*26)+' 10 '+(r[2]*34)+' 20"/>'});
  g+='</g>';
  g+='<path class="sig" id="sig" d="'+SIG+'"/>';
  g+='<circle class="pulse" id="pul" r="'+(mob?11:9)+'" cx="384" cy="530" fill="url(#gSig)"/>';
  g+='<g id="scAe">';AE.forEach(function(a){g+='<g class="ae"><circle cx="'+a[0]+'" cy="'+a[1]+'" r="'+(mob?20:16)+'" fill="url(#gAe)"/><circle class="aed" cx="'+a[0]+'" cy="'+a[1]+'" r="'+(mob?4.6:3.6)+'"/></g>'});g+='</g>';
  g+='<circle class="brr" id="brr" cx="'+BR[0]+'" cy="'+BR[1]+'" r="'+(mob?30:26)+'"/>';
  /* labels: every leader stops 8px+ short of its text and of the drawing (DR) */
  if(!mob){
    g+='<g id="lCord"><path class="ld" d="M430 470L486 470"/><text class="t" x="494" y="474">SPINAL CORD</text></g>';
    g+='<g id="lCtx"><path class="ld" d="M466 92L520 40"/><text class="t" x="528" y="38">SENSORY CORTEX</text></g>';
    g+='<g id="lAe"><path class="ld" d="M262 216L196 262"/><text class="t" x="188" y="270" text-anchor="end">AEAr SITES</text></g>';
    g+='<g id="lBr"><path class="ld" d="M448 340L486 384"/><text class="t" x="494" y="392">BRAINSTEM</text><text class="t q" x="494" y="408">BREATHING CENTRE</text></g>';
  }else{
    g+='<g id="lCord"><path class="ld" d="M430 470L470 470"/><text class="t" x="478" y="477">SPINAL CORD</text></g>';
    g+='<g id="lCtx"></g><g id="lAe"></g>';
    g+='<g id="lBr"><path class="ld" d="M452 344L478 384"/><text class="t" x="482" y="406">BRAINSTEM</text></g>';
  }
  var ly=mob?576:SCH-14,lx=mob?160:76;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PAIN RISES TO THE BRAIN':'PAIN RISES TO THE BRAIN')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'AEAr ACTIVATED':'AEAr ACTIVATED IN BRAIN AND CORD')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'BREATHING MAINTAINED':'BREATHING MAINTAINED')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var sig=$("#sig",svg),SL=sig.getTotalLength();sig.style.strokeDasharray=SL+" "+SL;
  var E={base:dl("#scBase .sD"),ae:$$("#scAe .ae",svg),pul:$("#pul",svg),hBr:$("#hBr",svg),brr:$("#brr",svg),
    lCord:$("#lCord",svg),lCtx:$("#lCtx",svg),lAe:$("#lAe",svg),lBr:$("#lBr",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.3),s2=seg(p,.36,.6),s3=seg(p,.68,.9);
    /* 1. the signal draws up the cord to the cortex (and reaches its end point: dash offset 0 at s1 = 1) */
    sig.style.strokeDashoffset=(SL*(1-s1)).toFixed(1);
    /* 2. once the AEAr sites light, the signal dims to a trace */
    op(sig,b*(s1>0?1:0)*(1-.78*s2));
    var pt=sig.getPointAtLength(SL*s1);
    /* the pulse rides the head of the signal, then fades at the cortex */
    E.pul.setAttribute("cx",pt.x.toFixed(1));E.pul.setAttribute("cy",pt.y.toFixed(1));
    op(E.pul,b*(s1>0?1:0)*(1-s2));
    E.ae.forEach(function(el,i){op(el,b*seg(p,.38+i*.012,.5+i*.012))});
    /* 3. the brainstem holds steady: a calm ring and glow */
    op(E.hBr,b*s3);op(E.brr,b*s3);
    op(E.lCord,b*(1-seg(p,.32,.4)));op(E.lCtx,b*seg(p,.18,.26)*(1-seg(p,.34,.4)));
    op(E.lAe,b*seg(p,.44,.52)*(1-seg(p,.64,.7)));op(E.lBr,b*seg(p,.72,.8));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
