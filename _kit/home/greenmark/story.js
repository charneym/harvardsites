/* The story scene (BL/BY/DB): how CrystLCare™ works (greenmark.bio Technology; the enamel repair diagram on their home
   page), as ONE continuous cross-section of enamel, drawn in fine line: enamel rods running from the surface down to the
   dentin, an early subsurface lesion (intact surface layer, porous body beneath, opened by micropores).
   Step 1 (target): positively charged starch particles (+) drift down and are drawn through the micropores into the lesion.
   Step 2 (release): salivary amylase breaks the starch down; each particle releases calcium (ivory) and phosphate (green) ions.
   Step 3 (rebuild): the ions form hexagonal hydroxyapatite crystals; the broken rods inside the lesion are made whole again.
   Schematic. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=468;
var SURF=104,DEJ=392,LX0=318,LX1=578,LY0=SURF+20,LY1=300;
var RODS=(function(){var a=[];for(var x=150;x<=730;x+=20)a.push(x);return a})();
var PORES=[372,448,524];
function inLes(x,y){var cx=(LX0+LX1)/2,cy=(LY0+LY1)/2,rx=(LX1-LX0)/2,ry=(LY1-LY0)/2;return ((x-cx)*(x-cx))/(rx*rx)+((y-cy)*(y-cy))/(ry*ry)<1}
var RNG=(function(){var s=91;return function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff}})();
/* particles: start in the saliva, pass a pore, settle at a spot inside the lesion */
var PART=(function(){var a=[],spots=[[350,170],[400,200],[448,160],[492,214],[540,176],[426,248],[372,236],[514,256],[470,196]];
  spots.forEach(function(s,i){var pr=PORES[i%3];a.push({sx:pr-60+RNG()*120,sy:12+RNG()*50,px:pr,py:SURF+6,tx:s[0],ty:s[1],d:i*.06})});return a})();
var IONS=(function(){var a=[];PART.forEach(function(P,k){for(var j=0;j<7;j++){var an=RNG()*Math.PI*2,r=16+RNG()*28;var tx=P.tx+Math.cos(an)*r,ty=P.ty+Math.sin(an)*r*.8;
  if(!inLes(tx,ty)){tx=P.tx+Math.cos(an)*10;ty=P.ty+Math.sin(an)*8}a.push({k:k,tx:tx,ty:ty,ph:j%2})}});return a})();
var XT=(function(){var a=[],n=0;while(a.length<26&&n<900){n++;var x=LX0+RNG()*(LX1-LX0),y=LY0+RNG()*(LY1-LY0);if(!inLes(x,y))continue;
  if(a.some(function(q){return Math.hypot(q.x-x,q.y-y)<21}))continue;a.push({x:x,y:y,r:6+RNG()*3.5,rot:RNG()*60,d:RNG()*.5})}return a})();
