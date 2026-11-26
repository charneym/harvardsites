/* The story scene (BL/BY/DB): sicht-pack HAGNER's own process (sicht-pack-hagner.de > Folienherstellung and Rundgang),
   drawn as ONE film cross-section kept on screen for all three steps:
   Step 1 (Extrusion): the three co-extruded layers (G-PET / A-PET / G-PET) run out from left to right.
   Step 2 (Kaschieren): a PE film with an EVOH barrier is laminated on with a solvent-free two-component adhesive.
   Step 3 (Konfektion): the web is slit into widths and wound into rolls of the required diameter. */
var SCW=760,SCH=520;
var SPX=[70,190,330,450,560],SPR=[34,28,42,31];
function spStack(){
  return '<rect class="lg" x="70" y="130" width="490" height="40"/><rect class="la" x="70" y="170" width="490" height="90"/><rect class="lg" x="70" y="260" width="490" height="40"/>'+
    '<g class="pe"><rect class="lk2" x="70" y="300" width="490" height="6"/><rect class="lp" x="70" y="306" width="490" height="14"/><rect class="le" x="70" y="320" width="490" height="10"/><rect class="lp" x="70" y="330" width="490" height="14"/></g>';
}
function spScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<clipPath id="spRv"><rect id="spRvR" x="40" y="100" width="0" height="260"/></clipPath>';
  for(i=0;i<4;i++)g+='<clipPath id="spC'+i+'"><rect x="'+SPX[i]+'" y="100" width="'+(SPX[i+1]-SPX[i])+'" height="260"/></clipPath>';
  g+='</defs>';
  g+='<text class="t" x="20" y="30">'+(mob?"PET-FOLIE":"PET-FOLIE IM QUERSCHNITT, SCHEMATISCH")+'</text>';
  /* the web, as four segments (they separate only in step 3) */
  g+='<g clip-path="url(#spRv)">';
  for(i=0;i<4;i++)g+='<g class="sg" id="spS'+i+'"><g clip-path="url(#spC'+i+')">'+spStack()+'</g></g>';
  g+='</g>';
  /* step 1 labels: the three layers */
  g+='<g id="spL1"><text class="t s1" x="584" y="156">G-PET</text><text class="t s1" x="584" y="221">A-PET</text><text class="t s1" x="584" y="286">G-PET</text></g>';
  /* step 2 labels */
  g+='<g id="spL2"><text class="t" x="584" y="221">'+(mob?"PET":"PET, 3 SCHICHTEN")+'</text><text class="t s1" x="584" y="309">'+(mob?"KLEBER":"2K-KLEBER")+'</text><text class="t s2" x="584" y="343">'+(mob?"PE/EVOH":"PE / EVOH / PE")+'</text></g>';
  /* step 3: slitting lines, then rolls */
  g+='<g id="spCut">';for(i=1;i<4;i++)g+='<path class="cut" d="M'+SPX[i]+' 112V352"/>';g+='</g>';
  g+='<g id="spRl">';
  for(i=0;i<4;i++){var cx=(SPX[i]+SPX[i+1])/2,r=SPR[i];g+='<g class="rl"><circle class="rlf" cx="'+cx+'" cy="425" r="'+r+'"/><path class="rle dr" d="M'+cx+' '+(425-r)+'A'+r+' '+r+' 0 1 1 '+(cx-.01)+' '+(425-r)+'"/><circle class="rlc" cx="'+cx+'" cy="425" r="'+(r*.3).toFixed(1)+'"/></g>'}
  g+='</g>';
  g+='<g id="spL3"><text class="t s1" x="70" y="84">'+(mob?"MASS NACH VORGABE":"BREITE UND DURCHMESSER NACH VORGABE")+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="510">1 · EXTRUSION</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="510">2 · KASCHIEREN</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="510">3 · KONFEKTION</text></g>';
  return g+'</svg>';
}
function scene(){return spScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={rv:$("#spRvR",svg),pe:$$(".pe",svg),sg:$$(".sg",svg),cutg:$("#spCut",svg),cut:dl("#spCut .cut"),rl:$("#spRl",svg),rle:dl("#spRl .dr"),
    L1:$("#spL1",svg),L2:$("#spL2",svg),L3:$("#spL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;op(E.t0,b)}
    /* step 1: the co-extruded web runs out from the left */
    var rv=b*ease(seg(p,0,.22));E.rv.setAttribute("width",(550*rv).toFixed(1));
    op(E.L1,b*seg(p,.14,.22)*(1-seg(p,.33,.38)));
    /* step 2: the PE / EVOH film comes up from below and is laminated on */
    var m=ease(seg(p,.38,.56));
    E.pe.forEach(function(el){el.setAttribute("transform","translate(0 "+(70*(1-m)).toFixed(1)+")");el.style.opacity=(b*seg(p,.36,.46)).toFixed(3)});
    op(E.L2,b*seg(p,.5,.58)*(1-seg(p,.64,.68)));
    /* step 3: slit, separate, wind */
    draw(E.cut,seg(p,.68,.76));op(E.cutg,b*(1-seg(p,.84,.9)));
    var s=ease(seg(p,.74,.84));
    E.sg.forEach(function(el,i){el.setAttribute("transform","translate("+((i-1.5)*10*s).toFixed(1)+" 0)")});
    op(E.rl,b*seg(p,.8,.86));draw(E.rle,seg(p,.8,.92));
    op(E.L3,b*seg(p,.86,.92));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
