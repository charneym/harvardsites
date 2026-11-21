/* The story scene (BL/BY/DB): how Allander's topical Smad7 biologic works, as ONE continuous scene.
   An engraved cross-section of epithelium (stratified cells over a basement membrane) above its stroma, with an open
   wound in the middle, kept on screen for all three steps.
   Step 1: injury (radiation or diabetes) leaves TGF-beta and NF-kB switched on; inflammatory cells gather in the stroma
   under the wound and cytokines (drawn as small rings) build up; the epithelium cannot close.
   Step 2: the gel is applied on top; the Tat-tagged Smad7 molecules (accent dots) cross into the epithelial cells,
   which light up; nothing goes on into the deeper tissue (in dogs the gel was undetectable in serum).
   Step 3: inside the cells Smad7 blocks both pathways: the cytokine rings and the inflammatory cells fade, and new
   epithelial cells fill the wound from its edges.
   Sources: allanderbiotech.com (/the-science, news), Boss et al., Int J Radiat Oncol Biol Phys 2021 (Tat-PYC-Smad7
   gel in dogs: mainly epithelial uptake, undetectable in serum, lower IL-1b and TNF-a, shorter grade 3 mucositis), and
   the 2026 Nature Communications diabetic-wound paper (TGF-b and NF-kB activated in human diabetic wounds; topical
   Tat-PYC-Smad7 accelerated healing in diabetic mice and pigs; keratinocytes and neutrophils the main targets). */
var SCW=760,SCH=520;
var EX0=24,EX1=736,EY0=58,EY1=304,GAP0=318,GAP1=442;
function rngS(s){return function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff}}
function epi(){
  var R=rngS(20260327),pts=[],rows=[[EY1-20,21,.2],[EY1-62,16,.34],[EY1-106,14,.38],[EY1-148,12,.4],[EY1-188,10,.42],[EY1-224,9,.44]];
  rows.forEach(function(r,j){for(var i=0;i<r[1];i++){var off=(j%2)*.5;
    pts.push([EX0+(EX1-EX0)*((i+.5+(off-.25)*.6+(R()-.5)*r[2])/r[1]),r[0]+(R()-.5)*14,j])}});
  function clip(poly,a,b){var out=[],nx=b[0]-a[0],ny=(b[1]-a[1])*1.6,mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2;
    var f=function(p){return (p[0]-mx)*nx+(p[1]-my)*ny};
    for(var k=0;k<poly.length;k++){var P=poly[k],Q=poly[(k+1)%poly.length],fp=f(P),fq=f(Q);
      if(fp<=0)out.push(P);
      if((fp<0&&fq>0)||(fp>0&&fq<0)){var t=fp/(fp-fq);out.push([P[0]+(Q[0]-P[0])*t,P[1]+(Q[1]-P[1])*t])}}
    return out}
  return pts.map(function(p,k){var poly=[[EX0,EY0],[EX1,EY0],[EX1,EY1],[EX0,EY1]];
    pts.forEach(function(q,m){if(m!==k)poly=clip(poly,p,q)});
    var cx=0,cy=0;poly.forEach(function(v){cx+=v[0];cy+=v[1]});cx/=poly.length;cy/=poly.length;
    var gap=cx>GAP0&&cx<GAP1;
    return {poly:poly,cx:cx,cy:cy,row:p[2],gap:gap,d:gap?Math.min(cx-GAP0,GAP1-cx):Math.min(Math.abs(cx-GAP0),Math.abs(cx-GAP1)),t:R()}});
}
var EPI=epi();
/* inflammatory cells in the stroma under the wound, cytokine rings around them, drug molecules in the gel */
var NEU=(function(){var R=rngS(711),a=[];for(var i=0;i<8;i++)a.push([GAP0-40+(GAP1-GAP0+80)*((i+.5)/8)+(R()-.5)*16,EY1+40+R()*110,R()*6.28]);return a})();
var CYT=(function(){var R=rngS(1013),a=[];for(var i=0;i<22;i++)a.push([GAP0-80+(GAP1-GAP0+160)*R(),EY0+60+R()*330,R()]);return a.filter(function(c){return !(c[1]<EY1&&(c[0]<GAP0||c[0]>GAP1))})})();
var MOL=(function(){var R=rngS(424),a=[],tg=EPI.filter(function(c){return !c.gap&&c.row>=2&&Math.abs(c.cx-(GAP0+GAP1)/2)<250});
  for(var i=0;i<30;i++){var c=tg[Math.floor(R()*tg.length)];a.push({x0:EX0+40+(EX1-EX0-80)*R(),y0:EY0-24+R()*14,x1:c.cx+(R()-.5)*12,y1:c.cy+(R()-.5)*8,d:R()})}return a})();
