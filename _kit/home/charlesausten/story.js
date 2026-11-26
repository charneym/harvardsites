/* The story scene (BL/BY/DB): Charles Austen's own explanation of the diaphragm pump (charlesausten.com > Technologies,
   Medical pumps: "the pumping chamber is totally sealed ... vacuum and pressure are produced by the flexing of the
   diaphragm back and forth in the chamber"), drawn as ONE section kept on screen for all three steps. Scroll turns the
   eccentric on the motor shaft; the connecting rod flexes the diaphragm, the flap valves open in turn and gas moves.
   Step 1 (Intake): the down-stroke, inlet valve open, gas drawn in.
   Step 2 (Exhaust): the up-stroke, outlet valve open: vacuum on one port, pressure on the other.
   Step 3 (Sealed): the pump cycles on; the sealed chamber and diaphragm are traced in the accent (no sliding seal). */
var SCW=760,SCH=520;
var CAP={x0:150,x1:450,yh:140,yb:230,yd:238,cx:300,cy:410,r:22,D0:16};
function caScene(o){
  var g='',mob=o.mob,i,P=CAP;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<linearGradient id="caBd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1f2328" stop-opacity=".05"/><stop offset=".5" stop-color="#1f2328" stop-opacity=".02"/><stop offset="1" stop-color="#1f2328" stop-opacity=".04"/></linearGradient>'+
    '<pattern id="caHt" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V7" stroke="#b3bcc6" stroke-width="1"/></pattern></defs>';
  g+='<text class="t" x="20" y="30">'+(mob?"DIAPHRAGM PUMP":"DIAPHRAGM PUMP, IN SECTION")+'</text>';
  /* the head, with its two port channels */
  g+='<path class="body" d="M150 140H450V230H150Z"/>';
  g+='<rect class="chn" x="205.5" y="140" width="29" height="90"/><rect class="chn" x="365.5" y="140" width="29" height="90"/>';
  g+='<path class="edge sD" d="M150 140H450V230H150Z"/><path class="edge sD" d="M204.75 140V230M235.25 140V230M364.75 140V230M395.25 140V230"/>';
  /* pipes: a wall stroke and the bore over it */
  g+='<path class="pw" d="M40 90H220V141"/><path class="pw" d="M380 141V90H720"/>';
  g+='<path class="pi" d="M38 90H220V143"/><path class="pi" d="M380 143V90H722"/>';
  /* the crankcase below, with the motor shaft */
  g+='<path class="case" d="M150 238H450V484H150Z"/><path class="edge sD" d="M150 238V484H450V238"/>';
  g+='<circle class="hous" cx="300" cy="410" r="62"/>';
  /* the chamber (between head and diaphragm), the diaphragm, the rod and the eccentric: shaped per frame */
  g+='<path id="caCav" class="cav" d=""/>';
  g+='<path id="caSeal" class="seal" d=""/>';
  g+='<path id="caDia" class="dia" d=""/>';
  g+='<path id="caRod" class="rod" d=""/><rect id="caPl" class="pl" x="280" y="0" width="40" height="8"/>';
  g+='<circle id="caEc" class="ecc" cx="300" cy="388" r="30"/><circle class="sh" cx="300" cy="410" r="7"/><circle id="caEd" class="ed" cx="300" cy="388" r="2.6"/>';
  /* flap valves */
  g+='<path id="caVi" class="vl" d="M206 230H234"/><path id="caVo" class="vl" d="M366 142H394"/>';
  /* gas */
  g+='<g id="caGi"></g><g id="caGo"></g>';
  /* static labels */
  g+='<text class="t" x="40" y="62">INLET</text><text class="t" x="720" y="62" text-anchor="end">OUTLET</text>';
  g+='<text class="t" x="470" y="250">DIAPHRAGM</text><text class="t" x="470" y="414">ECCENTRIC</text>';
  /* step labels */
  g+='<g id="caL1"><text class="t s1" x="20" y="190">INLET</text><text class="t s1" x="20" y="'+(mob?212:208)+'">VALVE OPEN</text></g>';
  g+='<g id="caL2"><text class="t s1" x="470" y="160">OUTLET</text><text class="t s1" x="470" y="'+(mob?182:178)+'">VALVE OPEN</text><text class="t" x="40" y="130">VACUUM</text><text class="t" x="720" y="130" text-anchor="end">PRESSURE</text></g>';
  g+='<g id="caL3"><text class="t s1" x="470" y="310">'+(mob?"NO SLIDING":"NO SLIDING SEAL")+'</text>'+(mob?'<text class="t s1" x="470" y="332">SEAL</text>':'')+'</g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · INTAKE</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · EXHAUST</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · SEALED</text></g>';
  return g+'</svg>';
}
function scene(){return caScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var NS="http://www.w3.org/2000/svg",P=CAP,NG=7;
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  function dots(id){var gg=$(id,svg),a=[];for(var k=0;k<NG;k++){var c=document.createElementNS(NS,"circle");c.setAttribute("r","3.4");c.setAttribute("class","gas");gg.appendChild(c);a.push(c)}return a}
  var E={base:dl(".sD"),body:$(".body",svg),pw:$$(".pw,.pi,.chn,.case,.hous",svg),cav:$("#caCav",svg),seal:$("#caSeal",svg),dia:$("#caDia",svg),rod:$("#caRod",svg),pl:$("#caPl",svg),
    ec:$("#caEc",svg),ed:$("#caEd",svg),vi:$("#caVi",svg),vo:$("#caVo",svg),gi:dots("#caGi"),go:dots("#caGo"),
    L1:$("#caL1",svg),L2:$("#caL2",svg),L3:$("#caL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),txt:$$("text.t:not(.s1)",svg).filter(function(t){return !t.closest("g")})};
  /* gas paths (polyline, in order of flow) */
  var PI=[[30,90],[220,90],[220,226]],PO=[[380,226],[380,90],[730,90]];
  function along(pl,f){var L=0,s=[],k;for(k=1;k<pl.length;k++){var d=Math.hypot(pl[k][0]-pl[k-1][0],pl[k][1]-pl[k-1][1]);s.push(d);L+=d}
    var t=f*L;for(k=0;k<s.length;k++){if(t<=s[k]){var u=t/s[k];return [pl[k][0]+(pl[k+1][0]-pl[k][0])*u,pl[k][1]+(pl[k+1][1]-pl[k][1])*u]}t-=s[k]}return pl[pl.length-1]}
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function sm(x){return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.txt.forEach(function(t){op(t,b)})}
    op(E.body,b);E.pw.forEach(function(e){op(e,b)});
    /* crank angle from the scroll: down-stroke in step 1, up-stroke in step 2, two full cycles in step 3 */
    var th=Math.PI*sm(seg(p,.04,.28))+Math.PI*sm(seg(p,.38,.6))+4*Math.PI*seg(p,.7,.97);
    var D=P.D0-P.r*Math.cos(th),ex=P.cx+P.r*Math.sin(th),ey=P.cy-P.r*Math.cos(th),ym=P.yd+D;
    var dia="M150 238Q300 "+(P.yd+2*D).toFixed(1)+" 450 238";
    E.dia.setAttribute("d",dia);
    E.cav.setAttribute("d","M150 230H450V238Q300 "+(P.yd+2*D).toFixed(1)+" 150 238Z");
    E.seal.setAttribute("d","M150 238V230H450V238Q300 "+(P.yd+2*D).toFixed(1)+" 150 238Z");
    E.pl.setAttribute("y",(ym-.5).toFixed(1));
    E.rod.setAttribute("d","M300 "+(ym+7).toFixed(1)+"L"+ex.toFixed(1)+" "+ey.toFixed(1));
    E.ec.setAttribute("cx",ex.toFixed(1));E.ec.setAttribute("cy",ey.toFixed(1));E.ed.setAttribute("cx",ex.toFixed(1));E.ed.setAttribute("cy",ey.toFixed(1));
    /* compression shows as a denser chamber tint */
    var comp=(1+Math.cos(th))/2;E.cav.style.fillOpacity=(.10+.28*comp).toFixed(3);
    [E.cav,E.dia,E.rod,E.pl,E.ec,E.ed].forEach(function(e){op(e,b)});
    /* valves: the inlet opens on the down-stroke, the outlet on the up-stroke */
    var s=Math.sin(th),oi=Math.max(0,s),oo=Math.max(0,-s);
    E.vi.setAttribute("transform","rotate("+(58*oi).toFixed(1)+" 206 230)");E.vo.setAttribute("transform","rotate("+(-58*oo).toFixed(1)+" 366 142)");
    op(E.vi,b);op(E.vo,b);
    /* gas: the inlet column moves only on intake strokes, the outlet column only on exhaust strokes */
    var n=Math.floor(th/(2*Math.PI)+1e-9),ph=th-n*2*Math.PI,I=n+(ph<Math.PI?(1-Math.cos(ph))/2:1),O=n+(ph<Math.PI?0:(1+Math.cos(ph))/2);
    function col(a,pl,c){a.forEach(function(d,k){var f=((k/NG+c*.32)%1+1)%1,q=along(pl,f);d.setAttribute("cx",q[0].toFixed(1));d.setAttribute("cy",q[1].toFixed(1));
      op(d,b*Math.min(1,f/.08,(1-f)/.1)*.9)})}
    col(E.gi,PI,I);col(E.go,PO,O);
    /* step emphasis */
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.3,.36)));
    op(E.L2,b*seg(p,.4,.46)*(1-seg(p,.64,.68)));
    op(E.L3,b*seg(p,.72,.78));
    op(E.seal,b*seg(p,.7,.78));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
