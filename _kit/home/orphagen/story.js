/* The story scene (BL/BY/DB): how OR-449 works (orphagen.com OR-449 page), as ONE continuous scene drawn in fine line:
   a stretch of tumour-cell DNA (a double helix across the base of the frame) with three SF-1 receptors bound to it, each
   drawn as its DNA-binding domain on the helix and its ligand-binding domain above, with an open pocket.
   Step 1 (driver): the receptors light up and read out transcripts that rise away from the DNA.
   Step 2 (block): OR-449 (a small ring molecule) settles into each pocket; the receptors dim.
   Step 3 (effect): the transcripts fade. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520,DY=440;
var RX=[150,380,610];
function dnaPath(ph){var d='',x;for(x=20;x<=740;x+=6){var y=DY+16*Math.sin((x/120)*Math.PI*2+ph);d+=(x===20?'M':'L')+x+' '+y.toFixed(1)}return d}
function lbdPath(cx){return 'M'+(cx-66)+' '+(DY-130)+'C'+(cx-86)+' '+(DY-216)+' '+(cx-52)+' '+(DY-284)+' '+(cx-16)+' '+(DY-284)+'L'+(cx-16)+' '+(DY-250)+'C'+(cx-16)+' '+(DY-230)+' '+(cx+16)+' '+(DY-230)+' '+(cx+16)+' '+(DY-250)+'L'+(cx+16)+' '+(DY-284)+'C'+(cx+54)+' '+(DY-284)+' '+(cx+88)+' '+(DY-216)+' '+(cx+68)+' '+(DY-130)+'C'+(cx+58)+' '+(DY-92)+' '+(cx-54)+' '+(DY-92)+' '+(cx-66)+' '+(DY-130)+'Z'}
function orScene(o){
  var g='',i,x;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 112 '+SCW+' '+(SCH-112)+'" aria-hidden="true">';
  /* ---- base: the DNA double helix and captions ---- */
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+dnaPath(0)+'"/><path class="wl sD" d="'+dnaPath(Math.PI)+'"/>';
  var r='';for(x=26;x<=736;x+=15){var a=(x/120)*Math.PI*2,y1=DY+16*Math.sin(a),y2=DY+16*Math.sin(a+Math.PI);r+='M'+x+' '+y1.toFixed(1)+'V'+y2.toFixed(1)}
  g+='<path class="wo sD" d="'+r+'"/>';
  g+='<text class="t" x="20" y="'+(DY+56)+'">TUMOUR-CELL DNA · SF-1 RESPONSE ELEMENTS</text>';
  g+='</g>';
  /* ---- transcripts: wavy strands rising from each receptor toward the upper right ---- */
  g+='<g id="scTr">';
  RX.forEach(function(cx,k){for(i=0;i<3;i++){var sx=cx+64+i*12,sy=DY-60-i*8,d='M'+sx+' '+sy;
    for(var j=1;j<=7;j++){d+=' Q'+(sx+j*6+(j%2?14:-6))+' '+(sy-j*30+15)+' '+(sx+j*6)+' '+(sy-j*30)}
    g+='<path class="tr" data-k="'+k+'" d="'+d+'"/>'}});
  g+='</g>';
  /* ---- the SF-1 receptors ---- */
  g+='<g id="scRec">';
  RX.forEach(function(cx,k){
    var P=lbdPath(cx);
    g+='<g class="rc" data-k="'+k+'">'+
      '<path class="glow" d="'+P+'"/><path class="lbd" d="'+P+'"/>'+
      '<path class="hl" d="M'+(cx-48)+' '+(DY-138)+'C'+(cx-56)+' '+(DY-184)+' '+(cx-44)+' '+(DY-226)+' '+(cx-28)+' '+(DY-248)+'M'+(cx+48)+' '+(DY-138)+'C'+(cx+56)+' '+(DY-184)+' '+(cx+46)+' '+(DY-226)+' '+(cx+30)+' '+(DY-248)+'M'+(cx-28)+' '+(DY-118)+'C'+(cx-8)+' '+(DY-160)+' '+(cx+8)+' '+(DY-160)+' '+(cx+28)+' '+(DY-118)+'"/>'+
      '<path class="lnk" d="M'+cx+' '+(DY-97)+'V'+(DY-60)+'"/>'+
      '<path class="dbd" d="M'+(cx-36)+' '+(DY-60)+'H'+(cx+36)+'C'+(cx+46)+' '+(DY-60)+' '+(cx+46)+' '+(DY-22)+' '+(cx+36)+' '+(DY-22)+'H'+(cx-36)+'C'+(cx-46)+' '+(DY-22)+' '+(cx-46)+' '+(DY-60)+' '+(cx-36)+' '+(DY-60)+'Z"/>'+
    '</g>';
  });
  g+='</g>';
  /* ---- OR-449: drawn as a small ring molecule that settles into each pocket ---- */
  g+='<g id="scDrug">';
  RX.forEach(function(cx,k){
    g+='<g class="dr" data-k="'+k+'"><path d="M0 -14l12 7v14l-12 7-12-7v-14z"/><path d="M12 -7l14-6 9 10-8 11-15-1"/><path class="bd" d="M-12 7l-10 8"/><circle cx="-24" cy="17" r="3"/></g>';
  });
  g+='</g>';
  /* ---- step labels, in the clear band at the top ---- */
  var ly=134;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">SF-1 ACTIVE · GROWTH GENES READ OUT</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">OR-449 IN THE LIGAND POCKET</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">SF-1 BLOCKED · TUMOUR DNA SYNTHESIS DOWN</text></g>';
  return g+'</svg>';
}
function scene(){return orScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),rc:$$(".rc",svg),glow:$$(".rc .glow",svg),
    tr:$$(".tr",svg),dr:$$(".dr",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  E.tr.forEach(function(p){p.style.strokeDasharray="9 11"});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});E.rc.forEach(function(el){op(el,b)})}
    var on=seg(p,.04,.22),cap=seg(p,.36,.58),off=seg(p,.62,.88);
    E.glow.forEach(function(el){op(el,on*(1-.85*cap))});
    E.tr.forEach(function(el,i){op(el,b*(1-off)*Math.min(1,Math.max(0,on*1.6-(i%3)*.2)));el.style.strokeDashoffset=(-p*900-(i%3)*7).toFixed(1)});
    E.dr.forEach(function(el,k){var gi=Math.min(1,Math.max(0,cap*1.5-k*.18)),y=(DY-250)-170*(1-gi);
      op(el,b*Math.min(1,gi*2));el.setAttribute("transform","translate("+RX[k]+" "+y.toFixed(1)+") rotate("+(40*(1-gi)).toFixed(1)+")")});
    op(E.l1,b*seg(p,.1,.18)*(1-seg(p,.32,.38)));op(E.l2,b*seg(p,.46,.54)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.78,.86));
  };
}
