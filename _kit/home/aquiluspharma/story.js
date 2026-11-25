/* The story scene (BL/BY/DB): how AQU-118 works, drawn as ONE continuous close-up of a motor neuron in its extracellular
   matrix, kept on screen for all three steps (aquiluspharma.com, Research: MMPs "can cleave virtually any component of the
   extracellular matrix"; "a growing body of evidence has linked MMP-9 and MMP-2 with the severity and rate of progression
   of ALS"; AQU-118 is "a safe, orally bioavailable semi-selective inhibitor of MMP-9 and MMP-2"). Step 1: the neuron and
   the collagen fibres of its matrix draw in. Step 2: MMP-9 and MMP-2 (zinc enzymes, the zinc shown in their active-site
   cleft) dock on the fibres and cut them; the cut ends part and the neuron dims. Step 3: AQU-118 seats in each active site,
   the enzymes go quiet and the matrix stays whole. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
function aqWy(x,y,amp,ph){return y+amp*Math.sin(ph+x/38)+amp*.35*Math.sin(ph*1.7+x/17)}
function aqWave(x0,x1,y,amp,ph){var d="",n=Math.max(8,Math.round((x1-x0)/14)),i;for(i=0;i<=n;i++){var x=x0+(x1-x0)*i/n;d+=(i?"L":"M")+x.toFixed(1)+" "+aqWy(x,y,amp,ph).toFixed(1)}return d}
/* fibres that get cut: [x0,x1,y,amp,phase,cutX] */
var AQF=[[16,744,100,9,0.4,330],[300,744,176,8,2.1,560],[16,744,404,9,4.0,420]];
var AQE=[{f:0,lab:"MMP-9"},{f:1,lab:"MMP-2"},{f:2,lab:""}];
/* an enzyme: a disc with a wedge-shaped active-site cleft opening toward +x */
function aqEnz(){var r=30,a0=Math.PI*.2;return "M"+(r*Math.cos(a0)).toFixed(1)+" "+(r*Math.sin(a0)).toFixed(1)+"A"+r+" "+r+" 0 1 1 "+(r*Math.cos(-a0)).toFixed(1)+" "+(r*Math.sin(-a0)).toFixed(1)+"L6 0Z"}
function aqHex(cx,cy,r){var d="",i;for(i=0;i<6;i++){var a=i*Math.PI/3;d+=(i?"L":"M")+(cx+r*Math.cos(a)).toFixed(1)+" "+(cy+r*Math.sin(a)).toFixed(1)}return d+"Z"}
function mpScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* uncut fibres of the matrix */
  g+='<path class="fb sD" d="M600 26C660 70 700 120 744 180"/>';
  g+='<path class="fb sD" d="M16 360C110 386 200 430 318 474"/>';
  g+='<path class="fb sD" d="M612 360C640 404 672 442 706 478"/>';
  g+='<path class="fb f2 sD" d="'+aqWave(16,744,56,6,1.3)+'"/><path class="fb f2 sD" d="'+aqWave(16,280,140,6,5.2)+'"/><path class="fb f2 sD" d="'+aqWave(300,744,236,6,3.1)+'"/><path class="fb f2 sD" d="'+aqWave(16,744,352,6,2.4)+'"/>';
  g+='<path class="fb f2 sD" d="M60 40C90 120 70 200 40 300"/><path class="fb f2 sD" d="M420 30C400 110 430 190 410 250"/><path class="fb f2 sD" d="M500 340C520 390 500 430 540 480"/>';
  /* the motor neuron: soma, nucleus, dendrites, and the myelinated axon running to the right */
  g+='<g id="neu">';
  g+='<path class="so sD" d="M150 228C160 206 196 198 220 210C244 222 250 252 240 276C230 298 200 306 178 298C150 288 138 252 150 228Z"/>';
  g+='<circle class="nu sD" cx="194" cy="254" r="15"/>';
  g+='<path class="dn sD" d="M160 222C140 200 120 196 96 188M124 199C116 184 112 170 100 158M176 206C172 182 180 160 170 138M214 208C226 186 246 176 262 160M152 280C126 296 104 300 78 318M110 296C96 300 82 296 66 288"/>';
  g+='<path class="ax sD" d="M242 262C320 268 400 280 480 292C560 304 640 316 716 326"/>';
  g+='<path class="my" d="M286 265.5L332 270.6M362 274.2L410 280.6M440 285.4L490 293.3M520 298L570 305.4M600 309.8L650 317"/>';
  g+='<path class="dn sD" d="M716 326C726 314 734 312 744 312M716 326C728 332 734 342 742 350"/>';
  g+='</g>';
  g+='<text class="t" x="24" y="22">'+(mob?"MOTOR NEURON · MATRIX":"A MOTOR NEURON IN ITS EXTRACELLULAR MATRIX")+'</text>';
  if(!mob)g+='<text class="t" x="132" y="338">MOTOR NEURON</text>';
  if(!mob)g+='<text class="t" x="430" y="262">AXON</text>';
  g+='</g>';
  /* the three fibres that get cut: each in two halves that part at the cut */
  g+='<g id="cutF">'+AQF.map(function(f){var c=f[5];return '<path class="fb sD fl" d="'+aqWave(f[0],c-2,f[2],f[3],f[4])+'"/><path class="fb sD fr" d="'+aqWave(c+2,f[1],f[2],f[3],f[4])+'"/>'}).join("")+'</g>';
  /* the enzymes, each with its zinc in the active-site cleft, and AQU-118, which seats in the cleft */
  g+=AQE.map(function(e,k){var f=AQF[e.f],x=f[5],y=aqWy(f[5],f[2],f[3],f[4]);
    return '<g class="enz" id="enz'+k+'" data-x="'+x.toFixed(1)+'" data-y="'+y.toFixed(1)+'"><g class="er"><path class="ez" d="'+aqEnz()+'"/><circle class="zn" cx="12" cy="0" r="4.6"/></g>'+
      (e.lab?'<text class="t el" x="-42" y="4" text-anchor="end">'+e.lab+'</text>':'')+'</g>'+
      '<g class="drg" id="drg'+k+'"><g class="dg"><path class="dr" d="'+aqHex(0,0,8.5)+'"/></g>'+(k==1?'<text class="t dl" x="42" y="'+(mob?-8:-12)+'">AQU-118</text>':'')+'</g>'}).join("");
  /* step captions, in the clear band under the scene */
  g+='<g id="lb1"><text class="a" x="24" y="506">'+(mob?"THE MATRIX HOLDS":"A MATRIX OF FIBRES SUPPORTS THE NEURON")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="506">'+(mob?"MMPS CUT THE FIBRES":"MMP-9 AND MMP-2 CUT THE MATRIX APART")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="506">'+(mob?"AQU-118 BLOCKS THEM":"AQU-118 SEATS IN THEIR ACTIVE SITE")+'</text></g>';
  return g+'</svg>';
}
function scene(){return mpScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD,#cutF .sD"),fade:$$("#scBase text,#scBase .my",svg),neu:$("#neu",svg),
    fl:$$("#cutF .fl",svg),fr:$$("#cutF .fr",svg),enz:$$(".enz",svg),drg:$$(".drg",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function tf(el,x,y,r){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")"+(r?" rotate("+r.toFixed(1)+")":""))}
  /* each enzyme sits just off its fibre, cleft turned toward the cut: the top two above their fibre (cleft down), the low one below (cleft up) */
  var EN=E.enz.map(function(el,k){var up=k<2;return {x:+el.getAttribute("data-x"),y:+el.getAttribute("data-y")+(up?-34:34),rot:up?90:-90,dx:[70,60,-70][k],dy:[-40,-50,40][k],up:up}});
  E.enz.forEach(function(el,k){el.querySelector(".er").setAttribute("transform","rotate("+EN[k].rot+")");var t=el.querySelector("text");if(t&&!EN[k].up)t.setAttribute("y","48")});
  E.drg.forEach(function(el,k){el.querySelector(".dg").setAttribute("transform","rotate("+EN[k].rot+")")});
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var eIn=seg(p,.36,.5),cut=seg(p,.46,.58)*(1-seg(p,.8,.9)),dIn=seg(p,.68,.8),quiet=seg(p,.8,.9);
    E.fl.forEach(function(el){tf(el,-15*cut,0,0);el.style.opacity=(1-.35*cut).toFixed(3)});
    E.fr.forEach(function(el){tf(el,15*cut,0,0);el.style.opacity=(1-.35*cut).toFixed(3)});
    op(E.neu,1-.4*seg(p,.48,.6)*(1-seg(p,.82,.92)));
    E.enz.forEach(function(el,k){var n=EN[k];tf(el,n.x+n.dx*(1-eIn),n.y+n.dy*(1-eIn),0);op(el,b*seg(p,.34,.42)*(1-.45*quiet))});
    /* the inhibitor seats in the cleft (centre ~12px from the enzyme centre, on the cleft side) */
    E.drg.forEach(function(el,k){var n=EN[k],cx=n.x,cy=n.y+(n.up?17:-17),sx=cx+[120,110,130][k]*(1-dIn),sy=cy+[-30,-40,30][k]*(1-dIn);
      tf(el,sx,sy,0);op(el,b*seg(p,.66,.71))});
    op(E.l1,b*seg(p,.1,.18)*(1-seg(p,.3,.34)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.66)));op(E.l3,b*seg(p,.8,.88));
  };
}
