/* The story scene (BL/BY/DB): how lasofoxifene works, drawn as ONE continuous close-up of the estrogen receptor kept on
   screen for all three steps (sermonixpharma.com /breast-cancer and /about: ER+ disease is driven by estrogen; mutations
   of the ER are "a significant cause of the resistance"; lasofoxifene "has demonstrated robust target engagement as an
   antagonist at the breast particularly in the presence of ESR1 mutations"). The receptor's ligand-binding domain sits on
   the DNA; its last helix (helix 12) is the lid over the ligand pocket. Step 1: estrogen enters the pocket, the lid closes,
   a coactivator docks and the growth genes are transcribed. Step 2: aromatase inhibitors take the estrogen away, but an
   ESR1 mutation in the lid keeps the receptor switched on and transcription continues. Step 3: lasofoxifene (sky blue)
   enters the pocket; its side chain pushes the lid out of place, the coactivator lets go and the genes go quiet (the
   antagonist pose seen in the crystal structure PDB 2OUZ). Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
function smxWig(x,y0,y1,a,ph){var d="M"+x+" "+y0,n=Math.round(Math.abs(y1-y0)/3),i;for(i=1;i<=n;i++){var y=y0+(y1-y0)*i/n;d+="L"+(x+a*Math.sin(i*.8+ph)).toFixed(1)+" "+y.toFixed(1)}return d}
function smxHex(cx,cy,r){var d="",i;for(i=0;i<6;i++){var a=Math.PI/6+i*Math.PI/3;d+=(i?"L":"M")+(cx+r*Math.cos(a)).toFixed(1)+" "+(cy+r*Math.sin(a)).toFixed(1)}return d+"Z"}
function smxScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* ---- base: DNA, the receptor body with its pocket, drawn in with the section ---- */
  g+='<g id="scBase">';
  var s1="M40 420",s2="M40 420",rg="";
  for(i=1;i<=136;i++){var x=40+i*5;s1+="L"+x+" "+(420+11*Math.sin(i*.22)).toFixed(1);s2+="L"+x+" "+(420-11*Math.sin(i*.22)).toFixed(1)}
  for(i=4;i<136;i+=7){var xx=40+i*5,dy=11*Math.sin(i*.22);if(Math.abs(dy)>3)rg+="M"+xx+" "+(420-Math.abs(dy)+2).toFixed(1)+"V"+(420+Math.abs(dy)-2).toFixed(1)}
  g+='<path class="dna sD" d="'+s1+'"/><path class="dna sD" d="'+s2+'"/><path class="rung sD" d="'+rg+'"/>';
  /* the receptor: a rounded ligand-binding domain with the pocket opening at its upper right, on a DNA-binding foot */
  g+='<path class="er sD" d="M246 392H214V374C150 366 106 318 106 260C106 196 158 150 226 146C262 144 290 150 312 164C300 176 296 194 302 212C308 232 330 244 352 240C366 238 378 232 388 222C394 236 396 250 396 264C396 322 352 368 290 374V392Z"/>';
  g+='<path class="pk sD" d="M312 164C300 176 296 194 302 212C308 232 330 244 352 240C366 238 378 232 388 222"/>';
  g+='<text class="t" x="24" y="16">ESTROGEN RECEPTOR · ON THE DNA</text>';
  g+='<text class="t" x="150" y="270">RECEPTOR</text>';
  if(!mob){g+='<text class="t" x="40" y="462">DNA</text>';g+='<text class="t" x="470" y="462">GROWTH GENES</text>'}
  g+='</g>';
  /* ---- the growth genes on the DNA ---- */
  g+='<rect id="gGn" class="gn" x="470" y="412" width="96" height="16"/>';
  /* ---- transcripts rising from the genes ---- */
  g+='<g id="mTx">'+[488,512,536].map(function(x,k){return '<path class="mr" d="'+smxWig(x,404,(k==1?300:318),3,k*1.4)+'"/>'}).join("")+'</g>';
  /* ---- helix 12, the lid over the pocket (hinged at its right end, 388 222) ---- */
  g+='<g id="h12"><rect class="lid" x="-100" y="-17" width="100" height="16"/><circle id="mut" class="mut" cx="-50" cy="-9" r="6"/></g>';
  /* ---- the coactivator, which docks on the closed lid ---- */
  g+='<g id="coA"><path class="co" transform="rotate(-53)" d="M0 -30C22 -30 38 -16 38 0C38 18 22 30 0 30C-14 30 -24 22 -30 12H-14C-8 12 -6 6 -6 0C-6 -6 -8 -12 -14 -12H-30C-24 -22 -14 -30 0 -30Z"/><text id="coL" class="t" x="44" y="-26">COACTIVATOR</text></g>';
  /* ---- estrogen (two rings) and lasofoxifene (three rings and its side chain) ---- */
  g+='<g id="mE2"><path class="e2" d="'+smxHex(-9,0,10)+'"/><path class="e2" d="'+smxHex(8.3,-10,10)+'"/></g>';
  g+='<g id="mLas"><path class="las" d="'+smxHex(-12,4,10)+'"/><path class="las" d="'+smxHex(5.3,-6,10)+'"/><path class="las" d="'+smxHex(-12,-16,9)+'"/><path class="lasc" d="M14 -10L30 -22L44 -18L58 -30"/><circle class="lasn" cx="62" cy="-33" r="6"/></g>';
  /* ---- step captions, in the clear band under the DNA ---- */
  g+='<g id="lb1"><text class="a" x="24" y="506">ESTROGEN SWITCHES THE RECEPTOR ON</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="506">ESR1 MUTATION: ON WITHOUT ESTROGEN</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="506">LASOFOXIFENE HOLDS IT OFF</text></g>';
  return g+'</svg>';
}
function scene(){return smxScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),gn:$("#gGn",svg),h12:$("#h12",svg),mut:$("#mut",svg),co:$("#coA",svg),coL:$("#coL",svg),
    e2:$("#mE2",svg),las:$("#mLas",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var tx=$$("#mTx .mr",svg).map(function(p){var L=p.getTotalLength();p.style.strokeDasharray=L+" "+L;return [p,L]});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function tf(el,x,y,r){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")"+(r?" rotate("+r.toFixed(1)+")":""))}
  function mix(a,b,t){return a+(b-a)*t}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var inn=seg(p,0,.1);
    /* step 1: estrogen flies in from the upper right and settles in the pocket; the lid closes over it */
    var e2in=seg(p,.04,.2),e2out=seg(p,.36,.48);
    tf(E.e2,mix(640,338,e2in)+e2out*260,mix(70,208,e2in)-e2out*150,mix(-30,0,e2in));op(E.e2,b*seg(p,.03,.07)*(1-e2out));
    /* the lid: open (hinged up) before estrogen, closed while estrogen or the mutation holds it, pushed out by lasofoxifene */
    var close=seg(p,.14,.24),lasIn=seg(p,.66,.8),push=seg(p,.74,.86);
    var ang=mix(95,37,close)+push*178;
    tf(E.h12,388,222,ang);op(E.h12,b*inn);
    var mut=seg(p,.4,.5);E.mut.style.opacity=mut.toFixed(3);E.mut.setAttribute("r",(6*(.6+.4*mut)).toFixed(1));
    /* the coactivator docks above the closed lid, and leaves when the lid is pushed out */
    var coIn=seg(p,.18,.28),coOut=seg(p,.78,.9);
    tf(E.co,mix(580,378,coIn)+coOut*170,mix(60,152,coIn)-coOut*80,0);op(E.co,b*seg(p,.16,.22)*(1-coOut));op(E.coL,1-seg(p,.58,.64));
    /* transcription: on with estrogen, still on in step 2 (mutation, no estrogen), off in step 3 */
    var on=seg(p,.22,.32)*(1-seg(p,.8,.9));
    E.gn.style.fillOpacity=(.1+.7*on).toFixed(3);op(E.gn,b*inn);
    tx.forEach(function(a,k){var v=Math.min(1,Math.max(0,on*1.5-k*.25));a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1);op(a[0],b*(v>0?1:0))});
    /* step 3: lasofoxifene comes in from the upper right into the pocket */
    tf(E.las,mix(700,336,lasIn),mix(40,212,lasIn),mix(-20,0,lasIn));op(E.las,b*seg(p,.64,.69));
    op(E.l1,b*seg(p,.08,.16)*(1-seg(p,.3,.34)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.62,.66)));op(E.l3,b*seg(p,.76,.84));
  };
}
