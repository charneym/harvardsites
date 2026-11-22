/* The story scene (BL/BY/DB): the Altitude procedure as ONE continuous scene, drawn as a fine-line lateral view of two lumbar
   vertebrae (anterior left, posterior right, as in the hero photograph), their disc and exiting nerve root, and the skin line.
   Step 1 (access): a 1-inch incision in the skin over the interspinous space, and the access path to it.
   Step 2 (expand): the implant enters the interspinous space between the two spinous processes and expands to hold them, with no
   bone removed (sharpbiomedical.com: "Implant expansion removes the need for bone dissection"). The implant is drawn as a
   labelled SCHEMATIC block, since Sharp has not published its geometry.
   Step 3 (home): access withdrawn, the incision closed; the outpatient facts from their site (moderate anesthesia, outpatient
   surgery setting, same-day home). Every element is driven by the scrubbed story. */
var SCW=760,SCH=520,VD=168;
function vert(dy){
  var g='<g transform="translate(0 '+dy+')">';
  /* vertebral body, slightly waisted, with an engraved trabecular hatch */
  g+='<path class="bn sD" d="M96 58C150 49 236 49 290 58C298 96 298 140 292 172C238 181 150 181 98 172C90 136 90 94 96 58Z"/>';
  for(var i=0;i<6;i++){var y=74+i*17;g+='<path class="ht sD" d="M'+(112+i%2*8)+' '+y+'C160 '+(y-5)+' 228 '+(y-5)+' '+(276-i%2*8)+' '+y+'"/>'}
  /* posterior elements: pedicle, superior articular process, lamina, spinous process, inferior articular process */
  g+='<path class="bn sD" d="M292 70C312 68 330 66 344 64L352 34C356 26 368 26 372 34L382 70C412 80 450 92 490 102C534 110 572 120 594 136C604 150 598 168 580 172C534 176 488 168 448 168C424 168 408 178 402 196L396 214C392 222 382 222 378 214L370 186C354 170 324 160 292 156Z"/>';
  /* transverse process seen end-on */
  g+='<ellipse class="bn sD" cx="352" cy="112" rx="30" ry="15"/>';
  g+='<path class="ht sD" d="M470 112C510 120 556 128 582 142M452 152C500 156 540 160 574 160"/>';
  return g+'</g>';
}
function sharpScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+=vert(20)+vert(20+VD);
  /* disc between the bodies */
  g+='<path class="dc sD" d="M100 194C150 201 236 201 290 193L292 226C238 234 150 234 98 228Z"/>';
  /* exiting nerve root through the foramen */
  g+='<path class="nv sD" d="M300 186C318 204 330 214 330 240C330 276 312 300 296 330"/>';
  /* skin line, posterior */
  g+='<path class="sk sD" d="M664 6C672 120 676 240 672 360C670 410 666 450 662 490"/>';
  g+='</g>';
  g+='<g id="scTx">';
  g+='<text class="t" x="96" y="'+(mob?24:30)+'">'+(mob?'LUMBAR SPINE, SIDE VIEW':'LUMBAR SPINE · LATERAL VIEW')+'</text>';
  if(!mob){g+='<text class="t" x="194" y="214" text-anchor="middle">DISC</text>';
    g+='<text class="t" x="194" y="'+(20+VD+200)+'" text-anchor="middle">VERTEBRAL BODY</text>';}
  g+='<text class="t" x="'+(mob?420:470)+'" y="'+(mob?96:98)+'">'+(mob?'SPINOUS':'SPINOUS PROCESS')+'</text>';
  g+='<text class="t" x="684" y="'+(mob?40:36)+'">SKIN</text>';
  g+='</g>';
  /* step 1: incision and access path */
  g+='<g id="scInc"><path class="cut" d="M668 196V262"/><path class="br" d="M686 196H694V262H686"/><text class="a" x="702" y="'+(mob?236:234)+'">1 IN</text></g>';
  g+='<path id="scCn" class="cn" d="M668 229H540"/>';
  /* step 2: the implant (schematic) in the interspinous space */
  g+='<g id="scImp"><rect id="imB" class="im" x="484" y="214" width="58" height="30"/>'+
     '<path id="imU" class="imx" d="M513 214V206M505 210L513 202L521 210"/><path id="imD" class="imx" d="M513 244V252M505 248L513 256L521 248"/>'+
     '<path id="imL" class="br" d="M548 250L678 284"/><text class="a" x="684" y="'+(mob?298:294)+'">IMPLANT</text><text class="t" x="684" y="'+(mob?322:312)+'">SCHEMATIC</text></g>';
  /* step 3: outpatient facts */
  var cy=SCH-92,ch=mob?44:36;
  g+='<g id="scDone">';
  var C=mob?[["OUTPATIENT",20,236],["MODERATE",270,220],["SAME DAY",504,236]]:[["OUTPATIENT SETTING",20,232],["MODERATE ANESTHESIA",266,236],["HOME SAME DAY",516,224]];
  C.forEach(function(c){g+='<rect class="chip" x="'+c[1]+'" y="'+cy+'" width="'+c[2]+'" height="'+ch+'"/><text class="a" x="'+(c[1]+c[2]/2)+'" y="'+(cy+ch/2+(mob?8:4.5))+'" text-anchor="middle">'+c[0]+'</text>'});
  g+='</g>';
  var ly=SCH-6;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">'+(mob?'A 1-INCH INCISION':'A 1-INCH INCISION OVER THE INTERSPINOUS SPACE')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">'+(mob?'EXPANDS, NO BONE REMOVED':'THE IMPLANT EXPANDS, NO BONE DISSECTION')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">'+(mob?'HOME THE SAME DAY':'A FASTER PROCEDURE, HOME THE SAME DAY')+'</text></g>';
  return g+'</svg>';
}
function scene(){return sharpScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),tx:$("#scTx",svg),inc:$("#scInc",svg),cn:$("#scCn",svg),imp:$("#scImp",svg),
    imB:$("#imB",svg),imU:$("#imU",svg),imD:$("#imD",svg),imL:$("#imL",svg),done:$("#scDone",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.tx,b)}
    var inc=seg(p,.05,.2),cn=seg(p,.14,.3),ins=seg(p,.36,.5),ex=seg(p,.5,.64),out=seg(p,.7,.8),dn=seg(p,.74,.88);
    op(E.inc,b*inc*(1-.55*out));
    /* the access path draws in, then is withdrawn */
    op(E.cn,b*cn*(1-out));E.cn.setAttribute("d","M668 229H"+(668-128*cn*(1-out)).toFixed(1));
    /* implant slides in along the path, then expands between the spinous processes */
    var x=484+120*(1-ins),hh=30+44*ex,y=229-hh/2;
    E.imB.setAttribute("x",x.toFixed(1));E.imB.setAttribute("y",y.toFixed(1));E.imB.setAttribute("height",hh.toFixed(1));
    E.imU.setAttribute("transform","translate("+(x-484).toFixed(1)+" "+(-22*ex).toFixed(1)+")");E.imD.setAttribute("transform","translate("+(x-484).toFixed(1)+" "+(22*ex).toFixed(1)+")");
    op(E.imU,1-seg(p,.66,.72));op(E.imD,1-seg(p,.66,.72));
    op(E.imp,b*seg(p,.34,.4));op(E.imL,seg(p,.5,.6));
    op(E.done,b*dn);
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.74,.82));
  };
}
