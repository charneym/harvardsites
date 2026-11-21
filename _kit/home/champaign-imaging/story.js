/* the story scene (BL/BY/DB): ONE engraved schematic of a child's head, seen from above (axial), inside GenNext NP's head-only
   coil, redrawn every frame as it moves through the method on champaignimaging.com/nextgen-neuroimaging/ and the NIMH SBIR
   abstract (R44MH122028). 1 Noise: hard gradient switching, loud sound fronts. 2 Quiet: the waveform ramps gently (ZTE /
   MB-SWIFT) and the sound fronts die away. 3 Motion: the head moves; ghost outlines show it; radial readout spokes all pass
   through the centre of k-space (3D radial, self-navigated). 4 Correct: the ghosts fold back onto the head, the slice resolves
   and the technologist's green / yellow / red status shows green. Colours: logo teal and slate, bone. */
var SC_C={x:300,y:286};
function scBrain(k){ /* cortex outline: an axial slice, front up, with gyri */
  var d="",n=180,i;for(i=0;i<=n;i++){var a=i/n*Math.PI*2,c=Math.cos(a),s=Math.sin(a);
    var r=1+.028*Math.sin(a*17+1.3)+.018*Math.sin(a*31+.4)+.01*Math.sin(a*47);
    var rx=k*96*r,ry=k*122*r*(1-.05*s);d+=(i?"L":"M")+(SC_C.x+rx*c).toFixed(1)+" "+(SC_C.y+ry*s).toFixed(1)}return d+"Z"}
function scHead(){var d="",n=72,i;for(i=0;i<=n;i++){var a=i/n*Math.PI*2,c=Math.cos(a),s=Math.sin(a);
    var rx=112,ry=140*(1-.04*s);d+=(i?"L":"M")+(SC_C.x+rx*c).toFixed(1)+" "+(SC_C.y+ry*s).toFixed(1)}return d+"Z"}
function scWave(q){ /* gradient waveform: q=0 hard trapezoids, q=1 a low gentle ramp */
  var d="",x0=584,x1=772,y0=470,i,n=120;for(i=0;i<=n;i++){var u=i/n,x=x0+(x1-x0)*u,ph=u*6*Math.PI;
    var hard=Math.max(-1,Math.min(1,Math.sin(ph)*5)),soft=Math.sin(ph/3)*.32;var y=y0-32*((1-q)*hard+q*soft);d+=(i?"L":"M")+x.toFixed(1)+" "+y.toFixed(1)}return d}
