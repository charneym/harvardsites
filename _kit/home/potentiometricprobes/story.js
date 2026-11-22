/* The story scene (BL/BY/DB): how a voltage-sensitive dye works (potentiometricprobes.com /how-vsds-work, /stark-effect,
   /ratiometric-voltage-imaging-faq), as ONE continuous engraved scene. Middle: a cross-section of the lipid bilayer, head
   groups and tails. Step 1: dye molecules drop in from the bath and anchor in the outer leaflet, chromophore down among the
   tails. Step 2: the membrane depolarises (the charges across it flip) and the dye's absorption spectrum, drawn above,
   shifts to the blue. Step 3: excitation at the blue and red wings; their ratio draws a clean optical action potential below.
   Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520,MT=262,MB=346,SX0=31,SDX=18,NH=39,DYI=[4,10,16,22,28,34];
function gss(x,c,s,hgt,base){return base-hgt*Math.exp(-Math.pow((x-c)/s,2)/2)}
function specPath(c){var p=[],x;for(x=60;x<=700;x+=8)p.push(x+" "+gss(x,c,78,104,196).toFixed(1));return "M"+p.join("L")}
function apPath(){var p=[],i,x,y;for(i=0;i<=120;i++){x=60+i*5.4;var t=i/120,u;
  if(t<.22)y=0;else if(t<.27){u=(t-.22)/.05;y=u*u*(3-2*u)}else if(t<.52){u=(t-.27)/.25;y=1-.18*u}else if(t<.72){u=(t-.52)/.2;y=.82*(1-u*u*(3-2*u))-.06*Math.sin(u*Math.PI)}else y=-.06*(1-(t-.72)/.28);
  p.push(x.toFixed(1)+" "+(462-y*58).toFixed(1))}return "M"+p.join("L")}
function memScene(o){
  var g='',i,x;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase"><path class="frm sD" d="M24 20H736M24 500H736"/><path class="ax sD" d="M60 196H700"/>';
  g+='<text class="t" x="24" y="10">CELL MEMBRANE · CROSS-SECTION · SCHEMATIC</text></g>';
  g+='<g id="scMem">';
  for(i=0;i<NH;i++){x=SX0+i*SDX;var dye=DYI.indexOf(i)>=0;
    if(!dye)g+='<g class="lp" data-k="'+i+'"><path class="tl" d="M'+(x-2.5)+' '+(MT+7)+'q-2 15 0 30M'+(x+2.5)+' '+(MT+7)+'q2 15 0 30"/><circle class="hd" cx="'+x+'" cy="'+MT+'" r="7"/></g>';
    g+='<g class="lp" data-k="'+i+'"><path class="tl" d="M'+(x-2.5)+' '+(MB-7)+'q-2 -15 0 -30M'+(x+2.5)+' '+(MB-7)+'q2 -15 0 -30"/><circle class="hd" cx="'+x+'" cy="'+MB+'" r="7"/></g>'}
  g+='</g><g id="scDye">';
  DYI.forEach(function(k,j){x=SX0+k*SDX;g+='<g class="dy" data-k="'+j+'"><path class="dyc" d="M'+x+' '+(MT+6)+'V'+(MT+40)+'"/><path class="dyt" d="M'+(x-3)+' '+(MT+40)+'q-2 10 0 18M'+(x+3)+' '+(MT+40)+'q2 10 0 18"/><circle class="dyh" cx="'+x+'" cy="'+MT+'" r="8"/></g>'});
  g+='</g>';
  g+='<g id="chR">';for(i=0;i<11;i++){x=58+i*64;g+='<text class="ch" x="'+x+'" y="'+(MT-18)+'" text-anchor="middle">+</text><text class="ch" x="'+x+'" y="'+(MB+30)+'" text-anchor="middle">−</text>'}g+='</g>';
  g+='<g id="chD">';for(i=0;i<11;i++){x=58+i*64;g+='<text class="ch d" x="'+x+'" y="'+(MT-18)+'" text-anchor="middle">−</text><text class="ch d" x="'+x+'" y="'+(MB+30)+'" text-anchor="middle">+</text>'}g+='</g>';
  g+='<path class="sp" id="sp0" d="'+specPath(400)+'"/><path class="sp2" id="sp1" d="'+specPath(368)+'"/>';
  g+='<g id="wg"><path class="wb" d="M262 92V196"/><path class="wr" d="M538 92V196"/><text class="t wbt" x="262" y="84" text-anchor="middle">BLUE EDGE</text><text class="t wrt" x="538" y="84" text-anchor="middle">RED EDGE</text></g>';
  g+='<path class="tr" id="trc" d="'+apPath()+'"/>';
  g+='<g id="lb1"><text class="a" x="24" y="48">THE DYE ANCHORS IN THE MEMBRANE</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="48">DEPOLARISED · SPECTRUM SHIFTS</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="48">RATIO · OPTICAL ACTION POTENTIAL</text></g>';
  g+='<text class="t k1" x="24" y="488">● VOLTAGE-SENSITIVE DYE</text><text class="t k2" x="'+(o.mob?360:260)+'" y="488">— ABSORPTION SPECTRUM</text>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, .k1, .k2",svg),lp:$$(".lp",svg),dy:$$(".dy",svg),
    chR:$("#chR",svg),chD:$("#chD",svg),sp0:dl("#sp0"),sp1:$("#sp1",svg),wg:$("#wg",svg),tr:dl("#trc"),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var grow=seg(p,0,.16),drop=seg(p,.05,.3),spec=seg(p,.04,.2),dep=seg(p,.38,.58),go=seg(p,.66,.92);
    E.lp.forEach(function(el){var k=+el.getAttribute("data-k");op(el,b*Math.min(1,Math.max(0,grow*2.2-k*.03)))});
    E.dy.forEach(function(el,j){var a=Math.min(1,Math.max(0,drop*1.6-j*.12)),e=1-a;el.setAttribute("transform","translate(0 "+(-150*e*e).toFixed(1)+")");
      op(el,b*Math.min(1,a*2.5)*(1-.25*dep+.25*go))});
    op(E.chR,b*grow*(1-dep));op(E.chD,b*dep);
    draw(E.sp0,b*spec);op(E.sp0[0][0],b*(1-.45*dep));op(E.sp1,b*dep);
    op(E.wg,b*seg(p,.62,.74));draw(E.tr,b*go);
    op(E.l1,b*seg(p,.1,.18)*(1-seg(p,.32,.38)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.74,.82));
  };
}
