/* the story scene (DB): ONE engraved schematic of a chirped (dispersive) mirror, the technology UFI's founders pioneered.
   Step 1 a stretched, chirped pulse (red leading, blue trailing) travels down the incoming beam; step 2 the multilayer coating
   draws in, layers thickening with depth, on its substrate; step 3 the pulse enters and each colour turns back at its own depth
   (blue near the surface, red deepest); step 4 a short, compressed pulse leaves along the reflected beam. */
var CH=[[226,74,52],[238,122,56],[236,178,72],[132,196,120],[92,160,236],[118,112,236]];
function pk(len,cyc,chirp,amp,n){
  /* a wave packet travelling along +x from 0 to len, split into coloured pieces; with a chirp its front (high x) is red and
     low in frequency and its tail blue and high: returns [[d,colourIndex],...] */
  var out=[],seg=Math.max(1,Math.round(120/n));
  for(var k=0;k<n;k++){var d='';for(var i=0;i<=seg;i++){var x=(k+i/seg)/n,u=(x-.5)*2,env=Math.exp(-u*u*2.6),
      ph=2*Math.PI*cyc*(x*(1+chirp)-chirp*x*x),y=-amp*env*Math.sin(ph);d+=(i?'L':'M')+(x*len).toFixed(1)+' '+y.toFixed(1)}
    out.push([d,Math.min(CH.length-1,Math.floor((1-(k+.5)/n)*CH.length))])}
  return out;
}
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  var HX=540,HY=290;
  var a1=Math.atan2(HY-118,HX-70),a2=Math.atan2(452-HY,70-HX);
  g+='<defs><linearGradient id="ufiSub" x1="0" x2="1"><stop offset="0" stop-color="rgba(240,242,246,.10)"/><stop offset="1" stop-color="rgba(240,242,246,.02)"/></linearGradient></defs>';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  /* incoming and reflected beam axes, and the mirror surface */
  g+='<path class="sD bm" d="M70 118L'+HX+' '+HY+'"/><path class="sD bm" d="M'+HX+' '+HY+'L70 452"/>';
  g+='<path class="sD kb" d="M'+HX+' 96V484"/>';
  g+='<g class="tb"><text x="24" y="540" class="t">DISPERSIVE MIRROR · SCHEMATIC</text></g>';
  g+='</g>';
  /* the multilayer stack: alternating high/low index layers, thicker with depth, then the substrate */
  var L='',x=HX,w=4,i=0;while(x<700){L+='<rect class="ly'+(i%2?" lo":" hi")+'" x="'+x.toFixed(1)+'" y="96" width="'+w.toFixed(1)+'" height="388"/>';x+=w;w*=1.075;i++}
  g+='<g id="sc2"><g id="lys">'+L+'</g><rect class="sub" x="'+x.toFixed(1)+'" y="96" width="'+(770-x).toFixed(1)+'" height="388" fill="url(#ufiSub)"/>'+
     '<text x="'+HX+'" y="510" class="t">COATING</text><text x="770" y="510" text-anchor="end" class="t">SUBSTRATE</text></g>';
  /* the incoming chirped pulse, drawn along the incoming beam */
  var P1=pk(250,9,.9,26,18);
  g+='<g id="pin" transform="translate(70 118) rotate('+(a1*180/Math.PI).toFixed(2)+')"><g id="pin2">'+P1.map(function(p){return '<path class="wv" stroke="rgb('+CH[p[1]].join(",")+')" d="'+p[0]+'"/>'}).join("")+'</g></g>';
  /* step 3: each colour turns back at its own depth */
  var dep=[690,668,642,614,588,566],pen='';
  CH.forEach(function(c,k){var y0=HY-30+k*4.5,y1=HY+30-k*4.5;pen+='<path class="pn dr" stroke="rgb('+c.join(",")+')" d="M'+HX+' '+y0.toFixed(1)+'L'+dep[k]+' '+(HY-1+k*.4).toFixed(1)+'L'+HX+' '+y1.toFixed(1)+'"/>'});
  g+='<g id="sc3">'+pen+'</g>';
  /* step 4: the compressed pulse along the reflected beam */
  var P2=pk(120,3.2,0,34,6);
  g+='<g id="pout" transform="translate('+HX+' '+HY+') rotate('+(a2*180/Math.PI).toFixed(2)+')"><g id="pout2">'+P2.map(function(p){return '<path class="wv w2" d="'+p[0]+'"/>'}).join("")+'</g></g>';
  g+='<circle id="spot" cx="'+HX+'" cy="'+HY+'" r="6" class="spot"/>';
  /* step captions */
  g+='<text id="cap1" x="40" y="58" class="a">A CHIRPED PULSE ARRIVES</text>';
  g+='<text id="cap2" x="40" y="58" class="a">A MULTILAYER COATING</text>';
  g+='<text id="cap3" x="40" y="58" class="a">RED TRAVELS DEEPEST</text>';
  g+='<text id="cap4" x="40" y="58" class="a">A COMPRESSED PULSE LEAVES</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var Lg=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=Lg+" "+Lg;return [p,Lg]})};
  var HX=540,HY=290,len1=Math.hypot(HX-70,HY-118),len2=Math.hypot(HX-70,452-HY);
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb",svg),lys:$$("#lys rect",svg),g2:$("#sc2",svg),
    pin:$("#pin2",svg),pout:$("#pout2",svg),g3:$("#sc3",svg),d3:dl("#sc3 .dr"),spot:$("#spot",svg),
    cap:[$("#cap1",svg),$("#cap2",svg),$("#cap3",svg),$("#cap4",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    /* step 1: the chirped pulse slides down the incoming beam; in step 3 it runs into the mirror and is gone */
    var tr=(.06+.22*s1+.2*s2+.4*s3)*len1;
    E.pin.setAttribute("transform","translate("+tr.toFixed(1)+" 0)");
    E.pin.style.opacity=(b*Math.max(s1,.35)*(1-s3)).toFixed(3);
    /* step 2: the layers rise in, surface first */
    var n=E.lys.length;E.lys.forEach(function(r,k){var q=Math.max(0,Math.min(1,s2*1.6-k/n*.6));r.style.opacity=(b*(.15+.85*q)).toFixed(3)});
    E.g2.style.opacity=b.toFixed(3);
    /* step 3: each colour goes in to its own depth and back */
    E.g3.style.opacity=(b*(s3>0?1:0)*(1-.55*s4)).toFixed(3);draw(E.d3,s3);
    E.spot.style.opacity=(b*(.25+.75*Math.max(s3*(1-s4),s4*.6))).toFixed(3);
    /* step 4: the short pulse leaves */
    E.pout.setAttribute("transform","translate("+((.12+.5*s4)*len2).toFixed(1)+" 0)");
    E.pout.style.opacity=(b*s4).toFixed(3);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.cap[0].style.opacity=(b*O(s2)).toFixed(3);E.cap[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.cap[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.cap[3].style.opacity=I(s4).toFixed(3);
  };
}
