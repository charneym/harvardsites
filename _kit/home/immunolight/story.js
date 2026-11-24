/* The story scene (DB/BL): Immunolight's own mechanism (immunolight.com Cancer, Technology and Clinical Trials pages: the
   phosphor device and methoxsalen, a psoralen, are injected into the tumor; low-dose X-ray, which penetrates tissue, is
   converted by the phosphor particles into UV light inside the tumor; the UV activates the psoralen, which kills the cell
   in a pathway intended to generate an immune response). ONE fine-line scene that fills the frame: tissue layers above,
   the tumor as a lobed outline of cells, phosphor particles as small hexagons in the logo blue, psoralen as small dots in
   the logo orange, immune cells as rings in the logo red.
   Frame 0 is complete: tissue and tumor drawn, the needle in place, particles and psoralen already spreading.
   Step 1 (inject): the needle enters, the particles and psoralen spread through the tumor.
   Step 2 (convert): low-dose X-ray lines pass down through the tissue; each particle lights up with a violet UV halo.
   Step 3 (activate): the psoralen turns active, the tumor cells dim and shrink, immune cells move in from the edges.
   Driven by scrubbed progress. No dash draws on non-scaling strokes (DR4; nssfix.js is inlined too). */
var SCW=760,SCH=560,TCX=400,TCY=332;
function tr(a){return 186+15*Math.sin(3*a+.4)+9*Math.sin(5*a+1.3)}
function tumorPath(k){var d="";for(var i=0;i<=96;i++){var a=i/96*Math.PI*2,r=tr(a)*k;d+=(i?"L":"M")+(TCX+Math.cos(a)*r).toFixed(1)+" "+(TCY+Math.sin(a)*r*.82).toFixed(1)}return d+"Z"}
function inT(x,y,m){var dx=x-TCX,dy=(y-TCY)/.82,a=Math.atan2(dy,dx);return Math.sqrt(dx*dx+dy*dy)<tr(a)*(m||.86)}
var CELLS=(function(){var o=[];for(var j=0,y=TCY-160;y<=TCY+160;y+=31,j++){for(var x=TCX-215;x<=TCX+215;x+=34){var xx=x+(j%2?17:0);if(inT(xx,y,.86))o.push([xx,y])}}return o})();
var PH=(function(){var o=[],s=11;function r(){s=(s*16807)%2147483647;return s/2147483647}while(o.length<18){var x=TCX-190+r()*380,y=TCY-140+r()*280;if(inT(x,y,.74))o.push([x,y])}return o})();
var PS=(function(){var o=[],s=29;function r(){s=(s*16807)%2147483647;return s/2147483647}while(o.length<34){var x=TCX-200+r()*400,y=TCY-150+r()*300;if(inT(x,y,.8))o.push([x,y])}return o})();
var IMM=[[56,214,196,250],[44,336,178,330],[76,452,214,428],[744,206,604,246],[752,344,624,338],[708,470,582,440]];
var XR=[250,292,334,376,418,460,502,544];
var NDL={x0:742,y0:52,x1:470,y1:286};
function hexPath(r){var d="";for(var k=0;k<6;k++){var a=k*Math.PI/3;d+=(k?"L":"M")+(Math.cos(a)*r).toFixed(2)+" "+(Math.sin(a)*r).toFixed(2)}return d+"Z"}
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'30 30 740 530':'20 30 740 525')+'" aria-hidden="true"><defs><radialGradient id="uvg"><stop offset="0" stop-color="#a49cff" stop-opacity=".9"/><stop offset=".45" stop-color="#7d74ff" stop-opacity=".35"/><stop offset="1" stop-color="#7d74ff" stop-opacity="0"/></radialGradient></defs>';
  /* tissue layers above the tumor */
  for(var i=0;i<3;i++){var y=92+i*16,d="";for(var x=50;x<=730;x+=10)d+=(x===50?"M":"L")+x+" "+(y+3*Math.sin(x/58+i)).toFixed(1);g+='<path class="'+(i?'wo':'wl')+' sD" d="'+d+'"/>'}
  g+='<path class="wl sD" id="scT" d="'+tumorPath(1)+'"/>';
  g+='<g id="scC">';CELLS.forEach(function(c){g+='<circle class="cell" cx="'+c[0].toFixed(1)+'" cy="'+c[1].toFixed(1)+'" r="12"/>'});g+='</g>';
  g+='<g id="scX">';XR.forEach(function(x){g+='<path class="xr" d="M'+x+' 40V'+(TCY+170)+'"/>'});g+='</g>';
  g+='<g id="scU">';PH.forEach(function(p){g+='<circle class="uv" cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="34" fill="url(#uvg)"/>'});g+='</g>';
  g+='<g id="scP">';PS.forEach(function(p){g+='<circle class="psr" cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="4.2"/>'});g+='</g>';
  g+='<g id="scH">';PH.forEach(function(p){g+='<path class="phs" d="'+hexPath(7)+'" transform="translate('+p[0].toFixed(1)+' '+p[1].toFixed(1)+')"/>'});g+='</g>';
  g+='<g id="scN"><path class="nd" d="M'+NDL.x0+' '+NDL.y0+'L'+NDL.x1+' '+NDL.y1+'"/></g>';
  g+='<g id="scI">';IMM.forEach(function(){g+='<g class="imc"><circle r="12"/><circle class="imk" r="4.5"/></g>'});g+='</g>';
  var ly=mob?548:540,lx=mob?50:40;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PARTICLES + PSORALEN':'PHOSPHOR PARTICLES AND PSORALEN INJECTED')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'X-RAY CONVERTED TO UV':'LOW-DOSE X-RAY, CONVERTED TO UV LIGHT')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PSORALEN ACTIVATED':'PSORALEN ACTIVATED, IMMUNE RESPONSE')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),xr:dl("#scX .xr"),nd:dl("#scN .nd"),cells:$$("#scC .cell",svg),uv:$$("#scU .uv",svg),ps:$$("#scP .psr",svg),ph:$$("#scH .phs",svg),im:$$("#scI .imc",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,NP=PH.length;
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-b)).toFixed(1)})}
    /* step 1: the needle reaches in, then withdraws; particles and psoralen spread out from its tip */
    var nIn=1,nOut=sm(seg(p,.22,.32)),nl=E.nd[0];
    if(nl){nl[0].style.strokeDashoffset=(nl[1]*(1-nIn*(1-nOut))).toFixed(1);op(nl[0],b)}
    var sp=.4+.6*sm(seg(p,0,.22));
    E.ph.forEach(function(el,i){var q=PH[i],x=NDL.x1+(q[0]-NDL.x1)*sp,y=NDL.y1+(q[1]-NDL.y1)*sp;el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");op(el,b)});
    var act=sm(seg(p,.7,.82));
    E.ps.forEach(function(el,i){var q=PS[i],x=NDL.x1+(q[0]-NDL.x1)*sp,y=NDL.y1+(q[1]-NDL.y1)*sp;el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));
      el.setAttribute("r",(4.2+1.6*act).toFixed(2));op(el,b)});
    svg.classList.toggle("act",act>.5);
    /* step 2: X-ray passes down through the tissue; each particle lights up with a UV halo */
    E.xr.forEach(function(a,i){var d=sm(seg(p,.36+i*.012,.5+i*.012)),f=1-.65*sm(seg(p,.8,.94));a[0].style.strokeDashoffset=(a[1]*(1-d)).toFixed(1);op(a[0],b*(d>0?f:0))});
    E.uv.forEach(function(el,i){var t=i/NP,u=sm(seg(p,.46+.1*t,.56+.1*t))*(1-.5*sm(seg(p,.84,.96)));op(el,b*u)});
    /* step 3: tumor cells dim and shrink, immune cells move in from the edges */
    var die=sm(seg(p,.74,.9));
    E.cells.forEach(function(el,i){var k=1-.3*die*((i*7)%5/4);el.setAttribute("r",(12*k).toFixed(2));op(el,b*(1-.55*die))});
    E.im.forEach(function(el,i){var q=IMM[i],m=sm(seg(p,.76+i*.02,.9+i*.015)),x=q[0]+(q[2]-q[0])*m,y=q[1]+(q[3]-q[1])*m;el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");op(el,b*m)});
    op(E.l1,b*seg(p,.04,.12)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.8,.88));
  };
}
