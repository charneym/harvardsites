/* the story scene (BL/BY/DB): the Foam-Karve process as one engraved plate in four panels, all drawn faint from the start and
   each brought to full line in turn (and kept), so the frame is never empty:
   Cast   - the beanbag cast, with the impression of the seated shape as contour lines.
   Carve  - the template copied across into a foam block: the cutter on its gantry over the block, the contours carved in.
   Try    - the rough base and back cushions, side view, tried for comfort and shape (the dished faces drawn).
   Finish - the finished seat in its purple covers, with shell, brackets and the wheelbase under it.
   Source: delichon.uk Foam-Karve and How It Works pages. Schematic, driven by the scrubbed story progress. */
var BAG='M70 150C60 110 120 80 185 82C255 84 310 108 302 150C296 186 240 200 185 198C125 196 78 186 70 150Z';
var BAG1='M110 138C112 116 150 104 186 105C226 106 262 118 262 140C262 160 228 170 186 170C146 170 108 160 110 138Z';
var BAG2='M140 136C142 124 166 118 188 118C214 118 236 126 234 138C232 150 212 156 188 156C164 156 138 150 140 136Z';
var BAG3='M150 136C160 129 176 129 181 138M195 138C201 129 220 129 228 136';
var BLK='M430 120L560 92L700 118L570 148ZM430 120V176L570 204V148M570 204L700 174V118';
var CV1='M484 121C494 108 536 101 566 102C602 103 640 110 646 121C640 134 602 141 566 141C528 141 490 134 484 121Z';
var CV2='M516 121C524 113 546 109 566 109C588 109 608 114 614 121C608 129 588 133 566 133C544 133 522 128 516 121Z';
var CUT='M598 30H630V60H598ZM614 60V92M608 92H620L614 102Z';
var GAN='M630 44H712V186M598 44H560';
var CPY='M306 140H418M410 134L418 140L410 146';
/* side-view seat at (dx,dy): back cushion and base cushion with dished faces */
function seatP(dx,dy){var f=function(x,y){return (x+dx)+' '+(y+dy)};
  return {back:'M'+f(90,392)+'V'+(262+dy)+'C'+f(90,250)+' '+f(100,246)+' '+f(110,248)+'C'+f(124,251)+' '+f(128,262)+' '+f(126,278)+'C'+f(122,304)+' '+f(124,330)+' '+f(130,356),
   base:'M'+f(130,356)+'C'+f(160,362)+' '+f(206,352)+' '+f(254,354)+'C'+f(266,354)+' '+f(272,360)+' '+f(272,370)+'V'+(392+dy)+'H'+(90+dx),
   dish:'M'+f(112,262)+'C'+f(116,290)+' '+f(114,318)+' '+f(120,344)+'M'+f(140,366)+'C'+f(170,370)+' '+f(214,362)+' '+f(258,364)};}
var S3=seatP(0,0);
var COV='M470 392V262C470 250 480 246 490 248C504 251 508 262 506 278C502 304 504 330 510 356C540 362 586 352 634 354C646 354 652 360 652 370V392Z';
var SHL='M462 400V258C462 244 474 238 490 240M462 400H660V372';
var FRM='M500 400L520 414M630 400L650 414M480 414H680';
var HND='';
function scene(){
  var mob=MOBILE(),g='';
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 740 440" aria-hidden="true">';
  g+='<defs><linearGradient id="dlCov" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8b6fc0"/><stop offset="1" stop-color="#5e4588"/></linearGradient></defs>';
  /* base plate: panel rules and every panel drawn faint */
  g+='<g id="scBase">';
  g+='<path class="sD rule" d="M370 14V426M14 220H726"/>';
  g+='<path class="sD gh" d="'+BAG+'"/><path class="sD gh" d="'+BLK+'"/><path class="sD gh" d="'+S3.back+S3.base+'"/><path class="sD gh" d="'+COV+'"/>';
  g+='<text class="a" x="24" y="40">CAST</text><text class="a" x="394" y="40">CARVE</text><text class="a" x="24" y="246">TRY</text><text class="a" x="394" y="246">FINISH</text>';
  g+='</g>';
  /* step 1: the cast and its impression */
  g+='<g id="st1"><path class="sD1 bag" d="'+BAG+'"/><path class="sD1 ctr" d="'+BAG1+'"/><path class="sD1 ctr" d="'+BAG2+'"/><path class="sD1 ctr" d="'+BAG3+'"/></g>';
  /* step 2: copied across and carved into the foam block */
  g+='<g id="st2"><path class="sD2 cpy" d="'+CPY+'"/><path class="sD2 blk" d="'+BLK+'"/><path class="sD2 gan" d="'+GAN+'"/><path class="sD2 cut" d="'+CUT+'"/><path class="sD2 ctr" d="'+CV1+'"/><path class="sD2 ctr" d="'+CV2+'"/></g>';
  /* step 3: the rough cushions, tried for shape */
  g+='<g id="st3"><path class="sD3 cush" d="'+S3.back+'"/><path class="sD3 cush" d="'+S3.base+'"/><path class="sD3 ctr" d="'+S3.dish+'"/></g>';
  /* step 4: covered, shelled, bracketed, on the wheelbase */
  g+='<g id="st4"><path class="cov" d="'+COV+'"/><path class="sD4 shl" d="'+SHL+'"/><path class="sD4 cush" d="'+COV+'"/><path class="sD4 frm" d="'+FRM+HND+'"/>'+
     '<circle class="sD4 whl" cx="498" cy="388" r="26"/><circle class="sD4 hub" cx="498" cy="388" r="4"/><circle class="sD4 whl" cx="676" cy="418" r="10"/></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),s:[1,2,3,4].map(function(k){return $("#st"+k,svg)}),
    c:[1,2,3,4].map(function(k){return dl("#st"+k+" .sD"+k)}),cov:$("#st4 .cov",svg)};
  var lastB=-1,W=[[0,.1],[.25,.36],[.5,.61],[.75,.86]];
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    for(var k=0;k<4;k++){var v=seg(p,W[k][0],W[k][1]);op(E.s[k],b*Math.min(1,v*3));draw(E.c[k],v)}
    if(E.cov)op(E.cov,seg(p,.8,.9)*.92);
  };
}
