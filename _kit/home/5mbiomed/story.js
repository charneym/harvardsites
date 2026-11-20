/* the story scene (BL/BY/DB/CK): ONE engraved schematic of Imagnostix, after the NIH Phase I and II abstracts. On the left,
   the blood-sample vial; a callout magnifies the sample into a large lens. Each step inks one more layer of the same drawing:
   MAKE (the ultra-magnetic iron oxide nanorods, each with its magnetic moment), COAT (the anti-biofouling polymer shell and
   capture antibodies; serum proteins kept off), STIR (the alternating field coils at the vial, the rods turning as nano stir
   bars), READ (biomarkers of four kinds caught on the antibodies, the magnet drawing the rods to the wall, a four-channel
   readout keyed to the same four shapes). Schematic, not to scale. */
function scene(){
  var mob=MOBILE(),f=function(n){return n.toFixed(1)};
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  var VX=92,VW=84,VT=112,VB=392,LV=170; /* vial left, width, top, bottom, liquid level */
  var CX=528,CY=300,R=208;              /* the magnifying lens */
  var RODS=[[452,196,-22],[600,188,34],[388,300,62],[524,292,-8],[664,310,74],[452,414,16],[606,418,-38]];
  var RL=76,RW=15;
  function rod(x,y,a,o){var l=RL/2+o,r=RW/2+o;return '<path transform="rotate('+a+' '+x+' '+y+')" d="M'+f(x-l+r)+' '+f(y-r)+'H'+f(x+l-r)+'A'+r+' '+r+' 0 0 1 '+f(x+l-r)+' '+f(y+r)+'H'+f(x-l+r)+'A'+r+' '+r+' 0 0 1 '+f(x-l+r)+' '+f(y-r)+'Z"/>'}
  function shape(k,x,y,s){s=s||1;if(k===0)return 'M'+f(x+4*s)+' '+f(y)+'a'+4*s+' '+4*s+' 0 1 0 '+(-8*s)+' 0a'+4*s+' '+4*s+' 0 1 0 '+(8*s)+' 0';
    if(k===1)return 'M'+f(x)+' '+f(y-5*s)+'L'+f(x+5*s)+' '+f(y+4*s)+'H'+f(x-5*s)+'Z';
    if(k===2)return 'M'+f(x-4*s)+' '+f(y-4*s)+'h'+8*s+'v'+8*s+'h'+(-8*s)+'Z';
    return 'M'+f(x)+' '+f(y-5.5*s)+'L'+f(x+5*s)+' '+f(y)+'L'+f(x)+' '+f(y+5.5*s)+'L'+f(x-5*s)+' '+f(y)+'Z'}
  /* base: neatline, title block, the vial in its rack, the sample, the callout, the lens */
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  var vial='M'+VX+' '+(VT-14)+'H'+(VX+VW)+'V'+VT+'H'+VX+'Z M'+(VX+4)+' '+VT+'V'+(VB-30)+'Q'+(VX+4)+' '+VB+' '+(VX+VW/2)+' '+VB+'Q'+(VX+VW-4)+' '+VB+' '+(VX+VW-4)+' '+(VB-30)+'V'+VT;
  g+='<path class="sD bl" d="'+vial+'"/>';
  g+='<path class="sD gr" d="M'+(VX+4)+' '+LV+'H'+(VX+VW-4)+'"/>';
  var hz='';for(var y=LV+10;y<VB-14;y+=10)hz+='M'+(VX+8)+' '+y+'l10 -10M'+(VX+28)+' '+y+'l10 -10M'+(VX+48)+' '+y+'l10 -10M'+(VX+66)+' '+y+'l8 -8';g+='<path class="sD ht" d="'+hz+'"/>';
  var rack='M'+(VX-30)+' '+(VB+16)+'H'+(VX+VW+30)+'M'+(VX-30)+' '+(VB+22)+'H'+(VX+VW+30)+'M'+(VX-22)+' '+(VB+16)+'V'+(VB+22)+'M'+(VX+VW+22)+' '+(VB+16)+'V'+(VB+22);
  g+='<path class="sD kb" d="'+rack+'"/>';
  var sx=VX+VW/2,sy=300,sr=20,u=215*Math.PI/180,d=145*Math.PI/180;
  g+='<circle class="sD gr" cx="'+sx+'" cy="'+sy+'" r="'+sr+'"/>';
  g+='<path class="sD kb" d="M'+sx+' '+(sy-sr)+'L'+f(CX+R*Math.cos(u))+' '+f(CY+R*Math.sin(u))+'M'+sx+' '+(sy+sr)+'L'+f(CX+R*Math.cos(d))+' '+f(CY+R*Math.sin(d))+'"/>';
  g+='<circle class="sD bl" cx="'+CX+'" cy="'+CY+'" r="'+R+'"/><circle class="sD ht" cx="'+CX+'" cy="'+CY+'" r="'+(R+7)+'"/>';
  g+='<g class="tb"><path class="tbl" d="M586 20h190v48h-190Z M586 44h190"/><text x="596" y="37" class="t">IMAGNOSTIX · SCHEMATIC</text><text x="596" y="60" class="t s">NOT TO SCALE</text></g>';
  g+='</g>';
  /* 1 MAKE: the nanorods, each with its moment */
  var r1='',mo='';RODS.forEach(function(q){r1+=rod(q[0],q[1],q[2],0);var a=q[2]*Math.PI/180,c=Math.cos(a),s=Math.sin(a);
    mo+='M'+f(q[0]-c*22)+' '+f(q[1]-s*22)+'L'+f(q[0]+c*22)+' '+f(q[1]+s*22)+'M'+f(q[0]+c*22-c*6-s*4)+' '+f(q[1]+s*22-s*6+c*4)+'L'+f(q[0]+c*22)+' '+f(q[1]+s*22)+'L'+f(q[0]+c*22-c*6+s*4)+' '+f(q[1]+s*22-s*6-c*4)});
  g+='<g id="sc1"><g class="rod dr">'+r1+'</g><path class="mom dr" d="'+mo+'"/><text x="44" y="64" class="a">IRON OXIDE NANORODS</text></g>';
  /* 2 COAT: the polymer shell, capture antibodies, serum proteins kept away */
  var sh='',ab='',TIPS=[];
  RODS.forEach(function(q,qi){sh+=rod(q[0],q[1],q[2],5);var a=q[2]*Math.PI/180,c=Math.cos(a),s=Math.sin(a);
    [-22,0,22].forEach(function(uu,ui){[-1,1].forEach(function(side){if((ui+qi+(side>0?1:0))%2)return;
      var bx=q[0]+c*uu,by=q[1]+s*uu,nx=-s*side,ny=c*side,r0=RW/2+5,x0=bx+nx*r0,y0=by+ny*r0,x1=bx+nx*(r0+9),y1=by+ny*(r0+9);
      ab+='M'+f(x0)+' '+f(y0)+'L'+f(x1)+' '+f(y1)+'M'+f(x1)+' '+f(y1)+'L'+f(x1+nx*6+c*5)+' '+f(y1+ny*6+s*5)+'M'+f(x1)+' '+f(y1)+'L'+f(x1+nx*6-c*5)+' '+f(y1+ny*6-s*5);
      TIPS.push([bx+nx*(r0+20),by+ny*(r0+20)])})})});
  var PR=[[372,214],[690,232],[540,128],[352,388],[702,404],[530,478],[540,212],[440,252]],pr='';
  PR.forEach(function(p,i){var r=5+(i%3);pr+='M'+(p[0]+r)+' '+p[1]+'a'+r+' '+(r*.8)+' 0 1 0 '+(-2*r)+' 0a'+r+' '+(r*.8)+' 0 1 0 '+(2*r)+' 0'});
  g+='<g id="sc2"><g class="coat dr">'+sh+'</g><path class="ab dr" d="'+ab+'"/><path class="prot dr" d="'+pr+'"/><text x="44" y="64" class="a">ANTI-BIOFOULING COAT</text></g>';
  /* 3 STIR: field coils at the vial, the alternating wave, the rods turning */
  var co='';[VX-26,VX+VW+10].forEach(function(x){co+='M'+x+' 214h16v120h-16Z';for(var yy=220;yy<332;yy+=8)co+='M'+x+' '+yy+'l16 4'});
  var wv='M'+(VX-6)+' 190';for(var k=1;k<=24;k++){var xx=VX-6+k*(VW+12)/24;wv+='L'+f(xx)+' '+f(190-8*Math.sin(k/24*Math.PI*4))}
  var ar='';RODS.forEach(function(q){var rr=50,a0=(q[2]+200)*Math.PI/180,a2=a0+1.5,sx0=q[0]+rr*Math.cos(a0),sy0=q[1]+rr*Math.sin(a0),ex=q[0]+rr*Math.cos(a2),ey=q[1]+rr*Math.sin(a2);
    ar+='M'+f(sx0)+' '+f(sy0)+'A'+rr+' '+rr+' 0 0 1 '+f(ex)+' '+f(ey);var ta=a2+Math.PI/2,bx=ex-Math.cos(ta)*8,by=ey-Math.sin(ta)*8;
    ar+='M'+f(bx+Math.cos(a2)*4)+' '+f(by+Math.sin(a2)*4)+'L'+f(ex)+' '+f(ey)+'L'+f(bx-Math.cos(a2)*4)+' '+f(by-Math.sin(a2)*4)});
  g+='<g id="sc3"><path class="coil dr" d="'+co+'"/><path class="wave dr" d="'+wv+'"/><path class="spin dr" d="'+ar+'"/><text x="44" y="64" class="a">ALTERNATING FIELD</text></g>';
  /* 4 READ: four kinds of biomarker caught; the magnet at the wall; a four-channel readout keyed to the same shapes */
  var bm='';TIPS.forEach(function(p,i){if(i%3===2)return;bm+=shape(i%4,p[0],p[1],1)});
  var mx=VX+VW+44,mag='M'+mx+' 250h34v100h-34v-22h16v-56h-16Z';
  var cl='';for(var i=0;i<9;i++){var yc=262+i*9;cl+='M'+(VX+VW-8)+' '+yc+'a2.6 2.6 0 1 0 -5.2 0a2.6 2.6 0 1 0 5.2 0'}
  var ro='M44 456h196v76h-196Z',bars='',HB=[34,20,28,14];
  for(var b=0;b<4;b++){var x0=66+b*46;bars+='M'+x0+' 520v'+(-HB[b])+'h16v'+HB[b]+'Z'}
  var keys='';for(var b2=0;b2<4;b2++)keys+=shape(b2,74+b2*46,470,1);
  g+='<g id="sc4"><path class="bio" d="'+bm+'"/><path class="mag" d="'+mag+'"/><text x="'+(mx+42)+'" y="266" class="t">N</text><text x="'+(mx+42)+'" y="342" class="t">S</text><path class="clu" d="'+cl+'"/>'+
     '<path class="tbl" d="'+ro+'"/><path class="bar" d="'+bars+'"/><path class="bio" d="'+keys+'"/><text x="44" y="64" class="a">FOUR BIOMARKERS</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb",svg),g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d1:dl("#sc1 .dr path, #sc1 path.dr"),d2:dl("#sc2 .dr path, #sc2 path.dr"),d3:dl("#sc3 .dr"),t:[$("#sc1 text",svg),$("#sc2 text",svg),$("#sc3 text",svg),$("#sc4 text.a",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s2=seg(p,.25,.45),s3=seg(p,.5,.7),s4=seg(p,.75,.93);
    E.g[0].style.opacity=b.toFixed(3);draw(E.d1,b);
    E.g[1].style.opacity=(b*(s2>0?1:0)).toFixed(3);draw(E.d2,s2);
    E.g[2].style.opacity=(b*(s3>0?1:0)).toFixed(3);draw(E.d3,s3);
    E.g[3].style.opacity=(b*s4).toFixed(3);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s2).toFixed(3);E.t[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.t[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.t[3].style.opacity=I(s4).toFixed(3);
  };
}
