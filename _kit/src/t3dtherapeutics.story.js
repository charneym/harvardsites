/* the story scene: T3D's own account of Alzheimer's as a neuro-metabolic disease (t3dtherapeutics.com home and lead-product pages),
   drawn as one engraved neuron beside a capillary. Step 1 the brain runs on sugar: glucose (drawn as hexagonal rings) flows from
   the capillary into the cell and its mitochondria glow; step 2 "starvation": the brain can no longer turn sugar into energy, the
   flow stalls and the mitochondria dim; step 3 "strangulation": plaques gather outside the cell, tangles inside, and inflammation
   spreads; step 4 T3D-959, once a day by mouth, activates the PPAR-delta and PPAR-gamma nuclear receptors in the nucleus, aiming to
   restore glucose and lipid metabolism: the flow returns and the mitochondria light again. Schematic, not data. */
var T3_S=[300,262],T3_N=[292,258];
function t3R(t){return 84+9*Math.sin(3*t+.5)+6*Math.cos(5*t+1.2)+4*Math.sin(7*t)}
function t3Soma(k,dy){var d='',N=90;for(var i=0;i<=N;i++){var t=i/N*Math.PI*2,r=t3R(t)*k;
  d+=(i?'L':'M')+(T3_S[0]+Math.cos(t)*r).toFixed(1)+' '+(T3_S[1]+Math.sin(t)*r*.86+(dy||0)).toFixed(1)}return d+'Z'}
function t3Den(x,y,a,len,w,dep,out){/* a tapering dendrite that forks; deterministic */
  var x2=x+Math.cos(a)*len,y2=y+Math.sin(a)*len,mx=x+Math.cos(a+.22)*len*.55,my=y+Math.sin(a+.22)*len*.55;
  out.push('<path class="t3d" style="stroke-width:'+w.toFixed(2)+'" d="M'+x.toFixed(1)+' '+y.toFixed(1)+'Q'+mx.toFixed(1)+' '+my.toFixed(1)+' '+x2.toFixed(1)+' '+y2.toFixed(1)+'"/>');
  if(dep>0){t3Den(x2,y2,a-.42,len*.66,w*.66,dep-1,out);t3Den(x2,y2,a+.38,len*.6,w*.62,dep-1,out)}}
