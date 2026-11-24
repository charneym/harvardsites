/* The story scene (DB): how Kaminari Medical's catheter images plaque (kaminarimedical.com, Our Technology: "We image
   coronary artery disease by hearing the flash of light impact the plaque"; IVPA + IVUS in one system; structure and
   composition), drawn in fine line as ONE coronary artery in cross-section, the catheter in its lumen, a lipid-rich
   plaque thickening the wall at upper right.
   Frame 0 is complete: vessel wall, lumen, plaque outline, catheter.
   Step 1 (flash): a pulse of light leaves the catheter towards the plaque.
   Step 2 (sound): the lipid core lights up and sends acoustic wavefronts back to the catheter.
   Step 3 (image): the imaging sweep turns once around the catheter, revealing the wall structure (IVUS) with the lipid
   sector marked (IVPA).
   Everything is driven by the scrubbed progress. No dash-drawn path uses non-scaling-stroke (DR.4). */
var KC=[380,292],KR=200,KL=[350,318],KLR=80,KK=[344,324];
function f1(v){return v.toFixed(1)}
function kRay(a){/* distance from the vessel centre to the lumen edge along angle a */
  var dx=Math.cos(a),dy=Math.sin(a),ox=KC[0]-KL[0],oy=KC[1]-KL[1],b=ox*dx+oy*dy,cc=ox*ox+oy*oy-KLR*KLR;return -b+Math.sqrt(b*b-cc)}
function kPt(a,r){return [KC[0]+Math.cos(a)*r,KC[1]+Math.sin(a)*r]}
function kLipid(){var a0=-1.55,a1=-.02,n=40,i,inn=[],out=[];
  for(i=0;i<=n;i++){var a=a0+(a1-a0)*i/n,ri=kRay(a)+15,th=Math.sin(Math.PI*i/n),ro=Math.min(KR-26,ri+8+th*Math.max(0,KR-40-ri));inn.push(kPt(a,ri));out.push(kPt(a,ro))}
  var d='M'+inn.map(function(p){return f1(p[0])+' '+f1(p[1])}).join('L');d+='L'+out.reverse().map(function(p){return f1(p[0])+' '+f1(p[1])}).join('L')+'Z';return d}