function hexPts(r){var s='';for(var i=0;i<6;i++){var an=Math.PI/3*i+Math.PI/6;s+=(r*Math.cos(an)).toFixed(1)+','+(r*Math.sin(an)).toFixed(1)+' '}return s}
function rodPath(x,y0,y1){var d='M'+x+' '+y0,y;for(y=y0+24;y<=y1;y+=24)d+='Q'+(x+((y/24)%2?3:-3))+' '+(y-12)+' '+x+' '+y;return d}
function enamelScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="sk sD" d="M140 '+SURF+'C300 '+(SURF-5)+' 560 '+(SURF+5)+' 740 '+SURF+'"/>';
  g+='<path class="bm sD" d="M140 '+DEJ+'C220 '+(DEJ-8)+' 300 '+(DEJ+8)+' 380 '+DEJ+'S540 '+(DEJ-8)+' 620 '+DEJ+'S700 '+(DEJ+6)+' 740 '+DEJ+'"/>';
  RODS.forEach(function(x){var les=x>LX0+4&&x<LX1-4;
    if(!les)g+='<path class="vs sD" d="'+rodPath(x,SURF+6,DEJ-6)+'"/>';
    else{g+='<path class="vs sD" d="'+rodPath(x,SURF+6,LY0+4)+'"/><path class="vs sD" d="M'+x+' '+(LY1+6)+'L'+x+' '+(DEJ-6)+'"/>'}});
  for(i=0;i<5;i++){var y=DEJ+18+i*14;g+='<path class="cg sD" d="M150 '+y+'c60 -6 100 6 160 0s100 -6 160 0 100 6 160 0 60 -4 110 0"/>'}
  g+='<text class="t" x="20" y="'+(SURF-30)+'">SALIVA</text>';
  g+='<text class="t" x="20" y="'+(SURF+44)+'">ENAMEL</text>';
  g+='<text class="t" x="20" y="'+(LY1-30)+'">SUBSURFACE</text><text class="t" x="20" y="'+(LY1-14)+'">LESION</text>';
  g+='<text class="t" x="20" y="'+(DEJ+40)+'">DENTIN</text>';
  g+='</g>';
  /* the lesion: broken rod fragments in a porous body, and its outline */
  g+='<g id="scLes">';RODS.forEach(function(x){if(x<=LX0+4||x>=LX1-4)return;for(var y=LY0+8;y<LY1;y+=15){if(!inLes(x,y))continue;g+='<path class="fr" d="M'+x+' '+y+'v7"/>'}});
  g+='<ellipse class="lo" cx="'+((LX0+LX1)/2)+'" cy="'+((LY0+LY1)/2)+'" rx="'+((LX1-LX0)/2)+'" ry="'+((LY1-LY0)/2)+'"/></g>';
  /* the same rods, whole again (rebuilt) */
  g+='<g id="scRep">';RODS.forEach(function(x){if(x<=LX0+4||x>=LX1-4)return;g+='<path class="rp" d="M'+x+' '+(LY0+4)+'L'+x+' '+(LY1+6)+'"/>'});g+='</g>';
  /* micropores through the surface layer */
  g+='<g id="scPor">';PORES.forEach(function(x){g+='<path class="po" d="M'+(x-5)+' '+(SURF-2)+'C'+(x-3)+' '+(SURF+10)+' '+(x+3)+' '+(SURF+10)+' '+(x+5)+' '+(SURF-2)+'"/>'});g+='</g>';
  /* new hydroxyapatite crystals */
  g+='<g id="scXt">';XT.forEach(function(q,k){g+='<polygon class="xt" data-k="'+k+'" points="'+hexPts(q.r)+'" transform="translate('+q.x.toFixed(1)+' '+q.y.toFixed(1)+') scale(0)"/>'});g+='</g>';
  /* released ions */
  g+='<g id="scIon">';IONS.forEach(function(m,k){g+='<circle class="'+(m.ph?'ip':'ic2')+'" data-k="'+k+'" r="'+(m.ph?2.6:2.2)+'" cx="0" cy="0"/>'});g+='</g>';
  /* cationic starch particles */
  g+='<g id="scPt">';PART.forEach(function(P,k){g+='<g class="pt2" data-k="'+k+'"><circle class="pb" r="10"/><circle class="pd" cx="-3" cy="-2" r="2"/><circle class="pg" cx="3.4" cy="2.2" r="2.1"/><circle class="pd" cx="2" cy="-4.5" r="1.4"/><path class="pp" d="M10 -12h6M13 -15v6M-16 -10h5M-13.5 -12.5v5"/></g>'});g+='</g>';
  var ly=SCH-8;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">'+(o.mob?'+ PARTICLES DRAWN INTO THE PORES':'POSITIVELY CHARGED PARTICLES ENTER THROUGH MICROPORES')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">'+(o.mob?'CALCIUM + PHOSPHATE RELEASED':'SALIVA ENZYMES RELEASE CALCIUM AND PHOSPHATE')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">'+(o.mob?'HYDROXYAPATITE REBUILT':'NEW HYDROXYAPATITE FILLS THE LESION FROM WITHIN')+'</text></g>';
  return g+'</svg>';
}
function scene(){return enamelScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),les:$("#scLes",svg),rep:$$("#scRep .rp",svg),por:$$("#scPor .po",svg),
    xt:$$(".xt",svg).map(function(el){return {el:el,q:XT[+el.getAttribute("data-k")]}}),
    ion:$$("#scIon circle",svg).map(function(el){return {el:el,m:IONS[+el.getAttribute("data-k")]}}),
    pt:$$(".pt2",svg).map(function(el){return {el:el,P:PART[+el.getAttribute("data-k")]}}),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var tgt=seg(p,.03,.34),rel=seg(p,.38,.6),reb=seg(p,.64,.9);
    op(E.les,b*(1-.85*reb));
    E.por.forEach(function(el){op(el,b*(1-reb))});
    E.rep.forEach(function(el,i){op(el,b*sm((reb-.1-(i%5)*.04)/.6))});
    E.pt.forEach(function(T){var P=T.P,q=sm((tgt-P.d)/.5),x,y;
      if(q<.55){var u=sm(q/.55);x=P.sx+(P.px-P.sx)*u;y=P.sy+(P.py-P.sy)*u}else{var v=sm((q-.55)/.45);x=P.px+(P.tx-P.px)*v;y=P.py+(P.ty-P.py)*v}
      var dis=sm((rel-P.d*.5)/.6),s=1-.75*dis;
      T.el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") scale("+s.toFixed(3)+")");op(T.el,b*sm(tgt*4)*(1-dis))});
    E.ion.forEach(function(I){var m=I.m,P=PART[m.k],q=sm((rel-P.d*.5)/.7),x=P.tx+(m.tx-P.tx)*q,y=P.ty+(m.ty-P.ty)*q,gone=sm((reb-.05)/.55);
      I.el.setAttribute("cx",x.toFixed(1));I.el.setAttribute("cy",y.toFixed(1));op(I.el,b*sm(q*3)*(1-gone))});
    E.xt.forEach(function(X){var q=X.q,k=sm((reb-q.d*.4)/.6);
      X.el.setAttribute("transform","translate("+q.x.toFixed(1)+" "+q.y.toFixed(1)+") rotate("+q.rot.toFixed(0)+") scale("+k.toFixed(3)+")");op(X.el,b*Math.min(1,k*1.5))});
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.32,.38)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.6,.66)));op(E.l3,b*seg(p,.72,.8));
  };
}
