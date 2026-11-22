/* The story scene (BL/BY/DB): ViVita's platform as ONE continuous scene in fine line, a cross-section of a pericardium
   patch, with its crimped collagen bundles, the animal's own cells and the antigens that trigger rejection.
   Step 1 (SPEAR Process): stepwise, differential solubilization washes the antigens out, first the hydrophilic, then the
   lipophilic; the cells go and leave empty lacunae (vivitatechnologies.com/science: "eliminating up to 97% of all
   detectable antigens"). Step 2 (BARE Patch): the unfixed matrix keeps its native collagen structure. Step 3: recipient
   cells move in and the patch is remodelled into the patient's own tissue ("recognized as self ... and incorporated
   into their own body"). Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520,TY0=96,TY1=404;
function rr(s){return function(){s=(s*16807)%2147483647;return s/2147483647}}
function topY(x){return TY0+6*Math.sin(x/70)}
function botY(x){return TY1+6*Math.sin(x/64+1.3)}
var SCN=0;
function memScene(o){
  var u='v'+(++SCN),f=function(n){return (+n).toFixed(1)},g='',i,j,R=rr(11);
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  var edge=function(fn){var d='';for(var x=40;x<=720;x+=8)d+=(x===40?'M':'L')+x+' '+f(fn(x));return d};
  /* ---- base: the patch's two surfaces, a scale caption ---- */
  g+='<g id="scBase"><path class="tb sD" d="'+edge(topY)+'"/><path class="tb sD" d="'+edge(botY)+'"/>';
  g+='<text class="t" x="40" y="62">PERICARDIUM · CROSS-SECTION</text></g>';
  /* ---- collagen bundles: crimped fibres running through the patch ---- */
  g+='<g id="scFib">';
  var NF=13;
  for(j=0;j<NF;j++){var y0=TY0+22+j*(TY1-TY0-44)/(NF-1),amp=3+R()*2.5,wl=26+R()*10,ph=R()*6.28,d='';
    for(var x=40;x<=720;x+=4){var y=y0+Math.sin(ph+x/wl*6.283)*amp+3*Math.sin(x/70+j);d+=(x===40?'M':'L')+x+' '+f(y)}
    g+='<path class="fb" data-j="'+j+'" d="'+d+'"/>'}
  g+='</g>';
  /* ---- donor cells (lacunae stay behind) and their antigens ---- */
  var CELLS=[];R=rr(29);
  for(i=0;i<15;i++){var cx=78+i*(604/14)+(R()-.5)*20,cy=TY0+40+R()*(TY1-TY0-80);CELLS.push([cx,cy,R()<.5?-8:8])}
  g+='<g id="scCell">';
  CELLS.forEach(function(c){g+='<g class="cl1"><ellipse class="lac" cx="'+f(c[0])+'" cy="'+f(c[1])+'" rx="15" ry="6.5" transform="rotate('+c[2]+' '+f(c[0])+' '+f(c[1])+')"/><ellipse class="nuc" cx="'+f(c[0])+'" cy="'+f(c[1])+'" rx="5" ry="3.2"/></g>'});
  g+='</g>';
  /* antigens: little Y-marks on the cells (hydrophilic, k=0) and dots in the matrix (lipophilic, k=1) */
  g+='<g id="scAg">';R=rr(53);
  CELLS.forEach(function(c){for(var k=0;k<3;k++){var a=k*2.1+R(),x=c[0]+Math.cos(a)*19,y=c[1]+Math.sin(a)*9,r=a*57.3+90;
    g+='<path class="ag" data-k="0" d="M'+f(x)+' '+f(y)+'l0 -5M'+f(x)+' '+f(y-5)+'l-3 -3.5M'+f(x)+' '+f(y-5)+'l3 -3.5" transform="rotate('+f(r)+' '+f(x)+' '+f(y)+')"/>'}});
  for(i=0;i<34;i++){g+='<circle class="ag agd" data-k="1" cx="'+f(52+R()*656)+'" cy="'+f(TY0+16+R()*(TY1-TY0-32))+'" r="2.4"/>'}
  g+='</g>';
  /* ---- the wash: a soft band that sweeps across in step 1 ---- */
  g+='<defs><linearGradient id="wash'+u+'" x1="0" x2="1"><stop offset="0" stop-color="#e9918b" stop-opacity="0"/><stop offset=".5" stop-color="#e9918b" stop-opacity=".16"/><stop offset="1" stop-color="#e9918b" stop-opacity="0"/></linearGradient></defs>';
  g+='<rect id="wash" x="-120" y="'+(TY0-10)+'" width="160" height="'+(TY1-TY0+20)+'" fill="url(#wash'+u+')"/>';
  /* ---- step 2: the kept structure, a bracket across the patch ---- */
  g+='<g id="scKeep"><path class="br sD2" d="M736 '+TY0+'h8V'+TY1+'h-8"/></g>';
  /* ---- step 3: recipient cells arrive from both surfaces ---- */
  g+='<g id="scNew">';R=rr(71);
  for(i=0;i<16;i++){var nx=70+i*(620/15)+(R()-.5)*16,ny=TY0+36+R()*(TY1-TY0-72),fromTop=R()<.5;
    g+='<g class="rc" data-i="'+i+'" data-dy="'+f((fromTop?topY(nx)-24:botY(nx)+24)-ny)+'"><ellipse class="rcb" cx="'+f(nx)+'" cy="'+f(ny)+'" rx="13" ry="6"/><circle class="rcn" cx="'+f(nx)+'" cy="'+f(ny)+'" r="3"/></g>'}
  g+='</g>';
  /* ---- step labels, in the clear band under the patch ---- */
  g+='<g id="lb1"><text class="a" x="40" y="470">STEPWISE SOLUBILIZATION · UP TO 97% OF ANTIGENS REMOVED</text></g>';
  g+='<g id="lb2"><text class="a" x="40" y="470">UNFIXED · NATIVE COLLAGEN STRUCTURE KEPT</text></g>';
  g+='<g id="lb3"><text class="a" x="40" y="470">RECIPIENT CELLS MOVE IN · REMODELLED AS SELF</text></g>';
  if(o.mob){g=g.replace('UP TO 97% OF ANTIGENS REMOVED','97% ANTIGENS OUT').replace('UNFIXED · NATIVE COLLAGEN STRUCTURE KEPT','NATIVE MATRIX KEPT').replace('RECIPIENT CELLS MOVE IN · REMODELLED AS SELF','BECOMES THE PATIENT’S OWN').replace('STEPWISE SOLUBILIZATION · ','')}
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p.style.strokeDashoffset=L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),fib:dl(".fb"),keep:dl("#scKeep .sD2"),
    cl:$$(".cl1",svg),nuc:$$(".nuc",svg),ag:$$(".ag",svg).map(function(a){return [a,+a.getAttribute("data-k"),+(a.getAttribute("cx")||a.getAttribute("d").split(" ")[0].slice(1))]}),
    wash:$("#wash",svg),rc:$$(".rc",svg).map(function(g){return [g,+g.getAttribute("data-i"),+g.getAttribute("data-dy")]}),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function cl(x){return x<0?0:x>1?1:x}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* fibres draw in with the section, then brighten in step 2 */
    var w1=seg(p,.02,.18),w2=seg(p,.14,.3),keep=seg(p,.38,.58),move=seg(p,.68,.92);
    draw(E.fib,b);E.fib.forEach(function(a){a[0].style.opacity=(b*(.42+.5*keep)).toFixed(3)});
    /* step 1: two sweeps of the wash; each antigen goes as its sweep passes it */
    if(E.wash){var wx=w1<1?-120+w1*860:-120+w2*860;E.wash.setAttribute("x",wx.toFixed(1));op(E.wash,b*(w1>0&&w2<1?1:0))}
    E.ag.forEach(function(a){var sw=a[1]?w2:w1,front=-40+sw*860;op(a[0],b*(1-cl((front-a[2])/90)))});
    E.nuc.forEach(function(el,k){op(el,b*(1-cl(w2*1.6-.3)))});
    E.cl.forEach(function(el){el.classList.toggle("gone",w2>.6)});
    draw(E.keep,keep*b);
    /* step 3: recipient cells travel in from the surfaces, in a loose wave */
    E.rc.forEach(function(r){var v=cl(move*1.9-r[1]*.055),e=1-Math.pow(1-v,3);r[0].style.opacity=(b*cl(v*3)).toFixed(3);r[0].style.transform="translateY("+(r[2]*(1-e)).toFixed(1)+"px)"});
    op(E.l1,b*seg(p,.04,.12)*(1-seg(p,.3,.35)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.67)));op(E.l3,b*seg(p,.8,.88));
  };
}
