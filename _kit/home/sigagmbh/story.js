/* The story scene (BL/BY/DB): SIGA's own Charge & Release dosing (sigagmbh.de > Precursor Verdampfer, "Verdampfersystem für
   Charge & Release aus Pufferbehältern"), drawn as ONE system kept on screen for all three steps: the heated evaporator,
   valve V1, the buffer vessel with its pressure gauge, valve V2 and the process chamber.
   Step 1 (Verdampfen): the precursor evaporates in the heated vessel, without carrier gas.
   Step 2 (Laden): V1 opens, vapour flows into the buffer, its pressure rises to the set value; V1 closes.
   Step 3 (Ablassen): V2 opens, the buffer empties into the chamber; volume and pressure drop give the dose. */
var SCW=760,SCH=520;
function sgScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<clipPath id="sgClE"><rect x="60" y="180" width="140" height="220" rx="16"/></clipPath>'+
    '<clipPath id="sgClB"><rect x="320" y="180" width="120" height="150" rx="12"/></clipPath></defs>';
  g+='<text class="t" x="20" y="30">'+(mob?"CHARGE &amp; RELEASE":"CHARGE &amp; RELEASE, SCHEMATISCH")+'</text>';
  /* pipes (behind the vessels) */
  g+='<path class="pipe sD" d="M130 180V120H380V180"/><path class="pipe sD" d="M440 255H560"/><path class="pipe sD" d="M380 330V364"/>';
  /* the evaporator: liquid, vapour bubbles, heating jacket */
  g+='<g clip-path="url(#sgClE)"><rect class="liq" x="60" y="300" width="140" height="100"/>';
  g+='<g id="sgBub">';for(i=0;i<7;i++){g+='<circle class="bub" cx="'+(78+i*18)+'" cy="290" r="'+(2.2+(i%3)*.6)+'"/>'}g+='</g></g>';
  g+='<rect class="vs sD" x="60" y="180" width="140" height="220" rx="16"/><path class="lvl" d="M60 300H200"/>';
  g+='<path id="sgHeat" class="heat" d="M50 288V398Q50 410 62 410H198Q210 410 210 398V288"/>';
  /* the buffer: vapour fill whose density is the pressure */
  g+='<g clip-path="url(#sgClB)"><rect id="sgFill" class="fill" x="320" y="180" width="120" height="150"/></g>';
  g+='<rect class="vs sD" x="320" y="180" width="120" height="150" rx="12"/>';
  /* gauge */
  g+='<circle class="vs sD" cx="380" cy="390" r="26"/><path class="tick" d="M362 408L366 404M398 408L394 404M380 370V375"/><path id="sgNd" class="nd" d="M380 390L380 372"/><circle class="hub" cx="380" cy="390" r="2.6"/>';
  /* process chamber with the substrate */
  g+='<rect class="vs sD" x="560" y="190" width="160" height="130" rx="6"/><rect class="sub" x="595" y="296" width="90" height="7"/>';
  g+='<g id="sgCloud">';for(i=0;i<9;i++){g+='<circle class="bub" cx="'+(586+(i%5)*26+(i>4?13:0))+'" cy="'+(i>4?262:236)+'" r="2.6"/>'}g+='</g>';
  /* vapour flow on the pipes */
  g+='<path id="sgFA" class="flow" d="M130 180V120H380V180"/><path id="sgFC" class="flow" d="M440 255H560"/>';
  /* valves (bow ties); filled = open */
  g+='<g id="sgV1" class="vlv"><path d="M243 110L267 130V110L243 130Z"/></g><g id="sgV2" class="vlv"><path d="M488 245L512 265V245L488 265Z"/></g>';
  g+='<text class="t" x="245" y="98">V1</text><text class="t" x="490" y="233">V2</text>';
  /* labels */
  g+='<text class="t" x="60" y="444">VERDAMPFER</text>';
  g+='<text class="t" x="'+(mob?340:332)+'" y="448">PUFFER</text>';
  g+='<text class="t" x="560" y="'+(mob?352:358)+'">'+(mob?"KAMMER":"PROZESSKAMMER")+'</text>';
  g+='<g id="sgL1"><text class="t s1" x="60" y="'+(mob?474:468)+'">'+(mob?"BEHEIZT":"BEHEIZT, OHNE TRÄGERGAS")+'</text></g>';
  g+='<g id="sgL2"><text class="t s1" x="418" y="'+(mob?398:395)+'">'+(mob?"p₁":"DRUCK p₁")+'</text></g>';
  g+='<g id="sgL3"><text class="t s1" x="560" y="'+(mob?386:400)+'">'+(mob?"DOSIS V · Δp":"DOSIS AUS V · Δp")+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · VERDAMPFEN</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · LADEN</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · ABLASSEN</text></g>';
  return g+'</svg>';
}
function scene(){return sgScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),bub:$$("#sgBub .bub",svg),cl:$$("#sgCloud .bub",svg),heat:$("#sgHeat",svg),fill:$("#sgFill",svg),nd:$("#sgNd",svg),
    fa:$("#sgFA",svg),fc:$("#sgFC",svg),v1:$("#sgV1",svg),v2:$("#sgV2",svg),L1:$("#sgL1",svg),L2:$("#sgL2",svg),L3:$("#sgL3",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),rest:$$("text.t:not(.s1),.liq,.lvl,.sub,.tick,.hub",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.rest.forEach(function(e){op(e,b)});op(E.v1,b);op(E.v2,b)}
    /* step 1: heat on, bubbles rise in the headspace */
    var s1=seg(p,.02,.12);op(E.heat,b*(.35+.65*s1));
    E.bub.forEach(function(c,i){var ph=((p*6+i*.37)%1),y=292-ph*90;c.setAttribute("cy",y.toFixed(1));op(c,b*s1*(1-ph)*.9)});
    op(E.L1,b*seg(p,.04,.12)*(1-seg(p,.33,.38)));
    /* step 2: V1 open, vapour flows into the buffer, pressure rises; V1 closes */
    var o1=seg(p,.38,.42)*(1-seg(p,.6,.64));E.v1.classList.toggle("on",o1>.5);
    var o2=seg(p,.7,.74);E.v2.classList.toggle("on",o2>.5&&p<.97);
    var fl=ease(seg(p,.4,.6))*(1-ease(seg(p,.74,.92)));
    op(E.fill,b*(.06+.5*fl));
    E.nd.setAttribute("transform","rotate("+(-120+200*fl).toFixed(1)+" 380 390)");
    op(E.fa,b*o1);E.fa.style.strokeDashoffset=(-p*900).toFixed(1);
    op(E.L2,b*seg(p,.46,.54)*(1-seg(p,.66,.7)));
    /* step 3: V2 open, the buffer empties into the chamber */
    op(E.fc,b*o2*(1-seg(p,.92,.96)));E.fc.style.strokeDashoffset=(-p*900).toFixed(1);
    var cl=ease(seg(p,.74,.9));E.cl.forEach(function(c){op(c,b*cl*.85)});
    op(E.L3,b*seg(p,.82,.9));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
