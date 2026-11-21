/* The story scene (BL/BY/DB/CX): the GABA-A receptor seen from the extracellular side, drawn as ONE continuous engraved
   scene that stays on screen for all three steps. Five subunits (two alpha, two beta, one gamma, the arrangement of the
   human alpha1-beta3-gamma2 receptor) ring a central chloride pore. Step 1 the pentamer and its closed pore engrave in.
   Step 2 GABA arrives at the two beta/alpha interfaces, the pore opens and chloride begins to pass. Step 3 a GABAkine
   binds at the modulator site on one interface, the pore opens further and the flux grows, while the non-selected
   interfaces stay quiet. Sources: respirerx.com (GABAkines Background, Neuromodulators) for the receptor's composition,
   the allosteric site and the selectivity argument. Geometry drawn here is schematic, not to scale. */
var SCW=760,SCH=520,CX=380,CY=250,RO=190,RI=71;
var SUB=[{n:"β",a:0},{n:"α",a:1},{n:"γ",a:2},{n:"β",a:3},{n:"α",a:4}];
var IONS=(function(){var a=[],i,n=18;for(i=0;i<n;i++){a.push({th:(i*2.399)%(Math.PI*2),r0:258+((i*31)%6)*14,d:(i%9)/9,s:3.4+((i*7)%3)*.5})}return a})();
function arcP(r,a0,a1,sweep){var f=function(n){return(+n).toFixed(1)};
  return f(CX+r*Math.cos(a0))+' '+f(CY+r*Math.sin(a0))+'A'+f(r)+' '+f(r)+' 0 0 '+sweep+' '+f(CX+r*Math.cos(a1))+' '+f(CY+r*Math.sin(a1))}
function petal(k,ro,ri){var h=Math.PI/5*0.86,a=-Math.PI/2+k*(Math.PI*2/5);
  return 'M'+arcP(ro,a-h,a+h,1)+'L'+(CX+ri*Math.cos(a+h)).toFixed(1)+' '+(CY+ri*Math.sin(a+h)).toFixed(1)+'A'+ri+' '+ri+' 0 0 0 '+(CX+ri*Math.cos(a-h)).toFixed(1)+' '+(CY+ri*Math.sin(a-h)).toFixed(1)+'Z'}
