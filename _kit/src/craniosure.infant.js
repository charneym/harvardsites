/* CranioSure hero: a sleeping infant in soft profile, swaddled in a blanket. Gentle painted skin, a closed eye, a small
   ear, fine hair; a faint suture overlay inside the head outline. SKULL.paint(g) draws it into a 1000-unit box
   (x 150..930, y 95..845); SKULL.outline is the contour of the head that the hero traces (forehead over the crown to the nape). */
var SKULL=(function(){
  var CY="39,235,255";
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function cr(P,n,closed){var o=[],L=P.length,M=closed?L:L-1;for(var i=0;i<M;i++){
      var p0=P[closed?(i-1+L)%L:Math.max(0,i-1)],p1=P[i],p2=P[(i+1)%L],p3=P[closed?(i+2)%L:Math.min(L-1,i+2)];
      for(var k=0;k<n;k++){var t=k/n,t2=t*t,t3=t2*t;
        o.push([.5*((2*p1[0])+(-p0[0]+p2[0])*t+(2*p0[0]-5*p1[0]+4*p2[0]-p3[0])*t2+(-p0[0]+3*p1[0]-3*p2[0]+p3[0])*t3),
                .5*((2*p1[1])+(-p0[1]+p2[1])*t+(2*p0[1]-5*p1[1]+4*p2[1]-p3[1])*t2+(-p0[1]+3*p1[1]-3*p2[1]+p3[1])*t3)])}}
    if(!closed)o.push(P[L-1]);return o}
  function poly(g,P){g.beginPath();g.moveTo(P[0][0],P[0][1]);for(var i=1;i<P.length;i++)g.lineTo(P[i][0],P[i][1]);g.closePath()}
  function path(g,P){g.beginPath();g.moveTo(P[0][0],P[0][1]);for(var i=1;i<P.length;i++)g.lineTo(P[i][0],P[i][1])}
  /* the head, face to the left: crown and nape first, then the profile from brow to chin, under the jaw into the swaddle */
  var TOP=[[240,424],[228,356],[240,286],[274,222],[330,172],[408,140],[498,126],[588,132],[668,156],[738,200],[788,262],[814,336],[816,414],[800,488],[768,552],[728,600]];
  var FACE=[[700,650],[560,690],[420,690],[320,676],[276,660],[256,640],[246,626],[252,610],[240,598],[246,584],[234,570],[242,556],[236,546],[220,536],[214,520],[228,504],[244,492],[246,476],[236,452],[240,424]];
  var HEAD=cr(TOP.concat(FACE),8,true);
  var OUT=cr(TOP,10,false);
  function paint(g){
    var r=rng(7);
    /* soft shadow pooled on the blanket under the head */
    g.save();g.translate(540,690);g.scale(1,.3);var sh=g.createRadialGradient(0,0,10,0,0,360);sh.addColorStop(0,"rgba(3,6,30,.55)");sh.addColorStop(1,"rgba(3,6,30,0)");g.fillStyle=sh;g.fillRect(-360,-360,720,720);g.restore();
    /* --- the head --- */
    g.save();poly(g,HEAD);
    var sk=g.createRadialGradient(380,300,20,470,420,470);sk.addColorStop(0,"#f7e9df");sk.addColorStop(.38,"#ecd3c3");sk.addColorStop(.7,"#cfa996");sk.addColorStop(1,"#8f6f73");
    g.fillStyle=sk;g.fill();g.clip();
    /* cool grade from the navy room: the far side turns blue */
    var cg=g.createLinearGradient(330,230,820,640);cg.addColorStop(0,"rgba(11,20,81,0)");cg.addColorStop(.55,"rgba(11,20,81,.12)");cg.addColorStop(1,"rgba(11,20,81,.55)");g.fillStyle=cg;g.fillRect(0,0,1000,1000);
    /* round cheek, warm and soft */
    var ck=g.createRadialGradient(330,566,0,330,566,90);ck.addColorStop(0,"rgba(232,150,140,.42)");ck.addColorStop(1,"rgba(232,150,140,0)");g.fillStyle=ck;g.fillRect(200,460,260,220);
    var ch=g.createRadialGradient(318,540,0,318,540,46);ch.addColorStop(0,"rgba(255,248,242,.5)");ch.addColorStop(1,"rgba(255,248,242,0)");g.fillStyle=ch;g.fillRect(260,480,120,120);
    /* forehead highlight */
    var fh=g.createRadialGradient(330,290,0,330,290,140);fh.addColorStop(0,"rgba(255,250,246,.55)");fh.addColorStop(1,"rgba(255,250,246,0)");g.fillStyle=fh;g.fillRect(180,140,320,320);
    /* jaw and neck shadow */
    var jw=g.createLinearGradient(0,600,0,690);jw.addColorStop(0,"rgba(90,60,70,0)");jw.addColorStop(1,"rgba(60,40,60,.4)");g.fillStyle=jw;g.fillRect(250,600,500,100);
    /* faint suture overlay: the plates under the scalp */
    g.setLineDash([5,7]);g.lineCap="round";g.strokeStyle="rgba("+CY+",.28)";g.lineWidth=1.3;
    path(g,cr([[392,142],[380,240],[372,350],[380,430]],8,false));g.stroke();
    path(g,cr([[742,204],[770,300],[756,410],[708,500]],8,false));g.stroke();
    path(g,cr([[380,430],[440,400],[540,392],[630,410],[708,500]],8,false));g.stroke();
    g.setLineDash([]);
    g.fillStyle="rgba("+CY+",.08)";g.strokeStyle="rgba("+CY+",.3)";g.lineWidth=1;g.beginPath();g.moveTo(372,136);g.lineTo(398,126);g.lineTo(420,140);g.lineTo(396,156);g.closePath();g.fill();g.stroke();
    /* fine hair over the crown and back */
    g.lineCap="round";
    for(var i=0;i<340;i++){var a=-2.75+r()*2.6,rr=.82+r()*.17,cx=520,cy=430,x=cx+Math.cos(a)*300*rr,y=cy+Math.sin(a)*300*rr*.98,L=8+r()*16,d=a+1.75+(r()-.5)*.5;
      if(x<300&&y>280)continue;
      g.strokeStyle="rgba(120,86,70,"+(.05+r()*.1).toFixed(3)+")";g.lineWidth=.7+r()*.6;g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x+Math.cos(d)*L*.5+3,y+Math.sin(d)*L*.5,x+Math.cos(d)*L,y+Math.sin(d)*L);g.stroke()}
    g.restore();
    /* soft edge of the skin */
    g.save();poly(g,HEAD);g.strokeStyle="rgba(120,80,84,.35)";g.lineWidth=1.2;g.stroke();g.restore();
    /* --- face details --- */
    /* eyebrow, barely there */
    g.strokeStyle="rgba(120,86,80,.28)";g.lineWidth=3;g.lineCap="round";g.beginPath();g.moveTo(272,440);g.quadraticCurveTo(300,428,334,436);g.stroke();
    /* the closed eye: a soft lid crease, the lash line curving down, short lashes */
    g.strokeStyle="rgba(130,90,90,.35)";g.lineWidth=1.6;g.beginPath();g.moveTo(276,468);g.quadraticCurveTo(302,456,330,466);g.stroke();
    g.strokeStyle="rgba(70,44,48,.85)";g.lineWidth=2.4;g.beginPath();g.moveTo(272,478);g.quadraticCurveTo(300,494,334,480);g.stroke();
    g.lineWidth=1.3;for(var l=0;l<8;l++){var u=.12+l*.11,lx=272+62*u,ly=478+16*4*u*(1-u)*.9;g.beginPath();g.moveTo(lx,ly);g.lineTo(lx-5,ly+8);g.stroke()}
    /* nostril and the line of the mouth */
    g.fillStyle="rgba(120,70,72,.45)";g.beginPath();g.ellipse(232,532,7,4,.4,0,6.283);g.fill();
    g.strokeStyle="rgba(150,80,84,.55)";g.lineWidth=2;g.beginPath();g.moveTo(244,584);g.quadraticCurveTo(256,587,268,583);g.stroke();
    var lp=g.createRadialGradient(248,576,0,248,580,16);lp.addColorStop(0,"rgba(214,120,120,.5)");lp.addColorStop(1,"rgba(214,120,120,0)");g.fillStyle=lp;g.fillRect(228,560,40,40);
    /* the ear: helix, antihelix and lobe, softly shaded */
    g.save();g.translate(520,492);g.rotate(.12);
    g.beginPath();g.moveTo(-6,-52);g.bezierCurveTo(30,-60,46,-22,40,8);g.bezierCurveTo(36,36,20,56,0,60);g.bezierCurveTo(-14,62,-22,50,-18,40);g.bezierCurveTo(-10,24,-16,-10,-24,-30);g.bezierCurveTo(-26,-44,-18,-50,-6,-52);g.closePath();
    var eg=g.createRadialGradient(-6,-4,4,6,0,64);eg.addColorStop(0,"#e7c6b6");eg.addColorStop(.7,"#d4a896");eg.addColorStop(1,"#a77d78");g.fillStyle=eg;g.fill();
    g.strokeStyle="rgba(120,74,76,.55)";g.lineWidth=1.6;g.stroke();
    g.strokeStyle="rgba(120,74,76,.5)";g.lineWidth=1.8;g.beginPath();g.moveTo(-8,-38);g.bezierCurveTo(18,-42,28,-12,22,10);g.bezierCurveTo(18,26,8,36,-2,40);g.stroke();
    g.fillStyle="rgba(110,64,70,.4)";g.beginPath();g.ellipse(-2,8,9,12,0,0,6.283);g.fill();
    g.strokeStyle="rgba(255,240,232,.5)";g.lineWidth=1.4;g.beginPath();g.moveTo(-2,-50);g.bezierCurveTo(24,-54,38,-26,36,0);g.stroke();
    g.restore();
    /* --- the swaddle: a soft blanket in the logo blues, folded around the neck --- */
    var B1=cr([[150,900],[170,760],[230,700],[300,676],[400,694],[520,700],[640,676],[740,632],[830,640],[910,700],[950,800],[960,920]],10,false);
    g.save();poly(g,B1);var bg=g.createLinearGradient(200,660,760,900);bg.addColorStop(0,"#3a6fd8");bg.addColorStop(.45,"#2552b8");bg.addColorStop(1,"#14246e");g.fillStyle=bg;g.fill();g.clip();
    /* knit texture and long soft folds */
    for(var k=0;k<90;k++){var yy=680+k*3.2;g.strokeStyle="rgba(255,255,255,"+(.025+.02*(k%2)).toFixed(3)+")";g.lineWidth=1;g.beginPath();g.moveTo(140,yy+60);g.bezierCurveTo(380,yy-30,640,yy+40,970,yy-50);g.stroke()}
    [[260,760,520,700,880,760,.22],[220,840,520,770,900,830,.18]].forEach(function(f){var fg=g.createLinearGradient(0,f[1]-30,0,f[1]+30);fg.addColorStop(0,"rgba(8,14,60,0)");fg.addColorStop(.5,"rgba(8,14,60,"+f[6]+")");fg.addColorStop(1,"rgba(8,14,60,0)");
      g.strokeStyle=fg;g.lineWidth=40;g.beginPath();g.moveTo(f[0],f[1]);g.quadraticCurveTo(f[2],f[3],f[4],f[5]);g.stroke()});
    g.restore();
    /* the top fold of the blanket catches the light */
    g.save();path(g,cr([[230,700],[300,676],[400,694],[520,700],[640,676],[740,632],[830,640]],10,false));g.strokeStyle="rgba(170,205,255,.75)";g.lineWidth=2.4;g.lineCap="round";g.stroke();g.restore();
    /* a second fold lapping over the shoulder */
    var B2=cr([[560,700],[660,682],[760,660],[850,684],[900,740],[880,800],[790,780],[680,750],[600,730]],10,true);
    g.save();poly(g,B2);var b2=g.createLinearGradient(600,660,880,800);b2.addColorStop(0,"#3466d0");b2.addColorStop(1,"#1a3088");g.fillStyle=b2;g.fill();
    g.strokeStyle="rgba(170,205,255,.3)";g.lineWidth=1.2;g.stroke();g.restore();
    /* the blanket dissolves into the dark below */
    g.save();g.globalCompositeOperation="destination-out";var fo=g.createLinearGradient(0,770,0,868);fo.addColorStop(0,"rgba(0,0,0,0)");fo.addColorStop(1,"rgba(0,0,0,1)");g.fillStyle=fo;g.fillRect(0,770,1000,300);
    var fs=g.createLinearGradient(150,0,250,0);fs.addColorStop(0,"rgba(0,0,0,1)");fs.addColorStop(1,"rgba(0,0,0,0)");g.fillStyle=fs;g.fillRect(100,640,150,400);
    var fr=g.createLinearGradient(860,0,950,0);fr.addColorStop(0,"rgba(0,0,0,0)");fr.addColorStop(1,"rgba(0,0,0,1)");g.fillStyle=fr;g.fillRect(860,640,200,400);g.restore();
    /* rim light: cool cyan along the crown and the back of the head */
    g.save();g.lineJoin="round";var rl=g.createLinearGradient(420,120,820,600);rl.addColorStop(0,"rgba("+CY+",0)");rl.addColorStop(.4,"rgba("+CY+",.6)");rl.addColorStop(1,"rgba(32,130,255,.35)");
    path(g,OUT);g.strokeStyle=rl;g.lineWidth=2.6;g.stroke();g.restore();
  }
  return {paint:paint,outline:OUT,box:[150,95,930,845]};
})();
