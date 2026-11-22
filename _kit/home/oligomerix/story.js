/* The story scene (BL/BY/DB): how OLX-07010 works (oligomerix.com About / Technology / Pipeline), as ONE continuous scene:
   a length of axon with three microtubules drawn as rows of alternating alpha/beta tubulin beads.
   Step 1 (tau): tau molecules (the brand blue) sit bound along the microtubules.
   Step 2 (cascade): tau comes loose and self-associates into six-bead oligomer rings (the logo's own shape), and the rings
   then stack into a larger aggregate.
   Step 3 (block): OLX-07010 (a small lavender ring molecule) binds each tau; the aggregate comes apart and tau stays as
   separate, capped molecules: no oligomers form. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var MT=[150,252,354], MTOP=64, MBOT=440;
var TAU=(function(){var a=[],i,k,s=29,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff};
  /* ring centres (oligomers) in the gaps, then the stacked aggregate at the right */
  var RC=[[150,102],[300,201],[455,303],[205,303],[380,102]];
  for(i=0;i<30;i++){
    var m=i%3,j=Math.floor(i/3);
    var bx=78+j*66+m*14, by=MT[m]-12;                          /* bound on top of a microtubule */
    var r=Math.floor(i/6),q=i%6,an=Math.PI/3*q+.3;
    var rx=RC[r][0]+15*Math.cos(an), ry=RC[r][1]+15*Math.sin(an);   /* in an oligomer ring */
    var ax=640+15*Math.cos(an), ay=150+r*50+6*Math.sin(an);           /* in the stacked aggregate (rings seen edge-on) */
    var row=i%4, col=Math.floor(i/4);
    var fx=64+col*86+(row%2)*40+R()*14, fy=[102,201,303,398][row]+R()*10-5;   /* free, capped, apart */
    a.push({bx:bx,by:by,rx:rx,ry:ry,ax:ax,ay:ay,fx:fx,fy:fy,d:R()});
  }return a})();
function hexP(cx,cy,r){var d='';for(var k=0;k<6;k++){var a=Math.PI/180*(60*k-30);d+=(k?'L':'M')+(cx+r*Math.cos(a)).toFixed(1)+' '+(cy+r*Math.sin(a)).toFixed(1)}return d+'Z'}
function axScene(o){
  var g='',i,x;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* ---- base: the axon membrane and the microtubules ---- */
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="M20 '+MTOP+'H740M20 '+MBOT+'H740"/>';
  g+='<path class="wo sD" d="M20 '+(MTOP-12)+'H740M20 '+(MBOT+12)+'H740"/>';
  g+='<text class="t" x="20" y="'+(MTOP-26)+'">AXON OF A NEURON · MEMBRANE</text>';
  g+='<text class="t" x="20" y="'+(MBOT+40)+'">MICROTUBULES · ALPHA / BETA TUBULIN</text>';
  g+='</g>';
  g+='<g id="scMt">';
  MT.forEach(function(y){for(x=44;x<=716;x+=12){var b=((x-44)/12)%2;g+='<circle class="tb'+(b?' b':'')+'" cx="'+x+'" cy="'+y+'" r="5.4"/>'}});
  g+='</g>';
  /* ---- the aggregate outline (appears late in step 2) ---- */
  g+='<g id="scAgg"><path class="ag" d="M606 128V'+(150+4*50+22)+'M674 128V'+(150+4*50+22)+'"/></g>';
  /* ---- tau, each with its OLX-07010 cap (hidden until step 3) ---- */
  g+='<g id="scTau">';
  TAU.forEach(function(t,k){g+='<g class="tu" data-k="'+k+'"><path class="dr" d="'+hexP(11,-9,5.2)+'"/><circle class="tc" r="6.2"/></g>'});
  g+='</g>';
  /* ---- step labels, in the clear band under the axon ---- */
  var ly=SCH-10;
  g+='<g id="lb0"><text class="a" x="20" y="'+ly+'">TAU BOUND ALONG THE MICROTUBULES</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">TAU SELF-ASSOCIATES · OLIGOMERS, THEN AGGREGATES</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">OLX-07010 BOUND · TAU STAYS APART</text></g>';
  return g+'</svg>';
}
function scene(){return axScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),mt:$("#scMt",svg),ag:$("#scAgg",svg),
    tu:$$(".tu",svg).map(function(el){return {el:el,t:TAU[+el.getAttribute("data-k")],dr:el.querySelector(".dr")}}),
    l0:$("#lb0",svg),l1:$("#lb1",svg),l2:$("#lb2",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mt,b)}
    var loose=seg(p,.36,.5),stack=seg(p,.5,.62),cap=seg(p,.68,.8),free=seg(p,.72,.92);
    E.tu.forEach(function(T,i){var t=T.t,dd=t.d*.04;
      var l=Math.min(1,Math.max(0,(loose-dd)/(1-dd)));
      /* bound -> ring -> stacked aggregate -> released, capped and apart */
      var x=t.bx+(t.rx-t.bx)*l,y=t.by+(t.ry-t.by)*l;
      x+=(t.ax-x)*stack;y+=(t.ay-y)*stack;
      x+=(t.fx-x)*free;y+=(t.fy-y)*free;
      T.el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");op(T.el,b);
      op(T.dr,Math.min(1,Math.max(0,cap*1.5-(i%6)*.08)));
    });
    op(E.ag,b*.9*stack*(1-seg(p,.7,.82)));
    op(E.l0,b*(1-seg(p,.26,.33)));op(E.l1,b*seg(p,.4,.47)*(1-seg(p,.62,.68)));op(E.l2,b*seg(p,.78,.86));
  };
}
