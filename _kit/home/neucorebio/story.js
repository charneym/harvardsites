/* The story scene (DB): Neucore Bio's own FixE mechanism, drawn as ONE continuous engraved scene and scrubbed by the
   pinned story. Left: a human dermal fibroblast, hatched like an engraving, transiently reprogrammed toward a
   Schwann-cell identity. Centre: one of the vesicles it releases, drawn large — a lipid bilayer studded with the
   homing proteins it inherits, loaded after harvest with plasmid DNA and messenger RNA. Right and below: a peripheral
   nerve axon and the diseased Schwann cell that takes the vesicles up, its myelin redrawn as the cargo is translated.
   Sources: neucorebio.com, the NSF STTR Phase I project outcomes report for award 2507437 (Neucore Bio, 12 October
   2026) and NIH STTR 1R41TR005758-01A1. Nothing numeric is implied: every mark is a labelled stage, not a value. */
var SCW=760,SCH=548;
function bez(t,P){var u=1-t,a=u*u*u,b=3*u*u*t,c=3*u*t*t,d=t*t*t;
  return [a*P[0][0]+b*P[1][0]+c*P[2][0]+d*P[3][0],a*P[0][1]+b*P[1][1]+c*P[2][1]+d*P[3][1]]}
var TRK=[[228,318],[310,386],[396,424],[498,432]];
var VES=[],VN=9,vi;
for(vi=0;vi<VN;vi++)VES.push(bez(.05+vi*(.95/(VN-1)),TRK));
var BVX=508,BVY=178,BVR=88;
var CELLB={cx:158,cy:252,rx:64,ry:98,rot:-9};
var PROC=["M138 158C124 122 110 98 86 72","M150 150C142 116 134 92 120 62","M180 344C196 380 206 404 226 430","M168 348C166 384 162 408 154 436"];
function memScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i,a;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="cellclip"><ellipse cx="'+CELLB.cx+'" cy="'+CELLB.cy+'" rx="'+CELLB.rx+'" ry="'+CELLB.ry+'" transform="rotate('+CELLB.rot+' '+CELLB.cx+' '+CELLB.cy+')"/></clipPath>'+
     '<clipPath id="vesclip"><circle cx="'+BVX+'" cy="'+BVY+'" r="'+(BVR-4)+'"/></clipPath></defs>';
  /* frame and the fixed captions, each in its own corner so they can never collide (CY) */
  g+='<g id="scBase">';
  g+='<path class="frm sD" d="M20 44H740"/><path class="frm sD" d="M20 500H740"/>';
  g+='<text class="t" x="20" y="34">HUMAN DERMAL FIBROBLAST</text>';
  g+='<text class="t tr" x="740" y="34">ENGINEERED VESICLE</text>';
  g+='</g>';
  /* the fibroblast: a broad bipolar cell, engraved with hatching, with its nucleus */
  g+='<g id="scCell">';
  PROC.forEach(function(d,k){g+='<path class="proc" data-i="'+k+'" d="'+d+'"/>'});
  g+='<ellipse class="cell" cx="'+CELLB.cx+'" cy="'+CELLB.cy+'" rx="'+CELLB.rx+'" ry="'+CELLB.ry+'" transform="rotate('+CELLB.rot+' '+CELLB.cx+' '+CELLB.cy+')"/>';
  g+='<g clip-path="url(#cellclip)">';
  for(i=0;i<40;i++){var yy=140+i*9;g+='<path class="hat" d="M78 '+yy+'L246 '+(yy-28)+'"/>'}
  g+='</g>';
  g+='<ellipse class="nuc" cx="158" cy="240" rx="34" ry="43" transform="rotate(-10 158 240)"/>';
  g+='<circle class="nd" cx="158" cy="240" r="8"/>';
  g+='</g>';
  /* reprogramming: short pulses running into the cell from the left */
  g+='<g id="scPul">';
  for(i=0;i<7;i++){var py=132+i*40;g+='<path class="pul" data-i="'+i+'" d="M'+(26+(i%3)*9)+' '+py+'h36"/><circle class="puld" data-i="'+i+'" cx="'+(68+(i%3)*9)+'" cy="'+py+'" r="3.6"/>'}
  g+='</g>';
  /* vesicles budding from the membrane and the track they take to the nerve */
  g+='<g id="scTrk"><path class="trk" d="M'+TRK[0][0]+' '+TRK[0][1]+'C'+TRK[1][0]+' '+TRK[1][1]+' '+TRK[2][0]+' '+TRK[2][1]+' '+TRK[3][0]+' '+TRK[3][1]+'"/></g>';
  g+='<g id="scVes">';
  VES.forEach(function(v,k){g+='<circle class="ves" data-i="'+k+'" cx="'+f(v[0])+'" cy="'+f(v[1])+'" r="'+(15-k*.6).toFixed(1)+'"/>'});
  g+='</g>';
  /* one vesicle drawn large: the bilayer, the homing proteins it inherits, and the cargo loaded after harvest */
  g+='<g id="scBig">';
  g+='<path class="zm" d="M'+f(VES[2][0]+10)+' '+f(VES[2][1]-12)+'L'+f(BVX-BVR*.62)+' '+f(BVY+BVR*.78)+'"/>';
  g+='<path class="zm" d="M'+f(VES[2][0]+16)+' '+f(VES[2][1]-2)+'L'+f(BVX-BVR*.2)+' '+f(BVY+BVR*.98)+'"/>';
  g+='<circle class="vesm" cx="'+BVX+'" cy="'+BVY+'" r="'+BVR+'"/>';
  g+='<circle class="vesi" cx="'+BVX+'" cy="'+BVY+'" r="'+(BVR-11)+'"/>';
  for(i=0;i<20;i++){a=i/20*Math.PI*2;
    g+='<circle class="mp" data-i="'+i+'" cx="'+f(BVX+Math.cos(a)*(BVR+7))+'" cy="'+f(BVY+Math.sin(a)*(BVR+7))+'" r="4.6"/>'+
      '<path class="mps" data-i="'+i+'" d="M'+f(BVX+Math.cos(a)*(BVR-6))+' '+f(BVY+Math.sin(a)*(BVR-6))+'L'+f(BVX+Math.cos(a)*(BVR+4))+' '+f(BVY+Math.sin(a)*(BVR+4))+'"/>'}
  g+='<g clip-path="url(#vesclip)">';
  g+='<path class="cgo" data-i="0" d="M'+(BVX-62)+' '+(BVY-38)+'q16-18 32 0t32 0 32 0"/>';
  g+='<path class="cgo" data-i="1" d="M'+(BVX-68)+' '+(BVY-4)+'q17 19 34 0t34 0 32 0"/>';
  g+='<path class="cgo" data-i="2" d="M'+(BVX-56)+' '+(BVY+32)+'q15-16 30 0t30 0 28 0"/>';
  g+='</g>';
  g+='</g>';
  /* the nerve: an axon, its Schwann cell, and the myelin the delivered cargo restores */
  g+='<g id="scNrv">';
  g+='<text class="t vl tr" x="740" y="372">PERIPHERAL NERVE · SCHWANN CELL</text>';
  g+='<path class="axon" d="M196 470H724"/>';
  for(i=0;i<5;i++){var mx=252+i*100;
    g+='<ellipse class="myl" data-i="'+i+'" cx="'+mx+'" cy="470" rx="46" ry="26"/>'+
      '<ellipse class="mylr" data-i="'+i+'" cx="'+mx+'" cy="470" rx="46" ry="26"/>'}
  g+='<ellipse class="snc" cx="552" cy="424" rx="42" ry="25" transform="rotate(-8 552 424)"/>';
  g+='<circle class="nd" cx="552" cy="424" r="7"/>';
  g+='</g>';
  g+='<g id="lb1"><text class="a" x="20" y="524">TRANSIENT REPROGRAMMING TOWARD SCHWANN-CELL IDENTITY</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="524">PLASMID DNA AND mRNA PACKAGED INTO PURIFIED VESICLES</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="524">ENDOSOMAL ESCAPE · FUNCTIONAL PROTEIN TRANSLATED</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),
    cell:dl(".cell"),proc:dl(".proc"),nuc:dl(".nuc"),trk:dl(".trk"),axon:dl(".axon"),snc:dl(".snc"),
    vesm:dl(".vesm"),vesi:dl(".vesi"),zm:dl(".zm"),
    hat:$$(".hat",svg),pul:$$(".pul",svg),puld:$$(".puld",svg),ves:$$(".ves",svg),
    mp:$$(".mp",svg),mps:$$(".mps",svg),cgo:dl(".cgo"),
    myl:$$(".myl",svg),mylr:dl(".mylr"),nd:$$(".nd",svg),vl:$(".vl",svg),
    gCell:$("#scCell",svg),gBig:$("#scBig",svg),gNrv:$("#scNrv",svg),
    cellEl:$(".cell",svg),vesmEl:$(".vesm",svg),sncEl:$(".snc",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function fo(el,v){if(el)el.style.fillOpacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    draw(E.base,b);
    /* 1 — the cell is engraved, its nucleus set, and the reprogramming pulses run in */
    var ink=seg(p,0,.10);
    draw(E.cell,ink);draw(E.nuc,seg(p,.03,.13));draw(E.proc,seg(p,.02,.14));
    E.hat.forEach(function(hh,i){op(hh,b*Math.min(1,Math.max(0,ink*1.7-i*.022))*.9)});
    op(E.gCell,b*seg(p,0,.05));fo(E.cellEl,seg(p,.07,.15));
    var pul=seg(p,.04,.18),pulOut=seg(p,.28,.36);
    E.pul.forEach(function(el,i){op(el,b*Math.min(1,Math.max(0,pul*2-i*.12))*(1-pulOut))});
    E.puld.forEach(function(el,i){op(el,b*Math.min(1,Math.max(0,pul*2-i*.12))*(1-pulOut))});
    E.nd.forEach(function(el){op(el,b*seg(p,.06,.14))});
    /* 2 — vesicles bud and travel; one is drawn large, studded and then loaded */
    draw(E.trk,seg(p,.18,.30));
    E.ves.forEach(function(c,i){var gi=Math.min(1,Math.max(0,seg(p,.20,.46)*2.1-i*.13));
      op(c,b*gi*.92);c.setAttribute("r",((15-i*.6)*(.45+.55*gi)).toFixed(2))});
    var bv=seg(p,.22,.36);
    draw(E.vesm,bv);draw(E.vesi,seg(p,.26,.40));op(E.gBig,b*seg(p,.21,.26));
    fo(E.vesmEl,seg(p,.34,.44));
    draw(E.zm,seg(p,.24,.34));E.zm.forEach(function(a){op(a[0],b*seg(p,.24,.3))});
    E.mp.forEach(function(c,i){var gi=Math.min(1,Math.max(0,seg(p,.30,.46)*2-((i*7)%20)*.07));op(c,b*gi)});
    E.mps.forEach(function(c,i){var gi=Math.min(1,Math.max(0,seg(p,.30,.46)*2-((i*7)%20)*.07));op(c,b*gi*.8)});
    draw(E.cgo,seg(p,.38,.54));E.cgo.forEach(function(a){op(a[0],b*seg(p,.38,.46))});
    /* 3 — the nerve is drawn, the vesicles are taken up, and the myelin closes in the accent */
    draw(E.axon,seg(p,.56,.68));draw(E.snc,seg(p,.60,.72));op(E.gNrv,b*seg(p,.55,.60));
    op(E.vl,b*seg(p,.58,.66));fo(E.sncEl,seg(p,.70,.78));
    E.myl.forEach(function(el,i){op(el,b*Math.min(1,Math.max(0,seg(p,.62,.76)*1.9-i*.14))*.5)});
    draw(E.mylr,seg(p,.76,.94));
    E.mylr.forEach(function(a,i){op(a[0],b*Math.min(1,Math.max(0,seg(p,.76,.94)*2-i*.16)))});
    op(E.l1,b*seg(p,.08,.16)*(1-seg(p,.30,.36)));
    op(E.l2,b*seg(p,.36,.44)*(1-seg(p,.60,.66)));
    op(E.l3,b*seg(p,.70,.80));
  };
}
