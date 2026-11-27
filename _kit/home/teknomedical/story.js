/* The story scene (BL/BY/DB): the endoscopy chain Tekno-Medical supplies (tekno-medical.com > Produkte > Endoskopie:
   Geräte, Optiken; News > Neuheiten: CLS 50 Kamera-System, Ureterorenoskope), drawn as ONE fine-line elevation kept on
   screen for all three steps: a compact camera/light unit, a rigid optic in side view, and a monitor.
   Step 1 (Licht): light runs from the unit's LED source along the light cable into the optic and leaves the distal tip.
   Step 2 (Optik): the image travels back through the slim shaft to the eyepiece; diameter and working length annotated.
   Step 3 (Bild): the camera head sits on the eyepiece, the signal returns to the unit and the picture appears. */
var SCW=760,SCH=520;
function tkScene(o){
  var g='',mob=o.mob,i;
  /* the optic, side elevation: bevelled tip at x 80, shaft to 470, neck, hub with light post, eyepiece cup to 650 */
  var scope="M80 324H470L505 312H600L650 298V362L600 348H505L470 336H92Z";
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<linearGradient id="tkCone" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff6dc" stop-opacity=".55"/><stop offset="1" stop-color="#fff6dc" stop-opacity="0"/></linearGradient>'+
    '<radialGradient id="tkImg" cx=".45" cy=".42" r=".6"><stop offset="0" stop-color="#f6e4da" stop-opacity=".7"/><stop offset=".6" stop-color="#d9a596" stop-opacity=".38"/><stop offset="1" stop-color="#7a5a5a" stop-opacity=".12"/></radialGradient>'+
    '<clipPath id="tkScr"><circle cx="205" cy="150" r="56"/></clipPath></defs>';
  if(!mob)g+='<text class="t" x="20" y="30">ENDOSKOPIE-KETTE, SCHEMATISCH</text>';
  /* the unit (camera, LED light source, image and video storage) */
  g+='<path class="edge sD" d="M470 70H700V150H470Z"/>';
  g+='<text class="u" x="490" y="104">CLS 50</text>'+(mob?'':'<text class="t" x="490" y="130">KAMERA · LICHT · SPEICHER</text>');
  g+='<circle class="port" cx="520" cy="150" r="5"/><circle class="port" cx="650" cy="150" r="5"/>';
  /* the monitor */
  g+='<path class="edge sD" d="M80 70H330V230H80Z"/><path class="edge sD" d="M205 230V248M168 248H242"/>';
  g+='<circle class="ring0 sD" cx="205" cy="150" r="56"/>';
  g+='<g id="tkPic"><circle cx="205" cy="150" r="56" fill="url(#tkImg)"/><g clip-path="url(#tkScr)"><path class="pic" d="M150 172C176 150 196 168 214 148C230 132 248 140 262 126"/><path class="pic" d="M150 190C178 172 204 188 226 170C240 160 252 162 262 156"/></g></g>';
  /* the light cable from the light port to the light post */
  g+='<path class="cab sD" d="M520 155C520 205 545 214 545 256"/>';
  /* the optic */
  g+='<path class="body" d="'+scope+'"/><path class="edge sD" d="'+scope+'"/>';
  g+='<path class="edge sD" d="M539 312V270H551V312"/><path class="edge sD" d="M535 270V256H555V270"/>';
  g+='<path class="ring" d="M582 312V348"/><path class="edge sD" d="M520 312V348M528 312V348"/>';
  /* step 1: the light, along the cable, down the post and through the shaft, leaving the tip */
  g+='<path id="tkLt" class="lt" d="M520 155C520 205 545 214 545 256V330H90"/>';
  g+='<path id="tkCn" class="cone" d="M84 334L14 430L96 452Z"/>';
  /* step 2: the image path back to the eyepiece, the dimensions */
  g+='<path id="tkIm" class="im" d="M92 330H650"/>';
  g+='<g id="tkDim"><path class="dim" d="M80 378H470M80 370V386M470 370V386"/></g>';
  /* step 3: the camera head on the eyepiece, the signal back to the unit, the monitor feed */
  g+='<g id="tkCam"><path class="camb" d="M652 302H716V358H652Z"/></g>';
  g+='<path id="tkCc" class="cc" d="M716 330C744 330 748 262 712 214C690 186 650 186 650 156"/>';
  g+='<path id="tkMc" class="cc" d="M470 110H330"/>';
  /* labels, per step (>= 8px clear of every stroke, DR3) */
  g+='<g id="tkL1">'+(mob?'':'<text class="t s1" x="562" y="214">LICHTLEITER</text>')+'<text class="t s1" x="'+(mob?150:130)+'" y="'+(mob?420:404)+'">'+(mob?"LICHT":"LICHTAUSTRITT")+'</text></g>';
  g+='<g id="tkL2">'+(mob?'':'<text class="t s1" x="200" y="308">BILDWEG ZUM OKULAR</text>')+'<text class="t" x="'+(mob?90:200)+'" y="'+(mob?412:404)+'">'+(mob?"150–425 MM":"ARBEITSLÄNGE 150–425 MM")+'</text>'+(mob?'':'<text class="t" x="200" y="360">Ø 4,9–8,1 CHARR.</text>')+'</g>';
  g+='<g id="tkL3">'+(mob?'':'<text class="t s1" x="596" y="392">KAMERAKOPF</text>')+'<text class="t s1" x="80" y="'+(mob?284:276)+'">10× DIGITALZOOM</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · LICHT</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · OPTIK</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · BILD</text></g>';
  return g+'</svg>';
}
function scene(){return tkScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),body:$(".body",svg),ring:$(".ring",svg),ports:$$(".port",svg),u:$$("text.u",svg),lt:dl("#tkLt"),cn:$("#tkCn",svg),im:dl("#tkIm"),dim:$("#tkDim",svg),
    cam:$("#tkCam",svg),cc:dl("#tkCc"),mc:dl("#tkMc"),pic:$("#tkPic",svg),
    L1:$("#tkL1",svg),L2:$("#tkL2",svg),L3:$("#tkL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b);E.ports.forEach(function(e){op(e,b)});E.u.forEach(function(e){op(e,b)})}
    op(E.body,b);op(E.ring,b);
    /* step 1: light from the unit to the tip, then out */
    draw(E.lt,b*seg(p,.04,.22));
    op(E.cn,b*seg(p,.2,.3)*(1-.6*seg(p,.36,.44)));
    op(E.L1,b*seg(p,.06,.14)*(1-seg(p,.33,.38)));
    /* step 2: the image back to the eyepiece; dimensions */
    draw(E.im,b*seg(p,.4,.58));
    op(E.dim,b*seg(p,.44,.52)*(1-seg(p,.64,.68)));
    op(E.L2,b*seg(p,.46,.54)*(1-seg(p,.64,.68)));
    /* step 3: camera head, the signal to the unit and on to the monitor, the picture */
    op(E.cam,b*seg(p,.68,.74));
    draw(E.cc,b*seg(p,.7,.8));draw(E.mc,b*seg(p,.78,.86));
    op(E.pic,b*seg(p,.84,.92));
    op(E.L3,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}
