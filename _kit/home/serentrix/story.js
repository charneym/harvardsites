/* The story scene (BL/BY/DB): how a modality-selective TRPV1 antagonist works (serentrix.com/science; NIH abstracts
   R43GM150295, R41HD115418), as ONE continuous engraved scene. A TRPV1 channel sits in the membrane of a sensory nerve
   ending. Three activation modes reach it from above: heat, protons and capsaicin. Below, calcium ions pass through the pore
   and the nerve fires (a spike train). At right, a body-temperature gauge.
   Step 1: all three modes open the channel, ions flow, the nerve fires: burning pain.
   Step 2: first-generation antagonists block all three modes; the nerve falls quiet but body temperature climbs
   (hyperthermia, the side effect that ended those programmes).
   Step 3: the Serentrix compound is modality-selective: no potent effect on the proton mode, so body temperature holds
   (no increase in 35 Phase 1 subjects); the capsaicin mode is blocked and the firing falls. The heat input is left neutral
   (nothing is claimed about it). Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
function memScene(o){
  var g='',i,f=function(n){return (+n).toFixed(1)};
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* ---- base: the membrane (two leaflets of head groups), the cell interior line, captions ---- */
  g+='<g id="scBase">';
  g+='<path class="mem sD" d="M24 196H330M430 196H640"/><path class="mem sD" d="M24 284H330M430 284H640"/>';
  for(i=0;i<26;i++){var x=34+i*23.5;if(x>318&&x<442)continue;if(x>632)continue;g+='<circle class="hd" cx="'+f(x)+'" cy="203" r="6"/><circle class="hd" cx="'+f(x)+'" cy="277" r="6"/><path class="tl" d="M'+f(x-2)+' 210V238M'+f(x+2)+' 210V238M'+f(x-2)+' 242V270M'+f(x+2)+' 242V270"/>'}
  g+='<path class="bl sD" d="M24 448H640"/>';
  if(!o.mob)g+='<text class="t" x="24" y="14">OUTSIDE THE NERVE ENDING</text>';
  g+='<text class="t" x="24" y="186">MEMBRANE</text>';
  g+='<text class="t" x="24" y="'+(SCH-6)+'">NERVE FIRING</text>';
  g+='</g>';
  /* ---- the TRPV1 channel: two halves of the tetramer around the pore ---- */
  g+='<g id="scCh">';
  g+='<path class="ch" d="M334 168h40v144h-40z"/><path class="ch" d="M386 168h40v144h-40z"/>';
  g+='<path class="chl" d="M342 182h24M342 202h24M342 222h24M342 242h24M342 262h24M342 282h24M342 302h24M394 182h24M394 202h24M394 222h24M394 242h24M394 262h24M394 282h24M394 302h24"/>';
  g+='<text class="c" x="434" y="334">TRPV1</text>';
  g+='</g>';
  /* ---- the three activation modes: heat (waves), protons (H+), capsaicin (a small ring molecule) ---- */
  g+='<g id="inHeat"><path class="in" d="M196 58c8 8 8 16 0 24s-8 16 0 24M214 58c8 8 8 16 0 24s-8 16 0 24M232 58c8 8 8 16 0 24s-8 16 0 24"/><path class="ar" d="M246 120L330 160"/><path class="ah" d="M318 150l12 10-15 2"/><text class="m" x="214" y="40" text-anchor="middle">HEAT</text></g>';
  g+='<g id="inProt"><circle class="pt" cx="364" cy="74" r="13"/><circle class="pt" cx="396" cy="96" r="13"/><text class="hp" x="364" y="79" text-anchor="middle">H+</text><text class="hp" x="396" y="101" text-anchor="middle">H+</text><path class="ar" d="M380 120V156"/><path class="ah" d="M373 146l7 10 7-10"/><text class="m" x="380" y="40" text-anchor="middle">PROTONS</text></g>';
  g+='<g id="inCap"><path class="in" d="M534 68l14 8v16l-14 8-14-8V76z"/><path class="in" d="M548 92l18 10M520 76l-16-9M504 67v-13"/><path class="ar" d="M514 120L430 160"/><path class="ah" d="M445 151l-15 9 13 3"/><text class="m" x="546" y="40" text-anchor="middle">CAPSAICIN</text></g>';
  /* ---- blockers: first-generation (three, bone) and the selective compound (one, lime) ---- */
  g+='<g id="bk2"><g class="b2" transform="translate(288 138)"><path d="M0-11l10 6v11l-10 6-10-6V-5z"/></g><g class="b2" transform="translate(380 138)"><path d="M0-11l10 6v11l-10 6-10-6V-5z"/></g><g class="b2" transform="translate(472 138)"><path d="M0-11l10 6v11l-10 6-10-6V-5z"/></g></g>';
  g+='<g id="bk3"><g class="b3" transform="translate(472 138)"><path d="M0-11l10 6v11l-10 6-10-6V-5z"/></g></g>';
  /* ---- calcium ions through the pore ---- */
  g+='<g id="scIon">';
  for(i=0;i<9;i++)g+='<circle class="ion" cx="380" cy="160" r="5"/>';
  g+='</g>';
  /* ---- the nerve's spike train ---- */
  g+='<path id="spk" class="spk" d=""/>';
  /* ---- body temperature gauge ---- */
  g+='<g id="scTh"><path class="th" d="M690 96v240"/><path class="tht sD" d="M682 96a8 8 0 0116 0v232a16 16 0 11-16 0z"/><circle class="thb" cx="690" cy="350" r="11"/><rect id="thF" class="thf" x="686" y="250" width="8" height="100"/>';
  g+='<path class="tk" d="M704 250h10"/><text class="m" x="690" y="74" text-anchor="middle">BODY TEMP</text></g>';
  /* ---- step labels, in the clear band between the membrane and the firing trace ---- */
  g+='<g id="lb1"><text class="a" x="24" y="376">ALL THREE MODES OPEN · PAIN SIGNAL</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="376">ALL MODES BLOCKED · TEMPERATURE RISES</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="376">PROTON MODE SPARED · TEMPERATURE HOLDS</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .hd, #scBase .tl",svg),ch:$("#scCh",svg),
    heat:$("#inHeat",svg),prot:$("#inProt",svg),cap:$("#inCap",svg),
    b2:$$("#bk2 .b2",svg),b3:$("#bk3 .b3",svg),ion:$$(".ion",svg),spk:$("#spk",svg),th:$("#scTh",svg),thF:$("#thF",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var grow=seg(p,0,.12);
    op(E.ch,b*grow);op(E.th,b*grow);
    var on1=seg(p,.06,.18);
    var blk2=seg(p,.38,.5)*(1-seg(p,.66,.74)),blk3=seg(p,.72,.84);
    var tUp=seg(p,.44,.6)*(1-seg(p,.68,.82));
    /* inputs: on from step 1; dim while blocked; in step 3 protons stay bright, capsaicin is blocked, heat goes neutral */
    op(E.heat,b*on1*(1-.6*blk2)*(1-.55*blk3));
    op(E.prot,b*on1*(1-.6*blk2));
    op(E.cap,b*on1*(1-.6*blk2)*(1-.45*blk3));
    E.b2.forEach(function(el,i){var d=Math.min(1,Math.max(0,blk2*1.4-i*.15));op(el,b*d);el.setAttribute("transform","translate("+[288,380,472][i]+" "+(138-(1-d)*26).toFixed(1)+")")});
    op(E.b3,b*blk3);E.b3.setAttribute("transform","translate(472 "+(138-(1-blk3)*26).toFixed(1)+")");
    /* ion flow: full in step 1, none when every mode is blocked, a trickle when only the selective block is on */
    var flow=on1*(1-blk2)*(1-.7*blk3);
    E.ion.forEach(function(el,i){var q=((p*7+i/E.ion.length)%1);el.setAttribute("cy",(150+q*250).toFixed(1));op(el,b*flow*Math.sin(Math.PI*q))});
    /* the spike train: amplitude follows the flow */
    var d="M24 448",A=56*flow,x;
    for(x=24;x<=640;x+=8){var ph=(x/8+Math.floor(p*90))%9,y=448-(ph===0?A:ph===1?-A*.25:0);d+="L"+x+" "+y.toFixed(1)}
    E.spk.setAttribute("d",d);op(E.spk,b*grow);
    /* body temperature: normal at 250, climbs to 150 with the first-generation blockers, back in step 3 */
    var top=250-100*tUp;E.thF.setAttribute("y",top.toFixed(1));E.thF.setAttribute("height",(350-top).toFixed(1));
    E.thF.style.fill=tUp>.3?"var(--warm)":"var(--accL)";
    op(E.l1,b*seg(p,.14,.22)*(1-seg(p,.32,.38)));op(E.l2,b*seg(p,.46,.54)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.8,.88));
  };
}
