/* The story scene (BL/BY/DB): CRYSTAL's own core expertise, Kristallbearbeitung (crystal-gmbh.com > Produkte >
   Kristallbearbeitung and Substrate), drawn as ONE crystal kept on screen for all three steps:
   Step 1 (Orientieren): the lattice planes inside the crystal turn into line with the cutting reference, ±0.1°.
   Step 2 (Formen): a slice is cut and ground from the end, ±0.05 mm.
   Step 3 (Polieren): the slice, now seen face-on as a polished substrate, shows straight interference fringes (flatness
   λ/10) and a roughness trace (< 0.5 nm, measured with an interferometer microscope). */
var SCW=760,SCH=520,CG_A0=7;
function cgScene(o){
  var g='',mob=o.mob,i;
  var body="M120 150H480A40 110 0 0 1 480 370H120A40 110 0 0 1 120 150Z";
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<linearGradient id="cgBd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7ccbf0" stop-opacity=".20"/><stop offset=".5" stop-color="#29a3d8" stop-opacity=".07"/><stop offset="1" stop-color="#7ccbf0" stop-opacity=".16"/></linearGradient>'+
    '<radialGradient id="cgWf" cx=".4" cy=".35" r=".75"><stop offset="0" stop-color="#7ccbf0" stop-opacity=".30"/><stop offset="1" stop-color="#29a3d8" stop-opacity=".06"/></radialGradient>'+
    '<clipPath id="cgClB"><path d="'+body+'"/></clipPath><clipPath id="cgClW"><circle cx="620" cy="262" r="100"/></clipPath></defs>';
  g+='<text class="t" x="20" y="30">'+(mob?"KRISTALL":"KRISTALL UND SUBSTRAT, SCHEMATISCH")+'</text>';
  /* the crystal */
  g+='<path class="body" d="'+body+'"/>';
  g+='<g clip-path="url(#cgClB)"><g id="cgLat" transform="rotate('+CG_A0+' 300 260)">';
  for(i=0;i<16;i++){var x=128+i*24;g+='<path class="lat" d="M'+x+' 100V420"/>'}
  g+='</g></g>';
  g+='<path class="edge sD" d="'+body+'"/><ellipse class="edge sD" cx="480" cy="260" rx="40" ry="110"/>';
  /* the cutting reference (step 1) */
  g+='<g id="cgRef"><path class="ref" d="M440 128V392"/><text class="t s2" x="452" y="140">'+(mob?"SOLL":"SCHNITTEBENE")+'</text></g>';
  /* the slice: starts as the end of the crystal, moves out in step 2 */
  g+='<g id="cgSl"><path class="slb" d="M480 150H500A40 110 0 0 1 500 370H480A40 110 0 0 0 480 150Z"/><ellipse class="slf" cx="500" cy="260" rx="40" ry="110"/></g>';
  g+='<g id="cgSaw"><path class="saw" d="M480 118V402"/></g>';
  /* step 3: the slice face-on, polished: straight fringes and a roughness trace */
  g+='<g id="cgWaf"><circle class="waf" cx="620" cy="262" r="100"/><g clip-path="url(#cgClW)" id="cgFr">';
  for(i=0;i<14;i++){var y=170+i*14;g+='<path class="fr" d="M510 '+y+'H730"/>'}
  g+='</g><circle class="wafe" cx="620" cy="262" r="100"/></g>';
  var tr="M500 440";for(i=1;i<=60;i++){tr+="L"+(500+i*3.6).toFixed(1)+" "+(440+1.6*Math.sin(i*1.7)+1.1*Math.sin(i*4.3)).toFixed(2)}
  g+='<path id="cgTr" class="trace" d="'+tr+'"/>';
  /* labels, per step */
  g+='<g id="cgL1"><text class="t" x="140" y="132">GITTEREBENEN</text><text class="t s1" x="120" y="404">ORIENTIERUNG ±0,1°</text></g>';
  g+='<g id="cgL2"><text class="t s1" x="520" y="118">'+(mob?"TRENNEN":"TRENNEN UND SCHLEIFEN")+'</text><text class="t" x="596" y="404">±0,05 mm</text></g>';
  g+='<g id="cgL3"><text class="t s1" x="520" y="140">EBENHEIT λ/10</text><text class="t s1" x="500" y="476">RAUHEIT &lt; 0,5 nm</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · ORIENTIEREN</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · FORMEN</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · POLIEREN</text></g>';
  return g+'</svg>';
}
function scene(){return cgScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),body:$(".body",svg),lat:$("#cgLat",svg),ref:$("#cgRef",svg),sl:$("#cgSl",svg),saw:$("#cgSaw",svg),waf:$("#cgWaf",svg),fr:dl("#cgFr .fr"),tr:dl("#cgTr"),
    L1:$("#cgL1",svg),L2:$("#cgL2",svg),L3:$("#cgL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b)}
    op(E.body,b);op(E.lat,b);
    /* step 1: the lattice turns into line with the cutting reference */
    var r=CG_A0*(1-ease(seg(p,.08,.28)));
    E.lat.setAttribute("transform","rotate("+r.toFixed(2)+" 300 260)");
    op(E.ref,b*seg(p,.02,.08)*(1-seg(p,.36,.42)));
    op(E.L1,b*seg(p,.02,.1)*(1-seg(p,.33,.38)));
    /* step 2: cut, and the slice moves out */
    op(E.saw,b*seg(p,.38,.44)*(1-seg(p,.5,.56)));
    var m=ease(seg(p,.44,.6));
    E.sl.setAttribute("transform","translate("+(130*m).toFixed(1)+" 0)");
    op(E.sl,b*(1-seg(p,.66,.72)));
    op(E.L2,b*seg(p,.5,.58)*(1-seg(p,.64,.68)));
    /* step 3: face-on, polished: fringes, then the roughness trace */
    op(E.waf,b*seg(p,.68,.76));
    draw(E.fr,b*seg(p,.72,.84));draw(E.tr,b*seg(p,.78,.9));
    op(E.L3,b*seg(p,.82,.9));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
