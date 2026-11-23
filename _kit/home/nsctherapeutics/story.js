/* The story scene (DB/BL): NSC-Therapeutics' own mechanism (nsctherapeutics.com, Mechanism of Action: early degeneration of
   basal forebrain cholinergic neurons leaves a deficit in acetylcholine while post-synaptic M1 receptors are preserved;
   NSC001 activates M1, shifts APP processing away from β-amyloid, inhibits tau hyperphosphorylation via GSK3β and
   modulates microglia through TREM2), drawn as ONE fine-line cholinergic synapse that fills the frame: the presynaptic
   terminal with its vesicles above, the cleft, and the post-synaptic membrane below with five M1 receptors in it.
   Frame 0 is complete: acetylcholine crosses the cleft to the receptors.
   Step 1 (fade): the terminal dims and empties; acetylcholine stops; the receptors remain.
   Step 2 (activate): NSC001 (the logo hexagon, in the accent) drifts in and seats on each receptor, which lights.
   Step 3 (protect): signals run down from the receptors to three effects. Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
var MEM=[96,338,250,298,510,298,664,338];
function bzp(P,t){var u=1-t;return [u*u*u*P[0]+3*u*u*t*P[2]+3*u*t*t*P[4]+t*t*t*P[6],u*u*u*P[1]+3*u*u*t*P[3]+3*u*t*t*P[5]+t*t*t*P[7]]}
function memAt(x){var lo=0,hi=1,i,m,p;for(i=0;i<30;i++){m=(lo+hi)/2;p=bzp(MEM,m);if(p[0]<x)lo=m;else hi=m}return bzp(MEM,(lo+hi)/2)[1]}
var RX=[256,318,380,442,504];
var VES=[[300,124],[356,104],[414,108],[466,132],[322,178],[388,160],[446,186],[268,200],[494,206]];
var OUT=[[226,"α-SECRETASE ↑","LESS β-AMYLOID"],[380,"GSK3β ↓","LESS TAU"],[534,"TREM2","MICROGLIA"]];
function f1(v){return v.toFixed(1)}
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'80 14 600 548':'64 14 700 548')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="gAct"><stop offset="0" stop-color="#4fc9c4" stop-opacity=".55"/><stop offset="1" stop-color="#4fc9c4" stop-opacity="0"/></radialGradient></defs>';
  /* presynaptic terminal: the axon arriving from above and the bouton */
  g+='<g id="scPre"><path class="wl sD" d="M362 18C362 50 340 66 300 74C220 90 196 150 206 196C214 236 256 250 380 250C504 250 546 236 554 196C564 150 540 90 460 74C420 66 398 50 398 18"/>';
  g+='<path class="wo sD" d="M226 232C280 244 480 244 534 232"/>';
  g+='<g id="scVes">';VES.forEach(function(v){g+='<circle class="ves" cx="'+v[0]+'" cy="'+v[1]+'" r="15"/><circle class="ach" cx="'+(v[0]-5)+'" cy="'+(v[1]-3)+'" r="2.4"/><circle class="ach" cx="'+(v[0]+5)+'" cy="'+(v[1]-2)+'" r="2.4"/><circle class="ach" cx="'+v[0]+'" cy="'+(v[1]+5)+'" r="2.4"/>'});g+='</g></g>';
  /* post-synaptic membrane (a double line) and the spine walls */
  var m2=MEM.map(function(v,k){return k%2?v+7:v});
  g+='<g id="scPost"><path class="wl sD" d="M'+MEM[0]+' '+MEM[1]+'C'+MEM[2]+' '+MEM[3]+' '+MEM[4]+' '+MEM[5]+' '+MEM[6]+' '+MEM[7]+'"/>';
  g+='<path class="wo sD" d="M'+m2[0]+' '+m2[1]+'C'+m2[2]+' '+m2[3]+' '+m2[4]+' '+m2[5]+' '+m2[6]+' '+m2[7]+'"/>';
  g+='<path class="wl sD" d="M96 338C110 400 116 460 112 528"/><path class="wl sD" d="M664 338C650 400 644 460 648 528"/></g>';
  /* M1 receptors: a seven-helix bundle drawn as a compact block of helices spanning the membrane */
  g+='<g id="scRc">';RX.forEach(function(x){var y=memAt(x)+3.5;
    g+='<g class="rc"><circle class="rglow" cx="'+x+'" cy="'+f1(y)+'" r="30" fill="url(#gAct)"/>'+
      '<path class="rb" d="M'+(x-13)+' '+f1(y-17)+'h26v34h-26z"/><path class="rh" d="M'+(x-6.5)+' '+f1(y-17)+'v34M'+x+' '+f1(y-17)+'v34M'+(x+6.5)+' '+f1(y-17)+'v34"/>'+
      '<path class="rp" d="M'+(x-5)+' '+f1(y-17)+'l5 5 5-5"/></g>'});g+='</g>';
  /* acetylcholine crossing the cleft, two per receptor */
  g+='<g id="scAch">';RX.forEach(function(){g+='<circle class="ac" r="3.2" cx="380" cy="250"/><circle class="ac" r="3.2" cx="380" cy="250"/>'});g+='</g>';
  /* NSC001: the logo hexagon */
  g+='<g id="scNsc">';RX.forEach(function(){g+='<path class="nsc" d="M-7 0L-3.5 -6.1L3.5 -6.1L7 0L3.5 6.1L-3.5 6.1Z" transform="translate(720 270)"/>'});g+='</g>';
  /* the three effects below the membrane */
  g+='<g id="scOut">';OUT.forEach(function(q,k){var x0=RX[k*2],y0=memAt(x0)+22;
    g+='<g class="out"><path class="ol" d="M'+x0+' '+f1(y0)+'C'+x0+' '+f1(y0+40)+' '+q[0]+' '+f1(y0+40)+' '+q[0]+' 432"/><circle class="od" cx="'+q[0]+'" cy="438" r="4"/>'+
      (mob?'':'<text class="t o" x="'+q[0]+'" y="468" text-anchor="middle">'+q[1]+'</text><text class="t q" x="'+q[0]+'" y="486" text-anchor="middle">'+q[2]+'</text>')+'</g>'});g+='</g>';
  if(!mob){
    g+='<g id="lPre"><path class="ld" d="M200 150L170 150"/><text class="t" x="162" y="146" text-anchor="end">CHOLINERGIC</text><text class="t q" x="162" y="162" text-anchor="end">TERMINAL</text></g>';
    g+='<g id="lRc"><path class="ld" d="M522 '+f1(memAt(504)-16)+'L586 274"/><text class="t" x="594" y="266">M1</text><text class="t q" x="594" y="282">RECEPTORS</text></g>';
    g+='<g id="lNsc"><text class="t" x="640" y="236">NSC001</text></g>';
  }else{g+='<g id="lPre"></g><g id="lRc"></g><g id="lNsc"></g>'}
  var ly=SCH-6,lx=mob?96:80;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'ACETYLCHOLINE RUNS SHORT':'ACETYLCHOLINE FADES; M1 RECEPTORS REMAIN')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'NSC001 ACTIVATES M1':'NSC001 BINDS AND ACTIVATES M1')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THE DISEASE IS MODIFIED':'AMYLOID, TAU AND MICROGLIA ARE MODULATED')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),pre:$("#scPre",svg),ves:$("#scVes",svg),rc:$$("#scRc .rc",svg),gl:$$("#scRc .rglow",svg),ac:$$("#scAch .ac",svg),nsc:$$("#scNsc .nsc",svg),
    out:$$("#scOut .out",svg),ol:dl("#scOut .ol"),lPre:$("#lPre",svg),lRc:$("#lRc",svg),lNsc:$("#lNsc",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var RT=RX.map(function(x){return [x,memAt(x)+3.5-24]});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.32),s2=seg(p,.36,.64),s3=seg(p,.68,.94);
    /* 0-1: acetylcholine crosses the cleft in a slow loop, then fades out with the terminal */
    op(E.pre,1-.62*sm(s1));op(E.ves,1-.8*sm(s1));
    E.ac.forEach(function(el,i){var r=RT[i>>1],ph=((p*6+(i%2)*.5+(i>>1)*.17)%1),x0=300+(i>>1)*40,y0=254;
      var x=x0+(r[0]-x0)*ph,y=y0+(r[1]-y0)*ph;el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));
      op(el,b*(1-sm(seg(p,.06,.26)))*Math.min(1,Math.sin(ph*Math.PI)*3))});
    /* 2: NSC001 seats on each receptor, which lights */
    E.nsc.forEach(function(el,i){var r=RT[i],f=sm((s2-i*.08)/.6),x=720+(r[0]-720)*f,y=262+(r[1]+6-262)*f-Math.sin(f*Math.PI)*30;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");op(el,b*Math.min(1,f*4))});
    E.gl.forEach(function(el,i){op(el,b*sm((s2-i*.08-.4)/.5)*(1-.4*s3))});
    E.rc.forEach(function(el){el.classList.toggle("on",s2>.55)});
    /* 3: signals run down to the three effects */
    E.ol.forEach(function(a,i){a[0].style.strokeDashoffset=(a[1]*(1-sm((s3-i*.12)/.6))).toFixed(1)});
    E.out.forEach(function(el,i){op(el,b*Math.min(1,sm((s3-i*.12)/.6)*1.6))});
    op(E.lPre,b*(1-seg(p,.2,.3)));
    op(E.lRc,b*seg(p,.12,.2)*(1-seg(p,.36,.42)));
    op(E.lNsc,b*seg(p,.38,.44)*(1-seg(p,.5,.56)));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
