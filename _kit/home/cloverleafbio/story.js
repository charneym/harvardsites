/* the story scene (BL/BY/DB): ONE engraved tRNA cloverleaf (76 nucleotides: acceptor stem with its CCA end, D arm, anticodon
   arm, variable loop, T arm), kept on screen for all three steps, with three tRNA-modifying enzymes around it.
   Step 1 the enzymes come and go at the loops and the native modifications light. Step 2 the enzymes back off and the
   engineered tRNA's 5-fluorouracil positions light. Step 3 the enzymes dock and stay: irreversibly inhibited, several at
   once from one molecule. Sources: NIH RePORTER abstract of 1R42CA290914-01A1 (HCC cells depend on high expression of
   multiple tRNA-modifying enzymes; engineered tRNAs containing 5-FU irreversibly inhibit multiple enzymes from the same
   molecule) and the 2026-09-08 seed release. Schematic; positions are illustrative. Driven by the scrubbed story progress. */
var TR=(function(){
  var J=[400,236],N=[],i;
  function push(x,y){N.push([x,y])}
  /* acceptor 5' strand: nt 1-7 down the left */
  for(i=0;i<7;i++)push(388,58+i*22);
  push(380,214);push(370,226);                                   /* 8-9 */
  for(i=0;i<4;i++)push(348-i*22,236);                            /* D stem 10-13 */
  var D=[214,248],Dr=40;for(i=0;i<8;i++){var a=(-40-i*(280/7))*Math.PI/180;push(D[0]+Dr*Math.cos(a)*1.06,D[1]+Dr*Math.sin(a))}  /* D loop 14-21 */
  for(i=0;i<4;i++)push(282+i*22,260);                            /* D stem 22-25 */
  push(370,272);                                                  /* 26 */
  for(i=0;i<5;i++)push(388,290+i*22);                            /* anticodon stem 27-31 */
  var A=[400,428],Ar=36;for(i=0;i<7;i++){var b=(-130-i*(280/6))*Math.PI/180;push(A[0]+Ar*Math.cos(b),A[1]-Ar*Math.sin(b)*-1)}  /* anticodon loop 32-38 */
  for(i=0;i<5;i++)push(412,378-i*22);                            /* anticodon stem 39-43 */
  push(432,276);push(446,292);push(462,298);push(474,290);push(470,276);  /* variable loop 44-48 */
  for(i=0;i<5;i++)push(452+i*22,260);                            /* T stem 49-53 */
  var T=[596,248],Tr=38;for(i=0;i<7;i++){var c=(140-i*(280/6))*Math.PI/180;push(T[0]+Tr*Math.cos(c)*1.04,T[1]+Tr*Math.sin(c))}  /* T loop 54-60 */
  for(i=0;i<5;i++)push(540-i*22,236);                            /* T stem 61-65 */
  for(i=0;i<7;i++)push(412,190-i*22);                            /* acceptor 3' strand 66-72 */
  push(426,40);push(440,26);push(456,16);push(472,10);           /* 73-76: the CCA end */
  var PAIRS=[];for(i=0;i<7;i++)PAIRS.push([i,71-i]);for(i=0;i<4;i++)PAIRS.push([9+i,24-i]);for(i=0;i<5;i++)PAIRS.push([26+i,42-i]);for(i=0;i<5;i++)PAIRS.push([48+i,64-i]);
  return {N:N,PAIRS:PAIRS,D:D,A:A,T:T,J:J};
})();
/* the three enzymes: docked centre, direction they come from, size, shape seed */
var ENZ=[{c:[112,248],d:[-1,0],r:58,s:1},{c:[400,512],d:[0,1],r:50,s:2},{c:[700,248],d:[1,0],r:56,s:3}];
var MODN=[16,17,19,33,36,54,55];       /* native modification marks (loop nucleotides; illustrative) */
var FUN=[15,18,35,53,56];              /* engineered 5-FU positions (illustrative) */
function blob(e,k){var s='',i,n=72,face=Math.atan2(-e.d[1],-e.d[0]);for(i=0;i<=n;i++){var t=i/n*Math.PI*2,dd=Math.atan2(Math.sin(t-face),Math.cos(t-face)),
  r=e.r*k*(1+.1*Math.sin(3*t+e.s)+.06*Math.sin(5*t+e.s*2)+.04*Math.cos(7*t+e.s))*(1-.32*Math.exp(-dd*dd/.08));
  s+=(i?'L':'M')+(r*Math.cos(t)).toFixed(1)+' '+(r*Math.sin(t)).toFixed(1)}return s+'Z'}
