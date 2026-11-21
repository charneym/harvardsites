/* the story scene (BL/BY/DB): how IMMA works, drawn in fine engraved line. ONE ultrasound view stays at the centre for all three steps.
   Step 1 the probe: the B-mode sector fan, a sweep line acquiring the volume in one pass (no movement of the probe), the ovary and its
   follicles in the fan. Step 2 the AI report: the follicles are found and measured (calipers), and the selected planes are stacked
   into a reconstructed volume. Step 3 the app: the report travels to a phone and on to her medical team.
   Sources: imma.health "The solution" (probe, ultrasound, report, app; selection of planes, volume reconstitution). Schematic;
   follicle sizes and counts are illustrative, not a real scan. Driven by the scrubbed story progress. */
var USF={a:[300,70],R:420,r0:70,A0:58,A1:122};
var FOL=[[262,318,26],[318,300,32],[350,350,22],[290,370,19],[236,362,15],[330,404,14],[372,306,13],[268,276,12],[392,382,11]];
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,A=USF.a;
  function pol(r,a){a=a*Math.PI/180;return [A[0]+r*Math.cos(a),A[1]+r*Math.sin(a)]}
  function P(p){return f(p[0])+' '+f(p[1])}
  function arc(r,a0,a1){var p0=pol(r,a0),p1=pol(r,a1);return 'M'+P(p0)+'A'+r+' '+r+' 0 '+((a1-a0)>180?1:0)+' 1 '+P(p1)}
  var fanD='M'+P(pol(USF.r0,USF.A0))+'L'+P(pol(USF.R,USF.A0))+'A'+USF.R+' '+USF.R+' 0 0 1 '+P(pol(USF.R,USF.A1))+'L'+P(pol(USF.r0,USF.A1))+'A'+USF.r0+' '+USF.r0+' 0 0 0 '+P(pol(USF.r0,USF.A0))+'Z';
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="iglow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fe3385" stop-opacity=".14"/><stop offset="1" stop-color="#fe3385" stop-opacity="0"/></radialGradient>'+
     '<clipPath id="fanc"><path d="'+fanD+'"/></clipPath></defs>';
  /* the fan: its outline, depth arcs and engraved speckle strokes of a B-mode image; the ovary and its follicles inside */
  g+='<g id="scBase"><circle cx="300" cy="330" r="250" fill="url(#iglow)" class="pg"/>';
  g+='<path class="fan sD" d="'+fanD+'"/>';
  for(i=1;i<8;i++)g+='<path class="dep sD" d="'+arc(USF.r0+i*(USF.R-USF.r0)/8,USF.A0,USF.A1)+'"/>';
  g+='<g clip-path="url(#fanc)">';
  var sd=7;function rnd(){sd=(sd*9301+49297)%233280;return sd/233280}
  for(i=0;i<80;i++){var rr=USF.r0+20+rnd()*(USF.R-USF.r0-30),aa=USF.A0+rnd()*(USF.A1-USF.A0-6),ln=2+rnd()*5;g+='<path class="spk sD" d="'+arc(Math.round(rr),aa,aa+ln)+'"/>'}
  g+='<path class="ov sD" d="M196 338C190 284 236 252 296 254C362 256 418 290 420 344C422 398 372 432 304 432C240 432 202 392 196 338Z"/>';
  g+='<path class="ov2 sD" d="M210 340C206 294 246 268 298 270C354 272 404 300 405 344C406 390 362 418 304 418C248 418 214 384 210 340Z"/>';
  FOL.forEach(function(q){g+='<circle class="fol sD" cx="'+q[0]+'" cy="'+q[1]+'" r="'+q[2]+'"/>'});
  g+='</g>';
  /* the probe face at the apex */
  g+='<path class="prb sD" d="M262 40H338L328 '+(A[1]+4)+'H272Z"/><path class="prb2 sD" d="M278 18H322V40H278Z"/>';
  g+='<text class="t" x="300" y="'+(A[1]+USF.R+34)+'" text-anchor="middle">'+(mob?'OVARY · FOLLICLES':'OVARY AND FOLLICLES · SCHEMATIC')+'</text></g>';

  /* step 1: the sweep line crossing the fan; the acquisition note */
  g+='<g id="s1"><path class="swp" id="swp" d="M300 140L300 490"/><path class="wav" d="'+arc(USF.r0+14,USF.A0+8,USF.A1-8)+'"/><path class="wav" d="'+arc(USF.r0+28,USF.A0+12,USF.A1-12)+'"/>';
  g+='<path class="ldr" d="M340 30H500L540 70H700"/><text class="a" x="700" y="58" text-anchor="end">'+(mob?'HANDS-FREE':'MANIPULATION-FREE')+'</text><text class="fq" x="700" y="94" text-anchor="end">'+(mob?'ONE PASS':'ULTRAFAST · ONE PASS')+'</text></g>';

  /* step 2: calipers on the larger follicles, and the selected planes stacked into a volume */
  g+='<g id="s2">';
  FOL.slice(0,5).forEach(function(q){var r=q[2];g+='<path class="cal" d="M'+f(q[0]-r)+' '+f(q[1]+r*.2)+'L'+f(q[0]+r)+' '+f(q[1]-r*.2)+'"/><path class="calt" d="M'+f(q[0]-r)+' '+f(q[1]+r*.2-5)+'v10M'+f(q[0]+r)+' '+f(q[1]-r*.2-5)+'v10"/>'});
  for(i=0;i<5;i++){var y=214+i*36;g+='<g class="pl"><path class="pln" d="M560 '+(y+24)+'L620 '+y+'H770L710 '+(y+24)+'Z"/><ellipse class="pfol" cx="'+(664+(i%2?8:-6))+'" cy="'+(y+12)+'" rx="'+(14+[0,6,10,6,2][i])+'" ry="'+(4+[0,2,3,2,1][i])+'"/></g>'}
  g+='<path class="ldr" d="M424 340H548"/><text class="a" x="665" y="190" text-anchor="middle">'+(mob?'VOLUME':'PLANES → VOLUME')+'</text><text class="fq" x="665" y="430" text-anchor="middle">'+(mob?'AI REPORT':'AI ANALYSIS · SONO MARKERS')+'</text></g>';

  /* step 3: the phone with the report, and the link to her medical team */
  g+='<g id="s3"><path class="ph" d="M600 140H710V360H600Z"/><path class="ph2" d="M640 154H670"/><path class="phf" d="M655 186L618 252A66 66 0 0 0 692 252Z"/>';
  [[644,230,7],[662,240,9],[670,220,5]].forEach(function(c){g+='<circle class="pfol2" cx="'+c[0]+'" cy="'+c[1]+'" r="'+c[2]+'"/>'});
  g+='<path class="pbar" d="M616 286H694M616 304H676M616 322H686"/>';
  g+='<path class="lnk" id="lnk" d="M710 250C770 250 772 452 704 460H572"/><circle class="node" cx="560" cy="460" r="9"/>';
  g+='<path class="ldr" d="M424 300C480 300 540 262 598 256"/><text class="a" x="'+(mob?560:556)+'" y="500" text-anchor="middle">'+(mob?'HER CLINIC':'HER MEDICAL TEAM')+'</text></g>';
  g+='</svg>';
  return g;
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .pg",svg),s1:$("#s1",svg),swp:$("#swp",svg),s2:$("#s2",svg),cal:dl("#s2 .cal"),pl:$$("#s2 .pl",svg),
    s3:$("#s3",svg),lnk:dl("#s3 .lnk"),fol:$$("#scBase .fol",svg)};
  var lastB=-1,A=USF.a;
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: the sweep crosses the fan once, then rests at the far edge */
    op(E.s1,seg(b,.6,1)*(1-seg(p,.28,.36)));
    var sw=seg(p,.02,.26),ang=(USF.A1-6-(USF.A1-USF.A0-12)*sw)*Math.PI/180;
    E.swp.setAttribute("d","M"+(A[0]+USF.r0*Math.cos(ang)).toFixed(1)+" "+(A[1]+USF.r0*Math.sin(ang)).toFixed(1)+"L"+(A[0]+USF.R*Math.cos(ang)).toFixed(1)+" "+(A[1]+USF.R*Math.sin(ang)).toFixed(1));
    /* step 2: follicles found and measured; planes stack into a volume */
    var s2=seg(p,.36,.46),o2=1-seg(p,.62,.7);op(E.s2,b*s2*o2);
    E.cal.forEach(function(a,k){var q=seg(p,.4+k*.03,.5+k*.03);a[0].style.strokeDashoffset=(a[1]*(1-q)).toFixed(1)});
    E.pl.forEach(function(el,k){op(el,seg(p,.42+k*.03,.5+k*.03))});
    var hl=seg(p,.38,.46)*(1-seg(p,.66,.72));E.fol.forEach(function(el,k){el.classList.toggle("hit",k<5&&hl>.5)});
    /* step 3 */
    op(E.s3,b*seg(p,.68,.76));draw(E.lnk,seg(p,.76,.94));
  };
}
