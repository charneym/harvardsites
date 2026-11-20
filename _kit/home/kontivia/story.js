/* the story scene (BL/BY/DB): ONE engraved drawing of how Kontivia works. Step one is a full-frame elevation of a Swiss
   family firm, the life's work: a gabled workshop with a clock in the gable, shingled roof, a chimney and a tree. In step two
   (succession) its windows light up and the people stay: the management at the door. In step three the workshop steps back
   to the left and two more companies draw in beside it on one shared base line: six holdings in three platforms. In step four
   the Alps draw in behind the whole row and the workshop gains a new wing: continuity with a long view. Lines draw on scroll;
   labels fade in with their step, one at a time. */
function workshop(){
  var gy=400,s='',t='',w='',f=function(n){return n.toFixed(1)};
  /* body, eaves and gable roof */
  s+='M200 '+gy+'V230H600V'+gy+'M180 232L400 120L620 232M172 236L400 116L628 236';
  /* shingle courses parallel to the eaves */
  for(var i=1;i<8;i++){var y=230-i*13,xl=180+(230-y)*2,xr=620-(230-y)*2;t+='M'+f(xl+6)+' '+y+'H'+f(xr-6);
    for(var x=xl+14+(i%2)*9;x<xr-10;x+=18)t+='M'+f(x)+' '+y+'v13'}
  /* clock in the gable */
  s+='M384 178a16 16 0 1 0 32 0a16 16 0 1 0 -32 0';t+='M400 178v-10M400 178l7 5M382 196h36';
  /* chimney with smoke */
  s+='M508 '+(230-(620-508)/2)+'V140h22V'+(230-(620-530)/2)+'M504 140h30';
  t+='M520 132c-8-8 8-14 0-24c-8-10 10-14 4-26';
  /* windows: two rows, shutters on the upper row */
  for(var r=0;r<2;r++)for(var j=0;j<6;j++){var wx=222+j*62,wy=r?318:250;if(r&&(j===2||j===3))continue;
    w+='<rect class="wn0" x="'+wx+'" y="'+wy+'" width="30" height="42"/>';t+='M'+(wx+15)+' '+wy+'v42M'+wx+' '+(wy+20)+'h30';
    if(!r)t+='M'+(wx-8)+' '+wy+'v42M'+(wx+38)+' '+wy+'v42'}
  /* workshop door with planks and a name board above it (left blank) */
  s+='M366 '+gy+'V330h68V'+gy+'M400 330V'+gy+'M352 304h96v18h-96Z';
  for(var p=1;p<7;p++)t+='M366 '+(330+p*10)+'h68';
  /* plinth and corner stones */
  t+='M200 384H600';for(var c=0;c<9;c++)t+='M200 '+(236+c*18)+'h10M590 '+(236+c*18)+'h10';
  /* a tree beside it */
  s+='M150 '+gy+'V300M150 330l-16-18M150 316l14-14';
  t+='M150 300c-34 4-44-30-22-46c-6-30 34-40 44-18c30-6 40 30 18 44c6 26-28 34-40 20';
  return {s:s,t:t,w:w};
}
function people(){var o='',P=[[318,0],[340,1],[462,0],[484,1]];P.forEach(function(q){var x=q[0],gy=400,hh=gy-46;
  o+='<path class="fig" d="M'+x+' '+gy+'l4-20M'+(x+10)+' '+gy+'l-3-20M'+(x+1)+' '+(gy-20)+'h8v-18q0-6-4-6t-4 6Z M'+(x+5)+' '+(hh+2)+'m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/>'});return o}
