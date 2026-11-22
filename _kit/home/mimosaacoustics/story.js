/* The story scene (DB/BL): how one OtoStat test works (mimosaacoustics.com MEPA and DPOAE pages; Lapsley Miller et al.,
   Ear Hear 2026), as ONE continuous fine-line cross-section of the ear that fills the frame: the ear probe and its foam
   tip sealed in the ear canal, the eardrum, the ossicles of the middle ear, the oval window and the cochlea, with the
   probe's readout drawn along the base. Frame 0 is complete. Step 1 (measure): a wideband chirp travels to the eardrum,
   a weaker reflection returns, and the absorbance curve draws. Step 2 (calibrate): the standing wave in the canal and
   the SPL-versus-FPL curves (SPL dips at the canal's null; FPL stays level). Step 3 (listen): tones f1 and f2 pass the
   ossicles into the cochlea, a place on the basal turn lights, and the 2f1-f2 emission travels back to the probe,
   where it appears as a small line in the spectrum. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=560;
var CY=280;                                   /* canal axis */
var TIP=176,TM=326;                           /* foam tip face, eardrum */
var COX=596,COY=252,COR=124;                  /* cochlea centre and outer radius */
var GX0=40,GX1=736,GY0=430,GY1=528;           /* readout band */
function spiralPts(off,n){var a=[],i;for(i=0;i<=n;i++){var t=i/n,ang=Math.PI+t*2.45*2*Math.PI,r=COR*(1-.86*Math.pow(t,.85))+off*(1-.62*t);
  a.push([COX+Math.cos(ang)*r,COY-Math.sin(ang)*r*.92])}return a}
