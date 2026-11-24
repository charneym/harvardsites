/* The story scene (DB/BL): URO-1's own account of targeted biopsy (uro1medical.com, Targeted Biopsy and GU Pathology:
   MRI identifies suspicious lesions and is fused with ultrasound to target them; a standard needle is prone to deflect,
   SUREcore's coaxially centred needle rarely, if ever, deflects; coreCARE "Touch and Go" keeps the core attached to the
   cradle, intact and oriented, and its grossing ruler measures the length), drawn in fine line as ONE targeted biopsy:
   the gland outline with an MRI-marked target, the needle path, and the coreCARE cradle below.
   Frame 0 is complete: the gland and its target.
   Step 1 (target): the target ring tightens and its crosshair lights.
   Step 2 (stay on target): a standard needle's path bends away (a quiet grey line), while SUREcore runs straight into the target.
   Step 3 (preserve): the needle withdraws and the core lies whole on the coreCARE cradle, against its ruler.
   Everything is driven by the scrubbed progress. No dash-drawn path uses non-scaling-stroke (DR.4). */
var SCW=760,SCH=560;
var ST=[112,404],TG=[500,176];
var CR={x:388,y:420,w:330,h:48};
function f1(v){return v.toFixed(1)}
function storyScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'92 52 640 476':'24 56 716 506')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="uGlow"><stop offset="0" stop-color="#cf9ad6" stop-opacity=".5"/><stop offset="1" stop-color="#cf9ad6" stop-opacity="0"/></radialGradient></defs>';
  /* the gland in outline, with a faint inner zone */
  g+='<g id="scGl" transform="translate(420 214) scale(1.16) translate(-420 -214)"><path class="sGl sD" d="M236 214C236 128 318 84 420 84C522 84 604 128 604 214C604 300 524 344 420 344C316 344 236 300 236 214Z"/>';
  g+='<path class="sGi sD" d="M300 226C300 168 352 136 420 136C488 136 540 168 540 226C540 278 488 302 420 302C352 302 300 278 300 226Z"/></g>';
  /* the MRI target: a lesion ring with a crosshair */
  g+='<g id="scTg"><circle class="sGw" cx="'+TG[0]+'" cy="'+TG[1]+'" r="46" fill="url(#uGlow)"/><circle class="sTg sD" cx="'+TG[0]+'" cy="'+TG[1]+'" r="20"/>'+
    '<path class="sTx" d="M'+TG[0]+' '+(TG[1]-36)+'v10M'+TG[0]+' '+(TG[1]+26)+'v10M'+(TG[0]-36)+' '+TG[1]+'h10M'+(TG[0]+26)+' '+TG[1]+'h10"/></g>';
  /* the standard needle's path, bending away below the target */
  g+='<path id="scSoc" class="sSoc" d="M'+ST[0]+' '+ST[1]+'C232 330 372 262 512 236"/>';
  /* SUREcore: the guide stub and the needle, which runs out from the entry point */
  g+='<g id="scNd"><path class="sNd" d="M0 0H10"/><path class="sNh" d="M0 0H10"/><path class="sTip" d="M0 -2.4L12 0L0 2.4Z"/></g>';
  /* the coreCARE cradle: body, ruler and the groove the core lies in */
  g+='<g id="scCr"><path class="sCr" d="M'+CR.x+' '+CR.y+'h'+CR.w+'v'+CR.h+'h-'+CR.w+'z"/><path class="sCr2" d="M'+CR.x+' '+(CR.y+16)+'h'+CR.w+'"/>';
  var tk='';for(i=0;i<=30;i++){var x=CR.x+10+i*10.33;tk+='M'+f1(x)+' '+CR.y+'v'+(i%5?5:9)}
  g+='<path class="sTk" d="'+tk+'"/><path class="sCr2" d="M'+(CR.x+8)+' '+(CR.y+38)+'h'+(CR.w-16)+'"/></g>';
  g+='<path id="scCore" class="sCore" d="M'+(CR.x+16)+' '+(CR.y+29)+'C'+(CR.x+90)+' '+(CR.y+26)+' '+(CR.x+170)+' '+(CR.y+32)+' '+(CR.x+240)+' '+(CR.y+28)+'S'+(CR.x+300)+' '+(CR.y+29)+' '+(CR.x+CR.w-16)+' '+(CR.y+29)+'"/>';
  if(!mob){
    g+='<g id="lTg"><path class="ld" d="M518 156L604 88"/><text class="t" x="612" y="84">MRI TARGET</text></g>';
    g+='<g id="lLg"><path class="sNd" d="M44 474h36"/><text class="t o" x="92" y="478">SURECORE: STRAIGHT TO TARGET</text>'+
      '<path class="sSoc" d="M44 500h36"/><text class="t q" x="92" y="504">STANDARD NEEDLE: PRONE TO DEFLECT</text></g>';
    g+='<g id="lCr"><text class="t o" x="'+CR.x+'" y="'+(CR.y-16)+'">INTACT CORE</text><text class="t q" x="'+CR.x+'" y="'+(CR.y+CR.h+24)+'">CORECARE CRADLE · GROSSING RULER</text></g>';
  }else{g+='<g id="lTg"></g><g id="lLg"></g><g id="lCr"></g>'}
  var ly=mob?516:SCH-6,lx=mob?104:44;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'MRI MARKS THE TARGET':'MRI–ULTRASOUND FUSION MARKS THE TARGET')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'SURECORE FLIES STRAIGHT':'SURECORE STAYS ON TARGET')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THE CORE STAYS WHOLE':'THE CORE STAYS WHOLE ON THE CRADLE')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var one=function(sel){var p=$(sel,svg),L=p.getTotalLength();p.style.strokeDasharray=L+" "+L;p.style.strokeDashoffset=L;return [p,L]};
  var E={base:dl(".sD"),gl:$("#scGl",svg),tg:$("#scTg",svg),gw:$("#scTg .sGw",svg),tx:$("#scTg .sTx",svg),soc:one("#scSoc"),nd:$("#scNd",svg),
    ndl:$$("#scNd .sNd, #scNd .sNh",svg),cr:$("#scCr",svg),core:one("#scCore"),lTg:$("#lTg",svg),lLg:$("#lLg",svg),lCr:$("#lCr",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var dx=TG[0]-ST[0],dy=TG[1]-ST[1],LEN=Math.sqrt(dx*dx+dy*dy),ang=Math.atan2(dy,dx)*180/Math.PI;
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.32),s2=seg(p,.36,.64),s3=seg(p,.68,.94);
    /* 1: the target tightens and lights */
    op(E.gw,b*(.25+.75*sm(s1))*(1-.3*sm(s3)));op(E.tx,b*sm(s1));
    /* 2: the standard path bends away; SUREcore runs straight to the target (and withdraws in 3) */
    E.soc[0].style.strokeDashoffset=(E.soc[1]*(1-sm(s2/.7))).toFixed(1);op(E.soc[0],b*(1-sm(s3*1.6))*.9);
    var ext=sm((s2-.15)/.7)*(1-sm(s3/.5)),L=Math.max(.01,LEN*ext);
    E.nd.setAttribute("transform","translate("+ST[0]+" "+ST[1]+") rotate("+f1(ang)+")");
    E.ndl.forEach(function(el){el.setAttribute("d","M0 0H"+f1(L))});
    $("#scNd .sTip",svg).setAttribute("transform","translate("+f1(L)+" 0)");
    op(E.nd,b*Math.min(1,ext*6));
    /* 3: the gland quietens; the core lies whole on the cradle */
    op(E.gl,1-.5*sm(s3));op(E.tg,1-.45*sm(s3));
    op(E.cr,b*sm((s3-.05)/.4));
    E.core[0].style.strokeDashoffset=(E.core[1]*(1-sm((s3-.3)/.55))).toFixed(1);op(E.core[0],b*Math.min(1,sm((s3-.3)/.55)*3));
    op(E.lTg,b*seg(p,.1,.18)*(1-seg(p,.34,.4)));
    op(E.lLg,b*seg(p,.48,.56)*(1-seg(p,.64,.7)));
    op(E.lCr,b*seg(p,.84,.9));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
