/* the story scene (BL/BY/DB/DR/CK): how thermoforming works, in one cross-section that stays on screen for all four steps (the
   circuit board and its components are always drawn, and the ceramic sheet is always there, so no frame is empty):
   Step 1 (sheet): a flat, fully sintered sheet above the board; its dashed core line stands for the aligned boron nitride platelets.
   Step 2 (heat): a heater warms it; the sheet glows orange (boron oxide matrix softens above ~450 °C; forming at 500–700 °C).
   Step 3 (form): pressure or vacuum draws the sheet down; it drapes over the board and conforms to every component.
   Step 4 (cool): the sheet cools back to white, and heat rises from the components through it and away.
   Sources: fouriercmc.com; Ceramic Tech Today, 1 Nov 2022, on Bice and Erb, Advanced Materials (DOI 10.1002/adma.202203939);
   everythingRF, IMS 2026 (a flat sheet formed over a PCB assembly). Schematic, not to scale. Driven by the scrubbed story progress. */
var FXL={
 d:{vb:"40 22 640 358",tx:60,ty:96,sc:1,lx:60,ly:44,la:"start",cap:[360,368],tmp:true},
 m:{vb:"0 0 400 300",tx:8,ty:92,sc:.64,lx:200,ly:34,la:"middle",cap:[200,286],tmp:false}};
/* components on the board (local figure units): [x0, x1, top] */
var FXC=[[100,200,174],[250,320,192],[370,500,160]],FXB=210,FXT=7;
function fxProfile(){
  /* the formed sheet's underside: along the board, up and over each component, with small chamfers */
  var P=[[60,FXB]],k=4;
  FXC.forEach(function(c){P.push([c[0]-k,FXB],[c[0],FXB-k],[c[0],c[2]+k],[c[0]+k,c[2]],[c[1]-k,c[2]],[c[1],c[2]+k],[c[1],FXB-k],[c[1]+k,FXB])});
  P.push([540,FXB]);return P;
}
function fxOffset(P,h){
  /* the midline of a sheet of thickness 2h lying on P (offset up / outward by h, mitred at each corner) */
  var n=P.length,O=[];
  for(var i=0;i<n;i++){var a=P[Math.max(0,i-1)],b=P[i],c=P[Math.min(n-1,i+1)];
    var d1=[b[0]-a[0],b[1]-a[1]],d2=[c[0]-b[0],c[1]-b[1]];if(i===0)d1=d2;if(i===n-1)d2=d1;
    var l1=Math.hypot(d1[0],d1[1])||1,l2=Math.hypot(d2[0],d2[1])||1;
    var n1=[d1[1]/l1,-d1[0]/l1],n2=[d2[1]/l2,-d2[0]/l2],m=[n1[0]+n2[0],n1[1]+n2[1]],lm=Math.hypot(m[0],m[1])||1;m=[m[0]/lm,m[1]/lm];
    var cs=Math.max(.5,m[0]*n1[0]+m[1]*n1[1]);O.push([b[0]+m[0]*h/cs,b[1]+m[1]*h/cs])}
  return O;
}
var FXF=fxOffset(fxProfile(),FXT/2);
/* the flat sheet: the same points spread along a straight line by arc length (thermoforming stretches it a little) */
var FXA=(function(){var L=[0],i;for(i=1;i<FXF.length;i++)L.push(L[i-1]+Math.hypot(FXF[i][0]-FXF[i-1][0],FXF[i][1]-FXF[i-1][1]));
  var T=L[L.length-1];return FXF.map(function(p,i){return [24+552*L[i]/T,72]})})();
function fxPath(f){var d='';for(var i=0;i<FXF.length;i++){var a=FXA[i],b=FXF[i];
  /* drape: the middle meets the components first, the ends settle last */
  var lag=Math.abs(b[0]-300)/300*.35,g=Math.max(0,Math.min(1,(f-lag*.6)/(1-lag*.6)));g=g*g*(3-2*g);
  d+=(i?'L':'M')+(a[0]+(b[0]-a[0])*g).toFixed(1)+' '+(a[1]+(b[1]-a[1])*g).toFixed(1)}return d}
