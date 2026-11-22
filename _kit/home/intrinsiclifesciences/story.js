/* The story scene (BL/BY/DB): how Intrinsic's competitive hepcidin ELISA works (Hepcidin FAQs: "a patented tracer and a
   competitive enzyme-linked immunosorbent assay"; catalogue: biotin conjugate tracers, SA-HRP conjugate, TMB substrate, stop
   solution), drawn as ONE continuous scene: two wells of a microplate in cross-section, their floors coated with hepcidin
   antibodies. Left: a sample LOW in hepcidin; right: a sample HIGH in hepcidin.
   Step 1 (compete): sample hepcidin (cyan) and the biotinylated tracer (gold, with its biotin tag) fall into both wells.
   Step 2 (wash): each antibody holds one molecule; in the left well mostly tracer, in the right mostly sample hepcidin; the
   unbound rest washes away. Step 3 (read): the TMB colour develops in proportion to the bound tracer: deep blue on the left,
   pale on the right, with the inverse standard curve above. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var WL=[{x0:70,x1:350},{x0:410,x1:690}];   /* the two wells */
var WT=150,WB=420,WR_=46;                  /* well top, floor, corner radius */
function wellPath(w){return 'M'+w.x0+' '+WT+'V'+(WB-WR_)+'Q'+w.x0+' '+WB+' '+(w.x0+WR_)+' '+WB+'H'+(w.x1-WR_)+'Q'+w.x1+' '+WB+' '+w.x1+' '+(WB-WR_)+'V'+WT}
/* antibodies along each floor: 7 per well */
var AB=(function(){var a=[];WL.forEach(function(w,wi){for(var i=0;i<7;i++){var x=w.x0+46+i*((w.x1-w.x0-92)/6);a.push({x:x,y:WB-4,w:wi,i:i})}});return a})();
/* which antibody holds tracer (1) or sample hepcidin (0): left well low hepcidin, right well high */
var HOLD=[[1,1,0,1,1,1,1],[0,0,1,0,0,0,0]];
/* falling molecules: the bound ones land on their antibody; extra unbound ones drift in and wash away */
var MOLS=(function(){var s=37,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[];
  AB.forEach(function(b){a.push({tr:HOLD[b.w][b.i],fx:b.x+(R()-.5)*80,fy:40+R()*70,tx:b.x,ty:b.y-30,d:R()*.35,bound:1,w:b.w})});
  WL.forEach(function(w,wi){var n=wi?[2,5]:[5,1];   /* unbound: [tracer, hepcidin] */
    for(var k=0;k<n[0]+n[1];k++){var x=w.x0+30+R()*(w.x1-w.x0-60);a.push({tr:k<n[0]?1:0,fx:x+(R()-.5)*60,fy:40+R()*70,tx:x,ty:WT+70+R()*140,d:R()*.35,bound:0,w:wi})}});
  return a})();
