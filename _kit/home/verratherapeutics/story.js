/* The story scene (BL/BY/DB): Verra's mechanism, from verratherapeutics.com and Klapproth et al., Br J Pharmacol 2026
   (PMID 41063509, Verra co-authors), as ONE continuous engraved scene. A heart-muscle cell membrane runs across the frame
   with ADAM10 proteases standing in it beside their substrate CX3CL1 and one other metalloprotease. Step 1: after a heart
   attack ADAM10 sheds CX3CL1 (the chemokine heads cut loose and rise) and neutrophils are drawn in. Step 2: VTH144, the
   modified ADAM10 prodomain, docks on each ADAM10 active site and leaves the other metalloprotease alone. Step 3: shedding
   stops, the substrate stays on the membrane and the neutrophils withdraw. Every element is driven by the scrubbed
   story progress. Schematic, not to scale. */
var SCW=760,SCH=520,MY=352,KS=1.45;
var VST=(function(){
  var s=144,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},i;
  var ad=[100,285,470].map(function(x){return {x:x,sx:x+Math.round(52*KS)}}),other=652;
  /* shed heads: each ADAM10's substrate head rises to a resting spot in the upper field */
  var sh=ad.map(function(a,k){return {x0:a.sx,y0:MY-92*KS,x1:a.sx+(R()-.5)*50,y1:170+R()*14,d:k*.2}});
  /* neutrophils arrive from the top edge and settle above the membrane */
  var nt=[];for(i=0;i<5;i++){var tx=150+i*118+(R()-.5)*30,ty=108+R()*8;nt.push({x0:tx+(R()-.5)*90,y0:ty-6,x1:tx,y1:ty,r:22+R()*4,d:i*.13,rot:R()*6.28})}
  /* VTH144 peptides: start in the upper left and dock on each active site */
  var ih=ad.map(function(a,k){return {x0:40+k*26,y0:140+k*30,x1:a.x+Math.round(19*KS),y1:MY-Math.round(76*KS),d:k*.18}});
  return {ad:ad,other:other,sh:sh,nt:nt,ih:ih};
})();
function vMem(){var g='',x;
  for(x=30;x<=730;x+=13){g+='<circle class="lh" cx="'+x+'" cy="'+(MY+4)+'" r="4.2"/><circle class="lh" cx="'+x+'" cy="'+(MY+44)+'" r="4.2"/><path class="lt sD" d="M'+(x-1.8)+' '+(MY+9)+'v14M'+(x+1.8)+' '+(MY+9)+'v14M'+(x-1.8)+' '+(MY+25)+'v14M'+(x+1.8)+' '+(MY+25)+'v14"/>'}
  return g}
function vAdam(a,k){var x=a.x;
  return '<g class="ad" data-k="'+k+'"><g transform="translate('+x+','+MY+') scale('+KS+') translate('+(-x)+','+(-MY)+')">'+
   '<path class="pr" d="M'+(x-3)+' '+(MY+34)+'V'+(MY-6)+'M'+(x+3)+' '+(MY+34)+'V'+(MY-6)+'"/>'+
   '<ellipse class="pr pf" cx="'+x+'" cy="'+(MY-20)+'" rx="15" ry="13"/>'+
   '<ellipse class="pr pf" cx="'+(x+5)+'" cy="'+(MY-46)+'" rx="12" ry="13"/>'+
   '<path class="pr pf" d="M'+(x-31)+' '+(MY-78)+'c0-16 14-26 32-26s32 10 32 26-15 24-32 24-32-8-32-24z"/>'+
   '<path class="pr" d="M'+(x-20)+' '+(MY-84)+'c8-6 18-7 26-3M'+(x-22)+' '+(MY-72)+'c10 4 20 4 28-1"/>'+
   '<circle class="as" cx="'+(x+19)+'" cy="'+(MY-75)+'" r="5"/></g></g>'}
function vSub(a,k){var x=a.sx,T='transform="translate('+x+','+MY+') scale('+KS+') translate('+(-x)+','+(-MY)+')"';
  return '<path '+T+' class="sb" d="M'+x+' '+(MY+34)+'V'+(MY-14)+'c-5-8 5-16 0-24s5-16 0-24 5-16 0-22"/>'+
   '<g class="hd0" data-k="'+k+'" '+T+'><circle class="sh" cx="'+x+'" cy="'+(MY-92)+'" r="10"/><path class="sb" d="M'+(x-5)+' '+(MY-94)+'h10M'+(x-4)+' '+(MY-89)+'h8"/></g>'}
function vOther(){var x=VST.other;
  return '<g class="ot" transform="translate('+x+','+MY+') scale('+KS+') translate('+(-x)+','+(-MY)+')"><path class="po" d="M'+(x-3)+' '+(MY+34)+'V'+(MY-6)+'M'+(x+3)+' '+(MY+34)+'V'+(MY-6)+'"/>'+
   '<rect class="po pf" x="'+(x-22)+'" y="'+(MY-40)+'" width="44" height="34" rx="2"/>'+
   '<path class="po pf" d="M'+(x-26)+' '+(MY-62)+'l26-16 26 16-26 18z"/><circle class="ao" cx="'+(x+14)+'" cy="'+(MY-62)+'" r="4.2"/></g>'}
function vNeu(n,k){var r=n.r,g='<g class="nt" data-k="'+k+'"><circle class="nm" cx="0" cy="0" r="'+r.toFixed(1)+'"/>';
  for(var i=0;i<3;i++){var a=n.rot+i*2.1;g+='<circle class="nn" cx="'+(Math.cos(a)*r*.34).toFixed(1)+'" cy="'+(Math.sin(a)*r*.34).toFixed(1)+'" r="'+(r*.3).toFixed(1)+'"/>'}
  return g+'<path class="nk" d="M'+(-r*.18).toFixed(1)+' '+(-r*.05).toFixed(1)+'l'+(r*.36).toFixed(1)+' '+(r*.1).toFixed(1)+'"/></g>'}
