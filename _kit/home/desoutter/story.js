/* The story scene (BL/BY/DB): De Soutter's own account of the orthodrive® modular handpiece (de-soutter.com > orthodrive®
   MBQ-700 series: power options, quick-change locking attachments, twin triggers, in-built drill/ream gearbox, sagittal and
   reciprocating saws), drawn as ONE pistol-grip handpiece in side elevation, kept on screen for all four steps, with a readout:
   1 Power: the Li-Ion battery slides up into the grip and its integral fuel gauge fills.
   2 Lock: a drill attachment slides onto the nose and snaps in to lock.
   3 Drive: the twin triggers light, the chuck turns, the readout counts up to 1,350 rpm.
   4 Cut: the drill comes off, the sagittal saw goes on and its blade oscillates; up to 13,500 cpm. No bone is drawn (DT). */
var BX=[200,370,540,690];
function dsScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="130 100 630 440" aria-hidden="true"><defs>'+
    '<linearGradient id="dsMet" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8994a3"/><stop offset=".45" stop-color="#e8edf3"/><stop offset="1" stop-color="#5e6877"/></linearGradient></defs>';
  /* the battery (behind the grip), with its fuel gauge */
  g+='<g id="dsBat"><rect class="bat" x="292" y="384" width="148" height="60"/><path class="ln" d="M292 384H440V444H292Z"/>';
  for(i=0;i<4;i++)g+='<rect class="fg" id="dsF'+i+'" x="'+(386+i*12)+'" y="404" width="8" height="20"/>';
  g+='<path class="ln" d="M380 398H438V430H380Z"/></g>';
  /* the handpiece: motor housing, grip, triggers, lock ring */
  g+='<path class="bd" d="M262 150H470V230H450L420 384H312L340 230H262Q240 230 240 210V170Q240 150 262 150Z"/>';
  g+='<path class="ln sD" d="M262 150H470V230H450L420 384H312L340 230H262Q240 230 240 210V170Q240 150 262 150Z"/>';
  g+='<path class="pl sD" d="M262 172H452M340 230H450"/>';
  g+='<g id="dsTr"><rect class="tr" x="446" y="246" width="26" height="16"/><rect class="tr" x="440" y="284" width="26" height="16"/></g>';
  g+='<rect class="ring" id="dsRing" x="470" y="158" width="34" height="64"/><path class="pl" d="M479 158V222M487 158V222M495 158V222"/>';
  /* attachment 1: keyless drill chuck and bit */
  g+='<g id="dsDr"><path class="met" d="M504 168H568L600 180V200L568 212H504Z"/><path class="pl" d="M524 168V212M546 168V212M568 172V208"/>'+
     '<rect class="bit" x="600" y="187" width="112" height="6"/><path class="fl" d="M612 187L620 193M626 187L634 193M640 187L648 193M654 187L662 193M668 187L676 193M682 187L690 193M696 187L704 193"/>'+
     '<path class="rot" id="dsRot" d="M560 150A44 44 0 0 1 618 166M618 214A44 44 0 0 1 560 230"/><path class="rotH" id="dsRotH" d="M610 158L620 168L606 170M568 238L558 228L572 226"/></g>';
  /* attachment 2: sagittal saw head and oscillating blade */
  g+='<g id="dsSw"><path class="met" d="M504 166H582Q600 166 600 184V196Q600 214 582 214H504Z"/><path class="pl" d="M526 166V214M550 166V214"/><circle class="ln" cx="586" cy="190" r="7"/>'+
     '<g id="dsBl"><path class="blade" d="M592 182L700 172V208L592 198Z"/><path class="ln" d="M618 186H646M618 194H646"/><path class="tth" d="M700 172L708 176L700 180L708 184L700 188L708 192L700 196L708 200L700 204L708 207L700 208"/></g></g>';
  /* the readout */
  g+='<rect class="dsp" x="515" y="300" width="210" height="64"/><text class="dg" id="dsV" x="620" y="342" text-anchor="middle">100 %</text>'+
     '<text class="o2" id="dsO" x="620" y="'+(mob?394:388)+'" text-anchor="middle">BATTERY CHARGE</text>';
  /* labels */
  var L=mob?["LOCK","TRIGGERS","BATTERY","ATTACHMENT"]:["QUICK-CHANGE LOCK","TWIN TRIGGERS","LI-ION BATTERY","ATTACHMENT"];
  g+='<text class="cl" id="dsL0" x="487" y="'+(mob?132:136)+'" text-anchor="middle">'+L[0]+'</text>';
  g+='<text class="cl" id="dsL1" x="482" y="'+(mob?274:270)+'" text-anchor="start">'+L[1]+'</text>';
  g+='<text class="cl" id="dsL2" x="'+(mob?282:280)+'" y="420" text-anchor="end">'+L[2]+'</text>';
  if(!mob)g+='<text class="cl" id="dsL3" x="660" y="136" text-anchor="middle">'+L[3]+'</text>';
  g+='<path class="pl sD" d="M160 470H730"/>';
  BX.forEach(function(x,k){g+='<circle class="dt" id="dsD'+k+'" cx="'+x+'" cy="470" r="5"/>'});
  ["1 · POWER","2 · LOCK","3 · DRIVE","4 · CUT"].forEach(function(c,k){g+='<text class="a" id="dsC'+k+'" x="'+BX[k]+'" y="512" text-anchor="middle">'+c+'</text>'});
  return g+'</svg>';
}
function scene(){return dsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var mob=svg.classList.contains("mob");
  var E={base:dl(".sD"),D:[0,1,2,3].map(function(k){return $("#dsD"+k,svg)}),C:[0,1,2,3].map(function(k){return $("#dsC"+k,svg)}),
    F:[0,1,2,3].map(function(k){return $("#dsF"+k,svg)}),L:[0,1,2,3].map(function(k){return $("#dsL"+k,svg)}),
    bat:$("#dsBat",svg),tr:$("#dsTr",svg),ring:$("#dsRing",svg),dr:$("#dsDr",svg),sw:$("#dsSw",svg),bl:$("#dsBl",svg),
    rot:$("#dsRot",svg),rotH:$("#dsRotH",svg),v:$("#dsV",svg),o:$("#dsO",svg)};
  var lastB=-1,lastV="",lastO="";
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=(+v).toFixed(3)}
  function txt(el,t,k){if(k==="v"){if(t!==lastV){lastV=t;el.textContent=t}}else if(t!==lastO){lastO=t;el.textContent=t}}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var w=[1-seg(p,.23,.27),seg(p,.23,.27)*(1-seg(p,.48,.52)),seg(p,.48,.52)*(1-seg(p,.73,.77)),seg(p,.73,.77)];
    var cur=w.indexOf(Math.max.apply(null,w));
    E.D.forEach(function(d,k){d.classList.toggle("on",k<=cur);op(d,b)});
    E.C.forEach(function(c,k){op(c,b*(mob?(k===cur?1:0):(k===cur?1:.5)));c.classList.toggle("on",k===cur)});
    E.L.forEach(function(l,k){if(l)l.classList.toggle("on",(k===2&&cur===0)||(k===0&&cur===1)||(k===1&&cur===2)||(k===3&&cur===3))});
    /* 1 Power: the battery slides up into the grip, the gauge fills */
    var up=seg(p,.02,.14);E.bat.setAttribute("transform","translate(0,"+(46*(1-up)).toFixed(1)+")");op(E.bat,b*(.35+.65*up));
    E.F.forEach(function(f,k){op(f,b*(.12+.88*seg(p,.1+k*.03,.13+k*.03)))});
    /* 2 Lock: the drill slides on and snaps; the lock ring flashes */
    var on=seg(p,.27,.4),off=seg(p,.76,.82),sw=seg(p,.82,.9);
    E.dr.setAttribute("transform","translate("+(90*(1-on)+90*off).toFixed(1)+",0)");op(E.dr,b*on*(1-off));
    E.ring.classList.toggle("on",(p>.39&&p<.5)||(p>.89&&p<.95));
    /* 3 Drive: triggers light, the chuck turns */
    var dv=seg(p,.53,.7);E.tr.classList.toggle("on",cur===2);
    op(E.rot,b*seg(p,.52,.56)*(1-off));op(E.rotH,b*seg(p,.52,.56)*(1-off));
    /* 4 Cut: the saw goes on, the blade oscillates */
    E.sw.setAttribute("transform","translate("+(90*(1-sw)).toFixed(1)+",0)");op(E.sw,b*sw);
    var osc=sw>=1?Math.sin(p*260)*4*seg(p,.9,.94):0;E.bl.setAttribute("transform","rotate("+osc.toFixed(2)+" 592 190)");
    /* the readout */
    if(cur===0){txt(E.v,Math.round(25+75*seg(p,.1,.22))+" %","v");txt(E.o,"BATTERY CHARGE","o")}
    else if(cur===1){txt(E.v,p>.4?"LOCKED":"—","v");txt(E.o,"ATTACHMENT","o")}
    else if(cur===2){txt(E.v,(Math.round(1350*dv/10)*10).toLocaleString("en-GB")+" rpm","v");txt(E.o,mob?"DRILL SPEED":"DRILL SPEED, UP TO","o")}
    else{txt(E.v,(Math.round(13500*seg(p,.84,.95)/100)*100).toLocaleString("en-GB")+" cpm","v");txt(E.o,mob?"SAW SPEED":"SAGITTAL SAW, UP TO","o")}
    op(E.v,b);op(E.o,b);
  };
}
