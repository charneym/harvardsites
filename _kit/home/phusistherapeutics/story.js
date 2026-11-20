/* the story scene (BL/BY/DB): ONE engraved patch of cell membrane, kept on screen for all three steps, outside above and
   cytoplasm below. PI-3-kinase: PI3K at the inner face lights and the PIP3 lipid heads beside it turn red, one by one.
   PH domains: AKT and PDK1 rise from the cytoplasm and dock on PIP3 by their PH lobes; PDK1 activates AKT and the growth and
   survival signal lights. PHT-427: the drug binds both PH lobes, the kinases fall back into the cytoplasm and the PIP3 dock is
   left empty. Source: NIH RePORTER abstract 1R44CA306740-01 (PHT-427, a dual AKT/PDPK1 inhibitor downstream of PI-3-kinase
   that blocks membrane binding of their pleckstrin homology domains). Everything is driven by the scrubbed story progress. */
var MEM={x0:24,x1:736,out:176,inn:236};
var KIN={akt:{rest:[420,418],dock:[420,300],nm:"AKT"},pdk:{rest:[612,430],dock:[598,300],nm:"PDK1"}};
var DRUG={akt:[70,500],pdk:[730,506]};
function memScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i,x;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="'+o.vb+'" aria-hidden="true">';
  g+='<defs><radialGradient id="glw" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#d4958d" stop-opacity=".55"/><stop offset="1" stop-color="#d4958d" stop-opacity="0"/></radialGradient></defs>';
  /* ---- base: the bilayer, PI3K, region labels ---- */
  g+='<g id="scBase">';
  g+='<rect class="cyto" x="'+MEM.x0+'" y="'+(MEM.inn+8)+'" width="'+(MEM.x1-MEM.x0)+'" height="'+(520-MEM.inn-8)+'"/>';
  var tl='';
  for(x=MEM.x0+6;x<=MEM.x1-4;x+=16){
    tl+='M'+(x-2.5)+' '+(MEM.out+6)+'q-1.5 11 1 24M'+(x+2.5)+' '+(MEM.out+6)+'q1.5 11 -1 24';
    tl+='M'+(x-2.5)+' '+(MEM.inn-6)+'q-1.5 -11 1 -24M'+(x+2.5)+' '+(MEM.inn-6)+'q1.5 -11 -1 -24';
    g+='<circle class="lip sD" cx="'+x+'" cy="'+MEM.out+'" r="6"/><circle class="lip sD" cx="'+x+'" cy="'+MEM.inn+'" r="6"/>';
  }
  g+='<path class="tl sD" d="'+tl+'"/>';
  /* PI3K, docked under the inner leaflet at the left */
  g+='<path class="pi sD" d="M104 252c18-8 70-8 88 2c14 8 16 34 6 50c-12 18-46 26-72 18c-24-8-40-28-38-46c1-12 6-19 16-24z"/>';
  g+='<path class="pih sD" d="M118 280q30 -12 62 2M114 298q34 -10 70 4"/>';
  g+='<text class="nl" x="150" y="316" text-anchor="middle">PI3K</text>';
  g+='<text class="t" x="'+MEM.x0+'" y="'+(MEM.out-30)+'">OUTSIDE THE CELL</text>';
  g+='<text class="t" x="'+MEM.x1+'" y="'+(MEM.out-30)+'" text-anchor="end">CELL MEMBRANE</text>';
  g+='<text class="t" x="'+MEM.x0+'" y="506">CYTOPLASM</text>';
  g+='</g>';
  /* ---- moving parts ---- */
  g+='<g id="scMove">';
  g+='<circle class="glow" id="gPI" cx="150" cy="288" r="78" fill="url(#glw)"/>';
  /* PIP3: the inner-leaflet heads beside PI3K, lit one by one */
  for(x=MEM.x0+6,i=0;x<=MEM.x1-4;x+=16){if(x>=330&&x<=690){g+='<circle class="pip" data-i="'+i+'" cx="'+x+'" cy="'+MEM.inn+'" r="6"/>';i++}}
  g+='<path class="sig" id="sigPI" d="M200 268Q262 254 322 246"/>';
  g+='<circle class="glow" id="gAKT" cx="0" cy="0" r="70" fill="url(#glw)"/>';
  ["akt","pdk"].forEach(function(k){
    g+='<g class="kin" id="k_'+k+'"><ellipse class="kb" cx="0" cy="22" rx="46" ry="33"/><path class="kh" d="M-30 18q30 -12 60 0M-26 34q26 -10 52 0"/>'+
       '<path class="kn" d="M-8 -12L-6 -10M6 -12L8 -10"/><path class="lk" d="M0 -11V-16"/><circle class="ph" cx="0" cy="-34" r="18"/>'+
       '<text class="nl" x="0" y="28" text-anchor="middle">'+KIN[k].nm+'</text></g>';
  });
  g+='<path class="sig" id="sigAct" d="M550 330L482 330"/><path class="sigh" id="sigActH" d="M492 323L482 330L492 337"/>';
  g+='<path class="sig" id="sigG" d="M420 360V446"/><path class="sigh" id="sigGH" d="M413 436L420 446L427 436"/>';
  ["akt","pdk"].forEach(function(k){g+='<g class="drug" id="d_'+k+'"><path class="dr" d="M0 -11L9.5 -5.5V5.5L0 11L-9.5 5.5V-5.5Z"/><path class="dr" d="M9.5 -5.5L19 -11M-9.5 5.5L-18 11"/><circle class="drd" cx="19" cy="-11" r="2.8"/></g>'});
  g+='</g>';
  /* ---- step labels (fade with their step) ---- */
  g+='<g id="lb1"><text class="a" x="510" y="'+(MEM.inn+38)+'" text-anchor="middle">PIP3</text></g>';
  g+='<g id="lb2"><text class="a" x="420" y="'+(o.mob?486:476)+'" text-anchor="middle">GROWTH · SURVIVAL</text><text class="a" x="'+(o.mob?352:360)+'" y="270" text-anchor="end">PH DOMAIN</text>'+(o.mob?'':'<text class="t s" x="516" y="370" text-anchor="middle">ACTIVATES</text>')+'</g>';
  g+='<g id="lb3"><text class="a" x="510" y="'+(MEM.inn+38)+'" text-anchor="middle">DOCK LEFT EMPTY</text><text class="a" x="'+(o.mob?318:330)+'" y="'+(o.mob?352:362)+'" text-anchor="end">PHT-427</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0,vb:"0 0 760 520"})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .cyto",svg),gPI:$("#gPI",svg),gAKT:$("#gAKT",svg),pip:$$(".pip",svg),
    sPI:dl("#sigPI"),sAct:dl("#sigAct"),sG:dl("#sigG"),hAct:$("#sigActH",svg),hG:$("#sigGH",svg),
    k:{akt:$("#k_akt",svg),pdk:$("#k_pdk",svg)},d:{akt:$("#d_akt",svg),pdk:$("#d_pdk",svg)},l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),mv:$("#scMove",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=v.toFixed(3)}
  function lerp(a,b,t){return a+(b-a)*t}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    /* step 1: PI3K lights, PIP3 heads light in sequence */
    var pi=seg(p,0,.12),lit=seg(p,.04,.26);
    op(E.gPI,b*pi*(1-.6*seg(p,.66,.8)));draw(E.sPI,seg(p,.02,.14));
    var n=E.pip.length;E.pip.forEach(function(el,i){op(el,b*Math.min(1,Math.max(0,lit*n-i*.8)))});
    /* step 2: the kinases dock; step 3: the drug binds their PH lobes and they fall away */
    var dock=seg(p,.34,.5),drug=seg(p,.64,.76),off=seg(p,.74,.88),up=dock*(1-off);
    var pos={};
    ["akt","pdk"].forEach(function(k){var K=KIN[k];pos[k]=[lerp(K.rest[0],K.dock[0],up),lerp(K.rest[1],K.dock[1],up)];
      E.k[k].setAttribute("transform","translate("+pos[k][0].toFixed(1)+" "+pos[k][1].toFixed(1)+")");
      E.k[k].classList.toggle("on",up>.6);
      /* the drug travels to the PH lobe and rides with it */
      var tx=pos[k][0]+(k==="akt"?-26:26),ty=pos[k][1]-40,s=DRUG[k];
      E.d[k].setAttribute("transform","translate("+lerp(s[0],tx,drug).toFixed(1)+" "+lerp(s[1],ty,drug).toFixed(1)+") rotate("+(drug*150).toFixed(1)+")");
      op(E.d[k],b*seg(p,.62,.68))});
    var act=seg(p,.46,.58)*(1-seg(p,.68,.76));
    draw(E.sAct,act);draw(E.sG,seg(p,.5,.6)*(1-seg(p,.68,.76)));op(E.hAct,b*act);op(E.hG,b*act);
    E.gAKT.setAttribute("transform","translate("+pos.akt[0].toFixed(1)+" "+(pos.akt[1]+20).toFixed(1)+")");op(E.gAKT,b*act);
    op(E.l1,b*seg(p,.14,.22)*(1-seg(p,.27,.33)));op(E.l2,b*seg(p,.44,.54)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.8,.88));
  };
}