function t3Hex(cx,cy,r){var d='';for(var i=0;i<6;i++){var t=i/6*Math.PI*2+Math.PI/6;d+=(i?'L':'M')+(cx+Math.cos(t)*r).toFixed(1)+' '+(cy+Math.sin(t)*r).toFixed(1)}return d+'Z'}
function t3Blob(cx,cy,r,ph){var d='';for(var i=0;i<=40;i++){var t=i/40*Math.PI*2,rr=r*(1+.22*Math.sin(3*t+ph)+.12*Math.cos(5*t+ph*2));d+=(i?'L':'M')+(cx+Math.cos(t)*rr).toFixed(1)+' '+(cy+Math.sin(t)*rr).toFixed(1)}return d+'Z'}
var T3_MI=[[-58,-30,.5],[-60,26,-.4],[44,-50,-.7],[58,34,.6],[-14,62,.1],[6,-70,.2]];
var T3_PL=[[120,150,24,.4],[470,118,20,1.3],[150,420,22,2.1],[492,352,26,.9],[86,288,16,2.7]];
/* glucose route: from the capillary up into the soma */
function t3Gpath(){return 'M180 516C214 470 240 420 262 356'}
function scene(){
  var mob=MOBILE(),fs=mob?20:12,cs=mob?22:13;
  var caps=mob?["BRAIN · 25% OF BODY GLUCOSE","ENERGY FAILS · ‘STARVATION’","PLAQUES · TANGLES · INFLAMMATION","T3D-959 · PPARδ AND PPARγ"]:["THE BRAIN · 2% OF BODY WEIGHT, 25% OF ITS GLUCOSE","ENERGY FAILS · BRAIN ‘STARVATION’","PLAQUES · TANGLES · INFLAMMATION","T3D-959 · PPARδ AND PPARγ IN THE NUCLEUS"];
  var s='<svg viewBox="30 40 580 590" role="img" aria-label="Engraved neuron beside a capillary: glucose flows in, energy fails, plaques and tangles form, and T3D-959 acts on the receptors in the nucleus">';
  s+='<defs><radialGradient id="t3Inf" cx="300" cy="262" r="230" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff8f7a" stop-opacity=".22"/><stop offset=".55" stop-color="#e0705e" stop-opacity=".08"/><stop offset="1" stop-color="#e0705e" stop-opacity="0"/></radialGradient>'+
    '<radialGradient id="t3Nu" cx="'+T3_N[0]+'" cy="'+T3_N[1]+'" r="80" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#93d77f" stop-opacity=".5"/><stop offset="1" stop-color="#93d77f" stop-opacity="0"/></radialGradient></defs>';
  s+='<rect id="t3Inflam" x="30" y="40" width="580" height="590" fill="url(#t3Inf)" opacity="0"/>';
  /* capillary: two engraved walls with fine hatching and a few red cells */
  var cap='<path class="t3v" d="M30 520C190 546 410 462 610 494"/><path class="t3v" d="M30 566C190 592 410 508 610 540"/>';
  for(var hx=46;hx<600;hx+=14){var yy=520+(hx-30)/580*-26+Math.sin(hx/60)*6;cap+='<path class="t3h" d="M'+hx+' '+(yy+6).toFixed(1)+'l-6 30"/>'}
  [[90,548],[260,526],[430,512],[560,524]].forEach(function(c){cap+='<ellipse class="t3rbc" cx="'+c[0]+'" cy="'+c[1]+'" rx="13" ry="6.5"/>'});
  s+='<g id="t3Cap">'+cap+'</g>';
  /* dendrites and axon */
  var D=[];[[-2.55,130],[-1.95,120],[-1.25,118],[2.45,124],[2.95,104],[1.95,96]].forEach(function(a){var r=t3R(a[0]+Math.PI*2)*.95;
    t3Den(T3_S[0]+Math.cos(a[0])*r,T3_S[1]+Math.sin(a[0])*r*.86,a[0],a[1],3.2,2,D)});
  s+='<g id="t3Den">'+D.join('')+'</g>';
  s+='<path id="t3Ax" class="t3ax" d="M382 268C432 272 470 250 506 222S574 168 612 158"/>';
  var my='';[[0.26],[0.52],[0.78]].forEach(function(q,i){var x=420+i*64,y=268-i*36-(i>1?8:0);my+='<rect class="t3my" x="'+(x-18)+'" y="'+(y-7)+'" width="36" height="14" rx="7" transform="rotate('+(-14-i*12)+' '+x+' '+y+')"/>'});
  s+='<g id="t3My">'+my+'</g>';
  /* soma with engraved offset lines, nucleus and nucleolus */
  var E='';for(var k=1;k<=6;k++)E+='<path class="t3e" d="'+t3Soma(1-k*.045,k*.8)+'"/>';
  s+='<path class="t3sf" d="'+t3Soma(1)+'"/><g id="t3Eng">'+E+'</g><path id="t3Soma" class="t3s" d="'+t3Soma(1)+'"/>';
  s+='<circle id="t3NuG" cx="'+T3_N[0]+'" cy="'+T3_N[1]+'" r="80" fill="url(#t3Nu)" opacity="0"/>';
  s+='<circle class="t3n" cx="'+T3_N[0]+'" cy="'+T3_N[1]+'" r="34"/><circle class="t3nl" cx="'+(T3_N[0]+8)+'" cy="'+(T3_N[1]-9)+'" r="8"/>';
  /* the two receptors in the nucleus (step 4) */
  s+='<g id="t3Rc" opacity="0"><path class="t3rc" d="'+t3Blob(T3_N[0]-12,T3_N[1]+12,8,.3)+'"/><path class="t3rc g" d="'+t3Blob(T3_N[0]+12,T3_N[1]+14,6.5,1.7)+'"/></g>';
  /* mitochondria: outline, cristae, and a glow that tracks the energy level */
  var M='';T3_MI.forEach(function(m,i){var x=T3_S[0]+m[0],y=T3_S[1]+m[1],a=(m[2]*57.3).toFixed(1),cr='';
    for(var c=-9;c<=9;c+=4.5)cr+='M'+(x+c)+' '+(y-5)+'L'+(x+c+1.8)+' '+(y+5);
    M+='<g transform="rotate('+a+' '+x+' '+y+')"><ellipse class="t3mg" id="t3Mg'+i+'" cx="'+x+'" cy="'+y+'" rx="18" ry="9"/><ellipse class="t3m" cx="'+x+'" cy="'+y+'" rx="15" ry="6.6"/><path class="t3mc" d="'+cr+'"/></g>'});
  s+='<g id="t3Mi">'+M+'</g>';
  /* tangles (inside), plaques (outside) */
  var T='';[[-36,-8],[30,8],[-4,38]].forEach(function(o,i){var x=T3_S[0]+o[0],y=T3_S[1]+o[1],d='M'+(x-16)+' '+y;for(var q=1;q<=8;q++)d+='Q'+(x-16+q*4-2)+' '+(y+(q%2?-7:7))+' '+(x-16+q*4)+' '+y;T+='<path class="t3tg" d="'+d+'" transform="rotate('+(i*52-30)+' '+x+' '+y+')"/>'});
  s+='<g id="t3Tg" opacity="0">'+T+'</g>';
  var P='';T3_PL.forEach(function(p,i){var hh='';for(var q=-p[2];q<=p[2];q+=5)hh+='M'+(p[0]+q-6)+' '+(p[1]-p[2])+'l12 '+(p[2]*2);
    P+='<g class="t3pl" id="t3Pl'+i+'" style="transform-origin:'+p[0]+'px '+p[1]+'px"><clipPath id="t3Pc'+i+'"><path d="'+t3Blob(p[0],p[1],p[2],p[3])+'"/></clipPath><path class="t3pf" d="'+t3Blob(p[0],p[1],p[2],p[3])+'"/><path class="t3ph" clip-path="url(#t3Pc'+i+')" d="'+hh+'"/></g>'});
  s+='<g id="t3Pls">'+P+'</g>';
  /* glucose hexagons (positions set per frame) */
  s+='<path id="t3Gp" d="'+t3Gpath()+'" fill="none" stroke="none"/>';
  var G='';for(var g=0;g<9;g++)G+='<path class="t3gl" id="t3G'+g+'" d="'+t3Hex(0,0,mob?9:7.5)+'"/>';
  s+='<g id="t3Gs">'+G+'</g>';
  /* labels: step 1 anatomy, step 3 pathology, step 4 receptors */
  s+='<g id="t3Lab" style="font-size:'+fs+'px">'+
    '<path class="t3ld" d="M'+(T3_N[0]-26)+' '+(T3_N[1]-22)+'L188 170H120"/><text x="120" y="162">NUCLEUS</text>'+
    '<path class="t3ld" d="M'+(T3_S[0]+52)+' '+(T3_S[1]+38)+'L438 330H492"/><text x="440" y="322">MITOCHONDRIA</text>'+
    '<path class="t3ld" d="M520 488V448"/><text x="452" y="440">CAPILLARY</text>'+
    '<path class="t3ld" d="M556 182V112"/><text x="520" y="104">AXON</text></g>';
  s+='<g id="t3Lab3" style="font-size:'+fs+'px" opacity="0">'+
    '<path class="t3ld" d="M'+(T3_PL[1][0]-10)+' '+(T3_PL[1][1]+18)+'L438 196H492"/><text x="444" y="188">PLAQUE</text>'+
    '<path class="t3ld" d="M'+(T3_S[0]-40)+' '+(T3_S[1]-10)+'L150 228H96"/><text x="96" y="220">TANGLE</text></g>';
  s+='<g id="t3Lab4" style="font-size:'+fs+'px" opacity="0">'+
    '<path class="t3ld" d="M'+(T3_N[0]+18)+' '+(T3_N[1]+20)+'L420 380H500"/><text x="420" y="372" class="g">PPARδ · PPARγ</text></g>';
  caps.forEach(function(c,i){s+='<text class="cap" id="t3C'+i+'" x="320" y="'+(mob?612:620)+'" text-anchor="middle" style="font-size:'+cs+'px" opacity="'+(i?0:1)+'">'+c+'</text>'});
  return s+'</svg>';
}
function storyDraw(svg){
  var q=function(id){return svg.querySelector("#"+id)};
  var E={soma:q("t3Soma"),eng:q("t3Eng"),den:q("t3Den"),ax:q("t3Ax"),lab:q("t3Lab"),lab3:q("t3Lab3"),lab4:q("t3Lab4"),inf:q("t3Inflam"),tg:q("t3Tg"),rc:q("t3Rc"),nug:q("t3NuG"),gp:q("t3Gp"),
    mg:T3_MI.map(function(m,i){return q("t3Mg"+i)}),pl:T3_PL.map(function(p,i){return q("t3Pl"+i)}),gl:[0,1,2,3,4,5,6,7,8].map(function(i){return q("t3G"+i)}),cap:[0,1,2,3].map(function(i){return q("t3C"+i)})};
  var SL=E.soma.getTotalLength(),AL=E.ax.getTotalLength(),GL=E.gp.getTotalLength(),GP=[];
  for(var i=0;i<=60;i++){var pt=E.gp.getPointAtLength(GL*i/60);GP.push([pt.x,pt.y])}
  function gAt(f){f=Math.max(0,Math.min(1,f))*60;var a=Math.floor(f),b=Math.min(60,a+1),t=f-a;return [GP[a][0]+(GP[b][0]-GP[a][0])*t,GP[a][1]+(GP[b][1]-GP[a][1])*t]}
  return function(p,b){
    if(!E.soma.isConnected)return;
    var s1=seg(p,.02,.16),s2=seg(p,.27,.47),s3=seg(p,.53,.7),s4=seg(p,.78,.94);
    svg.style.opacity=(.3+.7*b).toFixed(3);
    E.soma.style.strokeDasharray=SL.toFixed(1)+" "+SL.toFixed(1);E.soma.style.strokeDashoffset=(SL*(1-Math.max(.4,s1))).toFixed(1);
    E.ax.style.strokeDasharray=AL.toFixed(1)+" "+AL.toFixed(1);E.ax.style.strokeDashoffset=(AL*(1-Math.max(.3,s1))).toFixed(1);
    E.eng.style.opacity=(.35+.65*s1).toFixed(3);E.den.style.opacity=(.4+.6*s1).toFixed(3);
    E.lab.style.opacity=(s1*(1-s2)).toFixed(3);
    /* energy: full, then failing, then restored */
    var en=Math.max(.12,1-.88*s2)+(1-Math.max(.12,1-.88*s2))*s4;
    E.mg.forEach(function(m){m.style.opacity=(.15+.85*en).toFixed(3)});
    /* glucose: hexagons travel up from the capillary; when starving most stall and fade at the cell edge */
    var flow=p*7;
    E.gl.forEach(function(g,i){var f=(flow+i/9)%1,lim=.35+.65*en,vis=f<lim?1:Math.max(0,1-(f-lim)*8),pt=gAt(Math.min(f,lim));
      g.setAttribute("transform","translate("+pt[0].toFixed(1)+" "+pt[1].toFixed(1)+") rotate("+(f*120).toFixed(0)+")");
      g.style.opacity=(Math.min(1,s1*2)*vis*(f<.06?f/.06:1)*(.3+.7*en)).toFixed(3)});
    /* strangulation */
    var st=s3*(1-.55*s4);
    E.pl.forEach(function(e,i){var k=seg(s3,i*.1,i*.1+.5)*(1-.45*s4);e.style.transform="scale("+(.2+.8*k).toFixed(3)+")";e.style.opacity=(k>0?Math.min(1,k*1.6):0).toFixed(3)});
    E.tg.style.opacity=st.toFixed(3);E.inf.style.opacity=(st*.9).toFixed(3);
    E.lab3.style.opacity=(s3*(1-s4)).toFixed(3);
    /* T3D-959 */
    E.rc.style.opacity=s4.toFixed(3);E.nug.style.opacity=(s4*.9).toFixed(3);E.lab4.style.opacity=s4.toFixed(3);
    var W=[[0,0,.23,.25],[.25,.28,.48,.5],[.5,.53,.73,.75],[.75,.78,2,2]];
    E.cap.forEach(function(el,k){var a2=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]);el.style.opacity=(b*a2*(1-o)).toFixed(3)});
  };
}