function abPath(b){var x=b.x,y=b.y;return 'M'+x+' '+y+'V'+(y-14)+'M'+x+' '+(y-14)+'L'+(x-9)+' '+(y-26)+'M'+x+' '+(y-14)+'L'+(x+9)+' '+(y-26)}
function elisaScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs>'+WL.map(function(w,wi){return '<clipPath id="wc'+wi+'"><path d="'+wellPath(w)+'Z"/></clipPath>'}).join("")+'</defs>';
  /* ---- the colour that develops (under the lines) ---- */
  g+='<g id="scLq">';WL.forEach(function(w,wi){g+='<rect class="lq" clip-path="url(#wc'+wi+')" x="'+w.x0+'" y="'+(WT+40)+'" width="'+(w.x1-w.x0)+'" height="'+(WB-WT-38)+'"/><path class="lqs" d="M'+(w.x0+2)+' '+(WT+40)+'H'+(w.x1-2)+'"/>'});g+='</g>';
  g+='<g id="scCol">';
  WL.forEach(function(w,wi){g+='<rect class="tm'+wi+'" clip-path="url(#wc'+wi+')" x="'+w.x0+'" y="'+(WT+40)+'" width="'+(w.x1-w.x0)+'" height="'+(WB-WT-38)+'"/>'});
  g+='</g>';
  /* ---- base: the wells, the plate deck, captions ---- */
  g+='<g id="scBase">';
  g+='<path class="pl sD" d="M20 '+WT+'H'+WL[0].x0+'M'+WL[0].x1+' '+WT+'H'+WL[1].x0+'M'+WL[1].x1+' '+WT+'H740"/>';
  WL.forEach(function(w){g+='<path class="wl sD" d="'+wellPath(w)+'"/>'});
  WL.forEach(function(w){g+='<path class="wl2 sD" d="'+wellPath({x0:w.x0-9,x1:w.x1+9}).replace('V'+WT,'V'+(WT+0))+'"/>'});
  g+='<text class="t" x="'+(WL[0].x0+(WL[0].x1-WL[0].x0)/2)+'" y="'+(WB+40)+'" text-anchor="middle">'+(o.mob?'LOW HEPCIDIN':'SAMPLE LOW IN HEPCIDIN')+'</text>';
  g+='<text class="t" x="'+(WL[1].x0+(WL[1].x1-WL[1].x0)/2)+'" y="'+(WB+40)+'" text-anchor="middle">'+(o.mob?'HIGH HEPCIDIN':'SAMPLE HIGH IN HEPCIDIN')+'</text>';
  g+='</g>';
  /* ---- the antibodies on each floor ---- */
  g+='<g id="scAb">';AB.forEach(function(b){g+='<path class="ab sD" d="'+abPath(b)+'"/>'});g+='</g>';
  /* ---- molecules: hepcidin (cyan disc) and tracer (gold disc with a biotin tag) ---- */
  g+='<g id="scMol">';
  MOLS.forEach(function(m,k){g+='<g class="mo" data-k="'+k+'"><circle class="'+(m.tr?'trc':'hep')+'" r="7.5" cx="0" cy="0"/>'+(m.tr?'<rect class="bt" x="-3.5" y="-17" width="7" height="7"/><path class="bl" d="M0 -10V-7.5"/>':'')+'</g>'});
  g+='</g>';
  /* ---- legend (always present once drawn) ---- */
  g+='<g id="scLeg"><circle class="hep" cx="34" cy="34" r="7.5"/><text class="t" x="50" y="38">HEPCIDIN</text>'+
    '<circle class="trc" cx="'+(o.mob?220:200)+'" cy="34" r="7.5"/><rect class="bt" x="'+((o.mob?220:200)-3.5)+'" y="17" width="7" height="7"/><text class="t" x="'+((o.mob?220:200)+16)+'" y="38">'+(o.mob?'TRACER':'BIOTINYLATED TRACER')+'</text>'+
    '<path class="ab" d="M'+(o.mob?440:470)+' 44V30M'+(o.mob?440:470)+' 30L'+((o.mob?440:470)-9)+' 18M'+(o.mob?440:470)+' 30L'+((o.mob?440:470)+9)+' 18"/><text class="t" x="'+((o.mob?440:470)+18)+'" y="38">ANTIBODY</text></g>';
  /* ---- the inverse standard curve, read off the colour ---- */
  var cx0=430,cx1=730,cy0=70,cy1=124;
  g+='<g id="scCrv"><path class="ax" d="M'+cx0+' '+cy0+'V'+cy1+'H'+cx1+'"/><path class="cv" d="M'+cx0+' '+(cy0+4)+'C'+(cx0+90)+' '+(cy0+4)+' '+(cx0+120)+' '+(cy1-4)+' '+cx1+' '+(cy1-4)+'"/>'+
    '<circle class="pt0" cx="'+(cx0+34)+'" cy="'+(cy0+6)+'" r="5"/><circle class="pt1" cx="'+(cx0+232)+'" cy="'+(cy1-7)+'" r="5"/>'+
    '<text class="t" x="'+cx1+'" y="'+(cy1+20)+'" text-anchor="end">HEPCIDIN →</text><text class="t" x="'+(cx0-10)+'" y="'+(cy0+8)+'" text-anchor="end">'+(o.mob?'OD':'COLOUR')+'</text></g>';
  /* ---- step labels, along the bottom ---- */
  var ly=SCH-8;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">'+(o.mob?'SAMPLE + TRACER COMPETE':'SAMPLE HEPCIDIN AND TRACER COMPETE FOR THE ANTIBODIES')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">'+(o.mob?'WASHED · BOUND STAYS':'WASHED · ONLY THE BOUND MOLECULES STAY')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">'+(o.mob?'TMB · COLOUR ∝ 1 / HEPCIDIN':'TMB COLOUR · INVERSE TO THE HEPCIDIN IN THE SAMPLE')+'</text></g>';
  return g+'</svg>';
}
function scene(){return elisaScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={lq:$("#scLq",svg),base:dl("#scBase .sD"),ab:dl("#scAb .sD"),fade:$$("#scBase text",svg),leg:$("#scLeg",svg),
    mo:$$(".mo",svg).map(function(el){return {el:el,m:MOLS[+el.getAttribute("data-k")]}}),
    c0:$("#scCol .tm0",svg),c1:$("#scCol .tm1",svg),crv:$("#scCrv",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);draw(E.ab,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.leg,b);op(E.lq,b)}
    var fall=seg(p,.04,.34),wash=seg(p,.4,.6),col=seg(p,.66,.86),crv=seg(p,.74,.9);
    E.mo.forEach(function(M){var m=M.m,d=Math.min(1,Math.max(0,(fall-m.d)/(1-m.d))),q=d*d*(3-2*d);
      var x=m.fx+(m.tx-m.fx)*q,y=m.fy+(m.ty-m.fy)*q,a=b*Math.min(1,fall*4);
      if(!m.bound){y-=wash*60;a*=1-wash}
      else a*=1-.35*col;
      M.el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");op(M.el,a)});
    op(E.c0,b*col*.9);op(E.c1,b*col*.9);
    op(E.crv,b*crv);
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.32,.38)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
