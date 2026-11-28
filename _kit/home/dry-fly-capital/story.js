/* the story scene (BL/BY/DB): ONE fly cast over a stream, after the firm's line "Casting vision • Expanding legacies" and its
   name. A rod tip at the left, a water line along the bottom; on scroll the fly line unrolls along one cast, a quarter per step of the
   strategy dryflycap.com lists (brand, digital, business development, technology and capital), reaching further across
   the water each time; at the end the dry fly settles and rings spread from it. Labels fade in with their step. Illustrative. */
var DF={wy:420,rx:70,ry:150};
var DFP="M70 150C190 52 390 58 488 170C530 220 546 330 548 412";
function scene(){
  var mob=MOBILE(),g='<svg class="'+(mob?"mob":"")+'" viewBox="0 56 610 450" aria-hidden="true">',k;
  /* water: a few drifting current lines */
  var w='';for(k=0;k<6;k++){var y=DF.wy+k*13,o=(k%2)*40;w+='M'+(20+o)+' '+y+'q60 -6 120 0t120 0t120 0t120 0'}
  g+='<path class="wt" d="'+w+'"/>';
  /* rod: from the lower left up to the tip */
  g+='<path class="rod" d="M8 470L'+DF.rx+' '+DF.ry+'"/><path class="hdl" d="M8 470L22 398"/>';
  g+='<path class="fl0" d="'+DFP+'"/><path class="fl" id="dfL" d="'+DFP+'"/>';
  /* the dry fly (a small version of their mark) and the rise rings */
  g+='<g id="dfF" class="fly"><path class="w1" d="M-9 -4L6 2L3 -2Z"/><path class="w2" d="M-1 -12L6 2L2 -9Z"/><path class="w3" d="M4 -13L7 -10L6 2Z"/></g>';
  for(k=0;k<3;k++)g+='<ellipse class="rg" id="dfR'+k+'" cx="548" cy="'+(DF.wy-6)+'" rx="10" ry="3"/>';
  var L=mob?["BRAND","DIGITAL","SALES TEAM","TECHNOLOGY · CAPITAL"]:["BRAND · HONOR THE LEGACY, STAND OUT","DIGITAL · AWARENESS AND DEMAND","BUSINESS DEVELOPMENT · A SALES TEAM","TECHNOLOGY AND CAPITAL · THE FLY LANDS"];
  for(k=0;k<4;k++){g+='<text class="t" id="dfT'+k+'" x="305" y="'+(mob?503:500)+'" text-anchor="middle">'+L[k]+'</text>'}
  return g+'</svg>';
}
function storyDraw(svg){
  var Lp=$("#dfL",svg),LL=Lp.getTotalLength?Lp.getTotalLength():700;Lp.style.strokeDasharray=LL+" "+LL;var G=$(".fl0",svg);
  var F=$("#dfF",svg),R=[0,1,2].map(function(k){return $("#dfR"+k,svg)}),T=[0,1,2,3].map(function(k){return $("#dfT"+k,svg)}),base=$$(".wt,.rod,.hdl",svg);
  return function(p,b){
    if(!svg.isConnected)return;
    base.forEach(function(e){e.style.opacity=b.toFixed(3)});
    var tip=null,f=0,k;for(k=0;k<4;k++)f+=.25*seg(p,k*.25+.03,k*.25+.2);
    Lp.style.strokeDashoffset=(LL*(1-f)).toFixed(1);Lp.style.opacity=(b*(f>0?1:0)).toFixed(3);G.style.opacity=(b*.9).toFixed(3);
    if(f>0){try{tip=Lp.getPointAtLength(LL*f)}catch(e){}}
    if(tip){F.setAttribute("transform","translate("+tip.x.toFixed(1)+" "+tip.y.toFixed(1)+") scale(1.6)");F.style.opacity=b.toFixed(3)}else F.style.opacity="0";
    var r=seg(p,.93,1);R.forEach(function(e,k){var v=Math.max(0,Math.min(1,r*1.6-k*.3));e.setAttribute("rx",(10+v*60).toFixed(1));e.setAttribute("ry",(3+v*12).toFixed(1));e.style.opacity=(b*v*(1-v*.6)).toFixed(3)});
    var W=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    T.forEach(function(t,k){t.style.opacity=(b*(k===0?1:seg(p,W[k][0],W[k][0]+.03))*(k===3?1:(1-seg(p,W[k][1]-.03,W[k][1])))).toFixed(3)});
  };
}
