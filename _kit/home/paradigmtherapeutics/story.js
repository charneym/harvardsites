/* The story scene (DB/BL): what SD-101 (Zorblesia) is for, in Paradigm's own words (paradigmtherapeutics.com, What is EB and
   Zorblesia: "fragile skin that blisters and tears from minor friction or trauma"; a topical cream "applied topically over the
   entire body daily"; "accelerates wound healing by promoting formation of epithelial and granulation tissue"; primary outcome
   "target wound closure"). ONE continuous fine-line scene that fills the frame: a cross-section of skin (epidermis of
   keratinocytes, the wavy basement membrane, the dermis with collagen fibres and capillary loops), with a blister and an open
   wound. Frame 0 is already complete.
   Step 1 (fragile skin): the blister cavity and the wound bed light; labels name them.
   Step 2 (whole body): the cream layer draws across the WHOLE skin surface, into the wound, and particles settle into the bed.
   Step 3 (wound closure): new epithelial cells grow in from both wound edges to the centre, capillary loops form in the bed
   (granulation tissue), and the blister settles flat. Everything is driven by the scrubbed progress. Labels sit >= 8px clear
   of every stroke (DR3). */
var SCW=760,SCH=560;
var SX0=30,SX1=640,SY=206,DB=532;
var WX0=238,WX1=358,BX0=470,BX1=574;
function sf(x){return SY+3.2*Math.sin((x-SX0)/31)}
function bm(x){return SY+112+13*Math.sin((x-SX0)/27)}
function pth(f,x0,x1,st){var d="",x;st=st||4;for(x=x0;x<=x1+.01;x+=st){d+=(d?"L":"M")+x.toFixed(1)+" "+f(Math.min(x,x1)).toFixed(1)}return d}
var WW=20;
function bedY(x){var t=(x-WX0-WW)/(WX1-WX0-2*WW);t=t<0?0:t>1?1:t;return bm(x)+4+18*Math.sin(Math.PI*t)}
function flr(x){if(x<WX0+WW){var k=(x-WX0)/WW;k=k<0?0:k;return sf(WX0)+(bedY(WX0+WW)-sf(WX0))*Math.sin(k*Math.PI/2)}if(x>WX1-WW){var k2=(WX1-x)/WW;k2=k2<0?0:k2;return sf(WX1)+(bedY(WX1-WW)-sf(WX1))*Math.sin(k2*Math.PI/2)}return bedY(x)}
function domeH(x){var t=(x-BX0)/(BX1-BX0);return t<=0||t>=1?0:Math.pow(Math.sin(Math.PI*t),1.4)}
function storyScene(o){
  var g='',i,x,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'18 62 634 498':'0 0 '+SCW+' '+SCH)+'" aria-hidden="true">';
  g+='<defs><linearGradient id="gcr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe9f2" stop-opacity=".0"/><stop offset=".5" stop-color="#cfe9f2" stop-opacity=".42"/><stop offset="1" stop-color="#cfe9f2" stop-opacity=".16"/></linearGradient>'+
    '<radialGradient id="gwd"><stop offset="0" stop-color="#f0b45a" stop-opacity=".5"/><stop offset="1" stop-color="#f0b45a" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* the section's cut edges and the skin surface (gapped at the wound and the blister) */
  g+='<path class="wl sD" d="'+pth(sf,SX0,WX0)+'"/><path class="wl sD" d="'+pth(sf,WX1,BX0)+'"/><path class="wl sD" d="'+pth(sf,BX1,SX1)+'"/>';
  g+='<path class="wo sD" d="'+pth(function(x){return sf(x)+7},SX0,WX0-3)+'"/><path class="wo sD" d="'+pth(function(x){return sf(x)+7},WX1+3,BX0)+'"/><path class="wo sD" d="'+pth(function(x){return sf(x)+7},BX1,SX1)+'"/>';
  g+='<path class="wmd sD" d="M'+SX0+' '+sf(SX0).toFixed(1)+'L'+SX0+' '+DB+'"/><path class="wmd sD" d="M'+SX1+' '+sf(SX1).toFixed(1)+'L'+SX1+' '+DB+'"/>';
  /* the basement membrane: wavy, through the blister, broken at the wound */
  g+='<path class="bmL sD" d="'+pth(bm,SX0,WX0)+'"/><path class="bmL sD" d="'+pth(bm,WX1,SX1)+'"/>';
  /* the wound's cut edges and its bed in the upper dermis */
  g+='<path class="wl sD" id="bed" d="'+pth(flr,WX0,WX1,2)+'"/>';
  /* keratinocytes: rows of cells, flattening towards the surface; columnar basal cells on the membrane */
  var cells='';
  for(x=SX0+8;x<SX1-6;x+=15){
    if(x>WX0-6&&x<WX1+6)continue;
    var top=sf(x)+12,bot=bm(x)-3,hh=bot-top,rows=5,yy=top;
    for(var r=0;r<rows;r++){
      var fr=[.13,.16,.2,.23,.28][r],ch=hh*fr,cw=r<2?14:12,ox=(r%2)*7;
      var cx=x+ox,cy=yy+ch/2;yy+=ch;
      if(cx>SX1-8||(cx>WX0-8&&cx<WX1+8))continue;
      var inB=cx>BX0-4&&cx<BX1+4;if(inB&&r>0)continue;
      cells+='<ellipse cx="'+cx.toFixed(1)+'" cy="'+cy.toFixed(1)+'" rx="'+(cw/2-1).toFixed(1)+'" ry="'+(ch/2-1.4).toFixed(1)+'"/>';
    }
  }
  g+='<g class="cl sF">'+cells+'</g>';
  /* the dermis: collagen fibres and capillary loops */
  var FIB=[[40,372,600],[52,394,560],[36,418,610],[60,440,590],[44,464,600],[70,486,580],[40,508,612]];
  FIB.forEach(function(f,k){var d="",st=6,brk=true;for(x=f[0];x<=f[2];x+=st){var y=f[1]+5*Math.sin(x/(17+k*2)+k)+3*Math.sin(x/7+k*1.7);
    if(x>WX0-10&&x<WX1+10&&f[1]<bedY((WX0+WX1)/2)+30){brk=true;continue}d+=(brk?"M":"L")+x+" "+y.toFixed(1);brk=false}
    g+='<path class="fb sD" d="'+d+'"/>'});
  [70,124,178,410,446,612].forEach(function(cx){var b=bm(cx)+6;g+='<path class="cp sD" d="M'+(cx-6)+' '+(b+64)+'C'+(cx-8)+' '+(b+22)+' '+(cx-6)+' '+(b+6)+' '+cx+' '+(b+6)+'C'+(cx+6)+' '+(b+6)+' '+(cx+8)+' '+(b+22)+' '+(cx+6)+' '+(b+64)+'"/>'});
  g+='</g>';
  /* the wound bed's glow and the blister (a dome of lifted epidermis over a fluid cavity) */
  var wc=(WX0+WX1)/2;
  g+='<ellipse id="wGlow" cx="'+wc+'" cy="'+(bedY(wc)-6).toFixed(1)+'" rx="76" ry="30" fill="url(#gwd)"/>';
  var dO="",dI="",cav="";
  for(x=BX0;x<=BX1+.01;x+=2){var h=domeH(x);dO+=(dO?"L":"M")+x.toFixed(1)+" "+(sf(x)-58*h).toFixed(1);dI+=(dI?"L":"M")+x.toFixed(1)+" "+(sf(x)+12-52*h).toFixed(1)}
  cav=dI;for(x=BX1;x>=BX0-.01;x-=2)cav+="L"+x.toFixed(1)+" "+(bm(x)-4).toFixed(1);cav+="Z";
  var dC="";for(x=BX0;x<=BX1+.01;x+=2){dC+=(dC?"L":"M")+x.toFixed(1)+" "+(sf(x)-58*domeH(x)-7).toFixed(1)}
  g+='<g id="blis"><path id="bCav" class="cav" d="'+cav+'"/><path class="wl" d="'+dO+'"/><path class="wo" d="'+dI+'"/><path class="cr crp" id="crB" d="'+dC+'"/></g>';
  g+='<path class="cr crp" id="crC" d="'+pth(function(x){return sf(x)-7},BX1,SX1,3)+'"/>';
  /* the blister, healed: flat skin with its cells and the cream on it (fades in as the blister settles) */
  var hc='';for(x=BX0+2;x<BX1-4;x+=15){var tp=sf(x)+12,bt2=bm(x)-3,yy2=tp;for(var r2=0;r2<5;r2++){var fr2=[.13,.16,.2,.23,.28][r2],ch3=(bt2-tp)*fr2,cx2=x+(r2%2)*7,cy2=yy2+ch3/2;yy2+=ch3;
    if(cx2>BX1-6)continue;hc+='<ellipse cx="'+cx2.toFixed(1)+'" cy="'+cy2.toFixed(1)+'" rx="'+((r2<2?14:12)/2-1).toFixed(1)+'" ry="'+(ch3/2-1.4).toFixed(1)+'"/>'}}
  g+='<g id="blHeal"><path class="wl" d="'+pth(sf,BX0,BX1,3)+'"/><path class="wo" d="'+pth(function(x){return sf(x)+7},BX0,BX1,3)+'"/><g class="cl">'+hc+'</g><path class="cr" d="'+pth(function(x){return sf(x)-7},BX0,BX1,3)+'"/></g>';
  /* the cream: one soft layer over the whole skin surface, dipping into the wound (the part over the blister lives in the blister
     group, so it settles with it) */
  var crY=function(x){return (x>WX0&&x<WX1)?flr(x)-7:sf(x)-7};
  g+='<path class="cr crp" id="crA" d="'+pth(crY,SX0,WX0,3)+'"/><path class="cr crp" id="crW" d="'+pth(crY,WX0,WX1,2)+'"/><path class="cr crp" id="crD" d="'+pth(crY,WX1,BX0,3)+'"/>';
  g+='<path class="cr" id="crWf" d="'+pth(function(x){return sf(x)-7},WX0,WX1,3)+'"/>';
  g+='<g id="scPart">';for(i=0;i<14;i++)g+='<circle class="pt" r="2" cx="'+wc+'" cy="'+(SY-20)+'"/>';g+='</g>';
  /* the new epithelium (fills the wound from both edges) and the granulation loops */
  var nc='',n=0;
  for(x=WX0+9;x<WX1-6;x+=13){for(var rr=0;rr<5;rr++){var t0=sf(x)+12,b0=Math.min(flr(x-7),flr(x+7))-3;if(b0-t0<30)continue;var yy0=t0+(b0-t0)*rr/5,ch2=(b0-t0)/5;
    var dEdge=Math.min(x-WX0,WX1-x)/((WX1-WX0)/2);
    nc+='<ellipse class="nc" data-d="'+dEdge.toFixed(3)+'" cx="'+(x+(rr%2)*5).toFixed(1)+'" cy="'+(yy0+ch2/2).toFixed(1)+'" rx="5.4" ry="'+(ch2/2-1.4).toFixed(1)+'"/>';n++}}
  g+='<g id="newE">'+nc+'</g>';
  g+='<path id="newS" class="ns" d="'+pth(sf,WX0,WX1,3)+'"/>';
  g+='<g id="gran">';[262,298,334].forEach(function(cx){var b=bedY(cx);g+='<path class="gr" d="M'+(cx-5)+' '+(b+44)+'C'+(cx-7)+' '+(b+14)+' '+(cx-5)+' '+(b+2)+' '+cx+' '+(b+2)+'C'+(cx+5)+' '+(b+2)+' '+(cx+7)+' '+(b+14)+' '+(cx+5)+' '+(b+44)+'"/>'});g+='</g>';
  /* labels, each leader stopping >= 8px short of its text and of the thing it names (DR) */
  var bc=(BX0+BX1)/2,bt=sf(bc)-58;
  if(!mob){
    g+='<g id="lEp"><path class="ld" d="M'+(SX1+6)+' 262L'+(SX1+16)+' 262"/><text class="t" x="'+(SX1+24)+'" y="266">EPIDERMIS</text></g>';
    g+='<g id="lBm"><path class="ld" d="M'+(SX1+6)+' '+bm(SX1).toFixed(0)+'L'+(SX1+16)+' '+bm(SX1).toFixed(0)+'"/><text class="t" x="'+(SX1+24)+'" y="'+(bm(SX1)-4).toFixed(0)+'">BASEMENT</text><text class="t" x="'+(SX1+24)+'" y="'+(bm(SX1)+12).toFixed(0)+'">MEMBRANE</text></g>';
    g+='<g id="lDe"><path class="ld" d="M'+(SX1+6)+' 440L'+(SX1+16)+' 440"/><text class="t" x="'+(SX1+24)+'" y="444">DERMIS</text></g>';
  }else{g+='<g id="lEp"></g><g id="lBm"></g><g id="lDe"></g>'}
  g+='<g id="lBl"><path class="ld" d="M'+bc+' '+(bt-50)+'L'+bc+' '+(bt-10)+'"/><text class="t" text-anchor="middle" x="'+bc+'" y="'+(bt-60)+'">BLISTER</text></g>';
  g+='<g id="lWd"><path class="ld" d="M'+wc+' '+(SY-86)+'L'+wc+' '+(SY-28)+'"/><text class="t" text-anchor="middle" x="'+wc+'" y="'+(SY-96)+'">OPEN WOUND</text></g>';
  g+='<g id="lCr"><path class="ld" d="M100 '+(SY-60)+'L100 '+(SY-22)+'"/><text class="t" x="'+(mob?60:56)+'" y="'+(SY-70)+'">'+(mob?'SD-101':'SD-101 CREAM')+'</text></g>';
  g+='<g id="lNe"><path class="ld" d="M'+wc+' '+(SY-86)+'L'+wc+' '+(SY-14)+'"/><text class="t" text-anchor="middle" x="'+wc+'" y="'+(SY-96)+'">'+(mob?'NEW SKIN':'NEW EPITHELIUM')+'</text></g>';
  var ly=SCH-6,lx=mob?SX0:SX0;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'BLISTERS AND OPEN WOUNDS':'SKIN THAT BLISTERS AND TEARS AT A TOUCH')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'DAILY, WHOLE BODY':'APPLIED DAILY OVER THE ENTIRE SKIN SURFACE')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'TARGET WOUND CLOSURE':'NEW EPITHELIAL TISSUE · TARGET WOUND CLOSURE')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),cream:["#crA","#crW","#crD","#crB","#crC"].map(function(s){return dl(s)[0]}),gran:dl("#gran .gr"),newS:dl("#newS"),
    cells:$("#scBase .sF",svg),heal:$("#blHeal",svg),crW:$("#crW",svg),crWf:$("#crWf",svg),glow:$("#wGlow",svg),blis:$("#blis",svg),cav:$("#bCav",svg),
    parts:$$("#scPart .pt",svg),nc:$$("#newE .nc",svg),
    lEp:$("#lEp",svg),lBm:$("#lBm",svg),lDe:$("#lDe",svg),lBl:$("#lBl",svg),lWd:$("#lWd",svg),lCr:$("#lCr",svg),lNe:$("#lNe",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var bed=$("#bed",svg),BL=bed.getTotalLength();
  var TGT=E.parts.map(function(el,i){var q=bed.getPointAtLength(BL*(.08+.84*i/(E.parts.length-1)));return [q.x,q.y-6-((i*5)%7)]});
  var SRC=E.parts.map(function(el,i){return [WX0-40+i*(WX1-WX0+80)/(E.parts.length-1),SY-16]});
  var ND=E.nc.map(function(el){return +el.getAttribute("data-d")});
  var bc=(BX0+BX1)/2,by=sf(bc);
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.28),s2=seg(p,.36,.62),s3=seg(p,.68,.94);
    op(E.cells,b);op(E.lEp,b);op(E.lBm,b);op(E.lDe,b);
    /* 1. the blister's fluid and the open wound light */
    op(E.cav,b*(.35+.65*s1)*(1-.9*s3));op(E.glow,b*(.25+.75*s1)*(1-s3));
    op(E.lBl,b*seg(p,.06,.16)*(1-seg(p,.7,.78)));
    op(E.lWd,b*seg(p,.1,.2)*(1-seg(p,.66,.72)));
    /* 2. the cream spreads over the whole surface; particles settle into the wound bed */
    var CT=E.cream.reduce(function(a,c){return a+c[1]},0),co=0;E.cream.forEach(function(c){var v=Math.max(0,Math.min(1,(b*s2*CT-co)/c[1]));c[0].style.strokeDashoffset=(c[1]*(1-v)).toFixed(1);c[0].style.opacity=v>0?1:0;co+=c[1]});op(E.lCr,b*seg(p,.44,.52));
    E.parts.forEach(function(el,i){var k=seg(p,.46+i*.008,.62+i*.006),s=SRC[i],t=TGT[i];
      el.setAttribute("cx",(s[0]+(t[0]-s[0])*k).toFixed(1));el.setAttribute("cy",(s[1]+(t[1]-s[1])*k).toFixed(1));op(el,b*Math.min(1,k*3)*(1-s3))});
    /* 3. new epithelium grows in from both edges; granulation loops form; the blister settles */
    E.nc.forEach(function(el,i){op(el,b*seg(s3,ND[i]*.8,ND[i]*.8+.2))});
    draw(E.gran,b*seg(p,.7,.86));draw(E.newS,b*seg(p,.84,.94));
    if(E.blis){var k=1-.8*s3;E.blis.setAttribute("transform","translate(0 "+by.toFixed(1)+") scale(1 "+k.toFixed(3)+") translate(0 "+(-by).toFixed(1)+")");op(E.blis,b*(1-seg(p,.8,.94)))}
    op(E.heal,b*seg(p,.8,.94));
    if(s3>0)op(E.crW,b*(1-seg(p,.84,.94)));op(E.crWf,b*seg(p,.84,.94));
    op(E.lNe,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
