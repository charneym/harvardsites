/* the story scene (BL/BY/DB): ONE engraved elevation of a rural pediatric practice in Acadiana, a raised cottage under a
   live oak, with a country road running past it to the horizon. Each step inks one more layer of the same drawing:
   physician-led (the clinic sign and its lamp), founder-built (the oak's moss and the 1994 plaque), the founder stays
   (the practice lit and open), and the platform (the road filling with 14 outpatient and 3 inpatient locations). */
function scene(){
  var mob=MOBILE(),f=function(n){return n.toFixed(1)};
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 112 800 448" aria-hidden="true">';
  var GR=440,HZ=330,VX=692;
  /* base */
  g+='<g id="scBase"><rect class="neat" x=".5" y="112.5" width="799" height="447"/>';
  g+='<path class="sD gr" d="M24 '+GR+'H776"/><path class="sD kb" d="M560 '+HZ+'H776"/>';
  var hz='';for(var i=0;i<62;i++){var hx=30+i*12;hz+='M'+hx+' '+(GR+4)+'l-8 8'}g+='<path class="sD ht" d="'+hz+'"/>';
  /* far treeline along the horizon, a soft engraved scallop */
  var tl='M560 '+HZ;for(var x=560;x<672;x+=14){tl+='Q'+(x+7)+' '+(HZ-8-((x*7)%5))+' '+(x+14)+' '+HZ}g+='<path class="sD kb" d="'+tl+'"/>';
  /* the road, receding to the horizon */
  g+='<path class="sD bl" d="M612 '+GR+'L'+(VX-3)+' '+HZ+'M792 '+GR+'L'+(VX+3)+' '+HZ+'"/>';
  var dsh='';for(var k=1;k<9;k++){var z0=k,z1=k+.45,y0=HZ+110/z0,y1=HZ+110/z1,x0=VX+(702-VX)/z0,x1=VX+(702-VX)/z1;dsh+='M'+f(x0)+' '+f(y0)+'L'+f(x1)+' '+f(y1)}
  g+='<path class="sD kb" d="'+dsh+'"/>';
  /* the live oak: trunk, limbs and a broad scalloped crown */
  g+='<path class="sD bl" d="M86 '+GR+'C92 400 96 350 92 300M120 '+GR+'C114 400 112 350 118 300M92 300C70 270 52 250 34 236M118 300C140 268 170 250 200 238M104 300C104 270 100 240 96 210M100 270C80 250 70 220 72 190M110 260C130 236 150 210 160 186"/>';
  var cr='M30 250';var pts=[[30,250],[24,214],[40,182],[64,160],[96,146],[130,148],[160,160],[188,176],[206,204],[204,236],[186,252]];
  for(var p=1;p<pts.length;p++){var a=pts[p-1],b=pts[p],mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2,nx=(b[1]-a[1]),ny=-(b[0]-a[0]),L=Math.hypot(nx,ny);cr+='Q'+f(mx+nx/L*12)+' '+f(my+ny/L*12)+' '+b[0]+' '+b[1]}
  g+='<path class="sD bl" d="'+cr+'"/>';
  var lf='';for(var q=0;q<26;q++){var lx=44+(q*37)%150,ly=176+(q*23)%64;lf+='M'+lx+' '+ly+'q6 -5 12 0'}g+='<path class="sD ht" d="'+lf+'"/>';
  /* the practice: a raised Acadian cottage with a deep porch */
  g+='<path class="sD bl" d="M210 400H500V300H210Z M196 300H514L420 178H290Z M210 400V'+GR+'M500 400V'+GR+'M290 400V'+GR+'M420 400V'+GR+'"/>';
  g+='<path class="sD bl" d="M226 300V400M282 300V400M428 300V400M484 300V400M196 300V308H514V300"/>';
  g+='<path class="sD bl" d="M335 400V334H375V400M320 400H390L396 '+GR+'H314Z M326 412H384M322 424H388"/>';
  g+='<path class="sD bl" d="M238 324H272V380H238Z M438 324H472V380H438Z M255 324V380M455 324V380M238 352H272M438 352H472"/>';
  g+='<path class="sD bl" d="M308 250H342V218L325 204L308 218Z M368 250H402V218L385 204L368 218Z"/>';
  g+='<path class="sD ht" d="'+(function(){var s='';for(var y=196;y<296;y+=10){var t=(y-178)/122,xl=290-94*t,xr=420+94*t;if(y>204&&y<252){s+='M'+f(xl+6)+' '+y+'H302M348 '+y+'H362M408 '+y+'H'+f(xr-6)}else s+='M'+f(xl+6)+' '+y+'H'+f(xr-6)}return s})()+'"/>';
  g+='<g class="tb"><path class="tbl" d="M24 492h252v52h-252Z M24 518h252"/><text x="34" y="510" class="t">ELEVATION · ONE PRACTICE</text><text x="34" y="536" class="t s">ACADIANA, LOUISIANA</text></g>';
  g+='</g>';
  /* 1 physician-led: the clinic sign on its post, and its lamp */
  g+='<g id="sc1"><path class="cone" d="M560 340L538 '+GR+'H598L576 340Z"/><path class="fix" d="M565 '+GR+'V340H571V'+GR+'Z"/>'+
     '<path class="lbl" d="M538 352H598V384H538Z"/><path class="crs" d="M564 360H572V364H576V372H572V376H564V372H560V364H564Z"/>'+
     '<text x="776" y="150" text-anchor="end" class="a">PHYSICIAN-LED</text></g>';
  /* 2 founder-built: Spanish moss in the oak, and the founder's plaque over the door */
  var ms='';[[46,232],[62,246],[80,250],[140,252],[162,246],[184,238],[70,196],[150,194]].forEach(function(m,i){var x=m[0],y=m[1],l=24+(i*7)%18;ms+='M'+x+' '+y+'q-4 '+f(l/3)+' 0 '+f(l*2/3)+'q3 '+f(l/6)+' 0 '+f(l/3)});
  g+='<g id="sc2"><path class="moss dr" d="'+ms+'"/><path class="plq dr" d="M318 312H392V328H318Z"/><text x="355" y="323.5" class="pq" text-anchor="middle">EST. 1994</text>'+
     '<text x="776" y="150" text-anchor="end" class="a">FOUNDER-BUILT · 1994</text></g>';
  /* 3 the founder stays: the practice open and lit */
  g+='<g id="sc3"><path class="lit" d="M238 324H272V380H238Z M438 324H472V380H438Z"/><path class="lit" d="M335 400V334H375V400Z"/><path class="lit2" d="M308 250H342V218L325 204L308 218Z M368 250H402V218L385 204L368 218Z"/>'+
     '<path class="pipe dr" d="M200 304H510"/>'+
     '<text x="776" y="150" text-anchor="end" class="a">THE FOUNDER STAYS</text></g>';
  /* 4 the platform: 14 outpatient practices along the road, 3 hospitals at the horizon */
  var mk='';for(var n=0;n<14;n++){var z=1.1+n*.36,y=HZ+110/z,s=30/z,side=n%2,ex=side?VX+(792-VX)/z:VX+(612-VX)/z,x=side?ex+s*.5:ex-s*1.5;
    mk+='<path class="mk lit" d="M'+f(x)+' '+f(y)+'V'+f(y-s*.62)+'L'+f(x+s/2)+' '+f(y-s)+'L'+f(x+s)+' '+f(y-s*.62)+'V'+f(y)+'Z"/>'}
  [[600,30,22],[640,22,16],[742,26,18]].forEach(function(hh){mk+='<path class="mk lit2" d="M'+hh[0]+' '+HZ+'V'+(HZ-hh[2])+'H'+(hh[0]+hh[1])+'V'+HZ+'Z M'+(hh[0]+hh[1]/2-3)+' '+(HZ-hh[2]+6)+'h6M'+(hh[0]+hh[1]/2)+' '+(HZ-hh[2]+3)+'v6"/>'});
  g+='<g id="sc4">'+mk+'<text x="776" y="150" text-anchor="end" class="a">14 OUTPATIENT · 3 INPATIENT</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb",svg),g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),g4:$("#sc4",svg),
    d2:dl("#sc2 .dr"),d3:dl("#sc3 .dr"),mk:$$("#sc4 .mk",svg),t:[$("#sc1 text",svg),$("#sc2 text.a",svg),$("#sc3 text",svg),$("#sc4 text",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    E.g1.style.opacity=(b*Math.max(s1,.55)).toFixed(3);
    E.g2.style.opacity=(b*(s2>0?1:0)).toFixed(3);draw(E.d2,s2);
    E.g3.style.opacity=(b*s3).toFixed(3);draw(E.d3,s3);
    E.g4.style.opacity=(b*(s4>0?1:0)).toFixed(3);
    var N=E.mk.length;E.mk.forEach(function(m,i){m.style.opacity=Math.max(0,Math.min(1,s4*(N+2)-i)).toFixed(3)});
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s2).toFixed(3);
    E.t[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.t[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.t[3].style.opacity=I(s4).toFixed(3);
  };
}
