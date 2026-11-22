/* The story scene (DB/BL): how the Glimpse Ear Platform works (glimpsediagnostics.com, Health Providers & Systems:
   "At home, families utilize the easy-to-use otoscope kit with their cell phone to obtain an eardrum image. AI technology
   provides image classification results a minute or less ... which may be sent to the healthcare professional for diagnosis.
   Healthcare provider provides a diagnosis and treatment recommendation."), as ONE continuous scene in fine line, filling
   the frame: the phone with its otoscope speculum; the eardrum image the AI reads, drawn large (annulus, pars tensa,
   handle of the malleus, umbo, cone of light); and the provider's telehealth laptop. Frame 0 is already complete.
   Step 1 (capture): the speculum's light comes on and the eardrum appears on the phone screen.
   Step 2 (classify): the image travels to the centre, a scan sweeps it and the minute ring closes.
   Step 3 (diagnose): the result travels to the provider and the plan is ticked off.
   Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=560;
var PX=58,PY=150,PW=150,PH=290;          /* phone */
var EX=384,EY=262,ERX=104,ERY=116;       /* eardrum, large */
var LX=548,LY=178,LW=180,LH=124;         /* laptop screen */
function drum(cx,cy,rx,ry,cls,detail){
  /* a right tympanic membrane, as seen through the otoscope: annulus, pars flaccida notch, malleus handle down to the umbo,
     the short process, and the cone of light running antero-inferiorly from the umbo */
  var g='';
  g+='<ellipse class="'+cls+'" cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+ry+'"/>';
  g+='<ellipse class="'+(detail?'wo':cls)+'" cx="'+cx+'" cy="'+cy+'" rx="'+(rx*.9).toFixed(1)+'" ry="'+(ry*.9).toFixed(1)+'"/>';
  var ux=cx+rx*.06,uy=cy+ry*.08,sx=cx-rx*.12,sy=cy-ry*.62;
  g+='<path class="'+cls+'" d="M'+sx.toFixed(1)+' '+sy.toFixed(1)+'L'+ux.toFixed(1)+' '+uy.toFixed(1)+'"/>';
  g+='<circle class="'+cls+'" cx="'+sx.toFixed(1)+'" cy="'+sy.toFixed(1)+'" r="'+(rx*.05).toFixed(1)+'"/>';
  g+='<circle class="'+cls+'" cx="'+ux.toFixed(1)+'" cy="'+uy.toFixed(1)+'" r="'+(rx*.035).toFixed(1)+'"/>';
  if(detail){
    /* pars flaccida folds and a few radial fibres of the pars tensa */
    g+='<path class="en" d="M'+(cx-rx*.5).toFixed(1)+' '+(cy-ry*.7).toFixed(1)+'Q'+sx.toFixed(1)+' '+(sy+ry*.12).toFixed(1)+' '+(cx+rx*.32).toFixed(1)+' '+(cy-ry*.76).toFixed(1)+'"/>';
    for(var i=0;i<18;i++){var a=(-70+i*20)*Math.PI/180;if(Math.abs(a+Math.PI/2)<.45)continue;
      g+='<path class="fb" d="M'+(ux+Math.cos(a)*rx*.46).toFixed(1)+' '+(uy+Math.sin(a)*ry*.46).toFixed(1)+'L'+(cx+Math.cos(a)*rx*.8).toFixed(1)+' '+(cy+Math.sin(a)*ry*.8).toFixed(1)+'"/>'}
  }
  return g;
}
function cone(cx,cy,rx,ry){var ux=cx+rx*.06,uy=cy+ry*.08;
  return '<path d="M'+(ux+rx*.04).toFixed(1)+' '+(uy+ry*.04).toFixed(1)+'L'+(cx+rx*.38).toFixed(1)+' '+(cy+ry*.74).toFixed(1)+'L'+(cx+rx*.62).toFixed(1)+' '+(cy+ry*.58).toFixed(1)+'Z"/>'}
