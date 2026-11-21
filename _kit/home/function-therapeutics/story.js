/* The story scene (BL/BY/DB): ONE engraved scene kept on screen for all four steps, in the language of the Function logo, whose
   arrow runs from red to blue. PAR1 drawn as seven helices crossing the cell membrane, its N-terminal tail outside the cell.
   Step 1 a protease (thrombin) cuts the tail. Step 2 the receptor sends an inflammatory signal into the cell (red). Step 3 a
   parmodulin, a small molecule, binds the receptor at its inner face. Step 4 the signal is redirected: the inflammatory arm dims
   and a protective, anti-inflammatory signal is drawn (blue).
   Sources: functiontx.com (Home, Science). Schematic, not to scale. Driven by the scrubbed story progress. */
var FS={MY:250,MH:96,HX:[262,306,350,394,438,482,526],TOP:198,BOT:402,PRO:[176,112],PM:[394,424]};
function fsMem(){var s='',x,y0=FS.MY,y1=FS.MY+FS.MH;
  for(x=40;x<=760;x+=14){if(x>238&&x<552)continue;
    s+='<circle class="lh sD" cx="'+x+'" cy="'+(y0+7)+'" r="5.2"/><path class="lt sD" d="M'+(x-2)+' '+(y0+13)+'v30M'+(x+2)+' '+(y0+13)+'v30"/>'+
       '<circle class="lh sD" cx="'+x+'" cy="'+(y1-7)+'" r="5.2"/><path class="lt sD" d="M'+(x-2)+' '+(y1-13)+'v-30M'+(x+2)+' '+(y1-13)+'v-30"/>'}
  return s}
/* one transmembrane helix: an engraved cylinder with its turns hatched across it */
function fsHelix(x,i){var t=FS.TOP+(i%2?8:0),b=FS.BOT-(i%2?0:8),w=17,k=(i-3)*2.2,s='';
  s+='<path class="hx sD" d="M'+(x-w+k)+' '+t+'L'+(x-w-k)+' '+b+'A'+w+' 7 0 0 0 '+(x+w-k)+' '+b+'L'+(x+w+k)+' '+t+'A'+w+' 7 0 0 0 '+(x-w+k)+' '+t+'Z"/>';
  for(var y=t+14;y<b-6;y+=13){var dx=k*(1-2*(y-t)/(b-t));s+='<path class="ht sD" d="M'+(x-w+dx+2)+' '+(y+5)+'Q'+(x+dx)+' '+(y-6)+' '+(x+w+dx-2)+' '+(y+5)+'"/>'}
  return s}
function fsLoops(){var H=FS.HX,s='';
  for(var i=0;i<6;i++){var a=H[i],b=H[i+1],top=i%2===1,y=top?FS.TOP+(i%2?0:8):FS.BOT;
    if(top)s+='<path class="lp sD" d="M'+(a+8)+' '+(FS.TOP+4)+'C'+(a+10)+' '+(FS.TOP-34)+' '+(b-10)+' '+(FS.TOP-34)+' '+(b-8)+' '+(FS.TOP+4)+'"/>';
    else s+='<path class="lp sD" d="M'+(a+8)+' '+(FS.BOT-2)+'C'+(a+10)+' '+(FS.BOT+30)+' '+(b-10)+' '+(FS.BOT+30)+' '+(b-8)+' '+(FS.BOT-2)+'"/>'}
  /* the C-terminal tail inside the cell */
  s+='<path class="lp sD" d="M'+(H[6]+10)+' '+(FS.BOT-2)+'C'+(H[6]+30)+' '+(FS.BOT+40)+' '+(H[6]+70)+' '+(FS.BOT+22)+' '+(H[6]+92)+' '+(FS.BOT+44)+'"/>';
  return s}
function fsSignal(id,cls,d,head){return '<g id="'+id+'" class="sg '+cls+'"><path class="sgw" d="'+d+'"/><path class="sgl" d="'+d+'"/><path class="sgh" d="'+head+'"/></g>'}
function fsPm(){var p='',i;for(i=0;i<6;i++){var a=(i*60-30)*Math.PI/180;p+=(i?'L':'M')+(15*Math.cos(a)).toFixed(1)+' '+(15*Math.sin(a)).toFixed(1)}
  var q='';for(i=0;i<6;i++){var a2=(i*60-30)*Math.PI/180;q+=(i?'L':'M')+(30+15*Math.cos(a2)).toFixed(1)+' '+(-6+15*Math.sin(a2)).toFixed(1)}
  return '<g class="pm" id="pm"><circle class="pm0" cx="14" r="46"/><path class="pm1" d="'+p+'Z"/><path class="pm1" d="'+q+'Z"/><path class="pm2" d="M-15 8.7L-30 18M45 -14.7L58 -24"/></g>'}
