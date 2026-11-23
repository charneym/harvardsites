/* the story scene (BL/BY/DB): ONE engraved figure kept on screen throughout, a patient lying on their back seen from above
   (head left), with the airway, both lungs and the heart drawn inside; each step adds one part as anoritmedical.com describes
   it: cardiac arrest (no pulse); Basic Life Support (chest compressions, AED pads); the barrier of mouth-to-mouth (direct
   contact, lungs left empty); Anorit's device giving air without contact while compressions continue (air moves down the
   airway and the lungs fill). The device itself is not drawn: its design is not published. Proportions are schematic. */
function scene(){
  var mob=MOBILE(),LX=632,K=.84,TX=-16,TY=55;
  function T(x,y){return [(x*K+TX).toFixed(1),(y*K+TY).toFixed(1)]}
  function P(x,y){var t=T(x,y);return t[0]+' '+t[1]}
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"22 82 606 344":"0 0 800 560")+'" aria-hidden="true">';
  g+='<defs><clipPath id="anLung"><path id="anLu1" d="M306 262C300 230 316 196 352 186C400 174 460 180 494 198C506 206 506 222 496 232C470 250 420 258 380 262C350 266 320 268 306 262Z"/><path d="M306 298C300 330 316 364 352 374C400 386 460 380 494 362C506 354 506 338 496 328C470 310 420 302 380 298C350 294 320 292 306 298Z"/></clipPath></defs>';
  var lungs='M306 262C300 230 316 196 352 186C400 174 460 180 494 198C506 206 506 222 496 232C470 250 420 258 380 262C350 266 320 268 306 262Z'+
            'M306 298C300 330 316 364 352 374C400 386 460 380 494 362C506 354 506 338 496 328C470 310 420 302 380 298C350 294 320 292 306 298Z';
  var body='M212 258C226 246 236 208 262 188C280 174 300 166 326 164C420 160 520 172 590 182C640 188 690 184 720 180C750 220 752 340 720 380'+
           'C690 376 640 372 590 378C520 388 420 400 326 396C300 394 280 386 262 372C236 352 226 314 212 302';
  var arms='M300 172C320 140 360 132 420 132L560 140C600 142 640 146 680 150C700 152 706 168 690 170L560 166C480 162 420 162 360 166'+
           'M300 388C320 420 360 428 420 428L560 420C600 418 640 414 680 410C700 408 706 392 690 390L560 394C480 398 420 398 360 394';
  var neck='M176 262L212 258M176 298L212 302';
  var face='M92 262Q100 256 108 262M92 298Q100 304 108 298M112 280H126M146 272V288';
  var air='M150 272H300M150 288H300';
  var rings='';for(var x=186;x<=294;x+=10)rings+='M'+x+' 273V287';
  var br='M300 280C316 262 330 246 360 226M300 280C316 298 330 314 360 334'+
         'M360 226C390 216 430 210 472 208M360 226C380 236 410 242 450 242M342 238C334 224 330 212 332 200M400 214C410 202 424 196 440 192'+
         'M360 334C390 344 430 350 472 352M360 334C380 324 410 318 450 318M342 322C334 336 330 348 332 360M400 346C410 358 424 364 440 368';
  var heart='M392 282C386 260 404 234 452 230C470 230 476 242 466 260C456 278 428 288 392 282Z';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<g transform="translate('+TX+' '+TY+') scale('+K+')">';
  g+='<path class="lf" id="anFill" d="'+lungs+'"/>';
  g+='<ellipse class="wl sD" cx="118" cy="280" rx="62" ry="52"/>';
  g+='<path class="wl sD" d="'+neck+'"/><path class="wl sD" d="'+body+'"/><path class="wi sD" d="'+arms+'"/>';
  g+='<path class="wi sD" d="'+face+'"/>';
  g+='<path class="lg sD" d="'+lungs+'"/><path class="aw sD" d="'+air+'"/><path class="rg" d="'+rings+'"/><path class="bt sD" d="'+br+'"/>';
  g+='<path class="ht2 sD" d="'+heart+'"/>';
  g+='</g>';
  g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">PATIENT · VIEW FROM ABOVE</text><text x="558" y="538" class="t s">ANORIT MEDICAL</text></g>';
  g+='</g>';
  /* 1 cardiac arrest: the last beat, then a flat line */
  var e0=T(150,0)[0],e1=T(700,0)[0],hr=T(472,252);
  g+='<g id="sc1"><path class="ecg dr" d="M'+e0+' 104H'+(+e0+70)+'l6 -16l7 30l6 -14H'+e1+'"/>'+
     '<path class="ld2 dr" d="M'+(+e1+8)+' 104H'+(LX-8)+'"/><text x="'+LX+'" y="108" class="t c">NO PULSE</text>'+
     '<path class="ld2 dr" d="M'+hr[0]+' '+hr[1]+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(+hr[1]+4)+'" class="t c">HEART STOPPED</text>'+
     '<text x="40" y="60" class="a">THE ARREST</text></g>';
  /* 2 Basic Life Support: compressions on the lower sternum, AED pads below the right collarbone and on the left side */
  var c=T(432,280),p1=T(282,340),p2=T(500,196);
  g+='<g id="sc2"><circle class="cp" cx="'+c[0]+'" cy="'+c[1]+'" r="9"/><circle class="cpr dr" cx="'+c[0]+'" cy="'+c[1]+'" r="17"/>'+
     '<rect class="pad" x="'+(p1[0]-14)+'" y="'+(p1[1]-10)+'" width="28" height="20"/><rect class="pad" x="'+(p2[0]-14)+'" y="'+(p2[1]-10)+'" width="28" height="20"/>'+
     '<path class="ld2 dr" d="M'+(+c[0]+22)+' '+c[1]+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(+c[1]+4)+'" class="t c">CHEST COMPRESSIONS</text>'+
     '<path class="ld2 dr" d="M'+(+p2[0]+18)+' '+p2[1]+'L'+(+p2[0]+34)+' 210H'+(LX-8)+'"/><text x="'+LX+'" y="214" class="t c">AED PADS</text>'+
     '<text x="40" y="60" class="a">LIFE SUPPORT</text></g>';
  /* 3 the barrier: air by mouth-to-mouth needs direct contact; the lungs often stay empty */
  var m=T(146,280),lu=T(470,222);
  g+='<g id="sc3"><circle class="mo" cx="'+m[0]+'" cy="'+m[1]+'" r="13"/>'+
     '<path class="ld2 dr" d="M'+m[0]+' '+(m[1]-17)+'V152H'+(LX-8)+'"/><text x="'+LX+'" y="148" class="t c c3">MOUTH-TO-MOUTH</text><text x="'+LX+'" y="166" class="t c c3">DIRECT CONTACT</text>'+
     '<path class="ld2 dr" d="M'+(+lu[0]+8)+' '+lu[1]+'L'+(+lu[0]+40)+' 236H'+(LX-8)+'"/><text x="'+LX+'" y="240" class="t c c3">LUNGS STAY EMPTY</text>'+
     '<text x="40" y="60" class="a">THE BARRIER</text></g>';
  /* 4 Anorit's device: air without contact, the lungs fill, compressions go on */
  var a0=T(150,280),dots='';for(var i=0;i<12;i++)dots+='<circle class="ad" r="2.6" cx="'+a0[0]+'" cy="'+a0[1]+'"/>';
  var q=T(240,288);
  g+='<g id="sc4"><path class="apath" id="anA1" d="M'+P(150,280)+'L'+P(300,280)+'C'+P(316,262)+' '+P(330,246)+' '+P(360,226)+'C'+P(390,216)+' '+P(430,210)+' '+P(472,208)+'"/>'+
     '<path class="apath" id="anA2" d="M'+P(150,280)+'L'+P(300,280)+'C'+P(316,298)+' '+P(330,314)+' '+P(360,334)+'C'+P(390,344)+' '+P(430,350)+' '+P(472,352)+'"/>'+dots+
     '<path class="ld2 dr" d="M'+q[0]+' '+(+q[1]+6)+'V456H'+(LX-8)+'"/><text x="'+LX+'" y="452" class="t c c4">AIR, NO CONTACT</text><text x="'+LX+'" y="470" class="t c c4">COMPRESSIONS GO ON</text>'+
     '<text x="40" y="60" class="a">THE AIR</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .rg",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
  var fill=$("#anFill",svg),A=[$("#anA1",svg),$("#anA2",svg)],AL=A.map(function(p){return p.getTotalLength()}),D=$$("#sc4 .ad",svg),
      cp=$$("#sc2 .cp, #sc2 .pad",svg),mo3=$$("#sc3 .ld2, #sc3 .mo",svg);
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[Math.max(seg(p,0,.16),.55),seg(p,.25,.44),seg(p,.5,.69),seg(p,.75,.94)];
    for(var i=0;i<4;i++){
      var on=i===0?b:b*(s[i]>0?1:0),nx=i<3?s[i+1]:0;
      E.g[i].style.opacity=on.toFixed(3);draw(E.d[i],i===0?b*s[0]:s[i]);
      /* earlier labels quieten as the next part arrives; the barrier's labels leave entirely once the air flows */
      var lv=(i===0?b:Math.max(0,Math.min(1,s[i]*2-1)))*(1-(i===2?1:.5)*nx);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    cp.forEach(function(el){el.style.opacity=Math.min(1,s[1]*1.6).toFixed(3)});
    mo3.forEach(function(el){el.style.opacity=(1-s[3]).toFixed(3)});
    /* air moves down the airway into both lungs; the lungs fill with it */
    var f=s[3];fill.style.opacity=(f*f).toFixed(3);
    D.forEach(function(d,k){var path=A[k%2],L=AL[k%2],u=((k/D.length)+p*3)%1,pt=path.getPointAtLength(u*L);
      d.setAttribute("cx",pt.x.toFixed(1));d.setAttribute("cy",pt.y.toFixed(1));d.style.opacity=(f*Math.sin(Math.PI*u)).toFixed(3)});
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}
