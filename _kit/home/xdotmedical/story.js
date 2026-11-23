/* The story scene (DB/BL): xDot's own mechanism, drawn as ONE fine-line scene that fills the frame. Sources: the
   February 2024 release ("patented dynamic cinching mechanism", "automatic closure of the access site", "maintaining
   guidewire access", "no manual compression after large bore sheath removal", "automates the surgical purse-string
   approach", "suture-based closure with an extravascular implant") and ClinicalTrials.gov NCT07719244 (the AMS "is
   designed to deliver the xDot Implant Unit around the access site on the target vessel to close the puncture site").
   Left: the groin in long section (skin, fat, fascia, the common femoral artery) with a large-bore sheath and guidewire
   through the puncture. Upper right: the same access site seen from above. Frame 0 is already complete.
   Step 1 (access): blood flows past the sheath in the artery.
   Step 2 (implant): the implant unit seats on the vessel either side of the puncture; the purse-string ring appears
   round the hole in the view from above; the guidewire stays.
   Step 3 (close): the sheath and wire withdraw, the ring cinches, the hole and the wall gap close.
   Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
var DX=.574,DY=.819,PX=300,PY=324;
function sxy(t){return [PX+DX*t,PY+DY*t]}
var SKIN="M64 66C180 60 300 70 420 64S640 58 724 64";
var FAT="M64 146C150 140 260 150 360 144S470 140 500 142";
var FASC="M64 270C200 264 330 274 470 268S640 264 724 270";
var WALLS=["M64 318H284","M316 318H724","M64 330H284","M316 330H724","M64 410H724","M64 422H724"];
var WIRE="M334 373C380 392 430 372 480 372S620 372 712 372";
var SHEATH=(function(){var a=sxy(-294),b=sxy(50),o=[DY*13,-DX*13],f=function(v){return v.toFixed(1)};
  return ["M"+f(a[0]+o[0])+" "+f(a[1]+o[1])+"L"+f(b[0]+o[0])+" "+f(b[1]+o[1]),
          "M"+f(a[0]-o[0])+" "+f(a[1]-o[1])+"L"+f(b[0]-o[0])+" "+f(b[1]-o[1]),
          "M"+f(b[0]+o[0])+" "+f(b[1]+o[1])+"L"+f(b[0]-o[0])+" "+f(b[1]-o[1])]})();
var IC=[600,190],IR=70;
function storyScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'64 24 660 486':'64 24 660 476')+'" aria-hidden="true">';
  g+='<defs><clipPath id="xcl"><circle cx="'+IC[0]+'" cy="'+IC[1]+'" r="'+(IR-1)+'"/></clipPath>'+
     '<radialGradient id="gok"><stop offset="0" stop-color="#7fccf7" stop-opacity=".34"/><stop offset="1" stop-color="#7fccf7" stop-opacity="0"/></radialGradient></defs>';
  g+='<circle class="halo" id="hOk" cx="300" cy="324" r="90" fill="url(#gok)"/>';
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+SKIN+'"/><path class="wo sD" d="'+FAT+'"/><path class="wo sD" d="'+FASC+'"/>';
  WALLS.forEach(function(d,k){g+='<path class="'+(k%4>1?'wmd':'wl')+' sD" d="'+d+'"/>'});
  g+='</g>';
  g+='<g id="scBl">';for(i=0;i<9;i++)g+='<circle class="bl" r="2.4" cx="0" cy="'+(344+(i%3)*6)+'"/>';g+='</g>';
  g+='<g id="scFl"><path class="wl fl" d="M284 318H300"/><path class="wl fl" d="M316 318H300"/><path class="wmd fl" d="M284 330H300"/><path class="wmd fl" d="M316 330H300"/></g>';
  g+='<g id="scImp"><g id="impL"><rect class="im" x="254" y="307" width="18" height="9" rx="1"/><path class="su" d="M266 316V334"/></g>'+
     '<g id="impR"><rect class="im" x="328" y="307" width="18" height="9" rx="1"/><path class="su" d="M334 316V334"/></g></g>';
  g+='<g id="scSh"><path class="gw sD" d="'+WIRE+'"/>';SHEATH.forEach(function(d){g+='<path class="wsh sD" d="'+d+'"/>'});g+='</g>';
  g+='<g id="scTop"><circle class="ib" cx="'+IC[0]+'" cy="'+IC[1]+'" r="'+IR+'"/><g clip-path="url(#xcl)">'+
     '<path class="wl" d="M520 158H680"/><path class="wl" d="M520 222H680"/>'+
     '<ellipse class="hole" id="tHole" cx="600" cy="190" rx="14" ry="11"/>'+
     '<circle class="sr" id="tRing" cx="600" cy="190" r="32"/><circle class="ir" id="tImp" cx="600" cy="190" r="40"/></g></g>';
  if(!mob){
    g+='<text class="t" x="724" y="50" text-anchor="end">SKIN</text>';
    g+='<text class="t" x="724" y="446" text-anchor="end">COMMON FEMORAL ARTERY</text>';
    g+='<text class="t" x="516" y="194" text-anchor="end">FROM ABOVE</text>';
    g+='<g id="lSh"><text class="t" x="250" y="204">LARGE-BORE SHEATH</text></g>';
    g+='<g id="lImp"><text class="t" x="362" y="302">xDOT IMPLANT UNIT</text></g>';
    g+='<g id="lGw"><text class="t" x="520" y="398">GUIDEWIRE KEPT</text></g>';
    g+='<g id="lOk"><text class="t" x="362" y="302">CLOSED AT ONCE</text></g>';
  }else{g+='<g id="lSh"></g><g id="lImp"></g><g id="lGw"></g><g id="lOk"></g>'}
  var ly=mob?500:490,lx=76;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'A SHEATH IN THE ARTERY':'A LARGE-BORE SHEATH IN THE COMMON FEMORAL ARTERY')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'IMPLANT AROUND THE SITE':'THE IMPLANT UNIT SEATS AROUND THE ACCESS SITE')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'CINCHED CLOSED AT ONCE':'THE PURSE-STRING CINCHES CLOSED AS THE SHEATH COMES OUT')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD").concat(dl("#scSh .sD")),fl:dl("#scFl .fl"),bl:$$("#scBl .bl",svg),sh:$("#scSh",svg),imp:$("#scImp",svg),
    iL:$("#impL",svg),iR:$("#impR",svg),hole:$("#tHole",svg),ring:$("#tRing",svg),timp:$("#tImp",svg),hOk:$("#hOk",svg),
    lSh:$("#lSh",svg),lImp:$("#lImp",svg),lGw:$("#lGw",svg),lOk:$("#lOk",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* 1. blood flows right through the lumen (the artery stays open throughout) */
    E.bl.forEach(function(el,i){var x=70+((i*71+p*1400)%640);el.setAttribute("cx",x.toFixed(1));op(el,b*.9*(x<88||x>706?0:1))});
    op(E.lSh,b*seg(p,.06,.16)*(1-seg(p,.34,.42)));
    /* 2. the implant unit seats either side of the puncture; the ring appears round the hole from above */
    var w=sm(seg(p,.38,.52));
    op(E.imp,b*w);E.imp.style.transform="translateY("+(-14*(1-w)).toFixed(2)+"px)";
    op(E.lImp,b*seg(p,.46,.54)*(1-seg(p,.64,.7)));op(E.lGw,b*seg(p,.5,.58)*(1-seg(p,.66,.72)));
    var c=sm(seg(p,.74,.9));
    op(E.ring,b*w);op(E.timp,b*w);
    E.ring.setAttribute("r",(32-21*c).toFixed(2));E.timp.setAttribute("r",(40-22*c).toFixed(2));
    E.hole.setAttribute("rx",(14*(1-c)).toFixed(2));E.hole.setAttribute("ry",(11*(1-c)).toFixed(2));op(E.hole,b*(c<.98?1:0));
    /* 3. sheath and wire withdraw along the sheath axis, the wall gap draws shut, the implant halves close in */
    var out=sm(seg(p,.68,.82));
    E.sh.style.transform="translate("+(-DX*170*out).toFixed(1)+"px,"+(-DY*170*out).toFixed(1)+"px)";op(E.sh,b*(1-sm(seg(p,.72,.84))));
    draw(E.fl,c*b);
    E.iL.style.transform="translateX("+(16*c).toFixed(2)+"px)";E.iR.style.transform="translateX("+(-16*c).toFixed(2)+"px)";
    op(E.hOk,b*sm(seg(p,.84,.94)));
    op(E.lOk,b*seg(p,.84,.92));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
