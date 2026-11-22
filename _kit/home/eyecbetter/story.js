/* The story scene (DB/BY): how eyecbetter's Photonic IOP Biomonitoring works, from the NIH SBIR abstract (1R43EY037593-01)
   and the March 2022 licence announcement (optical sensors, sound waves and speckle patterns), as ONE continuous scene in
   fine line: the wearable sensor on the left, a sagittal section of the eye in the middle, the patient's phone on the right.
   Frame 0 is already a complete picture. Step 1 (sound): a sound wave leaves the sensor and sets the white of the eye
   oscillating. Step 2 (speckle): the laser lights the sclera, the camera reads the speckle pattern, and the trace shows the
   oscillation dying away once the sound stops: its damping is what carries the pressure. Step 3 (connect): the reading
   travels to the patient app and on to the glaucoma specialist. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=560;
/* --- the eye (sagittal, facing the sensor) --- */
var EX=480,EY=262,ER=150,CA=35;                      /* centre, radius, half-angle of the cornea */
var SPA=232*Math.PI/180;                            /* the measured spot on the sclera */
var SPX=EX+ER*Math.cos(SPA),SPY=EY+ER*Math.sin(SPA);
/* --- the sensor housing --- */
var HX=44,HY=92,HW=112,HH=128;
var SKX=HX+HW,SKY=HY+30,LZX=HX+HW,LZY=HY+70,CMX=HX+HW,CMY=HY+100;
/* --- the readout panels --- */
var KX=HX,KY=262,KS=84;                              /* speckle inset */
var TX0=HX,TX1=318,TY=436,TA=40;                     /* damping trace: x range, baseline, amplitude */
/* --- the phone --- */
var PX=606,PY=360,PW=96,PH=168;
var NW=4,NSP=56;
var SPK=(function(){var s=29,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<NSP;i++)a.push({x:KX+6+R()*(KS-12),y:KY+6+R()*(KS-12),r:1.2+R()*2.4,s:R()*100});return a})();
function eyeP(th,r){return [(EX+(r||ER)*Math.cos(th)).toFixed(1),(EY+(r||ER)*Math.sin(th)).toFixed(1)]}
function tracePath(){var d='',i,n=90;for(i=0;i<=n;i++){var u=i/n,x=TX0+12+(TX1-TX0-12)*u,
  y=TY-TA*Math.exp(-u*3.4)*Math.sin(u*Math.PI*2*6.5);d+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)}return d}
