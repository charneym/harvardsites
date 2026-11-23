/* The story scene (BL/BY/DB, DR): ONE fine-line drawing kept on screen for all four steps, in section: the bladder wall (urothelium,
   lamina propria, muscle) with one papillary tumour; a flexible cystoscope enters from the left and the Multi4 instrument comes out of its
   working channel. Steps follow multi4.se ("4 built-in functions"): 1 local anaesthesia (the needle numbs the wall at the tumour's base);
   2 resection (the jaws close on the tumour and take a sample); 3 automatic transport of the sample back through the instrument into a
   container for the pathologist; 4 destroying the remaining tissue / stopping bleeding (coagulation). Driven by the scrubbed progress. */
var M4={A:[14,132],B:[250,204],T1:[398,300],T2:[416,256],T4:[436,318],tx:470,C:[36,34,66,60]};
function m4S(x){return 330+6*Math.sin(x/90)}
function m4Tum(){var f=function(n){return (+n).toFixed(1)},cx=M4.tx,by=m4S(cx)+2,d='',i,n=64;
  for(i=0;i<=n;i++){var th=Math.PI*i/n,r=1+.1*Math.sin(th*9)+.04*Math.sin(th*23),x=cx-Math.cos(th)*42*r,y=by-Math.sin(th)*74*r;d+=(i?'L':'M')+f(x)+' '+f(y)}return d+'Z'}
