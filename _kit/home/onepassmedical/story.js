/* The story scene (DB/BL): how InstaFan takes five biopsies in one pass (onepassmedical.com/instafan "How does InstaFan
   work?" and brochure LBL-01-001: tumour located by EUS, central FNB needle first, the four peripheral needles follow,
   five specimens taken out), as ONE continuous fine-line scene filling the frame: the echoendoscope in the GI lumen with
   its curvilinear ultrasound probe, the wall beneath it, the pancreas and a tumour inside it.
   Step 1 (locate): the ultrasound sector sweeps out from the probe and finds the tumour.
   Step 2 (central): the sheath leaves the accessory channel through the wall and the 22G central needle runs into the tumour.
   Step 3 (fan out): the four pre-bent 25G needles follow, fanning to five sites; five specimens light up.
   Every element is driven by the scrubbed story progress; every needle ends at its real tip. */
var SCW=760,SCH=560;
var EX=262,EY=146;                                   /* the accessory channel exit, under the scope tip */
var TX=492,TY=372,TRX=112,TRY=88;                   /* the tumour */
var UX=.713,UY=.701;                                 /* the pass direction */
var C0X=EX+UX*70,C0Y=EY+UY*70;                       /* the sheath stops just past the wall */
var NDL=[[0,262],[-8,236],[8,240],[-16,214],[16,222]];  /* [angle off the pass axis, length] : central first */
function ndTip(n){var a=n[0]*Math.PI/180,c=Math.cos(a),s=Math.sin(a),dx=UX*c-UY*s,dy=UX*s+UY*c;return [C0X+dx*n[1],C0Y+dy*n[1]]}
var TUM="M"+(TX-TRX)+" "+(TY-6)+"C"+(TX-TRX+4)+" "+(TY-62)+" "+(TX-50)+" "+(TY-TRY)+" "+(TX+6)+" "+(TY-TRY+2)+"C"+(TX+64)+" "+(TY-TRY+4)+" "+(TX+TRX)+" "+(TY-50)+" "+(TX+TRX-4)+" "+(TY+4)+
  "C"+(TX+TRX-8)+" "+(TY+58)+" "+(TX+58)+" "+(TY+TRY)+" "+(TX-4)+" "+(TY+TRY-2)+"C"+(TX-70)+" "+(TY+TRY-4)+" "+(TX-TRX-4)+" "+(TY+52)+" "+(TX-TRX)+" "+(TY-6)+"Z";
