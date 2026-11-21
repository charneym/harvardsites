/* The story scene (BL/BY/DB): ONE engraved scene kept on screen for all four steps. A knee drawn in fine line (femoral
   condyles above, tibial plateau below) with the genicular artery entering from the left and branching around the joint,
   where a tuft of abnormal neovessels (glowing teal: the angiographic "blush") and ingrowing sensory nerves sit in the
   synovium. Step 2 a catheter advances along the artery. Step 3 SakuraBead microspheres lodge in the neovessels and the
   blush fades. Step 4 the beads resorb and flow along the artery is restored. Sources: crannmed.com (The Science, The
   Procedure, Resorbable Embolisation Technology; first-in-human report). Schematic, not to scale. Driven by the scrubbed
   story progress. */
var CS={B:[318,262],T:[528,274]};
function csRng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
/* a twig: short wavy branches from (x,y) heading at angle a, recursing twice; collects tips for the beads */
function csTwig(x,y,a,len,depth,R,out,tips){
  var x2=x+Math.cos(a)*len,y2=y+Math.sin(a)*len,mx=(x+x2)/2+(R()-.5)*len*.35,my=(y+y2)/2+(R()-.5)*len*.35;
  out.push('M'+x.toFixed(1)+' '+y.toFixed(1)+'Q'+mx.toFixed(1)+' '+my.toFixed(1)+' '+x2.toFixed(1)+' '+y2.toFixed(1));
  if(depth>0){csTwig(x2,y2,a-.45-R()*.3,len*.68,depth-1,R,out,tips);csTwig(x2,y2,a+.4+R()*.3,len*.64,depth-1,R,out,tips)}
  else tips.push([x2,y2]);
}
function csTuft(){
  var R=csRng(11),out=[],tips=[],T=CS.T;
  /* origins on the two genicular branches, twigs reaching into the joint line */
  [[430,214,.55],[468,200,.95],[512,196,1.35],[560,204,1.75],[604,214,2.2],[438,330,-.6],[480,344,-1.0],[530,350,-1.45],[578,342,-1.85],[618,326,-2.3]].forEach(function(o){
    csTwig(o[0],o[1],o[2]+(R()-.5)*.2,34+R()*12,2,R,out,tips)});
  return {d:out.join(''),tips:tips};
}
function csNerves(){
  var R=csRng(5),s='';
  [[600,120,1.95],[470,108,1.25],[650,440,-2.0],[440,452,-1.2]].forEach(function(o){
    var x=o[0],y=o[1],a=o[2],d='M'+x+' '+y;
    for(var i=0;i<9;i++){a+=(R()-.5)*.5;var nx=x+Math.cos(a)*15,ny=y+Math.sin(a)*15;d+='Q'+(x+nx)/2+' '+((y+ny)/2+(i%2?5:-5))+' '+nx.toFixed(1)+' '+ny.toFixed(1);x=nx;y=ny}
    s+='<path class="nv sD" d="'+d+'"/>'});
  return s;
}
var CS_ART="M-20 352C80 340 190 300 318 262";
var CS_UP="M318 262C360 232 400 206 452 196C520 182 590 180 640 170C700 158 740 146 800 136";
var CS_LO="M318 262C362 300 410 336 462 344C530 356 600 356 650 372C706 388 744 400 800 414";
function scene(){
  var mob=MOBILE(),g='',tf=csTuft();CS.tips=tf.tips;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="csBl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#22b5b0" stop-opacity=".42"/><stop offset=".55" stop-color="#22b5b0" stop-opacity=".12"/><stop offset="1" stop-color="#22b5b0" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="csBd" cx=".38" cy=".34" r=".7"><stop offset="0" stop-color="#e9fbf9"/><stop offset=".45" stop-color="#7fd3cf"/><stop offset="1" stop-color="#19a7a7" stop-opacity=".55"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* the knee: femoral condyles above the joint line, tibial plateau below (engraved, quiet) */
  g+='<path class="bn sD" d="M430 0C432 60 420 120 404 160C388 196 396 226 430 236C462 246 494 236 514 226C534 236 566 246 598 236C632 226 640 196 624 160C608 120 596 60 598 0"/>';
  g+='<path class="bn2 sD" d="M452 40C450 90 444 130 436 160M576 40C578 90 584 130 592 160"/>';
  g+='<path class="bn sD" d="M398 560C404 480 410 410 404 340C400 318 412 308 440 306C480 304 548 304 588 306C616 308 628 318 624 340C618 410 624 480 630 560"/>';
  g+='<path class="bn2 sD" d="M420 330C470 322 558 322 606 330"/>';
  /* the artery and its genicular branches */
  g+='<path class="ar sD" d="'+CS_ART+'"/><path class="ar sD" d="'+CS_UP+'"/><path class="ar sD" d="'+CS_LO+'"/>';
  g+='</g>';
  g+='<g id="scMove">';
  g+='<circle id="csBlush" cx="'+CS.T[0]+'" cy="'+CS.T[1]+'" r="190" fill="url(#csBl)"/>';
  g+='<g id="csNv">'+csNerves()+'</g>';
  g+='<path id="csTf" class="tf" d="'+tf.d+'"/>';
  /* restored flow: a travelling dash along the artery and branches */
  g+='<g id="csFlow"><path class="fl" d="'+CS_ART+'"/><path class="fl" d="'+CS_UP+'"/><path class="fl" d="'+CS_LO+'"/></g>';
  /* the catheter, advancing along the artery to the branch point */
  g+='<path id="csCat" class="ct" d="M-20 352C80 340 190 300 306 268"/><circle id="csTip" class="ctt" r="4.5"/>';
  g+='<g id="csBeads">'+tf.tips.map(function(t,i){return '<circle class="bd" cx="'+t[0].toFixed(1)+'" cy="'+t[1].toFixed(1)+'" r="5.2"/>'}).join('')+'</g>';
  g+='</g>';
  /* labels, one set per step, centred below the knee so nothing crosses the figure (CY) */
  var BY=mob?520:520,BY2=mob?546:542;
  function lab(id,cls,a,b){return '<g id="'+id+'"><text class="a '+cls+'" x="400" y="'+BY+'" text-anchor="middle">'+a+'</text>'+(mob?'':'<text class="t" x="400" y="'+BY2+'" text-anchor="middle">'+b+'</text>')+'</g>'}
  g+=lab("lb1","tl","NEOVESSELS · INFLAMMATION","NEW SENSORY NERVES GROW IN ALONGSIDE THEM");
  g+=lab("lb2","","CATHETER IN THE GENICULAR ARTERY","GUIDED UNDER X-RAY TO THE VASCULAR BLUSH");
  g+=lab("lb3","tl","SAKURABEAD MICROSPHERES","THE NEOVESSELS ARE BLOCKED · THE LOOP IS INTERRUPTED");
  g+=lab("lb4","","BEADS RESORBED · FLOW RESTORED","NOTHING IS LEFT BEHIND IN THE KNEE");
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),nv:dl("#csNv .sD"),mv:$("#scMove",svg),bl:$("#csBlush",svg),tf:$("#csTf",svg),nvg:$("#csNv",svg),
    fl:$("#csFlow",svg),fls:$$("#csFlow .fl",svg),cat:$("#csCat",svg),tip:$("#csTip",svg),bds:$$("#csBeads .bd",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var CL=E.cat.getTotalLength(),TL=E.tf.getTotalLength?E.tf.getTotalLength():0,lastB=-1;
  E.cat.style.strokeDasharray=CL+" "+CL;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.mv,b)}
    var grow=seg(p,.0,.16),cat=seg(p,.27,.45),pause=seg(p,.52,.68),res=seg(p,.78,.92),flow=seg(p,.84,.96);
    /* the inflamed tuft and its blush; the nerves grow in with it, and both fade once the flow is paused */
    op(E.tf,.25+.75*grow);
    E.tf.style.strokeOpacity=(1-.62*pause).toFixed(3);
    op(E.bl,(.35+.65*grow)*(1-.85*pause));
    draw(E.nv,seg(p,.03,.2));op(E.nvg,1-.85*pause);
    /* the catheter advances, then withdraws once the beads are delivered */
    E.cat.style.strokeDashoffset=(CL*(1-cat)).toFixed(1);
    var pt=E.cat.getPointAtLength(Math.max(.01,CL*cat));
    E.tip.setAttribute("cx",pt.x.toFixed(1));E.tip.setAttribute("cy",pt.y.toFixed(1));
    var out=seg(p,.7,.8);op(E.cat,(cat>0?1:0)*(1-out));op(E.tip,(cat>0?1:0)*(1-out));
    /* the beads lodge one after another in the neovessels, then resorb */
    var n=E.bds.length;
    E.bds.forEach(function(c,i){var a=seg(p,.5+i*.12/n,.56+i*.12/n);c.style.opacity=(a*(1-res)).toFixed(3);
      c.setAttribute("r",(5.2*(.4+.6*a)*(1-.75*res)).toFixed(2))});
    /* restored flow: a travelling dash along the vessels */
    op(E.fl,flow);var off=(-p*900).toFixed(1);E.fls.forEach(function(f){f.style.strokeDashoffset=off});
    op(E.l1,b*seg(p,.02,.08)*(1-seg(p,.2,.25)));
    op(E.l2,b*seg(p,.27,.33)*(1-seg(p,.45,.5)));
    op(E.l3,b*seg(p,.52,.58)*(1-seg(p,.7,.75)));
    op(E.l4,b*seg(p,.78,.84));
  };
}
