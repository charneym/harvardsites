/* the story scene (BL/BY/DB): ONE engraved chart of Puerto Rico, drawn as Advent-Morro describes its process. Step 1
   lights San Juan, where the partnership with management begins; step 2 spreads the firm's local network across the
   Island; step 3 sends routes out to the U.S. mainland and Latin America (their cross-border mandate); step 4 runs the
   three-to-seven-year partnership along a ruled timeline to the exit. Each step adds one labelled layer to the same chart. */
var PRC=[[-67.16,18.51],[-67.10,18.52],[-67.02,18.51],[-66.90,18.49],[-66.78,18.49],[-66.65,18.48],[-66.55,18.49],[-66.42,18.49],[-66.30,18.48],[-66.20,18.47],[-66.10,18.47],[-66.02,18.45],[-65.92,18.45],[-65.82,18.42],[-65.72,18.39],[-65.63,18.38],[-65.62,18.33],[-65.60,18.25],[-65.66,18.20],[-65.74,18.15],[-65.80,18.08],[-65.83,18.02],[-65.88,17.98],[-65.98,17.97],[-66.06,17.96],[-66.16,17.94],[-66.25,17.93],[-66.35,17.95],[-66.45,17.97],[-66.55,17.98],[-66.65,17.98],[-66.75,17.98],[-66.86,17.95],[-66.96,17.94],[-67.10,17.95],[-67.19,17.93],[-67.21,18.00],[-67.18,18.07],[-67.20,18.13],[-67.17,18.20],[-67.19,18.27],[-67.26,18.33],[-67.27,18.37],[-67.20,18.42],[-67.16,18.47]];
var VIQ=[[-65.58,18.12],[-65.48,18.15],[-65.38,18.15],[-65.28,18.13],[-65.30,18.10],[-65.42,18.09],[-65.55,18.09]];
var CUL=[[-65.34,18.33],[-65.26,18.34],[-65.24,18.30],[-65.30,18.29]];
var TOWNS=[["Aguadilla",-67.15,18.43,"end",-8,4],["Arecibo",-66.72,18.47,"middle",0,-12],["Mayagüez",-67.14,18.20,"end",-8,4],["Ponce",-66.61,18.01,"middle",0,22],["Caguas",-66.04,18.23,"start",9,4],["Humacao",-65.83,18.15,"start",9,4],["Fajardo",-65.65,18.33,"start",9,4]];
function prChart(o){
  var k=o.k,X0=o.x0,Y0=o.y0,L0=-67.32,LA=18.56,i,j;
  function P(lo,la){return [X0+(lo-L0)*k,Y0+(LA-la)*k*1.05]}
  function f(n){return n.toFixed(1)}
  function poly(c,sc,cx,cy){return "M"+c.map(function(q){var p=P(q[0],q[1]);return f(cx+(p[0]-cx)*sc)+" "+f(cy+(p[1]-cy)*sc)}).join("L")+"Z"}
  var cen=P(-66.45,18.22),sj=P(-66.10,18.465),W=o.W,H=o.H;
  var g='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+W+' '+H+'" aria-hidden="true">';
  /* base: neatline, graticule, depth contours, soundings, the coast, compass rose */
  g+='<g id="scBase"><rect class="neat sD" x="4" y="4" width="'+(W-8)+'" height="'+(H-8)+'"/>';
  [-67,-66.5,-66,-65.5].forEach(function(lo){var x=P(lo,0)[0];g+='<path class="grat sD" d="M'+f(x)+' '+o.gy0+'V'+(H-o.gy1)+'"/>'+(o.mob?'':'<text x="'+f(x)+'" y="22" text-anchor="middle" class="q">'+Math.abs(lo).toFixed(1).replace(".0","")+'°W</text>')});
  [18,18.5].forEach(function(la){var y=P(0,la)[1];g+='<path class="grat sD" d="M12 '+f(y)+'H'+(W-12)+'"/>'+(o.mob?'':'<text x="'+(W-14)+'" y="'+f(y-6)+'" text-anchor="end" class="q">'+la.toFixed(1).replace(".0","")+'°N</text>')});
  for(i=4;i>=1;i--){var sc=1+i*o.ct,op=(1-i*.2).toFixed(2);g+='<path class="ct sD" style="opacity:'+op+'" d="'+poly(PRC,sc,cen[0],cen[1])+'"/>'}
  var R=function(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}(31);
  for(i=0;i<(o.mob?50:110);i++){var dx=12+R()*(W-24),dy=o.gy0+R()*(H-o.gy0-o.gy1);var ins=Math.abs(dy-cen[1])<k*.26*(1.05+.4)&&Math.abs(dx-cen[0])<k*1.12;if(ins)continue;g+='<circle class="dot" cx="'+f(dx)+'" cy="'+f(dy)+'" r="1"/>'}
  g+='<path class="land" d="'+poly(PRC,1,0,0)+poly(VIQ,1,0,0)+poly(CUL,1,0,0)+'"/>';
  g+='<path class="coast sD" d="'+poly(PRC,1,0,0)+'"/><path class="coast sD" d="'+poly(VIQ,1,0,0)+'"/><path class="coast sD" d="'+poly(CUL,1,0,0)+'"/>';
  /* a faint cordillera down the middle of the Island */
  g+='<path class="ridge sD" d="M'+P(-67.05,18.2).map(f).join(" ")+'Q'+P(-66.6,18.24).map(f).join(" ")+' '+P(-66.2,18.18).map(f).join(" ")+'T'+P(-65.85,18.24).map(f).join(" ")+'"/>';
  var cx=o.cmp[0],cy=o.cmp[1],cr=o.cmp[2];
  g+='<g class="cmpg"><circle class="cmp" cx="'+cx+'" cy="'+cy+'" r="'+cr+'"/><circle class="cmp" cx="'+cx+'" cy="'+cy+'" r="'+f(cr*.8)+'"/>';
  for(i=0;i<32;i++){var a=i/32*Math.PI*2,l=i%8?(i%2?.06:.1):.16;g+='<path class="cmp" d="M'+f(cx+Math.sin(a)*cr)+' '+f(cy-Math.cos(a)*cr)+'L'+f(cx+Math.sin(a)*cr*(1-l))+' '+f(cy-Math.cos(a)*cr*(1-l))+'"/>'}
  var st=[];for(i=0;i<8;i++){var a2=i/8*Math.PI*2,rr=i%2?cr*.26:cr*.74;st.push(f(cx+Math.sin(a2)*rr)+" "+f(cy-Math.cos(a2)*rr))}
  g+='<path class="cmps" d="M'+st.join("L")+'Z"/><text x="'+cx+'" y="'+f(cy-cr-8)+'" text-anchor="middle" class="w">N</text></g></g>';
  /* step 1: San Juan */
  g+='<g id="scSJ"><circle class="ring r2" cx="'+f(sj[0])+'" cy="'+f(sj[1])+'" r="18"/><circle class="ring" cx="'+f(sj[0])+'" cy="'+f(sj[1])+'" r="10"/><circle class="mk" cx="'+f(sj[0])+'" cy="'+f(sj[1])+'" r="4.5"/>'+
    '<text x="'+f(sj[0]+o.sjT[0])+'" y="'+f(sj[1]+o.sjT[1])+'" class="w" text-anchor="start">SAN JUAN</text><text x="'+f(sj[0]+o.sjT[0])+'" y="'+f(sj[1]+o.sjT[1]+o.fs+5)+'" class="a" text-anchor="start">'+o.sjL+'</text></g>';
  /* step 2: the local network across the Island */
  g+='<g id="scNet">';TOWNS.forEach(function(t){var p=P(t[1],t[2]),mx=(sj[0]+p[0])/2,my=Math.min(sj[1],p[1])-Math.abs(sj[0]-p[0])*.18;
    g+='<path class="net" d="M'+f(sj[0])+' '+f(sj[1])+'Q'+f(mx)+' '+f(my)+' '+f(p[0])+' '+f(p[1])+'"/><circle class="tn" cx="'+f(p[0])+'" cy="'+f(p[1])+'" r="3"/>'+(o.mob?'':'<text x="'+f(p[0]+t[4])+'" y="'+f(p[1]+t[5])+'" text-anchor="'+t[3]+'" class="q">'+t[0].toUpperCase()+'</text>')});
  g+='<text x="'+o.netT[0]+'" y="'+o.netT[1]+'" text-anchor="middle" class="a">'+o.netL+'</text></g>';
  /* step 3: routes out to the U.S. mainland and Latin America */
  function route(id,c1,e,lab){var d='M'+f(sj[0])+' '+f(sj[1])+'Q'+c1[0]+' '+c1[1]+' '+e[0]+' '+e[1];
    var tx=e[0]-c1[0],ty=e[1]-c1[1],tl=Math.sqrt(tx*tx+ty*ty);tx/=tl;ty/=tl;var ah=9,nx=-ty,ny=tx;
    return '<g id="'+id+'"><path class="route" d="'+d+'"/><path class="rhead" d="M'+f(e[0]-tx*ah+nx*ah*.55)+' '+f(e[1]-ty*ah+ny*ah*.55)+'L'+e[0]+' '+e[1]+'L'+f(e[0]-tx*ah-nx*ah*.55)+' '+f(e[1]-ty*ah-ny*ah*.55)+'"/>'+
      lab.map(function(L){return '<text x="'+L[1]+'" y="'+L[2]+'" class="'+L[3]+'">'+L[0]+'</text>'}).join("")+'</g>'}
  g+=route("scUS",o.us.c,o.us.e,o.us.l)+route("scLA",o.la.c,o.la.e,o.la.l);
  /* step 4: three to seven years, then the exit */
  var t0=o.tl[0],t1=o.tl[1],ty0=o.tl[2],sx=(t1-t0)/7;
  g+='<g id="scTime"><path class="tline" d="M'+t0+' '+ty0+'H'+t1+'"/><path class="tband" d="M'+f(t0+3*sx)+' '+ty0+'H'+t1+'"/>';
  for(i=0;i<=7;i++){var x=t0+i*sx;g+='<path class="tick" d="M'+f(x)+' '+(ty0-(i===3||i===7||i===0?7:4))+'V'+(ty0+(i===3||i===7||i===0?7:4))+'"/>';if(i===0||i===3||i===7)g+='<text x="'+f(x)+'" y="'+(ty0+o.fs+12)+'" text-anchor="'+(i===7?"end":i===0?"start":"middle")+'" class="q">'+(i===0?"INVEST":i===3?"YEAR 3":"YEAR 7")+'</text>'}
  g+='<circle id="scTm" class="mk" cx="'+t0+'" cy="'+ty0+'" r="5"/><text x="'+t0+'" y="'+(ty0-14)+'" class="w">'+o.tlL+'</text>'+(o.tlE?'<text x="'+t1+'" y="'+(ty0+o.fs*2+22)+'" text-anchor="end" class="a">'+o.tlE+'</text>':'')+'</g>';
  return g+'</svg>';
}
function scene(){
  if(MOBILE())return prChart({mob:1,W:400,H:500,fs:14,k:170,x0:20,y0:196,gy0:12,gy1:12,ct:.045,cmp:[352,64,30],sjT:[12,-12],sjL:"PARTNERSHIP",netT:[292,352],netL:"LOCAL KNOW-HOW",
    us:{c:[150,70],e:[34,96],l:[["TO THE U.S. MAINLAND",14,34,"a"],["& U.S. HISPANIC MARKET",14,54,"q"]]},
    la:{c:[160,440],e:[34,392],l:[["TO LATIN AMERICA",14,424,"a"]]},
    tl:[150,382,462],tlL:"PARTNER FOR 3–7 YEARS",tlE:""});
  return prChart({W:800,H:540,fs:12,k:320,x0:70,y0:178,gy0:34,gy1:14,ct:.03,cmp:[722,92,42],sjT:[16,-8],sjL:"THE PARTNERSHIP",netT:[620,418],netL:"LOCAL MARKET KNOW-HOW",
    us:{c:[300,48],e:[52,100],l:[["TO THE U.S. MAINLAND",24,134,"a"],["& THE U.S. HISPANIC MARKET",24,154,"q"]]},
    la:{c:[330,540],e:[56,470],l:[["TO LATIN AMERICA",24,504,"a"]]},
    tl:[392,762,470],tlL:"EQUITY PARTNER FOR 3–7 YEARS",tlE:"EXIT TO A FINANCIAL OR STRATEGIC BUYER"});
}
function storyDraw(svg){
  var E={base:$$("#scBase .sD",svg),soft:$$("#scBase .dot, #scBase .cmpg, #scBase .land, #scBase text",svg),sj:$("#scSJ",svg),net:$$("#scNet .net",svg),netO:$("#scNet",svg),
    us:$("#scUS",svg),la:$("#scLA",svg),usP:$("#scUS .route",svg),laP:$("#scLA .route",svg),tm:$("#scTime",svg),band:$("#scTime .tband",svg),dot:$("#scTm",svg),rings:$$("#scSJ .ring",svg)};
  var BL=E.base.map(function(p){return p.getTotalLength()}),NL=E.net.map(function(p){return p.getTotalLength()}),UL=E.usP.getTotalLength(),LL=E.laP.getTotalLength(),BD=E.band.getTotalLength();
  var t0=+E.dot.getAttribute("cx"),tb=E.band.getPointAtLength(BD),tw=tb.x-t0;
  var lastB=-1;
  return function(p,b){
    if(!E.sj.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(el,k){el.style.strokeDasharray=BL[k];el.style.strokeDashoffset=(BL[k]*(1-b)).toFixed(1)});E.soft.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.14),s2=seg(p,.25,.45),s3=seg(p,.5,.7),s4=seg(p,.75,.95);
    E.sj.style.opacity=(b*s1).toFixed(3);
    E.rings.forEach(function(r,n){r.style.transform="scale("+(.6+.4*s1).toFixed(3)+")"});
    E.netO.style.opacity=(b*Math.min(1,s2*1.6)).toFixed(3);
    E.net.forEach(function(el,k){var d=Math.max(0,Math.min(1,s2*1.4-k*.06));el.style.strokeDasharray=NL[k];el.style.strokeDashoffset=(NL[k]*(1-d)).toFixed(1)});
    E.us.style.opacity=(b*Math.min(1,s3*2)).toFixed(3);E.la.style.opacity=(b*Math.min(1,s3*2)).toFixed(3);
    E.usP.style.strokeDasharray=UL;E.usP.style.strokeDashoffset=(UL*(1-s3)).toFixed(1);
    E.laP.style.strokeDasharray=LL;E.laP.style.strokeDashoffset=(LL*(1-seg(p,.54,.72))).toFixed(1);
    E.tm.style.opacity=(b*Math.min(1,s4*2)).toFixed(3);
    E.band.style.opacity=seg(p,.82,.9).toFixed(3);
    E.dot.setAttribute("cx",(t0+tw*s4).toFixed(1));
  };
}
