/* The story scene (DB/BL): ThromBio's own mechanism (thrombio.com.au, Technology and STARS: PI3Kβ drives shear-dependent
   platelet activation and pathological clotting; TBO-309 blocks PI3Kβ inside platelets, leaving normal clotting intact,
   and as an adjunct to reperfusion therapy aims to help dissolve the clot and prevent rethrombosis), drawn as ONE
   fine-line artery that fills the frame, with a plaque narrowing it. Nothing is drawn as blood (DT): platelets are pale
   outlines, TBO-309 is the logo's red ring.
   Frame 0 is complete: blood flow runs through the artery, a few resting platelets travel with it.
   Step 1 (block): platelets gather on the plaque, sprout their activated arms and build a clot; downstream flow fades.
   Step 2 (inhibit): TBO-309 rings drift in and settle on each platelet; the arms retract.
   Step 3 (reflow): the clot breaks up and the platelets travel on; the flow downstream returns. Driven by scrubbed progress. */
var SCW=760,SCH=560;
function Y(y){return 290+(y-290)*1.5}  /* the artery is drawn 1.5x taller than its first sketch so it fills the frame (DB) */
var TW=[60,Y(200),250,Y(186),520,Y(186),700,Y(200)],BW=[60,Y(380),250,Y(394),520,Y(394),700,Y(380)];
function bzp(P,t){var u=1-t;return [u*u*u*P[0]+3*u*u*t*P[2]+3*u*t*t*P[4]+t*t*t*P[6],u*u*u*P[1]+3*u*u*t*P[3]+3*u*t*t*P[5]+t*t*t*P[7]]}
function wallAt(P,x){var lo=0,hi=1,i,m,p;for(i=0;i<30;i++){m=(lo+hi)/2;p=bzp(P,m);if(p[0]<x)lo=m;else hi=m}return bzp(P,(lo+hi)/2)[1]}
function f1(v){return v.toFixed(1)}
/* deterministic platelet set: clot homes packed against the plaque, upstream starts, downstream exits */
var PLT=(function(){var out=[],k=0,seed=7;function rnd(){seed=(seed*16807)%2147483647;return seed/2147483647}
  var cy=Y(270),ry=Y(330)-cy,rx=60;
  for(var y=Y(198),row=0;y<=Y(330);y+=17,row++){var t=(y-cy)/ry,hw=rx*Math.sqrt(Math.max(0,1-t*t*.55));
    for(var x=408-hw+(row%2?11:0);x<=408+hw;x+=23){
      out.push({hx:x+(rnd()-.5)*5,hy:y+(rnd()-.5)*4,a:(rnd()-.5)*70,sx:80+rnd()*230,sy:Y(222)+rnd()*(Y(362)-Y(222)),ex:720+rnd()*300,ey:Y(214)+rnd()*(Y(370)-Y(214)),d:rnd(),tx:-40-rnd()*260});k++}}
  /* frame 0: resting platelets spread on a jittered grid upstream, so none overlap */
  var n=out.length,cols=Math.ceil(n/5);out.forEach(function(q,i){var c=i%cols,r=(i/cols)|0;q.sx=-380+c*(700/cols)+(r%2)*(350/cols)+(rnd()-.5)*14;q.sy=Y(226)+r*((Y(358)-Y(226))/4)+(rnd()-.5)*8});
  return out})();
