/* the story scene (BL/BY/DB): ONE engraved schematic of the shoulder joint, coronal view, redrawn every frame as it moves through
   the mechanism on ortholevo.com and the NIH SBIR abstracts (R44AR079326, SB1AR084380). 1 Stiff: collagen builds up and the
   capsule thickens and contracts; the arm's range of motion is small. 2 Inject: one injection places relaxin-2 loaded polymeric
   microparticles in the joint. 3 Release: the particles release relaxin locally over time (the sustained-release curve draws).
   4 Restore: collagen fibres loosen, the capsule thins and the arm's arc of motion opens. Colours: logo navy, bone, logo red. */
var SJ={x:330,y:282,R:74};
function sjCaps(k){ /* joint capsule: glenoid rim to anatomical neck, with the inferior (axillary) recess; k = contraction 0..1 */
  var X=SJ.x,Y=SJ.y,dip=150-50*k,sp=1-.08*k;
  return "M"+(X-66)+" "+(Y-82)+"C"+(X-40)+" "+(Y-112*sp)+" "+(X+40)+" "+(Y-112*sp)+" "+(X+86)+" "+(Y-40)+
    "M"+(X-66)+" "+(Y+82)+"C"+(X-62)+" "+(Y+dip)+" "+(X-30)+" "+(Y+dip+6)+" "+(X-14)+" "+(Y+dip-14)+"C"+(X-6)+" "+(Y+dip-30)+" "+(X-12)+" "+(Y+92)+" "+(X-20)+" "+(Y+78)}
function sjCurve(u){ /* sustained-release curve inside the inset, drawn to fraction u */
  var d="",x0=584,x1=772,y0=500,i,n=60,m=Math.max(1,Math.round(n*u));for(i=0;i<=m;i++){var s=i/n,x=x0+(x1-x0)*s;
    var y=y0-62*(1-Math.exp(-s*14))*(1-.18*s);d+=(i?"L":"M")+x.toFixed(1)+" "+y.toFixed(1)}return d}
function sjBolus(){var d="",x0=584,x1=772,y0=500,i,n=60;for(i=0;i<=n;i++){var s=i/n,x=x0+(x1-x0)*s,y=y0-88*(s<.07?Math.exp(-Math.pow((s-.07)/.03,2)):Math.exp(-(s-.07)*9));
    d+=(i?"L":"M")+x.toFixed(1)+" "+y.toFixed(1)}return d}
