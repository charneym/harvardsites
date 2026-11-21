/* the story scene (BL/BY/DB): ONE engraved scene kept on screen for all three steps, drawn from cerflux.com.
   Step 1: a slice of the patient's own tumor tissue, kept whole: cancer cells in nests, stroma, and the fibres of the extracellular
   matrix ("the omics tell the story, but the TME decides the ending"). Step 2: BEST, Bioprinted ex vivo Slice Tissue: the slice is
   carried into a 3x3 array of tissue-engineered microtissues that keep that microenvironment. Step 3: POET, "miniaturized tic-tac-toe
   on biopsy tumor tissue ... a different agent in each box. Xs show treatments that will not work while Os point to the best options."
   Schematic; the X/O pattern is illustrative. Driven by the scrubbed story progress. */
var SG=(function(){
  var s=3;function r(){s=(s*16807)%2147483647;return (s-1)/2147483646}
  /* tissue outline: an irregular slice */
  var C=[400,282],out=[],i,n=90;
  for(i=0;i<=n;i++){var a=i/n*Math.PI*2,rr=1+.07*Math.sin(3*a+.6)+.05*Math.sin(5*a+2.1)+.03*Math.sin(8*a+1.3);out.push([C[0]+Math.cos(a)*236*rr,C[1]+Math.sin(a)*178*rr])}
  function inside(x,y){var dx=(x-C[0])/236,dy=(y-C[1])/178;return dx*dx+dy*dy<.8}
  /* cell nests and scattered stromal cells */
  var cells=[],nests=[[300,220],[470,200],[380,330],[520,330],[270,330],[430,262]];
  nests.forEach(function(c){for(var k=0;k<15;k++){var a=r()*6.28,d=Math.sqrt(r())*38;cells.push([c[0]+Math.cos(a)*d,c[1]+Math.sin(a)*d*.8,4.2+r()*1.6,1])}});
  for(i=0;i<60;i++){var x=C[0]+(r()-.5)*440,y=C[1]+(r()-.5)*320;if(inside(x,y))cells.push([x,y,2.4+r()*1.2,0])}
  /* matrix fibres: long wavy strokes */
  var fib=[];for(i=0;i<16;i++){var x0=C[0]-200+r()*80,y0=C[1]-130+i*17+r()*8,p='M'+x0.toFixed(1)+' '+y0.toFixed(1),xx=x0,yy=y0,ok=true;
    for(var k=0;k<7;k++){xx+=52+r()*10;yy+=(r()-.5)*22;var cx=xx-26,cy=yy+(r()-.5)*30;p+='Q'+cx.toFixed(1)+' '+cy.toFixed(1)+' '+xx.toFixed(1)+' '+yy.toFixed(1)}
    fib.push(p)}
  /* the 3x3 array */
  var B=118,G=16,X0=C[0]-(3*B+2*G)/2,Y0=C[1]-(3*B+2*G)/2,box=[];
  for(var rr2=0;rr2<3;rr2++)for(var cc=0;cc<3;cc++)box.push([X0+cc*(B+G),Y0+rr2*(B+G)]);
  return {C:C,out:out,cells:cells,fib:fib,box:box,B:B,G:G,X0:X0,Y0:Y0,inside:inside};
})();
var XO="XOXXXOOXX";  /* illustrative result: three Os, the options most likely to work */
function micro(cx,cy,R,seed){var p='',n=40,i;for(i=0;i<=n;i++){var a=i/n*Math.PI*2,rr=R*(1+.09*Math.sin(3*a+seed)+.06*Math.sin(5*a+seed*1.7));p+=(i?'L':'M')+(cx+Math.cos(a)*rr).toFixed(1)+' '+(cy+Math.sin(a)*rr*.86).toFixed(1)}return p+'Z'}
var SK=1.12;function TX(p){return [400+(p[0]-400)*SK,282+(p[1]-282)*SK]}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,S=SG,ZG='<g transform="translate(400 282) scale('+SK+') translate(-400 -282)">';
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="cfo" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#cc1b1f" stop-opacity=".22"/><stop offset=".6" stop-color="#cc1b1f" stop-opacity=".07"/><stop offset="1" stop-color="#cc1b1f" stop-opacity="0"/></radialGradient></defs>';
  /* base: the tissue slice */
  g+='<g id="scBase">';
  var o='';S.out.forEach(function(p,k){o+=(k?'L':'M')+f(p[0])+' '+f(p[1])});
  g+=ZG+'<g id="tis"><path class="tb sD" d="'+o+'Z"/><path class="tb2 sD" d="'+o+'Z" transform="translate(9 11)"/>';
  S.fib.forEach(function(p){g+='<path class="fb sD" d="'+p+'" clip-path="url(#tclip)"/>'});
  g+='<clipPath id="tclip"><path d="'+o+'Z"/></clipPath>';
  S.cells.forEach(function(c){g+='<circle class="'+(c[3]?'cn':'cs')+'" cx="'+f(c[0])+'" cy="'+f(c[1])+'" r="'+f(c[2])+'"/>'});
  g+='</g></g>';
  g+='<text class="t" x="784" y="546" text-anchor="end">TUMOR TISSUE TO RESULT · SCHEMATIC</text>';
  g+='</g>';
  /* step 2-3: the array */
  g+=ZG+'<g id="arr">';
  S.box.forEach(function(b,k){var cx=b[0]+S.B/2,cy=b[1]+S.B/2;
    g+='<g class="bx" id="bx'+k+'"><rect class="wl" x="'+f(b[0])+'" y="'+f(b[1])+'" width="'+S.B+'" height="'+S.B+'"/>'+
      '<path class="mt" d="'+micro(cx,cy,34,k*1.3+.4)+'"/><path class="mt2" d="'+micro(cx,cy,22,k*1.3+1.9)+'"/>'+
      '<circle class="gl" cx="'+f(cx)+'" cy="'+f(cy)+'" r="58" fill="url(#cfo)"/>'+
      (XO[k]==="O"?'<circle class="mo" cx="'+f(cx)+'" cy="'+f(cy)+'" r="36"/>':'<path class="mx" d="M'+f(cx-28)+' '+f(cy-28)+'L'+f(cx+28)+' '+f(cy+28)+'M'+f(cx+28)+' '+f(cy-28)+'L'+f(cx-28)+' '+f(cy+28)+'"/>')+
      '<text class="t ag" x="'+f(b[0]+8)+'" y="'+f(b[1]+17)+'">'+String.fromCharCode(65+Math.floor(k/3))+(k%3+1)+'</text></g>'});
  g+='</g></g>';
  /* labels, one set per step (leaders end at the thing they name) */
  var nx=TX(S.cells[3]),ec=TX([560,384]);
  g+='<g id="lb1"><text class="a" x="'+(mob?24:28)+'" y="'+(mob?44:46)+'">'+(mob?'CANCER CELL NESTS':'CANCER CELL NESTS')+'</text><path class="ldr" d="M'+(mob?80:84)+' '+(mob?58:78)+'L'+f(nx[0]-6)+' '+f(nx[1]-6)+'"/>'+
     '<text class="a" x="'+(mob?776:772)+'" y="'+(mob?540:520)+'" text-anchor="end">'+(mob?'MATRIX FIBRES':'EXTRACELLULAR MATRIX')+'</text><path class="ldr" d="M'+(mob?700:690)+' '+(mob?520:504)+'L'+f(ec[0])+' '+f(ec[1])+'"/>'+
     (mob?'':'<text class="t" x="28" y="66">THE PATIENT’S OWN TUMOR, KEPT WHOLE</text>')+'</g>';
  g+='<g id="lb2"><text class="a" x="'+(mob?24:28)+'" y="'+(mob?540:524)+'">'+(mob?'BEST MICROTISSUES':'BIOPRINTED MICROTISSUES · BEST™')+'</text>'+
     (mob?'':'<text class="t" x="28" y="544">ONE TISSUE SAMPLE, NINE MODELS OF ITS MICROENVIRONMENT</text>')+'</g>';
  g+='<g id="lb3"><text class="a" x="'+(mob?24:28)+'" y="'+(mob?528:524)+'">'+(mob?'O = BEST OPTIONS':'O · THE BEST OPTIONS FOR THIS PATIENT')+'</text>'+
     '<text class="a xk" x="'+(mob?24:28)+'" y="'+(mob?558:544)+'">'+(mob?'X = WILL NOT WORK':'X · TREATMENTS THAT WILL NOT WORK')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase circle",svg),tis:$("#tis",svg),bx:$$(".bx",svg),
    wl:dl(".bx .wl"),wf:$$(".bx .wl",svg),mt:dl(".bx .mt, .bx .mt2"),mx:dl(".bx .mx, .bx .mo"),gl:$$(".bx .gl",svg),ag:$$(".bx .ag",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),cn:$$(".cn",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function drawK(a,v){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.14),s2=seg(p,.34,.56),s3=seg(p,.68,.9);
    /* the slice recedes as it is carried into the array */
    op(E.tis,b*(1-.8*s2));
    E.cn.forEach(function(el,i){el.style.fillOpacity=(.35+.45*s1*(1-s2)*(.5+.5*Math.sin(p*30+i))).toFixed(3)});
    /* walls and microtissues draw in box by box */
    E.wl.forEach(function(a,k){drawK(a,b*seg(s2,k*.06,.5+k*.06))});
    E.wf.forEach(function(el,k){el.style.fillOpacity=(b*seg(s2,k*.06,.5+k*.06)).toFixed(3)});
    E.mt.forEach(function(a,k){drawK(a,b*seg(s2,.3+(k>>1)*.06,.8+(k>>1)*.025))});
    E.ag.forEach(function(el,k){op(el,b*seg(s2,.5+k*.05,.9))});
    /* step 3: every box is read out at once */
    E.mx.forEach(function(a,k){drawK(a,b*seg(s3,k*.04,.55+k*.05))});
    E.gl.forEach(function(el,k){op(el,b*(XO[k]==="O"?seg(s3,.6,1):0))});
    op(E.l1,b*s1*(1-seg(p,.26,.34)));op(E.l2,b*s2*(1-seg(p,.62,.7)));op(E.l3,b*seg(p,.72,.84));
  };
}
