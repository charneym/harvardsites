/* The story scene (BL/BY/DB): BiRed's method as ONE continuous scene, drawn in fine line. A cross-section of the prone
   imaging table with the breast hanging freely through its opening (biredimaging.com/technology-description: "steady-state
   IRI in the prone position, allowing for direct optical access to the inframammary fold and thermally isolated breasts").
   Step 1: a tumor's metabolic heat spreads as isotherms to the skin, and three infrared cameras view the surface
   ("multi-view infrared (IR) and optical images", NSF 2451205). Step 2: the surface becomes a 3D model, contour slices
   with a temperature at every point (the "3D temperature extraction"). Step 3: the physics-based AI solves back from the
   surface temperatures to the heat source and marks its size and location. Every element is driven by the scrubbed
   story progress. */
var SCW=760,SCH=520;
/* the breast outline: a pendant dome under the table opening, as a cubic pair */
var DOME=[[262,72],[262,232],[302,352],[380,352],[458,352],[498,232],[498,72]];
function bz(a,b,c,d,t){var u=1-t;return [u*u*u*a[0]+3*u*u*t*b[0]+3*u*t*t*c[0]+t*t*t*d[0],u*u*u*a[1]+3*u*u*t*b[1]+3*u*t*t*c[1]+t*t*t*d[1]]}
function domeAt(t){return t<.5?bz(DOME[0],DOME[1],DOME[2],DOME[3],t*2):bz(DOME[3],DOME[4],DOME[5],DOME[6],t*2-1)}
/* half-width of the dome at height y (left/right symmetric about x=380) */
function halfW(y){var best=0;for(var i=0;i<=200;i++){var p=domeAt(i/400);if(p[1]<=y)best=380-p[0]}return best}
var TUM=[414,222];
function heat(x,y){var dx=x-TUM[0],dy=y-TUM[1];return Math.exp(-(dx*dx+dy*dy)/(2*95*95))}
function tcol(v){/* cool stone -> logo pink -> near white */
  var a=[109,95,94],b=[255,159,168],c=[255,232,234],k=v<.6?v/.6:1,m=v<.6?0:(v-.6)/.4,o=[];
  for(var i=0;i<3;i++)o.push(Math.round(v<.6?a[i]+(b[i]-a[i])*k:b[i]+(c[i]-b[i])*m));return "rgb("+o.join(",")+")"}