var SJ_P=[[262,236,4.5],[260,262,4],[261,290,5],[262,318,4],[274,368,5.5],[288,392,6],[304,404,5],[312,384,4.5],[296,372,4]];
function scene(){
  var mob=MOBILE(),i,X=SJ.x,Y=SJ.y,R=SJ.R;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<g id="sjBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="sD tk" d="M24 40H40M24 40V56M776 40H760M776 40V56M24 520H40M24 520V504M776 520H760M776 520V504"/>';
  /* scapula with the glenoid fossa, acromion above */
  g+='<path class="sD bone" d="M'+(X-70)+' '+(Y-96)+'C'+(X-90)+' '+(Y-40)+' '+(X-90)+' '+(Y+40)+' '+(X-70)+' '+(Y+96)+'L'+(X-150)+' '+(Y+236)+'M'+(X-70)+' '+(Y-96)+'L'+(X-176)+' '+(Y-120)+'"/>';
  g+='<path class="sD bone" d="M'+(X-196)+' '+(Y-150)+'C'+(X-120)+' '+(Y-176)+' '+(X-10)+' '+(Y-182)+' '+(X+70)+' '+(Y-152)+'C'+(X+90)+' '+(Y-142)+' '+(X+80)+' '+(Y-128)+' '+(X+56)+' '+(Y-132)+'C'+(X-20)+' '+(Y-146)+' '+(X-120)+' '+(Y-140)+' '+(X-180)+' '+(Y-122)+'"/>';
  g+='<path class="sD cart" d="M'+(X-74)+' '+(Y-80)+'C'+(X-86)+' '+(Y-30)+' '+(X-86)+' '+(Y+30)+' '+(X-74)+' '+(Y+80)+'"/>';
  g+='<path class="ldr" d="M'+(X-160)+' '+(Y-142)+'L120 104"/><text class="t" x="114" y="100" text-anchor="end">ACROMION</text>';
  g+='<path class="ldr" d="M'+(X-84)+' '+(Y+30)+'L120 '+(Y+30)+'"/><text class="t" x="114" y="'+(Y+34)+'" text-anchor="end">GLENOID</text>';
  g+='<text x="44" y="536" class="t">SCHEMATIC · SHOULDER, CORONAL VIEW, NOT TO SCALE</text></g>';
  /* range-of-motion arcs */
  g+='<g id="sjRom"><path class="rom0" id="sjRomA" d=""/><path class="rom1" id="sjRomB" d=""/><text class="t" id="sjRomT" x="452" y="506">RANGE OF MOTION</text></g>';
  /* humerus: head and shaft, rotates about the head centre */
  g+='<g id="sjHum"><circle class="hhead" cx="'+(X+8)+'" cy="'+Y+'" r="'+R+'"/>'+
    '<path class="humer" d="M'+(X-44)+' '+(Y+52)+'A'+R+' '+R+' 0 1 1 '+(X+74)+' '+(Y+34)+'C'+(X+70)+' '+(Y+70)+' '+(X+50)+' '+(Y+96)+' '+(X+46)+' '+(Y+130)+'L'+(X+44)+' '+(Y+250)+
      'M'+(X-44)+' '+(Y+52)+'C'+(X-20)+' '+(Y+80)+' '+(X-6)+' '+(Y+104)+' '+(X-4)+' '+(Y+140)+'L'+(X-2)+' '+(Y+250)+'"/>'+
    '<path class="cart" d="M'+(X-52)+' '+(Y-38)+'A'+(R+3)+' '+(R+3)+' 0 0 1 '+(X+40)+' '+(Y-64)+'"/>'+
    '<path class="trab" d="M'+(X-26)+' '+(Y+24)+'Q'+(X+12)+' '+(Y-6)+' '+(X+44)+' '+(Y+14)+'M'+(X-14)+' '+(Y+48)+'Q'+(X+16)+' '+(Y+26)+' '+(X+42)+' '+(Y+44)+'M'+(X-34)+' '+(Y-2)+'Q'+(X+6)+' '+(Y-32)+' '+(X+52)+' '+(Y-12)+'"/></g>';
  /* the capsule and its collagen */
  g+='<g id="sjCap"><path class="caps" id="sjCapP" d="'+sjCaps(1)+'"/><g id="sjCol">';
  for(i=0;i<24;i++){var top=i<14,u=top?i/13:(i-14)/9,ax,ay,an;
    if(top){var t1=1-u;ax=t1*t1*t1*(X-66)+3*t1*t1*u*(X-40)+3*t1*u*u*(X+40)+u*u*u*(X+86);ay=t1*t1*t1*(Y-82)+3*t1*t1*u*(Y-106)+3*t1*u*u*(Y-106)+u*u*u*(Y-40)-7;an=(u-.5)*1.4}
    else{ax=X-64+u*44;ay=Y+92+Math.sin(u*Math.PI)*28;an=(u-.5)*-1.2+1.2*(u<.5?1:0)*0}
    g+='<path class="col" d="M'+(ax-9).toFixed(1)+' '+(ay-4).toFixed(1)+'q4.5 -5 9 0t9 0" transform="rotate('+(an*57).toFixed(1)+' '+ax.toFixed(1)+' '+ay.toFixed(1)+')"/>'}
  g+='</g><path class="ldr" d="M'+(X+72)+' '+(Y-60)+'L560 252"/><text class="t" x="566" y="256">JOINT CAPSULE</text></g>';
  /* needle and syringe */
  (function(){var tx=268,ty=226,ux=.968,uy=-.252,nx=-uy,ny=ux,P=function(d,o){return (tx+ux*d+nx*o).toFixed(1)+" "+(ty+uy*d+ny*o).toFixed(1)};
    g+='<g id="sjNd"><path class="ndl" d="M'+P(0,0)+'L'+P(250,0)+'"/><path class="syr" d="M'+P(250,-9)+'L'+P(360,-9)+'L'+P(360,9)+'L'+P(250,9)+'ZM'+P(360,-15)+'L'+P(360,15)+'M'+P(360,0)+'L'+P(420,0)+'M'+P(420,-11)+'L'+P(420,11)+'"/>'+
      '<path class="syrl" d="M'+P(280,-9)+'L'+P(280,-3)+'M'+P(300,-9)+'L'+P(300,-3)+'M'+P(320,-9)+'L'+P(320,-3)+'"/></g>'})();
  /* microparticles and released relaxin */
  g+='<g id="sjMP">';SJ_P.forEach(function(q){g+='<circle class="mp" cx="'+q[0]+'" cy="'+q[1]+'" r="'+q[2]+'"/>'});g+='</g><g id="sjRl">';
  for(i=0;i<36;i++){var q=SJ_P[i%SJ_P.length];g+='<circle class="rl" cx="'+q[0]+'" cy="'+q[1]+'" r="1.6"/>'}
  g+='</g><g id="sjMPl"><path class="ldr" d="M'+(X-36)+' '+(Y+70)+'L150 '+(Y+150)+'"/><text class="t" x="146" y="'+(Y+168)+'" text-anchor="end">RELAXIN-2</text><text class="t" x="146" y="'+(Y+184)+'" text-anchor="end">MICROPARTICLES</text></g>';
  /* release inset */
  g+='<g id="sjIn"><path class="axis" d="M584 420V500H772"/><path class="bol" d="'+sjBolus()+'"/><path class="sr" id="sjSr" d=""/>'+
    '<text class="t" x="772" y="398" text-anchor="end">LOCAL RELAXIN OVER TIME</text><text class="t dim" x="606" y="430">SINGLE BOLUS</text><text class="t hi" x="772" y="480" text-anchor="end">SUSTAINED RELEASE</text></g>';
  g+='<text x="44" y="64" class="a" id="st1">1 · FIBROSIS, STIFF JOINT</text><text x="44" y="64" class="a" id="st2">2 · ONE INJECTION</text>'+
     '<text x="44" y="64" class="a" id="st3">3 · SUSTAINED RELEASE</text><text x="44" y="64" class="a" id="st4">4 · MOTION RESTORED</text>';
  return g+'</svg>';
}
function sjArc(a0,a1,r){var X=SJ.x,Y=SJ.y,p=function(a){return (X+r*Math.sin(a)).toFixed(1)+" "+(Y+r*Math.cos(a)).toFixed(1)};
  return "M"+p(a0)+"A"+r+" "+r+" 0 0 0 "+p(a1)}
