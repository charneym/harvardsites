/* the story scene (BL/BY/DB): ONE coronal section of the head, kept on screen for all four steps, drawn in fine lines in the
   logo's ink, white and cyan. Step 1 the preoperative tumor contour (dashed) sits on the tumor. Step 2 the bone flap lifts,
   the brain under the craniotomy sinks and deforms, the tumor moves and the contour is left behind (the brain-shift error).
   Step 3 the microscope's stereovision cameras sample the exposed surface; the model moves the contour back onto the tumor.
   Step 4 quantitative fluorescence: PpIX concentration rings light inside the tumor and a probe reads its margin.
   Sources: insightsurgicaltechnologies.com (home, /i2-update/, /qf-image/). Driven by the scrubbed story progress. */
var BC=[400,300],SK=[250,205],BR=[226,180],CRA=-.96;         /* centre, skull and brain radii, craniotomy angle (rad) */
var TU=[512,214];                                             /* tumor centre */
function dfm(x,y,S){ /* brain shift: tissue under the craniotomy sinks toward the centre, falling off with distance */
  var px=BC[0]+SK[0]*Math.cos(CRA),py=BC[1]+SK[1]*Math.sin(CRA),d2=(x-px)*(x-px)+(y-py)*(y-py),f=S*48*Math.exp(-d2/(2*125*125));
  var vx=BC[0]-px,vy=BC[1]-py,vl=Math.hypot(vx,vy);return [x+f*vx/vl,y+f*vy/vl]}
function brainPts(S){var P=[],i,n=220;for(i=0;i<n;i++){var a=i/n*Math.PI*2,da=Math.atan2(Math.sin(a+Math.PI/2),Math.cos(a+Math.PI/2)),mid=Math.exp(-Math.pow(da/.07,2)),
  r=1+.022*Math.sin(a*23)+.012*Math.sin(a*37+1)-.13*mid-.05*Math.exp(-Math.pow((a-Math.PI/2)/.22,2));
  P.push(dfm(BC[0]+BR[0]*r*Math.cos(a),BC[1]+BR[1]*r*Math.sin(a),S))}return P}
function pth(P,close){return P.map(function(p,i){return (i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)}).join('')+(close?'Z':'')}
function sulci(S){var s='',k;for(k=0;k<22;k++){var a=-Math.PI+.1+k*(Math.PI*2-.2)/21,A=[];if(Math.abs(Math.atan2(Math.sin(a+Math.PI/2),Math.cos(a+Math.PI/2)))<.2)continue;
  for(var j=0;j<6;j++){var r=.975-j*.038;A.push(dfm(BC[0]+BR[0]*r*Math.cos(a+.035*Math.sin(j*1.3)),BC[1]+BR[1]*r*Math.sin(a+.035*Math.sin(j*1.3)),S))}s+=pth(A)}return s}
