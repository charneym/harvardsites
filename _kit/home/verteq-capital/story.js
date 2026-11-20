/* the story scene (BL/BY/DB): ONE engraved olive tree on a Tuscan hillside, the kind of grove VERTEQ backs through
   ArteOlio in the Maremma. Each of the five points of the firm's "approccio distintivo" inks one more layer of the same
   drawing: the value it could reach (the potential canopy, dimensioned), a shared focus (the central leader, suckers cut),
   the key people (the scaffold branches that carry the crown), growth by acquisition (a second tree planted and joined at
   the roots), and capital and harvest (the olives, gathered in the crate). */
function scene(){
  var mob=MOBILE(),f=function(n){return n.toFixed(1)},R=(function(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}})(29);
  function q(a,b,c,t){var u=1-t;return [u*u*a[0]+2*u*t*b[0]+t*t*c[0],u*u*a[1]+2*u*t*b[1]+t*t*c[1]]}
  /* a tapered limb along a quadratic centreline, as one closed outline */
  function limb(a,b,c,w0,w1){var L=[],Rr=[],n=14;for(var i=0;i<=n;i++){var t=i/n,p=q(a,b,c,t),p2=q(a,b,c,Math.min(1,t+.01)),p1=q(a,b,c,Math.max(0,t-.01)),dx=p2[0]-p1[0],dy=p2[1]-p1[1],d=Math.hypot(dx,dy)||1,wd=(w0+(w1-w0)*t)/2;
      L.push([p[0]-dy/d*wd,p[1]+dx/d*wd]);Rr.push([p[0]+dy/d*wd,p[1]-dx/d*wd])}
    var s='M'+f(L[0][0])+' '+f(L[0][1]);for(i=1;i<L.length;i++)s+='L'+f(L[i][0])+' '+f(L[i][1]);for(i=Rr.length-1;i>=0;i--)s+='L'+f(Rr[i][0])+' '+f(Rr[i][1]);return s+'Z'}
  function axis(a,b,c){return 'M'+f(a[0])+' '+f(a[1])+'Q'+f(b[0])+' '+f(b[1])+' '+f(c[0])+' '+f(c[1])}
  /* olive leaves: narrow, lanceolate, mostly hanging */
  function leaves(cx,cy,r,n,sc){var s='';for(var i=0;i<n;i++){var an=R()*Math.PI*2,rr=r*Math.sqrt(R()),x=cx+Math.cos(an)*rr,y=cy+Math.sin(an)*rr*.72,
      a=(R()<.7?Math.PI/2+(R()-.5)*1.6:R()*Math.PI*2),L=(10+R()*7)*sc,wd=2.6*sc,x2=x+Math.cos(a)*L,y2=y+Math.sin(a)*L,mx=(x+x2)/2,my=(y+y2)/2,nx=-Math.sin(a)*wd,ny=Math.cos(a)*wd;
      s+='M'+f(x)+' '+f(y)+'Q'+f(mx+nx)+' '+f(my+ny)+' '+f(x2)+' '+f(y2)+'Q'+f(mx-nx)+' '+f(my-ny)+' '+f(x)+' '+f(y)}return s}
  function olives(cx,cy,r,n){var s='';for(var i=0;i<n;i++){var an=R()*Math.PI*2,rr=r*Math.sqrt(R()),x=cx+Math.cos(an)*rr,y=cy+Math.sin(an)*rr*.7;s+='M'+f(x-3.4)+' '+f(y)+'a3.4 4.6 0 1 0 6.8 0a3.4 4.6 0 1 0 -6.8 0'}return s}
  var GR=476,g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  /* ---------- base: neatline, hills with distant rows, ground, the old tree ---------- */
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="sD kb" d="M24 404Q140 380 250 392T470 384Q600 376 776 398"/><path class="sD ht" d="M24 438Q180 420 330 430T620 424Q700 420 776 430"/>';
  var far='';[[60,398],[96,392],[132,388],[168,388],[580,380],[612,380],[724,392],[758,396],[48,436],[92,432],[136,430],[180,430],[560,428],[600,426],[730,426]].forEach(function(p,i){var r=i<9?7:9;far+='M'+(p[0]-r)+' '+p[1]+'q'+r+' '+(-r*1.5)+' '+(2*r)+' 0M'+p[0]+' '+p[1]+'v'+(r*.7)});
  g+='<path class="sD ht" d="'+far+'"/>';
  g+='<path class="sD gr" d="M24 '+GR+'H776"/>';
  var hz='';for(var i=0;i<63;i++){var hx=30+i*12;hz+='M'+hx+' '+(GR+4)+'l-7 7'}g+='<path class="sD ht" d="'+hz+'"/>';
  /* the trunk: two twisted strands rising to the fork, with bark seams */
  var T=limb([340,476],[322,410],[356,334],34,15)+limb([388,476],[404,396],[372,332],28,13);
  g+='<path class="sD bl tk" d="'+T+'"/>';
  var bark='';for(i=0;i<16;i++){var by=344+i*8,bx=338+R()*30;bark+='M'+f(bx)+' '+by+'q'+f(4+R()*4)+' '+f(-3)+' '+f(8+R()*6)+' '+f(1)}
  g+='<path class="sD ht" d="'+bark+'"/>';
  /* suckers at the base (cut at step 2) */
  g+='<path class="sD bl" d="M330 '+(GR-6)+'q-14 -14 -18 -40M404 '+(GR-4)+'q16 -12 22 -36"/>';
  /* scaffold branches and twigs */
  var A=[[352,336],[300,304],[236,240]],B=[[366,332],[372,262],[394,168]],C=[[378,336],[442,300],[508,228]],D=[[350,352],[306,350],[270,316]];
  g+='<path class="sD bl tk" d="'+limb(A[0],A[1],A[2],15,4)+limb(B[0],B[1],B[2],15,4)+limb(C[0],C[1],C[2],13,4)+limb(D[0],D[1],D[2],8,2)+'"/>';
  g+='<path class="sD bl" d="M236 240q-24 -10 -38 -30M248 252q-6 -30 -2 -54M394 168q-24 -14 -36 -34M394 170q22 -18 30 -38M508 228q26 -10 40 -30M500 236q10 -26 4 -52M270 316q-26 -6 -42 -24M440 300q32 4 52 -4"/>';
  var lf='';[[230,214,46],[272,186,44],[322,166,44],[392,146,46],[452,166,44],[512,198,44],[548,232,36],[282,250,40],[470,244,40],[364,206,40],[424,212,38],[304,214,36],[214,268,30],[506,272,30]].forEach(function(c){lf+=leaves(c[0],c[1],c[2],32,1)});
  g+='<path class="sD lf" d="'+lf+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 22h228v52h-228Z M548 48h228"/><text x="558" y="40" class="t">TAV. I · L’OLIVO</text><text x="558" y="66" class="t s">MAREMMA TOSCANA</text></g>';
  g+='</g>';
  /* ---------- 1 value: the canopy the tree could reach, dimensioned ---------- */
  g+='<g id="sc1"><path class="plan dr" d="M150 300C150 160 260 92 385 92S620 160 620 300"/>'+
     '<path class="dim dr" d="M752 '+GR+'V92M744 '+GR+'H760M744 92H760"/>'+
     '<text x="44" y="64" class="a">1 · IL VALORE POSSIBILE</text></g>';
  /* ---------- 2 focus: the central leader in light, the suckers cut ---------- */
  g+='<g id="sc2"><path class="pipe dr" d="M362 '+GR+'C370 440 356 380 368 334Q372 262 394 168"/>'+
     '<path class="cut dr" d="M306 452l16 -8M300 444l10 14M416 452l16 6M428 444l-8 14"/>'+
     '<text x="44" y="64" class="a">2 · UN OBIETTIVO PRIMARIO</text></g>';
  /* ---------- 3 people: the scaffold branches that carry the crown ---------- */
  g+='<g id="sc3"><path class="lbl" d="'+limb(A[0],A[1],A[2],15,4)+limb(B[0],B[1],B[2],15,4)+limb(C[0],C[1],C[2],13,4)+'"/>'+
     '<path class="pipe dr" d="'+axis(A[0],A[1],A[2])+axis(C[0],C[1],C[2])+'"/>'+
     '<text x="44" y="64" class="a">3 · LE BRANCHE PORTANTI</text></g>';
  /* ---------- 4 growth by acquisition: a second tree planted and joined at the roots ---------- */
  var y2='M624 '+GR+'C632 452 626 430 636 404L642 388 650 390C646 410 652 440 660 '+GR+'Z';
  var y2b='M640 392q-30 -20 -46 -46M646 390q4 -36 20 -62M648 396q30 -10 48 -34';
  var y2l='';[[594,342,26],[634,316,28],[676,328,26],[700,358,20],[612,372,18]].forEach(function(c){y2l+=leaves(c[0],c[1],c[2],16,.9)});
  g+='<g id="sc4"><path class="bl dr" d="'+y2+'"/><path class="bl dr" d="'+y2b+'"/><path class="lf2 dr" d="'+y2l+'"/>'+
     '<path class="root dr" d="M344 '+GR+'q-20 26 -64 40M372 '+GR+'q10 34 -6 60M392 '+GR+'q40 24 110 30q60 6 130 -6M642 '+GR+'q-6 22 -40 32M652 '+GR+'q18 20 54 26"/>'+
     '<path class="dim dr" d="M500 '+(GR+38)+'h132"/><circle class="node" cx="566" cy="'+(GR+38)+'" r="4"/>'+
     '<text x="44" y="64" class="a">4 · IL NUOVO IMPIANTO</text></g>';
  /* ---------- 5 capital and harvest: the olives, and the crate ---------- */
  var ol='';[[230,224,40],[300,190,40],[392,160,40],[466,186,40],[520,222,34],[320,246,34],[440,240,34]].forEach(function(c){ol+=olives(c[0],c[1],c[2],9)});
  [[620,334,26],[672,340,24]].forEach(function(c){ol+=olives(c[0],c[1],c[2],5)});
  g+='<g id="sc5"><path class="lit" d="'+ol+'"/>'+
     '<path class="lit2" d="M440 '+GR+'V444H540V'+GR+'Z"/><path class="bl" d="M440 444H540M440 456H540M440 466H540M450 444V'+GR+'M530 444V'+GR+'"/>'+
     '<path class="lit" d="'+olives(468,438,10,3)+olives(510,438,10,3)+'"/>'+
     '<text x="44" y="64" class="a">5 · IL RACCOLTO</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb",svg),g:[1,2,3,4,5].map(function(i){return $("#sc"+i,svg)}),
    d:[1,2,3,4,5].map(function(i){return dl("#sc"+i+" .dr")}),t:[1,2,3,4,5].map(function(i){var t=$("#sc"+i+" text",svg);svg.appendChild(t);return t})};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[seg(p,0,.1),seg(p,.2,.3),seg(p,.4,.5),seg(p,.6,.7),seg(p,.8,.9)];
    s[0]=1;
    /* each layer stays once drawn; the potential envelope quietens once the later layers arrive */
    E.g[0].style.opacity=(b*s[0]*(1-.55*s[2])).toFixed(3);draw(E.d[0],s[0]);
    for(var i=1;i<5;i++){E.g[i].style.opacity=(b*(s[i]>0?1:0)).toFixed(3);draw(E.d[i],s[i])}
    E.g[1].style.opacity=(b*(s[1]>0?1:0)*(1-.5*s[2])).toFixed(3);
    E.g[4].style.opacity=(b*s[4]).toFixed(3);
    /* the step labels share one spot: one at a time */
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    var tv=[O(s[1])];for(i=1;i<5;i++)tv.push(I(s[i])*(i<4?O(s[i+1]):1));
    for(i=0;i<5;i++)E.t[i].style.opacity=(tv[i]*b).toFixed(3);
  };
}
