/* The story scene (DB/BL): Olatec's own mechanism (olatec.com, Science: "NLRP3 resides within cells and senses
   perturbations of cell homeostasis as well as intracellular danger"; "NLRP3 activation leads to recruitment of ASC ...
   ASC brings monomers of pro-caspase-1 into proximity ... caspase-1 proteolytically cleaves precursors of IL-1β and IL-18
   into their biologically active forms"; "By specific binding to NLRP3, dapansutrile prevents the formation of the NLRP3
   inflammasome, which in turn inhibits the production of IL-1β and IL-18"), drawn as ONE continuous fine-line scene
   that fills the frame: an immune cell in section, its membrane, nucleus, organelles, and NLRP3 sensors in the cytoplasm.
   Frame 0 is already complete.
   Step 1 (sense): urate crystals arrive at the cell; the NLRP3 sensors light up.
   Step 2 (assemble): the sensors gather into the inflammasome wheel with its ASC filament; IL-1β leaves the cell.
   Step 3 (inhibit): dapansutrile (gold) binds each sensor; the wheel never forms, no IL-1β is released, the cell calms.
   Everything is driven by the scrubbed progress. Labels sit outside the membrane with leaders that stop short (DR). */
var SCW=760,SCH=560;
var CX=392,CY=280,RX=268,RY=212;
function ell(cx,cy,rx,ry){return "M"+(cx-rx)+" "+cy+"A"+rx+" "+ry+" 0 1 0 "+(cx+rx)+" "+cy+"A"+rx+" "+ry+" 0 1 0 "+(cx-rx)+" "+cy+"Z"}
var MEM=ell(CX,CY,RX,RY),MEM2=ell(CX,CY,RX-9,RY-9);
var NUC=ell(268,318,92,74),NUC2="M214 300C238 286 262 312 290 296C306 288 320 300 330 312M206 336C232 350 262 330 292 344";
var ORG=["M520 404C548 392 584 398 600 414C584 430 548 436 520 424C512 418 512 410 520 404Z","M548 412C562 406 576 418 590 410",
  "M300 156C324 146 352 150 368 164C352 178 322 180 304 172C296 166 294 160 300 156Z","M310 162C324 168 338 158 352 166"];
