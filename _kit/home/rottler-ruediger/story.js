/* The story scene (BL/BY/DB): one insulating-glass spacer frame made on R&R's fully automated line, as rur-online.com describes the
   "vier Player für die vollautomatische Rahmenproduktion". ONE plan view kept on screen, the same four profile lengths carried through
   all three steps (no cross-fades):
   1 Romillo: the spacer bar runs in, is cut to four lengths and the corner keys are pushed into the ends.
   2 Rotosort: the Spacerbot lays the single profiles into the Rotosort, which goes over to the Roweldo.
   3 Roweldo: the four lengths are assembled into the frame and the corners ultrasonically welded.
   Sizes are illustrative. */
var RR={L:[220,140,220,140],t:12,by:232,bx:40,gap:16,fx:384,fy:330};
function rrScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 150 520 316" aria-hidden="true"><defs>'+
     '<pattern id="rrHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(242,245,245,.2)" stroke-width="1"/></pattern><clipPath id="rrCl"><rect x="0" y="100" width="560" height="420"/></clipPath></defs><g clip-path="url(#rrCl)">';
  /* the saw (step 1) */
  g+='<g id="rrSw"><circle class="saw" r="22"/><path class="sawt" d=""/></g>';
  /* the Rotosort rack (step 2): four slots */
  g+='<g id="rrRk"><rect class="blk" x="34" y="296" width="250" height="122"/><rect class="hat" x="34" y="296" width="250" height="122"/>';
  for(i=0;i<4;i++)g+='<path class="slot" d="M44 '+(316+i*28)+'H274"/>';g+='</g>';
  /* the four profile lengths, each with its two corner keys */
  for(i=0;i<4;i++)g+='<g id="rrP'+i+'" class="pr"><rect class="prf" x="'+(-RR.L[i]/2)+'" y="'+(-RR.t/2)+'" width="'+RR.L[i]+'" height="'+RR.t+'"/><rect class="key" x="'+(-RR.L[i]/2-8)+'" y="-4" width="10" height="8"/><rect class="key" x="'+(RR.L[i]/2-2)+'" y="-4" width="10" height="8"/></g>';
  g+='</g>';
  /* the four welded corners (step 3) */
  g+='<g id="rrWd">';[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(function(c){g+='<circle class="wd" cx="'+(RR.fx-(mob?34:0)+c[0]*(RR.L[0]/2))+'" cy="'+(RR.fy+c[1]*(RR.L[1]/2))+'" r="9"/>'});g+='</g>';
  var T=function(id,x,y,s,a){return '<text class="t" id="'+id+'" x="'+x+'" y="'+y+'"'+(a?' text-anchor="'+a+'"':'')+'>'+s+'</text>'};
  g+=T("rrLb",40,RR.by-22,mob?"PROFIL":"ABSTANDHALTERPROFIL");
  g+=T("rrLk",40,RR.by+34,mob?"ECKWINKEL":"ECKWINKEL GESTECKT");
  if(!mob)g+=T("rrLr",34,286,"ROTOSORT");
  g+=T("rrLw",RR.fx-(mob?34:0),RR.fy+RR.L[1]/2+36,mob?"RAHMEN":"RAHMEN · ULTRASCHALLGESCHWEISST","middle");
  var L=mob?["ROMILLO","ROTOSORT","ROWELDO"]:["ROMILLO · ZUSCHNITT UND ECKWINKELSTECKEN","SPACERBOT · INS ROTOSORT-KARUSSELL","ROWELDO · RAHMENMONTAGE, ULTRASCHALL"];
  for(i=0;i<3;i++)g+='<text class="t cl cap" id="rrC'+i+'" x="8" y="458">'+L[i]+'</text>';
  return g+'</svg>';
}
function scene(){return rrScene({mob:MOBILE()?1:0})}
function rrE(u){u=u<0?0:u>1?1:u;return u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2}
function storyDraw(svg){
  var R=RR,Q=function(s){return svg.querySelector(s)};
  var E={sw:Q("#rrSw"),swt:Q("#rrSw .sawt"),rk:Q("#rrRk"),wd:Q("#rrWd"),P:[0,1,2,3].map(function(k){return Q("#rrP"+k)}),K:[0,1,2,3].map(function(k){return [].slice.call(Q("#rrP"+k).querySelectorAll(".key"))}),
    L:{b:Q("#rrLb"),k:Q("#rrLk"),r:Q("#rrLr"),w:Q("#rrLw")},C:[0,1,2].map(function(k){return Q("#rrC"+k)})};
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function f1(v){return v.toFixed(1)}
  /* positions: A in the bar (end to end, then opened up at the cuts), B in the rack slots, C on the frame */
  var A=[],x=R.bx;R.L.forEach(function(l){A.push([x+l/2,R.by,0]);x+=l});
  var Aopen=[],xo=R.bx;R.L.forEach(function(l){Aopen.push([xo+l/2,R.by,0]);xo+=l+R.gap});
  var scale=.48;/* the bar is long: it is shown at the same scale as the rack and frame by laying it in two rows */
  A=[[R.bx+110,R.by,0],[R.bx+290,R.by,0],[R.bx+110,R.by+0.0001,0],[R.bx+290,R.by,0]];
  var B=[[159,316,0],[129,344,0],[159,372,0],[129,400,0]];
  var FX=svg.classList.contains("mob")?R.fx-34:R.fx;
  var C=[[FX,R.fy-R.L[1]/2,0],[FX+R.L[0]/2,R.fy,90],[FX,R.fy+R.L[1]/2,0],[FX-R.L[0]/2,R.fy,90]];
  return function(p,bb){
    if(!svg.isConnected)return;
    /* 1: the bar comes in as one length (pieces 0..3 end to end at one tenth gaps closed), the saw cuts at three points, keys go in */
    var run=rrE(seg(p,.03,.14)),cuts=seg(p,.14,.26),keys=seg(p,.22,.3);
    var in1=[],xx=R.bx-520*(1-run);R.L.forEach(function(l,i){var open=Math.min(1,Math.max(0,cuts*3-i+.0))*R.gap*.0;in1.push([xx+l/2,R.by,0]);xx+=l+(cuts*3>i+1?6:0)});
    /* the bar is long (720): scale it down onto the row while it is a bar, to fit; pieces keep their real length afterwards */
    var bscale=.66;
    var m2=rrE(seg(p,.38,.6)),m3=rrE(seg(p,.7,.9));
    E.P.forEach(function(el,i){var a=in1[i],b=B[i],c=C[i];
      var ax=R.bx+(a[0]-R.bx)*bscale,ay=a[1],s1=bscale+(1-bscale)*m2;
      var x=ax+(b[0]-ax)*m2,y=ay+(b[1]-ay)*m2,ang=0,s=s1;
      if(m3>0){x=b[0]+(c[0]-b[0])*m3;y=b[1]+(c[1]-b[1])*m3;ang=c[2]*m3;s=1}
      el.setAttribute("transform","translate("+f1(x)+" "+f1(y)+") rotate("+f1(ang)+") scale("+f1(s)+" 1)");op(el,bb*seg(p,.02,.06));
      E.K[i].forEach(function(k){op(k,keys)})});
    /* saw position: at the current cut */
    var cn=Math.min(2,Math.floor(cuts*3)),cx=R.bx+(R.L.slice(0,cn+1).reduce(function(s,v){return s+v},0))*bscale+cn*6;
    E.sw.setAttribute("transform","translate("+f1(cx)+" "+(R.by-30)+")");op(E.sw,bb*seg(p,.12,.15)*(1-seg(p,.28,.32)));
    var ra=p*2000;E.swt.setAttribute("d","M"+f1(18*Math.cos(ra))+" "+f1(18*Math.sin(ra))+"L0 0");
    op(E.rk,bb*seg(p,.34,.4)*(1-seg(p,.74,.8)*.7));op(E.L.r,bb*seg(p,.36,.4)*(1-seg(p,.66,.7)));
    op(E.wd,bb*seg(p,.9,.96));
    op(E.L.b,bb*seg(p,.06,.1)*(1-seg(p,.3,.34)));op(E.L.k,bb*seg(p,.24,.28)*(1-seg(p,.34,.38)));op(E.L.w,bb*seg(p,.9,.95));
    var W=[[0,1/3],[1/3,2/3],[2/3,1.01]];
    E.C.forEach(function(c,i){var a=W[i][0],z=W[i][1];op(c,bb*(i===0?1:seg(p,a,a+.03))*(i===2?1:(1-seg(p,z-.03,z))))});
  };
}