function eyeScene(o){
  var g='',i;
  var T=function(cls,x,y,txt,anchor,keep){return (o.mob&&!keep)?'':'<text class="'+cls+'"'+(anchor?' text-anchor="'+anchor+'"':'')+' x="'+x+'" y="'+y+'">'+txt+'</text>'};
  var a0=Math.PI-CA*Math.PI/180,a1=Math.PI+CA*Math.PI/180,p0=eyeP(a0),p1=eyeP(a1),q0=eyeP(a0,ER-12),q1=eyeP(a1,ER-12);
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* ---- the eye: sclera, choroid and retina, cornea, iris, lens, optic nerve ---- */
  g+='<path class="wl sD" d="M'+p1[0]+' '+p1[1]+'A'+ER+' '+ER+' 0 1 1 '+p0[0]+' '+p0[1]+'"/>';
  g+='<path class="wo sD" d="M'+q1[0]+' '+q1[1]+'A'+(ER-12)+' '+(ER-12)+' 0 1 1 '+q0[0]+' '+q0[1]+'"/>';
  g+='<path class="en sD" d="M'+eyeP(a1+.22,ER-20).join(' ')+'A'+(ER-20)+' '+(ER-20)+' 0 1 1 '+eyeP(a0-.22,ER-20).join(' ')+'"/>';
  g+='<path class="wl sD" d="M'+p1[0]+' '+p1[1]+'Q'+(EX-ER-74)+' '+EY+' '+p0[0]+' '+p0[1]+'"/>';
  g+='<path class="wo sD" d="M'+(+p1[0]+6)+' '+(+p1[1]+6)+'L'+(+p1[0]+12)+' '+(EY-20)+'"/>';
  g+='<path class="wo sD" d="M'+(+p0[0]+6)+' '+(+p0[1]-6)+'L'+(+p0[0]+12)+' '+(EY+20)+'"/>';
  g+='<ellipse class="sF" cx="'+(+p0[0]+36)+'" cy="'+EY+'" rx="21" ry="47"/>';
  var on0=eyeP(-.17),on1=eyeP(.17);
  g+='<path class="wl sD" d="M'+on0.join(' ')+'C'+(EX+ER+40)+' '+(+on0[1]-4)+' '+(EX+ER+64)+' '+(+on0[1]-14)+' '+(SCW-24)+' '+(+on0[1]-22)+'"/>';
  g+='<path class="wl sD" d="M'+on1.join(' ')+'C'+(EX+ER+40)+' '+(+on1[1]+4)+' '+(EX+ER+64)+' '+(+on1[1]+14)+' '+(SCW-24)+' '+(+on1[1]+22)+'"/>';
  g+=T('t',EX-ER-26,EY+106,'CORNEA','end');
  g+=T('t',EX+ER-6,EY-ER+16,'SCLERA','start',1);
  g+=T('t',SCW-24,EY-66,'OPTIC NERVE','end');
  g+=T('t',+p0[0]+36,EY+76,'LENS','middle');
  /* ---- the wearable sensor ---- */
  g+='<path class="wl sD" d="M'+HX+' '+HY+'h'+HW+'v'+HH+'h-'+HW+'Z"/>';
  g+='<path class="wo sD" d="M'+(HX+12)+' '+(HY+HH)+'v28M'+(HX+HW-12)+' '+(HY+HH)+'v28"/>';
  for(i=0;i<4;i++)g+='<path class="en sD" d="M'+(SKX-14+i*3.4)+' '+(SKY-11)+'v22"/>';
  g+='<circle class="wl sD" cx="'+(LZX-6)+'" cy="'+LZY+'" r="4.5"/>';
  g+='<circle class="wl sD" cx="'+(CMX-9)+'" cy="'+CMY+'" r="8"/><circle class="en sD" cx="'+(CMX-9)+'" cy="'+CMY+'" r="3.5"/>';
  g+=T('t',HX,HY-(o.mob?24:20),o.mob?'SENSOR':'WEARABLE SENSOR',null,1);
  g+=T('t',HX+12,SKY+4,'SOUND');
  g+=T('t',HX+12,LZY+4,'LASER');
  g+=T('t',HX+12,CMY+4,'CAMERA');
  /* ---- the speckle inset ---- */
  g+='<path class="wo sD" d="M'+KX+' '+KY+'h'+KS+'v'+KS+'h-'+KS+'Z"/>';
  g+=T('t',KX+KS+14,KY+16,'SPECKLE PATTERN');
  g+=T('t',KX+KS+14,KY+34,'READ BY THE CAMERA');
  /* ---- the trace axes ---- */
  g+='<path class="wo sD" d="M'+TX0+' '+(TY-TA-14)+'V'+(TY+TA+14)+'"/>';
  g+='<path class="wo sD" d="M'+TX0+' '+TY+'H'+TX1+'"/>';
  g+=T('t',TX0,TY+TA+40,'SCLERAL OSCILLATION · TIME →');
  /* ---- the phone ---- */
  g+='<path class="wl sD" d="M'+(PX+8)+' '+PY+'h'+(PW-16)+'q8 0 8 8v'+(PH-16)+'q0 8-8 8h-'+(PW-16)+'q-8 0-8-8v-'+(PH-16)+'q0-8 8-8Z"/>';
  g+='<path class="en sD" d="M'+(PX+PW/2-12)+' '+(PY+12)+'h24"/>';
  g+='<path class="wo sD" d="M'+(PX+14)+' '+(PY+PH-46)+'h'+(PW-28)+'M'+(PX+14)+' '+(PY+PH-34)+'h'+(PW-44)+'"/>';
  g+=T('t',PX+PW/2,PY+PH+(o.mob?31:28),'PATIENT APP','middle',1);
  g+='</g>';
  /* ---- dynamic: sound wavefronts, the vibrating sclera, beam, return, speckle, trace, packet ---- */
  g+='<g id="scWave">';for(i=0;i<NW;i++)g+='<path class="wv"/>';g+='</g>';
  g+='<path id="scVib" class="vib"/>';
  g+='<path id="scBeam" class="bm" d="M'+(LZX-6)+' '+LZY+'L'+SPX.toFixed(1)+' '+SPY.toFixed(1)+'"/>';
  g+='<path id="scRet" class="am" d="M'+SPX.toFixed(1)+' '+SPY.toFixed(1)+'L'+(CMX-9)+' '+CMY+'"/>';
  g+='<circle id="scDot" class="dt" cx="'+SPX.toFixed(1)+'" cy="'+SPY.toFixed(1)+'" r="5"/>';
  g+='<g id="scSpk">';SPK.forEach(function(s){g+='<circle cx="'+s.x.toFixed(1)+'" cy="'+s.y.toFixed(1)+'" r="'+s.r.toFixed(1)+'"/>'});g+='</g>';
  g+='<path id="scTr" class="tr" d="'+tracePath()+'"/>';
  g+='<text id="scIop" class="a" x="'+(TX1-4)+'" y="'+(TY-TA-6)+'" text-anchor="end">DAMPING → IOP</text>';
  g+='<path id="scRoute" class="am" d="M'+(HX+HW/2)+' '+(HY+HH+28)+'C'+(HX+HW/2)+' '+(SCH-30)+' '+(PX-60)+' '+(PY+PH/2+40)+' '+PX+' '+(PY+PH/2)+'"/>';
  g+='<rect id="scPkt" class="pk" x="-5" y="-5" width="10" height="10"/>';
  g+='<g id="scScr" class="scr"><text class="a" x="'+(PX+PW/2)+'" y="'+(PY+64)+'" text-anchor="middle">IOP</text><text class="t" x="'+(PX+PW/2)+'" y="'+(PY+86)+'" text-anchor="middle">mmHg</text></g>';
  g+='<g id="scDoc">'+(o.mob?'':'<text class="a" x="'+(SCW-16)+'" y="'+(PY-22)+'" text-anchor="end">→ SPECIALIST</text>')+'</g>';
  /* ---- step labels, in the clear band under the scene ---- */
  var ly=SCH-8;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">'+(o.mob?'SOUND SETS THE SCLERA MOVING':'A SOUND WAVE SETS THE SCLERA OSCILLATING')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">'+(o.mob?'SPECKLE READS HOW IT SETTLES':'LASER SPECKLE READS HOW FAST IT SETTLES')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">'+(o.mob?'TO THE APP AND THE SPECIALIST':'EACH READING TO THE APP AND THE SPECIALIST')+'</text></g>';
  return g+'</svg>';
}
function scene(){return eyeScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .sF",svg),wave:$$("#scWave .wv",svg),vib:$("#scVib",svg),
    beam:$("#scBeam",svg),ret:$("#scRet",svg),dot:$("#scDot",svg),spk:$$("#scSpk circle",svg),tr:dl("#scTr")[0],iop:$("#scIop",svg),
    route:$("#scRoute",svg),pkt:$("#scPkt",svg),scr:$("#scScr",svg),doc:$("#scDoc",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var RL=E.route.getTotalLength?E.route.getTotalLength():0;
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  var dx=SPX-SKX,dy=SPY-SKY,DIST=Math.sqrt(dx*dx+dy*dy),DA=Math.atan2(dy,dx);
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var snd=seg(p,.06,.14)*(1-seg(p,.34,.4)),rd=seg(p,.38,.46)*(1-seg(p,.66,.72)),tr=seg(p,.4,.64),go=seg(p,.7,.9);
    /* 1. wavefronts travel from the speaker to the eye */
    E.wave.forEach(function(el,k){var ph=((p*7)+k/NW)%1,r=12+ph*(DIST-12),s=.32;
      el.setAttribute("d","M"+(SKX+r*Math.cos(DA-s)).toFixed(1)+" "+(SKY+r*Math.sin(DA-s)).toFixed(1)+"A"+r.toFixed(1)+" "+r.toFixed(1)+" 0 0 1 "+(SKX+r*Math.cos(DA+s)).toFixed(1)+" "+(SKY+r*Math.sin(DA+s)).toFixed(1));
      op(el,b*snd*Math.sin(Math.PI*ph)*.9)});
    /* the sclera around the spot oscillates while the sound plays, then rings down as the trace is read */
    var amp=7*(snd>0.01&&p<.4?snd:Math.exp(-tr*3.4)*rd),w=Math.sin(p*260)*amp,a=SPA-.2,z=SPA+.2,rr=ER+w;
    E.vib.setAttribute("d","M"+eyeP(a,ER).join(" ")+"Q"+(EX+(rr+w*.6)*Math.cos(SPA)/Math.cos(.2)).toFixed(1)+" "+(EY+(rr+w*.6)*Math.sin(SPA)/Math.cos(.2)).toFixed(1)+" "+eyeP(z,ER).join(" "));
    op(E.vib,b*Math.max(snd,rd));
    /* 2. the laser lights the spot, the camera reads the speckle, the trace draws the ring-down */
    op(E.beam,b*rd);op(E.ret,b*rd*.9);op(E.dot,b*Math.max(rd,snd*.5));
    var fr=Math.floor(p*90);
    E.spk.forEach(function(el,k){var s=SPK[k],tw=.25+.75*Math.abs(Math.sin(s.s+fr*1.7*(1+k%3)));op(el,b*rd*tw)});
    E.tr[0].style.strokeDashoffset=(E.tr[1]*(1-tr)).toFixed(1);op(E.tr[0],b*(tr>0?1:0)*(1-go*.6));
    op(E.iop,b*seg(p,.56,.62)*(svg.classList.contains('mob')?1-seg(p,.64,.7):1-go*.6));
    /* 3. the reading travels to the patient app, and on to the specialist */
    op(E.route,b*go*(1-seg(p,.94,1)*.5)*.8);
    if(RL){var pt=E.route.getPointAtLength(RL*Math.min(1,go*1.15));E.pkt.setAttribute("transform","translate("+pt.x.toFixed(1)+" "+pt.y.toFixed(1)+")")}
    op(E.pkt,b*(go>0&&go<.87?1:0));
    op(E.scr,b*seg(p,.84,.9));op(E.doc,b*seg(p,.9,.96));
    op(E.l1,b*seg(p,.1,.2)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.78,.86));
  };
}
