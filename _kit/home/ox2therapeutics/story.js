/* the story scene (BL/BY/DB): how ARL200 works, drawn in fine engraved line, after the mechanism on ox2therapeutics.com.
   An antigen-presenting cell (left) talks to a T cell (right) across the synapse; a tumor cell sits below.
   Step 1 the tumor sheds PD-L1 and CD200 ligands that dock on the T cell's inhibitory receptors, and the line between the
   cells breaks. Step 2 ARL200 peptides arrive and take the receptors, the ligands fall away. Step 3 the APC activates the
   T cell again: signals cross the synapse and activated T cells move out toward the tumor. Schematic, not to scale.
   Driven by the scrubbed story progress. */
var OXS={A:[215,250],T:[520,230],U:[640,452],RT:78};
var OXR=[168,180,192,204];
function f2(n){return (+n).toFixed(1)}
function scene(){
  var mob=MOBILE(),f=f2,g='',i,A=OXS.A,T=OXS.T,U=OXS.U,RT=OXS.RT;
  function blob(cx,cy,r,n,amp,ph){var pts=[],k;for(k=0;k<n;k++){var a=k/n*Math.PI*2,rr=r*(1+amp*Math.sin(a*3+ph)+amp*.6*Math.sin(a*5+ph*1.7)+amp*.35*Math.cos(a*7+ph*.6));pts.push([cx+rr*Math.cos(a),cy+rr*Math.sin(a)])}
    var d='M'+f(pts[0][0])+' '+f(pts[0][1]);for(k=0;k<n;k++){var p0=pts[(k-1+n)%n],p1=pts[k],p2=pts[(k+1)%n],p3=pts[(k+2)%n];
      d+='C'+f(p1[0]+(p2[0]-p0[0])/6)+' '+f(p1[1]+(p2[1]-p0[1])/6)+' '+f(p2[0]-(p3[0]-p1[0])/6)+' '+f(p2[1]-(p3[1]-p1[1])/6)+' '+f(p2[0])+' '+f(p2[1])}return d+'Z'}
  function tcell(cx,cy,r,cls,vil){var s='<circle class="'+cls+'" cx="'+f(cx)+'" cy="'+f(cy)+'" r="'+r+'"/>';
    for(var k=0;k<vil;k++){var a=k/vil*Math.PI*2+.13,l=r*(.1+.06*((k*7)%3));s+='<path class="vil '+cls+'" d="M'+f(cx+r*Math.cos(a))+' '+f(cy+r*Math.sin(a))+'L'+f(cx+(r+l)*Math.cos(a+.04))+' '+f(cy+(r+l)*Math.sin(a+.04))+'"/>'}return s}
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="oxglow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#86a6ff" stop-opacity=".16"/><stop offset="1" stop-color="#86a6ff" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase"><circle cx="'+T[0]+'" cy="'+T[1]+'" r="200" fill="url(#oxglow)" class="pg"/>';
  /* the antigen-presenting cell: a dendritic body with long arms */
  g+='<path class="apc sD" d="'+blob(A[0],A[1],92,14,.07,1.2)+'"/>';
  [[-160,128],[-120,118],[-60,110],[-200,104],[150,92],[110,100],[60,112],[200,100],[-95,124],[20,116]].forEach(function(d){var a=d[0]*Math.PI/180,r0=88,x0=A[0]+r0*Math.cos(a),y0=A[1]+r0*Math.sin(a),x1=A[0]+(r0+d[1]*.62)*Math.cos(a+.12),y1=A[1]+(r0+d[1]*.62)*Math.sin(a+.12),
    x2=A[0]+(r0+d[1])*Math.cos(a-.06),y2=A[1]+(r0+d[1])*Math.sin(a-.06);
    g+='<path class="arm sD" d="M'+f(x0)+' '+f(y0)+'Q'+f(x1)+' '+f(y1)+' '+f(x2)+' '+f(y2)+'"/>'});
  g+='<path class="nuc sD" d="'+blob(A[0]-14,A[1]+6,40,10,.1,2.4)+'"/>';
  for(i=0;i<9;i++){var ha=-.9+i*.2;g+='<path class="hat sD" d="M'+f(A[0]+62*Math.cos(ha))+' '+f(A[1]+62*Math.sin(ha))+'L'+f(A[0]+80*Math.cos(ha))+' '+f(A[1]+80*Math.sin(ha))+'"/>'}
  /* the T cell, with microvilli */
  g+=tcell(T[0],T[1],RT,"tc sD",44)+'<circle class="nuc sD" cx="'+(T[0]+6)+'" cy="'+(T[1]-4)+'" r="46"/>';
  /* the tumor cell below, lumpy, with a large nucleus */
  g+='<path class="tu sD" d="'+blob(U[0],U[1],70,16,.09,.4)+'"/><path class="nuc sD" d="'+blob(U[0]+8,U[1]-4,30,9,.12,1.8)+'"/>';
  /* receptors on the T cell facing the APC */
  OXR.forEach(function(a){var r=a*Math.PI/180,x0=T[0]+RT*Math.cos(r),y0=T[1]+RT*Math.sin(r),x1=T[0]+(RT+16)*Math.cos(r),y1=T[1]+(RT+16)*Math.sin(r);
    g+='<path class="rc sD" d="M'+f(x0)+' '+f(y0)+'L'+f(x1)+' '+f(y1)+'M'+f(x1+6*Math.sin(r))+' '+f(y1-6*Math.cos(r))+'L'+f(x1)+' '+f(y1)+'L'+f(x1-6*Math.sin(r))+' '+f(y1+6*Math.cos(r))+'"/>'});
  g+='<text class="t" x="'+A[0]+'" y="'+(A[1]-160)+'" text-anchor="middle">'+(mob?'APC':'ANTIGEN-PRESENTING CELL')+'</text>';
  g+='<text class="t" x="'+T[0]+'" y="'+(T[1]-RT-30)+'" text-anchor="middle">T CELL</text>';
  g+='<text class="t" x="'+(U[0]+(mob?0:96))+'" y="'+(U[1]+(mob?104:6))+'" text-anchor="'+(mob?"middle":"start")+'">TUMOR</text></g>';
  /* the synapse line between the cells */
  g+='<path class="syn" id="syn" d="M'+(A[0]+96)+' '+(A[1]-6)+'C380 236 400 232 '+(T[0]-RT-20)+' '+(T[1]+2)+'"/>';
  /* step 1: ligands shed by the tumor, docking on the receptors; the line breaks */
  g+='<g id="s1">';OXR.forEach(function(){g+='<g class="lig"><path d="M-7 -5Q0 9 7 -5"/><circle cx="0" cy="-8" r="3"/></g>'});
  g+='<path class="brk" d="M392 222l16 16M408 222l-16 16"/><path class="ldr" d="M600 400L668 330H'+(mob?720:760)+'"/><text class="a" x="'+(mob?720:760)+'" y="318" text-anchor="end">PD-L1 · CD200</text></g>';
  /* step 2: ARL200 peptides arrive from above and take the receptors */
  g+='<g id="s2">';OXR.forEach(function(){g+='<g class="pep"><circle cx="-12" cy="0" r="3.6"/><circle cx="-4" cy="-3" r="3.6"/><circle cx="4" cy="0" r="3.6"/><circle cx="12" cy="-3" r="3.6"/></g>'});
  g+='<path class="ldr" d="M430 120L470 70H'+(mob?640:690)+'"/><text class="a" x="'+(mob?640:690)+'" y="58" text-anchor="end">ARL200</text></g>';
  /* step 3: signals cross the synapse and activated T cells move out toward the tumor */
  g+='<g id="s3">';for(i=0;i<4;i++)g+='<circle class="pulse" r="5"/>';
  for(i=0;i<3;i++)g+='<g class="kid">'+tcell(0,0,26,"tk2",22)+'</g>';
  g+='<text class="a" x="'+(mob?400:330)+'" y="'+(mob?530:520)+'" text-anchor="middle">'+(mob?'ACTIVATED T CELLS':'ACTIVATED T CELLS, TURNED ON THE TUMOR')+'</text></g>';
  g+='</svg>';
  return g;
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .pg",svg),syn:$("#syn",svg),s1:$("#s1",svg),lig:$$("#s1 .lig",svg),brk:$("#s1 .brk",svg),
    s2:$("#s2",svg),pep:$$("#s2 .pep",svg),s3:$("#s3",svg),pul:$$("#s3 .pulse",svg),kid:$$("#s3 .kid",svg),tu:$("#scBase .tu",svg)};
  var lastB=-1,T=OXS.T,U=OXS.U,RT=OXS.RT,synL=E.syn.getTotalLength();E.syn.style.strokeDasharray=synL+" "+synL;
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function rpt(k,off){var r=OXR[k]*Math.PI/180,R=RT+22+off;return [T[0]+R*Math.cos(r),T[1]+R*Math.sin(r),OXR[k]]}
  var KD=[[430,400],[505,462],[420,488]];
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,.04,.26),s2=seg(p,.36,.56),s3=seg(p,.68,.8);
    /* the synapse line: drawn whole at first, faded and broken in step 1, restored and glowing in step 3 */
    E.syn.style.strokeDashoffset=(synL*(1-b)).toFixed(1);E.syn.style.opacity=(b*(1-.75*s1*(1-s3))).toFixed(3);E.syn.classList.toggle("on",s3>.5);
    /* step 1: ligands travel from the tumor to the receptors, and fall away once ARL200 arrives */
    op(E.s1,b*seg(p,0,.06)*(1-seg(p,.5,.6)));op(E.brk,seg(p,.2,.28)*(1-s2));
    E.lig.forEach(function(el,k){var q=seg(p,.03+k*.04,.2+k*.04),tg=rpt(k,0),fx=lerp(U[0]-40+k*14,tg[0],q),fy=lerp(U[1]-50,tg[1],q);
      el.setAttribute("transform","translate("+f2(fx-s2*30)+" "+f2(fy+s2*(40+k*14))+") rotate("+(tg[2]+90)+")")});
    /* step 2: peptides drop in from above and dock */
    op(E.s2,b*seg(p,.34,.4));
    E.pep.forEach(function(el,k){var q=seg(p,.38+k*.03,.54+k*.03),tg=rpt(k,2),fx=lerp(400+k*20,tg[0],q),fy=lerp(60+k*10,tg[1],q);el.setAttribute("transform","translate("+f2(fx)+" "+f2(fy)+") rotate("+(tg[2]+90)+")")});
    /* step 3: pulses run along the synapse, activated T cells move out toward the tumor */
    op(E.s3,b*s3);
    E.pul.forEach(function(el,k){var t=((p-.7)*3+k*.25)%1;if(t<0)t+=1;var pt=E.syn.getPointAtLength(synL*t);el.setAttribute("cx",f2(pt.x));el.setAttribute("cy",f2(pt.y))});
    E.kid.forEach(function(el,k){var q=seg(p,.72+k*.05,.94+k*.02);el.setAttribute("transform","translate("+f2(lerp(T[0]-10,KD[k][0],q))+" "+f2(lerp(T[1]+40,KD[k][1],q))+") scale("+(.4+.6*q).toFixed(3)+")");el.style.opacity=q.toFixed(3)});
    if(E.tu)E.tu.style.opacity=(1-.45*seg(p,.84,.98)).toFixed(3);
  };
}
