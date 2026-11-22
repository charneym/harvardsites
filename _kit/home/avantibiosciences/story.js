/* The story scene (BL/BY/DB): how ABI-171 works (avantibiosciences.com home/therapeutic areas; Int J Mol Sci 2024,
   doi 10.3390/ijms252111827), as ONE continuous scene: a cross-section of lung tissue, a honeycomb of air sacs (alveoli)
   drawn in fine line, with fibroblasts in the walls between them.
   Frame 0: open, thin-walled air sacs. Step 1 (scar): the fibroblasts lay down collagen (crimson fibres) along the walls,
   the walls thicken and the air sacs close down. Step 2 (inhibit): ABI-171 molecules reach each fibroblast and the two
   kinases inside it (DYRK1A and PIM1, drawn as two small dots) switch off. Step 3 (reverse): the collagen recedes and the
   air sacs open again. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var ALV=(function(){var a=[],rows=[[150,[150,290,430,570,710]],[268,[80,220,360,500,640]],[386,[150,290,430,570,710]]];
  rows.forEach(function(r){r[1].forEach(function(x){a.push({x:x,y:r[0]})})});return a})();
var R0=62;
/* fibroblasts sit in the gaps between three air sacs */
var FIB=[[220,190],[360,190],[500,190],[150,309],[290,309],[430,309],[570,309],[640,190]].map(function(p,i){return {x:p[0],y:p[1]+(i<3||i===7?18:-18)*0,rot:i%2?24:-18}});
function alvScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="aclip"><rect x="10" y="70" width="740" height="380"/></clipPath></defs>';
  g+='<g clip-path="url(#aclip)">';
  /* collagen: crimson fibres hugging each wall (drawn under the wall line), shown by stroke width + opacity */
  g+='<g id="scCol">';ALV.forEach(function(a,k){g+='<circle class="col" data-k="'+k+'" cx="'+a.x+'" cy="'+a.y+'" r="'+R0+'"/>'});g+='</g>';
  g+='<g id="scFib2">';ALV.forEach(function(a,k){var d='';for(var j=0;j<6;j++){var t=j/6*Math.PI*2+k*.7,t2=t+.5;d+='M'+(a.x+(R0+4)*Math.cos(t)).toFixed(1)+' '+(a.y+(R0+4)*Math.sin(t)).toFixed(1)+'A'+(R0+4)+' '+(R0+4)+' 0 0 1 '+(a.x+(R0+4)*Math.cos(t2)).toFixed(1)+' '+(a.y+(R0+4)*Math.sin(t2)).toFixed(1)}
    g+='<path class="cf" data-k="'+k+'" d="'+d+'"/>'});g+='</g>';
  /* the air sacs */
  g+='<g id="scAlv">';ALV.forEach(function(a,k){g+='<circle class="al sD" data-k="'+k+'" cx="'+a.x+'" cy="'+a.y+'" r="'+R0+'"/>'});g+='</g>';
  /* capillary hints in the walls */
  g+='<g id="scCap">';ALV.forEach(function(a,k){if(k%2)return;g+='<path class="cp sD" d="M'+(a.x-R0*.7)+' '+(a.y+R0*.78)+'q'+(R0*.7)+' '+(R0*.28)+' '+(R0*1.4)+' 0"/>'});g+='</g>';
  /* fibroblasts with their two kinases */
  g+='<g id="scFib">';FIB.forEach(function(f,k){
    g+='<g class="fb" data-k="'+k+'" transform="translate('+f.x+' '+f.y+') rotate('+f.rot+')"><path class="fbb" d="M-26 0C-14 -9 14 -9 26 0C14 9 -14 9 -26 0Z"/><circle class="nu" r="4.6"/><circle class="kn" cx="-12" cy="0" r="2.8"/><circle class="kn" cx="12" cy="0" r="2.8"/></g>'});g+='</g>';
  /* ABI-171 molecules: small hexagons that travel in to each fibroblast */
  g+='<g id="scDrug">';FIB.forEach(function(f,k){g+='<path class="dr" data-k="'+k+'" d="M0 -7L6.1 -3.5V3.5L0 7L-6.1 3.5V-3.5Z"/>'});g+='</g>';
  g+='</g>';
  /* callout for one fibroblast */
  var F=FIB[4];
  g+='<g id="scCall"><path class="ln" d="M'+(F.x+12)+' '+(F.y-6)+'L'+(F.x+70)+' 62H'+(F.x+120)+'"/><text class="t" x="'+(F.x+126)+'" y="66">FIBROBLAST · DYRK1A + PIM1</text></g>';
  g+='<text class="t" x="10" y="484">LUNG TISSUE · AIR SACS (ALVEOLI) IN CROSS-SECTION · SCHEMATIC</text>';
  var ly=SCH-6;
  g+='<g id="lb1"><text class="a" x="10" y="'+ly+'">COLLAGEN SCAR · WALLS THICKEN, AIR SACS CLOSE</text></g>';
  g+='<g id="lb2"><text class="a" x="10" y="'+ly+'">ABI-171 · DYRK1A AND PIM1 INHIBITED</text></g>';
  g+='<g id="lb3"><text class="a" x="10" y="'+ly+'">SCAR RECEDES · AIR SACS OPEN</text></g>';
  return g+'</svg>';
}
function scene(){return alvScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scCap .sD"),al:$$(".al",svg),col:$$(".col",svg),cf:$$(".cf",svg),fb:$$(".fb",svg),kn:$$(".kn",svg),dr:$$(".dr",svg),
    call:$("#scCall",svg),txt:$$("svg > text.t",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-b)).toFixed(1)});E.txt.forEach(function(el){op(el,b)});op(E.call,b)}
    var scar=seg(p,.05,.3)*(1-seg(p,.66,.92)),drug=seg(p,.36,.56),off=seg(p,.48,.62),gone=seg(p,.88,1);
    var r=R0*(1-.24*scar);
    E.al.forEach(function(el){el.setAttribute("r",r.toFixed(1));op(el,b)});
    E.col.forEach(function(el,i){el.setAttribute("r",(r+7*scar).toFixed(1));el.style.strokeWidth=(1+15*scar).toFixed(2);op(el,b*Math.min(1,scar*1.3))});
    E.cf.forEach(function(el,i){var k=1-.24*scar,a=ALV[i];el.setAttribute("transform","translate("+a.x+" "+a.y+") scale("+k.toFixed(3)+") translate("+(-a.x)+" "+(-a.y)+")");op(el,b*Math.min(1,Math.max(0,scar*1.6-(i%3)*.12)))});
    E.fb.forEach(function(el){op(el,b)});
    E.kn.forEach(function(el){el.style.fill=off>.5?"transparent":"";el.style.strokeOpacity=(.4+.6*off).toFixed(2);el.style.fillOpacity=(1-off).toFixed(3)});
    E.dr.forEach(function(el,i){var f=FIB[i],gi=Math.min(1,Math.max(0,drug*1.5-(i%4)*.12));
      var sx=f.x+(i%2?40:-40),sy=f.y-90,x=sx+(f.x-sx)*gi,y=sy+(f.y-14-sy)*gi;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");op(el,b*Math.min(1,gi*3)*(1-.35*gone))});
    op(E.l1,b*seg(p,.16,.24)*(1-seg(p,.34,.4)));op(E.l2,b*seg(p,.46,.54)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.8,.88));
  };
}
