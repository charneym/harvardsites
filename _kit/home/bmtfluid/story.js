/* The story scene (BL/BY/DB): how BMT's core product works, ONE direct-acting 2/2-way solenoid valve in section, kept on
   screen for all three steps (generic principle; the NC/NO options and the tunable parameters are from bmt-industrie.de >
   Magnetventile and > Kundenspezifische Lösungen):
   Step 1 (Geschlossen): the spring holds the armature and its seal on the seat; medium waits in the inlet.
   Step 2 (Geöffnet): the coil is energised, field lines close through the core, the armature lifts, medium flows through.
   Step 3 (Angepasst): the parameters BMT tunes per customer are tagged on the parts they belong to. */
var SCW=760,SCH=520;
function bmScene(o){
  var g='',mob=o.mob,i,y;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<linearGradient id="bmBd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a4754"/><stop offset="1" stop-color="#26313b"/></linearGradient>'+
    '<linearGradient id="bmAr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8d99a6"/><stop offset=".45" stop-color="#d5dce3"/><stop offset="1" stop-color="#7d8996"/></linearGradient>'+
    '<clipPath id="bmClL"><rect x="246" y="150" width="98" height="146"/></clipPath><clipPath id="bmClR"><rect x="416" y="150" width="98" height="146"/></clipPath></defs>';
  g+='<text class="t" x="20" y="30">'+(mob?"MAGNETVENTIL, SCHNITT":"MAGNETVENTIL 2/2-WEGE, IM SCHNITT")+'</text>';
  /* field lines (step 2): two loops closing through the core */
  g+='<g id="bmFld"><ellipse class="fl" cx="292" cy="222" rx="104" ry="96"/><ellipse class="fl" cx="468" cy="222" rx="104" ry="96"/><ellipse class="fl f2" cx="292" cy="222" rx="76" ry="70"/><ellipse class="fl f2" cx="468" cy="222" rx="76" ry="70"/></g>';
  /* the valve body in section, with the inlet, orifice, chamber and outlet cut out */
  g+='<path class="bdy" d="M176 320H584A6 6 0 0 1 590 326V444A6 6 0 0 1 584 450H176A6 6 0 0 1 170 444V326A6 6 0 0 1 176 320Z"/>';
  g+='<rect class="cav" x="120" y="392" width="269" height="20"/><rect class="cav" x="371" y="356" width="18" height="56"/><rect class="cav" x="326" y="320" width="108" height="38"/><rect class="cav" x="434" y="330" width="206" height="20"/>';
  g+='<path class="prt" d="M120 386H170M120 418H170M120 386V392M120 412V418M590 324H640M590 356H640M640 324V330M640 350V356"/>';
  /* medium: always in the inlet up to the seat; chamber and outlet fill when open */
  g+='<g id="bmMi"><rect class="med" x="120" y="392" width="269" height="20"/><rect class="med" x="371" y="362" width="18" height="50"/></g>';
  g+='<g id="bmMo"><rect class="med" x="326" y="320" width="108" height="42"/><rect class="med" x="434" y="330" width="206" height="20"/></g>';
  g+='<path class="seat" d="M362 362H371M389 362H398"/>';
  /* coil housing, windings, armature tube, pole piece */
  g+='<rect class="hs" x="236" y="140" width="288" height="166"/>';
  g+='<g id="bmCoil"><rect class="cw" x="246" y="150" width="98" height="146"/><rect class="cw" x="416" y="150" width="98" height="146"/><g clip-path="url(#bmClL)">';
  for(y=156;y<296;y+=7)g+='<path class="wl" d="M246 '+y+'H344"/>';
  g+='</g><g clip-path="url(#bmClR)">';
  for(y=156;y<296;y+=7)g+='<path class="wl" d="M416 '+y+'H514"/>';
  g+='</g></g>';
  g+='<path class="tb" d="M350 96V320M410 96V320M350 96H410"/>';
  g+='<rect class="pole" x="356" y="104" width="48" height="36"/>';
  /* spring and armature (move together) */
  var sp="M380 140";for(i=1;i<=8;i++)sp+="L"+(i%2?394:366)+" "+(140+i*45/8).toFixed(2);sp+="L380 185";
  g+='<path id="bmSp" class="spr" d="'+sp+'"/>';
  g+='<g id="bmAr"><rect class="arm" x="356" y="185" width="48" height="167"/><rect class="pad" x="362" y="352" width="36" height="8"/></g>';
  /* flow dots along the path (step 2 on) */
  g+='<path id="bmPath" class="fp" d="M126 402H380V346H636"/><g id="bmDots">';
  for(i=0;i<12;i++)g+='<circle class="dot" r="3.4" cx="0" cy="0"/>';
  g+='</g>';
  /* labels, per step (>=8px clear of every stroke) */
  g+='<g id="bmL1"><text class="t s1" x="424" y="122">FEDER</text><text class="t" x="300" y="484">'+(mob?"SITZ DICHT":"ANKER AUF DEM SITZ: DICHT")+'</text></g>';
  g+='<g id="bmL2"><text class="t s1" x="40" y="96">MAGNETFELD</text><text class="t" x="300" y="484">'+(mob?"MEDIUM STRÖMT":"ANKER ANGEHOBEN: MEDIUM STRÖMT")+'</text></g>';
  g+='<g id="bmL3"><text class="t s1" x="40" y="122">'+(mob?"STROM":"STROMVERBRAUCH")+'</text><text class="t s1" x="424" y="122">'+(mob?"ZEIT":"ANSPRECHZEIT")+'</text>'+
    '<text class="t s1" x="40" y="376">DRUCK</text><text class="t s1" x="'+(mob?556:560)+'" y="306">'+(mob?"FLUSS":"DURCHFLUSS")+'</text><text class="t s1" x="300" y="484">TOTVOLUMEN</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · GESCHLOSSEN</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · GEÖFFNET</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · ANGEPASST</text></g>';
  return g+'</svg>';
}
function scene(){return bmScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var E={arm:$("#bmAr",svg),sp:$("#bmSp",svg),fld:$("#bmFld",svg),coil:$("#bmCoil",svg),mo:$("#bmMo",svg),mi:$("#bmMi",svg),dots:$$("#bmDots circle",svg),path:$("#bmPath",svg),
    L1:$("#bmL1",svg),L2:$("#bmL2",svg),L3:$("#bmL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),fl:$$("#bmFld .fl",svg)};
  var PL=E.path.getTotalLength?E.path.getTotalLength():800;
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    /* step 2: field on, armature lifts 24 units, spring compresses, medium flows */
    var f=seg(p,.36,.46),m=ease(seg(p,.4,.52)),fo=seg(p,.46,.56);
    op(E.fld,b*f*(1-seg(p,.64,.7)));
    E.fl.forEach(function(e,i){e.style.strokeDashoffset=(-p*240*(i%2?1:-1)).toFixed(1)});
    E.coil.style.opacity=(b*(.72+.28*f)).toFixed(3);
    E.arm.setAttribute("transform","translate(0 "+(-24*m).toFixed(2)+")");
    var sy=(45-24*m)/45;E.sp.setAttribute("transform","translate(0 140) scale(1 "+sy.toFixed(3)+") translate(0 -140)");
    op(E.mi,b);op(E.mo,b*fo);
    var n=E.dots.length;
    E.dots.forEach(function(d,i){var u=((i/n)+p*3)%1,q=E.path.getPointAtLength(u*PL);d.setAttribute("cx",q.x.toFixed(1));d.setAttribute("cy",q.y.toFixed(1));
      var edge=Math.min(1,u/.05,(1-u)/.05);d.style.opacity=(b*fo*edge).toFixed(3)});
    op(E.L1,b*seg(p,.02,.1)*(1-seg(p,.3,.36)));
    op(E.L2,b*seg(p,.48,.56)*(1-seg(p,.63,.67)));
    op(E.L3,b*seg(p,.72,.8));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
