/* the story scene (BL/BY/DB): ONE wound, drawn once in cross-section and kept on screen for all three steps: two banks of soft
   tissue (fibre layers) split by a V-shaped incision through a small vessel, bleeding from the cut.
   Step 1 (seal leaks): the hydrogel drapes over the incision and fills it; its cross-linked network forms and the bleeding stops.
   Step 2 (heal tissues): new tissue fibres knit across the gap beneath the gel, which stays as a moist, protective barrier.
   Step 3 (deliver drugs): drug held in the network diffuses down into the surrounding tissue, locally.
   Source: limaxbiosciences.com (Seal leaks / Heal tissues / Deliver drugs). Schematic. Driven by the scrubbed story progress. */
var WD={x0:40,x1:720,top:250,bot:470,gl:318,gr:442,ap:[380,420],gx0:236,gx1:524,gtop:196,vy:[372,392]};
function wdTop(x){return WD.top+5*Math.sin(x*.021)+3*Math.sin(x*.057+1)}
function wdL(y){var t=(y-WD.top)/(WD.ap[1]-WD.top);return WD.gl+(WD.ap[0]-WD.gl)*t}
function wdR(y){var t=(y-WD.top)/(WD.ap[1]-WD.top);return WD.gr+(WD.ap[0]-WD.gr)*t}
function wdRand(i){var x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x)}
function wdGelPath(){var f=function(n){return (+n).toFixed(1)},W=WD,d='M'+W.gx0+' '+f(wdTop(W.gx0)),x;
  d+='C'+(W.gx0+8)+' '+(W.gtop+22)+' '+(W.gx0+26)+' '+W.gtop+' '+(W.gx0+62)+' '+W.gtop;
  d+='C'+(W.gx0+130)+' '+(W.gtop-6)+' '+(W.gx1-130)+' '+(W.gtop+6)+' '+(W.gx1-62)+' '+W.gtop;
  d+='C'+(W.gx1-26)+' '+W.gtop+' '+(W.gx1-8)+' '+(W.gtop+22)+' '+W.gx1+' '+f(wdTop(W.gx1));
  for(x=W.gx1;x>=W.gr;x-=8)d+='L'+f(x)+' '+f(wdTop(x));
  d+='L'+W.gr+' '+f(wdTop(W.gr))+'L'+W.ap[0]+' '+W.ap[1]+'L'+W.gl+' '+f(wdTop(W.gl));
  for(x=W.gl;x>=W.gx0;x-=8)d+='L'+f(x)+' '+f(wdTop(x));return d+'Z'}
