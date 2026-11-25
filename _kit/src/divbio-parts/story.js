/* The story scene (DB/BL/BY): the Planet-Safe® life cycle as Diversified Biotech describes it (divbio.com press releases, planetsafe.com):
   Bonsucro-certified sugarcane -> PLA resin (TotalEnergies Corbion) -> clear cell culture dishes that bind cells without coating
   (42% more cells at 24 h) -> ASTM D6400 industrial compost, full disintegration before day 84, non-phytotoxic (ASTM D6002).
   ONE fine-line drawing: a ring (the orbit of the Planet-Safe globe) with three stations, the sugarcane, the dish and the compost
   mound with a seedling. The scrubbed progress lights each station in turn and draws the arc that carries the material on. */
var DB_C=[300,236],DB_R=160;
function dbPt(a){a=a*Math.PI/180;return [DB_C[0]+DB_R*Math.cos(a),DB_C[1]+DB_R*Math.sin(a)]}
function dbArc(a0,a1){var p=dbPt(a0),q=dbPt(a1),big=Math.abs(a1-a0)>180?1:0;return 'M'+p[0].toFixed(1)+' '+p[1].toFixed(1)+'A'+DB_R+' '+DB_R+' 0 '+big+' 1 '+q[0].toFixed(1)+' '+q[1].toFixed(1)}
function dbHead(a){/* a small chevron pointing along the ring (clockwise) at angle a */
  var p=dbPt(a),t=(a+90)*Math.PI/180,n=a*Math.PI/180,tx=Math.cos(t),ty=Math.sin(t),nx=Math.cos(n),ny=Math.sin(n);
  var b=[p[0]-tx*9,p[1]-ty*9];return 'M'+(b[0]+nx*5).toFixed(1)+' '+(b[1]+ny*5).toFixed(1)+'L'+p[0].toFixed(1)+' '+p[1].toFixed(1)+'L'+(b[0]-nx*5).toFixed(1)+' '+(b[1]-ny*5).toFixed(1)}
