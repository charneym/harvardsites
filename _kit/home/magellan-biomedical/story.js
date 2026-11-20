/* the story scene (BL/BY/DB): ONE engraved longitudinal section through an artery, kept on screen for all four steps:
   layered vessel walls above and below, and a chronic total occlusion (CTO) filling the lumen at the right.
   Step 1 a conventional guidewire, steered from a 2D image, buckles at the occlusion's cap. Step 2 the CathPilot sheath
   advances and its self-expandable frame deploys. Step 3 the tendons across the frame aim the inner catheter tip at the
   cap, and the tip is tracked in 3D (the axis glyph). Step 4 the guidewire crosses the occlusion. Sources: TMU research news
   (Oct 2024) and TMU Magazine; Zhou et al., IEEE TBME 2023 (phantom, ex vivo CTO crossing, porcine aorta); the device
   layout follows Magellan's own CathPilot render. Schematic; not to scale. Driven by the scrubbed story progress. */
var AV={CY:290,TW:178,BW:402,C0:520,C1:690};
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',A=AV;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><clipPath id="lmc"><rect x="0" y="'+A.TW+'" width="800" height="'+(A.BW-A.TW)+'"/></clipPath></defs>';
  g+='<g id="scBase">';
  /* vessel walls: intima, media lamellae, adventitia; a gentle undulation */
  var wl='';[[A.TW,-1],[A.BW,1]].forEach(function(w){for(var k=0;k<5;k++){var y=w[0]+w[1]*(k*7+(k>2?6:0)),d='';
    for(var x=20;x<=780;x+=20){d+=(x===20?'M':'L')+x+' '+f(y+Math.sin(x/90+k*.6+(w[1]>0?2:0))*1.6)}wl+=d}});
  g+='<path class="vw sD" d="'+wl+'"/>';
  /* adventitial hatching */
  var ht='';for(var x=30;x<780;x+=13){ht+='M'+x+' '+f(A.TW-40)+'l7 -10M'+x+' '+f(A.BW+40)+'l7 10'}g+='<path class="vh sD" d="'+ht+'"/>';
  /* the occlusion: fibrous caps and a stippled, calcified core */
  var cto='M'+A.C0+' '+A.TW+'C'+(A.C0-16)+' 230 '+(A.C0-16)+' 350 '+A.C0+' '+A.BW+'L'+A.C1+' '+A.BW+'C'+(A.C1+14)+' 350 '+(A.C1+14)+' 230 '+A.C1+' '+A.TW+'Z';
  g+='<path class="cto sD" d="'+cto+'"/>';
  var cap='M'+(A.C0+10)+' '+(A.TW+6)+'C'+(A.C0-4)+' 232 '+(A.C0-4)+' 348 '+(A.C0+10)+' '+(A.BW-6);g+='<path class="ctc sD" d="'+cap+'"/>';
  var sd=7,st='';function R(){sd=(sd*16807)%2147483647;return (sd-1)/2147483646}
  for(var i=0;i<150;i++){var px=A.C0+18+R()*(A.C1-A.C0-26),py=A.TW+8+R()*(A.BW-A.TW-16);st+='<circle class="stp" cx="'+f(px)+'" cy="'+f(py)+'" r="'+f(.9+R()*1.6)+'"/>'}
  g+='<g class="stg">'+st+'</g>';
  var cal='';for(i=0;i<5;i++){var cx=A.C0+40+R()*110,cy=A.TW+30+R()*160;cal+='M'+f(cx)+' '+f(cy)+'l'+f(8+R()*10)+' '+f(-4+R()*8)+'l'+f(-3+R()*6)+' '+f(6+R()*6)+'z'}g+='<path class="cal sD" d="'+cal+'"/>';
  g+='<text class="t" x="'+(mob?24:40)+'" y="'+(A.TW-62)+'">ARTERY · LONGITUDINAL SECTION</text><text class="t" x="'+(mob?776:760)+'" y="'+(A.TW-62)+'" text-anchor="end">SCHEMATIC</text>';
  g+='</g>';
  g+='<g id="scMove" clip-path="url(#lmc)">';
  /* step 1: a conventional guidewire buckles against the cap */
  g+='<path id="cw" class="gw0" d="M0 300C160 300 330 296 470 292C505 290 512 270 506 246C500 222 478 214 468 232C458 250 480 262 498 250"/>';
  /* the CathPilot: sheath, frame petals, tendons, inner catheter, guidewire (geometry set per frame) */
  g+='<g id="dev"><path id="cth" class="cth"/><path id="cthi" class="cthi"/><path id="ptl" class="ptl"/><path id="tdn" class="tdn"/><path id="shO" class="sho"/><path id="shI" class="shi"/>'+
     '<path id="gw" class="gw"/><g id="trk"><circle class="trk" r="15"/><path class="tra" d="M0 0L24 0M0 0L0 -24M0 0L-12 12"/></g></g>';
  g+='</g>';
  var L=mob?24:40,Rr=mob?776:760,y=mob?548:540,yl=mob?528:524;
  g+='<g id="lb1"><text class="a" x="'+L+'" y="'+y+'">'+(mob?'WIRE BUCKLES AT THE CAP':'CONVENTIONAL WIRE BUCKLES AT THE CAP')+'</text><path class="ldr" d="M'+(L+60)+' '+yl+'L470 '+(A.BW-6)+'"/></g>';
  g+='<g id="lb2"><text class="a" x="'+L+'" y="'+y+'">'+(mob?'SELF-EXPANDABLE FRAME':'SELF-EXPANDABLE FRAME DEPLOYS')+'</text><path class="ldr" d="M'+(L+60)+' '+yl+'L300 '+(A.BW-14)+'"/></g>';
  g+='<g id="lb3"><text class="a" x="'+Rr+'" y="'+y+'" text-anchor="end">'+(mob?'TENDON STEERING · 3D':'TENDON STEERING · 3D TRACKING')+'</text><path class="ldr" d="M'+(Rr-80)+' '+yl+'L420 '+(A.CY+30)+'"/></g>';
  g+='<g id="lb4"><text class="a" x="'+Rr+'" y="'+y+'" text-anchor="end">'+(mob?'OCCLUSION CROSSED':'CHRONIC TOTAL OCCLUSION CROSSED')+'</text><path class="ldr" d="M'+(Rr-80)+' '+yl+'L640 '+(A.CY+10)+'"/></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),stg:$("#scBase .stg",svg),mv:$("#scMove",svg),cw:dl("#cw")[0],dev:$("#dev",svg),
    cth:$("#cth",svg),cthi:$("#cthi",svg),ptl:$("#ptl",svg),tdn:$("#tdn",svg),shO:$("#shO",svg),shI:$("#shI",svg),gw:$("#gw",svg),trk:$("#trk",svg),
    l:[$("#lb1",svg),$("#lb2",svg),$("#lb3",svg),$("#lb4",svg)]};
  var A=AV,lastB=-1,f=function(n){return n.toFixed(1)};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.stg,b);op(E.mv,b)}
    var s1=seg(p,0,.08),s2=seg(p,.24,.44),s3=seg(p,.5,.68),s4=seg(p,.76,.94);
    /* step 1 wire draws in, then fades as the device arrives */
    E.cw[0].style.strokeDashoffset=(E.cw[1]*(1-seg(p,.02,.16))).toFixed(1);op(E.cw[0],1-seg(p,.22,.3));
    /* step 2: sheath advances, frame expands */
    var adv=seg(p,.2,.34),e=s2,cy=A.CY,mx=-60+250*adv,H=20+80*e,ax=mx+70+90*e;
    op(E.dev,adv>0?1:0);
    E.shO.setAttribute("d","M-20 "+(cy-26)+"L"+f(mx)+" "+(cy-26)+"M-20 "+(cy+26)+"L"+f(mx)+" "+(cy+26)+"M"+f(mx)+" "+(cy-26)+"L"+f(mx)+" "+(cy+26));
    E.shI.setAttribute("d","M-20 "+cy+"L"+f(mx)+" "+cy);
    var P='',T='',th=(14-18*s3)*Math.PI/180,bx=mx+26,tl=ax-bx+8,tx=bx+tl*Math.cos(th),ty=cy+tl*Math.sin(th);
    [[-1,1],[1,1],[-1,.48],[1,.48]].forEach(function(q){var s=q[0],h=H*q[1],by=cy+s*10,apx=ax-(1-q[1])*18,apy=cy+s*h;
      P+='M'+f(mx-4)+' '+f(by)+'C'+f(mx+30)+' '+f(cy+s*h*.35)+' '+f(apx-50)+' '+f(cy+s*h*1.12)+' '+f(apx)+' '+f(apy)+
         'C'+f(apx-30)+' '+f(cy+s*h*.72)+' '+f(mx+50)+' '+f(cy+s*h*.18)+' '+f(mx-4)+' '+f(by-s*4);
      T+='M'+f(apx)+' '+f(apy)+'L'+f(tx)+' '+f(ty)+'M'+f(apx)+' '+f(apy)+'L'+f(bx+18)+' '+f(cy)});
    E.ptl.setAttribute("d",P);E.tdn.setAttribute("d",T);op(E.ptl,adv);op(E.tdn,e*(.5+.5*s3));E.tdn.classList.toggle("hot",s3>.3&&s4<.6);
    var c='M-20 '+cy+'L'+f(bx)+' '+cy+'Q'+f(bx+tl*.55)+' '+cy+' '+f(tx)+' '+f(ty);E.cth.setAttribute("d",c);E.cthi.setAttribute("d",c);
    /* step 3: tracking glyph at the tip */
    E.trk.setAttribute("transform","translate("+f(tx)+" "+f(ty)+")");op(E.trk,s3*(1-.6*s4));
    /* step 4: the guidewire leaves the tip and crosses the occlusion */
    var dx=Math.cos(th),dy=Math.sin(th),gx=tx+dx*40,gy=ty+dy*40,ex=A.C0+(A.C1-A.C0+90)*s4,
      gd='M'+f(tx)+' '+f(ty)+'L'+f(gx)+' '+f(gy)+'Q'+f(A.C0-30)+' '+f(cy-6)+' '+f(Math.max(gx+1,Math.min(ex,A.C0)))+' '+f(cy-4)+(ex>A.C0?'L'+f(ex)+' '+f(cy-2):'');
    E.gw.setAttribute("d",gd);op(E.gw,s3>.98||s4>0?seg(p,.66,.72):0);
    op(E.l[0],b*s1*(1-seg(p,.18,.24)));op(E.l[1],b*s2*(1-seg(p,.46,.5)));op(E.l[2],b*s3*(1-seg(p,.71,.76)));op(E.l[3],b*s4);
  };
}
