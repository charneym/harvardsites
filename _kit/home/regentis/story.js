/* the story scene (BL/BY/DB): ONE joint surface in cross-section, kept on screen for all four steps: articular cartilage (cells
   flattened at the surface, rounder in the middle, in columns in the deep zone) over the subchondral bone plate and trabecular bone,
   with one full-thickness focal lesion. Steps follow regentis.co.il, "GelrinC Procedure and Mechanism of Action":
   1 fill: a delivery membrane covers the lesion and GelrinC is introduced with a syringe, filling it as a liquid;
   2 cure: a UV beam cures it into a soft, rubbery implant (its network forms);
   3 resorb: the implant recedes from its surface and rim while new cartilage cells fill the space it leaves;
   4 repair: at 6-9 months the implant is resorbed and new cartilage covers the lesion. Schematic; driven by the scrubbed progress. */
var CJ={cx:380,top:290,fl:420,hw0:84,hw1:60,x0:40,x1:720,bot:560};
function cjS(x){var u=(x-CJ.cx)/400;return CJ.top+u*u*60}              /* cartilage surface */
function cjB(x){return cjS(x)+132}                                       /* subchondral bone plate */
function cjHW(t){return CJ.hw0-(CJ.hw0-CJ.hw1)*Math.pow(t,1.3)}           /* lesion half-width at depth t (0 surface .. 1 floor) */
function cjY(t){return CJ.top+(CJ.fl-CJ.top)*t}
function cjRand(i){var x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x)}
function cjIn(x,y,pad){var t=(y-CJ.top)/(CJ.fl-CJ.top);if(t<-.05||t>1)return false;t=Math.max(0,t);return Math.abs(x-CJ.cx)<cjHW(t)+(pad||0)}
/* the gel region: liquid level `lv` (0 = empty .. 1 = full) and receding scale `k` (1 = fills the lesion .. 0 = gone) */
function cjGel(lv,k){var f=function(n){return (+n).toFixed(1)},t0=Math.max(1-lv,1-k),n=10,i,t,d='',pts=[];
  if(lv<.002||k<.002)return 'M0 0Z';
  var top=cjY(t0)+(t0<.01?-1.5:0);
  for(i=0;i<=n;i++){t=t0+(1-t0)*i/n;pts.push([CJ.cx-cjHW(t)*k,cjY(t)])}
  d='M'+f(pts[0][0])+' '+f(top);for(i=1;i<pts.length;i++)d+='L'+f(pts[i][0])+' '+f(pts[i][1]);
  for(i=pts.length-1;i>=0;i--)d+='L'+f(2*CJ.cx-pts[i][0])+' '+f(i?pts[i][1]:top);
  var hw=cjHW(t0)*k;d+='Q'+f(CJ.cx)+' '+f(top-(t0<.01?5:2)*k)+' '+f(CJ.cx-hw)+' '+f(top);return d+'Z'}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,k,x,y,C=CJ;C.x0=mob?150:40;C.x1=mob?610:720;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'140 140 480 520':'30 140 700 450')+'" aria-hidden="true">';
  g+='<defs><clipPath id="cjclip"><path id="cjcp" d="M0 0Z"/></clipPath></defs>';
  g+='<g id="scBase">';
  /* surface, bone plate, lower boundary; the lesion walls and floor */
  var sl='',sr='',bl='';for(x=C.x0;x<=C.cx-C.hw0;x+=6)sl+=(sl?'L':'M')+f(x)+' '+f(cjS(x));sl+='L'+(C.cx-C.hw0)+' '+f(cjS(C.cx-C.hw0));
  for(x=C.cx+C.hw0;x<=C.x1;x+=6)sr+=(sr?'L':'M')+f(x)+' '+f(cjS(x));sr+='L'+C.x1+' '+f(cjS(C.x1));
  for(x=C.x0;x<=C.x1;x+=6)bl+=(bl?'L':'M')+f(x)+' '+f(cjB(x));
  var wl='',wr='';for(i=0;i<=12;i++){var t=i/12;wl+=(wl?'L':'M')+f(C.cx-cjHW(t))+' '+f(cjY(t));wr+=(wr?'L':'M')+f(C.cx+cjHW(t))+' '+f(cjY(t))}
  g+='<path class="rb sD" d="'+sl+'"/><path class="rb sD" d="'+sr+'"/>';
  g+='<path class="les sD" d="'+wl+'L'+f(C.cx+cjHW(1))+' '+f(cjY(1))+'"/><path class="les sD" d="'+wr+'"/>';
  g+='<path class="bp sD" d="'+bl+'"/><path class="nt sD" d="M'+C.x0+' '+C.bot+'L'+C.x1+' '+C.bot+'"/>';
  /* trabecular bone: a loose lattice of small open cells between the plate and the lower boundary */
  for(i=0;i<70;i++){x=C.x0+12+cjRand(i+3)*(C.x1-C.x0-24);var yb=cjB(x)+10,yy=yb+cjRand(i+501)*(C.bot-yb-14);
    var rx=5+cjRand(i+71)*7,ry=3.5+cjRand(i+91)*4.5;g+='<ellipse class="tb" cx="'+f(x)+'" cy="'+f(yy)+'" rx="'+f(rx)+'" ry="'+f(ry)+'" transform="rotate('+f((cjRand(i+33)-.5)*50)+' '+f(x)+' '+f(yy)+')"/>'}
  /* chondrocytes: flat at the surface, round in the middle, short columns in the deep zone; none inside the lesion */
  var cells='',nc=0;
  for(x=C.x0+10;x<=C.x1-8;x+=13){var s=cjS(x);
    if(!cjIn(x,s+8,6))cells+='<ellipse class="cc" cx="'+f(x+cjRand(x)*4)+'" cy="'+f(s+8+cjRand(x+9)*3)+'" rx="4.2" ry="1.5"/>';}
  for(i=0;i<170;i++){x=C.x0+10+cjRand(i+1201)*(C.x1-C.x0-20);y=cjS(x)+22+cjRand(i+1301)*52;if(cjIn(x,y,7))continue;cells+='<circle class="cc" cx="'+f(x)+'" cy="'+f(y)+'" r="2.1"/>'}
  for(x=C.x0+16;x<=C.x1-12;x+=17){var yb2=cjB(x);if(Math.abs(x-C.cx)<C.hw1+10)continue;
    for(k=0;k<3;k++)cells+='<ellipse class="cc" cx="'+f(x+cjRand(x+k)*2)+'" cy="'+f(yb2-40+k*10)+'" rx="2" ry="3"/>'}
  g+='<g class="cells">'+cells+'</g>';
  g+='<text class="t" x="'+(C.x0+2)+'" y="'+(C.bot+30)+'">'+(mob?'CARTILAGE OVER BONE':'KNEE CARTILAGE OVER BONE, IN SECTION')+'</text>';
  g+='</g>';
  /* new cartilage cells that fill the lesion as the implant recedes; each carries its distance from the rim */
  var ncl='',j=0;for(y=C.top+7;y<C.fl-5;y+=12){for(x=C.cx-C.hw0;x<C.cx+C.hw0;x+=13){j++;var xx=x+cjRand(j+2201)*8,yy=y+cjRand(j+2301)*5;if(!cjIn(xx,yy,-6))continue;
    var t2=(yy-C.top)/(C.fl-C.top),rim=1-Math.abs(xx-C.cx)/cjHW(t2),dep=1-t2;var o=Math.min(1,.25+Math.max(1-rim,dep)*.75);nc++;
    ncl+=t2<.1?'<ellipse class="nc" data-o="'+f(o)+'" cx="'+f(xx)+'" cy="'+f(yy)+'" rx="4" ry="1.5"/>':'<circle class="nc" data-o="'+f(o)+'" cx="'+f(xx)+'" cy="'+f(yy)+'" r="2.1"/>'}}
  g+='<g id="ncs">'+ncl+'</g>';
  /* the new surface across the repaired lesion */
  var ns='';for(x=C.cx-C.hw0;x<=C.cx+C.hw0;x+=8)ns+=(ns?'L':'M')+f(x)+' '+f(cjS(x));ns+='L'+(C.cx+C.hw0)+' '+f(cjS(C.cx+C.hw0));
  g+='<path class="nsurf" id="nsurf" d="'+ns+'"/>';
  /* the gel: body, edge, and (once cured) its network, clipped to the body */
  g+='<g id="gel"><path class="gbody" id="gbody" d="M0 0Z"/><g id="gnet" clip-path="url(#cjclip)">';
  var gn='';for(i=0;i<26;i++){var ax=C.cx-C.hw0+cjRand(i+3101)*2*C.hw0,ay=C.top+cjRand(i+3201)*(C.fl-C.top),a=cjRand(i+3301)*Math.PI,L=14+cjRand(i+3401)*12;
    gn+='<path class="gnet" d="M'+f(ax-Math.cos(a)*L)+' '+f(ay-Math.sin(a)*L)+'Q'+f(ax+6)+' '+f(ay-6)+' '+f(ax+Math.cos(a)*L)+' '+f(ay+Math.sin(a)*L)+'"/><circle class="gnd" cx="'+f(ax)+'" cy="'+f(ay)+'" r="2.2"/>'}
  g+=gn+'</g><path class="gedge" id="gedge" d="M0 0Z"/></g>';
  /* step 1: the delivery membrane over the lesion, and the syringe */
  var mx0=C.cx-C.hw0-22,mx1=C.cx+C.hw0+22;
  g+='<g id="memb"><path class="mem" id="memp" d="M'+mx0+' '+f(cjS(mx0)-5)+'Q'+C.cx+' '+(C.top-9)+' '+mx1+' '+f(cjS(mx1)-5)+'"/></g>';
  g+='<g id="syr" transform="translate(0 0)"><g transform="rotate(32 '+C.cx+' '+(C.top-6)+')">'+
     '<path class="ndl" d="M'+C.cx+' '+(C.top-6)+'V'+(C.top-62)+'"/><rect class="brl" x="'+(C.cx-9)+'" y="'+(C.top-148)+'" width="18" height="86"/>'+
     '<rect class="liq" id="liq" x="'+(C.cx-7)+'" y="'+(C.top-120)+'" width="14" height="56"/><path class="brl2" d="M'+(C.cx-16)+' '+(C.top-148)+'H'+(C.cx+16)+'M'+C.cx+' '+(C.top-148)+'V'+(C.top-170)+'M'+(C.cx-10)+' '+(C.top-170)+'H'+(C.cx+10)+'"/></g></g>';
  /* step 2: the UV beam, a fan from above onto the filled lesion */
  var bm='';for(i=0;i<7;i++){var bx=C.cx-C.hw0+8+i*(2*C.hw0-16)/6;bm+='<path class="uv" d="M'+f(C.cx+(bx-C.cx)*.18)+' '+(C.top-118)+'L'+f(bx)+' '+(C.top-10)+'"/>'}
  g+='<g id="uvb"><path class="uvc" d="M'+(C.cx-22)+' '+(C.top-128)+'H'+(C.cx+22)+'"/>'+bm+'</g>';
  /* labels, one per step, in the clear band at upper left (on phones: below the section) */
  var ly=mob?C.bot+62:C.top-82,lx=mob?380:C.x0,an=mob?' text-anchor="middle"':'';
  g+='<g id="lb0"><text class="a" x="'+lx+'" y="'+ly+'"'+an+'>'+'LIQUID GELRINC FILLS IN'+'</text></g>';
  g+='<g id="lb1"><text class="a u" x="'+lx+'" y="'+ly+'"'+an+'>'+'UV LIGHT CURES IT'+'</text></g>';
  g+='<g id="lb2"><text class="a b" x="'+lx+'" y="'+ly+'"'+an+'>'+'NEW CARTILAGE GROWS IN'+'</text></g>';
  g+='<g id="lb3"><text class="a b" x="'+lx+'" y="'+ly+'"'+an+'>'+'REPAIRED IN 6–9 MONTHS'+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text,#scBase .tb,#scBase .cells",svg),gel:$("#gel",svg),gb:$("#gbody",svg),ge:$("#gedge",svg),cp:$("#cjcp",svg),gnet:$("#gnet",svg),
    nc:$$("#ncs .nc",svg),ns:dl("#nsurf"),nsE:$("#nsurf",svg),memb:$("#memb",svg),mem:dl("#memp"),syr:$("#syr",svg),liq:$("#liq",svg),uvb:$("#uvb",svg),uv:dl("#uvb .uv"),les:$$("#scBase .les",svg),
    l0:$("#lb0",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  E.nc.forEach(function(c){c._o=+c.getAttribute("data-o")});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var mIn=seg(p,.02,.08),fill=seg(p,.07,.22),cure=seg(p,.30,.44),rec=seg(p,.53,.70),fin=seg(p,.76,.9);
    var k=1-rec*.55-fin*.45;
    /* step 1: membrane draws on, the syringe arrives, the liquid level rises */
    op(E.memb,b*(1-seg(p,.27,.33)));draw(E.mem,mIn);
    var sv=seg(p,.03,.09)*(1-seg(p,.24,.3));op(E.syr,b*sv);E.syr.setAttribute("transform","translate("+(26*(1-sv)).toFixed(1)+" "+(-26*(1-sv)).toFixed(1)+")");
    E.liq.setAttribute("height",(56*(1-fill)).toFixed(1));E.liq.setAttribute("y",(CJ.top-120+56*fill).toFixed(1));
    var d=cjGel(fill,k);E.gb.setAttribute("d",d);E.ge.setAttribute("d",d);E.cp.setAttribute("d",d);
    op(E.gel,b);E.gb.style.fillOpacity=(.20+.22*cure).toFixed(3);E.ge.style.opacity=(.45+.55*cure).toFixed(3);op(E.gnet,cure);
    /* step 2: the UV fan draws down onto the gel, then switches off */
    op(E.uvb,b*seg(p,.27,.31)*(1-seg(p,.46,.51)));draw(E.uv,seg(p,.28,.38));
    /* step 3/4: new cells appear where the implant has receded (outside the current gel), rim first */
    var lv=1-k;E.nc.forEach(function(c){op(c,b*seg(lv*1.25,1-c._o,1.08-c._o)*seg(p,.5,.56))});
    E.les.forEach(function(l){l.style.opacity=(1-.75*fin).toFixed(3)});
    op(E.nsE,b*seg(p,.8,.86));draw(E.ns,fin);
    op(E.l0,b*(1-seg(p,.22,.27)));op(E.l1,b*seg(p,.29,.34)*(1-seg(p,.47,.52)));op(E.l2,b*seg(p,.54,.6)*(1-seg(p,.72,.77)));op(E.l3,b*seg(p,.79,.85));
  };
}