function scene(){
  var mob=MOBILE(),N=TR.N,f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="fug" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#eb4304" stop-opacity=".75"/><stop offset="1" stop-color="#eb4304" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="eng" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#feae00" stop-opacity=".16"/><stop offset="1" stop-color="#feae00" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* backbone: one strand through all 76 nucleotides */
  var bb='';for(i=0;i<N.length;i++)bb+=(i?'L':'M')+f(N[i][0])+' '+f(N[i][1]);
  g+='<path class="bb sD" d="'+bb+'"/>';
  /* base pairs on the four stems */
  var rp='';TR.PAIRS.forEach(function(p){var a=N[p[0]],b=N[p[1]],dx=b[0]-a[0],dy=b[1]-a[1],L=Math.hypot(dx,dy),ux=dx/L,uy=dy/L;
    rp+='M'+f(a[0]+ux*6)+' '+f(a[1]+uy*6)+'L'+f(b[0]-ux*6)+' '+f(b[1]-uy*6)});
  g+='<path class="bp sD" d="'+rp+'"/>';
  /* engraved ring around each loop */
  [[TR.D,52],[TR.A,48],[TR.T,50]].forEach(function(l){g+='<circle class="lr sD" cx="'+l[0][0]+'" cy="'+l[0][1]+'" r="'+l[1]+'"/>'});
  for(i=0;i<N.length;i++)g+='<circle class="nt" cx="'+f(N[i][0])+'" cy="'+f(N[i][1])+'" r="5.4"/>';
  g+='<text class="t" x="420" y="16">3′ CCA END</text><text class="t" x="352" y="62" text-anchor="end">5′</text>';
  g+='<text class="t" x="784" y="546" text-anchor="end">tRNA CLOVERLEAF · SCHEMATIC</text>';
  g+='</g>';
  g+='<g id="scMove">';
  /* native modifications (step 1) and 5-FU positions (step 2-3) */
  MODN.forEach(function(k){g+='<circle class="md" cx="'+f(N[k][0])+'" cy="'+f(N[k][1])+'" r="5.4"/>'});
  FUN.forEach(function(k){g+='<circle class="fg" cx="'+f(N[k][0])+'" cy="'+f(N[k][1])+'" r="16" fill="url(#fug)"/><circle class="fu" cx="'+f(N[k][0])+'" cy="'+f(N[k][1])+'" r="5.2"/>'});
  /* enzymes: an engraved protein outline with inner contours and an active-site cleft facing the tRNA */
  ENZ.forEach(function(e,j){g+='<g class="enz" id="enz'+j+'" transform="translate('+e.c[0]+' '+e.c[1]+')"><circle r="'+(e.r*1.5)+'" fill="url(#eng)"/>'+
    '<path class="eo" d="'+blob(e,1)+'"/><path class="ei" d="'+blob(e,.78)+'"/><path class="ei2" d="'+blob(e,.55)+'"/><path class="ei3" d="'+blob(e,.3)+'"/></g>'});
  g+='</g>';
  /* labels, one set per step (leaders end at the thing they name) */
  var e0=ENZ[0];
  g+='<g id="lb1"><text class="a" x="'+(mob?24:40)+'" y="'+(mob?150:156)+'">'+(mob?'MODIFYING ENZYMES':'tRNA-MODIFYING ENZYMES')+'</text><path class="ldr" d="M'+(mob?90:96)+' '+(mob?166:168)+'L'+f(e0.c[0])+' '+f(e0.c[1]-e0.r*.9)+'"/>'+
     (mob?'':'<text class="t" x="40" y="176">HIGH IN LIVER CANCER CELLS</text>')+'</g>';
  var q=N[56];
  g+='<g id="lb2"><text class="a" x="'+(mob?776:760)+'" y="'+(mob?150:150)+'" text-anchor="end">'+(mob?'5-FU':'5-FLUOROURACIL (5-FU)')+'</text><path class="ldr" d="M'+(mob?740:640)+' '+(mob?166:162)+'L'+f(q[0]+8)+' '+f(q[1]-8)+'"/>'+
     (mob?'':'<text class="t" x="760" y="170" text-anchor="end">WRITTEN INTO THE ENGINEERED tRNA</text>')+'</g>';
  g+='<g id="lb3"><text class="a" x="'+(mob?24:40)+'" y="'+(mob?548:546)+'">'+(mob?'ENZYMES HELD':'ENZYMES HELD · IRREVERSIBLY INHIBITED')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .nt",svg),mv:$("#scMove",svg),md:$$(".md",svg),fu:$$(".fu",svg),fg:$$(".fg",svg),
    en:$$(".enz",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.14),s2=seg(p,.36,.52),s3=seg(p,.68,.86);
    /* enzymes: step 1 they work the loops (in and out with the scroll); step 2 they back off; step 3 they dock and stay */
    E.en.forEach(function(el,j){var e=ENZ[j],cyc=.5+.5*Math.cos(p*Math.PI*2*3.2+j*2.1),
      out=(1-s2)*(.12+.5*cyc*(1-s3))+s2*(1-s3)*.95+(1-s1)*.6*(1-s2);
      out=Math.max(0,Math.min(1.2,out));
      var x=e.c[0]+e.d[0]*out*70,y=e.c[1]+e.d[1]*out*70;el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");
      el.classList.toggle("held",s3>.5);op(el,b*(.35+.65*Math.max(s1,s3,1-out*.7)))});
    /* native modifications light while the enzymes work, then give way to the 5-FU positions */
    E.md.forEach(function(el,i){op(el,b*s1*(1-s2)*(.55+.45*Math.sin(p*40+i)))});
    E.fu.forEach(function(el){op(el,b*s2)});
    E.fg.forEach(function(el){op(el,b*s2*(.6+.4*s3))});
    op(E.l1,b*s1*(1-seg(p,.28,.36)));op(E.l2,b*s2*(1-seg(p,.62,.7)));op(E.l3,b*seg(p,.72,.82));
  };
}
