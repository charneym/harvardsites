/* the story scene: PAR2, a pain receptor on sensory neurons, drawn in fine line like a textbook plate (a cross-section of the
   neuron's membrane). Step 1 a protease cuts the receptor's N-terminus and the exposed tethered peptide folds into the receptor,
   switching it on for good; step 2 a G protein docks under it and pain signals pulse into the neuron; step 3 a conventional
   antagonist cannot compete off the tethered agonist at the outer site; step 4 an allosteric uncoupler takes the intracellular
   G protein-binding site, the G protein lets go and the signal stops. Facts: NIH STTR abstract 1R41GM165099-01A1. */
var UC_X=[322,348,374,400,426,452,478],UC_T=176,UC_B=318,UC_GC=["#fee391","#fed39a","#fecaa0","#faaedd","#d89bf6","#a784ee","#9273e4"];
function ucLipids(){var s="",x;
  for(x=30;x<=772;x+=17){if(x>292&&x<508)continue;
    s+='<circle class="uc-lh" cx="'+x+'" cy="176" r="6.5"/><path class="uc-lt" d="M'+(x-2.5)+' 183L'+(x-3.5)+' 214L'+(x-1.5)+' 238M'+(x+2.5)+' 183L'+(x+2)+' 210L'+(x+3.5)+' 238"/>';
    s+='<circle class="uc-lh" cx="'+x+'" cy="318" r="6.5"/><path class="uc-lt" d="M'+(x-2.5)+' 311L'+(x-1.5)+' 282L'+(x-3)+' 256M'+(x+2.5)+' 311L'+(x+3.5)+' 286L'+(x+2)+' 256"/>'}
  return s}
function ucHelices(){var s="";UC_X.forEach(function(x,i){var t=UC_T-(i%2?4:10),b=UC_B+(i%2?10:4);
  s+='<rect class="uc-hx" x="'+(x-10)+'" y="'+t+'" width="20" height="'+(b-t)+'" rx="10" style="stroke:'+UC_GC[i]+'"/>';
  for(var y=t+14;y<b-8;y+=13)s+='<path class="uc-hc" d="M'+(x-9)+' '+y+'Q'+x+' '+(y+7)+' '+(x+9)+' '+(y-2)+'" style="stroke:'+UC_GC[i]+'"/>';
  if(i<6){var x2=UC_X[i+1],up=i%2===1;s+=up?'<path class="uc-lp" d="M'+x+' '+(UC_T-4)+'C'+x+' '+(UC_T-26)+' '+x2+' '+(UC_T-26)+' '+x2+' '+(UC_T-10)+'" style="stroke:'+UC_GC[i]+'"/>':'<path class="uc-lp" d="M'+x+' '+(UC_B+4)+'C'+x+' '+(UC_B+24)+' '+x2+' '+(UC_B+24)+' '+x2+' '+(UC_B+10)+'" style="stroke:'+UC_GC[i]+'"/>'}});
  /* helix 8 along the inner face */
  s+='<path class="uc-lp" d="M478 332C488 346 500 348 520 346L560 344" style="stroke:#9273e4"/>';
  return s}
function ucMol(cls){/* a small heterocycle: a six-ring fused to a five-ring */
  return '<g class="'+cls+'"><path class="uc-mb" d="M-14 -8L-6 -14L4 -10L5 0L-4 6L-14 2Z M5 0L4 -10L13 -12L18 -4L12 4Z M18 -4L27 -6"/><circle class="uc-ma" cx="-6" cy="-14" r="3"/><circle class="uc-ma n" cx="-4" cy="6" r="3.4"/><circle class="uc-ma s" cx="13" cy="-12" r="3.6"/><circle class="uc-ma o" cx="27" cy="-6" r="3.4"/></g>'}
