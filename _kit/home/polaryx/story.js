/* The story scene (BL/BY/DB): how PLX-200 works, after Polaryx's own science text (Our Science / Our Pipeline: PPARα
   agonism -> TFEB upregulation -> lysosomal biogenesis -> clearance of storage material) as ONE continuous scene in fine
   line. A neuron-like cell: the nucleus on the right with its double envelope, pores, DNA and PPARα receptors; on the left,
   lysosomes clogged with storage granules (lipofuscin). Step 1 (bind): PLX-200 molecules drift in and dock on PPARα.
   Step 2 (build): TFEB lights the lysosomal genes, transcripts leave through the pores, and new lysosomes bud.
   Step 3 (clear): the storage granules are broken down and the lysosomes run clean. Driven by the scrubbed progress. */
var SCW=760,SCH=520,NX=580,NY=270;
function pxR(seed){var s=seed;return function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff}}
/* clogged lysosomes [x,y,r] and their granules */
var PXL=[[118,128,38],[236,92,30],[96,282,34],[214,236,44],[140,420,40],[288,370,32],[330,170,26]];
var PXG=(function(){var R=pxR(9),a=[];PXL.forEach(function(l,k){var n=Math.round(l[2]/4.2);for(var i=0;i<n;i++){var an=R()*Math.PI*2,rr=Math.sqrt(R())*(l[2]-9);a.push({k:k,x:l[0]+Math.cos(an)*rr,y:l[1]+Math.sin(an)*rr,r:3+R()*3.4,d:R()*.4})}});return a})();
/* new lysosomes that bud in step 2 */
var PXN=[[372,300,22],[396,440,19],[54,196,20],[318,468,17],[42,372,18]];
/* PPARα receptors inside the nucleus, and the PLX-200 molecules that find them */
var PXP=[[520,200],[612,182],[668,262],[536,330],[640,350]];
var PXM=(function(){var R=pxR(31);return PXP.map(function(p,i){return {sx:-30-R()*60,sy:60+R()*400,tx:p[0]-4,ty:p[1]-22,d:i*.08}})})();
function pxMol(){/* gemfibrozil skeleton, schematic: benzene ring, ether, chain, carboxyl */
  return '<path d="M0 -7L6 -3.5V3.5L0 7L-6 3.5V-3.5Z M6 0H11L15 -4L20 0L24 -4L28 0 M28 0L31 4 M28 0L32 -4"/>'}
