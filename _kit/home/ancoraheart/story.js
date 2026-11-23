/* the story scene (BL/BY/DB): ONE left ventricle in short-axis cross-section (as in Ancora Heart's own "Cinch" render, looking down
   into the LV), kept on screen for all four steps, the right ventricle hugging its septal side. Steps follow ancoraheart.com/physicians,
   "How the AccuCinch System works": 1 access: a guide wire is placed along the LV wall, behind the chordae; 2 delivery: a series of
   anchors, each separated by a spacer, are delivered over a cable into the LV wall; 3 cinch: the implant is cinched and secured with a
   nitinol lock to reduce the size of the LV; 4 the goal: a smaller ventricle with less wall stress. Schematic; scrubbed progress. */
var LV={cx:420,cy:270,ro:200,ri:148,a0:140,a1:-140,ns:7,k:.14};
function lvRand(i){var x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x)}
function lvP(r,a){var t=a*Math.PI/180;return [LV.cx+r*Math.cos(t),LV.cy+r*Math.sin(t)]}
function lvArc(r,a,b){var f=function(n){return (+n).toFixed(1)},d='',n=Math.max(2,Math.ceil(Math.abs(b-a)/4)),i;for(i=0;i<=n;i++){var q=lvP(r,a+(b-a)*i/n);d+=(i?'L':'M')+f(q[0])+' '+f(q[1])}return d}
function lvRV(ro){var f=function(n){return (+n).toFixed(1)},a=lvP(ro,236),b=lvP(ro,124),bx=LV.cx-ro-72;
  return 'M'+f(a[0])+' '+f(a[1])+'C'+f(bx+40)+' '+f(a[1]-6)+' '+f(bx)+' '+f(LV.cy-90)+' '+f(bx)+' '+f(LV.cy)+'C'+f(bx)+' '+f(LV.cy+90)+' '+f(bx+40)+' '+f(b[1]+6)+' '+f(b[0])+' '+f(b[1])}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,C=LV,ri=C.ri-7;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'112 20 600 590':'-24 10 744 560')+'" aria-hidden="true">';
  /* the ghost of the ventricle's original size (step 4) */
  g+='<path class="ghost" id="ghost" d="'+lvArc(C.ri,-180,180)+'Z"/>';
  g+='<path class="rv sD" id="rvp" d="'+lvRV(C.ro)+'"/>';
  g+='<g id="lvg">';
  g+='<g id="lvBase"><path class="wall sD" d="'+lvArc(C.ro,-180,180)+'Z"/><path class="wall sD" d="'+lvArc(C.ri,-180,180)+'Z"/>';
  /* myocardial fibres: fine strokes across the wall */
  var fb='';for(i=0;i<120;i++){var a=i*3+lvRand(i)*2,r0=C.ri+7+lvRand(i+9)*6,r1=C.ro-7-lvRand(i+19)*8,p0=lvP(r0,a),p1=lvP(r1,a+4+lvRand(i+29)*3);fb+='M'+f(p0[0])+' '+f(p0[1])+'L'+f(p1[0])+' '+f(p1[1])}
  g+='<path class="fib" d="'+fb+'"/>';
  /* two papillary muscles on the inner wall */
  [[-38,1],[112,2]].forEach(function(m){var a=m[0],b=lvP(C.ri-4,a-12),c=lvP(C.ri-4,a+12),t=lvP(C.ri-34,a);
    g+='<path class="pap" d="M'+f(b[0])+' '+f(b[1])+'Q'+f(t[0]+(b[0]-c[0])*.15)+' '+f(t[1]+(b[1]-c[1])*.15)+' '+f(t[0])+' '+f(t[1])+'Q'+f(t[0]-(b[0]-c[0])*.15)+' '+f(t[1]-(b[1]-c[1])*.15)+' '+f(c[0])+' '+f(c[1])+'"/>'});
  g+='</g>';
  /* the guide wire / cable: from the catheter at the centre out to the wall, then along it */
  var e1=lvP(ri,C.a1);
  g+='<path class="wire" id="wtail" d="M'+C.cx+' '+C.cy+'Q'+f(C.cx-40)+' '+f(C.cy-70)+' '+f(e1[0])+' '+f(e1[1])+'"/>';
  g+='<path class="wire" id="wire" d="'+lvArc(ri,C.a1,C.a0)+'"/>';
  g+='<circle class="cath" id="cath" cx="'+C.cx+'" cy="'+C.cy+'" r="6"/>';
  /* anchors (a small coil into the wall) and spacers between them, in delivery order from the far end */
  var step=(C.a1-C.a0)/C.ns,parts='';
  for(i=0;i<=C.ns;i++){var aa=C.a0+step*i,o=i;var u=[Math.cos(aa*Math.PI/180),Math.sin(aa*Math.PI/180)],v=[-u[1],u[0]],cz='';
    for(var k=0;k<=8;k++){var rr=ri+2+k*2.6,w=(k%2?1:-1)*(k&&k<8?4:0),pt=[C.cx+u[0]*rr+v[0]*w,C.cy+u[1]*rr+v[1]*w];cz+=(k?'L':'M')+f(pt[0])+' '+f(pt[1])}
    parts+='<path class="anc dl" data-i="'+(2*o)+'" d="'+cz+'"/>';
    if(i<C.ns){var s0=aa+step*.2,s1=aa+step*.8;parts+='<g class="dl" data-i="'+(2*o+1)+'"><path class="spc" d="'+lvArc(ri,s0,s1)+'"/><path class="spc2" d="'+lvArc(ri,s0+step*.04,s1-step*.04)+'"/></g>'}}
  g+='<g id="parts">'+parts+'</g>';
  var lk=lvP(ri,C.a0+4),lk2=lvP(ri,C.a0+9);
  g+='<path class="lock" id="lock" d="M'+f(lk[0])+' '+f(lk[1])+'L'+f(lk2[0])+' '+f(lk2[1])+'"/>';
  g+='</g>';
  /* inward arrows (step 4) from the old wall to the new */
  var ar='';[-50,-10,30,70].forEach(function(a){var p0=lvP(C.ri+C.ro*.0+C.ro-C.ri+22,a),p1=lvP(C.ro*(1-C.k)+10,a),u=[Math.cos(a*Math.PI/180),Math.sin(a*Math.PI/180)],v=[-u[1],u[0]];
    ar+='M'+f(p0[0])+' '+f(p0[1])+'L'+f(p1[0])+' '+f(p1[1])+'M'+f(p1[0]+u[0]*9+v[0]*6)+' '+f(p1[1]+u[1]*9+v[1]*6)+'L'+f(p1[0])+' '+f(p1[1])+'L'+f(p1[0]+u[0]*9-v[0]*6)+' '+f(p1[1]+u[1]*9-v[1]*6)});
  g+='<path class="arw" id="arw" d="'+ar+'"/>';
  g+='<path class="ghost" id="ghostO" d="'+lvArc(C.ro,-180,180)+'Z"/>';
  /* fixed labels, clear of every stroke; the step caption sits under the drawing */
  g+='<text class="t lbx" x="'+(mob?700:690)+'" y="'+(mob?48:44)+'" text-anchor="end">'+(mob?'LEFT VENTRICLE':'LEFT VENTRICLE, IN CROSS-SECTION')+'</text>';
  if(!mob)g+='<text class="t lbx" x="-18" y="274">RIGHT VENTRICLE</text>';
  var CAP=mob?['GUIDE WIRE ALONG THE WALL','ANCHORS AND SPACERS','CINCHED AND LOCKED','A SMALLER VENTRICLE']:['A GUIDE WIRE ALONG THE LV WALL','ANCHORS AND SPACERS, ON ONE CABLE','CINCHED, THEN SECURED WITH A NITINOL LOCK','A SMALLER VENTRICLE, LESS WALL STRESS'];
  CAP.forEach(function(c,j){g+='<text class="a lbc" id="lb'+j+'" x="'+(mob?150:220)+'" y="'+(mob?560:548)+'">'+c+'</text>'});
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),fade:$$(".fib,.pap,.lbx",svg),lvg:$("#lvg",svg),rv:$("#rvp",svg),wire:dl("#wire")[0],tail:dl("#wtail")[0],cath:$("#cath",svg),
    parts:$$("#parts .dl",svg),lock:$("#lock",svg),ghost:[$("#ghost",svg),$("#ghostO",svg)],arw:$("#arw",svg),lb:[0,1,2,3].map(function(j){return $("#lb"+j,svg)})};
  var NP=E.parts.length,lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* 1 access: the wire runs from the catheter out to the wall and along it */
    var w1=seg(p,.02,.08),w2=seg(p,.07,.22);
    op(E.cath,b*(1-seg(p,.66,.72)));draw([E.tail],w1);draw([E.wire],w2);
    /* 2 delivery: anchors and spacers arrive one after another, far end first */
    E.parts.forEach(function(el){var i=+el.getAttribute("data-i"),a=.27+i/NP*.2;op(el,b*seg(p,a,a+.03))});
    /* 3 cinch: the ventricle draws in around the implant; the lock seats; the delivery cable withdraws */
    var c=seg(p,.53,.68),s=1-LV.k*c;
    E.lvg.setAttribute("transform","translate("+(LV.cx*(1-s)).toFixed(2)+" "+(LV.cy*(1-s)).toFixed(2)+") scale("+s.toFixed(4)+")");
    E.rv.setAttribute("d",lvRV(LV.ro*s));
    op(E.lock,b*seg(p,.62,.67));op(E.tail[0],b*(1-seg(p,.66,.72)));
    /* 4 the goal: the old outline stays as a faint ghost, arrows show the smaller ventricle */
    E.ghost.forEach(function(gh){op(gh,b*.55*seg(p,.56,.62))});op(E.arw,b*seg(p,.78,.84));
    var L=[1-seg(p,.22,.26),seg(p,.27,.31)*(1-seg(p,.47,.51)),seg(p,.53,.57)*(1-seg(p,.72,.76)),seg(p,.77,.81)];
    E.lb.forEach(function(el,j){op(el,b*L[j])});
  };
}
