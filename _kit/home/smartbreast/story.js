/* The story scene (BL/BY/DB): an Eve Clear Scan™ MBI exam, as ONE continuous side elevation (smartbreast.com/comfort,
   /mbi-technology). The breast, its dense fibroglandular tissue, a small cancer and the two gamma cameras stay on screen
   throughout. Step 1: technetium-99m sestamibi enters from the chest wall and spreads through the breast, pooling in the
   cancer (mitochondria-rich, new blood vessels). Step 2: the cameras close on the breast with gentle pressure; the breast
   flattens a little. Step 3: gamma photons travel straight through the collimators to the CZT detectors, whose cells light
   with the counts. Step 4: the counts along the detector form the uptake profile: one clear peak over the cancer, while
   the dense tissue that hides it on a mammogram adds nothing. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520,CWX=96,NX=600;
function rnd(s){return function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff}}
/* the breast: half-height at x, for compression c (0 = resting, 1 = between the cameras) */
function bHalf(x,c){var L=NX+16*c-CWX,u=Math.max(0,Math.min(1,(x-CWX)/L));var H=100-24*c;return H*Math.pow(1-Math.pow(u,3.4),.5)}
var BYC=262;
var STR=(function(){var R=rnd(2019),a=[];for(var j=0;j<15;j++){a.push({f:-.82+1.64*(j+.5)/15+(R()-.5)*.08,w:(R()-.5)*.22,k:2+R()*3,ph:R()*6.28,x1:CWX+14,x2:CWX+300+R()*170})}return a})();
var LES={x:418,f:-.34};
var DOTS=(function(){var R=rnd(1997),a=[];for(var i=0;i<96;i++){var les=i%3===0;
  if(les){var ang=R()*6.28,rr=Math.sqrt(R())*11;a.push({les:1,dx:Math.cos(ang)*rr,dy:Math.sin(ang)*rr*.8,d:R()})}
  else a.push({les:0,u:.06+.86*R(),f:-.86+1.72*R(),d:R()})}return a})();
