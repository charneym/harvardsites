/* The story scene (DB): how a Nanofiber Solutions vascular graft is made and how it behaves, drawn as ONE continuous
   engraved scene and scrubbed by the pinned story. Top band: a spinneret draws a whipping polymer jet down onto a
   rotating mandrel, and a nonwoven of fibers builds up into a tube. Step 2: the wall is corrugated (ribs appear along the
   tube) and the graft is implanted in a U between an artery and a vein, as in the company's ovine studies. Step 3: host
   cells line the graft as the scaffold resorbs. Sources: nanofibersolutions.com/technology; Matsushita, Inoue, ...,
   Nelson, Johnson, Hibino, "Corrugated nanofiber tissue-engineered vascular graft to prevent kinking for arteriovenous
   shunts in an ovine model", JVS Vasc Sci 1:100-108 (2020): electrospun PCL/PLCL, 5 mm ID, U-shape carotid artery to
   external jugular vein, 87.5% patency (7 of 8 grafts), no significant kinking, endothelial cells at one month. */
var SCW=760,SCH=548;
var TX0=96,TX1=664,TY0=150,TY1=212,MY=181;
var UL=246,UR=514,UT=330,UB=470,URAD=74,UW=13;
function uPath(){ /* centreline of the inverted U graft, sampled */
  var P=[],i,a;
  for(i=0;i<=20;i++)P.push([UL,UB-(UB-UT-URAD)*i/20]);
  for(i=1;i<=24;i++){a=Math.PI-Math.PI/2*i/24;P.push([UL+URAD+URAD*Math.cos(a),UT+URAD-URAD*Math.sin(a)])}
  for(i=1;i<=20;i++)P.push([UL+URAD+(UR-UL-2*URAD)*i/20,UT]);
  for(i=1;i<=24;i++){a=Math.PI/2-Math.PI/2*i/24;P.push([UR-URAD+URAD*Math.cos(a),UT+URAD-URAD*Math.sin(a)])}
  for(i=1;i<=20;i++)P.push([UR,UT+URAD+(UB-UT-URAD)*i/20]);
  return P}
function offs(P,k){var f=function(n){return (+n).toFixed(1)};return P.map(function(p,i){var a=P[Math.max(0,i-1)],b=P[Math.min(P.length-1,i+1)],dx=b[0]-a[0],dy=b[1]-a[1],L=Math.hypot(dx,dy)||1;
  return (i?"L":"M")+f(p[0]-dy/L*k)+" "+f(p[1]+dx/L*k)}).join("")}
function memScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i,x,y;
  var R=(function(){var s=11;return function(){s=(s*16807)%2147483647;return s/2147483647}})();
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="tubeclip"><rect x="'+TX0+'" y="'+TY0+'" width="'+(TX1-TX0)+'" height="'+(TY1-TY0)+'"/></clipPath></defs>';
  g+='<g id="scBase">';
  g+='<path class="frm sD" d="M20 22H740"/><path class="frm sD" d="M20 268H740"/>';
  g+='<text class="t" x="20" y="48">ELECTROSPINNING · PCL / PLCL BLEND</text>';
  g+='<text class="t tr" x="740" y="48">ROTATING MANDREL</text>';
  /* the spinneret: syringe barrel, needle, Taylor cone */
  g+='<path class="bl sD" d="M426 22V60H454V22"/><path class="bb sD" d="M440 60V96"/><path class="bb sD" d="M434 96L440 108L446 96Z"/>';
  /* mandrel and its axis */
  g+='<path class="bl sD" d="M30 '+(MY-4)+'H730M30 '+(MY+4)+'H730"/>';
  g+='<path class="tick sD" d="M30 '+(MY-14)+'v28M730 '+(MY-14)+'v28"/>';
  g+='<path class="bl sD" d="M706 '+(MY-30)+'a14 30 0 0 1 0 60"/><path class="bl sD" d="M700 '+(MY+26)+'l6 4l-2 -7"/>';
  /* the two vessels the graft will join (drawn from the start, so the frame is never half empty) */
  g+='<path class="ves sD" d="M20 '+(UB+4)+'H'+(UL+UW+20)+'M20 '+(UB+30)+'H'+(UL+UW+20)+'"/>';
  g+='<path class="ves sD" d="M'+(UR-UW-20)+' '+(UB+4)+'H740M'+(UR-UW-20)+' '+(UB+30)+'H740"/>';
  g+='<text class="t" x="20" y="'+(UB+56)+'">CAROTID ARTERY</text><text class="t tr" x="740" y="'+(UB+56)+'">JUGULAR VEIN</text>';
  g+='</g>';
  /* the whipping jet: a widening helix from the cone down to the tube */
  g+='<g id="scJet"><path class="jet" d="';
  for(i=0;i<=160;i++){var tt=i/160;y=108+tt*(TY0-108);x=440+Math.sin(tt*Math.PI*9)*tt*tt*120;g+=(i?"L":"M")+f(x)+" "+f(y)}
  g+='"/></g>';
  /* the tube outline and its nonwoven of fibers */
  g+='<g id="scTube"><path class="bb tb" d="M'+TX0+' '+TY0+'H'+TX1+'M'+TX0+' '+TY1+'H'+TX1+'"/><path class="bl tb" d="M'+TX0+' '+TY0+'a8 '+((TY1-TY0)/2)+' 0 0 0 0 '+(TY1-TY0)+'M'+TX1+' '+TY0+'a8 '+((TY1-TY0)/2)+' 0 0 1 0 '+(TY1-TY0)+'"/>';
  g+='<g clip-path="url(#tubeclip)">';
  for(i=0;i<150;i++){var cx=TX0+R()*(TX1-TX0),cy=TY0+R()*(TY1-TY0),an=(R()-.5)*2.6,L=40+R()*90;
    var dx=Math.cos(an)*L,dy=Math.sin(an)*L,bx=(R()-.5)*30;
    g+='<path class="hat" d="M'+f(cx-dx)+' '+f(cy-dy)+'Q'+f(cx+bx)+' '+f(cy-bx*.4)+' '+f(cx+dx)+' '+f(cy+dy)+'"/>'}
  g+='</g></g>';
  /* ribs: the corrugated wall */
  g+='<g id="scRib">';
  for(x=TX0+12;x<TX1-6;x+=13){g+='<path class="rib" d="M'+x+' '+(TY0-3)+'q7 '+((TY1-TY0)/2+3)+' 0 '+(TY1-TY0+6)+'"/>'}
  g+='</g>';
  /* the implanted U: artery on the left, vein on the right, the graft as a ribbed inverted U between them */
  var P=uPath();
  g+='<g id="scU">';
  g+='<text class="t" x="20" y="292">IMPLANTED IN A U · ARTERY TO VEIN</text>';
  g+='<path class="gap" d="M'+(UL-UW+1)+' '+(UB+4)+'H'+(UL+UW-1)+'M'+(UR-UW+1)+' '+(UB+4)+'H'+(UR+UW-1)+'"/>';
  g+='<path class="bb sD" d="'+offs(P,UW)+'"/><path class="bb sD" d="'+offs(P,-UW)+'"/>';
  for(i=2;i<P.length-2;i+=2){var a=P[i-1],b=P[i+1],ddx=b[0]-a[0],ddy=b[1]-a[1],LL=Math.hypot(ddx,ddy)||1,nx=-ddy/LL,ny=ddx/LL;
    g+='<path class="urib" data-i="'+i+'" d="M'+f(P[i][0]+nx*(UW+3))+' '+f(P[i][1]+ny*(UW+3))+'L'+f(P[i][0]-nx*(UW+3))+' '+f(P[i][1]-ny*(UW+3))+'"/>'}
  g+='</g>';
  /* host cells along the lumen */
  g+='<g id="scCell">';
  for(i=3;i<P.length-3;i+=3){var a2=P[i-1],b2=P[i+1],an2=Math.atan2(b2[1]-a2[1],b2[0]-a2[0])*180/Math.PI,sd=(i/3)%2?1:-1,a3=P[i-1],b3=P[i+1],dx3=b3[0]-a3[0],dy3=b3[1]-a3[1],L3=Math.hypot(dx3,dy3)||1;
    g+='<ellipse class="cel" data-i="'+i+'" cx="'+f(P[i][0]-dy3/L3*sd*6.5)+'" cy="'+f(P[i][1]+dx3/L3*sd*6.5)+'" rx="7" ry="2.6" transform="rotate('+f(an2)+' '+f(P[i][0]-dy3/L3*sd*6.5)+' '+f(P[i][1]+dx3/L3*sd*6.5)+')"/>'}
  g+='</g>';
  g+='<g id="lb1"><text class="a" x="20" y="252">A NONWOVEN OF FIBERS BUILDS THE GRAFT WALL</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="252">RIBBED WALL · BENDS WITHOUT KINKING</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="252">CELLS LINE THE GRAFT AS THE SCAFFOLD RESORBS</text></g>';
  g+='<g id="lb4"><text class="a tr" x="740" y="'+(UT+6)+'">'+(o.mob?'7 OF 8 OPEN':'7 OF 8 GRAFTS OPEN')+'</text><text class="t tr" x="740" y="'+(UT+28)+'">'+(o.mob?'1 MONTH · OVINE':'AT ONE MONTH · OVINE')+'</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),
    jet:dl("#scJet .jet"),tube:dl("#scTube .tb"),hat:$$(".hat",svg),rib:$$(".rib",svg),
    u:dl("#scU .sD"),uTx:$$("#scU text",svg),urib:$$(".urib",svg),gap:$$(".gap",svg),cel:$$(".cel",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    draw(E.base,b);
    /* step 1: jet and fibers */
    var jet=seg(p,0,.1),spin=seg(p,.04,.3),jetOut=seg(p,.36,.46);
    draw(E.jet,jet);E.jet.forEach(function(a){op(a[0],b*(1-jetOut))});
    draw(E.tube,seg(p,.02,.16));
    var res=seg(p,.74,.94);
    E.hat.forEach(function(hh,i){op(hh,b*Math.min(1,Math.max(0,spin*1.5-(i/E.hat.length)*.5))*(1-.7*res))});
    /* step 2: ribs along the tube, then the implanted U draws in */
    var rib=seg(p,.36,.52);
    E.rib.forEach(function(r,i){op(r,b*Math.min(1,Math.max(0,rib*1.6-(i/E.rib.length)*.6)))});
    var uin=seg(p,.42,.62);
    draw(E.u,uin);
    E.uTx.forEach(function(el){op(el,b*uin)});E.gap.forEach(function(el){op(el,b*uin)});
    E.urib.forEach(function(r,i){op(r,b*Math.min(1,Math.max(0,uin*1.7-(i/E.urib.length)*.7)))});
    /* step 3: cells line the lumen */
    var cel=seg(p,.7,.9);
    E.cel.forEach(function(c,i){op(c,b*Math.min(1,Math.max(0,cel*1.8-(i/E.cel.length)*.8)))});
    op(E.l1,b*seg(p,.1,.18)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.74,.82));
    op(E.l4,b*seg(p,.84,.94));
  };
}
