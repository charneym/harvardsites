/* the story scene (BL/DB/BY): ONE engraved map of Texas, kept on screen and inked in four steps.
   Step 1 (Communities) draws the state, its rivers and the Dallas office; step 2 (Companies) marks the portfolio towns
   named in Lone Star's own releases: Midland (Petroplex Acidizing), Fairfield (Green Energy Oilfield Services), Houston
   (Alsay) and Dallas (Continental Electronics); step 3 (Commitment) grows rings at Houston and Fairfield with the
   published growth and jobs; step 4 (Exit) carries routes out from Midland and Houston to the published exit returns.
   The finished map sits as a faint ghost from the first frame, so no frame is ever empty. */
var TX=[[-103.04,36.5],[-100,36.5],[-100,34.56],[-99.5,34.41],[-99.2,34.22],[-98.6,34.15],[-98.1,34.12],[-97.6,33.9],[-97.1,33.73],[-96.6,33.85],[-96,33.84],[-95.5,33.88],[-95,33.86],[-94.48,33.64],[-94.04,33.55],[-94.04,32],[-93.9,31.6],[-93.6,31.2],[-93.55,30.6],[-93.7,30.3],[-93.84,29.7],
 [-94.4,29.52],[-94.8,29.3],[-95.1,29.08],[-95.5,28.8],[-96.2,28.48],[-96.8,28.17],[-97.2,27.8],[-97.38,27.3],[-97.4,26.6],[-97.15,25.95],
 [-97.6,26.02],[-98.2,26.1],[-98.8,26.4],[-99.2,26.9],[-99.5,27.5],[-100.3,28.3],[-100.7,29.1],[-101.4,29.77],[-102.4,29.8],[-102.7,29.6],[-103.1,29.02],[-103.5,29.15],[-104,29.4],[-104.5,29.9],[-104.7,30.4],[-105,30.7],[-105.6,31.1],[-106.2,31.5],[-106.63,31.98],[-106.62,32],[-103.06,32]];
var RIV=[[[-103.9,32],[-103.4,31.4],[-102.6,30.9],[-101.9,30.4],[-101.4,29.77]],
 [[-101.9,32.7],[-100.9,32],[-99.8,31.5],[-98.6,31.1],[-98,30.6],[-97.7,30.25],[-97,29.9],[-96.4,29.3],[-95.9,28.7]],
 [[-101,33.3],[-99.6,33.1],[-98.5,32.6],[-97.7,32],[-97,31.3],[-96.4,30.6],[-96,29.9],[-95.6,29.3],[-95.3,28.92]],
 [[-97.3,32.9],[-96.8,32.75],[-96.3,32.1],[-95.8,31.3],[-95.2,30.6],[-94.8,29.75]]];
