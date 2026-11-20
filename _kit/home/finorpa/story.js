/* the story scene (BL/BY/DB): ONE engraved elevation of a northern French workshop with the region's saw-tooth "shed"
   roof, drawn as it grows through the life stages Finorpa finances. Création: a single brick bay, its door and first lit
   window. Développement: the extension, first as a dashed plan and then built, three more bays and a chimney.
   Transmission: an office block where the name plaque is handed on, keys in the door. Durée: the glazing lit across every
   bay, a grown tree, a lorry at the dock. */
function scene(){
  var mob=MOBILE(),f=function(n){return n.toFixed(1)};
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  var GR=468,WH=168,TW=108,TH=72,X0=72;
  /* one shed bay: wall, then the saw-tooth: a slope rising to the right and a vertical glazed face */
  function bay(x){var y=GR-WH;return 'M'+x+' '+GR+'V'+y+'L'+(x+TW)+' '+(y-TH)+'V'+y+'M'+(x+TW)+' '+y+'V'+GR}
  function glaze(x){var y=GR-WH,s='';for(var k=1;k<4;k++){s+='M'+(x+TW-2)+' '+f(y-TH*k/4)+'H'+(x+TW-14)}return 'M'+(x+TW-14)+' '+(y-TH+7)+'V'+y+s}
  function bricks(x0,x1,y0,y1){var s='';for(var y=y0+8;y<y1;y+=8)s+='M'+x0+' '+y+'H'+x1;return s}
  function win(x,y,ww,hh){return 'M'+x+' '+y+'h'+ww+'v'+hh+'h-'+ww+'Z M'+(x+ww/2)+' '+y+'v'+hh+'M'+x+' '+(y+hh/2)+'h'+ww}
  /* base: neatline, ground, the first bay, a title block */
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="sD gr" d="M24 '+GR+'H776"/><path class="sD kb" d="M24 '+(GR+8)+'H776M24 '+(GR+13)+'H776"/>';
  var hz='';for(var i=0;i<62;i++){var hx=30+i*12;hz+='M'+hx+' '+(GR+13)+'l-8 8'}g+='<path class="sD ht" d="'+hz+'"/>';
  g+='<path class="sD bl" d="'+bay(X0)+'"/>';
  g+='@@GHOST@@';
  g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">ÉLÉVATION · UNE ENTREPRISE</text><text x="558" y="538" class="t s">HAUTS-DE-FRANCE</text></g>';
  g+='</g>';
  /* 1 création: brick coursing, the door, the first lit window, a young tree */
  g+='<g id="sc1"><path class="brk" d="'+bricks(X0,X0+TW,GR-WH,GR)+'"/>'+
     '<path class="door" d="M'+(X0+18)+' '+GR+'V'+(GR-58)+'H'+(X0+50)+'V'+GR+'Z"/>'+
     '<path class="lit" d="'+win(X0+60,GR-118,30,36)+'"/><path class="lbl" d="'+glaze(X0)+'"/>'+
     '<path class="tree" d="M38 '+GR+'V'+(GR-34)+'M38 '+(GR-22)+'l-8 -8M38 '+(GR-28)+'l7 -7"/><circle class="crown" cx="38" cy="'+(GR-42)+'" r="12"/>'+
     '<text x="44" y="64" class="a">CRÉATION</text></g>';
  /* 2 développement: the extension drawn as a plan, then built: three bays and a chimney */
  var ext='';for(i=1;i<4;i++)ext+=bay(X0+TW*i);
  g+='<g id="sc2"><path class="plan dr" d="'+ext+'"/>'+
     '<path class="bl2 dr" d="'+ext+'"/><path class="brk dr" d="'+bricks(X0+TW,X0+TW*4,GR-WH,GR)+'"/>'+
     '<path class="bl2 dr" d="M'+(X0+TW*2+40)+' '+(GR-WH-TH*.6)+'V'+(GR-WH-200)+'H'+(X0+TW*2+62)+'V'+(GR-WH-TH*.2)+'M'+(X0+TW*2+38)+' '+(GR-WH-200)+'H'+(X0+TW*2+64)+'"/>'+
     '<path class="dim dr" d="M'+(X0+TW)+' '+(GR+30)+'H'+(X0+TW*4)+'M'+(X0+TW)+' '+(GR+24)+'V'+(GR+36)+'M'+(X0+TW*4)+' '+(GR+24)+'V'+(GR+36)+'"/>'+
     '<text x="44" y="64" class="a">DÉVELOPPEMENT</text></g>';
  /* 3 transmission: the office block and its plaque, keys handed over at the door */
  var OX=X0+TW*4+10,OW=140,OH=214;
  g+='<g id="sc3"><path class="bl2 dr" d="M'+OX+' '+GR+'V'+(GR-OH)+'H'+(OX+OW)+'V'+GR+'M'+(OX-6)+' '+(GR-OH)+'H'+(OX+OW+6)+'"/>'+
     '<path class="bl2 dr" d="'+win(OX+16,GR-190,34,34)+win(OX+90,GR-190,34,34)+win(OX+16,GR-136,34,34)+win(OX+90,GR-136,34,34)+'"/>'+
     '<path class="bl2 dr" d="M'+(OX+52)+' '+GR+'V'+(GR-66)+'H'+(OX+88)+'V'+GR+'"/>'+
     '<path class="sign" d="M'+(OX+30)+' '+(GR-86)+'H'+(OX+120)+'V'+(GR-70)+'H'+(OX+30)+'Z"/>'+
     '<path class="key dr" d="M'+(OX+170)+' '+(GR-40)+'m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0M'+(OX+179)+' '+(GR-40)+'H'+(OX+206)+'M'+(OX+198)+' '+(GR-40)+'v7M'+(OX+204)+' '+(GR-40)+'v5"/>'+
     '<text x="44" y="64" class="a">TRANSMISSION</text></g>';
  /* 4 durée: every bay's glazing lit, the office windows lit, a grown tree, a lorry at the dock, smoke */
  var gl='';for(i=0;i<4;i++)gl+=glaze(X0+TW*i);
  var lw='';for(i=0;i<4;i++)lw+=win(X0+TW*i+60,GR-118,30,36);
  g+='<g id="sc4"><path class="lit2" d="'+gl+'"/><path class="lit" d="'+lw+win(OX+16,GR-190,34,34)+win(OX+90,GR-190,34,34)+win(OX+16,GR-136,34,34)+win(OX+90,GR-136,34,34)+'"/>'+
     '<path class="tree" d="M38 '+GR+'V'+(GR-90)+'M38 '+(GR-50)+'l-14 -14M38 '+(GR-66)+'l12 -12"/><circle class="crown2" cx="38" cy="'+(GR-112)+'" r="26"/>'+
     '<path class="bl3" d="M'+(OX+OW+18)+' '+(GR-8)+'V'+(GR-58)+'H'+(OX+OW+90)+'V'+(GR-8)+'M'+(OX+OW+90)+' '+(GR-40)+'H'+(OX+OW+110)+'L'+(OX+OW+122)+' '+(GR-26)+'V'+(GR-8)+'"/>'+
     '<circle class="bl3" cx="'+(OX+OW+36)+'" cy="'+(GR-6)+'" r="7"/><circle class="bl3" cx="'+(OX+OW+104)+'" cy="'+(GR-6)+'" r="7"/>'+
     '<path class="smoke" d="M'+(X0+TW*2+51)+' '+(GR-WH-206)+'c-10 -14 8 -22 -2 -38s10 -22 4 -40"/>'+
     '<text x="44" y="64" class="a">DANS LA DURÉE</text></g>';
  var gh='M'+(X0+TW*2+40)+' '+(GR-WH-TH*.6)+'V'+(GR-WH-200)+'H'+(X0+TW*2+62)+'V'+(GR-WH-TH*.2)+'M'+OX+' '+GR+'V'+(GR-OH)+'H'+(OX+OW)+'V'+GR+'M'+(OX+OW+18)+' '+(GR-8)+'V'+(GR-58)+'H'+(OX+OW+90)+'V'+(GR-8);
  g=g.replace('@@GHOST@@','<path class="gh" d="'+ext+gh+'"/><circle class="gh" cx="38" cy="'+(GR-112)+'" r="26"/>');
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .gh",svg),g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),g4:$("#sc4",svg),
    plan:$("#sc2 .plan",svg),d2:dl("#sc2 .dr:not(.plan)"),d3:dl("#sc3 .dr"),t:[$("#sc1 text",svg),$("#sc2 text",svg),$("#sc3 text",svg),$("#sc4 text",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    E.g1.style.opacity=(b*Math.max(s1,.55)).toFixed(3);
    E.g2.style.opacity=(b*(s2>0?1:0)).toFixed(3);E.plan.style.opacity=(1-s2).toFixed(3);draw(E.d2,s2);
    E.g3.style.opacity=(b*(s3>0?1:0)).toFixed(3);draw(E.d3,s3);
    E.g4.style.opacity=(b*s4).toFixed(3);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s2).toFixed(3);
    E.t[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.t[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.t[3].style.opacity=I(s4).toFixed(3);
  };
}
