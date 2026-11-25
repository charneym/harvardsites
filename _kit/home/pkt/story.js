/* The story scene (BL/BY/DB): PKT's "Prozesskette Mikrospritzguss" (pkt-gmbh.de > Infocenter, Leistungen, Technologien),
   drawn as ONE fine-line elevation kept on screen for all four steps: a micro gear wheel of the kind PKT moulds for the
   Swiss watch industry (pkt-gmbh.de > Branchen > Uhrenindustrie: "Mikrozahnräder mit Gewichten im Milligramm-Bereich").
   Step 1 (Konstruktion): Moldflow: flow fronts spread from the gate at the hub across the part.
   Step 2 (Werkzeug): the mould insert closes around the cavity: insert block, guide pins, contour-near cooling.
   Step 3 (Serie): the cavity fills with melt; the parts are laid down cavity by cavity beside the machine.
   Step 4 (Messung): the insert opens, the part turns in the CT: scan circle, a sweeping slice, the measured contour. */
var SCW=760,SCH=520,GX=290,GY=250;
function gearPath(cx,cy,N,ro,rr){
  var h=Math.PI/N,d="",i,a,pts=[];
  for(i=0;i<N;i++){a=i*2*h-Math.PI/2;
    pts.push([rr,a-.62*h],[ro,a-.36*h],[ro,a+.36*h],[rr,a+.62*h]);}
  pts.forEach(function(p,j){d+=(j?"L":"M")+(cx+p[0]*Math.cos(p[1])).toFixed(1)+" "+(cy+p[0]*Math.sin(p[1])).toFixed(1)});
  return d+"Z";
}
function sector(cx,cy,r0,r1,a0,a1){
  function P(r,a){return (cx+r*Math.cos(a)).toFixed(1)+" "+(cy+r*Math.sin(a)).toFixed(1)}
  return "M"+P(r0,a0)+"L"+P(r1,a0)+"A"+r1+" "+r1+" 0 0 1 "+P(r1,a1)+"L"+P(r0,a1)+"A"+r0+" "+r0+" 0 0 0 "+P(r0,a0)+"Z";
}
function circ(cx,cy,r){return "M"+(cx-r)+" "+cy+"a"+r+" "+r+" 0 1 0 "+(2*r)+" 0a"+r+" "+r+" 0 1 0 "+(-2*r)+" 0"}
function pkScene(o){
  var g='',mob=o.mob,i,gear=gearPath(GX,GY,24,150,134),win="";
  for(i=0;i<5;i++){var a=i*2*Math.PI/5-Math.PI/2+.2;win+=sector(GX,GY,58,112,a,a+2*Math.PI/5-.4)}
  var part=gear+circ(GX,GY,22)+win;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<radialGradient id="pkMelt" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fbc877" stop-opacity=".55"/><stop offset="1" stop-color="#f8ad40" stop-opacity=".28"/></radialGradient>'+
    '<clipPath id="pkClip"><path d="'+gear+'"/></clipPath></defs>';
  if(!mob)g+='<text class="t" x="20" y="30">MIKROZAHNRAD, SCHEMATISCH</text>';
  /* step 2: the mould insert around the cavity (drawn first so the part sits on top) */
  g+='<g id="pkTool"><path class="tool tD" d="M100 60H480V440H100Z"/><path class="tool tD" d="M100 250H130M450 250H480"/>'+
     '<path class="pin tD" d="'+circ(124,84,9)+'"/><path class="pin tD" d="'+circ(456,84,9)+'"/><path class="pin tD" d="'+circ(124,416,9)+'"/><path class="pin tD" d="'+circ(456,416,9)+'"/>'+
     '<path class="cool tD" d="M160 78H420M160 422H420"/></g>';
  /* step 3: the melt in the cavity */
  g+='<g id="pkFill"><path d="'+part+'" fill="url(#pkMelt)" fill-rule="evenodd"/></g>';
  /* the part, always on screen */
  g+='<path class="body" d="'+part+'" fill-rule="evenodd"/>';
  g+='<path class="edge sD" d="'+gear+'"/><path class="edge sD" d="'+circ(GX,GY,22)+'"/><path class="edge sD" d="'+win+'"/>';
  g+='<path class="ring0 sD" d="'+circ(GX,GY,124)+'"/>';
  /* step 1: flow fronts from the gate at the hub */
  g+='<g clip-path="url(#pkClip)"><path id="pkF1" class="flow" d="'+circ(GX,GY,40)+'"/><path id="pkF2" class="flow" d="'+circ(GX,GY,82)+'"/><path id="pkF3" class="flow" d="'+circ(GX,GY,122)+'"/></g>';
  g+='<circle id="pkGate" class="gate" cx="'+GX+'" cy="'+GY+'" r="6"/>';
  /* step 3: parts laid down cavity by cavity, beside the machine */
  var tray='';for(i=0;i<4;i++){tray+='<g class="tp" id="pkT'+i+'"><path class="mini" d="'+gearPath(600,110+i*84,24,30,26.8)+'"/><path class="mini" d="'+circ(600,110+i*84,5)+'"/></g>'}
  g+='<g id="pkTray">'+tray+'</g>';
  /* step 4: CT: the scan circle, a sweeping slice through the part, the measured contour */
  g+='<path id="pkScan" class="scan" d="'+circ(GX,GY,176)+'"/>';
  g+='<g id="pkSl"><path class="slice" d="M'+(GX-176)+' 0H'+(GX+176)+'"/></g>';
  g+='<path id="pkMeas" class="meas" d="'+gear+'"/>';
  /* labels, per step: right column, each >= 8px clear of every stroke (DR3) */
  var LX=mob?520:528;
  g+='<g id="pkL1"><text class="t s1" x="'+LX+'" y="'+(mob?150:232)+'">'+(mob?'FLIESS-':'MOLDFLOW-ANALYSE')+'</text>'+(mob?'<text class="t s1" x="'+LX+'" y="178">FRONTEN</text>':'<text class="t" x="'+LX+'" y="256">FÜLLUNG · VERZUG · SCHWUND</text>')+
     '<text class="t" x="'+LX+'" y="'+(mob?330:300)+'">'+(mob?'ANSPRITZ-':'ANSPRITZPUNKT AN DER NABE')+'</text>'+(mob?'<text class="t" x="'+LX+'" y="358">PUNKT</text>':'')+'</g>';
  g+='<g id="pkL2"><text class="t s2" x="'+LX+'" y="'+(mob?150:232)+'">'+(mob?'FORM-':'FORMEINSATZ')+'</text>'+(mob?'<text class="t s2" x="'+LX+'" y="178">EINSATZ</text>':'<text class="t" x="'+LX+'" y="256">3D-MIKRO-FUNKENEROSION</text>')+
     '<text class="t" x="'+LX+'" y="'+(mob?330:300)+'">'+(mob?'ECKRADIEN':'ECKRADIEN BIS 3 µm')+'</text>'+(mob?'<text class="t" x="'+LX+'" y="358">BIS 3 µm</text>':'')+'</g>';
  g+='<g id="pkL3"><text class="t s1" x="'+(mob?330:672)+'" y="'+(mob?508:116)+'">'+(mob?'< 0,001 g JE TEIL':'< 0,001 g')+'</text>'+(mob?'':'<text class="t" x="672" y="140">JE TEIL</text><text class="t" x="672" y="368">FORMNEST-</text><text class="t" x="672" y="392">GETRENNT</text>')+'</g>';
  g+='<g id="pkL4"><text class="t s2" x="'+LX+'" y="'+(mob?150:232)+'">'+(mob?'CT-':'COMPUTERTOMOGRAFIE')+'</text>'+(mob?'<text class="t s2" x="'+LX+'" y="178">MESSUNG</text>':'<text class="t" x="'+LX+'" y="256">WERTH TOMOSCOPE XS 160</text>')+
     '<text class="t" x="'+LX+'" y="'+(mob?330:300)+'">'+(mob?'3D-TEILE-':'3D-TEILEMESSUNG')+'</text>'+(mob?'<text class="t" x="'+LX+'" y="358">MESSUNG</text>':'')+'</g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · KONSTRUKTION</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · WERKZEUG</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · SERIE</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · MESSUNG</text></g>';
  return g+'</svg>';
}
function scene(){return pkScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),body:$(".body",svg),tool:dl(".tD"),toolG:$("#pkTool",svg),f1:dl("#pkF1"),f2:dl("#pkF2"),f3:dl("#pkF3"),gate:$("#pkGate",svg),
    fill:$("#pkFill",svg),tps:$$(".tp",svg),scan:dl("#pkScan"),sl:$("#pkSl",svg),slp:$("#pkSl path",svg),meas:dl("#pkMeas"),
    L1:$("#pkL1",svg),L2:$("#pkL2",svg),L3:$("#pkL3",svg),L4:$("#pkL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b)}
    op(E.body,b);
    /* step 1: flow fronts out from the gate, then they settle away */
    op(E.gate,b*seg(p,.02,.06)*(1-seg(p,.5,.55)));
    var fo=1-seg(p,.27,.31);
    draw(E.f1,b*seg(p,.04,.09));draw(E.f2,b*seg(p,.08,.14));draw(E.f3,b*seg(p,.13,.2));
    E.f1.concat(E.f2,E.f3).forEach(function(a){a[0].style.opacity=fo.toFixed(3)});
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2: the insert closes around the cavity; it stays through the series and opens for the CT */
    draw(E.tool,b*seg(p,.27,.4));
    op(E.toolG,b*(1-.85*seg(p,.75,.8)));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3: the melt fills the cavity; the parts are laid down one by one */
    op(E.fill,b*seg(p,.52,.62)*(1-.5*seg(p,.76,.82)));
    E.tps.forEach(function(t,i){op(t,b*seg(p,.56+i*.04,.6+i*.04)*(1-seg(p,.75,.78)))});
    op(E.L3,b*seg(p,.56,.62)*(1-seg(p,.72,.75)));
    /* step 4: the scan circle, a slice sweeping top to bottom, then the measured contour */
    draw(E.scan,b*seg(p,.77,.86));
    var sw=seg(p,.8,.95);op(E.sl,b*seg(p,.79,.82)*(1-seg(p,.95,.98)));
    if(E.slp)E.slp.setAttribute("transform","translate(0 "+(GY-150+300*sw).toFixed(1)+")");
    draw(E.meas,b*seg(p,.86,.97));
    op(E.L4,b*seg(p,.79,.85));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}
