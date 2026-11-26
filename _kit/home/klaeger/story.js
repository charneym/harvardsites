/* The story scene (BL/BY/DB): Kläger's ceramic injection moulding chain (klaeger.de > Ceramic Injection Molding: "the
   ceramic injection molding process continues beyond forming and includes the essential stages of debinding, sintering
   and, where required, finishing"), drawn as ONE zirconia screw kept on screen for all three steps:
   Step 1 (Mould): the feedstock is injected through the gate and fills the screw cavity in the two mould halves.
   Step 2 (Debind): the mould opens and the binder leaves the green part (thermal or catalytic debinding).
   Step 3 (Sinter): the part densifies and draws in to its final size, solid white ceramic, and is passed. */
var SCW=760,SCH=520;
function klScrew(){
  /* horizontal screw, tip left, head right, centre line y=280 */
  var top="M78 280L122 248",x,i=0;
  for(x=122;x<=446;x+=18){top+="L"+(x+9)+" "+(i%2?248:234);i++}
  top+="L464 248L476 248L484 214Q486 204 496 204H560Q570 204 570 214V346Q570 356 560 356H496Q486 356 484 346L476 312L464 312";
  i=1;for(x=446;x>=122;x-=18){top+="L"+x+" "+(i%2?326:312);i++}
  return top+"L122 312Z";
}
function klScene(o){
  var g='',mob=o.mob,sc=klScrew();
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<clipPath id="klFill"><rect id="klFr" x="40" y="150" width="600" height="260"/></clipPath>'+
    '<mask id="klCav"><rect x="0" y="0" width="760" height="520" fill="#fff"/><path d="'+sc+'" fill="#000"/></mask>'+
    '<pattern id="klHt" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V8" stroke="#5d7fa6" stroke-width="1"/></pattern></defs>';
  g+='<text class="t" x="20" y="30">'+(mob?"ZIRCONIA SCREW":"ZIRCONIA SCREW, SCHEMATIC")+'</text>';
  /* the two mould halves with the screw cavity */
  g+='<g id="klMu"><rect class="mo" x="56" y="176" width="548" height="104" mask="url(#klCav)"/><path class="moe sD" d="M56 280V176H604V280"/></g>';
  g+='<g id="klMl"><rect class="mo" x="56" y="280" width="548" height="104" mask="url(#klCav)"/><path class="moe sD" d="M56 280V384H604V280"/></g>';
  g+='<path id="klGate" class="gate" d="M690 280H604"/>';
  /* the part: green (feedstock), debound, then sintered white */
  g+='<g id="klPart"><path id="klGreen" class="green" d="'+sc+'" clip-path="url(#klFill)"/><path id="klWhite" class="white" d="'+sc+'"/><path class="pe sD" d="'+sc+'"/></g>';
  /* binder leaving the part */
  g+='<g id="klBind">';
  [[160,262],[214,300],[262,258],[318,296],[366,262],[410,300],[452,268],[520,250],[536,306],[190,286],[292,276],[392,284]].forEach(function(q,j){g+='<circle class="bd" cx="'+q[0]+'" cy="'+q[1]+'" r="'+(j%3?2.4:3.2)+'"/>'});
  g+='</g>';
  /* step 3: the final size, and the pass mark */
  g+='<g id="klDim"><path class="dim" d="M78 410V430M570 410V430M78 420H570"/></g>';
  g+='<path id="klOk" class="ok" d="M640 284L654 298L680 268"/>';
  /* labels, per step (all kept 8px+ clear of strokes) */
  g+='<g id="klL1"><text class="t" x="618" y="262">'+(mob?"FEED":"FEEDSTOCK")+'</text><text class="t s1" x="56" y="420">'+(mob?"INJECTION":"INJECTION MOULDING")+'</text></g>';
  g+='<g id="klL2"><text class="t" x="56" y="170">'+(mob?"BINDER OUT":"BINDER REMOVED")+'</text><text class="t s1" x="56" y="420">'+(mob?"DEBINDING":"THERMAL OR CATALYTIC DEBINDING")+'</text></g>';
  g+='<g id="klL3"><text class="t s1" x="56" y="462">'+(mob?"SINTERED":"SINTERED TO FINAL SIZE")+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · MOULD</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · DEBIND</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · SINTER</text></g>';
  return g+'</svg>';
}
function scene(){return klScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),mu:$("#klMu",svg),ml:$("#klMl",svg),gate:$("#klGate",svg),fr:$("#klFr",svg),green:$("#klGreen",svg),white:$("#klWhite",svg),part:$("#klPart",svg),
    bind:$("#klBind",svg),dim:$("#klDim",svg),ok:dl("#klOk"),okEl:$("#klOk",svg),
    L1:$("#klL1",svg),L2:$("#klL2",svg),L3:$("#klL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1,DK=.84;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  E.dim.setAttribute("transform","translate("+(324*(1-DK)).toFixed(1)+" -24) scale("+DK+" 1)");
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b)}
    /* step 1: feedstock in through the gate, filling the cavity from the head to the tip */
    var fill=ease(seg(p,.03,.2));
    op(E.gate,b*(1-seg(p,.3,.36)));
    E.fr.setAttribute("x",(604-560*fill).toFixed(1));E.fr.setAttribute("width",(560*fill+1).toFixed(1));
    op(E.L1,b*seg(p,.02,.1)*(1-seg(p,.3,.36)));
    /* step 2: the mould opens and fades, the binder leaves */
    var o2=ease(seg(p,.36,.5));
    E.mu.setAttribute("transform","translate(0 "+(-34*o2).toFixed(1)+")");E.ml.setAttribute("transform","translate(0 "+(34*o2).toFixed(1)+")");
    op(E.mu,b*(1-seg(p,.4,.52)));op(E.ml,b*(1-seg(p,.4,.52)));
    var bo=seg(p,.46,.64);
    op(E.bind,b*seg(p,.42,.48)*(1-seg(p,.58,.66)));E.bind.setAttribute("transform","translate(0 "+(-46*ease(bo)).toFixed(1)+")");
    E.green.style.fillOpacity=(.62-.3*seg(p,.46,.64)).toFixed(3);
    op(E.L2,b*seg(p,.5,.56)*(1-seg(p,.64,.68)));
    /* step 3: sintering draws the part in to its final size and it turns solid white */
    var s=ease(seg(p,.7,.86)),k=1-(1-DK)*s;
    E.part.setAttribute("transform","translate("+(324*(1-k)).toFixed(1)+" "+(280*(1-k)).toFixed(1)+") scale("+k.toFixed(4)+")");
    op(E.white,b*s);
    op(E.dim,b*seg(p,.84,.9));
    op(E.okEl,b*seg(p,.88,.92));draw(E.ok,b*seg(p,.89,.95));
    op(E.L3,b*seg(p,.74,.82));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