function storyScene(o){
  var g='',i;
  var T=function(cls,x,y,txt,anchor,keep){return (o.mob&&!keep)?'':'<text class="'+cls+'"'+(anchor?' text-anchor="'+anchor+'"':'')+' x="'+x+'" y="'+y+'">'+txt+'</text>'};
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="sccl"><path d="M0 '+(o.mob?186:188)+'H'+SCW+'V'+SCH+'H0Z"/></clipPath></defs>';
  g+='<g id="scBase">';
  /* the echoendoscope: insertion tube, rounded distal tip, the curvilinear probe on its underside */
  g+='<path class="wl sD" d="M0 104H262C290 104 308 114 308 128C308 140 300 146 290 146"/>';
  g+='<path class="wl sD" d="M0 140H236"/>';
  g+='<path class="pr sD" d="M236 140C248 152 276 154 290 146"/>';
  g+='<path class="wo sD" d="M0 122H226M244 122H286"/>';
  /* the GI wall beneath it (mucosa and the outer layer) */
  g+='<path class="wl sD" d="M0 166C60 160 120 172 190 164S320 158 400 166S560 172 640 162S720 160 760 166"/>';
  g+='<path class="wo sD" d="M0 186C70 182 140 192 210 186S350 180 430 188S590 192 660 184S730 182 760 186"/>';
  /* the pancreas, and the tumour inside it */
  g+='<path class="wl sD" d="M118 330C150 290 236 282 318 290C392 296 420 262 498 258C590 254 676 272 726 312C756 338 748 390 712 420C664 462 600 470 556 486C500 506 420 500 360 470C300 440 240 446 180 430C120 414 92 366 118 330Z"/>';
  g+='<path class="wo sD" d="M150 366C230 368 300 384 360 392M600 444C640 436 680 418 704 392"/>';
  g+='<path id="tum" class="tu sD" d="'+TUM+'"/>';
  g+=T('t',24,86,'ECHOENDOSCOPE','start',1);
  g+=T('t',748,210,'GI WALL','end');
  g+=T('t',TX+TRX+16,TY+4,'TUMOUR','start',1);
  g+=T('t',740,512,'PANCREAS','end');
  g+='</g>';
  /* the ultrasound sector from the probe (clipped below the wall) */
  g+='<g id="scUS" clip-path="url(#sccl)">';
  var ox=274,oy=146,a0=24*Math.PI/180,a1=112*Math.PI/180;
  g+='<path class="us sU" d="M'+(ox+Math.cos(a0)*30).toFixed(1)+' '+(oy+Math.sin(a0)*30).toFixed(1)+'L'+(ox+Math.cos(a0)*370).toFixed(1)+' '+(oy+Math.sin(a0)*370).toFixed(1)+'"/>';
  g+='<path class="us sU" d="M'+(ox+Math.cos(a1)*30).toFixed(1)+' '+(oy+Math.sin(a1)*30).toFixed(1)+'L'+(ox+Math.cos(a1)*370).toFixed(1)+' '+(oy+Math.sin(a1)*370).toFixed(1)+'"/>';
  [110,190,270,350].forEach(function(r){g+='<path class="usa sU" d="M'+(ox+Math.cos(a0)*r).toFixed(1)+' '+(oy+Math.sin(a0)*r).toFixed(1)+'A'+r+' '+r+' 0 0 1 '+(ox+Math.cos(a1)*r).toFixed(1)+' '+(oy+Math.sin(a1)*r).toFixed(1)+'"/>'});
  g+='</g>';
  /* the sheath, then the needles: central first, the four peripheral needles after */
  g+='<path id="scCath" class="ct" d="M'+EX+' '+EY+'L'+C0X.toFixed(1)+' '+C0Y.toFixed(1)+'"/>';
  g+='<g id="scN">';
  NDL.forEach(function(n,k){var t=ndTip(n);g+='<path class="nd'+(k?'':' c')+'" data-k="'+k+'" d="M'+C0X.toFixed(1)+' '+C0Y.toFixed(1)+'L'+t[0].toFixed(1)+' '+t[1].toFixed(1)+'"/>'});
  g+='</g><g id="scSp">';
  NDL.forEach(function(n,k){var t=ndTip(n);g+='<circle class="sp" data-k="'+k+'" cx="'+t[0].toFixed(1)+'" cy="'+t[1].toFixed(1)+'" r="'+(k?4.5:5.5)+'"/>'});
  g+='</g>';
  var ly=SCH-10;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">'+(o.mob?'EUS FINDS THE LESION':'THE ULTRASOUND PROBE FINDS THE LESION')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">'+(o.mob?'22G CENTRAL NEEDLE':'22G FNB CENTRAL NEEDLE, DEPLOYED FIRST')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">'+(o.mob?'FIVE SITES, ONE PASS':'FIVE SPECIMENS FROM FIVE SITES, ONE PASS')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),us:dl("#scUS .sU"),fade:$$("#scBase text",svg),cath:dl("#scCath"),nd:dl("#scN .nd"),
    sp:$$("#scSp .sp",svg),tum:$("#tum",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var loc=seg(p,.04,.3),cen=seg(p,.36,.62),fan=seg(p,.68,.94);
    /* 1. the sector sweeps out from the probe and the tumour lights */
    draw(E.us,b*Math.max(.35,loc));E.us.forEach(function(a){op(a[0],b*(.45+.55*loc))});
    if(E.tum)E.tum.style.fillOpacity=(.35+.65*loc).toFixed(3);
    /* 2. the sheath leaves the channel, the central needle runs in */
    draw(E.cath,b*Math.min(1,cen*2.2));
    draw([E.nd[0]],b*Math.max(0,Math.min(1,(cen-.3)/.7)));
    op(E.sp[0],b*seg(cen,.85,1));
    /* 3. the four pre-bent needles follow and fan out to their sites */
    E.nd.slice(1).forEach(function(a,k){draw([a],b*Math.max(0,Math.min(1,(fan-k*.06)/.7)))});
    E.sp.slice(1).forEach(function(el,k){op(el,b*Math.max(0,Math.min(1,(fan-.7-k*.06)/.12)))});
    op(E.l1,b*seg(p,.08,.16)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