function vScene(o){
  var g='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase"><path class="frm sD" d="M24 20H736M24 500H736"/>';
  g+='<text class="t" x="24" y="10">HEART-MUSCLE CELL MEMBRANE · SCHEMATIC</text></g>';
  g+='<g id="scMem">'+vMem()+'</g>';
  g+='<g id="scSub">'+VST.ad.map(vSub).join("")+'</g>';
  g+='<g id="scAd">'+VST.ad.map(vAdam).join("")+vOther()+'</g>';
  g+='<g id="scShed">'+VST.sh.map(function(h,k){return '<g class="hd" data-k="'+k+'"><g transform="scale('+KS+')"><circle class="sh" cx="0" cy="0" r="10"/><path class="sb" d="M-5 -2h10M-4 3h8"/></g></g>'}).join("")+'</g>';
  g+='<g id="scNt">'+VST.nt.map(vNeu).join("")+'</g>';
  g+='<g id="scIh">'+VST.ih.map(function(h,k){return '<g class="ih" data-k="'+k+'"><g transform="scale('+KS+')"><path d="M-11 -4c4-6 8 6 12 0s8 6 11 1"/><circle cx="-11" cy="-4" r="2.6"/><circle cx="12" cy="-3" r="2.6"/></g></g>'}).join("")+'</g>';
  g+='<text class="t" x="'+VST.ad[0].x+'" y="'+(MY+84)+'" text-anchor="middle">ADAM10</text>';
  g+='<text class="t" x="'+VST.ad[0].sx+'" y="'+(MY+84)+'" text-anchor="middle">CX3CL1</text>';
  g+='<text class="t" x="736" y="'+(MY+84)+'" text-anchor="end">OTHER METALLOPROTEASE</text>';
  g+='<g id="lb1"><text class="a" x="24" y="48">ADAM10 SHEDS CX3CL1 · NEUTROPHILS ARRIVE</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="48">VTH144 BLOCKS ADAM10 ONLY</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="48">SHEDDING STOPS · INFLAMMATION EASES</text></g>';
  g+='<text class="t k1" x="24" y="486">● ACTIVE SITE</text><text class="t k2" x="'+(o.mob?262:200)+'" y="486">● VTH144</text><text class="t k3" x="'+(o.mob?440:340)+'" y="486">○ NEUTROPHIL</text>';
  return g+'</svg>';
}
function scene(){return vScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, .k1, .k2, .k3, svg > text.t",svg),mem:$("#scMem",svg),sub:$("#scSub",svg),ad:$$(".ad",svg),ot:$(".ot",svg),
    hd0:$$(".hd0",svg),hd:$$(".hd",svg).map(function(el){return {el:el,h:VST.sh[+el.getAttribute("data-k")]}}),
    nt:$$(".nt",svg).map(function(el){return {el:el,n:VST.nt[+el.getAttribute("data-k")]}}),
    ih:$$(".ih",svg).map(function(el){return {el:el,h:VST.ih[+el.getAttribute("data-k")]}}),
    as:$$(".as",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function cl(v){return v<0?0:v>1?1:v}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var grow=seg(p,0,.14),shed=seg(p,.1,.3),dock=seg(p,.4,.6),calm=seg(p,.7,.92);
    op(E.mem,b*grow);op(E.sub,b*seg(p,.04,.16));op(E.ot,b*seg(p,.06,.18));
    E.ad.forEach(function(el,i){op(el,b*cl(grow*1.6-i*.15))});
    /* the active sites glow while ADAM10 is cutting, then go quiet under VTH144 */
    E.as.forEach(function(el,i){op(el,b*grow*(1-.75*seg(dock,i*.18+.5,i*.18+.8)))});
    /* substrate heads: attached at first, cut loose and rise in step 1; in step 3 the membrane keeps its CX3CL1 */
    E.hd0.forEach(function(el,i){var h=VST.sh[i],a=cl(shed*1.4-h.d);op(el,b*seg(p,.04,.16)*(a>0.02?calm:1))});
    E.hd.forEach(function(x){var h=x.h,a=cl(shed*1.4-h.d),k=a*a*(3-2*a);
      x.el.setAttribute("transform","translate("+(h.x0+(h.x1-h.x0)*k).toFixed(1)+","+(h.y0+(h.y1-h.y0)*k-6*calm).toFixed(1)+")");
      op(x.el,b*(a>0.02?1:0)*(1-calm))});
    /* neutrophils are drawn in by the shed chemokine, then withdraw */
    E.nt.forEach(function(x){var n=x.n,a=cl(shed*1.5-n.d),k=a*a*(3-2*a),o=cl(calm*1.4-n.d*.6);
      var X=n.x0+(n.x1-n.x0)*k,Y=n.y0+(n.y1-n.y0)*k-o*30;
      x.el.setAttribute("transform","translate("+X.toFixed(1)+","+Y.toFixed(1)+")");op(x.el,b*cl(a*2)*(1-o))});
    /* VTH144 flies in and caps each ADAM10 active site, and stays */
    E.ih.forEach(function(x){var h=x.h,a=cl(dock*1.5-h.d),k=a*a*(3-2*a);
      x.el.setAttribute("transform","translate("+(h.x0+(h.x1-h.x0)*k).toFixed(1)+","+(h.y0+(h.y1-h.y0)*k).toFixed(1)+")");op(x.el,b*cl(a*3))});
    op(E.l1,b*seg(p,.12,.2)*(1-seg(p,.32,.38)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.76,.84));
  };
}
