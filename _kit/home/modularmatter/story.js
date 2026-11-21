/* the story scene (BL/BY/DB): ONE engraved elevation of a below-knee prosthesis, kept on screen throughout; each step adds one
   part of Modular Matter's socket as the sources describe it (NSF SBIR 2528353 abstract; UMD Clark School 2023-01-27;
   modularmatter.com): the residual limb and liner; discrete modules sintered in preassembled sheets and assembled into the
   socket; conforming and adjusting to volume change; pressure and hotspot mapping under the loads of daily use.
   Proportions and module layout are schematic. */
function scene(){
  var mob=MOBILE(),LX=mob?548:566;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  var CX=340,T=78,B=300,RT=92,RB=56;           /* socket: centre, brim, distal end, half-widths at brim and distal */
  function hw(y){var t=(y-T)/(B-T);return RT+(RB-RT)*Math.pow(t,1.15)}
  g+='<defs><pattern id="mmHt" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V8" stroke="rgba(243,243,241,.14)" stroke-width="1"/></pattern></defs>';
  /* base: frame, socket shell outline, distal cup, pylon, foot, ground line, title block */
  var shell='M'+(CX-RT)+' '+T;for(var y=T;y<=B;y+=6)shell+='L'+(CX-hw(y)).toFixed(1)+' '+y;
  shell+='Q'+(CX-RB)+' '+(B+40)+' '+CX+' '+(B+42)+'Q'+(CX+RB)+' '+(B+40)+' '+(CX+RB)+' '+B;for(var y2=B;y2>=T;y2-=6)shell+='L'+(CX+hw(y2)).toFixed(1)+' '+y2;
  var py='M'+(CX-26)+' '+(B+44)+'h52l-8 16h-36Z M'+(CX-11)+' '+(B+60)+'V'+(B+150)+'M'+(CX+11)+' '+(B+60)+'V'+(B+150)+'M'+(CX-20)+' '+(B+150)+'h40v18h-40Z';
  var ft='M'+(CX-30)+' '+(B+168)+'h56C'+(CX+40)+' '+(B+178)+' '+(CX+70)+' '+(B+206)+' '+(CX+150)+' '+(B+214)+'v8C'+(CX+60)+' '+(B+218)+' '+(CX+30)+' '+(B+196)+' '+(CX+10)+' '+(B+180)+'H'+(CX-30)+'Z'+
         'M'+(CX-84)+' '+(B+212)+'C'+(CX-70)+' '+(B+224)+' '+(CX-40)+' '+(B+226)+' '+CX+' '+(B+226)+'H'+(CX+150)+'v-4H'+CX+'C'+(CX-36)+' '+(B+222)+' '+(CX-64)+' '+(B+214)+' '+(CX-78)+' '+(B+204)+'Z';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="wl sD" d="'+shell+'"/><path class="hatch" d="'+py+'"/><path class="wi sD" d="'+py+'"/><path class="wi sD" d="'+ft+'"/>';
  g+='<path class="ht" d="M60 '+(B+227)+'H520"/>';
  g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">ELEVATION · BELOW-KNEE</text><text x="558" y="538" class="t s">MODULAR MATTER · SOCKET</text></g>';
  g+='</g>';
  /* 1 the limb: residual limb in a liner, inside the socket line */
  var limb='M'+(CX-RT+14)+' 40';for(var y3=T;y3<=B-8;y3+=6)limb+='L'+(CX-hw(y3)+14).toFixed(1)+' '+y3;
  limb+='Q'+(CX-RB+16)+' '+(B+26)+' '+CX+' '+(B+28)+'Q'+(CX+RB-16)+' '+(B+26)+' '+(CX+RB-14)+' '+(B-8);for(var y4=B-8;y4>=T;y4-=6)limb+='L'+(CX+hw(y4)-14).toFixed(1)+' '+y4;limb+='L'+(CX+RT-14)+' 40';
  var lin='M'+(CX-RT+6)+' '+(T-14);for(var y5=T;y5<=B;y5+=6)lin+='L'+(CX-hw(y5)+6).toFixed(1)+' '+y5;
  lin+='Q'+(CX-RB+8)+' '+(B+34)+' '+CX+' '+(B+36)+'Q'+(CX+RB-8)+' '+(B+34)+' '+(CX+RB-6)+' '+B;for(var y6=B;y6>=T;y6-=6)lin+='L'+(CX+hw(y6)-6).toFixed(1)+' '+y6;lin+='L'+(CX+RT-6)+' '+(T-14);
  g+='<g id="sc1"><path class="ld dr" d="'+limb+'"/><path class="men dr" d="'+lin+'"/>'+
     '<path class="ld2 dr" d="M'+(CX+40)+' 130L'+(LX-60)+' 112H'+(LX-8)+'"/><text x="'+LX+'" y="116" class="t c">RESIDUAL LIMB</text>'+
     '<path class="ld2 dr" d="M'+(CX+RT-6)+' 70L'+(LX-60)+' 64H'+(LX-8)+'"/><text x="'+LX+'" y="68" class="t c">LINER</text>'+
     '<text x="40" y="60" class="a">THE LIMB</text></g>';
  /* 2 the modules: a preassembled sheet at the left, the same modules set around the socket wall */
  var mods='',N=7,rows=7;
  for(var r=0;r<rows;r++){var ya=T+8+(B-T-16)*r/rows,yb=T+8+(B-T-16)*(r+1)/rows,off=(r%2)*.5;
    var la=CX-hw(ya)-3,ra=CX+hw(ya)+3,lb=CX-hw(yb)-3,rb=CX+hw(yb)+3;
    for(var c=0;c<N;c++){var f0=(c+off)/N,f1=Math.min(1,(c+1+off)/N);if(f0>=1)continue;
      var x0a=la+(ra-la)*f0+2,x1a=la+(ra-la)*f1-2,x0b=lb+(rb-lb)*f0+2,x1b=lb+(rb-lb)*f1-2;
      mods+='M'+x0a.toFixed(1)+' '+(ya+2).toFixed(1)+'L'+x1a.toFixed(1)+' '+(ya+2).toFixed(1)+'L'+x1b.toFixed(1)+' '+(yb-2).toFixed(1)+'L'+x0b.toFixed(1)+' '+(yb-2).toFixed(1)+'Z'}
    if(off){var x0=la+2,x0b2=lb+2,xh=la+(ra-la)*.5/N-2,xhb=lb+(rb-lb)*.5/N-2;mods+='M'+x0.toFixed(1)+' '+(ya+2).toFixed(1)+'L'+xh.toFixed(1)+' '+(ya+2).toFixed(1)+'L'+xhb.toFixed(1)+' '+(yb-2).toFixed(1)+'L'+x0b2.toFixed(1)+' '+(yb-2).toFixed(1)+'Z'}}
  var sheet='',SX=56,SY=372,SW=20;for(var i=0;i<5;i++)for(var j=0;j<3;j++)sheet+='M'+(SX+i*(SW+3))+' '+(SY+j*(SW+3))+'h'+SW+'v'+SW+'h-'+SW+'Z';
  g+='<g id="sc2"><path class="mod dr" d="'+mods+'"/><path class="mod dr" d="'+sheet+'"/>'+
     '<path class="ld dr" d="M'+(SX+60)+' '+(SY-8)+'C'+(SX+90)+' '+(SY-70)+' '+(CX-120)+' 250 '+(CX-RB-14)+' 240"/>'+
     '<text x="'+SX+'" y="'+(SY+92)+'" class="t c">PREASSEMBLED SHEET</text><text x="'+SX+'" y="'+(SY+110)+'" class="t s">SELECTIVE LASER SINTERING</text>'+
     '<path class="ld2 dr" d="M'+(CX+70)+' 190L'+(LX-60)+' 186H'+(LX-8)+'"/><text x="'+LX+'" y="190" class="t c">DISCRETE MODULES</text>'+
     '<text x="40" y="60" class="a">THE MODULES</text></g>';
  /* 3 the fit: the wall breathes in and out with volume change; arrows at the sides */
  var out='M'+(CX-RT-12)+' '+(T+10);for(var y7=T+10;y7<=B;y7+=6)out+='L'+(CX-hw(y7)-12).toFixed(1)+' '+y7;
  var out2='M'+(CX+RT+12)+' '+(T+10);for(var y8=T+10;y8<=B;y8+=6)out2+='L'+(CX+hw(y8)+12).toFixed(1)+' '+y8;
  function arr(x,y,d){return 'M'+x+' '+y+'h'+(d*22)+'M'+(x+d*22)+' '+y+'l'+(-d*7)+' -5M'+(x+d*22)+' '+y+'l'+(-d*7)+' 5'}
  var ar=arr(CX-hw(150)-46,150,1)+arr(CX-hw(230)-46,230,1)+arr(CX+hw(150)+46,150,-1)+arr(CX+hw(230)+46,230,-1);
  g+='<g id="sc3"><path class="cur dr" d="'+out+'"/><path class="cur dr" d="'+out2+'"/><path class="rayh dr" d="'+ar+'"/>'+
     '<path class="ld2 dr" d="M'+(CX+hw(230)+50)+' 236L'+(LX-60)+' 262H'+(LX-8)+'"/><text x="'+LX+'" y="266" class="t c c3">ADJUSTS TO VOLUME CHANGE</text>'+
     '<text x="'+LX+'" y="284" class="t c c3">RECONFIGURES AS IT CHANGES</text>'+
     '<text x="40" y="60" class="a">THE FIT</text></g>';
  /* 4 the test: load down the pylon, pressure hotspots mapped on the wall */
  var hs=[[CX-hw(120)+10,120,9],[CX+hw(170)-12,170,7],[CX-hw(250)+12,250,8],[CX+12,B+18,10],[CX+hw(220)-10,220,5]];
  var hot='';hs.forEach(function(h){hot+='<circle class="glw" cx="'+h[0].toFixed(1)+'" cy="'+h[1]+'" r="'+(h[2]+7)+'"/><circle class="hot" cx="'+h[0].toFixed(1)+'" cy="'+h[1]+'" r="'+h[2]+'"/>'});
  g+='<g id="sc4">'+hot+'<path class="rayh dr" d="M'+(CX+190)+' '+(B+60)+'V'+(B+150)+'M'+(CX+190)+' '+(B+150)+'l-5 -10M'+(CX+190)+' '+(B+150)+'l5 -10"/><path class="rayh dr" d="M'+(CX+176)+' '+(B+40)+'a16 16 0 1 1 28 10"/>'+
     '<path class="ld2 dr" d="M'+(CX+hw(170)-4)+' 172L'+(LX-60)+' 338H'+(LX-8)+'"/><text x="'+LX+'" y="342" class="t c c4">PRESSURE AND HOTSPOTS</text>'+
     '<path class="ld2 dr" d="M'+(CX+204)+' '+(B+104)+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(B+108)+'" class="t c c4">LOAD AND TORQUE</text>'+
     '<text x="40" y="60" class="a">THE TEST</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .hatch, #scBase .ht",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    h:$$("#sc4 circle",svg),
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[Math.max(seg(p,0,.16),.55),seg(p,.25,.44),seg(p,.5,.69),seg(p,.75,.94)];
    /* the parts accumulate on the one socket; earlier labels quieten as the next part arrives */
    for(var i=0;i<4;i++){
      var on=i===0?b:b*(s[i]>0?1:0),nx=i<3?s[i+1]:0;
      E.g[i].style.opacity=on.toFixed(3);draw(E.d[i],i===0?b*s[0]:s[i]);
      var lv=(i===0?b:Math.max(0,Math.min(1,s[i]*2-1)))*(1-.5*nx);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    E.h.forEach(function(el,k){el.style.opacity=Math.max(0,Math.min(1,s[3]*1.6-k*.12)).toFixed(3)});
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}
