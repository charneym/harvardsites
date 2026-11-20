/* the story scene (BL/BY/DB): ONE engraved sail plan of the firm's sloop, inked part by part as the four steps of
   working with Fusco unfold. A faint construction drawing of the whole boat is always there; step 1 inks the hull
   and keel (your objectives, ballasted by your risk tolerance); step 2 rigs the mast and fills the two sails in the
   logo's blue and green (equities and mutual funds, reefed to your restrictions); step 3 brings the wind and the
   telltales (continuous monitoring); step 4 sweeps the year dial (an annual review at least). */
function sailPlan(o){
  var m=o.mob,g='<svg class="'+(m?"mob":"")+'" viewBox="'+o.vb+'" aria-hidden="true">';
  var HULL='M170 374Q420 386 684 356L654 400Q420 414 188 404Z',KEEL='M386 408L404 470L466 470L476 410',BULB='M392 470Q440 462 494 472Q440 488 392 478Z',RUD='M214 405L222 452L244 452L240 405';
  var MAST='M430 378V40',BOOM='M430 350L204 346',MAIN='M431 348L432 46Q300 190 207 344Q320 350 431 348Z',JIB='M434 74L666 358Q580 362 494 352Q462 214 434 74Z';
  var STAY='M432 40L172 372M432 70L668 358M410 220H452',DECK='M300 380Q330 366 470 368L486 380';
  /* base: neatline, waterline and stations, a faint construction drawing of the whole boat */
  g+='<g id="spBase"><rect class="neat" x="'+o.nx+'" y="'+o.ny+'" width="'+o.nw+'" height="'+o.nh+'"/>';
  g+='<path class="sD ln" d="M'+(o.nx+14)+' 402H'+(o.nx+o.nw-14)+'"/>';
  for(var i=0;i<11;i++){var x=150+i*56;g+='<path class="sD tk" d="M'+x+' 396V408"/>'}
  g+='<g class="ghost"><path d="'+HULL+'"/><path d="'+KEEL+'"/><path d="'+MAIN+'"/><path d="'+JIB+'"/><path d="'+MAST+'"/><path d="'+STAY+'"/></g>';
  g+='<g class="wav">';for(var r=0;r<3;r++){var y=420+r*18,d='M'+(o.nx+10)+' '+y;for(var xx=o.nx+10;xx<=o.nx+o.nw-10;xx+=20)d+='Q'+(xx+5)+' '+(y-3)+' '+(xx+10)+' '+y+'T'+(xx+20)+' '+y;g+='<path class="wv" d="'+d+'" style="opacity:'+(.5-r*.13).toFixed(2)+'"/>'}g+='</g>';
  if(!m)g+='<g class="tb"><path d="M598 452H778V506H598ZM598 470H778"/><text x="606" y="465" class="t">SAIL PLAN</text><text x="606" y="489" class="t s">FUSCO FINANCIAL SERVICES</text><text x="606" y="501" class="t s">WILTON MANORS · FLORIDA</text></g>';
  g+='</g>';
  /* step 1: hull, keel and ballast */
  g+='<g id="sp1"><path class="ink hull" d="'+HULL+'"/><path class="ink" d="'+DECK+'"/><path class="ink" d="'+KEEL+'"/><path class="ink bulb" d="'+BULB+'"/><path class="ink" d="'+RUD+'"/></g>';
  g+='<g id="sp1L"><path class="lead" d="M470 438L'+o.objL[0]+' '+(o.objL[1]-5)+'"/><text x="'+o.objL[0]+'" y="'+o.objL[1]+'" class="a" text-anchor="start">'+o.objT+'</text>'+
     '<path class="lead" d="M392 476L'+o.riskL[0]+' '+(o.riskL[1]-5)+'"/><text x="'+o.riskL[0]+'" y="'+o.riskL[1]+'" class="w" text-anchor="end">RISK TOLERANCE</text></g>';
  /* step 2: rig and sails */
  g+='<g id="sp2"><path class="ink sail m" d="'+MAIN+'"/><path class="ink sail j" d="'+JIB+'"/><path class="ink mast" d="'+MAST+'"/><path class="ink" d="'+BOOM+'"/><path class="ink thin" d="'+STAY+'"/>'+
     '<path class="ink thin" d="M300 190L404 196M268 252L410 258M244 296L418 300"/><path class="reef" d="M226 316L430 320"/></g>';
  g+='<g id="sp2L"><text x="352" y="'+o.eqY+'" class="w" text-anchor="middle">EQUITIES</text>'+
     (m?'<text x="566" y="318" class="w" text-anchor="middle">MUTUAL</text><text x="572" y="340" class="w" text-anchor="middle">FUNDS</text>':'<text x="556" y="322" class="w" text-anchor="middle">MUTUAL FUNDS</text>')+
     '<text x="'+o.resX+'" y="'+o.resY+'" class="a" text-anchor="middle">'+o.resT+'</text></g>';
  /* step 3: the wind, the telltales and the masthead vane */
  g+='<g id="sp3">';o.wind.forEach(function(wd){g+='<path class="wind" d="M'+wd[0]+' '+wd[1]+'C'+(wd[0]+wd[2]*.35)+' '+(wd[1]-6)+' '+(wd[0]+wd[2]*.65)+' '+(wd[1]+6)+' '+(wd[0]+wd[2])+' '+wd[1]+'"/>'});
  g+='<path class="tt" d="M436 150l14 3M444 230l12 4M454 300l12 3M434 110l12 2"/><path class="vane" d="M432 40L432 26M420 30L446 26L440 22"/>'+
     '<path class="lead" d="M446 28L'+o.monL[0]+' '+(o.monL[1]-5)+'"/><text x="'+o.monL[0]+'" y="'+o.monL[1]+'" class="a" text-anchor="start">'+o.monT+'</text></g>';
  /* step 4: the year dial */
  var cx=o.dial[0],cy=o.dial[1],R=o.dial[2];
  g+='<g id="sp4"><circle class="dl" cx="'+cx+'" cy="'+cy+'" r="'+R+'"/><circle class="dl" cx="'+cx+'" cy="'+cy+'" r="'+(R*.72).toFixed(1)+'"/>';
  for(i=0;i<12;i++){var a=i/12*Math.PI*2,l=i%3?.1:.18;g+='<path class="dl" d="M'+(cx+Math.sin(a)*R).toFixed(1)+' '+(cy-Math.cos(a)*R).toFixed(1)+'L'+(cx+Math.sin(a)*R*(1-l)).toFixed(1)+' '+(cy-Math.cos(a)*R*(1-l)).toFixed(1)+'"/>'}
  g+='<circle id="spArc" class="arc" cx="'+cx+'" cy="'+cy+'" r="'+(R*.86).toFixed(1)+'" transform="rotate(-90 '+cx+' '+cy+')"/><circle id="spDot" class="mk" cx="'+cx+'" cy="'+(cy-R*.86).toFixed(1)+'" r="4"/>'+
     '<text x="'+cx+'" y="'+(cy+5)+'" class="w" text-anchor="middle">12 MO</text>';
  o.dialT.forEach(function(t,k){g+='<text x="'+cx+'" y="'+(cy+R+24+k*22)+'" class="a" text-anchor="middle">'+t+'</text>'});
  g+='</g>';
  return g+'</svg>';
}
function scene(){
  if(MOBILE())return sailPlan({mob:1,vb:"152 18 556 492",nx:156,ny:22,nw:548,nh:484,objL:[500,452],objT:"OBJECTIVES",riskL:[384,500],eqY:266,resX:330,resY:310,resT:"RESTRICTIONS",
    wind:[[166,226,70],[176,250,56],[164,274,64]],monL:[470,40],monT:"MONITORED",dial:[228,100,44],dialT:["ANNUAL","REVIEW"]});
  return sailPlan({vb:"0 0 800 520",nx:.5,ny:.5,nw:799,nh:519,objL:[504,446],objT:"YOUR OBJECTIVES",riskL:[372,500],eqY:262,resX:330,resY:310,resT:"YOUR RESTRICTIONS",
    wind:[[24,226,170],[40,250,150],[18,274,190],[36,298,150]],monL:[478,38],monT:"CONTINUOUSLY MONITORED",dial:[140,104,56],dialT:["REVIEWED AT LEAST","ANNUALLY"]});
}
function storyDraw(svg){
  var E={base:$$("#spBase .sD",svg),fade:$$("#spBase .neat, #spBase .ghost, #spBase .wav, #spBase .tb",svg),i1:$$("#sp1 .ink",svg),l1:$("#sp1L",svg),
    i2:$$("#sp2 .ink",svg),sails:$$("#sp2 .sail",svg),reef:$("#sp2 .reef",svg),l2:$("#sp2L",svg),s3:$("#sp3",svg),wind:$$("#sp3 .wind",svg),wav:$$("#spBase .wv",svg),
    s4:$("#sp4",svg),arc:$("#spArc",svg),dot:$("#spDot",svg)};
  function L(el){return el.getTotalLength?el.getTotalLength():0}
  var BL=E.base.map(L),IL1=E.i1.map(L),IL2=E.i2.map(L),WL=E.wind.map(L),AL=L(E.arc),lastB=-1,cx=+E.arc.getAttribute("cx"),cy=+E.arc.getAttribute("cy"),R=+E.arc.getAttribute("r");
  function draw(list,lens,f){list.forEach(function(el,k){el.style.strokeDasharray=lens[k];el.style.strokeDashoffset=(lens[k]*(1-f)).toFixed(1)})}
  return function(p,b){
    if(!E.arc.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,BL,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.14),s2=seg(p,.25,.46),s3=seg(p,.5,.64),s4=seg(p,.72,.97);
    /* step 1 (hull, keel, labels) is inked as the scene arrives, so the first frame is never empty */
    draw(E.i1,IL1,b);E.l1.style.opacity=b.toFixed(3);
    draw(E.i2,IL2,s2);E.sails.forEach(function(el){el.style.fillOpacity=(.36*seg(p,.36,.48)).toFixed(3)});
    E.reef.style.opacity=(b*seg(p,.4,.48)).toFixed(3);E.l2.style.opacity=(b*seg(p,.4,.48)).toFixed(3);
    E.s3.style.opacity=(b*s3).toFixed(3);
    E.wind.forEach(function(el,k){var l=WL[k];el.style.strokeDasharray=(l*.45).toFixed(1)+" "+(l*.55).toFixed(1);el.style.strokeDashoffset=(l*(1-p*3-k*.2)).toFixed(1)});
    E.wav.forEach(function(el,k){el.style.transform="translateX("+(-((p*120+k*7)%20)).toFixed(1)+"px)"});
    E.s4.style.opacity=(b*seg(p,.7,.78)).toFixed(3);
    E.arc.style.strokeDasharray=AL;E.arc.style.strokeDashoffset=(AL*(1-s4)).toFixed(1);
    var a=s4*Math.PI*2;E.dot.setAttribute("cx",(cx+Math.sin(a)*R).toFixed(1));E.dot.setAttribute("cy",(cy-Math.cos(a)*R).toFixed(1));
  };
}