function scene(){
  var mob=MOBILE(),g='',H=FS.HX,P=FS.PRO;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="fsr" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ff6a55" stop-opacity=".3"/><stop offset="1" stop-color="#ff6a55" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="fsb" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#7ea2ff" stop-opacity=".3"/><stop offset="1" stop-color="#7ea2ff" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="fsw" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#f2f3f6" stop-opacity=".22"/><stop offset="1" stop-color="#f2f3f6" stop-opacity="0"/></radialGradient>'+
     '<linearGradient id="fsm" gradientUnits="userSpaceOnUse" x1="20" y1="0" x2="780" y2="0"><stop offset="0" stop-color="#f2f3f6" stop-opacity="0"/><stop offset=".22" stop-color="#f2f3f6" stop-opacity=".5"/><stop offset=".78" stop-color="#f2f3f6" stop-opacity=".5"/><stop offset="1" stop-color="#f2f3f6" stop-opacity="0"/></linearGradient>'+
     '<linearGradient id="fsh" gradientUnits="userSpaceOnUse" x1="240" y1="0" x2="560" y2="0"><stop offset="0" stop-color="#ff6a55"/><stop offset=".35" stop-color="#c9d4f2"/><stop offset="1" stop-color="#6f97ff"/></linearGradient></defs>';
  g+='<g id="scBase">';
  g+='<circle class="halo" cx="400" cy="300" r="300" fill="url(#fsw)"/>';
  g+='<text class="side" x="'+(mob?40:44)+'" y="'+(FS.MY-18)+'">OUTSIDE THE CELL</text><text class="side" x="'+(mob?40:44)+'" y="'+(FS.MY+FS.MH+30)+'">INSIDE</text>';
  g+='<g class="mem">'+fsMem()+'</g>';
  g+='<g class="rcp">'+fsLoops()+H.map(fsHelix).join('')+'</g>';
  g+='</g>';
  g+='<g id="scMove">';
  /* the N-terminal tail: the part the protease cuts off */
  g+='<path class="nt" id="ntCut" d="M'+(H[0]-6)+' '+FS.TOP+'C'+(H[0]-12)+' 160 '+(H[0]-40)+' 140 '+(H[0]-62)+' 132C'+(H[0]-84)+' 124 '+(H[0]-100)+' 118 '+(H[0]-118)+' 108"/>';
  g+='<path class="nt" id="ntKeep" d="M'+(H[0]-6)+' '+FS.TOP+'C'+(H[0]-12)+' 160 '+(H[0]-40)+' 140 '+(H[0]-62)+' 132"/>';
  g+='<g id="pro"><circle cx="'+P[0]+'" cy="'+P[1]+'" r="70" fill="url(#fsw)"/><path class="po" d="'+fsBlob(P[0],P[1],44)+'"/><path class="pi" d="'+fsBlob(P[0]+4,P[1]-2,27)+'"/><path class="pj" d="M'+(P[0]+26)+' '+(P[1]+14)+'l14 8"/></g>';
  g+='<path class="cut" id="cut" d="M'+(H[0]-72)+' 118l20 26M'+(H[0]-52)+' 118l-20 26"/>';
  g+='<circle id="gR" cx="300" cy="470" r="90" fill="url(#fsr)"/><circle id="gB" cx="500" cy="470" r="90" fill="url(#fsb)"/>';
  g+=fsSignal("sR","rd","M372 430C340 456 300 466 252 486","M262 476L248 488 266 492");
  g+=fsSignal("sB","bl","M416 430C450 456 494 466 548 486","M534 476L552 488 534 494");
  g+='<path class="stop" id="stop" d="M300 452l22 26"/>';
  g+=fsPm();
  g+='</g>';
  var LX=mob?40:44,BY=mob?540:536,BY2=mob?558:554;
  g+='<g id="lb1"><text class="a" x="'+(P[0]+62)+'" y="'+(mob?70:66)+'">THROMBIN</text>'+(mob?'':'<text class="t" x="'+(P[0]+62)+'" y="'+86+'">A PROTEASE CUTS THE N-TERMINUS</text>')+
     '<text class="a" x="400" y="'+BY+'" text-anchor="middle">PAR1</text>'+(mob?'':'<text class="t" x="400" y="'+BY2+'" text-anchor="middle">SEVEN HELICES ACROSS THE CELL MEMBRANE</text>')+'</g>';
  g+='<g id="lb2"><text class="a rd" x="'+LX+'" y="'+BY+'">INFLAMMATION</text>'+(mob?'':'<text class="t" x="'+LX+'" y="'+BY2+'">THE SIGNAL IS TRANSMITTED AND AMPLIFIED</text>')+'</g>';
  g+='<g id="lb3"><text class="a" x="400" y="'+BY+'" text-anchor="middle">PARMODULIN</text>'+(mob?'':'<text class="t" x="400" y="'+BY2+'" text-anchor="middle">A SMALL MOLECULE ACTING AT PAR1</text>')+'</g>';
  g+='<g id="lb4"><text class="a bl" x="'+(800-LX)+'" y="'+BY+'" text-anchor="end">PROTECTION</text>'+(mob?'':'<text class="t" x="'+(800-LX)+'" y="'+BY2+'" text-anchor="end">ANTI-INFLAMMATORY SIGNALS PROMOTED</text>')+'</g>';
  return g+'</svg>';
}
function fsBlob(cx,cy,r){var s='',i,n=72;for(i=0;i<=n;i++){var t=i/n*Math.PI*2,rr=r*(1+.06*Math.sin(5*t+.7)+.04*Math.sin(9*t+2.1));
  s+=(i?'L':'M')+(cx+rr*Math.cos(t)).toFixed(1)+' '+(cy+rr*.86*Math.sin(t)).toFixed(1)}return s+'Z'}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var dl1=function(el){var L=el.getTotalLength();el.style.strokeDasharray=L+" "+L;return [el,L]};
  var E={base:dl("#scBase .sD"),halo:$(".halo",svg),mv:$("#scMove",svg),side:$$(".side",svg),
    pro:$("#pro",svg),cut:$("#cut",svg),ntC:$("#ntCut",svg),ntK:$("#ntKeep",svg),
    sR:$("#sR",svg),sB:$("#sB",svg),rl:dl1($("#sR .sgl",svg)),bl:dl1($("#sB .sgl",svg)),gR:$("#gR",svg),gB:$("#gB",svg),stop:$("#stop",svg),pm:$("#pm",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.halo,b);op(E.mv,b);E.side.forEach(function(s){op(s,b*.9)})}
    /* 1: the protease arrives and cuts the tail */
    var arr=seg(p,.0,.14),cut=seg(p,.12,.2),gone=seg(p,.2,.3);
    E.pro.setAttribute("transform","translate("+(-60*(1-arr)-40*gone).toFixed(1)+" "+(-30*(1-arr)-30*gone).toFixed(1)+")");
    op(E.pro,b*arr*(1-gone));
    op(E.cut,b*cut*(1-gone));
    op(E.ntC,b*(1-cut));op(E.ntK,b*cut);
    E.ntC.setAttribute("transform","translate("+(-30*cut)+" "+(-24*cut)+")");
    /* 2: the inflammatory signal is drawn; 3: the parmodulin binds; 4: the signal is redirected */
    var sr=seg(p,.26,.42),dock=seg(p,.5,.66),flip=seg(p,.72,.9);
    draw([E.rl],sr);op(E.sR,b*(sr>0?1:0)*(1-.72*flip));op(E.gR,b*sr*(1-flip));
    $("#sR .sgh",svg).style.opacity=(sr>.92?1:0);
    draw([E.bl],flip);op(E.sB,b*(flip>0?1:0));op(E.gB,b*flip);
    $("#sB .sgh",svg).style.opacity=(flip>.92?1:0);
    op(E.stop,b*seg(p,.8,.9));
    var py=FS.PM[1]+120*(1-dock),px=FS.PM[0]-14-60*(1-dock);
    E.pm.setAttribute("transform","translate("+px.toFixed(1)+" "+py.toFixed(1)+") rotate("+(90*(1-dock)).toFixed(1)+")");
    op(E.pm,b*seg(p,.46,.54));
    E.pm.classList.toggle("lit",dock>.9);
    op(E.l1,b*seg(p,.02,.1)*(1-seg(p,.2,.26)));
    op(E.l2,b*seg(p,.3,.38)*(1-seg(p,.44,.5)));
    op(E.l3,b*seg(p,.52,.6)*(1-seg(p,.68,.74)));
    op(E.l4,b*seg(p,.8,.88));
  };
}
