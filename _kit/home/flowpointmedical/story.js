/* the story scene (BL/BY/DB): ONE engraved longitudinal section through the access arm, kept on screen throughout; each step
   adds one part as the sources describe it (NIH RePORTER R43DK141421 abstract; US 2024/0238575 A1): the arteriovenous fistula
   under the skin; the device implanted under the skin directly over the vessel, an open titanium lattice for tissue ingrowth,
   flanges sutured to the tissue; the needle entering a channel at a fixed angle, its tip moving the valve aside and reaching
   the vessel at a set depth; on withdrawal the titanium-nitride coated valve returns and closes the channel. Schematic. */
function scene(){
  var mob=MOBILE(),LX=mob?586:604;
  var X0=24,X1=556,SK=150,VT=338,VB=404,PB=476,DX0=150,DX1=450,DT=236,DBm=312;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><pattern id="fpHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(242,245,250,.14)" stroke-width="1"/></pattern>'+
     '<clipPath id="fpCl"><rect x="'+X0+'" y="0" width="'+(X1-X0)+'" height="560"/></clipPath></defs>';
  /* the arm: skin, subcutaneous tissue (fat cells), muscle below the vessel */
  var skin='M'+X0+' '+SK+'C140 '+(SK-6)+' 260 '+(SK+5)+' 380 '+(SK-2)+'S520 '+(SK+3)+' '+X1+' '+SK;
  var fat='';for(var r=0;r<5;r++)for(var c=0;c<14;c++){var x=X0+22+c*38+(r%2)*19,y=SK+34+r*34;
    if(x>DX0-22&&x<DX1+22&&y>DT-24&&y<DBm+20)continue;if(y>VT-20)continue;if(x>X1-14)continue;fat+='M'+(x+12)+' '+y+'a12 10 0 1 0 -24 0a12 10 0 1 0 24 0'}
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="wl sD" d="'+skin+'"/><path class="wi sD" d="'+skin.replace(/(\d+) (\d+)/g,function(m,a,b){return a+" "+(+b+12)})+'"/>';
  g+='<path class="fat" d="'+fat+'"/>';
  g+='<path class="hatch" d="M'+X0+' '+(VB+22)+'H'+X1+'V'+PB+'H'+X0+'Z"/><path class="wi sD" d="M'+X0+' '+(VB+22)+'H'+X1+'"/><path class="wl sD" d="M'+X0+' '+PB+'H'+X1+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">SECTION · ACCESS ARM</text><text x="558" y="538" class="t s">FLOWPOINT MEDICAL</text></g>';
  g+='</g>';
  /* 1 the fistula: the vessel under the skin, blood flowing */
  var flow='';[70,190,310,430].forEach(function(x){flow+='M'+x+' 371h44M'+(x+36)+' 365l8 6-8 6'});
  g+='<g id="sc1"><path class="blood" d="M'+X0+' '+VT+'H'+X1+'V'+VB+'H'+X0+'Z"/><path class="vw dr" d="M'+X0+' '+VT+'H'+X1+'M'+X0+' '+VB+'H'+X1+'"/>'+
     '<path class="fl dr" d="'+flow+'"/>'+
     '<path class="ld2 dr" d="M'+(X1+2)+' '+SK+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(SK+4)+'" class="t c">SKIN</text>'+
     '<path class="ld2 dr" d="M'+(X1+2)+' '+(VT+30)+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(VT+26)+'" class="t c">ARTERIOVENOUS</text><text x="'+LX+'" y="'+(VT+(mob?50:44))+'" class="t c">FISTULA</text>'+
     '<text x="40" y="60" class="a">THE FISTULA</text></g>';
  /* 2 the guide: an open titanium lattice over the vessel, flanges sutured down, a slanted channel, the valve closing its exit */
  var lat='';for(var i=0;i<11;i++)for(var j=0;j<3;j++){var lx=DX0+18+i*24.5,ly=DT+14+j*20;
    if(lx>196&&lx<318)continue;lat+='M'+lx+' '+ly+'h12v12h-12Z'}
  var chA=[206,DT],chB=[300,DBm-6];
  g+='<g id="sc2"><path class="dev dr" d="M'+(DX0+10)+' '+DT+'H'+(DX1-10)+'Q'+DX1+' '+DT+' '+DX1+' '+(DT+10)+'V'+(DBm-10)+'Q'+DX1+' '+DBm+' '+(DX1-10)+' '+DBm+'H'+(DX0+10)+'Q'+DX0+' '+DBm+' '+DX0+' '+(DBm-10)+'V'+(DT+10)+'Q'+DX0+' '+DT+' '+(DX0+10)+' '+DT+'Z"/>'+
     '<path class="lat" d="'+lat+'"/>'+
     '<path class="dev dr" d="M'+(DX0-46)+' '+(DBm-12)+'H'+DX0+'M'+(DX0-46)+' '+DBm+'H'+DX0+'M'+(DX0-46)+' '+(DBm-12)+'V'+DBm+'M'+DX1+' '+(DBm-12)+'H'+(DX1+46)+'V'+DBm+'H'+DX1+'"/>'+
     '<path class="sut dr" d="M'+(DX0-26)+' '+(DBm-14)+'C'+(DX0-30)+' '+(VT-6)+' '+(DX0-18)+' '+(VT+6)+' '+(DX0-16)+' '+(VT-2)+'M'+(DX1+26)+' '+(DBm-14)+'C'+(DX1+30)+' '+(VT-6)+' '+(DX1+18)+' '+(VT+6)+' '+(DX1+16)+' '+(VT-2)+'"/>'+
     '<path class="chn dr" d="M'+(chA[0]-14)+' '+chA[1]+'L'+(chB[0]-14)+' '+chB[1]+'M'+(chA[0]+14)+' '+chA[1]+'L'+(chB[0]+14)+' '+chB[1]+'"/>'+
     '<path class="ld2 dr" d="M'+(DX1-30)+' '+(DT+10)+'L'+(X1+20)+' 236H'+(LX-8)+'"/><text x="'+LX+'" y="240" class="t c">TITANIUM LATTICE</text>'+
     '<path class="ld2 dr" d="M'+(chA[0]+10)+' '+(DT-4)+'L240 196H'+(LX-8)+'"/><text x="'+LX+'" y="200" class="t c">NEEDLE CHANNEL</text>'+
     '<path class="ld2 dr nm" d="M'+(DX1+30)+' '+(DBm+10)+'L'+(X1+20)+' 300H'+(LX-8)+'"/><text x="'+LX+'" y="304" class="t c nm">SUTURE FLANGE</text>'+
     '<text x="40" y="60" class="a">THE GUIDE</text></g>';
  /* the valve, closed (sits across the channel exit) and open (slid aside, perpendicular to the needle) */
  var vt='translate('+chB[0]+' '+chB[1]+') rotate(35)';
  g+='<g id="vC" transform="'+vt+'"><rect class="vlv" x="-6" y="-17" width="12" height="34"/></g>';
  g+='<g id="vO" transform="'+vt+' translate(0 -30)"><rect class="vlv" x="-6" y="-17" width="12" height="34"/></g>';
  g+='<g id="vL"><path class="ld2" d="M'+(chB[0]+12)+' '+(chB[1]+10)+'L'+(X1+20)+' 284"/><path class="ld2" d="M'+(X1+20)+' 284H'+(LX-8)+'"/><text x="'+LX+'" y="280" class="t c a2">TiN VALVE</text></g>';
  /* 3 the needle: through the skin, down the channel, past the valve, tip in the vessel at a set depth */
  var ux=.8192,uy=.5736,sx=chA[0]-ux*178,sy=chA[1]-uy*178,ex=chA[0]+ux*204,ey=chA[1]+uy*204;
  g+='<g id="sc3"><g id="ndl"><path class="ndl dr" d="M'+sx.toFixed(1)+' '+sy.toFixed(1)+'L'+ex.toFixed(1)+' '+ey.toFixed(1)+'"/>'+
     '<g transform="translate('+sx.toFixed(1)+' '+sy.toFixed(1)+') rotate(35)"><rect class="hub" x="-38" y="-9" width="38" height="18"/><path class="hub" d="M-38 -3h-22M-38 3h-22"/></g></g>'+
     '<path class="ld2 dr" d="M'+(ex+6).toFixed(1)+' '+(ey+4).toFixed(1)+'L'+(X1+20)+' '+(mob?416:400)+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(mob?420:404)+'" class="t c">NEEDLE TIP</text><text x="'+LX+'" y="'+(mob?448:422)+'" class="t c">AT A SET DEPTH</text>'+
     '<text x="40" y="60" class="a">THE NEEDLE</text></g>';
  /* 4 the seal: the needle drawn back out of the channel, the valve home again */
  var wx=chA[0]-ux*70,wy=chA[1]-uy*70;
  g+='<g id="sc4"><path class="ret dr" d="M'+wx.toFixed(1)+' '+wy.toFixed(1)+'L'+(wx-ux*70).toFixed(1)+' '+(wy-uy*70).toFixed(1)+'M'+(wx-ux*70+3).toFixed(1)+' '+(wy-uy*70-12).toFixed(1)+'L'+(wx-ux*70).toFixed(1)+' '+(wy-uy*70).toFixed(1)+'L'+(wx-ux*70+12).toFixed(1)+' '+(wy-uy*70+2).toFixed(1)+'"/>'+
     '<path class="ld2 dr" d="M'+(chB[0]+16)+' '+(chB[1]-2)+'L'+(X1+20)+' '+(mob?308:318)+'H'+(LX-8)+'"/>'+
     '<text x="'+LX+'" y="'+(mob?316:322)+'" class="t c c4">CHANNEL SEALED</text>'+
     '<text x="40" y="60" class="a">THE SEAL</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .hatch, #scBase .fat",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)],
    vC:$("#vC",svg),vO:$("#vO",svg),vL:$("#vL",svg),nd:$("#ndl",svg),lat:$("#sc2 .lat",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[Math.max(seg(p,0,.16),.55),seg(p,.25,.44),seg(p,.5,.69),seg(p,.75,.94)];
    /* the parts accumulate on the one section; earlier labels quieten as the next part arrives */
    for(var i=0;i<4;i++){
      var on=i===0?b:b*(s[i]>0?1:0),nx=i<3?s[i+1]:0;
      E.g[i].style.opacity=on.toFixed(3);draw(E.d[i],i===0?b*s[0]:s[i]);
      var lv=(i===0?b:Math.max(0,Math.min(1,s[i]*2-1)))*(1-.5*nx);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    E.lat.style.opacity=(b*s[1]).toFixed(3);
    /* the needle: in during step 3, drawn back out during step 4; the valve opens with it and closes behind it */
    var open=Math.min(1,s[2]*1.6)*(1-s[3]);
    E.nd.style.opacity=(1-s[3]).toFixed(3);E.g[2].style.opacity=(b*(s[2]>0?1:0)*(1-s[3])).toFixed(3);
    E.vC.style.opacity=(b*s[1]*(1-open)).toFixed(3);E.vO.style.opacity=(b*open).toFixed(3);
    E.vL.style.opacity=(b*Math.max(0,s[1]*2-1)*(1-.5*s[2]+.5*s[3])).toFixed(3);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}
