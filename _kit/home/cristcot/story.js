/* The story scene (DB/BL): Cristcot's own mechanism, from its 21 April 2026 NDA release ("UC flares originate in the
   rectum, and if left untreated, inflammation can progress to more proximal disease"; ngHCA is "a small volume
   suppository administered using the Sephure suppository applicator"; "directing delivery to inflammation sites and
   limiting systemic drug exposure"; "rapid, sustained release"), drawn as ONE continuous fine-line scene that fills the
   frame: the large intestine in front view (ascending, transverse, descending and sigmoid colon, then the rectum), a
   hollow tube with haustral folds. Frame 0 is already complete.
   Step 1 (flare): the rectal lining glows inflamed and the spots creep up into the sigmoid.
   Step 2 (deliver): the suppository (ivory, as in the hero) is placed in the rectum.
   Step 3 (release): it releases (logo blue) into the rectal lining; the inflammation calms.
   Everything is driven by the scrubbed progress. Labels keep >=8px clear of every stroke (DR3). */
var SCW=760,SCH=560,HW=23;
/* centreline as cubic segments [x0,y0,x1,y1,x2,y2,x3,y3] */
var CSEG=[[210,420,206,330,204,230,212,170],[212,170,220,120,250,104,300,112],[300,112,350,120,420,146,470,122],[470,122,510,102,572,96,584,150],
  [584,150,594,220,592,300,586,352],[586,352,580,404,532,410,480,400],[480,400,432,392,400,400,398,432],[398,432,396,456,396,476,396,498]];
function cbz(s,t){var u=1-t;return [u*u*u*s[0]+3*u*u*t*s[2]+3*u*t*t*s[4]+t*t*t*s[6],u*u*u*s[1]+3*u*u*t*s[3]+3*u*t*t*s[5]+t*t*t*s[7]]}
function cbd(s,t){var u=1-t;return [3*u*u*(s[2]-s[0])+6*u*t*(s[4]-s[2])+3*t*t*(s[6]-s[4]),3*u*u*(s[3]-s[1])+6*u*t*(s[5]-s[3])+3*t*t*(s[7]-s[5])]}
var CPATH="M"+CSEG[0][0]+" "+CSEG[0][1]+CSEG.map(function(s){return "C"+s.slice(2).join(" ")}).join("");
/* haustral folds: short notches in from each wall, every ~30 units along the colon (not the rectum) */
var HAUS=(function(){var o=[],acc=0,last=[CSEG[0][0],CSEG[0][1]];for(var k=0;k<6;k++)for(var i=1;i<=60;i++){var t=i/60,p=cbz(CSEG[k],t);acc+=Math.hypot(p[0]-last[0],p[1]-last[1]);last=p;
  if(acc>=30){acc=0;var d=cbd(CSEG[k],t),L=Math.hypot(d[0],d[1]),nx=-d[1]/L,ny=d[0]/L;
    o.push("M"+(p[0]+nx*HW).toFixed(1)+" "+(p[1]+ny*HW).toFixed(1)+"L"+(p[0]+nx*(HW-8)).toFixed(1)+" "+(p[1]+ny*(HW-8)).toFixed(1)+
      "M"+(p[0]-nx*HW).toFixed(1)+" "+(p[1]-ny*HW).toFixed(1)+"L"+(p[0]-nx*(HW-8)).toFixed(1)+" "+(p[1]-ny*(HW-8)).toFixed(1))}}return o})();
/* inflamed spots on the lining: rectum first, then creeping up the sigmoid (ordered by distance from the anus) */
var SPOTS=(function(){var o=[],segs=[[7,1],[7,.75],[7,.5],[7,.25],[6,1],[6,.7],[6,.4],[6,.1],[5,.85],[5,.6]];
  segs.forEach(function(q,i){var p=cbz(CSEG[q[0]],q[1]),d=cbd(CSEG[q[0]],q[1]),L=Math.hypot(d[0],d[1]),nx=-d[1]/L,ny=d[0]/L,sd=i%2?1:-1,off=HW-5;
    o.push([p[0]+nx*off*sd,p[1]+ny*off*sd]);o.push([p[0]-nx*(off-3)*sd+(d[0]/L)*5,p[1]-ny*(off-3)*sd+(d[1]/L)*5])});return o})();
