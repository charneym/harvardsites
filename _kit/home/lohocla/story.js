/* The story scene (BL/BY/DB): Lohocla's multi-target approach, as ONE continuous engraved scene. A peripheral sensory
   neuron runs from its free nerve endings in the skin, past its cell body in the dorsal root ganglion, into the spinal cord
   (the CNS). Under it, a trace of the signal that reaches the cord. Step 1: the network is over-active; four targets in
   series along the sensory fibre light up and a dense volley of signals runs to the cord. Step 2: one designed molecule
   (drawn as the Lohocla mark) engages all four targets at once. Step 3: the periphery is calmed, only normal sensation
   passes, and the CNS is left untouched. Every element is driven by the scrubbed story progress. Sources: lohocla.com
   (home, /research) and the Kindolor press releases (May and October 2024): "a molecule that modulates simultaneously four
   key elements of the chronic-pain network ... positioned in series within pain sensory systems ... the peripheral sensory
   nervous system (afferent sensory neurons)"; "Kindolor ... does not act in the central nervous system". */
var SCW=760,SCH=520;
var NV={main:"M86 236C126 236 160 262 206 262L470 262L586 262",
  ends:["M206 262C170 250 128 206 70 186","M206 262C164 270 122 300 64 318","M150 246C126 226 102 214 66 214","M140 280C116 300 98 330 72 352","M110 236C92 222 78 196 66 160"],
  T:[[256,262],[310,262],[364,262],[418,262]]};
