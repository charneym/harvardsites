/* the story scene (BL/BY/DB): how Zip-stitch works, drawn in fine engraved line. ONE vaginal cuff wound stays on screen for all three steps,
   seen face-on through the laparoscope. Step 1 the open cuff: two wound edges (labelled), the hardest step to suture laparoscopically.
   Step 2 the applicator: its shaft and jaws travel along the wound, the edges come together and a clip is deployed at each station
   (clips drawn as the real Zip-stitch clip seen from above: two arms, a crossbar, a toothed end).
   Step 3 healing: the applicator withdraws, the wound line fades to a healed seam and the bioabsorbable clips dissolve.
   Sources: zsxmedical.com Technology page and the NIH R44HD104539 abstract. Schematic, not to scale. Driven by the scrubbed story progress. */
var ZX=[236,318,400,482,564];
function cuffD(g){return 'M120 280C220 '+(280-g)+' 580 '+(280-g)+' 680 280C580 '+(280+g)+' 220 '+(280+g)+' 120 280Z'}
function lipD(g,s){return 'M120 280C220 '+(280+s*g)+' 580 '+(280+s*g)+' 680 280'}
function clipG(x,i){
  return '<g class="zc" id="zc'+i+'" transform="translate('+x+' 280)">'+
   '<path class="cb" d="M-30 -15H24Q32 -15 32 -7V7Q32 15 24 15H-30Q-36 15 -36 9V-9Q-36 -15 -30 -15Z"/>'+
   '<path class="cs" d="M-24 -5H18V5H-24Z"/>'+
   '<path class="ct" d="M32 -7L38 -4L32 -1M32 1L38 4L32 7"/>'+
   '<path class="ch2" d="M-36 -9H-30M-36 9H-30"/></g>'}
