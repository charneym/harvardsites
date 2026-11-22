/* The story scene (BL/BY/DB): how TT004 is meant to work, from Ting's October 2026 release, as ONE continuous scene kept
   on screen for all three steps. Left: five outer hair cells of the cochlea in side view, each with its staircase bundle of
   stereocilia on top, standing on the basilar membrane. Right: a cluster of tumour cells. Step 1: cisplatin (red dots)
   reaches both; the hair cells' bundles collapse and the cells fade (permanent hearing loss). Step 2: with TT004 (pale
   rings) the same exposure leaves the hair cells and their bundles intact, each held in a protective outline. Step 3:
   cisplatin still acts on the tumour, whose cells shrink and break up, while the hair cells stay whole.
   Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var HC=[70,160,250,340,430],TUM=(function(){var s=42,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[];
  var C=[[600,250,46],[668,214,38],[664,300,42],[596,340,36],[540,290,30],[612,170,30],[700,262,28],[548,206,26],[706,340,26],[650,378,28]];
  C.forEach(function(c){a.push({x:c[0],y:c[1],r:c[2],ph:R()*6.28,d:R()})});return a})();
var DOTS=(function(){var s=7,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[];
  for(var i=0;i<34;i++)a.push({x:30+R()*700,y0:66+R()*24,y1:150+R()*260,d:R(),tum:R()<.4});return a})();
function hcScene(o){
  var f=function(n){return (+n).toFixed(1)},g='';
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="bl sD" d="M20 440H500"/>';
  g+='<path class="frm sD" d="M20 452H500M520 452H740"/>';
  g+='<text class="t" x="20" y="24">OUTER HAIR CELLS · COCHLEA</text>';
  g+='<text class="t" x="740" y="24" text-anchor="end">TUMOUR</text>';
  g+='</g>';
  /* the hair cells: body, nucleus, cuticular plate and a three-row staircase bundle */
  HC.forEach(function(x,i){
    g+='<g class="hc" data-i="'+i+'" transform="translate('+x+' 0)">';
    g+='<path class="halo" d="M-40 96H40V446H-40Z"/>';
    g+='<path class="cb" d="M-28 122Q-30 116 -24 114H24Q30 116 28 122V418Q28 436 0 438Q-28 436 -28 418Z"/>';
    g+='<path class="cp" d="M-24 122H24"/>';
    g+='<ellipse class="nu" cx="0" cy="380" rx="13" ry="16"/>';
    g+='<g class="bd" transform="translate(0 114)">';
    [[-18,14],[-14,14],[-10,14],[-4,26],[0,26],[4,26],[10,40],[14,40],[18,40]].forEach(function(s){
      g+='<path class="sc" d="M'+s[0]+' 0V'+(-s[1])+'"/>';
    });
    g+='</g></g>';
  });
  /* tumour cells */
  g+='<g id="scTum">';
  TUM.forEach(function(c,i){g+='<g class="tc" data-i="'+i+'" transform="translate('+c.x+' '+c.y+')"><circle class="tb" r="'+c.r+'"/><circle class="tn" r="'+f(c.r*.38)+'" cx="'+f(c.r*.12)+'" cy="'+f(-c.r*.08)+'"/></g>'});
  g+='</g>';
  /* cisplatin (red dots) and TT004 (pale rings) */
  g+='<g id="scDots">';
  DOTS.forEach(function(d,i){g+='<circle class="cis" data-i="'+i+'" cx="'+f(d.x)+'" cy="'+f(d.y0)+'" r="4.2"/>'});
  HC.forEach(function(x,i){for(var k=0;k<3;k++)g+='<circle class="tt" data-h="'+i+'" data-k="'+k+'" cx="'+x+'" cy="-20" r="6"/>'});
  g+='</g>';
  g+='<g id="lb1"><text class="a" x="20" y="496">CISPLATIN · BUNDLES COLLAPSE, HAIR CELLS LOST</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="496">WITH TT004 · HAIR CELLS PROTECTED</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="496">CISPLATIN STILL ACTS ON THE TUMOUR</text></g>';
  g+='<g id="key"><circle class="cis" cx="560" cy="44" r="4.2"/><text class="t" x="572" y="48">CISPLATIN</text>'+
     '<circle class="tt" cx="'+(o.mob?688:672)+'" cy="44" r="5"/><text class="t k2" x="'+(o.mob?700:684)+'" y="48">TT004</text></g>';
  return g+'</svg>';
}
function scene(){return hcScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),
    hc:$$(".hc",svg).map(function(el){return {el:el,i:+el.getAttribute("data-i"),bd:$(".bd",el),halo:$(".halo",el),body:$$(".cb,.cp,.nu",el)}}),
    tc:$$(".tc",svg).map(function(el){var i=+el.getAttribute("data-i");return {el:el,c:TUM[i]}}),
    cis:$$(".cis[data-i]",svg).map(function(el){return {el:el,d:DOTS[+el.getAttribute("data-i")]}}),
    tt:$$(".tt[data-h]",svg).map(function(el){return {el:el,h:+el.getAttribute("data-h"),k:+el.getAttribute("data-k")}}),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),key:$("#key",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.key,b)}
    var inj=seg(p,.1,.3),prot=seg(p,.4,.58),tum=seg(p,.7,.92);
    /* step 1 damages hair cells 1, 2 and 4 (the others weaken); step 2 resets the exposure with TT004 */
    var dmg=inj*(1-prot);
    E.hc.forEach(function(H){var hit=[0,1,1,0,1][H.i]?1:.35,d=dmg*hit;
      H.bd.setAttribute("transform","translate(0 114) scale(1 "+(1-.82*d).toFixed(3)+") skewX("+(d*(H.i%2?-28:24)).toFixed(1)+")");
      op(H.bd,b*(1-.55*d));H.body.forEach(function(x){op(x,b*(1-.62*d))});
      op(H.halo,b*prot);
    });
    /* cisplatin falls in during step 1, again with TT004 in step 2, and gathers on the tumour in step 3 */
    var fall=seg(p,.06,.3),fall2=seg(p,.4,.58);
    E.cis.forEach(function(C){var d=C.d,ph=Math.min(1,Math.max(0,(p<.36?fall:fall2)*1.4-d.d*.4)),y=d.y0+(d.y1-d.y0)*ph,x=d.x;
      if(d.tum||p>.66){var tg=TUM[Math.floor(d.d*TUM.length)],tq=seg(p,.66,.86);x=x+(tg.x+Math.cos(d.d*40)*tg.r*.9-x)*tq;y=y+(tg.y+Math.sin(d.d*40)*tg.r*.9-y)*tq}
      C.el.setAttribute("cx",x.toFixed(1));C.el.setAttribute("cy",y.toFixed(1));
      op(C.el,b*(p<.36?seg(p,.06,.12)*(1-seg(p,.32,.38)):seg(p,.4,.46))*(1-.5*tum*(d.tum?0:1)));
    });
    /* TT004 rings settle around each hair cell in step 2 and stay */
    E.tt.forEach(function(T){var x=HC[T.h]+[-34,34,0][T.k],y=[200,280,98][T.k],q=Math.min(1,Math.max(0,prot*1.5-T.h*.08-T.k*.06));
      T.el.setAttribute("cx",x.toFixed(1));T.el.setAttribute("cy",(y-(1-q)*160).toFixed(1));op(T.el,b*q)});
    /* the tumour: whole until step 3, then its cells shrink and break up */
    E.tc.forEach(function(T,i){var q=Math.min(1,Math.max(0,tum*1.5-T.c.d*.5)),s=1-.5*q;
      T.el.setAttribute("transform","translate("+(T.c.x+Math.cos(T.c.ph)*14*q).toFixed(1)+" "+(T.c.y+Math.sin(T.c.ph)*14*q).toFixed(1)+") scale("+s.toFixed(3)+")");op(T.el,b*(1-.55*q))});
    op(E.l1,b*seg(p,.16,.24)*(1-seg(p,.34,.4)));op(E.l2,b*seg(p,.46,.54)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.78,.86));
  };
}
