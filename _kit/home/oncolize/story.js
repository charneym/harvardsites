/* The story scene (DB/BL): how ChemoGell works (oncolize.com/technology: injected directly into the tumor through a thin
   needle; within seconds the liquid forms a soft hydrogel depot that remains inside the tumor; the depot releases the drug
   over hours to days, keeping it concentrated inside the tumor with minimal systemic exposure), drawn as ONE calm fine-line
   scene that fills the frame: a fine needle and a solid tumor in section, its cells as a quiet texture (DT: no gore).
   Frame 0 is complete: needle poised outside the tumor, tumor drawn.
   Step 1 (inject): the needle advances into the centre of the tumor.
   Step 2 (gel): a soft magenta depot swells at the tip and the needle withdraws, leaving the depot in place.
   Step 3 (release): drug spreads out from the depot through the tumor, densest near the depot, and stops at the tumor's
   edge, whose outline draws in the accent. Driven by scrubbed progress. No dash draws on non-scaling strokes (DR4). */
var SCW=760,SCH=560;
var TCX=480,TCY=300;
function tumR(t){return 138*(1+.055*Math.sin(3*t+.6)+.035*Math.cos(5*t+1.1)+.02*Math.sin(7*t))}
var TUM=(function(){var p=[];for(var i=0;i<72;i++){var t=i/72*Math.PI*2,r=tumR(t);p.push([TCX+r*Math.cos(t)*1.06,TCY+r*Math.sin(t)*.94])}
  var n=p.length,d="M"+p[0][0].toFixed(1)+" "+p[0][1].toFixed(1);
  for(var i=0;i<n;i++){var a=p[(i-1+n)%n],b=p[i],c=p[(i+1)%n],e=p[(i+2)%n];
    d+="C"+(b[0]+(c[0]-a[0])/6).toFixed(1)+" "+(b[1]+(c[1]-a[1])/6).toFixed(1)+" "+(c[0]-(e[0]-b[0])/6).toFixed(1)+" "+(c[1]-(e[1]-b[1])/6).toFixed(1)+" "+c[0].toFixed(1)+" "+c[1].toFixed(1)}
  return d+"Z"})();
