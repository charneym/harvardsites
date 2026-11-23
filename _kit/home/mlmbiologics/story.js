/* The story scene (DB/BL/BY): bio-ConneKt Wound Matrix at work, as MLM describes it (mlmbiologics.com/bio-connekt.html:
   "Easily conformable to ensure maximum contact with wound bed"; "Hydrophillic scaffold to facilitate rapid fluid
   absorption (0.5 cc per sq cm of surface area)"; "Porous matrix to enable optimal host cell infiltration"; "Stabilized
   collagen to prevent premature digestion in wound bed"; "Remodelable"; "Supports Wound Closure"). ONE fine-line block of
   skin in cross-section (epidermis, dermis, lobulated fat) with an open wound, kept on screen throughout. Frame 0 is
   already complete: the matrix sheet rests just above the wound.
   Step 1 (conform): the sheet settles into the wound and lines the bed; exudate (blue) is drawn up into it.
   Step 2 (infiltrate): host cells (brand green) move in from the wound edges and bed into the porous collagen.
   Step 3 (close): new tissue fills the wound from the bed up, the matrix is remodelled, and new epithelium closes over.
   Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
var BX0=110,BX1=650,SY=210,WX0=280,WX1=480,WD=300;
/* the wound bed: a bowl from (280,210) down to y=300 and back up to (480,210) */
function bedY(x){var t=(x-WX0)/(WX1-WX0);return SY+(WD-SY)*Math.sin(Math.PI*Math.max(0,Math.min(1,t)))}
var NM=25;
function matPath(k){
  /* k=0: a flat sheet resting above the wound; k=1: conformed to the bed (bottom on the bed, 12 units thick) */
  var top=[],bot=[],i,x,yb,yt,fx0=WX0+4,fx1=WX1-4,fy=SY-34;
  for(i=0;i<NM;i++){var u=i/(NM-1);x=fx0+(fx1-fx0)*u;
    var cb=bedY(x)-1.5,ct=Math.max(bedY(x)-13,SY-5);
    if(u<.02||u>.98){cb=SY-1.5;ct=SY-5}
    yb=fy+12+(cb-fy-12)*k;yt=fy+(ct-fy)*k;
    top.push(x.toFixed(1)+" "+yt.toFixed(1));bot.push(x.toFixed(1)+" "+yb.toFixed(1))}
  return "M"+top.join("L")+"L"+bot.reverse().join("L")+"Z";
}
var SKIN_L="M"+BX0+" "+SY+"L"+WX0+" "+SY,SKIN_R="M"+WX1+" "+SY+"L"+BX1+" "+SY;
function wav(x0,x1,y,a,n){var d="M"+x0+" "+y,i,st=(x1-x0)/n;for(i=0;i<n;i++){var xa=x0+st*i;d+="Q"+(xa+st/4).toFixed(1)+" "+(y+(i%2?a:-a))+" "+(xa+st/2).toFixed(1)+" "+y+"T"+(xa+st).toFixed(1)+" "+y}return d}
var EPI_L=wav(BX0,WX0-6,230,5,6),EPI_R=wav(WX1+6,BX1,230,5,6);
var BED="M"+WX0+" "+SY;(function(){for(var i=1;i<=40;i++){var x=WX0+(WX1-WX0)*i/40;BED+="L"+x.toFixed(1)+" "+bedY(x).toFixed(1)}})();
var DERM="M"+BX0+" 352L"+BX1+" 352";
var FAT=[];(function(){var y,x,r=0;for(y=374;y<530;y+=34){r++;for(x=BX0+18+(r%2?0:24);x<BX1-20;x+=48)FAT.push([x,y])}})();
var BOX="M"+BX0+" "+SY+"L"+BX0+" 540L"+BX1+" 540L"+BX1+" "+SY;
/* exudate droplets in the bed, cells in the dermis beside and below the wound, and where they end up */
var EXU=[300,328,354,380,406,432,460].map(function(x){return [x,bedY(x)+9]});
var CELLS=[[[236,270],[304,240]],[[226,318],[322,268]],[[300,336],[350,282]],[[380,342],[380,288]],[[460,336],[410,284]],[[534,318],[438,268]],[[524,270],[458,240]],[[262,300],[330,256]],[[498,300],[432,256]],[[340,346],[364,286]],[[420,346],[396,286]]];
/* new tissue: contour lines filling the wound from the bed up */
var FILL=[];(function(){for(var j=1;j<=6;j++){var y=WD-j*13,d="",first=true;for(var i=0;i<=40;i++){var x=WX0+(WX1-WX0)*i/40;if(bedY(x)-2<y)continue;d+=(first?"M":"L")+x.toFixed(1)+" "+y.toFixed(1);first=false}if(d)FILL.push(d)}})();
function storyScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'96 92 568 490':'-10 88 790 484')+'" aria-hidden="true">';
  g+='<defs><clipPath id="mClip"><path d="'+matPath(1)+'"/></clipPath></defs>';
  g+='<g id="scBase">';
  g+='<path class="wo sD" d="'+BOX+'"/>';
  g+='<path class="wl sD" d="'+SKIN_L+'"/><path class="wl sD" d="'+SKIN_R+'"/>';
  g+='<path class="wmd sD" d="'+EPI_L+'"/><path class="wmd sD" d="'+EPI_R+'"/>';
  g+='<path class="wl sD" d="'+BED+'"/>';
  g+='<path class="wo sD" d="'+DERM+'"/>';
  FAT.forEach(function(f){g+='<path class="wo sD" d="M'+(f[0]-19)+' '+f[1]+'a19 14 0 1 0 38 0a19 14 0 1 0 -38 0"/>'});
  g+='</g>';
  /* new tissue (step 3), under the matrix */
  g+='<g id="scFill">';FILL.forEach(function(d){g+='<path class="nt" d="'+d+'"/>'});g+='</g>';
  /* the matrix sheet */
  g+='<path class="mx" id="scMat" d="'+matPath(0)+'"/>';
  /* exudate and cells */
  g+='<g id="scExu">';EXU.forEach(function(p){g+='<circle class="ex" r="3.2" cx="'+p[0]+'" cy="'+p[1]+'"/>'});g+='</g>';
  g+='<g id="scCell">';CELLS.forEach(function(c){g+='<circle class="ce" r="3.6" cx="'+c[0][0]+'" cy="'+c[0][1]+'"/>'});g+='</g>';
  /* new epithelium closing over the wound from both edges */
  g+='<path class="ep" id="epL" d="M'+(WX0-6)+' '+SY+'L380 '+SY+'"/><path class="ep" id="epR" d="M'+(WX1+6)+' '+SY+'L380 '+SY+'"/>';
  /* labels, each leader stopping short of its text (DR) */
  if(!mob){
    g+='<g id="lSkin"><path class="ld" d="M'+(BX0-4)+' 220L80 220"/><text class="t" x="72" y="224" text-anchor="end">SKIN</text></g>';
    g+='<g id="lBed"><path class="ld" d="M300 262L104 300"/><text class="t" x="96" y="304" text-anchor="end">WOUND BED</text></g>';
    g+='<g id="lMat"><path class="ld" d="M480 186L602 140"/><text class="t" x="610" y="136">COLLAGEN</text><text class="t" x="610" y="152">MATRIX</text></g>';
    g+='<g id="lExu"><path class="ld" d="M466 '+(bedY(466)+12).toFixed(0)+'L664 290"/><text class="t" x="672" y="294">EXUDATE</text></g>';
    g+='<g id="lCell"><path class="ld" d="M462 252L664 268"/><text class="t" x="672" y="272">HOST CELLS</text></g>';
    g+='<g id="lEpi"><path class="ld" d="M352 '+(SY-4)+'L312 144"/><text class="t" x="312" y="132" text-anchor="middle">NEW EPITHELIUM</text></g>';
  }else{
    g+='<g id="lSkin"></g><g id="lBed"></g><g id="lExu"></g><g id="lCell"></g><g id="lEpi"></g>';
    g+='<g id="lMat"><path class="ld" d="M470 180L500 146"/><text class="t" x="506" y="140">MATRIX</text></g>';
  }
  var ly=mob?576:566,lx=BX0;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'CONFORMS AND ABSORBS':'THE SHEET CONFORMS AND DRAWS UP FLUID')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'HOST CELLS MOVE IN':'HOST CELLS MOVE INTO THE POROUS COLLAGEN')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THE WOUND CLOSES':'NEW TISSUE FILLS IN AND THE WOUND CLOSES')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fill:dl("#scFill .nt"),epL:dl("#epL"),epR:dl("#epR"),mat:$("#scMat",svg),exu:$$("#scExu .ex",svg),cells:$$("#scCell .ce",svg),
    lSkin:$("#lSkin",svg),lBed:$("#lBed",svg),lMat:$("#lMat",svg),lExu:$("#lExu",svg),lCell:$("#lCell",svg),lEpi:$("#lEpi",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,lastK=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.3),s2=seg(p,.36,.62),s3=seg(p,.68,.94);
    /* 1. the sheet settles into the wound and lines the bed; exudate rises into it and is taken up */
    var k=sm(seg(p,.04,.2));if(Math.abs(k-lastK)>.002){lastK=k;E.mat.setAttribute("d",matPath(k))}
    op(E.mat,b*(1-.55*s3));
    E.exu.forEach(function(el,i){var f=sm(seg(p,.18+i*.012,.3+i*.012));var y0=EXU[i][1],x=EXU[i][0];
      el.setAttribute("cy",(y0-(y0-(bedY(x)-7))*f).toFixed(1));op(el,b*seg(p,.12,.18)*(1-seg(p,.27+i*.012,.33+i*.012)))});
    op(E.lSkin,b*(1-seg(p,.08,.14)));
    op(E.lBed,b*(1-seg(p,.12,.18)));
    op(E.lMat,b*(1-seg(p,.3,.36)));
    op(E.lExu,b*seg(p,.16,.22)*(1-seg(p,.3,.35)));
    /* 2. host cells move in from the edges and the bed */
    E.cells.forEach(function(el,i){var c=CELLS[i],f=sm(seg(p,.38+i*.01,.56+i*.01));
      el.setAttribute("cx",(c[0][0]+(c[1][0]-c[0][0])*f).toFixed(1));el.setAttribute("cy",(c[0][1]+(c[1][1]-c[0][1])*f).toFixed(1));
      op(el,b*seg(p,.34,.4))});
    op(E.lCell,b*seg(p,.5,.56)*(1-seg(p,.64,.7)));
    /* 3. new tissue fills from the bed up, the matrix is remodelled, the epithelium closes over */
    E.fill.forEach(function(a,i){var f=seg(p,.68+i*.03,.78+i*.03);a[0].style.strokeDashoffset=(a[1]*(1-f)).toFixed(1);op(a[0],b*(f>0?1:0))});
    var e=seg(p,.8,.92);draw(E.epL,e);draw(E.epR,e);op(E.epL[0][0],b*(e>0?1:0));op(E.epR[0][0],b*(e>0?1:0));
    op(E.lEpi,b*seg(p,.88,.94));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