function kCirc(c,r){return 'M'+f1(c[0])+' '+f1(c[1]-r)+'A'+r+' '+r+' 0 1 1 '+f1(c[0])+' '+f1(c[1]+r)+'A'+r+' '+r+' 0 1 1 '+f1(c[0])+' '+f1(c[1]-r)+'Z'}
function storyScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'140 52 480 520':'24 24 736 536')+'" aria-hidden="true">';
  g+='<defs><clipPath id="kmWall"><path clip-rule="evenodd" d="'+kCirc(KC,KR)+kCirc(KL,KLR)+'"/></clipPath>'+
     '<linearGradient id="kmBeamG" gradientUnits="userSpaceOnUse" x1="'+KK[0]+'" y1="'+KK[1]+'" x2="'+f1(KK[0]+Math.cos(-.74)*200)+'" y2="'+f1(KK[1]+Math.sin(-.74)*200)+'"><stop offset="0" stop-color="#ffb08a" stop-opacity=".75"/><stop offset=".6" stop-color="#ee5a50" stop-opacity=".28"/><stop offset="1" stop-color="#ee5a50" stop-opacity="0"/></linearGradient>'+
     '<clipPath id="kmOut"><path d="'+kCirc(KC,KR-1)+'"/></clipPath>'+
     '<mask id="kmSw" maskUnits="userSpaceOnUse" x="0" y="0" width="800" height="600"><path id="kmSwP" fill="#fff" d="M0 0Z"/></mask></defs>';
  g+='<g transform="matrix(1.12 0 0 1.12 -45.6 -35.04)">';
  /* the vessel wall's layered texture, revealed by the imaging sweep in step 3 */
  var tx='';for(i=0;i<16;i++){tx+=kCirc(KC,92+i*7)}
  g+='<g mask="url(#kmSw)"><g clip-path="url(#kmWall)"><path class="kTx" d="'+tx+'"/></g></g>';
  /* the plaque's lipid core */
  var LP=kLipid();
  g+='<path class="kLip" id="kmLip" d="'+LP+'"/><path class="kLipO sD" d="'+LP+'"/>';
  /* the beam of light */
  var ba=-.74,bh=.27,bl=196;
  g+='<path id="kmBeam" class="kBeam" d="M'+KK[0]+' '+KK[1]+'L'+f1(KK[0]+Math.cos(ba-bh)*bl)+' '+f1(KK[1]+Math.sin(ba-bh)*bl)+'L'+f1(KK[0]+Math.cos(ba+bh)*bl)+' '+f1(KK[1]+Math.sin(ba+bh)*bl)+'Z" fill="url(#kmBeamG)"/>';
  /* outer wall and lumen */
  g+='<path class="kWall sD" d="'+kCirc(KC,KR)+'"/><path class="kWall2 sD" d="'+kCirc(KC,KR-12)+'"/><path class="kLum sD" d="'+kCirc(KL,KLR)+'"/>';
  /* the IVPA mark on the lumen edge, over the lipid sector */
  var mk='';for(i=0;i<=24;i++){var ma=-1.55+1.53*i/24,mp=kPt(ma,kRay(ma)+5);mk+=(i?'L':'M')+f1(mp[0])+' '+f1(mp[1])}
  g+='<g mask="url(#kmSw)"><path class="kMark" d="'+mk+'"/></g>';
  /* acoustic wavefronts */
  g+='<g id="kmAc"><path class="kAc" d="M0 0"/><path class="kAc" d="M0 0"/><path class="kAc" d="M0 0"/></g>';
  /* the sweep line */
  g+='<g clip-path="url(#kmOut)"><path id="kmSl" class="kSl" d="M0 0"/></g>';
  /* the catheter */
  g+='<path class="kCat sD" d="'+kCirc(KK,14)+'"/><circle class="kCatF" cx="'+KK[0]+'" cy="'+KK[1]+'" r="4.5"/>';
  g+='</g>';
  if(!mob){
    g+='<g id="lWall"><path class="ld" d="M170 240L157 192"/><text class="t" x="150" y="180" text-anchor="end">VESSEL WALL</text></g>';
    g+='<g id="lCat"><path class="ld" d="M329 341L228 468"/><text class="t" x="220" y="486" text-anchor="end">CATHETER</text></g>';
    g+='<g id="lLip"><path class="ld" d="M499 153L588 92"/><text class="t o" x="596" y="84">LIPID-RICH PLAQUE</text></g>';
  }else{g+='<g id="lWall"></g><g id="lCat"></g><g id="lLip"></g>'}
  var ly=552,lx=mob?150:34;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'A PULSE OF LIGHT':'A PULSE OF LIGHT FROM THE CATHETER')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THE PLAQUE ANSWERS':'THE LIPID CORE ANSWERS WITH SOUND')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'IVUS + IVPA':'IVUS: STRUCTURE · IVPA: COMPOSITION')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),lip:$("#kmLip",svg),beam:$("#kmBeam",svg),ac:$$("#kmAc path",svg),swp:$("#kmSwP",svg),sl:$("#kmSl",svg),
    lWall:$("#lWall",svg),lCat:$("#lCat",svg),lLip:$("#lLip",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  /* the lipid core's centre and its distance to the catheter */
  var bb=E.lip.getBBox(),LC=[bb.x+bb.width*.5,bb.y+bb.height*.5],LD=Math.hypot(LC[0]-KK[0],LC[1]-KK[1]),LA=Math.atan2(KK[1]-LC[1],KK[0]-LC[0]);
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.3),s2=seg(p,.36,.64),s3=seg(p,.68,.94);
    /* 1: the flash */
    op(E.beam,b*sm(s1/.4)*(1-.85*sm(s2/.4)));
    /* 2: the lipid core lights up and answers with sound */
    op(E.lip,b*(.12+.88*sm(s2/.35)));
    E.ac.forEach(function(a,j){var q=Math.max(0,Math.min(1,s2*1.5-j*.25)),r=10+q*(LD-22),sp=.62;
      var p0=[LC[0]+Math.cos(LA-sp)*r,LC[1]+Math.sin(LA-sp)*r],p1=[LC[0]+Math.cos(LA+sp)*r,LC[1]+Math.sin(LA+sp)*r];
      a.setAttribute("d","M"+f1(p0[0])+" "+f1(p0[1])+"A"+f1(r)+" "+f1(r)+" 0 0 1 "+f1(p1[0])+" "+f1(p1[1]));
      op(a,b*(q>0&&q<1?Math.sin(Math.PI*q):0)*(1-sm(s3/.3)))});
    /* 3: the imaging sweep, once around the catheter */
    var A0=-Math.PI/2,sw=sm(s3)*Math.PI*2,R=260,ex=KK[0]+Math.cos(A0+sw)*R,ey=KK[1]+Math.sin(A0+sw)*R;
    if(sw<=0)E.swp.setAttribute("d","M0 0Z");
    else if(sw>=Math.PI*2-.001)E.swp.setAttribute("d","M0 0H800V600H0Z");
    else E.swp.setAttribute("d","M"+KK[0]+" "+KK[1]+"L"+f1(KK[0]+Math.cos(A0)*R)+" "+f1(KK[1]+Math.sin(A0)*R)+"A"+R+" "+R+" 0 "+(sw>Math.PI?1:0)+" 1 "+f1(ex)+" "+f1(ey)+"Z");
    E.sl.setAttribute("d","M"+KK[0]+" "+KK[1]+"L"+f1(KK[0]+Math.cos(A0+sw)*190)+" "+f1(KK[1]+Math.sin(A0+sw)*190));
    op(E.sl,b*(s3>0&&s3<1?Math.sin(Math.PI*s3):0));
    op(E.lWall,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.lCat,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));
    op(E.lLip,b*seg(p,.4,.48)*(1-seg(p,.64,.7)));
    op(E.l1,b*seg(p,.04,.12)*(1-seg(p,.28,.34)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.72,.8));
  };
}