var SPK=(function(){var s=1937,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[];for(var i=0;i<46;i++)a.push({x:.02+.96*R(),h:.55+.45*R(),k:R()});return a.sort(function(p,q){return p.x-q.x})})();
function memScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><radialGradient id="tg"><stop offset="0" stop-color="#f2666b" stop-opacity=".55"/><stop offset="1" stop-color="#f2666b" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  g+='<text class="t" x="24" y="14">PERIPHERAL SENSORY NEURON</text>';
  /* skin: a layered band on the left with a wavy dermal edge */
  g+='<path class="sk sD" d="M24 96V420"/><path class="sk sD" d="M40 96C46 130 34 160 42 196S38 262 44 300S36 370 42 420"/><path class="sk2 sD" d="M58 96C64 140 52 180 60 220S54 300 62 340S56 400 60 420"/>';
  g+='<text class="t" x="24" y="88">SKIN</text>';
  /* spinal cord in cross-section: outline, grey-matter butterfly and central canal */
  g+='<path class="cd sD" d="M662 196C708 196 738 226 738 262S708 328 662 328S586 298 586 262S616 196 662 196Z"/>';
  g+='<path class="gm sD" d="M662 236C668 226 680 212 694 210C700 214 694 230 686 246C684 254 690 262 700 280C706 296 700 310 690 308C680 304 672 288 666 278C664 276 660 276 658 278C652 288 644 304 634 308C624 310 618 296 624 280C634 262 640 254 638 246C630 230 624 214 630 210C644 212 656 226 662 236Z"/>';
  g+='<circle class="cc" cx="662" cy="262" r="2.6"/>';
  g+='<text class="t" x="738" y="186" text-anchor="end">SPINAL CORD · CNS</text>';
  /* the signal trace and its baseline */
  g+='<path class="bl sD" d="M24 470H736"/>';
  g+='<text class="t" x="24" y="'+(SCH-6)+'">SIGNAL REACHING THE SPINAL CORD</text>';
  g+='</g>';
  /* the CNS boundary that lights in step 3 */
  g+='<g id="cns"><path class="cb" d="M662 184C716 184 750 220 750 262S716 340 662 340S574 304 574 262S608 184 662 184Z"/><text class="a" x="738" y="362" text-anchor="end">UNTOUCHED</text></g>';
  /* the neuron: endings, fibre, the cell body on its stalk, the central branch */
  g+='<g id="nrn">';
  NV.ends.forEach(function(d){g+='<path class="ne sN" d="'+d+'"/>'});
  g+='<path class="ax sN" id="axp" d="'+NV.main+'"/>';
  g+='<path class="ax sN" d="M470 262V222"/><circle class="so" cx="470" cy="198" r="24"/><circle class="nu" cx="474" cy="194" r="7.5"/>';
  g+='<text class="t" x="470" y="160" text-anchor="middle">CELL BODY · DRG</text>';
  g+='</g>';
  /* the four targets */
  g+='<g id="tgs">';
  NV.T.forEach(function(t,k){g+='<g class="tgt" data-k="'+k+'"><circle class="gl" cx="'+t[0]+'" cy="'+t[1]+'" r="22" fill="url(#tg)"/><circle class="rg" cx="'+t[0]+'" cy="'+t[1]+'" r="9"/><circle class="cr" cx="'+t[0]+'" cy="'+t[1]+'" r="3"/></g>'});
  g+='</g>';
  /* the molecule, drawn as the Lohocla mark, one at each target */
  g+='<g id="mols">';
  NV.T.forEach(function(t,k){g+='<g class="mol" data-k="'+k+'"><circle class="mc" cx="-3" cy="2" r="10"/><circle class="mo" cx="8" cy="-6" r="6"/><circle class="mh" cx="-11" cy="-8" r="4.5"/></g>'});
  g+='</g>';
  /* signals travelling to the cord */
  g+='<g id="sigs">';for(i=0;i<18;i++)g+='<circle class="sg" r="3.4" cx="-20" cy="-20"/>';g+='</g>';
  g+='<path id="trace" class="tr" d="M24 470H736"/>';
  g+='<g id="lb1"><text class="a" x="24" y="56">OVER-ACTIVE · FOUR TARGETS IN SERIES</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="56">ONE MOLECULE · ALL FOUR AT ONCE</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="56">PERIPHERY CALMED · NORMAL SENSATION</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var ax=$("#axp",svg),AL=ax.getTotalLength();
  var E={base:dl("#scBase .sD"),nrn:dl("#nrn .sN"),fade:$$("#scBase text,#nrn text",svg),so:$$("#nrn .so,#nrn .nu",svg),
    tg:$$(".tgt",svg),mol:$$(".mol",svg),sg:$$(".sg",svg),tr:$("#trace",svg),cns:$("#cns",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var grow=seg(p,0,.16);draw(E.nrn,b*grow);E.so.forEach(function(el){op(el,b*seg(p,.08,.18))});
    /* activity: high through step 1 and 2, calmed in step 3 */
    var hot=seg(p,.1,.26),bind=seg(p,.4,.6),calm=seg(p,.68,.88);
    var act=hot*(1-.8*calm);
    E.tg.forEach(function(el,k){var on=seg(p,.12+k*.035,.22+k*.035);op(el,b*on);
      el.classList.toggle("cool",calm>.5);var gl=el.firstChild;gl.style.opacity=(act*(.7+.3*Math.sin(p*90+k*1.7))).toFixed(3)});
    /* the molecules arrive together from above and dock on the four targets */
    E.mol.forEach(function(el,k){var t=NV.T[k],y=t[1]-14-(1-bind)*150-k*0*0,a=b*seg(p,.38,.46);
      el.setAttribute("transform","translate("+t[0]+" "+(y-6).toFixed(1)+") scale(1.35)");op(el,a)});
    /* signals: a dense volley when over-active, a few slow ones when calm */
    var n=E.sg.length,live=Math.round(n*(.15+.85*act));
    E.sg.forEach(function(el,i){var ph=((p*(3.2-1.6*calm)+i/n)%1),L=ph*AL,pt=ax.getPointAtLength(L);
      el.setAttribute("cx",pt.x.toFixed(1));el.setAttribute("cy",pt.y.toFixed(1));
      var vis=i<live?1:0;op(el,b*vis*seg(p,.12,.2)*Math.min(1,ph*8)*Math.min(1,(1-ph)*10));el.classList.toggle("cool",calm>.5)});
    /* the trace of what reaches the cord */
    var d="M24 470",amp=56*act+8*(1-act)*seg(p,.12,.2),w=712;
    SPK.forEach(function(s,i){var x=24+w*s.x,show=s.k<(.25+.75*act);if(!show)return;var hh=amp*s.h*seg(p,.12,.2);
      d+="L"+(x-4).toFixed(1)+" 470L"+x.toFixed(1)+" "+(470-hh).toFixed(1)+"L"+(x+3).toFixed(1)+" "+(470+hh*.22).toFixed(1)+"L"+(x+6).toFixed(1)+" 470"});
    d+="L736 470";E.tr.setAttribute("d",d);E.tr.classList.toggle("cool",calm>.5);op(E.tr,b);
    op(E.cns,b*seg(p,.78,.9));
    op(E.l1,b*seg(p,.18,.26)*(1-seg(p,.34,.4)));op(E.l2,b*seg(p,.44,.52)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.78,.86));
  };
}
