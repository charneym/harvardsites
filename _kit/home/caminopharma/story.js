/* The story scene (BL/BY/DB): how an mGlu2 PAM works (caminopharma.com Programs; the 2017-09-27, 2020-09-16 and 2023-12-07
   releases: elevated glutamate neurotransmission underlies drug-seeking and relapse; group II mGlus sit presynaptically at
   glutamatergic synapses and maintain glutamate homeostasis; SBP-9330, a PAM of mGlu2, reduces glutamate release). ONE continuous
   scene: a glutamate synapse in section, the presynaptic terminal (vesicles) above, the cleft, the postsynaptic spine below.
   Frame 0: glutamate floods the cleft and the postsynaptic receptors glow. Step 2: the mGlu2 receptors on the terminal light up.
   Step 3: PAM molecules (gold) dock in the receptors' transmembrane bundles, the receptors glow, release falls and the
   postsynaptic side calms. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var TERM='M400 0V26C520 26 700 44 708 132C714 190 688 212 640 217C520 228 300 228 232 217C190 212 172 190 174 142C180 54 300 26 360 26V0';
var POST='M520 520V458C562 452 646 440 674 398C702 356 694 306 632 298C540 288 320 288 240 298C196 306 206 360 262 402C292 440 382 452 440 458V520';
var VES=[[300,92],[362,70],[424,96],[488,72],[552,102],[332,152],[396,142],[462,154],[528,160],[604,134],[254,134]];
var MGX=[[262,218],[606,216]];
var PRX=[330,380,430,480,530];
var GLU=(function(){var s=7,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<48;i++)a.push({ox:345+R()*170,oy:228,tx:252+R()*376,ty:238+R()*46,ph:R(),sp:.8+R()*.6,w:R()*6.28});return a})();
var PAM=[[MGX[0][0]-7.5,216,200,120],[MGX[0][0]+7.5,216,312,56],[MGX[1][0]-7.5,214,612,74],[MGX[1][0]+7.5,214,556,50]];
function mglu(x,y){
  return '<g class="mg"><path class="mgt" d="M'+(x-12)+' '+(y-12)+'h9v24h-9zM'+(x+3)+' '+(y-12)+'h9v24h-9z"/>'+
    '<path class="mgs" d="M'+(x-7.5)+' '+(y+12)+'v8M'+(x+7.5)+' '+(y+12)+'v8"/>'+
    '<circle class="mgv" cx="'+(x-8)+'" cy="'+(y+27)+'" r="7.5"/><circle class="mgv" cx="'+(x+8)+'" cy="'+(y+27)+'" r="7.5"/></g>';
}
function synScene(o){
  var g='';
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="sk sD" d="'+TERM+'"/>';
  g+='<path class="sk sD" d="'+POST+'"/>';
  VES.forEach(function(v){g+='<circle class="ves sD" cx="'+v[0]+'" cy="'+v[1]+'" r="17"/>'});
  g+='<text class="t" x="20" y="112">PRESYNAPTIC</text><text class="t" x="20" y="130">TERMINAL</text>';
  g+='<text class="t" x="20" y="252">SYNAPTIC</text><text class="t" x="20" y="270">CLEFT</text>';
  g+='<text class="t" x="20" y="384">POSTSYNAPTIC</text><text class="t" x="20" y="402">NEURON</text>';
  g+='</g>';
  /* glutamate packed in the vesicles */
  g+='<g id="scVg">';
  VES.forEach(function(v){g+='<circle class="gv" cx="'+(v[0]-6)+'" cy="'+(v[1]-3)+'" r="2.6"/><circle class="gv" cx="'+(v[0]+6)+'" cy="'+(v[1]-4)+'" r="2.6"/><circle class="gv" cx="'+v[0]+'" cy="'+(v[1]+6)+'" r="2.6"/>'});
  g+='</g>';
  /* postsynaptic receptors: a hot glow while flooded, the receptor bodies, the signal running down the dendrite */
  g+='<g id="scPr">';
  PRX.forEach(function(x){g+='<circle class="pg" cx="'+x+'" cy="296" r="18"/>'});
  PRX.forEach(function(x){g+='<path class="pr" d="M'+(x-5)+' 282h10v24h-10z"/>'});
  g+='<path class="sg" d="M480 312V520"/>';
  g+='</g>';
  /* mGlu2 on the terminal: a glow, the receptor pair (two 7TM bundles across the membrane, two flytrap lobes in the cleft) */
  g+='<g id="scMg">';
  MGX.forEach(function(m){g+='<circle class="mgg" cx="'+m[0]+'" cy="'+(m[1]+8)+'" r="34"/>'});
  MGX.forEach(function(m){g+=mglu(m[0],m[1])});
  g+='<g id="scMgL"><path class="ld" d="M630 248L658 266"/><text class="a" x="662" y="280">mGlu2</text></g>';
  g+='</g>';
  /* free glutamate in the cleft */
  g+='<g id="scGl">';
  GLU.forEach(function(m,k){g+='<circle class="gl" data-k="'+k+'" r="3.3" cx="0" cy="0"/>'});
  g+='</g>';
  /* PAM molecules */
  g+='<g id="scPm">';
  PAM.forEach(function(m,k){g+='<path class="pm" data-k="'+k+'" d="M0 -5.5L5.5 0L0 5.5L-5.5 0Z"/>'});
  g+='</g>';
  var ly=SCH-12;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">'+(o.mob?'EXCESS GLUTAMATE':'GLUTAMATE · RELEASED IN EXCESS')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">'+(o.mob?'mGLU2 · THE BRAKE':'mGLU2 · SENSES GLUTAMATE ON THE TERMINAL')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">'+(o.mob?'PAM BOUND · LESS RELEASE':'PAM BOUND · LESS GLUTAMATE RELEASED')+'</text></g>';
  return g+'</svg>';
}
function scene(){return synScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),vg:$$("#scVg .gv",svg),pg:$$("#scPr .pg",svg),pr:$$("#scPr .pr",svg),sg:$("#scPr .sg",svg),
    mgg:$$("#scMg .mgg",svg),mg:$$("#scMg .mg",svg),mgl:$("#scMgL",svg),
    gl:$$(".gl",svg).map(function(el){return {el:el,m:GLU[+el.getAttribute("data-k")]}}),
    pm:$$(".pm",svg).map(function(el){return {el:el,m:PAM[+el.getAttribute("data-k")]}}),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});E.vg.forEach(function(el){op(el,b*.9)});E.pr.forEach(function(el){op(el,b)})}
    var lit=seg(p,.36,.52),dock=seg(p,.66,.82),drop=seg(p,.72,.9);
    var level=1-.72*drop,hot=b*(1-.85*drop);
    E.pg.forEach(function(el,i){op(el,hot*(.5+.3*Math.sin(p*36+i*1.7)))});
    E.pr.forEach(function(el){el.classList.toggle("hot",drop<.5)});
    op(E.sg,hot*.85);E.sg.style.strokeDashoffset=(-p*700).toFixed(1);
    E.mg.forEach(function(el){op(el,b*(.55+.45*lit))});
    E.mgg.forEach(function(el){op(el,b*(.35*lit+.55*dock))});
    op(E.mgl,b*lit);
    var n=GLU.length;
    E.gl.forEach(function(G,k){var m=G.m,f=((p*3.2*m.sp+m.ph)%1),q=f*f*(3-2*f);
      var x=m.ox+(m.tx-m.ox)*q+Math.sin(p*20+m.w)*3,y=m.oy+(m.ty-m.oy)*q+Math.cos(p*17+m.w)*2;
      var vis=Math.min(1,Math.max(0,(level*n-k)));var life=Math.min(1,f*8)*Math.min(1,(1-f)*5);
      G.el.setAttribute("cx",x.toFixed(1));G.el.setAttribute("cy",y.toFixed(1));op(G.el,b*vis*life)});
    E.pm.forEach(function(P,k){var m=P.m,d=Math.min(1,Math.max(0,(dock-k*.08)/(1-.24))),q=d*d*(3-2*d);
      var x=m[2]+(m[0]-m[2])*q,y=m[3]+(m[1]-m[3])*q;P.el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");
      op(P.el,b*seg(p,.6,.68))});
    op(E.l1,b*seg(p,.04,.12)*(1-seg(p,.28,.34)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.6,.66)));op(E.l3,b*seg(p,.8,.88));
  };
}
