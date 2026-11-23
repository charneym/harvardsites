/* The story scene (BL/BY/DB): how releaze™ works, after SymPhysis Medical's own description (symphysismedical.com:
   novel 'port'-like access, a unique approach to dressings, intuitive one-touch control, independent drainage at home)
   and their CEO's stated goal (breathe more easily at home, less time in hospital). ONE continuous fine-line scene: a
   chest with malignant pleural effusion compressing one lung, the port-like access on the chest wall, and the releaze
   unit drawn from their product render. Step 1 (access): the port and dressing settle and the line draws to the unit.
   Step 2 (one touch): the play key lights and fluid runs from the pleural space to the unit. Step 3 (breathe): the fluid
   level falls and the lung re-expands into the space. Driven by the scrubbed progress. */
var SCW=760,SCH=520;
/* compressed and expanded outlines of the affected lung (same commands, morphed point by point) */
var LUNG_C=[262,132, 300,138,330,186,332,240, 333,262,328,282,322,292, 304,286,282,286,262,294, 258,256,256,190,262,132];
var LUNG_E=[262,126, 318,132,358,200,360,300, 361,350,358,382,354,394, 328,380,296,372,262,382, 258,330,256,200,262,126];
function lungD(a){return "M"+a[0]+" "+a[1]+"C"+a.slice(2,8).join(" ")+"C"+a.slice(8,14).join(" ")+"C"+a.slice(14,20).join(" ")+"C"+a.slice(20,26).join(" ")+"Z"}
var LUNG_L=(function(){var e=LUNG_E.slice();for(var i=0;i<e.length;i+=2)e[i]=460-e[i];return e})();
var CAV="M262 118C326 122 372 196 374 300C375 352 372 392 368 410C334 394 298 384 256 392C252 330 250 200 262 118Z";
var TUBE="M394 336C432 342 446 398 476 405";
function smScene(o){
  var M=o.mob;
  var g='<svg class="'+(M?"mob":"")+'" viewBox="'+(M?"40 34 708 456":"36 40 712 460")+'" aria-hidden="true">';
  g+='<defs><clipPath id="smCav"><path d="'+CAV+'"/></clipPath></defs>';
  g+='<g id="scBase">';
  /* torso, neck and shoulders */
  g+='<path class="ln2 sD" d="M204 44V84C186 100 128 104 92 120C64 134 54 168 54 214V490"/>';
  g+='<path class="ln2 sD" d="M256 44V84C274 100 332 104 368 120C396 134 406 168 406 214V490"/>';
  /* airway */
  g+='<path class="ln sD" d="M230 70V150M230 150C222 160 210 168 198 176M230 150C238 160 250 168 262 176"/>';
  /* healthy lung and the affected hemithorax wall */
  g+='<path class="ln sD" d="'+lungD(LUNG_L)+'"/>';
  g+='<path class="ln2 sD" d="'+CAV+'"/>';
  /* diaphragm */
  g+='<path class="ln2 sD" d="M96 404C130 384 176 380 204 392M256 392C298 384 334 394 368 410"/>';
  /* the releaze unit, from their render: stadium body, top panel, screen, power / stop / play keys, clip, handle */
  g+='<path class="ln sD" d="M524 360H684A44 44 0 0 1 684 448H524A44 44 0 0 1 524 360Z"/>';
  g+='<path class="ln2 sD" d="M530 372H678A32 32 0 0 1 678 436H530A32 32 0 0 1 530 372Z"/>';
  g+='<path class="ln sD" d="M480 404V418C480 452 500 472 530 472H678C708 472 728 452 728 418V404"/>';
  g+='<path class="sc sD" d="M576 384H636V422H576Z"/>';
  g+='<circle class="ln2 sD" cx="554" cy="404" r="8"/><path class="ln2 sD" d="M554 398V404"/>';
  g+='<path class="ln2 sD" d="M654 382H666V394H654Z"/><path class="ln2 sD" d="M655 410L667 416L655 422Z"/>';
  g+='<path class="cl sD" d="M474 396H490V414H474Z"/>';
  /* port-like access on the chest wall, its dressing, and the catheter into the pleural space */
  g+='<path class="ln2 sD" d="M364 318H404V354H364Z"/>';
  g+='<path class="pt sD" d="M372 328C372 322 394 322 394 328V344C394 350 372 350 372 344Z"/>';
  g+='<path class="tb sD" d="M372 336C356 344 346 360 344 386"/>';
  g+='<path class="tb sD" id="smT" d="'+TUBE+'"/>';
  if(M){
    g+='<text class="t" x="422" y="292">PLEURAL SPACE</text>';
    g+='<text class="t" x="604" y="336" text-anchor="middle">releaze™</text>';
  }else{
    g+='<text class="t" x="422" y="292">PLEURAL SPACE</text>';
    g+='<text class="t" x="604" y="338" text-anchor="middle">releaze™ DRAINAGE SYSTEM</text>';
  }
  g+='</g>';
  /* moving parts */
  g+='<g clip-path="url(#smCav)"><path class="fl" id="smFl" d=""/></g>';
  g+='<path class="ln lg" id="smLung" d="'+lungD(LUNG_C)+'"/>';
  g+='<path class="ok" id="smPlay" d="M655 410L667 416L655 422Z"/>';
  g+='<g id="smDrops">';for(var i=0;i<4;i++)g+='<path class="dp" d="M'+(586+i*13)+' 397c0 0-4 5-4 8a4 4 0 0 0 8 0c0-3-4-8-4-8z"/>';g+='</g>';
  g+='<g id="smDots">';for(i=0;i<10;i++)g+='<circle class="df" r="2.8"/>';g+='</g>';
  var lx=M?744:740,ly=M?150:110;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'" text-anchor="end">PORT-LIKE ACCESS</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'" text-anchor="end">ONE-TOUCH DRAINAGE</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'" text-anchor="end">LUNG RE-EXPANDS</text></g>';
  return g+'</svg>';
}
function scene(){return smScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),fl:$("#smFl",svg),lung:$("#smLung",svg),play:$("#smPlay",svg),
    drops:$$(".dp",svg),tube:$("#smT",svg),df:$$(".df",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var LT=E.tube.getTotalLength(),lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var run=sm2(seg(p,.36,.64)),ex=sm2(seg(p,.5,.92));
    /* fluid: a meniscus that rises toward the chest wall, falling as the pleural space drains */
    var fy=300+108*ex,fl='M240 '+(fy+8).toFixed(1)+'C290 '+(fy+6).toFixed(1)+' 340 '+(fy-2).toFixed(1)+' 380 '+(fy-14).toFixed(1)+'V420H240Z';
    E.fl.setAttribute("d",fl);op(E.fl,b*(1-.92*ex));
    var a=LUNG_C.map(function(v,i){return +(v+(LUNG_E[i]-v)*ex).toFixed(1)});E.lung.setAttribute("d",lungD(a));op(E.lung,b);
    var pulse=Math.sin(p*60);op(E.play,b*run*(1-ex*.6)*(.6+.4*pulse*pulse));
    E.drops.forEach(function(d,i){op(d,b*seg(run,i*.22,i*.22+.2))});
    E.df.forEach(function(el,i){var u=((i/E.df.length)+p*3.4)%1,pt=E.tube.getPointAtLength(u*LT);el.setAttribute("cx",pt.x.toFixed(1));el.setAttribute("cy",pt.y.toFixed(1));op(el,b*seg(p,.34,.4)*(1-seg(p,.84,.9))*Math.min(1,Math.min(u,1-u)*8))});
    op(E.l1,b*seg(p,.06,.12)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.38,.44)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.72,.78));
  };
}
function sm2(x){return x*x*(3-2*x)}
