/* The story scene (BL/BY/DB): how a préXclude test runs, as ONE continuous fine-line drawing of their own single-use
   cartridge (as in MOMM's product render: a clear slab with the sample well, a flow strip, and gold contacts at the
   end that plugs into the eFlow reader). Step 1: a fingertip gives a 20 µL drop of blood into the sample well.
   Step 2: blood cells are held back and the plasma wicks along the strip past the sFlt-1 and PlGF capture zones, where
   antibodies bind each biomarker. Step 3: the cartridge slides into the handheld reader, which reads the strip
   electrically and shows the sFlt-1/PlGF ratio. Driven by the scrubbed progress. Sources: mommdiagnostics.com (Our Test),
   Gates Foundation grant INV-093250 (electrochemical enzyme-linked lateral flow immunoassay), Swiss TPH PREVENT-PE. */
var SCW=760,SCH=520,CY=300,PX=150,Z1=318,Z2=392,SX1=204,SX2=520;
function mmRR(x,y,w,h,r){return 'M'+(x+r)+' '+y+'H'+(x+w-r)+'Q'+(x+w)+' '+y+' '+(x+w)+' '+(y+r)+'V'+(y+h-r)+'Q'+(x+w)+' '+(y+h)+' '+(x+w-r)+' '+(y+h)+'H'+(x+r)+'Q'+x+' '+(y+h)+' '+x+' '+(y+h-r)+'V'+(y+r)+'Q'+x+' '+y+' '+(x+r)+' '+y+'Z'}
function mmAb(x,y,s){return 'M'+x+' '+(y+9*s)+'V'+y+'M'+x+' '+y+'L'+(x-5*s)+' '+(y-7*s)+'M'+x+' '+y+'L'+(x+5*s)+' '+(y-7*s)}
var MMC=(function(){var s=7,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;for(i=0;i<16;i++){var an=R()*Math.PI*2,r=Math.sqrt(R())*17;a.push([PX+Math.cos(an)*r,CY+Math.sin(an)*r])}return a})();
function mmScene(o){
  var g='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">',i;
  /* the cartridge */
  g+='<g id="scCart" transform="translate(-40 0)"><path class="ct sD" d="'+mmRR(40,CY-60,560,120,10)+'"/><path class="ct2 sD" d="'+mmRR(52,CY-48,536,96,6)+'"/>';
  g+='<path class="st sD" d="M'+SX1+' '+(CY-12)+'H'+SX2+'V'+(CY+12)+'H'+SX1+'Z"/>';
  g+='<path class="pl" id="scPl" d="M'+SX1+' '+(CY-11)+'H'+SX1+'V'+(CY+11)+'H'+SX1+'Z"/>';
  g+='<path class="zn sD" d="M'+Z1+' '+(CY-12)+'V'+(CY+12)+'M'+Z2+' '+(CY-12)+'V'+(CY+12)+'"/>';
  g+='<path class="zh" id="scZ1" d="M'+(Z1-4)+' '+(CY-12)+'h8v24h-8z"/><path class="zh" id="scZ2" d="M'+(Z2-4)+' '+(CY-12)+'h8v24h-8z"/>';
  g+='<g id="scAb">';for(i=0;i<3;i++){g+='<path class="ab" d="'+mmAb(Z1-10+i*10,CY-40,1.3)+'"/><path class="ab" d="'+mmAb(Z2-10+i*10,CY-40,1.3)+'"/>'}g+='</g>';
  g+='<path class="ws sD" d="';for(i=0;i<6;i++)g+='M'+(450+i*12)+' '+(CY-32)+'V'+(CY+32);g+='"/>';
  g+='<path class="cn sD" d="';for(i=0;i<5;i++)g+='M554 '+(CY-32+i*16)+'H588';g+='"/>';
  g+='<circle class="wl sD" cx="'+PX+'" cy="'+CY+'" r="34"/><circle class="wl2 sD" cx="'+PX+'" cy="'+CY+'" r="22"/>';
  g+='<circle class="bl" id="scBl" cx="'+PX+'" cy="'+CY+'" r="0"/>';
  g+='<g id="scCells">';MMC.forEach(function(c){g+='<circle class="cel" cx="'+c[0].toFixed(1)+'" cy="'+c[1].toFixed(1)+'" r="2.4"/>'});g+='</g>';
  g+='</g>';
  /* the reader, arriving from the right: its body, screen and slot (the near end is in frame) */
  g+='<defs><linearGradient id="mmFd" x1="0" y1="0" x2="1" y2="0"><stop offset=".55" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><mask id="mmMk" maskUnits="userSpaceOnUse" x="560" y="100" width="200" height="400"><rect x="560" y="100" width="200" height="400" fill="url(#mmFd)"/></mask></defs><g id="scRd" mask="url(#mmMk)"><path class="rd" d="'+mmRR(600,150,190,300,34)+'"/><path class="rd2" d="'+mmRR(618,168,154,176,12)+'"/>';
  g+='<path class="rd2" d="M600 '+(CY+44)+'H644M600 '+(CY+64)+'H644"/>';
  g+='<g id="scScr"><text class="sc" x="636" y="204">préXclude</text><text class="t" x="636" y="230">sFlt-1 / PlGF</text><path class="sb" d="M636 262H716"/><path class="sbf" id="scBar" d="M636 262H716"/><text class="t" x="636" y="300">RATIO</text></g></g>';
  /* the fingertip and the drop */
  g+='<g transform="translate(-40 0)"><g id="scFg"><path class="fg" d="M'+(PX-34)+' -60V96C'+(PX-34)+' 150 '+(PX+34)+' 150 '+(PX+34)+' 96V-60"/><path class="fg2" d="M'+(PX-16)+' 70C'+(PX-6)+' 78 '+(PX+6)+' 78 '+(PX+16)+' 70M'+(PX-34)+' 20H'+(PX-24)+'M'+(PX+24)+' 20H'+(PX+34)+'"/></g>';
  g+='<path class="dp" id="scDp" d="M0 -12C4 -4 8 2 8 6A8 8 0 0 1 -8 6C-8 2 -4 -4 0 -12Z"/>';
  /* labels */
  g+='<g id="lb1"><path class="ld" d="M'+(PX+40)+' 204H'+(PX+80)+'"/><text x="'+(PX+90)+'" y="200" class="a">20 µL OF BLOOD</text><text class="t" x="'+(PX+90)+'" y="222">FROM A FINGERSTICK</text></g>';
  g+='<g id="lb2"><path class="ld" d="M'+Z1+' '+(CY+20)+'V'+(CY+66)+'M'+Z2+' '+(CY+20)+'V'+(CY+66)+'"/><text x="'+(Z1-8)+'" y="'+(CY+84)+'" class="a" text-anchor="end">sFlt-1</text><text x="'+(Z2+8)+'" y="'+(CY+84)+'" class="a">PlGF</text>';
  g+='<text class="t" x="40" y="'+(CY+140)+'">PLASMA FLOWS · ANTIBODIES CAPTURE EACH MARKER</text></g>';
  g+='<g id="lb3"><text class="t" x="40" y="'+(CY+140)+'">THE READER REPORTS THE sFlt-1/PlGF RATIO</text></g>';
  return g+'</g></svg>';
}
function scene(){return mmScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scCart .sD"),rd:$("#scRd",svg),cart:$("#scCart",svg),fg:$("#scFg",svg),dp:$("#scDp",svg),bl:$("#scBl",svg),cells:$("#scCells",svg),
    pl:$("#scPl",svg),z1:$("#scZ1",svg),z2:$("#scZ2",svg),ab:$("#scAb",svg),scr:$("#scScr",svg),bar:$("#scBar",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var bL=E.bar.getTotalLength();E.bar.style.strokeDasharray=bL+" "+bL;
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* step 1: the finger is over the well from the first frame; a drop forms, falls in, the well fills red; the finger lifts away */
    var form=sm2(seg(p,.04,.12)),fall=seg(p,.12,.22),fill=sm2(seg(p,.2,.28)),lift=sm2(seg(p,.3,.4));
    E.fg.setAttribute("transform","translate(0 "+(40-190*lift).toFixed(1)+")");op(E.fg,b*(1-lift));
    var dy=180+(CY-180)*fall*fall;
    E.dp.setAttribute("transform","translate("+PX+" "+dy.toFixed(1)+") scale("+(.3+.7*form).toFixed(3)+")");op(E.dp,b*form*(fall<1?1:0));
    E.bl.setAttribute("r",(22*fill).toFixed(1));op(E.cells,b*fill);
    /* step 2: plasma wicks along the strip; each capture zone lights as the front passes it */
    var flow=sm2(seg(p,.4,.62)),fx=SX1+(SX2-SX1)*flow;
    E.pl.setAttribute("d","M"+SX1+" "+(CY-11)+"H"+fx.toFixed(1)+"V"+(CY+11)+"H"+SX1+"Z");
    op(E.z1,b*seg(fx,Z1,Z1+30));op(E.z2,b*seg(fx,Z2,Z2+30));op(E.ab,b*seg(p,.38,.46));
    /* step 3: the reader is on screen throughout; the cartridge's contact end slides into its slot, then the screen reads */
    var ins=sm2(seg(p,.68,.8)),read=seg(p,.8,.95);
    E.cart.setAttribute("transform","translate("+(-40+64*ins).toFixed(1)+" 0)");op(E.rd,b);
    E.bar.style.strokeDashoffset=(bL*(1-read)).toFixed(1);op(E.scr,.35+.65*seg(p,.78,.84));
    op(E.l1,b*seg(p,.1,.16)*(1-seg(p,.32,.37)));op(E.l2,b*seg(p,.46,.52)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.84,.9));
  };
}
function sm2(x){return x*x*(3-2*x)}