function wdInGel(x,y){var W=WD;if(x<W.gx0+14||x>W.gx1-14)return false;var t=wdTop(x);
  if(y>t-6){return y<W.ap[1]-26&&x>wdL(y)+9&&x<wdR(y)-9}return y>W.gtop+12}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,k,x,W=WD;W.x0=mob?150:40;W.x1=mob?610:720;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'140 140 480 380':'30 150 700 365')+'" aria-hidden="true">';
  g+='<defs><linearGradient id="wgel" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#2fb5a5"/><stop offset=".5" stop-color="#3a7bd5"/><stop offset="1" stop-color="#8a4fd6"/></linearGradient>'+
     '<linearGradient id="wgelF" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#2fb5a5" stop-opacity=".2"/><stop offset=".5" stop-color="#3a7bd5" stop-opacity=".16"/><stop offset="1" stop-color="#8a4fd6" stop-opacity=".2"/></linearGradient>'+
     '<radialGradient id="wdrug" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#a77be6" stop-opacity=".55"/><stop offset="1" stop-color="#8a4fd6" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* tissue: surface line, fibre layers interrupted by the incision, lower boundary */
  var sl='',sr='';for(x=W.x0;x<=W.gl;x+=6)sl+=(sl?'L':'M')+f(x)+' '+f(wdTop(x));sl+='L'+W.gl+' '+f(wdTop(W.gl));
  for(x=W.gr;x<=W.x1;x+=6)sr+=(sr?'L':'M')+f(x)+' '+f(wdTop(x));sr+='L'+W.x1+' '+f(wdTop(W.x1));
  g+='<path class="rb sD" d="'+sl+'"/><path class="rb sD" d="'+sr+'"/>';
  g+='<path class="rb sD" d="M'+W.gl+' '+f(wdTop(W.gl))+'L'+W.ap[0]+' '+W.ap[1]+'L'+W.gr+' '+f(wdTop(W.gr))+'"/>';
  for(k=1;k<=8;k++){var y0=W.top+k*24,a='',b='',ph=k*1.3,gap=false;
    for(x=W.x0;x<=W.x1;x+=6){var y=y0+3*Math.sin(x*.03+ph)+2*Math.sin(x*.011+ph*2);
      var cut=y<W.ap[1]-4&&x>wdL(y)-5&&x<wdR(y)+5;if(cut){if(a)gap=true;continue}
      if(!gap)a+=(a?'L':'M')+f(x)+' '+f(y);else b+=(b?'L':'M')+f(x)+' '+f(y)}
    g+='<path class="nt sD" d="'+a+'"/>'+(b?'<path class="nt sD" d="'+b+'"/>':'')}
  /* the small vessel the incision cuts through */
  var vl=wdL(W.vy[0]),vr=wdR(W.vy[0]),vl2=wdL(W.vy[1]),vr2=wdR(W.vy[1]);
  g+='<path class="vs sD" d="M'+W.x0+' '+W.vy[0]+'L'+f(vl-6)+' '+W.vy[0]+'"/><path class="vs sD" d="M'+W.x0+' '+W.vy[1]+'L'+f(vl2-6)+' '+W.vy[1]+'"/>';
  g+='<path class="vs sD" d="M'+f(vr+6)+' '+W.vy[0]+'L'+W.x1+' '+W.vy[0]+'"/><path class="vs sD" d="M'+f(vr2+6)+' '+W.vy[1]+'L'+W.x1+' '+W.vy[1]+'"/>';
  g+='<path class="vfill" d="M'+W.x0+' '+W.vy[0]+'H'+f(vl-6)+'L'+f(vl2-6)+' '+W.vy[1]+'H'+W.x0+'Z"/><path class="vfill" d="M'+f(vr+6)+' '+W.vy[0]+'H'+W.x1+'V'+W.vy[1]+'H'+f(vr2+6)+'Z"/>';
  g+='<path class="nt sD" d="M'+W.x0+' '+W.bot+'L'+W.x1+' '+W.bot+'"/>';
  g+='<text class="t" x="'+(W.x0+2)+'" y="'+(W.bot+32)+'">'+(mob?'TISSUE':'SOFT TISSUE, WITH A CUT VESSEL')+'</text>';
  g+='</g>';
  /* blood: droplets rising out of the cut, and a pool in the floor of the incision */
  g+='<g id="bld"><path class="pool" d="M'+f(wdL(W.ap[1]-30))+' '+(W.ap[1]-30)+'L'+W.ap[0]+' '+W.ap[1]+'L'+f(wdR(W.ap[1]-30))+' '+(W.ap[1]-30)+'Z"/>';
  for(i=0;i<9;i++)g+='<circle class="bd" r="'+f(2.6+wdRand(i)*2.4)+'" cx="380" cy="380"/>';
  g+='</g>';
  /* step 1: the gel and its cross-linked network */
  g+='<g id="gel"><path class="gbody" d="'+wdGelPath()+'" fill="url(#wgelF)"/><path class="gedge" id="gedge" d="'+wdGelPath()+'" stroke="url(#wgel)"/>';
  var N=[];for(i=0;N.length<64&&i<4000;i++){var px=W.gx0+wdRand(i+11)*(W.gx1-W.gx0),py=W.gtop+wdRand(i+5003)*(W.ap[1]-W.gtop);
    if(!wdInGel(px,py))continue;if(N.some(function(q){return Math.hypot(q[0]-px,q[1]-py)<17}))continue;N.push([px,py])}
  var E={};N.forEach(function(p,a){var d=N.map(function(q,j){return [Math.hypot(q[0]-p[0],q[1]-p[1]),j]}).filter(function(z){return z[1]!==a}).sort(function(u,v){return u[0]-v[0]});
    for(var m=0;m<3;m++){if(d[m][0]>42)break;E[Math.min(a,d[m][1])+'-'+Math.max(a,d[m][1])]=1}});
  var ch='';Object.keys(E).forEach(function(key,ii){var ab=key.split('-'),p=N[+ab[0]],q=N[+ab[1]],mx=(p[0]+q[0])/2,my=(p[1]+q[1])/2,dx=q[0]-p[0],dy=q[1]-p[1],o=(wdRand(ii+77)-.5)*.5;
    ch+='<path class="gnet" d="M'+f(p[0])+' '+f(p[1])+'Q'+f(mx-dy*o)+' '+f(my+dx*o)+' '+f(q[0])+' '+f(q[1])+'"/>'});
  g+='<g id="gnet" stroke="url(#wgel)">'+ch+'</g>';
  N.forEach(function(p){var t=(p[0]-W.gx0)/(W.gx1-W.gx0);g+='<circle class="gnd" cx="'+f(p[0])+'" cy="'+f(p[1])+'" r="2.7" fill="'+(t<.4?'#3fc6b5':t<.7?'#4f8fe0':'#9a6ae0')+'"/>'});
  g+='</g>';
  /* step 2: new tissue knitting across the gap, from both banks */
  g+='<g id="heal">';for(k=0;k<6;k++){var yy=W.top+30+k*22;if(yy>W.ap[1]-30)break;var L0=wdL(yy)+1,R0=wdR(yy)-1,M0=(L0+R0)/2;
    g+='<path class="hf" d="M'+f(L0)+' '+yy+'Q'+f((L0+M0)/2)+' '+(yy+4)+' '+f(M0)+' '+yy+'"/><path class="hf" d="M'+f(R0)+' '+yy+'Q'+f((R0+M0)/2)+' '+(yy-4)+' '+f(M0)+' '+yy+'"/>'}
  g+='</g>';
  /* step 3: drug particles held in the gel, diffusing down and out into the tissue on either side */
  g+='<g id="drug">';for(i=0;i<22;i++){var sx=W.gx0+30+wdRand(i+901)*(W.gx1-W.gx0-60),sy=W.gtop+16+wdRand(i+1301)*34;
    var ty=W.top+34+wdRand(i+2101)*150,side=sx<380?-1:1,tx=(side<0?wdL(ty):wdR(ty))+side*(26+wdRand(i+1701)*120);
    g+='<g class="dp" data-s="'+f(sx)+','+f(sy)+'" data-t="'+f(tx)+','+f(ty)+'" transform="translate('+f(sx)+' '+f(sy)+')"><circle class="dh" r="11" fill="url(#wdrug)"/><circle class="dc" r="3"/></g>'}
  g+='</g>';
  /* labels, one per step, in the clear band above the gel */
  var ly=W.gtop-28,lx=mob?380:W.gx0,an=mob?' text-anchor="middle"':'';
  g+='<g id="lb0"><text class="a r" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'BLEEDING WOUND':'A BLEEDING SURGICAL WOUND')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'HYDROGEL SEAL':'HYDROGEL SEAL · BONDS IN SECONDS')+'</text></g>';
  g+='<g id="lb2"><text class="a b" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'NEW TISSUE BENEATH':'NEW TISSUE KNITS BENEATH THE GEL')+'</text></g>';
  g+='<g id="lb3"><text class="a v" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'LOCAL DRUG RELEASE':'DRUG RELEASED LOCALLY INTO TISSUE')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),bld:$("#bld",svg),bd:$$("#bld .bd",svg),gel:$("#gel",svg),gbody:$("#gel .gbody",svg),
    gedge:dl("#gedge"),gnet:dl("#gnet .gnet"),gnd:$$("#gel .gnd",svg),gnw:$("#gnet",svg),vf:$$("#scBase .vfill",svg),heal:$("#heal",svg),hf:dl("#heal .hf"),drug:$("#drug",svg),dp:$$("#drug .dp",svg),
    l0:$("#lb0",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  E.dp.forEach(function(d){var s=d.getAttribute("data-s").split(","),t=d.getAttribute("data-t").split(",");d._s=[+s[0],+s[1]];d._t=[+t[0],+t[1]]});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,.04,.3),s2=seg(p,.38,.62),s3=seg(p,.7,.94),stop=seg(p,.16,.3);
    /* blood: droplets rise from the floor of the cut while it is open; they stop once the gel seals it */
    op(E.bld,b*(1-stop));
    E.bd.forEach(function(c,i){var u=((i/E.bd.length)+p*2.2)%1,x=WD.ap[0]+(wdRand(i+41)-.5)*(24+40*u),y=WD.ap[1]-34-u*120;
      c.setAttribute("cx",x.toFixed(1));c.setAttribute("cy",y.toFixed(1));c.style.opacity=Math.sin(Math.PI*u).toFixed(3)});
    /* gel: the body fills in, its edge and network draw, junctions appear */
    op(E.gel,b);op(E.gbody,s1);draw(E.gedge,s1);draw(E.gnet,seg(p,.1,.32));
    var jn=seg(p,.18,.32);E.gnd.forEach(function(c){c.style.opacity=jn.toFixed(3)});
    E.gnw.style.opacity=(1-.6*seg(p,.36,.46)*(1-seg(p,.66,.74))).toFixed(3);E.vf.forEach(function(v){v.style.opacity=(b*(1-.7*stop)).toFixed(3)});
    /* heal: fibres grow in from both banks to meet in the middle */
    op(E.heal,b*Math.min(1,s2*4));draw(E.hf,s2);
    /* drug: particles slide from the gel into the tissue and fade as they are taken up */
    op(E.drug,b*seg(p,.64,.72));
    E.dp.forEach(function(d,i){var v=seg(s3,i*.012,.7+i*.012),x=d._s[0]+(d._t[0]-d._s[0])*v,y=d._s[1]+(d._t[1]-d._s[1])*v;
      d.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");d.style.opacity=(1-.5*v).toFixed(3)});
    op(E.l0,b*(1-seg(p,.05,.12)));op(E.l1,b*seg(p,.13,.2)*(1-seg(p,.34,.4)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.74,.82));
  };
}
