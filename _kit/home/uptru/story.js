/* The story scene (DB/BL): UPTru's own method (uptru.com; ClinicalTrials.gov NCT07356349: a drink with or without 100 mg
   fluorescein sodium, a mid-stream urine sample fifteen minutes later, fluorescence examined with a fluorometer), drawn as
   ONE fine-line bench scene that fills the frame: the drink on the left, two capped specimen vials on the bench, and a
   fluorometer's light source on the right. Frame 0 is complete.
   Step 1 (swap): the two vials look the same; a swap arrow arcs between them.
   Step 2 (mark): the marker drop falls into the drink, which turns gold; a path carries it to the patient's own vial.
   Step 3 (confirm): a blue beam crosses both vials; the patient's sample glows, the substitute stays dark.
   Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
var VA=430,VB=590,VT=236,VBOT=462,VW=34;
function vialG(x,id){
  var k='';for(var i=0;i<6;i++)k+='M'+(x-VW+6+i*12)+' '+(VT-30)+'v26';
  return '<g id="'+id+'"><rect class="vg" x="'+(x-VW-30)+'" y="'+(VT+40)+'" width="'+(2*VW+60)+'" height="'+(VBOT-VT-20)+'" fill="url(#gGlow)"/>'+
   '<path class="wl sD" d="M'+(x-VW)+' '+VT+'V'+(VBOT-6)+'Q'+(x-VW)+' '+VBOT+' '+(x-VW+6)+' '+VBOT+'H'+(x+VW-6)+'Q'+(x+VW)+' '+VBOT+' '+(x+VW)+' '+(VBOT-6)+'V'+VT+'"/>'+
   '<rect class="liq" x="'+(x-VW+4)+'" y="338" width="'+(2*VW-8)+'" height="'+(VBOT-342)+'"/>'+
   '<path class="wo sD" d="M'+(x-VW+4)+' 338H'+(x+VW-4)+'"/>'+
   '<path class="cap sD" d="M'+(x-VW-5)+' '+VT+'V'+(VT-34)+'H'+(x+VW+5)+'V'+VT+'Z"/>'+
   '<path class="wo" d="'+k+'"/></g>'}
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'80 14 600 548':'64 14 700 548')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="gGlow"><stop offset="0" stop-color="#e3c94a" stop-opacity=".5"/><stop offset=".6" stop-color="#cfb017" stop-opacity=".14"/><stop offset="1" stop-color="#cfb017" stop-opacity="0"/></radialGradient></defs>';
  /* the bench */
  g+='<path class="wl sD" d="M92 '+VBOT+'H736"/><path class="wo sD" d="M110 '+(VBOT+12)+'H718"/>';
  /* the drink */
  g+='<g id="scCup"><path class="wl sD" d="M128 300L142 '+VBOT+'H204L218 300"/><path class="cupl" d="M133.5 352L141.8 '+(VBOT-2)+'H204.2L212.5 352Z"/><path class="wo sD" d="M133.5 352H212.5"/></g>';
  g+='<circle id="scDrop" cx="173" cy="250" r="6"/>';
  /* the marker's path to the patient's own vial */
  g+='<path id="scPath" class="mk" d="M196 290C232 160 360 142 '+(VA-6)+' '+(VT-44)+'"/>';
  g+='<g id="scDots"><circle class="dt" r="3.6"/><circle class="dt" r="3.6"/><circle class="dt" r="3.6"/></g>';
  /* the swap arrow */
  g+='<path id="scSwap" class="sw" d="M'+(VA+6)+' '+(VT-52)+'C'+(VA+40)+' 120 '+(VB-40)+' 120 '+(VB-6)+' '+(VT-52)+'"/>';
  g+='<path id="scSwapH" class="sw" d="M'+(VB-18)+' '+(VT-60)+'L'+(VB-6)+' '+(VT-52)+'L'+(VB-4)+' '+(VT-67)+'"/>';
  /* the two vials */
  g+=vialG(VA,"scA")+vialG(VB,"scB");
  /* the fluorometer's light source and its blue beam */
  g+='<g id="scSrc"><path class="wl sD" d="M676 368H730V436H676Z"/><circle class="wo" cx="703" cy="402" r="12"/></g>';
  g+='<path id="scBeam" class="beam" d="M676 402H'+(VA-VW-18)+'"/>';
  if(!mob){
    g+='<g id="lCup"><text class="t q" x="150" y="210" text-anchor="middle">100 MG</text><text class="t" x="150" y="228" text-anchor="middle">FLUORESCEIN</text></g>';
    g+='<g id="lMin"><text class="t" x="292" y="150" text-anchor="middle">15 MIN</text></g>';
    g+='<g id="lA1"><text class="t" x="'+VA+'" y="500" text-anchor="middle">PATIENT’S</text><text class="t q" x="'+VA+'" y="518" text-anchor="middle">SAMPLE</text></g>';
    g+='<g id="lB1"><text class="t" x="'+VB+'" y="500" text-anchor="middle">SUBSTITUTE</text><text class="t q" x="'+VB+'" y="518" text-anchor="middle">SPECIMEN</text></g>';
    g+='<g id="lA2"><text class="t o" x="'+VA+'" y="500" text-anchor="middle">FLUORESCES</text><text class="t q" x="'+VA+'" y="518" text-anchor="middle">AUTHENTIC</text></g>';
    g+='<g id="lB2"><text class="t" x="'+VB+'" y="500" text-anchor="middle">STAYS DARK</text><text class="t q" x="'+VB+'" y="518" text-anchor="middle">IDENTIFIED</text></g>';
    g+='<g id="lSrc"><text class="t" x="703" y="350" text-anchor="middle">BLUE LIGHT</text></g>';
  }else{g+='<g id="lCup"></g><g id="lMin"></g><g id="lA1"></g><g id="lB1"></g><g id="lA2"></g><g id="lB2"></g><g id="lSrc"></g>'}
  var ly=SCH-6,lx=mob?96:80;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'A SAMPLE CAN BE SWAPPED':'WHICH SAMPLE IS THE PATIENT’S OWN?')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THE MARKER LABELS IT':'THE DRINK’S MARKER LABELS THEIR URINE')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'ITS GLOW CONFIRMS IT':'FLUORESCENCE CONFIRMS THE SAMPLE')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p.style.strokeDashoffset=String(L);return [p,L]})};
  var path=$("#scPath",svg),PL=path.getTotalLength();
  var E={base:dl(".sD"),path:dl("#scPath"),swap:dl("#scSwap"),swapH:$("#scSwapH",svg),beam:dl("#scBeam"),dots:$$("#scDots .dt",svg),drop:$("#scDrop",svg),
    cupl:$("#scCup .cupl",svg),liqA:$("#scA .liq",svg),glA:$("#scA .vg",svg),liqB:$("#scB .liq",svg),
    lCup:$("#lCup",svg),lMin:$("#lMin",svg),lA1:$("#lA1",svg),lB1:$("#lB1",svg),lA2:$("#lA2",svg),lB2:$("#lB2",svg),lSrc:$("#lSrc",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.32),s2=seg(p,.36,.64),s3=seg(p,.68,.94);
    /* 1: the swap arrow draws to its head, then clears */
    var sw=b*sm(s1/.7)*(1-sm(seg(p,.32,.4)));draw(E.swap,sw);op(E.swapH,sw>.97?1:0);
    /* 2: the drop falls into the drink, the drink turns gold, the marker travels to the patient's vial */
    var df=sm(s2/.3);E.drop.setAttribute("cy",(250+df*100).toFixed(1));op(E.drop,b*seg(p,.34,.38)*(1-sm((s2-.26)/.06)));
    op(E.cupl,b*sm((s2-.25)/.2)*(1-.5*sm(s3)));
    draw(E.path,b*sm((s2-.3)/.4)*(1-sm(seg(p,.7,.8))));
    E.dots.forEach(function(d,i){var f=((s2-.4)/.55)*1.6-i*.22;f=Math.max(0,Math.min(1,f));var pt=path.getPointAtLength(PL*f);
      d.setAttribute("cx",pt.x.toFixed(1));d.setAttribute("cy",pt.y.toFixed(1));op(d,b*(f>0&&f<1?1:0)*(1-seg(p,.68,.72)))});
    /* both vials hold a pale sample from the start; the patient's is now labelled */
    op(E.liqA,b*(.35+.15*sm((s2-.7)/.3)+.5*sm(s3/.6)));op(E.liqB,b*.35);
    /* 3: the blue beam crosses both vials; only the patient's glows */
    draw(E.beam,b*sm(s3/.4));
    op(E.glA,b*sm((s3-.25)/.5));
    E.liqA.classList.toggle("on",s3>.3);
    op(E.lCup,b*seg(p,.36,.42)*(1-seg(p,.6,.66)));
    op(E.lMin,b*seg(p,.48,.54)*(1-seg(p,.64,.68)));
    var lab1=b*(1-seg(p,.66,.72)),lab2=b*seg(p,.76,.82);
    op(E.lA1,lab1);op(E.lB1,lab1);op(E.lA2,lab2);op(E.lB2,lab2);op(E.lSrc,b*seg(p,.7,.76));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
