/* The story scene (BL/BY/DB): how the CMM sensor works, after Indigo's own product and technology pages, as ONE continuous
   fine-line cross-section. Skin and dermis run across the top of the frame; below, in the subcutaneous tissue among fat
   lobules, lies the implanted capsule with its photonic chip, surrounded by interstitial fluid carrying glucose, ketone and
   lactate molecules. Step 1 (sense): light leaves the chip and loops through the fluid; the molecules it meets light up.
   Step 2 (resolve): the absorption spectrum draws across the base, with a dip for each metabolite. Step 3 (share): the
   sensor's Bluetooth link rises through the skin to a phone outside, where three traces appear. Schematic, not to scale. */
var SCW=760,SCH=520,SKY=150,DMY=206,CX=330,CY=296;
function igWave(y0,amp,ph){var d='',i;for(i=0;i<=76;i++){var x=i*10;d+=(i?'L':'M')+x+' '+(y0+Math.sin(i*.42+ph)*amp+Math.sin(i*.13)*amp*.8).toFixed(1)}return d}
var IGM=(function(){var s=11,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i,T=["g","k","l"];
  for(i=0;i<400&&a.length<24;i++){var an=R()*Math.PI*2,rr=70+R()*120,x=CX+Math.cos(an)*rr*1.5,y=CY+Math.sin(an)*rr*.62;
    if(x<40||x>720||y<DMY+22||y>372)continue;if(Math.abs(y-CY)<44&&Math.abs(x-CX)<165)continue;if(Math.abs(y-(CY+52))<14&&Math.abs(x-CX)<120)continue;
    if(a.some(function(b){return Math.hypot(b.x-x,b.y-y)<30}))continue;a.push({x:x,y:y,t:T[a.length%3],r:R()*60})}return a})();
var IGL=(function(){var s=29,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<200&&a.length<10;i++){var x=40+R()*680,y=DMY+44+R()*130,r=20+R()*14;
    if(Math.abs(y-CY)<64&&Math.abs(x-CX)<190)continue;if(x>540&&y<DMY+56)continue;
    if(a.some(function(b){return Math.hypot(b[0]-x,b[1]-y)<b[2]+r+10}))continue;
    if(IGM.some(function(m){return Math.hypot(m.x-x,m.y-y)<r+12}))continue;a.push([x,y,r])}return a})();
function igMol(m){var g='<g class="mol '+m.t+'" transform="translate('+m.x.toFixed(1)+' '+m.y.toFixed(1)+') rotate('+m.r.toFixed(0)+')">';
  if(m.t=="g"){var d='',j;for(j=0;j<6;j++){var a=j/6*Math.PI*2;d+=(j?'L':'M')+(Math.cos(a)*7).toFixed(1)+' '+(Math.sin(a)*7).toFixed(1)}g+='<path d="'+d+'Z"/><path d="M7 0h6"/>'}
  else if(m.t=="k")g+='<path d="M-9 3l5-6 5 6 5-6 4 4"/><circle cx="-4" cy="-6" r="1.6"/>';
  else g+='<path d="M-8 2l5-5 5 5 5-5"/><path d="M2 2v6"/><circle cx="7" cy="-6" r="1.6"/>';
  return g+'</g>'}
function igScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="sk sD" d="'+igWave(SKY,3,0)+'"/><path class="sk2 sD" d="'+igWave(SKY+12,2.5,.6)+'"/>';
  g+='<path class="dm sD" d="'+igWave(DMY,6,1.7)+'"/>';
  g+='<path class="cap2 sD" d="M90 '+(SKY+32)+'C140 '+(SKY+44)+' 180 '+(SKY+24)+' 240 '+(SKY+36)+'S330 '+(SKY+48)+' 400 '+(SKY+30)+'M470 '+(SKY+40)+'C520 '+(SKY+26)+' 560 '+(SKY+46)+' 610 '+(SKY+34)+'"/>';
  IGL.forEach(function(l){g+='<ellipse class="lob sD" cx="'+l[0].toFixed(1)+'" cy="'+l[1].toFixed(1)+'" rx="'+l[2].toFixed(1)+'" ry="'+(l[2]*.78).toFixed(1)+'"/>'});
  g+='<path class="ax sD" d="M70 412H690"/>';
  /* the implanted capsule and its chip */
  g+='<rect class="cps sD" x="'+(CX-138)+'" y="'+(CY-28)+'" width="276" height="56" rx="28"/>';
  g+='<rect class="cps2 sD" x="'+(CX-130)+'" y="'+(CY-21)+'" width="260" height="42" rx="21"/>';
  g+='<rect class="chip sD" x="'+(CX-70)+'" y="'+(CY-14)+'" width="120" height="28"/>';
  g+='<path class="wg sD" d="M'+(CX-62)+' '+(CY-6)+'H'+(CX-20)+'C'+(CX-8)+' '+(CY-6)+' '+(CX-8)+' '+(CY+6)+' '+(CX+4)+' '+(CY+6)+'H'+(CX+42)+'M'+(CX-62)+' '+(CY+6)+'H'+(CX-30)+'"/>';
  var gr='';for(i=0;i<8;i++)gr+='M'+(CX+14+i*4)+' '+(CY-11)+'v8';g+='<path class="wg sD" d="'+gr+'"/>';
  g+='<rect class="bat sD" x="'+(CX+66)+'" y="'+(CY-11)+'" width="48" height="22"/><path class="bat sD" d="M'+(CX+114)+' '+(CY-4)+'h4v8h-4"/>';
  var co='';for(i=0;i<6;i++)co+='M'+(CX-118+i*7)+' '+(CY-12)+'v24';g+='<path class="wg sD" d="'+co+'"/>';
  g+='<text class="t" x="20" y="'+(SKY-16)+'">OUTSIDE THE BODY</text>';
  g+='<text class="t" x="20" y="'+(SKY+36)+'">SKIN</text>';
  g+='<text class="t" x="740" y="'+(DMY+40)+'" text-anchor="end">INTERSTITIAL FLUID</text>';
  g+='<text class="t" x="'+CX+'" y="'+(CY+52)+'" text-anchor="middle">CMM® SENSOR, IMPLANTED</text>';
  g+='</g>';
  /* step 1: light through the fluid */
  g+='<g id="scLt">';
  [[-1,70],[1,70],[-1,118],[1,118]].forEach(function(v){var s=v[0],r=v[1],x0=CX+s*30,yy=CY-14;
    g+='<path class="lt" d="M'+x0+' '+yy+'C'+(x0+s*r*.4)+' '+(yy-r*.8)+' '+(x0+s*r*1.6)+' '+(yy-r*.6)+' '+(x0+s*r*1.7)+' '+CY+'S'+(x0+s*r*.8)+' '+(CY+r*.36)+' '+(x0+s*12)+' '+(CY+14)+'"/>'});
  g+='</g>';
  g+='<g id="scMol">';IGM.forEach(function(m){g+=igMol(m)});g+='</g>';
  /* step 2: the absorption spectrum */
  var sp='',X0=70,X1=690;for(i=0;i<=124;i++){var x=X0+i*5,u=(x-X0)/(X1-X0),y=430+4*Math.sin(u*11)
    +44*Math.exp(-Math.pow((u-.24)/.045,2))+34*Math.exp(-Math.pow((u-.52)/.04,2))+40*Math.exp(-Math.pow((u-.78)/.05,2));sp+=(i?'L':'M')+x+' '+y.toFixed(1)}
  g+='<g id="scSp"><path class="spc" id="spc" d="'+sp+'"/>';
  g+='<text class="t g" x="'+(X0+.24*(X1-X0))+'" y="508" text-anchor="middle">GLUCOSE</text>';
  g+='<text class="t k" x="'+(X0+.52*(X1-X0))+'" y="508" text-anchor="middle">KETONES</text>';
  g+='<text class="t l" x="'+(X0+.78*(X1-X0))+'" y="508" text-anchor="middle">LACTATE</text>';
  g+='<text class="t" x="70" y="400">ABSORPTION ACROSS THE SPECTRUM</text></g>';
  /* step 3: Bluetooth to the phone outside */
  var PX=640,PY=14;
  g+='<g id="scBt">';
  for(i=0;i<3;i++){var rr=20+i*15;g+='<path class="bt" d="M'+(CX+90-rr*.7)+' '+(CY-34-rr*.7)+'A'+rr+' '+rr+' 0 0 1 '+(CX+90+rr*.7)+' '+(CY-34-rr*.7)+'"/>'}
  g+='<path class="bt dsh" d="M'+(CX+90)+' '+(CY-96)+'C'+(CX+130)+' '+(SKY-20)+' '+(PX-70)+' '+(PY+96)+' '+(PX-8)+' '+(PY+70)+'"/>';
  g+='<rect class="ph" x="'+PX+'" y="'+PY+'" width="62" height="112" rx="9"/><path class="ph2" d="M'+(PX+24)+' '+(PY+7)+'h14"/>';
  g+='<path class="tr g" d="M'+(PX+8)+' '+(PY+40)+'l8-4 8 3 8-7 8 2 8-5 8 3"/><path class="tr k" d="M'+(PX+8)+' '+(PY+64)+'l8 1 8-2 8 1 8-3 8 1 8 0"/><path class="tr l" d="M'+(PX+8)+' '+(PY+88)+'l8-2 8 4 8-3 8 1 8-4 8 2"/>';
  g+='<text class="t" x="'+(PX-14)+'" y="'+(PY+40)+'" text-anchor="end">PHONE</text>';
  g+='</g>';
  return g+'</svg>';
}
function scene(){return igScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),lt:dl("#scLt .lt"),mol:$$("#scMol .mol",svg),molG:$("#scMol",svg),
    sp:dl("#spc"),spg:$("#scSp",svg),spt:$$("#scSp text",svg),bt:$$("#scBt .bt",svg),bg:$("#scBt",svg),ph:$$("#scBt .ph,#scBt .ph2,#scBt text",svg),tr:dl("#scBt .tr")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.molG,b)}
    var lt=sm2(seg(p,.04,.24)),hi=seg(p,.12,.3),sp=sm2(seg(p,.36,.6)),bt=seg(p,.66,.88);
    draw(E.lt,lt);
    E.mol.forEach(function(el,i){el.classList.toggle("on",hi>(i%6)/6*.9+.05)});
    op(E.spg,b);draw(E.sp,sp);E.spt.forEach(function(el,i){op(el,i==3?sm2(seg(p,.34,.4)):sm2(seg(p,.42+i*.06,.48+i*.06)))});
    op(E.bg,b);E.bt.forEach(function(el,i){op(el,i<3?sm2(seg(bt,i*.12,i*.12+.2)):sm2(seg(bt,.3,.55)))});
    E.ph.forEach(function(el){op(el,sm2(seg(bt,.45,.6)))});draw(E.tr,sm2(seg(bt,.6,.95)));
  };
}
function sm2(x){return x*x*(3-2*x)}