function scene(){
  var mob=MOBILE(),g='',i,X=mob?40:40;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="zglow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#8ec2ea" stop-opacity=".16"/><stop offset="1" stop-color="#8ec2ea" stop-opacity="0"/></radialGradient><clipPath id="fovc"><circle cx="400" cy="280" r="261"/></clipPath></defs>';
  g+='<g id="scBase"><ellipse class="pg" cx="400" cy="290" rx="380" ry="250" fill="url(#zglow)"/>';
  /* the laparoscopic view: a circular field of view */
  g+='<circle class="fov sD" cx="400" cy="280" r="262"/>';
  /* engraved tissue contours around the cuff */
  g+='<g clip-path="url(#fovc)">';
  for(i=0;i<5;i++){var ry=40+i*26,dx=300+i*10;g+='<path class="tis sD" d="M'+(400-dx)+' 280C'+(400-dx*.62)+' '+(280-ry)+' '+(400+dx*.62)+' '+(280-ry)+' '+(400+dx)+' 280"/><path class="tis sD" d="M'+(400-dx)+' 280C'+(400-dx*.62)+' '+(280+ry)+' '+(400+dx*.62)+' '+(280+ry)+' '+(400+dx)+' 280"/>'}
  g+='</g></g>';
  /* the wound: dark opening, two lips (the shape changes as the edges come together) */
  g+='<g id="wound"><path class="wd" id="wd" d="'+cuffD(64)+'"/><path class="lip" id="lipU" d="'+lipD(64,-1)+'"/><path class="lip" id="lipL" d="'+lipD(64,1)+'"/>';
  g+='<path class="seam" id="seam" d="M150 280H650"/></g>';
  /* clips, one per station */
  g+='<g id="clips">';for(i=0;i<ZX.length;i++)g+=clipG(ZX[i],i);g+='</g>';
  /* the applicator: shaft from the upper right, jaws at the station */
  g+='<g clip-path="url(#fovc)"><g id="app"><path class="sh" d="M28 -24L330 -330"/><path class="sh" d="M44 -8L346 -314"/><path class="sh2" d="M36 -16L338 -322"/>'+
     '<path class="jw" d="M30 -26L6 -16L-34 -16M46 -10L40 14L-34 16"/><path class="jw2" d="M-34 -16V16"/></g></g>';
  /* step 1 labels */
  g+='<g id="s1"><path class="ldr" d="M300 228L230 120H'+X+'"/><text class="a" x="'+X+'" y="108">'+(mob?'CUFF':'VAGINAL CUFF')+'</text>';
  g+='<path class="ldr" d="M200 318L170 460H'+X+'"/><text class="a" x="'+X+'" y="448">'+(mob?'EDGES':'WOUND EDGES')+'</text>';
  g+='<text class="t" x="760" y="534" text-anchor="end">'+(mob?'':'HARD TO SUTURE LAPAROSCOPICALLY')+'</text></g>';
  /* step 2 labels */
  g+='<g id="s2"><path class="ldr" d="M600 166L640 112H760"/><text class="a" x="760" y="100" text-anchor="end">APPLICATOR</text>';
  g+='<path class="ldr" d="M482 298L520 460H760"/><text class="a" x="760" y="448" text-anchor="end">'+(mob?'CLIP':'BIOABSORBABLE CLIP')+'</text></g>';
  /* step 3 labels */
  g+='<g id="s3"><path class="ldr" d="M318 296L280 460H'+X+'"/><text class="a" x="'+X+'" y="448">'+(mob?'NO PUNCTURE':'NO TISSUE PIERCED')+'</text>';
  g+='<path class="ldr" d="M564 262L620 120H760"/><text class="a" x="760" y="108" text-anchor="end">'+(mob?'CLIPS DISSOLVE':'CLIPS DISSOLVE AS IT HEALS')+'</text></g>';
  g+='</svg>';
  return g;
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .pg",svg),wound:$("#wound",svg),wd:$("#wd",svg),lu:$("#lipU",svg),ll:$("#lipL",svg),seam:$("#seam",svg),
    s1:$("#s1",svg),l1:dl("#s1 .ldr"),s2:$("#s2",svg),l2:dl("#s2 .ldr"),s3:$("#s3",svg),l3:dl("#s3 .ldr"),app:$("#app",svg),
    clips:ZX.map(function(x,i){return $("#zc"+i,svg)})};
  var lastB=-1;
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    op(E.wound,b);
    /* step 1: the open cuff */
    var o1=1-seg(p,.28,.36);op(E.s1,seg(b,.6,1)*o1);draw(E.l1,seg(b,.6,1));
    /* step 2: the applicator travels right to left; the edges close behind it and a clip lands at each station */
    var t2=seg(p,.36,.62),o2=1-seg(p,.62,.7);op(E.s2,b*seg(p,.34,.44)*o2);draw(E.l2,seg(p,.38,.48));
    var gap=64-58*seg(p,.36,.6);
    E.wd.setAttribute("d",cuffD(gap));E.lu.setAttribute("d",lipD(gap,-1));E.ll.setAttribute("d",lipD(gap,1));
    var n=ZX.length,ax=ZX[n-1]+(ZX[0]-ZX[n-1])*t2,out=seg(p,.66,.8);
    E.app.setAttribute("transform","translate("+(ax+300*out).toFixed(1)+" "+(280-300*out).toFixed(1)+")");
    op(E.app,b*seg(p,.3,.38)*(1-out));
    /* step 3: the seam heals and the clips dissolve */
    var h3=seg(p,.72,.94);
    E.clips.forEach(function(el,i){var at=.36+.26*(n-1-i)/(n-1);op(el,b*seg(p,at,at+.025)*(1-.78*h3))});
    op(E.wd,1-.9*seg(p,.6,.8));op(E.seam,seg(p,.58,.66)*(1-.55*h3));
    op(E.lu,1-.7*h3);op(E.ll,1-.7*h3);
    op(E.s3,b*seg(p,.7,.78));draw(E.l3,seg(p,.72,.84));
  };
}
