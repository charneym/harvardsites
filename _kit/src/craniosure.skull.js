/* CranioSure hero: an infant skull in side view, drawn as an engraved anatomical plate. Separate cranial plates with
   the radiating spicules of their ossification centres, open sutures and fontanelles, the small infant face below.
   SKULL.paint(g) draws it into a 1000-unit box (x 150..930, y 95..840). SKULL.outline is the vault contour. */
var SKULL=(function(){
  var NAVY="11,20,81",CY="39,235,255",BL="32,130,255";
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function cr(P,n){var o=[];for(var i=0;i<P.length-1;i++){var p0=P[Math.max(0,i-1)],p1=P[i],p2=P[i+1],p3=P[Math.min(P.length-1,i+2)];
      for(var k=0;k<n;k++){var t=k/n,t2=t*t,t3=t2*t;
        o.push([.5*((2*p1[0])+(-p0[0]+p2[0])*t+(2*p0[0]-5*p1[0]+4*p2[0]-p3[0])*t2+(-p0[0]+3*p1[0]-3*p2[0]+p3[0])*t3),
                .5*((2*p1[1])+(-p0[1]+p2[1])*t+(2*p0[1]-5*p1[1]+4*p2[1]-p3[1])*t2+(-p0[1]+3*p1[1]-3*p2[1]+p3[1])*t3)])}}
    o.push(P[P.length-1]);return o}
  function bez(o,a,b,c,d,n){for(var i=1;i<=n;i++){var t=i/n,u=1-t;o.push([u*u*u*a[0]+3*u*u*t*b[0]+3*u*t*t*c[0]+t*t*t*d[0],u*u*u*a[1]+3*u*u*t*b[1]+3*u*t*t*c[1]+t*t*t*d[1]])}}
  /* the vault, nasion first, clockwise over the top */
  var V=[[205,520]];
  bez(V,[205,520],[188,478],[166,420],[174,350],24);
  bez(V,[174,350],[182,262],[240,182],[334,146],30);
  bez(V,[334,146],[434,104],[586,98],[694,138],40);
  bez(V,[694,138],[804,178],[884,262],[908,372],34);
  bez(V,[908,372],[930,466],[904,566],[852,624],30);
  bez(V,[852,624],[812,668],[762,690],[706,690],18);
  var OUT=V.slice();             /* the visible contour the hero traces */
  bez(V,[706,690],[640,690],[470,664],[372,640],20);
  bez(V,[372,640],[300,622],[226,580],[205,520],16);
  /* sutures (dense, slightly serrated) */
  function serr(P,amp,seed){var r=rng(seed);return P.map(function(p,i){if(i===0||i===P.length-1)return p;var a=amp*((i%2?1:-1)*.6+(r()-.5)*.8);return [p[0]+a,p[1]+a*.4]})}
  var COR=serr(cr([[374,134],[364,250],[352,380],[346,532]],14),1.6,3);
  var LAM=serr(cr([[798,188],[842,300],[832,432],[762,606]],14),2.2,5);
  var SQU=serr(cr([[346,532],[392,470],[484,446],[574,450],[664,472],[732,532],[762,606]],10),1.2,7);
  var SPH=cr([[346,532],[358,586],[374,630]],8);
  function poly(g,P){g.beginPath();g.moveTo(P[0][0],P[0][1]);for(var i=1;i<P.length;i++)g.lineTo(P[i][0],P[i][1]);g.closePath()}
  function path(g,P){g.beginPath();g.moveTo(P[0][0],P[0][1]);for(var i=1;i<P.length;i++)g.lineTo(P[i][0],P[i][1])}
  function rev(P){return P.slice().reverse()}
  var PL={
    frontal:{P:[[0,0],[380,0]].concat(COR).concat([[372,640],[0,640]]),c:[236,318],R:240},
    parietal:{P:[[382,-60],[800,-60]].concat(LAM).concat(rev(SQU)).concat(rev(COR)),c:[566,296],R:330},
    occipital:{P:[[800,-60],[1000,-60],[1000,900],[770,900]].concat(rev(LAM)),c:[872,470],R:220},
    temporal:{P:SQU.concat([[770,900],[374,900]]).concat(rev(SPH)),c:[566,566],R:170},
    sphenoid:{P:SPH.concat([[300,660],[290,520]]),c:[330,590],R:70}
  };
  function plate(g,k,r){var p=PL[k];g.save();poly(g,V);g.clip();poly(g,p.P);g.clip();
    var gr=g.createRadialGradient(330,250,10,470,380,620);gr.addColorStop(0,"#f2f6fd");gr.addColorStop(.35,"#d5dff1");gr.addColorStop(.62,"#94a6d0");gr.addColorStop(.86,"#41508f");gr.addColorStop(1,"#1d2766");
    g.fillStyle=gr;g.fillRect(0,0,1000,1000);
    /* radiating spicules from the ossification centre: faint near the centre, stronger toward the sutures */
    var n=k==="parietal"?260:k==="frontal"?200:k==="occipital"?150:k==="temporal"?120:50;
    g.lineCap="round";
    for(var i=0;i<n;i++){var a=i/n*6.283+(r()-.5)*.03,L=p.R*(.75+.5*r()),seg=14,x=p.c[0],y=p.c[1],ph=r()*6;
      for(var s=1;s<=seg;s++){var u=s/seg,aa=a+.05*Math.sin(u*5+ph),nx=p.c[0]+Math.cos(aa)*L*u,ny=p.c[1]+Math.sin(aa)*L*u;
        g.strokeStyle="rgba("+NAVY+","+(.03+.2*u*u).toFixed(3)+")";g.lineWidth=.7+.5*u;g.beginPath();g.moveTo(x,y);g.lineTo(nx,ny);g.stroke();x=nx;y=ny}}
    /* the ossification centre itself: a soft boss */
    var bo=g.createRadialGradient(p.c[0]-p.R*.08,p.c[1]-p.R*.1,0,p.c[0],p.c[1],p.R*.42);bo.addColorStop(0,"rgba(255,255,255,.35)");bo.addColorStop(1,"rgba(255,255,255,0)");g.fillStyle=bo;g.fillRect(0,0,1000,1000);
    g.restore()}
  function suture(g,P,w){g.save();poly(g,V);g.clip();g.lineJoin="round";g.lineCap="round";
    path(g,P);g.strokeStyle="rgba(8,14,58,.92)";g.lineWidth=w;g.stroke();
    path(g,P);g.strokeStyle="rgba("+CY+",.32)";g.lineWidth=.9;g.stroke();g.restore()}
  function font(g,P){g.save();poly(g,V);g.clip();poly(g,P);
    var c0=P.reduce(function(a,p){return [a[0]+p[0]/P.length,a[1]+p[1]/P.length]},[0,0]);
    var f=g.createRadialGradient(c0[0],c0[1],0,c0[0],c0[1],30);f.addColorStop(0,"rgba(58,78,150,.9)");f.addColorStop(1,"rgba(22,34,100,.9)");g.fillStyle=f;g.fill();
    g.clip();g.strokeStyle="rgba(200,215,245,.14)";g.lineWidth=.7;for(var i=-40;i<40;i+=4){g.beginPath();g.moveTo(c0[0]+i,c0[1]-40);g.lineTo(c0[0]+i+14,c0[1]+40);g.stroke()}
    g.restore();g.save();poly(g,V);g.clip();poly(g,P);g.strokeStyle="rgba(8,14,58,.8)";g.lineWidth=1.6;g.lineJoin="round";g.stroke();g.restore()}
  function paint(g){
    var r=rng(11);
    /* cast shadow under the skull */
    g.save();g.translate(560,836);g.scale(1,.12);var sh=g.createRadialGradient(0,0,10,0,0,380);sh.addColorStop(0,"rgba(3,6,30,.6)");sh.addColorStop(1,"rgba(3,6,30,0)");g.fillStyle=sh;g.fillRect(-380,-380,760,760);g.restore();
    ["occipital","temporal","sphenoid","parietal","frontal"].forEach(function(k){plate(g,k,r)});
    /* form shading: the far side of the vault turns away from the light */
    g.save();poly(g,V);g.clip();
    var sd=g.createLinearGradient(330,180,860,700);sd.addColorStop(0,"rgba("+NAVY+",0)");sd.addColorStop(.5,"rgba("+NAVY+",.1)");sd.addColorStop(1,"rgba("+NAVY+",.7)");g.fillStyle=sd;g.fillRect(0,0,1000,1000);
    var rf=g.createRadialGradient(900,560,10,880,560,200);rf.addColorStop(0,"rgba("+CY+",.16)");rf.addColorStop(1,"rgba("+CY+",0)");g.fillStyle=rf;g.fillRect(600,300,400,400);
    /* engraved hatching along the lower curve of the vault */
    g.strokeStyle="rgba("+NAVY+",.16)";g.lineWidth=.8;
    for(var h=0;h<46;h++){var y=430+h*6.2;g.beginPath();g.moveTo(560,y);g.bezierCurveTo(700,y-30-h*.6,860,y-90,940,y-170);g.stroke()}
    g.restore();
    suture(g,COR,5.5);suture(g,LAM,6);suture(g,SQU,4.2);suture(g,SPH,3.2);
    /* fontanelles: anterior (top), posterior, sphenoid (pterion) and mastoid (asterion) */
    font(g,cr([[338,146],[358,130],[376,124],[396,126],[414,134],[396,150],[380,166],[368,172],[352,160],[338,146]],5));
    font(g,cr([[784,178],[800,180],[814,190],[806,200],[798,206],[790,194],[784,178]],5));
    font(g,cr([[332,526],[346,516],[360,524],[362,542],[348,550],[334,542],[332,526]],5));
    font(g,cr([[746,600],[762,590],[778,600],[778,618],[762,626],[748,616],[746,600]],5));
    /* --- the face: small under the infant vault --- */
    function sm(P){return cr(P,10)}
    /* the mandible: one piece, a low body, an open angle; the coronoid tucks under the arch, the condyle sits before the ear */
    var MD=sm([[206,722],[198,764],[206,796],[234,814],[296,816],[360,806],[420,790],[452,778],[490,742],[520,706],[540,690],[546,672],[564,672],[566,690],[548,700],[528,702],[506,690],[488,662],[474,658],[466,676],[460,704],[448,722],[410,722],[340,720],[270,718],[226,718],[206,722]]);
    g.save();poly(g,MD);var mg=g.createLinearGradient(210,720,470,830);mg.addColorStop(0,"#e9eef9");mg.addColorStop(.6,"#93a5d3");mg.addColorStop(1,"#2c3a7c");g.fillStyle=mg;g.fill();g.clip();
    for(var m=0;m<56;m++){var mx=200+m*5.4;g.strokeStyle="rgba("+NAVY+",.09)";g.lineWidth=.7;g.beginPath();g.moveTo(mx,744);g.quadraticCurveTo(mx+8,790,mx+2,830);g.stroke()}
    var mf=g.createRadialGradient(232,770,0,232,770,8);mf.addColorStop(0,"rgba(8,16,62,.85)");mf.addColorStop(1,"rgba(8,16,62,0)");g.fillStyle=mf;g.fillRect(222,760,20,20);
    g.restore();g.strokeStyle="rgba("+NAVY+",.5)";g.lineWidth=1;poly(g,MD);g.stroke();
    g.strokeStyle="rgba(240,245,255,.5)";g.lineWidth=1.1;g.beginPath();g.moveTo(206,794);g.quadraticCurveTo(240,816,300,814);g.stroke();
    /* maxilla and cheek */
    var MX=sm([[205,520],[192,552],[176,590],[172,604],[186,618],[198,646],[178,668],[176,694],[186,716],[214,728],[262,732],[318,728],[364,712],[404,690],[430,664],[392,642],[326,628],[272,600],[226,572],[205,520]]);
    g.save();poly(g,MX);var fg=g.createRadialGradient(232,600,8,300,660,220);fg.addColorStop(0,"#eef3fb");fg.addColorStop(.55,"#b4c2e2");fg.addColorStop(1,"#4a5a9a");g.fillStyle=fg;g.fill();g.clip();
    for(var q=0;q<70;q++){var a2=-.2+q/70*1.9,L2=190;g.strokeStyle="rgba("+NAVY+","+(.04+.08*(q%3===0)).toFixed(3)+")";g.lineWidth=.7;g.beginPath();g.moveTo(288,640);g.lineTo(288+Math.cos(a2+1.2)*L2,640+Math.sin(a2+1.2)*L2);g.stroke()}
    g.restore();g.strokeStyle="rgba("+NAVY+",.45)";g.lineWidth=1;poly(g,MX);g.stroke();
    /* zygomatic arch: a slender bridge from the cheekbone back to the ear */
    var ZA=sm([[290,628],[352,640],[430,646],[506,648],[566,656],[572,672],[506,666],[432,666],[356,662],[300,654],[290,628]]);
    g.save();poly(g,ZA);var zg=g.createLinearGradient(0,630,0,672);zg.addColorStop(0,"#f1f5fc");zg.addColorStop(.6,"#a8b7dc");zg.addColorStop(1,"#43529a");g.fillStyle=zg;g.fill();g.restore();
    g.strokeStyle="rgba("+NAVY+",.5)";g.lineWidth=1;poly(g,ZA);g.stroke();
    /* the orbit, large in an infant */
    g.save();g.beginPath();g.ellipse(258,562,50,58,-.1,0,6.283);var og=g.createRadialGradient(272,572,4,258,562,60);og.addColorStop(0,"#040928");og.addColorStop(.72,"#0a1448");og.addColorStop(1,"#3a4a8e");g.fillStyle=og;g.fill();
    g.strokeStyle="rgba(244,247,255,.85)";g.lineWidth=2.4;g.beginPath();g.ellipse(258,562,50,58,-.1,-2.1,.9);g.stroke();
    g.strokeStyle="rgba("+NAVY+",.55)";g.lineWidth=1;g.beginPath();g.ellipse(258,562,50,58,-.1,.9,4.2);g.stroke();
    g.strokeStyle="rgba(160,178,220,.35)";g.lineWidth=1;g.beginPath();g.ellipse(262,566,36,44,-.1,-1.6,.4);g.stroke();g.restore();
    /* nasal aperture under the nasal bone */
    g.save();g.beginPath();g.moveTo(184,616);g.bezierCurveTo(204,624,214,650,196,668);g.bezierCurveTo(186,654,180,634,184,616);var ng=g.createLinearGradient(184,616,204,668);ng.addColorStop(0,"#050b33");ng.addColorStop(1,"#18246a");g.fillStyle=ng;g.fill();g.restore();
    g.strokeStyle="rgba(244,247,255,.6)";g.lineWidth=1.2;g.beginPath();g.moveTo(206,524);g.quadraticCurveTo(188,566,174,600);g.stroke();
    /* ear canal, with the mastoid behind it */
    g.save();g.beginPath();g.ellipse(612,674,14,17,.2,0,6.283);var eg=g.createRadialGradient(614,676,1,612,674,17);eg.addColorStop(0,"#03061f");eg.addColorStop(1,"#1a2668");g.fillStyle=eg;g.fill();g.strokeStyle="rgba(244,247,255,.55)";g.lineWidth=1.2;g.stroke();g.restore();
    g.save();g.beginPath();g.moveTo(640,686);g.bezierCurveTo(646,716,676,730,690,712);g.bezierCurveTo(700,700,700,690,700,686);g.closePath();var ms=g.createLinearGradient(0,686,0,730);ms.addColorStop(0,"#8d9fcf");ms.addColorStop(1,"#2a387a");g.fillStyle=ms;g.fill();g.strokeStyle="rgba("+NAVY+",.5)";g.lineWidth=1;g.stroke();g.restore();
    /* rim light: cool cyan along the back of the vault, warm white on the brow */
    g.save();g.lineJoin="round";path(g,OUT);g.strokeStyle="rgba(240,245,255,.55)";g.lineWidth=1.4;g.stroke();
    var rl=g.createLinearGradient(560,120,930,640);rl.addColorStop(0,"rgba("+CY+",0)");rl.addColorStop(.35,"rgba("+CY+",.75)");rl.addColorStop(1,"rgba("+BL+",.4)");
    path(g,OUT);g.strokeStyle=rl;g.lineWidth=2.4;g.stroke();g.restore();
  }
  return {paint:paint,outline:OUT,box:[150,95,930,845]};
})();
