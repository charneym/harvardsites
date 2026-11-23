/* the story scene (BL/BY/DB): ONE messenger RNA, drawn once and kept on screen for all three steps, with two ribosomes
   translating it on the right and the protein they make gathering above.
   Step 1 (decode): a read-head sweeps along the mRNA and brackets one druggable site, which lights in the RIBO blue.
   Step 2 (bind): a smart ASO (the site's orange) comes down and base-pairs with the RNA at that site.
   Step 3 (control): protein output changes: the nascent chains lengthen and more folded protein gathers above.
   Source: riboway.com (decode RNA; upregulate/downregulate/activate/inhibit); bio.news 2025-09-05 (Smart ASO). Schematic. */
var RW={x0:40,x1:690,y:290,s0:150,s1:300,rib:[470,600]};
function rwY(x){return RW.y+4*Math.sin(x*.018)+2*Math.sin(x*.047+1)}
function rwRand(i){var x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x)}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,x,W=RW;W.x0=mob?95:40;W.s0=mob?135:150;W.s1=mob?285:300;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'78 22 630 340':'20 14 690 350')+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* the mRNA: backbone, base ticks pointing up, a 5' cap at the left */
  var d='';for(x=W.x0;x<=W.x1;x+=5)d+=(d?'L':'M')+f(x)+' '+f(rwY(x));
  g+='<path class="rb sD" d="'+d+'"/>';
  var tk='';for(x=W.x0+12;x<=W.x1-6;x+=9){if(x>W.rib[0]-48&&x<W.rib[0]+48||x>W.rib[1]-48&&x<W.rib[1]+48)continue;if(x>=W.s0&&x<=W.s1)continue;tk+='M'+f(x)+' '+f(rwY(x))+'V'+f(rwY(x)-7)}
  g+='<path class="nt sD" d="'+tk+'"/>';
  g+='<circle class="cap" cx="'+W.x0+'" cy="'+f(rwY(W.x0))+'" r="5"/>';
  g+='<text class="t" x="'+W.x0+'" y="'+(W.y+(mob?50:44))+'">TARGET mRNA</text>';
  /* ribosomes: large subunit above, small subunit below, the strand running between */
  W.rib.forEach(function(rx){var ry=rwY(rx);
    g+='<ellipse class="rbo sD" cx="'+rx+'" cy="'+f(ry-31)+'" rx="42" ry="28"/><ellipse class="rbo sD" cx="'+rx+'" cy="'+f(ry+15)+'" rx="36" ry="13"/>'});
  g+='</g>';
  /* the site's own ticks (base-coloured until it is found) */
  var st='';for(x=W.s0+6;x<=W.s1-4;x+=9)st+='M'+f(x)+' '+f(rwY(x))+'V'+f(rwY(x)-7);
  g+='<g id="site"><path class="nt" id="siteT" d="'+st+'"/>';
  var sd='';for(x=W.s0;x<=W.s1;x+=5)sd+=(sd?'L':'M')+f(x)+' '+f(rwY(x));
  g+='<path class="hl" id="siteH" d="'+sd+'"/><path class="hlt" id="siteHT" d="'+st+'"/>';
  var bx0=W.s0-10,bx1=W.s1+10,by0=rwY(W.s0)-46,by1=rwY(W.s0)+18;
  g+='<path class="brk" id="brk" d="M'+(bx0+14)+' '+f(by0)+'H'+bx0+'V'+f(by1)+'H'+(bx0+14)+'M'+(bx1-14)+' '+f(by0)+'H'+bx1+'V'+f(by1)+'H'+(bx1-14)+'"/>';
  g+='<path class="scan" id="scan" d="M0 '+(W.y-58)+'V'+(W.y+24)+'"/></g>';
  /* step 2: the ASO, an orange strand whose ticks point down to meet the RNA's */
  var ad='',at='';for(x=W.s0;x<=W.s1;x+=5)ad+=(ad?'L':'M')+f(x)+' '+f(rwY(x)-16);
  for(x=W.s0+6;x<=W.s1-4;x+=9)at+='M'+f(x)+' '+f(rwY(x)-16)+'V'+f(rwY(x)-9);
  g+='<g id="aso"><path class="ab" d="'+ad+'"/><path class="abt" d="'+at+'"/></g>';
  /* nascent protein chains, one bead chain out of each ribosome */
  g+='<g id="chains">';W.rib.forEach(function(rx,k){var cy=rwY(rx)-68;for(i=0;i<9;i++){var px=rx+(k?-1:1)*(7*Math.sin(i*.9))+i*1.8,py=cy-i*10.5;
    g+='<circle class="cb" data-i="'+i+'" cx="'+f(px)+'" cy="'+f(py)+'" r="4.4"/>'}});g+='</g>';
  /* folded protein above: compact bead knots, two at the start, more as output rises */
  var PP=[[455,130],[560,112],[655,150],[510,70],[610,58],[672,98],[420,150],[675,32]];
  g+='<g id="prot">';PP.forEach(function(q,k){var h='';for(i=0;i<9;i++){var a=i*2.4+k,r=i?10+4*rwRand(i+k*13):0;h+='<circle cx="'+f(q[0]+r*Math.cos(a))+'" cy="'+f(q[1]+r*Math.sin(a))+'" r="'+(i?6:6.8)+'"/>'}
    g+='<g class="pf" data-k="'+k+'">'+h+'</g>'});g+='</g>';
  /* labels, one per step, in the clear band at the top left */
  var ly=mob?58:46,lx=W.x0;
  g+='<g id="lb0"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'A MESSENGER RNA':'A MESSENGER RNA, BEING TRANSLATED')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'DRUGGABLE ANGLE':'AI FINDS A DRUGGABLE ANGLE')+'</text></g>';
  g+='<g id="lb2"><text class="a o" x="'+lx+'" y="'+ly+'">'+(mob?'SMART ASO BINDS':'SMART ASO BINDS THE SITE')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PROTEIN, TUNED':'PROTEIN LEVEL, TUNED')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text,#scBase .cap,#siteT",svg),siteH:dl("#siteH"),siteHT:$("#siteHT",svg),brk:$("#brk",svg),scan:$("#scan",svg),
    aso:$("#aso",svg),cb:$$("#chains .cb",svg),pf:$$("#prot .pf",svg),l0:$("#lb0",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: the read-head sweeps from the cap to the site; the site lights and is bracketed */
    var sw=seg(p,.04,.22),sx=RW.x0+((RW.s0+RW.s1)/2-RW.x0)*sw;
    E.scan.setAttribute("transform","translate("+sx.toFixed(1)+" 0)");op(E.scan,b*seg(p,.03,.07)*(1-seg(p,.24,.3)));
    var lit=seg(p,.2,.3);draw(E.siteH,lit);op(E.siteHT,b*lit);op(E.brk,b*lit*(1-.55*seg(p,.42,.5)));
    /* step 2: the ASO comes down onto the site */
    var dn=seg(p,.38,.58);E.aso.setAttribute("transform","translate(0 "+(-70*(1-dn)*(1-dn)).toFixed(1)+")");op(E.aso,b*seg(p,.36,.46));
    /* step 3: chains lengthen, more folded protein appears */
    var s3=seg(p,.68,.92),n=3+Math.round(6*s3);
    E.cb.forEach(function(c){var i=+c.getAttribute("data-i");c.style.opacity=(b*(i<n?1:0)).toFixed(3)});
    E.pf.forEach(function(g,k){var v=k<2?1:seg(s3,(k-2)*.11,(k-2)*.11+.3);g.style.opacity=(b*v).toFixed(3)});
    op(E.l0,b*(1-seg(p,.05,.12)));op(E.l1,b*seg(p,.13,.2)*(1-seg(p,.34,.4)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.74,.82));
  };
}