var LANES=[Y(222),Y(250),Y(278),Y(306),Y(334),Y(360)];
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'60 90 640 480':'40 64 700 506')+'" aria-hidden="true">';
  /* the artery: inner walls, outer walls, and the plaque on the lower wall */
  var to=TW.map(function(v,k){return k%2?v-12:v}),bo=BW.map(function(v,k){return k%2?v+12:v});
  function cp(P){return 'M'+P[0]+' '+P[1]+'C'+P[2]+' '+P[3]+' '+P[4]+' '+P[5]+' '+P[6]+' '+P[7]}
  g+='<g id="scArt"><path class="wl sD" d="'+cp(TW)+'"/><path class="wo sD" d="'+cp(to)+'"/><path class="wl sD" d="'+cp(BW)+'"/><path class="wo sD" d="'+cp(bo)+'"/>';
  var y0=f1(wallAt(BW,324)),y1=f1(wallAt(BW,480));
  g+='<path class="pq sD" d="M324 '+y0+'C350 '+y0+' 356 '+f1(Y(336))+' 402 '+f1(Y(334))+'C448 '+f1(Y(336))+' 454 '+y1+' 480 '+y1+'"/></g>';
  /* blood flow: short dashes in lanes */
  g+='<g id="scFlow">';LANES.forEach(function(y,i){for(var j=0;j<5;j++)g+='<path class="fl" data-l="'+i+'" data-j="'+j+'" d="M0 '+y+'h16"/>'});g+='</g>';
  /* platelets: a disc, and its activated arms */
  g+='<g id="scPl">';PLT.forEach(function(p){g+='<g class="pl" transform="translate('+f1(p.sx)+' '+f1(p.sy)+') rotate('+f1(p.a)+')"><path class="arm" d="M-9 -3l-6 -5M9 -3l6 -6M9 3l6 5M-9 3l-6 6M0 -5v-7M0 5v7"/><ellipse class="pd" rx="10.5" ry="5.2"/></g>'});g+='</g>';
  /* TBO-309: the logo ring, one per platelet */
  g+='<g id="scTb">';PLT.forEach(function(){g+='<circle class="tb" r="3.6" cx="0" cy="0" transform="translate(-60 290)"/>'});g+='</g>';
  if(!mob){
    var tw150=wallAt(TW,150)-12,tw470=wallAt(TW,470)-12,bw402=wallAt(BW,402)+12;
    g+='<g id="lArt"><path class="ld" d="M150 '+f1(tw150-8)+'L150 106"/><text class="t" x="150" y="96" text-anchor="middle">ARTERY</text></g>';
    g+='<g id="lTb"><path class="ld" d="M150 '+f1(tw150-8)+'L150 106"/><text class="t o" x="150" y="96" text-anchor="middle">TBO-309, GIVEN INTRAVENOUSLY</text></g>';
    g+='<g id="lPq"><path class="ld" d="M402 '+f1(bw402+8)+'L402 '+f1(bw402+30)+'"/><text class="t" x="402" y="'+f1(bw402+48)+'" text-anchor="middle">PLAQUE</text></g>';
    g+='<g id="lPl"><path class="ld" d="M470 '+f1(tw470-8)+'L470 106"/><text class="t" x="470" y="96" text-anchor="middle">ACTIVATED PLATELETS</text></g>';
  }else{g+='<g id="lArt"></g><g id="lPq"></g><g id="lPl"></g><g id="lTb"></g>'}
  var ly=SCH-6,lx=mob?84:56;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'A CLOT BLOCKS THE ARTERY':'PLATELETS BUILD A CLOT; FLOW STOPS')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'TBO-309 BLOCKS PI3Kβ':'TBO-309 BLOCKS PI3Kβ IN EACH PLATELET')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'BLOOD FLOW RETURNS':'THE CLOT CLEARS; BLOOD FLOW RETURNS')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),fl:$$("#scFlow .fl",svg),pl:$$("#scPl .pl",svg),arm:$$("#scPl .arm",svg),pd:$$("#scPl .pd",svg),tb:$$("#scTb .tb",svg),
    lArt:$("#lArt",svg),lPq:$("#lPq",svg),lPl:$("#lPl",svg),lTb:$("#lTb",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.32),s2=seg(p,.36,.64),s3=seg(p,.68,.94);
    /* flow: blocked downstream while the clot stands, back in step 3 */
    var F=1-sm(seg(p,.1,.3))+sm(seg(p,.7,.9)),blk=sm(seg(p,.1,.3))*(1-sm(seg(p,.72,.88)));
    E.fl.forEach(function(el){var l=+el.dataset.l,j=+el.dataset.j,x=70+((j/5+p*5+l*.13)%1)*610;
      el.setAttribute("transform","translate("+x.toFixed(1)+" 0)");
      var w=1;if(x>330&&x<480)w=1-blk;else if(x>=480)w=F;if(l>=4&&x>316&&x<492)w=0;
      op(el,b*w*Math.min(1,Math.min(x-70,680-x)/40))});
    /* platelets: travel in, gather on the plaque (step 1), stay (step 2), travel on (step 3) */
    E.pl.forEach(function(el,i){var q=PLT[i],f=sm((s1-q.d*.45)/.55),r=sm((s3-q.d*.35)/.6),x,y,dr=p*80*(1-f);
      x=q.sx+dr+(q.hx-q.sx-dr)*f;y=q.sy+(q.hy-q.sy)*f;x+=(q.ex-x)*r;y+=(q.ey-y)*r;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+(q.a+r*40).toFixed(1)+")");q.x=x;q.y=y;
      var fade=(x>640?Math.max(0,(700-x)/60):1)*Math.max(0,Math.min(1,(x-70)/40));op(el,b*fade);
      var act=sm((f-.6)/.4)*(1-sm((s2-q.d*.4-.2)/.4));op(E.arm[i],act);
      E.pd[i].classList.toggle("on",act>.5)});
    /* TBO-309 rings drift in and settle on each platelet, then travel with it */
    E.tb.forEach(function(el,i){var q=PLT[i],f=sm((s2-q.d*.4)/.5),y0=LANES[i%4],x=q.tx+(q.x+7-q.tx)*f,y=y0+(q.y-6-y0)*sm((f-.55)/.45);
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");op(el,b*Math.min(1,Math.max(0,(x-70)/40))*(q.x>640?Math.max(0,(700-q.x)/60):1))});
    op(E.lArt,b*(1-seg(p,.12,.2)));op(E.lTb,b*seg(p,.36,.42)*(1-seg(p,.56,.62)));
    op(E.lPq,b*seg(p,.02,.08)*(1-seg(p,.36,.42)));
    op(E.lPl,b*seg(p,.22,.28)*(1-seg(p,.34,.38)));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