function storyDraw(svg){
  var f=function(n){return n.toFixed(2)};
  var E={base:$$("#sjBase .sD",svg),fade:$$("#sjBase .neat, #sjBase text, #sjBase .ldr",svg),hum:$("#sjHum",svg),cap:$("#sjCapP",svg),capg:$("#sjCap",svg),
    col:$$("#sjCol .col",svg),nd:$("#sjNd",svg),mp:$$("#sjMP .mp",svg),mpl:$("#sjMPl",svg),rl:$$("#sjRl .rl",svg),inn:$("#sjIn",svg),sr:$("#sjSr",svg),
    ra:$("#sjRomA",svg),rb:$("#sjRomB",svg),rt:$("#sjRomT",svg),st:[$("#st1",svg),$("#st2",svg),$("#st3",svg),$("#st4",svg)]};
  E.base.forEach(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p._L=L});
  var X=SJ.x,Y=SJ.y,t0=performance.now();
  return function(p,b){
    if(!svg.isConnected)return;
    var tt=RM?0:(performance.now()-t0)/1000;
    E.base.forEach(function(el){el.style.strokeDashoffset=f(el._L*(1-b))});E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});
    var s1=seg(p,0,.2),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    /* 1: fibrosis, the capsule thickens and contracts */
    var fib=(.55+.45*s1)*(1-s4);
    E.cap.setAttribute("d",sjCaps(fib));E.cap.style.strokeWidth=f(1+fib*3.2);E.capg.style.opacity=b.toFixed(3);
    E.col.forEach(function(el,i){el.style.opacity=(b*(.12+.88*fib)*(i%3?1:.8)).toFixed(3);el.style.strokeWidth=f(.7+fib*.7)});
    /* the arm (abduction, away from the body): a small arc while stiff, a wide one once restored; driven by scroll */
    var amp=.22+.9*s4,ang=amp*b;
    E.hum.setAttribute("transform","rotate("+f(-ang*57.3)+" "+X+" "+Y+")");E.hum.style.opacity=b.toFixed(3);
    E.ra.setAttribute("d",sjArc(0,.22,226));E.rb.setAttribute("d",sjArc(0,Math.max(.23,ang),226));
    E.ra.style.opacity=(b*(1-s4*.5)).toFixed(3);E.rb.style.opacity=(b*s4).toFixed(3);
    E.rt.style.opacity=(b*(.55+.45*s4)).toFixed(3);
    /* 2: the needle comes in, places the particles, and withdraws */
    var nin=s2*(1-s3),off=(1-nin)*120;E.nd.setAttribute("transform","translate("+f(off*.968)+" "+f(-off*.252)+")");E.nd.style.opacity=nin.toFixed(3);
    var mpv=s2*(1-.45*s4),shr=1-.35*s3-.25*s4;
    E.mp.forEach(function(el,i){var d=Math.max(0,Math.min(1,s2*1.6-i*.06));el.style.opacity=(mpv*d).toFixed(3);el.setAttribute("r",f(SJ_P[i][2]*shr))});
    E.mpl.style.opacity=(s2*(1-s4*.6)).toFixed(3);
    /* 3: relaxin leaves each particle and spreads through the capsule */
    E.rl.forEach(function(el,i){var q=SJ_P[i%SJ_P.length],k=Math.floor(i/SJ_P.length),ph=((tt*.22+k*.25+i*.037)%1),
      a=i*2.4,dist=8+ph*58;el.setAttribute("cx",f(q[0]+Math.cos(a)*dist+18*ph));el.setAttribute("cy",f(q[1]+Math.sin(a)*dist*.7));
      el.style.opacity=(s3*(1-s4*.3)*(1-ph)*.95).toFixed(3)});
    E.inn.style.opacity=(b*s3).toFixed(3);E.sr.setAttribute("d",sjCurve(Math.max(.02,s3)));
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.st[0].style.opacity=(b*O(s2)).toFixed(3);E.st[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.st[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.st[3].style.opacity=I(s4).toFixed(3);
  };
}