function pth(a){return 'M'+a.map(function(p){return p[0].toFixed(1)+' '+p[1].toFixed(1)}).join('L')}
var SPM=spiralPts(0,240);
/* readout curves, x in log-frequency over 0.2-8 kHz */
function fx(f){return GX0+(GX1-GX0)*Math.log(f/.2)/Math.log(40)}
function curve(fn){var a=[],i;for(i=0;i<=120;i++){var f=.2*Math.pow(40,i/120);a.push([fx(f),fn(f)])}return pth(a)}
var ABS=curve(function(f){var l=Math.log2(f/3.2);return GY1-8-(GY1-GY0-20)*(.82*Math.exp(-l*l/2.6))});
var SPL=curve(function(f){var l=Math.log2(f/4.2);return GY0+34+3*Math.sin(f*1.3)+40*Math.exp(-l*l/.012)});
var FPL=curve(function(f){return GY0+34+2*Math.sin(f*.9)});
var NOISE=(function(){var a=[],i,s=5;for(i=0;i<=180;i++){s=(s*1103515245+12345)&0x7fffffff;a.push([GX0+(GX1-GX0)*i/180,GY1-10-(s/0x7fffffff)*7])}return pth(a)})();
var F1=fx(2),F2=fx(2.4),FD=fx(1.6);
function earScene(o){
  var g='',i;
  var T=function(cls,x,y,txt,anchor,keep){return (o.mob&&!keep)?'':'<text class="'+cls+'"'+(anchor?' text-anchor="'+anchor+'"':'')+' x="'+x+'" y="'+y+'">'+txt+'</text>'};
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* outer ear and canal walls */
  g+='<path class="wo sD" d="M30 120C70 150 92 196 98 236"/><path class="wo sD" d="M30 440C70 410 92 364 98 324"/>';
  g+='<path class="wl sD" d="M98 236C170 228 250 236 '+TM+' 220"/>';
  g+='<path class="wl sD" d="M98 324C170 332 262 330 '+(TM+6)+' 342"/>';
  /* skin of the canal: a second, faint wall line */
  g+='<path class="wo sD" d="M110 246C180 240 250 246 '+(TM-6)+' 232"/><path class="wo sD" d="M110 314C180 320 262 318 '+(TM-2)+' 330"/>';
  /* the probe: cable, body, foam tip */
  g+='<path class="wo sD" d="M8 '+(CY+44)+'C20 '+(CY+30)+' 18 '+(CY+12)+' 28 '+(CY+8)+'"/>';
  g+='<path class="wl sD" d="M28 '+(CY-20)+'H118V'+(CY+20)+'H28Z"/>';
  g+='<path class="en sD" d="M44 '+(CY-20)+'V'+(CY+20)+'M60 '+(CY-20)+'V'+(CY+20)+'"/>';
  g+='<path class="wl sD" d="M118 '+(CY-22)+'C150 '+(CY-26)+' '+TIP+' '+(CY-20)+' '+TIP+' '+CY+'C'+TIP+' '+(CY+20)+' 150 '+(CY+26)+' 118 '+(CY+22)+'"/>';
  g+='<path class="en sD" d="M128 '+(CY-14)+'C150 '+(CY-16)+' 164 '+(CY-10)+' 166 '+CY+'M128 '+(CY+14)+'C150 '+(CY+16)+' 164 '+(CY+10)+' 166 '+CY+'"/>';
  /* eardrum: a shallow cone */
  g+='<path class="wl sD tmb" d="M'+TM+' 220Q352 282 '+(TM+6)+' 342"/>';
  /* middle-ear cavity */
  g+='<path class="wo sD" d="M'+TM+' 220C330 176 360 150 410 148C452 146 476 168 478 206M478 312C476 352 452 380 408 384C366 386 340 368 '+(TM+6)+' 342"/>';
  /* ossicles: malleus (handle on the eardrum), incus, stapes on the oval window */
  g+='<path class="wl sD" d="M340 290C342 260 346 232 352 214"/><ellipse class="osl" cx="360" cy="200" rx="13" ry="16"/>';
  g+='<path class="wl sD" d="M372 194C388 186 404 190 410 204C414 220 414 244 418 260"/>';
  g+='<path class="wl sD" d="M418 260C426 250 444 248 456 252M418 264C426 274 444 276 456 272"/><path class="wl sD" d="M458 240V284"/>';
  /* cochlea: the spiral tube, outer and inner walls, plus the centre line */
  g+='<path class="wl sD" d="'+pth(spiralPts(15,240))+'"/>';
  g+='<path class="wl sD" d="'+pth(spiralPts(-15,240))+'"/>';
  g+='<path class="wo sD" d="'+pth(SPM)+'"/>';
  g+='<ellipse class="osl" cx="466" cy="312" rx="5" ry="9"/>';
  g+=T('t',30,96,'EAR PROBE',null,1);
  g+=T('t',220,206,'EAR CANAL','middle');
  g+=T('t',TM-4,404,'EARDRUM','middle');
  g+=T('t',402,132,'MIDDLE EAR','middle',1);
  g+=T('t',COX,96,'COCHLEA','middle',1);
  /* readout band */
  g+='<path class="wo sD" d="M'+GX0+' '+GY1+'H'+GX1+'"/>';
  [.2,.5,1,2,4,8].forEach(function(f){var x=fx(f);g+='<path class="wo sD" d="M'+x.toFixed(1)+' '+GY1+'v6"/>';g+=T('t',x,GY1+24,f<1?String(f).replace('0.','.'):String(f),'middle')});
  g+=T('t',GX1,GY1+24,'',null);
  g+='</g>';
  /* step 1: chirp wavefronts in, the reflection out */
  g+='<g id="scChirp">';for(i=0;i<4;i++)g+='<path class="wv" data-k="'+i+'" d="M0 -34Q16 0 0 34"/>';for(i=0;i<4;i++)g+='<path class="wv rf" data-k="'+i+'" d="M0 -26Q-12 0 0 26"/>';g+='</g>';
  /* step 2: the standing wave in the canal */
  g+='<path id="scStand" class="wv" d=""/>';
  /* step 3: tones in, emission out, the lit place on the basal turn */
  g+='<g id="scTone">';for(i=0;i<6;i++)g+='<circle class="tn" data-k="'+i+'" r="4.5"/>';g+='</g>';
  g+='<g id="scEmi">';for(i=0;i<4;i++)g+='<circle class="em" data-k="'+i+'" r="4"/>';g+='</g>';
  g+='<circle id="scPlace" class="pl" r="15"/>';
  /* the three readouts */
  g+='<g id="plA"><path class="cv" d="'+ABS+'"/>'+T('a',GX0,GY0-14,o.mob?'ABSORBANCE':'ABSORBANCE · 0.2 TO 8 kHz',null,1)+'</g>';
  g+='<g id="plB"><path class="cv dim" d="'+SPL+'"/><path class="cv" d="'+FPL+'"/>'+T('a',GX0,GY0-14,o.mob?'SPL vs FPL':'LEVEL AT THE PROBE (SPL) vs FORWARD PRESSURE LEVEL (FPL)',null,1)+'</g>';
  g+='<g id="plC"><path class="cv dim" d="'+NOISE+'"/><path class="cv sp" d="M'+F1.toFixed(1)+' '+GY1+'V'+(GY0+10)+'M'+F2.toFixed(1)+' '+GY1+'V'+(GY0+18)+'"/><path class="cv em2" d="M'+FD.toFixed(1)+' '+GY1+'V'+(GY0+58)+'"/>'+
    T('t',F1,GY0+2,'f1','middle')+T('t',F2+4,GY0+10,'f2','middle')+T('a',GX0,GY0-14,o.mob?'DPOAE AT 2f1−f2':'DISTORTION PRODUCT AT 2f1−f2, RECORDED BY THE SAME PROBE',null,1)+'</g>';
  return g+'</svg>';
}
function scene(){return earScene({mob:MOBILE()?1:0})}
/* the path a tone follows: probe tip -> eardrum -> ossicles -> oval window -> along the basal turn */
var ROUTE=(function(){var a=[[TIP,CY],[TM+8,CY],[340,286],[352,214],[372,196],[410,206],[418,260],[458,262]];
  for(var i=0;i<=46;i++)a.push(SPM[i]);return a})();
