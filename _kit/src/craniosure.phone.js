/* CranioSure hero: the product. A modern smartphone resting on a soft blanket, turned slightly, with its edge, bezel,
   screen glare and a soft shadow. On screen, the app view: a soft-focus top-down photo of an infant's head in silhouette
   (no facial detail), a faint contour, measurement ticks at its extremes and a quiet "Evaluation" label (the site's own
   service name). The animated cyan trace that runs around the head is drawn by the field from SKULL.outline.
   SKULL.paint(g) draws into a 1000-unit box (x 150..930, y 95..845). */
var SKULL=(function(){
  var CY="39,235,255";
  var PX=545,PY=468,ROT=-.2,W=330,H=660,HX=0,HY=26,HRX=96,HRY=122;
  function rr(g,x,y,w,h,r){g.beginPath();g.moveTo(x+r,y);g.arcTo(x+w,y,x+w,y+h,r);g.arcTo(x+w,y+h,x,y+h,r);g.arcTo(x,y+h,x,y,r);g.arcTo(x,y,x+w,y,r);g.closePath()}
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  /* the head contour on screen, in phone-local units, then into the box */
  function headPt(a){var x=Math.cos(a),y=Math.sin(a);var b=y<0?1+.035*Math.pow(-y,3):1+.03*Math.pow(y,4);return [HX+HRX*x,HY+HRY*y*b]}
  var LOC=[];for(var i=0;i<=160;i++)LOC.push(headPt(-Math.PI/2+i/160*6.2832));
  var cs=Math.cos(ROT),sn=Math.sin(ROT);
  function tf(p){return [PX+p[0]*cs-p[1]*sn,PY+p[0]*sn+p[1]*cs]}
  var OUT=LOC.map(tf);
  function paint(g){
    var sc=Math.hypot(g.getTransform().a,g.getTransform().b),r=rng(5);
    /* --- the blanket: soft folds in the logo blues, fading out at its edges --- */
    g.save();
    var bl=g.createLinearGradient(150,140,930,840);bl.addColorStop(0,"#2f5fc8");bl.addColorStop(.5,"#2350b4");bl.addColorStop(1,"#162c86");
    g.fillStyle=bl;g.fillRect(120,80,840,800);
    g.lineCap="round";
    for(var k=0;k<170;k++){var yy=60+k*5;g.strokeStyle="rgba(255,255,255,"+(.018+.014*(k%2)).toFixed(3)+")";g.lineWidth=1.2;g.beginPath();g.moveTo(100,yy+140);g.bezierCurveTo(360,yy+40,640,yy+180,980,yy+40);g.stroke()}
    [[120,250,520,170,960,300,.28,70],[120,560,460,470,960,640,.3,80],[160,800,520,720,960,840,.24,70]].forEach(function(f){
      var fg=g.createLinearGradient(0,f[1]-f[7],0,f[1]+f[7]);fg.addColorStop(0,"rgba(8,14,60,0)");fg.addColorStop(.5,"rgba(8,14,60,"+f[6]+")");fg.addColorStop(1,"rgba(8,14,60,0)");
      g.strokeStyle=fg;g.lineWidth=f[7];g.beginPath();g.moveTo(f[0],f[1]);g.quadraticCurveTo(f[2],f[3],f[4],f[5]);g.stroke();
      var hg=g.createLinearGradient(0,f[1]-f[7]-26,0,f[1]-f[7]+26);hg.addColorStop(0,"rgba(150,190,255,0)");hg.addColorStop(.5,"rgba(150,190,255,.16)");hg.addColorStop(1,"rgba(150,190,255,0)");
      g.strokeStyle=hg;g.lineWidth=40;g.beginPath();g.moveTo(f[0],f[1]-f[7]*.7);g.quadraticCurveTo(f[2],f[3]-f[7]*.7,f[4],f[5]-f[7]*.7);g.stroke()});
    /* feather the blanket into the navy room */
    g.globalCompositeOperation="destination-in";
    var m=g.createRadialGradient(545,470,120,545,470,385);m.addColorStop(0,"rgba(0,0,0,1)");m.addColorStop(.55,"rgba(0,0,0,.8)");m.addColorStop(1,"rgba(0,0,0,0)");
    g.fillStyle=m;g.fillRect(0,0,1100,1000);g.restore();
    /* --- the phone --- */
    g.save();g.translate(PX,PY);g.rotate(ROT);
    /* soft contact shadow on the blanket */
    g.save();g.shadowColor="rgba(3,6,30,.7)";g.shadowBlur=70*sc;g.shadowOffsetX=34*sc;g.shadowOffsetY=46*sc;rr(g,-W/2,-H/2,W,H,50);g.fillStyle="#0a0f2a";g.fill();g.restore();
    /* the visible edge (the 3/4 turn shows the right side and bottom) */
    rr(g,-W/2+7,-H/2+9,W,H,50);var ed=g.createLinearGradient(-W/2,0,W/2+10,0);ed.addColorStop(0,"#2a3150");ed.addColorStop(.85,"#4b5576");ed.addColorStop(1,"#9aa6c8");g.fillStyle=ed;g.fill();
    /* the frame */
    rr(g,-W/2,-H/2,W,H,50);var fr=g.createLinearGradient(-W/2,-H/2,W/2,H/2);fr.addColorStop(0,"#c7cfe2");fr.addColorStop(.25,"#59627f");fr.addColorStop(.6,"#2c3350");fr.addColorStop(1,"#8892b0");g.fillStyle=fr;g.fill();
    rr(g,-W/2+3,-H/2+3,W-6,H-6,47);g.fillStyle="#05070f";g.fill();
    /* side buttons */
    g.fillStyle="#7d87a6";g.fillRect(W/2+5,-H/2+150,4,70);g.fillRect(-W/2-4,-H/2+130,4,44);g.fillRect(-W/2-4,-H/2+190,4,44);
    /* --- the screen --- */
    var SX=-W/2+14,SY=-H/2+14,SW=W-28,SH=H-28;
    g.save();rr(g,SX,SY,SW,SH,38);g.clip();
    /* the photo: a soft-focus view from above, on a pale sheet */
    var pg=g.createLinearGradient(0,SY,0,SY+SH);pg.addColorStop(0,"#eef2fa");pg.addColorStop(1,"#cfd9ec");g.fillStyle=pg;g.fillRect(SX,SY,SW,SH);
    g.save();g.filter="blur("+Math.max(1.5,9*sc).toFixed(1)+"px)";
    for(var f2=0;f2<7;f2++){g.strokeStyle="rgba(150,165,200,.35)";g.lineWidth=14;g.beginPath();g.moveTo(SX-20,SY+70+f2*90);g.quadraticCurveTo(0,SY+30+f2*96,SX+SW+20,SY+100+f2*88);g.stroke()}
    /* swaddle at the bottom of the frame */
    g.fillStyle="#7ea4e8";g.beginPath();g.ellipse(HX,HY+HRY+150,190,120,0,0,6.283);g.fill();
    g.fillStyle="#a8c2f0";g.beginPath();g.ellipse(HX-30,HY+HRY+110,120,50,-.2,0,6.283);g.fill();
    /* ears, then the head in silhouette: warm skin, soft light from the top left, a darker crown of fine hair */
    g.fillStyle="#d9ab95";g.beginPath();g.ellipse(HX-HRX-6,HY+6,14,26,0,0,6.283);g.fill();g.beginPath();g.ellipse(HX+HRX+6,HY+6,14,26,0,0,6.283);g.fill();
    g.beginPath();LOC.forEach(function(p,i){i?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1])});g.closePath();
    var hg2=g.createRadialGradient(HX-30,HY-40,10,HX,HY,HRY*1.1);hg2.addColorStop(0,"#f3ddcf");hg2.addColorStop(.6,"#e2bba6");hg2.addColorStop(1,"#c0907f");g.fillStyle=hg2;g.fill();
    var hr=g.createRadialGradient(HX+10,HY+30,10,HX+10,HY+30,HRY);hr.addColorStop(0,"rgba(120,84,70,.35)");hr.addColorStop(1,"rgba(120,84,70,0)");g.fillStyle=hr;g.fill();
    g.fillStyle="rgba(214,170,150,.9)";g.beginPath();g.ellipse(HX,HY-HRY-4,16,10,0,0,6.283);g.fill();
    g.restore();
    /* app overlay: a faint contour, the length and width axes, ticks at the four extremes */
    g.strokeStyle="rgba("+CY+",.35)";g.lineWidth=1.4;g.beginPath();LOC.forEach(function(p,i){i?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1])});g.closePath();g.stroke();
    var top=headPt(-Math.PI/2),bot=headPt(Math.PI/2),lft=headPt(Math.PI),rgt=headPt(0);
    g.setLineDash([3,6]);g.strokeStyle="rgba(11,20,81,.35)";g.lineWidth=1.2;g.beginPath();g.moveTo(top[0],top[1]);g.lineTo(bot[0],bot[1]);g.moveTo(lft[0],lft[1]);g.lineTo(rgt[0],rgt[1]);g.stroke();g.setLineDash([]);
    g.strokeStyle="#0bb6e6";g.lineWidth=2.4;g.lineCap="square";
    [[top,1],[bot,1],[lft,0],[rgt,0]].forEach(function(q){var p=q[0];g.beginPath();if(q[1]){g.moveTo(p[0]-11,p[1]);g.lineTo(p[0]+11,p[1])}else{g.moveTo(p[0],p[1]-11);g.lineTo(p[0],p[1]+11)}g.stroke()});
    /* app chrome: status bar, the brand, and the service label */
    g.fillStyle="rgba(244,247,252,.94)";g.fillRect(SX,SY,SW,96);
    g.fillStyle="#05070f";rr(g,-46,SY+12,92,26,13);g.fill();
    g.fillStyle="#0b1451";g.font="600 12px Manrope, system-ui, sans-serif";g.textBaseline="middle";g.fillText("9:41",SX+26,SY+26);
    g.fillRect(SX+SW-52,SY+21,20,10);g.fillRect(SX+SW-30,SY+24,3,5);
    g.beginPath();g.arc(SX+30,SY+66,10,0,6.283);var lg=g.createLinearGradient(SX+20,SY+56,SX+40,SY+76);lg.addColorStop(0,"#2082ff");lg.addColorStop(.5,"#24b7ff");lg.addColorStop(1,"#27ebff");g.fillStyle=lg;g.fill();
    g.fillStyle="#fff";g.beginPath();g.moveTo(SX+30,SY+60);g.lineTo(SX+36,SY+66);g.lineTo(SX+30,SY+72);g.lineTo(SX+24,SY+66);g.closePath();g.fill();
    g.fillStyle="#0b1451";g.font="500 17px Manrope, system-ui, sans-serif";g.fillText("CranioSure",SX+48,SY+66);
    g.strokeStyle="rgba(11,20,81,.12)";g.lineWidth=1;g.beginPath();g.moveTo(SX,SY+96);g.lineTo(SX+SW,SY+96);g.stroke();
    /* the label chip (square corners, DE) */
    var cy=SY+SH-70;g.fillStyle="rgba(11,20,81,.9)";g.fillRect(-80,cy-20,160,40);
    g.fillStyle="#27ebff";g.beginPath();g.arc(-56,cy,4,0,6.283);g.fill();
    g.fillStyle="#f4f7fc";g.font="500 12px 'IBM Plex Mono', ui-monospace, monospace";if(g.letterSpacing!==undefined)g.letterSpacing="2px";g.fillText("EVALUATION",-42,cy+1);if(g.letterSpacing!==undefined)g.letterSpacing="0px";
    g.fillStyle="rgba(11,20,81,.45)";rr(g,-60,SY+SH-18,120,5,2.5);g.fill();
    /* glass: a long diagonal glare and a soft vignette */
    var gl=g.createLinearGradient(SX,SY,SX+SW,SY+SH*.7);gl.addColorStop(0,"rgba(255,255,255,0)");gl.addColorStop(.36,"rgba(255,255,255,0)");gl.addColorStop(.42,"rgba(255,255,255,.16)");gl.addColorStop(.56,"rgba(255,255,255,.04)");gl.addColorStop(1,"rgba(255,255,255,0)");
    g.fillStyle=gl;g.fillRect(SX,SY,SW,SH);
    var vg=g.createRadialGradient(0,0,SH*.3,0,0,SH*.75);vg.addColorStop(0,"rgba(5,8,30,0)");vg.addColorStop(1,"rgba(5,8,30,.18)");g.fillStyle=vg;g.fillRect(SX,SY,SW,SH);
    g.restore();
    /* frame highlight along the lit edge */
    rr(g,-W/2+.8,-H/2+.8,W-1.6,H-1.6,49.5);var hl=g.createLinearGradient(-W/2,-H/2,W/2,H/2);hl.addColorStop(0,"rgba(255,255,255,.75)");hl.addColorStop(.4,"rgba(255,255,255,.08)");hl.addColorStop(1,"rgba(160,190,255,.3)");
    g.strokeStyle=hl;g.lineWidth=1.4;g.stroke();
    g.restore();
  }
  return {paint:paint,outline:OUT,closed:true,box:[150,95,930,845]};
})();
