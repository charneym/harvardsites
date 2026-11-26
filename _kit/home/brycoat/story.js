/* The story scene (BL/BY/DB): BryCoat's PVD process (brycoat.com > Resources > PVD Vacuum Coating Process), drawn as ONE
   fine-line elevation of a cathodic-arc coating chamber kept on screen for all four steps.
   Step 1 (Clean): parts cleaned to an oxide-free surface and mounted on fixtures, loaded into the chamber.
   Step 2 (Vacuum): the air pumped out to high vacuum, parts pre-heated, ion-cleaned.
   Step 3 (Arc): nitrogen and argon flow in; a vacuum arc flash-evaporates and ionises titanium; a bias voltage on the parts
     accelerates the plasma ions to their surface.
   Step 4 (Coat): TiN forms and bonds into the surface (the parts turn gold); every batch tested, witness samples kept. */
var SCW=760,SCH=520;
function bcScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="110 0 590 520" aria-hidden="true">';
  /* the chamber (always): body, door flange, feet */
  g+='<path class="ch sD" d="M150 112H610V440H150Z"/><path class="ch2 sD" d="M162 124H598V428H162Z"/><path class="ch sD" d="M190 440V462M570 440V462M170 462H590"/>';
  g+='<text class="t" x="170" y="'+(mob?150:146)+'">CHAMBER</text>';
  /* step 1: the fixture tree and six parts hung on it (steel) */
  g+='<g id="bcFix"><path class="fx fD" d="M380 150V420M340 412H420"/>';
  var parts='',gold='';
  [[200],[280],[360]].forEach(function(r,j){var y=r[0];g+='<path class="fx fD" d="M318 '+y+'H442"/>';
    [[-1,318],[1,442]].forEach(function(s){var x=s[1];
      /* a turned bushing hung on the arm: a short cylinder (side walls, top ellipse, bottom arc) */
      var d='M'+(x-11)+' '+(y+12)+'V'+(y+46)+'A11 4 0 0 0 '+(x+11)+' '+(y+46)+'V'+(y+12)+'A11 4 0 0 0 '+(x-11)+' '+(y+12)+'A11 4 0 0 0 '+(x+11)+' '+(y+12)+'M'+x+' '+y+'V'+(y+8);
      parts+='<path class="pt" d="'+d+'"/>';gold+='<path class="pg" d="'+d+'"/>'})});
  g+='</g><g id="bcParts">'+parts+'</g><g id="bcGold">'+gold+'</g>';
  /* step 2: the pump line and pump, the air leaving; heaters on the back wall glowing */
  g+='<g id="bcPump"><path class="pp pD" d="M520 440V486H650V452"/><path class="pp pD" d="M630 410H690V452H630Z"/><path class="pp pD" d="M646 410V398H674V410"/></g>';
  g+='<g id="bcAir">';for(i=0;i<4;i++){var ax=548+i*26;g+='<path class="air" d="M'+ax+' 474H'+(ax+12)+'M'+(ax+7)+' 470L'+(ax+12)+' 474L'+(ax+7)+' 478"/>'}g+='</g>';
  var ht='';[0,1].forEach(function(k){var hx=k?488:252,h='M'+hx+' 176';for(i=0;i<9;i++){h+='L'+(hx+(i%2?8:-8))+' '+(186+i*22)}ht+='<path class="ht hD" d="'+h+'"/>'});
  g+='<g id="bcHeat">'+ht+'</g>';
  /* step 3: arc cathodes on the side walls, gas inlet on top, the plasma (ions) streaming to the parts */
  g+='<g id="bcCath"><path class="ca cD" d="M164 214H186V346H164Z"/><path class="ca cD" d="M574 214H596V346H574Z"/><path class="ca cD" d="M150 280H120M610 280H640"/>'+
     '<path class="ca cD" d="M380 112V82H452"/></g>';
  var io='';for(i=0;i<14;i++){io+='<circle class="ion" id="bcI'+i+'" r="2.6" cx="0" cy="0"/>'}
  g+='<g id="bcIons">'+io+'</g>';
  g+='<g id="bcArc"><path class="arc" d="M188 250L196 256L190 262L198 270M188 300L197 306L190 312L199 318"/><path class="arc" d="M572 250L564 256L570 262L562 270M572 300L563 306L570 312L561 318"/></g>';
  /* step 4: a witness coupon on the fixture base, the batch test tick */
  g+='<g id="bcWit"><path class="wt" d="M470 396H490V412H470Z"/><path class="wk" d="M628 146L636 154L652 136"/></g>';
  /* labels, per step, in the band above the chamber: each >= 8px clear of every stroke (DR3) */
  function L(id,cl,a,b){return '<g id="'+id+'"><text class="t '+cl+'" x="150" y="'+(mob?34:30)+'">'+a+'</text><text class="t" x="150" y="'+(mob?64:54)+'">'+b+'</text></g>'}
  g+=mob?L("bcL1","s1","CLEANED, FIXTURED","OXIDE-FREE SURFACE"):L("bcL1","s1","MULTI-STAGE CLEAN TO AN OXIDE-FREE SURFACE","PARTS MOUNTED ON FIXTURES AND LOADED");
  g+=mob?L("bcL2","s2","HIGH VACUUM","PRE-HEAT, ION CLEAN"):L("bcL2","s2","AIR PUMPED OUT TO A HIGH VACUUM","PRE-HEATED TO PROCESS TEMPERATURE, ION-CLEANED");
  g+=mob?L("bcL3","s1","VACUUM ARC · TI","N₂ + AR PLASMA"):L("bcL3","s1","VACUUM ARC FLASH-EVAPORATES TITANIUM","IONS OF TI, N AND AR ACCELERATED TO THE PARTS");
  g+=mob?L("bcL4","s1","TIN, BONDED","EVERY BATCH TESTED"):L("bcL4","s1","DENSE, HARD TIN BONDED INTO THE SURFACE","EVERY BATCH TESTED, WITNESS SAMPLES KEPT");
  /* step captions */
  g+='<g id="lb1"><text class="a" x="150" y="504">1 · CLEAN</text></g>';
  g+='<g id="lb2"><text class="a" x="150" y="504">2 · VACUUM</text></g>';
  g+='<g id="lb3"><text class="a" x="150" y="504">3 · ARC</text></g>';
  g+='<g id="lb4"><text class="a" x="150" y="504">4 · COAT</text></g>';
  return g+'</svg>';
}
function scene(){return bcScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),fix:dl(".fD"),parts:$("#bcParts",svg),gold:$("#bcGold",svg),pump:dl(".pD"),air:$("#bcAir",svg),airs:$$("#bcAir path",svg),heat:dl(".hD"),heatG:$("#bcHeat",svg),
    cath:dl(".cD"),arc:$("#bcArc",svg),ions:$$(".ion",svg),wit:$("#bcWit",svg),
    L1:$("#bcL1",svg),L2:$("#bcL2",svg),L3:$("#bcL3",svg),L4:$("#bcL4",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),tt:[].slice.call(svg.children).filter(function(n){return n.tagName==="text"})};
  /* ion paths: from a cathode face to a part on that side */
  var TG=[[318,234],[318,314],[318,394],[442,234],[442,314],[442,394]];
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.tt.forEach(function(t){op(t,b)})}
    /* step 1: the fixture draws in, the parts appear on it */
    draw(E.fix,b*seg(p,.02,.14));
    op(E.parts,b*seg(p,.08,.16));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2: pump line, air leaving, heaters warming */
    draw(E.pump,b*seg(p,.27,.36));
    op(E.air,b*seg(p,.32,.38)*(1-seg(p,.5,.55)));
    var ap=(p*9)%1;E.airs.forEach(function(a){a.setAttribute("transform","translate("+(ap*26).toFixed(1)+" 0)")});
    draw(E.heat,b*seg(p,.3,.4));
    op(E.heatG,b*(.35+.65*seg(p,.36,.44))*(1-.5*seg(p,.75,.82)));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3: cathodes, arcs, the ion stream */
    draw(E.cath,b*seg(p,.52,.6));
    op(E.arc,b*seg(p,.58,.62)*(1-seg(p,.86,.9)));
    var on=b*seg(p,.58,.64)*(1-seg(p,.86,.92));
    E.ions.forEach(function(c,i){var t=TG[i%6],left=t[0]<380,sx=left?190:570,sy=232+((i*37)%110);
      var f=((p*7+i/14)%1);var x=sx+(t[0]+(left?-12:12)-sx)*f,y=sy+(t[1]-sy)*f;
      c.setAttribute("cx",x.toFixed(1));c.setAttribute("cy",y.toFixed(1));op(c,on*(f<.1?f/.1:f>.9?(1-f)/.1:1))});
    op(E.L3,b*seg(p,.56,.62)*(1-seg(p,.72,.75)));
    /* step 4: the parts take their gold TiN coat; the witness coupon and the batch tick */
    op(E.gold,b*seg(p,.7,.86));
    op(E.wit,b*seg(p,.84,.92));
    op(E.L4,b*seg(p,.79,.85));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}
