/* The story scene (DB/BL): how Ail Arian's ink closes the loop, as the firm describes it (ailarian.co.uk, Sustainability and
   Smart Packaging): a circuit is printed in recyclable silver ink on a paper insert; at end of life the ferromagnetic circuit is
   separated from the waste stream by the magnets already in place at recycling centres, while the paper goes on to be recycled;
   the recovered silver is formulated into new conductive ink, which goes back to print. Drawn as ONE fine-line scene that fills
   the frame: the insert (left), a recycling line under a magnet (centre), a jar of new ink (right), a return loop over the top.
   Frame 0 is complete. Step 1: the tracks print and the LEDs light. Step 2: the field shows and the silver lifts to the magnet;
   the paper moves on. Step 3: the silver flows into the jar, which fills, and the loop runs back to the insert. Driven by
   scrubbed progress. No stroke uses vector-effect:non-scaling-stroke (DR4). */
var SCW=760,SCH=560;
var LX=[150,180,210,240];
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'24 60 716 420':'24 56 716 452')+'" aria-hidden="true">';
  var trTop='M90 206V180H252'+LX.map(function(x){return 'M'+x+' 180V224'}).join(""),
      trBot='M116 232H128V285H252'+LX.map(function(x){return 'M'+x+' 240V285'}).join("");
  g+='<g id="scBase">'+
     /* the paper insert, its printed tracks (faint), the cell and the LEDs */
     '<rect class="wl sD" x="40" y="150" width="230" height="160"/>'+
     '<path class="tr sD" d="'+trTop+'"/><path class="tr sD" d="'+trBot+'"/>'+
     '<circle class="wl sD" cx="90" cy="232" r="26"/><circle class="wo sD" cx="90" cy="232" r="19"/>'+
     LX.map(function(x){return '<rect class="led sD" x="'+(x-6)+'" y="224" width="12" height="16"/>'}).join("")+
     /* the recycling line: belt and rollers */
     '<path class="wl sD" d="M300 400H724M300 412H724"/><circle class="wo sD" cx="306" cy="406" r="10"/><circle class="wo sD" cx="718" cy="406" r="10"/>'+
     /* the magnet over the line */
     '<path class="mg sD" d="M430 330V250A40 40 0 0 1 510 250V330H490V250A20 20 0 0 0 450 250V330Z"/>'+
     '<path class="wo sD" d="M430 310H450M490 310H510"/>'+
     /* the insert on the line, under the magnet, and the paper moving on */
     '<rect class="wo sD" x="446" y="388" width="48" height="10"/><rect class="wo sD" x="626" y="388" width="48" height="10"/>'+
     /* the jar of new ink */
     '<path class="wl sD" d="M622 172H690V250Q690 262 678 262H634Q622 262 622 250Z"/><rect class="wl sD" x="616" y="156" width="80" height="16"/>'+
     '</g>';
  /* lit: printed tracks, LED glow, field, silver lifting, paper arrow, flow to the jar, level, return loop */
  g+='<g id="scLit"><path id="tA" class="tl" d="'+trTop+'"/><path id="tB" class="tl" d="'+trBot+'"/>'+
     LX.map(function(x,i){return '<rect id="lg'+i+'" class="lg" x="'+(x-6)+'" y="224" width="12" height="16"/>'}).join("")+
     '<path id="fd0" class="fd" d="M440 334Q470 366 500 334"/><path id="fd1" class="fd" d="M436 334Q470 386 504 334"/>'+
     [384,366,348].map(function(y,r){return '<g id="fk'+r+'">'+[456,466,474,484].map(function(x,i){return '<circle class="fk" cx="'+(x+(r%2?3:0))+'" cy="'+(y-(i%2)*4)+'" r="2.2"/>'}).join("")+'</g>'}).join("")+
     '<path id="pa" class="lt" d="M502 392H612"/><path id="paH" class="lt" d="M604 386L612 392L604 398"/>'+
     '<path id="lj" class="lt" d="M510 270C560 270 574 222 616 222"/>'+
     '<rect id="lv" class="lv" x="626" y="258" width="60" height="0"/>'+
     '<path id="lr" class="lt" d="M640 156C640 104 560 90 400 90C240 90 156 104 156 150"/><path id="lrH" class="lt" d="M149 140L156 150L163 140"/></g>';
  if(!mob){
    /* labels sit clear of every stroke (DR3) */
    g+='<g id="lCard"><text class="t" x="155" y="340" text-anchor="middle">PAPER INSERT</text></g>';
    g+='<g id="lMag"><text class="t" x="418" y="262" text-anchor="end">MAGNET</text></g>';
    g+='<g id="lLine"><text class="t" x="512" y="446" text-anchor="middle">RECYCLING LINE</text></g>';
    g+='<g id="lPap"><text class="t" x="650" y="370" text-anchor="middle">PAPER, RECYCLED</text></g>';
    g+='<g id="lJar"><text class="t" x="656" y="290" text-anchor="middle">NEW INK</text></g>';
    g+='<g id="lLoop"><text class="t o" x="400" y="76" text-anchor="middle">BACK TO PRINT</text></g>';
  }else{g+='<g id="lCard"></g><g id="lMag"></g><g id="lLine"></g><g id="lPap"></g><g id="lJar"></g><g id="lLoop"></g>'}
  var ly=mob?470:494,lx=mob?40:40;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PRINTED IN SILVER INK':'TRACKS PRINTED IN RECYCLABLE SILVER INK')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PULLED OUT BY MAGNETS':'MAGNETS LIFT THE SILVER, THE PAPER MOVES ON')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'MADE INTO NEW INK':'RECOVERED SILVER IS MADE INTO NEW INK')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var one=function(id){return dl("#"+id)[0]};
  var E={base:dl(".sD"),tA:one("tA"),tB:one("tB"),pa:one("pa"),paH:one("paH"),lj:one("lj"),lr:one("lr"),lrH:one("lrH"),
    lg:[0,1,2,3].map(function(i){return $("#lg"+i,svg)}),fd:[0,1].map(function(i){return $("#fd"+i,svg)}),fk:[0,1,2].map(function(i){return $("#fk"+i,svg)}),
    lv:$("#lv",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function dr(a,v){if(!a)return;a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1);a[0].style.opacity=v>0?"1":"0"}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* step 1: the tracks print, then the LEDs light */
    var a1=sm(seg(p,.04,.22));dr(E.tA,a1*b);dr(E.tB,a1*b);
    E.lg.forEach(function(el,i){op(el,b*sm(seg(p,.2+i*.02,.26+i*.02)))});
    /* step 2: the field shows, the silver lifts row by row, the paper moves on */
    var f=sm(seg(p,.36,.44));E.fd.forEach(function(el){op(el,b*f)});
    E.fk.forEach(function(el,i){var s=.42+i*.05;op(el,b*sm(seg(p,s,s+.05))*(1-sm(seg(p,.7,.76))))});
    dr(E.pa,b*sm(seg(p,.5,.6)));dr(E.paH,b*sm(seg(p,.58,.62)));
    /* step 3: the silver flows to the jar, which fills, and the loop runs back to print */
    dr(E.lj,b*sm(seg(p,.7,.78)));
    var lv=sm(seg(p,.76,.88))*b,hh=68*lv;if(E.lv){E.lv.setAttribute("y",(258-hh).toFixed(1));E.lv.setAttribute("height",hh.toFixed(1))}
    dr(E.lr,b*sm(seg(p,.84,.96)));dr(E.lrH,b*sm(seg(p,.95,.98)));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.76,.84));
  };
}
