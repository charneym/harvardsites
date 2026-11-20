/* the story scene (BL/BY/DB): ONE engraved elevation. On the left, a Pombaline townhouse of the kind that lines the Praça
   do Príncipe Real, where Touro has its office; on the right, a sawtooth-roofed Portuguese industrial workshop, the kind of
   mature, proven industrial-products business Touro I acquires. Each step of the firm's own strategic approach inks one
   more layer of the same drawing: LIGAR (capital connected to the business: the arc from the office to the works and
   its people), TRANSFORMAR (the tailored Programa de Mudança: a cut-away of the production line renewed, solar on the
   north lights, dimensions taken), CRESCER (sustained, responsible growth: a new bay lit, a lorry at the dock, trees). */
function scene(){
  var mob=MOBILE(),f=function(n){return n.toFixed(1)};
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  var GL=470,X0=262,TW=66,NT=5,EV=300,RT=240; /* ground, hall start, tooth width, teeth, eaves, ridge */
  var X1=X0+TW*NT;
  /* base: neatline, ground, the townhouse, the workshop, a title block */
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="sD gr" d="M24 '+GL+'H776"/><path class="sD kb" d="M24 '+(GL+8)+'H776M24 '+(GL+13)+'H776"/>';
  var hz='';for(var i=0;i<62;i++){var hx=30+i*12;hz+='M'+hx+' '+(GL+13)+'l-8 8'}g+='<path class="sD ht" d="'+hz+'"/>';
  /* townhouse: four storeys, mansard, balconies, a door */
  var tx=52,tw=132,tt=196;
  var th='M'+tx+' '+GL+'V'+tt+'H'+(tx+tw)+'V'+GL+'M'+(tx-6)+' '+tt+'H'+(tx+tw+6)+'M'+(tx+4)+' '+tt+'L'+(tx+16)+' '+(tt-34)+'H'+(tx+tw-16)+'L'+(tx+tw-4)+' '+tt;
  th+='M'+(tx+52)+' '+(tt-34)+'V'+(tt-52)+'H'+(tx+80)+'V'+(tt-34);
  for(var fl=0;fl<3;fl++){var wy=tt+20+fl*62;for(var k=0;k<3;k++){var wx=tx+16+k*40;th+='M'+wx+' '+(wy+40)+'V'+wy+'H'+(wx+20)+'V'+(wy+40)+'Z M'+(wx+10)+' '+wy+'V'+(wy+40)}
    if(fl<2)th+='M'+(tx+10)+' '+(tt+64+fl*62)+'H'+(tx+tw-10)}
  th+='M'+(tx+50)+' '+GL+'V'+(GL-50)+'Q'+(tx+66)+' '+(GL-64)+' '+(tx+82)+' '+(GL-50)+'V'+GL+'M'+(tx+66)+' '+(GL-58)+'V'+GL;
  g+='<path class="sD bl" d="'+th+'"/>';
  /* the workshop: wall, sawtooth north lights, plinth, two loading doors, a clerestory of windows, the chimney */
  var ws='M'+X0+' '+GL+'V'+EV+'M'+X1+' '+GL+'V'+EV+'M'+(X0-6)+' '+GL+'V'+(GL-12)+'H'+(X1+6)+'V'+GL;
  for(var j=0;j<NT;j++){var a=X0+j*TW;ws+='M'+a+' '+EV+'V'+RT+'L'+(a+TW)+' '+EV}
  ws+='M'+X0+' '+EV+'H'+X1;
  for(var j2=0;j2<NT;j2++){var a2=X0+j2*TW;ws+='M'+(a2+3)+' '+(RT+8)+'L'+(a2+TW-10)+' '+(EV-3)}
  ws+='M'+(X0+24)+' '+(GL-12)+'V'+(GL-92)+'H'+(X0+94)+'V'+(GL-12);for(var sd=GL-84;sd<GL-14;sd+=8)ws+='M'+(X0+28)+' '+sd+'H'+(X0+90);
  var WIN='';for(var q=0;q<7;q++){var qx=X0+16+q*45;WIN+='M'+qx+' '+(EV+48)+'V'+(EV+22)+'H'+(qx+28)+'V'+(EV+48)+'Z M'+(qx+14)+' '+(EV+22)+'V'+(EV+48)}
  ws+=WIN;
  ws+='M'+(X1-58)+' '+RT+'V150H'+(X1-36)+'V'+RT+'M'+(X1-62)+' 150H'+(X1-32)+'V142H'+(X1-62)+'Z';
  g+='<path class="sD bl" d="'+ws+'"/>';
  /* azulejo band under the eaves */
  var az='';for(var b=X0+4;b<X1-12;b+=10)az+='M'+b+' '+(EV+10)+'l5 -5l5 5l-5 5Z';g+='<path class="sD ht" d="'+az+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 492h228v52h-228Z M548 518h228"/><text x="558" y="510" class="t">ALÇADO · UMA PARTICIPADA</text><text x="558" y="536" class="t s">LISBOA · PORTUGAL</text></g>';
  g+='</g>';
  /* 1 LIGAR: the arc from the office to the works, and the people at the door */
  var arc='M'+(tx+tw*.5)+' '+(tt-56)+'C'+(tx+tw*.5+60)+' 60 '+(X0+150)+' 70 '+(X0+TW*2)+' '+(RT-14);
  g+='<g id="sc1"><path class="pipe dr" d="'+arc+'"/><circle class="lbl" cx="'+(tx+tw*.5)+'" cy="'+(tt-56)+'" r="5"/><circle class="lbl" cx="'+(X0+TW*2)+'" cy="'+(RT-14)+'" r="5"/>';
  var fig=function(x,s){return 'M'+x+' '+GL+'L'+(x+4*s)+' '+(GL-26*s)+'L'+(x+8*s)+' '+GL+'M'+(x+4*s)+' '+(GL-26*s)+'V'+(GL-50*s)+'M'+(x-4*s)+' '+(GL-42*s)+'L'+(x+4*s)+' '+(GL-48*s)+'L'+(x+12*s)+' '+(GL-42*s)+'M'+(x+4*s)+' '+(GL-50*s)+'m-6 -7a6 6 0 1 0 12 0a6 6 0 1 0 -12 0'};
  g+='<path class="lbll dr" d="'+fig(X0+104,1)+fig(X0+124,1)+'"/>';
  g+='<text x="44" y="64" class="a">LIGAR</text></g>';
  /* 2 TRANSFORMAR: the cut-away production line, solar on the north lights, the dimensions of the change */
  var cx0=X0+150,cx1=X1-14,cy0=EV+66,cy1=GL-16;
  var cut='M'+cx0+' '+cy1+'V'+cy0+'H'+cx1+'V'+cy1+'Z';
  var line='M'+(cx0+10)+' '+(cy1-10)+'H'+(cx1-10);
  for(var r=0;r<6;r++){var rx=cx0+18+r*((cx1-cx0-36)/5);line+='M'+(rx+6)+' '+(cy1-10)+'a6 6 0 1 0 -12 0a6 6 0 1 0 12 0'}
  [cx0+12,cx0+62,cx0+112].forEach(function(mx){line+='M'+mx+' '+(cy1-18)+'V'+(cy0+22)+'H'+(mx+40)+'V'+(cy1-18)+'M'+(mx+10)+' '+(cy0+22)+'V'+(cy0+12)+'H'+(mx+30)+'V'+(cy0+22)+'M'+(mx+8)+' '+(cy0+34)+'H'+(mx+32)+'V'+(cy0+48)+'H'+(mx+8)+'Z'});
  var sol='';for(var j3=0;j3<NT;j3++){var a3=X0+j3*TW+TW*.5;for(var p=0;p<4;p++){var u=(p+.5)/4.6;sol+='M'+f(a3-TW*.42+u*TW*.84)+' '+f(RT+u*(EV-RT)*.98)+'l9 -3'}}
  var hat='';for(var y=cy0+10;y<=cy1;y+=10)hat+='M'+(cx0-12)+' '+y+'l10 -10';
  g+='<g id="sc2"><path class="sec dr" d="'+cut+'"/><path class="hat dr" d="'+hat+'"/><path class="frm dr" d="'+line+'"/>'+
     '<path class="sec dr" d="'+(function(){var s='';for(var j4=0;j4<NT;j4++){var a4=X0+j4*TW;s+='M'+(a4+TW*.12)+' '+(RT+6)+'L'+(a4+TW*.9)+' '+(EV-4)}return s})()+'"/><path class="hat dr" d="'+sol+'"/>'+
     '<path class="dim dr" d="M'+X0+' '+(RT-36)+'H'+X1+'M'+X0+' '+(RT-42)+'V'+(RT-30)+'M'+X1+' '+(RT-42)+'V'+(RT-30)+'M'+(X1+22)+' '+GL+'V'+RT+'M'+(X1+16)+' '+GL+'H'+(X1+28)+'M'+(X1+16)+' '+RT+'H'+(X1+28)+'"/>'+
     '<text x="44" y="64" class="a">PROGRAMA DE MUDANÇA</text></g>';
  /* 3 CRESCER: a new bay lit, a lorry at the dock, trees planted along the yard */
  var nx=X1+42,nw=130;
  var bay='M'+nx+' '+GL+'V'+EV+'H'+(nx+nw)+'V'+GL+'M'+nx+' '+EV+'V'+RT+'L'+(nx+nw*.5)+' '+EV+'V'+RT+'L'+(nx+nw)+' '+EV;
  var lw='';for(var m=0;m<3;m++){var lx=nx+14+m*38;lw+='M'+lx+' '+(EV+48)+'V'+(EV+22)+'H'+(lx+26)+'V'+(EV+48)+'Z'}
  var lorry='M'+(nx+6)+' '+(GL-8)+'V'+(GL-46)+'H'+(nx+86)+'V'+(GL-8)+'M'+(nx+86)+' '+(GL-34)+'H'+(nx+106)+'L'+(nx+116)+' '+(GL-20)+'V'+(GL-8)+'H'+(nx+86)+
            'M'+(nx+28)+' '+(GL-4)+'a6 6 0 1 0 -12 0a6 6 0 1 0 12 0M'+(nx+108)+' '+(GL-4)+'a6 6 0 1 0 -12 0a6 6 0 1 0 12 0';
  var tree=function(x,s){return 'M'+x+' '+GL+'V'+(GL-30*s)+'M'+(x+18*s)+' '+(GL-46*s)+'a18 18 0 1 0 -36 0a18 18 0 1 0 36 0M'+(x-10*s)+' '+(GL-52*s)+'a10 10 0 0 1 14 -6'};
  g+='<g id="sc3"><path class="lit2" d="'+bay+'"/><path class="lit" d="'+lw+'"/><path class="lbll" d="'+lorry+'"/>'+
     '<path class="lit3" d="'+tree(X0-38,1)+tree(X1+21,.7)+'"/>'+
     '<path class="lit" d="'+WIN+'"/>'+
     '<text x="44" y="64" class="a">CRESCIMENTO SUSTENTADO</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb",svg),g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),
    d1:dl("#sc1 .dr"),d2:dl("#sc2 .dr"),t:[$("#sc1 text",svg),$("#sc2 text",svg),$("#sc3 text",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.2),s2=seg(p,.33,.58),s3=seg(p,.67,.92);
    E.g1.style.opacity=b.toFixed(3);draw(E.d1,Math.max(s1,.5));
    E.g2.style.opacity=(b*(s2>0?1:0)).toFixed(3);draw(E.d2,s2);
    E.g3.style.opacity=(b*s3).toFixed(3);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s2).toFixed(3);E.t[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.t[2].style.opacity=I(s3).toFixed(3);
  };
}