function storyScene(o){
  var mob=o.mob,g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 640 472" aria-hidden="true">';
  /* the ring, gapped at each station */
  var GAP=[[198,292],[328,392],[68,162]];
  g+='<g id="dbRing">'+GAP.map(function(s){return '<path class="wo" d="'+dbArc(s[0],s[1])+'"/>'}).join("")+'</g>';
  /* the travelling arcs, one per step, each with its chevron */
  g+='<g id="dbArcs">'+GAP.map(function(s,k){return '<path class="ra" id="dbA'+k+'" d="'+dbArc(s[0],s[1])+'"/><path class="rh" id="dbH'+k+'" d="'+dbHead(s[1])+'"/>'}).join("")+'</g>';
  /* station A: sugarcane, three jointed stalks with long leaves */
  var A=dbPt(180);g+='<g id="dbCane" class="stn" transform="translate('+A[0].toFixed(1)+' '+A[1].toFixed(1)+')">';
  [[-16,40,-38],[0,44,-58],[16,40,-30]].forEach(function(s){g+='<path class="sl sD" d="M'+s[0]+' '+s[1]+'V'+s[2]+'"/>';for(var y=s[1]-14;y>s[2]+6;y-=16)g+='<path class="sl sD" d="M'+(s[0]-4)+' '+y+'H'+(s[0]+4)+'"/>'});
  g+='<path class="sl sD" d="M0 -58C-10 -76 -26 -82 -40 -78M0 -40C14 -62 30 -66 42 -60M-16 -38C-26 -50 -38 -52 -48 -46M16 -30C26 -44 38 -46 46 -40M0 -12C-12 -26 -28 -28 -40 -22"/>';
  g+='<path class="sl sD" d="M-34 44H34"/></g>';
  /* station B: a Planet-Safe culture dish, lid tilted behind, medium inside; cells appear on the surface in step 2 */
  var B=dbPt(310);g+='<g id="dbDish" class="stn" transform="translate('+B[0].toFixed(1)+' '+B[1].toFixed(1)+')">';
  g+='<ellipse class="sl sD" cx="-14" cy="-10" rx="46" ry="15"/>';
  g+='<path class="md" id="dbMed" d="M-38 4a44 13 0 1 0 88 0a44 13 0 1 0 -88 0z"/>';
  g+='<path class="sl sD" d="M-40 2a46 15 0 1 0 92 0a46 15 0 1 0 -92 0z"/><path class="sl sD" d="M-40 2v12a46 15 0 0 0 92 0V2"/>';
  g+='<g id="dbCells">';[[-14,2],[-2,8],[12,0],[24,8],[4,-4],[30,1],[-24,7],[16,10]].forEach(function(c){g+='<circle class="ce" cx="'+c[0]+'" cy="'+c[1]+'" r="2.6"/>'});g+='</g></g>';
  /* station C: a compost mound with a seedling */
  var C=dbPt(50);g+='<g id="dbSoil" class="stn" transform="translate('+C[0].toFixed(1)+' '+C[1].toFixed(1)+')">';
  g+='<path class="sl sD" d="M-46 24C-34 2 -16 -6 0 -6S34 2 46 24Z"/>';
  g+='<g id="dbGr">';[[-24,16],[-10,8],[6,12],[22,16],[-2,19],[14,5]].forEach(function(c){g+='<circle class="gr" cx="'+c[0]+'" cy="'+c[1]+'" r="1.8"/>'});g+='</g>';
  g+='<path class="sp" id="dbStem" d="M0 -6V-34"/><path class="lf" id="dbLf" d="M0 -22C-6 -32 -16 -34 -22 -30C-18 -22 -8 -20 0 -22ZM0 -28C6 -38 16 -40 22 -36C18 -28 8 -26 0 -28Z"/></g>';
  /* labels, each outside the ring and clear of every stroke (DR3) */
  if(mob){
    g+='<g id="lb1"><text class="a" x="24" y="356">SUGARCANE</text></g>';
    g+='<g id="lb2"><text class="a" x="616" y="40" text-anchor="end">PLA DISH</text><text class="t" x="616" y="196" text-anchor="end">+42% CELLS</text></g>';
    g+='<g id="lb3"><text class="a" x="616" y="300" text-anchor="end">COMPOST</text><text class="t" x="616" y="458" text-anchor="end">BY DAY 84</text></g>';
  }else{
    g+='<g id="lb1"><text class="a" x="40" y="352">SUGARCANE</text><text class="t" x="40" y="372">BONSUCRO-CERTIFIED</text></g>';
    g+='<g id="lb2"><text class="a" x="474" y="104">PLA CULTURE DISH</text><text class="t" x="474" y="124">+42% CELLS AT 24 H</text></g>';
    g+='<g id="lb3"><text class="a" x="474" y="356">INDUSTRIAL COMPOST</text><text class="t" x="474" y="376">ASTM D6400 · DAY 84</text></g>';
  }
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={ring:$$("#dbRing .wo",svg),base:dl(".stn .sD"),arcs:[0,1,2].map(function(k){return dl("#dbA"+k)[0]}),heads:[0,1,2].map(function(k){return $("#dbH"+k,svg)}),
    stn:[$("#dbCane",svg),$("#dbDish",svg),$("#dbSoil",svg)],med:$("#dbMed",svg),cells:$$("#dbCells .ce",svg),gr:$("#dbGr",svg),stem:dl("#dbStem")[0],lf:$("#dbLf",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function dr(a,v){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.ring.forEach(function(r){op(r,b)})}
    /* each station brightens while its step is current */
    var on=[seg(p,.02,.08)*(1-seg(p,.3,.36)),seg(p,.36,.42)*(1-seg(p,.63,.69)),seg(p,.69,.75)];
    E.stn.forEach(function(s,k){s.classList.toggle("on",on[k]>.5)});
    /* 1. the cane: the arc carries the resin round to the dish */
    dr(E.arcs[0],seg(p,.1,.32));op(E.heads[0],b*seg(p,.3,.33));
    op(E.l1,b*seg(p,.03,.09));
    /* 2. the dish: medium in, cells settle on the surface */
    op(E.med,b*seg(p,.36,.44));
    E.cells.forEach(function(c,i){op(c,b*seg(p,.44+i*.018,.48+i*.018))});
    dr(E.arcs[1],seg(p,.5,.64));op(E.heads[1],b*seg(p,.62,.65));
    op(E.l2,b*seg(p,.37,.43));
    /* 3. compost: the granules, the seedling, and the ring closes back to the field */
    op(E.gr,b*seg(p,.7,.76));dr(E.stem,seg(p,.74,.82));op(E.lf,b*seg(p,.8,.86));
    dr(E.arcs[2],seg(p,.8,.95));op(E.heads[2],b*seg(p,.93,.96));
    op(E.l3,b*seg(p,.7,.76));
  };
}