function vesScene(o){
  var g='';
  var T=function(cls,x,y,txt,anchor,keep){return (o.mob&&!keep)?'':'<text class="'+cls+'"'+(anchor?' text-anchor="'+anchor+'"':'')+' x="'+x+'" y="'+y+'">'+txt+'</text>'};
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* ---- the phone with its otoscope speculum attached over the camera ---- */
  g+='<path class="wl sD" d="M'+(PX+16)+' '+PY+'h'+(PW-32)+'q16 0 16 16v'+(PH-32)+'q0 16-16 16h-'+(PW-32)+'q-16 0-16-16v-'+(PH-32)+'q0-16 16-16Z"/>';
  g+='<path class="wo sD" d="M'+(PX+10)+' '+(PY+30)+'h'+(PW-20)+'v'+(PH-64)+'h-'+(PW-20)+'Z"/>';
  g+='<path class="wo sD" d="M'+(PX+PW/2-16)+' '+(PY+15)+'h32"/>';
  g+='<circle class="wo sD" cx="'+(PX+PW/2)+'" cy="'+(PY+PH-17)+'" r="8"/>';
  /* clip-on otoscope: a collar over the top edge and the speculum cone pointing up and out */
  g+='<path class="wl sD" d="M'+(PX+PW-58)+' '+(PY-4)+'h46v-26h-46Z"/>';
  g+='<path class="wl sD" d="M'+(PX+PW-50)+' '+(PY-30)+'L'+(PX+PW-30)+' '+(PY-104)+'h10L'+(PX+PW-20)+' '+(PY-30)+'"/>';
  g+='<path class="en sD" d="M'+(PX+PW-44)+' '+(PY-52)+'h22M'+(PX+PW-40)+' '+(PY-74)+'h15"/>';
  g+=T('t',PX,PY+PH+34,'OTOSCOPE KIT + PHONE',null,1);
  g+=T('t',PX,PY+PH+54,'AT HOME');
  /* ---- the eardrum, large: what the AI reads ---- */
  g+=drum(EX,EY,ERX,ERY,'wl sD',1);
  g+='<circle class="wo sD" cx="'+EX+'" cy="'+EY+'" r="146"/>';
  g+=T('t',EX,EY-172,'EARDRUM IMAGE · AI CLASSIFICATION','middle');
  g+=T('t',EX,EY+184,'RESULTS IN A MINUTE OR LESS','middle');
  /* ---- the provider's telehealth laptop ---- */
  g+='<path class="wl sD" d="M'+LX+' '+LY+'h'+LW+'v'+LH+'h-'+LW+'Z"/>';
  g+='<path class="wl sD" d="M'+(LX-18)+' '+(LY+LH+16)+'h'+(LW+36)+'l-12-16h-'+(LW+12)+'Z"/>';
  g+=drum(LX+44,LY+LH/2,26,30,'wo sD',0);
  g+='<path class="en sD" d="M'+(LX+86)+' '+(LY+40)+'h70M'+(LX+86)+' '+(LY+56)+'h56M'+(LX+86)+' '+(LY+72)+'h64M'+(LX+86)+' '+(LY+88)+'h40"/>';
  g+=T('t',LX+LW/2,LY-26,'HEALTHCARE PROVIDER','middle',1);
  g+=T('t',LX+LW/2,LY+LH+48,'DIAGNOSIS · TREATMENT','middle');
  /* ---- the links between them ---- */
  g+='<path class="am gt" d="M'+(PX+PW+12)+' '+(PY+PH*.42)+'C'+(PX+PW+60)+' '+(PY+PH*.42)+' '+(EX-176)+' '+(EY)+' '+(EX-150)+' '+EY+'"/>';
  g+='<path class="am gt" d="M'+(EX+150)+' '+EY+'C'+(EX+176)+' '+EY+' '+(LX-30)+' '+(LY+LH*.6)+' '+(LX-10)+' '+(LY+LH*.6)+'"/>';
  g+='</g>';
  /* ---- step 1: the speculum's light and the image on the phone ---- */
  g+='<g id="scLit"><path class="beam" d="M'+(PX+PW-30)+' '+(PY-104)+'L'+(PX+PW-46)+' '+(PY-134)+'L'+(PX+PW-4)+' '+(PY-134)+'Z"/></g>';
  g+='<g id="scShot" class="md ph">'+drum(PX+PW/2,PY+PH*.46,46,52,'cd',0)+'<g class="cl0">'+cone(PX+PW/2,PY+PH*.46,46,52)+'</g></g>';
  /* ---- step 2: the travelling image, the cone of light, the scan and the minute ring ---- */
  g+='<g id="scFly" class="md fl"><rect x="-15" y="-17" width="30" height="34"/><ellipse class="cd" cx="0" cy="0" rx="9" ry="11"/></g>';
  g+='<g id="scCone" class="md cn">'+cone(EX,EY,ERX,ERY)+'</g>';
  g+='<g id="scScan"><path class="scan" d="M0 0L0 -'+(ERY+6)+'"/></g>';
  g+='<circle id="scRing" class="ring" cx="'+EX+'" cy="'+EY+'" r="146" transform="rotate(-90 '+EX+' '+EY+')"/>';
  /* ---- step 3: the result to the provider, and the tick ---- */
  g+='<g id="scRes" class="md fl"><rect x="-15" y="-17" width="30" height="34"/><path class="cd" d="M-7 0l5 5 9-10"/></g>';
  g+='<path id="scTick" class="tick" d="M'+(LX+LW-46)+' '+(LY+LH-34)+'l12 12 22-26"/>';
  /* ---- step labels, in the clear band under the scene ---- */
  var ly=SCH-8;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">AN EARDRUM IMAGE, TAKEN AT HOME</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">CLASSIFIED BY AI IN A MINUTE OR LESS</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">SENT ON FOR DIAGNOSIS AND TREATMENT</text></g>';
  return g+'</svg>';
}
function scene(){return vesScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .gt",svg),lit:$("#scLit",svg),shot:$("#scShot",svg),fly:$("#scFly",svg),
    cone:$("#scCone",svg),scan:$("#scScan",svg),ring:$("#scRing",svg),res:$("#scRes",svg),tick:$("#scTick",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var RL=2*Math.PI*146,TL=E.tick.getTotalLength?E.tick.getTotalLength():60;
  E.ring.style.strokeDasharray=RL+" "+RL;E.tick.style.strokeDasharray=TL+" "+TL;
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function bez(t,a,b,c,d){var u=1-t;return u*u*u*a+3*u*u*t*b+3*u*t*t*c+t*t*t*d}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var cap=seg(p,.06,.3),cls=seg(p,.34,.64),dx=seg(p,.68,.94);
    /* 1. capture */
    op(E.lit,b*Math.sin(Math.PI*Math.min(1,cap*1.4))*.9);
    op(E.shot,b*Math.min(1,cap*1.6));E.shot.classList.toggle("on",cap>.6&&cls<.2);
    /* 2. the image flies to the centre, then the scan sweeps and the minute ring closes */
    var f=Math.min(1,cls*2.2),x0=PX+PW+12,y0=PY+PH*.42;
    var fx=bez(f,x0,PX+PW+60,EX-176,EX-150),fy=bez(f,y0,y0,EY,EY);
    E.fly.setAttribute("transform","translate("+fx.toFixed(1)+" "+fy.toFixed(1)+")");
    op(E.fly,b*(f>0&&f<1?Math.min(1,f*8,(1-f)*8):0));E.fly.classList.add("on");
    var sc=seg(cls,.4,1);
    E.scan.setAttribute("transform","translate("+EX+" "+EY+") rotate("+(sc*360).toFixed(1)+")");
    op(E.scan,b*(sc>0&&sc<1?Math.min(1,sc*10,(1-sc)*10):0));
    E.ring.style.strokeDashoffset=(RL*(1-sc)).toFixed(1);op(E.ring,b*(1-dx*.6));
    op(E.cone,b*Math.min(1,sc*1.5));E.cone.classList.toggle("on",sc>.5);
    /* 3. the result goes to the provider */
    var r=Math.min(1,dx*2),rx0=EX+150;
    var qx=bez(r,rx0,EX+176,LX-30,LX-10),qy=bez(r,EY,EY,LY+LH*.6,LY+LH*.6);
    E.res.setAttribute("transform","translate("+qx.toFixed(1)+" "+qy.toFixed(1)+")");
    op(E.res,b*(r>0&&r<1?Math.min(1,r*8,(1-r)*8):0));E.res.classList.add("on");
    var tk=seg(dx,.5,.9);E.tick.style.strokeDashoffset=(TL*(1-tk)).toFixed(1);op(E.tick,b*(tk>0?1:0));
    op(E.l1,b*seg(p,.08,.18)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
