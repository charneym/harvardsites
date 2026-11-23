/* The story scene (DB/BL/BY): Aclipse's own mechanism, as its releases state it (gastroparesis is "a chronic and debilitating
   disease affecting stomach nerves and muscles resulting in stomach paralysis and delayed stomach emptying"; the Mayo Clinic
   collaboration "target[s] macrophage related inflammation"; "M107's mechanism of action has been shown to shift
   pro-inflammatory M1 macrophages towards M2 anti-inflammatory macrophages"), drawn as ONE continuous fine-line scene that
   fills the frame: the stomach in front view, with the esophagus, fundus, body, antrum, pylorus and duodenum, the muscular
   wall drawn as an outer and an inner contour, and a band of macrophages living in the wall. Frame 0 is already complete.
   Step 1 (stall): a meal sits in the stomach and only creeps towards the pylorus.
   Step 2 (inflame): the wall's macrophages turn spiky M1 (logo grey-white) under a warm inflammatory glow.
   Step 3 (rebalance): M107 (logo sky blue) reaches each macrophage, which rounds into the calm M2 state (logo blue).
   Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
/* stomach body (closed), from the cardia round the lesser curvature to the pylorus, back along the greater curvature and fundus */
var STOM="M352 150C350 196 354 236 372 262C392 292 436 304 482 296C530 288 566 270 596 250L606 300C576 344 538 392 486 420C424 452 346 458 290 428C232 396 206 336 210 270C213 214 232 164 266 138C290 120 316 124 330 140Z";
var ESO_L="M330 140L322 24",ESO_R="M352 150L356 24";
var DUO_T="M606 250C626 244 646 244 660 254C682 270 690 300 688 340C686 380 680 420 682 470";
var DUO_B="M606 300C622 296 636 300 642 314C650 334 650 370 646 410C644 434 644 452 646 470";
var PYL="M596 250L606 300";
/* where the wall runs: macrophages sit in the band between the outer and inner contour, along the greater curvature */
var MAC=[[236,236],[224,300],[236,362],[272,408],[322,432],[378,438],[434,428],[486,404],[530,372],[568,334],[300,152],[250,180]];
/* the meal: particles resting low in the body and antrum */
var FOOD=[[300,360],[324,384],[352,396],[384,402],[414,396],[444,384],[330,352],[362,366],[396,372],[428,362],[460,366],[300,330],[270,344],[478,350],[504,340],[388,340]];
function macPath(x,y,k,t){ /* k: 0 resting, 1 spiky M1; t: 1 rounded M2 */
  var n=14,d="",i,a,r;
  for(i=0;i<=n;i++){a=i/n*Math.PI*2+.3;r=(6.4+(i%2?-1:1)*k*(1-t)*3.2+t*.6)*(1+.05*Math.sin(a*3));
    d+=(i?"L":"M")+(x+Math.cos(a)*r).toFixed(1)+" "+(y+Math.sin(a)*r).toFixed(1)}
  return d+"Z"}
function storyScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'186 14 524 506':'40 6 700 548')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="ginf"><stop offset="0" stop-color="#e9b8a6" stop-opacity=".34"/><stop offset="1" stop-color="#e9b8a6" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="gcalm"><stop offset="0" stop-color="#4fb8e6" stop-opacity=".3"/><stop offset="1" stop-color="#4fb8e6" stop-opacity="0"/></radialGradient></defs>';
  /* inflammation and calm glows across the wall */
  g+='<ellipse class="halo" id="hInf" cx="390" cy="330" rx="230" ry="170" fill="url(#ginf)"/><ellipse class="halo" id="hCalm" cx="390" cy="330" rx="230" ry="170" fill="url(#gcalm)"/>';
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+STOM+'"/>';
  g+='<path class="wmd sD" d="'+STOM+'" transform="translate(404 300) scale(.88) translate(-404 -300)"/>';
  g+='<path class="wl sD" d="'+ESO_L+'"/><path class="wl sD" d="'+ESO_R+'"/>';
  g+='<path class="wl sD" d="'+DUO_T+'"/><path class="wl sD" d="'+DUO_B+'"/><path class="wmd sD" d="'+PYL+'"/>';
  /* faint rugae, the folds of the stomach lining */
  g+='<path class="wo sD" d="M300 200C330 250 360 300 420 330"/><path class="wo sD" d="M270 230C300 290 340 340 420 360"/><path class="wo sD" d="M262 290C292 344 346 384 450 382"/>';
  g+='</g>';
  /* the meal */
  g+='<g id="scFood">';FOOD.forEach(function(p){g+='<circle class="dr" r="4.2" cx="'+p[0]+'" cy="'+p[1]+'"/>'});g+='</g>';
  /* macrophages in the wall */
  g+='<g id="scMac">';MAC.forEach(function(p){g+='<path class="mc" d="'+macPath(p[0],p[1],0,0)+'"/>'});g+='</g>';
  /* M107 molecules arriving */
  g+='<g id="scDrug">';MAC.forEach(function(p){g+='<circle class="pp" r="2.8" cx="'+p[0]+'" cy="'+p[1]+'"/>'});g+='</g>';
  /* labels: each leader stops >= 8px short of its text and of the art it points at (DR) */
  if(!mob){
    g+='<g id="lEso"><path class="ld" d="M318 70L196 70"/><text class="t" x="186" y="74" text-anchor="end">ESOPHAGUS</text></g>';
    g+='<g id="lPyl"><path class="ld" d="M612 276L706 214"/><text class="t" x="706" y="200" text-anchor="middle">PYLORUS</text></g>';
    g+='<g id="lWall"><path class="ld" d="M216 300L120 300"/><text class="t" x="110" y="296" text-anchor="end">STOMACH</text><text class="t" x="110" y="312" text-anchor="end">WALL</text></g>';
    g+='<g id="lM1"><path class="ld" d="M268 416L198 478"/><text class="t" x="190" y="492" text-anchor="end">M1 MACROPHAGES</text><text class="t q" x="190" y="508" text-anchor="end">PRO-INFLAMMATORY</text></g>';
    g+='<g id="lM2"><path class="ld" d="M268 416L198 478"/><text class="t" x="190" y="492" text-anchor="end">M2 MACROPHAGES</text><text class="t q" x="190" y="508" text-anchor="end">ANTI-INFLAMMATORY</text></g>';
  }else{
    g+='<g id="lEso"></g><g id="lWall"></g>';
    g+='<g id="lPyl"><path class="ld" d="M614 276L640 210"/><text class="t" x="644" y="196" text-anchor="middle">PYLORUS</text></g>';
    g+='<g id="lM1"></g><g id="lM2"></g>';
  }
  var ly=mob?506:SCH-8,lx=mob?196:56;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THE STOMACH EMPTIES LATE':'THE STOMACH STALLS AND EMPTIES LATE')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'M1 MACROPHAGES INFLAME':'MACROPHAGES IN THE WALL TURN PRO-INFLAMMATORY')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'M107 SHIFTS M1 TO M2':'M107 SHIFTS M1 MACROPHAGES TOWARDS M2')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),food:$$("#scFood .dr",svg),mac:$$("#scMac .mc",svg),drug:$$("#scDrug .pp",svg),
    hI:$("#hInf",svg),hC:$("#hCalm",svg),lEso:$("#lEso",svg),lPyl:$("#lPyl",svg),lWall:$("#lWall",svg),lM1:$("#lM1",svg),lM2:$("#lM2",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.32),s2=seg(p,.36,.64),s3=seg(p,.68,.94);
    /* 1. the meal sits low and only creeps towards the pylorus */
    E.food.forEach(function(el,i){var f=FOOD[i],dx=s1*10*(f[0]/500),dy=-s1*3*(f[0]/500);
      el.setAttribute("cx",(f[0]+dx).toFixed(1));el.setAttribute("cy",(f[1]+dy).toFixed(1));op(el,b*(.85-.35*s2))});
    op(E.lEso,b*(1-seg(p,.36,.44)));op(E.lPyl,b*seg(p,.08,.18)*(1-seg(p,.36,.44)));op(E.lWall,b*seg(p,.38,.48)*(1-seg(p,.66,.72)));
    /* 2. macrophages turn spiky M1 under a warm glow; 3. M107 arrives and they round into calm M2 */
    var k=sm(s2);
    E.mac.forEach(function(el,i){var m=MAC[i],t=sm(seg(p,.72+i*.012,.84+i*.012));
      el.setAttribute("d",macPath(m[0],m[1],k,t));el.classList.toggle("m2",t>.5);op(el,b*(.55+.45*seg(p,.36,.46)))});
    E.drug.forEach(function(el,i){var m=MAC[i],f=seg(p,.68+i*.012,.8+i*.012),a=i*2.1;
      el.setAttribute("cx",(m[0]+Math.cos(a)*22*(1-f)).toFixed(1));el.setAttribute("cy",(m[1]+Math.sin(a)*22*(1-f)).toFixed(1));op(el,b*f*(1-seg(p,.86+i*.006,.94+i*.004)))});
    op(E.hI,b*s2*(1-s3));op(E.hC,b*s3);
    op(E.lM1,b*seg(p,.44,.54)*(1-seg(p,.66,.72)));op(E.lM2,b*seg(p,.82,.9));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