function scene(){
  var mob=MOBILE(),i,X=SC_C.x,Y=SC_C.y;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="sD tk" d="M24 40H40M24 40V56M776 40H760M776 40V56M24 520H40M24 520V504M776 520H760M776 520V504"/>';
  /* coil housing: two rings and sixteen elements */
  g+='<circle class="sD coilO" cx="'+X+'" cy="'+Y+'" r="196"/><circle class="sD coilI" cx="'+X+'" cy="'+Y+'" r="168"/>';
  for(i=0;i<16;i++){var a=i/16*Math.PI*2,cx=X+182*Math.cos(a),cy=Y+182*Math.sin(a);
    g+='<rect class="rung" x="'+(cx-5).toFixed(1)+'" y="'+(cy-11).toFixed(1)+'" width="10" height="22" transform="rotate('+(a*180/Math.PI+90).toFixed(1)+' '+cx.toFixed(1)+' '+cy.toFixed(1)+')"/>'}
  g+='<path class="ldr" d="M'+(X+139)+' '+(Y-139)+'L466 72"/><text class="t" x="470" y="70">HEAD-ONLY COIL</text>';
  g+='<text x="44" y="536" class="t">SCHEMATIC · AXIAL VIEW, NOT TO SCALE</text></g>';
  /* sound fronts, both sides */
  g+='<g id="scSnd">';for(i=0;i<4;i++){var r=214+i*22;g+='<path class="snd" d="M'+(X+r*Math.cos(-.55)).toFixed(1)+' '+(Y+r*Math.sin(-.55)).toFixed(1)+'A'+r+' '+r+' 0 0 1 '+(X+r*Math.cos(.55)).toFixed(1)+' '+(Y+r*Math.sin(.55)).toFixed(1)+'"/>'+
    '<path class="snd" d="M'+(X-r*Math.cos(-.55)).toFixed(1)+' '+(Y+r*Math.sin(-.55)).toFixed(1)+'A'+r+' '+r+' 0 0 0 '+(X-r*Math.cos(.55)).toFixed(1)+' '+(Y+r*Math.sin(.55)).toFixed(1)+'"/>'}g+='</g>';
  /* readout spokes through the centre */
  g+='<g id="scSpk">';for(i=0;i<14;i++){var b=i*Math.PI/14+.11,L=150;g+='<path class="spk" d="M'+(X-L*Math.cos(b)).toFixed(1)+' '+(Y-L*Math.sin(b)).toFixed(1)+'L'+(X+L*Math.cos(b)).toFixed(1)+' '+(Y+L*Math.sin(b)).toFixed(1)+'"/>'}
  g+='<circle class="kc" cx="'+X+'" cy="'+Y+'" r="4"/></g>';
  /* the head: ghosts, skull, brain */
  var head=scHead(),br=scBrain(1),br2=scBrain(.8),br3=scBrain(.6);
  g+='<g id="scGh"><path class="gh" d="'+head+'"/><path class="gh" d="'+head+'"/></g>';
  g+='<g id="scHd"><path class="skull" d="'+head+'"/><path class="nose" d="M'+(X-14)+' '+(Y-140)+'Q'+X+' '+(Y-166)+' '+(X+14)+' '+(Y-140)+'"/>'+
    '<path class="ear" d="M'+(X-112)+' '+(Y-18)+'q-14 18 0 36"/><path class="ear" d="M'+(X+112)+' '+(Y-18)+'q14 18 0 36"/>'+
    '<path class="cx" d="'+br+'"/><path class="gm" d="'+br2+'"/><path class="gm g2" d="'+br3+'"/>'+
    '<path class="fis" d="M'+X+' '+(Y-118)+'L'+X+' '+(Y+118)+'"/>'+
    '<path class="ven" d="M'+(X-6)+' '+(Y-46)+'C'+(X-34)+' '+(Y-40)+' '+(X-40)+' '+(Y+4)+' '+(X-22)+' '+(Y+34)+'C'+(X-14)+' '+(Y+10)+' '+(X-10)+' '+(Y-20)+' '+(X-6)+' '+(Y-46)+'Z"/>'+
    '<path class="ven" d="M'+(X+6)+' '+(Y-46)+'C'+(X+34)+' '+(Y-40)+' '+(X+40)+' '+(Y+4)+' '+(X+22)+' '+(Y+34)+'C'+(X+14)+' '+(Y+10)+' '+(X+10)+' '+(Y-20)+' '+(X+6)+' '+(Y-46)+'Z"/>'+
    '<g id="scSul">';
  for(i=0;i<22;i++){var a2=i/22*Math.PI*2+.13,r1=.66+.12*((i*7)%3)/2,r2=.93;
    g+='<path class="sul" d="M'+(X+96*r1*Math.cos(a2)).toFixed(1)+' '+(Y+122*r1*Math.sin(a2)).toFixed(1)+'Q'+(X+96*(r1+r2)/2*Math.cos(a2+.06)).toFixed(1)+' '+(Y+122*(r1+r2)/2*Math.sin(a2+.06)).toFixed(1)+' '+(X+96*r2*Math.cos(a2)).toFixed(1)+' '+(Y+122*r2*Math.sin(a2)).toFixed(1)+'"/>'}
  g+='</g></g>';
  /* gradient waveform panel */
  g+='<g id="scWv"><path class="axis" d="M584 470H772"/><path class="wv" id="scWvP" d="'+scWave(0)+'"/><text class="t" x="772" y="410" text-anchor="end" id="scWvL">GRADIENT · HARD SWITCHING</text><text class="t" x="772" y="410" text-anchor="end" id="scWvQ">GRADIENT · GENTLE RAMP</text></g>';
  /* k-space inset: spokes on a sphere */
  g+='<g id="scK"><circle class="ks" cx="690" cy="170" r="62"/><ellipse class="ks e" cx="690" cy="170" rx="62" ry="20"/><ellipse class="ks e" cx="690" cy="170" rx="20" ry="62"/>';
  for(i=0;i<9;i++){var c2=i*Math.PI/9+.2;g+='<path class="kspk" d="M'+(690-62*Math.cos(c2)).toFixed(1)+' '+(170-62*Math.sin(c2)*.7).toFixed(1)+'L'+(690+62*Math.cos(c2)).toFixed(1)+' '+(170+62*Math.sin(c2)*.7).toFixed(1)+'"/>'}
  g+='<circle class="kc" cx="690" cy="170" r="3.5"/><text class="t" x="772" y="256" text-anchor="end">3D RADIAL · SELF-NAVIGATED</text></g>';
  /* status lights */
  g+='<g id="scQ"><circle class="ql" cx="704" cy="330" r="9" style="stroke:#d9887a"/><circle class="ql" cx="732" cy="330" r="9" style="stroke:#d8c27a"/><circle class="ql on" id="scQg" cx="760" cy="330" r="9"/>'+
    '<text class="t" x="772" y="302" text-anchor="end">SCAN QUALITY</text><text class="t hi" x="690" y="334" text-anchor="end">GREEN</text></g>';
  g+='<text x="44" y="64" class="a" id="st1">1 · LOUD GRADIENTS</text><text x="44" y="64" class="a" id="st2">2 · ZTE AND MB-SWIFT</text>'+
     '<text x="44" y="64" class="a" id="st3">3 · MOTION, TRACKED</text><text x="44" y="64" class="a" id="st4">4 · CORRECTED IMAGE</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var f=function(n){return n.toFixed(2)};
  var E={base:$$("#scBase .sD",svg),fade:$$("#scBase .neat, #scBase text, #scBase .ldr, #scBase .rung",svg),snd:$$("#scSnd .snd",svg),spk:$("#scSpk",svg),
    gh:$$("#scGh .gh",svg),hd:$("#scHd",svg),sul:$("#scSul",svg),gm:$$("#scHd .gm",svg),wv:$("#scWv",svg),wp:$("#scWvP",svg),wl:$("#scWvL",svg),wq:$("#scWvQ",svg),
    k:$("#scK",svg),q:$("#scQ",svg),qg:$("#scQg",svg),st:[$("#st1",svg),$("#st2",svg),$("#st3",svg),$("#st4",svg)]};
  E.base.forEach(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p._L=L});
  var X=SC_C.x,Y=SC_C.y,t0=performance.now();
  return function(p,b){
    if(!svg.isConnected)return;
    var tt=(performance.now()-t0)/1000;
    E.base.forEach(function(el){el.style.strokeDashoffset=f(el._L*(1-b))});E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});
    var s1=seg(p,0,.2),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    /* 1 & 2: sound fronts strong, then die away as the waveform softens */
    var loud=b*(1-s2*.92);
    E.snd.forEach(function(el,i){var j=i>>1;el.style.opacity=(loud*(.75-j*.15)).toFixed(3);el.style.strokeWidth=f(1.6-s2*.9)});
    E.wp.setAttribute("d",scWave(s2));E.wv.style.opacity=(b*(1-s3*.65)).toFixed(3);
    E.wl.style.opacity=(1-s2).toFixed(3);E.wq.style.opacity=s2.toFixed(3);
    /* 3: the head moves (ghosts), spokes and the k-space inset appear; 4: everything settles back */
    var mv=s3*(1-s4),rot=mv*7,tx=mv*16,ty=-mv*6;
    E.hd.setAttribute("transform","rotate("+f(rot)+" "+X+" "+Y+") translate("+f(tx)+" "+f(ty)+")");
    E.gh.forEach(function(el,i){var k=i?-.6:1.4;el.setAttribute("transform","rotate("+f(rot*k)+" "+X+" "+Y+") translate("+f(tx*k)+" "+f(ty*k)+")");el.style.opacity=(mv*.55).toFixed(3)});
    E.spk.style.opacity=(b*s3*(1-s4*.55)).toFixed(3);E.k.style.opacity=(b*s3*(1-s4*.5)).toFixed(3);
    /* the slice: outline from the start, inner detail resolves fully when corrected */
    E.hd.style.opacity=b.toFixed(3);
    var det=.35+.25*s1-.2*mv+.6*s4;E.sul.style.opacity=Math.min(1,det).toFixed(3);E.gm.forEach(function(el){el.style.opacity=Math.min(1,det).toFixed(3)});
    E.q.style.opacity=(b*s4).toFixed(3);E.qg.classList.toggle("lit",s4>.6);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.st[0].style.opacity=(b*O(s2)).toFixed(3);E.st[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.st[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.st[3].style.opacity=I(s4).toFixed(3);
  };
}