function scene(){
  var mob=MOBILE(),L=mob?FXL.m:FXL.d,g='',an=' text-anchor="'+L.la+'"',i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+L.vb+'" aria-hidden="true">';
  g+='<g id="fxAll"><g transform="translate('+L.tx+' '+L.ty+') scale('+L.sc+')">';
  /* the board, its traces and the components */
  g+='<rect class="brd" x="40" y="'+FXB+'" width="520" height="12"/>';
  g+='<path class="trc" d="M48 216H92M208 216H242M328 216H362M508 216H552"/>';
  FXC.forEach(function(c){g+='<rect class="cmp" x="'+c[0]+'" y="'+c[2]+'" width="'+(c[1]-c[0])+'" height="'+(FXB-c[2])+'"/>';
    for(var x=c[0]+10;x<c[1]-6;x+=12)g+='<path class="pin" d="M'+x+' '+(FXB-3)+'V'+FXB+'"/>'});
  /* heater and its warmth (step 2) */
  g+='<g id="fxH"><rect class="htr" x="80" y="22" width="400" height="8"/>';
  for(i=0;i<6;i++){var x=104+i*70;g+='<path class="hw" d="M'+x+' 38c-6 5 6 9 0 14s6 9 0 12"/>'}
  if(L.tmp)g+='<text class="a" x="492" y="31">500–700 °C</text>';
  g+='</g>';
  /* pressure (step 3): arrows that travel down with the sheet */
  g+='<g id="fxP">';[150,300,450].forEach(function(x){g+='<path class="pa" d="M'+x+' 6V44M'+(x-7)+' 36L'+x+' 45L'+(x+7)+' 36"/>'});g+='</g>';
  /* the sheet: glow, body and its aligned-platelet core */
  var d0=fxPath(0);
  g+='<path id="fxSG" class="shg" d="'+d0+'"/><path id="fxS" class="sh" d="'+d0+'"/><path id="fxSC" class="shc" d="'+d0+'"/>';
  /* heat leaving through the formed sheet (step 4) */
  g+='<g id="fxO">';FXC.forEach(function(c){var cx=(c[0]+c[1])/2,top=c[2]-FXT-6;
    [-22,0,22].forEach(function(o){if(c[1]-c[0]<90&&o)return;g+='<path class="ho sD" d="M'+(cx+o)+' '+top+'c-7 -10 7 -18 0 -28s7 -18 0 -30"/>'})});
  g+='</g>';
  g+='</g></g>';
  g+='<text class="t" id="fxCap" x="'+L.cap[0]+'" y="'+L.cap[1]+'" text-anchor="middle">'+(mob?'CIRCUIT BOARD':'CIRCUIT BOARD AND COMPONENTS')+'</text>';
  g+='<g id="lb0"><text class="a"'+an+' x="'+L.lx+'" y="'+L.ly+'">'+(mob?'A SINTERED SHEET':'SHEET · ALIGNED BORON NITRIDE IN BORON OXIDE')+'</text></g>';
  g+='<g id="lb1"><text class="a"'+an+' x="'+L.lx+'" y="'+L.ly+'">'+(mob?'HEAT · 500–700 °C':'HEAT · THE MATRIX SOFTENS AND THE SHEET GIVES')+'</text></g>';
  g+='<g id="lb2"><text class="a"'+an+' x="'+L.lx+'" y="'+L.ly+'">'+(mob?'FORM · PRESSURE OR VACUUM':'FORM · PRESSURE OR VACUUM, DOWN TO 0.2 MM')+'</text></g>';
  g+='<g id="lb3"><text class="a"'+an+' x="'+L.lx+'" y="'+L.ly+'">'+(mob?'HEAT OUT · SIGNAL THROUGH':'COOL · HEAT OUT, SIGNAL THROUGH')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={all:$("#fxAll",svg),cap:$("#fxCap",svg),H:$("#fxH",svg),P:$("#fxP",svg),S:$("#fxS",svg),SG:$("#fxSG",svg),SC:$("#fxSC",svg),O:dl("#fxO .ho"),
    l0:$("#lb0",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastF=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function mix(a,b,t){return 'rgb('+a.map(function(x,i){return Math.round(x+(b[i]-x)*t)}).join(',')+')'}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.all,.25+.75*b);op(E.cap,b);
    /* step 2: heat (and it fades as the formed part cools in step 4) */
    var ht=seg(p,.26,.4)*(1-seg(p,.74,.86));
    op(E.H,seg(p,.25,.33)*(1-seg(p,.5,.57)));
    E.S.style.stroke=mix([233,228,220],[255,106,38],ht);op(E.SG,ht*.9);
    /* step 3: pressure, and the sheet drapes onto the board */
    var f=seg(p,.53,.72);
    if(Math.abs(f-lastF)>.0005){lastF=f;var d=fxPath(f);E.S.setAttribute("d",d);E.SG.setAttribute("d",d);E.SC.setAttribute("d",d)}
    op(E.P,seg(p,.5,.55)*(1-seg(p,.7,.75)));E.P.setAttribute("transform","translate(0 "+(f*96).toFixed(1)+")");
    /* step 4: heat leaves through the cooled sheet */
    draw(E.O,seg(p,.8,.93));
    op(E.l0,b*(1-seg(p,.2,.26)));op(E.l1,b*seg(p,.27,.33)*(1-seg(p,.45,.51)));op(E.l2,b*seg(p,.52,.58)*(1-seg(p,.7,.76)));op(E.l3,b*seg(p,.77,.83));
  };
}