var CELLX0=150,CELLW=10,NCELL=46;
function cellCounts(){var a=[];for(var i=0;i<NCELL;i++){var cx=CELLX0+(i+.5)*CELLW,inB=cx<NX-6,bg=inB?.16+.05*Math.sin(i*1.7):0.02;var dl=(cx-LES.x)/14;a.push(Math.min(1,bg+.9*Math.exp(-dl*dl)))}return a}
var CNT=cellCounts();
function memScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="bclip"><path id="bclipP" d=""/></clipPath><radialGradient id="lesG"><stop offset="0" stop-color="#fff4ec"/><stop offset=".45" stop-color="#e8c4dc" stop-opacity=".85"/><stop offset="1" stop-color="#d7a3ca" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* the chest wall, hatched on the body side */
  g+='<path class="cw sD" d="M'+CWX+' 92V432"/>';
  var hh='';for(i=0;i<22;i++){var yy=100+i*15;hh+='M'+(CWX-14)+' '+(yy+10)+'L'+CWX+' '+yy}
  g+='<path class="hat" d="'+hh+'"/>';
  g+='<text class="t" x="24" y="14">SIDE VIEW · MOLECULAR BREAST IMAGING</text>';
  g+='</g>';
  /* the two gamma cameras: housing, collimator hatch and the detector's row of cells (upper) */
  function cam(id,up){var s='<g id="'+id+'">';
    s+='<rect class="hs" x="140" y="'+(up?-70:0)+'" width="480" height="70"/>';
    var cy=up?-14:0,ch='';for(var q=0;q<=58;q++){var xq=144+q*8.2;ch+='M'+f(xq)+' '+cy+'v14'}
    s+='<path class="col" d="'+ch+'"/><path class="hl" d="M140 '+(up?-14:14)+'H620"/>';
    var cyy=up?-30:16;for(var k=0;k<NCELL;k++)s+='<rect class="cel" x="'+(CELLX0+k*CELLW+1)+'" y="'+cyy+'" width="'+(CELLW-2)+'" height="12"/>';
    s+='<text class="t cl" x="608" y="'+(up?-44:52)+'" text-anchor="end">GAMMA CAMERA</text>';
    return s+'</g>'}
  g+=cam("camU",1)+cam("camL",0);
  /* the breast and its dense tissue */
  g+='<path id="brF" class="brf" d=""/>';
  g+='<g clip-path="url(#bclip)"><g id="strs">';for(i=0;i<STR.length;i++)g+='<path class="str" d=""/>';g+='</g>';
  g+='<g id="dots">';DOTS.forEach(function(d){g+='<circle class="'+(d.les?'dl':'db')+'" r="'+(d.les?2.1:1.7)+'" cx="0" cy="0"/>'});g+='</g></g>';
  g+='<circle id="lesGl" r="30" fill="url(#lesG)" cx="0" cy="0"/>';
  g+='<path id="les" class="les" d=""/>';
  g+='<path id="brO" class="bro" d=""/>';
  /* photon paths: straight through the collimator, up and down */
  g+='<g id="rays">';[-8,-3,3,8].forEach(function(dx){g+='<path class="ray rl" data-dx="'+dx+'" data-up="1" d=""/><path class="ray rl" data-dx="'+dx+'" data-up="0" d=""/>'});
  [170,236,300,352,496,548].forEach(function(xb,k){g+='<path class="ray rb" data-x="'+xb+'" data-up="'+(k%2)+'" d=""/>'});g+='</g>';
  /* the uptake profile, built from the detector counts above the upper camera */
  g+='<g id="prof"><path class="pbl" d="M150 96H610"/>';for(i=0;i<NCELL;i++)g+='<rect class="pb" x="'+(CELLX0+i*CELLW+1.5)+'" y="96" width="'+(CELLW-3)+'" height="0"/>';
  g+='<text class="t" x="150" y="'+(o.mob?36:40)+'">COUNTS ALONG THE DETECTOR</text></g>';
  /* the cancer's callout, step 4 */
  g+='<g id="callout"><path class="lead" d=""/><text class="a" id="coT" x="630" y="256"><tspan x="630">CANCER</tspan><tspan x="630" dy="1.35em">HIGH UPTAKE</tspan></text></g>';
  /* step labels along the base */
  var ly=o.mob?504:500;
  g+='<g id="lb1"><text class="a" x="24" y="'+ly+'">TRACER · TECHNETIUM-99m SESTAMIBI</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="'+ly+'">ABOUT ⅓ THE FORCE OF A MAMMOGRAM</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="'+ly+'">GAMMA PHOTONS → DETECTORS</text></g>';
  g+='<g id="lb4"><text class="a" x="24" y="'+ly+'">ACTIVITY, NOT DENSITY</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .hat",svg),camU:$("#camU",svg),camL:$("#camL",svg),
    cu:$$("#camU .cel",svg),cl:$$("#camL .cel",svg),brF:$("#brF",svg),brO:$("#brO",svg),clip:$("#bclipP",svg),
    str:$$("#strs .str",svg),dots:$$("#dots circle",svg),les:$("#les",svg),gl:$("#lesGl",svg),
    rl:$$("#rays .rl",svg),rb:$$("#rays .rb",svg),pb:$$("#prof .pb",svg),prof:$("#prof",svg),co:$("#callout",svg),lead:$("#callout .lead",svg),coT:$("#coT",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var lastB=-1,lastC=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=(+v).toFixed(3)}
  function F(n){return n.toFixed(1)}
  function outline(c){var d='M'+CWX+' '+F(BYC-bHalf(CWX,c)),xs=[];for(var x=CWX;x<=NX+16*c+.01;x+=8)xs.push(x);xs.push(NX+16*c);
    xs.forEach(function(x){d+='L'+F(x)+' '+F(BYC-bHalf(x,c))});xs.slice().reverse().forEach(function(x){d+='L'+F(x)+' '+F(BYC+bHalf(x,c))});return d+'Z'}
  function shape(c){
    var d=outline(c);E.brF.setAttribute("d",d);E.brO.setAttribute("d",d.replace(/Z$/,''));E.clip.setAttribute("d",d);
    E.str.forEach(function(p,j){var s=STR[j],q='';for(var x=s.x1;x<=s.x2;x+=10){var u=(x-s.x1)/(s.x2-s.x1);var ff=s.f*(1-.5*u)+s.w*Math.sin(u*s.k+s.ph);q+=(q?'L':'M')+F(x)+' '+F(BYC+ff*bHalf(x,c))}p.setAttribute("d",q)});
    var lx=LES.x,ly=BYC+LES.f*bHalf(LES.x,c),R=rnd(77),ld='';for(var a=0;a<=12;a++){var an=a/12*6.283,rr=(a%12===0?9:8+R()*3.2);ld+=(a?'L':'M')+F(lx+Math.cos(an)*rr*1.15)+' '+F(ly+Math.sin(an)*rr*.82)}
    E.les.setAttribute("d",ld+'Z');E.gl.setAttribute("cx",F(lx));E.gl.setAttribute("cy",F(ly));
    return [lx,ly]}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var cmp=seg(p,.26,.44);
    var L=[LES.x,BYC+LES.f*bHalf(LES.x,cmp)];
    if(Math.abs(cmp-lastC)>.0005){lastC=cmp;L=shape(cmp)}
    /* cameras: apart while the tracer goes in, then close on the breast */
    var uy=BYC-bHalf(CWX+60,cmp)-2-(1-cmp)*44,ly0=BYC+bHalf(CWX+60,cmp)+2+(1-cmp)*30;
    var uFace=BYC-76-2,lFace=BYC+76+2;uy=uFace-(1-cmp)*44;ly0=lFace+(1-cmp)*30;
    E.camU.setAttribute("transform","translate(0 "+F(uy)+")");E.camL.setAttribute("transform","translate(0 "+F(ly0)+")");
    op(E.camU,b);op(E.camL,b);op(E.brF,b);op(E.brO,b);
    E.str.forEach(function(s){op(s,b*.95)});
    /* step 1: the tracer flows in from the chest wall, spreads, and pools in the cancer */
    var tin=seg(p,.02,.22);
    E.dots.forEach(function(c,i){var d=DOTS[i],ti=Math.min(1,Math.max(0,tin*1.6-d.d*.6)),tx,ty;
      if(d.les){tx=L[0]+d.dx;ty=L[1]+d.dy}else{var x=CWX+d.u*(NX-CWX);tx=x;ty=BYC+d.f*bHalf(x,cmp)}
      var sx=CWX+2,sy=BYC+(d.les?-20:0)+(i%7-3)*6,e=1-Math.pow(1-ti,3);
      c.setAttribute("cx",F(sx+(tx-sx)*e));c.setAttribute("cy",F(sy+(ty-sy)*e));op(c,b*(ti>0?(d.les?1:.55):0))});
    var pool=seg(p,.12,.24);op(E.les,b*(.25+.75*pool));op(E.gl,b*pool*(.55+.45*seg(p,.72,.86)));
    /* step 3: photons travel straight to both detectors; cells light with the counts */
    var ray=seg(p,.5,.62),rOff=-(p*900)%24;
    E.rl.forEach(function(r){var dx=+r.getAttribute("data-dx"),up=r.getAttribute("data-up")==="1",x=L[0]+dx,y0=L[1],y1=up?uy:ly0;r.setAttribute("d","M"+F(x)+" "+F(y0)+"V"+F(y0+(y1-y0)*ray));r.style.strokeDashoffset=F(rOff);op(r,b*(ray>0?1:0)*(1-.5*seg(p,.84,.96)))});
    E.rb.forEach(function(r){var x=+r.getAttribute("data-x"),up=r.getAttribute("data-up")==="1",y0=BYC+(up?-.3:.3)*bHalf(x,cmp),y1=up?uy:ly0;r.setAttribute("d","M"+x+" "+F(y0)+"V"+F(y0+(y1-y0)*ray));r.style.strokeDashoffset=F(rOff);op(r,b*(ray>0?.5:0)*(1-.5*seg(p,.84,.96)))});
    var lit=seg(p,.56,.72);
    E.cu.forEach(function(r,i){op(r,b*(.08+.92*CNT[i]*lit))});E.cl.forEach(function(r,i){op(r,b*(.08+.92*CNT[i]*lit))});
    /* step 4: the counts rise into the uptake profile above the upper camera; the cancer is called out */
    var pr=seg(p,.74,.9),Hm=48;op(E.prof,b*seg(p,.72,.78));
    E.pb.forEach(function(r,i){var gi=Math.min(1,Math.max(0,pr*1.5-Math.abs(i-26)*.012));var hh=Hm*CNT[i]*gi;r.setAttribute("y",F(96-hh));r.setAttribute("height",F(hh))});
    var co=seg(p,.82,.9);op(E.co,b*co);
    E.lead.setAttribute("d","M"+F(L[0]+14)+" "+F(L[1])+"L"+F(L[0]+44)+" "+F(L[1])+"L"+F(L[0]+70)+" 252H622");
    op(E.l1,b*seg(p,.04,.1)*(1-seg(p,.22,.26)));op(E.l2,b*seg(p,.28,.34)*(1-seg(p,.46,.5)));op(E.l3,b*seg(p,.52,.58)*(1-seg(p,.7,.74)));op(E.l4,b*seg(p,.78,.84));
  };
}
