/* the story scene (DB): ONE engraved cross-section of an ImmunoShield hydrogel device in host tissue (NIH R43/R44 DK136496).
   Step 1 the gel channel and its islets draw in; step 2 immune cells arrive and stop at the gel surface; step 3 oxygen and
   glucose diffuse in while insulin diffuses out; step 4 new vessels grow along the device surface (degradable-hydrogel guided). */
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  var T=232,B=388,i,k;
  var dev='M120 '+T+'H680C724 '+T+' 760 '+(T+34)+' 760 '+((T+B)/2)+'C760 '+(B-34)+' 724 '+B+' 680 '+B+'H120C76 '+B+' 40 '+(B-34)+' 40 '+((T+B)/2)+'C40 '+(T+34)+' 76 '+T+' 120 '+T+'Z';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  /* host tissue: loose engraved fibres above and below the device */
  var fib='';for(i=0;i<16;i++){var fy=96+i*7.5+(i%3)*2;fib+='M'+(20+(i*53)%90)+' '+fy+'C'+(220+(i*37)%80)+' '+(fy-10)+' '+(480+(i*29)%60)+' '+(fy+12)+' '+(780-(i*41)%70)+' '+(fy-4)}
  for(i=0;i<9;i++){var by=430+i*9;fib+='M'+(24+(i*61)%80)+' '+by+'C'+(240+(i*31)%70)+' '+(by+9)+' '+(500+(i*23)%60)+' '+(by-11)+' '+(776-(i*47)%60)+' '+(by+3)}
  g+='<path class="sD fib" d="'+fib+'"/>';
  /* the hydrogel channel, with an inner contour to show its thickness */
  g+='<path class="sD gel" d="'+dev+'"/>';
  g+='<path class="sD gel2" d="M124 '+(T+10)+'H676C714 '+(T+10)+' 748 '+(T+40)+' 748 '+((T+B)/2)+'"/>';
  var stp='';for(i=0;i<300;i++){var px=60+((i*157)%680),py=T+12+((i*89)%(B-T-24));stp+='M'+px+' '+py+'h1.4'}
  g+='<path class="stp" d="'+stp+'"/>';
  g+='<text x="26" y="'+(B+86)+'" class="t">HOST TISSUE</text>';
  g+='<g class="tb"><text x="26" y="540" class="t">HYDROGEL DEVICE · CROSS-SECTION · SCHEMATIC</text></g>';
  g+='</g>';
  /* islets: clusters of endocrine cells inside the gel */
  var IC=[[130,312],[240,300],[352,318],[462,300],[572,316],[680,306]],isl='';
  IC.forEach(function(c,n){var cx=c[0],cy=c[1];isl+='<g class="isl">';isl+='<circle class="ib" cx="'+cx+'" cy="'+cy+'" r="35"/>';
    isl+='<circle cx="'+cx+'" cy="'+cy+'" r="6"/>';
    for(k=0;k<6;k++){var a=k/6*6.283+n;isl+='<circle cx="'+(cx+Math.cos(a)*12.5).toFixed(1)+'" cy="'+(cy+Math.sin(a)*12.5).toFixed(1)+'" r="6"/>'}
    for(k=0;k<11;k++){var a2=k/11*6.283+n*.7;isl+='<circle cx="'+(cx+Math.cos(a2)*25).toFixed(1)+'" cy="'+(cy+Math.sin(a2)*24).toFixed(1)+'" r="5.6"/>'}
    isl+='</g>'});
  g+='<g id="isl">'+isl+'</g>';
  g+='<path id="islL" class="ld" d="M352 282V'+(T-40)+'H394"/><text id="islT" x="400" y="'+(T-36)+'" class="w">ISLET</text>';
  /* immune cells in the host tissue, which approach and stop at the gel */
  var IM=[[110,70],[262,52],[404,74],[548,58],[690,72]],im='';
  IM.forEach(function(c){im+='<g class="imc" data-x="'+c[0]+'" data-y="'+c[1]+'"><circle class="ce" r="15"/><path class="nu" d="M-7 -3C-6 -9 4 -9 6 -3C8 3 2 7 -1 4C-4 1 -8 3 -7 -3Z"/>';
    for(k=0;k<9;k++){var a=k/9*6.283;im+='<path class="rc" d="M'+(Math.cos(a)*15).toFixed(1)+' '+(Math.sin(a)*15).toFixed(1)+'L'+(Math.cos(a)*20).toFixed(1)+' '+(Math.sin(a)*20).toFixed(1)+'"/>'}
    im+='</g>'});
  g+='<g id="imm">'+im+'</g>';
  g+='<text id="immT" x="774" y="'+(B+50)+'" class="w" text-anchor="end">IMMUNE CELLS</text>';
  /* oxygen + glucose in (cyan), insulin out (amber) */
  var ox='';for(i=0;i<16;i++)ox+='<circle class="ox" r="3.6" cx="0" cy="0"/>';
  var ins='';for(i=0;i<14;i++)ins+='<circle class="in" r="3.6" cx="0" cy="0"/>';
  g+='<g id="ox">'+ox+'</g><g id="ins">'+ins+'</g>';
  g+='<text id="oxT" x="26" y="'+(T-124)+'" class="o">O₂ · GLUCOSE IN</text><text id="insT" x="774" y="'+(B+76)+'" class="i" text-anchor="end">INSULIN OUT</text>';
  /* step 4: new capillaries along the device surface, with branches into the tissue */
  var v1='M44 '+(T-8)+'C160 '+(T-20)+' 260 '+(T-2)+' 380 '+(T-12)+'S600 '+(T-4)+' 756 '+(T-14);
  var v2='M44 '+(B+10)+'C180 '+(B+22)+' 300 '+(B+4)+' 420 '+(B+16)+'S620 '+(B+6)+' 756 '+(B+18);
  var vb='M150 '+(T-14)+'C160 '+(T-40)+' 150 '+(T-60)+' 170 '+(T-84)+'M330 '+(T-10)+'C320 '+(T-36)+' 344 '+(T-58)+' 330 '+(T-88)+'M520 '+(T-8)+'C536 '+(T-30)+' 524 '+(T-56)+' 546 '+(T-80)+'M650 '+(T-12)+'C640 '+(T-34)+' 660 '+(T-54)+' 652 '+(T-78)+
         'M220 '+(B+16)+'C230 '+(B+40)+' 214 '+(B+56)+' 232 '+(B+74)+'M560 '+(B+10)+'C548 '+(B+34)+' 566 '+(B+52)+' 552 '+(B+72);
  g+='<g id="ves"><path class="ves dr" d="'+v1+'"/><path class="ves dr" d="'+v2+'"/><path class="ves dr vb" d="'+vb+'"/></g>';
  g+='<text id="vesT" x="774" y="'+(B+102)+'" class="v" text-anchor="end">NEW VESSELS AT THE SURFACE</text>';
  /* step captions */
  g+='<text id="cap1" x="26" y="40" class="a">ISLETS CAST IN HYDROGEL</text>';
  g+='<text id="cap2" x="26" y="40" class="a">A BARRIER TO IMMUNE CELLS</text>';
  g+='<text id="cap3" x="26" y="40" class="a">OXYGEN IN · INSULIN OUT</text>';
  g+='<text id="cap4" x="26" y="40" class="a">VESSELS GROW TO THE DEVICE</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var Lg=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=Lg+" "+Lg;return [p,Lg]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase text, #scBase .stp",svg),
    isl:$$("#isl .isl",svg),islL:$("#islL",svg),islT:$("#islT",svg),imm:$$("#imm .imc",svg),immT:$("#immT",svg),
    ox:$$("#ox circle",svg),ins:$$("#ins circle",svg),oxT:$("#oxT",svg),insT:$("#insT",svg),
    ves:dl("#ves .dr"),vesT:$("#vesT",svg),cap:[$("#cap1",svg),$("#cap2",svg),$("#cap3",svg),$("#cap4",svg)]};
  var T=232,B=388,IC=[[130,312],[240,300],[352,318],[462,300],[572,316],[680,306]];
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function eo(x){return 1-Math.pow(1-x,3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    /* step 1: islets settle into the gel, staggered left to right; they are already partly there when the frame first draws */
    E.isl.forEach(function(el,k){var q=Math.max(0,Math.min(1,s1*1.6-k*.12));
      el.style.opacity=(b*(.3+.7*q)).toFixed(3);el.setAttribute("transform","translate(0 "+(-12*(1-q)).toFixed(1)+")")});
    E.islL.style.opacity=E.islT.style.opacity=(b*s1*(1-s2)).toFixed(3);
    /* step 2: immune cells close in and stop short of the gel surface, with a small recoil */
    var ap=eo(s2),rec=Math.sin(Math.PI*Math.min(1,Math.max(0,(s2-.7)/.3)))*6;
    E.imm.forEach(function(el,k){var x0=+el.getAttribute("data-x"),y0=+el.getAttribute("data-y"),y1=T-24;
      var y=y0+(y1-y0)*ap-rec;el.setAttribute("transform","translate("+(x0+Math.sin(k*1.7+ap*3)*6).toFixed(1)+" "+y.toFixed(1)+")");el.style.opacity=(b*(.55+.45*s2)).toFixed(3)});
    E.immT.style.opacity=(b*s2*(1-s3)).toFixed(3);
    /* step 3: oxygen and glucose diffuse in from both faces; insulin diffuses out of the islets (phase follows the scroll) */
    var fl=s3*(1-s4*.6),ph=(p*14)%1;
    E.ox.forEach(function(c,k){var q=(k/16+ph)%1,top=k%2===0,x=70+((k*97)%660),y=top?(150+q*(T+40-150)):(470-q*(470-(B-40)));
      c.setAttribute("cx",(x+Math.sin(q*7+k)*5).toFixed(1));c.setAttribute("cy",y.toFixed(1));c.style.opacity=(b*fl*Math.sin(Math.PI*q)).toFixed(3)});
    E.ins.forEach(function(c,k){var q=(k/14+ph*1.1)%1,ic=IC[k%6],up=k%2===0,y=up?(ic[1]-30-q*(ic[1]-30-140)):(ic[1]+30+q*(470-ic[1]-30));
      c.setAttribute("cx",(ic[0]+(k%3-1)*14+Math.sin(q*6+k)*6).toFixed(1));c.setAttribute("cy",y.toFixed(1));c.style.opacity=(b*fl*Math.sin(Math.PI*q)).toFixed(3)});
    E.oxT.style.opacity=E.insT.style.opacity=(b*s3*(1-s4)).toFixed(3);
    /* step 4: capillaries draw along the surface */
    draw(E.ves,s4);E.vesT.style.opacity=(b*s4).toFixed(3);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.cap[0].style.opacity=(b*O(s2)).toFixed(3);E.cap[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.cap[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.cap[3].style.opacity=I(s4).toFixed(3);
  };
}
