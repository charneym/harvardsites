/* the story scene (DB): ONE engraved cross-section of an immune cell's edge, the mechanism behind every Vivreon programme.
   Step 1 a ligand docks on a receptor and the ER calcium store drains; step 2 STIM1 sensors in the ER membrane reach up
   to the plasma membrane under the Orai1 channel; step 3 the pore opens, Ca2+ streams in and NFAT / NF-kB carry the
   signal toward the nucleus; step 4 a small molecule seats in the pore, the stream stops and the arrow dims. */
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  var MT=176,MB=204,i,x;
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  /* the plasma membrane: a lipid bilayer, heads as small circles, tails as paired strokes */
  var heads='',tails='';
  for(x=26;x<=774;x+=12){if(x>430&&x<510)continue;heads+='<circle class="hd" cx="'+x+'" cy="'+MT+'" r="4"/><circle class="hd" cx="'+x+'" cy="'+MB+'" r="4"/>';tails+='M'+(x-1.5)+' '+(MT+4)+'V'+(MT+12)+'M'+(x+1.5)+' '+(MT+4)+'V'+(MT+12)+'M'+(x-1.5)+' '+(MB-4)+'V'+(MB-12)+'M'+(x+1.5)+' '+(MB-4)+'V'+(MB-12)}
  g+='<g class="mem">'+heads+'</g><path class="sD tl" d="'+tails+'"/>';
  g+='<text x="26" y="112" class="t">OUTSIDE THE CELL</text><text x="26" y="240" class="t">CYTOPLASM</text>';
  /* the receptor (left), spanning the membrane */
  g+='<path class="sD gr" d="M150 '+(MB+22)+'V'+(MT-34)+'M150 '+(MT-34)+'L132 '+(MT-62)+'M150 '+(MT-34)+'L168 '+(MT-62)+'M141 '+(MT-6)+'H159V'+(MB+6)+'H141Z"/>';
  g+='<text x="176" y="'+(MT-46)+'" class="t">RECEPTOR</text>';
  /* Orai1: the CRAC channel pore, two halves of a hexameric channel seen in section */
  g+='<path class="sD orai" d="M432 '+(MT-18)+'H462V'+(MB+18)+'H432Z M478 '+(MT-18)+'H508V'+(MB+18)+'H478Z"/>';
  g+='<path class="sD ht" d="M436 '+(MT-10)+'l22 10M436 '+(MT+4)+'l22 10M436 '+(MT+18)+'l22 10M482 '+(MT-10)+'l22 10M482 '+(MT+4)+'l22 10M482 '+(MT+18)+'l22 10"/>';
  g+='<text x="774" y="'+(MT-28)+'" class="w" text-anchor="end">ORAI1 · CRAC CHANNEL</text>';
  /* the endoplasmic reticulum: the calcium store, a long sac in the cytoplasm */
  g+='<path class="sD er" d="M60 404C140 372 260 384 380 396C500 408 620 380 740 398C760 402 762 446 740 452C620 470 500 444 380 456C260 468 140 462 60 450C40 446 40 408 60 404Z"/>';
  g+='<text x="64" y="492" class="t">ENDOPLASMIC RETICULUM · CALCIUM STORE</text>';
  /* nucleus edge (right), where the signal ends */
  g+='<path class="sD er" d="M800 240C744 250 712 290 712 330C712 350 718 362 728 372"/><text x="784" y="232" class="t" text-anchor="end">NUCLEUS</text>';
  g+='<path class="sD lum" d="M760 268l24 -10M748 290l36 -14M740 312l44 -16M736 334l48 -18M738 356l46 -16"/>';
  var stp='';for(i=0;i<260;i++){var px=30+((i*157)%740),py=232+((i*89)%150);if(px>690&&py<380)continue;if(px>380&&px<580)continue;stp+='M'+px+' '+py+'h1.6'}
  g+='<path class="stp" d="'+stp+'"/>';
  var lum='';for(x=80;x<730;x+=16){var yy=416+6*Math.sin(x/60);lum+='M'+x+' '+(yy+4)+'l10 18'}
  g+='<path class="sD lum" d="'+lum+'"/>';
  var stub='';[120,200,280,340,600,660,720].forEach(function(sx){var sy=sx<380?392-((sx-120)/260)*0:390;stub+='M'+sx+' '+(sx<380?(398-(sx-60)*.04):(400))+'v-14'});
  g+='<path class="sD stub" d="'+stub+'"/>';
  g+='<g class="tb"><text x="26" y="540" class="t">CRAC CHANNEL · SCHEMATIC</text></g>';
  g+='</g>';
  /* calcium inside the store */
  var st='';for(i=0;i<34;i++){var sx=90+((i*61)%640),sy=414+((i*23)%30);st+='<circle cx="'+sx+'" cy="'+sy+'" r="3.4"/>'}
  g+='<g id="store" class="ca">'+st+'</g>';
  /* step 1: the ligand that docks on the receptor */
  g+='<g id="lig"><circle class="lg" cx="150" cy="'+(MT-72)+'" r="9"/></g>';
  g+='<path id="rel" class="dim" d="M180 396C200 320 230 260 300 236"/>';
  /* step 2: STIM1 sensors reach from the ER to the membrane beneath the pore */
  g+='<g id="stim"><path class="stm dr" d="M440 396C436 330 446 262 450 '+(MB+22)+'"/><path class="stm dr" d="M500 398C504 330 494 262 490 '+(MB+22)+'"/><path class="stm dr" d="M400 392C394 340 410 270 436 '+(MB+26)+'"/><path class="stm dr" d="M540 394C546 340 530 270 504 '+(MB+26)+'"/></g>';
  g+='<text id="stimT" x="560" y="330" class="w">STIM1</text>';
  /* step 3: calcium ions streaming through the pore, and the signal to the nucleus */
  var io='';for(i=0;i<9;i++)io+='<circle class="ion" r="4" cx="470" cy="100"/>';
  g+='<g id="ions" class="ca">'+io+'</g>';
  g+='<path id="nfat" class="sig dr" d="M486 262C560 262 640 290 700 330"/><path id="nfatH" class="sigh" d="M700 330l-14 -2l8 -10Z"/>';
  g+='<text id="nfatT" x="560" y="254" class="a">NFAT · NF-κB</text>';
  /* step 4: the small molecule, an engraved ring system, seats in the pore */
  g+='<g id="mol" transform="translate(470 70)"><path class="mo" d="M0 -16L13.9 -8V8L0 16L-13.9 8V-8Z M13.9 -8L27.7 -16L41.6 -8V8L27.7 16L13.9 8 M-13.9 8L-25 16V30 M41.6 -8L52 -15"/><circle class="mo" cx="0" cy="0" r="6"/></g>';
  /* step captions */
  g+='<text id="cap1" x="26" y="52" class="a">A SIGNAL EMPTIES THE STORE</text>';
  g+='<text id="cap2" x="26" y="52" class="a">STIM1 REACHES THE MEMBRANE</text>';
  g+='<text id="cap3" x="26" y="52" class="a">CRAC OPENS · CALCIUM FLOODS IN</text>';
  g+='<text id="cap4" x="26" y="52" class="a">A VIVREON MOLECULE BLOCKS THE PORE</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var Lg=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=Lg+" "+Lg;return [p,Lg]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase text, #scBase .mem",svg),
    store:$$("#store circle",svg),lig:$("#lig",svg),rel:$("#rel",svg),stim:dl("#stim .dr"),stimT:$("#stimT",svg),
    ions:$$("#ions circle",svg),nfat:dl("#nfat"),nfatH:$("#nfatH",svg),nfatT:$("#nfatT",svg),mol:$("#mol",svg),
    cap:[$("#cap1",svg),$("#cap2",svg),$("#cap3",svg),$("#cap4",svg)]};
  var relL=E.rel.getTotalLength();E.rel.style.strokeDasharray="5 6";
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    /* step 1: the ligand drops onto the receptor; the store's calcium drains out toward the cytoplasm */
    E.lig.setAttribute("transform","translate(0 "+(-40*(1-s1)).toFixed(1)+")");E.lig.style.opacity=(b*(.25+.75*s1)).toFixed(3);
    var drain=Math.min(1,s1*1.4);E.store.forEach(function(c,k){var gone=(k%3===0)?drain:(k%3===1?drain*.8:drain*.5);c.style.opacity=(b*(1-gone)).toFixed(3)});
    E.rel.style.opacity=(b*s1*(1-s2*.7)).toFixed(3);
    /* step 2: the STIM1 strands draw up from the ER to the membrane */
    draw(E.stim,s2);E.stimT.style.opacity=(b*s2).toFixed(3);
    /* step 3: ions stream down through the pore (phase follows the scroll); the signal arrow draws to the nucleus */
    var flow=s3*(1-s4),ph=(p*24)%1;
    E.ions.forEach(function(c,k){var q=(k/9+ph)%1,y=110+q*170;c.setAttribute("cy",y.toFixed(1));c.setAttribute("cx",(470+Math.sin(q*9+k)*3).toFixed(1));
      c.style.opacity=(b*flow*Math.sin(Math.PI*q)).toFixed(3)});
    draw(E.nfat,s3);var na=b*(s3>.98?1:0)*(1-.7*s4);E.nfatH.style.opacity=na.toFixed(3);E.nfatT.style.opacity=(b*s3*(1-.6*s4)).toFixed(3);
    E.nfat[0][0].style.opacity=(1-.65*s4).toFixed(3);
    /* step 4: the molecule descends into the pore and stays */
    E.mol.setAttribute("transform","translate(470 "+(70+120*s4).toFixed(1)+")");E.mol.style.opacity=(b*s4).toFixed(3);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.cap[0].style.opacity=(b*O(s2)).toFixed(3);E.cap[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.cap[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.cap[3].style.opacity=I(s4).toFixed(3);
  };
}
