/* The story scene (DB): the MagStone procedure as Maguro Surgical, NIH award 1R43DK143847 and Ge et al. (Nat Commun 2023)
   describe it, drawn as ONE continuous engraved scene and scrubbed by the pinned story. A kidney calyx in section, the
   ureteroscope entering through the infundibulum. Step 1: the laser breaks the stone into fragments that scatter through
   the calyx. Step 2: a catheter injects the hydrogel precursors; the gel sets around every fragment, which turns dark with
   its iron-oxide coat. Step 3: the magnetic wire extends, the coated fragments are drawn onto its tip, and the wire
   withdraws them in bulk into the scope. No invented numbers. */
var SCW=760,SCH=548;
var FR=(function(){var s=7,r=function(){s=(s*16807)%2147483647;return s/2147483647},L=[],i,k;
  for(i=0;i<22;i++){var big=i<5,rad=big?13+r()*6:5+r()*6,n=5+Math.floor(r()*3),pts=[];
    for(k=0;k<n;k++){var a=k/n*Math.PI*2+r()*.5,rr=rad*(.7+r()*.45);pts.push([Math.cos(a)*rr,Math.sin(a)*rr*.85])}
    var a0=r()*Math.PI*2,d0=Math.sqrt(r())*34;
    var a1=r()*Math.PI*2,d1=.25+Math.sqrt(r())*.75;
    var a2=(i/22)*Math.PI*2+r()*.3,d2=(big?24:16)+r()*14;
    L.push({p:pts,rad:rad,x0:540+Math.cos(a0)*d0,y0:262+Math.sin(a0)*d0*.8,
      x1:490+Math.cos(a1)*d1*160,y1:258+Math.sin(a1)*d1*118,
      x2:Math.cos(a2)*d2,y2:Math.sin(a2)*d2*.8,rot:r()*360,dl:r()})}
  return L})();
