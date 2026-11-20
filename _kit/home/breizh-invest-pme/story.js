/* the story scene (DB): ONE engraved chart of Brittany, the firm's own motif (its home page sets the four département
   numbers around the coast). Each step inks one more layer of the same chart: the project (coastline, the four
   départements, the office at Saint-Jacques-de-la-Lande), the committee (the shareholding split, as published), the
   minority ticket (the latest participations, pinned at their real towns) and the long term (lines from the office to
   each company, the published job count). */
function scene(){
  var mob=MOBILE(),f=function(n){return n.toFixed(1)};
  function P(lon,lat){return [45+(lon+5.12)*170.6,46+(48.9-lat)*255]}
  function poly(a){return a.map(function(q,i){var p=P(q[0],q[1]);return (i?"L":"M")+f(p[0])+" "+f(p[1])}).join("")+"Z"}
  var COAST=[[-1.51,48.63],[-1.68,48.61],[-1.85,48.68],[-1.84,48.71],[-1.95,48.67],[-2.02,48.65],[-2.03,48.6],[-2.06,48.63],[-2.17,48.6],[-2.26,48.64],[-2.32,48.685],[-2.4,48.64],[-2.46,48.64],[-2.55,48.59],[-2.67,48.53],[-2.73,48.51],[-2.78,48.56],[-2.82,48.6],[-2.82,48.65],[-2.95,48.72],[-3.04,48.78],[-3.0,48.83],[-3.1,48.86],[-3.23,48.84],[-3.32,48.84],[-3.44,48.82],[-3.53,48.8],[-3.57,48.77],[-3.56,48.69],[-3.65,48.69],[-3.75,48.68],[-3.85,48.64],[-3.9,48.68],[-3.98,48.73],[-4.07,48.69],[-4.17,48.67],[-4.33,48.68],[-4.45,48.63],[-4.57,48.6],[-4.7,48.56],[-4.77,48.5],[-4.77,48.42],[-4.78,48.36],[-4.77,48.33],[-4.62,48.34],[-4.49,48.38],[-4.37,48.35],[-4.2,48.3],[-4.3,48.28],[-4.45,48.3],[-4.57,48.36],[-4.62,48.25],[-4.5,48.22],[-4.4,48.16],[-4.33,48.1],[-4.45,48.1],[-4.6,48.06],[-4.71,48.06],[-4.74,48.04],[-4.6,48.01],[-4.54,48.01],[-4.43,47.95],[-4.37,47.8],[-4.25,47.8],[-4.17,47.83],[-4.11,47.87],[-3.98,47.85],[-3.92,47.87],[-3.83,47.8],[-3.76,47.79],[-3.55,47.77],[-3.45,47.71],[-3.37,47.73],[-3.35,47.69],[-3.21,47.65],[-3.14,47.58],[-3.12,47.5],[-3.1,47.48],[-3.08,47.56],[-3.03,47.58],[-2.95,47.56],[-2.85,47.62],[-2.75,47.64],[-2.88,47.55],[-2.84,47.5],[-2.62,47.51],[-2.48,47.48],[-2.45,47.51],[-2.3,47.52],[-2.08,47.65],[-1.9,47.69],[-1.73,47.7],[-1.47,47.75],[-1.32,47.83],[-1.23,47.94],[-1.1,48.05],[-1.03,48.13],[-1.05,48.29],[-1.1,48.39],[-1.15,48.48],[-1.43,48.55],[-1.51,48.63]];
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  /* base: neatline, graticule, a swell line along the coast, the coast itself, islands, title block */
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  var gr='';[-5,-4,-3,-2].forEach(function(lo){var a=P(lo,49);gr+='M'+f(a[0])+' 70V470'});[48.5,48,47.5].forEach(function(la){var a=P(-5.2,la);gr+='M10 '+f(a[1])+'H790'});
  g+='<path class="sD ht" d="'+gr+'"/>';
  var cp=poly(COAST);
  g+='<path class="sD wave" d="'+cp+'"/>';
  g+='<path class="sD gr" d="'+cp+'"/>';
  [[-5.08,48.46,7,4],[-3.18,47.33,15,6],[-3.46,47.64,6,3],[-2.98,48.86,3,2.4],[-4.98,48.36,3,2]].forEach(function(o){var p=P(o[0],o[1]);g+='<ellipse class="sD bl" cx="'+f(p[0])+'" cy="'+f(p[1])+'" rx="'+o[2]+'" ry="'+o[3]+'"/>'});
  g+='<g class="tb"><path class="tbl" d="M24 492h250v52h-250Z M24 518h250"/><text x="34" y="510" class="t">BREIZH · BRETAGNE</text><text x="34" y="536" class="t s">4 DÉPARTEMENTS</text></g>';
  g+='</g>';
  /* 1 the project: the four départements as the firm numbers them, and the office */
  var hq=P(-1.72,48.09);
  var DEP=[["29",-3.95,48.42],["22",-2.98,48.26],["56",-2.85,47.86],["35",-1.68,48.38]];
  g+='<g id="sc1">';DEP.forEach(function(d){var p=P(d[1],d[2]);g+='<circle class="dep dr" cx="'+f(p[0])+'" cy="'+f(p[1])+'" r="25"/><text x="'+f(p[0])+'" y="'+f(p[1]+7)+'" text-anchor="middle" class="num">'+d[0]+'</text>'});
  g+='<circle class="hq" cx="'+f(hq[0])+'" cy="'+f(hq[1])+'" r="6"/><circle class="hqr dr" cx="'+f(hq[0])+'" cy="'+f(hq[1])+'" r="13"/><text x="'+f(hq[0])+'" y="'+f(hq[1]-24)+'" text-anchor="middle" class="lb">SIÈGE</text>';
  g+='<text x="40" y="44" class="a">80 DOSSIERS · 2025</text></g>';
  /* 2 the committee: the shareholding, as the firm publishes it */
  var bx=330,by=500,bw=440;
  g+='<g id="sc2"><path class="kb dr" d="M'+bx+' '+by+'H'+(bx+bw)+'V'+(by+22)+'H'+bx+'Z"/><path class="fillA dr" d="M'+bx+' '+by+'H'+f(bx+bw*.552)+'V'+(by+22)+'H'+bx+'Z"/>'+
     '<text x="'+bx+'" y="'+(by-10)+'" class="t">PRIVÉ · 55,2 %</text><text x="'+(bx+bw)+'" y="'+(by-10)+'" text-anchor="end" class="t">PUBLIC · 44,8 %</text>'+
     '<text x="'+bx+'" y="'+(by+44)+'" class="t s">BANQUES RÉGIONALES</text><text x="'+(bx+bw)+'" y="'+(by+44)+'" text-anchor="end" class="t s">RÉGION · BPIFRANCE</text>'+
     '<text x="40" y="44" class="a">LE COMITÉ</text></g>';
  /* 3 the minority ticket: the latest participations at their real towns */
  var PINS=[["SMAP",-1.6,48.12,14,6,"start"],["MOG",-1.5,47.96,14,6,"start"],["MARCADÉ",-2.41,48.08,0,-15,"middle"],["MA KIBELL",-2.85,48.52,-14,5,"end"],["VÉLOC’OUEST",-2.76,47.66,12,-12,"start"]];
  g+='<g id="sc3">';PINS.forEach(function(q){var p=P(q[1],q[2]);g+='<path class="pin dr" d="M'+f(p[0]-5)+' '+f(p[1])+'a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><text x="'+f(p[0]+q[3])+'" y="'+f(p[1]+q[4])+'" text-anchor="'+q[5]+'" class="lb">'+q[0]+'</text>'});
  g+='<text x="40" y="44" class="a">100 K€ – 500 K€</text></g>';
  /* 4 the long term: the office tied to each company; the published job count */
  var ln='';PINS.forEach(function(q){var p=P(q[1],q[2]);var mx=(hq[0]+p[0])/2,my=Math.max(hq[1],p[1])+36;ln+='M'+f(hq[0])+' '+f(hq[1])+'Q'+f(mx)+' '+f(my)+' '+f(p[0])+' '+f(p[1])});
  g+='<g id="sc4"><path class="route dr" d="'+ln+'"/>';PINS.forEach(function(q){var p=P(q[1],q[2]);g+='<circle class="lit" cx="'+f(p[0])+'" cy="'+f(p[1])+'" r="5"/>'});
  g+='<text x="40" y="44" class="a">7 ANS · 1 200 EMPLOIS</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb",svg),g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),g4:$("#sc4",svg),
    d1:dl("#sc1 .dr"),d2:dl("#sc2 .dr"),d3:dl("#sc3 .dr"),d4:dl("#sc4 .dr"),t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    E.g1.style.opacity=b.toFixed(3);draw(E.d1,b*Math.max(s1,.6));
    E.g2.style.opacity=(b*(s2>0?1:0)).toFixed(3);draw(E.d2,s2);
    E.g3.style.opacity=(b*(s3>0?1:0)).toFixed(3);draw(E.d3,s3);
    E.g4.style.opacity=(b*(s4>0?1:0)).toFixed(3);draw(E.d4,s4);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s2).toFixed(3);
    E.t[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.t[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.t[3].style.opacity=I(s4).toFixed(3);
  };
}
