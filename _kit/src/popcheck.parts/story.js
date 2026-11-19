/* the story scene (BL/BY): ONE leg resting on a pillow with VenaCheck on the calf, drawn once in fine line and kept on screen.
   Prevent: the calf muscle is stimulated and blood in the deep vein flows toward the heart. Detect: the pod's light-based sensor
   reads the vein and the blood-flow signal is traced above, with its abnormal stretch marked. Alert: the signal travels on to
   the care team's phone. Phones get a taller layout of the same scene so every label stays legible. */
var LTOP=[[-.15,-.142],[-.03,-.157],[.06,-.142],[.15,-.12],[.3,-.108],[.5,-.095],[.68,-.079],[.79,-.072],[.87,-.1],[.95,-.21],[1.02,-.33],[1.075,-.43],[1.11,-.47]];
var LSOLE=[[1.145,-.462],[1.16,-.42],[1.14,-.33],[1.085,-.2],[1.02,-.07],[.975,.03],[.93,.078],[.87,.086],[.81,.066],[.68,.074],[.52,.098],[.36,.136],[.22,.158],[.1,.152],[0,.142],[-.16,.162]];
function spl(pts){var n=pts.length,d="M"+pts[0][0].toFixed(1)+" "+pts[0][1].toFixed(1);
  for(var i=0;i<n-1;i++){var p0=pts[Math.max(0,i-1)],p1=pts[i],p2=pts[i+1],p3=pts[Math.min(n-1,i+2)];
    d+="C"+(p1[0]+(p2[0]-p0[0])/6).toFixed(1)+" "+(p1[1]+(p2[1]-p0[1])/6).toFixed(1)+" "+(p2[0]-(p3[0]-p1[0])/6).toFixed(1)+" "+(p2[1]-(p3[1]-p1[1])/6).toFixed(1)+" "+p2[0].toFixed(1)+" "+p2[1].toFixed(1)}return d}
