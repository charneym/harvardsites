/* The story scene (BL/BY/DB): how one of ArchieMD's haptic trainers teaches needle chest decompression, drawn as ONE
   continuous fine-line section through the chest wall (chest surface at the top): skin, subcutaneous fat, two ribs with the
   intercostal muscle between them, the neurovascular bundle under the upper rib, the pleura and the lung. To the right, the
   force the stylus feeds back, plotted against depth on the same scale. Step 1 (see): landmarks, the entry above the lower
   rib, clear of the bundle. Step 2 (feel): the needle advances, the force trace rises in each layer and drops at each
   give, then the loss of resistance as it enters the pleural space; air escapes. Step 3 (assess): the checks are ticked. */
var SCW=760,SCH=520,LX0=130,LX1=540,NXp=405,SK=130,SKb=150,FTb=205,MUb=265,PP=282,VP=294,TIP0=120,TIP1=290;
var PX0=590,PX1=744;
function amForce(y){ /* force feedback (0..1) at needle-tip depth y: rises in a layer, drops at each give */
  if(y<SK)return 0;
  if(y<SKb)return .1+.65*Math.pow((y-SK)/(SKb-SK),1.6);
  if(y<FTb)return .16+.05*Math.sin((y-SKb)*.18);
  if(y<MUb)return .24+.34*((y-FTb)/(MUb-FTb));
  if(y<PP)return .58+.37*Math.pow((y-MUb)/(PP-MUb),1.4);
  return .05;}
function amTrace(yEnd){var d='',y,first=true;for(y=SK;y<=yEnd;y+=1.5){var f=amForce(y),x=PX0+f*(PX1-PX0-6);d+=(first?'M':'L')+x.toFixed(1)+' '+y.toFixed(1);first=false}return d}
var AMA=(function(){var s=11,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<400&&a.length<46;i++){var x=LX0+14+R()*(LX1-LX0-28),y=338+R()*160,r=6+R()*7;
    if(a.some(function(b){return Math.hypot(b[0]-x,b[1]-y)<b[2]+r+3}))continue;a.push([x,y,r])}return a})();
var AMF=(function(){var s=7,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<300&&a.length<22;i++){var x=LX0+16+R()*(LX1-LX0-32),y=SKb+12+R()*(FTb-SKb-24),r=9+R()*7;
    if(Math.abs(x-NXp)<16)continue;if(x>420&&y>176)continue;
    if(a.some(function(b){return Math.hypot(b[0]-x,(b[1]-y)*1.6)<b[2]+r+2}))continue;a.push([x,y,r])}return a})();
