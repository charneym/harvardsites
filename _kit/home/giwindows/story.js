/* the story scene (BL/BY/DB): ONE view kept on screen for all four steps: two loops of bowel side by side, in longitudinal section
   (serosa outside, a fine villous mucosa inside), the two walls to be joined running next to each other in the middle. Steps follow
   giwindows.com, the 2025 FDA 510(k) releases and the two 2025 papers (Surgical Endoscopy; Obesity Surgery):
   1 deliver: a Flexagon magnet is delivered into each loop as a straight chain and self-forms into an octagon (seen edge-on);
   2 couple: the self-aligning magnets attract across both walls and compress them, serosa to serosa;
   3 open: the OTOLoc device captures the enterotomy between the magnets, so content flows through at once (immediately patent);
   4 heal: the tissue fuses, the devices are naturally expelled and no foreign material is left. Schematic; driven by scrubbed progress. */
var GW={cx:380,x0:60,x1:700,R:80,su:226,mu:238,mb:348,sb:360,lsu:372,lmu:384,lmb:494,lsb:506};
function gwB(x,c){var u=Math.abs(x-GW.cx)/(GW.R+46);return u>=1?0:Math.pow(Math.cos(u*Math.PI/2),2)}
function gwRand(i){var x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x)}
/* a wall line at base y, pushed by `push` px towards the middle inside the magnet span; split around an opening of half-width g */
function gwLine(y,push,g,vil,side){var f=function(n){return (+n).toFixed(1)},L='',Rr='',x,yy;
  for(x=GW.x0;x<=GW.x1;x+=3){yy=y+push*gwB(x)+(vil?vil*Math.sin(x/4.2)*(1-.7*gwB(x)*(push?1:0)):0);
    if(g>0.5&&Math.abs(x-GW.cx)<g){continue}
    if(x<GW.cx||g<=0.5)L+=(L?'L':'M')+f(x)+' '+f(yy);else Rr+=(Rr?'L':'M')+f(x)+' '+f(yy);}
  return L+(Rr?Rr.replace(/^M/,'M'):'');}
