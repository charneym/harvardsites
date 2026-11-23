/* The story scene (BL/BY/DB): how a ChromaTwist dye works, as ONE continuous scene: a spectrum chart, wavelength
   300-750 nm over the visible band, kept on screen for all four steps (chromatwist.com/technology, /flow-cytometry,
   the June 2026 PBMC posts). Step 1: the UV and violet laser lines (320, 355, 405 nm) and the dye's absorption band.
   Step 2: the emission comes back far to the right; an arc spans the large Stokes shift. Step 3: five more emissions
   from cyan to red, all from the same excitation. Step 4: CT Blue (anti-CD4) is singled out. The curve shapes are
   schematic (labelled so); only the laser lines are real values. */
var SCW=760,SCH=520,SX0=40,SX1=740,BY0=400;
function wx(nm){return SX0+(nm-300)/(750-300)*(SX1-SX0)}
var EMI=[[455,"#3d7bff"],[505,"#14c8d8"],[555,"#3ad46a"],[600,"#f0d23a"],[650,"#ff7a2a"],[700,"#ff3b47"]];
function gpath(c,s,hgt,close){var d='',x0=Math.max(300,c-3.4*s),x1=Math.min(750,c+3.4*s),n=60;
  for(var i=0;i<=n;i++){var nm=x0+(x1-x0)*i/n,y=BY0-hgt*Math.exp(-.5*Math.pow((nm-c)/s,2));d+=(i?'L':'M')+wx(nm).toFixed(1)+' '+y.toFixed(1)}
  return close?d+'L'+wx(x1).toFixed(1)+' '+BY0+'L'+wx(x0).toFixed(1)+' '+BY0+'Z':d}
