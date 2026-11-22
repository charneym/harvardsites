/* The story scene (BL/BY/DB): how the Aravis screw-bending sensor works (aravisbiotech.com/technologies Figure 1B; Sci Rep 2025,
   15:19725), drawn as ONE continuous fine-line scene: a sectioned femoral neck and head with an intertrochanteric fracture,
   the sliding hip screw through it, and the straight tungsten pin inside the screw's cannula.
   Step 1 (fix): bone, fracture, screw and pin draw in. Step 2 (load): a weight-bearing arrow; the unhealed fracture lets the
   screw bend, the pin stays straight, and the tip-to-pin gap opens (the reading on the radiograph). Step 3 (heal): callus
   bridges the fracture, the bending fades to nothing; a weeks timeline from the ovine study (loading seen from week 3, when
   full weight bearing began, until week 8). Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var SX0=118,SX1=640,SY=200,SR=17,THR=150;   /* screw: back end, tip, axis y, shaft radius, thread length */
function bendY(x,k){var L=SX1-SX0,u=Math.max(0,(x-(SX0+150))/(L-150));return SY+k*u*u*(3-u)/2*26}
function screwPath(k,side){var pts=[],x,r;for(x=SX0;x<=SX1;x+=4){var th=x>SX1-THR;r=SR+(th?(Math.abs(((x-(SX1-THR))/14)%1-.5)*2)*9:0);if(x>SX1-14)r*=Math.sqrt(Math.max(0,1-Math.pow((x-SX1+14)/14,2)));
  pts.push(x.toFixed(1)+' '+(bendY(x,k)+side*r).toFixed(1))}return 'M'+pts.join('L')}