function companies(){
  var gy=400,s='',t='',w='';
  /* company two: a production hall with a sawtooth roof */
  s+='M352 '+gy+'V300H562V'+gy;
  for(var i=0;i<5;i++){var a=352+i*42;s+='M'+a+' 300V276L'+(a+42)+' 300';w+='<path class="gl" d="M'+(a+2)+' 298V279L'+(a+12)+' 284V298Z"/>'}
  for(var k=0;k<6;k++)w+='<rect class="wn0" x="'+(362+k*32)+'" y="314" width="22" height="14"/>';
  for(var d=0;d<2;d++){var dx=470+d*42;s+='M'+dx+' '+gy+'V346h32V'+gy;for(var q=1;q<6;q++)t+='M'+dx+' '+(346+q*9)+'h32'}
  s+='M372 '+gy+'V352h22V'+gy;
  /* company three: precision works, an office block and a flat-roofed hall with a stack */
  s+='M592 '+gy+'V262H664V'+gy+'M588 262H668V254H588Z M664 '+gy+'V312H772V'+gy+'M664 312H772';
  for(var r=0;r<3;r++)for(var j=0;j<3;j++)w+='<rect class="wn0" x="'+(602+j*22)+'" y="'+(274+r*34)+'" width="12" height="20"/>';
  for(var m=0;m<4;m++)w+='<rect class="wn0" x="'+(676+m*24)+'" y="326" width="16" height="22"/>';
  s+='M744 312V246h14V312M740 246h22';t+='M751 238c-6-6 6-10 0-18c-6-8 8-10 3-18';
  s+='M612 '+gy+'V368h24V'+gy;
  return {s:s,t:t,w:w};
}
function alpsLine(){
  /* the range behind the row, kept above every roofline */
  var P=[[16,262],[60,226],[96,238],[138,196],[170,214],[214,166],[246,190],[282,170],[318,206],[352,228],[392,186],[430,150],[462,176],[498,160],[540,204],[578,216],[618,182],[660,198],[702,164],[742,192],[784,214]];
  var s='M'+P.map(function(p){return p[0]+' '+p[1]}).join('L'),t='';
  /* snow and couloirs falling from each summit, short and clear of the buildings */
  for(var i=1;i<P.length-1;i++)if(P[i][1]<P[i-1][1]&&P[i][1]<P[i+1][1]){var x=P[i][0],y=P[i][1];
    t+='M'+x+' '+y+'l-8 16l6-2l-4 12M'+x+' '+y+'l10 14l-5 0l6 10M'+(x-18)+' '+(y+20)+'l6 6'}
  return {s:s,t:t};
}
function wing(){
  /* a new wing on the workshop (in workshop coordinates, right of the main body) */
  var gy=400;return {plan:'M600 300H700V'+gy,s:'M600 300L650 268L700 300M600 300H700V'+gy+'M612 '+gy+'V336h26V'+gy+'M654 314h32v26h-32Z M670 314v26'};
}
function scene(){
  var mob=MOBILE(),W=workshop(),C=companies(),A=alpsLine(),N=wing(),gy=400;
  var g='<svg viewBox="0 96 800 420" preserveAspectRatio="xMidYMid meet" class="'+(mob?'mob':'')+'" role="img" aria-label="Gestochene Zeichnung: ein Schweizer Familienunternehmen mit Werkstatt, die Nachfolge mit dem Management, zwei weitere Unternehmen auf einer gemeinsamen Plattform und die Alpen dahinter">';
  g+='<g id="scBase"><rect class="neat" x="8" y="104" width="784" height="404"/>';
  g+='<path class="gr sD" d="M24 '+gy+'H776"/><path class="ht sD" d="M24 '+(gy+52)+'H776'+(function(){var h='';for(var x=30;x<776;x+=14)h+='M'+x+' '+(gy+6)+'l-6 8';return h})()+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 466H776V500H548Z M548 483H776"/><text class="t" x="558" y="479">KONTIVIA · NACHFOLGE</text><text class="t s" x="558" y="496">ZÜRICH · SEIT 2016</text></g></g>';
  /* step 4 range sits behind everything */
  g+='<g id="sc4"><path class="bl dr" d="'+A.s+'"/><path class="kb dr" d="'+A.t+'"/><text class="a" x="24" y="438" text-anchor="start">KONTINUITÄT MIT WEITBLICK</text></g>';
  /* step 3: two more companies and the shared platform line */
  g+='<g id="sc3"><path class="bl dr" d="'+C.s+'"/><path class="kb dr" d="'+C.t+'"/>'+C.w.replace(/class="wn0"/g,'class="wn0 w3"').replace(/class="gl"/g,'class="gl w3"')+
     '<path class="pipe dr" d="M180 418H700M180 412v12M457 412v12M700 412v12"/><text class="a" x="24" y="438" text-anchor="start">SECHS BETEILIGUNGEN · DREI PLATTFORMEN</text></g>';
  /* the workshop (steps 1-2), which steps back in step 3 and gains a wing in step 4 */
  g+='<g id="sl"><path class="bl sD" d="'+W.s+'"/><path class="kb sD" d="'+W.t+'"/><g class="ww">'+W.w+'</g>'+
     '<g id="sl2">'+people()+'</g><g id="sl4"><path class="plan" d="'+N.plan+'"/><path class="bl dr" d="'+N.s+'"/></g></g>';
  g+='<g id="sc1"><text class="a" x="24" y="438" text-anchor="start">DAS LEBENSWERK · EIN SCHWEIZER KMU</text></g>';
  g+='<g id="sc2"><text class="a" x="24" y="438" text-anchor="start">NACHFOLGE · DAS MANAGEMENT BLEIBT</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD, #sl > .sD"),fade:$$("#scBase .neat, #scBase .tb, #sl .ww .wn0",svg),sl:$("#sl",svg),
    win:$$("#sl .ww .wn0",svg),fig:$$("#sl2 .fig",svg),d3:dl("#sc3 .dr"),w3:$$("#sc3 .w3",svg),d4:dl("#sc4 .dr, #sl4 .dr"),plan:$("#sl4 .plan",svg),
    g3:$("#sc3",svg),g4:$("#sc4",svg),sl4:$("#sl4",svg),
    t:[$("#sc1 text",svg),$("#sc2 text",svg),$("#sc3 text",svg),$("#sc4 text",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s2=seg(p,.2,.42),s3=seg(p,.47,.68),s4=seg(p,.73,.94);
    /* step 2: the windows light and the people stay */
    E.win.forEach(function(el){el.setAttribute("class","wn0"+(s2>.5?" lit2":""))});
    E.fig.forEach(function(el,i){el.style.opacity=cl01(s2*1.6-i*.15).toFixed(3)});
    /* step 3: the workshop steps back to the left as two more companies draw in */
    var k=1-.45*s3,ax=140-104*s3;
    E.sl.setAttribute("transform","translate("+ax.toFixed(2)+" 400) scale("+k.toFixed(4)+") translate(-140 -400)");
    E.g3.style.opacity=(b*(s3>0?1:0)).toFixed(3);draw(E.d3,s3);E.w3.forEach(function(el){el.style.opacity=s3.toFixed(3)});
    E.g4.style.opacity=(b*(s4>0?1:0)).toFixed(3);E.sl4.style.opacity=(s4>0?1:0);draw(E.d4,s4);E.plan.style.opacity=(s4*(1-s4)*4).toFixed(3);
    var h1=function(x){return seg(x,0,.5)},h2=function(x){return seg(x,.5,1)};E.t[0].style.opacity=(b*(1-h1(s2))).toFixed(3);E.t[1].style.opacity=(h2(s2)*(1-h1(s3))).toFixed(3);E.t[2].style.opacity=(h2(s3)*(1-h1(s4))).toFixed(3);E.t[3].style.opacity=h2(s4).toFixed(3);
  };
}
function cl01(x){return x<0?0:x>1?1:x}
