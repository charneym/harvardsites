/* the story scene (BL/BY/DB): ONE artery in long section, kept on screen for all four steps, with the aspiration catheter coming in
   from the left and a thrombus blocking the lumen; under it, the vacuum the pump applies, traced over time. Steps follow Insera's
   releases (CE Mark 2019, first patients 2019, 510(k) 2026): 1 reach: the INSERA catheter is advanced to the clot face;
   2 engage: the CLEAR pump draws a vacuum (up to -98.2 kPa) and the clot is pulled against the catheter mouth;
   3 cycle: in cyclical mode the pump varies pressure and intervals and the clot is drawn in whole (no fragments);
   4 flow: the vessel is open and blood flows again. Schematic; driven by the scrubbed progress. */
var AV={x0:20,x1:700,R:80,W:10,cr:30,tip0:96,tip1:318,cl0:330,cl1:488};
function avC(x){return 232+15*Math.sin(x/720*Math.PI*1.15-.35)}
function avRand(i){var x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x)}
/* clot outline: left end at `a`, right end at `b`; `pull` (0..1) tapers its left end into the catheter mouth */
function avClot(a,b,pull){var f=function(n){return (+n).toFixed(1)},n=34,i,top=[],bot=[],L=Math.max(b-a,1);
  if(b-a<2)return 'M0 0Z';
  for(i=0;i<=n;i++){var u=i/n,x=a+L*u,c=avC(x),
    env=Math.pow(Math.sin(Math.PI*Math.min(1,u*1.0+.0001)),.35),h=(AV.R-4)*env,
    tp=AV.cr-3,w=Math.min(1,u*L/60);h=h*(1-pull*(1-w))+tp*pull*(1-w);
    var j=(avRand(i+11)-.5)*5*env;top.push([x,c-h+j]);bot.push([x,c+h-(avRand(i+37)-.5)*5*env])}
  var d='M'+f(top[0][0])+' '+f(avC(a));for(i=0;i<=n;i++)d+='L'+f(top[i][0])+' '+f(top[i][1]);
  for(i=n;i>=0;i--)d+='L'+f(bot[i][0])+' '+f(bot[i][1]);return d+'Z'}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,x,A=AV;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'0 50 720 450':'0 60 720 430')+'" aria-hidden="true">';
  g+='<defs><clipPath id="avlum"><path id="avlp" d=""/></clipPath><clipPath id="avcat"><rect id="avcr" x="0" y="0" width="0" height="0"/></clipPath></defs>';
  /* vessel: inner and outer wall lines, top and bottom */
  var wt='',wb='',ot='',ob='',lp='';for(x=A.x0;x<=A.x1;x+=8){var c=avC(x);wt+=(wt?'L':'M')+f(x)+' '+f(c-A.R);wb+=(wb?'L':'M')+f(x)+' '+f(c+A.R);ot+=(ot?'L':'M')+f(x)+' '+f(c-A.R-A.W);ob+=(ob?'L':'M')+f(x)+' '+f(c+A.R+A.W)}
  g+='<g id="avBase"><path class="vw sD" d="'+wt+'"/><path class="vw sD" d="'+wb+'"/><path class="vo sD" d="'+ot+'"/><path class="vo sD" d="'+ob+'"/>';
  /* faint wall texture: short strokes between the two wall lines */
  var tx='';for(x=A.x0+6;x<A.x1-4;x+=11){var c2=avC(x);tx+='M'+f(x)+' '+f(c2-A.R-2)+'l3 -5M'+f(x+4)+' '+f(c2+A.R+2)+'l3 5'}
  g+='<path class="vt" d="'+tx+'"/>';
  /* the vacuum trace axis */
  g+='<path class="ax sD" d="M60 420H660"/><text class="t" x="60" y="'+(mob?398:404)+'">VACUUM</text>';
  g+='</g>';
  /* blood cells, shown once flow returns (kept clear of the catheter band) */
  var bc='';for(i=0;i<34;i++){var side=i%2?1:-1,dy=side*(40+avRand(i+5)*30);bc+='<ellipse class="rbc" data-u="'+f(avRand(i+71)*1000)+'" data-dy="'+f(dy)+'" cx="0" cy="0" rx="6" ry="3"/>'}
  g+='<g id="avbc">'+bc+'</g>';
  /* the clot, and its core once inside the catheter */
  g+='<path class="clot" id="avclot" d="M0 0Z"/>';
  g+='<g clip-path="url(#avcat)"><path class="core" id="avcore" d="M0 0Z"/></g>';
  /* the catheter: outer walls, inner lumen line, the marker band near the tip */
  g+='<g id="avcath"><path class="cw" id="avcw" d=""/><path class="cl" id="avcl" d=""/><path class="mb" id="avmb" d=""/></g>';
  /* the vacuum trace: uniform (steady), then cyclical (varied pressure and intervals), then released */
  var tr='M60 420',xx=60;tr+='C90 420 100 468 130 468H300';
  var per=[34,22,40,26,30,20,36,28],dp=[0,26,10,30,6,22,14,28];xx=300;
  for(i=0;i<per.length&&xx<600;i++){var nx=Math.min(600,xx+per[i]);tr+='L'+f((xx+nx)/2)+' '+f(468-24-dp[i]*.6)+'L'+f(nx)+' 468';xx=nx}
  tr+='C624 468 632 420 660 420';
  g+='<path class="trc" id="avtr" d="'+tr+'"/>';
  /* labels, one per step, in the clear band above the vessel */
  var ly=mob?92:98,lx=mob?24:A.x0+4;
  g+='<g id="avl0"><text class="a" x="'+lx+'" y="'+ly+'">CATHETER AT THE CLOT</text></g>';
  g+='<g id="avl1"><text class="a u" x="'+lx+'" y="'+ly+'">UNIFORM VACUUM ENGAGES IT</text></g>';
  g+='<g id="avl2"><text class="a u" x="'+lx+'" y="'+ly+'">CYCLICAL VACUUM DRAWS IT IN</text></g>';
  g+='<g id="avl3"><text class="a b" x="'+lx+'" y="'+ly+'">FLOW RESTORED</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#avBase .sD"),fade:$$("#avBase text,#avBase .vt",svg),clot:$("#avclot",svg),core:$("#avcore",svg),cr:$("#avcr",svg),
    cw:$("#avcw",svg),cl:$("#avcl",svg),mb:$("#avmb",svg),cath:$("#avcath",svg),tr:dl("#avtr"),trE:$("#avtr",svg),bc:$$("#avbc .rbc",svg),
    l0:$("#avl0",svg),l1:$("#avl1",svg),l2:$("#avl2",svg),l3:$("#avl3",svg)};
  E.bc.forEach(function(c){c._u=+c.getAttribute("data-u")/1000;c._dy=+c.getAttribute("data-dy")});
  var lastB=-1,A=AV,f=function(n){return (+n).toFixed(1)};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function cath(tip){var w='',l='',x,a=A.x0-20;
    w='M'+a+' '+f(avC(a)-A.cr);for(x=a+8;x<tip;x+=8)w+='L'+f(x)+' '+f(avC(x)-A.cr);w+='L'+f(tip)+' '+f(avC(tip)-A.cr)+'L'+f(tip)+' '+f(avC(tip)+A.cr);
    for(x=tip-8;x>a;x-=8)w+='L'+f(x)+' '+f(avC(x)+A.cr);w+='L'+a+' '+f(avC(a)+A.cr);
    l='M'+a+' '+f(avC(a)-A.cr+5);for(x=a+8;x<tip;x+=8)l+='L'+f(x)+' '+f(avC(x)-A.cr+5);l+='L'+f(tip)+' '+f(avC(tip)-A.cr+5);
    l+='M'+a+' '+f(avC(a)+A.cr-5);for(x=a+8;x<tip;x+=8)l+='L'+f(x)+' '+f(avC(x)+A.cr-5);l+='L'+f(tip)+' '+f(avC(tip)+A.cr-5);
    var m0=tip-30,m1=tip-18;E.mb.setAttribute("d",'M'+f(m0)+' '+f(avC(m0)-A.cr)+'L'+f(m1)+' '+f(avC(m1)-A.cr)+'L'+f(m1)+' '+f(avC(m1)+A.cr)+'L'+f(m0)+' '+f(avC(m0)+A.cr)+'Z');
    E.cw.setAttribute("d",w);E.cl.setAttribute("d",l);
    E.cr.setAttribute("x","0");E.cr.setAttribute("width",f(tip));E.cr.setAttribute("y",f(avC(tip)-A.cr+5));E.cr.setAttribute("height",f(2*A.cr-10));}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=(b*(el.tagName==="text"?1:.9)).toFixed(3)})}
    var reach=seg(p,.03,.2),eng=seg(p,.3,.42),cyc=seg(p,.53,.72),flw=seg(p,.78,.92);
    /* catheter: advances to the clot (step 1), then backs off a little once the clot is in (step 4) */
    var tip=A.tip0+(A.tip1-A.tip0)*(1-Math.pow(1-reach,3))+eng*8-flw*70;cath(tip);op(E.cath,b);
    /* clot: pulled against the mouth (2), then drawn in whole (3) */
    var ca=A.cl0-(A.cl0-(A.tip1+8))*eng,cb=A.cl1-(A.cl1-(A.tip1+8))*cyc;
    E.clot.setAttribute("d",avClot(ca,cb,eng));op(E.clot,b*(cb-ca>3?1:0));
    var ing=(A.cl1-A.cl0)*cyc*1.55,t0=A.tip1+8,c0=t0-ing;var cd='M'+f(t0)+' '+f(avC(t0)-A.cr+7);
    for(var x=t0;x>=c0;x-=8)cd+='L'+f(x)+' '+f(avC(x)-A.cr+7+(avRand(x)-.5)*2);for(x=c0;x<=t0;x+=8)cd+='L'+f(x)+' '+f(avC(x)+A.cr-7-(avRand(x+3)-.5)*2);
    E.core.setAttribute("d",ing>2?cd+'Z':'M0 0Z');op(E.core,b*(1-flw));
    /* the vacuum trace draws on from step 2 through step 4 */
    op(E.trE,b*seg(p,.28,.31));draw(E.tr,seg(p,.3,.9));
    /* blood cells stream once the vessel is open */
    E.bc.forEach(function(c){var u=(c._u+flw*.9)%1,x=A.x0+30+u*(A.x1-A.x0-60);c.setAttribute("cx",f(x));c.setAttribute("cy",f(avC(x)+c._dy));
      op(c,b*flw*Math.min(1,(x-A.x0)/50,(A.x1-x)/50))});
    op(E.l0,b*(1-seg(p,.24,.29)));op(E.l1,b*seg(p,.3,.35)*(1-seg(p,.48,.52)));op(E.l2,b*seg(p,.53,.58)*(1-seg(p,.73,.77)));op(E.l3,b*seg(p,.79,.84));
  };
}
