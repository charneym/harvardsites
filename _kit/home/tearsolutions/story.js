/* The story scene (DB/BL): TearSolutions' own explanation of the tear film (tearsolutions.com, "The Tear Film": a lipid
   layer that "stabilizes the tear film ... to prevent tear film collapse", an aqueous layer that "provides nutrients,
   enzymes, growth factors", a mucin layer that lets the film "spread evenly over the surface of the eye"; with low or no
   lacritin: tear film instability, "pro-inflammatory cytokines, cell damage and death", "neural signaling disruption";
   with lacritin/Lacripep: "balance of lipid, aqueous and mucin layers", cell repair, "neural sensing"), drawn as ONE
   fine-line cross-section of the eye's surface that fills the frame: the three tear-film layers over the corneal
   epithelium (squamous, wing and basal cells), the corneal nerves rising between the basal cells, and the stroma below.
   Frame 0 is already complete.
   Step 1 (tear film): the three layers settle in, with lacritin (logo rose) in the aqueous layer.
   Step 2 (deficiency): lacritin fades, the lipid layer breaks up, the surface cells glow inflamed and the nerve
   endings dim.
   Step 3 (Lacripep): drops of Lacripep fall onto the film and spread through it; the lipid layer closes, the
   inflammation calms and the nerve endings return.
   Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
var X0=176,X1=748;
var LIP0=112,LIP1=138,MUC=318,EPI=350,BM=484;
function scR(x,y,w,h,r){return "M"+(x+r)+" "+y+"H"+(x+w-r)+"Q"+(x+w)+" "+y+" "+(x+w)+" "+(y+r)+"V"+(y+h-r)+"Q"+(x+w)+" "+(y+h)+" "+(x+w-r)+" "+(y+h)+"H"+(x+r)+"Q"+x+" "+(y+h)+" "+x+" "+(y+h-r)+"V"+(y+r)+"Q"+x+" "+y+" "+(x+r)+" "+y+"Z"}
var CELLS=[],DAMG=[];
(function(){
  function row(y,h,w,off,cls){for(var x=X0+off;x<X1-4;x+=w){var ww=Math.min(w-3,X1-x);if(ww<10)break;CELLS.push([scR(x,y,ww,h,Math.min(7,h/2)),cls])}}
  row(EPI+2,18,64,0,"sq");row(EPI+23,36,44,8,"wg");row(EPI+62,68,27,0,"bs");
})();
/* surface cells that are damaged in step 2 (indices into the squamous row) */
DAMG=[1,2,4,5,7];
var NERVE="M"+X0+" 498C260 492 300 504 350 498S440 490 490 498S590 506 640 497S720 492 "+X1+" 498";
var NBR=[];(function(){for(var x=X0+40;x<X1-20;x+=54){var t=x+6;NBR.push([x,"M"+x+" 497C"+(x-4)+" 466 "+(t+4)+" 440 "+t+" 418C"+(t-2)+" 400 "+(t+2)+" 388 "+t+" 380",t,380])}})();
var STROMA=["M"+X0+" 512C300 508 420 516 520 512S680 508 "+X1+" 512","M"+X0+" 524C320 520 440 528 540 523S690 520 "+X1+" 524","M"+X0+" 536C300 532 430 540 530 535S690 532 "+X1+" 536"];
var LACR=[[214,186],[262,262],[318,170],[372,290],[430,214],[488,276],[546,182],[604,296],[662,228],[716,272],[244,300],[466,300],[580,244],[352,232],[690,170],[530,232]];
var TP=[];(function(){var a=7;for(var i=0;i<46;i++){a=(a*9301+49297)%233280;var x=X0+14+(a/233280)*(X1-X0-28);a=(a*9301+49297)%233280;var y=LIP1+16+(a/233280)*(MUC-LIP1-32);TP.push([x.toFixed(1),y.toFixed(1)])}})();
var GLYC=[];(function(){for(var x=X0+10;x<X1-6;x+=16)GLYC.push("M"+x+" "+EPI+"c-3 -8 3 -14 0 -22")})();
/* the healthy lipid layer as one band; the broken one as islands with gaps */
function lipBroken(){var s="",x=X0,k=0,W=[62,40,78,30,54,70,36,58,46,60];while(x<X1-10){var w=W[k%W.length],g=18+(k*13)%22;var x2=Math.min(X1,x+w);
  s+="M"+x+" "+(LIP0+6)+"Q"+((x+x2)/2)+" "+(LIP0+1)+" "+x2+" "+(LIP0+6)+"M"+x+" "+(LIP1-4)+"Q"+((x+x2)/2)+" "+(LIP1-1)+" "+x2+" "+(LIP1-4);x=x2+g;k++}return s}
