/* The story scene (DB): a pressure decay leak test, as tqc.co.uk explains air decay testing, drawn in fine line.
   A cast part sealed on its fixture, the supply line with a valve, a pressure transducer, and the pressure trace below.
   Step 1 (Fill): air flows from the supply through the open valve into the part; the trace climbs to test pressure.
   Step 2 (Settle): the valve closes; the trace eases onto a plateau while the trapped air stabilises.
   Step 3 (Measure): the trace is watched against the reject limit; the decay stays inside it and the part passes.
   Frame 0 is complete (part, lines, valve, transducer, axes). Labels sit clear of every stroke (DR). Scrubbed progress. */
var SCW=760,SCH=560;
function f1(v){return v.toFixed(1)}
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'96 40 600 520':'84 40 620 520')+'" aria-hidden="true">';
  /* the part: a cast body with an internal gallery, on a fixture plate */
  g+='<path id="ptF" class="pf" d="M372 150H636V292H372Z"/>';
  g+='<path class="wl sD" d="M372 150H636V292H372Z"/>';
  g+='<path class="wi sD" d="M392 222H436C452 222 452 184 470 184H540C558 184 558 252 576 252H616"/>';
  g+='<path class="wl sD" d="M352 292H656V306H352Z"/>';
  /* supply line, valve, transducer tee */
  g+='<path class="wo sD" d="M130 222H222"/><path class="wo sD" d="M262 222H372"/>';
  g+='<path class="wo sD" d="M316 222V146"/><path class="el sD" d="M294 112H338V146H294Z"/>';
  g+='<g id="vlv"><path class="el" d="M222 206L262 238V206L222 238Z"/><path id="vlvC" class="vc" d="M222 206L262 238V206L222 238Z"/></g>';
  g+='<g id="flow">'+[0,1,2,3,4,5].map(function(){return '<circle class="cr" cx="140" cy="222" r="3.5"/>'}).join("")+'</g>';
  /* the trace: axes, reject limit, three segments */
  g+='<path class="ax sD" d="M140 360V500H650"/>';
  g+='<path id="lim" class="lm" d="M404 420H650"/>';
  g+='<path id="c1" class="cv" d="M140 500C190 500 214 470 236 440S262 393 284 390"/>';
  g+='<path id="c2" class="cv" d="M284 390C312 388 330 398 352 397S384 396 404 396"/>';
  g+='<path id="c3" class="cv" d="M404 396C470 397 560 399 646 401"/>';
  /* labels, each with clear space around it */
  g+='<text class="t" x="130" y="198">'+(mob?'AIR':'SUPPLY')+'</text>';
  if(!mob)g+='<text class="t" x="242" y="268" text-anchor="middle">VALVE</text><text class="t" x="352" y="134">TRANSDUCER</text>';
  g+='<text class="t" x="636" y="134" text-anchor="end">PART</text>';
  g+='<text class="t" x="152" y="358">'+(mob?'P':'PRESSURE')+'</text><text class="t" x="650" y="526" text-anchor="end">TIME</text>';
  g+='<g id="limT"><text class="t lmt" x="650" y="446" text-anchor="end">'+(mob?'LIMIT':'REJECT LIMIT')+'</text></g>';
  g+='<g id="pass"><text class="a ok" x="646" y="378" text-anchor="end">PASS</text></g>';
  var ly=SCH-6,lx=mob?104:100;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'FILL TO TEST PRESSURE':'1 · FILL: AIR TO TEST PRESSURE')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'VALVE SHUT, SETTLE':'2 · SETTLE: VALVE SHUT, AIR STABILISES')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'MEASURE THE DECAY':'3 · MEASURE: DECAY INSIDE THE LIMIT')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),c1:dl("#c1"),c2:dl("#c2"),c3:dl("#c3"),lim:$("#lim",svg),pt:$("#ptF",svg),vc:$("#vlvC",svg),dots:$$("#flow circle",svg),
    limT:$("#limT",svg),pass:$("#pass",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=sm(seg(p,.04,.14))*(1-sm(seg(p,.32,.4))),s2=sm(seg(p,.38,.48))*(1-sm(seg(p,.62,.7))),s3=sm(seg(p,.66,.8));
    /* the trace: each segment draws in its own step and stays (the last reaches its end point at .94) */
    draw(E.c1,sm(seg(p,.06,.3))*b);draw(E.c2,sm(seg(p,.4,.6))*b);draw(E.c3,sm(seg(p,.7,.94))*b);
    op(E.lim,sm(seg(p,.66,.76))*b);op(E.limT,sm(seg(p,.72,.8))*b);op(E.pass,sm(seg(p,.9,.97))*b);
    /* pressure in the part: a blue tint that builds with the fill */
    var pr=sm(seg(p,.06,.3));E.pt.style.fill='rgba(90,169,220,'+(pr*.16*b).toFixed(3)+')';
    /* air flows only while the valve is open */
    var fl=s1,ph=(p*10)%1;
    E.dots.forEach(function(c,i){var k=(i/6+ph)%1;c.setAttribute("cx",f1(140+k*228));op(c,fl*Math.min(1,Math.min(k,1-k)*8))});
    op(E.vc,sm(seg(p,.34,.42)));
    op(E.l1,b*s1);op(E.l2,b*s2);op(E.l3,b*s3);
  };
}