function gabaScene(o){
  var f=function(n){return(+n).toFixed(1)},g='',i,k;
  /* on phones the frame is cropped to the receptor so the art fills the full width (DB) */
  var VB=o.mob?[96,2,568,516]:[0,0,SCW,SCH],LX=o.mob?104:18,RX=o.mob?656:742;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="'+VB.join(' ')+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="frm sD" d="M'+LX+' 26H'+(LX+86)+'M'+RX+' 26H'+(RX-86)+'M'+LX+' 494H'+(LX+86)+'M'+RX+' 494H'+(RX-86)+'"/>';
  g+='<text class="t" x="'+LX+'" y="16">GABA-A RECEPTOR · FROM ABOVE</text>';
  g+='<text class="t" x="'+RX+'" y="16" text-anchor="end">CHLORIDE PORE</text>';
  g+='</g>';
  /* the membrane the receptor sits in */
  g+='<g id="scMem"><circle class="dsh sD" cx="'+CX+'" cy="'+CY+'" r="238"/><circle class="dsh2 sD" cx="'+CX+'" cy="'+CY+'" r="252"/></g>';
  /* the five subunits */
  g+='<g id="scSub">';
  SUB.forEach(function(s,j){
    var a=-Math.PI/2+j*(Math.PI*2/5);
    g+='<g class="su" data-k="'+j+'">';
    g+='<path class="gfill" d="'+petal(j,RO,RI)+'"/>';
    g+='<path class="gr sD" d="'+petal(j,RO,RI)+'"/>';
    g+='<path class="gr2 sD" d="'+petal(j,RO-30,RI+18)+'"/>';
    g+='<path class="lm sD" d="'+petal(j,RO-58,RI+38)+'"/>';
    g+='<text class="su-l" x="'+f(CX+(RO-84)*Math.cos(a))+'" y="'+f(CY+(RO-84)*Math.sin(a)+7)+'" text-anchor="middle">'+s.n+'</text>';
    g+='</g>';
  });
  g+='</g>';
  /* the pore */
  g+='<g id="scPore"><circle class="oz" id="poreR" cx="'+CX+'" cy="'+CY+'" r="'+(RI-32)+'"/><circle class="hl2" id="poreG" cx="'+CX+'" cy="'+CY+'" r="'+(RI-32)+'"/></g>';
  /* the chloride ions */
  g+='<g id="scIon">';
  IONS.forEach(function(v,j){g+='<g class="io" data-k="'+j+'"><circle r="'+v.s+'"/><path d="M-'+(v.s*.52).toFixed(1)+' 0H'+(v.s*.52).toFixed(1)+'"/></g>'});
  g+='</g>';
  /* the two GABA sites (beta/alpha interfaces) and the modulator site (alpha/gamma) */
  g+='<g id="scSite">';
  [0.5,3.5].forEach(function(j,n){var a=-Math.PI/2+j*(Math.PI*2/5),r=RO-40;
    g+='<g class="st g'+n+'"><circle class="ch" cx="'+f(CX+r*Math.cos(a))+'" cy="'+f(CY+r*Math.sin(a))+'" r="13"/><path class="cf" d="M'+f(CX+r*Math.cos(a)-6)+' '+f(CY+r*Math.sin(a))+'h12M'+f(CX+r*Math.cos(a))+' '+f(CY+r*Math.sin(a)-6)+'v12"/></g>'});
  g+='</g>';
  var am=-Math.PI/2+1.5*(Math.PI*2/5),rm=RO-46;
  g+='<g id="scMod"><circle class="md" cx="'+f(CX+rm*Math.cos(am))+'" cy="'+f(CY+rm*Math.sin(am))+'" r="15"/>'+
     '<path class="mdf" d="M'+f(CX+rm*Math.cos(am)-7)+' '+f(CY+rm*Math.sin(am))+'h14"/>'+
     '<path class="mdl" d="M'+f(CX+(rm+16)*Math.cos(am))+' '+f(CY+(rm+16)*Math.sin(am))+'L'+f(CX+262*Math.cos(am))+' '+f(CY+262*Math.sin(am))+'"/>'+
     '<text class="a" x="'+f(CX+274*Math.cos(am))+'" y="'+f(CY+248*Math.sin(am)+4)+'">KRM-II-81</text></g>';
  /* step labels, in the clear band at the foot; only one is ever visible (CY) */
  g+='<g id="lb1"><text class="a" x="'+LX+'" y="512">PENTAMER · PORE CLOSED</text></g>';
  g+='<g id="lb2"><text class="a" x="'+LX+'" y="512">GABA BOUND · CHLORIDE PASSES</text></g>';
  g+='<g id="lb3"><text class="a" x="'+LX+'" y="512">GABAKINE BOUND · SELECTIVE SUBTYPES</text></g>';
  return g+'</svg>';
}
function scene(){return gabaScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),
    mem:$$("#scMem circle",svg),
    sub:$$(".su",svg).map(function(el){return {el:el,fill:$(".gfill",el),lab:$(".su-l",el),ln:[[$(".gr",el),0],[$(".gr2",el),0],[$(".lm",el),0]]}}),
    pore:$("#poreR",svg),glow:$("#poreG",svg),
    ion:$$(".io",svg).map(function(el){return {el:el,v:IONS[+el.getAttribute("data-k")]}}),
    site:$$(".st",svg),mod:$("#scMod",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  E.sub.forEach(function(S){S.ln.forEach(function(a){var L=a[0]&&a[0].getTotalLength?a[0].getTotalLength():0;a[1]=L;if(a[0]){a[0].style.strokeDasharray=L+" "+L}})});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){if(a[0])a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    draw(E.base,b);
    var grow=seg(p,0,.2),bind=seg(p,.3,.5),open=seg(p,.42,.62),flow=seg(p,.46,1),modIn=seg(p,.7,.86),wide=seg(p,.74,.94);
    /* the pentamer engraves in, subunit by subunit */
    E.sub.forEach(function(S,i){
      var t=Math.min(1,Math.max(0,(Math.max(b*b,grow*1.25)-i*.06)*1.5));
      S.ln.forEach(function(a,j){draw([a],Math.min(1,Math.max(0,t*1.1-j*.05)))});
      op(S.fill,b*t*(.42+.5*open));
      op(S.lab,b*Math.max(0,(t-.5)/.5));
    });
    E.mem.forEach(function(c,i){op(c,b*Math.min(1,Math.max(b*1.1-i*.15,grow*1.4-i*.12))*.9)});
    /* the pore opens */
    var pr=(RI-32)+(RI-34)*(.42*open+.46*wide);
    if(E.pore){E.pore.setAttribute("r",pr.toFixed(1));op(E.pore,b*Math.max(grow*.8,.75))}
    if(E.glow){E.glow.setAttribute("r",(pr+5+9*wide).toFixed(1));op(E.glow,b*(.25*open+.45*wide))}
    /* GABA at the two beta/alpha interfaces */
    E.site.forEach(function(el,i){var t=Math.min(1,Math.max(0,(bind-i*.1)*1.4));op(el,b*t)});
    /* chloride through the pore */
    E.ion.forEach(function(I,i){
      var u=(flow*2.6+I.v.d)%1,r=I.v.r0-(I.v.r0-6)*u,co=Math.cos(I.v.th),si=Math.sin(I.v.th);
      I.el.setAttribute("transform","translate("+(CX+r*co).toFixed(1)+" "+(CY+r*si).toFixed(1)+") scale("+(1-.55*Math.max(0,(u-.72)/.28)).toFixed(3)+")");
      op(I.el,b*Math.min(1,flow*3)*Math.min(1,u*5)*(1-Math.max(0,(u-.78)/.22))*(.55+.45*wide));
    });
    /* the GABAkine at the modulator site */
    op(E.mod,b*modIn);
    op(E.l1,b*seg(p,.08,.18)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.66,.72)));op(E.l3,b*seg(p,.8,.9));
  };
}
