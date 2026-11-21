/* The story scene (BL/BY/DB/CX): Silver Shell on a woven textile, drawn as ONE continuous engraved cross-section that
   stays on screen for all three steps. A plain weave in section: warp yarns cut across (ellipses packed with filaments),
   the weft yarn passing over and under them. Step 1 the chitosan finish (lime contour) draws around the weft and fine
   silver chloride particles settle on it. Step 2 wash water sweeps across and drains away; the particles stay put.
   Step 3 microbes land on the fibre and break apart on contact. Sources: chitozanhealth.com (Textiles, Antimicrobial
   Resistance) and NIH RePORTER 1R41AI197639-01 (chitosan carrying 0.25-micron silver chloride particles). */
var SCW=760,SCH=520,WY=290,WA=84,WB=22,WP=150,WX0=80;
function wy(x){return WY-WA*Math.cos(Math.PI*(x-WX0)/WP)}
function wslope(x){return WA*Math.PI/WP*Math.sin(Math.PI*(x-WX0)/WP)}
/* a point offset d along the curve's normal (positive = below), so the band keeps its width on the slopes */
function wn(x,d){var s=wslope(x),l=Math.sqrt(1+s*s);return [x-s*d/l,wy(x)+d/l]}
var PARTS=(function(){var a=[],x,k=0;for(x=30;x<732;x+=13){var s=(k%2)?1:-1;a.push({x:x+((k*7)%5)-2,s:s,d:((k*37)%100)/100});k++}return a})();
var BUGS=[[80,0,0],[196,1,.08],[380,0,.16],[452,1,.05],[606,0,.12],[680,1,.2],[300,1,.24],[540,0,.28]];
function fabricScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i,x;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase"><path class="frm sD" d="M18 24H120M740 24H638M18 466H120M740 466H638"/>';
  g+='<text class="t" x="18" y="14">WOVEN TEXTILE · CROSS-SECTION</text><text class="t tr" x="742" y="14" text-anchor="end">SILVER SHELL™</text></g>';
  /* warp yarns, cut across: an ellipse packed with filaments */
  g+='<g id="scWarp">';
  for(i=0;i<5;i++){var cx=WX0+i*WP,cy=WY+(i%2?-1:1)*8;
    g+='<ellipse class="wp sD" cx="'+cx+'" cy="'+cy+'" rx="50" ry="46"/>';
    [[0,0],[-24,-14],[24,-14],[-24,15],[24,15],[0,-29],[0,29],[-38,0],[38,0],[-13,-6],[13,6],[-15,30],[15,-30],[-14,28],[14,-28]].forEach(function(q,j){g+='<circle class="fil sD" cx="'+(cx+q[0])+'" cy="'+(cy+q[1])+'" r="'+(j>8?5.6:7.4)+'"/>'});}
  g+='</g>';
  /* the weft: a band over and under, with filament lines along it */
  var top='',bot='',mid1='',mid2='',ct='',cb='';
  var P=function(x,d){var q=wn(x,d);return q[0].toFixed(1)+' '+q[1].toFixed(1)};
  for(x=20;x<=740;x+=3){var c=x===20?'M':'L';top+=c+P(x,-WB);bot+=c+P(x,WB);mid1+=c+P(x,-WB*.35);mid2+=c+P(x,WB*.4);ct+=c+P(x,-WB-7);cb+=c+P(x,WB+7)}
  g+='<g id="scWeft"><path class="wf sD" d="'+top+'"/><path class="wf sD" d="'+bot+'"/><path class="wfi sD" d="'+mid1+'"/><path class="wfi sD" d="'+mid2+'"/></g>';
  /* the chitosan finish and its silver chloride particles */
  g+='<g id="scCoat"><path class="ct sD" d="'+ct+'"/><path class="ct sD" d="'+cb+'"/></g>';
  g+='<g id="scAg">';PARTS.forEach(function(p,k){var q=wn(p.x,p.s*(WB+7));g+='<circle class="ag" data-k="'+k+'" cx="'+f(q[0])+'" cy="'+f(q[1])+'" r="2.8"/>'});g+='</g>';
  /* wash water: long wave lines and drops */
  g+='<clipPath id="scClip"><rect x="18" y="30" width="724" height="430"/></clipPath><g id="scWash" clip-path="url(#scClip)">';
  for(i=0;i<5;i++){var yy=60+i*26,d='';for(x=0;x<=760;x+=10)d+=(x?'L':'M')+x+' '+f(yy+7*Math.sin(x/38+i*1.3));g+='<path class="wv" d="'+d+'"/>'}
  for(i=0;i<12;i++){g+='<path class="dr" data-k="'+i+'" d="M0 -9C4 -2 6 2 6 5A6 6 0 0 1 -6 5C-6 2 -4 -2 0 -9Z"/>'}
  g+='</g>';
  /* microbes: rods with a flagellum */
  g+='<g id="scBug">';BUGS.forEach(function(b,k){g+='<g class="bug" data-k="'+k+'"><rect class="bb" x="-15" y="-6.5" width="30" height="13" rx="6.5"/><path class="bf" d="M15 0c6 -5 10 5 16 0s10 5 15 0"/><circle class="bn" cx="-4" cy="0" r="2"/></g>'});g+='</g>';
  g+='<g id="lb1"><text class="a" x="18" y="500">CHITOSAN FINISH · SILVER CHLORIDE PARTICLES</text></g>';
  g+='<g id="lb2"><text class="a" x="18" y="500">BOUND TO THE FIBRE · 75 WASHES</text></g>';
  g+='<g id="lb3"><text class="a" x="18" y="500">MICROBES KILLED ON CONTACT</text></g>';
  return g+'</svg>';
}
function scene(){return fabricScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),warp:dl("#scWarp .sD"),weft:dl("#scWeft .sD"),coat:dl("#scCoat .sD"),
    ag:$$(".ag",svg).map(function(el){return {el:el,p:PARTS[+el.getAttribute("data-k")]}}),
    wv:$$("#scWash .wv",svg),dr:$$("#scWash .dr",svg),bug:$$(".bug",svg).map(function(el){return {el:el,b:BUGS[+el.getAttribute("data-k")]}}),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function cl(x){return x<0?0:x>1?1:x}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    draw(E.base,b);
    var grow=seg(p,0,.14),coat=seg(p,.08,.26),wash=seg(p,.36,.64),land=seg(p,.68,.86),kill=seg(p,.76,.94);
    var g0=Math.min(1,Math.max(b*b,grow*1.15)),c0=Math.min(1,Math.max(b*b*(p>.3?1:0),coat));
    draw(E.warp,g0);draw(E.weft,g0);draw(E.coat,c0);
    E.ag.forEach(function(A){var a=Math.max(c0>=1?1:0,cl((coat-A.p.d*.6)*2.2));op(A.el,b*a)});
    /* the wash: waves pass left to right and fade; drops fall, hit the fabric and run off */
    var wf=Math.sin(Math.PI*wash);
    E.wv.forEach(function(el,i){op(el,b*wf*.9);el.setAttribute("transform","translate("+(-120+240*wash+i*6).toFixed(1)+" "+(wash*30).toFixed(1)+")")});
    E.dr.forEach(function(el,i){var t=cl((wash-(i%6)*.07)*1.7),x=60+((i*61)%640),y0=90+((i*29)%70),y1=wn(x,-WB-16)[1],y=y0+(y1-y0)*Math.min(1,t*1.4),dx=t>.7?(t-.7)*120*(i%2?1:-1):0;
      el.setAttribute("transform","translate("+(x+dx).toFixed(1)+" "+y.toFixed(1)+")");op(el,b*wf*(t>0&&t<1?1:0)*(1-cl((t-.75)*4)))});
    /* microbes descend, land on the finish, and break apart */
    E.bug.forEach(function(B,i){var bb=B.b,x=bb[0],t=cl((land-bb[2]*.9)*1.6),q=wn(x,-WB-7-11),ty=q[1],y0=40+((i*23)%40),y=y0+(ty-y0)*t*t*(3-2*t);
      var rot=(1-t)*(bb[1]?24:-18)+t*Math.atan(wslope(x))*57.3,k=cl((kill-bb[2]*.8)*1.8);
      var bx=x+(q[0]-x)*t;B.el.setAttribute("transform","translate("+bx.toFixed(1)+" "+y.toFixed(1)+") rotate("+rot.toFixed(1)+") scale("+(1.35-.2*k).toFixed(3)+")");
      B.el.classList.toggle("dead",k>.35);op(B.el,b*cl(t*4)*(1-k*.45))});
    op(E.l1,b*seg(p,.06,.16)*(1-seg(p,.28,.34)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.86));
  };
}
