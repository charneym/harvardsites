/* The story scene (BL/BY/DB): Covision's four knee designs, as covision-medical.co.uk > Knee Systems describes them, drawn as ONE
   total knee in side elevation (anterior to the right), kept on screen for all four steps over faint femur and tibia outlines:
   1 C/R (St Leger): the posterior cruciate ligament is kept; a shallow insert.
   2 P/S (St Leger): the ligament gives way to a post on the insert and a cam on the femoral component.
   3 M/P (Superica): the insert deepens into a conforming ball-and-socket articulation; the condyle's sphere is traced.
   4 Revision (Reflecto): an extension press-fit stem and femoral and tibial augments slide into place.
   No wound, blood or soft tissue other than the one ligament line (DT). */
var KX=[150,270,390,510];
function cvInsert(k){var e=(338-22*k).toFixed(1),q=(372+20*k).toFixed(1);return "M198 "+e+"Q300 "+q+" 402 "+e+"L404 384H196Z"}
function cvScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"150 0 300 572":"60 0 520 620")+'" aria-hidden="true"><defs>'+
    '<linearGradient id="cvMet" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e9eef4"/><stop offset=".5" stop-color="#9aa6b4"/><stop offset="1" stop-color="#5d6a7a"/></linearGradient>'+
    '<linearGradient id="cvBf" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4f5f7" stop-opacity="0"/><stop offset=".45" stop-color="#f4f5f7" stop-opacity=".07"/></linearGradient>'+
    '<linearGradient id="cvBt" x1="0" y1="0" x2="0" y2="1"><stop offset=".4" stop-color="#f4f5f7" stop-opacity=".07"/><stop offset="1" stop-color="#f4f5f7" stop-opacity="0"/></linearGradient>'+
    '<linearGradient id="cvTi" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b9c2cc"/><stop offset="1" stop-color="#6f7b88"/></linearGradient></defs>';
  /* faint bone outlines: femur above, tibia below */
  g+='<path class="bf" fill="url(#cvBf)" d="M236 30C222 78 212 128 210 178L222 178V262L252 326H348L370 280L362 96C356 66 352 46 350 30Z"/>';
  g+='<path class="bf" fill="url(#cvBt)" d="M196 398C204 432 218 456 226 494H374C382 456 396 432 404 398Z"/>';
  g+='<path class="bn sD" d="M210 178C212 128 222 78 236 30M362 96C356 66 352 46 350 30"/>';
  g+='<path class="bn sD" d="M196 398C204 432 218 456 226 494M404 398C396 432 382 456 374 494"/>';
  /* the posterior cruciate ligament (C/R) */
  g+='<g id="cvPcl"><path class="lig" d="M226 196C214 252 206 330 214 420"/><path class="lig2" d="M234 200C224 256 218 330 226 418"/></g>';
  /* revision: femoral stem extension (behind the component) */
  g+='<g id="cvFs"><path class="ti" d="M291 330V64Q300 52 309 64V330Z"/><path class="pl" d="M300 70V320"/></g>';
  /* tibial tray, keel and revision stem extension */
  g+='<g id="cvTs"><path class="ti" d="M293 448V560Q300 572 307 560V448Z"/></g>';
  g+='<path class="tray" d="M188 384H412V396H188Z"/><path class="ln sD" d="M188 384H412V396H188Z"/>';
  g+='<path class="tray" d="M284 396H316L309 452Q300 462 291 452Z"/><path class="ln sD" d="M284 396H316L309 452Q300 462 291 452Z"/>';
  /* revision: augments, femoral (distal, posterior) and tibial */
  g+='<g id="cvAug"><rect class="aug" x="264" y="312" width="74" height="14"/><rect class="aug" x="222" y="200" width="14" height="58"/><rect class="aug" x="196" y="396" width="64" height="14"/></g>';
  /* the PE insert (its top deepens for the medial pivot) */
  g+='<path class="pe" id="cvIn" d="'+cvInsert(0)+'"/>';
  /* the post (P/S, Reflecto) */
  g+='<g id="cvPost"><path class="pe2" d="M289 352V296Q300 284 311 296V352Z"/></g>';
  /* the femoral component */
  var FEM="M372 92C382 130 392 170 392 210A100 100 0 1 1 206 216L210 178H222V262L252 326H348L370 280L362 96Z";
  g+='<path class="fem" d="'+FEM+'"/><path class="ln sD" d="'+FEM+'"/>';
  g+='<path class="hl" d="M380 118C388 158 392 190 390 214"/>';
  /* the cam (P/S): a bar between the condyles, seen end-on */
  g+='<g id="cvCam"><circle class="cam" cx="262" cy="300" r="10"/></g>';
  /* medial pivot: the condyle's sphere, traced */
  g+='<circle class="sph" id="cvSph" cx="300" cy="250" r="100"/>';
  /* labels: the design name on top, the part that changes on the left */
  g+='<text class="nm" id="cvNm" x="300" y="'+(mob?18:22)+'" text-anchor="middle">ST LEGER C/R</text>';
  if(!mob){
    g+='<text class="cl" id="cvL" x="186" y="300" text-anchor="end">PCL KEPT</text>';
    g+='<text class="cl fx" x="410" y="150" text-anchor="start">FEMORAL</text><text class="cl fx" x="410" y="168" text-anchor="start">COMPONENT</text>';
    g+='<text class="cl fx" x="424" y="364" text-anchor="start">INSERT</text>';
    g+='<text class="cl fx" x="424" y="402" text-anchor="start">TIBIAL TRAY</text>';
  }
  var BX=KX;
  if(!mob)g+='<path class="pl sD" d="M110 590H550"/>';
  if(!mob)BX.forEach(function(x,k){g+='<circle class="dt" id="cvD'+k+'" cx="'+x+'" cy="590" r="5"/>'});
  if(!mob)["1 · C/R","2 · P/S","3 · M/P","4 · REVISION"].forEach(function(c,k){g+='<text class="a" id="cvC'+k+'" x="'+BX[k]+'" y="614" text-anchor="middle">'+c+'</text>'});
  return g+'</svg>';
}
function scene(){return cvScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),D:[0,1,2,3].map(function(k){return $("#cvD"+k,svg)}),C:[0,1,2,3].map(function(k){return $("#cvC"+k,svg)}),
    pcl:$("#cvPcl",svg),post:$("#cvPost",svg),cam:$("#cvCam",svg),ins:$("#cvIn",svg),sph:$("#cvSph",svg),
    fs:$("#cvFs",svg),ts:$("#cvTs",svg),aug:$("#cvAug",svg),nm:$("#cvNm",svg),L:$("#cvL",svg),fx:$$(".fx",svg)};
  var NM=["ST LEGER C/R","ST LEGER P/S","SUPERICA M/P","REFLECTO REVISION"],LB=["PCL KEPT","POST AND CAM","BALL AND SOCKET","STEM AND AUGMENTS"];
  var lastB=-1,lastC=-1,lastK=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=(+v).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var w=[1-seg(p,.23,.27),seg(p,.23,.27)*(1-seg(p,.48,.52)),seg(p,.48,.52)*(1-seg(p,.73,.77)),seg(p,.73,.77)];
    var cur=w.indexOf(Math.max.apply(null,w));
    E.D.forEach(function(d,k){if(d){d.classList.toggle("on",k<=cur);op(d,b)}});
    E.C.forEach(function(c,k){if(c){op(c,b*(k===cur?1:.5));c.classList.toggle("on",k===cur)}});
    if(cur!==lastC){lastC=cur;E.nm.textContent=NM[cur];if(E.L)E.L.textContent=LB[cur]}
    op(E.nm,b);op(E.L,b);E.fx.forEach(function(t){op(t,b)});
    /* 1 C/R: the ligament draws in, then gives way at P/S */
    var lig=seg(p,.03,.15)*(1-seg(p,.27,.36));op(E.pcl,b*lig);
    /* 2 P/S: the post rises from the insert, the cam appears; both stay for the constrained revision insert, not for M/P */
    var ps=seg(p,.30,.42)*(1-seg(p,.50,.56))+seg(p,.80,.88);
    E.post.setAttribute("transform","translate(0,"+(44*(1-Math.min(1,ps))).toFixed(1)+")");op(E.post,b*Math.min(1,ps));op(E.cam,b*Math.min(1,ps));
    /* 3 M/P: the insert deepens into a socket and the condyle's sphere is traced */
    var k=seg(p,.54,.66)*(1-seg(p,.76,.82));var kk=Math.round(k*40)/40;if(kk!==lastK){lastK=kk;E.ins.setAttribute("d",cvInsert(kk))}
    op(E.sph,b*seg(p,.58,.66)*(1-seg(p,.74,.78)));
    /* 4 Revision: the stems slide in along their axes, the augments settle */
    var rv=seg(p,.79,.92);
    E.fs.setAttribute("transform","translate(0,"+(-60*(1-rv)).toFixed(1)+")");op(E.fs,b*rv);
    E.ts.setAttribute("transform","translate(0,"+(50*(1-rv)).toFixed(1)+")");op(E.ts,b*rv);
    op(E.aug,b*seg(p,.84,.95));
  };
}
