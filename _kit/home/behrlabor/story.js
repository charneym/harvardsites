/* The story scene (BL/BY/DB): behr's own account of nitrogen determination after Kjeldahl (behr-labor.com > Produkte >
   Lebens- & Futtermittel Analytik > Stickstoffbestimmung nach Kjeldahl: "in 4 Stufen": Aufschluss, Neutralisation,
   Wasserdampfdestillation, Titration), drawn as ONE bench kept on screen for all four steps:
   1 Aufschluss: the digestion tube on the infrared heater; the dark sample clears (about 380 °C).
   2 Absaugen: the acid fumes are drawn off through the hose into the scrubber (behrosog / SIMVAC) and bubble through it.
   3 Destillation: steam carries the nitrogen through the condenser; distillate drips into the receiver.
   4 Titration: the burette doses into the receiver until the colour turns; N × 6,25 gives the protein. Schematic. */
var SCW=760,SCH=520,BX=[105,285,470,655];
function bhScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<linearGradient id="bhGl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e2001a" stop-opacity=".0"/><stop offset=".4" stop-color="#ff5a2a" stop-opacity=".55"/><stop offset="1" stop-color="#ffb070" stop-opacity=".95"/></linearGradient>'+
    '<clipPath id="bhCt"><path d="M95 150V330A10 10 0 0 0 115 330V150Z"/></clipPath></defs>';
  /* bench and the process line */
  g+='<path class="bn sD" d="M24 400H736"/>';
  g+='<path class="pl sD" d="M60 452H700"/>';
  BX.forEach(function(x,k){g+='<circle class="dt" id="bhD'+k+'" cx="'+x+'" cy="452" r="5"/>'});
  /* 1 Aufschluss: heater, glow, digestion tube, sample */
  g+='<g id="bhS0"><rect class="ln sD" x="55" y="352" width="100" height="46"/><path class="ln sD" d="M70 384H140"/>'+
     '<rect id="bhGlow" class="gl" x="62" y="300" width="86" height="50"/>'+
     '<g clip-path="url(#bhCt)"><rect id="bhLq" class="lq" x="90" y="296" width="30" height="50"/></g>'+
     '<path class="ln sD" d="M93 150V330A12 12 0 0 0 117 330V150"/><path class="ln sD" d="M87 150H123"/>'+
     '<text class="t" id="bhT0" x="'+(mob?4:30)+'" y="262">380 °C</text></g>';
  /* 2 Absaugen: suction hose into the scrubber, wash liquid, bubbles */
  var hose="M117 172H160C186 172 188 118 214 118H268Q285 118 285 134V380";
  g+='<g id="bhS1"><path class="ln sD" d="'+hose+'"/><path id="bhFm" class="fm" d="'+hose+'"/>'+
     '<path class="ln sD" d="M270 226V262H246V392Q246 398 252 398H318Q324 398 324 392V262H300V226"/><path class="ln sD" d="M300 238H322V206"/>'+
     '<rect class="wl" x="249" y="318" width="72" height="78"/>';
  for(i=0;i<7;i++)g+='<circle class="bb" r="'+(3+(i%3))+'" cx="285" cy="380"/>';
  g+='</g>';
  /* 3 Destillation: steam flask, feed, condenser with coil, outlet to the receiver */
  var coil="M470 136";for(i=0;i<13;i++)coil+="Q"+(i%2?458:482)+" "+(142+i*12)+" 470 "+(148+i*12);
  var feed="M410 338V150Q410 118 440 118H470V130",out="M470 300V316H612V346";
  g+='<g id="bhS2"><circle class="ln sD" cx="410" cy="368" r="30"/><path class="ln sD" d="'+feed+'"/><path id="bhSt" class="st" d="'+feed+'"/>'+
     '<rect class="ln sD" x="452" y="130" width="36" height="170"/><path class="cl sD" d="'+coil+'"/><path id="bhSt2" class="st" d="'+coil+'"/>'+
     '<path class="ln sD" d="'+out+'"/>';
  for(i=0;i<3;i++)g+='<circle class="dp" id="bhDd'+i+'" cx="612" cy="352" r="3"/>';
  g+='</g>';
  /* 4 Titration: receiver beaker, burette, drop, result */
  g+='<g id="bhS3"><path class="ln sD" d="M598 330V392Q598 400 606 400H704Q712 400 712 392V330"/>'+
     '<rect id="bhRc" class="rc" x="600" y="364" width="110" height="34"/>'+
     '<rect class="ln sD" x="650" y="90" width="12" height="180"/><rect id="bhBu" class="bu" x="652" y="96" width="8" height="172"/>'+
     '<path class="ln sD" d="M656 270V300"/><path class="ln sD" d="M644 280H668"/>'+
     '<circle class="dp" id="bhTd" cx="656" cy="304" r="3.2"/>'+
     '<text class="t r" id="bhT3" x="'+(mob?756:655)+'" y="64" text-anchor="'+(mob?"end":"middle")+'">N × 6,25 = PROTEIN</text></g>';
  /* step captions under the process line */
  var CAP=["1 · AUFSCHLUSS","2 · ABSAUGEN","3 · DESTILLATION","4 · TITRATION"];
  CAP.forEach(function(c,k){g+='<text class="a" id="bhC'+k+'" x="'+BX[k]+'" y="494" text-anchor="middle">'+c+'</text>'});
  return g+'</svg>';
}
function scene(){return bhScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var mob=svg.classList.contains("mob");
  var E={base:dl(".sD"),S:[0,1,2,3].map(function(k){return $("#bhS"+k,svg)}),D:[0,1,2,3].map(function(k){return $("#bhD"+k,svg)}),C:[0,1,2,3].map(function(k){return $("#bhC"+k,svg)}),
    glow:$("#bhGlow",svg),lq:$("#bhLq",svg),t0:$("#bhT0",svg),fm:$("#bhFm",svg),bb:$$(".bb",svg),wl:$(".wl",svg),st:$("#bhSt",svg),st2:$("#bhSt2",svg),
    dd:$$("#bhS2 .dp",svg),rc:$("#bhRc",svg),bu:$("#bhBu",svg),td:$("#bhTd",svg),t3:$("#bhT3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=(+v).toFixed(3)}
  function mix(a,c,t){return "rgb("+a.map(function(x,i){return Math.round(x+(c[i]-x)*t)}).join(",")+")"}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.wl,.9*b)}
    var w=[1-seg(p,.23,.27),seg(p,.23,.27)*(1-seg(p,.48,.52)),seg(p,.48,.52)*(1-seg(p,.73,.77)),seg(p,.73,.77)];
    var cur=w.indexOf(Math.max.apply(null,w));
    E.S.forEach(function(s,k){op(s,b*(.4+.6*w[k]))});
    E.D.forEach(function(d,k){d.classList.toggle("on",k<=cur);op(d,b)});
    E.C.forEach(function(c,k){op(c,b*(mob?(k===cur?1:0):(k===cur?1:.5)));c.classList.toggle("on",k===cur)});
    /* 1: the glow comes up, the sample clears from dark brown to a pale clear green */
    var s1=seg(p,.02,.2),pu=.75+.25*Math.sin(p*60);
    op(E.glow,b*(.25+.75*s1)*pu*(1-.6*seg(p,.3,.4)));
    E.lq.style.fill=mix([92,56,30],[168,212,176],s1);op(E.lq,b);
    op(E.t0,b*seg(p,0,.08));
    /* 2: fumes run along the hose, bubbles rise in the scrubber */
    var s2=seg(p,.25,.3)*(1-seg(p,.48,.52));
    op(E.fm,b*s2);E.fm.style.strokeDashoffset=(-p*1600).toFixed(1);
    E.bb.forEach(function(c,k){var ph=((p*9+k/7)%1),y=380-ph*58,x=285+Math.sin(k*2.1+ph*6)*10;c.setAttribute("cy",y.toFixed(1));c.setAttribute("cx",x.toFixed(1));op(c,b*s2*Math.sin(Math.PI*ph))});
    /* 3: steam through the feed and the coil, distillate drips into the receiver */
    var s3=seg(p,.5,.55)*(1-seg(p,.73,.77));
    op(E.st,b*s3);op(E.st2,b*s3);E.st.style.strokeDashoffset=(-p*1400).toFixed(1);E.st2.style.strokeDashoffset=(-p*1400).toFixed(1);
    E.dd.forEach(function(c,k){var ph=((p*12+k/3)%1);c.setAttribute("cy",(350+ph*14).toFixed(1));op(c,b*s3*(1-ph))});
    var lvl=seg(p,.5,.74);E.rc.setAttribute("y",(380-16*lvl).toFixed(1));E.rc.setAttribute("height",(18+16*lvl).toFixed(1));
    /* 4: the burette doses, the receiver turns at the end point, the result appears */
    var s4=seg(p,.76,.94);
    E.bu.setAttribute("y",(96+70*s4).toFixed(1));E.bu.setAttribute("height",(172-70*s4).toFixed(1));
    var ph4=(p*14)%1;E.td.setAttribute("cy",(304+ph4*56).toFixed(1));op(E.td,b*seg(p,.76,.8)*(1-seg(p,.92,.95))*(1-ph4*.6));
    E.rc.style.fill=mix([110,184,140],[150,132,196],seg(p,.86,.94));op(E.rc,b);
    op(E.t3,b*seg(p,.9,.96));
  };
}
