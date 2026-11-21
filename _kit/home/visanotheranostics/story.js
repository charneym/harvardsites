/* the story scene (DB): ONE engraved section of prostate tissue under a transrectal ultrasound probe, kept on screen for all four
   steps. Step 1 nanobubbles stream in along a capillary. Step 2 they bind to PSMA on a cluster of tumour cells among normal
   cells. Step 3 the probe's fan (the shape of Visano's own mark) sweeps the tissue and the bound cluster lights up.
   Step 4 ultrasound pulses rupture the bound bubbles and the tumour cells fade (Targeted Nanobubble Therapy). Sources:
   visanotheranostics.com (Lead Application; Targeted Nanobubble Therapy) and the 2026 licence release. Schematic, not to scale. */
var VSX=(function(){
  var s=7,R=function(){s=(s*16807)%2147483647;return (s-1)/2147483646};
  var A=[470,536],T=[540,232],cells=[],tum=[],i,j;
  var VES="M-20 132C120 116 230 150 330 196S470 300 560 330S700 352 820 346";
  var VP=[],SG=[[[-20,132],[120,116],[230,150],[330,196]],[[330,196],[430,242],[470,300],[560,330]],[[560,330],[650,360],[700,352],[820,346]]];
  SG.forEach(function(q){for(var t=0;t<=1;t+=.025){var u=1-t,x=u*u*u*q[0][0]+3*u*u*t*q[1][0]+3*u*t*t*q[2][0]+t*t*t*q[3][0],y=u*u*u*q[0][1]+3*u*u*t*q[1][1]+3*u*t*t*q[2][1]+t*t*t*q[3][1];VP.push([x,y+15])}});
  function onVes(x,y){var best=1e9;VP.forEach(function(q){var d=Math.hypot(x-q[0],y-q[1]);if(d<best)best=d});return best}
  for(j=0;j<8;j++)for(i=0;i<15;i++){
    var x=40+i*52+(j%2?26:0)+(R()-.5)*14,y=104+j*50+(R()-.5)*12,r=19+R()*5;
    if(VP.length&&onVes(x,y)<44)continue;
    var dt=Math.hypot(x-T[0],y-T[1]);
    if(dt<80)tum.push({x:x,y:y,r:r+3});else cells.push({x:x,y:y,r:r})}
  var bound=[];tum.forEach(function(c,k){for(var q=0;q<4;q++){var a=(k*1.7+q*1.57+R()*.6);bound.push({c:k,x:c.x+Math.cos(a)*(c.r+5),y:c.y+Math.sin(a)*(c.r+5),a:a})}});
  return {A:A,T:T,VES:VES,cells:cells,tum:tum,bound:bound,ang:36,len:476};
})();
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',A=VSX.A,an=VSX.ang*Math.PI/180,L=VSX.len,k;
  var lx=A[0]-Math.sin(an)*L,ly=A[1]-Math.cos(an)*L,rx=A[0]+Math.sin(an)*L,fan='M'+A[0]+' '+A[1]+'L'+f(lx)+' '+f(ly)+'A'+L+' '+L+' 0 0 1 '+f(rx)+' '+f(ly)+'Z';
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"40 20 740 540":"0 0 800 560")+'" aria-hidden="true">';
  g+='<defs><radialGradient id="vtg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#4cc6e1" stop-opacity=".55"/><stop offset=".6" stop-color="#4cc6e1" stop-opacity=".14"/><stop offset="1" stop-color="#4cc6e1" stop-opacity="0"/></radialGradient>'+
     '<linearGradient id="vfg" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#4cc6e1" stop-opacity=".16"/><stop offset="1" stop-color="#4cc6e1" stop-opacity=".02"/></linearGradient>'+
     '<clipPath id="vfc"><path d="'+fan+'"/></clipPath></defs>';
  g+='<g id="vBase">';
  VSX.cells.forEach(function(c){g+='<circle class="nc sD" cx="'+f(c.x)+'" cy="'+f(c.y)+'" r="'+f(c.r)+'"/><circle class="nn" cx="'+f(c.x-3)+'" cy="'+f(c.y+2)+'" r="'+f(c.r*.32)+'"/>'});
  g+='<path class="ves sD" d="'+VSX.VES+'"/><path class="ves2 sD" d="'+VSX.VES+'" transform="translate(0 30)"/>';
  g+='</g>';
  g+='<ellipse class="tgl" cx="'+VSX.T[0]+'" cy="'+VSX.T[1]+'" rx="120" ry="110" fill="url(#vtg)"/>';
  g+='<g id="vTum">';VSX.tum.forEach(function(c){g+='<circle class="tc sD" cx="'+f(c.x)+'" cy="'+f(c.y)+'" r="'+f(c.r)+'"/><circle class="tn" cx="'+f(c.x+2)+'" cy="'+f(c.y-1)+'" r="'+f(c.r*.42)+'"/>'});g+='</g>';
  VSX.bound.forEach(function(b){var c=VSX.tum[b.c],x0=c.x+Math.cos(b.a)*c.r,y0=c.y+Math.sin(b.a)*c.r,dg=b.a*180/Math.PI+90;
    g+='<path class="psma" transform="translate('+f(x0)+' '+f(y0)+') rotate('+f(dg)+')" d="M0 0V-5M0 -5L-3 -8M0 -5L3 -8"/>'});
  g+='<g id="vFan"><path class="fan" d="'+fan+'" fill="url(#vfg)"/><path class="fanl" d="'+fan+'"/>';
  for(k=1;k<6;k++){var rr=L*k/6;g+='<path class="fana" d="M'+f(A[0]-Math.sin(an)*rr)+' '+f(A[1]-Math.cos(an)*rr)+'A'+f(rr)+' '+f(rr)+' 0 0 1 '+f(A[0]+Math.sin(an)*rr)+' '+f(A[1]-Math.cos(an)*rr)+'"/>'}
  g+='<line class="sweep" id="vSw" x1="'+A[0]+'" y1="'+A[1]+'" x2="'+A[0]+'" y2="'+(A[1]-L)+'"/></g>';
  g+='<path class="probe" d="M'+(A[0]-20)+' 560V'+(A[1]+4)+'Q'+A[0]+' '+(A[1]-14)+' '+(A[0]+20)+' '+(A[1]+4)+'V560"/>';
  g+='<g id="vPul" clip-path="url(#vfc)">';for(k=0;k<3;k++)g+='<circle class="pul" cx="'+A[0]+'" cy="'+A[1]+'" r="10"/>';g+='</g>';
  g+='<g id="vFree">';for(k=0;k<14;k++)g+='<circle class="fb" r="'+(4+(k%3))+'"/>';g+='</g>';
  g+='<g id="vBnd">';VSX.bound.forEach(function(b){g+='<g class="bb"><circle class="bbg" cx="'+f(b.x)+'" cy="'+f(b.y)+'" r="11"/><circle class="bbc" cx="'+f(b.x)+'" cy="'+f(b.y)+'" r="5"/><circle class="brs" cx="'+f(b.x)+'" cy="'+f(b.y)+'" r="5"/></g>'});g+='</g>';
  var x0=mob?60:24,y0=mob?62:40;
  function lab(id,a1,a2,t){return '<g id="'+id+'"><text class="a" x="'+x0+'" y="'+y0+'">'+(mob?a2:a1)+'</text>'+(mob?'':'<text class="t" x="'+x0+'" y="'+(y0+20)+'">'+t+'</text>')+'</g>'}
  g+=lab("vl1","NANOBUBBLES IN THE BLOODSTREAM","NANOBUBBLES IN","PROSTATE TISSUE, SCHEMATIC");
  g+=lab("vl2","BOUND TO PSMA ON CANCER CELLS","BOUND TO PSMA","NORMAL CELLS ARE PASSED BY");
  g+=lab("vl3","THE LESION LIGHTS ON ULTRASOUND","LESION VISIBLE","STANDARD TRANSRECTAL PROBE, REAL TIME");
  g+=lab("vl4","ULTRASOUND PULSES RUPTURE THE BUBBLES","PULSE AND RUPTURE","HEALTHY TISSUE IS SPARED");
  if(!mob)g+='<text class="t pl" x="'+(A[0]+30)+'" y="550">TRUS PROBE</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#vBase .sD"),nn:$$("#vBase .nn",svg),tum:dl("#vTum .sD"),tc:$$("#vTum .tc",svg),tn:$$("#vTum .tn",svg),psma:$$(".psma",svg),tgl:$(".tgl",svg),
    fan:$("#vFan",svg),sw:$("#vSw",svg),pul:$$(".pul",svg),fb:$$(".fb",svg),bb:$$(".bb",svg),probe:$(".probe",svg),pl:$(".pl",svg),
    ves:$("#vBase .ves",svg),l:[$("#vl1",svg),$("#vl2",svg),$("#vl3",svg),$("#vl4",svg)]};
  var VL=E.ves.getTotalLength(),lastB=-1,A=VSX.A;
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);draw(E.tum,b);E.nn.forEach(function(el){op(el,b*.9)});op(E.probe,b);op(E.pl,b)}
    var s2=seg(p,.22,.46),s3=seg(p,.5,.72),s4=seg(p,.76,.96);
    E.fb.forEach(function(el,k){var q=((p*2.6+k/14)%1),pt=E.ves.getPointAtLength(VL*q);el.setAttribute("cx",pt.x.toFixed(1));el.setAttribute("cy",(pt.y+15).toFixed(1));
      op(el,b*(.3+.7*(1-s2*.6))*(1-s4*.7)*Math.min(1,Math.sin(q*Math.PI)*3))});
    E.psma.forEach(function(el){op(el,b*(.35+.65*seg(p,.18,.3))*(1-s4*.8))});
    var n=E.bb.length;E.bb.forEach(function(el,k){var on=seg(s2,k/n*.7,k/n*.7+.3),burst=seg(s4,k/n*.5,k/n*.5+.4);
      op(el,b*on);var glow=el.children[0],core=el.children[1],ring=el.children[2];
      core.style.opacity=(1-burst).toFixed(3);glow.style.opacity=((.25+.75*s3)*(1-burst)).toFixed(3);
      ring.setAttribute("r",(5+burst*18).toFixed(1));ring.style.opacity=(burst>0&&burst<1?(1-burst):0).toFixed(3)});
    op(E.fan,b*(.25+.75*seg(p,.46,.56)));
    var sa=(-VSX.ang+2*VSX.ang*((s3*2)%1))*Math.PI/180;E.sw.setAttribute("x2",(A[0]+Math.sin(sa)*VSX.len).toFixed(1));E.sw.setAttribute("y2",(A[1]-Math.cos(sa)*VSX.len).toFixed(1));op(E.sw,b*s3*(1-seg(p,.72,.76)));
    op(E.tgl,b*s3*(1-s4*.85));
    E.tc.forEach(function(el){el.style.fill="rgba(76,198,225,"+(.2*s3*(1-s4)).toFixed(3)+")";el.style.opacity=(1-.6*s4).toFixed(3)});
    E.tn.forEach(function(el){op(el,b*(1-.7*s4))});
    E.pul.forEach(function(el,k){var ph=(s4*3+k/3)%1;el.setAttribute("r",(20+ph*440).toFixed(1));op(el,b*seg(p,.74,.8)*(1-ph)*.8)});
    var w=[1-seg(p,.2,.25),seg(p,.27,.32)*(1-seg(p,.47,.52)),seg(p,.52,.57)*(1-seg(p,.72,.77)),seg(p,.77,.82)];
    E.l.forEach(function(el,k){op(el,b*w[k])});
  };
}
