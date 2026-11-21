/* The story scene (BL/BY/DB/CX): Bedrock's own ex vivo approach for BDRK-401, drawn as ONE continuous engraved scene
   that stays on screen for all three steps. Centre: a donor corneal graft seen face on, with its lamellae and limbal
   ring, resting in a dish. Step 1 the graft and dish engrave in. Step 2 twelve AAV capsids (the icosahedral shell drawn
   as a hexagon with its facet lines) travel in along their own radii and are taken up; the graft's tone lifts as it
   begins to express the transgene. Step 3 the dish falls away, the secreted scIM spreads as an expanding halo, and the
   new vessels that would grow into a high-risk graft advance from the edge and stop at it. Sources: NIH RePORTER
   R42EY031625 (Phase I milestones, lead candidate BDRK-401, complete protection from acute rejection in a rabbit
   model) and Molecular Therapy, 6 November 2024 (PMID 39245940). */
var SCW=760,SCH=520,CX=380,CY=248,GR=122;
var CAPS=(function(){var a=[],i,n=12;for(i=0;i<n;i++){var th=(-Math.PI/2)+i*(Math.PI*2/n)+((i%3)-1)*.06;a.push({th:th,r0:246+((i*37)%5)*7,s:9.5+((i*53)%4)*.6,d:(i%4)*.045})}return a})();
var VES=(function(){var a=[],i,n=16;for(i=0;i<n;i++){var th=(-Math.PI/2)+(i+.5)*(Math.PI*2/n)+((i%5)-2)*.035;a.push({th:th,r0:215+((i*29)%6)*5,w:((i%3)===0?1.4:1),d:(i%6)*.05,k:((i*17)%7)-2})}return a})();
function hexd(s){var g='',i;for(i=0;i<6;i++){var a=-Math.PI/2+i*Math.PI/3;g+=(i?'L':'M')+(s*Math.cos(a)).toFixed(1)+' '+(s*Math.sin(a)).toFixed(1)}return g+'Z'}
function corneaScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="gclip"><circle cx="'+CX+'" cy="'+CY+'" r="'+(GR-2)+'"/></clipPath></defs>';
  /* ---- base: corner ticks and the two standing captions ---- */
  g+='<g id="scBase">';
  g+='<path class="frm sD" d="M18 24H120M740 24H638M18 496H120M740 496H638"/>';
  g+='<text class="t" x="18" y="14">EX VIVO GENE TRANSFER</text>';
  g+='<text class="t tr" x="742" y="14" text-anchor="end">BDRK-401</text>';
  g+='</g>';
  /* ---- the dish the graft sits in ---- */
  g+='<g id="scDish"><circle class="dsh sD" cx="'+CX+'" cy="'+CY+'" r="186"/><circle class="dsh2 sD" cx="'+CX+'" cy="'+CY+'" r="174"/></g>';
  /* ---- the graft, face on: limbal ring, a crown of radial ticks, concentric stromal rings, optical zone ---- */
  g+='<g id="scGraft"><circle class="gfill" cx="'+CX+'" cy="'+CY+'" r="'+GR+'"/>';
  g+='<circle class="gr sD" cx="'+CX+'" cy="'+CY+'" r="'+GR+'"/><circle class="gr2 sD" cx="'+CX+'" cy="'+CY+'" r="'+(GR-9)+'"/>';
  var tk='';
  for(i=0;i<60;i++){var a=i*Math.PI/30,r1=GR-11,r2=GR-(i%2?19:23);
    tk+='M'+f(CX+r1*Math.cos(a))+' '+f(CY+r1*Math.sin(a))+'L'+f(CX+r2*Math.cos(a))+' '+f(CY+r2*Math.sin(a));}
  g+='<path class="lm sD" d="'+tk+'"/>';
  g+='<circle class="lm sD" cx="'+CX+'" cy="'+CY+'" r="'+(GR-32)+'"/><circle class="lm sD" cx="'+CX+'" cy="'+CY+'" r="'+(GR-54)+'"/>';
  g+='<circle class="oz sD" cx="'+CX+'" cy="'+CY+'" r="'+(GR-78)+'"/></g>';
  /* ---- the capsids ---- */
  g+='<g id="scCap">';
  CAPS.forEach(function(c,k){g+='<g class="cp" data-k="'+k+'"><path class="ch" d="'+hexd(c.s)+'"/><path class="cf" d="M0 '+f(-c.s)+'L0 '+f(c.s)+'M'+f(-c.s*.87)+' '+f(-c.s*.5)+'L'+f(c.s*.87)+' '+f(c.s*.5)+'M'+f(-c.s*.87)+' '+f(c.s*.5)+'L'+f(c.s*.87)+' '+f(-c.s*.5)+'"/></g>'});
  g+='</g>';
  /* ---- the secreted halo and the vessels held at it ---- */
  g+='<g id="scHalo"><circle class="hl" cx="'+CX+'" cy="'+CY+'" r="'+GR+'"/><circle class="hl2" cx="'+CX+'" cy="'+CY+'" r="'+GR+'"/></g>';
  g+='<g id="scVes">';
  VES.forEach(function(v,k){g+='<path class="vs" data-k="'+k+'" d="M0 0L0 0"/>'});
  g+='</g>';
  /* ---- step labels, in the clear band at the foot; only one is ever visible (CY) ---- */
  g+='<g id="lb1"><text class="a" x="18" y="514">DONOR CORNEA · IN THE DISH</text></g>';
  g+='<g id="lb2"><text class="a" x="18" y="514">AAV + scIM · ONE DOSE, EX VIVO</text></g>';
  g+='<g id="lb3"><text class="a" x="18" y="514">scIM SECRETED · VESSELS HELD OFF</text></g>';
  return g+'</svg>';
}
function scene(){return corneaScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),
    dish:$$("#scDish circle",svg),graft:dl("#scGraft .sD"),fill:$("#scGraft .gfill",svg),
    cap:$$(".cp",svg).map(function(el){return {el:el,c:CAPS[+el.getAttribute("data-k")]}}),
    hl:$("#scHalo .hl",svg),hl2:$("#scHalo .hl2",svg),
    ves:$$(".vs",svg).map(function(el){return {el:el,v:VES[+el.getAttribute("data-k")]}}),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    draw(E.base,b);
    var grow=seg(p,0,.16),uptake=seg(p,.44,.66),out=seg(p,.66,.8),halo=seg(p,.7,.92),vin=seg(p,.74,.98);
    /* the graft and its dish engrave in */
    draw(E.graft,Math.min(1,Math.max(b*b,grow*1.2)));
    op(E.fill,b*(.5+.5*uptake));
    E.dish.forEach(function(c,i){c.style.opacity=(b*Math.min(1,Math.max(b*1.2-i*.12,grow*1.4-i*.1))*(1-out)).toFixed(3)});
    /* the capsids travel in along their own radii and are taken up */
    var cIn=seg(p,.26,.56);
    E.cap.forEach(function(C,i){
      var t=Math.min(1,Math.max(0,(cIn-C.c.d)*1.45));
      var r=C.c.r0-(C.c.r0-(GR-22))*t;
      C.el.setAttribute("transform","translate("+(CX+r*Math.cos(C.c.th)).toFixed(1)+" "+(CY+r*Math.sin(C.c.th)).toFixed(1)+") rotate("+(C.c.th*180/Math.PI).toFixed(1)+") scale("+(1-.45*Math.max(0,t-.72)/.28).toFixed(3)+")");
      op(C.el,b*Math.min(1,t*3)*(1-Math.max(0,(t-.78)/.22)));
    });
    /* the secreted scIM spreads */
    if(E.hl){E.hl.setAttribute("r",(GR+10+48*halo).toFixed(1));op(E.hl,b*halo*.9)}
    if(E.hl2){E.hl2.setAttribute("r",(GR+6+28*halo).toFixed(1));op(E.hl2,b*halo*.55)}
    /* the vessels advance from the edge and stop at the halo */
    E.ves.forEach(function(V,i){
      var t=Math.min(1,Math.max(0,(vin-V.v.d)*1.5)),stop=GR+14+44*halo+V.v.k*1.6;
      var r1=V.v.r0-(V.v.r0-stop)*t,co=Math.cos(V.v.th),si=Math.sin(V.v.th);
      V.el.setAttribute("d","M"+(CX+V.v.r0*co).toFixed(1)+" "+(CY+V.v.r0*si).toFixed(1)+"L"+(CX+r1*co).toFixed(1)+" "+(CY+r1*si).toFixed(1));
      V.el.setAttribute("stroke-width",V.v.w);
      op(V.el,b*Math.min(1,t*2.4)*.85);
    });
    op(E.l1,b*seg(p,.08,.18)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.8,.9));
  };
}