function m4Scene(mob){
  var f=function(n){return (+n).toFixed(1)},g='',i,x;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'10 14 700 500':'10 14 700 450')+'" aria-hidden="true">';
  /* the wall: fill, surface, layer lines, muscle fibres */
  var top='',lp='';for(x=20;x<=700;x+=10){top+=(top?'L':'M')+x+' '+f(m4S(x));lp+=(lp?'L':'M')+x+' '+f(m4S(x)+26)}
  g+='<g id="m4W"><path class="wf" d="'+top+'L700 440L20 440Z"/>';
  g+='<path class="ws sD" d="'+top+'"/><path class="wl sD" d="'+lp+'"/><path class="wl sD" d="M20 382H700"/><path class="wb sD" d="M20 440H700"/>';
  var fb='';for(i=0;i<34;i++){x=30+i*20;fb+='<path class="mf" d="M'+x+' 394q10 -5 20 0M'+(x+8)+' 410q10 -5 20 0M'+(x+2)+' 426q10 -5 20 0"/>'}
  g+='<g class="mfs">'+fb+'</g>';
  g+='<text class="t" x="24" y="'+(mob?462:460)+'">BLADDER WALL, IN SECTION</text></g>';
  /* the tumour (scaled from its base as it is resected and destroyed), and the coagulated base */
  g+='<g id="m4Tu"><path class="tu" d="'+m4Tum()+'"/><path class="tu2" d="M'+(M4.tx-22)+' '+f(m4S(M4.tx)-22)+'q8 -18 0 -36M'+(M4.tx+4)+' '+f(m4S(M4.tx)-30)+'q8 -16 0 -32M'+(M4.tx+24)+' '+f(m4S(M4.tx)-18)+'q6 -14 -2 -28"/></g>';
  g+='<ellipse class="cg" id="m4Cg" cx="'+M4.tx+'" cy="'+f(m4S(M4.tx)+5)+'" rx="40" ry="7"/>';
  g+='<path class="ns" id="m4Ns" d="M'+(M4.tx-46)+' '+f(m4S(M4.tx-46))+'Q'+M4.tx+' '+f(m4S(M4.tx)+1)+' '+(M4.tx+46)+' '+f(m4S(M4.tx+46))+'"/>';
  /* anaesthetic spreading in the wall */
  var an='';for(i=0;i<16;i++){var a=i*2.39996,rr=6+Math.sqrt(i)*7;an+='<circle class="an" data-k="'+(i/16).toFixed(2)+'" cx="'+f(M4.tx-30+Math.cos(a)*rr*1.6)+'" cy="'+f(m4S(M4.tx-30)+16+Math.sin(a)*rr*.55)+'" r="2.4"/>'}
  g+='<g id="m4An">'+an+'</g>';
  /* the cystoscope, the outflow tube and the sample container (outside the body) */
  g+='<path class="sc" d="M'+M4.A[0]+' '+M4.A[1]+'L'+M4.B[0]+' '+M4.B[1]+'"/><path class="sc2" d="M'+M4.A[0]+' '+M4.A[1]+'L'+M4.B[0]+' '+M4.B[1]+'"/>';
  g+='<circle class="ln" cx="'+M4.B[0]+'" cy="'+M4.B[1]+'" r="4"/>';
  g+='<path class="tb" id="m4Tb" d="M'+M4.A[0]+' '+M4.A[1]+'C40 124 50 110 51 '+(M4.C[1]+M4.C[3])+'"/>';
  g+='<path class="ct" d="M'+M4.C[0]+' '+M4.C[1]+'V'+(M4.C[1]+M4.C[3])+'H'+(M4.C[0]+30)+'V'+M4.C[1]+'"/><path class="ct2" d="M'+(M4.C[0]-4)+' '+M4.C[1]+'H'+(M4.C[0]+34)+'"/>';
  g+='<g id="m4Got"></g>';
  g+='<text class="t" x="'+(M4.C[0]+46)+'" y="'+(M4.C[1]+24)+'">TO THE PATHOLOGIST</text>';
  g+='<text class="t" x="112" y="'+(mob?232:226)+'">CYSTOSCOPE</text>';
  /* the Multi4 instrument: shaft from the working channel, needle, two jaws */
  g+='<g id="m4In"><path class="sh" id="m4Sh" d="M0 0"/><path class="nd" id="m4Nd" d="M0 0"/><path class="jw" id="m4J1" d="M0 0"/><path class="jw" id="m4J2" d="M0 0"/></g>';
  g+='<g id="m4Sp"><circle class="smp" r="5"/><circle class="smp" r="4.4"/><circle class="smp" r="4.8"/></g>';
  g+='<g id="m4Zz"><path class="zz" d="M0 0"/></g>';
  /* one label per step, in the clear band at top right (phones: under the drawing) */
  var lx=mob?360:700,ly=mob?500:74,an2=mob?'middle':'end';
  ["LOCAL ANAESTHESIA","RESECTION","AUTOMATIC SAMPLE TRANSPORT","COAGULATION"].forEach(function(s,j){g+='<text class="a" id="m4L'+j+'" x="'+lx+'" y="'+ly+'" text-anchor="'+an2+'">'+s+'</text>'});
  return g+'</svg>';
}
function scene(){return m4Scene(MOBILE()?1:0)}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#m4W .sD"),fade:$$("#m4W .wf,#m4W .mfs,#m4W text",svg),tu:$("#m4Tu",svg),cg:$("#m4Cg",svg),ns:$("#m4Ns",svg),an:$$("#m4An .an",svg),
    sh:$("#m4Sh",svg),nd:$("#m4Nd",svg),j1:$("#m4J1",svg),j2:$("#m4J2",svg),sp:$$("#m4Sp .smp",svg),got:$("#m4Got",svg),zz:$("#m4Zz path",svg),
    L:[0,1,2,3].map(function(j){return $("#m4L"+j,svg)})};
  var tb=svg.querySelector("#m4Tb"),tbL=tb.getTotalLength();
  var lastB=-1,f=function(n){return (+n).toFixed(1)};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function lerp(a,b,t){return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t]}
  /* a point along the sample's way out: tip -> scope end -> scope entry -> tube -> container */
  function path(T,u){var B=M4.B,A=M4.A,d1=Math.hypot(T[0]-B[0],T[1]-B[1]),d2=Math.hypot(B[0]-A[0],B[1]-A[1]),tot=d1+d2+tbL,s=u*tot;
    if(s<d1)return lerp(T,B,s/d1);s-=d1;if(s<d2)return lerp(B,A,s/d2);s-=d2;var q=tb.getPointAtLength(Math.min(tbL,s));return [q.x,q.y]}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,.03,.14),nIn=seg(p,.08,.16)*(1-seg(p,.22,.27)),mv=seg(p,.26,.34),jo=seg(p,.33,.38)*(1-seg(p,.4,.46)),cut=seg(p,.41,.47),
        tr=seg(p,.52,.72),mv2=seg(p,.74,.8),burn=seg(p,.8,.9);
    /* the tip: out of the channel to the tumour base (1), up to the tumour (2), held while samples travel (3), down to the base (4) */
    var T=lerp(M4.B,M4.T1,s1);T=lerp(T,M4.T2,mv);T=lerp(T,M4.T4,mv2);
    var dx=T[0]-M4.B[0],dy=T[1]-M4.B[1],L=Math.hypot(dx,dy)||1,ux=dx/L,uy=dy/L,nx=-uy,ny=ux;
    E.sh.setAttribute("d","M"+M4.B[0]+" "+M4.B[1]+"L"+f(T[0])+" "+f(T[1]));op(E.sh,b*seg(p,.02,.05));
    var NL=6+nIn*34;E.nd.setAttribute("d","M"+f(T[0])+" "+f(T[1])+"L"+f(T[0]+ux*NL)+" "+f(T[1]+uy*NL));op(E.nd,b*seg(p,.02,.05));
    var ja=.08+.5*jo,JL=20;
    [[E.j1,1],[E.j2,-1]].forEach(function(o){var c=Math.cos(ja*o[1]),s=Math.sin(ja*o[1]),jx=ux*c-uy*s,jy=ux*s+uy*c;
      o[0].setAttribute("d","M"+f(T[0]+nx*3*o[1])+" "+f(T[1]+ny*3*o[1])+"L"+f(T[0]+nx*3*o[1]+jx*JL)+" "+f(T[1]+ny*3*o[1]+jy*JL));op(o[0],b*seg(p,.02,.05))});
    /* anaesthetic spreads from the needle */
    E.an.forEach(function(c){var k=+c.getAttribute("data-k");op(c,b*seg(p,.12+k*.08,.16+k*.08)*(1-seg(p,.84,.9))*.9)});
    /* the tumour: resected to a stump (2), then destroyed (4) */
    var sy=1-.62*cut-.38*burn,by=m4S(M4.tx)+2;E.tu.setAttribute("transform","translate(0 "+f(by*(1-sy))+") scale(1 "+f(Math.max(.001,sy))+")");op(E.tu,b*(1-seg(p,.86,.9)));
    op(E.cg,b*burn*(1-.35*seg(p,.9,.96)));op(E.ns,b*seg(p,.88,.95));
    /* the samples travel out through the instrument into the container */
    var got=0;E.sp.forEach(function(c,j){var u=seg(p,.46+j*.07,.6+j*.07);if(cut<.5){op(c,0);return}var P=u<=0?[T[0]+ux*12,T[1]+uy*12]:path(T,u);
      if(u>=1){got++;op(c,0);return}c.setAttribute("cx",f(P[0]));c.setAttribute("cy",f(P[1]));op(c,b*(j===0||u>0?1:0)*seg(p,.44,.47))});
    var gs='';for(var j=0;j<got;j++)gs+='<circle class="smp" cx="'+(M4.C[0]+8+j*7)+'" cy="'+(M4.C[1]+M4.C[3]-7)+'" r="4.4"/>';if(E.got._n!==got){E.got.innerHTML=gs;E.got._n=got}
    /* coagulation at the base: a short arc of current while the tissue is destroyed */
    var zx=T[0]+ux*22,zy=T[1]+uy*22;E.zz.setAttribute("d","M"+f(zx-8)+" "+f(zy-8)+"L"+f(zx-2)+" "+f(zy-2)+"L"+f(zx-6)+" "+f(zy+1)+"L"+f(zx+2)+" "+f(zy+8));
    op(E.zz.parentNode,b*seg(p,.79,.82)*(1-seg(p,.9,.93))*(.75+.25*Math.sin(p*900)));
    op(E.L[0],b*seg(p,.06,.11)*(1-seg(p,.24,.28)));op(E.L[1],b*seg(p,.29,.34)*(1-seg(p,.49,.52)));op(E.L[2],b*seg(p,.53,.58)*(1-seg(p,.74,.77)));op(E.L[3],b*seg(p,.79,.84));
  };
}
