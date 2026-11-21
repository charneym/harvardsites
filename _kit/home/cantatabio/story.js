/* the story scene (BL/BY/DB): ONE engraved chromatin fibre, beads (nucleosomes) on a string, kept on screen for all three steps.
   Step 1 the fibre is folded into three looped domains, and the loop anchors (far apart along the strand, side by side in the
   nucleus) light. Step 2 LinkPrep links DNA that lies close together: green links join the neighbours. Step 3 the fibre unfolds
   into the linear chromosome the sequencer reads, and each link becomes an arc spanning the genome (the long-range information
   short reads alone lose). Sources: cantatabio.com (LinkPrep: long-range information on standard short reads; compartments,
   TADs and chromatin loops; uniform coverage unlike restriction-enzyme Hi-C). Schematic; geometry is illustrative. */
var CF=(function(){
  var raw=[],i,k,BY=476,AY=392,loops=[];
  function P(x,y){raw.push([x,y])}
  function lerpTo(b,n){var a=raw[raw.length-1];for(var j=1;j<=n;j++)P(a[0]+(b[0]-a[0])*j/n,a[1]+(b[1]-a[1])*j/n)}
  var L=[{c:178,r:100,s:.8},{c:402,r:100,s:2.1},{c:626,r:100,s:3.4}];
  P(40,BY);
  L.forEach(function(l){var cy=AY-l.r;l.cc=[l.c,cy];
    function at(t){var q=t*Math.PI/180,rr=l.r*(1+.045*Math.sin(3*q+l.s)+.025*Math.cos(5*q+l.s));return [l.c+rr*Math.cos(q),cy+rr*Math.sin(q)]}
    lerpTo([l.c-58,BY],8);lerpTo(at(97),10);var i0=raw.length-1;
    for(var t=99;t<=443;t+=2)P.apply(null,at(t));var i1=raw.length-1;lerpTo([l.c+58,BY],10);loops.push([i0,i1])});
  lerpTo([760,BY],8);
  var cum=[0];for(i=1;i<raw.length;i++)cum.push(cum[i-1]+Math.hypot(raw[i][0]-raw[i-1][0],raw[i][1]-raw[i-1][1]));
  var N=240,F=[],tot=cum[cum.length-1],map=function(ri){var d=cum[ri];return Math.round(d/tot*(N-1))};k=0;
  for(i=0;i<N;i++){var d=tot*i/(N-1);while(k<cum.length-2&&cum[k+1]<d)k++;var u=(d-cum[k])/((cum[k+1]-cum[k])||1);F.push([raw[k][0]+(raw[k+1][0]-raw[k][0])*u,raw[k][1]+(raw[k+1][1]-raw[k][1])*u])}
  var LN=[];for(i=0;i<N;i++)LN.push([40+720*i/(N-1),BY]);
  /* contacts: each loop's two anchors, and the closest points of neighbouring loops (domain boundaries) */
  var LK=loops.map(function(p){return [map(p[0])+1,map(p[1])-1]});
  for(var j=0;j<L.length-1;j++){var A=[map(loops[j][0]),map(loops[j][1])],B=[map(loops[j+1][0]),map(loops[j+1][1])],best=[1e9,0,0];
    for(var x=A[0]+5;x<A[1]-5;x++)for(var y=B[0]+5;y<B[1]-5;y++){var dd=Math.hypot(F[x][0]-F[y][0],F[x][1]-F[y][1]);if(dd<best[0])best=[dd,x,y]}
    LK.push([best[1],best[2]])}
  return {F:F,LN:LN,LK:LK,N:N,L:L};
})();
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="lkg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#87c600" stop-opacity=".55"/><stop offset="1" stop-color="#87c600" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* engraved domain halos (fade out as the fibre unfolds) */
  CF.L.forEach(function(l){g+='<circle class="dh sD" cx="'+l.cc[0]+'" cy="'+l.cc[1]+'" r="'+(l.r+22)+'"/>'});
  g+='<path class="fb" id="fib" d=""/>';
  g+='<g id="beads"></g>';
  g+='<text class="t" x="784" y="546" text-anchor="end">CHROMATIN · SCHEMATIC</text>';
  g+='</g>';
  g+='<g id="scMove"><g id="anch"></g><g id="links"></g><g id="reads"></g></g>';
  var a=CF.LK[0];
  g+='<g id="lb1"><text class="a" x="'+(mob?24:36)+'" y="'+(mob?42:52)+'">'+(mob?'LOOP ANCHORS':'LOOP ANCHORS · FAR APART ON THE STRAND')+'</text>'+(mob?'':'<text class="t" x="36" y="72">SIDE BY SIDE IN THE NUCLEUS</text>')+'<path class="ldr" id="ld1" d=""/></g>';
  g+='<g id="lb2"><text class="a" x="'+(mob?776:764)+'" y="'+(mob?42:52)+'" text-anchor="end">'+(mob?'LINKED':'LINKED · DNA THAT LIES CLOSE TOGETHER')+'</text><path class="ldr" id="ld2" d=""/></g>';
  g+='<g id="lb3"><text class="a" x="'+(mob?24:36)+'" y="'+(mob?532:526)+'">'+(mob?'LONG-RANGE LINKS':'READ ON SHORT READS · LINKS SPAN THE GENOME')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var NS="http://www.w3.org/2000/svg",N=CF.N,F=CF.F,LN=CF.LN,LK=CF.LK,i;
  function mk(tag,cls,par){var e=document.createElementNS(NS,tag);if(cls)e.setAttribute("class",cls);par.appendChild(e);return e}
  var fib=$("#fib",svg),bg=$("#beads",svg),beads=[];for(i=0;i<N;i+=3)beads.push([i,mk("circle","nt",bg)]);
  beads.forEach(function(b){b[1].setAttribute("r","6.2")});
  var an=$("#anch",svg),lk=$("#links",svg),rd=$("#reads",svg),AN=[],LKS=[],RD=[];
  LK.forEach(function(p){var g1=mk("circle","ag",an);g1.setAttribute("r","15");g1.setAttribute("fill","url(#lkg)");var g2=mk("circle","ag",an);g2.setAttribute("r","15");g2.setAttribute("fill","url(#lkg)");AN.push([g1,g2]);
    var l=mk("path","lk",lk),d1=mk("circle","lkd",lk),d2=mk("circle","lkd",lk);d1.setAttribute("r","3.6");d2.setAttribute("r","3.6");LKS.push([l,d1,d2]);
    var r1=mk("rect","rd",rd),r2=mk("rect","rd",rd);[r1,r2].forEach(function(r){r.setAttribute("width","22");r.setAttribute("height","4")});RD.push([r1,r2])});
  var halos=$$(".dh",svg),texts=$$("#scBase text",svg),mv=$("#scMove",svg),l1=$("#lb1",svg),l2=$("#lb2",svg),l3=$("#lb3",svg),ld1=$("#ld1",svg),ld2=$("#ld2",svg);
  var f=function(n){return n.toFixed(1)};
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  var lastKey="";
  return function(p,b){
    if(!svg.isConnected)return;
    var s1=seg(p,0,.14),s2=seg(p,.36,.5),s3=ease(seg(p,.62,.84)),key=b.toFixed(3)+"|"+s3.toFixed(4);
    /* fibre geometry: folded -> linear */
    var P=[];for(i=0;i<N;i++)P.push([F[i][0]+(LN[i][0]-F[i][0])*s3,F[i][1]+(LN[i][1]-F[i][1])*s3]);
    if(key!==lastKey){lastKey=key;
      var n=Math.max(2,Math.round(N*b)),d="";for(i=0;i<n;i++)d+=(i?"L":"M")+f(P[i][0])+" "+f(P[i][1]);fib.setAttribute("d",d);
      beads.forEach(function(bd){var k=bd[0];bd[1].setAttribute("cx",f(P[k][0]));bd[1].setAttribute("cy",f(P[k][1]));bd[1].style.opacity=k<n?"1":"0"});
      halos.forEach(function(h){op(h,b*.9*(1-s3*1.6))});texts.forEach(function(t){op(t,b)});op(mv,b)}
    /* anchors (step 1), links (step 2), arcs and reads (step 3) */
    LK.forEach(function(pr,j){var A=P[pr[0]],B=P[pr[1]],pulse=.6+.4*Math.sin(p*36+j*1.7);
      AN[j][0].setAttribute("cx",f(A[0]));AN[j][0].setAttribute("cy",f(A[1]));AN[j][1].setAttribute("cx",f(B[0]));AN[j][1].setAttribute("cy",f(B[1]));
      var av=b*s1*(1-s2*.6)*(1-s3)*pulse;op(AN[j][0],av);op(AN[j][1],av);
      var h=s3*Math.min(300,(B[0]-A[0])*.95+40),mx=(A[0]+B[0])/2,my=(A[1]+B[1])/2-h*1.6;
      LKS[j][0].setAttribute("d","M"+f(A[0])+" "+f(A[1])+"Q"+f(mx)+" "+f(my)+" "+f(B[0])+" "+f(B[1]));
      LKS[j][1].setAttribute("cx",f(A[0]));LKS[j][1].setAttribute("cy",f(A[1]));LKS[j][2].setAttribute("cx",f(B[0]));LKS[j][2].setAttribute("cy",f(B[1]));
      var lv=b*seg(s2,j/LK.length*.6,j/LK.length*.6+.4);LKS[j].forEach(function(e){op(e,lv)});
      var rv=b*seg(p,.8,.92);RD[j][0].setAttribute("x",f(A[0]-11));RD[j][0].setAttribute("y",f(A[1]+14));RD[j][1].setAttribute("x",f(B[0]-11));RD[j][1].setAttribute("y",f(B[1]+14));op(RD[j][0],rv);op(RD[j][1],rv)});
    /* leaders end at the thing they name */
    var a0=P[LK[0][0]],a1=P[LK[1]?LK[1][1]:LK[0][1]],mob=svg.classList.contains("mob");
    ld1.setAttribute("d","M"+(mob?90:120)+" "+(mob?56:82)+"L"+f(a0[0])+" "+f(a0[1]-14));
    ld2.setAttribute("d","M"+(mob?740:700)+" "+(mob?56:64)+"L"+f(a1[0]+6)+" "+f(a1[1]-10));
    op(l1,b*s1*(1-seg(p,.3,.36)));op(l2,b*s2*(1-seg(p,.58,.64)));op(l3,b*seg(p,.8,.9));
  };
}
