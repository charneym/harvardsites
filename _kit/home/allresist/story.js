/* The story scene (BL/BY/DB): what Allresist's products do, drawn as ONE cross-section kept on screen for all three steps
   (allresist.de > Produkte: CSAR 62 "Schichtdicken 0,05-1,6 µm (6000-1000 rpm)", "höchstauflösend (< 10 nm)";
   Electra 92 "leitfähige Schichten zur Ableitung von Aufladungen bei der Elektronenbestrahlung", removed with water):
   Step 1 (Beschichten): a drop of resist is dispensed and spun out into an even film on the silicon substrate.
   Step 2 (Belichten): an electron beam writes the pattern into the film, under a thin conductive Electra 92 layer.
   Step 3 (Entwickeln): the developer removes the exposed areas of the positive resist; the mask remains. */
var SCW=760,SCH=520,AR_SP=[170,250,330,430,510,590],AR_SW=26;
function arScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<linearGradient id="arSi" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fb0c2" stop-opacity=".30"/><stop offset="1" stop-color="#3c82c8" stop-opacity=".10"/></linearGradient>'+
    '<linearGradient id="arRs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5fa0e0" stop-opacity=".55"/><stop offset="1" stop-color="#3c82c8" stop-opacity=".38"/></linearGradient>'+
    '<clipPath id="arClR"><rect id="arClRr" x="380" y="280" width="0" height="60"/></clipPath></defs>';
  g+='<text class="t" x="20" y="30">'+(mob?"QUERSCHNITT":"QUERSCHNITT, SCHEMATISCH")+'</text>';
  /* the silicon substrate */
  g+='<rect class="si" x="80" y="330" width="600" height="90"/>';
  g+='<path class="edge sD" d="M80 330H680V420H80Z"/>';
  g+='<text class="t" x="80" y="456">'+(mob?"SUBSTRAT":"SILIZIUM-SUBSTRAT")+'</text>';
  /* step 1: dispense nozzle, a drop, the film spreading out from the centre */
  g+='<g id="arNz"><path class="tool" d="M370 96H390V150L380 166L370 150Z"/><text class="t s1" x="404" y="122">AUFSCHLEUDERN</text><text class="t" x="404" y="'+(mob?150:146)+'">6000–1000 rpm</text></g>';
  g+='<circle id="arDp" class="drop" cx="380" cy="186" r="7"/>';
  g+='<g clip-path="url(#arClR)"><rect id="arFilm" class="film" x="80" y="292" width="600" height="38"/></g>';
  g+='<path id="arFe" class="edge2" d="M80 292H680"/>';
  /* step 2: the conductive top layer, the beam column and the beam; exposed areas */
  g+='<path id="arEl" class="el" d="M80 288H680"/>';
  g+='<g id="arCol"><path class="tool" d="M352 52H408V116L392 146H368L352 116Z"/><text class="t s1" x="424" y="84">'+(mob?"E-BEAM":"ELEKTRONENSTRAHL")+'</text></g>';
  g+='<line id="arBm" class="beam" x1="380" y1="146" x2="380" y2="292"/>';
  for(i=0;i<AR_SP.length;i++)g+='<rect class="ex" id="arEx'+i+'" x="'+(AR_SP[i]-AR_SW/2)+'" y="292" width="'+AR_SW+'" height="38"/>';
  /* step 3: the developed mask: resist blocks between the cleared areas */
  var d='',x0=80;for(i=0;i<AR_SP.length;i++){var a=AR_SP[i]-AR_SW/2;d+='M'+x0+' 330V292H'+a+'V330';x0=a+AR_SW}d+='M'+x0+' 330V292H680V330';
  g+='<path id="arBk" class="blk" d="'+d+'"/>';
  /* labels, per step (each kept 8px+ clear of every stroke) */
  g+='<g id="arL1"><text class="t s1" x="80" y="270">'+(mob?"RESIST":"RESIST · 0,05–1,6 µm")+'</text></g>';
  g+='<g id="arL2"><text class="t s1" x="'+(mob?600:606)+'" y="270">ELECTRA 92</text></g>';
  g+='<g id="arL3"><text class="t s1" x="80" y="270">'+(mob?"MASKE":"MASKE FÜR ÄTZEN ODER LIFT-OFF")+'</text><text class="t" x="'+(mob?470:520)+'" y="270">'+(mob?"&lt; 10 nm":"STRUKTUREN &lt; 10 nm")+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · BESCHICHTEN</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · BELICHTEN</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · ENTWICKELN</text></g>';
  return g+'</svg>';
}
function scene(){return arScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),si:$(".si",svg),nz:$("#arNz",svg),dp:$("#arDp",svg),clr:$("#arClRr",svg),film:$("#arFilm",svg),fe:dl("#arFe"),el:dl("#arEl"),col:$("#arCol",svg),bm:$("#arBm",svg),
    ex:AR_SP.map(function(_,i){return $("#arEx"+i,svg)}),bk:$("#arBk",svg),L1:$("#arL1",svg),L2:$("#arL2",svg),L3:$("#arL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),
    t:$$("text.t",svg).filter(function(t){return t.parentNode===svg})};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.t.forEach(function(t){op(t,b)})}
    op(E.si,b);
    /* step 1: the drop falls, then the film spreads out from the centre to both edges */
    op(E.nz,b*seg(p,0,.05)*(1-seg(p,.3,.36)));
    var fall=ease(seg(p,.04,.14));E.dp.setAttribute("cy",(186+100*fall).toFixed(1));
    op(E.dp,b*seg(p,.02,.05)*(1-seg(p,.13,.16)));
    var sp=ease(seg(p,.14,.3));E.clr.setAttribute("x",(380-300*sp).toFixed(1));E.clr.setAttribute("width",(600*sp).toFixed(1));
    op(E.film,b*(1-seg(p,.7,.78)));
    draw(E.fe,b*seg(p,.24,.32));op(E.fe[0][0],1-seg(p,.7,.78));
    op(E.L1,b*seg(p,.22,.28)*(1-seg(p,.33,.38)));
    /* step 2: the conductive layer, then the beam writes the six areas left to right */
    draw(E.el,b*seg(p,.38,.44));op(E.el[0][0],1-seg(p,.64,.68));
    op(E.col,b*seg(p,.38,.43)*(1-seg(p,.63,.67)));
    op(E.L2,b*seg(p,.4,.46)*(1-seg(p,.63,.67)));
    var wr=seg(p,.44,.62),n=AR_SP.length,k=Math.min(n-1,Math.floor(wr*n)),f=Math.min(1,wr*n-k);
    var bx=AR_SP[k]+(f-.5)*AR_SW*.8;E.bm.setAttribute("x2",bx.toFixed(1));
    op(E.bm,b*seg(p,.43,.45)*(1-seg(p,.61,.63)));
    E.ex.forEach(function(r,i){op(r,b*seg(wr*n,i,i+.6)*(1-seg(p,.7,.8)))});
    /* step 3: the exposed areas are developed away; the mask blocks remain, outlined */
    op(E.bk,b*seg(p,.7,.8));
    op(E.L3,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
