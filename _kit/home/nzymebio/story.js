/* The story scene (DB/BL): N-Zyme's own mechanism (nzymebio.com: LPR is "the retrograde flow of gastric contents into the
   larynx, oropharynx and/or the nasopharynx"; "Pepsin, detected in the airway of patients with LPR and now known to cause
   inflammation and promote disease independent of gastric acid, is a key therapeutic target"; "fosamprenavir binds to and
   inhibits pepsin, preventing pepsin-mediated inflammation and tissue damage"), drawn as ONE continuous fine-line scene
   that fills the frame: a head and neck in sagittal section, facing right, with the palate, tongue, pharynx, esophagus,
   airway, larynx and vocal folds, and the cervical spine behind. Frame 0 is already complete.
   Step 1 (reflux): droplets of refluxate rise up the esophagus and spill into the larynx.
   Step 2 (pepsin): pepsin (logo purple) settles on the laryngeal lining and the lining glows inflamed.
   Step 3 (inhibit): the inhibitor (logo sea green) rings each pepsin molecule; the inflammation fades.
   Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
var HEAD="M286 524C288 470 284 420 262 382C240 344 214 300 208 246C200 150 262 48 372 40C452 34 498 76 506 128C510 150 512 164 522 178C532 194 552 208 556 218C558 226 548 232 532 234C534 244 536 250 528 256C534 262 534 268 526 272C532 282 528 292 520 300C516 320 504 334 484 340C464 346 452 352 448 366C446 384 452 400 456 414C460 426 452 440 448 456L444 524";
var NASAL="M392 202C430 190 480 186 520 198";
var PAL="M392 236C430 230 480 230 520 238";
var UVU="M392 236C384 244 382 256 386 266";
var TONG="M514 258C482 248 442 250 418 264C400 276 396 300 404 322";
var FLOOR="M502 300C474 318 446 330 424 338";
var EPI="M410 352C402 342 400 330 408 318";
var PHAR="M374 196C370 260 368 320 370 372L370 524";
var ESOF="M400 392L400 524";
var AIRF="M432 380C434 420 434 470 432 524";
var ARY="M400 392C398 380 404 370 412 366";
var FOLDU="M402 414C410 410 424 410 432 414";
var FOLDL="M402 426C410 430 424 430 432 426";
var THY="M434 394C448 398 456 410 454 424C452 440 442 448 434 450";
var VERT=[];(function(){for(var y=226;y<500;y+=36)VERT.push("M314 "+y+"h40v28h-40z")})();
/* where the refluxate rises (esophagus centre) and where it settles (laryngeal lining and pharyngeal wall) */
var NDR=10,PEPS=[[406,382],[426,390],[408,404],[428,412],[416,440],[380,350],[383,318],[381,286],[406,334],[416,470]];
function storyScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'150 160 470 400':'64 24 660 536')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="ginf"><stop offset="0" stop-color="#f2a38e" stop-opacity=".55"/><stop offset="1" stop-color="#f2a38e" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="gcalm"><stop offset="0" stop-color="#86d2be" stop-opacity=".42"/><stop offset="1" stop-color="#86d2be" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  VERT.forEach(function(d){g+='<path class="wo sD" d="'+d+'"/>'});
  g+='<path class="wl sD" d="'+HEAD+'"/>';
  g+='<path class="wo sD" d="'+NASAL+'"/><path class="wmd sD" d="'+PAL+'"/><path class="wmd sD" d="'+UVU+'"/>';
  g+='<path class="wl sD" d="'+TONG+'"/><path class="wo sD" d="'+FLOOR+'"/><path class="wmd sD" d="'+EPI+'"/>';
  g+='<path class="wl sD" d="'+PHAR+'"/><path class="wl sD" d="'+ESOF+'"/><path class="wl sD" d="'+AIRF+'"/><path class="wmd sD" d="'+ARY+'"/>';
  g+='<path class="wmd sD" d="'+FOLDU+'"/><path class="wmd sD" d="'+FOLDL+'"/><path class="wo sD" d="'+THY+'"/>';
  g+='</g>';
  /* inflammation and calm glows over the larynx */
  g+='<circle class="halo" id="hInf" cx="410" cy="392" r="86" fill="url(#ginf)"/><circle class="halo" id="hCalm" cx="410" cy="392" r="86" fill="url(#gcalm)"/>';
  /* refluxate droplets rising */
  g+='<g id="scDrop">';for(i=0;i<NDR;i++)g+='<circle class="dr" r="2.6" cx="385" cy="524"/>';g+='</g>';
  /* pepsin and the inhibitor rings */
  g+='<g id="scPep">';PEPS.forEach(function(p){g+='<circle class="pp" r="4.6" cx="'+p[0]+'" cy="'+p[1]+'"/>'});g+='</g>';
  g+='<g id="scInh">';PEPS.forEach(function(p){g+='<circle class="ih" r="9" cx="'+p[0]+'" cy="'+p[1]+'"/>'});g+='</g>';
  /* labels, each with a leader that stops short of its text (DR) */
  if(!mob){
    g+='<g id="lEso"><path class="ld" d="M364 488L196 488"/><text class="t" x="188" y="492" text-anchor="end">ESOPHAGUS</text></g>';
    g+='<g id="lLar"><path class="ld" d="M440 420L590 420"/><text class="t" x="600" y="424">LARYNX</text></g>';
    g+='<g id="lPep"><path class="ld" d="M372 300L198 290"/><text class="t" x="188" y="280" text-anchor="end">PEPSIN</text><text class="t q" x="188" y="296" text-anchor="end">ACTIVE WITHOUT ACID</text></g>';
    g+='<g id="lInh"><path class="ld" d="M436 444L590 470"/><text class="t" x="600" y="466">PEPSIN</text><text class="t" x="600" y="482">INHIBITED</text></g>';
  }else{
    g+='<g id="lEso"></g>';
    g+='<g id="lLar"><path class="ld" d="M440 420L498 420"/><text class="t" x="506" y="428">LARYNX</text></g>';
    g+='<g id="lPep"></g><g id="lInh"></g>';
  }
  var ly=SCH-6,lx=mob?166:76;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'REFLUX REACHES THE LARYNX':'GASTRIC CONTENTS FLOW BACK UP INTO THE LARYNX')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PEPSIN INFLAMES THE LINING':'PEPSIN INFLAMES AND DAMAGES THE LARYNX')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PEPSIN BOUND AND INHIBITED':'FOSAMPRENAVIR BINDS AND INHIBITS PEPSIN')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),drops:$$("#scDrop .dr",svg),peps:$$("#scPep .pp",svg),inh:$$("#scInh .ih",svg),
    hI:$("#hInf",svg),hC:$("#hCalm",svg),lEso:$("#lEso",svg),lLar:$("#lLar",svg),lPep:$("#lPep",svg),lInh:$("#lInh",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.32),s2=seg(p,.36,.64),s3=seg(p,.68,.94);
    /* 1. droplets rise up the esophagus (staggered), spill over the arytenoid and become the pepsin that settles */
    E.drops.forEach(function(el,i){var tg=PEPS[i],f=sm((s1-i*.045)/(1-(NDR-1)*.045)),x,y;
      if(f<.72){var k=f/.72;x=385+Math.sin(k*9+i)*3;y=524-(524-376)*k}else{var k2=(f-.72)/.28;x=385+(tg[0]-385)*k2;y=376+(tg[1]-376)*k2}
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));op(el,b*(f>0?Math.min(1,f*6):0)*(1-seg(p,.34,.42)))});
    E.peps.forEach(function(el,i){op(el,b*seg(p,.32+i*.004,.42+i*.004)*(1-.6*s3))});
    op(E.lEso,b*seg(p,.06,.16)*(1-seg(p,.36,.44)));
    op(E.lLar,b*seg(p,.2,.3));
    /* 2. pepsin on the lining; the larynx glows inflamed */
    op(E.hI,b*s2*(1-s3));
    op(E.lPep,b*seg(p,.44,.54)*(1-seg(p,.66,.72)));
    /* 3. the inhibitor rings each pepsin molecule; the inflammation gives way to calm */
    E.inh.forEach(function(el,i){var f=seg(p,.68+i*.012,.8+i*.012);op(el,b*f);el.setAttribute("r",(15-6*f).toFixed(2))});
    op(E.hC,b*s3);
    op(E.lInh,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
