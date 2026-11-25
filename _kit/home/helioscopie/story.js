/* The story scene (BL/BY/DB): how HELIOSPHERE works (helioscopie.fr/heliosphere), drawn as ONE continuous fine-line view of the
   oesophagus and stomach, kept on screen for all three steps. Step 1: the folded balloon is passed down the oesophagus into the
   stomach (endoscopic, outpatient). Step 2: it is inflated with air through its fine tube, to about 105 mm and under 15 g, and sits
   freely in the stomach. Step 3: the treatment timeline: removed at 6 months with the extraction kit; a second balloon, Newtech 720,
   can follow for 6 more months. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var HBX=290,HBY=244,HBR=64;
/* the stomach: oesophagus, fundus, greater curvature, antrum, pylorus (outer line); the lesser curvature (inner line) */
var HS_OUT="M300 18L314 104C292 86 238 84 214 118C186 158 186 250 214 300C246 356 330 380 420 366C488 356 540 322 574 278L650 270";
var HS_IN="M330 18L342 108C352 160 372 218 420 238C470 258 520 248 556 226L650 222";
function hsScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="wall sD" d="'+HS_OUT+'"/><path class="wall sD" d="'+HS_IN+'"/>';
  g+='<path class="duo sD" d="M650 270C690 272 712 290 722 330M650 222C700 218 736 250 748 300"/>';
  g+='<text class="t" x="356" y="40">ŒSOPHAGE</text>';
  g+='<text class="t" x="560" y="372">ESTOMAC</text>';
  g+='</g>';
  /* step 1: the folded balloon, a small capsule, travelling down the oesophagus */
  g+='<g id="fold"><rect class="cap1" x="-9" y="-20" width="18" height="40" rx="9"/><path class="cap2" d="M-4 -14V14M4 -14V14"/></g>';
  /* the fine filling tube, from the mouth down to the balloon */
  g+='<path id="tube" class="tub" d="M322 0L326 60C328 100 316 140 '+HBX+' '+(HBY-HBR)+'"/>';
  /* air travelling down the tube */
  g+='<g id="air">';for(i=0;i<6;i++)g+='<circle class="drop" r="2.6" cx="0" cy="0"/>';g+='</g>';
  /* step 2: the balloon, inflated */
  g+='<g id="bal"><circle class="bl" cx="'+HBX+'" cy="'+HBY+'" r="'+HBR+'"/><path class="bls" d="M'+(HBX-HBR+8)+' '+(HBY-14)+'C'+(HBX-30)+' '+(HBY+10)+' '+(HBX+30)+' '+(HBY+10)+' '+(HBX+HBR-8)+' '+(HBY-14)+'"/>'+
     '<circle class="vlv" cx="'+HBX+'" cy="'+(HBY-HBR)+'" r="5"/></g>';
  /* state notes, in the open field right of the lesser curvature */
  g+='<g id="m1"><text class="t s3" x="430" y="120">'+(mob?"PLIÉ, PAR LA BOUCHE":"PLIÉ, PAR LES VOIES NATURELLES")+'</text><text class="t" x="430" y="146">'+(mob?"EN AMBULATOIRE":"SOUS CONTRÔLE ENDOSCOPIQUE")+'</text></g>';
  g+='<g id="m2"><text class="t s2" x="430" y="120">'+(mob?"GONFLÉ À L’AIR":"GONFLÉ À L’AIR, LIBRE DANS L’ESTOMAC")+'</text><text class="t" x="430" y="146">'+(mob?"≈ 105 MM · < 15 G":"≈ 105 MM · 600 CM³ · MOINS DE 15 G")+'</text></g>';
  g+='<g id="m3"><text class="t s1" x="430" y="120">'+(mob?"RETIRÉ À 6 MOIS":"RETIRÉ À 6 MOIS AVEC LE KIT D’EXTRACTION")+'</text><text class="t" x="430" y="146">'+(mob?"PUIS NEWTECH 720":"PUIS, SI BESOIN, UN SECOND BALLON")+'</text></g>';
  /* step 3: the 6 + 6 month timeline */
  g+='<g id="tl"><path class="rul" d="M30 424H730"/><path class="rul" d="M30 416V432M380 416V432M730 416V432"/>'+
     '<path class="rulp" id="rulp" d="M30 424H380"/><path class="rulq" id="rulq" d="M380 424H730"/>'+
     '<text class="t" x="30" y="456">'+(mob?"0":"MOIS 0")+'</text><text class="t" x="380" y="456" text-anchor="middle">6 MOIS</text>'+
     '<text class="t" x="730" y="456" text-anchor="end">12 MOIS</text>'+
     '<text class="t s1" x="205" y="404" text-anchor="middle">NEWTECH 600</text><text class="t s2" x="555" y="404" text-anchor="middle">NEWTECH 720</text></g>';
  /* step captions, in the clear band under the scene */
  g+='<g id="lb1"><text class="a" x="30" y="504">'+(mob?"LA POSE":"LA POSE, EN AMBULATOIRE")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="30" y="504">'+(mob?"LE GONFLAGE":"LE GONFLAGE À L’AIR")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="30" y="504">'+(mob?"6 + 6 MOIS":"UN TRAITEMENT DE 6 + 6 MOIS")+'</text></g>';
  return g+'</svg>';
}
function scene(){return hsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var tube=$("#tube",svg),TL=tube?tube.getTotalLength():0;
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),fold:$("#fold",svg),tube:dl("#tube"),drops:$$("#air .drop",svg),air:$("#air",svg),
    bal:$("#bal",svg),blc:$("#bal .bl",svg),bls:$("#bal .bls",svg),vlv:$("#bal .vlv",svg),
    tl:$("#tl",svg),rulp:dl("#rulp"),rulq:dl("#rulq"),m1:$("#m1",svg),m2:$("#m2",svg),m3:$("#m3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function tf(el,x,y){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")")}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: the folded capsule travels down the tube's path, then settles at the balloon's centre */
    var fd=seg(p,.04,.26);
    if(tube&&E.fold){var pt=tube.getPointAtLength(fd*TL),pt2=tube.getPointAtLength(Math.min(TL,fd*TL+4)),ang=Math.atan2(pt2.y-pt.y,pt2.x-pt.x)*57.3-90;
      var st=seg(p,.26,.32),fx=pt.x+(HBX-pt.x)*st,fy=pt.y+(HBY-pt.y)*st;
      E.fold.setAttribute("transform","translate("+fx.toFixed(1)+" "+fy.toFixed(1)+") rotate("+(ang*(1-st)).toFixed(1)+")")}
    op(E.fold,b*seg(p,.02,.08)*(1-seg(p,.40,.44)));
    draw(E.tube,b*seg(p,.32,.40));op(tube,1-seg(p,.66,.72));
    /* step 2: air runs down the tube and the balloon grows from the capsule to its full ~105 mm */
    var inf=seg(p,.40,.58),rr=HBR*(.25+.75*inf);
    op(E.bal,b*seg(p,.38,.42));
    if(E.blc)E.blc.setAttribute("r",rr.toFixed(1));
    op(E.bls,seg(inf,.85,1));
    if(E.vlv)E.vlv.setAttribute("cy",(HBY-rr).toFixed(1));
    var fl=seg(p,.38,.44)*(1-seg(p,.56,.62));op(E.air,b*fl);
    if(fl>0&&tube){E.drops.forEach(function(d,j){var u=((p-.38)*4+j/E.drops.length)%1;var q=tube.getPointAtLength(u*TL);tf(d,q.x,q.y)})}
    /* step 3: the 6 + 6 month timeline draws */
    var t3=seg(p,.74,.96);
    op(E.tl,b*seg(p,.70,.76));draw(E.rulp,seg(t3,0,.5));draw(E.rulq,seg(t3,.5,1));
    op(E.m1,b*seg(p,.08,.14)*(1-seg(p,.30,.34)));op(E.m2,b*seg(p,.48,.54)*(1-seg(p,.66,.70)));op(E.m3,b*seg(p,.80,.86));
    op(E.l1,b*seg(p,.06,.12)*(1-seg(p,.30,.34)));op(E.l2,b*seg(p,.40,.46)*(1-seg(p,.62,.66)));op(E.l3,b*seg(p,.76,.82));
  };
}
