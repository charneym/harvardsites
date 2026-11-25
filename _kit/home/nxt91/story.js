/* The story scene (BL/BY/DB): NXT's own principle of measurement (nxt91.com > OLED > Principle of Measurement), ONE drawing
   kept on screen for all three steps:
   Step 1 (Interference): white light hits a thin film on a substrate; part reflects at the front, part at the rear.
   Step 2 (Spectrum): the two reflections interfere, so the reflectance spectrum oscillates with wavelength; it is drawn in.
   Step 3 (Model): a model spectrum (dashed) is varied in thickness and n&k until it lies on the measurement. */
var SCW=760,SCH=520;
var NXA={x0:450,x1:730,y0:130,y1:390};
function nxR(l,d){var n=1.6,ph=4*Math.PI*n*d/l;return .30+.22*Math.cos(ph)*Math.exp(-Math.pow(420/l,6)*.35)}
function nxPath(d){var s="",i,l,x,y;for(i=0;i<=70;i++){l=400+i*5;x=NXA.x0+(NXA.x1-NXA.x0)*i/70;y=NXA.y1-(NXA.y1-NXA.y0)*(nxR(l,d)-.02)/.56;s+=(i?"L":"M")+x.toFixed(1)+" "+y.toFixed(1)}return s}
var NX_D=720;
function nxScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<linearGradient id="nxFm" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#62d0ef" stop-opacity=".34"/><stop offset="1" stop-color="#00a6cf" stop-opacity=".16"/></linearGradient>'+
    '<linearGradient id="nxSb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a4a5c" stop-opacity=".55"/><stop offset="1" stop-color="#3a4a5c" stop-opacity=".05"/></linearGradient></defs>';
  g+='<text class="t" x="20" y="30">'+(mob?"FILM AND SPECTRUM":"THIN FILM AND ITS SPECTRUM, SCHEMATIC")+'</text>';
  /* the film on its substrate */
  g+='<rect class="sub" x="30" y="318" width="360" height="110"/><rect class="film" x="30" y="270" width="360" height="48"/>';
  g+='<path class="edge sD" d="M30 270H390"/><path class="edge sD" d="M30 318H390"/>';
  g+='<text class="t" x="44" y="300">FILM</text><text class="t" x="44" y="414">SUBSTRATE</text>';
  /* light in, two reflections out */
  g+='<path id="nxIn" class="ray w" d="M78 92L170 270"/>';
  g+='<path id="nxR1" class="ray c" d="M170 270L262 92"/>';
  g+='<path id="nxIn2" class="ray f" d="M170 270L194 318L218 270"/>';
  g+='<path id="nxR2" class="ray o" d="M218 270L310 92"/>';
  g+='<g id="nxL1"><text class="t s1" x="'+(mob?150:120)+'" y="72">'+(mob?"FRONT":"FRONT REFLECTION")+'</text><text class="t s3" x="'+(mob?290:300)+'" y="72">REAR</text><path class="br" d="M404 270V318"/><text class="t s1" x="414" y="300">d</text></g>';
  /* the spectrum chart */
  g+='<g id="nxAx"><path class="ax" d="M'+NXA.x0+' '+NXA.y0+'V'+NXA.y1+'H'+NXA.x1+'"/><text class="t" x="'+NXA.x0+'" y="'+(NXA.y0-18)+'">'+(mob?"R":"REFLECTANCE")+'</text><text class="t" x="'+(NXA.x1)+'" y="'+(NXA.y1+30)+'" text-anchor="end">'+(mob?"λ":"WAVELENGTH")+'</text></g>';
  g+='<path id="nxMs" class="spec" d="'+nxPath(NX_D)+'"/>';
  g+='<path id="nxMd" class="model" d="'+nxPath(NX_D*.86)+'"/>';
  g+='<g id="nxL3"><text class="t s3" x="'+NXA.x1+'" y="'+(NXA.y0-18)+'" text-anchor="end">MODEL FIT</text></g>';
  g+='<g id="nxL2"><text class="t s1" x="'+NXA.x1+'" y="'+(NXA.y0-18)+'" text-anchor="end">MEASURED</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="500">1 · INTERFERENCE</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="500">2 · SPECTRUM</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="500">3 · MODEL FIT · d, n, k</text></g>';
  return g+'</svg>';
}
function scene(){return nxScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),film:$(".film",svg),sub:$(".sub",svg),inn:dl("#nxIn"),r1:dl("#nxR1"),in2:dl("#nxIn2"),r2:dl("#nxR2"),ax:$("#nxAx",svg),ms:dl("#nxMs"),md:$("#nxMd",svg),
    L1:$("#nxL1",svg),L2:$("#nxL2",svg),L3:$("#nxL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),tt:$$("svg > text.t",svg.parentNode)};
  var lastB=-1,lastD=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.tt.forEach(function(t){op(t,b)})}
    op(E.film,b);op(E.sub,b);
    /* step 1: light in, reflections out */
    draw(E.inn,b*seg(p,.02,.1));draw(E.in2,b*seg(p,.1,.16));draw(E.r1,b*seg(p,.1,.18));draw(E.r2,b*seg(p,.16,.24));
    op(E.L1,b*seg(p,.2,.26));
    /* step 2: the spectrum */
    op(E.ax,b*seg(p,.36,.42));draw(E.ms,b*seg(p,.4,.56));op(E.L2,b*seg(p,.5,.56)*(1-seg(p,.66,.7)));
    /* step 3: the model, varied until it matches */
    var m=ease(seg(p,.72,.9)),d=Math.round(NX_D*(.86+.14*m));
    if(d!==lastD){lastD=d;E.md.setAttribute("d",nxPath(d))}
    op(E.md,b*seg(p,.68,.74));op(E.L3,b*seg(p,.88,.94));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
