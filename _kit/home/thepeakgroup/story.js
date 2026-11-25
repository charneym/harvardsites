/* The story scene (BL/BY/DB): Peak Production's own account of a custom test system (peakproduction.co.uk > About Us,
   thepeakgroup.com and the group brochure: in-house design, in-house build, installation and commissioning, support),
   drawn as ONE single-rack ATE system in elevation with its fixture table, kept on screen for all four steps:
   1 Design: the rack, table and fixture are drawn as a design, with the 42U dimension and the planned instrument slots.
   2 Build: the instruments slide into the rack and the harness from the mass interconnect to the fixture is wired.
   3 Commission: the fixture's pressure plate brings the board under test down onto the spring contact probes; the screen passes.
   4 Support: an instrument slides out for service and calibration and goes back in. Schematic. */
var SCW=760,SCH=520,BX=[120,290,470,650],SLOTS=[86,130,174,218,262,306,350],PRB=[464,490,516,542,568,594,620];
function pkScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><g transform="translate(20,0)">';
  /* floor, rack frame, wheels, monitor, fixture table and fixture: the base drawing */
  g+='<path class="bn sD" d="M40 428H700"/>';
  g+='<path class="ln sD" d="M150 70H340V404H150Z"/><path class="pl sD" d="M166 76V398M324 76V398"/>';
  g+='<circle class="ln sD" cx="180" cy="416" r="10"/><circle class="ln sD" cx="310" cy="416" r="10"/>';
  g+='<path class="ln sD" d="M170 14H320V60H170Z"/><path class="pl sD" d="M245 60V70"/>';
  g+='<path class="ln sD" d="M340 268H680V280H340"/><path class="pl sD" d="M340 340L400 280"/>';
  g+='<path class="ln sD" d="M440 212H640V268H440Z"/><path class="pl sD" d="M448 212V96M632 212V96"/>';
  /* 1 Design: the 42U dimension and the planned slots */
  g+='<g id="pkS0"><path class="dm" d="M120 70V404M112 70H128M112 404H128"/><text class="t dmt" x="86" y="242" text-anchor="middle">42U</text>';
  SLOTS.forEach(function(y,k){g+='<rect class="gh" id="pkG'+k+'" x="172" y="'+y+'" width="146" height="34"/>'});
  g+='</g>';
  /* 2 Build: instruments, the mass interconnect receiver, the fixture interface and the harness */
  g+='<g id="pkS1">';
  SLOTS.forEach(function(y,k){
    var d='<rect class="md" x="172" y="'+y+'" width="146" height="34"/>';
    if(k%3===0)d+='<rect class="sc" x="182" y="'+(y+8)+'" width="40" height="18"/>';
    else if(k%3===1)d+='<path class="mdl" d="M184 '+(y+17)+'H262"/>';
    else d+='<rect class="sc" x="182" y="'+(y+11)+'" width="64" height="12"/>';
    d+='<circle class="kn" cx="'+(k%3===1?286:296)+'" cy="'+(y+17)+'" r="'+(k%3===1?6:4)+'"/>';
    g+='<g class="mg" id="pkM'+k+'">'+d+'</g>'});
  g+='<rect class="ic" id="pkI0" x="340" y="226" width="22" height="36"/><rect class="ic" id="pkI1" x="420" y="224" width="20" height="34"/>';
  g+='<path class="hn" id="pkH" d="M362 240C384 196 404 196 420 238"/><path class="hn" id="pkH2" d="M362 250C388 214 402 214 420 248"/>';
  g+='</g>';
  /* 3 Commission: the probes, the board under test, the pressure plate and the screen's results */
  g+='<g id="pkS2">';
  PRB.forEach(function(x,k){g+='<path class="pb" d="M'+x+' 190V212"/><path class="pp" id="pkP'+k+'" d="M'+x+' 176V190"/>'});
  g+='<rect class="pcb" id="pkB" x="452" y="164" width="180" height="10"/>';
  g+='<rect class="pr" id="pkR" x="456" y="104" width="172" height="12"/>';
  [0,1,2,3].forEach(function(k){g+='<rect class="br" id="pkQ'+k+'" x="182" y="'+(22+k*8)+'" width="80" height="4"/>'});
  g+='<path class="ok" id="pkOk" d="M282 36l7 7l14-16"/>';
  g+='</g>';
  /* 4 Support: one instrument slides out for service and calibration, and back */
  g+='<g id="pkS3"><path class="ok" id="pkOk2" d="M356 196l7 7l14-16"/></g>';
  g+='</g>';
  g+='<path class="pl sD" d="M60 458H700"/>';
  BX.forEach(function(x,k){g+='<circle class="dt" id="pkD'+k+'" cx="'+x+'" cy="458" r="5"/>'});
  var CAP=["1 · DESIGN","2 · BUILD","3 · COMMISSION","4 · SUPPORT"];
  CAP.forEach(function(c,k){g+='<text class="a" id="pkC'+k+'" x="'+(mob?380:BX[k])+'" y="'+(mob?500:494)+'" text-anchor="middle">'+c+'</text>'});
  return g+'</svg>';
}
function scene(){return pkScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var mob=svg.classList.contains("mob");
  var E={base:dl(".sD"),S:[0,1,2,3].map(function(k){return $("#pkS"+k,svg)}),D:[0,1,2,3].map(function(k){return $("#pkD"+k,svg)}),C:[0,1,2,3].map(function(k){return $("#pkC"+k,svg)}),
    G:SLOTS.map(function(_,k){return $("#pkG"+k,svg)}),M:SLOTS.map(function(_,k){return $("#pkM"+k,svg)}),I:[$("#pkI0",svg),$("#pkI1",svg)],
    P:PRB.map(function(_,k){return $("#pkP"+k,svg)}),B:$("#pkB",svg),R:$("#pkR",svg),Q:[0,1,2,3].map(function(k){return $("#pkQ"+k,svg)}),ok:$("#pkOk",svg),ok2:$("#pkOk2",svg)};
  var H=[$("#pkH",svg),$("#pkH2",svg)].map(function(p){var L=p.getTotalLength?p.getTotalLength():100;p.style.strokeDasharray=L+" "+L;return [p,L]});
  var okL=[E.ok,E.ok2].map(function(o){var L=o.getTotalLength?o.getTotalLength():30;o.style.strokeDasharray=L+" "+L;return L});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=(+v).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var w=[1-seg(p,.23,.27),seg(p,.23,.27)*(1-seg(p,.48,.52)),seg(p,.48,.52)*(1-seg(p,.73,.77)),seg(p,.73,.77)];
    var cur=w.indexOf(Math.max.apply(null,w));
    E.D.forEach(function(d,k){d.classList.toggle("on",k<=cur);op(d,b)});
    E.C.forEach(function(c,k){op(c,b*(mob?(k===cur?1:0):(k===cur?1:.5)));c.classList.toggle("on",k===cur)});
    /* 1: the dimension and planned slots are drawn; they give way as the instruments arrive */
    op(E.S[0],b*(1-.75*seg(p,.3,.5)));
    /* 2: the instruments slide in one by one, then the harness is wired */
    E.M.forEach(function(m,k){var a=seg(p,.24+k*.03,.3+k*.03);
      var out=(k===3)?seg(p,.8,.86)*(1-seg(p,.9,.96)):0;
      m.setAttribute("transform","translate("+(-(1-a)*60-out*34).toFixed(1)+",0)");op(m,b*a);m.classList.toggle("sv",out>.02)});
    E.G.forEach(function(gh,k){op(gh,1-seg(p,.24+k*.03,.3+k*.03))});
    var ia=seg(p,.4,.44);E.I.forEach(function(x){op(x,b*ia)});
    var hw=seg(p,.42,.5);draw(H,hw);H.forEach(function(h){op(h[0],b*seg(p,.42,.43))});
    /* 3: the pressure plate comes down, the board meets the probes, the plungers compress, the screen passes */
    var s3=seg(p,.52,.62),s3b=seg(p,.62,.67);
    op(E.S[2],b*seg(p,.48,.52));
    E.R.setAttribute("y",(104+48*s3+8*s3b).toFixed(1));
    E.B.setAttribute("y",(164+8*s3b).toFixed(1));
    E.P.forEach(function(pp){pp.setAttribute("d",pp.getAttribute("d").replace(/M(\d+) [\d.]+V190/,"M$1 "+(176+8*s3b).toFixed(1)+"V190"))});
    E.Q.forEach(function(q,k){var a=seg(p,.66+k*.015,.7+k*.015);q.setAttribute("width",(80*a).toFixed(1));op(q,a)});
    E.ok.style.strokeDashoffset=(okL[0]*(1-seg(p,.71,.74))).toFixed(1);op(E.ok,seg(p,.71,.72));
    /* 4: the service tick beside the rack */
    E.ok2.style.strokeDashoffset=(okL[1]*(1-seg(p,.94,.98))).toFixed(1);op(E.ok2,b*seg(p,.94,.95));
  };
}
