/* the story scene (BL/BY/DB): ONE engraved elevation of an Italian brick works, the kind of industrial company F&P backs.
   Each step of the club-deal model inks one more layer of the same drawing: the company itself (lit, with its size
   dimensioned), the club's capital laid as the foundation course, the Newco (60% club, 40% family, with bank debt as a
   lower course, as in Nachmann), and growth (add-on works joined to the first, as Righi and Panzeri did). */
function scene(){
  var mob=MOBILE(),f=function(n){return n.toFixed(1)},G=360;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  function hall(x,wd,bays,wt,th){var s='M'+x+' '+G+'V'+wt+'H'+(x+wd)+'V'+G,bw=wd/bays;for(var b=0;b<bays;b++){var bx=x+b*bw;s+='M'+f(bx)+' '+wt+'L'+f(bx+bw*.82)+' '+(wt-th)+'V'+wt+'M'+f(bx+bw*.82)+' '+(wt-th)+'H'+f(bx+bw)+'V'+wt}return s}
  function wins(x,wd,bays,wt){var s='',bw=wd/bays;for(var b=0;b<bays;b++){var cx=x+b*bw+bw/2,ww=bw*.42,y1=wt+(G-wt)*.22,y2=G-(G-wt)*.22;s+='M'+f(cx-ww/2)+' '+f(y2)+'V'+f(y1+ww/2)+'A'+f(ww/2)+' '+f(ww/2)+' 0 0 1 '+f(cx+ww/2)+' '+f(y1+ww/2)+'V'+f(y2)+'Z'}return s}
  /* base: neatline, ground, the works (hall with sawtooth roofs, office block, chimney), a title block */
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="sD mt" d="M24 184.1 L40 181.3 L56 185 L72 191.1 L88 181.3 L104 182.4 L120 177.7 L136 185.7 L152 174.7 L168 168 L184 162.9 L200 161.6 L216 160.6 L232 146.8 L248 148 L264 143.8 L280 152.7 L296 143.7 L312 142.3 L328 145.6 L344 150.1 L360 151.9 L376 142.6 L392 147.5 L408 147 L424 152.2 L440 145.1 L456 144 L472 150.3 L488 155.6 L504 156.4 L520 149.3 L536 156.5 L552 159.1 L568 159.7 L584 153.9 L600 151.7 L616 158.9 L632 159.4 L648 161 L664 156.1 L680 166.4 L696 174.5 L712 174.6 L728 175.1 L744 176.8 L760 188.2 L776 184.7"/><path class="sD ht" d="M184 164.9l-6 14M200 163.6l-6 14M216 162.6l-6 14M232 148.8l-6 14M232 148.8l5 11M264 145.8l-6 14M264 145.8l5 11M296 145.7l-6 14M312 144.3l-6 14M312 144.3l5 11M328 147.6l5 11M344 152.1l5 11M376 144.6l-6 14M376 144.6l5 11M408 149l-6 14M408 149l5 11M440 147.1l-6 14M456 146l-6 14M456 146l5 11M472 152.3l5 11M488 157.6l5 11M520 151.3l-6 14M520 151.3l5 11M536 158.5l5 11M552 161.1l5 11M584 155.9l-6 14M600 153.7l-6 14M600 153.7l5 11M616 160.9l5 11M632 161.4l5 11M664 158.1l-6 14M664 158.1l5 11"/><path class="sD ht" d="M24 214 C120 204 180 210 260 206 S420 200 520 208 S700 204 776 212"/><path class="sD kb" d="M34 360V350 M34 350 C25 327 29 292 34 286 C39 292 43 327 34 350M52 360V350 M52 350 C43 322 47 279 52 272 C57 279 61 322 52 350M70 360V350 M70 350 C61 327 65 292 70 286 C75 292 79 327 70 350M88 360V350 M88 350 C79 322 83 279 88 272 C93 279 97 322 88 350"/>';
  g+='<path class="sD gr" d="M24 '+G+'H776"/>';
  g+='<path class="sD bl" d="'+hall(200,320,6,280,40)+'"/>';
  g+='<path class="sD bl" d="M110 '+G+'V246H200M104 246H206V240H104Z M110 300H200"/>';
  g+='<path class="occ" d="M462 240L468 86H488L494 240Z"/>';
  g+='<path class="sD bl" d="M462 240L468 92H488L494 240M464 112H492M462 92H494V86H462Z"/>';
  g+='<path class="sD kb" d="'+wins(200,320,6,280)+'"/>';
  var ow='';for(var r=0;r<2;r++)for(var c2=0;c2<3;c2++){var ex=122+c2*26,ey=256+r*54;ow+='M'+ex+' '+ey+'h14v30h-14Z'}g+='<path class="sD kb" d="'+ow+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 492h228v52h-228Z M548 518h228"/><text x="558" y="510" class="t">PROSPETTO · L’IMPRESA</text><text x="558" y="536" class="t s">MODELLO CLUB DEAL · MILANO</text></g>';
  g+='</g>';
  /* 1 the company: windows lit for the shift, its size dimensioned */
  g+='<g id="sc1"><path class="lit" d="'+wins(200,320,6,280)+'"/><path class="lit2" d="'+ow+'"/>'+
     '<path class="dim" d="M110 214H452M110 206V222M452 206V222"/>'+(mob?'':'<text x="281" y="200" class="n" text-anchor="middle">FATTURATO FINO A 100 MLN €</text>')+
     '<text x="44" y="64" class="a">L’IMPRESA</text></g>';
  /* 2 the club: its capital laid as the foundation course, stone by stone, one per investor */
  var st='',x=110,R=[38,26,44,30,22,36,28,40,34,24,46,30,22];for(var i=0;x<520;i++){var wd=Math.min(R[i%R.length],520-x);st+='M'+x+' '+(G+2)+'h'+wd+'v26h-'+wd+'Z';x+=wd}
  g+='<g id="sc2"><path class="sys dr" d="'+st+'"/>'+(mob?'':'<text x="540" y="380" class="n">PARTNER E COINVESTITORI</text>')+
     '<text x="44" y="64" class="a">IL CLUB</text></g>';
  /* 3 the Newco: the equity split 60 / 40, and bank debt as a lower course */
  var hat='';for(var hx=116;hx<516;hx+=10)hat+='M'+hx+' 446l8-14';
  g+='<g id="sc3"><path class="dim dr" d="M110 404H354M110 396V412M354 396V412M354 404H520M520 396V412"/>'+
     '<text x="232" y="424" class="n" text-anchor="middle">60% CLUB DEAL</text><text x="437" y="424" class="n" text-anchor="middle">40% FAMIGLIA</text>'+
     '<path class="sec dr" d="M110 432H520V446H110Z"/><path class="hat dr" d="'+hat+'"/>'+(mob?'':'<text x="540" y="444" class="n">CAPITALE A DEBITO</text>')+
     '<text x="44" y="64" class="a">LA NEWCO</text></g>';
  /* 4 growth: add-on works joined to the first, as Righi and Panzeri did */
  g+='<g id="sc4"><path class="pipe dr" d="M520 330H570"/>'+
     '<path class="lit2" d="'+hall(570,96,2,300,26)+'"/><path class="lit" d="'+wins(570,96,2,300)+'"/>'+
     '<path class="lit2" d="M684 '+G+'V286H756V'+G+'Z M680 286H760V280H680Z"/><path class="lit" d="M694 300h14v24h-14Z M732 300h14v24h-14Z"/>'+
     '<path class="pipe dr" d="M666 330H684"/>'+(mob?'':'<text x="618" y="258" class="n" text-anchor="middle">ADD-ON</text><text x="720" y="258" class="n" text-anchor="middle">ADD-ON</text>')+
     '<text x="44" y="64" class="a">LA CRESCITA</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb",svg),g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),g4:$("#sc4",svg),
    d2:dl("#sc2 .dr"),d3:dl("#sc3 .dr"),d4:dl("#sc4 .dr"),t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    E.g1.style.opacity=(b*Math.max(s1,.55)).toFixed(3);
    E.g2.style.opacity=(b*(s2>0?1:0)).toFixed(3);draw(E.d2,s2);
    E.g3.style.opacity=(b*(s3>0?1:0)).toFixed(3);draw(E.d3,s3);
    E.g4.style.opacity=(b*(s4>0?1:0)).toFixed(3);draw(E.d4,s4);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s2).toFixed(3);
    E.t[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.t[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.t[3].style.opacity=I(s4).toFixed(3);
  };
}