var SCN=0;
function memScene(o){
  var u='b'+(++SCN),f=function(n){return (+n).toFixed(1)},g='',i;
  var dpath='M'+DOME[0].join(' ')+'C'+DOME[1].join(' ')+' '+DOME[2].join(' ')+' '+DOME[3].join(' ')+'C'+DOME[4].join(' ')+' '+DOME[5].join(' ')+' '+DOME[6].join(' ');
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="dclip'+u+'"><path d="'+dpath+'Z"/></clipPath>'+
     '<radialGradient id="hglow'+u+'" cx="'+TUM[0]+'" cy="'+TUM[1]+'" r="150" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ee3b45" stop-opacity=".55"/><stop offset=".45" stop-color="#de1f2a" stop-opacity=".2"/><stop offset="1" stop-color="#de1f2a" stop-opacity="0"/></radialGradient></defs>';
  /* ---- base: the table with its opening, the breast outline, the captions ---- */
  g+='<g id="scBase">';
  g+='<path class="tb sD" d="M40 60H262M498 60H720M40 72H262M498 72H720M262 60V72M498 60V72"/>';
  g+='<path class="dm sD" d="'+dpath+'"/>';
  g+='<text class="t" x="40" y="44">PRONE IMAGING TABLE</text>';
  g+='</g>';
  /* ---- heat: a glow and isotherms around the tumor, clipped to the breast ---- */
  g+='<g id="scHeat" clip-path="url(#dclip'+u+')"><rect id="hg" x="200" y="60" width="360" height="300" fill="url(#hglow'+u+')"/>';
  [26,46,70,98,130].forEach(function(r,k){g+='<ellipse class="iso" data-k="'+k+'" cx="'+TUM[0]+'" cy="'+TUM[1]+'" rx="'+r+'" ry="'+f(r*.92)+'"/>'});
  g+='</g>';
  g+='<circle id="tum" cx="'+TUM[0]+'" cy="'+TUM[1]+'" r="9"/>';
  /* ---- three infrared cameras below, each with its two view rays to the skin ---- */
  var CAM=[[132,420,38],[380,452,0],[628,420,-38]],TG=[[.1,.42],[.3,.7],[.58,.9]];
  g+='<g id="scCam">';
  CAM.forEach(function(c,k){
    var a=domeAt(TG[k][0]),b=domeAt(TG[k][1]);
    g+='<g class="cam" data-k="'+k+'">';
    g+='<path class="ray" d="M'+c[0]+' '+c[1]+'L'+f(a[0])+' '+f(a[1])+'M'+c[0]+' '+c[1]+'L'+f(b[0])+' '+f(b[1])+'"/>';
    g+='<g transform="translate('+c[0]+' '+c[1]+') rotate('+c[2]+')"><rect class="cb" x="-17" y="0" width="34" height="26"/><rect class="cl" x="-11" y="-9" width="22" height="9"/><path class="cg" d="M-8 -9H8"/></g>';
    g+='</g>';
  });
  g+='</g>';
  /* ---- the 3D surface model: contour slices across the breast, with temperature points on their front halves ---- */
  g+='<g id="scSurf">';
  var YS=[112,152,192,232,272,312],pts=[];
  YS.forEach(function(y,j){var hw=halfW(y),ry=Math.max(6,hw*.16);
    g+='<ellipse class="sl" data-j="'+j+'" cx="380" cy="'+y+'" rx="'+f(hw)+'" ry="'+f(ry)+'"/>';
    var n=Math.max(7,Math.round(hw/9));
    for(i=0;i<=n;i++){var th=Math.PI*(i/n),x=380-hw*Math.cos(th),yy=y+ry*Math.sin(th);pts.push([x,yy,heat(x,yy),j])}});
  pts.forEach(function(p,k){g+='<circle class="pt" data-j="'+p[3]+'" data-h="'+p[2].toFixed(3)+'" cx="'+f(p[0])+'" cy="'+f(p[1])+'" r="'+f(2.4+2.2*p[2])+'" fill="'+tcol(Math.min(1,p[2]*1.25))+'"/>'});
  g+='</g>';
  /* ---- the solution: rays from the warmest surface points back to the source, a crosshair and the solved size ---- */
  var warm=pts.slice().sort(function(a,b){return b[2]-a[2]}).slice(0,7);
  g+='<g id="scSol">';
  warm.forEach(function(p){g+='<path class="bk sD3" d="M'+f(p[0])+' '+f(p[1])+'L'+TUM[0]+' '+TUM[1]+'"/>'});
  g+='<path class="xh sD3" d="M'+(TUM[0]-150)+' '+TUM[1]+'H'+(TUM[0]-22)+'M'+(TUM[0]+22)+' '+TUM[1]+'H'+(TUM[0]+120)+'M'+TUM[0]+' '+(TUM[1]-140)+'V'+(TUM[1]-22)+'M'+TUM[0]+' '+(TUM[1]+22)+'V'+(TUM[1]+120)+'"/>';
  g+='<circle class="sv sD3" cx="'+TUM[0]+'" cy="'+TUM[1]+'" r="16"/>';
  g+='<path class="ld sD3" d="M'+(TUM[0]+12)+' '+(TUM[1]-12)+'L'+(TUM[0]+40)+' '+(TUM[1]-40)+'Q'+(TUM[0]+52)+' '+(TUM[1]-52)+' '+(TUM[0]+70)+' '+(TUM[1]-52)+'H710"/>';
  g+='<text class="a" id="solT" x="528" y="'+(TUM[1]-62)+'">SIZE · LOCATION</text>';
  g+='</g>';
  /* ---- step labels (fade with their step), in the clear band under the cameras ---- */
  g+='<g id="lb1"><text class="a" x="40" y="508">HEAT REACHES THE SKIN · THREE INFRARED VIEWS</text></g>';
  g+='<g id="lb2"><text class="a" x="40" y="508">3D SURFACE · A TEMPERATURE AT EVERY POINT</text></g>';
  g+='<g id="lb3"><text class="a" x="40" y="508">HEAT SOURCE SOLVED · NO TUMOR DATA GIVEN</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p.style.strokeDashoffset=L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),sol:dl("#scSol .sD3"),solT:$("#solT",svg),
    hg:$("#hg",svg),iso:$$(".iso",svg),tum:$("#tum",svg),
    cam:$$(".cam",svg),rays:dl(".ray"),
    sl:$$(".sl",svg),pt:$$(".pt",svg).map(function(c){return {el:c,j:+c.getAttribute("data-j"),h:+c.getAttribute("data-h")}}),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function cl(x){return x<0?0:x>1?1:x}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: the tumor warms, isotherms spread to the skin, the cameras come in and their rays draw */
    var warmIn=seg(p,0,.12),cams=seg(p,.03,.17),toModel=seg(p,.36,.56),solve=seg(p,.7,.9);
    op(E.tum,b*(.35+.65*warmIn)*(1-.55*toModel+.55*solve));
    op(E.hg,b*warmIn*(1-.6*toModel)*(1-.5*solve));
    E.iso.forEach(function(el,k){op(el,b*cl(warmIn*2.2-k*.25)*(1-.75*toModel)*(1-.6*solve))});
    E.cam.forEach(function(el,k){op(el,b*cl(cams*2.2-k*.3)*(1-.55*toModel))});
    E.rays.forEach(function(a,k){var v=cl(cams*2-.25-Math.floor(k/1)*.12);a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1);op(a[0],b*(1-.8*toModel))});
    /* step 2: contour slices sweep down the breast, temperature points light along each */
    E.sl.forEach(function(el,j){op(el,b*cl(toModel*2.2-j*.2)*(1-.5*solve))});
    E.pt.forEach(function(P){var v=cl(toModel*2.2-P.j*.2-.1);op(P.el,b*v*(1-.35*solve*(1-P.h)))});
    /* step 3: rays back to the source, the crosshair and the solved size */
    draw(E.sol,solve);op(E.solT,b*seg(p,.84,.92));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.46,.54)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.84,.9));
  };
}
