/* the story scene (DB/BL): ONE engraved top-down view of a comet-assay microwell array in agarose, the readout behind
   Amelia's Immuno-CometChip and SphereDNA work. Step 1 a cell settles into every well; step 2 UV light falls on the
   exposed columns (the control column is shielded) and break marks appear in the nuclei; step 3 lysis dissolves the
   membranes, leaving each genome as a bundle; step 4 the electric field pulls broken DNA out into comet tails, longer
   with dose; step 5 one comet is scored: head and tail bracketed, and its intensity profile drawn below the gel. */
var CX=[120,275,430,585],CY=[160,270,380],TL=[0,66,104,135];
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true"><defs>'+
    '<linearGradient id="tailG" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#7cc35a" stop-opacity=".85"/><stop offset="1" stop-color="#7cc35a" stop-opacity="0"/></linearGradient></defs>';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  var hat='';for(var x=44;x<756;x+=16)hat+='M'+x+' 428l12 -12';
  g+='<path class="sD gel" d="M40 96H760V430H40Z"/><path class="sD ht" d="'+hat+'"/>';
  CY.forEach(function(y){CX.forEach(function(x){g+='<path class="sD well" d="M'+(x-33)+' '+y+'A33 33 0 1 0 '+(x+33)+' '+y+'A33 33 0 1 0 '+(x-33)+' '+y+'"/>'})});
  g+='<text x="'+CX[0]+'" y="115" text-anchor="middle" class="t">CONTROL</text><text x="'+(CX[3]+40)+'" y="115" text-anchor="middle" class="t">HIGHEST DOSE</text>';
  g+='<g class="tb"><text x="24" y="548" class="t">COMET ASSAY · MICROWELL ARRAY · SCHEMATIC</text></g></g>';
  g+='<g id="tails">';CY.forEach(function(y,r){CX.forEach(function(x,c){g+='<path class="tail" data-c="'+c+'" data-r="'+r+'" d="M'+x+' '+y+'"/>'})});g+='</g>';
  g+='<g id="cells">';CY.forEach(function(y,r){CX.forEach(function(x,c){g+='<g class="cell" data-c="'+c+'"><circle class="mem" cx="'+x+'" cy="'+y+'" r="22"/><circle class="nuc" cx="'+x+'" cy="'+y+'" r="11"/></g>'})});g+='</g>';
  var rays='';for(var i=0;i<10;i++){var rx=212+i*56;rays+='M'+(rx+28)+' 34L'+(rx-4)+' 86M'+(rx-4)+' 86l1 -11M'+(rx-4)+' 86l9 -6'}
  g+='<g id="uv"><path class="ray dr" d="'+rays+'"/><path class="shield dr" d="M76 84H164"/><text x="120" y="74" text-anchor="middle" class="t">SHIELDED</text><text x="760" y="52" text-anchor="end" class="a">UV</text></g>';
  g+='<g id="brk">';CY.forEach(function(y){CX.forEach(function(x,c){for(var k=0;k<c;k++){var a=k*2.1+c,bx=x+Math.cos(a)*6,by=y+Math.sin(a)*6;g+='<path class="bk" d="M'+(bx-3.5).toFixed(1)+' '+(by-3.5).toFixed(1)+'l7 7M'+(bx+3.5).toFixed(1)+' '+(by-3.5).toFixed(1)+'l-7 7"/>'}})});g+='</g>';
  g+='<g id="fld"><text x="22" y="272" text-anchor="middle" class="w big">−</text><text x="778" y="272" text-anchor="middle" class="w big">+</text><path class="fa dr" d="M150 452H350M338 446L350 452L338 458"/><text x="250" y="478" text-anchor="middle" class="t">ELECTRIC FIELD</text></g>';
  var sx=CX[3],sy=CY[1];
  g+='<g id="score"><path class="brk" d="M'+(sx-12)+' '+(sy-38)+'v-8H'+(sx+12)+'v8M'+(sx+16)+' '+(sy-38)+'v-8H'+(sx+TL[3])+'v8"/>'+
     '<text x="'+sx+'" y="'+(sy-52)+'" text-anchor="middle" class="t hl">HEAD</text><text x="'+(sx+16+(TL[3]-16)/2)+'" y="'+(sy-52)+'" text-anchor="middle" class="t hl">TAIL</text>'+
     '<path class="drop" d="M'+(sx-12)+' '+(sy+14)+'V446M'+(sx+TL[3])+' '+(sy+6)+'V446"/>'+
     '<path class="tbl" d="M540 446H776V550H540Z"/><path class="kb2" d="M552 536H764"/><text x="552" y="466" class="t">INTENSITY ALONG THE COMET</text>'+
     '<path id="prof" class="prof" d="M552 512"/><text x="764" y="496" text-anchor="end" class="a">% DNA IN TAIL</text></g>';
  g+='<text id="cap1" x="40" y="62" class="a cap">ONE CELL PER WELL</text>';
  g+='<text id="cap2" x="40" y="62" class="a cap">EXPOSED TO UV</text>';
  g+='<text id="cap3" x="40" y="62" class="a cap">MEMBRANES LYSED</text>';
  g+='<text id="cap4" x="40" y="62" class="a cap">ELECTROPHORESIS</text>';
  g+='<text id="cap5" x="40" y="62" class="a cap">SCORED</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var Lg=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=Lg+" "+Lg;return [p,Lg]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase>text",svg),cells:$$("#cells .cell",svg),mem:$$("#cells .mem",svg),nuc:$$("#cells .nuc",svg),
    tails:$$("#tails .tail",svg),uv:$("#uv",svg),uvd:dl("#uv .dr"),brk:$("#brk",svg),fld:$("#fld",svg),fd:dl("#fld .dr"),score:$("#score",svg),prof:$("#prof",svg),
    cap:[1,2,3,4,5].map(function(i){return $("#cap"+i,svg)})};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function tail(x,y,len,w){if(len<1)return 'M'+x+' '+y;return 'M'+x+' '+(y-w)+'C'+(x+len*.45)+' '+(y-w*.95)+' '+(x+len*.8)+' '+(y-w*.5)+' '+(x+len)+' '+y+'C'+(x+len*.8)+' '+(y+w*.5)+' '+(x+len*.45)+' '+(y+w*.95)+' '+x+' '+(y+w)+'Z'}
  function prof(v){var d='',n=90,L=TL[3]+22;for(var i=0;i<=n;i++){var t=i/n,xx=-12+t*L,
      y=.95*Math.exp(-Math.pow(xx/7,2))+.42*Math.exp(-Math.pow((xx-40)/34,2))*(xx>4?1:.4);y*=Math.min(1,v*1.15);
      d+=(i?'L':'M')+(552+t*212).toFixed(1)+' '+(536-y*62).toFixed(1)}return d}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.14),s2=seg(p,.2,.34),s3=seg(p,.4,.54),s4=seg(p,.6,.76),s5=seg(p,.8,.94);
    var c1=Math.max(s1,b);
    E.cells.forEach(function(el,i){var k=Math.min(1,Math.max(0,c1*1.6-(i%4)*.12-Math.floor(i/4)*.08));el.style.opacity=(b*k*(s5>0&&i!==7?1-.5*s5:1)).toFixed(3)});
    E.uv.style.opacity=(b*(s2>0?1:0)*(1-.8*s3)*(1-s4)).toFixed(3);draw(E.uvd,s2);
    E.brk.style.opacity=(b*s2*(1-s4)).toFixed(3);
    E.mem.forEach(function(el){el.style.opacity=(1-s3).toFixed(3)});
    E.nuc.forEach(function(el){el.setAttribute("r",(11-2*s3).toFixed(2))});
    E.fld.style.opacity=(b*(s4>0?1:0)).toFixed(3);draw(E.fd,s4);
    E.tails.forEach(function(el){var c=+el.getAttribute("data-c"),r=+el.getAttribute("data-r"),x=CX[c],y=CY[r],len=TL[c]*(1+.06*(r-1))*s4;
      el.setAttribute("d",tail(x,y,len,9+c*.7));el.style.opacity=(b*(.25+.6*s4)*(c===3&&r===1?1:1-.55*s5)).toFixed(3)});
    E.score.style.opacity=(b*s5).toFixed(3);E.prof.setAttribute("d",prof(s5));
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.cap[0].style.opacity=(b*O(s2)).toFixed(3);E.cap[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.cap[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.cap[3].style.opacity=(I(s4)*O(s5)).toFixed(3);E.cap[4].style.opacity=I(s5).toFixed(3);
  };
}
