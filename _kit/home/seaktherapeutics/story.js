/* The story scene (BL/BY/DB/CX): SEAK193's route, drawn as ONE continuous engraved scene that stays on screen for all
   three steps. Top: a brain capillary in section, its wall a row of endothelial cells joined by tight junctions (the
   blood-brain barrier), red cells inside. Below, in the brain tissue: a breast cancer metastasis, a cluster of tumour
   cells, one of them in mitosis with its spindle and chromosomes at the plate. Step 1 the vessel and the metastasis
   engrave in. Step 2 SEAK193 molecules travel along the vessel and pass through the wall into the tissue. Step 3 they
   reach the tumour and the dividing cell's spindle falls away: division stops. Sources: NIH RePORTER 1R41CA310186-01
   (antimitotic, high brain penetration, efficacy in a brain metastasis model) and UTHSC News, 19 November 2025. */
var SCW=760,SCH=520,VT=72,VB=150,TX=380,TY=320,TS=1.5;
var TCELLS=[[0,0,34,1],[-64,-22,27],[66,-18,28],[-40,48,26],[42,52,27],[-98,30,22],[100,36,23],[-6,-62,24],[0,92,22],[-80,-64,19],[86,-66,20]];
var MOLS=(function(){var a=[],i,n=14;for(i=0;i<n;i++){a.push({x0:-30-i*44,gx:150+((i*97)%460),d:(i%5)*.05,tx:TX+((i*53)%230)-115,ty:TY+((i*71)%200)-108})}return a})();
function hexd(s){var g='',i;for(i=0;i<6;i++){var a=-Math.PI/2+i*Math.PI/3;g+=(i?'L':'M')+(s*Math.cos(a)).toFixed(1)+' '+(s*Math.sin(a)).toFixed(1)}return g+'Z'}
function brainScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i,x;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase"><path class="frm sD" d="M18 24H120M740 24H638M18 496H120M740 496H638"/>';
  g+='<text class="t" x="18" y="14">BRAIN CAPILLARY · TISSUE</text><text class="t tr" x="742" y="14" text-anchor="end">SEAK193</text></g>';
  /* the capillary: two walls, each a row of endothelial cells with tight-junction ticks */
  g+='<g id="scVes">';
  var wall=function(y,dir){var p='',xx;for(xx=30;xx<730;xx+=70){p+='M'+(xx+4)+' '+y+'Q'+(xx+35)+' '+(y+dir*10)+' '+(xx+66)+' '+y;}return p};
  g+='<path class="vw sD" d="M30 '+VT+'H730M30 '+VB+'H730"/>';
  g+='<path class="ec sD" d="'+wall(VT,-1)+wall(VB,1)+'"/>';
  var tj='';for(x=30;x<=730;x+=70){tj+='M'+x+' '+(VT-7)+'V'+(VT+3)+'M'+x+' '+(VB-3)+'V'+(VB+7);}
  g+='<path class="tj sD" d="'+tj+'"/>';
  [[130,111,0],[300,104,12],[470,116,-8],[620,108,6]].forEach(function(r){g+='<ellipse class="rbc sD" cx="'+r[0]+'" cy="'+r[1]+'" rx="17" ry="9" transform="rotate('+r[2]+' '+r[0]+' '+r[1]+')"/>'});
  g+='</g>';
  /* brain tissue around it: four neurons, a soma and its dendrites, kept faint */
  g+='<g id="scNeu">';
  [[118,262,1],[176,430,-1],[640,250,-1],[598,440,1]].forEach(function(n){var x0=n[0],y0=n[1],s=n[2],d='';
    [[-1,-.7],[-.9,.6],[.2,1],[1,.3],[.6,-1]].forEach(function(v,j){var L=40+((j*17)%22);d+='M'+x0+' '+y0+'Q'+f(x0+v[0]*L*.55+s*8)+' '+f(y0+v[1]*L*.55-6)+' '+f(x0+v[0]*L)+' '+f(y0+v[1]*L);
      d+='M'+f(x0+v[0]*L*.7)+' '+f(y0+v[1]*L*.7)+'l'+f(v[1]*12*s)+' '+f(v[0]*10)});
    g+='<path class="nd sD" d="'+d+'"/><circle class="ns sD" cx="'+x0+'" cy="'+y0+'" r="7"/>'});
  g+='</g>';
  /* the metastasis, drawn at 1.5x about its centre */
  g+='<g transform="translate('+TX+' '+TY+') scale('+TS+') translate('+(-TX)+' '+(-TY)+')">';
  g+='<g id="scTum">';
  TCELLS.forEach(function(c){if(c[3])return;g+='<circle class="tc sD" cx="'+(TX+c[0])+'" cy="'+(TY+c[1])+'" r="'+c[2]+'"/><circle class="tn" cx="'+f(TX+c[0]+c[2]*.12)+'" cy="'+f(TY+c[1]-c[2]*.1)+'" r="'+f(c[2]*.38)+'"/>'});
  g+='</g>';
  /* the dividing cell: outline, two poles, spindle fibres, chromosomes at the plate */
  g+='<g id="scDiv"><ellipse class="dc sD" cx="'+TX+'" cy="'+TY+'" rx="40" ry="32"/>';
  var sp='';for(i=-3;i<=3;i++){var yy=TY+i*6.5;sp+='M'+(TX-26)+' '+TY+'Q'+(TX-12)+' '+f(yy-(i*1.5))+' '+TX+' '+f(yy)+'M'+(TX+26)+' '+TY+'Q'+(TX+12)+' '+f(yy-(i*1.5))+' '+TX+' '+f(yy);}
  g+='<path class="spn" id="spn" d="'+sp+'"/>';
  g+='<circle class="pole" cx="'+(TX-26)+'" cy="'+TY+'" r="2.6"/><circle class="pole" cx="'+(TX+26)+'" cy="'+TY+'" r="2.6"/>';
  var ch='';for(i=-3;i<=3;i++){ch+='M'+(TX-3)+' '+f(TY+i*6.5-2)+'L'+(TX+3)+' '+f(TY+i*6.5+2);}
  g+='<path class="chr" d="'+ch+'"/></g></g>';
  /* SEAK193 molecules */
  g+='<g id="scMol">';MOLS.forEach(function(m,k){g+='<path class="ml" data-k="'+k+'" d="'+hexd(5.2)+'"/>'});g+='</g>';
  g+='<g id="lb1"><text class="a" x="18" y="514">BREAST CANCER METASTASIS · BEHIND THE BARRIER</text></g>';
  g+='<g id="lb2"><text class="a" x="18" y="514">SEAK193 · CROSSES THE BLOOD-BRAIN BARRIER</text></g>';
  g+='<g id="lb3"><text class="a" x="18" y="514">ANTIMITOTIC · CELL DIVISION STOPS</text></g>';
  return g+'</svg>';
}
function scene(){return brainScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),ves:dl("#scVes .sD"),tum:dl("#scTum .sD"),neu:dl("#scNeu .sD"),tn:$$("#scTum .tn",svg),
    dc:dl("#scDiv .sD"),spn:$("#spn",svg),poles:$$("#scDiv .pole",svg),chr:$("#scDiv .chr",svg),
    mol:$$(".ml",svg).map(function(el){return {el:el,m:MOLS[+el.getAttribute("data-k")]}}),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    draw(E.base,b);
    var grow=seg(p,0,.18),flow=seg(p,.3,.62),cross=seg(p,.42,.7),arrive=seg(p,.62,.86),stop=seg(p,.72,.92);
    var g0=Math.min(1,Math.max(b*b,grow*1.15));
    draw(E.ves,g0);draw(E.tum,g0);draw(E.neu,g0);draw(E.dc,g0);
    E.tn.forEach(function(n){op(n,b*g0*(1-.45*stop))});
    /* the spindle: present while the cell divides, falls away once SEAK193 arrives */
    op(E.spn,b*g0*(1-stop));E.poles.forEach(function(el){op(el,b*g0*(1-stop))});op(E.chr,b*g0*(1-.35*stop));
    E.mol.forEach(function(M,i){
      var m=M.m,t=Math.min(1,Math.max(0,(flow-m.d)*1.25)),x,y,a;
      var xv=m.x0+(m.gx-m.x0)*sm(t);
      var c=Math.min(1,Math.max(0,(cross-m.d)*1.3)),cs=sm(c),ar=sm(Math.min(1,Math.max(0,(arrive-m.d*.5)*1.2)));
      x=xv;y=(VT+VB)/2+((i%3)-1)*14;
      if(c>0){var yb=y+(VB+26-y)*Math.min(1,cs*1.6);x=xv+(m.tx-xv)*ar;y=yb+(m.ty-yb)*ar}
      a=b*Math.min(1,t*3)*(x<36?0:1)*(1-.35*stop);
      M.el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+(i*23+p*90).toFixed(1)+")");
      op(M.el,a);
    });
    op(E.l1,b*seg(p,.06,.16)*(1-seg(p,.28,.34)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.78,.88));
  };
}
