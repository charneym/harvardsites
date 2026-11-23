/* The story scene (DB/BL/BY): why pedicle screws loosen and what Integr8 changes, as ONE continuous fine-line picture
   that fills the frame (allumin8.com home: "Problem", "Vertebral bone is unique", "Why do screws loosen?"; BONEZONE,
   22 Nov 2025). A side view of a pedicle screw driven through the pedicle into the vertebral body, the cancellous bone
   drawn as its trabecular lattice. Frame 0 is already a complete picture.
   Step 1 (loosening): the smooth screw toggles; a gap opens around the shank.
   Step 2 (the bone): the lattice comes forward: thin struts, large pores.
   Step 3 (Integr8): the porous Gaussian topography appears between the threads of the proximal (pedicle) region.
   Step 4 (ingrowth): new bone grows from the lattice into the pores.
   Labels sit outside the bone, >=8px from any stroke (DR3); the lattice is cleared around them. No stroke is
   non-scaling, so dash draws finish in every browser (DR4). Driven by the scrubbed progress. */
var SCW=760,SCH=560,AY=280;
var HX=108,HR=30,SX0=150,STIP=700,CR=19,TR=40,PITCH=30;
function bHalf(x){ /* half-height of the bone at x: the pedicle (a waisted band) softly joined to the oval vertebral body */
  var ped=96-10*Math.exp(-Math.pow((x-300)/70,2));
  var ex=(x-572)/166,ell=ex*ex<1?204*Math.sqrt(1-ex*ex):0;
  var k=.09;return Math.log(Math.exp(k*ped)*(x<600?1:Math.exp(-(x-600)*.08))+Math.exp(k*ell))/k}
var BX0=188,BX1=736;
function boneOutline(){var top=[],bot=[],x;
  for(x=BX0;x<=BX1;x+=4){var hh=bHalf(x);if(hh<1)break;top.push([x,AY-hh]);bot.push([x,AY+hh])}
  var s="M"+BX0+" "+(AY-bHalf(BX0)+10).toFixed(1)+"Q"+BX0+" "+(AY-bHalf(BX0)).toFixed(1)+" "+(BX0+10)+" "+(AY-bHalf(BX0)).toFixed(1);
  top.forEach(function(p,i){if(i>2)s+="L"+p[0]+" "+p[1].toFixed(1)});
  var e=top[top.length-1];s+="Q"+(e[0]+6)+" "+AY+" "+bot[bot.length-1][0]+" "+bot[bot.length-1][1].toFixed(1);
  for(var i=bot.length-2;i>2;i--)s+="L"+bot[i][0]+" "+bot[i][1].toFixed(1);
  s+="L"+(BX0+10)+" "+(AY+bHalf(BX0)).toFixed(1)+"Q"+BX0+" "+(AY+bHalf(BX0)).toFixed(1)+" "+BX0+" "+(AY+bHalf(BX0)-10).toFixed(1)+"Z";
  return s}
function rng(seed){return function(){seed=(seed*16807)%2147483647;return (seed-1)/2147483646}}
/* the trabecular lattice: jittered nodes inside the bone, joined to near neighbours with slightly curved struts */
function lattice(clear){var R=rng(11),N=[],x,y,G=20,cols={},s="",near=[];
  function gs(x){return x<470?15:20}
  for(x=BX0+10;x<BX1-6;x+=gs(x)){var gx=gs(x);for(y=AY-214;y<AY+214;y+=gx){var px=x+(R()-.5)*gx*.7,py=y+(R()-.5)*gx*.7;
    if(Math.abs(py-AY)>bHalf(px)-8||px<BX0+8)continue;
    if(px<STIP+26&&Math.abs(py-AY)<TR+7)continue;
    if(clear.some(function(b){return px>b[0]-10&&px<b[2]+10&&py>b[1]-10&&py<b[3]+10}))continue;
    N.push([px,py])}}
  N.forEach(function(a,i){var d=[];N.forEach(function(b,j){if(j<=i)return;var dx=b[0]-a[0],dy=b[1]-a[1],q=dx*dx+dy*dy;var gl=gs(a[0]);if(q<gl*gl*2.1)d.push([q,b])});
    d.sort(function(u,v){return u[0]-v[0]});
    d.slice(0,3).forEach(function(e,k){if(k==2&&R()<.3)return;var b=e[1];
      var mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2;
      if(mx<STIP+26&&Math.abs(my-AY)<TR+5)return;if(Math.abs(a[1]-AY)<TR+16&&Math.abs(b[1]-AY)<TR+16&&(a[1]-AY)*(b[1]-AY)<0)return;
      var bend=(R()-.5)*8,nx=-(b[1]-a[1]),ny=b[0]-a[0],nl=Math.hypot(nx,ny)||1;
      s+="M"+a[0].toFixed(1)+" "+a[1].toFixed(1)+"Q"+(mx+nx/nl*bend).toFixed(1)+" "+(my+ny/nl*bend).toFixed(1)+" "+b[0].toFixed(1)+" "+b[1].toFixed(1)});
    if(a[0]>BX0+14&&a[0]<STIP-10&&Math.abs(a[1]-AY)<TR+22)near.push(a)});
  return {d:s,nodes:N,near:near}}
