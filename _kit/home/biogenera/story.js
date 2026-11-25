/* The story scene (BL/BY/DB): the anti-gene mechanism from biogenera.com/mygenera ("Gene bersaglio (due copie per cellula)";
   "mRNA (migliaia di copie)"; "Proteina (migliaia di copie)"; the Ag-PNA "agisce legandosi in modo selettivo e potente ad
   un filamento della sequenza di DNA complementare ... della struttura aperta del DNA del gene bersaglio attivo, bloccandone
   così la trascrizione"), as ONE continuous scene kept on screen for all three steps: a cell with its nucleus; in the
   nucleus the double strand of DNA with the target gene opened for transcription; in the cytoplasm the mRNA copies and the
   proteins made from them. Step 1: the gene is active and mRNA and protein copies fill the cell. Step 2: the red Ag-PNA
   descends and pairs with one strand of the open gene. Step 3: transcription stops; the mRNA and proteins fade. Every
   element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
function wig(x0,y0,x1,y1,a,ph){var d="M"+x0+" "+y0,n=Math.max(6,Math.round(Math.hypot(x1-x0,y1-y0)/3)),i,dx=x1-x0,dy=y1-y0,L=Math.hypot(dx,dy),nx=-dy/L,ny=dx/L;
  for(i=1;i<=n;i++){var t=i/n,s=a*Math.sin(i*.9+ph);d+="L"+(x0+dx*t+nx*s).toFixed(1)+" "+(y0+dy*t+ny*s).toFixed(1)}return d}
/* the DNA double strand along y=Y from x0 to x1; between b0 and b1 the strands part into a transcription bubble */
function dnaPaths(x0,x1,Y,b0,b1){var s1="",s2="",r="",x,k=0;
  for(x=x0;x<=x1;x+=4){var o=0;if(x>b0-24&&x<b1+24){var u=x<b0?(x-(b0-24))/24:x>b1?((b1+24)-x)/24:1;u=u*u*(3-2*u);o=u*14}
    var w=8*Math.sin((x-x0)/15);s1+=(x===x0?"M":"L")+x+" "+(Y-Math.abs(w)*.15+w-o).toFixed(1);s2+=(x===x0?"M":"L")+x+" "+(Y-w+o).toFixed(1);
    if(++k%3===0&&(x<b0-28||x>b1+28))r+="M"+x+" "+(Y+w*.82).toFixed(1)+"V"+(Y-w*.82).toFixed(1)}
  return [s1,s2,r]}
function blob(cx,cy,r,ph){var d="",i,n=10;for(i=0;i<=n;i++){var a=i/n*Math.PI*2,rr=r*(1+.22*Math.sin(a*3+ph));d+=(i?"L":"M")+(cx+rr*Math.cos(a)).toFixed(1)+" "+(cy+rr*Math.sin(a)).toFixed(1)}return d+"Z"}
var MR=[[468,180,548,170,0],[478,214,560,226,1.1],[462,262,552,256,2.2],[476,304,556,316,3.1],[466,346,544,338,4.2]];
var PR=[[604,186,12,0],[642,222,10,1.3],[602,258,13,2.1],[644,296,11,.7],[606,334,12,2.8]];
function bgScene(o){
  var g='',mob=o.mob,D=dnaPaths(84,384,262,206,286);
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* the cell and its nucleus */
  g+='<path class="mem sD" d="M30 250C30 140 180 62 380 62C580 62 730 140 730 250C730 360 580 438 380 438C180 438 30 360 30 250Z"/>';
  g+='<path class="mem2 sD" d="M44 250C44 150 188 76 380 76C572 76 716 150 716 250C716 350 572 424 380 424C188 424 44 350 44 250Z"/>';
  g+='<path class="nuc sD" d="M62 262C62 186 138 130 236 130C334 130 410 186 410 262C410 338 334 394 236 394C138 394 62 338 62 262Z"/>';
  g+='<path class="dna sD" d="'+D[0]+'"/><path class="dna sD" d="'+D[1]+'"/><path class="rung sD" d="'+D[2]+'"/>';
  g+='<text class="t" x="24" y="30">CELLULA · GENE BERSAGLIO</text>';
  if(!mob){g+='<text class="t" x="150" y="186">NUCLEO</text>';g+='<text class="t" x="472" y="152">mRNA</text>';g+='<text class="t" x="574" y="152">PROTEINA</text>'}
  g+='</g>';
  /* the target gene, highlighted where the strands part */
  g+='<rect id="gene" class="gn" x="200" y="236" width="92" height="52"/>';
  /* the mRNA copies and the proteins made from them */
  g+='<g id="mr">'+MR.map(function(c){return '<path class="mrna" d="'+wig(c[0],c[1],c[2],c[3],2.6,c[4])+'"/>'}).join("")+'</g>';
  g+='<g id="pr">'+PR.map(function(c){return '<path class="prot" d="'+blob(c[0],c[1],c[2],c[3])+'"/>'}).join("")+'</g>';
  /* the Ag-PNA: a short red strand that pairs with the upper DNA strand inside the bubble (drawn at its bound place) */
  var p="",x;for(x=214;x<=278;x+=4){p+=(x===214?"M":"L")+x+" 258"}var pr="";for(x=218;x<=276;x+=8)pr+="M"+x+" 258V250";
  g+='<g id="pna"><path class="pna" d="'+p+'"/><path class="pnr" d="'+pr+'"/></g>';
  /* transcription stopped: a red bar across the bubble's exit */
  g+='<g id="stop"><path class="stp" d="M300 236V288"/></g>';
  /* step captions, in the clear band under the cell */
  g+='<g id="lb1"><text class="a" x="24" y="494">IL GENE ATTIVO PRODUCE mRNA E PROTEINA</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="494">L’Ag-PNA SI LEGA AL GENE</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="494">TRASCRIZIONE BLOCCATA ALLA FONTE</text></g>';
  return g+'</svg>';
}
function scene(){return bgScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),gene:$("#gene",svg),pna:$("#pna",svg),stop:$("#stop",svg),
    mr:$$("#mr .mrna",svg),pr:$$("#pr .prot",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function mv(el,x,y){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")")}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-b)).toFixed(1)});E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var bind=seg(p,.36,.52),blk=seg(p,.69,.84);
    /* step 1: the gene lights and its copies fill the cell, one after another */
    op(E.gene,b*seg(p,0,.1));E.gene.classList.toggle("off",bind>.5);
    E.mr.forEach(function(el,k){op(el,b*seg(p,.04+k*.035,.12+k*.035)*(1-seg(p,.7+k*.025,.78+k*.025)))});
    E.pr.forEach(function(el,k){op(el,b*seg(p,.12+k*.035,.2+k*.035)*(1-seg(p,.74+k*.025,.82+k*.025)))});
    /* step 2: the Ag-PNA descends into the bubble and pairs with the upper strand */
    mv(E.pna,0,-150*(1-bind));op(E.pna,b*seg(p,.34,.4));
    /* step 3: the stop bar draws in across the gene's exit */
    op(E.stop,b*blk);
    op(E.l1,b*seg(p,.08,.16)*(1-seg(p,.3,.34)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.62,.66)));op(E.l3,b*seg(p,.74,.82));
  };
}
