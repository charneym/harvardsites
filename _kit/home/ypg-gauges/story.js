/* The story scene (BL/BY/DB): YPG's reversible Go, No Go plug gauge, as ypg-ltd.com describes Go, No Go gauging ("fool-proof
   nature", "a secure basis for inspection procedures") and as their own photograph shows it (green Go collar marked 10.00, red
   No Go collar marked 10.20, black hexagon handle). ONE side elevation kept on screen: a workpiece in section with a bore, and the
   gauge, which moves along the scrubbed timeline (no cross-dissolve of separate figures).
   1 Bore: the gauge waits in front of the bore; the two limits are named.
   2 Go: the green Go member slides fully into the bore; the bore walls light green.
   3 No Go: the gauge comes back, is turned end for end, and the red No Go member stops at the mouth of the bore.
   4 Certified: the gauge rests and the UKAS calibration certificate (laboratory 0068) is drawn in.
   Sizes are illustrative (from the 10.00 / 10.20 gauge in YPG's photograph); the members are drawn larger than scale. */
var YG={bx:500,bw:236,by:96,bh:308,cy:250,bore:34,go:30,ng:39,pin:118,col:34,hd:70,cr:46,hh:52};
function ygGauge(){
  var L=YG,g='',hx=L.hd,cx0=hx+L.col,px=cx0+L.pin;
  /* pins (steel), right = Go, left = No Go */
  g+='<rect class="pin" x="'+cx0+'" y="'+(-L.go)+'" width="'+L.pin+'" height="'+(2*L.go)+'"/>';
  g+='<path class="pinh" d="M'+(cx0+4)+' '+(-L.go*.45)+'H'+(px-6)+'"/>';
  g+='<path class="pinc" d="M'+(px-5)+' '+(-L.go)+'L'+px+' '+(-L.go+5)+'V'+(L.go-5)+'L'+(px-5)+' '+L.go+'"/>';
  g+='<rect class="pin" x="'+(-px)+'" y="'+(-L.ng)+'" width="'+L.pin+'" height="'+(2*L.ng)+'"/>';
  g+='<path class="pinh" d="M'+(-px+6)+' '+(-L.ng*.45)+'H'+(-cx0-4)+'"/>';
  g+='<path class="pinc" d="M'+(-px+5)+' '+(-L.ng)+'L'+(-px)+' '+(-L.ng+5)+'V'+(L.ng-5)+'L'+(-px+5)+' '+L.ng+'"/>';
  /* collars, chamfered towards the pin */
  var C=L.cr;g+='<path class="cg" d="M'+hx+' '+(-C)+'H'+(cx0-10)+'L'+cx0+' '+(-C+10)+'V'+(C-10)+'L'+(cx0-10)+' '+C+'H'+hx+'Z"/><path class="cgh" d="M'+(hx+3)+' '+(-C*.45)+'H'+(cx0-3)+'"/>';
  g+='<path class="cr" d="M'+(-hx)+' '+(-C)+'H'+(-cx0+10)+'L'+(-cx0)+' '+(-C+10)+'V'+(C-10)+'L'+(-cx0+10)+' '+C+'H'+(-hx)+'Z"/><path class="crh" d="M'+(-cx0+3)+' '+(-C*.45)+'H'+(-hx-3)+'"/>';
  /* the black hexagon handle: three faces seen side on */
  var H=L.hh;g+='<path class="hd" d="M'+(-hx)+' '+(-H)+'H'+hx+'V'+H+'H'+(-hx)+'Z"/><path class="hdf" d="M'+(-hx)+' '+(-H*.4)+'H'+hx+'M'+(-hx)+' '+(H*.4)+'H'+hx+'"/><path class="hdh" d="M'+(-hx+6)+' '+(-H*.72)+'H'+(hx-6)+'"/>';
  g+='<text class="mk" id="ygMk" x="0" y="6" text-anchor="middle">YPG</text>';
  return g;
}
function ygScene(o){
  var g='',mob=o.mob,i,L=YG,top=L.cy-L.bore,bot=L.cy+L.bore;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 50 760 470" aria-hidden="true"><defs>'+
     '<linearGradient id="ygSt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8d9096"/><stop offset=".22" stop-color="#eef0f2"/><stop offset=".42" stop-color="#b9bcc1"/><stop offset=".78" stop-color="#6f7278"/><stop offset="1" stop-color="#9a9da2"/></linearGradient>'+
     '<linearGradient id="ygHd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a3b40"/><stop offset=".3" stop-color="#55575d"/><stop offset=".55" stop-color="#16171a"/><stop offset="1" stop-color="#0b0b0d"/></linearGradient>'+
     '<linearGradient id="ygGn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1c9a2a"/><stop offset=".35" stop-color="#5fd06a"/><stop offset=".6" stop-color="#0d7a16"/><stop offset="1" stop-color="#05510b"/></linearGradient>'+
     '<linearGradient id="ygRd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c9171b"/><stop offset=".35" stop-color="#ff6a6c"/><stop offset=".6" stop-color="#b40f13"/><stop offset="1" stop-color="#6e080a"/></linearGradient>'+
     '<pattern id="ygHt" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V10" stroke="rgba(242,242,240,.34)" stroke-width="1"/></pattern></defs>';
  /* the workpiece in section: hatched above and below the bore */
  g+='<g class="wp"><rect class="wps" x="'+L.bx+'" y="'+L.by+'" width="'+L.bw+'" height="'+(top-L.by)+'"/><rect class="wps" x="'+L.bx+'" y="'+bot+'" width="'+L.bw+'" height="'+(L.by+L.bh-bot)+'"/>'+
     '<path class="wpo" d="M'+L.bx+' '+top+'V'+L.by+'H'+(L.bx+L.bw)+'V'+top+'M'+L.bx+' '+bot+'V'+(L.by+L.bh)+'H'+(L.bx+L.bw)+'V'+bot+'"/></g>';
  g+='<path class="bw" id="ygBw" d="M'+L.bx+' '+top+'H'+(L.bx+L.bw)+'M'+L.bx+' '+bot+'H'+(L.bx+L.bw)+'"/>';
  g+='<path class="cl0" d="M20 '+L.cy+'H740"/>';
  g+='<path class="mouth" id="ygMo" d="M'+(L.bx-1)+' '+(top-14)+'V'+(bot+14)+'"/>';
  g+='<text class="t" x="'+L.bx+'" y="'+(L.by-18)+'">'+(mob?"BORE · 10.00–10.20":"BORE · LIMITS 10.00 / 10.20 MM")+'</text>';
  /* the gauge */
  g+='<g id="ygG">'+ygGauge()+'</g>';
  /* small member labels, only while the gauge rests in front of the bore */
  g+='<g id="ygLb"><text class="t gl" id="ygLg" x="0" y="'+(L.cy-L.cr-16)+'" text-anchor="middle">GO</text><text class="t rl" id="ygLr" x="0" y="'+(L.cy-L.cr-16)+'" text-anchor="middle">NO GO</text></g>';
  /* the tolerance band on a scale from 9.90 to 10.30 mm: Go at the lower limit, No Go at the upper */
  var sx0=40,sx1=440,X=function(v){return (sx0+(v-9.9)/.4*(sx1-sx0)).toFixed(1)};
  g+='<g id="ygSc"><rect class="band" x="'+X(10)+'" y="390" width="'+(X(10.2)-X(10))+'" height="20"/><path class="sca" d="M'+sx0+' 400H'+sx1+'"/><path class="sct" d="';
  for(i=0;i<=8;i++)g+='M'+X(9.9+i*.05)+' '+(i%2?395:391)+'V'+(i%2?405:409);
  g+='"/>';
  [[9.9,"9.90"],[10.1,"10.10"],[10.3,"10.30"]].forEach(function(t){g+='<text class="t sn" x="'+X(t[0])+'" y="'+(mob?440:434)+'" text-anchor="middle">'+t[1]+'</text>'});
  g+='<path class="lg" id="ygSg" d="M'+X(10)+' 376V414"/><path class="lr" id="ygSr" d="M'+X(10.2)+' 376V414"/>'+
     '<text class="t gl" x="'+X(10)+'" y="364" text-anchor="middle">GO · 10.00</text><text class="t rl" x="'+X(10.2)+'" y="364" text-anchor="middle">NO GO · 10.20</text></g>';
  /* the calibration certificate */
  g+='<g id="ygCt"><rect class="ct" x="28" y="334" width="236" height="118"/><path class="ctl" d="M46 358H150M46 376H246M46 392H220M46 408H236"/>'+
     '<text class="ctt" x="46" y="438">UKAS 0068</text><path class="tick" id="ygTk" d="M200 430L214 442L240 414"/></g>';
  var C=mob?["LIMITS 10.00 / 10.20","GO · 10.00 PASSES","NO GO · 10.20 STOPS","UKAS LAB 0068"]:["TWO LIMITS · ONE GAUGE","GO · 10.00 PASSES FULLY","NO GO · 10.20 STOPS AT THE MOUTH · PART GOOD","CALIBRATED · UKAS LABORATORY 0068 · ISO/IEC 17025"];
  for(i=0;i<4;i++)g+='<text class="cl cap" id="ygC'+i+'" x="'+(mob?28:28)+'" y="'+(mob?500:496)+'">'+C[i]+'</text>';
  return g+'</svg>';
}
function scene(){return ygScene({mob:MOBILE()?1:0})}
function ygE(u){u=u<0?0:u>1?1:u;return u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2}
function storyDraw(svg){
  var L=YG,E={mk:$("#ygMk",svg),g:$("#ygG",svg),bw:$("#ygBw",svg),mo:$("#ygMo",svg),lg:$("#ygLg",svg),lr:$("#ygLr",svg),ct:$("#ygCt",svg),tk:$("#ygTk",svg),
    sc:$("#ygSc",svg),sg:$("#ygSg",svg),sr:$("#ygSr",svg),cap:[0,1,2,3].map(function(k){return $("#ygC"+k,svg)}),base:$$(".wp,.cl0,svg>.t",svg)};
  var rest=L.bx-L.hd-L.col-L.pin-30,inn=rest+30+L.pin,stop=L.bx-L.hd-L.col-L.pin;
  var TL=E.tk.getTotalLength?E.tk.getTotalLength():40;E.tk.style.strokeDasharray=TL+" "+TL;
  var lastB=-1;
  function op(el,v){if(el)el.style.opacity=(+v).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(el){op(el,b)})}
    /* gauge x and end-for-end turn along the timeline */
    var a=ygE(seg(p,.28,.45)),r=ygE(seg(p,.5,.56)),f=ygE(seg(p,.56,.64)),s=ygE(seg(p,.64,.71)),w=ygE(seg(p,.78,.86));
    var x=rest+(inn-rest)*a;x=x+(rest-x)*r;var sx=1-2*f;x=x+(stop-rest)*s*(1-w);
    E.g.setAttribute("transform","translate("+x.toFixed(1)+","+L.cy+") scale("+sx.toFixed(3)+",1)");E.mk.setAttribute("transform","scale("+(sx<0?-1:1)+",1)");E.mk.style.opacity=Math.min(1,Math.abs(sx)*3).toFixed(2);
    /* bore walls light green while the Go member is in; the mouth flashes red when No Go stops */
    var gi=seg(p,.36,.45)*(1-seg(p,.5,.54));E.bw.style.stroke=gi>.01?"rgba(76,192,78,"+(.35+.6*gi).toFixed(3)+")":"";
    op(E.mo,b*seg(p,.69,.72)*(1-seg(p,.8,.86)));
    var lb=b*(1-seg(p,.22,.27));op(E.lg,lb);op(E.lr,lb);
    E.lg.setAttribute("x",(x+L.hd+L.col/2).toFixed(1));E.lr.setAttribute("x",(x-L.hd-L.col/2).toFixed(1));
    op(E.sc,b*(1-seg(p,.75,.79)));E.sg.style.strokeWidth=(2+3*seg(p,.3,.36)*(1-seg(p,.5,.55))).toFixed(2);E.sr.style.strokeWidth=(2+3*seg(p,.66,.71)*(1-seg(p,.75,.79))).toFixed(2);
    var cv=seg(p,.8,.88);op(E.ct,b*cv);E.tk.style.strokeDashoffset=(TL*(1-seg(p,.88,.95))).toFixed(1);
    var W=[[0,.27],[.27,.5],[.5,.76],[.76,1.01]];
    E.cap.forEach(function(c,k){var A=W[k][0],Z=W[k][1];op(c,b*(k===0?1:seg(p,A,A+.04))*(k===3?1:(1-seg(p,Z-.04,Z))))});
    op(E.g,b);
  };
}