var NREL=18,SUPY0=506,SUPY1=470;
function storyScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'160 66 480 494':'60 40 640 524')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="ginf"><stop offset="0" stop-color="#f2a38e" stop-opacity=".5"/><stop offset="1" stop-color="#f2a38e" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="gcalm"><stop offset="0" stop-color="#5cc3e4" stop-opacity=".36"/><stop offset="1" stop-color="#5cc3e4" stop-opacity="0"/></radialGradient>'+
     '<linearGradient id="gsup" x1="0" x2="1"><stop offset="0" stop-color="#cfc8bb"/><stop offset=".4" stop-color="#f6f2ea"/><stop offset="1" stop-color="#bdb6aa"/></linearGradient></defs>';
  g+='<g id="scBase">';
  g+='<path class="tw sD" d="'+CPATH+'"/><path class="tin sD" d="'+CPATH+'"/>';
  HAUS.forEach(function(d){g+='<path class="wo sD" d="'+d+'"/>'});
  g+='<path class="wl sD" d="M187 420A23 23 0 0 0 233 420"/><path class="wl sD" d="M373 498L389 520"/><path class="wl sD" d="M419 498L403 520"/>';
  g+='</g>';
  /* soft glows over the rectum (the tube's ink fill would hide them underneath) */
  g+='<circle class="halo" id="hInf" cx="404" cy="452" r="92" fill="url(#ginf)"/><circle class="halo" id="hCalm" cx="400" cy="462" r="84" fill="url(#gcalm)"/>';
  g+='<g id="scSpot">';SPOTS.forEach(function(p){g+='<circle class="sp" r="3.2" cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'"/>'});g+='</g>';
  /* the suppository: a small ivory torpedo, nose up */
  g+='<g id="scSup"><path d="M-6.5 14L-6.5 -4C-6.5 -10 -3.5 -15 0 -16C3.5 -15 6.5 -10 6.5 -4L6.5 14Q6.5 16 4.5 16L-4.5 16Q-6.5 16 -6.5 14Z" fill="url(#gsup)"/></g>';
  g+='<g id="scRel">';for(i=0;i<NREL;i++)g+='<circle class="rl" r="2.6" cx="396" cy="'+SUPY1+'"/>';g+='</g>';
  g+='<text class="t mid" x="396" y="262" text-anchor="middle">LARGE INTESTINE</text>';
  if(!mob){
    g+='<g id="lRec"><path class="ld" d="M366 476L300 476"/><text class="t" x="292" y="480" text-anchor="end">RECTUM</text></g>';
    g+='<g id="lInf"><path class="ld" d="M428 470L486 470"/><text class="t" x="494" y="474">INFLAMED LINING</text></g>';
    g+='<g id="lSup"><path class="ld" d="M410 470L486 470"/><text class="t" x="494" y="466">90 MG HCA</text><text class="t q" x="494" y="482">SUPPOSITORY</text></g>';
    g+='<g id="lRel"><path class="ld" d="M428 470L486 470"/><text class="t" x="494" y="466">RAPID, SUSTAINED</text><text class="t q" x="494" y="482">LOCAL RELEASE</text></g>';
  }else{
    g+='<g id="lRec"><path class="ld" d="M366 476L330 476"/><text class="t" x="320" y="484" text-anchor="end">RECTUM</text></g>';
    g+='<g id="lInf"></g><g id="lSup"></g><g id="lRel"></g>';
  }
  var ly=SCH-6,lx=mob?176:76;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'FLARES START IN THE RECTUM':'UC FLARES ORIGINATE IN THE RECTUM')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PLACED WITH SEPHURE&#174;':'PLACED WITH THE SEPHURE&#174; APPLICATOR')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'RELEASED WHERE NEEDED':'DELIVERED TO THE SITE OF INFLAMMATION')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
/* release targets: inside the rectal tube and the lowest sigmoid, on the lining */
var RELT=(function(){var o=[];for(var i=0;i<NREL;i++){var a=i/NREL,k=a<.7?7:6,t=k===7?a/.7:.55+((a-.7)/.3)*.45,p=cbz(CSEG[k],t),d=cbd(CSEG[k],t),L=Math.hypot(d[0],d[1]),nx=-d[1]/L,ny=d[0]/L,sd=i%2?1:-1,off=(HW-7)*(.55+.45*((i*37)%10)/10);
  o.push([p[0]+nx*off*sd,p[1]+ny*off*sd])}return o})();
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),spots:$$("#scSpot .sp",svg),sup:$("#scSup",svg),rel:$$("#scRel .rl",svg),
    hI:$("#hInf",svg),hC:$("#hCalm",svg),lRec:$("#lRec",svg),lInf:$("#lInf",svg),lSup:$("#lSup",svg),lRel:$("#lRel",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.3),s2=seg(p,.36,.62),s3=seg(p,.68,.94);
    /* 1. the rectal lining flares; spots creep up into the sigmoid, then calm in step 3 */
    E.spots.forEach(function(el,i){op(el,b*seg(s1,i*.035,.3+i*.035)*(1-s3))});
    op(E.hI,b*s1*(1-s3));
    op(E.lRec,b*seg(p,.02,.12));
    op(E.lInf,b*seg(p,.12,.22)*(1-seg(p,.32,.38)));
    /* 2. the suppository is placed and slides up into the rectum */
    var y=SUPY0+(SUPY1-SUPY0)*sm(seg(p,.38,.6)),sc=1-.7*seg(p,.7,.9);
    E.sup.setAttribute("transform","translate(396 "+y.toFixed(1)+") scale("+sc.toFixed(3)+")");
    op(E.sup,b*seg(p,.36,.44)*(1-seg(p,.84,.92)));
    op(E.lSup,b*seg(p,.46,.54)*(1-seg(p,.64,.68)));
    /* 3. release: drug spreads from the suppository onto the lining; the flare gives way to calm */
    E.rel.forEach(function(el,i){var f=sm(seg(p,.7+i*.006,.86+i*.006)),tg=RELT[i];
      el.setAttribute("cx",(396+(tg[0]-396)*f).toFixed(1));el.setAttribute("cy",(SUPY1+(tg[1]-SUPY1)*f).toFixed(1));op(el,b*seg(p,.7+i*.006,.74+i*.006))});
    op(E.hC,b*s3);
    op(E.lRel,b*seg(p,.76,.84));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
