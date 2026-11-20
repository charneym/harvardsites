/* the story scene (BL/BY/DB): ONE engraved cell, kept on screen for all three steps, drawn in fine line.
   Step 1 Gb3 granules fill its lysosomes (no working GLA). Step 2 nanoGLA arrives: nanoliposomes (a bilayer ring, targeting
   peptides outside, GLA enzyme inside) gather at the membrane. Step 3 they reach the lysosomes and the deposits clear.
   Sources: Tomsen-Melero et al., Science Advances 2024 (DOI 10.1126/sciadv.adq4738) via NANBIOSIS (Jan 2025); Cabrera et al.,
   Adv Healthc Mater 2016 (GLA-loaded, RGD-functionalised nanoliposomes made by DELOS-SUSP). Schematic, not to scale. */
var CELL={c:[560,290],rx:218,ry:212};
var LYS=[[438,176],[456,404],[694,160],[700,410]];
var LIPO=[{s:[176,138],m:[352,214]},{s:[232,262],m:[344,300]},{s:[170,384],m:[356,386]},{s:[244,478],m:[392,462]},{s:[262,92],m:[394,118]}];
var XF='translate(-174 -65.5) scale(1.15)';   /* the cell drawn larger, right of centre, so it fills the frame (DB) */
function rnd(k){var x=Math.sin(k*127.1+311.7)*43758.5453;return x-Math.floor(x)}
function cellPath(k){var s='',i,n=96,c=CELL.c;for(i=0;i<=n;i++){var t=i/n*Math.PI*2,r=1+.035*Math.sin(3*t+.6)+.025*Math.sin(5*t+1.9)+.015*Math.cos(7*t);
  s+=(i?'L':'M')+(c[0]+CELL.rx*k*r*Math.cos(t)).toFixed(1)+' '+(c[1]+CELL.ry*k*r*Math.sin(t)).toFixed(1)}return s+'Z'}
function lipo(j){var g='<g class="lp" id="lp'+j+'"><circle class="lg" r="30" fill="url(#lpg)"/><circle class="lo" r="17"/><circle class="li" r="12.5"/>',i;
  for(i=0;i<10;i++){var a=i/10*Math.PI*2+j;g+='<path class="pt" d="M'+(17.6*Math.cos(a)).toFixed(1)+' '+(17.6*Math.sin(a)).toFixed(1)+'L'+(23*Math.cos(a)).toFixed(1)+' '+(23*Math.sin(a)).toFixed(1)+'"/><circle class="pk" cx="'+(24*Math.cos(a)).toFixed(1)+'" cy="'+(24*Math.sin(a)).toFixed(1)+'" r="1.3"/>'}
  [[-4,-3],[4,-1],[-1,5]].forEach(function(q){g+='<circle class="ez" cx="'+q[0]+'" cy="'+q[1]+'" r="3"/>'});
  return g+'</g>'}
