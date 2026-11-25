/* The story scene (BL/BY/DB): what A.K. TEK does for one dental implant, from its own pages (Über uns: forces "beim Kauen im
   Kiefer", Finite-Elemente-Berechnung, Fatigue-Test; Technologien & Verfahren: Drehen/Fräsen, Strahlen, Ätzen, 3D-Messmaschine,
   Reinraum ISO Klasse 7, Verpackung), drawn as ONE fine-line elevation of an implant kept on screen for all three steps.
   Step 1 (Entwicklung): the outline draws, the chewing load arrives from above, an FEM mesh and stress tint fill the body, dimensions.
   Step 2 (Fertigung): the turning tool cuts the thread along both flanks, the surface takes on its blasted/etched texture.
   Step 3 (Prüfung): a measuring probe touches the flank, the measured points check off, the part is packed in the cleanroom. */
var SCW=760,SCH=520;
function akHW(y){return 40-12*(y-150)/250}
function akThread(side){var d="",y=158,i=0;while(y<=396){var o=i%2===0?7:0,x=380+side*(akHW(y)+o);d+=(i?"L":"M")+x.toFixed(1)+" "+y;y+=9;i++}return d}
function akScene(o){
  var g='',mob=o.mob,i;
  var BODY="M340 150L352 400Q380 432 408 400L420 150Z";
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<clipPath id="akB"><path d="'+BODY+'"/><path d="M338 120H422V150H338Z"/></clipPath>'+
    '<linearGradient id="akSt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f0676c" stop-opacity=".55"/><stop offset=".45" stop-color="#db2b32" stop-opacity=".18"/><stop offset="1" stop-color="#db2b32" stop-opacity="0"/></linearGradient>'+
    '<pattern id="akDt" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r=".9" fill="#e9e7e4"/><circle cx="5.5" cy="5.2" r=".7" fill="#e9e7e4"/></pattern></defs>';
  if(!mob)g+='<text class="t" x="20" y="30">ZAHNIMPLANTAT, SCHEMATISCH</text>';
  g+='<g transform="translate(390 250) scale(1.45) rotate(-90) translate(-380 -275)">';
  /* centre axis */
  g+='<path class="ax" d="M380 108V448"/>';
  /* step 1: FEM mesh and stress tint inside the body */
  var m='';for(i=120;i<=430;i+=18)m+='M330 '+i+'H430';for(i=-120;i<=330;i+=18)m+='M'+(330+i)+' 110L'+(330+i+330)+' 440M'+(330+i+330)+' 110L'+(330+i)+' 440';
  g+='<g id="akFem" clip-path="url(#akB)"><path d="M330 110H430V440H330Z" fill="url(#akSt)"/><path class="mesh" d="'+m+'"/></g>';
  /* step 2: surface texture on the threaded body */
  g+='<g id="akTex" clip-path="url(#akB)"><path d="M330 196H430V440H330Z" fill="url(#akDt)"/></g>';
  /* the implant: collar and body */
  g+='<path class="body" d="'+BODY+'"/><path class="edge sD" d="M338 120H422V150H338Z"/><path class="edge sD" d="'+BODY+'"/>';
  g+='<path class="hex sD" d="M366 120V172H394V120"/>';
  /* step 1: the load from above, dimensions */
  g+='<g id="akLoad"><path class="ld" d="M380 26V82"/><path class="ldh" d="M372 72L380 88L388 72Z"/></g>';
  g+='<g id="akDim"><path class="dim" d="M500 120V425M492 120H508M492 425H508M338 100H422M338 92V108M422 92V108"/></g>';
  /* step 2: the thread (one path per flank), the turning tool, the rotation */
  g+='<path id="akThL" class="thr" d="'+akThread(-1)+'"/><path id="akThR" class="thr" d="'+akThread(1)+'"/>';
  g+='<g id="akTool"><path class="tool" d="M426 300L466 290V310Z"/><path class="tool" d="M466 290H520V310H466"/></g>';
  g+='<g id="akRot"><path class="rot" d="M330 100A50 9 0 1 0 430 100"/><path class="roth" d="M430 100L421 93M430 100L420 104"/></g>';
  /* step 3: the probe, the measured points, the cleanroom pack */
  g+='<g id="akProbe"><path class="edge" d="M478 222H548V238H478Z"/><path class="stl" d="M478 230H436"/><circle class="ball" cx="430" cy="230" r="6"/></g>';
  g+='<g id="akPts"><circle class="pt" cx="326" cy="200" r="5"/><circle class="pt" cx="332" cy="320" r="5"/><circle class="pt" cx="426" cy="360" r="5"/></g>';
  g+='<path id="akPack" class="pack" d="M280 80H480V448H280Z"/>';
  g+='</g>';
  /* labels, per step (>= 8px clear of every stroke, DR3) */
  g+='<g id="akL1"><text class="t s1" x="24" y="224">KAUKRAFT</text><text class="t" x="128" y="'+(mob?170:174)+'" text-anchor="middle">Ø</text><text class="t" x="390" y="'+(mob?60:62)+'" text-anchor="middle">LÄNGE</text><text class="t s1" x="'+(mob?250:300)+'" y="'+(mob?352:348)+'">FEM-NETZ</text></g>';
  g+='<g id="akL2"><text class="t s1" x="24" y="150">'+(mob?"DREHEN":"DREHEN · FRÄSEN")+'</text><text class="t" x="454" y="'+(mob?108:112)+'">GEWINDE</text><text class="t s1" x="'+(mob?330:420)+'" y="'+(mob?352:348)+'">'+(mob?"OBERFLÄCHE":"OBERFLÄCHE: STRAHLEN · ÄTZEN")+'</text></g>';
  g+='<g id="akL3"><text class="t s1" x="346" y="44">3D-MESSUNG</text></g><g id="akL4"><text class="t s1" x="107" y="'+(mob?428:424)+'">'+(mob?"REINRAUM ISO 7":"REINRAUM ISO 7 · VERPACKT")+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · ENTWICKLUNG</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · FERTIGUNG</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · PRÜFUNG</text></g>';
  return g+'</svg>';
}
function scene(){return akScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),body:$(".body",svg),ax:$(".ax",svg),fem:$("#akFem",svg),tex:$("#akTex",svg),load:$("#akLoad",svg),dim:$("#akDim",svg),
    th:dl("#akThL,#akThR"),tool:$("#akTool",svg),rot:$("#akRot",svg),probe:$("#akProbe",svg),pts:$$("#akPts circle",svg),pack:dl("#akPack"),
    L1:$("#akL1",svg),L2:$("#akL2",svg),L3:$("#akL3",svg),L4:$("#akL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b);op(E.ax,b)}
    op(E.body,b);
    /* step 1: the load, the mesh, the dimensions */
    op(E.load,b*seg(p,.04,.12)*(1-seg(p,.33,.38)));
    op(E.fem,b*seg(p,.08,.22)*(1-seg(p,.36,.44)));
    op(E.dim,b*seg(p,.14,.24)*(1-seg(p,.33,.38)));
    op(E.L1,b*seg(p,.1,.2)*(1-seg(p,.33,.38)));
    /* step 2: the tool comes in, the thread is cut, the surface textured */
    op(E.tool,b*seg(p,.38,.44)*(1-seg(p,.62,.67)));
    op(E.rot,b*seg(p,.38,.44)*(1-seg(p,.62,.67)));
    draw(E.th,b*seg(p,.42,.58));
    op(E.tex,b*seg(p,.54,.62));
    op(E.L2,b*seg(p,.44,.52)*(1-seg(p,.62,.67)));
    /* step 3: the probe measures, the points check off, then the pack */
    op(E.probe,b*seg(p,.68,.74)*(1-seg(p,.86,.9)));
    E.pts.forEach(function(c,i){op(c,b*seg(p,.72+i*.03,.76+i*.03))});
    draw(E.pack,b*seg(p,.86,.96));
    op(E.L3,b*seg(p,.7,.78)*(1-seg(p,.86,.9)));op(E.L4,b*seg(p,.9,.96));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