var RL=(function(){var L=[0],i;for(i=1;i<ROUTE.length;i++){var dx=ROUTE[i][0]-ROUTE[i-1][0],dy=ROUTE[i][1]-ROUTE[i-1][1];L.push(L[i-1]+Math.sqrt(dx*dx+dy*dy))}return L})();
function along(u){var d=Math.max(0,Math.min(1,u))*RL[RL.length-1],i=1;while(i<RL.length-1&&RL[i]<d)i++;
  var f=(d-RL[i-1])/((RL[i]-RL[i-1])||1);return [ROUTE[i-1][0]+(ROUTE[i][0]-ROUTE[i-1][0])*f,ROUTE[i-1][1]+(ROUTE[i][1]-ROUTE[i-1][1])*f]}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .osl",svg),
    wv:$$("#scChirp .wv:not(.rf)",svg),rf:$$("#scChirp .rf",svg),st:$("#scStand",svg),tn:$$("#scTone .tn",svg),em:$$("#scEmi .em",svg),pl:$("#scPlace",svg),
    pA:$("#plA",svg),pB:$("#plB",svg),pC:$("#plC",svg),cA:dl("#plA .cv"),cB:dl("#plB .cv"),cC:dl("#plC .cv")};
  var lastB=-1,tip=SPM[46];
  E.pl.setAttribute("cx",tip[0].toFixed(1));E.pl.setAttribute("cy",tip[1].toFixed(1));
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,.02,.3),s2=seg(p,.36,.62),s3=seg(p,.68,.96),o1=1-seg(p,.3,.36),o2=seg(p,.33,.38)*(1-seg(p,.63,.69)),o3=seg(p,.66,.71);
    /* 1. chirps travel in and partly reflect */
    E.wv.forEach(function(el,k){var t=(s1*2.2-k*.3);t=t-Math.floor(Math.max(0,t));var on=s1>0&&s1<1&&s1*2.2-k*.3>0;
      var x=TIP+6+(TM-TIP-12)*t;el.setAttribute("transform","translate("+x.toFixed(1)+" "+CY+")");op(el,on?b*o1*(1-t*.3):0)});
    E.rf.forEach(function(el,k){var t=(s1*2.2-k*.3-.5);var on=s1>0&&s1<1&&t>0;t=t-Math.floor(Math.max(0,t));
      var x=TM-8-(TM-TIP-20)*t;el.setAttribute("transform","translate("+x.toFixed(1)+" "+CY+")");op(el,on?b*o1*.5*(1-t):0)});
    op(E.pA,b*(p<.33?1:o1));draw(E.cA,s1);
    /* 2. the standing wave and the two calibrations */
    var A=14*s2,d="M"+(TIP+4)+" "+CY,i;for(i=1;i<=60;i++){var u=i/60,x=TIP+4+(TM-TIP-10)*u,y=CY+Math.sin(u*Math.PI*1.5+p*40)*A*Math.abs(Math.cos(u*Math.PI*1.5));d+="L"+x.toFixed(1)+" "+y.toFixed(1)}
    E.st.setAttribute("d",d);op(E.st,b*o2);op(E.pB,b*o2);draw(E.cB,s2);
    /* 3. tones in through the middle ear; the emission back out */
    E.tn.forEach(function(el,k){var u=s3*1.5-k*.09;op(el,b*o3*(u>0&&u<1.02?1:0)*(1-seg(p,.94,.99)));var q=along(u);el.setAttribute("cx",q[0].toFixed(1));el.setAttribute("cy",q[1].toFixed(1))});
    op(E.pl,b*seg(p,.8,.86)*(.75+.25*Math.sin(p*60)));
    E.em.forEach(function(el,k){var u=1-(s3*1.9-.85-k*.08);op(el,b*o3*(u>0&&u<1?1:0));var q=along(u);el.setAttribute("cx",q[0].toFixed(1));el.setAttribute("cy",q[1].toFixed(1))});
    op(E.pC,b*o3);draw(E.cC,seg(p,.74,.98));
  };
}
