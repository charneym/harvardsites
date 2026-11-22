/* The story scene (BL/BY/DB): BioMimir's product in use (biomimir.ca /home and the MTI and CDL news posts), as ONE
   continuous engraved cross-section of skin: epidermis, dermis with collagen and small vessels, lobulated fat, and a
   deep cavity wound. Step 1: the wound is inflamed (dots along its wall). Step 2: MatriFlex flows in as a liquid and
   rises to fill the cavity flush, then sets (its surface flattens and hardens to a line). Step 3: new tissue fibres grow
   up into the gel as it resorbs (the gel fades), and a fresh epidermis closes over the top without a scar notch.
   Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520,TOPY=150,CL=262,CR=508,CB=372;
var STO=(function(){
  var s=2021,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},i;
  /* collagen strokes in the dermis (outside the cavity) */
  var col=[];for(i=0;i<70;i++){var x=50+R()*660,y=196+R()*120;if(x>CL-14&&x<CR+14&&y<cavY(x)+12)continue;col.push([x,y,18+R()*26,R()*6.28])}
  /* vessels */
  var ves=[];for(i=0;i<14;i++){var vx=60+R()*640,vy=210+R()*100;if(vx>CL-20&&vx<CR+20&&vy<cavY(vx)+16)continue;ves.push([vx,vy,2.2+R()*2.4])}
  /* fat lobules (packed circles in the hypodermis band) */
  var fat=[],tries=0;while(fat.length<56&&tries<5000){tries++;var fx=46+R()*668,fy=352+R()*120,fr=11+R()*9,ok=true;
    if(fx>CL&&fx<CR&&fy-fr<cavY(fx)+6)ok=false;
    for(i=0;i<fat.length&&ok;i++){if(Math.hypot(fx-fat[i][0],fy-fat[i][1])<fr+fat[i][2]+3)ok=false}
    if(ok&&fy+fr<482)fat.push([fx,fy,fr])}
  /* inflammation dots along the cavity wall */
  var inf=[];for(i=0;i<34;i++){var t=R(),ix=CL+6+(CR-CL-12)*t,iy=cavY(ix);var o=8+R()*16;inf.push([ix,iy+o*.6,R()])}
  /* regrowth fibres inside the cavity */
  var reg=[];for(i=0;i<16;i++){var rx=CL+18+(CR-CL-36)*(i+.5)/16,rb=cavY(rx)-4;reg.push([rx,rb,R()])}
  return {col:col,ves:ves,fat:fat,inf:inf,reg:reg};
})();
function cavY(x){/* cavity floor (an ellipse half) */var u=(x-(CL+CR)/2)/((CR-CL)/2);if(Math.abs(u)>=1)return TOPY;return TOPY+(CB-TOPY)*Math.sqrt(1-u*u)}
function cavPath(){var p="M"+CL+" "+TOPY,i;for(i=1;i<=48;i++){var x=CL+(CR-CL)*i/48;p+="L"+x.toFixed(1)+" "+cavY(x).toFixed(1)}return p}
function memScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="gclip"><rect id="gfill" x="0" y="'+CB+'" width="'+SCW+'" height="0"/></clipPath></defs>';
  g+='<g id="scBase"><path class="frm sD" d="M24 20H736M24 500H736"/>';
  g+='<text class="t" x="24" y="10">SKIN CROSS-SECTION · SCHEMATIC</text>';
  /* skin surface with the cavity, epidermis line, dermis/fat boundary, block sides */
  g+='<path class="bl sD" d="M40 '+TOPY+'H'+CL+'"/><path class="bl sD" d="M'+CR+' '+TOPY+'H720"/>';
  g+='<path class="bl sD wall" d="'+cavPath()+'"/>';
  g+='<path class="bl thin sD" d="M40 '+(TOPY+16)+'H'+(CL+3)+'M'+(CR-3)+' '+(TOPY+16)+'H720"/>';
  var bnd="M40 336";for(i=1;i<=40;i++){var bx=40+680*i/40;bnd+="L"+bx.toFixed(1)+" "+(336+5*Math.sin(i*1.3)).toFixed(1)}
  g+='<path class="bl thin sD" d="'+bnd+'"/><path class="bl sD" d="M40 '+TOPY+'V486H720V'+TOPY+'"/></g>';
  g+='<g id="scTis">';
  STO.col.forEach(function(c){var x=c[0],y=c[1],L=c[2];g+='<path class="cf" d="M'+x.toFixed(1)+' '+y.toFixed(1)+'q'+(L/2).toFixed(1)+' '+(4*Math.sin(c[3])).toFixed(1)+' '+L.toFixed(1)+' 0"/>'});
  STO.ves.forEach(function(v){g+='<circle class="vs" cx="'+v[0].toFixed(1)+'" cy="'+v[1].toFixed(1)+'" r="'+v[2].toFixed(1)+'"/>'});
  STO.fat.forEach(function(f){g+='<circle class="ft" cx="'+f[0].toFixed(1)+'" cy="'+f[1].toFixed(1)+'" r="'+f[2].toFixed(1)+'"/>'});
  g+='</g><g id="scInf">';
  STO.inf.forEach(function(d,k){g+='<circle class="inf" data-k="'+k+'" cx="'+d[0].toFixed(1)+'" cy="'+d[1].toFixed(1)+'" r="'+(o.mob?4.4:3.4)+'"/>'});
  g+='</g><g id="scGel"><path class="gel" clip-path="url(#gclip)" d="'+cavPath()+'Z"/><path class="gs" id="gsurf" d="M'+CL+' '+TOPY+'H'+CR+'"/></g>';
  g+='<g id="scReg">';
  STO.reg.forEach(function(r,k){var x=r[0],y0=r[1],h=y0-TOPY-10;var d="M"+x.toFixed(1)+" "+y0.toFixed(1);for(var j=1;j<=8;j++){d+="L"+(x+5*Math.sin(j*1.1+r[2]*6)).toFixed(1)+" "+(y0-h*j/8).toFixed(1)}g+='<path class="rg" data-k="'+k+'" d="'+d+'"/>'});
  g+='<path class="ep" id="epi" d="M'+(CL-2)+' '+(TOPY+16)+'H'+(CR+2)+'"/></g>';
  g+='<g id="lb1"><text class="a" x="24" y="48">A DEEP, INFLAMED WOUND</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="48">MATRIFLEX · LIQUID, THEN SOLID</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="48">TISSUE REGROWS AS IT RESORBS</text></g>';
  g+='<text class="t k1" x="24" y="512">● INFLAMMATION</text><text class="t k2" x="'+(o.mob?270:200)+'" y="512">■ MATRIFLEX GEL</text>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, .k1, .k2",svg),tis:$("#scTis",svg),
    inf:$$(".inf",svg).map(function(el){return {el:el,d:STO.inf[+el.getAttribute("data-k")]}}),
    gf:$("#gfill",svg),gel:$(".gel",svg),gs:$("#gsurf",svg),
    rg:dl(".rg"),ep:dl("#epi"),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    op(E.tis,b*.95);
    var inflame=seg(p,.04,.22),calm=seg(p,.62,.86),fill=seg(p,.36,.56),set=seg(p,.5,.6),grow=seg(p,.68,.94),res=seg(p,.74,1);
    E.inf.forEach(function(x){op(x.el,b*seg(inflame,x.d[2]*.6,x.d[2]*.6+.4)*(1-calm))});
    /* the gel rises from the cavity floor to the surface (a wobbly liquid line), then sets flat */
    var top=CB-(CB-TOPY+2)*fill;E.gf.setAttribute("y",top.toFixed(1));E.gf.setAttribute("height",(CB-top+4).toFixed(1));
    op(E.gel,b*Math.min(1,fill*4)*(1-.7*res));
    var wob=(1-set)*3,w0=CL+(CR-CL)*.5;var hw=Math.max(0,(w0-CL)*Math.sqrt(Math.max(0,1-Math.pow((top-TOPY)/(CB-TOPY),2))));
    E.gs.setAttribute("d","M"+(w0-hw).toFixed(1)+" "+top.toFixed(1)+"Q"+(w0-hw/2).toFixed(1)+" "+(top-wob).toFixed(1)+" "+w0.toFixed(1)+" "+top.toFixed(1)+"T"+(w0+hw).toFixed(1)+" "+top.toFixed(1));
    op(E.gs,b*Math.min(1,fill*4)*(1-res));
    draw(E.rg,grow);draw(E.ep,seg(p,.84,.98));E.rg.forEach(function(a){op(a[0],b*Math.min(1,grow*25))});var ev=seg(p,.84,.98);E.ep.forEach(function(a){op(a[0],b*Math.min(1,ev*25))});
    op(E.l1,b*seg(p,.08,.16)*(1-seg(p,.28,.34)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
