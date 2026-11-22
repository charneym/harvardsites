/* the story scene: one engraved section through the heart wall, drawn in fine line. A coronary artery runs along the
   surface with a plaque narrowing it; the muscle beyond the narrowing is hatched as ischemic (step 1). A catheter reaches
   the inner wall from the ventricle and XC001 is injected into the muscle, vector particles spreading (step 2). Muscle
   cells take up the vector; the VEGF gene goes to each nucleus and VEGF protein leaves the cell (step 3). New vessels grow
   from the artery above and below the narrowing into the starved muscle and the hatching clears (step 4). Facts:
   xylocor.com xc001-moa, approach, exact-2-trial and the July 2025 EXACT-2 release (Extroducer, cath lab, one-time local
   administration). Schematic, not anatomy to scale. */
function xyRng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
function xyWall(y0,a){var d='';for(var x=20;x<=620;x+=10){var y=y0+a*Math.sin((x-20)/600*Math.PI);d+=(x===20?'M':'L')+x+' '+y.toFixed(1)}return d}
function xySurf(x){return 150-26*Math.sin((x-20)/600*Math.PI)}
function xyEndo(x){return 470-10*Math.sin((x-20)/600*Math.PI*1.3)}
function xyVessels(){/* new collateral vessels: seeded branching walks from the artery into the ischemic muscle */
  var R=xyRng(1702),P=[];
  function walk(x,y,ang,len,wd,dep){var d='M'+x.toFixed(1)+' '+y.toFixed(1),n=Math.round(len/9);
    for(var i=0;i<n;i++){ang+=(R()-.5)*.5;x+=Math.cos(ang)*9;y+=Math.sin(ang)*9;
      if(y>xyEndo(x)-18){ang=-Math.abs(ang)*.3;y=xyEndo(x)-18}
      if(y<xySurf(x)+20){ang=Math.abs(ang)*.5+.2;y=xySurf(x)+20}
      if(x>608)ang=Math.PI-.3;
      d+='L'+x.toFixed(1)+' '+y.toFixed(1);
      if(dep<2&&i>2&&R()<.12)walk(x,y,ang+(R()<.5?-1:1)*(.6+.4*R()),len*.55,wd*.7,dep+1)}
    P.push({d:d,w:wd,dep:dep})}
  [[200,.6],[340,1.1],[380,.8],[470,1.2],[540,1.0]].forEach(function(s,i){var x=s[0];walk(x,xySurf(x)+6,s[1]+.2*(i%2?1:-1),200+40*(i%3),2.2,0)});
  return P}
