/* the story scene (BL/BY/DB): how VioScreen works, drawn in fine engraved line. ONE plate stays at the centre for all three steps.
   Step 1 the questionnaire asks about one food at a time: a frequency scale around the rim, the marker moving as the subject answers.
   Step 2 portion-size images: three plates holding more or less of the same food, and the one that matches is chosen.
   Step 3 real-time analysis against the NCC Food and Nutrient Database: nutrient bands ring the plate and the Healthy Eating Index
   (scored 1 to 100) fills. Sources: viocare.com, VioScreen Research and VioScreen Clinical pages. Schematic; proportions are
   illustrative, not a real result. Driven by the scrubbed story progress. */
var PLT={c:[300,285],R:200,r:168,w:150};
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,C=PLT.c;
  function pol(r,a){a=a*Math.PI/180;return [C[0]+r*Math.cos(a),C[1]+r*Math.sin(a)]}
  function arc(r,a0,a1,cx,cy){cx=cx==null?C[0]:cx;cy=cy==null?C[1]:cy;var p0=[cx+r*Math.cos(a0*Math.PI/180),cy+r*Math.sin(a0*Math.PI/180)],p1=[cx+r*Math.cos(a1*Math.PI/180),cy+r*Math.sin(a1*Math.PI/180)];
    return 'M'+f(p0[0])+' '+f(p0[1])+'A'+r+' '+r+' 0 '+((a1-a0)>180?1:0)+' 1 '+f(p1[0])+' '+f(p1[1])}
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="vglow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#a9d13a" stop-opacity=".13"/><stop offset="1" stop-color="#a9d13a" stop-opacity="0"/></radialGradient></defs>';
  /* the plate: rim, well, an engraved shading of the rim; then the meal in line */
  g+='<g id="scBase"><circle cx="'+C[0]+'" cy="'+C[1]+'" r="250" fill="url(#vglow)" class="pg"/>';
  g+='<circle class="rim sD" cx="'+C[0]+'" cy="'+C[1]+'" r="'+PLT.R+'"/><circle class="rim2 sD" cx="'+C[0]+'" cy="'+C[1]+'" r="'+PLT.r+'"/><circle class="well sD" cx="'+C[0]+'" cy="'+C[1]+'" r="'+PLT.w+'"/>';
  for(i=0;i<36;i++){var a=i*10+3;g+='<path class="hat sD" d="'+arc(184,a,a+5)+'"/>'}
  /* squash cubes */
  [[232,205,0],[268,190,18],[212,240,-14],[252,232,30],[290,222,8]].forEach(function(q){var s=19,r=q[2]*Math.PI/180,pts=[[-s,-s],[s,-s],[s,s],[-s,s]].map(function(p){return f(q[0]+p[0]*Math.cos(r)-p[1]*Math.sin(r))+' '+f(q[1]+p[0]*Math.sin(r)+p[1]*Math.cos(r))});
    g+='<path class="fo sq sD" d="M'+pts.join('L')+'Z"/><path class="fo2 sD" d="M'+pts[0]+'L'+f(q[0])+' '+f(q[1])+'"/>'});
  /* avocado half with its pit */
  g+='<path class="fo av sD" d="M372 168C398 166 416 196 414 236C412 276 392 300 366 298C340 296 326 270 330 236C334 204 348 170 372 168Z"/><path class="fo2 sD" d="M372 180C390 180 402 204 400 236C398 268 384 286 366 285C348 284 340 264 343 236C346 210 356 182 372 180Z"/><circle class="fo av sD" cx="370" cy="248" r="20"/>';
  /* chickpeas */
  [[322,350],[344,342],[366,350],[334,372],[357,372],[380,368],[312,375],[346,394],[370,392],[325,396],[392,388],[300,355]].forEach(function(c){g+='<circle class="fo ck sD" cx="'+c[0]+'" cy="'+c[1]+'" r="10"/>'});
  /* spinach leaves */
  [[214,322,-30],[236,360,10],[200,368,40]].forEach(function(l){g+='<g transform="translate('+l[0]+' '+l[1]+') rotate('+l[2]+')"><path class="fo lf sD" d="M-34 0C-20 -22 14 -24 34 0C14 24 -20 22 -34 0Z"/><path class="fo2 sD" d="M-34 0L30 0"/></g>'});
  g+='<text class="t" x="'+C[0]+'" y="'+(C[1]+PLT.R+40)+'" text-anchor="middle">'+(mob?'ONE MEAL':'ONE MEAL, FOOD BY FOOD')+'</text></g>';

  /* step 1: the frequency scale around the right of the rim, and the answer marker */
  g+='<g id="fq"><path class="sc" d="'+arc(228,-62,62)+'"/>';
  ["NEVER","MONTHLY","WEEKLY","DAILY"].forEach(function(s,k){var a=-55+k*110/3,p0=pol(222,a),p1=pol(236,a),pt=pol(250,a);g+='<path class="tk" d="M'+f(p0[0])+' '+f(p0[1])+'L'+f(p1[0])+' '+f(p1[1])+'"/><text class="fq" x="'+f(pt[0])+'" y="'+f(pt[1]+4)+'">'+s+'</text>'});
  g+='<circle class="mkr" id="fqm" r="8"/><path class="ldr" d="M226 190L150 70H48"/><text class="a" x="48" y="58">'+(mob?'SQUASH?':'SQUASH · HOW OFTEN?')+'</text></g>';

  /* step 2: three portion images, the same food in three amounts */
  g+='<g id="pp">';
  [[130,14],[285,26],[440,38]].forEach(function(q,k){var cx=676,cy=q[0];
    g+='<g class="pl'+(k===1?' sel':'')+'"><circle class="prim" cx="'+cx+'" cy="'+cy+'" r="60"/><circle class="pwell" cx="'+cx+'" cy="'+cy+'" r="46"/>'+
      '<circle class="mound" data-r="'+q[1]+'" cx="'+cx+'" cy="'+cy+'" r="'+q[1]+'"/>'+
      (k===1?'<path class="ok" d="M'+(cx+72)+' '+(cy-2)+'l8 8 14-18"/>':'')+'</g>'});
  g+=(mob?'':'<text class="a" x="530" y="290" text-anchor="end">THIS MUCH</text>')+'<path class="ldr" d="M538 285H604"/></g>';

  /* step 3: nutrient bands around the plate, and the Healthy Eating Index gauge */
  g+='<g id="an">';
  [["PROTEIN",-84,-14,"b1"],["CARBOHYDRATE",-8,118,"b2"],["FAT",124,196,"b3"],["FIBER",202,270,"b4"]].forEach(function(b){g+='<path class="band '+b[3]+'" d="'+arc(220,b[1],b[2])+'"/>';var m=(b[1]+b[2])/2,pt=pol(244,m),c=Math.cos(m*Math.PI/180);
    g+='<text class="bl" x="'+f(pt[0])+'" y="'+f(pt[1]+4)+'" text-anchor="'+(c>.3?"start":c<-.3?"end":"middle")+'">'+(mob&&b[0]==="CARBOHYDRATE"?"CARBS":b[0])+'</text>'});
  var G=[676,300],GR=92;
  g+='<path class="gtr" d="'+arc(GR,180,360,G[0],G[1])+'"/><path class="gfl" d="'+arc(GR,180,334,G[0],G[1])+'"/>';
  for(i=0;i<=10;i++){var aa=(180+i*18)*Math.PI/180;g+='<path class="gtk" d="M'+f(G[0]+(GR-16)*Math.cos(aa))+' '+f(G[1]+(GR-16)*Math.sin(aa))+'L'+f(G[0]+(GR-8)*Math.cos(aa))+' '+f(G[1]+(GR-8)*Math.sin(aa))+'"/>'}
  g+='<text class="t" x="'+(G[0]-GR)+'" y="'+(G[1]+28)+'" text-anchor="middle">1</text><text class="t" x="'+(G[0]+GR)+'" y="'+(G[1]+28)+'" text-anchor="middle">100</text>';
  g+='<text class="a" x="'+G[0]+'" y="'+(G[1]+64)+'" text-anchor="middle">'+(mob?'HEI':'HEALTHY EATING INDEX')+'</text></g>';
  g+='</svg>';
  return g;
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .pg",svg),fq:$("#fq",svg),sc:dl("#fq .sc"),m:$("#fqm",svg),pp:$("#pp",svg),pl:$$("#pp .pl",svg),
    mo:$$("#pp .mound",svg),sel:$("#pp .sel",svg),ok:dl("#pp .ok"),an:$("#an",svg),bd:dl("#an .band"),gf:dl("#an .gfl")};
  var lastB=-1,C=PLT.c;
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: the scale is in as soon as the plate is drawn; the marker moves as the subject answers */
    var o1=1-seg(p,.28,.36);op(E.fq,seg(b,.6,1)*o1);draw(E.sc,b);
    var mv=seg(p,.04,.24),a=(-55+110*(.12+.55*mv))*Math.PI/180;E.m.setAttribute("cx",(C[0]+228*Math.cos(a)).toFixed(1));E.m.setAttribute("cy",(C[1]+228*Math.sin(a)).toFixed(1));
    /* step 2 */
    var s2=seg(p,.36,.46),o2=1-seg(p,.62,.7);op(E.pp,b*s2*o2);
    E.mo.forEach(function(el,k){var q=seg(p,.38+k*.04,.48+k*.04);el.setAttribute("r",(+el.getAttribute("data-r")*Math.max(q,.001)).toFixed(1))});
    var sl=seg(p,.5,.58);E.sel.classList.toggle("on",sl>.5);draw(E.ok,sl);
    E.pl.forEach(function(el,k){if(k!==1)op(el,1-.55*sl)});
    /* step 3 */
    op(E.an,b*seg(p,.68,.76));
    E.bd.forEach(function(a,k){var q=seg(p,.7+k*.05,.82+k*.05);a[0].style.strokeDashoffset=(a[1]*(1-q)).toFixed(1)});
    draw(E.gf,seg(p,.76,.94));
  };
}
