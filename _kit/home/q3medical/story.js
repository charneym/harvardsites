/* The story scene (BL/BY/DB): how ARCHIMEDES works, drawn as ONE continuous cut-away of a bile duct opening into the duodenum,
   kept on screen for all three steps (q3medical.com home and /group.html; FDA 510(k) K260835 summary). Step 1: a plastic stent
   holds the duct open, and must come out again in a second procedure. Step 2: ARCHIMEDES, a helical band, drains the duct; fluid
   runs along its spiral channels. Step 3: it degrades in place (strength retained ~20 days, fully degraded within 161 days),
   the duct stays open, and nothing has to be removed. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var Q3X0=150,Q3X1=700,Q3Y=236;
function q3Wall(sg){/* duct wall: gently curved, pinched at a stricture around x=340 */
  var d="",x;for(x=30;x<=650;x+=10){var pinch=18*Math.exp(-Math.pow((x-340)/70,2));var y=Q3Y+sg*(66-pinch)+6*Math.sin(x/120);d+=(x===30?"M":"L")+x+" "+y.toFixed(1)}return d}
function q3Helix(ph,x0,x1,xs){var d="",x,nn=Math.max(2,Math.round((x1-x0)/4)),st=(x1-x0)/nn;for(var j=0;j<=nn;j++){x=x0+j*st;var y=Q3Y+6*Math.sin(x/120)+21*Math.sin((x-xs)/26+ph);d+=(j?"L":"M")+x.toFixed(1)+" "+y.toFixed(1)}return d}
function q3Scene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* ---- base: the duct walls and the duodenal wall, drawn in with the section ---- */
  g+='<g id="scBase">';
  g+='<path class="wall sD" d="'+q3Wall(-1)+'"/><path class="wall sD" d="'+q3Wall(1)+'"/>';
  g+='<path class="duo sD" d="M652 96C642 170 642 320 652 344"/><path class="duo sD" d="M698 96C688 170 688 320 698 344"/>';
  g+='<text class="t" x="30" y="140">'+(mob?"BILE DUCT":"BILE DUCT, WITH A STRICTURE")+'</text>';
  g+='<text class="t" x="675" y="80" text-anchor="middle">'+"DUODENUM"+'</text>';
  g+='</g>';
  /* ---- step 1: a plastic stent, a straight tube with end flaps, through the papilla ---- */
  g+='<g id="pl"><path class="pls" d="M'+Q3X0+' 222H'+(Q3X1+20)+'M'+Q3X0+' 250H'+(Q3X1+20)+'M'+Q3X0+' 222V250M'+(Q3X1+20)+' 222V250"/>'+
     '<path class="pls" d="M'+(Q3X0+40)+' 222l-16 -16M'+(Q3X1-40)+' 250l16 16"/></g>';
  /* the second procedure: an arrow pulling the plastic stent back out into the gut */
  g+='<g id="rm"><path class="rmv" d="M712 236C736 236 744 262 744 290"/><path class="rmv" d="M736 282l8 10 8-10"/></g>';
  /* ---- step 2: ARCHIMEDES, a helical band (two strands of its projection) ---- */
  var segs=14,len=(Q3X1-Q3X0)/segs;
  g+='<g id="hx">';
  for(i=0;i<segs;i++){var a=Q3X0+i*len,b=a+len;g+='<path class="hxa sH" d="'+q3Helix(0,a,b,Q3X0)+'"/><path class="hxb sH" d="'+q3Helix(Math.PI,a,b,Q3X0)+'"/>'}
  g+='</g>';
  /* the full strands, used only as the drops' route */
  g+='<path id="rtA" class="rt" d="'+q3Helix(0,Q3X0,Q3X1,Q3X0)+'"/><path id="rtB" class="rt" d="'+q3Helix(Math.PI,Q3X0,Q3X1,Q3X0)+'"/>';
  /* drainage: drops running along the spiral channels into the gut */
  g+='<g id="flow">';for(i=0;i<9;i++)g+='<circle class="drop" r="2.6" cx="0" cy="0"/>';g+='</g>';
  /* ---- the state of the duct, under it ---- */
  g+='<g id="m1"><text class="t s3" x="340" y="'+(mob?352:346)+'" text-anchor="middle">'+(mob?"A SECOND PROCEDURE":"PLASTIC STENT: A SECOND PROCEDURE TO REMOVE")+'</text></g>';
  g+='<g id="m2"><text class="t s2" x="340" y="'+(mob?352:346)+'" text-anchor="middle">'+(mob?"SPIRAL CHANNELS DRAIN":"SPIRAL CHANNELS DRAIN AROUND AND THROUGH")+'</text></g>';
  g+='<g id="m3"><text class="t s1" x="340" y="'+(mob?352:346)+'" text-anchor="middle">'+(mob?"DEGRADES IN PLACE":"DEGRADES IN PLACE, THE DUCT STAYS OPEN")+'</text></g>';
  /* ---- step 3: the degradation timeline ---- */
  g+='<g id="tl"><path class="rul" d="M30 404H620"/><path class="rul" d="M30 396V412M114 396V412M620 396V412"/>'+
     '<path class="rulp" id="rulp" d="M30 404H620"/>'+
     '<text class="t" x="30" y="436">DAY 0</text><text class="t" x="114" y="436">'+(mob?"DAY 20":"DAY 20, STRENGTH GONE")+'</text>'+
     '<text class="t s1" x="620" y="436" text-anchor="end">'+(mob?"161 DAYS":"FULLY DEGRADED BY DAY 161")+'</text></g>';
  /* ---- step captions, in the clear band under the scene ---- */
  g+='<g id="lb1"><text class="a" x="30" y="500">'+(mob?"TODAY: IN, THEN OUT AGAIN":"TODAY: IN, THEN OUT AGAIN")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="30" y="500">'+(mob?"ARCHIMEDES DRAINS":"ARCHIMEDES DRAINS THE DUCT")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="30" y="500">'+(mob?"NO REMOVAL PROCEDURE":"NO REMOVAL PROCEDURE NEEDED")+'</text></g>';
  return g+'</svg>';
}
function scene(){return q3Scene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var hxA=dl("#hx .hxa"),hxB=dl("#hx .hxb"),rA=$("#rtA",svg),rB=$("#rtB",svg),RL=rA?rA.getTotalLength():0;
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),pl:$("#pl",svg),rm:$("#rm",svg),drops:$$("#flow .drop",svg),flow:$("#flow",svg),
    tl:$("#tl",svg),rulp:dl("#rulp"),m1:$("#m1",svg),m2:$("#m2",svg),m3:$("#m3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function tf(el,x,y){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")")}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: the plastic stent is in; then the removal arrow; it slides out as step 2 begins */
    var plIn=seg(p,.04,.16),plOut=seg(p,.30,.40);
    op(E.pl,b*plIn*(1-plOut));tf(E.pl,plOut*90,0);
    op(E.rm,b*seg(p,.14,.22)*(1-seg(p,.30,.36)));
    /* step 2: the helix draws along the duct (both strands), drops run along it into the gut */
    var hIn=seg(p,.38,.54),n=hxA.length,k;
    for(k=0;k<n;k++){var v=Math.min(1,Math.max(0,hIn*n-k));hxA[k][0].style.strokeDashoffset=(hxA[k][1]*(1-v)).toFixed(2);hxB[k][0].style.strokeDashoffset=(hxB[k][1]*(1-v)).toFixed(2)}
    var fl=seg(p,.48,.56)*(1-seg(p,.66,.72));op(E.flow,b*fl);
    if(fl>0&&rA){E.drops.forEach(function(d,j){var u=((p-.48)*3.2+j/E.drops.length)%1;var pt=(j%2?rB:rA).getPointAtLength(u*RL);tf(d,pt.x,pt.y)})}
    /* step 3: the band breaks up and fades, segment by segment along its length, while the timeline runs */
    var dg=seg(p,.72,.94);
    for(k=0;k<n;k++){var lo=((k*5)%n)/n*.6,w=1-Math.min(1,Math.max(0,(dg-lo)/.3));hxA[k][0].style.opacity=w.toFixed(3);hxB[k][0].style.opacity=w.toFixed(3)}
    op(E.tl,b*seg(p,.68,.74));draw(E.rulp,dg);
    op(E.m1,b*seg(p,.1,.18)*(1-seg(p,.3,.34)));op(E.m2,b*seg(p,.5,.56)*(1-seg(p,.64,.68)));op(E.m3,b*seg(p,.84,.9));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.34)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.62,.66)));op(E.l3,b*seg(p,.8,.88));
  };
}
