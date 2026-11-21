/* Here & Now Systems hero: their product. A modern phone, upright and turned a touch, showing Step Away's own
   "Peak Blood Alcohol" screen (the five-colour gauge from stepaway.biz), before a low dawn glow taken from the
   Step Away sunrise mark. PHONE.paint(g) draws the static phone into a 1000-unit box (phone centre 500,480);
   the field draws the gauge knob each frame from PHONE.knob(u) (u = 0 at the blue end, 1 at the black end). */
var PHONE=(function(){
  var PX=500,PY=480,ROT=-.07,W=340,H=700,R=54;
  var GX=0,GY=-20,GR=104,A0=Math.PI*.9,A1=Math.PI*2.1;
  var SEG=["#2aa7df","#f5c425","#f29a1e","#e5402d","#1f1f22"];
  var cs=Math.cos(ROT),sn=Math.sin(ROT);
  function rr(g,x,y,w,h,r){g.beginPath();g.moveTo(x+r,y);g.arcTo(x+w,y,x+w,y+h,r);g.arcTo(x+w,y+h,x,y+h,r);g.arcTo(x,y+h,x,y,r);g.arcTo(x,y,x+w,y,r);g.closePath()}
  function tf(x,y){return [PX+x*cs-y*sn,PY+x*sn+y*cs]}
  function mark(g,x,y,s){g.save();g.translate(x,y);g.scale(s,s);
    g.strokeStyle="#f5b52e";g.lineWidth=1.6;g.lineCap="round";
    for(var i=0;i<9;i++){var a=Math.PI+i/8*Math.PI;g.beginPath();g.moveTo(30+Math.cos(a)*13,21+Math.sin(a)*13);g.lineTo(30+Math.cos(a)*18,21+Math.sin(a)*18);g.stroke()}
    var sg=g.createLinearGradient(0,11,0,21);sg.addColorStop(0,"#fbc531");sg.addColorStop(1,"#f07d22");g.fillStyle=sg;g.beginPath();g.arc(30,21,10,Math.PI,0);g.closePath();g.fill();
    g.strokeStyle="#e4412a";g.lineWidth=3.2;g.beginPath();g.moveTo(6,24);g.bezierCurveTo(24,23,27,30,15,34);g.bezierCurveTo(4,38,10,44,27,44);g.stroke();
    g.fillStyle="#4a4a50";[[12,27,3.4],[21,30,3],[11,38,3.2],[20,42.5,3.4]].forEach(function(p){g.beginPath();g.ellipse(p[0],p[1],p[2],p[2]*.55,0,0,6.283);g.fill()});
    g.restore()}
  function paint(g){
    g.save();g.translate(PX,PY);g.rotate(ROT);
    /* a soft cast shadow, low and to the right (the dawn light comes from behind and the left) */
    g.save();g.shadowColor="rgba(2,8,22,.72)";g.shadowBlur=80;g.shadowOffsetX=26;g.shadowOffsetY=40;rr(g,-W/2,-H/2,W,H,R);g.fillStyle="#07101f";g.fill();g.restore();
    /* the band: brushed graphite, catching the warm rim light on its left edge */
    rr(g,-W/2,-H/2,W,H,R);var fr=g.createLinearGradient(-W/2,-H/2,W/2,H/2);fr.addColorStop(0,"#d9b79a");fr.addColorStop(.12,"#6c6f7a");fr.addColorStop(.45,"#2a2e38");fr.addColorStop(.8,"#3a3f4c");fr.addColorStop(1,"#8d93a3");g.fillStyle=fr;g.fill();
    rr(g,-W/2+2.5,-H/2+2.5,W-5,H-5,R-2.5);g.fillStyle="#050608";g.fill();
    /* side keys */
    g.fillStyle="#5b606d";rr(g,W/2-1,-H/2+168,5,78,2.5);g.fill();rr(g,-W/2-4,-H/2+138,5,48,2.5);g.fill();rr(g,-W/2-4,-H/2+198,5,48,2.5);g.fill();
    /* the screen */
    var SX=-W/2+13,SY=-H/2+13,SW=W-26,SH=H-26;
    g.save();rr(g,SX,SY,SW,SH,R-12);g.clip();
    var bg=g.createLinearGradient(0,SY,0,SY+SH);bg.addColorStop(0,"#f7f6f4");bg.addColorStop(1,"#ecebe8");g.fillStyle=bg;g.fillRect(SX,SY,SW,SH);
    /* status bar and camera */
    g.fillStyle="#1d1d1f";g.font="600 13px Lato, system-ui, sans-serif";g.textBaseline="middle";g.textAlign="left";g.fillText("9:41",SX+30,SY+26);
    g.beginPath();g.arc(0,SY+24,7,0,6.283);g.fillStyle="#0b0c10";g.fill();g.beginPath();g.arc(-1.5,SY+22.5,2,0,6.283);g.fillStyle="#2c3550";g.fill();
    g.strokeStyle="#1d1d1f";g.lineWidth=1.2;rr(g,SX+SW-56,SY+20,24,12,3);g.stroke();g.fillStyle="#1d1d1f";g.fillRect(SX+SW-54,SY+22,17,8);g.fillRect(SX+SW-31,SY+24,2,4);
    /* app bar: the Step Away mark and name */
    mark(g,SX+24,SY+50,.82);
    g.fillStyle="#5d5d62";g.font="400 21px Lato, system-ui, sans-serif";g.textAlign="left";g.fillText("Step Away",SX+70,SY+72);
    g.fillStyle="rgba(0,0,0,.08)";g.fillRect(SX,SY+100,SW,1);
    /* the screen title, as in the app */
    g.textAlign="center";g.fillStyle="#1f1f22";g.font="italic 700 21px Lato, system-ui, sans-serif";g.fillText("Peak Blood Alcohol",0,SY+148);
    g.fillStyle="#77767b";g.font="400 14px Lato, system-ui, sans-serif";g.fillText("This week",0,SY+176);
    /* the five-colour gauge */
    g.lineWidth=24;g.lineCap="butt";
    for(var i=0;i<5;i++){var a=A0+(A1-A0)*i/5,b=A0+(A1-A0)*(i+1)/5;g.strokeStyle=SEG[i];g.beginPath();g.arc(GX,GY,GR,a+(i?.004:0),b);g.stroke()}
    g.strokeStyle="rgba(0,0,0,.06)";g.lineWidth=1;g.beginPath();g.arc(GX,GY,GR-18,A0,A1);g.stroke();
    /* weekly report, the progress card under the gauge */
    var CY=GY+128;
    g.fillStyle="#e3412b";g.font="700 12px Lato, system-ui, sans-serif";g.fillText("WEEKLY REPORT",0,CY);
    g.fillStyle="rgba(0,0,0,.08)";g.fillRect(SX+34,CY+20,SW-68,1);
    var bars=[.52,.74,.3,.62,.2,.44,.16];g.fillStyle="#d8d6d2";
    for(var k=0;k<7;k++){var bx=-84+k*28,bh=58*bars[k];rr(g,bx-6,CY+104-bh,12,bh,2);g.fillStyle=k===6?"#f29a1e":"#cfccc6";g.fill()}
    g.fillStyle="#9a989d";g.font="400 11px Lato, system-ui, sans-serif";["M","T","W","T","F","S","S"].forEach(function(d,k){g.fillText(d,-84+k*28,CY+122)});
    /* Next */
    g.fillStyle="rgba(0,0,0,.09)";g.fillRect(SX,SY+SH-78,SW,1);
    g.fillStyle="#303034";g.font="400 17px Lato, system-ui, sans-serif";g.fillText("Next",0,SY+SH-46);
    g.fillStyle="#1d1d1f";rr(g,-56,SY+SH-16,112,5,2.5);g.fill();
    /* a faint glass sheen */
    var gl=g.createLinearGradient(SX,SY,SX+SW,SY+SH*.6);gl.addColorStop(0,"rgba(255,255,255,.22)");gl.addColorStop(.35,"rgba(255,255,255,0)");gl.addColorStop(1,"rgba(255,255,255,0)");g.fillStyle=gl;g.fillRect(SX,SY,SW,SH);
    g.restore();
    g.restore();
  }
  /* the knob position (box units) for gauge fraction u */
  function knob(u){var a=A0+(A1-A0)*u;return tf(GX+Math.cos(a)*GR,GY+Math.sin(a)*GR)}
  return {paint:paint,knob:knob,rot:ROT,cx:PX,cy:PY,seg:SEG};
})();