function axisPath(k){var pts=[];for(var x=SX0;x<=SX1-12;x+=6)pts.push(x+' '+bendY(x,k).toFixed(1));return 'M'+pts.join('L')}
function boneScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* ---- bone: shaft-side fragment (left), fracture, head-side fragment with the head (right) ---- */
  g+='<g id="scBase">';
  g+='<path class="bo sD" d="M40 96C110 92 190 104 250 114C276 140 262 170 288 196C262 226 280 262 252 290C190 300 110 306 40 302"/>';
  g+='<path class="bo sD" d="M300 112C380 96 450 96 520 108C560 70 640 58 690 92C736 124 746 200 724 252C700 304 630 330 572 300C520 300 420 302 304 292C276 262 296 228 270 198C296 170 280 140 300 112"/>';
  g+='<path class="bc sD" d="M60 128C130 126 190 134 236 142M60 270C130 274 190 270 236 262M330 134C420 124 480 128 530 136M330 268C420 276 480 274 560 270"/>';
  g+='<path class="bc sD" d="M560 116C620 92 680 104 706 150C724 190 716 240 690 268"/>';
  for(i=0;i<9;i++){var tx=560+i*16;g+='<path class="tb sD" d="M'+tx+' '+(124+i*2)+'C'+(tx+20)+' 170 '+(tx+6)+' 230 '+(tx+24)+' '+(282-i*2)+'"/>'}
  g+='<text class="t" x="40" y="80">SHAFT SIDE</text><text class="t" x="600" y="52">FEMORAL HEAD</text>';
  g+='</g>';
  /* ---- callus bridging the fracture (step 3) ---- */
  g+='<g id="scCal">';
  for(i=0;i<14;i++){var cy=112+i*13;g+='<path class="cl" d="M'+(258+((i*7)%11))+' '+cy+'l'+(34-((i*5)%9))+' 9"/>'}
  g+='<path class="clb" d="M250 114C276 140 262 170 288 196C262 226 280 262 252 290L304 292C276 262 296 228 270 198C296 170 280 140 300 112Z"/>';
  g+='</g>';
  /* ---- screw (outline redrawn every frame), cannula axis, and the straight pin ---- */
  g+='<g id="scScr"><path class="sc" id="scA" d=""/><path class="sc" id="scB" d=""/><path class="sx" id="scX" d=""/>';
  g+='<path class="bar sD" d="M'+(SX0-36)+' '+(SY-26)+'H'+(SX0+150)+'V'+(SY+26)+'H'+(SX0-36)+'Z"/>';
  g+='<path class="pl sD" d="M'+(SX0-50)+' 70V340"/></g>';
  g+='<path class="pin" id="scPin" d="M'+(SX0-30)+' '+SY+'H'+(SX1-14)+'"/>';
  /* ---- the reading: tip vs pin end ---- */
  g+='<g id="scGap"><path class="gp" id="gpL" d=""/><text class="a" id="gpT" x="'+(SX1+18)+'" y="'+(SY+30)+'">'+(o.mob?'GAP':'TIP MOVES · PIN STAYS')+'</text></g>';
  /* ---- load arrow ---- */
  g+='<g id="scLd"><path class="ld" d="M600 8V58M590 46l10 12 10-12"/><text class="t" x="420" y="30">'+(o.mob?'WEIGHT BEARING':'WEIGHT BEARING ON THE HEAD')+'</text></g>';
  /* ---- timeline: weeks after surgery in the ovine study ---- */
  var x0=40,x1=720,ty=440,wk=function(n){return x0+(x1-x0)*n/10};
  g+='<g id="scTl"><path class="tl" d="M'+x0+' '+ty+'H'+x1+'"/>';
  for(i=0;i<=10;i++)g+='<path class="tl" d="M'+wk(i)+' '+(ty-5)+'V'+(ty+5)+'"/>'+(i?'<text class="t" x="'+(wk(i)-4)+'" y="'+(ty+26)+'">'+i+'</text>':'');
  g+='<rect class="lb" id="tlBand" x="'+wk(3)+'" y="'+(ty-9)+'" width="'+(wk(8)-wk(3))+'" height="18"/>';
  g+='<text class="t" x="'+x0+'" y="'+(ty-24)+'">WEEKS AFTER SURGERY</text>';
  g+='<circle class="tm" id="tlM" cx="'+x0+'" cy="'+ty+'" r="6"/></g>';
  /* ---- step labels ---- */
  var ly=SCH-16;
  g+='<g id="lb1"><text class="a" x="40" y="'+ly+'">'+(o.mob?'TUNGSTEN PIN · IN THE SCREW':'PASSIVE TUNGSTEN PIN · THREADED INTO THE SCREW')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="40" y="'+ly+'">'+(o.mob?'LOADED · SCREW BENDS':'UNHEALED · THE SCREW BENDS UNDER LOAD')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="40" y="'+ly+'">'+(o.mob?'HEALED · NO BENDING':'LOADING SEEN WEEKS 3–8 · THEN NONE')+'</text></g>';
  return g+'</svg>';
}
function scene(){return boneScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),scr:dl("#scScr .sD"),fade:$$("#scBase text",svg),cal:$("#scCal",svg),
    A:$("#scA",svg),B:$("#scB",svg),X:$("#scX",svg),ss:$("#scScr",svg),pin:$("#scPin",svg),gap:$("#scGap",svg),gpL:$("#gpL",svg),
    ld:$("#scLd",svg),tl:$("#scTl",svg),tm:$("#tlM",svg),band:$("#tlBand",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var pinL=SX1-14-(SX0-30);E.pin.style.strokeDasharray=pinL+" "+pinL;
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);draw(E.scr,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    op(E.ss,b);
    var pinIn=seg(p,.04,.2);E.pin.style.strokeDashoffset=(pinL*(1-pinIn*b)).toFixed(1);
    var load=seg(p,.36,.5),heal=seg(p,.66,.86);
    var cyc=.82+.18*Math.sin(p*60);
    var k=load*(1-heal)*cyc;
    E.A.setAttribute("d",screwPath(k,-1));E.B.setAttribute("d",screwPath(k,1));E.X.setAttribute("d",axisPath(k));
    var ty=bendY(SX1-14,k);E.gpL.setAttribute("d","M"+(SX1+4)+" "+SY+"H"+(SX1+14)+"M"+(SX1+4)+" "+ty.toFixed(1)+"H"+(SX1+14)+"M"+(SX1+9)+" "+SY+"V"+ty.toFixed(1));
    op(E.gap,b*load*(1-heal));
    op(E.ld,b*seg(p,.32,.42));
    op(E.cal,b*heal);
    var tl=seg(p,.3,.4);op(E.tl,b*tl);
    var wkp=seg(p,.4,.94)*10;E.tm.setAttribute("cx",(40+680*wkp/10).toFixed(1));
    op(E.band,b*tl*(wkp>3?.9:.25));
    op(E.l1,b*seg(p,.12,.2)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.78,.86));
  };
}
