/* the story scene (BL/BY/DB): ONE engraved elevation of a French SME workshop (a sawtooth-roofed atelier, its office
   block and an empty plot beside it). Each stage of an Adaxtra investment, as the firm describes its process (site visits
   and due diligence, commitments written into the shareholders' agreement, close follow-up from the strategic committee,
   then the next owner), inks one more layer of the same drawing: survey dimensions, the agreed extension in dashed line
   with the signed pact, the extension built and the workshop lit, and finally a lorry loading at the dock. */
function scene(){
  var mob=MOBILE(),i;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="20 166 760 388" aria-hidden="true">';
  var GR=470;
  /* the sawtooth roof line */
  var teeth='M160 330';for(i=0;i<4;i++){var x2=160+i*90;teeth+='L'+(x2+70)+' 270L'+(x2+70)+' 330'+(i<3?'L'+(x2+90)+' 330':'L520 330')}
  g+='<g id="scBase"><rect class="neat" x="20.5" y="166.5" width="759" height="387"/>';
  g+='<path class="sD gr" d="M36 '+GR+'H764"/><path class="sD kb" d="M36 '+(GR+8)+'H764M36 '+(GR+13)+'H764"/>';
  var hz='';for(i=0;i<60;i++){var hx=44+i*12;hz+='M'+hx+' '+(GR+13)+'l-8 8'}g+='<path class="sD ht" d="'+hz+'"/>';
  /* shed walls and roof teeth, north-light glazing, windows, loading door */
  g+='<path class="sD bl" d="M160 '+GR+'V330M520 '+GR+'V330'+teeth+'"/>';
  var gl='';for(i=0;i<4;i++){var gx2=160+i*90+70;gl+='M'+gx2+' 276V328M'+(gx2-4)+' 282V328'}
  g+='<path class="sD kb" d="'+gl+'"/>';
  var wn='';for(i=0;i<5;i++){var wx=270+i*48;wn+='M'+wx+' 360h32v40h-32Z M'+(wx+16)+' 360v40M'+wx+' 380h32'}
  g+='<path class="sD bl" d="'+wn+'"/>';
  g+='<path class="sD bl" d="M178 '+GR+'V372H246V'+GR+'M178 384H246M178 396H246M178 408H246M178 420H246M178 432H246M178 444H246M178 456H246"/>';
  /* brick chimney */
  g+='<path class="sD bl" d="M488 330V226H504V330M484 226H508V218H484Z"/>';
  var bk='';for(var by=232;by<330;by+=8)bk+='M488 '+by+'H504'+(by%16?'M496 '+by+'v8':'');g+='<path class="sD ht" d="'+bk+'"/>';
  /* office block: pitched roof, door, windows, oculus */
  g+='<path class="sD bl" d="M520 '+GR+'V300H650V'+GR+'M512 300L585 256L658 300Z M566 '+GR+'V420H604V'+GR+'M585 420V'+GR+'M538 320h26v34h-26Z M606 320h26v34h-26Z M538 372h18v28h-18Z M614 372h18v28h-18Z M572 286a13 13 0 0 1 26 0"/>';
  g+='<g class="tb"><path class="tbl" d="M540 492h224v48h-224Z M540 516h224"/><text x="550" y="508" class="t">ÉLÉVATION · UNE PME</text><text x="550" y="532" class="t s">ADAXTRA CAPITAL · PARIS</text></g>';
  g+='</g>';
  /* 1 analyse: the site visit, measured */
  g+='<g id="sc1"><path class="dim dr" d="M160 '+(GR-150)+'V'+(GR-200)+'M650 '+(GR-170)+'V'+(GR-224)+'M160 '+(GR-192)+'H650M168 '+(GR-198)+'L160 '+(GR-192)+'L168 '+(GR-186)+'M642 '+(GR-198)+'L650 '+(GR-192)+'L642 '+(GR-186)+'"/>'+
     '<path class="dim dr" d="M676 '+GR+'H692M676 256H692M684 '+GR+'V256"/>'+
     '<circle class="lens dr" cx="330" cy="380" r="46"/><path class="lens dr" d="M363 413L398 448"/>'+
     '<text x="44" y="196" class="a">VISITE DE SITE · DUE DILIGENCE</text></g>';
  /* 2 pacte: the agreed extension in dashed line, and the signed shareholders' agreement */
  g+='<g id="sc2"><path class="plan" d="M650 '+GR+'V340H770V'+GR+'M664 360h24v30h-24Z M700 360h24v30h-24Z M736 360h20v30h-20Z"/>'+
     '<path class="doc dr" d="M44 214H140V330H44Z"/><path class="docl dr" d="M56 232H128M56 246H128M56 260H118M56 274H128M56 288H108M56 312H92"/>'+
     '<circle class="seal" cx="120" cy="310" r="10"/><path class="sig dr" d="M56 322c8-8 12 3 18-3s10-5 16 0"/>'+
     '<text x="44" y="196" class="a">PACTE D’ACTIONNAIRES</text></g>';
  /* 3 suivi: the extension built, the workshop lit and running */
  g+='<g id="sc3"><path class="lit" d="M650 '+GR+'V340H770V'+GR+'Z"/><path class="lit2" d="M664 360h24v30h-24Z M700 360h24v30h-24Z M736 360h20v30h-20Z"/>'+
     '<path class="lit2" d="'+wn+'"/>';
  for(i=0;i<4;i++){var lx=160+i*90+70;g+='<path class="lit2" d="M'+(lx-60)+' 330L'+lx+' 274V330Z"/>'}
  g+='<path class="smoke dr" d="M496 214c-10-14 12-22 2-36s14-24 4-40c-6-10 8-18 14-24"/>'+
     '<text x="44" y="196" class="a">SUIVI · COMITÉ STRATÉGIQUE</text></g>';
  /* 4 cession: the next stage, a lorry loading at the dock and the company's flag flying */
  g+='<g id="sc4"><path class="lit3" d="M36 '+(GR-16)+'V392H132V'+(GR-16)+'Z"/><path class="lit3" d="M132 '+(GR-16)+'V414H156L170 434V'+(GR-16)+'Z"/>'+
     '<path class="trk" d="M140 418h12l10 14h-22Z"/><circle class="whl" cx="62" cy="'+(GR-10)+'" r="10"/><circle class="whl" cx="148" cy="'+(GR-10)+'" r="10"/>'+
     '<path class="lit2" d="M190 '+GR+'v-22h22v22Z M214 '+GR+'v-22h22v22Z M202 448v-20h22v20Z"/>'+
     '<path class="flag" d="M585 256V214"/><path class="flagc" d="M585 214h30l-8 8 8 8h-30Z"/>'+
     '<text x="44" y="196" class="a">UNE NOUVELLE ÉTAPE</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb",svg),g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),g4:$("#sc4",svg),
    d1:dl("#sc1 .dr"),d2:dl("#sc2 .dr"),d3:dl("#sc3 .dr"),t:[$("#sc1 text",svg),$("#sc2 text",svg),$("#sc3 text",svg),$("#sc4 text",svg)],
    doc:$$("#sc2 .doc, #sc2 .docl, #sc2 .seal, #sc2 .sig",svg),plan:$$("#sc2 .plan",svg),lens:$$("#sc1 .lens",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    E.g1.style.opacity=b.toFixed(3);draw(E.d1,b*Math.max(s1,.6));
    E.lens.forEach(function(el){el.style.opacity=(1-s2).toFixed(3)});
    E.g2.style.opacity=(b*(s2>0?1:0)).toFixed(3);draw(E.d2,s2);
    E.doc.forEach(function(el){el.style.opacity=(1-s4).toFixed(3)});
    E.plan.forEach(function(el){el.style.opacity=(s2*(1-s3)).toFixed(3)});
    E.g3.style.opacity=(b*s3).toFixed(3);draw(E.d3,s3);
    E.g4.style.opacity=(b*s4).toFixed(3);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s2).toFixed(3);
    E.t[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.t[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.t[3].style.opacity=I(s4).toFixed(3);
  };
}