/* the screw in side view: a polyaxial ball head, a neck, then the threaded shank to the tip */
function screwPath(){var x0=SX0+28,xe=STIP-46;
  function side(sg,off){var d="M"+(HX+HR-4)+" "+(AY+sg*10)+"L"+SX0+" "+(AY+sg*12)+"L"+(SX0+10)+" "+(AY+sg*CR),c;
    for(c=x0+PITCH*.5+off;c+PITCH*.42<=xe;c+=PITCH){var tr=TR-(c>xe-PITCH*1.2?8:0);
      d+="L"+(c-PITCH*.42).toFixed(1)+" "+(AY+sg*CR)+"L"+(c-PITCH*.07).toFixed(1)+" "+(AY+sg*tr)+"L"+(c+PITCH*.07).toFixed(1)+" "+(AY+sg*tr)+"L"+(c+PITCH*.42).toFixed(1)+" "+(AY+sg*CR)}
    return d+"L"+xe+" "+(AY+sg*CR)+"Q"+(STIP-18)+" "+(AY+sg*CR*.7).toFixed(1)+" "+STIP+" "+AY}
  return {top:side(-1,0),bot:side(1,PITCH*.5)}}
function poreCells(x0,x1){var R=rng(5),s="",x,y,row=0;
  for(y=AY-CR+5;y<=AY+CR-4;y+=6.6,row++)for(x=x0+(row%2?3.8:0);x<x1;x+=7.6){var r=2.1+R()*.7;
    s+="M"+(x+r).toFixed(1)+" "+y.toFixed(1)+"A"+r.toFixed(1)+" "+r.toFixed(1)+" 0 1 0 "+(x-r).toFixed(1)+" "+y.toFixed(1)+"A"+r.toFixed(1)+" "+r.toFixed(1)+" 0 1 0 "+(x+r).toFixed(1)+" "+y.toFixed(1)}
  return s}
