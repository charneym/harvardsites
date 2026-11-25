/* The story scene (BL/BY/DB): GCT's own Produktionsablauf (gctool.com > Diamantbeschichtung > Produktionsablauf and
   Diamantbeschichtung), drawn as ONE end mill kept on screen for all three steps:
   Step 1 (Prüfen): the bare carbide tool is drawn and gauged (Eingangskontrolle, nasschemische Vorbehandlung).
   Step 2 (Beschichten): CVD: carbon from the hydrocarbon gas phase settles on the cutter as the diamond shell; a
   magnified section shows the MicroSpeed layers (crystalline / nanocrystalline) on the carbide.
   Step 3 (Kontrollieren): a scan line passes along the whole tool (100 % optische Endkontrolle) and it is passed. */
var SCW=760,SCH=520;
function gcScene(o){
  var g='',mob=o.mob,i,k;
  var body="M50 200H300L352 234H554L560 240V340L554 346H352L300 380H50L40 370V210Z";
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<linearGradient id="gcBd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4f3f0" stop-opacity=".16"/><stop offset=".45" stop-color="#f4f3f0" stop-opacity=".05"/><stop offset="1" stop-color="#f4f3f0" stop-opacity=".12"/></linearGradient>'+
    '<clipPath id="gcClC"><path d="M352 234H554L560 240V340L554 346H352Z"/></clipPath><clipPath id="gcClI"><circle cx="650" cy="150" r="80"/></clipPath>'+
    '<pattern id="gcHt" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V7" stroke="#8d9195" stroke-width="1"/></pattern></defs>';
  g+='<text class="t" x="20" y="30">'+(mob?"SCHAFTFRÄSER":"SCHAFTFRÄSER, SCHEMATISCH")+'</text>';
  /* the tool */
  g+='<path class="body" d="'+body+'"/>';
  /* flutes: the visible half of each helical cutting edge, with its gullet */
  g+='<g clip-path="url(#gcClC)" id="gcFl">';
  for(k=0;k<6;k++){var x0=300+k*62,e="",f="";
    for(i=0;i<=12;i++){var th=Math.PI*i/12,x=x0+th/(2*Math.PI)*124,y=290-56*Math.cos(th);e+=(i?"L":"M")+x.toFixed(1)+" "+y.toFixed(1)}
    for(i=12;i>=0;i--){var th2=Math.PI*i/12,x2=x0+22+th2/(2*Math.PI)*124,y2=290-56*Math.cos(th2);f+="L"+x2.toFixed(1)+" "+y2.toFixed(1)}
    g+='<path class="gul" d="'+e+f+'Z"/><path class="fl sD" d="'+e+'"/>'}
  g+='</g>';
  g+='<path class="edge sD" d="'+body+'"/><path class="edge sD" d="M300 200V380"/>';
  /* step 1: gauged */
  g+='<g id="gcDim"><path class="dim" d="M592 234H612M592 346H612M602 234V346"/><text class="t" x="620" y="295">Ø</text></g>';
  /* step 2: the diamond shell on the cutter, the gas phase, and the magnified layers */
  g+='<path id="gcCoat" class="coat" d="M352 230H556L564 238V342L556 350H352"/>';
  g+='<g id="gcGas">';
  var G=[[392,158],[418,184],[446,152],[470,198],[500,168],[408,200],[436,204],[488,202],[462,176],[520,196],[380,190],[512,152]];
  G.forEach(function(q,j){g+='<circle class="gas" cx="'+q[0]+'" cy="'+q[1]+'" r="'+(j%3?2.2:3)+'"/>'});
  g+='</g>';
  g+='<g id="gcIn"><path class="ld" d="M524 230L593 207"/><circle class="inb" cx="650" cy="150" r="80"/><g clip-path="url(#gcClI)">'+
     '<rect x="560" y="176" width="180" height="70" fill="url(#gcHt)"/><path class="cb" d="M560 176H740"/>';
  for(i=0;i<4;i++){var yy=176-(i+1)*10;g+='<rect class="'+(i%2?"ln":"lc")+'" x="560" y="'+yy+'" width="180" height="10"/>'}
  var zz="M560 136";for(i=0;i<=18;i++){zz+="L"+(560+i*10)+" "+(i%2?128:136)}
  g+='<path class="fac" d="'+zz+'L740 136Z"/></g><circle class="ine" cx="650" cy="150" r="80"/></g>';
  /* step 3: the inspection scan, and the pass mark */
  g+='<g id="gcScan"><path class="scan" d="M0 184V396"/></g>';
  g+='<path id="gcOk" class="ok" d="M592 288L604 300L626 274"/>';
  /* labels, per step */
  g+='<g id="gcL1"><text class="t" x="50" y="180">HARTMETALL</text><text class="t s1" x="352" y="414">EINGANGSKONTROLLE</text></g>';
  g+='<g id="gcL2"><text class="t" x="380" y="138">'+(mob?"GAS CₓHᵧ":"GASPHASE CₓHᵧ")+'</text><text class="t s1" x="352" y="414">'+(mob?"CVD-DIAMANT":"CVD-DIAMANTSCHICHT")+'</text><text class="t" x="590" y="262">'+(mob?"LAGEN":"MICROSPEED-LAGEN")+'</text></g>';
  g+='<g id="gcL3"><text class="t" x="50" y="180">BELASTUNGSTEST</text><text class="t s1" x="352" y="414">'+(mob?"100 % KONTROLLE":"100 % OPTISCHE ENDKONTROLLE")+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · PRÜFEN</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · BESCHICHTEN</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · KONTROLLIEREN</text></g>';
  return g+'</svg>';
}
function scene(){return gcScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),body:$(".body",svg),fl:$("#gcFl",svg),dim:$("#gcDim",svg),coat:dl("#gcCoat"),coatEl:$("#gcCoat",svg),gas:$("#gcGas",svg),inn:$("#gcIn",svg),scan:$("#gcScan",svg),ok:dl("#gcOk"),okEl:$("#gcOk",svg),
    L1:$("#gcL1",svg),L2:$("#gcL2",svg),L3:$("#gcL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b)}
    op(E.body,b);op(E.fl,b);
    /* step 1: gauged */
    op(E.dim,b*seg(p,.04,.12)*(1-seg(p,.3,.36)));
    op(E.L1,b*seg(p,.02,.1)*(1-seg(p,.3,.36)));
    /* step 2: the gas phase settles, the diamond shell grows, the layers show */
    var gs=seg(p,.38,.62);
    op(E.gas,b*seg(p,.36,.44)*(1-seg(p,.6,.66)));
    E.gas.setAttribute("transform","translate(0 "+(12*ease(gs)).toFixed(1)+")");
    op(E.coatEl,b*seg(p,.4,.46));draw(E.coat,b*seg(p,.42,.6));
    op(E.inn,b*seg(p,.46,.54)*(1-seg(p,.64,.7)));
    op(E.L2,b*seg(p,.42,.5)*(1-seg(p,.64,.68)));
    /* step 3: the scan passes along the tool, then the pass mark */
    var sc=seg(p,.7,.88);
    op(E.scan,b*seg(p,.68,.72)*(1-seg(p,.88,.92)));
    E.scan.setAttribute("transform","translate("+(40+520*sc).toFixed(1)+" 0)");
    op(E.okEl,b*seg(p,.86,.9));draw(E.ok,b*seg(p,.87,.94));
    op(E.L3,b*seg(p,.72,.8));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
