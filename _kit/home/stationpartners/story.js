/* the story scene (BL/BY/DB): ONE engraved elevation of a small-town railway station, drawn in the firm's own railway
   language. Invest: the established station (the platform company) stands on the line. Partner: its people are on the
   platform and the signal is set to clear. Build: a train of add-on cars pulls in behind the locomotive. Lines draw on
   scroll; labels fade in with their step. */
function stnScene(o){
  var f=function(n){return (+n).toFixed(1)},W=800,gy=o.gy,g='',i,M=o.mob;
  g+='<svg class="'+(M?"mob":"")+'" viewBox="'+o.vb+'" aria-hidden="true">';
  /* ---- base: hills, the line, ballast hatching, title block ---- */
  g+='<g id="scBase">';
  var hl='M0 '+f(gy-118);for(i=0;i<=40;i++){var x=i*20,y=gy-118-Math.sin(i*.38+.6)*22-Math.sin(i*.91)*9;hl+='L'+f(x)+' '+f(y)}
  g+='<path class="sD ht" d="'+hl+'"/>';
  var hl2='M0 '+f(gy-76);for(i=0;i<=40;i++){var x2=i*20,y2=gy-76-Math.sin(i*.27+2.1)*16-Math.sin(i*.77+1)*6;hl2+='L'+f(x2)+' '+f(y2)}
  g+='<path class="sD kb" d="'+hl2+'"/>';
  var hl3='M0 '+f(gy-170);for(i=0;i<=40;i++){var x3=i*20,y3=gy-170-Math.sin(i*.21+4)*30-Math.sin(i*.6+.3)*10;hl3+='L'+f(x3)+' '+f(y3)}
  g+='<path class="sD ht" d="'+hl3+'"/>';
  /* telegraph poles along the line, wires sagging between them */
  var px=[24,792],pt=gy-318,pw='',wr='';
  px.forEach(function(x){pw+='M'+x+' '+gy+'V'+pt+'M'+(x-20)+' '+(pt+10)+'H'+(x+20)+'M'+(x-16)+' '+(pt+24)+'H'+(x+16)});
  for(i=0;i<px.length-1;i++){var a=px[i],b=px[i+1],sg=(b-a)*.03;[[-20,10],[20,10],[-16,24],[16,24]].forEach(function(q){wr+='M'+(a+q[0])+' '+(pt+q[1])+'Q'+f((a+b)/2+q[0])+' '+f(pt+q[1]+sg)+' '+(b+q[0])+' '+(pt+q[1])})}
  g+='<path class="sD kb" d="'+pw+'"/><path class="sD ht" d="'+wr+'"/>';
  g+='<path class="sD gr" d="M0 '+gy+'H800M0 '+(gy+5)+'H800"/>';
  var ties='';for(i=0;i<58;i++){var tx=8+i*13.8;ties+='M'+f(tx)+' '+(gy+5)+'h8v6h-8z'}g+='<path class="sD kb" d="'+ties+'"/>';
  var ht='';for(i=0;i<80;i++){var hx=6+i*10;ht+='M'+f(hx)+' '+(gy+16)+'l-8 10'}g+='<path class="sD ht" d="'+ht+'"/>';
  g+='<path class="sD neat" d="M0 '+(gy+34)+'H800"/>';
  g+='<text class="t tb" x="0" y="'+(gy+58)+'">ELEVATION · THE STATION</text><text class="t s tb" x="800" y="'+(gy+58)+'" text-anchor="end">DIRECTION · DESTINATION · DEFINED</text>';
  /* the station, drawn with the base so the frame is never empty */
  var bx=96,bw=272,bt=gy-122,rt=gy-196;
  g+='<path class="sD bl" d="M'+bx+' '+gy+'V'+bt+'H'+(bx+bw)+'V'+gy+'"/>';
  g+='<path class="sD bl" d="M'+(bx-22)+' '+bt+'L'+(bx+bw/2)+' '+rt+'L'+(bx+bw+22)+' '+bt+'Z"/>';
  g+='<path class="sD kb" d="M'+(bx-22)+' '+bt+'l14 16M'+(bx+bw+22)+' '+bt+'l-14 16M'+(bx+40)+' '+bt+'l-10 14M'+(bx+bw-40)+' '+bt+'l10 14"/>';
  g+='<path class="sD bl" d="M'+(bx+196)+' '+(rt+30)+'V'+(rt+8)+'H'+(bx+214)+'V'+(rt+40)+'"/>';
  var bb='';for(i=1;i<17;i++){bb+='M'+(bx+i*16)+' '+(bt+4)+'V'+(gy-2)}g+='<path class="sD ht" d="'+bb+'"/>';
  g+='<circle class="sD bl" cx="'+(bx+bw/2)+'" cy="'+(rt+40)+'" r="12"/><path class="sD kb" d="M'+(bx+bw/2)+' '+(rt+40)+'V'+(rt+32)+'M'+(bx+bw/2)+' '+(rt+40)+'h6"/>';
  var wn=[[bx+22,1],[bx+66,1],[bx+bw-88,1],[bx+bw-44,1]];
  wn.forEach(function(q){g+='<path class="sD bl" d="M'+q[0]+' '+(gy-28)+'V'+(gy-86)+'H'+(q[0]+24)+'V'+(gy-28)+'ZM'+q[0]+' '+(gy-62)+'H'+(q[0]+24)+'M'+(q[0]+12)+' '+(gy-86)+'V'+(gy-28)+'"/>'});
  g+='<path class="sD bl" d="M'+(bx+bw/2-22)+' '+gy+'V'+(gy-80)+'H'+(bx+bw/2+22)+'V'+gy+'M'+(bx+bw/2)+' '+gy+'V'+(gy-80)+'M'+(bx+bw/2-22)+' '+(gy-92)+'H'+(bx+bw/2+22)+'V'+(gy-84)+'H'+(bx+bw/2-22)+'Z"/>';
  g+='<rect class="dot sgnb" x="'+(bx+bw/2-50)+'" y="'+(bt+8)+'" width="100" height="18"/><text class="t sgt" x="'+(bx+bw/2)+'" y="'+(bt+21)+'" text-anchor="middle">STATION</text>';
  g+='</g>';
  /* ---- step 1: lit windows and the label ---- */
  g+='<g id="sc1">';wn.forEach(function(q){g+='<rect class="lit" x="'+(q[0]+2)+'" y="'+(gy-84)+'" width="20" height="54"/>'});
  g+='<rect class="lit2" x="'+(bx+bw/2-20)+'" y="'+(gy-78)+'" width="40" height="76"/>';
  g+='<path class="dim" d="M'+(bx+bw/2)+' '+(rt-10)+'V'+(rt-30)+'"/><text class="a" x="'+(bx+bw/2)+'" y="'+(rt-38)+'" text-anchor="middle">'+o.l1+'</text></g>';
  /* ---- step 2: people on the platform, the signal set to clear ---- */
  g+='<g id="sc2">';
  g+='<path class="frm dr" d="M'+(bx-40)+' '+(gy-8)+'H'+(bx+bw+96)+'V'+gy+'"/>';
  var fx=[bx+bw+20,bx+bw+44,bx+bw+66,bx-20];
  fx.forEach(function(x,j){var s=j===3?.94:1,hh=gy-8-46*s;g+='<path class="fig dr" d="M'+(x-5*s)+' '+(gy-8)+'L'+(x-3*s)+' '+f(hh+22*s)+'L'+(x-7*s)+' '+f(hh+8*s)+'Q'+x+' '+f(hh+4*s)+' '+(x+7*s)+' '+f(hh+8*s)+'L'+(x+3*s)+' '+f(hh+22*s)+'L'+(x+5*s)+' '+(gy-8)+'M'+x+' '+f(hh+22*s)+'V'+(gy-8)+'"/><circle class="fig" cx="'+x+'" cy="'+f(hh)+'" r="'+f(5*s)+'"/>'});
  var sx=o.sigx,st=gy-200;
  g+='<path class="sys dr" d="M'+sx+' '+gy+'V'+st+'M'+(sx+8)+' '+gy+'V'+(st+30)+'M'+sx+' '+(gy-30)+'h8M'+sx+' '+(gy-60)+'h8M'+sx+' '+(gy-90)+'h8M'+sx+' '+(gy-120)+'h8M'+sx+' '+(gy-150)+'h8M'+(sx-10)+' '+gy+'h28"/>';
  g+='<ellipse class="sys dr" cx="'+sx+'" cy="'+(st-6)+'" rx="15" ry="28"/><circle class="go" cx="'+sx+'" cy="'+(st-16)+'" r="6.5"/><circle class="sys" cx="'+sx+'" cy="'+(st+6)+'" r="6.5"/>';
  g+='<path class="dim" d="M'+(bx+bw+44)+' '+(gy-72)+'V'+(gy-236)+'"/><text class="a" x="'+(bx+bw+44)+'" y="'+(gy-246)+'" text-anchor="middle">'+o.l2+'</text>';
  g+='<text class="t" x="'+(sx+24)+'" y="'+(st-12)+'">CLEAR</text></g>';
  /* ---- step 3: the locomotive and its add-on cars arrive ---- */
  g+='<g id="sc3"><g class="trn">';
  var tx0=o.trx,lw=118,cwid=o.carw,ty=gy-12;
  var loco='M'+(tx0+14)+' '+ty+'V'+(ty-62)+'Q'+(tx0+14)+' '+(ty-84)+' '+(tx0+36)+' '+(ty-86)+'H'+(tx0+lw)+'V'+ty+'Z'+
    'M'+(tx0+22)+' '+(ty-52)+'H'+(tx0+50)+'V'+(ty-74)+'H'+(tx0+30)+'Q'+(tx0+22)+' '+(ty-72)+' '+(tx0+22)+' '+(ty-62)+'Z'+
    'M'+(tx0+60)+' '+(ty-52)+'H'+(tx0+84)+'V'+(ty-74)+'H'+(tx0+60)+'Z'+'M'+(tx0+14)+' '+(ty-30)+'H'+(tx0+lw)+'M'+(tx0+4)+' '+(ty-4)+'H'+(tx0+14);
  g+='<path class="van dr" d="'+loco+'"/><circle class="go" cx="'+(tx0+20)+'" cy="'+(ty-38)+'" r="4"/>';
  var wh='';[tx0+36,tx0+60,tx0+92].forEach(function(x){wh+='M'+(x+9)+' '+(ty+3)+'A9 9 0 1 1 '+(x-9)+' '+(ty+3)+'A9 9 0 1 1 '+(x+9)+' '+(ty+3)});
  for(var k=0;k<o.cars;k++){var cx=tx0+lw+8+k*(cwid+8);
    g+='<path class="van dr" d="M'+cx+' '+ty+'V'+(ty-76)+'H'+(cx+cwid)+'V'+ty+'ZM'+cx+' '+(ty-30)+'H'+(cx+cwid)+'M'+(cx-8)+' '+(ty-14)+'H'+cx+'"/>';
    var nw=Math.max(2,Math.round(cwid/30));for(var m=0;m<nw;m++){var wx=cx+8+m*((cwid-16)/nw);g+='<rect class="lit2" x="'+f(wx+2)+'" y="'+(ty-66)+'" width="'+f((cwid-16)/nw-6)+'" height="24"/>'}
    [cx+18,cx+cwid-18].forEach(function(x){wh+='M'+(x+9)+' '+(ty+3)+'A9 9 0 1 1 '+(x-9)+' '+(ty+3)+'A9 9 0 1 1 '+(x+9)+' '+(ty+3)})}
  g+='<path class="bl dr" d="'+wh+'"/></g>';
  var lx=tx0+lw+8+cwid/2;
  g+='<path class="dim" d="M'+lx+' '+(ty-84)+'V'+(ty-112)+'"/><text class="a" x="'+lx+'" y="'+(ty-120)+'" text-anchor="'+(M?"middle":"start")+'">'+o.l3+'</text></g>';
  return g+'</svg>';
}
function scene(){
  if(MOBILE())return stnScene({mob:1,gy:400,vb:"20 70 770 402",sigx:470,trx:490,carw:88,cars:2,l1:"PLATFORM COMPANY",l2:"MANAGEMENT TEAM",l3:"ADD-ONS"});
  return stnScene({gy:400,vb:"0 70 800 422",sigx:470,trx:500,carw:76,cars:2,l1:"PLATFORM COMPANY",l2:"MANAGEMENT TEAM",l3:"ADD-ON GROWTH"});
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .dot, #scBase text",svg),g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),trn:$("#sc3 .trn",svg),
    d2:dl("#sc2 .dr"),d3:dl("#sc3 .dr")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.2),s2=seg(p,.34,.58),s3=seg(p,.67,.92);
    E.g1.style.opacity=(b*(.25+.75*s1)).toFixed(3);
    E.g2.style.opacity=(b*(s2>0?1:0)).toFixed(3);draw(E.d2,s2);
    E.g3.style.opacity=(b*(s3>0?1:0)).toFixed(3);draw(E.d3,s3);
    E.trn.style.transform="translateX("+((1-s3)*220).toFixed(1)+"px)";
  };
}
