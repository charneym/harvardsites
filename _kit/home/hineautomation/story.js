/* The story scene (DB): a Hine Star System load lock in plan view, as hineautomation.com describes it ("automated load locks
   designed to eliminate the need to vent and evacuate the OEM's process chamber prior to every process cycle"), drawn in fine line.
   Left: the atmosphere side and the load lock with its access door; middle: the slit valve; right: the round process chamber
   with its chuck; below the lock: the vacuum pump and the pressure readout.
   Step 1 (Load): the door swings open and the wafer slides onto the end effector inside the lock, at 760 Torr.
   Step 2 (Pump down): the door closes, the pump runs, the readout falls to 1 × 10⁻³ Torr (mechanical pump, per the SL spec).
   Step 3 (Transfer): the slit valve opens and the linear drive carries the wafer onto the chuck; the chamber never vents.
   Frame 0 is complete. Labels sit clear of every stroke and of the wafer's path (DR). Scrubbed progress. */
function f1(v){return v.toFixed(1)}
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'24 120 696 400':'20 116 700 404')+'" aria-hidden="true">';
  /* the lock's air: a pale tint that empties as the lock is pumped */
  g+='<path id="lkA" class="lka" d="M172 202H368V398H172Z"/>';
  /* load lock walls: a door opening on the left, the slit opening on the right */
  g+='<path class="wl sD" d="M160 246V190H380V246M380 354V410H160V354"/>';
  g+='<path class="wo sD" d="M172 246V202H368V246M368 354V398H172V354"/>';
  /* the slit valve body and its gate */
  g+='<path class="wl sD" d="M380 238H404V362H380Z"/>';
  g+='<path id="gate" class="gate" d="M386 246H398V354H386Z"/>';
  /* the tunnel into the process chamber, and the chamber with its chuck */
  g+='<path class="wl sD" d="M404 246H437.3M404 354H437.3"/>';
  g+='<path class="wl sD" d="M437.3 246A140 140 0 1 1 437.3 354"/>';
  g+='<path class="wo sD" d="M449.7 246A128 128 0 1 1 449.7 354"/>';
  g+='<circle id="chuck" class="ck" cx="566" cy="300" r="62"/>';
  /* the pump, under the lock */
  g+='<path class="wo sD" d="M200 410V440"/><circle class="el sD" cx="200" cy="462" r="22"/><path class="el sD" d="M188 474L200 450L212 474Z"/>';
  g+='<g id="pflow">'+[0,1,2].map(function(){return '<circle class="cr" cx="200" cy="414" r="3"/>'}).join("")+'</g>';
  /* the linear drive's end effector, and the wafer on it */
  g+='<path id="arm" class="arm" d="M180 294H270M180 306H270"/>';
  g+='<g id="wf"><circle class="wf" cx="0" cy="0" r="46"/><circle class="wfi" cx="0" cy="0" r="38"/><path class="wfn" d="M-4 45.8L0 41.5L4 45.8"/></g>';
  /* the access door, hinged at the top of the opening */
  g+='<path id="door" class="door" d="M160 246V354"/>';
  /* labels, each with clear space around it */
  g+='<text class="t" x="160" y="174">LOAD LOCK</text>';
  g+='<text class="t" x="410" y="160" text-anchor="middle">SLIT VALVE</text><path class="ld sD" d="M392 168V232"/>';
  g+='<text class="t" x="566" y="136" text-anchor="middle">PROCESS CHAMBER</text>';
  g+='<text class="t" x="40" y="400">'+(mob?'AIR':'ATMOSPHERE')+'</text>';
  g+='<text class="t" x="232" y="467">PUMP</text>';
  g+='<text id="rd" class="a rd" x="380" y="440" text-anchor="end">760 TORR</text>';
  g+='<text class="t" x="566" y="470" text-anchor="middle">'+(mob?'VACUUM':'ALWAYS UNDER VACUUM')+'</text>';
  var ly=508,lx=40;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'LOAD AT ATMOSPHERE':'1 · LOAD: DOOR OPEN, AT ATMOSPHERE')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PUMP THE LOCK DOWN':'2 · PUMP DOWN: DOOR SHUT, LOCK EVACUATED')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'TRANSFER TO THE CHUCK':'3 · TRANSFER: SLIT VALVE OPEN, WAFER IN')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),door:$("#door",svg),gate:$("#gate",svg),wf:$("#wf",svg),arm:$("#arm",svg),lk:$("#lkA",svg),ck:$("#chuck",svg),
    rd:$("#rd",svg),dots:$$("#pflow circle",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,lastR="";
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=sm(seg(p,.02,.1))*(1-sm(seg(p,.31,.37))),s2=sm(seg(p,.36,.44))*(1-sm(seg(p,.64,.7))),s3=sm(seg(p,.68,.76));
    /* door: open through step 1, shut at the start of step 2 */
    var dOpen=sm(seg(p,.03,.1))*(1-sm(seg(p,.36,.44)));
    E.door.setAttribute("transform","rotate("+f1(115*dOpen)+" 160 246)");op(E.door,b);
    /* wafer: from the atmosphere side onto the effector (step 1), then through the slit valve onto the chuck (step 3) */
    var k1=sm(seg(p,.1,.28)),k3=sm(seg(p,.76,.94));
    var wx=92+(270-92)*k1+(566-270)*k3;
    E.wf.setAttribute("transform","translate("+f1(wx)+" 300)");op(E.wf,b);
    var ax=Math.max(270,wx);E.arm.setAttribute("d","M180 294H"+f1(ax)+"M180 306H"+f1(ax));op(E.arm,b);
    /* the gate: shut until step 3, then open (it reads as an outline) */
    var gO=sm(seg(p,.7,.76));E.gate.style.fillOpacity=(1-gO).toFixed(3);op(E.gate,b);
    /* pressure: the lock's air empties while the pump runs */
    var pk=sm(seg(p,.45,.64));E.lk.style.opacity=((1-pk)*b).toFixed(3);
    var r=pk<.25?"760 TORR":pk<.5?"10 TORR":pk<.75?"0.1 TORR":"1 × 10⁻³ TORR";if(r!==lastR){lastR=r;E.rd.textContent=r}op(E.rd,b);
    var run=sm(seg(p,.44,.48))*(1-sm(seg(p,.62,.66))),ph=(p*14)%1;
    E.dots.forEach(function(c,i){var k=(i/3+ph)%1;c.setAttribute("cy",f1(412+k*26));op(c,run*b*Math.min(1,Math.min(k,1-k)*6))});
    /* the chuck lights when the wafer arrives */
    E.ck.classList.toggle("on",k3>.98);
    op(E.l1,b*s1);op(E.l2,b*s2);op(E.l3,b*s3);
  };
}
