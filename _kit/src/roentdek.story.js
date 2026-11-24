/* The story scene (DB/BL): how a RoentDek delay-line detector works (roentdek.com, Detectors: MCPs combined with delay-line
   anodes give the time of flight and position of impact; HEX adds multi-hit with virtually zero dead time), drawn in
   fine line as ONE detector seen from above: the square delay-line anode with its x and y wire layers, the MCP disc in
   its copper ring, four signal ends with their terminals.
   Frame 0 is complete: anode, wires, MCP and ring, terminals.
   Step 1 (impact): the hit lands and its charge cloud spreads.
   Step 2 (signals): pulses run from the hit along the x and y layers to both ends (the nearer ends first) and on to the terminals.
   Step 3 (readout): the terminals register, a crosshair fixes the position of impact.
   Everything is driven by the scrubbed progress. No dash-drawn path uses non-scaling-stroke (DR.4). */
var HX=446,HY=226;
function f1(v){return v.toFixed(1)}
function storyScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'96 40 568 524':'24 24 736 536')+'" aria-hidden="true">';
  /* the anode holder and its two wire layers */
  g+='<path class="sPl sD" d="M200 100H560V460H200Z"/>';
  var wx='',wy='';for(i=0;i<25;i++){var q=114+i*14;wx+='M206 '+q+'H554';wy+='M'+(q+100)+' 106V454'}
  g+='<path class="wx" d="'+wx+'"/><path class="wy" d="'+wy+'"/>';
  /* the MCP disc over the anode, in its copper ring */
  g+='<circle class="sMcp" cx="380" cy="280" r="148"/>';
  g+='<path class="sCu sD" d="M380 116A164 164 0 1 1 379.9 116Z"/><path class="sCu2 sD" d="M380 132A148 148 0 1 1 379.9 132Z"/>';
  /* the four terminals */
  var T=[[142,HY],[618,HY],[HX,72],[HX,504]];
  T.forEach(function(p,j){g+='<rect class="sTm" id="tm'+j+'" x="'+(p[0]-8)+'" y="'+(p[1]-8)+'" width="16" height="16"/>'});
  /* the charge cloud and the hit */
  g+='<g id="scCl"><circle class="sRing" cx="'+HX+'" cy="'+HY+'" r="20"/><circle class="sRing" cx="'+HX+'" cy="'+HY+'" r="34"/></g>';
  /* the signals: from the hit to both ends of each layer and on to the terminals */
  g+='<g id="scSg"><path class="sSig" d="M'+HX+' '+HY+'H200H150"/><path class="sSig" d="M'+HX+' '+HY+'H560H610"/><path class="sSig" d="M'+HX+' '+HY+'V100V80"/><path class="sSig" d="M'+HX+' '+HY+'V460V496"/></g>';
  g+='<g id="scPu"><circle class="sPu" r="4.5"/><circle class="sPu" r="4.5"/><circle class="sPu" r="4.5"/><circle class="sPu" r="4.5"/></g>';
  g+='<g id="scX"><path class="sX" d="M'+(HX-22)+' '+HY+'H'+(HX+22)+'M'+HX+' '+(HY-22)+'V'+(HY+22)+'"/><rect class="sXb" x="'+(HX-11)+'" y="'+(HY-11)+'" width="22" height="22"/></g>';
  g+='<circle id="scHit" class="sHit" cx="'+HX+'" cy="'+HY+'" r="5"/>';
  if(!mob){
    g+='<g id="lMc"><path class="ld" d="M275 385L190 482"/><text class="t" x="60" y="506">MICROCHANNEL PLATES</text></g>';
    g+='<g id="lAn"><path class="ld" d="M552 108L598 64"/><text class="t" x="606" y="60">DELAY-LINE ANODE</text></g>';
    g+='<g id="lXY"><text class="t o" x="122" y="231" text-anchor="end">X1</text><text class="t o" x="638" y="231">X2</text><text class="t o" x="428" y="77" text-anchor="end">Y1</text><text class="t o" x="428" y="509" text-anchor="end">Y2</text></g>';
  }else{g+='<g id="lMc"></g><g id="lAn"></g><g id="lXY"></g>'}
  var ly=mob?552:552,lx=mob?106:34;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'IMPACT ON THE MCP':'IMPACT: THE MCP AMPLIFIES ONE PARTICLE')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PULSES RUN TO BOTH ENDS':'PULSES RUN TO BOTH ENDS OF EACH LAYER')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'POSITION AND TIME':'DIFFERENCE: POSITION · SUM: TIME OF FLIGHT')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),sg:dl("#scSg path"),pu:$$("#scPu circle",svg),cl:$("#scCl",svg),rings:$$("#scCl circle",svg),hit:$("#scHit",svg),x:$("#scX",svg),
    tm:[0,1,2,3].map(function(j){return $("#tm"+j,svg)}),lMc:$("#lMc",svg),lAn:$("#lAn",svg),lXY:$("#lXY",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var MAXL=0;E.sg.forEach(function(a){MAXL=Math.max(MAXL,a[1])});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.3),s2=seg(p,.36,.64),s3=seg(p,.68,.92);
    /* 1: the hit lands, its charge cloud spreads (and fades as the signals leave) */
    op(E.hit,b*sm(s1/.35));
    var cr=sm(s1);E.rings.forEach(function(r,j){r.setAttribute("r",f1(6+cr*(j?34:20)))});
    op(E.cl,b*sm(s1/.5)*(1-.75*sm(s2/.5)));
    /* 2: pulses run at one speed, so the nearer ends are reached first */
    var dist=sm(s2)*MAXL;
    E.sg.forEach(function(a,j){var f=Math.min(1,dist/a[1]);a[0].style.strokeDashoffset=(a[1]*(1-f)).toFixed(1);
      var pt=a[0].getPointAtLength(a[1]*f),pu=E.pu[j];pu.setAttribute("cx",f1(pt.x));pu.setAttribute("cy",f1(pt.y));op(pu,b*(s2>0&&f<1?1:0));
      if(E.tm[j])E.tm[j].classList.toggle("on",f>=1)});
    op(E.$sg||(E.$sg=$("#scSg",svg)),b*(1-.45*sm(s3)));
    /* 3: the readout fixes the position of impact */
    op(E.x,b*sm(s3/.6));
    op(E.lMc,b*seg(p,.08,.16)*(1-seg(p,.28,.34)));op(E.lAn,b*seg(p,.08,.16)*(1-seg(p,.28,.34)));
    op(E.lXY,b*seg(p,.46,.54));
    op(E.l1,b*seg(p,.04,.12)*(1-seg(p,.28,.34)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.72,.8));
  };
}