function sceneSvg(o){
  var K=o.k,L=o.L;function Q(u,v){return [K[0]+u*L,K[1]+v*L]}
  var top=LTOP.map(function(q){return Q(q[0],q[1])}),bot=LSOLE.map(function(q){return Q(q[0],q[1])});
  var hemT=top[0],hemB=bot[bot.length-1];
  var leg=spl(top.concat(bot))+"C"+(hemB[0]-L*.05).toFixed(1)+" "+(hemB[1]-L*.08).toFixed(1)+" "+(hemT[0]-L*.05).toFixed(1)+" "+(hemT[1]+L*.08).toFixed(1)+" "+hemT[0].toFixed(1)+" "+hemT[1].toFixed(1);
  function vt(u){return u<.4?-.108+(u-.3)*.065:-.1}function vb(u){return .136-(u-.36)*.3}
  var b0=.355,b1=.475,bm=(b0+b1)/2,A=Q(b0,vt(b0)-.008),B=Q(b1,vt(b1)-.008),C=Q(b1,vb(b1)+.008),D=Q(b0,vb(b0)+.008);
  var band="M"+A+"L"+B+"Q"+Q(b1+.014,.02)+" "+C+"L"+D+"Q"+Q(b0+.014,.02)+" "+A+"Z";
  var pod=Q(bm+.004,.0),pw=L*.105,ph=L*.07;
  var vein=spl([[.86,.03],[.72,.045],[.55,.06],[.38,.085],[.22,.095],[.08,.085],[-.02,.07],[-.14,.075]].map(function(q){return Q(q[0],q[1])}));
  var bed=K[1]+.335*L,pl1=Q(-.04,.15),pl2=Q(.82,.08);
  var pillow=spl([[pl1[0]-L*.04,bed],[pl1[0]-L*.06,bed-L*.08],[pl1[0]+L*.02,pl1[1]+L*.02],[Q(.4,.13)[0],Q(.4,.13)[1]+L*.02],[pl2[0],pl2[1]+L*.025],[pl2[0]+L*.08,bed-L*.07],[pl2[0]+L*.05,bed]]);
  /* blanket over the thigh, folded back at the knee */
  var bl='<path class="ln-a" d="M'+(hemT[0]-L*.03).toFixed(1)+' '+(hemT[1]-L*.03).toFixed(1)+'C'+(hemT[0]-L*.09).toFixed(1)+' '+(hemT[1]+L*.06).toFixed(1)+' '+(hemB[0]-L*.08).toFixed(1)+' '+(hemB[1]-L*.02).toFixed(1)+' '+(hemB[0]-L*.04).toFixed(1)+' '+bed.toFixed(1)+'"/>'+
    '<path class="ln-a" d="M'+(hemT[0]-L*.03).toFixed(1)+' '+(hemT[1]-L*.03).toFixed(1)+'C'+(hemT[0]-L*.2).toFixed(1)+' '+(hemT[1]-L*.08).toFixed(1)+' '+(hemT[0]-L*o.bw*.6).toFixed(1)+' '+(hemT[1]+L*.02).toFixed(1)+' '+(hemT[0]-L*o.bw).toFixed(1)+' '+(hemT[1]+L*.1).toFixed(1)+'"/>';
  var mus="";[[.12,.2],[.22,.215],[.32,.195]].forEach(function(m){var a=Q(m[0]-.04,m[1]),b=Q(m[0]+.04,m[1]),c=Q(m[0],m[1]+.03);mus+='<path class="grow" d="M'+a+'Q'+c+' '+b+'"/>'});
  var arrow=Q(-.1,.075),ar2=Q(-.06,.06),ar3=Q(-.06,.09);
  /* the blood-flow trace: regular pulses, then the abnormal stretch (damped, drifting) */
  var W=o.wave,wd="",hx0=W.x+W.w*.66;
  for(var x=0;x<=W.w;x+=2){var f=(x/(W.w/9))%1,ab=W.x+x>hx0?1:0,amp=ab?.42:1,y=W.y-W.h*amp*(Math.exp(-Math.pow(f-.3,2)/.008)+.38*Math.exp(-Math.pow(f-.56,2)/.005))-ab*W.h*.18*((W.x+x-hx0)/(W.w*.34));wd+=(x?"L":"M")+(W.x+x).toFixed(1)+" "+y.toFixed(1)}
  var Ph=o.ph,lk=o.link;
  return '<svg class="'+(o.mob?"mob":"")+'" viewBox="'+o.vb+'" aria-hidden="true">'+
   '<g id="scBase">'+bl+'<path class="ln-a" d="'+pillow+'"/><path class="ln-a" d="M'+(o.mob?6:20)+' '+bed.toFixed(1)+'H'+(o.mob?414:780)+'"/>'+
    '<path class="frm2" d="'+leg+'"/><path class="frm" d="'+leg+'"/>'+
    '<path class="vein" id="scVein" d="'+vein+'"/>'+
    '<path class="bandf" d="'+band+'"/><rect class="podf" x="'+(pod[0]-pw/2).toFixed(1)+'" y="'+(pod[1]-ph/2).toFixed(1)+'" width="'+pw.toFixed(1)+'" height="'+ph.toFixed(1)+'" rx="2"/><circle class="led" id="scLed" cx="'+(pod[0]+pw*.3).toFixed(1)+'" cy="'+(pod[1]-ph*.15).toFixed(1)+'" r="3"/>'+
    '<path class="ln-a" d="M'+Q(bm,vb(bm)+.012)+'L'+Q(bm,(bed-K[1])/L+o.vl)+'"/><text x="'+(Q(bm,0)[0]-4).toFixed(1)+'" y="'+(bed+L*o.vl+16).toFixed(1)+'" text-anchor="start" class="w">VENACHECK</text></g>'+
   '<g id="scP1"><path class="flow" id="scFlow" d="'+vein+'"/>'+mus+'<path class="join" d="M'+arrow+'L'+ar2+'M'+arrow+'L'+ar3+'"/>'+
    '<path class="ln-a" d="M'+Q(.2,.215)+'L'+Q(.2,(bed-K[1])/L+o.vl)+'"/><text x="'+(Q(.2,0)[0]+4).toFixed(1)+'" y="'+(bed+L*o.vl+16).toFixed(1)+'" text-anchor="end" class="a">CALF MUSCLE</text>'+
    '<path class="ln-a" d="M'+Q(-.12,.06)+'L'+o.th[0]+' '+(o.th[1]+8)+'"/><text x="'+o.th[0]+'" y="'+o.th[1]+'" text-anchor="'+o.th[2]+'" class="a">TOWARD THE HEART</text></g>'+
   '<g id="scP2"><path class="join" id="scRay" d="M'+(pod[0]-6)+' '+(pod[1]+ph/2+3)+'L'+Q(bm-.03,.07)+'M'+pod[0]+' '+(pod[1]+ph/2+3)+'L'+Q(bm,.075)+'M'+(pod[0]+6)+' '+(pod[1]+ph/2+3)+'L'+Q(bm+.03,.07)+'"/>'+
    '<path class="join" id="scCon" d="M'+pod[0].toFixed(1)+' '+(pod[1]-ph/2-4).toFixed(1)+'V'+(W.y+W.h*.3).toFixed(1)+'"/>'+
    '<text x="'+(pod[0]+10).toFixed(1)+'" y="'+((pod[1]-ph/2+W.y+W.h*.3)/2+4).toFixed(1)+'" class="a">LIGHT-BASED SENSOR</text>'+
    '<path class="ln-a" d="M'+W.x+' '+(W.y+W.h*.3).toFixed(1)+'H'+(W.x+W.w)+'"/><path class="wave" id="scWave" d="'+wd+'"/>'+
    '<text x="'+W.x+'" y="'+(W.y-W.h*1.25).toFixed(1)+'" class="w">BLOOD-FLOW SIGNAL</text>'+
    '<g id="scHi"><path class="join" d="M'+hx0.toFixed(1)+' '+(W.y-W.h*1.05).toFixed(1)+'v-6H'+(W.x+W.w)+'v6"/><text x="'+(W.x+W.w)+'" y="'+(W.y-W.h*1.25).toFixed(1)+'" text-anchor="end" class="a">ABNORMAL PATTERN</text></g></g>'+
   '<g id="scP3"><path class="flow" id="scLink" d="'+lk+'"/>'+
    '<g id="scPh"><rect class="frm" x="'+Ph.x+'" y="'+Ph.y+'" width="'+Ph.w+'" height="'+Ph.h+'" rx="9"/><path class="ln-a" d="M'+(Ph.x+Ph.w*.38)+' '+(Ph.y+9)+'h'+(Ph.w*.24)+'"/>'+
     '<path class="ln-a" d="M'+(Ph.x+10)+' '+(Ph.y+Ph.h*.62)+'h'+(Ph.w-20)+'M'+(Ph.x+10)+' '+(Ph.y+Ph.h*.72)+'h'+(Ph.w*.55)+'M'+(Ph.x+10)+' '+(Ph.y+Ph.h*.82)+'h'+(Ph.w*.7)+'"/>'+
     '<g id="scAl"><circle class="own" cx="'+(Ph.x+Ph.w/2)+'" cy="'+(Ph.y+Ph.h*.33)+'" r="'+(Ph.w*.24)+'"/><path class="join" d="M'+(Ph.x+Ph.w*.38)+' '+(Ph.y+Ph.h*.33)+'l'+(Ph.w*.08)+' '+(Ph.w*.08)+'l'+(Ph.w*.16)+' -'+(Ph.w*.17)+'"/></g></g>'+
    '<text x="'+(Ph.x+Ph.w/2)+'" y="'+(Ph.y+Ph.h+22)+'" text-anchor="middle" class="a">CARE TEAM ALERTED</text></g>'+
  '</svg>';
}
function scene(){
  if(MOBILE())return sceneSvg({mob:1,vb:"0 0 420 560",k:[62,404],L:254,bw:.25,vl:.06,th:[10,330,"start"],
    wave:{x:14,y:120,w:270,h:38},ph:{x:316,y:34,w:92,h:156},link:"M284 131H304"});
  return sceneSvg({mob:0,vb:"0 0 800 540",k:[112,336],L:446,bw:.2,vl:.06,th:[24,236,"start"],
    wave:{x:30,y:120,w:390,h:42},ph:{x:652,y:36,w:104,h:176},link:"M420 133C500 133 560 124 640 124"});
}
function storyDraw(svg){
  var E={p1:$("#scP1",svg),p2:$("#scP2",svg),p3:$("#scP3",svg),flow:$("#scFlow",svg),vein:$("#scVein",svg),led:$("#scLed",svg),ray:$("#scRay",svg),con:$("#scCon",svg),wave:$("#scWave",svg),hi:$("#scHi",svg),link:$("#scLink",svg),ph:$("#scPh",svg),al:$("#scAl",svg),base:$("#scBase",svg),mus:$$("#scP1 .grow",svg)};
  var CL=E.con.getTotalLength(),WL=E.wave.getTotalLength();
  return function(p,b){
    if(!E.base.isConnected)return;
    var s1=seg(p,.02,.2),s2=seg(p,.36,.58),s3=seg(p,.7,.9),pulse=.5+.5*Math.sin(p*60);
    E.base.style.opacity=b;
    E.vein.style.opacity=(.45+.55*s1).toFixed(3);
    E.p1.style.opacity=(b*s1).toFixed(3);E.flow.style.strokeDashoffset=(-p*900).toFixed(1);
    E.mus.forEach(function(m,k){m.style.opacity=(s1*(1-.55*s2)*(.4+.6*(.5+.5*Math.sin(p*60-k*1.3)))).toFixed(3)});
    E.led.style.opacity=(.35+.65*Math.max(s1*(1-s2)*pulse,s2,s3)).toFixed(3);
    E.p2.style.opacity=(b*s2).toFixed(3);
    E.con.style.strokeDasharray=CL;E.con.style.strokeDashoffset=(CL*(1-seg(p,.36,.46))).toFixed(1);
    E.wave.style.strokeDasharray=WL;E.wave.style.strokeDashoffset=(WL*(1-seg(p,.42,.6))).toFixed(1);
    E.hi.style.opacity=seg(p,.56,.64).toFixed(3);E.ray.style.opacity=(seg(p,.36,.44)*(.55+.45*pulse)).toFixed(3);
    E.p3.style.opacity=(b*s3).toFixed(3);E.link.style.strokeDashoffset=(-p*700).toFixed(1);
    E.ph.style.transform="translateY("+(12*(1-s3)).toFixed(1)+"px)";E.al.style.opacity=seg(p,.8,.9).toFixed(3);
  };
}