function scene(){
  var mob=MOBILE(),fs=mob?19:12,cs=mob?20:13;
  var caps=["CORONARY ARTERY DISEASE · ISCHEMIA","XC001 · ONE DELIVERY INTO THE HEART MUSCLE","VEGF GENE → VEGF PROTEIN","NEW VESSELS · BLOOD AND OXYGEN RETURN"];
  var s='<svg viewBox="0 -10 640 610" role="img" aria-label="Engraved section through the heart wall: a narrowed coronary artery, catheter delivery of XC001 into the muscle, cells making VEGF, and new blood vessels growing into the starved muscle">';
  s+='<defs><clipPath id="xyMyo"><path d="'+xyWall(150,-26)+'L620 '+xyEndo(620).toFixed(1)+(function(){var d='';for(var x=620;x>=20;x-=10)d+='L'+x+' '+xyEndo(x).toFixed(1);return d})()+'Z"/></clipPath>'+
    '<radialGradient id="xyIsc" cx="470" cy="300" r="210" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e9a36a" stop-opacity=".2"/><stop offset="1" stop-color="#e9a36a" stop-opacity="0"/></radialGradient>'+
    '<radialGradient id="xyPerf" cx="440" cy="300" r="240" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e2524a" stop-opacity=".16"/><stop offset="1" stop-color="#e2524a" stop-opacity="0"/></radialGradient></defs>';
  /* heart wall: surfaces and engraved muscle fibres */
  var F='';for(var k=0;k<26;k++){var x0=-60+k*28;F+='<path class="xf" d="M'+x0+' 120C'+(x0+40)+' 220 '+(x0+10)+' 330 '+(x0+70)+' 500"/>'}
  s+='<g clip-path="url(#xyMyo)"><g id="xyFib">'+F+'</g>';
  var Hh='';for(var j=0;j<30;j++){var hx=300+j*12;Hh+='<path class="xh" d="M'+hx+' 120L'+(hx-120)+' 500"/>'}
  s+='<g id="xyIs"><rect x="300" y="100" width="340" height="420" fill="url(#xyIsc)"/>'+Hh+'</g><rect id="xyPf" x="150" y="100" width="490" height="420" fill="url(#xyPerf)" opacity="0"/>';
  /* new vessels (step 4), inside the muscle */
  var V=xyVessels(),VS='';V.forEach(function(v,i){VS+='<path class="xv" data-dep="'+v.dep+'" style="stroke-width:'+v.w.toFixed(2)+'" d="'+v.d+'"/>'});
  s+='<g id="xyV">'+VS+'</g></g>';
  s+='<path class="xs" d="'+xyWall(150,-26)+'"/><path class="xs" d="'+(function(){var d='';for(var x=20;x<=620;x+=10)d+=(x===20?'M':'L')+x+' '+xyEndo(x).toFixed(1);return d})()+'"/>';
  /* the coronary artery along the surface: walls, lumen, plaque */
  var A1='',A2='',AL='';for(var x=20;x<=620;x+=10){var y=xySurf(x)-20,nar=Math.exp(-Math.pow((x-262)/34,2));
    A1+=(x===20?'M':'L')+x+' '+(y-15).toFixed(1);A2+=(x===20?'M':'L')+x+' '+(y+15).toFixed(1);AL+=(x===20?'M':'L')+x+' '+(y-15+11*nar).toFixed(1)}
  var PL='M222 '+(xySurf(222)-5).toFixed(1);for(var x2=222;x2<=302;x2+=4){var y2=xySurf(x2)-5-21*Math.exp(-Math.pow((x2-262)/26,2))*1.0;PL+='L'+x2+' '+y2.toFixed(1)}PL+='L302 '+(xySurf(302)-5).toFixed(1)+'Z';
  s+='<path class="xlu" d="'+A1+(function(){var d='';for(var x=620;x>=20;x-=10)d+='L'+x+' '+(xySurf(x)-5).toFixed(1);return d})()+'Z"/>';
  s+='<path id="xyPl" class="xpl" d="'+PL+'"/><path class="xa" d="'+A1+'"/><path class="xa" d="'+A2+'"/>';
  /* flow marks in the lumen: strong before the narrowing, sparse after */
  var FL='';[60,100,140,180].forEach(function(x){FL+='<path class="xfl" d="M'+x+' '+(xySurf(x)-20).toFixed(1)+'h18"/>'});[340,440,540].forEach(function(x){FL+='<path class="xfl xfl2" d="M'+x+' '+(xySurf(x)-20).toFixed(1)+'h10"/>'});
  s+='<g id="xyFl">'+FL+'</g>';
  /* step 2: the catheter from the ventricle, its tip at the inner wall, three injection blooms of vector particles */
  var IJ=[[438,392],[498,366],[556,396]],B='';
  IJ.forEach(function(p,i){var R=xyRng(40+i),H='';for(var q=0;q<11;q++){var a=R()*6.283,r=6+R()*30,hx=p[0]+Math.cos(a)*r,hy=p[1]+Math.sin(a)*r*.8;
      H+='<path class="xvp" d="M'+(hx+3.4).toFixed(1)+' '+hy.toFixed(1)+'l-1.7 2.9h-3.4l-1.7-2.9 1.7-2.9h3.4z"/>'}
    B+='<g class="xbl"><circle class="xring" cx="'+p[0]+'" cy="'+p[1]+'" r="34"/>'+H+'</g>'});
  s+='<g id="xyCat"><path class="xc" d="M120 548C230 548 400 530 472 '+(xyEndo(472)+4).toFixed(1)+'"/><path class="xc2" d="M120 548C230 548 400 530 472 '+(xyEndo(472)+4).toFixed(1)+'"/><path class="xnd" d="M472 '+(xyEndo(472)+4).toFixed(1)+'L486 '+(xyEndo(486)-26).toFixed(1)+'"/></g><g id="xyBl">'+B+'</g>';
  /* step 3: three muscle cells, each nucleus taking up the gene, VEGF leaving the cell */
  var CL=[[420,300],[500,282],[568,322]],C='';
  CL.forEach(function(p,i){var R=xyRng(90+i),D='';for(var q=0;q<10;q++){var a=R()*6.283,r=40+R()*34;D+='<circle class="xvg" cx="'+(p[0]+Math.cos(a)*r).toFixed(1)+'" cy="'+(p[1]+Math.sin(a)*r*.7).toFixed(1)+'" r="2.4" data-a="'+a.toFixed(3)+'"/>'}
    C+='<g class="xcell"><ellipse class="xce" cx="'+p[0]+'" cy="'+p[1]+'" rx="34" ry="17" transform="rotate('+(i%2?-12:14)+' '+p[0]+' '+p[1]+')"/><ellipse class="xnu" cx="'+p[0]+'" cy="'+p[1]+'" rx="9" ry="6"/><path class="xdna" d="M'+(p[0]-5)+' '+(p[1]-2)+'c3 4 7-4 10 0"/>'+D+'</g>'});
  s+='<g id="xyCe">'+C+'</g>';
  /* labels */
  s+='<g id="xyL1"><path class="xcl" d="M262 '+(xySurf(262)-38).toFixed(1)+'V24H200"/><text x="200" y="14" style="font-size:'+fs+'px">STENOSIS</text>'+
     '<path class="xcl" d="M560 300L610 210V200"/><text class="xt2" x="626" y="188" text-anchor="end" style="font-size:'+fs+'px">STARVED MUSCLE</text>'+
     '<text x="30" y="'+(xySurf(30)-62).toFixed(1)+'" style="font-size:'+fs+'px">CORONARY ARTERY</text></g>';
  s+='<g id="xyL2"><text x="40" y="530" style="font-size:'+fs+'px">CATHETER · CATH LAB</text><text class="xt2" x="626" y="452" text-anchor="end" style="font-size:'+fs+'px">XC001</text></g>';
  s+='<g id="xyL3"><text class="xt2" x="626" y="232" text-anchor="end" style="font-size:'+fs+'px">VEGF</text><text x="300" y="232" style="font-size:'+fs+'px">NUCLEUS</text></g>';
  s+='<g id="xyL4"><text class="xt3" x="30" y="'+(xySurf(30)-62).toFixed(1)+'" style="font-size:'+fs+'px">NEW VESSELS</text></g>';
  caps.forEach(function(t,i){s+='<text class="cap" id="xyC'+i+'" x="320" y="'+(mob?596:592)+'" text-anchor="middle" style="font-size:'+cs+'px">'+t+'</text>'});
  return s+'</svg>';
}
function storyDraw(svg){
  var q=function(sel){return [].slice.call(svg.querySelectorAll(sel))};
  var E={fib:$("#xyFib",svg),is:$("#xyIs",svg),pf:$("#xyPf",svg),pl:$("#xyPl",svg),fl:q("#xyFl .xfl2"),cat:$("#xyCat",svg),catP:q("#xyCat path"),
    bl:q("#xyBl .xbl"),ce:q("#xyCe .xcell"),vg:q("#xyCe .xvg"),v:q("#xyV .xv"),L:[1,2,3,4].map(function(i){return $("#xyL"+i,svg)}),cap:[0,1,2,3].map(function(i){return $("#xyC"+i,svg)})};
  var CPL=E.catP.map(function(e){return e.getTotalLength()}),VL=E.v.map(function(e){return e.getTotalLength()});
  var VG=E.vg.map(function(e){return [+e.getAttribute("cx"),+e.getAttribute("cy"),+e.getAttribute("data-a")]});
  return function(p,b){
    if(!E.fib.isConnected)return;
    var s1=seg(p,.02,.16),s2=seg(p,.27,.47),s3=seg(p,.53,.7),s4=seg(p,.78,.94);
    svg.style.opacity=(.3+.7*b).toFixed(3);
    E.fib.style.opacity=(.45+.55*s1).toFixed(3);
    E.is.style.opacity=(Math.max(.25,s1)*(1-.85*s4)).toFixed(3);E.pf.style.opacity=s4.toFixed(3);
    E.fl.forEach(function(e){e.style.opacity=(.25+.75*s4).toFixed(3)});
    E.L[0].style.opacity=(s1*(1-s2)).toFixed(3);
    /* step 2: the catheter draws up to the wall, then three blooms of vector particles open in turn */
    E.catP.forEach(function(e,i){var qq=i<2?seg(s2,0,.45):seg(s2,.42,.55);e.style.strokeDasharray=CPL[i].toFixed(1)+" "+CPL[i].toFixed(1);e.style.strokeDashoffset=(CPL[i]*(1-qq)).toFixed(1)});
    E.cat.style.opacity=(1-.85*s3).toFixed(3);
    E.bl.forEach(function(g,i){var qq=seg(s2,.5+i*.12,.8+i*.08);g.style.opacity=(qq*(1-.75*s4)).toFixed(3);g.style.transformOrigin="center";g.style.transformBox="fill-box";g.style.transform="scale("+(.6+.4*qq).toFixed(3)+")"});
    E.L[1].style.opacity=(seg(s2,.3,.7)*(1-s3)).toFixed(3);
    /* step 3: cells appear, VEGF dots move outward from each cell */
    E.ce.forEach(function(g,i){g.style.opacity=(seg(s3,i*.1,.35+i*.1)*(1-.55*s4)).toFixed(3)});
    E.vg.forEach(function(e,i){var o=VG[i],m=seg(s3,.4,1)*14+s4*10;e.setAttribute("transform","translate("+(Math.cos(o[2])*m).toFixed(1)+" "+(Math.sin(o[2])*m*.7).toFixed(1)+")");e.style.opacity=seg(s3,.35,.7).toFixed(3)});
    E.L[2].style.opacity=(seg(s3,.3,.7)*(1-s4)).toFixed(3);
    /* step 4: new vessels draw out from the artery, trunks first, then their branches */
    E.v.forEach(function(e,i){var d=+e.getAttribute("data-dep"),qq=seg(s4,d*.16,.55+d*.15);e.style.strokeDasharray=VL[i].toFixed(1)+" "+VL[i].toFixed(1);e.style.strokeDashoffset=(VL[i]*(1-qq)).toFixed(1)});
    E.L[3].style.opacity=seg(s4,.5,1).toFixed(3);
    var W=[[0,0,.23,.25],[.25,.28,.48,.5],[.5,.53,.73,.75],[.75,.78,2,2]];
    E.cap.forEach(function(el,k){var a2=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]);el.style.opacity=(b*a2*(1-o)).toFixed(3)});
  };
}
