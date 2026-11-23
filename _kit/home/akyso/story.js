/* The story scene (DB/BL): Akyso's own mechanism, from akyso.com: the iSTEP implant is "inserted subcutaneously in the
   office through a small incision" under local anesthesia; the release rate is set by "the ratio of the control release
   polymers"; "the iSTEP-N 10 cc implant demonstrated near-linear release of API over 12 months" (in vitro); it "is
   Bioabsorbable and does NOT need to be removed". Drawn as ONE continuous fine-line scene that fills the frame: a section
   through skin, dermis, subcutaneous fat and muscle, with the implant lying in the fat, and below it the release curve.
   Frame 0 is already complete.
   Step 1 (place): a small incision in the skin and the insertion track down to the implant in the subcutaneous layer.
   Step 2 (release): drug (logo mint) leaves the implant steadily; the near-linear 12-month curve draws to its end.
   Step 3 (absorb): the polymer implant is absorbed and fades away; nothing is left to remove.
   Everything is driven by the scrubbed progress. Labels keep >= 8px clear of every stroke and dot (DR). */
var SCW=760,SCH=560;
var X0=156,X1=716;
function wave(y,a,f,ph){var d="M"+X0+" "+y,x;for(x=X0+8;x<=X1;x+=8)d+="L"+x+" "+(y+a*Math.sin((x+ph)/f)).toFixed(1);return d}
var SKIN=wave(110,2.2,22,0),EPI=wave(128,1.6,18,40),DERM=wave(200,3,34,10),FASC=wave(392,1.5,40,0);
var IMP={x:300,y:272,w:300,h:44};
var LBZ=[410,236,490,262];/* the IMPLANT label's clear zone */
var LOB=[];(function(){var r,c,x,y,rr,s=7;function rnd(){s=(s*9301+49297)%233280;return s/233280}
  for(r=0;r<5;r++)for(c=0;c<15;c++){x=X0+22+c*38+(r%2?19:0)+(rnd()-.5)*8;y=222+r*36+(rnd()-.5)*6;rr=13+rnd()*5;
    if(x+rr>X1-4||x-rr<X0+4)continue;if(x+rr>IMP.x-18&&x-rr<IMP.x+IMP.w+18&&y+rr>IMP.y-36&&y-rr<IMP.y+IMP.h+16)continue;
    if(y+rr>384)continue;LOB.push([x,y,rr])}})();
var MUS=[];(function(){for(var x=X0+6;x<X1-10;x+=14)MUS.push("M"+x+" 402l12 26")})();
var DOTS=[];(function(){var s=3;function rnd(){s=(s*9301+49297)%233280;return s/233280}
  for(var i=0;i<22;i++)DOTS.push([IMP.x+22+rnd()*(IMP.w-44),IMP.y+10+rnd()*(IMP.h-20)])})();
/* drug leaving the implant: start on the surface, end in the fat, never through a label's clear zone */
var REL=[];(function(){var s=11,n=0;function rnd(){s=(s*9301+49297)%233280;return s/233280}
  while(REL.length<34&&n++<500){var sx=IMP.x+20+rnd()*(IMP.w-40),top=rnd()<.42,sy=top?IMP.y:IMP.y+IMP.h,
    ex=sx+(rnd()-.5)*150,ey=top?IMP.y-14-rnd()*50:IMP.y+IMP.h+12+rnd()*58;
    if(ex<X0+14||ex>X1-14||ey<214||ey>380)continue;
    if(ex>LBZ[0]-12&&ex<LBZ[2]+12&&ey<LBZ[3]+12)continue;
    if(top&&sx>LBZ[0]-14&&sx<LBZ[2]+14)continue;
    REL.push([sx,sy,ex,ey,rnd()])}})();