function memScene(o){
  var g='',m=o.mob;
  g+='<svg class="'+(m?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>';
  g+='<linearGradient id="vis" x1="'+wx(380)+'" x2="'+wx(750)+'" y1="0" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5a1fd0"/><stop offset=".16" stop-color="#3d5bff"/><stop offset=".3" stop-color="#14c8e6"/><stop offset=".45" stop-color="#3ad46a"/><stop offset=".6" stop-color="#f0e03a"/><stop offset=".74" stop-color="#ff8a24"/><stop offset=".9" stop-color="#ff3040"/><stop offset="1" stop-color="#7a0f18"/></linearGradient>';
  EMI.forEach(function(e,i){g+='<linearGradient id="eg'+i+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+e[1]+'" stop-opacity=".5"/><stop offset="1" stop-color="'+e[1]+'" stop-opacity=".04"/></linearGradient>'});
  g+='</defs>';
  /* ---- base: axis, visible band, ticks and captions ---- */
  g+='<g id="scBase">';
  g+='<path class="bl sD" d="M'+SX0+' '+BY0+'H'+SX1+'"/>';
  g+='<rect class="band" x="'+wx(380).toFixed(1)+'" y="'+(BY0+10)+'" width="'+(wx(750)-wx(380)).toFixed(1)+'" height="7" fill="url(#vis)"/>';
  [300,400,500,600,700].forEach(function(n){g+='<path class="tk" d="M'+wx(n).toFixed(1)+' '+(BY0+22)+'v6"/><text class="t" x="'+wx(n).toFixed(1)+'" y="'+(BY0+(m?54:48))+'" text-anchor="middle">'+n+'</text>'});
  g+='<text class="t" x="'+SX0+'" y="'+(SCH-8)+'">'+(m?'WAVELENGTH, nm · SCHEMATIC':'WAVELENGTH, nm · SCHEMATIC SPECTRA')+'</text>';
  g+='</g>';
  /* ---- step 1: laser lines and the absorption band ---- */
  g+='<g id="scAbs"><path class="ab" d="'+gpath(342,22,260,1)+'"/><path class="abL" d="'+gpath(342,22,260,0)+'"/></g>';
  g+='<g id="scLas">';
  [[320,"320"],[355,"355"],[405,"405"]].forEach(function(l){var x=wx(l[0]).toFixed(1);
    g+='<path class="las" d="M'+x+' '+BY0+'V128"/><text class="lt" x="'+x+'" y="118" text-anchor="middle">'+l[1]+'</text>'});
  g+='</g>';
  /* ---- emissions: the first (CT Blue) arrives in step 2, the rest in step 3 ---- */
  g+='<g id="scEm">';
  EMI.forEach(function(e,i){g+='<g class="em" data-i="'+i+'"><path class="emF" d="'+gpath(e[0],24,i?245:270,1)+'" fill="url(#eg'+i+')"/><path class="emL" d="'+gpath(e[0],24,i?245:270,0)+'" stroke="'+e[1]+'"/></g>'});
  g+='</g>';
  /* ---- step 2: the Stokes shift arc from the absorption peak to the emission peak ---- */
  var ax=wx(342),ex=wx(455);
  g+='<g id="scArc"><path class="arc" d="M'+ax.toFixed(1)+' 128C'+(ax+30).toFixed(1)+' 40 '+(ex-30).toFixed(1)+' 40 '+ex.toFixed(1)+' 116"/><path class="arc" d="M'+(ex-6).toFixed(1)+' 106L'+ex.toFixed(1)+' 117L'+(ex+5).toFixed(1)+' 105"/></g>';
  /* ---- step labels in the clear band above the curves ---- */
  var rx=m?SX1:wx(480),ra=m?' text-anchor="end"':'';
  g+='<g id="lb1"><text class="a" x="'+(m?SX0:wx(430)).toFixed(1)+'" y="'+(m?60:118)+'">'+(m?'UV + VIOLET LASERS, nm':'UV AND VIOLET LASER LINES, nm')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+rx.toFixed(1)+'" y="60"'+ra+'>LARGE STOKES SHIFT</text></g>';
  g+='<g id="lb3"><text class="a" x="'+rx.toFixed(1)+'" y="60"'+ra+'>'+(m?'ONE EXCITATION, SIX COLOURS':'ONE EXCITATION · BLUE TO RED')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+(wx(455)-10).toFixed(1)+'" y="'+(m?106:112)+'">CD4 · CT BLUE ON PBMCs</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel,root){return $$(sel,root||svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text,#scBase .band,#scBase .tk",svg),
    abs:$("#scAbs .ab",svg),absL:dl("#scAbs .abL"),las:dl("#scLas .las"),lt:$$("#scLas .lt",svg),
    em:$$("#scEm .em",svg).map(function(el){return {el:el,f:$(".emF",el),L:dl(".emL",el)[0]}}),
    arc:dl("#scArc .arc"),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1 (0-.25): lasers and absorption; they stay, quieter, for the rest */
    /* the first frame is already a complete picture (BY): lasers and absorption arrive with the section. Their numbers
       step aside while the Stokes arc crosses above them, then return */
    var q=1-.5*seg(p,.3,.4),hide=seg(p,.22,.27)*(1-seg(p,.6,.66));
    draw(E.las,b);E.las.forEach(function(a){op(a[0],b*q)});E.lt.forEach(function(t){op(t,b*q*(1-hide))});
    draw(E.absL,b);op(E.absL[0][0],b*q);op(E.abs,b*q);
    /* step 2 (.25-.5): CT Blue's emission, and the arc across the shift */
    var e0=seg(p,.28,.4),ar=seg(p,.3,.42)*(1-seg(p,.5,.56));
    draw(E.arc,ar*b);E.arc.forEach(function(a){op(a[0],b*(ar>0?1:0))});
    /* step 3 (.5-.75): the other five emissions, staggered blue to red; step 4 (.75-1) they dim, CT Blue stays */
    var dim=seg(p,.78,.86);
    E.em.forEach(function(F,i){var v=i===0?e0:seg(p,.52+i*.03,.6+i*.03);
      draw([F.L],v*b);op(F.f,v*b);op(F.el,(v>0?1:0)*b*(i===0?1:1-.75*dim))});
    op(E.l1,b*seg(p,.02,.08)*(1-seg(p,.2,.24)));op(E.l2,b*seg(p,.36,.42)*(1-seg(p,.5,.54)));
    op(E.l3,b*seg(p,.64,.7)*(1-seg(p,.76,.8)));op(E.l4,b*seg(p,.84,.9));
  };
}