var DROPS=[[280,LIP0],[410,LIP0],[540,LIP0],[670,LIP0]];
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'170 66 584 500':'20 52 734 516')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="tsInf"><stop offset="0" stop-color="#e6a08a" stop-opacity=".5"/><stop offset="1" stop-color="#e6a08a" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="tsCalm"><stop offset="0" stop-color="#adc3d4" stop-opacity=".34"/><stop offset="1" stop-color="#adc3d4" stop-opacity="0"/></radialGradient>'+
     '<linearGradient id="tsFx" x1="'+X0+'" x2="'+X1+'" y1="0" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity=".25"/><stop offset=".09" stop-color="#fff"/><stop offset=".91" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity=".25"/></linearGradient>'+
     '<mask id="tsFade" maskUnits="userSpaceOnUse" x="0" y="0" width="800" height="600"><rect x="'+(X0-4)+'" y="0" width="'+(X1-X0+8)+'" height="600" fill="url(#tsFx)"/></mask>'+
     '<linearGradient id="tsAq" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#adc3d4" stop-opacity=".11"/><stop offset="1" stop-color="#adc3d4" stop-opacity=".03"/></linearGradient></defs>';
  g+='<g mask="url(#tsFade)">';
  /* glows sit behind the drawing */
  g+='<ellipse class="halo" id="hInf" cx="476" cy="'+(EPI+30)+'" rx="300" ry="96" fill="url(#tsInf)"/>';
  g+='<ellipse class="halo" id="hCalm" cx="476" cy="'+(EPI-60)+'" rx="320" ry="170" fill="url(#tsCalm)"/>';
  /* the aqueous body of the film */
  g+='<rect id="aqF" x="'+X0+'" y="'+LIP1+'" width="'+(X1-X0)+'" height="'+(MUC-LIP1)+'" fill="url(#tsAq)"/>';
  g+='<g id="scTp">';TP.forEach(function(p){g+='<circle class="tp" r="1.5" cx="'+p[0]+'" cy="'+p[1]+'"/>'});g+='</g>';
  g+='<g id="scBase">';
  g+='<path class="wl sD" id="lipT" d="M'+X0+' '+LIP0+'H'+X1+'"/><path class="wl sD" id="lipB" d="M'+X0+' '+LIP1+'H'+X1+'"/>';
  g+='<path class="wo sD" d="M'+X0+' '+MUC+'H'+X1+'"/>';
  GLYC.forEach(function(d){g+='<path class="wmd sD" d="'+d+'"/>'});
  CELLS.forEach(function(c,i){g+='<path class="'+(c[1]==="bs"?"wo":"wmd")+' sD cl'+(c[1]==="sq"?' sq':'')+'" d="'+c[0]+'"/>'});
  g+='<path class="wl sD" d="M'+X0+' '+BM+'H'+X1+'"/>';
  STROMA.forEach(function(d){g+='<path class="wo sD" d="'+d+'"/>'});
  g+='<path class="nv sD" d="'+NERVE+'"/>';
  g+='</g>';
  /* nerve branches and endings (dim in step 2) */
  g+='<g id="scNb">';NBR.forEach(function(b){g+='<path class="nb" d="'+b[1]+'"/><circle class="ne" r="2.6" cx="'+b[2]+'" cy="'+b[3]+'"/>'});g+='</g>';
  /* the broken lipid layer, and the damaged surface cells */
  g+='<path id="lipX" class="wl" d="'+lipBroken()+'"/>';
  g+='</g><g id="scDm">';var sq=CELLS.filter(function(c){return c[1]==="sq"});DAMG.forEach(function(i){if(sq[i])g+='<path class="dm" d="'+sq[i][0]+'"/>'});g+='</g>';
  /* lacritin in the aqueous layer, and Lacripep drops */
  g+='<g id="scLc">';LACR.forEach(function(p){g+='<circle class="lc" r="3.4" cx="'+p[0]+'" cy="'+p[1]+'"/>'});g+='</g>';
  g+='<g id="scLp">';LACR.forEach(function(p){g+='<circle class="lp" r="3.4" cx="'+p[0]+'" cy="'+p[1]+'"/>'});g+='</g>';
  g+='<g id="scDr">';DROPS.forEach(function(p){g+='<path class="dq" d="M0 -16C-3 -9 -7 -4 -7 1a7 7 0 0 0 14 0c0-5-4-10-7-17z" transform="translate('+p[0]+' 70)"/>'});g+='</g>';
  /* layer labels, left of the drawing with a clear gap (DR) */
  if(!mob){
    g+='<g id="lLay">'+
      '<text class="t" x="160" y="'+(LIP0+15)+'" text-anchor="end">LIPID</text>'+
      '<text class="t" x="160" y="252" text-anchor="end">AQUEOUS</text>'+
      '<text class="t" x="160" y="'+(MUC+4)+'" text-anchor="end">MUCIN</text>'+
      '<text class="t" x="160" y="'+(EPI+68)+'" text-anchor="end">EPITHELIUM</text>'+
      '<text class="t" x="160" y="502" text-anchor="end">NERVES</text></g>';
    g+='<g id="lLc"><text class="t a2" x="160" y="200" text-anchor="end">LACRITIN</text></g>';
  }else{g+='<g id="lLay"></g><g id="lLc"></g>'}
  var ly=SCH-4,lx=mob?X0:X0;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'A STABLE THREE-LAYER FILM':'LIPID, AQUEOUS AND MUCIN IN BALANCE')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'LOW LACRITIN, FILM BREAKS UP':'LOW LACRITIN: THE FILM BREAKS UP, CELLS INFLAME')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'LACRIPEP RESTORES THE FILM':'LACRIPEP RESTORES THE FILM AND THE CORNEA')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),nb:$$("#scNb .nb",svg),ne:$$("#scNb .ne",svg),lipX:$("#lipX",svg),lipT:$("#lipT",svg),lipB:$("#lipB",svg),dm:$("#scDm",svg),tp:$("#scTp",svg),
    lc:$$("#scLc .lc",svg),lp:$$("#scLp .lp",svg),dr:$$("#scDr .dq",svg),aq:$("#aqF",svg),hI:$("#hInf",svg),hC:$("#hCalm",svg),
    lay:$("#lLay",svg),lLc:$("#lLc",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.3),s2=seg(p,.36,.6),s3=seg(p,.68,.92),bad=s2*(1-s3);
    /* 1. the film: lacritin settles into the aqueous layer */
    E.lc.forEach(function(el,i){op(el,b*seg(p,.06+i*.012,.18+i*.012)*(1-s2))});
    op(E.lLc,b*seg(p,.1,.2)*(1-seg(p,.34,.42)));
    op(E.lay,b);
    /* 2. deficiency: the lipid layer breaks into islands, the aqueous thins, the cells inflame, the nerve endings dim */
    op(E.lipT,1-bad);op(E.lipB,1-bad);op(E.lipX,b*bad);
    op(E.aq,b*(1-.75*bad));op(E.tp,b*(1-.6*bad));
    op(E.hI,b*bad);op(E.dm,b*bad);
    E.nb.forEach(function(el,i){op(el,b*(1-.8*bad))});E.ne.forEach(function(el,i){op(el,b*(1-.9*bad))});
    /* 3. Lacripep: drops fall onto the film, spread through it, and the film and cornea recover */
    E.dr.forEach(function(el,i){var f=seg(p,.66+i*.025,.78+i*.025),y=70+(LIP0-8-70)*f*f;el.setAttribute("transform","translate("+DROPS[i][0]+" "+y.toFixed(1)+")");op(el,b*seg(p,.64+i*.025,.68+i*.025)*(1-seg(p,.78+i*.025,.82+i*.025)))});
    E.lp.forEach(function(el,i){op(el,b*seg(p,.78+i*.008,.88+i*.008))});
    op(E.hC,b*s3);
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.8,.88));
  };
}
