/* The story scene (BL/BY/DB): the PMEF 6414 care cart (hammerlit.de product slider), drawn as ONE fine-line front elevation that
   stays on screen for all three steps. Step 1: the single-row stainless-steel body, 14 height units (HE), with its HE scale.
   Step 2: the modules: a 1 HE drawer, a 2 HE drawer and an 11 HE lockable cabinet with module rails, baskets and two doors.
   Step 3: four castors (two combination castors with direction and total lock) and the outer size, 740 x 580 x 1107 mm.
   Scale: 0.35 px per mm; one HE = 22 px. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var CX0=190,CX1=450,CTOP=62,HE=22,CBOT=CTOP+14*HE,FLOOR=427;
function cartScene(o){
  var g='',mob=o.mob,i,y;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"70 24 640 496":"76 0 664 520")+'" aria-hidden="true">';
  g+='<g id="scBase"><path class="flr sD" d="M100 '+FLOOR+'H560"/></g>';
  /* step 1: body: two front posts, the top tray with its raised rim, the side panel edge, the HE scale */
  g+='<g id="body">';
  g+='<path class="wall sD" d="M'+CX0+' 40V'+(CBOT+12)+'M'+CX1+' 40V'+(CBOT+12)+'"/>';
  g+='<path class="wall sD" d="M'+(CX0-6)+' 56H'+(CX1+6)+'M'+(CX0+8)+' 46H'+(CX1-8)+'M'+CX0+' '+CBOT+'H'+CX1+'"/>';
  g+='<path class="thin sD" d="M'+(CX0+8)+' 46V56M'+(CX1-8)+' 46V56M'+(CX0+4)+' '+CTOP+'H'+(CX1-4)+'"/>';
  var tk='';for(i=0;i<=14;i++){y=CTOP+i*HE;tk+='M'+(CX0-22)+' '+y+'H'+(CX0-(i%7===0?8:14))}
  g+='<path class="tick sD" d="M'+(CX0-22)+' '+CTOP+'V'+CBOT+tk+'"/>';
  g+='<text class="t" x="'+(CX0-(mob?42:34))+'" y="'+((CTOP+CBOT)/2)+'" text-anchor="middle" transform="rotate(-90 '+(CX0-(mob?42:34))+' '+((CTOP+CBOT)/2)+')">14 HE</text>';
  g+='</g>';
  /* step 2: modules */
  var d1=CTOP,d2=CTOP+HE,d3=CTOP+3*HE,xm=(CX0+CX1)/2;
  g+='<g id="mods">';
  g+='<rect class="yel" id="dr1" x="'+(CX0+6)+'" y="'+(d1+2)+'" width="'+(CX1-CX0-12)+'" height="'+(HE-4)+'"/>';
  g+='<rect class="yel" id="dr2" x="'+(CX0+6)+'" y="'+(d2+2)+'" width="'+(CX1-CX0-12)+'" height="'+(2*HE-4)+'"/>';
  g+='<g id="bsk">';for(i=0;i<5;i++){y=d3+22+i*42;g+='<path class="bk" d="M'+(CX0+26)+' '+y+'H'+(CX1-26)+'V'+(y+26)+'H'+(CX0+26)+'Z"/>'}g+='</g>';
  g+='<rect class="yel" id="dl" x="'+(CX0+6)+'" y="'+(d3+3)+'" width="'+((CX1-CX0)/2-8)+'" height="'+(CBOT-d3-6)+'"/>';
  g+='<rect class="yel" id="drr" x="'+(xm+2)+'" y="'+(d3+3)+'" width="'+((CX1-CX0)/2-8)+'" height="'+(CBOT-d3-6)+'"/>';
  g+='<path class="hdl" d="M'+(xm-36)+' '+(d1+HE/2)+'H'+(xm+36)+'M'+(xm-36)+' '+(d2+HE)+'H'+(xm+36)+'M'+(xm-12)+' '+(d3+40)+'V'+(d3+96)+'M'+(xm+12)+' '+(d3+40)+'V'+(d3+96)+'"/>';
  g+='<text class="t s1" x="'+(CX1+16)+'" y="'+(d1+HE/2+4)+'">1 HE</text>';
  g+='<text class="t s1" x="'+(CX1+16)+'" y="'+(d2+HE+4)+'">2 HE</text>';
  g+='<text class="t s1" x="'+(CX1+16)+'" y="'+((d3+CBOT)/2+4)+'">11 HE</text>';
  g+='</g>';
  /* step 3: castors (two front, two rear) and the dimension lines */
  g+='<g id="mob">';
  [[CX0+22,1],[CX1-22,1],[CX0+58,0],[CX1-58,0]].forEach(function(c){var x=c[0],r=c[1]?19:15,cy=FLOOR-r;
    g+='<path class="cst" d="M'+x+' '+CBOT+'V'+(cy-r-6)+'M'+(x-12)+' '+(cy-r-6)+'H'+(x+12)+'"/><circle class="'+(c[1]?"whl":"whl2")+'" cx="'+x+'" cy="'+cy+'" r="'+r+'"/><circle class="hub" cx="'+x+'" cy="'+cy+'" r="4"/>'});
  g+='</g>';
  g+='<g id="dims">';
  g+='<path class="dim" id="dw" d="M'+CX0+' 456H'+CX1+'"/><path class="dimt" d="M'+CX0+' 448V464M'+CX1+' 448V464"/>';
  g+='<text class="t s2" x="'+xm+'" y="482" text-anchor="middle">740 MM</text>';
  g+='<path class="dim" id="dh" d="M120 40V'+FLOOR+'"/><path class="dimt" d="M112 40H128M112 '+FLOOR+'H128"/>';
  g+='<text class="t s2" x="'+(mob?92:104)+'" y="234" text-anchor="middle" transform="rotate(-90 '+(mob?92:104)+' 234)">1107 MM</text>';
  g+='</g>';
  /* state notes, in the open field right of the cart */
  var nx=mob?500:482,ny1=mob?300:196,ny2=mob?328:222;
  g+='<g id="m1"><text class="t s3" x="'+nx+'" y="'+ny1+'">'+(mob?"EDELSTAHL":"EDELSTAHLKORPUS, 1-REIHIG")+'</text><text class="t" x="'+nx+'" y="'+ny2+'">'+(mob?"1-REIHIG":"14 HÖHENEINHEITEN")+'</text></g>';
  g+='<g id="m2"><text class="t s3" x="'+nx+'" y="'+ny1+'">'+(mob?"SCHRANK":"SCHRANK MIT TRÄGERWÄNDEN")+'</text><text class="t" x="'+nx+'" y="'+ny2+'">'+(mob?"ABSCHLIESSBAR":"MODULKÖRBE · ABSCHLIESSBAR")+'</text></g>';
  g+='<g id="m3"><text class="t s3" x="'+nx+'" y="'+ny1+'">'+(mob?"4 LENKROLLEN":"4 LENKROLLEN, 2 KOMBI-ROLLEN")+'</text><text class="t" x="'+nx+'" y="'+ny2+'">'+(mob?"TIEFE 580 MM":"TIEFE 580 MM")+'</text></g>';
  /* step captions, in the clear band under the scene */
  g+='<g id="lb1"><text class="a" x="100" y="510">'+(mob?"DER KORPUS":"DER KORPUS AUS EDELSTAHL")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="100" y="510">'+(mob?"DIE MODULE":"DIE MODULE: 1 + 2 + 11 HE")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="100" y="510">'+(mob?"MOBIL":"MOBIL AUF VIER ROLLEN")+'</text></g>';
  return g+'</svg>';
}
function scene(){return cartScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),body:dl("#body .sD"),bodyT:$$("#body text",svg),mods:$("#mods",svg),
    yel:$$("#mods .yel",svg),bsk:$("#bsk",svg),dl:$("#dl",svg),drr:$("#drr",svg),hdl:$("#mods .hdl",svg),heT:$$("#mods text",svg),
    mob:$("#mob",svg),cst:$$("#mob > *",svg),dims:$("#dims",svg),dw:dl("#dw"),dh:dl("#dh"),
    m1:$("#m1",svg),m2:$("#m2",svg),m3:$("#m3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* step 1: the body draws in, then its HE scale label */
    draw(E.body,b*seg(p,.02,.24));
    E.bodyT.forEach(function(t){op(t,b*seg(p,.18,.26))});
    /* step 2: drawers slide in one by one (each fades and drops into its slot), baskets, then the two doors close over them */
    op(E.mods,b*seg(p,.34,.38));
    var s1=seg(p,.38,.44),s2=seg(p,.43,.49),sb=seg(p,.46,.52),sd=seg(p,.52,.6);
    if(E.yel[0]){op(E.yel[0],s1);E.yel[0].setAttribute("transform","translate(0 "+(-14*(1-s1)).toFixed(1)+")")}
    if(E.yel[1]){op(E.yel[1],s2);E.yel[1].setAttribute("transform","translate(0 "+(-14*(1-s2)).toFixed(1)+")")}
    op(E.bsk,sb*(1-.75*sd));
    op(E.dl,sd);op(E.drr,sd);op(E.hdl,seg(p,.48,.6));
    E.heT.forEach(function(t,j){op(t,seg(p,.42+j*.05,.48+j*.05))});
    /* step 3: castors, then the width and height dimension lines draw */
    op(E.mob,b*seg(p,.68,.74));
    var t3=seg(p,.74,.94);
    op(E.dims,b*seg(p,.72,.76));draw(E.dw,seg(t3,0,.5));draw(E.dh,seg(t3,.3,1));
    op(E.m1,b*seg(p,.08,.14)*(1-seg(p,.30,.34)));op(E.m2,b*seg(p,.54,.60)*(1-seg(p,.66,.70)));op(E.m3,b*seg(p,.80,.86));
    op(E.l1,b*seg(p,.06,.12)*(1-seg(p,.30,.34)));op(E.l2,b*seg(p,.38,.44)*(1-seg(p,.62,.66)));op(E.l3,b*seg(p,.76,.82));
  };
}
