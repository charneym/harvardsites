/* the story scene (BL/BY/DB): ONE engraved figure of what Vedette addresses, from the firm's own site (pretectdevices.com).
   No sensing method is shown, because the firm does not publish one. Left, a newborn's forearm and hand in outline with an
   IV cannula taped to the back of the hand and its line running away. Right, a magnified view under the skin: the catheter
   sits in a hair-thin vein and the infusion flows. Below, a panel contrasting occasional visual checks with continuous
   monitoring. 1 Access: hand, line and magnifier draw in; infusion flows. 2 Leak: fluid escapes into the tissue around the
   vein. 3 Watch: the intermittent check marks give way to a continuous trace. 4 Alert: an early alert on the trace, well
   before the point where injury would become visible. */
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true"><defs><clipPath id="lens"><circle cx="575" cy="210" r="148"/></clipPath>'+
    '<radialGradient id="leakG"><stop offset="0" stop-color="#9396fb" stop-opacity=".5"/><stop offset="1" stop-color="#9396fb" stop-opacity="0"/></radialGradient></defs>';
  /* forearm and open hand of a newborn, palm down, fingers to the upper right; the cannula taped to the back of the hand */
  var ax=.85,ay=-.527,nx=.527,ny=.85,W=[206,396],SC=1.32;
  function P(px,py){return px.toFixed(1)+" "+py.toFixed(1)}
  function at(o,ta,tn){ta*=SC;tn*=SC;return [o[0]+ax*ta+nx*tn,o[1]+ay*ta+ny*tn]}
  function cap(b,ang,len,hw){len*=SC;hw*=SC;var c=Math.cos(ang),sn=Math.sin(ang),dx=ax*c-ay*sn,dy=ax*sn+ay*c,px=-dy,py=dx,
    b1=[b[0]+px*hw,b[1]+py*hw],b2=[b[0]-px*hw,b[1]-py*hw],t1=[b1[0]+dx*len,b1[1]+dy*len],t2=[b2[0]+dx*len,b2[1]+dy*len];
    return "M"+P(b1[0],b1[1])+"L"+P(t1[0],t1[1])+"A"+hw+" "+hw+" 0 0 0 "+P(t2[0],t2[1])+"L"+P(b2[0],b2[1])}
  var r=Math.PI/180,K=at(W,92,0),a1=at(W,-190,-30),a2=at(W,-190,32),w1=at(W,0,-30),w2=at(W,0,32),k1=at(K,0,-40),k2=at(K,0,40),tb=at(W,40,40);
  var arm="M"+P(a1[0],a1[1])+"L"+P(w1[0],w1[1])+"Q"+P(at(W,50,-40)[0],at(W,50,-40)[1])+" "+P(k1[0],k1[1])+"M"+P(a2[0],a2[1])+"L"+P(w2[0],w2[1])+"Q"+P(at(W,24,38)[0],at(W,24,38)[1])+" "+P(tb[0],tb[1])+"M"+P(k2[0],k2[1])+"Q"+P(at(W,70,44)[0],at(W,70,44)[1])+" "+P(at(W,54,44)[0],at(W,54,44)[1]);
  var fing="",F=[[-30,-9,50],[-10,-3,58],[10,4,55],[30,11,44]];
  F.forEach(function(f){fing+=cap(at(K,-4,f[0]),f[1]*r,f[2],9.5)});
  var thumb=cap(at(W,46,36),52*r,40,10.5);
  var crease="M"+P(at(K,-6,-38)[0],at(K,-6,-38)[1])+"Q"+P(at(K,4,0)[0],at(K,4,0)[1])+" "+P(at(K,-6,38)[0],at(K,-6,38)[1]);
  var H=at(W,44,-4),T=function(ta,tn){var q=at(H,ta,tn);return P(q[0],q[1])};
  g+='<g id="scBase">';
  g+='<path class="fig" d="'+arm+'"/><path class="fig" d="'+fing+'"/><path class="fig" d="'+thumb+'"/><path class="fig fine" d="'+crease+'"/>';
  g+='<path class="tube" d="M'+T(-10,-6)+'C'+T(-70,-60)+' 150 176 104 158C72 146 46 140 14 138"/>';
  g+='<path class="tape" d="M'+T(-24,-20)+'L'+T(24,-20)+'L'+T(24,20)+'L'+T(-24,20)+'Z"/><path class="tapeh" d="M'+T(-14,-20)+'L'+T(-14,20)+'M'+T(0,-20)+'L'+T(0,20)+'M'+T(14,-20)+'L'+T(14,20)+'"/>';
  g+='<path class="hub" d="M'+T(-14,-7)+'L'+T(8,-7)+'L'+T(8,7)+'L'+T(-14,7)+'Z"/>';
  /* magnifier: skin, tissue, the vein and the catheter inside it */
  g+='<circle class="ring" cx="575" cy="210" r="148"/>';
  g+='<g clip-path="url(#lens)"><path class="skin" d="M420 112Q575 100 730 112"/><path class="lay" d="M420 142Q575 132 730 142"/><path class="lay" d="M420 326Q575 320 730 326"/>'+
     '<path class="vein" d="M420 232C520 226 630 228 730 234M420 268C520 264 630 266 730 272"/>'+
     '<path class="cath" d="M452 66L556 246"/><path class="cath2" d="M452 66L556 246"/>';
  var drops='';for(var i=0;i<14;i++)drops+='<circle class="drop" r="3.2" cx="0" cy="'+(244+(i%3)*8)+'"/>';
  g+='<g id="flow">'+drops+'</g>';
  g+='<g id="leak"><ellipse class="cloud" id="cloud" cx="600" cy="214" rx="90" ry="62" fill="url(#leakG)"/>';
  var lk='',L=[[570,206],[592,192],[616,200],[640,212],[604,180],[584,222],[628,186],[652,196],[560,190],[612,224],[636,232],[596,206],[662,214],[548,212],[620,170],[578,176]];
  L.forEach(function(q){lk+='<circle class="lk" r="2.6" cx="'+q[0]+'" cy="'+q[1]+'"/>'});
  g+=lk+'</g></g>';
  g+='<text x="'+(mob?444:452)+'" y="'+(mob?96:88)+'" class="t r">'+(mob?"":"SKIN")+'</text><text x="704" y="'+(mob?300:292)+'" class="t r" text-anchor="end">'+(mob?"":"VEIN")+'</text>';
  /* the checks panel */
  g+='<path class="pnl" d="M430 392H770V532H430Z M430 418H770"/>';
  g+='<text x="442" y="'+(mob?413:410)+'" class="t" id="pt0">'+(mob?"VISUAL CHECKS":"IV SITE · VISUAL CHECKS")+'</text>';
  var ticks='';for(var x=470;x<760;x+=58)ticks+='M'+x+' 452V490';
  g+='<path class="tick" id="ticks" d="'+ticks+'"/>';
  g+='<path class="base" d="M442 500H758"/>';
  g+='</g>';
  /* 1 access: leader lines from the cannula to the magnifier */
  g+='<g id="sc1"><path class="lead dr" d="M'+T(8,-7)+'L446 108M'+T(8,7)+'L440 290"/>'+
     '<text x="30" y="36" class="a">'+(mob?"ACCESS":"A HARD-WON LINE")+'</text></g>';
  /* 2 leak */
  g+='<g id="sc2"><text x="'+(mob?640:690)+'" y="'+(mob?176:170)+'" class="t al" text-anchor="'+(mob?"middle":"start")+'">'+(mob?"":"LEAK")+'</text>'+
     '<text x="30" y="36" class="a">'+(mob?"LEAK":"A QUIET LEAK")+'</text></g>';
  /* 3 watch: the continuous trace */
  g+='<g id="sc3"><text x="442" y="'+(mob?413:410)+'" class="t al">'+(mob?"VEDETTE":"VEDETTE · CONTINUOUS")+'</text><path class="trace" id="trace" d=""/>'+
     '<text x="30" y="36" class="a">'+(mob?"WATCH":"MONITORED, CONTINUOUSLY")+'</text></g>';
  /* 4 alert, ahead of visible injury */
  g+='<g id="sc4"><path class="mk dr" d="M600 428V500"/><path class="tri" d="M600 430l7 12h-14Z"/>'+
     '<text x="612" y="442" class="t al">'+(mob?"ALERT":"EARLY ALERT")+'</text>'+
     '<path class="ghost" d="M732 428V500"/><text x="'+(mob?758:758)+'" y="'+(mob?524:523)+'" class="t" text-anchor="end">'+(mob?"INJURY":"VISIBLE INJURY")+'</text>'+
     '<text x="30" y="36" class="a">'+(mob?"ALERT":"CAUGHT BEFORE INJURY")+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .fig, #scBase .tube, #scBase .ring, #scBase .skin, #scBase .lay, #scBase .vein, #scBase .cath"),fade:$$("#scBase .pnl, #scBase .base, #scBase .tape, #scBase .tapeh, #scBase .hub, #scBase .cath2, #scBase > text, #flow",svg),
    g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),g4:$("#sc4",svg),d1:dl("#sc1 .dr"),d4:dl("#sc4 .dr"),
    drops:$$("#flow circle",svg),leak:$("#leak",svg),cloud:$("#cloud",svg),lks:$$("#leak .lk",svg),ticks:$("#ticks",svg),pt0:$("#pt0",svg),trace:$("#trace",svg),
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function trace(p,s3,s4){var d="",x0=442,x1=758,ph=p*30,xe=x0+(x1-x0)*Math.max(.02,s3);
    for(var x=x0;x<=xe;x+=3){var u=(x-x0)/(x1-x0),rise=Math.pow(Math.max(0,(u-.42)/.58),1.6);
      var y=486-2.2*Math.sin(x*.21+ph)-1.4*Math.sin(x*.067+ph*.6)-30*rise;d+=(x===x0?"M":"L")+x+" "+y.toFixed(1)}
    return d}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    E.g1.style.opacity=(b*Math.max(s1,.55)*(1-.6*s2)).toFixed(3);draw(E.d1,Math.max(s1,.55));
    E.g2.style.opacity=(b*s2).toFixed(3);
    E.g3.style.opacity=(b*(s3>0?1:0)).toFixed(3);
    E.g4.style.opacity=(b*(s4>0?1:0)).toFixed(3);draw(E.d4,s4);
    /* infusion drops travel along the vein */
    E.drops.forEach(function(c,i){var x=420+((i*24+p*1400)%320);c.setAttribute("cx",x.toFixed(1))});
    /* the leak: the cloud swells, droplets drift out from the catheter tip */
    E.leak.style.opacity=(b*s2).toFixed(3);
    E.cloud.setAttribute("rx",(30+62*s2).toFixed(1));E.cloud.setAttribute("ry",(20+44*s2).toFixed(1));
    E.lks.forEach(function(c,i){var k=Math.min(1,Math.max(0,s2*1.5-(i%6)*.08));var ox=556,oy=244,tx=+c.getAttribute("cx"),ty=+c.getAttribute("cy");
      c.setAttribute("transform","translate("+((ox-tx)*(1-k)).toFixed(1)+" "+((oy-ty)*(1-k)).toFixed(1)+")");c.style.opacity=k.toFixed(3)});
    /* visual checks give way to the continuous trace */
    E.ticks.style.opacity=(b*(1-s3)).toFixed(3);E.pt0.style.opacity=(b*(1-s3)).toFixed(3);
    E.trace.setAttribute("d",trace(p,s3,s4));
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s2).toFixed(3);
    E.t[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.t[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.t[3].style.opacity=I(s4).toFixed(3);
  };
}
