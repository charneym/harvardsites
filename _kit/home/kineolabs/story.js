/* The story scene (DB/BY): how KineoLabs' line-scan swept-source OCT works (kineolabs.com, Home, OCT Systems, OEM Solutions),
   as ONE continuous optical layout in fine line, filling the frame. Top: the free-space swept laser, the beamsplitter with its
   reference mirror, the cylindrical lens that shapes the beam into a line, the eye, and the line camera. Bottom: the
   cross-section panel. Frame 0 is already a complete picture. Step 1 (sweep): the laser's wavelength runs across its band and
   the beam lights. Step 2 (line): the light fans through the pupil onto a whole line of the retina at once, the points along it
   light together, and the interference reaches the line camera as fringes. Step 3 (image): the fringes resolve into depth, and
   KineoLabs' own retinal B-scan from its internal prototype wipes in. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=560;
var LBX=24,LBY=76,LBW=206,LBH=96,BMY=124;      /* laser housing; beam height */
var BSX=320;                                    /* beamsplitter centre x (y = BMY) */
var RMY=34;                                     /* reference mirror y */
var CLX=432;                                    /* cylindrical lens x */
var EX=628,EY=BMY,ER=86;                        /* the eye */
var CMY=232;                                    /* line camera top */
var PX=36,PY=306,PW=688,PH=225;                 /* cross-section panel (retina image 1610x528) */
var NRP=34;                                     /* points lit along the retina */
function retPt(k){var a=(-38+76*k/(NRP-1))*Math.PI/180;return [EX+Math.cos(a)*(ER-7),EY+Math.sin(a)*(ER-7)]}
function vesScene(o){
  var g='',i;
  var T=function(cls,x,y,txt,anchor,keep){return (o.mob&&!keep)?'':'<text class="'+cls+'"'+(anchor?' text-anchor="'+anchor+'"':'')+' x="'+x+'" y="'+y+'">'+txt+'</text>'};
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="kbClip"><rect id="kbWipe" x="'+PX+'" y="'+PY+'" width="0" height="'+PH+'"/></clipPath></defs>';
  g+='<g id="scBase">';
  /* ---- the swept laser: housing, gain chip, collimating lens, tuning element, cat's-eye ---- */
  g+='<path class="wl sD" d="M'+LBX+' '+LBY+'h'+LBW+'v'+LBH+'h-'+LBW+'Z"/>';
  g+='<path class="wo sD" d="M'+(LBX+8)+' '+(LBY+LBH-10)+'h'+(LBW-16)+'"/>';
  g+='<path class="wl sD" d="M'+(LBX+18)+' '+(BMY-10)+'h26v20h-26Z"/>';
  g+='<ellipse class="lz" cx="'+(LBX+78)+'" cy="'+BMY+'" rx="6" ry="22"/>';
  g+='<ellipse class="lz" cx="'+(LBX+160)+'" cy="'+BMY+'" rx="7" ry="26"/>';
  g+='<path class="wl sD" d="M'+(LBX+186)+' '+(BMY-26)+'q10 26 0 52"/>';
  g+='<g id="kbTune" transform="translate('+(LBX+118)+' '+BMY+')"><path class="wl" d="M0 -24V24"/><path class="wo" d="M-5 -20h10M-5 -12h10M-5 -4h10M-5 4h10M-5 12h10M-5 20h10"/></g>';
  g+=T('t',LBX,LBY-16,o.mob?'SWEPT LASER':'FREE-SPACE SWEPT LASER',null,1);
  /* the wavelength gauge under the laser */
  g+='<path class="wo sD" d="M'+(LBX+8)+' 206H'+(LBX+LBW-8)+'"/>';
  for(i=0;i<=8;i++)g+='<path class="en sD" d="M'+(LBX+8+i*(LBW-16)/8).toFixed(1)+' 201v10"/>';
  g+=T('t',LBX+8,232,'λ SWEEP');
  /* ---- beamsplitter, reference mirror ---- */
  g+='<path class="wl sD" d="M'+(BSX-16)+' '+(BMY-16)+'h32v32h-32Z"/>';
  g+='<path class="wo sD" d="M'+(BSX-16)+' '+(BMY+16)+'L'+(BSX+16)+' '+(BMY-16)+'"/>';
  g+='<path class="wl sD" d="M'+(BSX-24)+' '+RMY+'h48"/><path class="en sD" d="M'+(BSX-24)+' '+(RMY-6)+'h48"/>';
  g+=T('t',BSX+34,RMY+4,'REFERENCE');
  /* ---- cylindrical lens ---- */
  g+='<ellipse class="lz" cx="'+CLX+'" cy="'+BMY+'" rx="9" ry="40"/>';
  g+=T('t',CLX,BMY+66,'LINE OPTICS','middle');
  /* ---- the eye: sclera, cornea, iris, crystalline lens, retina ---- */
  g+='<circle class="wl sD" cx="'+EX+'" cy="'+EY+'" r="'+ER+'"/>';
  g+='<path class="wl sD" d="M'+(EX-70)+' '+(EY-50)+'Q'+(EX-112)+' '+EY+' '+(EX-70)+' '+(EY+50)+'"/>';
  g+='<path class="wo sD" d="M'+(EX-66)+' '+(EY-46)+'L'+(EX-66)+' '+(EY-16)+'M'+(EX-66)+' '+(EY+16)+'L'+(EX-66)+' '+(EY+46)+'"/>';
  g+='<ellipse class="lz" cx="'+(EX-50)+'" cy="'+EY+'" rx="13" ry="28"/>';
  g+='<path class="ret sD" d="M'+retPt(0)[0].toFixed(1)+' '+retPt(0)[1].toFixed(1)+'A'+(ER-7)+' '+(ER-7)+' 0 0 1 '+retPt(NRP-1)[0].toFixed(1)+' '+retPt(NRP-1)[1].toFixed(1)+'"/>';
  g+='<path class="en sD" d="M'+(EX+ER)+' '+(EY-10)+'q22 4 40 0M'+(EX+ER)+' '+(EY+10)+'q22 -4 40 0"/>';
  g+=T('t',EX,EY-ER-16,'RETINA','middle',1);
  /* ---- line camera ---- */
  g+='<path class="wl sD" d="M'+(BSX-40)+' '+CMY+'h80v36h-80Z"/>';
  g+='<path class="wo sD" d="M'+(BSX-32)+' '+(CMY+8)+'h64"/>';
  g+=T('t',BSX+52,CMY+24,'LINE CAMERA',null,1);
  /* ---- the cross-section panel ---- */
  g+='<path class="wl sD" d="M'+PX+' '+PY+'h'+PW+'v'+PH+'h-'+PW+'Z"/>';
  g+=T('t',PX,PY-14,o.mob?'CROSS-SECTION':'ONE LINE · ONE CROSS-SECTION',null,1);
  g+='</g>';
  /* ---- the beam: laser to splitter, reference arm, sample arm, detection arm ---- */
  g+='<g id="scBeam">';
  g+='<path class="bm" d="M'+(LBX+LBW)+' '+BMY+'H'+(BSX-16)+'"/>';
  g+='<path class="bm" d="M'+BSX+' '+(BMY-16)+'V'+RMY+'"/>';
  g+='<path class="bm" d="M'+(BSX+16)+' '+BMY+'H'+(CLX-9)+'"/>';
  g+='<path class="bm dt" d="M'+BSX+' '+(BMY+16)+'V'+CMY+'"/>';
  g+='</g>';
  /* ---- the fan of light through the pupil onto the retina, and the lit points ---- */
  g+='<g id="scFan">';
  for(i=0;i<NRP;i+=3){var q=retPt(i),sy=BMY-30+60*i/(NRP-1);
    g+='<path class="fan" d="M'+(CLX+9)+' '+sy.toFixed(1)+'L'+(EX-78)+' '+EY+'L'+q[0].toFixed(1)+' '+q[1].toFixed(1)+'"/>'}
  g+='</g><g id="scPts">';
  for(i=0;i<NRP;i++){var p=retPt(i);g+='<circle class="rp" cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="2.4"/>'}
  g+='</g>';
  /* ---- camera pixels lighting with fringes ---- */
  g+='<g id="scPix">';
  for(i=0;i<16;i++)g+='<rect class="px" x="'+(BSX-32+i*4)+'" y="'+(CMY+14)+'" width="3" height="14"/>';
  g+='</g>';
  /* ---- fringes in the panel (the raw interference, before the transform) ---- */
  g+='<g id="scFr">';
  for(i=0;i<46;i++){var x=PX+10+i*(PW-20)/45,ph=Math.sin(i*.9)*.5+.5;
    g+='<path class="fr" style="opacity:'+(.25+.5*ph).toFixed(2)+'" d="M'+x.toFixed(1)+' '+(PY+12)+'V'+(PY+PH-12)+'"/>'}
  g+='</g>';
  /* ---- the real retinal cross-section, wiped in ---- */
  g+='<g id="scImg" clip-path="url(#kbClip)"><image href="retina.webp" x="'+PX+'" y="'+PY+'" width="'+PW+'" height="'+PH+'" preserveAspectRatio="xMidYMid slice"/></g>';
  g+='<path id="kbScan" class="scan" d="M'+PX+' '+(PY-4)+'V'+(PY+PH+4)+'"/>';
  /* ---- step labels, in the clear band under the panel ---- */
  var ly=SCH-6;
  g+='<g id="lb1"><text class="a" x="'+PX+'" y="'+ly+'">ONE LASER · THE WHOLE BAND, SWEPT</text></g>';
  g+='<g id="lb2"><text class="a" x="'+PX+'" y="'+ly+'">'+(o.mob?'2,000+ POINTS AT ONCE':'A LINE OF 2,000+ POINTS, CAPTURED AT ONCE')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+PX+'" y="'+ly+'">'+(o.mob?'RETINAL B-SCAN, KINEOLABS':'RETINAL B-SCAN · KINEOLABS INTERNAL PROTOTYPE')+'</text></g>';
  return g+'</svg>';
}
function scene(){return vesScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .lz, #kbTune",svg),
    beam:$$("#scBeam .bm",svg),fan:$$("#scFan .fan",svg),pts:$$("#scPts .rp",svg),pix:$$("#scPix .px",svg),
    fr:$("#scFr",svg),img:$("#scImg",svg),wipe:$("#kbWipe",svg),scan:$("#kbScan",svg),tune:$("#kbTune",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,gx0=LBX+8,gx1=LBX+LBW-8;
  var mk=document.createElementNS("http://www.w3.org/2000/svg","circle");mk.setAttribute("r","4.5");mk.setAttribute("class","mk");mk.setAttribute("cy","206");$("#scBase",svg).appendChild(mk);
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var sw=seg(p,.04,.33),line=seg(p,.36,.64),img=seg(p,.68,.95);
    /* 1. the sweep: the marker runs across the band (and back, as the laser repeats), the tuning element turns, the beam lights */
    var u=(p*3.2)%2,lam=u<1?u:2-u;lam=sw<1?lam*sw+(1-sw)*0:lam;
    mk.setAttribute("cx",(gx0+(gx1-gx0)*lam).toFixed(1));op(mk,b);
    E.tune.setAttribute("transform","translate("+(LBX+118)+" "+BMY+") rotate("+(-14+28*lam).toFixed(1)+")");
    var hue=Math.round(8+26*lam);
    E.beam.forEach(function(el,k){op(el,b*Math.min(1,sw*1.6-k*.12+(k===3?-.2:0)));el.style.stroke="hsl("+hue+",72%,58%)"});
    /* 2. the line: the fan opens through the pupil, the points along the retina light together, the camera pixels flicker with fringes */
    E.fan.forEach(function(el,k){op(el,b*Math.max(0,Math.min(1,line*1.4-k*.03))*.85);el.style.stroke="hsl("+hue+",72%,58%)"});
    E.pts.forEach(function(el,k){op(el,b*(.22+.78*Math.max(0,Math.min(1,line*1.6-.4))));el.classList.toggle("on",line>.55)});
    E.pix.forEach(function(el,k){var f=.5+.5*Math.sin(k*1.3+p*40);op(el,b*(.18+.82*line*f*(1-img*.6)))});
    op(E.fr,b*(.32+.68*line)*(1-img));
    /* 3. the image: the retinal cross-section wipes in behind a scan line */
    E.wipe.setAttribute("width",(PW*img).toFixed(1));op(E.img,b);
    E.scan.setAttribute("transform","translate("+(PW*img).toFixed(1)+" 0)");op(E.scan,b*(img>0&&img<1?1:0));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.78,.86));
  };
}
