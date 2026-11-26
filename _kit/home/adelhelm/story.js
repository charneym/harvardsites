/* The story scene (BL/BY/DB): ADELHELM's cleanroom coating for medtech (adelhelm.de > Informatives > Reinraum,
   Verfahren > Reinraum-Beschichtung, Branchen > Medizintechnik), drawn as ONE fine-line elevation kept on screen for all four steps.
   Step 1 (Reinigung): the substrate (a guidewire) is cleaned in a pH-controlled, solvent-free cleaning line or an ultrasonic bath.
   Step 2 (Reinraum): coated in the clean/cleanroom area, ISO class 9/8, under filtered air; the layer forms along the wire.
   Step 3 (Funktion): the cross-section: wire core + functional layer (e.g. adcoat ML FluoroWire: lower intravascular friction).
   Step 4 (Lieferung): cleaned particle-free, packed to DIN guidelines, straight into the recipient's cleanroom. */
var SCW=760,SCH=520;
function adScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* the plant frame (always) */
  g+='<path class="hall sD" d="M20 90H740V452H20Z"/>';
  /* the wire (always): a long guidewire running through the line */
  g+='<path class="wire sD" d="M44 330H520"/>';
  /* step 1: the cleaning bath around the left of the wire, with ultrasonic waves rising from the transducer */
  g+='<g id="adBath"><path class="bath bD" d="M52 250V420H232V250"/><path class="bath bD" d="M52 290H232"/><path class="bath bD" d="M92 420V432H192V420"/></g>';
  var wv='';for(i=0;i<3;i++){var y=402-i*16;wv+='<path class="wave" d="M84 '+y+'Q113 '+(y-9)+' 142 '+y+'T200 '+y+'"/>'}
  g+='<g id="adWave">'+wv+'</g>';
  /* the cleanroom (always): wall with a passage for the wire, filter ceiling drawn in step 2 */
  g+='<path class="wall sD" d="M270 452V350M270 312V150H530V452"/>';
  g+='<text class="t" x="282" y="140">REINRAUM · ISO 9/8</text>';
  /* step 2: filter ceiling, filtered air down to the wire, the coating layer forming along the wire */
  g+='<g id="adFfu"><path class="ffu fD" d="M270 150H530V174H270Z"/>';for(i=0;i<8;i++){g+='<path class="ffu fD" d="M'+(286+i*30)+' 174L'+(302+i*30)+' 150"/>'}g+='</g>';
  var fl='';[310,360,410,460,500].forEach(function(x){fl+='<path class="flow" d="M'+x+' 186V300"/><path class="flow" d="M'+(x-5)+' 293L'+x+' 300L'+(x+5)+' 293"/>'});
  g+='<g id="adFlow">'+fl+'</g>';
  g+='<path id="adCoat" class="coat cD" d="M274 330H520"/>';
  /* step 3: a magnified cross-section of the coated wire: core, functional layer, leader lines */
  g+='<g id="adSec"><path class="lead mD" d="M522 330L590 302M522 330L590 358"/><circle class="core mD" cx="644" cy="330" r="30"/><circle class="ring mD" cx="644" cy="330" r="44"/></g>';
  g+='<g id="adRing"><circle class="corefill" cx="644" cy="330" r="29"/><circle class="layer" cx="644" cy="330" r="37"/></g>';
  /* step 4: the cleanroom packaging and the hand-over arrow */
  g+='<g id="adBox"><path class="box xD" d="M566 400V444H722V400"/><path class="box xD" d="M566 400L554 390M722 400L734 390"/><path class="box xD" d="M538 422H556M550 417L556 422L550 427"/></g>';
  /* labels, per step, in the band above the frame: each >= 8px clear of every stroke (DR3) */
  function L(id,cl,a,b){return '<g id="'+id+'"><text class="t '+cl+'" x="20" y="'+(mob?40:36)+'">'+a+'</text><text class="t" x="20" y="'+(mob?72:60)+'">'+b+'</text></g>'}
  g+=mob?L("adL1","s1","REINIGUNG","PH-GESTEUERT · ULTRASCHALL"):L("adL1","s1","REINIGUNG VOR DER BESCHICHTUNG","PH-WERT-GESTEUERT, LÖSEMITTELFREI ODER IM ULTRASCHALLBAD");
  g+=mob?L("adL2","s2","500 M² REINRAUM","FDA-KONFORM · BIOKOMPATIBEL"):L("adL2","s2","BESCHICHTUNG IM SAUBER- UND REINRAUM, ISO KLASSE 9/8","FDA-KONFORME UND BIOKOMPATIBLE BESCHICHTUNGSSYSTEME");
  g+=mob?L("adL3","s1","KERN UND SCHICHT","WENIGER REIBUNG"):L("adL3","s1","FUNKTIONSSCHICHT AUF DEM FÜHRUNGSDRAHT","Z. B. ADCOAT® ML FLUOROWIRE®: GERINGERE REIBUNGSKRÄFTE");
  g+=mob?L("adL4","s2","VERPACKT NACH DIN","IN IHREN REINRAUM"):L("adL4","s2","PARTIKELFREI GEREINIGT, VERPACKT NACH DIN-RICHTLINIEN","DIREKT IN DIE REINRÄUME DES EMPFÄNGERS");
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="500">1 · REINIGUNG</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="500">2 · REINRAUM</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="500">3 · FUNKTION</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="500">4 · LIEFERUNG</text></g>';
  return g+'</svg>';
}
function scene(){return adScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),bath:dl(".bD"),wave:$("#adWave",svg),ffu:dl(".fD"),flow:$("#adFlow",svg),coat:dl(".cD"),sec:dl(".mD"),ring:$("#adRing",svg),
    box:dl(".xD"),L1:$("#adL1",svg),L2:$("#adL2",svg),L3:$("#adL3",svg),L4:$("#adL4",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),tt:[].slice.call(svg.children).filter(function(n){return n.tagName==="text"})};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.tt.forEach(function(t){op(t,b)})}
    /* step 1: the bath draws in, the ultrasonic waves pulse while it is the active step */
    draw(E.bath,b*seg(p,.02,.14));
    var pu=.7+.3*Math.sin(p*60);
    op(E.wave,b*seg(p,.08,.14)*(1-.5*seg(p,.25,.3))*pu);
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2: the filter ceiling and its air, the coating layer drawing along the wire */
    draw(E.ffu,b*seg(p,.27,.36));
    op(E.flow,b*seg(p,.32,.4));
    draw(E.coat,b*seg(p,.34,.48));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3: the magnified cross-section: core, then the functional layer */
    draw(E.sec,b*seg(p,.52,.62));
    op(E.ring,b*seg(p,.58,.66));
    op(E.L3,b*seg(p,.56,.62)*(1-seg(p,.72,.75)));
    /* step 4: the cleanroom packaging and the hand-over arrow */
    draw(E.box,b*seg(p,.77,.88));
    op(E.L4,b*seg(p,.79,.85));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}