function midline(S){var A=[],j;for(j=0;j<9;j++)A.push(dfm(BC[0]+Math.sin(j)*1.5,BC[1]-BR[1]*.9+j*BR[1]*.07,S));return pth(A)}
function vent(S,side){var A=[],j;for(j=0;j<=24;j++){var t=j/24*Math.PI*2,x=BC[0]+side*(22+11*Math.cos(t)),y=BC[1]+16+24*Math.sin(t);A.push(dfm(x,y,S))}return pth(A,1)}
function blob(cx,cy,r,ph){var A=[],j;for(j=0;j<40;j++){var t=j/40*Math.PI*2,rr=r*(1+.12*Math.sin(t*3+ph)+.06*Math.sin(t*5+1));A.push([cx+rr*Math.cos(t),cy+rr*.86*Math.sin(t)])}return pth(A,1)}
function tumorAt(S){return dfm(TU[0],TU[1],S)}
function skullArc(a0,a1,rx,ry){var A=[],n=60,j;for(j=0;j<=n;j++){var t=a0+(a1-a0)*j/n;A.push([BC[0]+rx*Math.cos(t),BC[1]+ry*Math.sin(t)])}return pth(A)}
function scene(){
  var mob=MOBILE(),g='',f0=CRA-.36,f1=CRA+.36;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="128 -58 584 584" aria-hidden="true">';
  g+='<defs><radialGradient id="qg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#7fd3ee" stop-opacity=".95"/><stop offset=".45" stop-color="#4ab4d8" stop-opacity=".55"/><stop offset="1" stop-color="#4ab4d8" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* skull: the ring with a gap where the bone flap sits (the flap is a moving part) */
  g+='<path class="sk sD" d="'+skullArc(f1,f0+Math.PI*2,SK[0],SK[1])+'"/><path class="sk2 sD" d="'+skullArc(f1,f0+Math.PI*2,SK[0]-12,SK[1]-12)+'"/>';
  g+='<text class="t" x="706" y="518" text-anchor="end">SCHEMATIC · NOT PATIENT DATA</text>';
  g+='</g>';
  g+='<g id="scMove">';
  g+='<g id="flap"><path class="sk" d="'+skullArc(f0,f1,SK[0],SK[1])+'"/><path class="sk2" d="'+skullArc(f0,f1,SK[0]-12,SK[1]-12)+'"/></g>';
  g+='<path class="cx" id="cortex"/><path class="su" id="sulci"/><path class="ml" id="midl"/><path class="vn" id="vL"/><path class="vn" id="vR"/>';
  g+='<path class="tu" id="tum"/>';
  /* quantitative fluorescence: concentration rings inside the tumor */
  g+='<g id="qf"><circle id="qglow" r="44" fill="url(#qg)"/><path class="qr" id="q1"/><path class="qr" id="q2"/><path class="qr" id="q3"/></g>';
  /* the preoperative contour (dashed cyan): it stays put when the brain shifts, and is updated in step 3 */
  g+='<path class="pc" id="pre"/>';
  g+='<g id="err"><path class="dm" id="errl"/></g>';
  /* the operating microscope's head, with its two stereovision cameras, above the craniotomy */
  g+='<g id="mic"><path class="mc2" d="M656 -40V8"/><path class="mc" d="M612 8H700V44L684 64H628L612 44Z"/><circle class="lns" cx="638" cy="64" r="9"/><circle class="lns" cx="674" cy="64" r="9"/></g>';
  g+='<g id="rays"></g>';
  /* the probe, touched to the tumor margin */
  g+='<g id="prb"><path class="pb" d="M0 0L58 -146"/><path class="pb2" d="M54 -136L84 -212"/><circle class="tip" r="9" fill="url(#qg)"/></g>';
  g+='</g>';
  /* labels, one set per step (leader lines end at the thing they name) */
  var L=mob?{a:'PLANNED CONTOUR',b:'BRAIN SHIFT',c:'CAMERAS',c2:'MRI UPDATED',d:'PpIX MAPPED'}:{a:'PREOPERATIVE TUMOR CONTOUR',b:'BRAIN SHIFT · THE MAP IS LEFT BEHIND',c:'STEREOVISION CAMERAS',c2:'MRI UPDATED · UNDER 2 MM',d:'PpIX CONCENTRATION, QUANTIFIED'};
  var ty=mob?-22:-30,tx=134;
  g+='<g id="lb1"><path class="ld" d="M'+tx+' '+(ty+12)+'H330L476 186"/><text class="a" x="'+tx+'" y="'+ty+'">'+L.a+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+tx+'" y="'+ty+'">'+L.b+'</text><path class="ld" id="l2l" d=""/></g>';
  g+='<g id="lb3"><text class="a" x="600" y="'+(mob?36:32)+'" text-anchor="end">'+L.c+'</text><text class="a" id="c2" x="'+tx+'" y="'+ty+'">'+L.c2+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+tx+'" y="'+ty+'">'+L.d+'</text>'+(mob?'':'<text class="t" x="706" y="-12" text-anchor="end">qF-PROBE AT THE MARGIN</text>')+'</g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),mv:$("#scMove",svg),flap:$("#flap",svg),cx:$("#cortex",svg),su:$("#sulci",svg),ml:$("#midl",svg),
    vL:$("#vL",svg),vR:$("#vR",svg),tu:$("#tum",svg),pre:$("#pre",svg),errl:$("#errl",svg),err:$("#err",svg),mic:$("#mic",svg),rays:$("#rays",svg),
    qf:$("#qf",svg),qg:$("#qglow",svg),q:[$("#q1",svg),$("#q2",svg),$("#q3",svg)],prb:$("#prb",svg),l:[$("#lb1",svg),$("#lb2",svg),$("#lb3",svg),$("#lb4",svg)],l2l:$("#l2l",svg),c2:$("#c2",svg)};
  /* the stereovision samples: points on the exposed cortex, and a ray from a camera to each point */
  var RA=[],i;for(i=0;i<7;i++)RA.push(CRA-.3+i*.1);
  var rg='';RA.forEach(function(){rg+='<path class="ry"/><circle class="sp" r="3.2"/>'});E.rays.innerHTML=rg;
  var rays=$$(".ry",E.rays),sps=$$(".sp",E.rays);
  var lastB=-1,lastS=-1,P=null;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.12),s2=seg(p,.27,.44),s3=seg(p,.5,.58),u3=seg(p,.58,.72),s4=seg(p,.77,.9);
    /* step 2: the bone flap lifts away, the brain sinks under it */
    E.flap.setAttribute("transform","translate("+(30*s2).toFixed(1)+" "+(-40*s2).toFixed(1)+") rotate("+(12*s2).toFixed(1)+" 543 132)");op(E.flap,1-.8*s2);
    var S=Math.round(s2*60)/60;
    if(S!==lastS){lastS=S;P=brainPts(S);E.cx.setAttribute("d",pth(P,1));E.su.setAttribute("d",sulci(S));E.ml.setAttribute("d",midline(S));E.vL.setAttribute("d",vent(S,-1));E.vR.setAttribute("d",vent(S,1))}
    var T=tumorAt(S);E.tu.setAttribute("d",blob(T[0],T[1],30,.6));
    /* the contour: on the tumor in step 1, left behind in step 2, moved back on in step 3 */
    var C=[TU[0]+(T[0]-TU[0])*u3,TU[1]+(T[1]-TU[1])*u3];E.pre.setAttribute("d",blob(C[0],C[1],33,.6));
    var gap=Math.hypot(T[0]-C[0],T[1]-C[1]);
    E.errl.setAttribute("d","M"+C[0].toFixed(1)+" "+C[1].toFixed(1)+"L"+T[0].toFixed(1)+" "+T[1].toFixed(1));op(E.err,gap>6?s2*(1-u3):0);
    E.l2l.setAttribute("d","M134 "+((MOBILE()?-22:-30)+12)+"H330L"+(C[0]-30).toFixed(1)+" "+(C[1]-22).toFixed(1));
    /* step 3: the microscope's cameras sample the surface */
    var mi=seg(p,.46,.54);op(E.mic,mi*(1-s4));E.mic.setAttribute("transform","translate(0 "+(-24*(1-mi)).toFixed(1)+")");
    var n=P.length;
    RA.forEach(function(a,k){var idx=Math.round(((a+Math.PI*2)%(Math.PI*2))/(Math.PI*2)*n)%n,q=P[idx],cm=k<4?[638,64]:[674,64],v=seg(p,.5+k*.012,.58+k*.012);
      rays[k].setAttribute("d","M"+cm[0]+" "+cm[1]+"L"+q[0].toFixed(1)+" "+q[1].toFixed(1));op(rays[k],v*.85*(1-seg(p,.72,.78)));
      sps[k].setAttribute("cx",q[0].toFixed(1));sps[k].setAttribute("cy",q[1].toFixed(1));op(sps[k],v*(1-s4*.7))});
    /* step 4: concentration rings light inside the tumor; the probe reads its margin */
    op(E.qf,s4);E.qg.setAttribute("cx",(T[0]+3).toFixed(1));E.qg.setAttribute("cy",(T[1]+2).toFixed(1));
    E.q.forEach(function(q,k){q.setAttribute("d",blob(T[0]+3,T[1]+2,7+k*8,1.4+k));op(q,seg(p,.78+k*.03,.88+k*.03))});
    var pv=seg(p,.8,.93);E.prb.setAttribute("transform","translate("+(T[0]+16+30*(1-pv)).toFixed(1)+" "+(T[1]-14-76*(1-pv)).toFixed(1)+")");op(E.prb,pv);
    E.tu.style.fillOpacity=(.12+.1*s1-.04*s2+.2*s4).toFixed(3);
    op(E.l[0],b*(1-seg(p,.2,.26)));op(E.l[1],b*s2*(1-seg(p,.46,.52)));op(E.l[2],b*s3*(1-seg(p,.72,.77)));op(E.c2,u3);op(E.l[3],b*s4);
  };
}
