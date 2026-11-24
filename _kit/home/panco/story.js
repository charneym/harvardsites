/* The story scene (DB): thermoelectrics as panco.de (Thermoelektrik, Abb. 1–3) explains it, drawn in fine line.
   One thermocouple: two ceramic plates, a p leg and an n leg joined by a copper bridge, an outer circuit.
   Step 1 (Seebeck): heat enters the upper plate, carriers drift down both legs, a current flows and the load lights.
   Step 2 (Peltier): a source drives the current the other way round the loop; the upper plate turns cold, the lower warm.
   Step 3 (Modul): the single pair gives way to a row of pairs between two long plates, with the red and black leads.
   Frame 0 is complete (plates, legs, bridge, circuit). Labels sit clear of every stroke (DR). Driven by scrubbed progress. */
var SCW=760,SCH=560;
function f1(v){return v.toFixed(1)}
function R(x,y,w,h){return 'M'+x+' '+y+'h'+w+'v'+h+'h'+(-w)+'Z'}
var DOTS=[];(function(){for(var leg=0;leg<2;leg++)for(var i=0;i<5;i++)DOTS.push([leg?490:270,i/5])})();
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'70 46 620 514':'84 40 620 520')+'" aria-hidden="true">';
  /* the single couple */
  g+='<g id="cpl">';
  g+='<path id="tpF" class="pf" d="'+R(150,120,460,30)+'"/><path id="bpF" class="pf" d="'+R(150,400,460,30)+'"/>';
  g+='<path class="wl sD" d="'+R(150,120,460,30)+'"/><path class="wl sD" d="'+R(150,400,460,30)+'"/>';
  g+='<path class="cu sD" d="'+R(220,150,320,18)+'"/><path class="cu sD" d="'+R(196,382,124,18)+'"/><path class="cu sD" d="'+R(440,382,124,18)+'"/>';
  g+='<path class="lg sD" d="'+R(220,168,100,214)+'"/><path class="lg sD" d="'+R(440,168,100,214)+'"/>';
  g+='<text class="t lt" x="204" y="284" text-anchor="end">p</text><text class="t lt" x="556" y="284">n</text>';
  g+='<g id="dots">'+DOTS.map(function(d){return '<circle class="cr" cx="'+d[0]+'" cy="200" r="4"/>'}).join("")+'</g>';
  /* outer circuit: wires from the two lower pads to the element in the middle */
  g+='<path class="wo sD" d="M226 430V486H344"/><path class="wo sD" d="M534 430V486H416"/>';
  g+='<g id="load"><path class="el" d="'+R(348,474,64,24)+'"/><path id="loadG" class="eg" d="'+R(348,474,64,24)+'"/></g>';
  g+='<g id="src"><path class="el" d="M344 486H372M372 466V506M390 474V498M390 486H416"/></g>';
  g+='<g id="arrR"><path class="ar" d="M282 480l8 6-8 6M466 492l-8-6 8-6"/></g>';
  g+='<g id="arrL"><path class="ar" d="M290 480l-8 6 8 6M458 480l8 6-8 6"/></g>';
  /* heat into the upper plate in step 1 */
  g+='<g id="heat">'+[290,380,470].map(function(x){return '<path class="hw" d="M'+x+' 64c-6 6 6 12 0 18s6 12 0 18M'+(x-6)+' 96l6 10 6-10"/>'}).join("")+'</g>';
  g+='</g>';
  /* plate tags, left of the plates */
  var tx=mob?136:136;
  g+='<g id="tg1"><text class="t hot" x="'+tx+'" y="140" text-anchor="end">HEISS</text><text class="t cold" x="'+tx+'" y="420" text-anchor="end">KALT</text></g>';
  g+='<g id="tg2"><text class="t cold" x="'+tx+'" y="140" text-anchor="end">KALT</text><text class="t hot" x="'+tx+'" y="420" text-anchor="end">WARM</text></g>';
  if(!mob){g+='<g id="lLd"><text class="t" x="380" y="526" text-anchor="middle">LAST</text></g>';
  g+='<g id="lSr"><text class="t" x="380" y="526" text-anchor="middle">QUELLE</text></g>';}else g+='<g id="lLd"></g><g id="lSr"></g>';
  if(!mob)g+='<g id="lHt"><text class="t hot" x="512" y="90">WÄRME</text></g>';else g+='<g id="lHt"></g>';
  /* the module: a row of pairs between two long plates */
  var N=8,x0=108,pw=68,legw=22;
  g+='<g id="mod">';
  g+='<path class="wl mD" d="'+R(90,206,580,24)+'"/><path class="wl mD" d="'+R(90,334,580,24)+'"/>';
  for(var i=0;i<N;i++){var x=x0+i*pw;
    g+='<g class="pr"><path class="lg2" d="'+R(x,240,legw,84)+'"/><path class="lg2" d="'+R(x+36,240,legw,84)+'"/><path class="cu2" d="'+R(x-4,230,legw+44,10)+'"/>'+
      (i<N-1?'<path class="cu2" d="'+R(x+32,324,legw+44,10)+'"/>':'')+'</g>'}
  g+='<path class="cu2 pr0" d="'+R(x0-4,324,legw+8,10)+'"/>';
  g+='<path class="lr" d="M112 358C112 392 106 420 96 448"/><path class="lk2" d="M130 358C131 394 127 424 120 454"/>';
  g+='<text class="t" x="380" y="190" text-anchor="middle">KERAMIKPLATTE</text>';
  g+='<text class="t" x="380" y="386" text-anchor="middle">'+(mob?'HALBLEITERPAARE':'VIELE HALBLEITERPAARE')+'</text>';
  g+='</g>';
  var ly=SCH-6,lx=mob?90:100;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'SEEBECK: WÄRME → STROM':'SEEBECK-EFFEKT: AUS WÄRME WIRD STROM')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PELTIER: STROM → KÄLTE':'PELTIER-EFFEKT: AUS STROM WIRD KÄLTE')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'EIN PELTIERELEMENT':'EIN PELTIERELEMENT: VIELE PAARE, VERSCHLEISSFREI')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),mod:dl(".mD"),cpl:$("#cpl",svg),modG:$("#mod",svg),pr:$$("#mod .pr",svg),pr0:$("#mod .pr0",svg),lr:$$("#mod .lr, #mod .lk2, #mod text",svg),
    tp:$("#tpF",svg),bp:$("#bpF",svg),dots:$$("#dots circle",svg),load:$("#load",svg),loadG:$("#loadG",svg),src:$("#src",svg),aR:$("#arrR",svg),aL:$("#arrL",svg),heat:$("#heat",svg),
    tg1:$("#tg1",svg),tg2:$("#tg2",svg),lLd:$("#lLd",svg),lSr:$("#lSr",svg),lHt:$("#lHt",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function mix(a,b,t){return a.map(function(v,i){return Math.round(v+(b[i]-v)*t)})}
  var HOT=[239,79,56],COLD=[110,168,214],NEU=[243,245,247];
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* step windows: 1 = .05-.33, 2 = .38-.64, 3 = .70-1 */
    var s1=sm(seg(p,.04,.14))*(1-sm(seg(p,.32,.4))),s2=sm(seg(p,.38,.48))*(1-sm(seg(p,.62,.7))),s3=sm(seg(p,.66,.8));
    op(E.cpl,b*(1-s3));op(E.modG,b*s3);draw(E.mod,s3);
    E.pr.forEach(function(el,i){op(el,sm(seg(s3,.2+i*.07,.4+i*.07)))});op(E.pr0,sm(seg(s3,.2,.4)));E.lr.forEach(function(el){op(el,sm(seg(s3,.75,1)))});
    /* plate tints: step 1 hot top / cold bottom, step 2 the reverse */
    var tc=s1>=s2?mix(NEU,HOT,s1):mix(NEU,COLD,s2),bc=s1>=s2?mix(NEU,COLD,s1):mix(NEU,HOT,s2),ta=Math.max(s1,s2)*.2;
    E.tp.style.fill='rgba('+tc.join(",")+','+ta.toFixed(3)+')';E.bp.style.fill='rgba('+bc.join(",")+','+ta.toFixed(3)+')';
    /* carriers drift down both legs while a current flows */
    var fl=Math.max(s1,s2),ph=(p*9)%1;
    E.dots.forEach(function(c,i){var k=(DOTS[i][1]+ph)%1;c.setAttribute("cy",f1(184+k*186));op(c,fl*Math.min(1,Math.min(k,1-k)*6))});
    op(E.load,1-s2);op(E.loadG,s1);op(E.src,s2);op(E.aR,s1);op(E.aL,s2);op(E.heat,s1);
    op(E.tg1,s1);op(E.tg2,s2);op(E.lLd,s1);op(E.lSr,s2);op(E.lHt,s1);
    op(E.l1,b*s1);op(E.l2,b*s2);op(E.l3,b*s3);
  };
}
