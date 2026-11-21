/* the story scene (BL/BY/DB): ONE engraved section through the benchtop focused ultrasound system, kept on screen throughout;
   each step adds one part as NSF award 2537879 describes it: the sample (tough tissue in a tube of buffer); the concave
   transducer array whose high-pressure pulses converge on one point; the dense cavitation "bubble cloud" at the focus that
   disintegrates the tissue into acellular debris; the DNA released for amplification. Proportions are schematic. */
function scene(){
  var mob=MOBILE(),LX=mob?586:604;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  var FX=300,FY=226,R=232,RO=262,A0=40,TW=24,LQ=150,TB=FY+70;
  function P(r,deg){var t=deg*Math.PI/180;return [FX+r*Math.cos(t),FY+r*Math.sin(t)]}
  function f(p){return p[0].toFixed(1)+' '+p[1].toFixed(1)}
  g+='<defs><pattern id="hxHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(238,242,247,.16)" stroke-width="1"/></pattern></defs>';
  /* the housing: a spherical-cap shell cut through its axis, a flange at each lip */
  var a1=A0,a2=180-A0,i1=P(R,a1),i2=P(R,a2),o1=P(RO,a1),o2=P(RO,a2);
  var shell='M'+f(i1)+'A'+R+' '+R+' 0 0 1 '+f(i2)+'L'+f(o2)+'A'+RO+' '+RO+' 0 0 0 '+f(o1)+'Z';
  var fl='M'+f(i1)+'L'+(i1[0]+56).toFixed(1)+' '+i1[1].toFixed(1)+'v14H'+(o1[0]).toFixed(1)+'M'+f(i2)+'L'+(i2[0]-56).toFixed(1)+' '+i2[1].toFixed(1)+'v14H'+(o2[0]).toFixed(1);
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="hatch" d="'+shell+'"/><path class="wl sD" d="'+shell+'"/><path class="wl sD" d="'+fl+'"/>';
  g+='<path class="wi sD" d="M'+(FX-150)+' 548H'+(FX+150)+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">SECTION · FOCUSED ARRAY</text><text x="558" y="538" class="t s">FUSE · HELIX ACOUSTICS</text></g>';
  g+='</g>';
  /* 1 the sample: a tube of buffer held at the focus, a piece of tough tissue inside */
  var tube='M'+(FX-TW)+' 40V'+TB+'A'+TW+' '+TW+' 0 0 0 '+(FX+TW)+' '+TB+'V40';
  var liq='M'+(FX-TW+1.5)+' '+LQ+'H'+(FX+TW-1.5)+'V'+TB+'A'+(TW-1.5)+' '+(TW-1.5)+' 0 0 1 '+(FX-TW+1.5)+' '+TB+'Z';
  var tis='M'+(FX-12)+' '+(FY-14)+'C'+(FX-2)+' '+(FY-26)+' '+(FX+14)+' '+(FY-18)+' '+(FX+13)+' '+(FY-4)+'C'+(FX+12)+' '+(FY+10)+' '+(FX+2)+' '+(FY+18)+' '+(FX-8)+' '+(FY+14)+'C'+(FX-16)+' '+(FY+9)+' '+(FX-18)+' '+(FY-6)+' '+(FX-12)+' '+(FY-14)+'Z';
  var vein='M'+(FX-10)+' '+(FY+9)+'L'+(FX+9)+' '+(FY-12)+'M'+(FX-2)+' '+(FY)+'l7 4M'+(FX+3)+' '+(FY-6)+'l-7 -3';
  g+='<g id="sc1"><path class="liq" d="'+liq+'"/><path class="tube dr" d="'+tube+'"/><path class="cap" d="M'+(FX-TW-5)+' 22h'+(2*TW+10)+'v18h-'+(2*TW+10)+'Z"/>'+
     '<path class="men dr" d="M'+(FX-TW+1.5)+' '+LQ+'H'+(FX+TW-1.5)+'"/>'+
     '<path class="tis" id="hxTis" d="'+tis+'"/><path class="vein dr" d="'+vein+'"/>'+
     '<path class="ld2 dr" d="M'+(FX+TW+4)+' 70H'+(LX-8)+'"/><text x="'+LX+'" y="74" class="t c">SAMPLE TUBE</text>'+
     '<path class="ld2 dr" d="M'+(FX+TW+4)+' '+(LQ+22)+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(LQ+26)+'" class="t c">BUFFER</text>'+
     '<path class="ld2 dr" d="M'+(FX+15)+' '+(FY+4)+'L'+(FX+60)+' '+(FY+26)+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(FY+30)+'" class="t c">TOUGH TISSUE</text>'+
     '<text x="40" y="60" class="a">THE SAMPLE</text></g>';
  /* 2 the array: elements set into the concave face, each aimed at the focus */
  var els='',beams='';
  for(var k=0;k<9;k++){var d=a1+6+k*(a2-a1-12)/8,t=d*Math.PI/180,cx=Math.cos(t),cy=Math.sin(t),tx=-cy,ty=cx,hw=12;
    var b0=[FX+(R-1)*cx,FY+(R-1)*cy],b1=[FX+(R+16)*cx,FY+(R+16)*cy];
    els+='<path class="el" d="M'+f([b0[0]+tx*hw,b0[1]+ty*hw])+'L'+f([b0[0]-tx*hw,b0[1]-ty*hw])+'L'+f([b1[0]-tx*hw,b1[1]-ty*hw])+'L'+f([b1[0]+tx*hw,b1[1]+ty*hw])+'Z"/>';
    beams+='M'+f([b0[0]+tx*hw,b0[1]+ty*hw])+'L'+FX+' '+FY+'M'+f([b0[0]-tx*hw,b0[1]-ty*hw])+'L'+FX+' '+FY;}
  var e8=P(R+8,a1+6+7*(a2-a1-12)/8);
  g+='<g id="sc2">'+els+'<path class="beam dr" d="'+beams+'"/>'+
     '<path class="ld2 dr" d="M'+f(P(RO+4,58))+'L'+(LX-8)+' 452"/><text x="'+LX+'" y="456" class="t c">TRANSDUCER ARRAY</text>'+
     '<path class="ld2 dr" d="M'+f([e8[0]+14,e8[1]])+'L'+(LX-8)+' 400"/><text x="'+LX+'" y="404" class="t c c2">FOCUSED ELEMENTS</text>'+
     '<text x="40" y="60" class="a">THE ARRAY</text></g>';
  /* 3 the cloud: converging wavefronts, a dense cluster of cavitation bubbles at the focus */
  var wf='';[150,110,72].forEach(function(r){wf+='M'+f(P(r,a1+14))+'A'+r+' '+r+' 0 0 1 '+f(P(r,a2-14))});
  var rnd=function(i){var x=Math.sin(i*127.1+11.7)*43758.5453;return x-Math.floor(x)};
  var bub='';for(var i=0;i<46;i++){var rr=Math.sqrt(rnd(i))*(TW-6),an=rnd(i+99)*6.283,yy=FY+Math.sin(an)*rr*1.9,xx=FX+Math.cos(an)*rr;bub+='<circle class="bub" cx="'+xx.toFixed(1)+'" cy="'+yy.toFixed(1)+'" r="'+(1+rnd(i+7)*2.6).toFixed(1)+'"/>'}
  g+='<g id="sc3"><path class="wf dr" d="'+wf+'"/>'+bub+
     '<path class="ld2 dr" d="M'+(FX+TW+4)+' '+(FY-12)+'L'+(FX+70)+' '+(FY-14)+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(FY-10)+'" class="t c c3">BUBBLE CLOUD</text>'+
     '<path class="ld2 dr" d="M'+(FX-TW-4)+' '+FY+'H'+(FX-120)+'"/><text x="'+(FX-128)+'" y="'+(FY+4)+'" class="t c c3" text-anchor="end">FOCUS</text>'+
     '<text x="40" y="60" class="a">THE CLOUD</text></g>';
  /* 4 the DNA: the tissue gone to fine debris, double-stranded DNA free in the buffer */
  var dna='';[[FX-10,LQ+22],[FX+6,LQ+40],[FX-6,FY+40],[FX+8,FY+56]].forEach(function(o,j){var x0=o[0]-12,y0=o[1],L=24,p1='M'+x0+' '+y0,p2='M'+x0+' '+y0;
    for(var q=1;q<=12;q++){var xq=x0+q*L/12;p1+='L'+xq.toFixed(1)+' '+(y0+Math.sin(q/12*Math.PI*2+j)*5).toFixed(1);p2+='L'+xq.toFixed(1)+' '+(y0-Math.sin(q/12*Math.PI*2+j)*5).toFixed(1)}
    dna+=p1+p2});
  var deb='';for(var m=0;m<30;m++){deb+='<circle class="deb" cx="'+(FX-TW+5+rnd(m+300)*(2*TW-10)).toFixed(1)+'" cy="'+(LQ+12+rnd(m+400)*(TB-LQ+8)).toFixed(1)+'" r="'+(0.8+rnd(m+500)*0.9).toFixed(1)+'"/>'}
  g+='<g id="sc4">'+deb+'<path class="dna dr" d="'+dna+'"/>'+
     '<path class="ld2 dr" d="M'+(FX+16)+' '+(FY+56)+'L'+(FX+60)+' '+(FY+84)+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(FY+88)+'" class="t c c4">RELEASED DNA</text>'+
     '<path class="ld2 dr" d="M'+(FX-TW-4)+' '+(LQ+30)+'H'+(FX-120)+'"/><text x="'+(FX-128)+'" y="'+(LQ+34)+'" class="t c c4" text-anchor="end">DEBRIS</text>'+
     '<text x="40" y="60" class="a">THE DNA</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .hatch",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
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
    var tis=$("#hxTis",svg);if(tis)tis.style.opacity=(1-.85*s[3]).toFixed(3);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}