var TOWN={dal:[-96.8,32.78],hou:[-95.37,29.76],mid:[-102.08,32],fai:[-96.16,31.72]};
function txmap(o){
  var S=o.s,i,g='',K=Math.cos(31*Math.PI/180);
  function P(p){return [(o.x+(p[0]+99.9)*K*S),(o.y-(p[1]-31.15)*S)]}
  function F(n){return n.toFixed(1)}
  function path(list,close){return "M"+list.map(function(p){var q=P(p);return F(q[0])+" "+F(q[1])}).join("L")+(close?"Z":"")}
  function smooth(list){var q=list.map(P),d="M"+F(q[0][0])+" "+F(q[0][1]);for(var k=1;k<q.length;k++){var m=[(q[k-1][0]+q[k][0])/2,(q[k-1][1]+q[k][1])/2];d+="Q"+F(q[k-1][0])+" "+F(q[k-1][1])+" "+F(m[0])+" "+F(m[1])}return d+"L"+F(q[q.length-1][0])+" "+F(q[q.length-1][1])}
  var T={};for(var k in TOWN)T[k]=P(TOWN[k]);
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+o.W+' '+o.H+'" aria-hidden="true"><defs><clipPath id="txClip"><path d="'+path(TX,true)+'"/></clipPath></defs>';
  /* base: graticule */
  g+='<g id="scBase">';
  for(var lo=-106;lo<=-94;lo+=2){var a=P([lo,36.9]),b=P([lo,25.5]);g+='<path class="grat sD" d="M'+F(a[0])+' '+F(a[1])+'L'+F(b[0])+' '+F(b[1])+'"/>'}
  for(var la=26;la<=36;la+=2){var c1=P([-107,la]),c2=P([-93.2,la]);g+='<path class="grat sD" d="M'+F(c1[0])+' '+F(c1[1])+'L'+F(c2[0])+' '+F(c2[1])+'"/>'}
  g+='</g>';
  var i0=g.length;
  /* step 1: the state, engraved hatching inside, rivers, the Dallas office */
  var bb=[P([-106.7,36.6]),P([-93.4,25.8])],hs='';for(var hy=bb[0][1];hy<bb[1][1];hy+=o.hatch)hs+='M'+F(bb[0][0])+' '+F(hy)+'H'+F(bb[1][0]);
  g+='<g id="scState"><path class="hat" clip-path="url(#txClip)" d="'+hs+'"/><path class="tx" d="'+path(TX,true)+'"/><path class="tx2" d="'+path(TX,true)+'" transform="translate('+o.off+' '+o.off+')"/>';
  RIV.forEach(function(r){g+='<path class="riv" d="'+smooth(r)+'"/>'});
  g+='</g>';
  g+='<g id="scHQ"><circle class="hqr" cx="'+F(T.dal[0])+'" cy="'+F(T.dal[1])+'" r="'+(o.mob?9:13)+'"/>'+starPath(T.dal[0],T.dal[1],o.mob?6:8,"hq")+'</g>';
  /* step 2: portfolio towns */
  g+='<g id="scTowns">';['mid','fai','hou','dal'].forEach(function(k){g+='<g class="tw"><circle class="twr" cx="'+F(T[k][0])+'" cy="'+F(T[k][1])+'" r="'+(o.mob?6:8)+'"/><circle class="twd" cx="'+F(T[k][0])+'" cy="'+F(T[k][1])+'" r="'+(o.mob?2.4:3)+'"/></g>'});g+='</g>';
  /* step 3: growth rings at Houston and Fairfield */
  g+='<g id="scGrow">';['hou','fai'].forEach(function(k){for(var r=1;r<=3;r++)g+='<circle class="ring" cx="'+F(T[k][0])+'" cy="'+F(T[k][1])+'" r="'+((o.mob?7:10)+r*(o.mob?6:9))+'"/>'});g+='</g>';
  /* step 4: routes out from Midland and Houston */
  g+='<g id="scExit">';o.exits.forEach(function(e){var p=T[e.k];g+='<path class="route" d="M'+F(p[0])+' '+F(p[1])+'Q'+e.q[0]+' '+e.q[1]+' '+e.to[0]+' '+e.to[1]+'"/><path class="ah" d="M'+(e.to[0]-6*e.dx)+' '+(e.to[1]-6)+'L'+e.to[0]+' '+e.to[1]+'L'+(e.to[0]-6*e.dx)+' '+(e.to[1]+6)+'"/>'});g+='</g>';
  /* the finished map as a faint ghost from the first frame (DB) */
  g=g.slice(0,i0)+'<g class="ghost">'+g.slice(i0).replace(/ id="[^"]*"/g,'')+'</g>'+g.slice(i0);
  function lab(id,items){var s='<g id="'+id+'" class="lb">';items.forEach(function(t){var p=t.at?T[t.at]:null;if(p)s+='<path class="lead" d="M'+t.lx+' '+t.ly+'L'+F(p[0])+' '+F(p[1])+'"/>';
    s+='<text x="'+t.x+'" y="'+t.y+'" text-anchor="'+(t.a||"start")+'" class="'+(t.c||"w")+'">'+t.t+'</text>';if(t.t2)s+='<text x="'+t.x+'" y="'+(t.y+(o.mob?17:18))+'" text-anchor="'+(t.a||"start")+'" class="s">'+t.t2+'</text>'});return s+'</g>'}
  g+=lab("scL1",o.L1)+lab("scL2",o.L2)+lab("scL3",o.L3)+lab("scL4",o.L4);
  return g+'</svg>';
}
function starPath(x,y,r,cl){var d="";for(var i=0;i<10;i++){var a=-Math.PI/2+i*Math.PI/5,rr=i%2?r*.42:r;d+=(i?"L":"M")+(x+Math.cos(a)*rr).toFixed(1)+" "+(y+Math.sin(a)*rr).toFixed(1)}return '<path class="'+cl+'" d="'+d+'Z"/>'}
function scene(){
  if(MOBILE())return txmap({mob:1,W:400,H:440,s:28.5,x:200,y:236,hatch:4.2,off:2.5,
    exits:[{k:"mid",q:[60,250],to:[22,282],dx:-1},{k:"hou",q:[330,372],to:[372,372],dx:1}],
    L1:[{x:388,y:30,a:"end",t:"DALLAS",t2:"LONE STAR’S OFFICE",c:"a",at:"dal",lx:330,ly:40}],
    L2:[{x:12,y:30,t:"MIDLAND",t2:"PETROPLEX",c:"w",at:"mid",lx:60,ly:40},{x:388,y:30,a:"end",t:"DALLAS",t2:"CONTINENTAL",c:"w",at:"dal",lx:340,ly:40},
        {x:388,y:408,a:"end",t:"HOUSTON · ALSAY",c:"w",at:"hou",lx:330,ly:396},{x:12,y:408,t:"FAIRFIELD · GREEN ENERGY",c:"w",at:"fai",lx:150,ly:396}],
    L3:[{x:388,y:408,a:"end",t:"ALSAY · 25% CAGR",c:"a",at:"hou",lx:330,ly:396},{x:388,y:30,a:"end",t:"FAIRFIELD",t2:"150 LOCAL JOBS",c:"a",at:"fai",lx:330,ly:40}],
    L4:[{x:12,y:310,t:"6.24x",t2:"PETROPLEX 2012",c:"a"},{x:388,y:404,a:"end",t:"2.1x · ALSAY 2025",c:"a"}]});
  return txmap({W:840,H:570,s:47,x:416,y:286,hatch:5,off:3.5,
    exits:[{k:"mid",q:[130,300],to:[92,352],dx:-1},{k:"hou",q:[650,452],to:[712,452],dx:1}],
    L1:[{x:826,y:96,a:"end",t:"DALLAS",t2:"LONE STAR’S OFFICE",c:"a",at:"dal",lx:710,ly:104}],
    L2:[{x:20,y:200,t:"MIDLAND",t2:"PETROPLEX ACIDIZING",c:"w",at:"mid",lx:150,ly:208},{x:826,y:96,a:"end",t:"DALLAS",t2:"CONTINENTAL ELECTRONICS",c:"w",at:"dal",lx:690,ly:104},
        {x:826,y:236,a:"end",t:"FAIRFIELD",t2:"GREEN ENERGY",c:"w",at:"fai",lx:690,ly:244},{x:826,y:404,a:"end",t:"HOUSTON",t2:"ALSAY",c:"w",at:"hou",lx:720,ly:412}],
    L3:[{x:826,y:236,a:"end",t:"150 LOCAL JOBS",t2:"FAIRFIELD",c:"a",at:"fai",lx:690,ly:244},{x:826,y:404,a:"end",t:"25% REVENUE CAGR",t2:"ALSAY, FIVE YEARS",c:"a",at:"hou",lx:720,ly:412}],
    L4:[{x:20,y:380,t:"6.24x CASH ON CASH",t2:"PETROPLEX, 2012",c:"a"},{x:826,y:480,a:"end",t:"2.1x ON INVESTED CAPITAL",t2:"ALSAY, 2025",c:"a"}]});
}
function storyDraw(svg){
  var E={base:$$("#scBase .sD",svg),tx:$$("#scState .tx, #scState .tx2, #scState .riv",svg),hat:$("#scState .hat",svg),hq:$("#scHQ",svg),
    tw:$$("#scTowns .tw",svg),ring:$$("#scGrow .ring",svg),route:$$("#scExit .route, #scExit .ah",svg),L:[$("#scL1",svg),$("#scL2",svg),$("#scL3",svg),$("#scL4",svg)]};
  function len(a){return a.map(function(p){try{return Math.ceil(p.getTotalLength())+2}catch(e){return 400}})}
  var BL=len(E.base),TL=len(E.tx),RL=len(E.route),lastB=-1;
  function draw(list,L,v,stag){var n=list.length;list.forEach(function(el,k){var a=stag?k/n*.45:0,x=Math.max(0,Math.min(1,(v-a)/(1-a)));el.style.strokeDasharray=L[k];el.style.strokeDashoffset=(L[k]*(1-x)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,BL,b,false)}
    var s1=seg(p,0,.16),s2=seg(p,.25,.46),s3=seg(p,.5,.66),s4=seg(p,.74,.95);
    draw(E.tx,TL,s1,true);E.hat.style.opacity=(b*seg(p,.06,.2)).toFixed(3);E.hq.style.opacity=(b*seg(p,.1,.18)).toFixed(3);
    E.tw.forEach(function(el,k){el.style.opacity=(b*Math.max(0,Math.min(1,s2*4-k))).toFixed(3)});
    E.ring.forEach(function(el,k){var r=k%3;el.style.opacity=(b*Math.max(0,Math.min(1,s3*3-r))*(1-r*.22)).toFixed(3)});
    draw(E.route,RL,s4,true);
    E.L[0].style.opacity=(b*s1*(1-seg(p,.2,.25))).toFixed(3);E.L[1].style.opacity=(b*s2*(1-seg(p,.47,.52))).toFixed(3);
    E.L[2].style.opacity=(b*s3*(1-seg(p,.7,.75))).toFixed(3);E.L[3].style.opacity=(b*s4).toFixed(3);
  };
}