function amScene(o){
  var g='',i,x;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* skin, with a gentle surface */
  var sk='',sk2='';for(x=LX0;x<=LX1;x+=6){sk+=(x==LX0?'M':'L')+x+' '+(SK+Math.sin(x*.045)*1.6).toFixed(1);sk2+=(x==LX0?'M':'L')+x+' '+(SKb+Math.sin(x*.05+1)*1.2).toFixed(1)}
  g+='<path class="skn sD" d="'+sk+'"/><path class="lyr sD" d="'+sk2+'"/>';
  for(x=LX0+8;x<LX1;x+=14)g+='<path class="tex sD" d="M'+x+' '+(SK+6)+'l3 8"/>';
  /* fat lobules */
  AMF.forEach(function(f){g+='<ellipse class="fat sD" cx="'+f[0].toFixed(1)+'" cy="'+f[1].toFixed(1)+'" rx="'+f[2].toFixed(1)+'" ry="'+(f[2]*.62).toFixed(1)+'"/>'});
  g+='<path class="lyr sD" d="M'+LX0+' '+FTb+'H'+LX1+'"/>';
  /* ribs in section, the intercostal muscle between them */
  [232,468].forEach(function(cx){g+='<ellipse class="rib sD" cx="'+cx+'" cy="235" rx="46" ry="27"/><ellipse class="rib2 sD" cx="'+cx+'" cy="235" rx="34" ry="17"/>'});
  for(x=284;x<=404;x+=9)g+='<path class="mus sD" d="M'+x+' 211L'+(x+14)+' 259"/>';
  for(x=LX0+2;x<=176;x+=9)g+='<path class="mus sD" d="M'+x+' 213L'+(x+12)+' 257"/>';
  g+='<path class="mus sD" d="M522 213L534 257"/>';
  g+='<path class="lyr sD" d="M'+LX0+' '+MUb+'H'+LX1+'"/>';
  /* neurovascular bundle under the upper rib */
  g+='<circle class="nv sD" cx="268" cy="272" r="5"/><circle class="na sD" cx="281" cy="274" r="4"/><circle class="nn sD" cx="292" cy="276" r="3"/>';
  /* pleura, then lung */
  g+='<path class="pl sD" d="M'+LX0+' '+PP+'H'+LX1+'"/><path class="pl2 sD" d="M'+LX0+' '+VP+'H'+LX1+'"/>';
  AMA.forEach(function(a){g+='<circle class="alv sD" cx="'+a[0].toFixed(1)+'" cy="'+a[1].toFixed(1)+'" r="'+a[2].toFixed(1)+'"/>'});
  g+='<path class="brn sD" d="M200 520C210 470 232 430 268 404M232 444C214 420 196 408 172 400M268 404C300 392 330 396 352 410M470 520C462 470 446 436 418 414M446 452C470 432 494 424 520 422"/>';
  /* layer names in the left margin */
  [["SKIN",SK+14],["FAT",182],["MUSCLE",240],["PLEURA",PP+8],["LUNG",372]].forEach(function(l){g+='<text class="t ly" x="'+(LX0-14)+'" y="'+l[1]+'" text-anchor="end">'+l[0]+'</text>'});
  /* force panel: depth runs down on the same scale as the section */
  [SKb,FTb,MUb,PP].forEach(function(y){g+='<path class="gd sD" d="M'+LX1+' '+y+'H'+PX1+'"/>'});
  g+='<path class="ax sD" d="M'+PX0+' '+(SK-6)+'V'+(VP+16)+'"/><path class="ax sD" d="M'+PX0+' '+(SK-6)+'H'+PX1+'"/>';
  g+='<text class="t" x="'+PX0+'" y="'+(SK-18)+'">FORCE FELT</text>';
  g+='</g>';
  /* the stylus and needle (moves as one) */
  g+='<defs><linearGradient id="amFd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".12" stop-color="#fff" stop-opacity="1"/><stop offset="1" stop-color="#fff"/></linearGradient><mask id="amMk" maskUnits="userSpaceOnUse" x="0" y="-10" width="'+SCW+'" height="'+(SCH+10)+'"><rect x="0" y="-10" width="'+SCW+'" height="'+(SCH+10)+'" fill="url(#amFd)"/></mask></defs>';
  g+='<g mask="url(#amMk)"><g id="scNd"><path class="ndl" d="M'+NXp+' 0V-172"/><path class="hub" d="M'+(NXp-5)+' -172h10v-14h-10z"/>'+
     '<path class="sty" d="M'+(NXp-9)+' -186L'+(NXp-13)+' -320M'+(NXp+9)+' -186L'+(NXp+13)+' -320M'+(NXp-9)+' -186H'+(NXp+9)+'"/>'+
     '<path class="sty2" d="M'+(NXp-11)+' -214h22M'+(NXp-11.5)+' -222h23M'+(NXp-12)+' -230h24"/></g></g>';
  g+='<g id="scAir">';for(i=0;i<6;i++)g+='<circle class="air" r="'+(2+i%3)+'"/>';g+='</g>';
  g+='<path class="trc" id="scTr" d="M'+PX0+' '+SK+'"/>';
  g+='<circle class="tip" id="scTip" r="5" cx="'+NXp+'" cy="'+TIP1+'"/>';
  g+='<g id="lb1"><path class="tg" d="M'+NXp+' '+(SK-16)+'V'+(TIP1+4)+'"/><text class="a" x="'+(NXp-18)+'" y="62" text-anchor="end">ENTRY · 2ND INTERCOSTAL SPACE</text>'+
     '<text class="a" x="428" y="196">ABOVE THE RIB</text><text x="282" y="322" text-anchor="middle">VESSELS · NERVE, BELOW THE RIB</text></g>';
  g+='<g id="lb2"><text class="a" x="'+PX1+'" y="'+(PP+32)+'" text-anchor="end">LOSS OF RESISTANCE</text></g>';
  g+='<g id="lb3"><text class="a" x="'+(PX0-22)+'" y="388">✓ LANDMARK FOUND</text><text class="a" x="'+(PX0-22)+'" y="420">✓ ABOVE THE RIB</text><text class="a" x="'+(PX0-22)+'" y="452">✓ PLEURA FELT</text></g>';
  return g+'</svg>';
}
function scene(){return amScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),nd:$("#scNd",svg),air:$$("#scAir circle",svg),tr:$("#scTr",svg),tip:$("#scTip",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,lastY=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var adv=seg(p,.36,.64),ease=adv<.5?2*adv*adv:1-Math.pow(-2*adv+2,2)/2;
    var ty=TIP0+(TIP1-TIP0)*ease;
    E.nd.setAttribute("transform","translate(0 "+ty.toFixed(1)+")");op(E.nd,b);
    if(Math.abs(ty-lastY)>.4){lastY=ty;E.tr.setAttribute("d",ty>SK?amTrace(ty):"M"+PX0+" "+SK)}
    op(E.tr,b*(ty>SK+1?1:0));
    var popd=seg(p,.62,.8);
    E.air.forEach(function(c,i){var q=(popd*1.6+i/6)%1,y=TIP1-q*150;c.setAttribute("cx",(NXp+(i%2?7:-7)+Math.sin(q*9+i)*2).toFixed(1));c.setAttribute("cy",y.toFixed(1));op(c,b*(popd>0&&popd<1?Math.sin(q*Math.PI)*.9:0))});
    op(E.tip,b*seg(p,.78,.86));
    op(E.l1,b*seg(p,.06,.12)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.6,.64)*(1-seg(p,.9,.96)));op(E.l3,b*seg(p,.74,.82));
  };
}