var PX0=SX0+34,PX1=430;
function storyScene(o){
  var g='',mob=o.mob,i;
  /* label boxes the lattice keeps clear of: [x0,y0,x1,y1] in scene units */
  var CLR=mob?[]:[[560,22,738,52]];
  var L=lattice(CLR),S=screwPath();
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase"><path class="bo sD" d="'+boneOutline()+'"/></g>';
  g+='<path class="lat" id="lat" d="'+L.d+'"/>';
  /* step 1: the gap that opens around a loosening screw, and its toggle */
  g+='<path class="halo" id="halo" d="M'+(SX0+14)+' '+(AY-TR-9)+'H'+(STIP-36)+'L'+(STIP+12)+' '+AY+'L'+(STIP-36)+' '+(AY+TR+9)+'H'+(SX0+14)+'"/>';
  g+='<g id="tog"><path class="tg" d="M'+(HX-14)+' '+(AY-62)+'A64 64 0 0 0 '+(HX-14)+' '+(AY+62)+'"/><path class="tgh" d="M'+(HX-20)+' '+(AY-54)+'L'+(HX-14)+' '+(AY-62)+'L'+(HX-5)+' '+(AY-57)+'"/><path class="tgh" d="M'+(HX-20)+' '+(AY+54)+'L'+(HX-14)+' '+(AY+62)+'L'+(HX-5)+' '+(AY+57)+'"/></g>';
  /* the screw */
  g+='<g id="scr"><circle class="sw" cx="'+HX+'" cy="'+AY+'" r="'+HR+'"/><circle class="sw2" cx="'+HX+'" cy="'+AY+'" r="'+(HR-9)+'"/>';
  g+='<path class="sw" d="'+S.top+'"/><path class="sw" d="'+S.bot+'"/>';
  g+='<path class="pore" id="pore" d="'+poreCells(PX0,PX1)+'"/>';
  g+='<path class="tex" id="tex" d="'+(function(){var t="",x;for(x=SX0+28;x<PX1;x+=PITCH){t+="M"+(x+PITCH*.47)+" "+(AY-TR+4)+"v3M"+(x+PITCH*.47+PITCH*.5)+" "+(AY+TR-7)+"v3"}return t})()+'"/>';
  g+='</g>';
  /* step 3: the proximal region bracket below the bone */
    g+='<path class="brk" id="brk" d="M'+PX0+' '+(AY+TR+7)+'V'+(AY+TR+12)+'H'+PX1+'V'+(AY+TR+7)+'"/>';
  /* step 4: new bone grows from the lattice into the pores */
  var R=rng(3),gd="",row=0,x,y;
  for(y=AY-CR+5;y<=AY+CR-4;y+=6.6,row++)for(x=PX0+(row%2?3.8:0);x<PX1;x+=7.6){if(R()<.3)continue;gd+='<circle class="gd" data-u="'+((x-PX0)/(PX1-PX0)).toFixed(3)+'" cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="1.7"/>'}
  g+='<g id="gds">'+gd+'</g>';
  /* labels, in open space outside the bone */
  if(!mob){
    g+='<g id="lHd"><text class="t" x="'+(HX-HR-12)+'" y="'+(AY+HR+64)+'">SCREW HEAD</text></g>';
    g+='<g id="lPd"><text class="t" x="'+(BX0+4)+'" y="'+(AY-bHalf(BX0)-22)+'">PEDICLE</text></g>';
    g+='<g id="lVb"><text class="t" x="738" y="42" text-anchor="end">VERTEBRAL BODY</text></g>';
    g+='<g id="lPr"><text class="t a2" x="24" y="'+(AY-bHalf(BX0)-58)+'">PROXIMAL PEDICLE REGION</text></g>';
  }else{
    g+='<g id="lHd"></g><g id="lPd"><text class="t" x="'+(BX0+4)+'" y="'+(AY-bHalf(BX0)-24)+'">PEDICLE</text></g><g id="lVb"></g><g id="lPr"></g>';
  }
  var ly=SCH-6,lx=20;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THE SCREW TOGGLES':'UNDER LOAD THE SCREW TOGGLES AND A GAP OPENS')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THIN STRUTS, LARGE PORES':'VERTEBRAL BONE · THIN STRUTS, LARGE PORES')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'POROUS BETWEEN THREADS':'GAUSSIAN BONE-PATTERN TOPOGRAPHY BETWEEN THE THREADS')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'BONE GROWS IN':'ROOM FOR ON-GROWTH AND IN-GROWTH')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),lat:$("#lat",svg),halo:$("#halo",svg),tog:$("#tog",svg),scr:$("#scr",svg),pore:$("#pore",svg),tex:$("#tex",svg),
    brk:$("#brk",svg),gds:$("#gds",svg),
    lHd:$("#lHd",svg),lPd:$("#lPd",svg),lVb:$("#lVb",svg),lPr:$("#lPr",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var GD=$$(".gd",svg).map(function(c){return [c,+c.getAttribute("data-u")]});
  var BL=E.brk.getTotalLength();E.brk.style.strokeDasharray=BL+" "+BL;
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    op(E.scr,b);op(E.lHd,b);op(E.lPd,b);op(E.lVb,b);
    /* 1. toggle and gap */
    var s1=seg(p,.04,.12)*(1-seg(p,.24,.3));
    var rk=Math.sin(seg(p,.04,.24)*Math.PI*3)*2.2*s1;
    E.scr.setAttribute("transform","rotate("+rk.toFixed(2)+" "+HX+" "+AY+")");
    op(E.halo,b*s1);op(E.tog,b*s1);
    /* 2. the lattice comes forward (always present, quiet) */
    var lv=.32+.68*seg(p,.28,.38)*(1-.45*seg(p,.5,.58));
    op(E.lat,b*lv);
    /* 3. pores between the proximal threads, the region bracket */
    var s3=seg(p,.53,.63);
    op(E.pore,b*s3);op(E.tex,b*s3);
    E.brk.style.strokeDashoffset=(BL*(1-seg(p,.56,.66))).toFixed(1);op(E.brk,b);
    op(E.lPr,b*seg(p,.62,.68));
    /* 4. in-growth: strands draw from the lattice into the pores, then bone fills them */
    var s4=seg(p,.78,.9);
        op(E.gds,b);GD.forEach(function(d){op(d[0],seg(s4,d[1]*.75,d[1]*.75+.25))});
    op(E.l1,b*seg(p,.03,.1)*(1-seg(p,.22,.27)));op(E.l2,b*seg(p,.29,.36)*(1-seg(p,.47,.52)));op(E.l3,b*seg(p,.54,.6)*(1-seg(p,.74,.78)));op(E.l4,b*seg(p,.8,.87));
  };
}
