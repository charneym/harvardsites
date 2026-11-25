/* The story scene (DB/BY): how HiJAK AC works, from atlasspine.com (HiJAK AC page): it goes in at a 4.5 mm starting
   height; 2.5 mm of continuous anterior and 1.25 mm of posterior expansion restore height and lordosis (up to 20°);
   the unobstructed graft chamber is packed after expansion.
   ONE continuous fine-line scene, a lateral view of two cervical vertebrae (anterior on the left, the posterior elements
   on the right) with the cage in the disc space and its inserter coming in from the front. Frame 0 is already complete.
   Expansion is drawn to scale with the cage: 56 px = 4.5 mm, so 31 px at the front and 15.5 px at the back.
   Step 1 (insert): the collapsed cage slides home on its inserter.
   Step 2 (expand): the drive in the inserter turns (logo blue); the upper vertebra rises, twice as much at the front.
   Step 3 (pack): graft fills the open chamber and the inserter withdraws.
   Everything is driven by the scrubbed progress. Labels sit in clear space with leaders that stop short of them (DR3). */
var PIV=[560,256],LIFT=15.5,ANG=4.03;
function liftY(x,y,e){var a=ANG*e*Math.PI/180,dx=x-PIV[0],dy=y-PIV[1];return PIV[1]+dx*Math.sin(a)+dy*Math.cos(a)-LIFT*e}
function body(top){var b=top+160;return "M312 "+top+"H588Q600 "+top+" 600 "+(top+12)+"Q593 "+(top+80)+" 600 "+(b-12)+"Q600 "+b+" 588 "+b+"H312Q300 "+b+" 300 "+(b-12)+"Q307 "+(top+80)+" 300 "+(top+12)+"Q300 "+top+" 312 "+top+"Z"}
function inner(top){var b=top+160;return "M318 "+(top+9)+"H582Q591 "+(top+9)+" 590 "+(top+20)+"Q585 "+(top+80)+" 590 "+(b-20)+"Q591 "+(b-9)+" 582 "+(b-9)+"H318Q309 "+(b-9)+" 310 "+(b-20)+"Q315 "+(top+80)+" 310 "+(top+20)+"Q309 "+(top+9)+" 318 "+(top+9)+"Z"}
var STUB_U="M300 118L254 114C250 104 250 96 246 90C240 85 233 89 233 97L231 122C208 128 182 140 162 152C150 160 152 174 164 174C186 172 208 166 228 162C228 180 230 196 233 206C237 215 247 215 249 204C251 190 253 178 257 168L300 170";
function teeth(y,dir){var d="M344 "+y;for(var x=344;x<552;x+=13)d+="L"+(x+6.5)+" "+(y-6*dir)+"L"+(x+13)+" "+y;return d}
/* graft: deterministic scatter inside the opened cage and its lower window */
var GRAFT=[];(function(){var s=7;function r(){s=(s*9301+49297)%233280;return s/233280}
  for(var i=0;i<40;i++){var x=384+r()*128,top=liftY(x,290,1)+4,y=top+r()*(286-top);GRAFT.push([x,y,1.6+r()*1.6])}
  for(i=0;i<12;i++)GRAFT.push([398+r()*104,299+r()*10,1.4+r()*1.4])})();
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'30 70 730 470':'20 40 770 500')+'" aria-hidden="true">';
  /* lower vertebra and the cage's lower plate */
  g+='<g id="scLo">';
  g+='<path class="wl sD" d="'+body(324)+'"/><path class="wo sD" d="'+inner(324)+'"/><path class="wl sD" transform="matrix(-1,0,0,1,900,228)" d="'+STUB_U+'"/>';
  g+='<g id="cgB"><path class="cg sD" d="M340 290H560V318H340Z"/><path class="cg sD" d="'+teeth(318,-1)+'"/><path class="wo sD" d="M394 296H506V312H394Z"/></g>';
  if(!mob)g+='<g id="lLo"><path class="ld" d="M294 420H272"/><text class="t" x="264" y="424" text-anchor="end">LOWER VERTEBRA</text></g>';
  g+='</g>';
  /* the opening between the plates: lift columns, the locking teeth, graft */
  g+='<g id="scMid"><path class="cl" id="col1" d="M372 290V290"/><path class="cl" id="col2" d="M524 290V290"/></g>';
  g+='<g id="scGr">';GRAFT.forEach(function(d){g+='<circle class="gr" cx="'+d[0].toFixed(1)+'" cy="'+d[1].toFixed(1)+'" r="'+d[2].toFixed(1)+'"/>'});g+='</g>';
  /* upper vertebra and the cage's upper plate, which rise together */
  g+='<g id="scUp">';
  g+='<path class="wl sD" d="'+body(96)+'"/><path class="wo sD" d="'+inner(96)+'"/><path class="wl sD" transform="matrix(-1,0,0,1,900,0)" d="'+STUB_U+'"/>';
  g+='<g id="cgT"><path class="cg sD" d="M340 262H560V290H340Z"/><path class="cg sD" d="'+teeth(262,1)+'"/><path class="wo sD" d="M394 268H506V284H394Z"/></g>';
  if(!mob)g+='<g id="lUp"><path class="ld" d="M294 150H272"/><text class="t" x="264" y="154" text-anchor="end">UPPER VERTEBRA</text></g>';
  g+='</g>';
  /* the inserter, with the lifting screw inside its shaft */
  g+='<g id="scIns"><path class="wl sD" d="M108 283H340V297H108Z"/><path class="wl sD" d="M44 276H108V304H44Z"/><path class="wo sD" d="M60 276V304M76 276V304M92 276V304"/>'+
     '<path class="sc" id="scr" d="M114 290H336"/>';
  if(!mob)g+='<g id="lIns"><text class="t" x="108" y="270">INSERTER</text></g>';
  g+='</g>';
  if(!mob)g+='<g id="lTe"><path class="ld" d="M568 296H620"/><text class="t" x="630" y="300">HIJAK AC</text></g>';
  if(!mob)g+='<g class="ori"><text class="t" x="300" y="506">ANTERIOR</text><text class="t" x="600" y="506" text-anchor="end">POSTERIOR</text></g>';
  var ly=mob?530:528,lx=mob?44:40;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'4.5 MM STARTING HEIGHT':'IT GOES IN AT A 4.5 MM STARTING HEIGHT')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'MORE LIFT AT THE FRONT':'2.5 MM ANTERIOR, 1.25 MM POSTERIOR EXPANSION')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'GRAFT PACKED AFTER EXPANSION':'THE GRAFT CHAMBER IS PACKED AFTER EXPANSION')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),up:$("#scUp",svg),cgT:$("#cgT",svg),cgB:$("#cgB",svg),ins:$("#scIns",svg),scr:$("#scr",svg),
    c1:$("#col1",svg),c2:$("#col2",svg),gr:$$("#scGr .gr",svg),
    lUp:$("#lUp",svg),lLo:$("#lLo",svg),lIns:$("#lIns",svg),lTe:$("#lTe",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function ratchet(x,y0,y1){var d="M"+x+" "+y0.toFixed(1),y=y0;while(y-5>y1){d+="L"+(x-4)+" "+(y-2.5).toFixed(1)+"L"+x+" "+(y-5).toFixed(1);y-=5}return d+"L"+x+" "+y1.toFixed(1)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.3),s2=seg(p,.36,.64),s3=seg(p,.68,.94);
    /* 1. the collapsed cage slides the last stretch home on its inserter */
    var sx=-46*(1-s1),wx=-60*s3;
    E.cgT.setAttribute("transform","translate("+sx.toFixed(1)+",0)");E.cgB.setAttribute("transform","translate("+sx.toFixed(1)+",0)");
    E.ins.setAttribute("transform","translate("+(sx+wx).toFixed(1)+",0)");op(E.ins,b*(1-.85*s3));
    /* 2. the lift: the upper vertebra and plate rise, twice as much at the front */
    E.up.setAttribute("transform","translate(0,"+(-LIFT*s2).toFixed(2)+") rotate("+(ANG*s2).toFixed(3)+" "+PIV[0]+" "+PIV[1]+")");
    E.c1.setAttribute("d","M372 290V"+liftY(372,290,s2).toFixed(1));E.c2.setAttribute("d","M524 290V"+liftY(524,290,s2).toFixed(1));
    op(E.c1,b*(s2>0?1:0));op(E.c2,b*(s2>0?1:0));
    E.scr.style.strokeDashoffset=(-60*s2).toFixed(1);op(E.scr,b*(.35+.65*seg(p,.32,.4)*(1-seg(p,.66,.74))));
    /* 3. graft packs the open chamber after expansion */
    E.gr.forEach(function(el,i){op(el,b*seg(p,.72+i*.003,.8+i*.003))});
    op(E.lUp,b*seg(p,.06,.14));op(E.lLo,b*seg(p,.06,.14));
    op(E.lIns,b*seg(p,.08,.16)*(1-seg(p,.66,.72)));
    op(E.lTe,b*seg(p,.06,.14));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