function scene(){
  var mob=MOBILE();
  var caps=["A PROTEASE CUTS THE RECEPTOR","THE G PROTEIN CARRIES THE PAIN SIGNAL","THE OUTER SITE IS ALREADY TAKEN","THE UNCOUPLER SHUTS THE SIGNAL OFF"];
  return '<svg viewBox="20 20 760 510" aria-hidden="true">'+
   '<defs><radialGradient id="ucGl"><stop offset="0" stop-color="#fee391" stop-opacity=".55"/><stop offset="1" stop-color="#fee391" stop-opacity="0"/></radialGradient></defs>'+
   '<text x="36" y="44">OUTSIDE THE NEURON</text>'+
   '<text x="36" y="'+(mob?248:252)+'">MEMBRANE</text>'+
   '<text x="36" y="'+(mob?474:466)+'">INSIDE THE NEURON</text>'+
   ucLipids()+
   '<g id="ucR">'+ucHelices()+'</g>'+
   /* N-terminus: from TM1 up and out; the distal part is cut away, the tethered peptide end folds into the receptor */
   '<path class="uc-nt" d="M322 166C318 140 300 118 286 96"/>'+
   '<g id="ucNf"><path class="uc-nt" d="M286 96C276 80 256 70 232 66C214 63 200 70 190 62"/><circle class="uc-nr" cx="232" cy="66" r="3.4"/><circle class="uc-nr" cx="208" cy="66" r="3.4"/></g>'+
   '<g id="ucTp"><circle class="uc-tp" cx="0" cy="0" r="5"/><circle class="uc-tp" cx="11" cy="3" r="5"/><circle class="uc-tp" cx="21" cy="-3" r="5"/></g>'+
   '<path class="uc-cut" id="ucCut" d="M276 86L298 106M298 86L276 106"/>'+
   '<g id="ucPr"><path class="uc-pr" d="M0 -26C22 -26 34 -12 34 4C34 22 18 30 0 30C-20 30 -34 18 -34 0C-34 -16 -22 -26 -6 -26L-2 -12L4 -26Z"/><path class="uc-prc" d="M-16 2C-8 10 8 10 16 2"/></g>'+
   '<text id="ucPrL" x="168" y="128" text-anchor="middle" class="a">PROTEASE</text>'+
   '<text id="ucTpL" x="470" y="118" text-anchor="start" class="a">TETHERED PEPTIDE</text>'+
   /* conventional antagonist at the outer site, bouncing off */
   '<g id="ucAn"><rect class="uc-an" x="-13" y="-9" width="26" height="18" rx="2"/></g>'+
   '<path class="uc-cut" id="ucX" d="M418 112L436 130M436 112L418 130"/>'+
   '<text id="ucAnL" x="560" y="96" text-anchor="middle" class="a">ANTAGONIST</text>'+
   /* the G protein: alpha, beta, gamma */
   '<g id="ucG"><ellipse class="uc-ga" cx="-8" cy="0" rx="44" ry="26"/><ellipse class="uc-gb" cx="40" cy="20" rx="30" ry="22"/><ellipse class="uc-gg" cx="70" cy="-2" rx="12" ry="9"/>'+
    '<text x="-8" y="5" text-anchor="middle" class="g">G&#945;</text><text x="44" y="25" text-anchor="middle" class="g">&#946;&#947;</text></g>'+
   '<text id="ucGL" x="'+(mob?262:276)+'" y="374" text-anchor="middle" class="a">G PROTEIN</text>'+
   '<g id="ucW"><path class="uc-wv" d="M352 420Q400 444 448 420"/><path class="uc-wv" d="M330 448Q400 482 470 448"/><path class="uc-wv" d="M310 476Q400 518 490 476"/></g>'+
   '<circle id="ucGlow" cx="400" cy="330" r="46" fill="url(#ucGl)"/>'+
   ucMol("uc-m")+
   '<text id="ucML" x="'+(mob?590:600)+'" y="392" text-anchor="middle" class="a">ALLOSTERIC UNCOUPLER</text>'+
   caps.map(function(t,i){return '<text class="cap" id="ucC'+i+'" x="400" y="'+(mob?520:518)+'" text-anchor="middle">'+t+'</text>'}).join("")+
  '</svg>';
}
function storyDraw(svg){
  var E={pr:$("#ucPr",svg),prl:$("#ucPrL",svg),nf:$("#ucNf",svg),tp:$("#ucTp",svg),tpl:$("#ucTpL",svg),cut:$("#ucCut",svg),an:$("#ucAn",svg),x:$("#ucX",svg),anl:$("#ucAnL",svg),
    g:$("#ucG",svg),gl:$("#ucGL",svg),w:$$("#ucW .uc-wv",svg),glow:$("#ucGlow",svg),m:$(".uc-m",svg),ml:$("#ucML",svg),hx:$$("#ucR .uc-hx",svg),cap:[0,1,2,3].map(function(i){return $("#ucC"+i,svg)})};
  function tr(el,x,y,r){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")"+(r?" rotate("+r.toFixed(1)+")":""))}
  return function(p,b){
    if(!E.g.isConnected)return;
    svg.style.opacity=(.3+.7*b).toFixed(3);
    var s1a=seg(p,.02,.1),s1b=seg(p,.1,.15),s1c=seg(p,.14,.22),s2=seg(p,.28,.4),s3=seg(p,.53,.62),s3b=seg(p,.62,.68),s4=seg(p,.78,.88),s4b=seg(p,.84,.94);
    /* protease arrives, cuts, leaves */
    tr(E.pr,lerp(150,262,s1a)-lerp(0,150,s1c),lerp(110,92,s1a)-lerp(0,40,s1c));E.pr.style.opacity=(b*(1-s1c)).toFixed(3);
    E.prl.style.opacity=(b*s1a*(1-s1c)).toFixed(3);
    E.cut.style.opacity=(b*s1b*(1-seg(p,.2,.24))).toFixed(3);
    tr(E.nf,-lerp(0,90,s1c),-lerp(0,30,s1c));E.nf.style.opacity=(b*(1-s1c)).toFixed(3);
    /* tethered peptide folds into the receptor top */
    tr(E.tp,lerp(276,386,s1c),lerp(96,150,s1c));E.tpl.style.opacity=(b*seg(p,.16,.22)*(1-seg(p,.42,.48))).toFixed(3);
    E.hx.forEach(function(h){h.classList.toggle("on",s1c>.6&&s4<.5)});
    /* G protein docks; waves pulse while it is bound */
    var gin=s2*(1-s4b);tr(E.g,lerp(240,394,s2)+lerp(0,-90,s4b),lerp(470,370,s2)+lerp(0,70,s4b));E.g.style.opacity=(b*Math.min(1,s2*1.6)*(1-s4b*.85)).toFixed(3);
    E.gl.style.opacity=(b*seg(p,.39,.42)*(1-seg(p,.48,.52))).toFixed(3);
    E.w.forEach(function(wv,k){var ph=((p*14-k*.33)%1+1)%1;wv.style.opacity=(b*gin*(.25+.75*(1-ph))*(s2>.9?1:s2)).toFixed(3)});
    /* a conventional antagonist tries the outer site and bounces off */
    var ax=lerp(560,428,s3)+lerp(0,110,s3b),ay=lerp(70,124,s3)-lerp(0,50,s3b);tr(E.an,ax,ay,lerp(0,30,s3b));
    E.an.style.opacity=(b*s3*(1-seg(p,.7,.75))).toFixed(3);E.x.style.opacity=(b*seg(p,.6,.63)*(1-seg(p,.72,.76))).toFixed(3);E.anl.style.opacity=(b*seg(p,.52,.56)*(1-seg(p,.7,.74))).toFixed(3);
    /* the uncoupler takes the intracellular site */
    tr(E.m,lerp(560,394,s4),lerp(470,334,s4),lerp(-40,0,s4));E.m.style.opacity=(b*Math.min(1,s4*2)).toFixed(3);
    E.ml.style.opacity=(b*seg(p,.87,.9)).toFixed(3);E.glow.style.opacity=(b*s4b).toFixed(3);
    var W=[[0,0,.23,.26],[.26,.29,.48,.51],[.51,.54,.73,.76],[.76,.79,2,2]];
    E.cap.forEach(function(el,k){var a=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]);el.style.opacity=(b*a*(1-o)).toFixed(3)});
  };
}