function rpath(pts,k){/* a polygon with softly rounded corners: each corner becomes a quadratic curve */
  var n=pts.length,f=function(v){return (+v).toFixed(1)},d='';
  for(var i=0;i<n;i++){var P=pts[(i+n-1)%n],C=pts[i],N=pts[(i+1)%n];
    var a=[C[0]+(P[0]-C[0])*k,C[1]+(P[1]-C[1])*k],b=[C[0]+(N[0]-C[0])*k,C[1]+(N[1]-C[1])*k];
    d+=(i?'L':'M')+f(a[0])+' '+f(a[1])+'Q'+f(C[0])+' '+f(C[1])+' '+f(b[0])+' '+f(b[1])}
  return d+'Z'}
/* stroma: spindle fibroblasts and two capillaries, the ordinary histology under any epithelium */
var FIBRO=(function(){var R=rngS(3301),a=[];for(var i=0;i<14;i++){var x=EX0+30+(EX1-EX0-60)*((i+.5)/14)+(R()-.5)*30,y=EY1+44+R()*120;a.push([x,y,(R()-.5)*.5,16+R()*10])}return a})();
var CAPL=[[EX0+96,EY1+128,15],[EX1-118,EY1+104,13]];
function epiScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* ---- base: basement membrane, stroma fibres and the section captions ---- */
  g+='<g id="scBase">';
  var bm='M'+EX0+' '+(EY1+3);for(i=0;i<=24;i++){var x=EX0+(EX1-EX0)*i/24;bm+='L'+f(x)+' '+f(EY1+3+Math.sin(i*1.3)*1.6)}
  g+='<path class="bm sD" d="'+bm+'"/>';
  var R=rngS(99);
  for(i=0;i<8;i++){var y=EY1+30+i*21+R()*6,d='M'+EX0+' '+f(y);for(var k=1;k<=12;k++){var xx=EX0+(EX1-EX0)*k/12;d+='Q'+f(xx-30)+' '+f(y+(R()-.5)*16)+' '+f(xx)+' '+f(y+(R()-.5)*6)}g+='<path class="fbr sD" d="'+d+'"/>'}
  FIBRO.forEach(function(F){g+='<g class="fib sF" transform="translate('+f(F[0])+' '+f(F[1])+') rotate('+f(F[2]*57.3)+')"><path class="fbo" d="M'+f(-F[3])+' 0Q0 -4.2 '+f(F[3])+' 0Q0 4.2 '+f(-F[3])+' 0Z"/><ellipse class="fnu" rx="5.4" ry="1.7"/></g>'});
  CAPL.forEach(function(C){g+='<g class="cpl sF" transform="translate('+C[0]+' '+C[1]+')"><circle class="cwl" r="'+C[2]+'"/><circle class="cwl in" r="'+(C[2]-4)+'"/><circle class="rbc" cx="-2" cy="-2" r="4.2"/><circle class="rbc" cx="4" cy="4" r="3.6"/></g>'});
  g+='<text class="t" x="'+EX1+'" y="'+(EY0-38)+'" text-anchor="end">EPITHELIUM</text>';
  g+='<text class="t" x="'+EX1+'" y="'+(EY1+22)+'" text-anchor="end">STROMA</text>';
  g+='</g>';
  /* ---- the gel layer laid on the surface in step 2 ---- */
  var gl='M'+EX0+' '+(EY0-26);for(i=0;i<=16;i++){var gx=EX0+(EX1-EX0)*i/16;gl+='L'+f(gx)+' '+f(EY0-28+Math.sin(i*.9)*3)}gl+='L'+EX1+' '+(EY0-2)+'L'+EX0+' '+(EY0-2)+'Z';
  g+='<path id="scGel" class="gel" d="'+gl+'"/>';
  /* ---- the epithelial cells: one group per cell (body + nucleus), scaled about its own centre ---- */
  g+='<g id="scEpi">';
  EPI.forEach(function(c,k){
    var d='M'+c.poly.map(function(v){return f(v[0]-c.cx)+' '+f(v[1]-c.cy)}).join('L')+'Z';
    var rx=c.row===0?4.4:c.row>=4?7.6:6,ry=c.row===0?5.2:c.row>=4?2.6:3.8;
    d=rpath(c.poly.map(function(v){return [(v[0]-c.cx)*.94,(v[1]-c.cy)*.92]}),.3);
    g+='<g class="ec r'+c.row+(c.gap?' gp':'')+'" data-k="'+k+'" transform="translate('+f(c.cx)+' '+f(c.cy)+')"><path class="cp" d="'+d+'"/><path class="lit" d="'+d+'"/><ellipse class="nu" cx="0" cy="'+(c.row===0?2:0)+'" rx="'+rx+'" ry="'+ry+'"/></g>';
  });
  g+='</g>';
  /* ---- inflammation: neutrophils (multi-lobed nuclei) and cytokine rings ---- */
  g+='<g id="scInf">';
  NEU.forEach(function(n,i){var a=n[2];
    g+='<g class="neu" transform="translate('+f(n[0])+' '+f(n[1])+')"><circle class="nc" r="11"/>'+
      [0,1,2].map(function(j){var b=a+j*2.1;return '<circle class="nl" cx="'+f(Math.cos(b)*4.2)+'" cy="'+f(Math.sin(b)*4.2)+'" r="2.9"/>'}).join('')+'</g>'});
  CYT.forEach(function(c){g+='<circle class="cy" cx="'+f(c[0])+'" cy="'+f(c[1])+'" r="'+f(2.6+c[2]*1.4)+'"/>'});
  g+='</g>';
  /* ---- the Tat-tagged Smad7 molecules ---- */
  g+='<g id="scMol">';MOL.forEach(function(m){g+='<circle class="mo" cx="'+f(m.x0)+'" cy="'+f(m.y0)+'" r="'+(o.mob?3.6:3)+'"/>'});g+='</g>';
  /* ---- step labels (cross-fade, all in the clear band below the stroma) ---- */
  var ly=SCH-8;
  g+='<g id="lb1"><text class="a" x="'+EX0+'" y="'+ly+'">'+(o.mob?'TGF-β · NF-κB SWITCHED ON':'INJURY · TGF-β AND NF-κB SWITCHED ON')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+EX0+'" y="'+ly+'">'+(o.mob?'SMAD7 ENTERS THE CELLS':'TOPICAL GEL · SMAD7 ENTERS THE CELLS')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+EX0+'" y="'+ly+'">'+(o.mob?'INFLAMMATION DOWN · WOUND CLOSES':'INFLAMMATION DOWN · THE WOUND CLOSES')+'</text></g>';
  return g+'</svg>';
}
function scene(){return epiScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text,#scBase .sF",svg),gel:$("#scGel",svg),
    ec:$$(".ec",svg).map(function(el){var k=+el.getAttribute("data-k");return {el:el,c:EPI[k],lit:$(".lit",el)}}),
    neu:$$(".neu",svg),cy:$$(".cy",svg),mo:$$(".mo",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,maxD=(GAP1-GAP0)/2;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* the tissue engraves in first; the wound stays open until step 3, when cells fill it from its edges inward */
    var grow=seg(p,0,.14),inf=seg(p,.1,.3),gel=seg(p,.36,.46),mov=seg(p,.42,.62),calm=seg(p,.7,.86),close=seg(p,.72,.94);
    E.ec.forEach(function(F,i){var c=F.c;
      var gi=Math.min(1,Math.max(0,grow*1.9-c.d/700-c.row*.08));
      if(c.gap){var ci=Math.min(1,Math.max(0,close*1.6-(c.d/maxD)*.6-c.row*.06));
        F.el.setAttribute("transform","translate("+(c.cx+(c.cx<(GAP0+GAP1)/2?-1:1)*(1-ci)*26).toFixed(1)+" "+c.cy.toFixed(1)+") scale("+(.55+.45*ci).toFixed(4)+")");op(F.el,b*ci)}
      else{F.el.setAttribute("transform","translate("+c.cx.toFixed(1)+" "+c.cy.toFixed(1)+") scale("+(.94+.06*gi).toFixed(4)+")");op(F.el,b*gi)}
      /* cells near the wound take up the drug and glow while it acts */
      var near=Math.max(0,1-Math.abs(c.cx-(GAP0+GAP1)/2)/300);
      op(F.lit,(c.gap?close:mov)*(c.row>=1||c.gap?1:.55)*(.25+.75*near)*(1-.45*calm));
    });
    op(E.gel,b*gel*(1-.6*close));
    E.neu.forEach(function(n,i){op(n,b*Math.min(1,Math.max(0,inf*1.6-i*.08))*(1-calm))});
    E.cy.forEach(function(c,i){op(c,b*Math.min(1,Math.max(0,inf*1.5-i*.025))*(1-calm)*.95)});
    E.mo.forEach(function(m,i){var M=MOL[i],t=Math.min(1,Math.max(0,mov*1.35-M.d*.35)),e=t*t*(3-2*t);
      m.setAttribute("cx",(M.x0+(M.x1-M.x0)*e).toFixed(1));m.setAttribute("cy",(M.y0+(M.y1-M.y0)*e).toFixed(1));
      op(m,b*gel*(1-.7*calm))});
    op(E.l1,b*seg(p,.18,.26)*(1-seg(p,.34,.4)));op(E.l2,b*seg(p,.46,.54)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.8,.88));
  };
}