function pxNuc(){var d='',d2='',ru='',i;for(i=0;i<=44;i++){var x=NX-110+i*5,y=NY+30+Math.sin(i*.44)*10,y2=NY+30-Math.sin(i*.44)*10;d+=(i?'L':'M')+x+' '+y.toFixed(1);d2+=(i?'L':'M')+x+' '+y2.toFixed(1);if(i%3==0)ru+='M'+x+' '+y.toFixed(1)+'L'+x+' '+y2.toFixed(1)}return [d,d2,ru]}
function pxScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="cell sD" d="M20 40C180 16 420 12 556 48S744 126 738 260S690 490 518 500S156 506 48 462S10 300 20 40"/>';
  g+='<ellipse class="nuc sD" cx="'+NX+'" cy="'+NY+'" rx="170" ry="150"/><ellipse class="nuc2 sD" cx="'+NX+'" cy="'+NY+'" rx="160" ry="140"/>';
  for(i=0;i<9;i++){var a=Math.PI*(.62+i*.095),x=NX+Math.cos(a)*165,y=NY+Math.sin(a)*145;g+='<circle class="pore sD" cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="4"/>'}
  var dn=pxNuc();g+='<path class="dna sD" d="'+dn[0]+'"/><path class="dna sD" d="'+dn[1]+'"/><path class="rung sD" d="'+dn[2]+'"/>';
  /* endoplasmic reticulum folds hugging the nucleus */
  for(i=0;i<3;i++){var rr=186+i*14;g+='<path class="er sD" d="M'+(NX-rr*Math.cos(.7)).toFixed(1)+' '+(NY-rr*.88*Math.sin(.7)).toFixed(1)+'A'+rr+' '+(rr*.88).toFixed(1)+' 0 0 0 '+(NX-rr*Math.cos(.7)).toFixed(1)+' '+(NY+rr*.88*Math.sin(.7)).toFixed(1)+'"/>'}
  PXL.forEach(function(l){g+='<circle class="lys sD" cx="'+l[0]+'" cy="'+l[1]+'" r="'+l[2]+'"/><circle class="lys2 sD" cx="'+l[0]+'" cy="'+l[1]+'" r="'+(l[2]-5)+'"/>'});
  PXP.forEach(function(p){g+='<g class="rcp" transform="translate('+p[0]+' '+p[1]+')"><path d="M-9 6V-2Q-9 -9 -2 -9H2Q9 -9 9 -2V6"/><path d="M-4 6V0H4V6"/></g>'});
  g+='<text class="t" x="24" y="'+(SCH-6)+'">NEURON · LYSOSOMES AND STORED MATERIAL</text>';
  g+='<text class="t" x="'+(NX+150)+'" y="'+(NY-160)+'" text-anchor="end">NUCLEUS · PPARα</text>';
  g+='</g>';
  g+='<g id="scGran">';PXG.forEach(function(q){g+='<circle class="gr" cx="'+q.x.toFixed(1)+'" cy="'+q.y.toFixed(1)+'" r="'+q.r.toFixed(1)+'"/>'});g+='</g>';
  g+='<g id="scGene"><path class="gene" d="M'+(NX-60)+' '+(NY+30)+'H'+(NX+20)+'"/><path class="gene" d="M'+(NX+40)+' '+(NY+30)+'H'+(NX+90)+'"/></g>';
  g+='<g id="scRna">';for(i=0;i<6;i++)g+='<path class="rna" d="M0 0q5 -6 10 0t10 0t10 0"/>';g+='</g>';
  g+='<g id="scNew">';PXN.forEach(function(n){g+='<g class="nl" transform="translate('+n[0]+' '+n[1]+')"><circle class="lysN" r="'+n[2]+'"/><circle class="lysN2" r="'+(n[2]-5)+'"/></g>'});g+='</g>';
  g+='<g id="scMol">';PXM.forEach(function(){g+='<g class="ml">'+pxMol()+'</g>'});g+='</g>';
  var lx=o.mob?24:NX-200,LB=[[lx,80,"PLX-200 BINDS PPAR\u03b1"],[lx,80,"TFEB SWITCHES ON LYSOSOMAL GENES"],[lx,80,"NEW LYSOSOMES CLEAR THE STORAGE"]];
  LB.forEach(function(l,k){g+='<g id="lb'+(k+1)+'"><text class="a" x="'+l[0]+'" y="'+l[1]+'">'+l[2]+'</text></g>'});
  return g+'</svg>';
}
function scene(){return pxScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .rcp",svg),gr:$$("#scGran .gr",svg),gene:$("#scGene",svg),rna:$$("#scRna .rna",svg),nl:$$("#scNew .nl",svg),
    ml:$$("#scMol .ml",svg),rcp:$$("#scBase .rcp",svg),lys:$$("#scBase .lys",svg),grp:$("#scGran",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function cl(v){return Math.max(0,Math.min(1,v))}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.grp,b)}
    /* step 1: the molecules drift in and dock */
    var dock=seg(p,.04,.3);
    E.ml.forEach(function(el,i){var m=PXM[i],q=sm2(cl((dock-m.d)/(1-m.d))),x=m.sx+(m.tx-m.sx)*q,y=m.sy+(m.ty-m.sy)*q-Math.sin(q*Math.PI)*30;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+((1-q)*120).toFixed(0)+")");op(el,b*cl(q*6))});
    E.rcp.forEach(function(el,i){el.classList.toggle("on",dock>PXM[i].d+.55)});
    /* step 2: genes light, transcripts leave the nucleus, new lysosomes bud */
    var gene=seg(p,.36,.46),rna=seg(p,.44,.62),bud=seg(p,.52,.68);
    op(E.gene,b*gene);
    E.rna.forEach(function(el,i){var q=sm2(cl((rna-i*.08)/(1-.4))),a=Math.PI*(.75+i*.09),x0=NX-20+Math.cos(a)*40,y0=NY+30+Math.sin(a)*30,x1=NX+Math.cos(a)*230,y1=NY+Math.sin(a)*190;
      el.setAttribute("transform","translate("+(x0+(x1-x0)*q).toFixed(1)+" "+(y0+(y1-y0)*q).toFixed(1)+")");op(el,b*Math.min(1,Math.sin(q*Math.PI)*1.4))});
    E.nl.forEach(function(el,i){var q=sm2(cl((bud-i*.1)/(1-.4))),n=PXN[i];el.setAttribute("transform","translate("+n[0]+" "+n[1]+") scale("+(.2+.8*q).toFixed(3)+")");op(el,b*q)});
    /* step 3: storage granules are broken down */
    var clr=seg(p,.72,.92);
    E.gr.forEach(function(el,i){var q=PXG[i],v=sm2(cl((clr-q.d)/(1-.4)));op(el,1-v);el.setAttribute("r",(q.r*(1-.7*v)).toFixed(2))});
    E.lys.forEach(function(el){el.classList.toggle("ok",clr>.7)});
    op(E.l1,b*seg(p,.12,.18)*(1-seg(p,.3,.35)));op(E.l2,b*seg(p,.4,.46)*(1-seg(p,.64,.69)));op(E.l3,b*seg(p,.78,.84));
  };
}
function sm2(x){return x*x*(3-2*x)}