/* where each NLRP3 sensor rests in the cytoplasm, and its seat in the inflammasome wheel */
var WC=[490,236],WR=58;
var HOME=[[420,150],[520,150],[612,232],[612,318],[470,420],[392,404],[180,200],[408,250]];
var SEAT=HOME.map(function(_,i){var t=-Math.PI/2+i*Math.PI*2/HOME.length;return [WC[0]+WR*Math.cos(t),WC[1]+WR*Math.sin(t),t*180/Math.PI+90]});
var XTAL=[[700,96,18],[730,140,-12],[676,150,30]];
var NIL=9,ILP=[];(function(){for(var i=0;i<NIL;i++){var t=-.5+i*.13;ILP.push([CX+RX*Math.cos(t)*.98,CY+RY*Math.sin(t)*.98,CX+(RX+40+(i%3)*18)*Math.cos(t),CY+(RY+36+(i%3)*14)*Math.sin(t)])}})();
function mono(){return '<circle class="pyd" r="4.2" cx="0" cy="-11"/><rect class="nac" x="-6.5" y="-5.5" width="13" height="11"/><path class="lrr" d="M-7 9C-4 16 4 16 7 9"/>'}
function storyScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'100 46 650 474':'60 30 700 524')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="ginf"><stop offset="0" stop-color="#f0a46a" stop-opacity=".5"/><stop offset="1" stop-color="#f0a46a" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="gcalm"><stop offset="0" stop-color="#6fd09a" stop-opacity=".34"/><stop offset="1" stop-color="#6fd09a" stop-opacity="0"/></radialGradient></defs>';
  g+='<circle class="halo" id="hInf" cx="'+WC[0]+'" cy="'+WC[1]+'" r="150" fill="url(#ginf)"/><circle class="halo" id="hCalm" cx="'+CX+'" cy="'+CY+'" r="230" fill="url(#gcalm)"/>';
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+MEM+'"/><path class="wo sD" d="'+MEM2+'"/>';
  g+='<path class="wmd sD" d="'+NUC+'"/><path class="wo sD" d="'+NUC2+'"/>';
  ORG.forEach(function(d){g+='<path class="wo sD" d="'+d+'"/>'});
  g+='</g>';
  /* urate crystals outside the cell */
  g+='<g id="scX">';XTAL.forEach(function(x){g+='<path class="uxt" transform="translate('+x[0]+' '+x[1]+') rotate('+x[2]+')" d="M0 -16L5 0L0 16L-5 0Z"/>'});g+='</g>';
  /* the ASC filament under the wheel */
  g+='<path class="asc" id="scAsc" d="M'+WC[0]+' '+(WC[1]+WR+16)+'L'+WC[0]+' '+(WC[1]+WR+92)+'"/>';
  g+='<g id="scCas">';for(i=0;i<4;i++)g+='<circle class="cas" r="4" cx="'+(WC[0]+(i%2?11:-11))+'" cy="'+(WC[1]+WR+30+i*18)+'"/>';g+='</g>';
  /* IL-1β leaving the cell */
  g+='<g id="scIl">';for(i=0;i<NIL;i++)g+='<circle class="il" r="3.4" cx="'+ILP[i][0]+'" cy="'+ILP[i][1]+'"/>';g+='</g>';
  /* the NLRP3 sensors, each with its dapansutrile mark */
  g+='<g id="scMono">';HOME.forEach(function(p,i){g+='<g class="mo" transform="translate('+p[0]+' '+p[1]+') scale(1.7)">'+mono()+'<circle class="dz" r="3.2" cx="9" cy="-11"/></g>'});g+='</g>';
  if(!mob){
    g+='<g id="lN"><path class="ld" d="M162 200L84 200"/><text class="t" x="84" y="188">NLRP3</text></g>';
    g+='<g id="lX"><path class="ld" d="M700 186L700 214"/><text class="t" x="700" y="232" text-anchor="middle">URATE</text><text class="t" x="700" y="248" text-anchor="middle">CRYSTALS</text></g>';
    g+='<g id="lW"><path class="ld" d="M490 158L490 64"/><text class="t" x="490" y="50" text-anchor="middle">INFLAMMASOME</text></g>';
    g+='<g id="lI"><path class="ld" d="M674 446L686 460"/><text class="t" x="684" y="478">IL-1&#946;</text></g>';
    g+='<g id="lD"><path class="ld" d="M516 118L496 64"/><text class="t" x="490" y="50" text-anchor="middle">DAPANSUTRILE BOUND TO NLRP3</text></g>';
  }else{g+='<g id="lN"></g><g id="lX"></g><g id="lW"></g><g id="lI"></g><g id="lD"></g>'}
  var ly=mob?512:544,lx=mob?120:84;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'NLRP3 SENSES DANGER':'NLRP3 SENSES DANGER INSIDE THE CELL')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'IL-1&#946; IS RELEASED':'THE INFLAMMASOME FORMS AND IL-1&#946; IS RELEASED')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'NO INFLAMMASOME FORMS':'DAPANSUTRILE BINDS NLRP3: NO INFLAMMASOME FORMS')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),asc:dl("#scAsc")[0],mos:$$("#scMono .mo",svg),dz:$$("#scMono .dz",svg),xt:$$("#scX .uxt",svg),cas:$$("#scCas .cas",svg),il:$$("#scIl .il",svg),
    hI:$("#hInf",svg),hC:$("#hCalm",svg),lN:$("#lN",svg),lX:$("#lX",svg),lW:$("#lW",svg),lI:$("#lI",svg),lD:$("#lD",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.3),s2=seg(p,.34,.62),s3=seg(p,.68,.92);
    /* 1. crystals drift in from outside; the sensors light up */
    E.xt.forEach(function(el,i){var x=XTAL[i],f=sm(seg(p,.04+i*.03,.24+i*.03)),dx=(1-f)*40;el.setAttribute("transform","translate("+(x[0]+dx).toFixed(1)+" "+(x[1]-dx*.5).toFixed(1)+") rotate("+x[2]+")");op(el,b*(.25+.75*f)*(1-.55*s3))});
    var lit=sm(seg(p,.14,.3))*(1-s3);
    /* 2. the sensors gather into the wheel (3. they part again, each held by dapansutrile) */
    var gat=sm(s2)*(1-sm(seg(p,.68,.8)));
    E.mos.forEach(function(el,i){var h=HOME[i],st=SEAT[i],f=sm((gat*1.15-i*.02)/1.0);f=f<0?0:f>1?1:f;
      var x=h[0]+(st[0]-h[0])*f,y=h[1]+(st[1]-h[1])*f,r=st[2]*f;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+r.toFixed(1)+") scale(1.7)");
      el.classList.toggle("on",lit>.5);op(el,b)});
    E.dz.forEach(function(el,i){op(el,b*sm(seg(p,.74+i*.01,.86+i*.01)))});
    if(E.asc){E.asc[0].style.strokeDashoffset=(E.asc[1]*(1-seg(p,.46,.58)*(1-seg(p,.68,.76)))).toFixed(1)}
    E.cas.forEach(function(el,i){op(el,b*seg(p,.5+i*.02,.58+i*.02)*(1-seg(p,.68,.76)))});
    E.il.forEach(function(el,i){var q=ILP[i],f=sm(seg(p,.5+i*.012,.64+i*.012));
      el.setAttribute("cx",(q[0]+(q[2]-q[0])*f).toFixed(1));el.setAttribute("cy",(q[1]+(q[3]-q[1])*f).toFixed(1));
      op(el,b*(f>0?Math.min(1,f*5):0)*(1-seg(p,.68,.8)))});
    op(E.hI,b*s2*(1-s3));op(E.hC,b*s3);
    op(E.lN,b*seg(p,.04,.12)*(1-seg(p,.32,.38)));op(E.lX,b*seg(p,.1,.2)*(1-seg(p,.32,.38)));
    op(E.lW,b*seg(p,.44,.52)*(1-seg(p,.64,.7)));op(E.lI,b*seg(p,.52,.6)*(1-seg(p,.64,.7)));
    op(E.lD,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