/* the projected x-intervals of an octagon of circumradius R seen edge-on: the four front sides, between pins at R*cos(k*45deg) */
function gwOct(){var R=GW.R,P=[R,R*Math.SQRT1_2,0,-R*Math.SQRT1_2,-R];var I=[];for(var k=0;k<4;k++)I.push([GW.cx+P[k+1],GW.cx+P[k]]);return I}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,C=GW;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'50 176 660 420':'30 170 700 400')+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="ser sD" id="w1" d=""/><path class="muc sD" id="w2" d=""/><path class="muc sD" id="w3" d=""/><path class="ser sD" id="w4" d=""/>';
  g+='<path class="ser sD" id="w5" d=""/><path class="muc sD" id="w6" d=""/><path class="muc sD" id="w7" d=""/><path class="ser sD" id="w8" d=""/>';
  /* faint muscle layer hatching between serosa and mucosa of the outer walls */
  var ht='';for(var x=C.x0+6;x<C.x1;x+=9){ht+='M'+x+' '+(C.su+3)+'l3 6M'+x+' '+(C.lsb-9)+'l3 6'}
  g+='<path class="hat" d="'+ht+'"/>';
  /* circular folds (plicae) rising from the outer mucosae into each lumen, and fine villi along them */
  var pf='',vl='';for(x=C.x0+18;x<C.x1-14;x+=34){var hh=9+gwRand(x)*6;pf+='M'+(x-9)+' '+(C.mu+1)+'Q'+x+' '+f(C.mu+1+hh*2)+' '+(x+9)+' '+(C.mu+1)+'M'+(x-9+17)+' '+(C.lmb-1)+'Q'+(x+17)+' '+f(C.lmb-1-hh*2)+' '+(x+9+17)+' '+(C.lmb-1)}
  for(x=C.x0+4;x<C.x1;x+=5){vl+='M'+x+' '+(C.mu+3)+'v'+f(2+gwRand(x+7)*3)+'M'+x+' '+(C.lmb-3)+'v-'+f(2+gwRand(x+9)*3)}
  g+='<path class="pli" d="'+pf+'"/><path class="vil" d="'+vl+'"/>';
  g+='<text class="t" x="'+(mob?C.x0+10:C.x0)+'" y="'+(C.lsb+(mob?44:34))+'">'+(mob?'TWO LOOPS OF BOWEL, IN SECTION':'TWO LOOPS OF BOWEL TO BE JOINED, IN SECTION')+'</text>';
  g+='</g>';
  /* the healed rim (step 4): the two mucosae meet around the new opening */
  g+='<path class="rim" id="rimL" d=""/><path class="rim" id="rimR" d=""/>';
  /* field lines between the two magnets (step 2) */
  var fl='';for(i=0;i<5;i++){var dx=(i-2)*30;fl+='<path class="fld" d="M'+(C.cx+dx-14)+' 350Q'+(C.cx+dx*1.25)+' 366 '+(C.cx+dx-14)+' 382"/>'}
  g+='<g id="flds">'+fl+'</g>';
  /* flow through the opening (step 3) */
  var fd='';for(i=0;i<16;i++)fd+='<circle class="fdot" r="2.6" cx="0" cy="0"/>';
  g+='<g id="flow">'+fd+'</g>';
  /* the two magnets: eight segments each, laid out as a chain, then folded edge-on (front four visible) */
  for(var m=0;m<2;m++){g+='<g id="mg'+m+'">';for(i=0;i<8;i++)g+='<rect class="seg" x="0" y="0" width="10" height="14"/>';for(i=0;i<5;i++)g+='<circle class="pin" r="4.2" cx="0" cy="0"/>';g+='</g>'}
  /* the OTOLoc device: a short tube with flanges, in section, holding the opening */
  g+='<g id="oto"><path class="oto" id="otoL" d=""/><path class="oto" id="otoR" d=""/></g>';
  var ly=mob?200:200,lx=mob?C.x0+10:C.x0;
  g+='<g id="lb0"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'MAGNETS SELF-FORM':'EACH MAGNET SELF-FORMS AN OCTAGON')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THEY SELF-ALIGN':'SELF-ALIGNING, THEY COMPRESS BOTH WALLS')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'OPEN AT ONCE':'OTOLOC: AN IMMEDIATELY PATENT LUMEN')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'NOTHING LEFT BEHIND':'HEALED, WITH NOTHING LEFT BEHIND')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var C=GW,f=function(n){return (+n).toFixed(1)};
  var W=[1,2,3,4,5,6,7,8].map(function(i){return $("#w"+i,svg)}),base=$$("#scBase .sD",svg),fade=$$("#scBase text,#scBase .hat,#scBase .pli,#scBase .vil",svg);
  var M=[0,1].map(function(m){var gg=$("#mg"+m,svg);return {g:gg,s:$$(".seg",gg),p:$$(".pin",gg)}});
  var E={fl:$("#flds",svg),flow:$("#flow",svg),fd:$$("#flow .fdot",svg),oto:$("#oto",svg),oL:$("#otoL",svg),oR:$("#otoR",svg),rL:$("#rimL",svg),rR:$("#rimR",svg),
    l0:$("#lb0",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var OCT=gwOct(),SL=2*C.R*Math.sin(Math.PI/8)+2,CH0=C.cx-4*SL;
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function ease(t){return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    var dIn=seg(p,.02,.12),fold=ease(seg(p,.12,.24)),cpl=ease(seg(p,.29,.44)),opn=ease(seg(p,.52,.64)),flo=seg(p,.56,.72),out=ease(seg(p,.76,.88)),heal=seg(p,.8,.9);
    /* walls: compressed toward each other inside the magnet span while coupled; opening while the OTOLoc holds it; relax after */
    var comp=cpl*(1-out*.7),gap=opn*34*(1-out*.25);
    var pu=7*comp,pl=-7*comp;
    W[0].setAttribute("d",gwLine(C.su,0,0,0));W[1].setAttribute("d",gwLine(C.mu,0,0,2.2));
    W[2].setAttribute("d",gwLine(C.mb,9*comp,gap,2.2));W[3].setAttribute("d",gwLine(C.sb,5.5*comp,gap,0));
    W[4].setAttribute("d",gwLine(C.lsu,-5.5*comp,gap,0));W[5].setAttribute("d",gwLine(C.lmu,-9*comp,gap,2.2));
    W[6].setAttribute("d",gwLine(C.lmb,0,0,2.2));W[7].setAttribute("d",gwLine(C.lsb,0,0,0));
    base.forEach(function(pth){if(b<1){var L=pth.getTotalLength();pth.style.strokeDasharray=L+" "+L;pth.style.strokeDashoffset=(L*(1-b)).toFixed(1)}else{pth.style.strokeDasharray="";pth.style.strokeDashoffset=""}});
    fade.forEach(function(el){el.style.opacity=b.toFixed(3)});
    /* magnets: chain -> folded edge-on bar; then pulled to the walls; finally carried away down the lumen and gone */
    var yU=C.mb+9*comp-4-14,yL=C.lmu-9*comp+4;
    M.forEach(function(mm,m){var y=(m?yL+34*out:yU-34*out),dir=m?1:-1,sh=out*dir*-120;
      mm.s.forEach(function(r,i){var cx0=CH0+i*SL+SL/2+(m?18:-18),w0=SL-3;
        var fi=i<4?i:7-i,iv=OCT[fi],cx1=(iv[0]+iv[1])/2,w1=iv[1]-iv[0]-4;
        var cx=cx0+(cx1-cx0)*fold+sh,w=w0+(w1-w0)*fold;
        r.setAttribute("x",f(cx-w/2));r.setAttribute("width",f(Math.max(2,w)));r.setAttribute("y",f(y));
        var vis=seg(dIn*8.5,i,i+1);op(r,b*vis*(i<4?1:1-fold)*(1-out));});
      var P=[C.R,C.R*Math.SQRT1_2,0,-C.R*Math.SQRT1_2,-C.R];
      mm.p.forEach(function(c,k){c.setAttribute("cx",f(C.cx+P[k]+sh));c.setAttribute("cy",f(y+7));op(c,b*fold*(1-out))});});
    /* field lines while the magnets couple */
    op(E.fl,b*seg(p,.3,.36)*(1-seg(p,.46,.52)));
    /* the OTOLoc in the opening */
    var oy0=C.mb+9*comp-4,oy1=C.lmu-9*comp+4,ow=gap,osh=0;
    if(ow>1){E.oL.setAttribute("d","M"+f(C.cx-ow-10+osh)+" "+f(oy0-4)+"H"+f(C.cx-ow+osh)+"V"+f(oy1+4)+"H"+f(C.cx-ow-10+osh));
      E.oR.setAttribute("d","M"+f(C.cx+ow+10+osh)+" "+f(oy0-4)+"H"+f(C.cx+ow+osh)+"V"+f(oy1+4)+"H"+f(C.cx+ow+10+osh))}
    op(E.oto,b*opn*(1-out));
    /* flow: dots move along the upper lumen, down through the opening, out along the lower lumen */
    var fv=b*flo*(1-seg(p,.74,.8))+b*heal*.6;
    E.fd.forEach(function(c,i){var t=((i/E.fd.length)+p*3)%1,x,y;
      if(t<.4){x=C.x0+60+(C.cx-C.x0-60)*(t/.4);y=(C.mu+C.mb)/2+6*Math.sin(i*1.7)}
      else if(t<.6){var u=(t-.4)/.2;x=C.cx+((i%3)-1)*9;y=(C.mu+C.mb)/2+((C.lmu+C.lmb)/2-(C.mu+C.mb)/2)*u}
      else{x=C.cx+(C.x1-60-C.cx)*((t-.6)/.4);y=(C.lmu+C.lmb)/2+6*Math.sin(i*2.3)}
      c.setAttribute("cx",f(x));c.setAttribute("cy",f(y));op(c,fv*(gap>8?1:0)*Math.min(1,Math.min(t,1-t)*10));});
    /* healed rim: the mucosae joined around the opening */
    var gy0=C.mb+9*comp,gy1=C.lmu-9*comp,g2=gap;
    E.rL.setAttribute("d","M"+f(C.cx-g2-14)+" "+f(gy0)+"Q"+f(C.cx-g2+2)+" "+f((gy0+gy1)/2)+" "+f(C.cx-g2-14)+" "+f(gy1));
    E.rR.setAttribute("d","M"+f(C.cx+g2+14)+" "+f(gy0)+"Q"+f(C.cx+g2-2)+" "+f((gy0+gy1)/2)+" "+f(C.cx+g2+14)+" "+f(gy1));
    op(E.rL,b*heal);op(E.rR,b*heal);
    op(E.l0,b*(1-seg(p,.24,.28)));op(E.l1,b*seg(p,.29,.34)*(1-seg(p,.47,.51)));op(E.l2,b*seg(p,.53,.58)*(1-seg(p,.73,.77)));op(E.l3,b*seg(p,.79,.85));
  };
}
