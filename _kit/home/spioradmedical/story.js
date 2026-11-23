/* the story scene (BL/BY/DB): ONE engraved longitudinal section through a femoral access site, kept on screen throughout. Step 1
   a large-bore sheath crosses the skin and enters the common femoral artery; step 2 the sheath is out and the open arteriotomy
   bleeds under arterial pressure; step 3 a seal closes it from outside the artery (schematic: Spiorad's design is not public);
   step 4 the bleeding has stopped and flow continues. Proportions are schematic. */
function scene(){
  var mob=MOBILE(),LX=592;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"14 40 560 452":"0 0 800 560")+'" aria-hidden="true">';
  var X0=24,X1=566,TO=334,TI=344,BI=446,BO=456,HC=330,HW=20,SW=14;
  /* skin: a gentle line; subcutaneous tissue: sparse fat lobules */
  var skin='M'+X0+' 132';for(var k=0;k<10;k++){var x=X0+k*54.2;skin+='Q'+(x+27.1).toFixed(1)+' '+(k%2?126:138)+' '+(x+54.2).toFixed(1)+' 132'}
  var lob='';[[70,190],[140,236],[96,290],[470,196],[540,252],[420,276],[500,306],[226,296],[60,244],[390,214],[180,180],[400,300]].forEach(function(o){lob+='M'+(o[0]-16)+' '+o[1]+'a16 11 0 1 0 32 0a16 11 0 1 0 -32 0'});
  g+='<defs><clipPath id="spSub"><path d="M'+X0+' 134H'+X1+'V'+(TO-4)+'H'+X0+'Z"/></clipPath></defs>';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="skn sD" d="'+skin+'"/><path class="lob" d="'+lob+'" clip-path="url(#spSub)"/>';
  /* the artery wall, with the arteriotomy in the top wall */
  g+='<path class="wl sD" d="M'+X0+' '+TO+'H'+(HC-HW)+'M'+(HC+HW)+' '+TO+'H'+X1+'M'+X0+' '+BO+'H'+X1+'"/>';
  g+='<path class="wi sD" d="M'+X0+' '+TI+'H'+(HC-HW)+'M'+(HC+HW)+' '+TI+'H'+X1+'M'+X0+' '+BI+'H'+X1+'"/>';
  g+='<path class="wi sD" d="M'+(HC-HW)+' '+TO+'V'+TI+'M'+(HC+HW)+' '+TO+'V'+TI+'"/>';
  var chev='';[60,130,200].forEach(function(x){chev+='M'+x+' 383l13 12-13 12'});
  g+='<path class="flw" d="'+chev+'"/>';
  g+='<path class="ld2" d="M'+(X1+4)+' 132H'+(LX-8)+'"/><text x="'+LX+'" y="136" class="t c">SKIN</text>';
  g+='<path class="ld2" d="M'+(X1+4)+' 395H'+(LX-8)+'"/><text x="'+LX+'" y="391" class="t c">COMMON FEMORAL</text><text x="'+LX+'" y="409" class="t c">ARTERY</text>';
  g+='<g class="tb"><path class="tbl" d="M548 500h228v46h-228Z M548 523h228"/><text x="558" y="516" class="t">FEMORAL ACCESS SITE</text><text x="558" y="539" class="t s">SECTION · SCHEMATIC</text></g>';
  g+='</g>';
  /* 1 the large-bore sheath: down through skin and tissue, through the wall, then along the lumen to a tapered tip */
  var P=[[222,74],[HC,TO-8]],dx=P[1][0]-P[0][0],dy=P[1][1]-P[0][1],L=Math.hypot(dx,dy),ux=dx/L,uy=dy/L,nx=-uy,ny=ux;
  function o(pt,k){return (pt[0]+nx*k).toFixed(1)+' '+(pt[1]+ny*k).toFixed(1)}
  var bend=[HC+26,395],tipx=512;
  var sh='M'+o(P[0],SW)+'L'+o(P[1],SW)+'Q'+(HC+22)+' '+(395+SW)+' '+(bend[0]+40)+' '+(395+SW)+'H'+(tipx-34)+'L'+tipx+' 399'+
         'M'+o(P[0],-SW)+'L'+o(P[1],-SW)+'Q'+(HC+36)+' '+(395-SW)+' '+(bend[0]+40)+' '+(395-SW)+'H'+(tipx-34)+'L'+tipx+' 391';
  var shc='M'+P[0][0]+' '+P[0][1]+'L'+P[1][0]+' '+P[1][1]+'Q'+(HC+28)+' 395 '+(bend[0]+40)+' 395H'+(tipx-4);
  g+='<g id="sc1"><path class="shf" d="'+shc+'"/><path class="sho dr" d="'+sh+'"/>'+
     '<path class="ld2 dr" d="M'+(P[0][0]+(P[1][0]-P[0][0])*.42+20)+' '+(P[0][1]+(P[1][1]-P[0][1])*.42)+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(P[0][1]+(P[1][1]-P[0][1])*.42-4)+'" class="t c">LARGE-BORE SHEATH</text><text x="'+LX+'" y="'+(P[0][1]+(P[1][1]-P[0][1])*.42+14)+'" class="t c c2">12F–24F · 4–8 MM</text>'+
     '<text x="40" y="60" class="a">ACCESS</text></g>';
  /* 2 the sheath is out: the open arteriotomy bleeds into the tissue */
  var jet='';[[-30,-58],[-14,-76],[0,-84],[14,-76],[30,-58]].forEach(function(v){jet+='M'+(HC+v[0]*.2)+' '+(TO-4)+'q'+(v[0]*.4)+' '+(v[1]*.5)+' '+v[0]+' '+v[1]});
  g+='<g id="sc2"><path class="hem" d="M'+(HC-56)+' '+(TO-6)+'C'+(HC-60)+' '+(TO-70)+' '+(HC+60)+' '+(TO-70)+' '+(HC+56)+' '+(TO-6)+'Z"/><path class="jet dr" d="'+jet+'"/>'+
     '<path class="ld2 dr" d="M'+(HC+50)+' 268H'+(LX-8)+'"/><text x="'+LX+'" y="264" class="t c c3">OPEN ARTERIOTOMY</text><text x="'+LX+'" y="282" class="t c c3">ARTERIAL PRESSURE</text>'+
     '<text x="40" y="60" class="a">THE OPENING</text></g>';
  /* 3 the seal over the opening, outside the artery (schematic) */
  g+='<g id="sc3"><path class="sel" d="M'+(HC-40)+' '+(TO-1)+'C'+(HC-40)+' '+(TO-15)+' '+(HC+40)+' '+(TO-15)+' '+(HC+40)+' '+(TO-1)+'Z"/><path class="selo dr" d="M'+(HC-40)+' '+(TO-1)+'C'+(HC-40)+' '+(TO-15)+' '+(HC+40)+' '+(TO-15)+' '+(HC+40)+' '+(TO-1)+'"/>'+
     '<path class="ld2 dr" d="M'+(HC+44)+' '+(TO-8)+'L'+(X1+10)+' 304H'+(LX-8)+'"/><text x="'+LX+'" y="300" class="t c c4">EXTERNAL SEAL</text><text x="'+LX+'" y="318" class="t c c4 s">SCHEMATIC</text>'+
     '<text x="40" y="60" class="a">THE SEAL</text></g>';
  /* 4 the bleeding has stopped; flow continues past the closed site */
  var chev2='';[290,360,430,500].forEach(function(x){chev2+='M'+x+' 383l13 12-13 12'});
  g+='<g id="sc4"><path class="flw2 dr" d="'+chev2+'"/><path class="cls dr" d="M'+(HC-HW)+' '+(TO+4)+'H'+(HC+HW)+'"/>'+
     '<path class="ld2 dr" d="M'+(X1-46)+' '+(BO+2)+'L'+(X1+10)+' 466H'+(LX-8)+'"/><text x="'+LX+'" y="462" class="t c c5">HAEMOSTASIS</text><text x="'+LX+'" y="480" class="t c c5">FLOW MAINTAINED</text>'+
     '<text x="40" y="60" class="a">RECOVERY</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .lob, #scBase .flw, #scBase .ld2, #scBase text",svg),
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
    /* the sheath leaves as the opening appears; the bleeding stops once the seal is on; the seal and the closed flow stay */
    var vis=[b*(1-s[1]),s[1]*(1-s[2]),s[2],s[3]];
    for(var i=0;i<4;i++){
      E.g[i].style.opacity=vis[i].toFixed(3);draw(E.d[i],i===0?b*s[0]:s[i]);
      var lv=(i===0?1:Math.max(0,Math.min(1,s[i]*2-1)))*(i===2?(1-.45*s[3]):1);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}