/* the in-vitro release curve, near-linear over 12 months */
var CB=532,CT=470,CX0=X0+2,CX1=X1-6;
var CURVE=(function(){var d="",i;for(i=0;i<=24;i++){var t=i/24,x=CX0+(CX1-CX0)*t,y=CB-(CB-CT)*(t*.9+.1*(1-Math.pow(1-t,2)));d+=(i?"L":"M")+x.toFixed(1)+" "+y.toFixed(1)}return d})();
function implantPath(){var x=IMP.x,y=IMP.y,w=IMP.w,h=IMP.h,r=h/2;return "M"+(x+r)+" "+y+"H"+(x+w-r)+"A"+r+" "+r+" 0 0 1 "+(x+w-r)+" "+(y+h)+"H"+(x+r)+"A"+r+" "+r+" 0 0 1 "+(x+r)+" "+y+"Z"}
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'150 46 576 518':'40 40 690 520')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="gRel"><stop offset="0" stop-color="#abd6cc" stop-opacity=".34"/><stop offset="1" stop-color="#abd6cc" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+SKIN+'"/><path class="wo sD" d="'+EPI+'"/><path class="wmd sD" d="'+DERM+'"/><path class="wmd sD" d="'+FASC+'"/>';
  LOB.forEach(function(l){g+='<circle class="wo sD" cx="'+l[0].toFixed(1)+'" cy="'+l[1].toFixed(1)+'" r="'+l[2].toFixed(1)+'"/>'});
  MUS.forEach(function(d){g+='<path class="wo sD" d="'+d+'"/>'});
  g+='<path class="wo sD" d="M'+CX0+' 466V'+CB+'H'+CX1+'"/><path class="wo sD" d="'+CURVE+'"/>';
  g+='</g>';
  /* the incision */
  g+='<g id="scCut"><path class="cut" d="M252 100l10 14l10-14"/><path class="am" d="M262 122C262 200 276 262 296 288"/></g>';
  g+='<circle class="halo" id="hRel" cx="'+(IMP.x+IMP.w/2)+'" cy="'+(IMP.y+IMP.h/2)+'" r="150" fill="url(#gRel)"/>';
  /* the implant and the drug it carries */
  g+='<g id="scImp"><path class="imp" d="'+implantPath()+'"/>';
  DOTS.forEach(function(d){g+='<circle class="pd" r="2.4" cx="'+d[0].toFixed(1)+'" cy="'+d[1].toFixed(1)+'"/>'});g+='</g>';
  g+='<g id="scRel">';REL.forEach(function(r){g+='<circle class="rd" r="2.2" cx="'+r[0].toFixed(1)+'" cy="'+r[1].toFixed(1)+'"/>'});g+='</g>';
  g+='<path class="crv" id="scCrv" d="'+CURVE+'"/>';
  /* labels */
  g+='<text class="t" id="lImp" x="450" y="256" text-anchor="middle">IMPLANT</text>';
  if(!mob){
    g+='<text class="t" x="140" y="114" text-anchor="end">SKIN</text>';
    g+='<text class="t" x="140" y="290" text-anchor="end">SUBCUTANEOUS</text><text class="t" x="140" y="305" text-anchor="end">LAYER</text>';
    g+='<text class="t" x="140" y="420" text-anchor="end">MUSCLE</text>';
    g+='<text class="t" x="140" y="504" text-anchor="end">RELEASE</text><text class="t" x="140" y="519" text-anchor="end">IN VITRO</text>';
  }
  g+='<text class="t" x="'+CX0+'" y="552">MONTH 0</text><text class="t" x="'+CX1+'" y="552" text-anchor="end">12 MONTHS</text>';
  var ly=74,lx=mob?160:X0;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PLACED IN AN OFFICE VISIT':'PLACED UNDER THE SKIN IN AN OFFICE PROCEDURE')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'NEAR-LINEAR FOR 12 MONTHS':'NEAR-LINEAR RELEASE OVER 12 MONTHS, IN VITRO')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'ABSORBED · NO REMOVAL':'BIOABSORBABLE · NOTHING TO REMOVE')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),crv:dl("#scCrv")[0],cut:$("#scCut",svg),imp:$("#scImp",svg),rel:$$("#scRel .rd",svg),pd:$$("#scImp .pd",svg),
    hR:$("#hRel",svg),lImp:$("#lImp",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,cx=IMP.x+IMP.w/2,cy=IMP.y+IMP.h/2;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.3),s2=seg(p,.36,.64),s3=seg(p,.7,.94);
    /* 1. the incision opens and the implant slides in from the left (frame 0: it already lies in place) */
    op(E.cut,b*seg(p,.04,.12)*(1-seg(p,.3,.38)));
    var k=1-.9*sm(s3);
    E.imp.setAttribute("transform","translate("+cx+" "+cy+") scale("+k.toFixed(3)+" "+(1-.75*sm(s3)).toFixed(3)+") translate("+(-cx)+" "+(-cy)+")");
    op(E.imp,b*(1-sm((s3-.3)/.7)));
    op(E.lImp,b*(1-seg(p,.7,.78)));
    /* 2. drug leaves the implant steadily; the release curve draws to its true end point */
    E.rel.forEach(function(el,i){var r=REL[i],f=sm((s2*1.25-r[4]*.25));var x=r[0]+(r[2]-r[0])*f,y=r[1]+(r[3]-r[1])*f;
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));op(el,b*(f>0?Math.min(1,f*5):0)*(1-.7*sm(s3)))});
    E.pd.forEach(function(el){op(el,b*(1-.75*s2))});
    op(E.hR,b*s2*(1-s3));
    if(E.crv){var v=sm(s2);E.crv[0].style.strokeDashoffset=(E.crv[1]*(1-v)).toFixed(1);op(E.crv[0],b)}
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.78,.86));
  };
}
