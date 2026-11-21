/* the story scene (BL/BY/DB): ONE engraved plate of the rat artificial insemination system ParaTechs is developing under NIH
   award R44OD032088 (RePORTER abstract): a Cryodropper that freezes rat sperm in a cryovial; a motility enhancing device that
   selects motile sperm, removes cryoprotectant and concentrates the sample; a non-surgical insemination device that carries
   the sperm to the uterine horn with no anesthesia; and the result, a line banked and restored with fewer idle animals.
   Three cells on one plate, kept on screen throughout; each step adds one part. Device geometry is schematic. */
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  var C1=140,C2=390,C3=640;
  g+='<defs><pattern id="ptHt" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V8" stroke="rgba(242,243,247,.18)" stroke-width="1"/></pattern></defs>';
  /* the plate: frame, cell rules, numbers, title block */
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="wi sD" d="M265 96V500M515 96V500"/><path class="wi sD" d="M24 500H776"/>';
  g+='<text x="'+(C1-112)+'" y="120" class="t n">01</text><text x="'+(C2-112)+'" y="120" class="t n">02</text><text x="'+(C3-112)+'" y="120" class="t n">03</text>';
  g+='<g class="tb"><text x="776" y="44" text-anchor="end" class="t">PLATE · RAT AI SYSTEM</text><text x="776" y="64" text-anchor="end" class="t s">PARATECHS · NIH R44OD032088</text></g>';
  g+='</g>';
  /* 1 freeze: a cryovial with a Cryodropper bulb inside, frost on the glass */
  var vx0=C1-38,vx1=C1+38,vt=196,vb=452;
  var vial='M'+vx0+' '+vt+'V'+(vb-22)+'Q'+vx0+' '+vb+' '+C1+' '+vb+'Q'+vx1+' '+vb+' '+vx1+' '+(vb-22)+'V'+vt;
  var cap='M'+(vx0-8)+' '+(vt-44)+'h'+(vx1-vx0+16)+'v44h-'+(vx1-vx0+16)+'Z';
  var ribs='';for(var i=1;i<8;i++)ribs+='M'+(vx0-8+i*11.5)+' '+(vt-40)+'v36';
  var bulb='M'+(C1-5)+' '+(vt+6)+'V352Q'+(C1-24)+' 362 '+(C1-24)+' 396Q'+(C1-24)+' 432 '+C1+' 434Q'+(C1+24)+' 432 '+(C1+24)+' 396Q'+(C1+24)+' 362 '+(C1+5)+' 352V'+(vt+6);
  var frost='';[[vx0-16,250],[vx1+16,300],[vx0-18,380],[vx1+18,420],[vx0-12,320]].forEach(function(p){var x=p[0],y=p[1];frost+='M'+(x-6)+' '+y+'h12M'+x+' '+(y-6)+'v12M'+(x-4)+' '+(y-4)+'l8 8M'+(x+4)+' '+(y-4)+'l-8 8'});
  g+='<g id="sc1"><path class="wl dr" d="'+vial+'"/><path class="wl dr" d="'+cap+'"/><path class="wi dr" d="'+ribs+'"/>'+
     '<path class="wl dr" d="'+bulb+'"/><path class="frz" d="M'+(C1-21)+' 404Q'+(C1-21)+' 430 '+C1+' 431Q'+(C1+21)+' 430 '+(C1+21)+' 404Q'+C1+' 396 '+(C1-21)+' 404Z"/>'+
     '<path class="fro dr" d="'+frost+'"/>'+
     '<text x="'+C1+'" y="476" text-anchor="middle" class="t c">CRYODROPPER</text>'+
     '<text x="'+(vx1+12)+'" y="'+(vt-18)+'" class="t c2">CRYOVIAL</text>'+
     '<text x="40" y="60" class="a">FREEZE</text></g>';
  /* 2 recover: a chamber where motile sperm swim up out of the thawed sample, past a barrier, into a concentrated fraction */
  var mx0=C2-58,mx1=C2+58,mt=180,mb=448,mm=316;
  function sp(x,y,a,cl){var r=a*Math.PI/180,dx=Math.cos(r),dy=Math.sin(r);var hx=x,hy=y,tx=x-dx*18,ty=y-dy*18,nx=-dy*3,ny=dx*3;
    return '<ellipse class="'+cl+'h" cx="'+hx.toFixed(1)+'" cy="'+hy.toFixed(1)+'" rx="3.4" ry="2.2" transform="rotate('+a+' '+hx.toFixed(1)+' '+hy.toFixed(1)+')"/><path class="'+cl+'t" d="M'+(hx-dx*3).toFixed(1)+' '+(hy-dy*3).toFixed(1)+'Q'+((hx+tx)/2+nx).toFixed(1)+' '+((hy+ty)/2+ny).toFixed(1)+' '+tx.toFixed(1)+' '+ty.toFixed(1)+'"/>'}
  var low='',up='';
  [[-40,420,10],[-18,398,160],[12,430,200],[34,404,-20],[-30,370,40],[20,372,130],[44,438,180],[-6,412,80],[-44,440,-30]].forEach(function(p){low+=sp(C2+p[0],p[1],p[2],"sq")});
  [[-26,236,-80],[0,224,-95],[24,240,-70],[-10,262,-100],[14,268,-85],[34,210,-90]].forEach(function(p){up+=sp(C2+p[0],p[1],p[2],"sm")});
  g+='<g id="sc2"><path class="wl dr" d="M'+mx0+' '+mt+'V'+mb+'H'+mx1+'V'+mt+'"/><path class="wi dr" d="M'+(mx0-10)+' '+mt+'H'+(mx1+10)+'"/>'+
     '<path class="bar dr" d="M'+mx0+' '+mm+'H'+mx1+'"/><rect class="liq2" x="'+(mx0+1)+'" y="'+(mm+1)+'" width="'+(mx1-mx0-2)+'" height="'+(mb-mm-2)+'"/>'+low+up+
     '<path class="up dr" d="M'+(mx1+20)+' 420V220M'+(mx1+14)+' 230L'+(mx1+20)+' 220L'+(mx1+26)+' 230"/>'+
     '<text x="'+C2+'" y="476" text-anchor="middle" class="t c">MOTILITY DEVICE</text>'+
     '<text x="'+C2+'" y="'+(mt-14)+'" text-anchor="middle" class="t c2">MOTILE · CONCENTRATED</text>'+
     '<text x="40" y="60" class="a">RECOVER</text></g>';
  /* 3 transfer: the non-surgical insemination device passes the cervix and delivers into the uterine horn */
  var ut='M'+(C3-12)+' 440V386Q'+(C3-12)+' 352 '+(C3-30)+' 330Q'+(C3-70)+' 290 '+(C3-86)+' 236Q'+(C3-92)+' 214 '+(C3-76)+' 210Q'+(C3-62)+' 210 '+(C3-58)+' 232Q'+(C3-44)+' 284 '+(C3-6)+' 314H'+(C3+6)+'Q'+(C3+44)+' 284 '+(C3+58)+' 232Q'+(C3+62)+' 210 '+(C3+76)+' 210Q'+(C3+92)+' 214 '+(C3+86)+' 236Q'+(C3+70)+' 290 '+(C3+30)+' 330Q'+(C3+12)+' 352 '+(C3+12)+' 386V440';
  var cvx='M'+(C3-16)+' 392H'+(C3-6)+'M'+(C3+6)+' 392H'+(C3+16);
  g+='<g id="sc3"><path class="wl dr" d="'+ut+'"/><path class="wi dr" d="'+cvx+'"/>'+
     '<path class="cat dr" d="M'+C3+' 452V330Q'+(C3+20)+' 300 '+(C3+46)+' 268"/>'+
     '<path class="hub" d="M'+(C3-9)+' 458h18v-8h-18Z"/>'+
     '<circle class="dep" cx="'+(C3+50)+'" cy="262" r="3"/><circle class="dep" cx="'+(C3+58)+'" cy="250" r="2.2"/><circle class="dep" cx="'+(C3+44)+'" cy="252" r="1.8"/>'+
     '<text x="'+(C3+40)+'" y="190" class="t c2">UTERINE HORN</text>'+
     '<text x="'+(C3+24)+'" y="404" class="t c3">CERVIX</text>'+
     '<text x="'+C3+'" y="476" text-anchor="middle" class="t c">NO SURGERY</text>'+
     '<text x="40" y="60" class="a">TRANSFER</text></g>';
  /* 4 protect: the three parts joined into one system; the line is banked and restored */
  g+='<g id="sc4"><path class="flow dr" d="M'+(C1+50)+' 300C220 270 300 270 '+(mx0-14)+' 300M'+(mx1+40)+' 300C560 270 560 300 '+(C3-30)+' 330"/>'+
     '<path class="flowh dr" d="M'+(mx0-24)+' 293L'+(mx0-14)+' 300L'+(mx0-25)+' 306M'+(C3-42)+' 320L'+(C3-30)+' 330L'+(C3-44)+' 333"/>'+
     '<text x="400" y="532" text-anchor="middle" class="t c4">FEWER IDLE ANIMALS · NO ANESTHESIA · LINES SAFE FROM LOSS</text>'+
     '<text x="40" y="60" class="a">PROTECT</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase text.n",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[Math.max(seg(p,0,.16),.55),seg(p,.25,.44),seg(p,.5,.69),seg(p,.75,.94)];
    /* the parts accumulate on the one pair of glasses; earlier labels quieten as the next part arrives */
    for(var i=0;i<4;i++){
      var on=i===0?b:b*(s[i]>0?1:0),nx=i<3?s[i+1]:0;
      E.g[i].style.opacity=on.toFixed(3);draw(E.d[i],i===0?b*s[0]:s[i]);
      var lv=(i===0?b:Math.max(0,Math.min(1,s[i]*2-1)))*(1-.5*nx);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}
