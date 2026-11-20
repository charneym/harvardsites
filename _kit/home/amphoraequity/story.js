/* the story scene (BL/BY/DB): ONE engraved drawing of the platform Amphora built. Step one is a full-frame still life of
   well-established brands (jars, cans and a crate of tomatoes). With control and management (step two) the still life
   steps forward and shrinks to the foreground while the fresh-pack plant elevation draws in behind it; operations (step
   three) open the plant to show its kettle, filler and line; growth (step four) adds a new wing, a new organic jar on the
   shelf and a loaded truck leaving for the road. Lines draw on scroll; labels fade in with their step, one at a time. */
function stillLife(){
  var f=function(n){return n.toFixed(1)},gy=400,s='',t='',fl='';
  /* crate of tomatoes */
  s+='M60 '+gy+'V'+(gy-108)+'H262V'+gy+'Z M60 '+(gy-80)+'H262M60 '+(gy-50)+'H262M60 '+(gy-22)+'H262M74 '+gy+'V'+(gy-108)+'M248 '+gy+'V'+(gy-108);
  s+='M120 '+(gy-66)+'h82v16h-82Z';
  var TM=[[86,-126,23],[132,-130,25],[180,-127,24],[228,-124,22],[108,-162,22],[156,-165,24],[204,-160,22],[134,-196,21],[180,-194,20]];
  TM.forEach(function(q){var x=q[0],y=gy+q[1],r=q[2];fl+='<circle class="tom" cx="'+x+'" cy="'+f(y)+'" r="'+r+'"/>';
    s+='M'+f(x-r)+' '+f(y)+'a'+r+' '+r+' 0 1 0 '+(2*r)+' 0a'+r+' '+r+' 0 1 0 '+(-2*r)+' 0';
    t+='M'+f(x-6)+' '+f(y-r+3)+'l6 4 6-4M'+f(x)+' '+f(y-r+7)+'v-6M'+f(x-r*.55)+' '+f(y+r*.1)+'q'+f(r*.2)+' '+f(-r*.45)+' '+f(r*.55)+' '+f(-r*.55)});
  /* tall jar */
  s+='M292 '+gy+'V'+(gy-200)+'q0-26 22-34v-14h56v14q22 8 22 34V'+gy+'Z M306 '+(gy-262)+'h72v-16h-72Z';
  s+='M292 '+(gy-150)+'H392M292 '+(gy-56)+'H392';t+='M342 '+(gy-128)+'m-30 0a30 22 0 1 0 60 0a30 22 0 1 0 -60 0M322 '+(gy-128)+'h40M326 '+(gy-118)+'h32';
  for(var k=0;k<5;k++)t+='M'+(298+k*2)+' '+(gy-190+k*24)+'v12';
  /* can */
  s+='M420 '+(gy-168)+'V'+(gy-8)+'a60 10 0 0 0 120 0V'+(gy-168)+'M420 '+(gy-168)+'a60 10 0 0 0 120 0a60 10 0 0 0 -120 0';
  s+='M420 '+(gy-150)+'a60 10 0 0 0 120 0M420 '+(gy-34)+'a60 10 0 0 0 120 0';
  t+='M436 '+(gy-110)+'a44 30 0 0 0 88 0a44 30 0 0 0 -88 0M452 '+(gy-112)+'h56M458 '+(gy-100)+'h44';
  t+='M440 '+(gy-168)+'a40 6 0 0 0 80 0';
  /* sauce jar with a tall neck */
  s+='M570 '+gy+'V'+(gy-150)+'q0-30 26-40v-26h38v26q26 10 26 40V'+gy+'Z M592 '+(gy-232)+'h46v-14h-46Z';
  s+='M570 '+(gy-120)+'H660M570 '+(gy-40)+'H660';t+='M615 '+(gy-80)+'m-28 0a28 20 0 1 0 56 0a28 20 0 1 0 -56 0M596 '+(gy-80)+'h38';
  /* small can */
  s+='M684 '+(gy-108)+'V'+(gy-6)+'a34 7 0 0 0 68 0V'+(gy-108)+'M684 '+(gy-108)+'a34 7 0 0 0 68 0a34 7 0 0 0 -68 0M684 '+(gy-82)+'a34 7 0 0 0 68 0M684 '+(gy-26)+'a34 7 0 0 0 68 0';
  t+='M694 '+(gy-54)+'h48';
  return {s:s,t:t,fl:fl};
}
function plant(){
  var gy=400,s='',w='',sy='',x0=262,x1=640,top=gy-196,saw='';
  /* office block with flag */
  s+='M'+x0+' '+gy+'V'+(gy-118)+'H352V'+gy+'M'+(x0-4)+' '+(gy-118)+'H356V'+(gy-128)+'H'+(x0-4)+'Z M300 '+(gy-128)+'V'+(gy-176)+'M300 '+(gy-176)+'l22 6-22 6';
  for(var r=0;r<2;r++)for(var k=0;k<3;k++)w+='<rect class="wn0" x="'+(274+k*26)+'" y="'+(gy-104+r*36)+'" width="16" height="22"/>';
  s+='M300 '+gy+'V'+(gy-34)+'H318V'+gy;
  /* main shed with sawtooth roof */
  s+='M352 '+gy+'V'+top+'M'+x1+' '+gy+'V'+top+'M352 '+top+'H'+x1;
  var n=6,tw=(x1-352)/n;for(var i=0;i<n;i++){var a=352+i*tw;saw+='M'+a.toFixed(1)+' '+top+'V'+(top-26)+'L'+(a+tw).toFixed(1)+' '+top;w+='<path class="gl" d="M'+(a+2).toFixed(1)+' '+(top-2)+'V'+(top-22)+'L'+(a+tw*.3).toFixed(1)+' '+(top-17)+'V'+(top-2)+'Z"/>'}
  s+=saw;
  /* loading doors and a band of clerestory windows */
  for(var d=0;d<3;d++){var dx=520+d*38;s+='M'+dx+' '+gy+'V'+(gy-62)+'h28V'+gy;for(var q=1;q<6;q++)s+='M'+dx+' '+(gy-62+q*11)+'h28'}
  for(var c=0;c<8;c++)w+='<rect class="wn0" x="'+(364+c*34)+'" y="'+(top+16)+'" width="24" height="14"/>';
  /* two silos and a stack */
  sy+='M600 '+top+'V'+(top-58)+'q0-16 18-18q18 2 18 18V'+top+'M600 '+(top-40)+'h36M618 '+(top-76)+'v-8';
  return {s:s,w:w,silo:sy,top:top};
}
function line3(){
  /* the plant opened: kettle, filler, conveyor of cans, labeller, case packer */
  var gy=400,s='',p='',c='',f=function(n){return n.toFixed(1)};
  s+='M366 '+(gy-140)+'h52v58q0 14-26 14t-26-14Z M374 '+(gy-140)+'v-10h36v10M392 '+(gy-68)+'v22h-8v22h16v-22h-8';
  p+='M418 '+(gy-120)+'H448V'+(gy-150)+'H470M392 '+(gy-150)+'V'+(gy-166)+'H600';
  s+='M448 '+(gy-150)+'h44v34h-44Z M458 '+(gy-116)+'v10M470 '+(gy-116)+'v10M482 '+(gy-116)+'v10';
  s+='M372 '+(gy-24)+'H632M372 '+(gy-16)+'H632';for(var k=0;k<14;k++)s+='M'+(378+k*18)+' '+(gy-16)+'v16';
  for(var j=0;j<11;j++){var x=446+j*16;c+='M'+x+' '+(gy-24)+'v-14h10v14M'+x+' '+(gy-38)+'h10'}
  s+='M450 '+(gy-24)+'V'+(gy-100)+'M500 '+(gy-24)+'V'+(gy-100)+'M440 '+(gy-100)+'h70v-16h-70Z';
  s+='M560 '+(gy-24)+'V'+(gy-74)+'h56V'+(gy-24)+'M568 '+(gy-74)+'v-12h40v12';
  return {s:s,p:p,c:c};
}
function grow4(){
  var gy=400,s='',plan='',x0=640,x1=772,top=gy-150;
  plan+='M'+x0+' '+top+'H'+x1+'V'+gy;
  s+='M'+x0+' '+top+'H'+x1+'V'+gy+'M'+x0+' '+top+'l66-22 66 22';
  for(var k=0;k<3;k++)s+='M'+(652+k*40)+' '+gy+'V'+(gy-56)+'h28V'+gy;
  /* truck on the road, leaving right */
  var tx=560,ty=gy+40;
  var tr='M'+tx+' '+ty+'V'+(ty-58)+'h132V'+ty+'Z M692 '+ty+'V'+(ty-40)+'h22l14 18V'+ty+'Z M700 '+(ty-36)+'h12l10 13h-22Z';
  var wh='M588 '+(ty+8)+'m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0M664 '+(ty+8)+'m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0M712 '+(ty+8)+'m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0';
  /* the new organic jar joins the still life (in still-life coordinates) */
  var jar='M776 400V270q0-22 20-30v-12h46v12q20 8 20 30V400Z M792 228h50v-14h-50Z M776 300H862M776 360H862M819 322c-14-10-14-26 0-34c14 8 14 24 0 34ZM819 322v14';
  return {s:s,plan:plan,tr:tr,wh:wh,jar:jar};
}
function figs(){var o='',P=[[540,0],[556,1],[478,0]];P.forEach(function(q){var x=q[0],gy=400,hh=gy-34;o+='<path class="fig" d="M'+x+' '+gy+'l3-15M'+(x+7)+' '+gy+'l-2-15M'+(x+1)+' '+(gy-15)+'h5v-13q0-4-2.5-4t-2.5 4Z M'+(x+3.5)+' '+(hh+2)+'m-3.4 0a3.4 3.4 0 1 0 6.8 0a3.4 3.4 0 1 0 -6.8 0"/>'});return o}
function scene(){
  var mob=MOBILE(),S=stillLife(),P=plant(),L=line3(),G=grow4(),gy=400;
  var g='<svg viewBox="0 96 800 420" preserveAspectRatio="xMidYMid meet" class="'+(mob?'mob':'')+'" role="img" aria-label="Engraved drawing: a still life of established food brands, then the fresh-pack plant behind it, its production line, and a new wing and truck as the platform grows">';
  g+='<g id="scBase"><rect class="neat" x="8" y="104" width="784" height="404"/>';
  g+='<path class="gr sD" d="M24 '+gy+'H776"/><path class="ht sD" d="M24 '+(gy+52)+'H776'+(function(){var h='';for(var x=30;x<776;x+=14)h+='M'+x+' '+(gy+6)+'l-6 8';return h})()+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 466H776V500H548Z M548 483H776"/><text class="t" x="558" y="479">VIOLET FOODS · PLATFORM</text><text class="t s" x="558" y="496">AMPHORA · 2025–2026</text></g></g>';
  /* step 2+3 sit behind the still life */
  g+='<g id="sc2"><path class="bl dr" d="'+P.s+P.silo+'"/>'+P.w.replace(/class="gl"/g,'class="gl dot2"')+figs()+'<text class="a" x="24" y="438" text-anchor="start">CONTROL INVESTMENT · MANAGEMENT IN PLACE</text></g>';
  g+='<g id="sc3"><path class="sys dr" d="'+L.s+'"/><path class="pipe dr" d="'+L.p+'"/><path class="can dr" d="'+L.c+'"/><text class="a" x="24" y="438" text-anchor="start">FRESH-PACK LINE · WILLIAMSTOWN, NEW JERSEY</text></g>';
  g+='<g id="sc4"><path class="plan" d="'+G.plan+'"/><path class="bl dr" d="'+G.s+'"/><path class="van dr" d="'+G.tr+'"/><path class="bl dr" d="'+G.wh+'"/><path class="ht" d="M24 '+(gy+50)+'H530"/><text class="a" x="24" y="438" text-anchor="start">ADD-ON · MUIR GLEN, FROM GENERAL MILLS, 2026</text></g>';
  g+='<g id="sl">'+S.fl+'<path class="bl sD" d="'+S.s+'"/><path class="kb sD" d="'+S.t+'"/><g id="sl4"><path class="bl dr" d="'+G.jar+'"/></g></g>';
  g+='<g id="sc1"><text class="a" x="24" y="438" text-anchor="start">WELL-ESTABLISHED BRANDS</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD, #sl > .sD"),fade:$$("#scBase .neat, #scBase .tb, #sl .tom",svg),sl:$("#sl",svg),g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),g4:$("#sc4",svg),sl4:$("#sl4",svg),
    d2:dl("#sc2 .dr"),d3:dl("#sc3 .dr"),d4:dl("#sc4 .dr, #sl4 .dr"),w2:$$("#sc2 .wn0, #sc2 .gl, #sc2 .fig",svg),plan:$("#sc4 .plan",svg),
    t:[$("#sc1 text",svg),$("#sc2 text",svg),$("#sc3 text",svg),$("#sc4 text",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s2=seg(p,.2,.42),s3=seg(p,.47,.68),s4=seg(p,.73,.94);
    /* the still life steps down to the foreground as the plant appears behind it */
    var k=1-.7*s2,ax=60-36*s2;
    E.sl.setAttribute("transform","translate("+ax.toFixed(2)+" 400) scale("+k.toFixed(4)+") translate(-60 -400)");
    E.g2.style.opacity=(b*(s2>0?1:0)).toFixed(3);draw(E.d2,s2);E.w2.forEach(function(el){el.style.opacity=s2.toFixed(3)});
    E.g3.style.opacity=(b*(s3>0?1:0)).toFixed(3);draw(E.d3,s3);
    E.g4.style.opacity=(b*(s4>0?1:0)).toFixed(3);E.sl4.style.opacity=(s4>0?1:0);draw(E.d4,s4);E.plan.style.opacity=(s4*(1-s4)*4).toFixed(3);
    var h1=function(x){return seg(x,0,.5)},h2=function(x){return seg(x,.5,1)};E.t[0].style.opacity=(b*(1-h1(s2))).toFixed(3);E.t[1].style.opacity=(h2(s2)*(1-h1(s3))).toFixed(3);E.t[2].style.opacity=(h2(s3)*(1-h1(s4))).toFixed(3);E.t[3].style.opacity=h2(s4).toFixed(3);
  };
}