function scene(){
  var mob=MOBILE(),g='',i,f=function(n){return (+n).toFixed(1)};
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="lpg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#4cc2a0" stop-opacity=".22"/><stop offset="1" stop-color="#4cc2a0" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="gbg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#e3c98a" stop-opacity=".22"/><stop offset="1" stop-color="#e3c98a" stop-opacity="0"/></radialGradient></defs>';
  g+='<g transform="'+XF+'"><g id="scBase">';
  g+='<path class="cm sD" d="'+cellPath(1)+'"/><path class="cm2 sD" d="'+cellPath(.975)+'"/><path class="cx sD" d="'+cellPath(.86)+'"/>';
  /* nucleus with an inner envelope and a nucleolus */
  g+='<ellipse class="nu sD" cx="596" cy="292" rx="66" ry="56"/><ellipse class="nu2 sD" cx="596" cy="292" rx="60" ry="50"/><circle class="nu2 sD" cx="612" cy="282" r="14"/>';
  /* a few organelle contours so the cell reads as a cell */
  g+='<path class="er sD" d="M500 300c10-24 28-30 40-20M498 318c14-20 34-24 46-12M516 250c14-12 30-10 38 2"/>';
  g+='<path class="er sD" d="M640 380c18-6 34 2 40 16M560 470c18 6 40 2 52-12M560 110c20-10 44-8 58 4"/>';
  LYS.forEach(function(l){g+='<circle class="ly sD" cx="'+l[0]+'" cy="'+l[1]+'" r="34"/><circle class="ly2 sD" cx="'+l[0]+'" cy="'+l[1]+'" r="30"/>'});
  g+='</g>';
  g+='<g id="scMove">';
  /* Gb3 granules inside each lysosome */
  LYS.forEach(function(l,k){g+='<g class="gb" id="gb'+k+'"><circle r="40" cx="'+l[0]+'" cy="'+l[1]+'" fill="url(#gbg)"/>';for(i=0;i<16;i++){var a=rnd(k*31+i)*Math.PI*2,r=Math.sqrt(rnd(k*17+i*3+5))*21;
    g+='<circle class="gr" cx="'+f(l[0]+r*Math.cos(a))+'" cy="'+f(l[1]+r*Math.sin(a))+'" r="'+f(2.6+rnd(i+k*7)*2.2)+'"/>'}g+='</g>'});
  LIPO.forEach(function(L,j){g+=lipo(j)});
  g+='</g></g>';
  g+='<text class="t cap" x="784" y="546" text-anchor="end">A CELL · SCHEMATIC, NOT TO SCALE</text>';
  /* labels, one set per step, on the bottom row clear of the art */
  var X=mob?20:24,Y=mob?548:546;
  g+='<g id="lb1"><text class="a" x="'+X+'" y="'+Y+'">'+(mob?'Gb3 DEPOSITS':'Gb3 BUILDS UP · NO WORKING GLA')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+X+'" y="'+Y+'">'+(mob?'nanoGLA':'nanoGLA · GLA IN A TARGETED NANOLIPOSOME')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+X+'" y="'+Y+'">'+(mob?'DEPOSITS CLEAR':'Gb3 DEPOSITS REDUCED · BRAIN INCLUDED')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("text.cap",svg),mv:$("#scMove",svg),gb:$$(".gb",svg),gr:$$(".gb",svg).map(function(g){return $$(".gr",g)}),lp:$$(".lp",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.2),s2=seg(p,.36,.6),s3=seg(p,.68,.9);
    /* granules: fill in during step 1, clear in step 3 (the fifth carrier stays at the membrane) */
    E.gr.forEach(function(list,k){var n=list.length;list.forEach(function(el,i){var on=seg(s1,i/n*.7,i/n*.7+.3),off=seg(s3,.25+i/n*.5,.45+i/n*.5);op(el,.25+.75*on-(.25+.75*on)*off)})});
    E.gb.forEach(function(g){var c=g.firstChild;op(c,.3+.7*s1*(1-s3))});
    /* nanoliposomes: arrive at the membrane in step 2, travel to the lysosomes in step 3 */
    E.lp.forEach(function(el,j){var L=LIPO[j],tgt=j<4?LYS[j]:L.m,dr=.5+.5*Math.sin(p*9+j*1.7),
      x=lerp(L.s[0],L.m[0],s2),y=lerp(L.s[1],L.m[1],s2);
      x=lerp(x,tgt[0],s3);y=lerp(y,tgt[1],s3);x+=(1-s3)*4*dr;y+=(1-s3)*3*Math.cos(p*7+j);
      var sc=1-.35*s3*(j<4?1:0);
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") scale("+sc.toFixed(3)+")");
      op(el,b*seg(p,.24+j*.02,.4+j*.02)*(j<4?1-.55*seg(s3,.75,1):1))});
    op(E.l1,b*s1*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.66,.72)));op(E.l3,b*seg(p,.76,.86));
  };
}