function inTum(x,y,k){var dx=(x-TCX)/1.06,dy=(y-TCY)/.94,t=Math.atan2(dy,dx);return Math.hypot(dx,dy)<tumR(t)*k}
/* the needle: tip at the depot site when inserted, entering from the upper left */
var TIPX=452,TIPY=292,NANG=33,NCOS=Math.cos(NANG*Math.PI/180),NSIN=Math.sin(NANG*Math.PI/180),NBACK=118;
var CELLS=(function(){var o=[];for(var r=-9;r<=9;r++){var y=TCY+r*15;for(var c=-11;c<=11;c++){var x=TCX+c*15.5+(r%2?7.75:0);if(inTum(x,y,.9))o.push([x,y])}}return o})();
var DRUG=(function(){var s=7,o=[],rnd=function(){s=(s*16807)%2147483647;return s/2147483647};
  while(o.length<150){var x=TCX-160+rnd()*320,y=TCY-150+rnd()*300;if(!inTum(x,y,.93))continue;o.push([x,y,Math.hypot(x-TIPX,y-TIPY)])}
  o.sort(function(a,b){return a[2]-b[2]});return o})();
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'60 76 660 420':'40 70 690 470')+'" aria-hidden="true">';
  g+='<defs><clipPath id="tumClip"><path d="'+TUM+'"/></clipPath><radialGradient id="dpG" cx="50%" cy="45%" r="60%"><stop offset="0" stop-color="#f7c9ee"/><stop offset=".6" stop-color="#d066bc"/><stop offset="1" stop-color="#a63891"/></radialGradient></defs>';
  /* the tumor in section: a quiet cell texture inside a soft outline */
  g+='<g id="scTx">';CELLS.forEach(function(q){g+='<circle class="cx" cx="'+q[0].toFixed(1)+'" cy="'+q[1].toFixed(1)+'" r="5.2"/>'});g+='</g>';
  g+='<path class="wl sD" d="'+TUM+'"/>';
  /* drug spreading from the depot, held inside the tumor */
  g+='<g id="scDr" clip-path="url(#tumClip)">';DRUG.forEach(function(q,i){g+='<circle class="dr" cx="'+q[0].toFixed(1)+'" cy="'+q[1].toFixed(1)+'" r="'+(i%3?2.2:2.8)+'"/>'});g+='</g>';
  g+='<circle class="halo" id="scHalo" cx="'+TIPX+'" cy="'+TIPY+'" r="0" clip-path="url(#tumClip)"/>';
  /* the depot */
  g+='<ellipse class="dp" id="scDp" cx="'+TIPX+'" cy="'+TIPY+'" rx="0" ry="0" fill="url(#dpG)"/>';
  /* the tumor outline in the accent, drawn in step 3 */
  g+='<path class="ol" id="scOl" d="'+TUM+'"/>';
  /* needle: drawn along +x with its tip at the origin, then rotated into place */
  g+='<g id="scNd"><g transform="rotate('+NANG+')"><path class="nd" d="M-250 -2.6H-7L0 0L-7 2.6H-250Z"/><path class="hb" d="M-300 -8H-250V8H-300Z"/><path class="hb" d="M-250 -4.5L-238 -3.2V3.2L-250 4.5"/></g></g>';
  if(!mob){
    g+='<g id="lNd"><text class="t" x="96" y="214">NEEDLE</text></g>';
    g+='<g id="lTu"><text class="t" x="600" y="148" text-anchor="middle">TUMOR</text></g>';
  }else{g+='<g id="lNd"></g><g id="lTu"></g>'}
  var ly=mob?484:524,lx=mob?70:80;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'INJECTED INTO THE TUMOR':'CHEMOGELL™ INJECTED INTO THE TUMOR')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'A HYDROGEL DEPOT FORMS':'A SOFT HYDROGEL DEPOT FORMS IN SECONDS')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'DRUG HELD INSIDE THE TUMOR':'DRUG RELEASED AND HELD INSIDE THE TUMOR')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var OL=$("#scOl",svg),OLL=OL.getTotalLength();OL.style.strokeDasharray=OLL+" "+OLL;
  var E={base:dl(".sD"),tx:$("#scTx",svg),nd:$("#scNd",svg),dp:$("#scDp",svg),halo:$("#scHalo",svg),dr:$$("#scDr .dr",svg),
    lNd:$("#lNd",svg),lTu:$("#lTu",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,ND=DRUG.length,maxD=DRUG[ND-1][2];
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.3),s3=seg(p,.68,.92);
    /* needle: poised outside (back NBACK along its axis), advances in step 1, withdraws in step 2 once the depot has formed */
    var ins=sm(s1),out=sm(seg(p,.5,.64)),k=NBACK*(1-ins)+110*out;
    E.nd.setAttribute("transform","translate("+(TIPX-NCOS*k).toFixed(1)+" "+(TIPY-NSIN*k).toFixed(1)+")");op(E.nd,b);
    /* depot swells at the tip in step 2, then breathes very slightly as it releases */
    var gr=sm(seg(p,.38,.52)),rel=sm(s3);
    E.dp.setAttribute("rx",(30*gr*(1-.12*rel)).toFixed(2));E.dp.setAttribute("ry",(24*gr*(1-.12*rel)).toFixed(2));op(E.dp,b*Math.min(1,gr*1.4));
    /* drug spreads outward from the depot in step 3, nearest first, fading with distance (a concentration gradient) */
    var front=rel*maxD*1.05;
    E.dr.forEach(function(el,i){var d=DRUG[i][2],a=sm((front-d)/26);op(el,b*a*(1-.55*d/maxD))});
    E.halo.setAttribute("r",(front*.92).toFixed(1));op(E.halo,b*rel*.9);
    OL.style.strokeDashoffset=(OLL*(1-sm(seg(p,.74,.92)))).toFixed(1);op(OL,b);
    op(E.tx,b);op(E.lNd,b*(1-sm(seg(p,.5,.6))));op(E.lTu,b);
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
