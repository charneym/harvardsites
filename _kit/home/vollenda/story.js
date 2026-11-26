/* The story scene (BL/BY/DB): one gross bagging cycle on a VOLLENDA VBAE, as vollenda.de describes it ("Dosiert wird
   mit einer Schwenkklappe, die in Grob- und Feinstrom angesteuert wird"; "Bruttowaage mit Wägezelle"; "Füllstutzen mit
   Momentsackklemme für Offensäcke"; 10...100 kg, eichfähig), drawn in section and kept on screen for all three steps:
   Step 1 (Sack): pre-hopper, swing flap, filling spout and load cell draw in; the open-mouth bag is clamped on; tare 0,0 kg.
   Step 2 (Grobstrom): the flap swings wide open, a broad stream fills the bag, the readout climbs to ~22 kg.
   Step 3 (Feinstrom): the flap closes to a fine stream, the readout reaches the 25,0 kg target, the flap shuts. */
var SCW=640,SCH=520;
function vsScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"92 0 530 520":"70 0 560 520")+'" aria-hidden="true">';
  g+='<defs><pattern id="vsG" width="9" height="8" patternUnits="userSpaceOnUse"><circle cx="2.5" cy="2.5" r="2" fill="#efe9d6"/><circle cx="7" cy="6.5" r="2" fill="#d9d2bb"/></pattern>'+
     '<pattern id="vsSt" width="9" height="12" patternUnits="userSpaceOnUse"><circle cx="2.5" cy="3" r="1.9" fill="#efe9d6"/><circle cx="6.8" cy="9" r="1.9" fill="#d9d2bb"/></pattern>'+
     '<pattern id="vsH" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V8" stroke="rgba(243,245,240,.18)" stroke-width="1"/></pattern>'+
     '<clipPath id="vsHc"><path d="M202 42V112L282 158H318L398 112V42Z"/></clipPath>'+
     '<clipPath id="vsBc"><path d="M284 252C262 262 244 276 242 300V472H358V300C356 276 338 262 316 252Z"/></clipPath></defs>';
  g+='<text class="t" x="'+(mob?112:110)+'" y="24">'+(mob?"VBAE":"VBAE · BRUTTOABSACKUNG")+'</text>';
  /* frame column, load cell, weigh beam, pre-hopper, spout (drawn in) */
  g+='<g id="vsB">'+
    '<path class="fr sD" d="M120 44V486"/><path class="fr sD" d="M120 44H200"/>'+
    '<path class="hp sD" d="M200 40V112L280 160H320L400 112V40Z"/>'+
    '<path class="lc sD" d="M128 196H180V218H128Z"/>'+
    '<path class="bm sD" d="M180 207H278"/>'+
    '<path class="sp sD" d="M280 178H320V254H280Z"/>'+
    '<path class="fl sD" d="M60 488H620"/>'+
    '</g>';
  g+='<rect class="lch" x="129" y="197" width="50" height="20"/>';
  /* granulate in the pre-hopper (level falls as the bag fills) */
  g+='<g clip-path="url(#vsHc)"><rect id="vsHf" class="gr" x="190" y="64" width="220" height="110"/></g>';
  /* the swing flap under the outlet, pivoting at its right end */
  g+='<g id="vsF"><path class="fp" d="M276 168H322"/><circle class="pv" cx="322" cy="168" r="3.4"/></g>';
  /* the stream through the spout into the bag */
  g+='<rect id="vsS" class="st" x="287" y="172" width="26" height="300"/>';
  /* the open-mouth bag, its fill, and the clamp */
  g+='<g clip-path="url(#vsBc)"><rect id="vsBf" class="gr" x="236" y="472" width="128" height="10"/></g>';
  g+='<path id="vsBag" class="bg" d="M284 236V252C262 262 244 276 242 300V472H358V300C356 276 338 262 316 252V236"/>';
  g+='<g id="vsK"><path class="ck" d="M268 236H280V248H268Z"/><path class="ck" d="M320 236H332V248H320Z"/></g>';
  /* the weight readout */
  g+='<g id="vsR"><path class="rd" d="M440 412H600V476H440Z"/><text class="t" x="440" y="400">'+(mob?"SOLL 25 KG":"WAAGE · SOLL 25,0 KG")+'</text><text id="vsKg" class="kg" x="588" y="456" text-anchor="end">0,0 kg</text></g>';
  /* labels, per step (8px+ clear of every stroke) */
  g+='<g id="vsLs"><text class="t" x="430" y="84">'+(mob?"BEHÄLTER":"VORBEHÄLTER")+'</text><text class="t" x="340" y="222">'+(mob?"STUTZEN":"FÜLLSTUTZEN")+'</text><text class="t" x="130" y="240">'+(mob?"ZELLE":"WÄGEZELLE")+'</text></g>';
  g+='<g id="vsL1"><text class="t s1" x="346" y="246">'+(mob?"KLEMME":"SACKKLEMME")+'</text><text class="t s1" x="374" y="350">OFFENSACK</text></g>';
  g+='<g id="vsL2"><text class="t s1" x="340" y="172">'+(mob?"KLAPPE":"SCHWENKKLAPPE")+'</text><text class="t s1" x="374" y="350">GROBSTROM</text></g>';
  g+='<g id="vsL3"><text class="t s1" x="340" y="172">'+(mob?"KLAPPE":"SCHWENKKLAPPE")+'</text><text class="t s1" x="374" y="350">FEINSTROM</text></g>';
  g+='<g id="lb1"><text class="a" x="120" y="516">1 · SACK</text></g>';
  g+='<g id="lb2"><text class="a" x="120" y="516">2 · GROBSTROM</text></g>';
  g+='<g id="lb3"><text class="a" x="120" y="516">3 · FEINSTROM</text></g>';
  return g+'</svg>';
}
function scene(){return vsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#vsB .sD"),lch:$(".lch",svg),Hf:$("#vsHf",svg),F:$("#vsF",svg),S:$("#vsS",svg),Bf:$("#vsBf",svg),Bag:$("#vsBag",svg),bag:dl("#vsBag"),K:$("#vsK",svg),
    R:$("#vsR",svg),kg:$("#vsKg",svg),Ls:$("#vsLs",svg),L1:$("#vsL1",svg),L2:$("#vsL2",svg),L3:$("#vsL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1,lastKg="";
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;op(E.t0,b)}
    /* step 1: the machine draws in, the hopper holds granulate, the bag is clamped on, tare */
    draw(E.base,b*seg(p,0,.16));op(E.lch,b*seg(p,.1,.2));
    op(E.Hf,b*seg(p,.1,.2));op(E.F,b*seg(p,.08,.16));
    op(E.Bag,b*seg(p,.12,.2));draw(E.bag,b*seg(p,.12,.24));
    var kc=seg(p,.18,.26);E.K.setAttribute("transform","translate(0 "+(-14*(1-kc)).toFixed(1)+")");op(E.K,b*seg(p,.16,.22));
    op(E.R,b*seg(p,.14,.22));op(E.Ls,b*seg(p,.12,.2));
    op(E.L1,b*seg(p,.18,.24)*(1-seg(p,.3,.35)));
    /* flap angle and stream: coarse (p .38-.6) wide open, fine (p .7-.88) nearly shut, closed at the target */
    var co=seg(p,.36,.42)*(1-seg(p,.6,.66)),fi=seg(p,.66,.72)*(1-seg(p,.88,.92));
    var ang=68*co+16*fi;E.F.setAttribute("transform","rotate("+ang.toFixed(1)+" 322 168)");
    /* fill: 0 -> .86 in the coarse flow, .86 -> 1 in the fine flow */
    var f=.86*seg(p,.4,.6)+.14*seg(p,.7,.88);
    var top=468-f*196;E.Bf.setAttribute("y",top.toFixed(1));E.Bf.setAttribute("height",(476-top).toFixed(1));op(E.Bf,b*(f>0?1:0));
    E.Hf.setAttribute("y",(64+f*30).toFixed(1));
    var sw=co>fi?26*co:6,sv=Math.max(co,fi);
    E.S.setAttribute("width",sw.toFixed(1));E.S.setAttribute("x",(300-sw/2).toFixed(1));E.S.setAttribute("y","172");E.S.setAttribute("height",Math.max(0,top-172).toFixed(1));
    E.S.style.fill="url(#vsSt)";op(E.S,b*sv);
    var kgv=co>.02||fi>.02||f>0?25*f:0,kgs=kgv.toFixed(1).replace(".",",")+" kg";
    if(kgs!==lastKg){lastKg=kgs;E.kg.textContent=kgs}
    E.kg.classList.toggle("ok",kgs==="25,0 kg");
    op(E.L2,b*seg(p,.38,.44)*(1-seg(p,.6,.65)));
    op(E.L3,b*seg(p,.68,.74));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
