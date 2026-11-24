/* The story scene (DB/BL): IOS-1002's mechanism as ImmunOs describes it (immunostherapeutics.com Pipeline and Science,
   release of 2025-10-20): tumours engage inhibitory LILRB and KIR receptors on immune cells; IOS-1002, an HLA-based Fc
   fusion protein, blocks LILRB1, LILRB2 and KIR3DL1 at once and, through its Fc part, engages Fcγ receptors (CD64) to
   activate macrophages, so innate and adaptive immune cells attack the tumour. Drawn as ONE fine-line scene filling the
   frame: an immune cell (left) with its receptors facing a tumour cell (right).
   Step 1 (brake): inhibitory contacts draw in between the tumour's HLA ligands and the receptors.
   Step 2 (block): IOS-1002 molecules dock on each receptor and the inhibitory contacts let go.
   Step 3 (attack): the immune cell lights up in the brand orange, reaches round the tumour cell, and the tumour cell
   fades and breaks apart. Driven by scrubbed progress. No dash draws on non-scaling strokes (DR4; nssfix.js inlined). */
var IC={x:250,y:292,r:150},TC={x:612,y:292,r:92};
var REC=(function(){var o=[];for(var i=0;i<6;i++){var a=(-50+i*20)*Math.PI/180,c=Math.cos(a),s=Math.sin(a);
  var bx=IC.x+IC.r*c,by=IC.y+IC.r*s,tx=IC.x+(IC.r+26)*c,ty=IC.y+(IC.r+26)*s;
  var ta=Math.PI-a*.9,lx=TC.x+TC.r*Math.cos(ta),ly=TC.y+TC.r*Math.sin(ta),qx=TC.x+(TC.r+10)*Math.cos(ta),qy=TC.y+(TC.r+10)*Math.sin(ta);
  o.push({a:a,c:c,s:s,bx:bx,by:by,tx:tx,ty:ty,lx:lx,ly:ly,qx:qx,qy:qy})}return o})();