var TIPX=400,TIPY=262,WX0=232;
var CALOUT='M20 214H232C258 214 270 186 292 150C330 88 410 64 500 70C618 78 702 150 704 258C706 370 620 448 498 450C404 452 330 420 294 368C272 338 258 310 232 310H20';
var CALIN='M20 230H236C268 230 284 200 304 168C340 110 414 88 500 94C604 102 680 166 682 258C684 356 608 426 498 428C412 430 344 400 310 352C290 324 270 294 236 294H20';
function memScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="calwall"><path fill-rule="evenodd" clip-rule="evenodd" d="'+CALOUT+'V214Z'+CALIN+'V230Z"/></clipPath></defs>';
  g+='<g id="scBase">';
  g+='<g class="hatw" clip-path="url(#calwall)">';for(i=0;i<84;i++){var hx0=150+i*7;g+='<path class="hat" d="M'+hx0+' 40L'+(hx0-70)+' 480"/>'}g+='</g>';
  g+='<path class="wall sD" d="'+CALOUT+'"/><path class="wall2 sD" d="'+CALIN+'"/>';
  g+='<path class="frm sD" d="M20 492H740"/>';
  g+='<text class="t" x="430" y="52">KIDNEY CALYX · IN SECTION</text>';
  g+='<text class="t" x="20" y="200">INFUNDIBULUM</text>';
  g+='</g>';
  g+='<g id="scScope"><rect class="scp" x="0" y="244" width="'+WX0+'" height="36"/><path class="scl" d="M0 252H'+(WX0-14)+'M0 272H'+(WX0-14)+'"/><circle class="lens" cx="'+(WX0-7)+'" cy="254" r="3.5"/>';
  g+='<text class="t" x="20" y="334">URETEROSCOPE</text></g>';
  g+='<g id="scLas"><path class="las" d="M'+WX0+' 262L528 262"/><circle class="lasd" cx="532" cy="262" r="9"/></g>';
  g+='<path class="cat" id="scCat" d="M'+WX0+' 272H'+(WX0+1)+'"/>';
  g+='<g id="scGel">';for(i=0;i<5;i++){g+='<ellipse class="gel" cx="'+(492+((i*53)%90)-45)+'" cy="'+(258+((i*37)%70)-35)+'" rx="10" ry="8"/>'}g+='</g>';
  g+='<g id="scWire"><path class="wr" d="M'+WX0+' '+TIPY+'H'+(WX0+1)+'"/><rect class="mag" x="0" y="'+(TIPY-8)+'" width="40" height="16" rx="8"/></g>';
  g+='<g id="scFr">';
  FR.forEach(function(q,j){var d='M'+q.p.map(function(p){return f(p[0])+' '+f(p[1])}).join('L')+'Z';
    g+='<g class="fr"><path class="ct" d="'+d+'" transform="scale(1.3)"/><path class="st" d="'+d+'"/><path class="stl" d="M'+f(q.p[0][0]*.5)+' '+f(q.p[0][1]*.5)+'L'+f(q.p[2][0]*.4)+' '+f(q.p[2][1]*.4)+'"/></g>'});
  g+='</g>';
  g+='<g id="lb1"><text class="a" x="20" y="524">LASER FRAGMENTATION · PIECES AND DUST</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="524">MAGNETIC HYDROGEL COATS EVERY FRAGMENT</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="524">MAGNETIC WIRE · RETRIEVAL IN BULK</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text,#scScope text",svg),hat:$("#scBase .hatw",svg),
    scope:$("#scScope",svg),las:$("#scLas",svg),lasd:$("#scLas .lasd",svg),cat:$("#scCat",svg),gel:$$(".gel",svg),
    wire:$("#scWire .wr",svg),mag:$("#scWire .mag",svg),wg:$("#scWire",svg),
    fr:$$("#scFr .fr",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var ct=E.fr.map(function(el){return $(".ct",el)}),st=E.fr.map(function(el){return $(".st",el)});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function lerp(a,b,t){return a+(b-a)*t}
  function ez(t){return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.fade.forEach(function(el){el.style.opacity=(b*.9).toFixed(3)})}
    draw(E.base,b);op(E.hat,b);op(E.scope,b);
    /* 1: the laser fires, the stone breaks and scatters */
    var las=seg(p,.05,.1)*(1-seg(p,.24,.29)),brk=ez(seg(p,.12,.3));
    op(E.las,b*las*(.75+.25*Math.sin(p*260)));E.lasd.setAttribute("r",(7+4*Math.abs(Math.sin(p*190))).toFixed(1));
    /* 2: the catheter reaches in, the gel blooms and sets, the fragments take the dark coat */
    var cat=seg(p,.34,.42)*(1-seg(p,.6,.66)),gel=seg(p,.4,.54),gelOut=seg(p,.56,.64),coat=seg(p,.44,.6);
    E.cat.setAttribute("d","M"+WX0+" 272H"+(WX0+1+150*cat).toFixed(1));op(E.cat,b*(cat>0?1:0));
    E.gel.forEach(function(e,i){var gi=Math.min(1,Math.max(0,gel*1.6-i*.12));e.setAttribute("rx",(10+118*gi).toFixed(1));e.setAttribute("ry",(8+84*gi).toFixed(1));op(e,b*Math.min(gi*1.4,1)*(1-gelOut)*.6)});
    /* 3: the wire extends, the fragments are drawn onto the tip, then everything withdraws */
    var ext=ez(seg(p,.66,.74)),pull=ez(seg(p,.72,.88)),wd=ez(seg(p,.91,1));
    var tipx=lerp(WX0,TIPX,ext)-(TIPX-WX0+60)*wd;
    E.wire.setAttribute("d","M"+WX0+" "+TIPY+"H"+Math.max(WX0+1,tipx).toFixed(1));
    E.mag.setAttribute("x",(tipx-20).toFixed(1));op(E.wg,b*(ext>0?1:0)*(1-seg(p,.96,1)));
    E.fr.forEach(function(el,i){var q=FR[i],dly=q.dl*.3,pp=ez(Math.min(1,Math.max(0,(pull-dly)/(1-dly))));
      var x=lerp(q.x0,q.x1,brk),y=lerp(q.y0,q.y1,brk),r=q.rot*brk;
      x=lerp(x,tipx+q.x2,pp);y=lerp(y,TIPY+q.y2,pp);
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+r.toFixed(1)+")");
      var c=Math.min(1,Math.max(0,coat*1.5-q.dl*.5));op(ct[i],b*c);st[i].style.fill=c>.5?"#3a2a1c":"";
      op(el,b*(1-Math.min(1,Math.max(0,(WX0+30-x)/30))))});
    op(E.l1,b*seg(p,.08,.16)*(1-seg(p,.32,.37)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.67)));op(E.l3,b*seg(p,.72,.8));
  };
}