function f1(n){return n.toFixed(1)}
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'84 96 680 452':'84 92 690 452')+'" aria-hidden="true">';
  /* immune cell: membrane and kidney-shaped nucleus */
  g+='<path class="wl sD" d="M'+(IC.x+IC.r)+' '+IC.y+'A'+IC.r+' '+IC.r+' 0 1 1 '+(IC.x-IC.r)+' '+IC.y+'A'+IC.r+' '+IC.r+' 0 1 1 '+(IC.x+IC.r)+' '+IC.y+'"/>';
  g+='<path class="wo sD" d="M196 250C214 222 262 220 280 246C292 264 286 280 300 296C316 318 300 352 268 356C232 362 206 344 194 318C184 296 184 268 196 250Z"/>';
  g+='<g id="scAct"><path class="act" d="M'+(IC.x+IC.r)+' '+IC.y+'A'+IC.r+' '+IC.r+' 0 1 1 '+(IC.x-IC.r)+' '+IC.y+'A'+IC.r+' '+IC.r+' 0 1 1 '+(IC.x+IC.r)+' '+IC.y+'"/>'+
    '<path class="act pp" d="M362 192C440 150 540 160 600 196"/><path class="act pp" d="M362 392C440 434 540 424 600 388"/></g>';
  /* receptors on the membrane, facing the tumour */
  REC.forEach(function(r){var nx=-r.s,ny=r.c;
    g+='<path class="wl sD" d="M'+f1(r.bx)+' '+f1(r.by)+'L'+f1(r.tx)+' '+f1(r.ty)+'M'+f1(r.tx+nx*7)+' '+f1(r.ty+ny*7)+'L'+f1(r.tx-nx*7)+' '+f1(r.ty-ny*7)+'"/>'});
  /* tumour cell with its HLA ligands */
  g+='<g id="scTu"><path class="wl sD tu" d="M'+(TC.x+TC.r)+' '+TC.y+'A'+TC.r+' '+TC.r+' 0 1 1 '+(TC.x-TC.r)+' '+TC.y+'A'+TC.r+' '+TC.r+' 0 1 1 '+(TC.x+TC.r)+' '+TC.y+'"/>'+
    '<path class="wo sD tu" d="M590 270C604 256 630 258 640 276C650 296 636 318 614 318C594 318 580 300 590 270Z"/>';
  REC.forEach(function(r){g+='<path class="wl sD tu" d="M'+f1(r.lx)+' '+f1(r.ly)+'L'+f1(r.qx)+' '+f1(r.qy)+'"/><circle class="lg" cx="'+f1(r.qx)+'" cy="'+f1(r.qy)+'" r="3.4"/>'});
  g+='</g>';
  /* inhibitory contacts between ligand and receptor */
  g+='<g id="scLk">';REC.forEach(function(r){g+='<path class="lk" d="M'+f1(r.qx-4*Math.cos(Math.PI-r.a*.9))+' '+f1(r.qy-4*Math.sin(Math.PI-r.a*.9))+'L'+f1(r.tx+r.c*4)+' '+f1(r.ty+r.s*4)+'"/>'});g+='</g>';
  /* IOS-1002 molecules: an Fc stem with two HLA arms, docking on each receptor */
  g+='<g id="scIo">';REC.forEach(function(r,i){g+='<g class="io" data-i="'+i+'"><path d="M0 -4L0 -18M0 -4L-8 6M0 -4L8 6"/><circle cx="-8" cy="6" r="3"/><circle cx="8" cy="6" r="3"/></g>'});g+='</g>';
  /* tumour fragments, for the attack */
  g+='<g id="scFr">';for(var k=0;k<14;k++)g+='<circle class="fr" r="2.4" cx="0" cy="0"/>';g+='</g>';
  if(!mob){g+='<g id="lMx"><text class="t" x="120" y="112">IMMUNE CELL</text><text class="t" x="642" y="176">TUMOUR CELL</text></g>'}
  else{g+='<g id="lMx"><text class="t" x="150" y="122">IMMUNE CELL</text><text class="t" x="642" y="176">TUMOUR</text></g>'}
  var ly=mob?535:522,lx=mob?100:70;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'RECEPTORS ENGAGED':'INHIBITORY RECEPTORS ENGAGED')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'IOS-1002 BLOCKS THEM':'LILRB1, LILRB2 AND KIR3DL1 BLOCKED')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'IMMUNE CELLS ATTACK':'IMMUNE CELLS ACTIVATED AGAINST THE TUMOUR')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),lk:dl("#scLk .lk"),act:dl("#scAct .act"),io:$$("#scIo .io",svg),fr:$$("#scFr .fr",svg),tu:$("#scTu",svg),lg:$$(".lg",svg),
    lMx:$("#lMx",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var N=REC.length,lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    E.lg.forEach(function(el){op(el,b)});
    /* step 1: the inhibitory contacts draw in; step 2: they let go as IOS-1002 docks */
    E.lk.forEach(function(a,i){var t=i/N,d=sm(seg(p,.04+.1*t,.12+.1*t)),gone=sm(seg(p,.42+.12*t,.48+.12*t));
      a[0].style.strokeDashoffset=(a[1]*(1-d)).toFixed(1);op(a[0],b*(d>0?1:0)*(1-gone))});
    E.io.forEach(function(el,i){var r=REC[i],t=i/N,a=sm(seg(p,.36+.12*t,.46+.12*t));
      var dx=r.tx+r.c*22,dy=r.ty+r.s*22,ang=Math.atan2(r.s,r.c)*180/Math.PI+90;
      el.setAttribute("transform","translate("+f1(dx+70*(1-a))+" "+f1(dy-40*(1-a))+") rotate("+f1(ang+120*(1-a))+")");op(el,b*a)});
    /* step 3: the immune cell lights up and reaches round the tumour, which fades and breaks apart */
    var at=sm(seg(p,.7,.86));
    E.act.forEach(function(a,i){var d=sm(seg(p,.68+i*.04,.84+i*.04));a[0].style.strokeDashoffset=(a[1]*(1-d)).toFixed(1);op(a[0],b*(d>0?1:0))});
    if(E.tu){E.tu.style.opacity=(1-.72*at).toFixed(3);E.tu.setAttribute("transform","translate("+f1(TC.x*(1-(1-.1*at)))+" "+f1(TC.y*(1-(1-.1*at)))+") scale("+(1-.1*at).toFixed(4)+")")}
    E.fr.forEach(function(el,i){var an=i/14*Math.PI*2,u=sm(seg(p,.74+(i%5)*.03,.96)),R=TC.r*.9+u*30;
      el.setAttribute("cx",f1(TC.x+Math.cos(an)*R));el.setAttribute("cy",f1(TC.y+Math.sin(an)*R*.9));op(el,b*Math.min(u*4,1)*(1-u*.7))});
    op(E.lMx,b);
    op(E.l1,b*seg(p,.04,.12)*(1-seg(p,.28,.34)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.78,.86));
  };
}
